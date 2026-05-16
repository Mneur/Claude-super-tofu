# 🔒 STANDARD SPEC · v18 Golden Reference

> Lock date: May 16, 2026
> Reference PDF: `reference/SUPERMAXFIT_v18_GOLDEN.pdf`
> **THESE RULES CANNOT BE VIOLATED.** No exceptions.

---

## ⛓ Hard Rules (违反任何一条都是事故)

### Rule 1: Workflow startup — 3 mandatory checks

Before generating any new Offering, you MUST:

```bash
# 1. Confirm page size will be 264.6 × 396.9 mm
#    (NOT A4. NEVER A4.)

# 2. Verify brand-colors.json has the requested theme
cat brand-assets/brand-colors.json | jq '.themes."<theme-id>"'

# 3. Verify Brief file is complete (all required fields filled)
```

### Rule 2: Strict no-private-modifications

- User says change A → only change A
- See other improvable things → LIST them as suggestions, do not act
- "Keeping unchanged" is a valid action

### Rule 3: No designing from imagination

- Color: always read from `brand-colors.json` (NEVER guess hex values)
- Spacing/dimensions: use the locked values in this doc
- Always check `reference/SUPERMAXFIT_v18_GOLDEN.png` to confirm visual layout

### Rule 4: No excuses

- "Tool limits" → false, full VIP access
- "Chromium can't do XYZ" → it can, find the right way
- "Page is too crowded to fit" → compress padding/margins/line-height, NEVER drop content
- "Need to remove a section" → forbidden unless user explicitly asks

---

## 📐 Page Specs (LOCKED)

```css
@page { size: 264.6mm 396.9mm; margin: 0; }
```

| Property | Value |
|---|---|
| Page size | **264.6 × 396.9 mm** (= 750 × 1125 pt) |
| **NOT A4** | A4 is 210×297mm — totally wrong |
| Margin | 0 (full bleed) |
| Font primary | Poppins |
| Font Chinese fallback | Noto Sans CJK SC |
| Base font size | 9pt |
| Global line-height | 1.35 (titles 1.3) |

---

## 📐 Locked Element Dimensions

| Element | Dimension |
|---|---|
| `.page` | width: 264.6mm; height: 396.9mm; position: relative |
| Hero Image placeholder | height: **50mm** × 100% width |
| Mode Image (DETAIL 01/02) | height: **28mm** |
| Software Editor Image | height: 22mm |
| Hero Block padding | `2mm 8mm 0` |
| Feature Row padding | `0 8mm` |
| Lower Block padding | `1.5mm 8mm 15mm` ← bottom 15mm is critical, gives footer space |
| Pain Item margin-bottom | **6.5mm** (fills left column to match right) |
| Footer position | absolute, bottom: 4mm |
| Footer padding | `0 8mm` (compact, no top border) |

---

## 🎨 Color System (read from brand-colors.json)

### How to apply theme colors:

The HTML template uses **CSS variables** for theme colors. Set them at the top of the rendered HTML:

```css
:root {
  --primary: <from brand-colors.json>;
  --topbar-bg: <from brand-colors.json>;
  --solution-label: <from brand-colors.json>;
  --footer-right-color: <from brand-colors.json>;
}
```

### Fixed colors (NEVER change across themes):

| Variable | Value | Used for |
|---|---|---|
| `--solution-body` | `#555` | Pain solution body text (NOT primary color!) |
| `--ui-gray` | `#525864` | Generic gray text, labels |
| `--card-border` | `#E5E7EB` | Card borders |
| `--card-bg` | `#FAFAFA` | Card backgrounds |
| `--dark-text` | `#14171C` | Headings, important text |

---

## 🏗 Document Structure (order CANNOT change)

```
1. .topbar              — Black bar + Logo + INTERNAL OFFERING + Date
2. .product-title       — Product name + tag + spec keywords
3. red top divider      — Thin colored divider line
4. .hero-block          — LEFT: Application Scene + Hero Image
                          RIGHT: Product Unique Features (6 bullets)
5. .feature-row         — LEFT: HERO FEATURE + 2 detail cards
                          RIGHT: SOFTWARE CONTROL + 2 editor cards
                          (red line on left, light gray on right)
6. .price-strip         — Black bar, 5 columns: Price / MOQ / Color / Box / Carton
7. .lower-block         — LEFT: PAIN POINTS & SOLUTIONS (6 items)
                          RIGHT: Product views + Payment + Timeline + Partner + Box
8. .footer              — Absolute bottom: 4mm, NO top border line
```

---

## 🔧 Pain Points Rules (这是血泪教训)

```css
.pain-item        { margin-bottom: 6.5mm; padding-left: 6mm; }
.pain-problem     { font-size: 7.8pt; font-weight: 600; color: var(--dark-text); }
.pain-solution    { padding-left: 0; /* LEFT-ALIGN to Problem title, no indent */ }
.sol-label        { color: var(--solution-label); font-weight: 700; }
.sol-body         { color: #555; font-weight: 400; /* GRAY, not theme color! */ }
```

**HTML structure:**
```html
<div class="pain-item">
  <span class="pain-num">1</span>
  <div class="pain-problem">Problem description...</div>
  <div class="pain-solution">
    <span class="sol-label">Solution:</span>
    <span class="sol-body">Solution body text in dark gray...</span>
  </div>
</div>
```

**FORBIDDEN:**
- ❌ Adding ↓ arrow between Problem and Solution
- ❌ Indenting Solution (must left-align to Problem)
- ❌ Setting Solution body to theme color (must be #555 gray)

---

## ⚙ Rendering Command (MANDATORY: Playwright Chromium)

```python
from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(f'file://{os.path.abspath("input.html")}', wait_until='networkidle')
    page.pdf(
        path='output.pdf',
        width='264.6mm',
        height='396.9mm',
        margin={'top':'0','right':'0','bottom':'0','left':'0'},
        print_background=True,
        prefer_css_page_size=True,
    )
    browser.close()
```

**NEVER use `wkhtmltopdf`** — it does not properly support custom `@page` sizes. Content will only fill 210mm width, leaving 54mm of empty space on the right.

---

## ✅ Post-render verification

After every PDF generation:

```bash
# 1. Verify single page
pdfinfo output.pdf | grep "Pages:"
# Must be "Pages: 1"

# 2. Verify page size
pdfinfo output.pdf | grep "Page size:"
# Must be "Page size: 750 x 1125.12 pts" (or very close)

# 3. Generate side-by-side comparison
python3 -c "
from PIL import Image, ImageDraw, ImageFont
import subprocess
subprocess.run(['pdftoppm', '-r', '130', '-png', 'output.pdf', 'preview'])
ref = Image.open('reference/SUPERMAXFIT_v18_GOLDEN.png')
new = Image.open('preview-1.png')
h = max(ref.size[1], new.size[1])
# ... combine and save as comparison PNG
"
```

---

## 📋 Errors that have happened before — DO NOT REPEAT

| Mistake | Lesson |
|---|---|
| Assumed page was A4, didn't run `pdfinfo` | Always check page size first |
| Set Solution body text to green | Only "Solution:" label is green; body is `#555` gray |
| Made excuse "Chromium can't do custom page sizes" | False. Use `prefer_css_page_size=True` |
| Modified things user didn't ask about | Strict no-private-modifications rule |
| Repeatedly nudged footer by 1-2mm pretending to fix things | Compress multiple low-priority elements systematically, fix at once |
| Suggested "let's delete some content" | Forbidden. Always compress, never delete |
| Used wkhtmltopdf and got right-side blank | Always use Playwright Chromium |
| Claimed "perfect!" without visual verification | Always pixel-measure or generate side-by-side comparison |

---

## 💎 One Principle

> **User pays for Max VIP. I must be able to do anything.**
> **Any "I can't" means I haven't figured it out yet.**
> **v18 is the golden standard. Reference it, don't deviate.**
