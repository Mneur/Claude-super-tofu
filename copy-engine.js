/* ================================================================
   COPYWRITING ENGINE v2
   Architecture: Spec → Feature Parser → Intent → Benefit Mapper → Copy Generator

   DO NOT hardcode product names. Build around user intent.
   Every sentence must answer: "Why should this feature matter?"
   ================================================================ */

const CopyEngine = (() => {
  /* ==============================================================
     SECTION 1 — ENUMS
     ============================================================== */

  const CATEGORY = Object.freeze({
    KEYBOARD:      'keyboard',
    HEADSET:       'headset',
    RACING_WHEEL:  'racingWheel',
    MOUSE:         'mouse',
    SPEAKER:       'speaker',
    WEBCAM:        'webcam',
  });

  const INTENT = Object.freeze({
    POWER:          'power',           // battery, charging, runtime
    CONNECTIVITY:   'connectivity',    // wireless, wired, multi-mode, BT
    ERGONOMICS:     'ergonomics',      // comfort, weight, shape, mount
    PERFORMANCE:    'performance',     // speed, response, throughput
    PRECISION:      'precision',       // accuracy, resolution, fine control
    IMMERSION:      'immersion',       // force feedback, surround, haptics
    CONTROL:        'control',         // knobs, wheels, buttons, physical UI
    DISPLAY:        'display',         // screens, indicators, visual output
    CUSTOMIZATION:  'customization',   // modularity, hot-swap, RGB, tuning
    COMPATIBILITY:  'compatibility',   // platform support, OS, console
    DURABILITY:     'durability',      // lifespan, build quality, materials
    PORTABILITY:    'portability',     // size, weight, carrying, storage
    AUDIO:          'audio',           // drivers, sound quality, tuning
    MICROPHONE:     'microphone',      // mic quality, noise reduction, voice
    SOFTWARE:       'software',        // driver, app, firmware, editor
    SENSORS:        'sensors',         // optical, laser, hall-effect, tracking
  });

  const BENEFIT = Object.freeze({
    FREEDOM:        'freedom',         // no cables, no limits, go anywhere
    FLEXIBILITY:    'flexibility',     // adapts to different needs/setups
    COMFORT:        'comfort',         // feels good during use
    CONFIDENCE:     'confidence',      // reliable, trusted, won't fail
    IMMERSION:      'immersion',       // deeper experience, more real
    CONTROL:        'control',         // mastery, precision, command
    IDENTITY:       'identity',        // personal expression, stands out
    SIMPLICITY:     'simplicity',      // easy, intuitive, no friction
    ENDURANCE:      'endurance',       // lasts long, keeps going
    COMPATIBILITY:  'compatibility',   // works everywhere, no limits
  });

  /* ==============================================================
     SECTION 2 — RESOLVERS
     ============================================================== */

  function resolveCategory(productType) {
    const t = String(productType || '').toLowerCase();
    if (/keyboard|keeb/i.test(t))               return CATEGORY.KEYBOARD;
    if (/headset|headphone|iem|earphone|earbud/i.test(t)) return CATEGORY.HEADSET;
    if (/racing|wheel|sim\s*rig|direct\s*drive/i.test(t)) return CATEGORY.RACING_WHEEL;
    if (/\bmouse\b/i.test(t))                   return CATEGORY.MOUSE;
    if (/speaker/i.test(t))                     return CATEGORY.SPEAKER;
    if (/webcam|camera/i.test(t))               return CATEGORY.WEBCAM;
    return null;
  }

  /* ==============================================================
     SECTION 3 — FEATURE PARSER
     ============================================================== */

  function parseFeature(spec) {
    const raw = String(spec || '').trim();
    const digits = raw.match(/(\d+[\.,]?\d*)\s*(mm|cm|m|g|kg|oz|lb|mah|hz|khz|mhz|ghz|nm|ms|hrs?|hours?|inch|in|dpi|cpi|db|ohm|watt|w|a|v)/i);
    const number = digits ? digits[1] : null;
    const unit = digits ? digits[2].toLowerCase() : null;

    const prefixes = [
      'tri-mode', 'quad-mode', 'dual-mode', 'multi-mode', 'multi-platform',
      'hot.swap', 'hot-swap', 'hall.sensor', 'hall-effect', 'direct.drive',
      'belt.drive', 'gear.drive', 'quick.release', 'tool.free',
      'leather.wrap', 'magnetic', 'retractable', 'detachable', 'foldable',
      'wireless', 'wired', 'mechanical', 'optical', 'ergonomic',
      'ultra.light', 'super.light', 'ambidextrous', 'modular',
    ];

    let prefix = null;
    const rawLower = raw.toLowerCase().replace(/[^a-z0-9]+/g, ' ');
    for (const p of prefixes) {
      const pat = p.replace(/\./g, '[ -]?');
      if (new RegExp('\\b' + pat + '\\b', 'i').test(rawLower)) {
        prefix = p.replace(/\./g, ' ');
        break;
      }
    }

    const coreTerm = raw
      .replace(new RegExp('^' + (prefix || '').replace(/\s+/g, '\\s+'), 'i'), '')
      .replace(/^\s*[-–—:·]\s*/, '')
      .trim();

    return { raw, prefix, coreTerm, number, unit };
  }

  /* ==============================================================
     SECTION 4 — INTENT CLASSIFIER
     ============================================================== */

  const INTENT_PATTERNS = [
    { intent: INTENT.POWER,          re: /\b(battery|mah|charging|recharge|runtime|hours?\s*(play|use|life)|quick.?charge|wireless.*(charge|power)|power.?bank|long.?life.*battery|battery.*long.?life)\b/i, weight: 10 },
    { intent: INTENT.CONNECTIVITY,   re: /\b(tri.?mode|quad.?mode|dual.?mode|bluetooth|2\.4g|wireless|wired|usb.[cba]|dongle|receiver|multi.?mode|multi.?connection|rf.*mode)\b/i, weight: 10 },
    { intent: INTENT.ERGONOMICS,     re: /\b(ergonomic|gasket|mount|lightweight|ultra.?light|super.?light|weight|grams?|contour|shape|grip|leather|comfort|palm|wrist|angled|tilt|adjustable.*(stand|height|angle))\b/i, weight: 8 },
    { intent: INTENT.PERFORMANCE,    re: /\b(speed|fast|response|polling|hz|latency|low.?latency|throughput|processing|chipset|processor|mcu|arm|cortex)\b/i, weight: 8 },
    { intent: INTENT.PRECISION,      re: /\b(precision|accurate|accuracy|resolution|dpi|cpi|tracking|pixart|paw\d|sensor.*precision|fine.*control|high.?res|8k.*polling|4k.*polling)\b/i, weight: 8 },
    { intent: INTENT.IMMERSION,      re: /\b(force.?feedback|direct.?drive|belt.?drive|torque|nm|newton|haptic|vibration|rumble|surround|7\.1|spatial.*audio|3d.*audio|virtual.*surround|positional)\b/i, weight: 10 },
    { intent: INTENT.CONTROL,        re: /\b(knob|dial|wheel|slider|button|switch.*control|media.*key|macro.*key|multi.?function.*(wheel|dial|knob)|scroll.*wheel|thumb.*wheel|rotary)\b/i, weight: 7 },
    { intent: INTENT.DISPLAY,        re: /\b(display|screen|oled|lcd|led.*matrix|led.*display|dot.*matrix|pixel.*display|smart.*display|status.*screen|info.*panel)\b/i, weight: 9 },
    { intent: INTENT.CUSTOMIZATION,  re: /\b(hot.?swap|modular|swap|change.*switch|replaceable|custom|rgb|argb|lighting|led|backlit|keycap|plate|foam|dampen|mod|tuning|configurable|assignable|programmable|remap)\b/i, weight: 8 },
    { intent: INTENT.COMPATIBILITY,  re: /\b(multi.?platform|console|playstation|xbox|nintendo|switch|pc|mac|ios|android|linux|cross.?platform|universal|os.*support|platform.*support)\b/i, weight: 8 },
    { intent: INTENT.DURABILITY,     re: /\b(durable|lifespan|long.?life|million.*click|rated.*click|rating|military|ip.*rating|ipx|water.*resistant|dust.*proof|splash|pbt|double.?shot|aluminum|metal|steel|alloy|carbon.*fiber|reinforced)\b/i, weight: 7 },
    { intent: INTENT.PORTABILITY,    re: /\b(portable|compact|foldable|travel|carry|case|bag|storage|mini|small.*form|low.*profile|slim|thin|light.*weight|detachable.*cable)\b/i, weight: 6 },
    { intent: INTENT.AUDIO,          re: /\b(driver|speaker|audio|sound|tuning|eq|equalizer|bass|treble|frequency|response|dynamic|balanced.*armature|planar.*magnetic|neodymium|diaphragm|acoustic|resonance|soundstage|imaging)\b/i, weight: 10 },
    { intent: INTENT.MICROPHONE,     re: /\b(microphone|mic|voice|noise.*cancelling|noise.*cancel|enc|anc|ai.*noise|ai.*mic|beam.*form|pickup|mute|retractable.*mic|detachable.*mic|flip.*mic|boom.*mic)\b/i, weight: 10 },
    { intent: INTENT.SOFTWARE,       re: /\b(software|driver|app|firmware|editor|companion.*app|desktop.*app|mobile.*app|web.*(driver|app)|control.*panel|dashboard|macro.*editor|profile.*manager|custom.*(software|app|driver))\b/i, weight: 9 },
    { intent: INTENT.SENSORS,        re: /\b(sensor|hall.*effect|hall.*sensor|optical.*sensor|laser.*sensor|magnetic.*sensor|potentiometer|load.*cell|pressure.*sensor|position.*sensor|encoder)\b/i, weight: 9 },
  ];

  function classifyIntent(spec) {
    const s = String(spec || '').toLowerCase();
    let best = null;
    let bestScore = 0;
    const allMatches = [];

    for (const pat of INTENT_PATTERNS) {
      const matches = (s.match(new RegExp(pat.re.source, 'gi')) || []);
      if (matches.length > 0) {
        const score = pat.weight + matches.length;
        allMatches.push({ intent: pat.intent, score });
        if (score > bestScore) {
          bestScore = score;
          best = pat.intent;
        }
      }
    }

    allMatches.sort((a, b) => b.score - a.score);
    return {
      primary: best,
      secondary: allMatches.length > 1 ? allMatches[1].intent : null,
      confidence: best ? Math.min(bestScore / 15, 1) : 0,
      all: allMatches,
    };
  }

  /* ==============================================================
     SECTION 5 — BENEFIT MAPPER
     Intent + Category → Customer Benefit Angles
     ============================================================== */

  const BENEFIT_MAP = {
    [INTENT.POWER]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.FREEDOM, BENEFIT.ENDURANCE],
      [CATEGORY.HEADSET]:       [BENEFIT.ENDURANCE, BENEFIT.FREEDOM],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.CONFIDENCE, BENEFIT.ENDURANCE],
      [CATEGORY.MOUSE]:         [BENEFIT.FREEDOM, BENEFIT.SIMPLICITY],
      [CATEGORY.SPEAKER]:       [BENEFIT.ENDURANCE, BENEFIT.FREEDOM],
      [CATEGORY.WEBCAM]:        [BENEFIT.SIMPLICITY, BENEFIT.CONFIDENCE],
    },
    [INTENT.CONNECTIVITY]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.FLEXIBILITY, BENEFIT.COMPATIBILITY],
      [CATEGORY.HEADSET]:       [BENEFIT.FLEXIBILITY, BENEFIT.FREEDOM],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.COMPATIBILITY, BENEFIT.FLEXIBILITY],
      [CATEGORY.MOUSE]:         [BENEFIT.FLEXIBILITY, BENEFIT.FREEDOM],
      [CATEGORY.SPEAKER]:       [BENEFIT.FLEXIBILITY, BENEFIT.SIMPLICITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.COMPATIBILITY, BENEFIT.SIMPLICITY],
    },
    [INTENT.ERGONOMICS]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.COMFORT, BENEFIT.IDENTITY],
      [CATEGORY.HEADSET]:       [BENEFIT.COMFORT, BENEFIT.ENDURANCE],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.COMFORT, BENEFIT.CONTROL],
      [CATEGORY.MOUSE]:         [BENEFIT.COMFORT, BENEFIT.CONTROL],
      [CATEGORY.SPEAKER]:       [BENEFIT.SIMPLICITY, BENEFIT.IDENTITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.FLEXIBILITY, BENEFIT.SIMPLICITY],
    },
    [INTENT.PERFORMANCE]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.CONTROL, BENEFIT.CONFIDENCE],
      [CATEGORY.HEADSET]:       [BENEFIT.IMMERSION, BENEFIT.CONFIDENCE],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.IMMERSION, BENEFIT.CONTROL],
      [CATEGORY.MOUSE]:         [BENEFIT.CONTROL, BENEFIT.CONFIDENCE],
      [CATEGORY.SPEAKER]:       [BENEFIT.IMMERSION, BENEFIT.CONFIDENCE],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.SIMPLICITY],
    },
    [INTENT.PRECISION]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.CONTROL, BENEFIT.CONFIDENCE],
      [CATEGORY.HEADSET]:       [BENEFIT.CONTROL, BENEFIT.IMMERSION],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.CONTROL, BENEFIT.CONFIDENCE],
      [CATEGORY.MOUSE]:         [BENEFIT.CONTROL, BENEFIT.CONFIDENCE],
      [CATEGORY.SPEAKER]:       [BENEFIT.CONTROL, BENEFIT.IDENTITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.SIMPLICITY],
    },
    [INTENT.IMMERSION]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.IDENTITY, BENEFIT.IMMERSION],
      [CATEGORY.HEADSET]:       [BENEFIT.IMMERSION, BENEFIT.CONTROL],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.IMMERSION, BENEFIT.CONFIDENCE],
      [CATEGORY.MOUSE]:         [BENEFIT.CONTROL, BENEFIT.IMMERSION],
      [CATEGORY.SPEAKER]:       [BENEFIT.IMMERSION, BENEFIT.IDENTITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.SIMPLICITY],
    },
    [INTENT.CONTROL]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.CONTROL, BENEFIT.SIMPLICITY],
      [CATEGORY.HEADSET]:       [BENEFIT.CONTROL, BENEFIT.SIMPLICITY],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.CONTROL, BENEFIT.IMMERSION],
      [CATEGORY.MOUSE]:         [BENEFIT.CONTROL, BENEFIT.SIMPLICITY],
      [CATEGORY.SPEAKER]:       [BENEFIT.CONTROL, BENEFIT.SIMPLICITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONTROL, BENEFIT.SIMPLICITY],
    },
    [INTENT.DISPLAY]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.IDENTITY, BENEFIT.CONTROL],
      [CATEGORY.HEADSET]:       [BENEFIT.CONTROL, BENEFIT.IDENTITY],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.CONTROL, BENEFIT.IMMERSION],
      [CATEGORY.MOUSE]:         [BENEFIT.IDENTITY, BENEFIT.CONTROL],
      [CATEGORY.SPEAKER]:       [BENEFIT.CONTROL, BENEFIT.IDENTITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.SIMPLICITY],
    },
    [INTENT.CUSTOMIZATION]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.IDENTITY, BENEFIT.CONTROL],
      [CATEGORY.HEADSET]:       [BENEFIT.CONTROL, BENEFIT.IDENTITY],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.FLEXIBILITY, BENEFIT.CONTROL],
      [CATEGORY.MOUSE]:         [BENEFIT.CONTROL, BENEFIT.IDENTITY],
      [CATEGORY.SPEAKER]:       [BENEFIT.CONTROL, BENEFIT.IDENTITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.FLEXIBILITY, BENEFIT.CONTROL],
    },
    [INTENT.COMPATIBILITY]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.COMPATIBILITY, BENEFIT.FLEXIBILITY],
      [CATEGORY.HEADSET]:       [BENEFIT.COMPATIBILITY, BENEFIT.FLEXIBILITY],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.COMPATIBILITY, BENEFIT.CONFIDENCE],
      [CATEGORY.MOUSE]:         [BENEFIT.COMPATIBILITY, BENEFIT.FLEXIBILITY],
      [CATEGORY.SPEAKER]:       [BENEFIT.COMPATIBILITY, BENEFIT.FLEXIBILITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.COMPATIBILITY, BENEFIT.SIMPLICITY],
    },
    [INTENT.DURABILITY]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.CONFIDENCE, BENEFIT.ENDURANCE],
      [CATEGORY.HEADSET]:       [BENEFIT.CONFIDENCE, BENEFIT.ENDURANCE],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.CONFIDENCE, BENEFIT.ENDURANCE],
      [CATEGORY.MOUSE]:         [BENEFIT.CONFIDENCE, BENEFIT.ENDURANCE],
      [CATEGORY.SPEAKER]:       [BENEFIT.CONFIDENCE, BENEFIT.ENDURANCE],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.ENDURANCE],
    },
    [INTENT.PORTABILITY]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.FREEDOM, BENEFIT.SIMPLICITY],
      [CATEGORY.HEADSET]:       [BENEFIT.FREEDOM, BENEFIT.SIMPLICITY],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.SIMPLICITY, BENEFIT.FLEXIBILITY],
      [CATEGORY.MOUSE]:         [BENEFIT.FREEDOM, BENEFIT.SIMPLICITY],
      [CATEGORY.SPEAKER]:       [BENEFIT.FREEDOM, BENEFIT.SIMPLICITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.FREEDOM, BENEFIT.SIMPLICITY],
    },
    [INTENT.AUDIO]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.IDENTITY, BENEFIT.IMMERSION],
      [CATEGORY.HEADSET]:       [BENEFIT.IMMERSION, BENEFIT.CONTROL],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.IMMERSION, BENEFIT.CONFIDENCE],
      [CATEGORY.MOUSE]:         [BENEFIT.IDENTITY, BENEFIT.SIMPLICITY],
      [CATEGORY.SPEAKER]:       [BENEFIT.IMMERSION, BENEFIT.CONFIDENCE],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.SIMPLICITY],
    },
    [INTENT.MICROPHONE]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.SIMPLICITY, BENEFIT.CONFIDENCE],
      [CATEGORY.HEADSET]:       [BENEFIT.CONFIDENCE, BENEFIT.CONTROL],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.SIMPLICITY, BENEFIT.CONFIDENCE],
      [CATEGORY.MOUSE]:         [BENEFIT.SIMPLICITY, BENEFIT.CONFIDENCE],
      [CATEGORY.SPEAKER]:       [BENEFIT.SIMPLICITY, BENEFIT.CONFIDENCE],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.SIMPLICITY],
    },
    [INTENT.SOFTWARE]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.CONTROL, BENEFIT.FLEXIBILITY],
      [CATEGORY.HEADSET]:       [BENEFIT.CONTROL, BENEFIT.FLEXIBILITY],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.CONTROL, BENEFIT.IMMERSION],
      [CATEGORY.MOUSE]:         [BENEFIT.CONTROL, BENEFIT.FLEXIBILITY],
      [CATEGORY.SPEAKER]:       [BENEFIT.CONTROL, BENEFIT.FLEXIBILITY],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONTROL, BENEFIT.FLEXIBILITY],
    },
    [INTENT.SENSORS]: {
      [CATEGORY.KEYBOARD]:      [BENEFIT.CONFIDENCE, BENEFIT.PERFORMANCE],
      [CATEGORY.HEADSET]:       [BENEFIT.CONFIDENCE, BENEFIT.CONTROL],
      [CATEGORY.RACING_WHEEL]:  [BENEFIT.PRECISION, BENEFIT.CONFIDENCE],
      [CATEGORY.MOUSE]:         [BENEFIT.PRECISION, BENEFIT.CONFIDENCE],
      [CATEGORY.SPEAKER]:       [BENEFIT.CONFIDENCE, BENEFIT.PERFORMANCE],
      [CATEGORY.WEBCAM]:        [BENEFIT.CONFIDENCE, BENEFIT.SIMPLICITY],
    },
  };

  function getBenefits(intent, category) {
    const map = BENEFIT_MAP[intent];
    if (!map) return [BENEFIT.CONFIDENCE];
    const benefits = map[category];
    return benefits || map[CATEGORY.KEYBOARD] || [BENEFIT.CONFIDENCE];
  }

  /* ==============================================================
     SECTION 6 — CATEGORY VOICE PROFILES
     ============================================================== */

  const CATEGORY_VOICE = {
    [CATEGORY.KEYBOARD]: {
      domain: 'typing feel, desktop presence, and customization',
      retailAngle: 'enthusiast upgrade path and desk real-estate',
      userAction: 'typing, gaming, desk setup',
      heroLead: [
        (title, type) => `${titleCase(title)} transforms how the ${type || 'keyboard'} feels in daily use — not just another spec, but something the user notices every time they sit down.`,
        (title, type) => `Most ${type || 'keyboard'} buyers make decisions based on feel. ${titleCase(title)} gives this model a distinct tactile story that no competing SKU can copy.`,
        (title, type) => `${titleCase(title)} addresses a specific friction that keyboard users complain about. Solving it creates an immediate reason to choose this product over a generic alternative.`,
      ],
      titlePreserve: /^(USB|RGB|LED|PC|Mac|PBT|ABS|ARGB|DPI|IPS|CPI|TKL|QMK|VIA|MK|BT|RF|2\.4G|5G|Type-C|USB-C|LAN|PIN|ENC|ANC|AI|EQ)$/i,
    },
    [CATEGORY.HEADSET]: {
      domain: 'audio quality, communication clarity, and wearing comfort',
      retailAngle: 'gaming immersion and voice-chat reliability',
      userAction: 'gaming, voice chat, music listening',
      heroLead: [
        (title, type) => `${titleCase(title)} changes what the user hears and how they're heard — the two things that define a ${type || 'headset'} experience more than any spec on the box.`,
        (title, type) => `In a crowded ${type || 'headset'} shelf, ${titleCase(title)} is the feature that demo stations can prove in seconds. Buyers who try it understand the difference immediately.`,
        (title, type) => `${titleCase(title)} solves a real pain point for headset users — the kind of problem that creates negative reviews when ignored and loyal customers when solved.`,
      ],
      titlePreserve: /^(USB|ANC|ENC|AI|EQ|DAC|AMP|SPL|TWS|DSP|RF|BT|2\.4G|USB-C|Type-C)$/i,
    },
    [CATEGORY.RACING_WHEEL]: {
      domain: 'force feedback fidelity, pedal control, and mounting stability',
      retailAngle: 'sim-rig upgrade path and cross-platform compatibility',
      userAction: 'sim racing, force feedback tuning, pedal modulation',
      heroLead: [
        (title, type) => `${titleCase(title)} is what separates a toy wheel from a simulator — the kind of hardware detail that sim racers research for weeks before buying.`,
        (title, type) => `Sim racing buyers upgrade in steps. ${titleCase(title)} makes this ${type || 'wheel'} the obvious next step — the feature that justifies moving up from a lower-tier setup.`,
        (title, type) => `${titleCase(title)} translates what the car is doing into what the driver feels. Better fidelity here means faster laps, more consistency, and a more convincing simulation.`,
      ],
      titlePreserve: /^(DD|FFB|Nm|PC|Xbox|PS5|PS4|HALL|USB|BT|RF|2\.4G|USB-C|Type-C|QR)$/i,
    },
    [CATEGORY.MOUSE]: {
      domain: 'tracking accuracy, hand comfort, and click reliability',
      retailAngle: 'competitive gaming performance and ergonomic health',
      userAction: 'gaming, productivity, precision work',
      heroLead: [
        (title, type) => `${titleCase(title)} directly impacts aim consistency and hand fatigue — the two things ${type || 'mouse'} users care about after the first week of ownership.`,
      ],
      titlePreserve: /^(USB|DPI|CPI|IPS|PAW|RF|BT|2\.4G|USB-C|Type-C|RGB)$/i,
    },
    [CATEGORY.SPEAKER]: {
      domain: 'sound clarity, volume capability, and placement flexibility',
      retailAngle: 'desktop audio quality and space-conscious setup',
      userAction: 'music, gaming, media consumption',
      heroLead: [
        (title, type) => `${titleCase(title)} shapes how sound fills the room — the difference between audio that sits in the background and audio that becomes part of the experience.`,
      ],
      titlePreserve: /^(USB|DAC|AMP|DSP|EQ|SPL|BT|RF|2\.4G|USB-C|Type-C|RGB|TWS)$/i,
    },
    [CATEGORY.WEBCAM]: {
      domain: 'image quality, low-light performance, and mounting versatility',
      retailAngle: 'video call professionalism and streaming production value',
      userAction: 'video calls, streaming, content creation',
      heroLead: [
        (title, type) => `${titleCase(title)} determines how professional the user looks on camera — and in remote work and streaming, camera quality is a credibility signal.`,
      ],
      titlePreserve: /^(USB|4K|1080P|720P|FHD|UHD|HDR|IPS|CMOS|AI|FPS|USB-C|Type-C)$/i,
    },
  };

  /* ==============================================================
     SECTION 7 — COPY GENERATOR
     ============================================================== */

  function titleCase(text, category) {
    if (!text) return '';
    const preserve = CATEGORY_VOICE[category]?.titlePreserve || /^(USB|PC|Mac|RGB|LED|ANC|ENC|AI|EQ)$/i;
    const lowercase = /^(a|an|the|and|or|but|in|on|with|for|to|of|at|by|per|via|from|into|onto|upon|over|under)$/i;

    const words = String(text).trim().split(/\s+/);
    return words.map((word, i) => {
      if (preserve.test(word)) return word.toUpperCase();
      if (i > 0 && i < words.length - 1 && lowercase.test(word)) return word.toLowerCase();
      // Handle hyphenated words: capitalize each segment
      if (word.includes('-')) {
        return word.split('-').map(seg => {
          if (preserve.test(seg)) return seg.toUpperCase();
          if (lowercase.test(seg)) return seg.toLowerCase();
          return seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase();
        }).join('-');
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }

  // ── Titles ──────────────────────────────────────────────────

  function buildTitle(spec, intent, category, parsed) {
    const classification = classifyIntent(spec);
    const effectiveIntent = classification.primary || intent || null;
    const conf = classification.confidence;

    // High-confidence known intent → use category + intent patterns
    if (effectiveIntent && conf >= 0.4) {
      return buildIntentTitle(spec, effectiveIntent, category, parsed);
    }

    // Low confidence or unknown → observational title from spec
    const core = parsed.coreTerm || spec;
    return titleCase(core, category);
  }

  function buildIntentTitle(spec, intent, category, parsed) {
    const core = parsed.coreTerm || spec;
    const prefix = parsed.prefix;

    switch (intent) {
      case INTENT.POWER: {
        if (parsed.number && parsed.unit === 'mah') {
          return `${parsed.number} mAh Battery · ${categoryBenefitSuffix(intent, category)}`;
        }
        if (parsed.number && /hrs?|hours?/i.test(parsed.unit || '')) {
          return `${parsed.number}-Hour Battery · ${categoryBenefitSuffix(intent, category)}`;
        }
        return titleCase(core, category);
      }
      case INTENT.CONNECTIVITY: {
        if (prefix) return titleCase(prefix, category);
        return titleCase(core, category);
      }
      case INTENT.ERGONOMICS: {
        if (prefix) return titleCase(prefix + ' ' + core, category);
        return titleCase(core, category);
      }
      case INTENT.IMMERSION: {
        if (parsed.number && /nm/i.test(parsed.unit || '')) {
          return `${parsed.number} Nm Direct Drive · ${categoryBenefitSuffix(intent, category)}`;
        }
        return titleCase(core, category);
      }
      case INTENT.PRECISION: {
        return titleCase(core, category);
      }
      case INTENT.SENSORS: {
        if (/hall/i.test(spec)) return 'Hall Effect Sensor · Contactless Precision';
        return titleCase(core, category);
      }
      case INTENT.AUDIO: {
        if (parsed.number && /mm/i.test(parsed.unit || '')) {
          return `${parsed.number}mm Drivers · ${categoryBenefitSuffix(intent, category)}`;
        }
        return titleCase(core, category);
      }
      case INTENT.MICROPHONE: {
        if (prefix && /retractable/i.test(prefix)) return 'Retractable Microphone · Clean When Not in Use';
        return titleCase(core, category);
      }
      default:
        return titleCase(core, category);
    }
  }

  function categoryBenefitSuffix(intent, category) {
    const benefits = getBenefits(intent, category);
    const benefitWords = {
      [BENEFIT.FREEDOM]: 'Wireless Freedom',
      [BENEFIT.ENDURANCE]: 'All-Weekend Power',
      [BENEFIT.CONFIDENCE]: 'Track-Ready Fidelity',
      [BENEFIT.CONTROL]: 'Complete Command',
      [BENEFIT.FLEXIBILITY]: 'Total Flexibility',
      [BENEFIT.IMMERSION]: 'Deeper Immersion',
      [BENEFIT.IDENTITY]: 'Personal Expression',
      [BENEFIT.SIMPLICITY]: 'Effortless Use',
      [BENEFIT.COMPATIBILITY]: 'Universal Fit',
    };
    return benefitWords[benefits[0]] || benefitWords[BENEFIT.CONFIDENCE];
  }

  // ── Descriptions ─────────────────────────────────────────────

  function buildDescription(spec, intent, category, index, parsed) {
    const classification = classifyIntent(spec);
    const effectiveIntent = classification.primary || intent || null;
    const conf = classification.confidence;

    if (effectiveIntent && conf >= 0.4) {
      const desc = buildIntentDescription(spec, effectiveIntent, category, index, parsed);
      if (desc) return desc;
    }

    // Fallback: honest observational description
    return observationalDescription(spec, category, index, parsed);
  }

  function buildIntentDescription(spec, intent, category, index, parsed) {
    const variants = DESCRIPTION_TEMPLATES[intent];
    if (!variants) return null;
    const catVariants = variants[category] || variants._generic;
    if (!catVariants || catVariants.length === 0) return null;
    return catVariants[index % catVariants.length](spec, category, parsed);
  }

  // Each template is a function(spec, category, parsed) → string
  const DESCRIPTION_TEMPLATES = {
    [INTENT.POWER]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => {
          const val = p.number ? `${p.number} ${(p.unit || 'mAh').toUpperCase()}` : 'High-capacity';
          return `${val} battery keeps the keyboard running for extended sessions on a single charge — long enough that users stop checking the battery indicator. Wireless freedom without the charging anxiety.`;
        },
        (s, c, p) => {
          const val = p.number ? `${p.number} ${(p.unit || 'mAh').toUpperCase()}` : 'The battery';
          return `${val} means fewer interruptions and more desk confidence. A keyboard that's always ready makes wireless feel like a feature, not a compromise.`;
        },
      ],
      [CATEGORY.HEADSET]: [
        (s, c, p) => {
          const hrs = p.number || 'extended';
          return `${hrs} hours of continuous playback covers a full weekend of gaming without reaching for a cable. The kind of battery life that makes 'low battery' a rare surprise, not a daily interruption.`;
        },
        (s, c, p) => {
          const hrs = p.number || 'long';
          return `${hrs}-hour runtime means the headset is always ready when the session starts. For retailers, battery life is one of the first three questions a wireless headset buyer asks — this product has a strong answer.`;
        },
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Consistent power delivery keeps force feedback stable during long sessions — no fade, no drop-off, no loss of detail halfway through a race.`,
        (s, c, p) => `Stable power means consistent torque output lap after lap. When force feedback fades because of power droop, the driver loses the very feedback they bought the wheel for.`,
      ],
      [CATEGORY.MOUSE]: [
        (s, c, p) => {
          const val = p.number ? `${p.number} ${(p.unit || 'mAh').toUpperCase()}` : 'Long-lasting';
          return `${val} battery eliminates daily charging from the routine. Lightweight wireless that lasts — the combination that matters most for competitive play.`;
        },
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} provides extended use without frequent recharging — practical endurance that users notice and appreciate in daily use.`,
      ],
    },

    [INTENT.CONNECTIVITY]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Switch between wired and wireless modes across multiple devices without re-pairing. One keyboard that works for gaming, productivity, and mobile — fewer cables, fewer compromises.`,
        (s, c, p) => `Flexible connection options mean the keyboard fits more setups out of the box. For retailers, that's one SKU that covers more customer scenarios without adding complexity.`,
      ],
      [CATEGORY.HEADSET]: [
        (s, c, p) => `Connect to PC, console, and mobile without swapping headsets. Multi-mode wireless means the user buys one headset for every platform they own — a stronger value story for both buyers and sellers.`,
        (s, c, p) => `More connection options reduce the chance the headset sits unused because it doesn't work with the user's preferred device. Wide compatibility turns a gaming headset into an everyday audio tool.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Works across PC, PlayStation, and Xbox with automatic platform detection. One wheel base serves every racing title in the user's library — no adapters, no workarounds, no second wheel needed.`,
        (s, c, p) => `Cross-platform compatibility means the wheel isn't tied to one console generation or ecosystem. It protects the buyer's investment and makes the purchase decision easier.`,
      ],
      [CATEGORY.MOUSE]: [
        (s, c, p) => `Tri-mode connection covers every scenario: low-latency 2.4G for gaming, Bluetooth for travel, wired for charging while playing. One mouse adapts to the user's day, not the other way around.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} provides flexible connection options that adapt to different devices and use scenarios — fewer limits on where and how the product works.`,
      ],
    },

    [INTENT.ERGONOMICS]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `A gasket-mounted plate absorbs typing vibration for a softer, more refined feel. The difference is immediately noticeable in side-by-side comparisons — this is the kind of upgrade that turns a test typing session into a purchase.`,
        (s, c, p) => `Softer typing feel with less bottom-out harshness. For buyers comparing keyboards in person, comfort differences create preference faster than any spec on paper.`,
      ],
      [CATEGORY.HEADSET]: [
        (s, c, p) => `Designed for extended sessions without fatigue — balanced clamping force, breathable materials, and weight distribution that disappears after the first few minutes. Comfort determines whether a headset gets worn for an hour or an entire evening.`,
        (s, c, p) => `A headset that's comfortable for hour six matters as much as one that sounds good for hour one. Users who wear headsets daily are the most vocal reviewers — and the most loyal repeat buyers.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `${titleCase(s, c)} reduces fatigue during long race sessions. Every detail that improves hand comfort directly translates to more consistent lap times and more enjoyable practice.`,
        (s, c, p) => `Racing for hours with a poorly positioned grip causes tension that shows up in lap times. ${titleCase(s, c)} keeps the driver focused on the apex, not their hands.`,
      ],
      [CATEGORY.MOUSE]: [
        (s, c, p) => `Shape and weight distribution determine how natural the mouse feels after hours of use. ${titleCase(s, c)} reduces hand strain and keeps aim consistent through long sessions.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} improves comfort during extended use — the kind of detail users appreciate more the longer they own the product.`,
      ],
    },

    [INTENT.IMMERSION]: {
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => {
          const nm = p.number || '';
          return `Delivers ${nm ? nm + ' newton-meters of ' : ''}direct-drive torque for instant, detailed force feedback with no belt slack or gear rattle. Every curb, slip angle, and surface change reaches the driver's hands without lag or filtering — the difference between playing a racing game and driving a car.`;
        },
        (s, c, p) => `Direct-drive fidelity means the wheel communicates what the car is doing the moment it happens. Belt and gear systems smooth over the details; direct drive preserves them. For the driver, that's earlier correction, better consistency, and more convincing immersion.`,
      ],
      [CATEGORY.HEADSET]: [
        (s, c, p) => `Spatial audio positioning lets the user hear exactly where footsteps, gunshots, and engine sounds come from — not just left or right, but distance and height. In competitive games, that information is the difference between reacting first and reacting late.`,
        (s, c, p) => `Surround processing turns stereo headphones into a positional audio system. For gaming, it's a competitive advantage. For movies and music, it's a wider, more natural soundstage that makes the headset useful beyond gaming.`,
      ],
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Layered sound dampening creates a deeper, more refined typing sound that buyers notice immediately in comparison demos. The acoustic signature makes the keyboard feel more premium before the user even starts typing.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} deepens the user's engagement by making the experience more convincing and responsive — the product doesn't just function, it draws the user in.`,
      ],
    },

    [INTENT.CUSTOMIZATION]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Users can change switches without soldering, making the keyboard adaptable to personal preference and repairable without technical skill. For enthusiasts, hot-swap is the feature that turns a keyboard from a purchase into a platform.`,
        (s, c, p) => `Switch customization means the keyboard can evolve with the user's taste — lighter, heavier, tactile, linear. That flexibility keeps the product relevant longer, which builds brand loyalty and word-of-mouth.`,
      ],
      [CATEGORY.HEADSET]: [
        (s, c, p) => `Customizable settings let the user tune the audio profile to their preference rather than accepting a fixed factory tuning. That flexibility makes the headset more personal — and more likely to be recommended.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Adjustable components let the driver configure pedal resistance, wheel rotation angle, and shifter feel to match their driving style and the car they're racing. One wheel base serves every racing discipline.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} lets the user adapt the product to their preference rather than the other way around — a more personal experience that builds stronger attachment.`,
      ],
    },

    [INTENT.COMPATIBILITY]: {
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Works natively across PC and major console platforms without adapters or configuration files. One wheel base covers every racing title in the library, which simplifies the buying decision and protects the investment.`,
        (s, c, p) => `Platform coverage means the wheel isn't tied to one ecosystem. The buyer can switch between console and PC, or upgrade consoles, without replacing their hardware. That's the kind of forward compatibility that closes sales.`,
      ],
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Works with Windows, Mac, and mobile devices without driver installation or compatibility issues. Broad platform support means the keyboard follows the user wherever they work or play.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} ensures the product works across the platforms and devices the user already owns — no compatibility surprises after purchase.`,
      ],
    },

    [INTENT.DURABILITY]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Rated for millions of actuations per switch, built with materials that survive daily use without developing shine, wobble, or failure. A keyboard that still feels new after a year of heavy use earns repeat purchases and brand trust.`,
      ],
      [CATEGORY.HEADSET]: [
        (s, c, p) => `Built to survive daily wear — reinforced joints, durable cable connections, and materials that don't degrade with sweat and movement. A headset that lasts builds the kind of owner loyalty that drives word-of-mouth.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Built with materials that handle sustained force feedback loads without developing play, noise, or failure over time. Racing hardware takes abuse — durability here is about consistent performance, not just survival.`,
      ],
      [CATEGORY.MOUSE]: [
        (s, c, p) => `Switches rated for millions of clicks with consistent actuation force throughout their lifespan. A mouse that doesn't develop double-click issues or inconsistent feel over time keeps the user's muscle memory intact.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} extends the product's useful life through better materials and construction — the kind of quality users notice over months and years, not just on day one.`,
      ],
    },

    [INTENT.SENSORS]: {
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Hall effect sensors use magnetic fields instead of physical contacts, eliminating the wear and signal noise that degrade potentiometer-based pedals over time. The result is progressive, consistent brake feel through every lap and every season.`,
        (s, c, p) => `Contactless sensing means the pedal position is measured without mechanical friction or degradation. Brake modulation stays consistent whether the pedals are brand new or two years old — critical for building muscle memory.`,
      ],
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Magnetic hall effect switches register key presses without physical contact, eliminating switch wear and enabling adjustable actuation points. Faster response, longer life, and more control than traditional mechanical contacts.`,
      ],
      [CATEGORY.MOUSE]: [
        (s, c, p) => `The sensor defines every cursor movement. ${titleCase(s, c)} tracks with the precision and consistency that competitive players need — no smoothing, no acceleration, no prediction that gets in the way of raw aim.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} provides more accurate and durable sensing than traditional mechanical alternatives — better precision with less long-term degradation.`,
      ],
    },

    [INTENT.PRECISION]: {
      [CATEGORY.MOUSE]: [
        (s, c, p) => `High-resolution tracking captures every micro-adjustment without smoothing or interpolation. In competitive gaming, the sensor's accuracy defines the ceiling of what the player can do.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `High-resolution position sensing captures the smallest steering inputs and pedal adjustments. In sim racing, precision at the sensor level translates directly to car control and lap time consistency.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} provides finer control and more consistent output — precision that users can feel in practice, not just read about in specs.`,
      ],
    },

    [INTENT.CONTROL]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `A dedicated physical control for frequent actions — volume, media, lighting — reduces friction in daily use. It's the kind of hardware feature that makes the product feel more intentional and better designed than software-only alternatives.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Physical controls positioned for thumb access let the driver adjust settings without taking hands off the wheel mid-race. Every adjustment that can be made without pausing keeps the driver in the zone.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} puts essential controls where the user can reach them without breaking focus — physical interfaces that feel more natural than on-screen menus.`,
      ],
    },

    [INTENT.DISPLAY]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `A built-in display turns the keyboard's top surface into usable information or customizable visuals. It gives the product a distinct identity on the desk — something buyers notice before they even touch the keys.`,
        (s, c, p) => `An onboard display makes the keyboard more than an input device — it becomes part of the desktop visual experience. For retailers, that visual differentiation creates the kind of first impression that turns browsing into trying.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} adds visual information or customization to the product — a feature that creates immediate differentiation and gives retailers something to demonstrate.`,
      ],
    },

    [INTENT.AUDIO]: {
      [CATEGORY.HEADSET]: [
        (s, c, p) => {
          const mm = p.number || '';
          return `${mm ? mm + 'mm ' : ''}Drivers tuned for a wide, accurate soundstage — clear enough for competitive footsteps, rich enough for music and movies. Good audio tuning makes a headset useful beyond gaming, which expands its value story.`;
        },
        (s, c, p) => `Audio tuning determines whether the headset sounds precise or muddy. ${titleCase(s, c)} produces cleaner separation between game audio, voice chat, and background noise — more information reaching the user's ears with less confusion.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} delivers clear, accurate sound reproduction — the foundation of any audio product's value.`,
      ],
    },

    [INTENT.MICROPHONE]: {
      [CATEGORY.HEADSET]: [
        (s, c, p) => `AI-powered noise reduction isolates the user's voice from keyboard clicks, room echo, and background conversation. Teammates hear callouts clearly — not the chaos around the player. Better communication directly improves team performance.`,
        (s, c, p) => `Clear voice pickup is as important as good audio output. ${titleCase(s, c)} makes the difference between a headset that's good for solo gaming and one that's trusted for competitive team play, streaming, and calls.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} improves voice clarity and reduces background noise — communication quality that teammates, viewers, and call participants all notice.`,
      ],
    },

    [INTENT.SOFTWARE]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Companion software extends the keyboard beyond fixed hardware behavior — custom keymaps, macros, lighting profiles, and firmware updates. It turns a finished product into a platform that improves over time.`,
      ],
      [CATEGORY.HEADSET]: [
        (s, c, p) => `Driver software unlocks EQ tuning, surround settings, and microphone processing that the headset hardware supports but can't control alone. The software makes the headset more capable over time, not less relevant.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `Tuning software lets the driver adjust force feedback strength, rotation angle, damper settings, and per-game profiles from one dashboard. Proper setup transforms the wheel from a controller into a simulation instrument.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} gives users deeper control over the product's behavior — settings that make the hardware more capable and more personal.`,
      ],
    },

    [INTENT.PERFORMANCE]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Fast polling and low-latency processing mean key presses register the moment they happen — not a fraction of a second later. In competitive gaming, input lag is invisible until it costs a match. This hardware makes sure it never does.`,
      ],
      [CATEGORY.RACING_WHEEL]: [
        (s, c, p) => `High-frequency processing captures and delivers force feedback data with minimal latency. The faster the wheel responds to the simulation, the more connected the driver feels to the car.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} provides faster response and higher throughput — the kind of performance improvement that users feel in real-time interaction.`,
      ],
    },

    [INTENT.PORTABILITY]: {
      [CATEGORY.KEYBOARD]: [
        (s, c, p) => `Compact form factor fits in a bag alongside a laptop without adding bulk. For users who care about their typing experience everywhere they work, portability without compromise is the key value.`,
      ],
      _generic: [
        (s, c, p) => `${titleCase(s, c)} makes the product easier to transport and set up in different locations — practical flexibility for users who move between spaces.`,
      ],
    },
  };

  // ── Hero Lead ────────────────────────────────────────────────

  function buildHeroLead(featureTitle, category, productType) {
    const voice = CATEGORY_VOICE[category];
    if (!voice) {
      return `${titleCase(featureTitle, category)} is the feature that defines how this ${productType || 'product'} performs in real use — the kind of capability that turns a spec into a reason to buy.`;
    }
    const templates = voice.heroLead;
    const idx = Math.abs(hashString(featureTitle)) % templates.length;
    return templates[idx](featureTitle, productType);
  }

  function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h) + str.charCodeAt(i);
      h |= 0;
    }
    return h;
  }

  // ── Keywords ─────────────────────────────────────────────────

  function buildKeyword(spec, category) {
    // Handle merged labels: extract first meaningful part before " + "
    const cleanSpec = String(spec || '').replace(/\s*\+\s*.*$/, '').trim();
    const s = cleanSpec.toLowerCase();
    const parsed = parseFeature(spec);

    // Extract the most distinctive term, category-aware
    if (/\b(battery|mah)\b/i.test(s) && parsed.number) return `${parsed.number}mAh`;
    if (/\b(hours?|hrs?)\b/i.test(s) && parsed.number) return `${parsed.number}H BATTERY`;
    if (/\b(tri.mode|quad.mode)\b/i.test(s)) return s.match(/\b(tri.mode|quad.mode)\b/i)[0].toUpperCase().replace(/[ -]/g, '-');
    if (/\b(bluetooth)\b/i.test(s)) return 'BT';
    if (/\b(2\.4g)\b/i.test(s)) return '2.4G';
    if (/\b(direct.drive)\b/i.test(s)) return 'DIRECT DRIVE';
    if (/\b(nm|newton)\b/i.test(s) && parsed.number) return `${parsed.number}Nm`;
    if (/\b(hall.effect|hall.sensor)\b/i.test(s)) return 'HALL SENSOR';
    if (/\b(hot.swap)\b/i.test(s)) return 'HOT-SWAP';
    if (/\b(gasket)\b/i.test(s)) return 'GASKET MOUNT';
    if (/\b(rgb|argb)\b/i.test(s)) return 'RGB';
    if (/\b(ai.enc|enc)\b/i.test(s)) return 'AI ENC';
    if (/\b(anc)\b/i.test(s)) return 'ANC';
    if (/\b(surround|7\.1)\b/i.test(s)) return '7.1 SURROUND';
    if (/\b(retractable.*mic|mic.*retractable)\b/i.test(s)) return 'RETRACTABLE MIC';
    if (/\b(display|oled|lcd)\b/i.test(s)) return 'DISPLAY';
    if (/\b(multi.platform)\b/i.test(s)) return 'MULTI-PLATFORM';
    if (/\b(software|driver|app)\b/i.test(s)) return 'SOFTWARE';
    if (/\b(pwm|pedal|load.cell)\b/i.test(s)) return parsed.prefix ? parsed.prefix.toUpperCase() : titleCase(spec, category).toUpperCase();

    // Fallback: use parsed core term, uppercased, max 3 words
    const core = (parsed.coreTerm || spec).replace(/\s+/g, ' ').trim();
    const words = core.split(/\s+/).slice(0, 3);
    return words.map(w => w.toUpperCase()).join(' ');
  }

  // ── Software Cards ───────────────────────────────────────────

  function buildSoftwareCards(specs, category) {
    const catSpecs = specs.filter(s => {
      const lower = s.toLowerCase();
      return /\b(software|driver|app|editor|firmware|companion|control.panel|dashboard|macro|profile|tuning|eq|equalizer|lighting|keymap|remap|display.*editor|custom.*software)\b/i.test(lower);
    });

    switch (category) {
      case CATEGORY.KEYBOARD:
        return {
          sectionTitle: 'Customize Everything in One App',
          leadDescription: 'Software extends the keyboard beyond fixed hardware — custom keymaps, macros, lighting profiles, and firmware updates keep the product improving long after unboxing.',
          card1: {
            title: 'Keymap & Macro Editor',
            description: 'Remap every key, build multi-step macros, and save profiles for different games or applications. One keyboard adapts to every workflow without touching hardware.',
          },
          card2: {
            title: 'Lighting & Display Control',
            description: 'Fine-tune per-key RGB and upload custom animations to the onboard display. Visual customization that makes the keyboard feel uniquely personal.',
          },
        };

      case CATEGORY.HEADSET:
        return {
          sectionTitle: 'Tune Every Session in Software',
          leadDescription: 'Driver support gives the headset a stronger premium story. Users can manage communication clarity, sound behavior, and listening profiles from one place instead of relying on fixed defaults.',
          card1: {
            title: 'Microphone & AI Noise Control',
            description: 'Adjust noise reduction level, mic sensitivity, and voice effects for clearer team communication. Tune for quiet rooms, noisy environments, or streaming setups.',
          },
          card2: {
            title: 'EQ & Surround Sound',
            description: 'Customize equalizer profiles and surround behavior for different content. Switch between competitive gaming, cinematic, and music modes from one panel.',
          },
        };

      case CATEGORY.RACING_WHEEL:
        return {
          sectionTitle: 'Force Feedback Tuning Suite',
          leadDescription: 'Software turns the wheel from a controller into a simulation instrument. Every force feedback parameter, pedal curve, and rotation setting can be tuned per game and per driving style.',
          card1: {
            title: 'Force Feedback Calibration',
            description: 'Adjust torque strength, damper, friction, and inertia per title. Save profiles for different sims — each game gets the wheel setup it performs best with.',
          },
          card2: {
            title: 'Pedal & Rotation Setup',
            description: 'Configure pedal sensitivity curves, brake force thresholds, and steering rotation angle. Match the hardware to the car — from Formula to rally to GT.',
          },
        };

      case CATEGORY.MOUSE:
        return {
          sectionTitle: 'Performance Tuning Software',
          leadDescription: 'Configure DPI stages, polling rate, lift-off distance, and button assignments. Save profiles that switch automatically when the game launches.',
          card1: {
            title: 'Sensor & DPI Configuration',
            description: 'Set precise DPI stages, adjust lift-off distance, and tune polling rate for the right balance of speed and control per game genre.',
          },
          card2: {
            title: 'Button Mapping & Macros',
            description: 'Assign every button independently and record complex macros. One mouse adapts to every game in the library without re-learning controls.',
          },
        };

      default:
        if (catSpecs.length >= 2) {
          return {
            sectionTitle: 'Companion Software Control',
            leadDescription: 'Software extends the product beyond its out-of-box behavior with deeper customization and control.',
            card1: {
              title: titleCase(catSpecs[0], category),
              description: `${titleCase(catSpecs[0], category)} gives users more precise control over how the product behaves in different scenarios.`,
            },
            card2: {
              title: titleCase(catSpecs[1], category),
              description: `${titleCase(catSpecs[1], category)} adds another layer of personalization that makes the product more capable over time.`,
            },
          };
        }
        return null;
    }
  }

  // ── Spec Merging ─────────────────────────────────────────────

  function buildMergedSpecs(specs, category) {
    if (specs.length <= 6) return [...specs];

    const mergeRules = {
      [CATEGORY.KEYBOARD]: [
        { pattern: /switch|hot.?swap/i, with: /keycap|pbt|abs|profile/i, label: 'Hot-Swappable Switches + PBT Keycaps' },
        { pattern: /gasket|mount/i, with: /dampen|foam|silicon/i, label: 'Gasket Mount + Multi-Layer Dampening' },
        { pattern: /battery/i, with: /wireless|connect/i, label: 'Long Battery + Wireless Freedom' },
        { pattern: /software|driver/i, with: /rgb|lighting|display/i, label: 'Software Control + Visual Customization' },
      ],
      [CATEGORY.HEADSET]: [
        { pattern: /microphone|mic/i, with: /enc|noise.*cancel/i, label: 'Retractable Mic + AI ENC Communication' },
        { pattern: /surround|7\.1/i, with: /eq|tuning/i, label: '7.1 Surround + Built-In EQ Presets' },
        { pattern: /connect|mode/i, with: /platform/i, label: 'Multi-Platform Wireless Connection' },
        { pattern: /battery/i, with: /wireless/i, label: 'Long Battery + Wireless Freedom' },
      ],
      [CATEGORY.RACING_WHEEL]: [
        { pattern: /motor|drive|torque/i, with: /feedback|ffb/i, label: 'Direct Drive Motor + Force Feedback' },
        { pattern: /pedal/i, with: /sensor|hall|load/i, label: 'Precision Pedals + Contactless Sensors' },
        { pattern: /platform/i, with: /console|pc|xbox|playstation/i, label: 'Console + PC Multi-Platform' },
      ],
    };

    const rules = mergeRules[category] || [];
    const pool = [...specs];
    const merged = [];

    // Apply category-specific merge rules
    for (const rule of rules) {
      const aIdx = pool.findIndex(s => rule.pattern.test(s));
      const bIdx = pool.findIndex(s => s !== pool[aIdx] && rule.with.test(s));
      if (aIdx !== -1 && bIdx !== -1) {
        merged.push(rule.label);
        const removeIdx = Math.max(aIdx, bIdx);
        pool.splice(removeIdx, 1);
        pool.splice(Math.min(aIdx, bIdx), 1);
      }
    }

    // Find remaining software/battery/driver specs to merge if needed
    const softwareSpecs = pool.filter(s => /\b(software|driver)\b/i.test(s));
    const batterySpecs = pool.filter(s => /\b(battery|mah)\b/i.test(s));

    if (softwareSpecs.length > 0 && merged.length < 6) {
      const idx = pool.findIndex(s => /\b(software|driver)\b/i.test(s));
      if (idx !== -1) merged.push(pool.splice(idx, 1)[0] + ' Support');
    }
    if (batterySpecs.length > 0 && merged.length < 6) {
      const idx = pool.findIndex(s => /\b(battery|mah)\b/i.test(s));
      if (idx !== -1) {
        const spec = pool.splice(idx, 1)[0];
        merged.push(/\b(battery|mah)\b/i.test(spec) && !/\bbattery\b/i.test(spec) ? spec + ' Battery' : spec);
      }
    }

    // Add remaining specs
    while (pool.length && merged.length < 6) {
      merged.push(pool.shift());
    }

    return merged.slice(0, 6);
  }

  // ── Fallback: Observational Description ──────────────────────

  function observationalDescription(spec, category, index, parsed) {
    const core = parsed.coreTerm || spec;
    const voice = CATEGORY_VOICE[category];
    const domain = voice ? voice.domain : 'the overall product experience';

    const variants = [
      `${titleCase(core, category)} contributes directly to ${domain}.`,
      `${titleCase(core, category)} enhances ${domain} in a way users notice in daily use.`,
      `${titleCase(core, category)} is a practical feature that improves ${domain} for real-world users.`,
      `${titleCase(core, category)} addresses a specific aspect of ${domain} that matters during actual use — not just on paper.`,
    ];

    return variants[index % variants.length];
  }

  /* ==============================================================
     SECTION 8 — PUBLIC API
     ============================================================== */

  return {
    // Enums (read-only)
    CATEGORY,
    INTENT,
    BENEFIT,

    // Resolvers
    resolveCategory,

    // Feature parsing & intent classification
    parseFeature,
    classifyIntent,

    // Benefit mapper
    getBenefits,

    // Copy generation
    titleCase,
    feature(spec, category, index) {
      const parsed = parseFeature(spec);
      const classification = classifyIntent(spec);
      const intent = classification.primary;
      return {
        title: buildTitle(spec, intent, category, parsed),
        description: buildDescription(spec, intent, category, index || 0, parsed),
        intent,
        confidence: classification.confidence,
      };
    },

    keyword(spec, category) {
      return buildKeyword(spec, category);
    },

    heroLead(featureTitle, category, productType) {
      return buildHeroLead(featureTitle, category, productType);
    },

    softwareCards(specs, category) {
      return buildSoftwareCards(specs, category);
    },

    mergeSpecs(specs, category) {
      return buildMergedSpecs(specs, category);
    },
  };
})();

// Expose globally for app.js compatibility
if (typeof window !== 'undefined') {
  window.CopyEngine = CopyEngine;
}
