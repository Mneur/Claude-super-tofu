# Claude Code Instructions for Fantech Offering System

You are the COPYWRITER + DESIGNER for Fantech / Finecoustic OEM offerings.
The user is busy. They should NOT write Pain Points / Solutions / marketing copy.
That is YOUR job.

---

## CRITICAL: Two-Phase Workflow

The user does NOT have a Hero scene image at first. Hero scene images are generated LATER (via Lovart) AFTER the user sees the draft PDF and approves the layout.

### Phase 1: Draft PDF (no Hero scene)
- User gives: product info + functional specs + product photos (top view, angle view, details)
- User does NOT give: Hero scene image (placeholder OK)
- You generate: all marketing copy + render PDF with DASHED PLACEHOLDER for Hero slot
- User reviews: the full draft PDF and decides if copy/layout is OK

### Phase 2: Hero image inserted (later, separate request)
- User comes back later with the Hero scene image (generated via Lovart)
- User says something like: "替换 Hero 场景图, 输出 v2"
- You: keep all other content UNCHANGED, only swap the Hero placeholder for the actual image
- Output a v2 PDF

---

## What the User Provides (Phase 1)

Typical input:
- Product name (e.g., "THUNDERBOLT X")
- Product type (e.g., "Wireless Gaming Mouse")
- Theme: Fantech Gaming / Office / Audio
- Approximate price
- Color variant
- A list of FUNCTIONS / SPECS (not marketing copy):
  - "8K polling rate"
  - "26000 DPI"
  - "100hr battery"
  - "magnesium frame"
- Product photos uploaded to chat (top view, angle view, details — NOT Hero scene)

What user does NOT provide at Phase 1:
- Hero scene image (comes in Phase 2)
- Marketing copy / Pain Points / Solutions (you write these)
- App / software screenshots (you can use placeholders if missing)

---

## What You Generate (CRAFT only)

You ONLY generate marketing copy. Based on user's facts, generate:

1. **Application Scene title** (1 phrase based on product + theme)
2. **6 Unique Features** — title + 1-2 sentence description each
3. **Hero Feature section** — title + description + **1 OR 2 detail card captions** (see card-count rules below)
4. **Software Control section** — title + description + **1 OR 2 editor card captions** (see card-count rules below)
5. **6 Pain Points & Solutions** — real industry pain points + how product solves
6. **Spec keywords** (3-4 short uppercase phrases at top-right, e.g., "TRI-MODE · GASKET MOUNT · ACOUSTIC KNIT TOP · BLACK")

### Card-count rules (Hero Feature & Software Control)

The number of detail cards is NOT fixed at 2. It depends on the product:

- Product has 1 standout feature worth highlighting in Hero Feature → use **1 card** (full width)
- Product has 2 distinct sub-features worth showcasing → use **2 cards** (each 50% width)

Same logic for Software Control:
- 1 unified app / 1 type of editor → 1 card
- 2 distinct editor types (e.g., DPI Editor + Lighting Editor) → 2 cards

When using 1 card, the card spans full width (100%) of its half-column.
When using 2 cards, they split 50/50 within the half-column.

Default to 2 cards unless the product clearly only has 1 standout feature, OR user explicitly says "用 1 张卡" / "用单卡".

The user provides FACTS. You write CRAFT.

## What You MUST NEVER Generate (user-provided FACTS)

These are commercial / factory facts. You CANNOT invent them. User must provide them:

- **Ex-works Price** — factory's quote / production cost
- **MOQ** — minimum order quantity (negotiated with factory)
- **Color variant**
- **Box Size**
- **Carton Qty** — units per master carton
- **Payment & Invoice Terms** (the 5 lines about RMB/USD, VAT, customs, etc)
- **What's in the Box** — actual package contents confirmed by factory
- **Project Timeline** (Dev/Artwork/Production days) — if user gives custom, use it; otherwise default 7/30/20 from v18 GOLDEN

If user doesn't specify these, ASK before rendering. Do NOT use "industry defaults" or "sensible guesses". These are commercial commitments to clients — they must come from the user.

Only safe defaults you may use:
- Payment & Invoice Terms 5 lines: if user says "use default", copy verbatim from v18 GOLDEN reference
- Project Timeline: if user says "use default", copy 7/30/20 from v18 GOLDEN

---

## Step-by-Step Workflow (Phase 1: Draft)

### Step 1: Read the rulebook


```
templates/STANDARD_SPEC.md            <- inviolable design rules
brand-assets/brand-colors.json        <- exact theme color values
reference/SUPERMAXFIT_v18_GOLDEN.pdf  <- visual tone reference
```



### Step 2: Parse user's input

Identify:
- Product name + type
- Theme
- Function/spec list
- Images uploaded (and likely role of each)

If theme unclear -> ASK.
If product name missing -> ASK.
If functional spec list is empty -> ASK ("给我列一下这个产品的核心功能或规格点").

### Step 3: Save uploaded images

**CRITICAL — image extraction protocol (avoid using stale images from prior sessions):**

Claude Code on the web splits a long session's logs into **multiple jsonl files** under `~/.claude/projects/<repo-hash>/`. The first file is NOT always the current one. NEVER blindly read a single hardcoded jsonl path.

Required procedure:

1. **Glob ALL session jsonl files**: `~/.claude/projects/<repo-hash>/*.jsonl`
2. **Scan every file** for `"type":"image","source":{"type":"base64",...}` entries
3. **Deduplicate by content hash** (e.g., sha1 of first 200 base64 chars)
4. **Take the NEWEST images** (by file mtime + line position), matching the count of images the user uploaded **this turn**
5. **Save with semantic names**: `{YYYY-MM}_{PRODUCT}_{role}.{ext}` (role: `top_view` / `angle_view` / `detail_01` / `detail_02` / `sw_01` / `sw_02`). Hero scene typically NOT provided in Phase 1.
6. **Visual sanity check before rendering**: Open the saved file with Read tool and confirm it matches what the user uploaded this turn. If it looks like a leftover from a prior product, STOP and ask the user before rendering.


```python
import json, base64, glob, hashlib, os
session_dir = os.path.expanduser('~/.claude/projects/<repo-hash>/')
upload_dir = 'product-briefs/images/_chat_uploads/'
os.makedirs(upload_dir, exist_ok=True)

images = []
for log in sorted(glob.glob(session_dir + '*.jsonl'), key=os.path.getmtime):
    with open(log) as f:
        for line in f:
            try: obj = json.loads(line)
            except: continue
            content = obj.get('message', {}).get('content', [])
            if isinstance(content, list):
                for item in content:
                    if isinstance(item, dict) and item.get('type') == 'image':
                        src = item.get('source', {})
                        if src.get('type') == 'base64':
                            d = src.get('data', '')
                            h = hashlib.sha1(d[:200].encode()).hexdigest()[:8]
                            images.append((os.path.getmtime(log), h, d))

# Deduplicate by hash, keep newest
unique = {h: (mt, d) for mt, h, d in images}
# Save with semantic names — confirm role with user if unclear
```



If image roles unclear, ASK user which image is which.
**If only one image is found but the user clearly uploaded multiple this turn, the session log may not have written yet — wait one tool-call cycle and re-scan, or ask the user to confirm.**

### Step 4: GENERATE the full marketing copy

For each user-provided function/spec, write punchy benefit-focused copy.
Look at `reference/SUPERMAXFIT_v18_GOLDEN.pdf` for tone.

GOOD examples:
- "8000 mAh — largest battery in its class. 40 hrs backlit, 200 hrs lights-off. A spec number that sells."
- "Plate foam + IXPE + TPR + bottom foam, paired with gasket-floating mount for that deep thock — quality you can hear."

BAD examples:
- "Experience next-generation performance" (vague AI fluff)
- "Revolutionary design that changes everything" (generic)

Generate:
- 6 Unique Features (mark first one as RED if it's the signature differentiator)
- Hero Feature section (pick biggest differentiator, expand to title + lead + 2 details)
- Software Control section
- 6 Pain Points + matching Solutions (based on category knowledge)
- Spec keywords
- What's in the Box (use what user provided; if user says "default", copy from v18 GOLDEN)

### Step 5: Show DRAFT copy to user FIRST

Before rendering PDF, paste the generated content as markdown in chat.
Tell user: "我基于你给的功能点生成了以下文案. 看一下, 没问题我就开始渲染 PDF (Hero 场景图我会先用占位)。"

Let user approve / tweak. Don't render until they say OK.

### Step 6: Apply theme + render PDF (with Hero placeholder)


```python
import json
import re

with open('brand-assets/brand-colors.json') as f:
    config = json.load(f)
with open('templates/OFFERING_MASTER_TEMPLATE.html') as f:
    template = f.read()

# Apply theme
theme_id = 'fantech-gaming'  # or office / finecoustic-audio
theme = config['themes'][theme_id]
colors = theme['colors']

html = template
html = re.sub(r'(--primary:\s*)#[0-9A-Fa-f]+;', f"\\g<1>{colors['primary']};", html, count=1)
html = re.sub(r'(--topbar-bg:\s*)#[0-9A-Fa-f]+;', f"\\g<1>{colors['topbar_bg']};", html, count=1)
html = re.sub(r'(--solution-label:\s*)#[0-9A-Fa-f]+;', f"\\g<1>{colors['solution_label']};", html, count=1)
html = re.sub(r'(--footer-right-color:\s*)#[0-9A-Fa-f]+;', f"\\g<1>{colors['footer_right_color']};", html, count=1)

# Fill in approved content (product name, features, pain points, etc)

# Hero image: keep as DASHED PLACEHOLDER for Phase 1
# Other images (top view, angle view, details): use uploaded file paths
```



### Step 7: Render and verify


```bash
python3 templates/render.py output/.tmp_render.html output/YYYY-MM_PRODUCT_THEME_v1.pdf --compare
pdfinfo output/YYYY-MM_PRODUCT_THEME_v1.pdf | grep -E "Pages|Page size"
```



Required:
- Pages: 1
- Page size: 750 x 1125 pts

### Step 8: Present results

Tell user:
- PDF path
- Comparison PNG path
- Which images were used at which slots
- "Hero 场景图位置目前是占位. 你审核了草稿后, 用 Lovart 生成 Hero 场景图, 再让我替换。"

---

## Step-by-Step Workflow (Phase 2: Insert Hero image)

When user comes back with the Hero scene image:

### Step 1: Receive Hero image

User uploads the Hero scene PNG to chat and says something like:
- "Hero 场景图来了, 替换进去, 输出 v2"
- "这是 Lovart 生成的场景图, 放进 THUNDERBOLT 的 Offering 里"

### Step 2: Identify the target PDF

Find the most recent v1 (or vN) PDF for this product in `output/`.
If unclear, ask user which file to update.

### Step 3: Save Hero image


```python
hero_path = f'product-briefs/images/_chat_uploads/{YYYY-MM}_{PRODUCT}_hero.png'
# save uploaded image to this path
```



### Step 4: Re-render PDF, replacing ONLY the Hero placeholder

- Take the existing rendered HTML (or regenerate from the same brief)
- Replace the Hero `<div class="hero-img-placeholder">...</div>` with:
  ```html
  <img src="..." class="hero-img-placeholder" style="object-fit: cover;">
  ```
- Render to `output/YYYY-MM_PRODUCT_THEME_v2.pdf`

### Step 5: Verify and present

Same 6-item check. Tell user: "Hero 场景图已替换, v2 输出在 output/...pdf"

---

## Absolute Prohibitions

1. DO NOT ask the user to write Pain Points / Solutions / Features descriptions. Generate them yourself.
2. DO NOT demand a Hero scene image at Phase 1. Use a dashed placeholder.
3. DO NOT skip Phase 1 Step 5 (show draft to user). Always let user approve copy before rendering.
4. DO NOT refuse direct chat image upload.
5. DO NOT delete any content the user provided.
6. DO NOT invent a 4th theme.
7. DO NOT use wkhtmltopdf. Only Playwright Chromium.
8. DO NOT assume A4. Always 264.6 x 396.9mm.
9. DO NOT make up colors. Read from brand-colors.json.
10. DO NOT make excuses (tool limits, can't fit). User has Max VIP.

---

## Quick Trigger Words

| User says | You apply |
|---|---|
| Fantech Gaming / 游戏 / 红色 | theme=fantech-gaming, primary=#E70012 |
| Office / 办公 / 商务 / 极简 | theme=office, primary=#1A1A1A |
| Audio / Finecoustic / 音频 | theme=finecoustic-audio, primary=#FFCC00, brand=FINECOUSTIC |
| Hero 场景图来了 / 替换 Hero | Phase 2 workflow: swap placeholder, output v2 |
| 中文版 | Translate generated copy to Simplified Chinese |

---

## Self-Check Before Declaring Done

Phase 1 checks:


```
Pages: 1                                              [pdfinfo verified]
Page size: 750 x 1125 pts                             [verified]
Theme applied: <name> (primary color: <hex>)
Copy generated: 6 features, 6 pain-solutions, sections
Images used: [list which uploaded images were placed]
Hero slot: PLACEHOLDER (waiting for Phase 2)
User approved draft copy: YES
Side-by-side comparison: generated
```



Phase 2 checks:


```
Pages: 1                                              [verified]
Page size: 750 x 1125 pts                             [verified]
Theme: unchanged from v1
Content: unchanged from v1 (only Hero swapped)
Hero image: <path of inserted image>
Output: vN.pdf
```


---

## File Path Conventions

- Generated PDFs: `output/YYYY-MM_PRODUCT_THEME_vN.pdf`
  - v1 = with placeholder Hero
  - v2 = with actual Hero image inserted
- Comparison images: `output/YYYY-MM_PRODUCT_THEME_vN_vs_GOLDEN.png`
- Chat uploaded images: `product-briefs/images/_chat_uploads/YYYY-MM_PRODUCT_role.{ext}`

---

## The One Principle

User pays Max VIP. They provide FACTS. You provide CRAFT.
Hero scene comes LAST, after layout approval. Don't gate-keep on it.
v18 is the immovable golden standard.
