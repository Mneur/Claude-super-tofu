const THEMES = {
  "fantech-gaming": {
    label: "Fantech Gaming",
    brandName: "FANTECH",
    colors: {
      primary: "#E70012",
      topbarBg: "#14171C",
      priceStripBg: "#1A1A1A",
      footerRightColor: "#E70012",
    },
  },
  office: {
    label: "Office",
    brandName: "FANTECH",
    colors: {
      primary: "#1A1A1A",
      topbarBg: "#1A1A1A",
      priceStripBg: "#1A1A1A",
      footerRightColor: "#1A1A1A",
    },
  },
  "finecoustic-audio": {
    label: "Audio",
    brandName: "FINECOUSTIC",
    colors: {
      primary: "#FFCC00",
      topbarBg: "#1C1814",
      priceStripBg: "#1A1A1A",
      footerRightColor: "#FFCC00",
    },
  },
};

const I18N = {
  en: {
    pageTitle: "Offering Builder",
    pageLede: "Fill product facts, upload images, and generate a new Internal Offering.",
    themesLabel: "Allowed themes",
    pageSizeLabel: "Locked page size",
    modeLabel: "Current mode",
    loadDemo: "Load Demo",
    generate: "Generate Offering",
    intakeTitle: "Structured Intake",
    intakeLede: "Fill product facts only. The system generates the offering copy around them.",
    previewTitle: "Generated Output Preview",
    previewLede: "The preview updates as you type.",
    markdownTab: "Brief Markdown",
    validationTab: "Validation",
    showOverride: "Edit Generated Copy",
    hideOverride: "Hide Generated Copy Editing",
    themeCoreTitle: "Theme and Product Core",
    themeCoreNote: "Fill product facts only. The system can generate selling-point copy from your specs.",
    theme: "Theme",
    documentMonth: "Document Month",
    productName: "Product Name",
    productModel: "Product Model",
    productType: "Product Type",
    colorVariant: "Color Variant",
    mainSellingPoint: "Main Selling Point",
    mainSellingPointHelp: "Tell the system which spec is your biggest story. Leave blank to let it choose.",
    hasSoftware: "Has Software / Driver",
    specSellingPoints: "Spec Selling Points",
    specSellingPointsHelp: "Enter raw specs only, one per line. Example: 5-PIN hot swappable",
    specKeywords: "Spec Keywords",
    specKeywordsHelp: "Optional. Leave blank and it will be auto-generated.",
    heroTitle: "Hero Scene",
    heroNote: "This is the top-left main image area in the final offering. Upload your main image and the scene title can be auto-generated.",
    sceneTitle: "Scene Title",
    sceneTitleHelp: "Optional. Leave blank to auto-generate.",
    heroPrompt: "Hero Prompt Fallback",
    heroPromptHelp: "Optional. Use only when you do not upload a hero image.",
    imagesTitle: "Images",
    imagesNote: "Upload images directly into the matching slots. By default the two product PNGs are treated as TOP VIEW and ANGLE VIEW unless you explicitly provide real mode-state differences.",
    heroImage: "Hero Image",
    bottomLeftImage: "Bottom Left Image",
    bottomRightImage: "Bottom Right Image",
    driverImage1: "Driver Image 1",
    driverImage2: "Driver Image 2",
    imageHelp: "Upload an image directly here.",
    imageUploaded: "Image uploaded",
    imageEmpty: "No image selected yet",
    priceTitle: "Price Strip",
    priceNote: "Bottom black commercial strip.",
    price: "Price",
    priceSub: "Price Sub-label",
    moq: "MOQ",
    moqSub: "MOQ Sub-label",
    color: "Color",
    colorSub: "Color Sub-label",
    boxSize: "Box Size",
    boxSizeSub: "Box Size Sub-label",
    cartonQty: "Carton Qty",
    cartonQtySub: "Carton Qty Sub-label",
    overrideFeaturesTitle: "Manual Override: Unique Features",
    overrideFeaturesNote: "Usually you can ignore this. Use it only if you want to rewrite the auto-generated feature copy.",
    overrideHeroTitle: "Manual Override: Hero Feature",
    overrideHeroNote: "Usually you can ignore this. Use it only if you want to rewrite the auto-generated hero feature copy.",
    overrideSoftwareTitle: "Manual Override: Software Control",
    overrideSoftwareNote: "Usually you can ignore this. Use it only if you want to rewrite the auto-generated software copy.",
    title: "Title",
    description: "Description",
    highlight: "Highlight in theme color",
    sectionTitle: "Section Title",
    leadDescription: "Lead Description",
    detail01Name: "Detail 01 Name",
    detail01Caption: "Detail 01 Caption",
    detail02Name: "Detail 02 Name",
    detail02Caption: "Detail 02 Caption",
    editor01Name: "Editor 01 Name",
    editor01Caption: "Editor 01 Caption",
    editor02Name: "Editor 02 Name",
    editor02Caption: "Editor 02 Caption",
    yes: "Yes",
    no: "No",
    checksPassed: "checks passed",
  },
  zh: {
    pageTitle: "Offering 生成器",
    pageLede: "填写产品事实、上传图片，然后自动生成新的 Internal Offering。",
    themesLabel: "可用主题",
    pageSizeLabel: "锁定页面尺寸",
    modeLabel: "当前状态",
    loadDemo: "加载示例",
    generate: "生成 Offering",
    intakeTitle: "信息填写",
    intakeLede: "你只需要填产品事实，系统会围绕这些事实自动生成 offering 文案。",
    previewTitle: "生成预览",
    previewLede: "你填写时，右侧预览会同步更新。",
    markdownTab: "文档预览",
    validationTab: "校验",
    showOverride: "修改自动文案",
    hideOverride: "收起自动文案修改",
    themeCoreTitle: "主题与产品基础信息",
    themeCoreNote: "只填产品事实，系统会根据规格自动生成卖点文案。",
    theme: "主题",
    documentMonth: "文档月份",
    productName: "产品名",
    productModel: "产品型号",
    productType: "产品类型",
    colorVariant: "颜色",
    mainSellingPoint: "最大卖点",
    mainSellingPointHelp: "告诉系统哪个规格是你的最大卖点。留空的话，我会自己判断。",
    hasSoftware: "是否有软件 / 驱动",
    specSellingPoints: "规格卖点",
    specSellingPointsHelp: "只填原始规格，一行一个。例如：5-PIN hot swappable",
    specKeywords: "关键词",
    specKeywordsHelp: "可选。留空的话，我会自动生成。",
    heroTitle: "主图场景",
    heroNote: "这就是最终 offering 左上角那张主图区域。你上传主图即可，场景标题可以自动生成。",
    sceneTitle: "场景标题",
    sceneTitleHelp: "可选。留空自动生成。",
    heroPrompt: "主图提示词备用",
    heroPromptHelp: "可选。只有没上传主图时才会用到。",
    imagesTitle: "图片上传",
    imagesNote: "直接把图片上传到对应位置，不需要再手动填写图片路径。默认情况下，两张产品 PNG 会按 TOP VIEW 和 ANGLE VIEW 处理，除非你明确提供的是模式变化图。",
    heroImage: "主图",
    bottomLeftImage: "左下图",
    bottomRightImage: "右下图",
    driverImage1: "驱动图 1",
    driverImage2: "驱动图 2",
    imageHelp: "直接在这里上传图片。",
    imageUploaded: "已上传图片",
    imageEmpty: "还没有选择图片",
    priceTitle: "底部价格条",
    priceNote: "最终页面底部黑色商业信息条。",
    price: "价格",
    priceSub: "价格副标题",
    moq: "MOQ",
    moqSub: "MOQ 副标题",
    color: "颜色",
    colorSub: "颜色副标题",
    boxSize: "彩盒尺寸",
    boxSizeSub: "彩盒副标题",
    cartonQty: "装箱数",
    cartonQtySub: "装箱数副标题",
    overrideFeaturesTitle: "手动微调：产品卖点",
    overrideFeaturesNote: "通常你不用动这里。只有你不满意自动生成的卖点文案时，才展开手改。",
    overrideHeroTitle: "手动微调：Hero Feature",
    overrideHeroNote: "通常你不用动这里。只有你不满意自动生成的最大卖点展开文案时，才展开手改。",
    overrideSoftwareTitle: "手动微调：Software Control",
    overrideSoftwareNote: "通常你不用动这里。只有你不满意自动生成的软件文案时，才展开手改。",
    title: "标题",
    description: "内容",
    highlight: "用主题色高亮",
    sectionTitle: "区块标题",
    leadDescription: "区块描述",
    detail01Name: "细节图 01 标题",
    detail01Caption: "细节图 01 内容",
    detail02Name: "细节图 02 标题",
    detail02Caption: "细节图 02 内容",
    editor01Name: "驱动图 01 标题",
    editor01Caption: "驱动图 01 内容",
    editor02Name: "驱动图 02 标题",
    editor02Caption: "驱动图 02 内容",
    yes: "有",
    no: "没有",
    checksPassed: "项通过",
  },
};

function t(key) {
  return I18N[currentLang][key] ?? I18N.en[key] ?? key;
}

const defaultData = {
  themeId: "fantech-gaming",
  documentMonth: "2026-06",
  productName: "",
  productModel: "",
  productType: "",
  colorVariant: "",
  mainSellingPoint: "",
  hasSoftware: "yes",
  specSellingPointsText: "",
  specKeywords: "",
  sceneTitle: "",
  heroImage: "",
  heroPrompt: "",
  uniqueFeatures: Array.from({ length: 6 }, () => ({ title: "", description: "", highlight: false })),
  heroFeature: {
    sectionTitle: "",
    leadDescription: "",
    detail1Name: "",
    detail1Image: "",
    detail1Caption: "",
    detail2Name: "",
    detail2Image: "",
    detail2Caption: "",
  },
  softwareControl: {
    sectionTitle: "",
    leadDescription: "",
    editor1Name: "",
    editor1Image: "",
    editor1Caption: "",
    editor2Name: "",
    editor2Image: "",
    editor2Caption: "",
  },
  priceStrip: {
    price: "¥ TBD",
    priceSub: "RMB · Tax excl. · Full pkg",
    moq: "",
    moqSub: "Min. order qty",
    color: "",
    colorSub: "OEM colorway available",
    boxSize: "",
    boxSizeSub: "To be confirmed",
    cartonQty: "",
    cartonQtySub: "Per master carton",
  },
};

const sampleData = {
  ...structuredClone(defaultData),
  documentMonth: "2026-05",
  productName: "SUPER MAXFIT",
  productModel: "WMK702",
  productType: "Wireless Mechanical Keyboard",
  colorVariant: "Gray",
  mainSellingPoint: "LED Matrix Display",
  hasSoftware: "yes",
  specSellingPointsText: [
    "Tri-Mode Connectivity",
    "5-PIN Hot Swappable",
    "LED Matrix Display",
    "Dual Knob Control",
    "8000 mAh Battery",
    "Gasket Mount",
    "Advanced Software Support",
  ].join("\n"),
  heroPrompt: "Premium keyboard on a designer desk with pixel accessories and warm studio light.",
};

let state = structuredClone(defaultData);
let advancedMode = false;
let currentLang = "en";

const formSections = document.getElementById("formSections");
const previewMarkdown = document.getElementById("previewMarkdown");
const previewChecks = document.getElementById("previewChecks");
const validationSummary = document.getElementById("validationSummary");

function renderApp() {
  formSections.innerHTML = "";
  formSections.appendChild(buildFieldSection({
    title: t("themeCoreTitle"),
    note: t("themeCoreNote"),
    fields: [
      { path: "themeId", label: t("theme"), type: "select", options: Object.entries(THEMES).map(([value, item]) => ({ value, label: item.label })) },
      { path: "documentMonth", label: t("documentMonth"), type: "month" },
      { path: "productName", label: t("productName"), type: "text" },
      { path: "productModel", label: t("productModel"), type: "text" },
      { path: "productType", label: t("productType"), type: "text" },
      { path: "colorVariant", label: t("colorVariant"), type: "text" },
      { path: "mainSellingPoint", label: t("mainSellingPoint"), type: "text", full: true, help: t("mainSellingPointHelp") },
      {
        path: "hasSoftware",
        label: t("hasSoftware"),
        type: "select",
        options: [
          { value: "yes", label: t("yes") },
          { value: "no", label: t("no") },
        ],
      },
      { path: "specSellingPointsText", label: t("specSellingPoints"), type: "textarea", full: true, help: t("specSellingPointsHelp") },
      { path: "specKeywords", label: t("specKeywords"), type: "text", full: true, help: t("specKeywordsHelp") },
    ],
  }));

  formSections.appendChild(buildFieldSection({
    title: t("heroTitle"),
    note: t("heroNote"),
    fields: [
      { path: "sceneTitle", label: t("sceneTitle"), type: "text", help: t("sceneTitleHelp") },
      { path: "heroPrompt", label: t("heroPrompt"), type: "textarea", full: true, help: t("heroPromptHelp") },
    ],
  }));

  formSections.appendChild(buildImageSection());
  formSections.appendChild(buildPriceSection());

  if (advancedMode) {
    formSections.appendChild(buildFeatureSection());
    formSections.appendChild(buildHeroFeatureSection());
    if (state.hasSoftware !== "no") {
      formSections.appendChild(buildSoftwareSection());
    }
  }

  bindInputs();
  refreshOutputs();
  syncAdvancedToggle();
}

function buildFieldSection(section) {
  const wrapper = document.createElement("section");
  wrapper.className = "group";
  wrapper.innerHTML = `
    <div class="section-head">
      <h3>${escapeHtml(section.title)}</h3>
      <p>${escapeHtml(section.note)}</p>
    </div>
    <div class="field-grid">
      ${section.fields.map(buildFieldMarkup).join("")}
    </div>
  `;
  return wrapper;
}

function buildFieldMarkup(field) {
  if (field.type === "select") {
    return `
      <div class="field ${field.full ? "full" : ""}">
        <label>${escapeHtml(field.label)}</label>
        <select data-path="${field.path}">
          ${field.options.map((option) => `<option value="${escapeAttribute(option.value)}" ${getValueByPath(state, field.path) === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
        ${field.help ? `<small>${escapeHtml(field.help)}</small>` : ""}
      </div>
    `;
  }

  if (field.type === "textarea") {
    return `
      <div class="field ${field.full ? "full" : ""}">
        <label>${escapeHtml(field.label)}</label>
        <textarea data-path="${field.path}">${escapeHtml(getValueByPath(state, field.path) || "")}</textarea>
        ${field.help ? `<small>${escapeHtml(field.help)}</small>` : ""}
      </div>
    `;
  }

  return `
    <div class="field ${field.full ? "full" : ""}">
      <label>${escapeHtml(field.label)}</label>
      <input type="${field.type}" data-path="${field.path}" value="${escapeAttribute(getValueByPath(state, field.path) || "")}">
      ${field.help ? `<small>${escapeHtml(field.help)}</small>` : ""}
    </div>
  `;
}

function buildImageSection() {
  const wrapper = document.createElement("section");
  wrapper.className = "group";
  wrapper.innerHTML = `
    <div class="section-head">
      <h3>${escapeHtml(t("imagesTitle"))}</h3>
      <p>${escapeHtml(t("imagesNote"))}</p>
    </div>
    <div class="field-grid">
      ${buildImageField("heroImage", t("heroImage"))}
      ${buildImageField("heroFeature.detail1Image", t("bottomLeftImage"))}
      ${buildImageField("heroFeature.detail2Image", t("bottomRightImage"))}
      ${state.hasSoftware !== "no" ? buildImageField("softwareControl.editor1Image", t("driverImage1")) : ""}
      ${state.hasSoftware !== "no" ? buildImageField("softwareControl.editor2Image", t("driverImage2")) : ""}
    </div>
  `;
  return wrapper;
}

function buildPriceSection() {
  return buildNestedSection(t("priceTitle"), t("priceNote"), [
    ["priceStrip.price", t("price")],
    ["priceStrip.priceSub", t("priceSub")],
    ["priceStrip.moq", t("moq")],
    ["priceStrip.moqSub", t("moqSub")],
    ["priceStrip.color", t("color")],
    ["priceStrip.colorSub", t("colorSub")],
    ["priceStrip.boxSize", t("boxSize")],
    ["priceStrip.boxSizeSub", t("boxSizeSub")],
    ["priceStrip.cartonQty", t("cartonQty")],
    ["priceStrip.cartonQtySub", t("cartonQtySub")],
  ]);
}

function buildFeatureSection() {
  const wrapper = document.createElement("section");
  wrapper.className = "group advanced";
  const features = withAutoDerivedFields(state).uniqueFeatures.filter((item) => item.title);
  wrapper.innerHTML = `
    <div class="section-head">
      <h3>${escapeHtml(t("overrideFeaturesTitle"))}</h3>
      <p>${escapeHtml(t("overrideFeaturesNote"))}</p>
    </div>
    <div class="repeat-grid">
      ${features.map((item, index) => `
        <div class="card">
          <h4>Feature ${index + 1}</h4>
          <div class="field-grid">
            <div class="field full">
              <label>${escapeHtml(t("title"))}</label>
              <input type="text" data-path="uniqueFeatures.${index}.title" value="${escapeAttribute(state.uniqueFeatures[index]?.title || "")}" placeholder="${escapeAttribute(item.title)}">
            </div>
            <div class="field full">
              <label>${escapeHtml(t("description"))}</label>
              <textarea data-path="uniqueFeatures.${index}.description" placeholder="${escapeAttribute(item.description)}">${escapeHtml(state.uniqueFeatures[index]?.description || "")}</textarea>
            </div>
            <div class="field full">
              <label class="inline-check">
                <input type="checkbox" data-path="uniqueFeatures.${index}.highlight" ${state.uniqueFeatures[index]?.highlight ? "checked" : ""}>
                ${escapeHtml(t("highlight"))}
              </label>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  return wrapper;
}

function buildHeroFeatureSection() {
  const hero = withAutoDerivedFields(state).heroFeature;
  return buildNestedSection(t("overrideHeroTitle"), t("overrideHeroNote"), [
    ["heroFeature.sectionTitle", t("sectionTitle"), "text", hero.sectionTitle],
    ["heroFeature.leadDescription", t("leadDescription"), "textarea", hero.leadDescription],
    ["heroFeature.detail1Name", t("detail01Name"), "text", hero.detail1Name],
    ["heroFeature.detail1Caption", t("detail01Caption"), "textarea", hero.detail1Caption],
    ["heroFeature.detail2Name", t("detail02Name"), "text", hero.detail2Name],
    ["heroFeature.detail2Caption", t("detail02Caption"), "textarea", hero.detail2Caption],
  ], true);
}

function buildSoftwareSection() {
  const software = withAutoDerivedFields(state).softwareControl;
  return buildNestedSection(t("overrideSoftwareTitle"), t("overrideSoftwareNote"), [
    ["softwareControl.sectionTitle", t("sectionTitle"), "text", software.sectionTitle],
    ["softwareControl.leadDescription", t("leadDescription"), "textarea", software.leadDescription],
    ["softwareControl.editor1Name", t("editor01Name"), "text", software.editor1Name],
    ["softwareControl.editor1Caption", t("editor01Caption"), "textarea", software.editor1Caption],
    ["softwareControl.editor2Name", t("editor02Name"), "text", software.editor2Name],
    ["softwareControl.editor2Caption", t("editor02Caption"), "textarea", software.editor2Caption],
  ], true);
}

function buildNestedSection(title, note, fields, advanced = false) {
  const wrapper = document.createElement("section");
  wrapper.className = advanced ? "group advanced" : "group";
  wrapper.innerHTML = `
    <div class="section-head">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(note)}</p>
    </div>
    <div class="field-grid">
      ${fields.map(([path, label, type, placeholder]) => type === "textarea"
        ? buildTextarea(path, label, placeholder)
        : buildInput(path, label, placeholder)).join("")}
    </div>
  `;
  return wrapper;
}

function buildInput(path, label, placeholder = "") {
  return `
    <div class="field">
      <label>${escapeHtml(label)}</label>
      <input type="text" data-path="${path}" value="${escapeAttribute(getValueByPath(state, path) || "")}" placeholder="${escapeAttribute(placeholder || "")}">
    </div>
  `;
}

function buildTextarea(path, label, placeholder = "") {
  return `
    <div class="field full">
      <label>${escapeHtml(label)}</label>
      <textarea data-path="${path}" placeholder="${escapeAttribute(placeholder || "")}">${escapeHtml(getValueByPath(state, path) || "")}</textarea>
    </div>
  `;
}

function buildImageField(path, label) {
  const currentValue = getValueByPath(state, path) || "";
  const uploadHint = currentValue.startsWith("data:image/") ? t("imageUploaded") : t("imageEmpty");
  return `
    <div class="field full">
      <label>${escapeHtml(label)}</label>
      <input type="file" data-upload-path="${path}" accept="image/*">
      <small>${escapeHtml(t("imageHelp"))} Current: ${escapeHtml(uploadHint)}</small>
    </div>
  `;
}

function bindInputs() {
  document.querySelectorAll("[data-path]").forEach((input) => {
    input.addEventListener("input", handleInput);
    input.addEventListener("change", handleInput);
  });
  document.querySelectorAll("[data-upload-path]").forEach((input) => {
    input.addEventListener("change", handleFileUpload);
  });
}

function handleInput(event) {
  const { path } = event.target.dataset;
  const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  setValueByPath(state, path, value);
  if (path === "hasSoftware" && value === "no") {
    state.softwareControl = structuredClone(defaultData.softwareControl);
    renderApp();
    return;
  }
  refreshOutputs();
}

async function handleFileUpload(event) {
  const file = event.target.files?.[0];
  const path = event.target.dataset.uploadPath;
  if (!file || !path) return;
  setValueByPath(state, path, await fileToDataUrl(file));
  refreshOutputs();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Failed to read image file."));
    reader.readAsDataURL(file);
  });
}

function refreshOutputs() {
  const filled = withAutoDerivedFields(state);
  previewMarkdown.textContent = buildBriefMarkdown(filled);
  const checks = validateState(state);
  validationSummary.textContent = `${checks.passed}/${checks.items.length} ${t("checksPassed")}`;
  previewChecks.innerHTML = checks.items.map((item) => `
    <div class="check-item ${item.ok ? "pass" : "fail"}">
      <strong>${item.ok ? "PASS" : "CHECK"}</strong> ${escapeHtml(item.message)}
    </div>
  `).join("");
}

function validateState(data) {
  const items = [
    check(data.productName, "Product name is required."),
    check(data.productModel, "Product model is required."),
    check(data.productType, "Product type is required."),
    check(data.colorVariant, "Color variant is required."),
    check(data.specSellingPointsText, "Spec selling points are required."),
    check(data.heroImage || data.heroPrompt, "Either a hero image upload or a hero prompt is required."),
    check(data.priceStrip.price, "Price is required."),
    check(data.priceStrip.moq, "MOQ is required."),
    check(data.priceStrip.color, "Color is required."),
    check(data.priceStrip.cartonQty, "Carton quantity is required."),
  ];

  const keywordsCount = String(deriveSpecKeywords(data)).split(" · ").map((part) => part.trim()).filter(Boolean).length;
  items.push({ ok: keywordsCount >= 3 && keywordsCount <= 4, message: "Spec keywords should contain 3 to 4 generated items." });
  return { items, passed: items.filter((item) => item.ok).length };
}

function check(value, message) {
  return { ok: Boolean(String(value || "").trim()), message };
}

function buildBriefMarkdown(data) {
  const monthLabel = formatMonthLabel(data.documentMonth);
  const features = data.uniqueFeatures.filter((item) => item.title);
  const featureBlock = features.map((item, index) => `${index + 1}. ${item.title}\n   ${item.description}`).join("\n\n");
  return `# Internal Offering Brief · ${data.productName || "[PRODUCT NAME]"}

## Theme
Theme: ${THEMES[data.themeId].label}
Document Date: ${monthLabel}

## Product Core
Product Name: ${data.productName}
Product Model: ${data.productModel}
Product Type: ${data.productType}
Color Variant: ${data.colorVariant}
Main Selling Point: ${data.mainSellingPoint}
Has Software / Driver: ${data.hasSoftware}
Spec Selling Points:
${parseSpecLines(data.specSellingPointsText).map((item) => `- ${item}`).join("\n")}
Spec Keywords: ${data.specKeywords}

## Hero Scene
Scene Title: ${data.sceneTitle}
Hero Prompt: ${data.heroPrompt}

## Generated Unique Features
${featureBlock}
`;
}

function buildOfferingHtml(data) {
  const theme = THEMES[data.themeId];
  const monthLabel = formatMonthLabel(data.documentMonth);
  const footerMonth = monthLabel.toUpperCase();
  const features = data.uniqueFeatures.filter((item) => item.title);
  const featureItemsHtml = features.map((item) => `
    <div class="feature-item">
      <div class="feature-name ${item.highlight ? "red" : ""}">${escapeHtml(item.title)}</div>
      <div class="feature-desc">${escapeHtml(item.description)}</div>
    </div>
  `).join("");
  const hasSoftware = data.hasSoftware !== "no";
  const isViewShowcase = data.showcaseType === "VIEW_SHOWCASE";
  const showcaseCardsHtml = isViewShowcase
    ? `
        <div class="mode-cell">
          <div class="mode-card simple-view">
            <div class="mode-tag">${escapeHtml(data.heroFeature.detail1Name || "TOP VIEW")}</div>
            <div class="mode-title"></div>
            <div class="mode-img">${mediaBlock(data.heroFeature.detail1Image, "TOP VIEW", "", "mode-fit")}</div>
          </div>
        </div>
        <div class="mode-cell">
          <div class="mode-card simple-view">
            <div class="mode-tag">${escapeHtml(data.heroFeature.detail2Name || "ANGLE VIEW")}</div>
            <div class="mode-title"></div>
            <div class="mode-img">${mediaBlock(data.heroFeature.detail2Image, "ANGLE VIEW", "", "mode-fit")}</div>
          </div>
        </div>
      `
    : `
        <div class="mode-cell">
          <div class="mode-card">
            <div class="mode-tag">MODE 01</div>
            <div class="mode-title">${escapeHtml(data.heroFeature.detail1Name)}</div>
            <div class="mode-img">${mediaBlock(data.heroFeature.detail1Image, "MODE 01", "", "mode-fit")}</div>
            <div class="mode-desc">${escapeHtml(data.heroFeature.detail1Caption)}</div>
          </div>
        </div>
        <div class="mode-cell">
          <div class="mode-card">
            <div class="mode-tag">MODE 02</div>
            <div class="mode-title">${escapeHtml(data.heroFeature.detail2Name)}</div>
            <div class="mode-img">${mediaBlock(data.heroFeature.detail2Image, "MODE 02", "", "mode-fit")}</div>
            <div class="mode-desc">${escapeHtml(data.heroFeature.detail2Caption)}</div>
          </div>
        </div>
      `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(data.productName)} - Internal Offering</title>
<style>
  :root {
    --primary: ${theme.colors.primary};
    --topbar-bg: ${theme.colors.topbarBg};
    --price-strip-bg: ${theme.colors.priceStripBg};
    --footer-right-color: ${theme.colors.footerRightColor};
  }
  @page { size: 264.6mm 396.9mm; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { font-family: 'Poppins', 'Segoe UI', sans-serif; font-size: 9pt; color: #14171C; background: #FFF; line-height: 1.35; }
  .page { width: 264.6mm; height: 396.9mm; position: relative; }
  .topbar { background: var(--topbar-bg); color: #FFF; padding: 4mm 8mm 3mm; width: 100%; display: table; }
  .topbar-left, .topbar-right, .title-left, .title-right, .hero-left, .hero-right, .fr-left, .fr-right, .price-cell, .footer-left, .footer-right { display: table-cell; vertical-align: top; }
  .topbar-right { text-align: right; font-size: 7pt; color: #BEC3CB; }
  .brand-chip { display: inline-block; color: #FFF; font-weight: 700; letter-spacing: 0.8pt; margin-right: 6pt; }
  .topbar-title { display: inline-block; color: #FFF; font-size: 7pt; letter-spacing: 1.4pt; }
  .model-line { padding: 3mm 8mm 2mm; display: table; width: 100%; border-bottom: 1.4pt solid var(--primary); }
  .product-name { font-size: 16pt; font-weight: 700; color: #14171C; }
  .product-model { display: block; font-size: 8pt; color: #6A7280; margin-top: 0.6mm; }
  .product-type { display: inline-block; border: 1pt solid #E5E7EB; color: #525864; font-size: 7pt; padding: 1pt 5pt; margin-top: 1.5mm; }
  .title-right { text-align: right; font-size: 6.8pt; color: #525864; vertical-align: middle; letter-spacing: 0.6pt; }
  .hero-block { width: 100%; display: table; padding: 2mm 8mm 0; }
  .hero-left { width: 49%; padding-right: 4mm; }
  .hero-right { width: 51%; padding-left: 4mm; }
  .section-chip { display: inline-block; background: var(--primary); color: #FFF; font-size: 6.5pt; padding: 1.4pt 5pt; letter-spacing: 0.8pt; font-weight: 700; }
  .section-title-inline { display: inline-block; margin-left: 4pt; font-size: 8.5pt; font-weight: 700; color: #14171C; }
  .hero-media, .detail-media, .editor-media { width: 100%; border-radius: 2pt; overflow: hidden; background: #F4F4F4; border: 1pt solid #E5E7EB; display: table; }
  .hero-media { height: 52mm; margin-top: 2mm; }
  .detail-media { height: 24mm; margin-bottom: 2mm; }
  .editor-media { height: 20mm; margin-bottom: 2mm; }
  .media-inner { display: table-cell; vertical-align: middle; text-align: center; color: #AAB0B8; font-size: 7pt; padding: 4mm; }
  .media-inner img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .features-title { font-size: 7pt; color: #6A7280; letter-spacing: 1pt; margin-bottom: 2.5mm; font-weight: 700; }
  .feature-item { margin-bottom: 3.4mm; padding-left: 4.5mm; position: relative; }
  .feature-item::before { content: ''; width: 1.7mm; height: 1.7mm; background: var(--primary); border-radius: 50%; position: absolute; left: 0; top: 1.8mm; }
  .feature-name { font-size: 8.2pt; font-weight: 700; color: #14171C; line-height: 1.28; margin-bottom: 0.6mm; }
  .feature-name.red { color: var(--primary); }
  .feature-desc { font-size: 7.2pt; color: #566171; line-height: 1.34; }
  .feature-row { width: 100%; display: table; padding: 2mm 8mm 0; }
  .fr-left, .fr-right { vertical-align: top; }
  .fr-left { width: ${hasSoftware ? "50%" : "100%"}; padding-right: ${hasSoftware ? "5mm" : "0"}; border-top: 2pt solid var(--primary); padding-top: 3mm; }
  .fr-right { width: 50%; padding-left: 5mm; border-top: 1pt solid #E5E7EB; border-left: 1pt solid #E5E7EB; padding-top: 3mm; }
  .feature-sub { font-size: 7.2pt; color: #566171; margin: 2mm 0 3mm; }
  .card-row { width: 100%; display: table; }
  .card-cell { width: 50%; display: table-cell; vertical-align: top; }
  .card-cell:first-child { padding-right: 2.5mm; }
  .card-cell:last-child { padding-left: 2.5mm; }
  .card { background: #FAFAFA; border: 1pt solid #E5E7EB; padding: 2.5mm 3mm; }
  .card-tag { font-size: 6.1pt; color: var(--primary); letter-spacing: 0.8pt; font-weight: 700; margin-bottom: 0.6mm; }
  .card-title { font-size: 8pt; font-weight: 700; color: #14171C; margin-bottom: 2mm; line-height: 1.25; }
  .card-desc { font-size: 7pt; color: #566171; line-height: 1.32; text-align: center; }
  .price-strip { position: absolute; left: 0; right: 0; bottom: 9mm; background: var(--price-strip-bg); display: table; width: 100%; table-layout: fixed; }
  .price-cell { padding: 3mm 4mm; border-right: 1pt solid #2A2D33; }
  .price-cell:last-child { border-right: none; }
  .price-label { font-size: 6.2pt; color: #B8BCC5; letter-spacing: 0.9pt; margin-bottom: 1mm; }
  .price-value { font-size: 12pt; font-weight: 700; color: #FFF; line-height: 1.08; }
  .price-value.red { color: var(--primary); font-size: 14pt; }
  .price-suffix { font-size: 6.5pt; color: #B8BCC5; margin-top: 0.7mm; }
  .footer { position: absolute; left: 0; right: 0; bottom: 3mm; padding: 0 8mm; width: 100%; display: table; font-size: 6.3pt; color: #6A7280; }
  .footer-right { text-align: right; color: var(--footer-right-color); font-weight: 800; letter-spacing: 0.8pt; }
</style>
</head>
<body>
<div class="page">
  <div class="topbar">
    <div class="topbar-left">
      <span class="brand-chip">${escapeHtml(theme.brandName)}</span>
      <span class="topbar-title">INTERNAL OFFERING</span>
    </div>
    <div class="topbar-right">Document Date<br><b>${escapeHtml(monthLabel)}</b></div>
  </div>
  <div class="model-line">
    <div class="title-left">
      <div class="product-name">${escapeHtml(data.productName)}</div>
      <span class="product-model">${escapeHtml(data.productModel)}</span>
      <span class="product-type">${escapeHtml(data.productType)}</span>
    </div>
    <div class="title-right">${escapeHtml(data.specKeywords)}</div>
  </div>
  <div class="hero-block">
    <div class="hero-left">
      <div>
        <span class="section-chip">APPLICATION SCENE</span>
        <span class="section-title-inline">${escapeHtml(data.sceneTitle)}</span>
      </div>
      ${mediaBlock(data.heroImage, "HERO IMAGE", data.heroPrompt, "hero-media")}
    </div>
    <div class="hero-right">
      <div class="features-title">PRODUCT UNIQUE FEATURES</div>
      ${featureItemsHtml}
    </div>
  </div>
  <div class="feature-row">
    <div class="fr-left">
      <div>
        <span class="section-chip">KEY FEATURE</span>
        <span class="section-title-inline">${escapeHtml(data.heroFeature.sectionTitle)}</span>
      </div>
      <div class="feature-sub">${escapeHtml(data.heroFeature.leadDescription)}</div>
      <div class="card-row">
        ${showcaseCardsHtml}
      </div>
    </div>
    ${hasSoftware ? `<div class="fr-right">
      <div>
        <span class="section-chip">SOFTWARE CONTROL</span>
        <span class="section-title-inline">${escapeHtml(data.softwareControl.sectionTitle)}</span>
      </div>
      <div class="feature-sub">${escapeHtml(data.softwareControl.leadDescription)}</div>
      <div class="card-row">
        <div class="card-cell">
          <div class="card">
            ${mediaBlock(data.softwareControl.editor1Image, "SW-01", data.softwareControl.editor1Name, "editor-media")}
            <div class="card-title">${escapeHtml(data.softwareControl.editor1Name)}</div>
            <div class="card-desc">${escapeHtml(data.softwareControl.editor1Caption)}</div>
          </div>
        </div>
        <div class="card-cell">
          <div class="card">
            ${mediaBlock(data.softwareControl.editor2Image, "SW-02", data.softwareControl.editor2Name, "editor-media")}
            <div class="card-title">${escapeHtml(data.softwareControl.editor2Name)}</div>
            <div class="card-desc">${escapeHtml(data.softwareControl.editor2Caption)}</div>
          </div>
        </div>
      </div>
    </div>` : ""}
  </div>
  <div class="price-strip">
    ${priceCell("EX-WORKS PRICE", data.priceStrip.price, data.priceStrip.priceSub, true)}
    ${priceCell("MOQ", data.priceStrip.moq, data.priceStrip.moqSub)}
    ${priceCell("COLOR", data.priceStrip.color, data.priceStrip.colorSub)}
    ${priceCell("BOX SIZE", data.priceStrip.boxSize, data.priceStrip.boxSizeSub)}
    ${priceCell("CARTON QTY", data.priceStrip.cartonQty, data.priceStrip.cartonQtySub)}
  </div>
  <div class="footer">
    <div class="footer-left">${escapeHtml(data.productName)} · ${escapeHtml(data.productModel)} · ${escapeHtml(data.colorVariant)} · ${escapeHtml(theme.brandName)} Internal Offering</div>
    <div class="footer-right">INTERNAL OFFERING - ${escapeHtml(footerMonth)}</div>
  </div>
</div>
</body>
</html>`;
}

function mediaBlock(path, label, hint, className) {
  if (String(path || "").startsWith("data:image/")) {
    if (className === "mode-fit" || className === "sw-fit" || className === "hero-fit") {
      return `<img class="${className}" src="${escapeAttribute(path)}" alt="${escapeAttribute(label)}">`;
    }
    return `<div class="${className}"><div class="media-inner"><img src="${escapeAttribute(path)}" alt="${escapeAttribute(label)}"></div></div>`;
  }
  if (className === "mode-fit" || className === "sw-fit" || className === "hero-fit") {
    return `<div class="img-inner"><div>${escapeHtml(label)}</div><div>${escapeHtml(hint || "Image pending")}</div></div>`;
  }
  return `<div class="${className}"><div class="media-inner"><div>${escapeHtml(label)}</div><div>${escapeHtml(hint || "Image pending")}</div></div></div>`;
}

function priceCell(label, value, suffix, highlight = false) {
  return `<div class="price-cell"><div class="price-label">${escapeHtml(label)}</div><div class="price-value ${highlight ? "red" : ""}">${escapeHtml(value)}</div><div class="price-suffix">${escapeHtml(suffix)}</div></div>`;
}

function withAutoDerivedFields(data) {
  const sceneTitle = deriveSceneTitle(data);
  const specKeywords = deriveSpecKeywords(data);
  const uniqueFeatures = deriveUniqueFeatures(data);
  const heroFeature = deriveHeroFeature(data, uniqueFeatures);
  const softwareControl = deriveSoftwareControl(data);
  const showcaseType = determineShowcaseType(data);
  return { ...data, sceneTitle, specKeywords, uniqueFeatures, heroFeature, softwareControl, showcaseType };
}

function determineShowcaseType(data) {
  return "VIEW_SHOWCASE";
}

function deriveSceneTitle(data) {
  if (String(data.sceneTitle || "").trim()) return data.sceneTitle.trim();
  const theme = THEMES[data.themeId]?.label || "Gaming";
  return `${theme} Performance Setup`;
}

function deriveSpecKeywords(data) {
  const explicit = String(data.specKeywords || "").trim();
  if (explicit) return shortenKeywordLine(explicit);
  const specs = combineSpecsIfNeeded(parseSpecLines(data.specSellingPointsText));
  const picks = specs.slice(0, 4).map((spec) => keywordFromSpec(spec));
  const color = String(data.colorVariant || "").trim().toUpperCase();
  if (color) picks.push(color);
  return shortenKeywordLine(uniqueStrings(picks).slice(0, 5).join(" · "));
}

function deriveUniqueFeatures(data) {
  const specs = combineSpecsIfNeeded(parseSpecLines(data.specSellingPointsText));
  const normalizedMain = String(data.mainSellingPoint || "").trim().toLowerCase();
  const generated = specs.slice(0, 6).map((spec, index) => {
    const auto = featureFromSpec(spec);
    const manual = data.uniqueFeatures[index] || {};
    const highlight = normalizedMain ? spec.toLowerCase().includes(normalizedMain) : index === 0;
    return {
      title: manual.title || auto.title,
      description: manual.description || auto.description,
      highlight: typeof manual.highlight === "boolean" ? manual.highlight : highlight,
    };
  });
  return ensureUniqueFeatureCards(generated).filter((item) => item.title);
}

function deriveHeroFeature(data, features) {
  const normalizedMain = String(data.mainSellingPoint || "").trim().toLowerCase();
  const primary = features.find((item) => normalizedMain && item.title.toLowerCase().includes(normalizedMain))
    || features.find((item) => item.highlight)
    || features[0]
    || { title: "", description: "" };
  const secondary = features.find((item) => item.title && item.title !== primary.title) || { title: "ANGLE VIEW", description: "" };
  const isViewShowcase = determineShowcaseType(data) === "VIEW_SHOWCASE";
  const heroLead = buildHeroLead(primary.title, data.productType, data.mainSellingPoint || primary.title);
  return {
    sectionTitle: String(data.heroFeature.sectionTitle || "").trim() || shortenFeatureTitle(primary.title) || "Key Product Story",
    leadDescription: String(data.heroFeature.leadDescription || "").trim() || heroLead,
    detail1Name: String(data.heroFeature.detail1Name || "").trim() || (isViewShowcase ? "TOP VIEW" : shortenFeatureTitle(primary.title) || "MODE 01"),
    detail1Image: data.heroFeature.detail1Image || "",
    detail1Caption: isViewShowcase ? "" : (String(data.heroFeature.detail1Caption || "").trim() || primary.description || ""),
    detail2Name: String(data.heroFeature.detail2Name || "").trim() || (isViewShowcase ? "ANGLE VIEW" : shortenFeatureTitle(secondary.title) || "MODE 02"),
    detail2Image: data.heroFeature.detail2Image || "",
    detail2Caption: isViewShowcase ? "" : (String(data.heroFeature.detail2Caption || "").trim() || secondary.description || ""),
  };
}

function deriveSoftwareControl(data) {
  if (data.hasSoftware === "no") {
    return { sectionTitle: "", leadDescription: "", editor1Name: "", editor1Image: "", editor1Caption: "", editor2Name: "", editor2Image: "", editor2Caption: "" };
  }
  const specs = parseSpecLines(data.specSellingPointsText);
  const softwareSpecs = specs.filter((spec) => /software|driver|app|macro|editor|custom|lighting|keymap|eq|surround|display/i.test(spec));
  const productType = String(data.productType || "").toLowerCase();

  let generated;
  if (productType.includes("headset")) {
    generated = {
      sectionTitle: "Tune Every Session in Software",
      leadDescription: "Useful driver support gives this headset a stronger premium story at retail. It lets users shape both communication clarity and sound behavior from one place instead of relying on one fixed default.",
      card1: {
        title: "MIC EFFECT / AI ENC CONTROL",
        description: "Adjust microphone pickup, noise reduction, and voice effects for clearer team chat. Ideal for gaming, voice chat, and streaming use.",
      },
      card2: {
        title: "EQ + SURROUND CONTROL",
        description: "Customize EQ profiles and surround behavior for different content types. Switch sound signatures quickly for gaming, music, movies, and daily use.",
      },
    };
  } else if (productType.includes("keyboard")) {
    generated = {
      sectionTitle: "Customize Everything in One App",
      leadDescription: "A strong control app extends the product story beyond the first unboxing. It gives users more control over personalization and gives sellers a clearer upgrade angle.",
      card1: {
        title: "MATRIX DISPLAY EDITOR",
        description: "Upload animations, pixel art, or brand visuals to keep the display more personal and more eye-catching in demos.",
      },
      card2: {
        title: "KEYMAP + LIGHTING CONTROL",
        description: "Remap keys, build macros, and fine-tune ARGB lighting from one panel for a more complete enthusiast setup.",
      },
    };
  } else {
    const first = softwareSpecs[0] || "Software Customization";
    const second = softwareSpecs[1] || "Advanced Control";
    generated = {
      sectionTitle: "Customize Everything in One App",
      leadDescription: "Software control adds another premium layer to the product. It gives users more control in real use and gives retailers another reason to sell the upgrade story.",
      card1: {
        title: shortenFeatureTitle(titleFromSpec(first)),
        description: `${descriptionFromSpec(first)} Users can make more precise adjustments instead of relying on one fixed default.`,
      },
      card2: {
        title: shortenFeatureTitle(titleFromSpec(second)),
        description: `${descriptionFromSpec(second)} It also gives sellers a clearer upgrade conversation against simpler competing products.`,
      },
    };
  }

  return {
    sectionTitle: String(data.softwareControl.sectionTitle || "").trim() || generated.sectionTitle,
    leadDescription: String(data.softwareControl.leadDescription || "").trim() || generated.leadDescription,
    editor1Name: String(data.softwareControl.editor1Name || "").trim() || generated.card1.title,
    editor1Image: data.softwareControl.editor1Image || "",
    editor1Caption: String(data.softwareControl.editor1Caption || "").trim() || generated.card1.description,
    editor2Name: String(data.softwareControl.editor2Name || "").trim() || generated.card2.title,
    editor2Image: data.softwareControl.editor2Image || "",
    editor2Caption: String(data.softwareControl.editor2Caption || "").trim() || generated.card2.description,
  };
}

function parseSpecLines(value) {
  return String(value || "").split(/\r?\n/).map((line) => line.replace(/^[-*•]\s*/, "").trim()).filter(Boolean);
}

function combineSpecsIfNeeded(specs) {
  if (specs.length <= 6) return specs;
  const combined = [];
  for (let index = 0; index < specs.length; index += 2) {
    if (combined.length === 5) {
      combined.push(specs.slice(index).join(" + "));
      break;
    }
    const left = specs[index];
    const right = specs[index + 1];
    combined.push(right ? `${left} + ${right}` : left);
  }
  return combined.slice(0, 6);
}

function featureFromSpec(spec) {
  return { title: titleFromSpec(spec), description: descriptionFromSpec(spec) };
}

function titleFromSpec(spec) {
  const lower = spec.toLowerCase();
  if (lower.includes("retractable microphone")) return "RETRACTABLE MICROPHONE";
  if (lower.includes("quad-mode")) return "QUAD-MODE CONNECTION";
  if (lower.includes("hot swappable")) return "5-PIN HOT-SWAPPABLE SOCKETS";
  if (lower.includes("tri-mode")) return "TRI-MODE CONNECTIVITY";
  if (lower.includes("battery")) return "LONG-LIFE BATTERY PERFORMANCE";
  if (lower.includes("gasket")) return "GASKET-MOUNT TYPING FEEL";
  if (lower.includes("software") || lower.includes("driver")) return "ADVANCED SOFTWARE SUPPORT";
  if (lower.includes("rgb")) return "CUSTOM RGB LIGHTING";
  if (lower.includes("knob")) return "SMART KNOB CONTROL";
  if (lower.includes("matrix") || lower.includes("display")) return "BUILT-IN DISPLAY EXPERIENCE";
  if (lower.includes("ai enc")) return "AI ENC SUPPORT";
  if (lower.includes("surround")) return "7.1 VIRTUAL SURROUND";
  return spec.replace(/\s+/g, " ").trim().toUpperCase();
}

function descriptionFromSpec(spec) {
  const lower = spec.toLowerCase();
  if (lower.includes("retractable microphone")) return "A retractable mic keeps communication ready when needed while preserving a cleaner everyday look when voice chat is off. That makes the headset easier to use across both gaming and daily listening.";
  if (lower.includes("quad-mode")) return "More connection options reduce compatibility friction and make the product easier to position across gaming, mobile, and desktop use. It gives retailers a broader sell-in angle with one model.";
  if (lower.includes("hot swappable")) return "Users can change switches without soldering, which makes the keyboard easier to customize and much more attractive to enthusiast buyers. It also gives sellers a stronger mod-friendly story.";
  if (lower.includes("tri-mode")) return "Flexible wired and wireless switching makes the product fit more setups without extra friction. That versatility helps both users and retailers get more value from one SKU.";
  if (lower.includes("battery")) return "A stronger battery story improves real daily usability and gives the product a more confident wireless positioning. It is easier to sell when users do not worry about constant charging.";
  if (lower.includes("gasket")) return "A softer, more premium typing feel helps the product stand out when buyers compare comfort and sound quality side by side. It makes the product feel more refined, not just more technical.";
  if (lower.includes("software") || lower.includes("driver")) return "Software support extends the product beyond basic hardware use and gives buyers a clearer long-term value story.";
  if (lower.includes("rgb")) return "Lighting customization adds stronger desktop presence and makes the product more visually demonstrable in retail and creator content. It helps the product look more alive on first impression.";
  if (lower.includes("knob")) return "Dedicated physical control reduces friction in frequent daily actions and makes the product feel more intentional in use. It is the kind of tactile feature buyers notice immediately in demos.";
  if (lower.includes("matrix") || lower.includes("display")) return "An integrated display creates immediate visual differentiation and gives the product a more memorable identity on the desk. It helps retailers show something customers notice at first glance.";
  if (lower.includes("ai enc")) return "AI-assisted noise reduction improves voice clarity in team chat and helps the product feel more premium in real multiplayer use. It directly supports clearer communication where it matters most.";
  if (lower.includes("surround")) return "Virtual surround support adds a stronger gaming value story for buyers who expect positional audio without stepping up in price. It makes the headset easier to place as a gaming-first option.";
  return `${shortenFeatureTitle(spec)} makes the product easier to explain, easier to demo, and easier for buyers to appreciate in real use.`;
}

function shortenFeatureTitle(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function keywordFromSpec(spec) {
  const lower = spec.toLowerCase();
  if (lower.includes("retractable microphone")) return "RETRACTABLE MIC";
  if (lower.includes("quad-mode")) return "QUAD-MODE";
  if (lower.includes("tri-mode")) return "TRI-MODE";
  if (lower.includes("battery")) return "LONG BATTERY";
  if (lower.includes("software") || lower.includes("driver")) return "SOFTWARE";
  if (lower.includes("ai enc")) return "AI ENC";
  if (lower.includes("surround")) return "7.1 SURROUND";
  if (lower.includes("hot swappable")) return "HOT-SWAPPABLE";
  if (lower.includes("gasket")) return "GASKET MOUNT";
  if (lower.includes("display")) return "DISPLAY";
  return shortenFeatureTitle(titleFromSpec(spec));
}

function shortenKeywordLine(value) {
  return uniqueStrings(
    String(value || "")
      .split("·")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => item
        .replace(/RETRACTABLE MICROPHONE/gi, "RETRACTABLE MIC")
        .replace(/QUAD-MODE CONNECTION/gi, "QUAD-MODE")
        .replace(/TRI-MODE CONNECTIVITY/gi, "TRI-MODE")
        .replace(/LONG-LIFE BATTERY PERFORMANCE/gi, "LONG BATTERY")
        .replace(/ADVANCED SOFTWARE SUPPORT/gi, "SOFTWARE")
        .replace(/BLACK,\s*WHITE/gi, "BLACK/WHITE"))
  ).slice(0, 5).join(" · ");
}

function uniqueStrings(items) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const normalized = String(item || "").trim().toLowerCase();
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(String(item).trim());
  }
  return result;
}

function ensureUniqueFeatureCards(features) {
  const seenTitles = new Set();
  const seenRoots = new Set();
  return features.map((item, index) => {
    let title = item.title;
    let description = item.description;
    const titleKey = String(title || "").trim().toLowerCase();
    const rootKey = titleKey
      .replace(/\s+\d+$/g, "")
      .replace(/support/gi, "")
      .replace(/\s+/g, " ")
      .trim();
    if (seenTitles.has(titleKey) || seenRoots.has(rootKey)) {
      return { ...item, title: "", description: "" };
    }
    seenTitles.add(titleKey);
    seenRoots.add(rootKey);
    return { ...item, title, description };
  });
}

function buildHeroLead(title, productType, mainSellingPoint) {
  const typeText = String(productType || "product").toLowerCase();
  const benefit = descriptionFromSpec(mainSellingPoint || title);
  return `${shortenFeatureTitle(title)} gives this ${typeText} a clearer reason to stand out in both retail demos and buyer presentations. ${benefit}`;
}

function formatMonthLabel(value) {
  if (!value) return "";
  const [year, month] = value.split("-");
  const date = new Date(`${year}-${month}-01T00:00:00`);
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date);
}

function setValueByPath(target, path, value) {
  const parts = path.split(".");
  let cursor = target;
  for (let index = 0; index < parts.length - 1; index += 1) cursor = cursor[parts[index]];
  cursor[parts[parts.length - 1]] = value;
}

function getValueByPath(target, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), target);
}

function updateStaticText() {
  document.getElementById("pageTitle").textContent = t("pageTitle");
  document.getElementById("pageLede").textContent = t("pageLede");
  document.getElementById("themesLabel").textContent = t("themesLabel");
  document.getElementById("pageSizeLabel").textContent = t("pageSizeLabel");
  document.getElementById("modeLabel").textContent = t("modeLabel");
  document.getElementById("loadSampleBtn").textContent = t("loadDemo");
  document.getElementById("generateFilesBtn").textContent = t("generate");
  document.getElementById("intakeTitle").textContent = t("intakeTitle");
  document.getElementById("intakeLede").textContent = t("intakeLede");
  document.getElementById("previewTitle").textContent = t("previewTitle");
  document.getElementById("previewLede").textContent = t("previewLede");
  document.getElementById("markdownTab").textContent = t("markdownTab");
  document.getElementById("validationTab").textContent = t("validationTab");
  document.getElementById("langEnBtn").classList.toggle("active", currentLang === "en");
  document.getElementById("langZhBtn").classList.toggle("active", currentLang === "zh");
}

function syncAdvancedToggle() {
  document.getElementById("toggleAdvancedBtn").textContent = advancedMode ? t("hideOverride") : t("showOverride");
}

document.getElementById("loadSampleBtn").addEventListener("click", () => {
  const keepImages = {
    heroImage: state.heroImage,
    heroFeature: {
      ...state.heroFeature,
      detail1Image: state.heroFeature.detail1Image,
      detail2Image: state.heroFeature.detail2Image,
    },
    softwareControl: {
      ...state.softwareControl,
      editor1Image: state.softwareControl.editor1Image,
      editor2Image: state.softwareControl.editor2Image,
    },
  };

  state = structuredClone(sampleData);
  if (keepImages.heroImage) state.heroImage = keepImages.heroImage;
  if (keepImages.heroFeature.detail1Image) state.heroFeature.detail1Image = keepImages.heroFeature.detail1Image;
  if (keepImages.heroFeature.detail2Image) state.heroFeature.detail2Image = keepImages.heroFeature.detail2Image;
  if (keepImages.softwareControl.editor1Image) state.softwareControl.editor1Image = keepImages.softwareControl.editor1Image;
  if (keepImages.softwareControl.editor2Image) state.softwareControl.editor2Image = keepImages.softwareControl.editor2Image;
  renderApp();
});

document.getElementById("toggleAdvancedBtn").addEventListener("click", () => {
  advancedMode = !advancedMode;
  renderApp();
});

document.getElementById("langEnBtn").addEventListener("click", () => {
  currentLang = "en";
  updateStaticText();
  renderApp();
});

document.getElementById("langZhBtn").addEventListener("click", () => {
  currentLang = "zh";
  updateStaticText();
  renderApp();
});

document.getElementById("generateFilesBtn").addEventListener("click", async () => {
  const button = document.getElementById("generateFilesBtn");
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = currentLang === "zh" ? "生成中..." : "Generating...";

  try {
    const filled = withAutoDerivedFields(state);
    await generatePdfInBrowser(filled);
  } catch (error) {
    alert(currentLang === "zh" ? `生成失败：${error.message}` : `Generation failed: ${error.message}`);
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".preview").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

async function generatePdfInBrowser(filled) {
  if (!window.html2canvas || !(window.jspdf && window.jspdf.jsPDF)) {
    throw new Error("PDF export libraries did not load.");
  }

  const PAGE_WIDTH_PX = 1000;
  const PAGE_HEIGHT_PX = 1500;
  const html = await buildMasterOfferingHtml(filled);
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const page = doc.querySelector(".page");
  const styleTag = doc.querySelector("style");
  if (!page || !styleTag) {
    throw new Error("Generated offering markup is incomplete.");
  }

  const mount = document.createElement("div");
  mount.style.position = "absolute";
  mount.style.left = "0";
  mount.style.top = "0";
  mount.style.width = `${PAGE_WIDTH_PX}px`;
  mount.style.height = `${PAGE_HEIGHT_PX}px`;
  mount.style.background = "#fff";
  mount.style.opacity = "1";
  mount.style.pointerEvents = "none";
  mount.style.zIndex = "-1";
  mount.style.overflow = "hidden";
  mount.id = "pdf-export-mount";

  const runtimeStyle = document.createElement("style");
  runtimeStyle.textContent = `${styleTag.textContent}
  .page { width: ${PAGE_WIDTH_PX}px !important; height: ${PAGE_HEIGHT_PX}px !important; }
  html, body { margin: 0 !important; padding: 0 !important; }
  `;
  runtimeStyle.id = "pdf-export-style";

  document.head.appendChild(runtimeStyle);
  document.body.appendChild(mount);
  mount.appendChild(document.importNode(page, true));

  const filename = `${filled.documentMonth}_${fileSafeProductName(filled.productName)}_${filled.themeId}.pdf`;

  try {
    const canvas = await window.html2canvas(mount.firstElementChild, {
      scale: 1,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
      width: PAGE_WIDTH_PX,
      height: PAGE_HEIGHT_PX,
      windowWidth: PAGE_WIDTH_PX,
      windowHeight: PAGE_HEIGHT_PX,
    });

    const imageData = canvas.toDataURL("image/jpeg", 0.98);
    const pdf = new window.jspdf.jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [264.6, 396.9],
      compress: true,
    });
    pdf.addImage(imageData, "JPEG", 0, 0, 264.6, 396.9);
    pdf.save(filename);
  } finally {
    runtimeStyle.remove();
    mount.remove();
  }
}

let masterTemplateCache = null;

async function loadMasterTemplate() {
  if (masterTemplateCache) return masterTemplateCache;
  const response = await fetch("master-template.html");
  if (!response.ok) throw new Error("Master template failed to load.");
  masterTemplateCache = await response.text();
  return masterTemplateCache;
}

async function buildMasterOfferingHtml(data) {
  let html = await loadMasterTemplate();
  const monthLabel = formatMonthLabel(data.documentMonth);
  const footerMonth = monthLabel.toUpperCase();
  const productName = escapeHtml(data.productName);
  const productModel = escapeHtml(data.productModel);
  const productType = escapeHtml(data.productType);
  const colorVariant = escapeHtml(data.colorVariant);
  const keywords = escapeHtml(data.specKeywords);
  const sceneTitle = escapeHtml(data.sceneTitle);
  const hero = data.heroFeature || {};
  const hasSoftware = data.hasSoftware !== "no";
  const featureItems = data.uniqueFeatures.filter((item) => item.title);

  html = replaceFirst(
    /<\/style>/s,
    `img { max-width: 100%; height: auto; }
.hero-fit,
.mode-fit,
.sw-fit {
  width: 100%;
  height: 100%;
  object-fit: contain !important;
  object-position: center center !important;
}
.hero-img-placeholder,
.mode-img,
.sw-editor-img {
  overflow: hidden !important;
}
.product-view-img,
.product-view-dark,
.product-view-light {
  transform: none !important;
}
</style>`,
    html
  );

  html = replaceFirst(/<title>.*?<\/title>/s, `<title>${productName} ${productModel} · Internal Offering</title>`, html);
  html = replaceFirst(/<img class="logo-img" src=".*?" alt="FANTECH">/s, `<img class="logo-img" src="assets/logo/gaming2.png" alt="FANTECH">`, html);
  html = replaceFirst(/(<div class="topbar-right">Document Date<br><b>)(.*?)(<\/b><\/div>)/s, `$1${monthLabel}$3`, html);
  html = replaceFirst(/(<span class="product-name">)(.*?)(<\/span>)/s, `$1${productName} ${productModel}$3`, html);
  html = replaceFirst(/(<span class="product-category">)(.*?)(<\/span>)/s, `$1${productType}$3`, html);
  html = replaceFirst(/(<div class="title-right">)(.*?)(<\/div>)/s, `$1${keywords}$3`, html);
  html = replaceFirst(/(<span class="scene-caption">)(.*?)(<\/span>)/s, `$1${sceneTitle}$3`, html);
  html = replaceFirst(/<img class="hero-fit" src=".*?" alt="MAXFIT86 hero">/s, `<img class="hero-fit" src="${getImageSrc(data.heroImage, "HERO IMAGE", data.heroPrompt)}" alt="hero image">`, html);

  const featuresHtml = featureItems.map((item, index) => {
    const cls = item.highlight || index === 0 ? "feature-name red" : "feature-name";
    return `<div class="feature-item"><div class="${cls}">${escapeHtml(item.title)}</div><div class="feature-desc">${escapeHtml(item.description)}</div></div>`;
  }).join("\n      ");
  html = replaceFirst(/<div class="features-title">PRODUCT UNIQUE FEATURES<\/div>.*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="feature-row">/s, `<div class="features-title">PRODUCT UNIQUE FEATURES</div>\n      ${featuresHtml}\n    </div>\n  </div>\n\n  <div class="feature-row">`, html);

  html = replaceFirst(/(<span class="feature-headline">)(.*?)(<\/span>)/s, `$1${escapeHtml(hero.sectionTitle || "")}$3`, html);
  html = replaceFirst(/(<div class="feature-sub">)(.*?)(<\/div>\s*<div class="mode-row">)/s, `$1${escapeHtml(hero.leadDescription || "")}$3`, html);

  const showcaseHtml = data.showcaseType === "MODE_SHOWCASE"
    ? `
        <div class="mode-cell">
          <div class="mode-card">
            <div class="mode-tag">MODE 01</div>
            <div class="mode-title">${escapeHtml(hero.detail1Name || "")}</div>
            <div class="mode-img"><img class="mode-fit" src="${getImageSrc(hero.detail1Image, "MODE 01", "")}" alt="mode 01"></div>
            <div class="mode-desc">${escapeHtml(hero.detail1Caption || "")}</div>
          </div>
        </div>
        <div class="mode-cell">
          <div class="mode-card">
            <div class="mode-tag">MODE 02</div>
            <div class="mode-title">${escapeHtml(hero.detail2Name || "")}</div>
            <div class="mode-img"><img class="mode-fit" src="${getImageSrc(hero.detail2Image, "MODE 02", "")}" alt="mode 02"></div>
            <div class="mode-desc">${escapeHtml(hero.detail2Caption || "")}</div>
          </div>
        </div>
      `
    : `
        <div class="mode-cell">
          <div class="mode-card simple-view">
            <div class="mode-tag">TOP VIEW</div>
            <div class="mode-title"></div>
            <div class="mode-img"><img class="mode-fit" src="${getImageSrc(hero.detail1Image, "TOP VIEW", "")}" alt="top view"></div>
          </div>
        </div>
        <div class="mode-cell">
          <div class="mode-card simple-view">
            <div class="mode-tag">ANGLE VIEW</div>
            <div class="mode-title"></div>
            <div class="mode-img"><img class="mode-fit" src="${getImageSrc(hero.detail2Image, "ANGLE VIEW", "")}" alt="angle view"></div>
          </div>
        </div>
      `;
  html = replaceFirst(/<div class="mode-row">.*?<\/div>\s*<\/div>\s*<div class="fr-right">/s, `<div class="mode-row">${showcaseHtml}\n      </div>\n    </div>\n    <div class="fr-right">`, html);

  if (hasSoftware) {
    const sw = data.softwareControl || {};
    const softwareHtml = `
    <div class="fr-right">
      <div class="feature-header">
        <span class="feature-label">SOFTWARE CONTROL</span>
        <span class="feature-headline">${escapeHtml(sw.sectionTitle || "")}</span>
      </div>
      <div class="feature-sub">${escapeHtml(sw.leadDescription || "")}</div>
      <div class="sw-editor-row">
        <div class="sw-editor-cell">
          <div class="sw-editor-card">
            <div class="sw-editor-img"><img class="sw-fit" src="${getImageSrc(sw.editor1Image, "SOFTWARE 01", "")}" alt="software 01"></div>
            <div class="sw-editor-name">${escapeHtml(sw.editor1Name || "")}</div>
            <div class="sw-editor-desc">${escapeHtml(sw.editor1Caption || "")}</div>
          </div>
        </div>
        <div class="sw-editor-cell">
          <div class="sw-editor-card">
            <div class="sw-editor-img"><img class="sw-fit" src="${getImageSrc(sw.editor2Image, "SOFTWARE 02", "")}" alt="software 02"></div>
            <div class="sw-editor-name">${escapeHtml(sw.editor2Name || "")}</div>
            <div class="sw-editor-desc">${escapeHtml(sw.editor2Caption || "")}</div>
          </div>
        </div>
      </div>
    </div>
    `;
    html = replaceFirst(/<div class="fr-right">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="price-strip">/s, `${softwareHtml}\n   </div>\n  </div>\n\n  <div class="price-strip">`, html);
  } else {
    html = replaceFirst(/\.feature-row-inner\s*\{/s, `.feature-row-inner {\n    grid-template-columns: minmax(0, 1fr);`, html);
    html = replaceFirst(/<div class="fr-right">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="price-strip">/s, `\n   </div>\n  </div>\n\n  <div class="price-strip">`, html);
  }

  const price = data.priceStrip || {};
  const priceLabel = escapeHtml(price.priceLabel || "PRICE");
  const priceHtml = `
  <div class="price-strip">
    <div class="price-cell">
      <div class="price-label">${priceLabel}</div>
      <div class="price-value red">${escapeHtml(price.price || "")}</div>
      <div class="price-suffix">${escapeHtml(price.priceSub || "")}</div>
    </div>
    <div class="price-cell">
      <div class="price-label">MOQ</div>
      <div class="price-value">${escapeHtml(price.moq || "")}</div>
      <div class="price-suffix">${escapeHtml(price.moqSub || "")}</div>
    </div>
    <div class="price-cell">
      <div class="price-label">COLOR</div>
      <div class="price-value">${escapeHtml(price.color || "")}</div>
      <div class="price-suffix">${escapeHtml(price.colorSub || "")}</div>
    </div>
    <div class="price-cell">
      <div class="price-label">BOX SIZE</div>
      <div class="price-value">${escapeHtml(price.boxSize || "")}</div>
      <div class="price-suffix">${escapeHtml(price.boxSizeSub || "")}</div>
    </div>
    <div class="price-cell">
      <div class="price-label">CARTON QTY</div>
      <div class="price-value">${escapeHtml(price.cartonQty || "")}</div>
      <div class="price-suffix">${escapeHtml(price.cartonQtySub || "")}</div>
    </div>
  </div>`;
  html = replaceFirst(/<div class="price-strip">.*?<\/div>\s*<div class="footer">/s, `${priceHtml}\n  <div class="footer">`, html);
  html = replaceFirst(/(<div class="footer-left">)(.*?)(<\/div>)/s, `$1${productName} ${productModel} · ${productType} · ${colorVariant} · FANTECH Internal Offering · Confidential — Not for Distribution$3`, html);
  html = replaceFirst(/(<div class="footer-right">)(.*?)(<\/div>)/s, `$1INTERNAL OFFERING — ${footerMonth}$3`, html);
  return html;
}

function replaceFirst(pattern, replacement, input) {
  return input.replace(pattern, replacement);
}

function getImageSrc(value, label, hint) {
  if (String(value || "").startsWith("data:image/")) return value;
  const safeLabel = encodeURIComponent(label);
  const safeHint = encodeURIComponent(hint || "Image Pending");
  return `data:image/svg+xml;charset=utf-8,${`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="white"/><rect x="8" y="8" width="1184" height="784" fill="none" stroke="%23D0D5DC" stroke-dasharray="12 8" stroke-width="4"/><text x="50%" y="46%" text-anchor="middle" fill="%23B8BCC5" font-family="Arial, sans-serif" font-size="28">${safeLabel}</text><text x="50%" y="54%" text-anchor="middle" fill="%23D0D5DC" font-family="Arial, sans-serif" font-size="20">${safeHint}</text></svg>`}`;
}

function fileSafeProductName(value) {
  const cleaned = String(value || "PRODUCT")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^A-Za-z0-9_-]/g, "")
    .toUpperCase();
  return cleaned || "PRODUCT";
}

updateStaticText();
renderApp();
