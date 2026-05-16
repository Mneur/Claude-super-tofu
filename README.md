# 🏆 Fantech Offering Generator System

> Internal OEM offering / FPRO production system for Fantech & Finecoustic product lines.
> Built on top of the SUPERMAXFIT v18 golden reference template.

---

## ⚡ Quick Start (for Claude Code)

User will say something like:
> "做一份新的 Offering,产品叫 XX,用 **Fantech Gaming** 风格,Brief 在 product-briefs/2026-06_xx.md"

Your job:
1. **Read** `templates/STANDARD_SPEC.md` — these rules are inviolable
2. **Read** `brand-assets/brand-colors.json` — find the requested theme
3. **Read** the user's Brief file
4. **Copy** `templates/OFFERING_MASTER_TEMPLATE.html` to a new file
5. **Replace** all theme colors per the JSON
6. **Fill in** content from the Brief
7. **Render** PDF using `templates/render.py`
8. **Output** PDF to `output/` directory
9. **Generate** a side-by-side comparison vs `reference/SUPERMAXFIT_v18_GOLDEN.pdf` for visual QA

---

## 🎨 The 3 Themes (only these — no other themes allowed)

| User says... | Theme to apply | Brand name |
|---|---|---|
| "**Fantech Gaming**" or "**游戏**" | `fantech-gaming` (red) | FANTECH |
| "**Office**" or "**办公**" or "**商务**" | `office` (minimal black) | FANTECH |
| "**Audio**" or "**音频**" or "**Finecoustic**" | `finecoustic-audio` (vivid gold) | FINECOUSTIC |

If user says anything else, **ASK** which of the three they want. Do not invent a fourth theme.

---

## 📁 Repository Structure

```
fantech-offering-system/
├── README.md                           ← This file
├── templates/
│   ├── OFFERING_MASTER_TEMPLATE.html   ← The golden HTML template (v18)
│   ├── STANDARD_SPEC.md                ← Inviolable design rules
│   └── render.py                       ← Playwright Chromium PDF renderer
├── reference/
│   ├── SUPERMAXFIT_v18_GOLDEN.pdf      ← Visual baseline reference
│   └── SUPERMAXFIT_v18_GOLDEN.png      ← Same as image for comparison
├── brand-assets/
│   ├── logo/
│   │   ├── fantech_mark.png            ← Red trident mark
│   │   ├── fantech_horizontal_for_dark.png   ← White FANTECH (use on dark bg)
│   │   └── fantech_horizontal_for_light.png  ← Black FANTECH (use on light bg)
│   └── brand-colors.json               ← The 3 theme color definitions
├── product-briefs/
│   ├── _TEMPLATE_brief.md              ← Blank brief template to copy
│   ├── 2026-05_SUPERMAXFIT.md          ← Example: the original SUPERMAXFIT brief
│   └── images/                         ← Drop hero images / product photos here
└── output/                             ← Generated PDFs go here
```

---

## 🚫 What you MUST NEVER do

1. **Never invent a 4th theme.** Only Fantech Gaming / Office / Audio.
2. **Never delete content the user provided.** If page space is tight, compress padding/margins/line-height — never propose dropping a Pain Point or info box.
3. **Never use wkhtmltopdf.** Always Playwright + Chromium (it correctly supports `@page` custom sizes).
4. **Never assume A4 page size.** The actual page is **264.6 × 396.9 mm** (750 × 1125 pt).
5. **Never make up colors.** Use only the exact hex values in `brand-colors.json`.
6. **Never auto-modify things the user didn't ask about.** If you see another issue, LIST it as a suggestion — do not act.
7. **Never make excuses like "tool limits" or "Chromium can't do this".** The Max VIP user has full access.

---

## ✅ What you MUST always do

1. **Read `STANDARD_SPEC.md` first** before any rendering — it locks down dimensions, fonts, colors.
2. **Generate a side-by-side comparison PNG** after rendering (new PDF vs SUPERMAXFIT_v18_GOLDEN.pdf) so the user can verify.
3. **Output to `output/` directory** with filename `YYYY-MM_PRODUCTNAME_THEME_vN.pdf` (e.g. `2026-06_THUNDERBOLT_fantech-gaming_v1.pdf`).
4. **Verify single-page output** (Pages: 1) using `pdfinfo` before declaring done.
5. **Confirm page size** is `750 x 1125 pts` using `pdfinfo`.

---

## 🆕 Adding a New Product (typical workflow)

User provides:
- A filled-out brief markdown (using `product-briefs/_TEMPLATE_brief.md` as a starting point)
- 1 hero image (required) + optionally product views / detail shots
- Theme name: "Fantech Gaming" / "Office" / "Audio"

Claude Code does:
1. Verify all required brief fields are filled (otherwise ask user)
2. Process colors and content
3. Render PDF + comparison
4. Show user the result for approval

---

## 📞 If something goes wrong

Common issues and fixes:

- **Pages: 2 (overflow)** → Tighten line-height, reduce mode-img height, compress hero block padding. Never drop content.
- **Right side empty (210mm only)** → You used wkhtmltopdf. Use Playwright Chromium with `prefer_css_page_size=True`.
- **Wrong color** → Re-check `brand-colors.json`. The colors are exact.
- **Font missing** → Poppins is at `/usr/share/fonts/truetype/google-fonts/` on the rendering machine. Noto Sans CJK SC for Chinese.

---

**Built:** May 16, 2026 · Locked golden version: v18
