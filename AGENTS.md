# Offering Generator Project Rules

This file is the permanent source of truth for the Offering Generator.

All future Offering work must follow this file unless the user explicitly overrides a rule in a later instruction.

The approved Golden Master PDF and the approved V1.1 business logic are both mandatory.

## 1. Golden Master Visual Rules

### Primary visual source of truth

The approved Golden Master PDF is:

- [2026-06_AEROS_fantech-gaming_v23.pdf](/D:/Desktop/2026-06_AEROS_fantech-gaming_v23.pdf)

This PDF is the locked visual reference for all future outputs.

Use this PDF as the visual source of truth.

Do not use older MAXFIT86 assumptions if they conflict with this approved PDF.

Do not use older measurements if they conflict with this approved PDF.

If a future output differs visually from this PDF without a product-specific reason, treat it as a template bug.

### Visual decisions preserved by the Golden Master

The following must remain visually aligned with the Golden Master PDF:

- header / logo proportions
- logo positioning
- title positioning
- application scene image scale
- software section balance
- software card height
- software card vertical positioning
- lower section visual balance
- overall page density
- price strip structure
- footer position and balance

### Template source

The HTML master template remains:

- [public/tool/master-template.html](/D:/Documents/offering/public/tool/master-template.html)

The visual structure of this template must not be redesigned.

Only product-specific content, conditional module visibility, and tightly-scoped fidelity fixes may change.

## 2. VIEW vs MODE Rules

Do not decide based on the number of images alone.

Inspect the meaning of the product visuals.

### Use MODE 01 / MODE 02 only when:

The two visuals clearly represent different functional states or structural states.

Examples:

- folded / unfolded
- microphone extended / retracted
- display attached / removed
- dock attached / removed
- cover open / closed
- accessory installed / removed

If the product has real mode information or true mode-state images, keep MODE 01 / MODE 02 behavior.

### Do not use MODE 01 / MODE 02 when:

The two visuals only differ by:

- angle
- perspective
- color
- top view / side view
- top view / angle view
- front view / angle view

Those are views, not modes.

## 3. TOP VIEW / ANGLE VIEW Rules

If the product does not have real mode information but the user provides two product visuals, use:

- TOP VIEW
- ANGLE VIEW

Rules:

- do not explain that modes are missing
- do not show empty mode labels
- do not show placeholder mode content
- preserve image aspect ratio
- do not stretch images
- prefer contain behavior unless the template explicitly requires crop

Expected behavior:

- Product with real modes:
  show MODE 01 / MODE 02
- Product without modes but with two product images:
  show TOP VIEW / ANGLE VIEW
- Product without modes and without enough usable images:
  use the best available product visual and do not create a broken placeholder experience

## 4. SOFTWARE CONTROL Conditional Rules

The SOFTWARE CONTROL block is conditional.

### If hasSoftware = yes

Keep SOFTWARE CONTROL.

Generate software-related benefit copy that remains relevant to the actual product.

Do not create fake software functions.

### If hasSoftware = no

Remove SOFTWARE CONTROL completely.

Do not show:

- No software
- No driver
- Software not supported

Do not leave dead space where SOFTWARE CONTROL used to be.

## 5. No-Software Space Reclamation Rules

When SOFTWARE CONTROL is removed:

- do not leave a blank right-side area
- do not collapse the page into a visibly broken layout
- keep the master-template visual style intact

Use the freed area for additional product benefit content.

Preferred replacement behavior:

- show a replacement right-column block in the same visual family
- fill it with additional meaningful selling points from the product specs
- keep density balanced against the left column

The reclaimed content must:

- stay concise
- stay product-specific
- fit the approved master page density

## 6. Selling Point Generation Rules

The generator must convert raw product specs into buyer-facing Offering content.

### Copywriting principle

Generated copy should help:

- sales teams
- buyers
- retailers
- distributors
- customers

quickly understand why the product matters.

### Title rule

Each selling point title should include:

1. a recognizable spec keyword
2. a clear benefit or usage outcome where possible

Good examples:

- 7.1 Virtual Surround Sound -> 7.1 POSITIONAL AUDIO
- AI ENC Support -> AI ENC CLEAR VOICE
- Up to 80 hours battery life -> 80H WIRELESS ENDURANCE
- Quad-Mode Connection -> QUAD-MODE PLATFORM READY
- Retractable Microphone -> RETRACTABLE MIC, CLEAN LOOK
- 50 mm drivers -> 50MM POWERFUL SOUND
- Built-in EQ -> BUILT-IN EQ TUNING
- Advanced Software Support -> SOFTWARE TUNED EXPERIENCE
- On Headset Control -> ON-HEADSET QUICK CONTROL
- multi-platform use -> MULTI-PLATFORM COMPATIBILITY
- Voice Changing -> VOICE CHANGER FUN

Avoid abstract-only titles that remove important spec words.

Do not use weak generic titles such as:

- GOOD QUALITY
- NICE DESIGN
- HIGH PERFORMANCE
- BETTER EXPERIENCE

### Description rule

Descriptions should explain:

spec meaning -> user benefit -> sales/channel value

Descriptions should be specific and commercially useful.

Avoid vague filler such as:

- premium feature story
- stronger value story
- better experience
- high quality
- user friendly
- advanced design

Prefer concrete benefit framing such as:

- fewer charging interruptions
- clearer team chat
- easier retail demo
- broader platform compatibility
- cleaner everyday look
- stronger gaming immersion
- easier product positioning

### Length targets

- Feature card descriptions: 20 to 32 words
- Hero feature descriptions: 35 to 55 words

### Main selling point priority

`mainSellingPoint` must have priority in:

- application scene value
- hero feature title
- hero feature lead description
- keyword strip when appropriate

Secondary specs should populate PRODUCT UNIQUE FEATURES.

### Deduplication rules

- avoid duplicate feature titles
- avoid duplicate-like placeholder titles
- never append numeric suffixes such as `2`, `3`, or `4` to fake uniqueness
- if duplicate content exists, rewrite it into a distinct useful title or skip it

### Content quality rules

- do not simply repeat raw specs
- do not remove important spec keywords from titles
- keep copy concise enough to fit the approved master template

## 7. V1.1 Acceptance Requirements

V1.1 is only considered passed when both test cases pass.

### Test Case A

Input:

- [output/acceptance-filled.json](/D:/Documents/offering/output/acceptance-filled.json)

Expected:

- hasSoftware = yes
- SOFTWARE CONTROL block is present
- mainSellingPoint is prioritized as hero feature
- titles preserve key spec words
- preview is generated
- PDF is generated through primary Chrome print path
- fallback is avoided

Expected preview content includes:

- 7.1 SURROUND | RETRACTABLE MIC | LONG BATTERY | SOFTWARE | BLACK/WHITE
- 7.1 POSITIONAL AUDIO
- AI ENC CLEAR VOICE
- 80H WIRELESS ENDURANCE
- QUAD-MODE PLATFORM READY
- AEROS
- WHG08
- WIRELESS GAMING HEADSET

Expected preview content excludes:

- ADVANCED SOFTWARE SUPPORT 4
- premium feature story
- stronger value story
- high quality
- IMMERSIVE POSITIONAL AUDIO
- CLEARER TEAM VOICE
- WEEK-LONG WIRELESS CONFIDENCE
- ONE HEADSET, MORE PLATFORMS

### Test Case B

Input:

- [output/acceptance-no-software-no-mode.json](/D:/Documents/offering/output/acceptance-no-software-no-mode.json)

Expected:

- hasSoftware = no
- SOFTWARE CONTROL block is not present
- no No software text
- no No driver text
- no blank software area remains
- MODE 01 / MODE 02 labels are absent
- TOP VIEW / ANGLE VIEW are present
- benefit-driven replacement selling points fill the removed software area
- preview is generated
- PDF is generated through primary Chrome print path
- fallback is avoided

### Automated acceptance script

The canonical automated script is:

- [scripts/acceptance-test.ps1](/D:/Documents/offering/scripts/acceptance-test.ps1)

The input-generation helper is:

- [scripts/build-acceptance-inputs.cjs](/D:/Documents/offering/scripts/build-acceptance-inputs.cjs)

The generated acceptance report is:

- [ACCEPTANCE_TEST_REPORT.md](/D:/Documents/offering/ACCEPTANCE_TEST_REPORT.md)

V1.1 is PASS only if both Test Case A and Test Case B pass.

## 8. PDF Generation Rules

The accepted V1 PDF pipeline must remain unchanged unless explicitly approved.

### Current accepted architecture

- static Offering webpage remains
- `app.js` controls content generation and data-to-template mapping
- `master-template.html` controls visual layout
- `server.py` controls preview and PDF generation

### Rules

- do not rebuild the webpage into React / Next.js
- do not change the PDF architecture
- do not switch to Playwright unless explicitly approved
- do not return to html2canvas/jsPDF as the primary export path
- do not make fallback automatic

### Primary PDF path

The primary path is:

- JSON/form data
- preview HTML generation
- `server.py`
- Chrome headless print

### Fallback rule

Browser screenshot fallback may remain in code, but:

- it must stay a fallback only
- it must not become the primary export path
- it must not trigger automatically without explicit fallback confirmation behavior

## 9. PPTX Generation Rules

PPTX is not part of the accepted V1/V1.1 primary output path.

Rules:

- do not generate PPTX as part of normal Offering acceptance
- do not switch the product workflow from PDF to PPTX
- do not reintroduce PPTX generation into the primary export path unless explicitly requested

PDF remains the approved locked-format output for the current Offering workflow.

## 10. Performance / Token-Saving Workflow

When working on this project:

- make the smallest reliable change
- avoid broad refactors
- do not redesign layout unless explicitly requested
- do not touch the accepted PDF architecture unless there is a clear failure

### Investigation workflow

Before changing code:

1. identify the exact failing layer
2. isolate whether the issue is:
   - content generation
   - template rendering
   - conditional module logic
   - PDF generation
   - automated test script
3. fix only the layer that is actually wrong

### Token-saving rule

Avoid repeating long narrative summaries when the state is already known.

Prefer:

- exact file paths
- exact failing rule
- exact pass/fail status
- minimal diffs

### Acceptance workflow

When a change is requested:

- run the narrowest relevant validation first
- only run full acceptance when the request requires it
- do not claim PASS unless every required test for that milestone passes

### Future alignment rule

All future Offering work must remain aligned with:

1. this `AGENTS.md`
2. the approved Golden Master PDF
3. the accepted Chrome-print PDF pipeline
4. the accepted V1.1 conditional module logic

If a future output differs visually without a product-specific reason, treat it as a template bug.
