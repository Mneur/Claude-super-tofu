#!/usr/bin/env python3
"""
Fantech Offering · PDF Renderer

Renders the master HTML template into a 264.6×396.9mm PDF using Playwright Chromium.
This is the ONLY approved rendering method. Do not use wkhtmltopdf.

Usage:
    python3 render.py <input.html> <output.pdf>

Or import as a module:
    from render import render_offering
    render_offering('input.html', 'output.pdf')
"""

import sys
import os
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright


def render_offering(html_path: str, pdf_path: str) -> dict:
    """
    Render an Offering HTML to PDF with the exact spec.

    Returns: dict with verification info {'pages': int, 'page_size': str, 'success': bool}
    """
    html_abs = os.path.abspath(html_path)
    pdf_abs = os.path.abspath(pdf_path)

    if not os.path.exists(html_abs):
        raise FileNotFoundError(f"HTML file not found: {html_abs}")

    print(f"📄 Rendering: {html_abs}")
    print(f"📤 Output:    {pdf_abs}")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f'file://{html_abs}', wait_until='networkidle')
        page.pdf(
            path=pdf_abs,
            width='264.6mm',           # LOCKED — do not change
            height='396.9mm',          # LOCKED — do not change
            margin={
                'top': '0',
                'right': '0',
                'bottom': '0',
                'left': '0',
            },
            print_background=True,
            prefer_css_page_size=True,  # CRITICAL — respects @page size
        )
        browser.close()

    # Verify output
    result = verify_pdf(pdf_abs)
    return result


def verify_pdf(pdf_path: str) -> dict:
    """Verify the PDF meets the spec."""
    try:
        out = subprocess.run(
            ['pdfinfo', pdf_path],
            capture_output=True,
            text=True,
            check=True,
        )
        info = out.stdout

        pages = None
        page_size = None
        for line in info.split('\n'):
            if line.startswith('Pages:'):
                pages = int(line.split(':')[1].strip())
            elif line.startswith('Page size:'):
                page_size = line.split(':', 1)[1].strip()

        # Check
        size_ok = page_size and '750' in page_size and '1125' in page_size
        pages_ok = pages == 1

        result = {
            'pages': pages,
            'page_size': page_size,
            'pages_ok': pages_ok,
            'size_ok': size_ok,
            'success': pages_ok and size_ok,
        }

        print(f"\n📊 Verification:")
        print(f"   Pages:     {pages}  {'✅' if pages_ok else '❌ (must be 1)'}")
        print(f"   Page size: {page_size}  {'✅' if size_ok else '❌ (must be 750×1125 pts)'}")

        if not result['success']:
            print(f"\n⚠️  Verification FAILED. Check the template and content.")
        else:
            print(f"\n✅ All checks passed.")

        return result
    except subprocess.CalledProcessError as e:
        print(f"❌ pdfinfo failed: {e}")
        return {'success': False, 'error': str(e)}


def generate_comparison(new_pdf: str, reference_png: str, output_png: str):
    """Generate side-by-side comparison: new PDF vs golden reference."""
    from PIL import Image, ImageDraw, ImageFont

    # Render new PDF to image
    new_dir = os.path.dirname(new_pdf) or '.'
    new_basename = os.path.splitext(os.path.basename(new_pdf))[0]
    subprocess.run(
        ['pdftoppm', '-r', '130', '-png', new_pdf, f'{new_dir}/{new_basename}_preview'],
        check=True,
    )
    new_png = f'{new_dir}/{new_basename}_preview-1.png'

    ref = Image.open(reference_png)
    new = Image.open(new_png)

    # Match heights
    target_h = max(ref.size[1], new.size[1])
    def fit(im, h):
        ratio = h / im.size[1]
        return im.resize((int(im.size[0] * ratio), h), Image.LANCZOS)

    ref_r = fit(ref, target_h)
    new_r = fit(new, target_h)

    gap = 40
    combined = Image.new('RGB',
        (ref_r.size[0] + new_r.size[0] + gap, target_h + 60),
        (240, 240, 240))

    try:
        font = ImageFont.truetype(
            '/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf', 28)
    except:
        font = ImageFont.load_default()

    draw = ImageDraw.Draw(combined)
    draw.text((20, 15), 'REFERENCE (v18 Golden)', fill=(200, 0, 0), font=font)
    draw.text((ref_r.size[0] + gap + 20, 15), 'NEW', fill=(0, 100, 200), font=font)

    combined.paste(ref_r, (0, 60))
    combined.paste(new_r, (ref_r.size[0] + gap, 60))
    combined.save(output_png)
    print(f"📊 Comparison saved: {output_png}")

    # Cleanup intermediate
    if os.path.exists(new_png):
        os.remove(new_png)


def main():
    if len(sys.argv) < 3:
        print("Usage: python3 render.py <input.html> <output.pdf>")
        print("Optional: python3 render.py <input.html> <output.pdf> --compare")
        sys.exit(1)

    html_path = sys.argv[1]
    pdf_path = sys.argv[2]

    result = render_offering(html_path, pdf_path)

    if '--compare' in sys.argv:
        # Find reference
        repo_root = Path(__file__).parent.parent
        ref_png = repo_root / 'reference' / 'SUPERMAXFIT_v18_GOLDEN.png'
        if ref_png.exists():
            comp_png = pdf_path.replace('.pdf', '_vs_GOLDEN.png')
            generate_comparison(pdf_path, str(ref_png), comp_png)
        else:
            print(f"⚠️  Reference not found at {ref_png}, skipping comparison")

    sys.exit(0 if result.get('success') else 1)


if __name__ == '__main__':
    main()
