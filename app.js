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
    showcaseType: "Showcase Type",
    showcaseMode: "MODE 01/02 (functional states)",
    showcaseView: "TOP VIEW / ANGLE VIEW (angles only)",
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
    imagesNote: "Upload images for the matching slots. Choose MODE or VIEW above to switch between functional-state cards and simple angle labels.",
    heroImage: "Hero Image",
    bottomLeftImage: "Bottom Left Image",
    bottomRightImage: "Bottom Right Image",
    mode01Image: "MODE 01 Image",
    mode02Image: "MODE 02 Image",
    topViewImage: "TOP VIEW Image",
    angleViewImage: "ANGLE VIEW Image",
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
    showcaseType: "展示类型",
    showcaseMode: "MODE 01/02（功能状态差异）",
    showcaseView: "TOP VIEW / ANGLE VIEW（仅不同角度）",
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
    imagesNote: "把图片上传到对应的位置。在上方选择 MODE 或 VIEW 来切换功能状态卡或纯角度标签。",
    heroImage: "主图",
    bottomLeftImage: "左下图",
    bottomRightImage: "右下图",
    mode01Image: "MODE 01 图",
    mode02Image: "MODE 02 图",
    topViewImage: "TOP VIEW 图",
    angleViewImage: "ANGLE VIEW 图",
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
  showcaseType: "VIEW_SHOWCASE",
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
  showcaseType: "MODE_SHOWCASE",
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
      {
        path: "showcaseType",
        label: t("showcaseType"),
        type: "select",
        options: [
          { value: "VIEW_SHOWCASE", label: t("showcaseView") },
          { value: "MODE_SHOWCASE", label: t("showcaseMode") },
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
      ${buildImageField("heroFeature.detail1Image", state.showcaseType === "MODE_SHOWCASE" ? t("mode01Image") : t("topViewImage"))}
      ${buildImageField("heroFeature.detail2Image", state.showcaseType === "MODE_SHOWCASE" ? t("mode02Image") : t("angleViewImage"))}
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
  @page { size: 210mm 297mm; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { font-family: 'Poppins', 'Segoe UI', sans-serif; font-size: 9pt; color: #14171C; background: #FFF; line-height: 1.35; }
  .page { width: 210mm; height: 297mm; position: relative; }
  .topbar { background: var(--topbar-bg); color: #FFF; padding: 3.5mm 7mm 2.5mm; width: 100%; display: table; }
  .topbar-left, .topbar-right, .title-left, .title-right, .hero-left, .hero-right, .fr-left, .fr-right, .price-cell, .footer-left, .footer-right { display: table-cell; vertical-align: top; }
  .topbar-right { text-align: right; font-size: 7pt; color: #BEC3CB; }
  .brand-chip { display: inline-block; color: #FFF; font-weight: 700; letter-spacing: 0.8pt; margin-right: 6pt; }
  .topbar-title { display: inline-block; color: #FFF; font-size: 7pt; letter-spacing: 1.4pt; }
  .model-line { padding: 2.5mm 7mm 1.5mm; display: table; width: 100%; border-bottom: 1.4pt solid var(--primary); }
  .product-name { font-size: 16pt; font-weight: 700; color: #14171C; }
  .product-model { display: block; font-size: 8pt; color: #6A7280; margin-top: 0.6mm; }
  .product-type { display: inline-block; border: 1pt solid #E5E7EB; color: #525864; font-size: 7pt; padding: 1pt 5pt; margin-top: 1.5mm; }
  .title-right { text-align: right; font-size: 6.8pt; color: #525864; vertical-align: middle; letter-spacing: 0.6pt; }
  .hero-block { width: 100%; display: table; padding: 1.5mm 7mm 0; }
  .hero-left { width: 49%; padding-right: 3mm; }
  .hero-right { width: 51%; padding-left: 3mm; }
  .section-chip { display: inline-block; background: var(--primary); color: #FFF; font-size: 6.5pt; padding: 1.4pt 5pt; letter-spacing: 0.8pt; font-weight: 700; }
  .section-title-inline { display: inline-block; margin-left: 4pt; font-size: 8.5pt; font-weight: 700; color: #14171C; }
  .hero-media, .detail-media, .editor-media { width: 100%; border-radius: 2pt; overflow: hidden; background: #F4F4F4; border: 1pt solid #E5E7EB; display: table; }
  .hero-media { height: 72mm; margin-top: 2mm; }
  .detail-media { height: 44mm; margin-bottom: 2mm; }
  .editor-media { height: 46mm; margin-bottom: 2mm; }
  .media-inner { display: table-cell; vertical-align: middle; text-align: center; color: #AAB0B8; font-size: 7pt; padding: 4mm; }
  .media-inner img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .features-title { font-size: 7pt; color: #6A7280; letter-spacing: 1pt; margin-bottom: 2mm; font-weight: 700; }
  .feature-item { margin-bottom: 3.4mm; padding-left: 4.5mm; position: relative; }
  .feature-item::before { content: ''; width: 1.7mm; height: 1.7mm; background: var(--primary); border-radius: 50%; position: absolute; left: 0; top: 1.8mm; }
  .feature-name { font-size: 8.2pt; font-weight: 700; color: #14171C; line-height: 1.28; margin-bottom: 0.6mm; }
  .feature-name.red { color: var(--primary); }
  .feature-desc { font-size: 7.2pt; color: #566171; line-height: 1.34; }
  .feature-row { width: 100%; display: table; padding: 1.5mm 7mm 0; }
  .fr-left, .fr-right { vertical-align: top; }
  .fr-left { width: ${hasSoftware ? "50%" : "100%"}; padding-right: ${hasSoftware ? "5mm" : "0"}; padding-top: 0; }
  .fr-divider { border-top: 2pt solid var(--primary); margin-top: 1.5mm; margin-bottom: 1.5mm; }
  .fr-right { width: 50%; padding-left: 4mm; border-top: 1pt solid #E5E7EB; border-left: 1pt solid #E5E7EB; padding-top: 2.5mm; }
  .feature-sub { font-size: 7.2pt; color: #566171; margin: 1.5mm 0 2.5mm; max-height: 12mm; overflow: hidden; }
  .card-row { width: 100%; display: table; }
  .card-cell { width: 50%; display: table-cell; vertical-align: top; }
  .card-cell:first-child { padding-right: 2.5mm; }
  .card-cell:last-child { padding-left: 2.5mm; }
  .card { background: #FAFAFA; border: 1pt solid #E5E7EB; padding: 2mm 2.5mm; }
  .card-tag { font-size: 6.1pt; color: var(--primary); letter-spacing: 0.8pt; font-weight: 700; margin-bottom: 0.6mm; }
  .card-title { font-size: 8pt; font-weight: 700; color: #14171C; margin-bottom: 2mm; line-height: 1.25; }
  .card-desc { font-size: 7pt; color: #566171; line-height: 1.32; text-align: center; }
  .price-strip { position: absolute; left: 0; right: 0; bottom: 8mm; background: var(--price-strip-bg); display: table; width: 100%; table-layout: fixed; }
  .price-cell { padding: 2mm 2.5mm; border-right: 1pt solid #2A2D33; }
  .price-cell:last-child { border-right: none; }
  .price-label { font-size: 6.2pt; color: #B8BCC5; letter-spacing: 0.9pt; margin-bottom: 0.8mm; }
  .price-value { font-size: 12pt; font-weight: 700; color: #FFF; line-height: 1.08; }
  .price-value.red { color: var(--primary); font-size: 14pt; }
  .price-suffix { font-size: 6.5pt; color: #B8BCC5; margin-top: 0.7mm; }
  .footer { position: absolute; left: 0; right: 0; bottom: 2.5mm; padding: 0 7mm; width: 100%; display: table; font-size: 6.3pt; color: #6A7280; }
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
      <div class="fr-divider"></div>
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
    </div>` : (() => {
        const extraFeatures = features.slice(6);
        if (extraFeatures.length === 0) return "";
        return `<div class="fr-right">
      <div class="features-title">ADDITIONAL HIGHLIGHTS</div>
      ${extraFeatures.map(f => `<div class="feature-item"><div class="feature-name">${escapeHtml(f.title)}</div><div class="feature-desc">${escapeHtml(f.description)}</div></div>`).join("")}
    </div>`;
      })()}
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
  return data.showcaseType || "VIEW_SHOWCASE";
}

function deriveSceneTitle(data) {
  if (String(data.sceneTitle || "").trim()) return data.sceneTitle.trim();
  const theme = THEMES[data.themeId]?.label || "Gaming";
  return `${theme} Performance Setup`;
}

function deriveSpecKeywords(data) {
  const explicit = String(data.specKeywords || "").trim();
  if (explicit) return explicit;
  const category = CopyEngine.resolveCategory(data.productType);
  const specs = parseSpecLines(data.specSellingPointsText);
  const merged = CopyEngine.mergeSpecs(specs, category);
  const picks = merged.slice(0, 4).map((spec) => CopyEngine.keyword(spec, category));
  const color = String(data.colorVariant || "").trim().toUpperCase();
  if (color) picks.push(color);
  return uniqueStrings(picks).slice(0, 5).join(" · ");
}

function deriveUniqueFeatures(data) {
  const category = CopyEngine.resolveCategory(data.productType);
  let specs = parseSpecLines(data.specSellingPointsText);
  const normalizedMain = String(data.mainSellingPoint || "").trim().toLowerCase();

  // Protect the main selling point spec from losing its identity during merging
  let protectedSpec = null;
  if (normalizedMain && specs.length > 6) {
    // Find the spec that best matches mainSellingPoint BEFORE merging
    let bestScore = 0;
    let bestIdx = -1;
    specs.forEach((spec, i) => {
      const score = scoreMainSellingPointMatch({ spec, title: spec, description: '' }, normalizedMain);
      if (score > bestScore) { bestScore = score; bestIdx = i; }
    });
    if (bestIdx >= 0 && bestScore > 0) {
      protectedSpec = specs.splice(bestIdx, 1)[0];
    }
  }

  if (specs.length > 6) {
    specs = CopyEngine.mergeSpecs(specs, category);
  }

  // Restore protected spec at the front
  if (protectedSpec) {
    specs.unshift(protectedSpec);
  }

  let generated = specs.slice(0, 6).map((spec, index) => {
    const auto = CopyEngine.feature(spec, category, index);
    const manual = data.uniqueFeatures[index] || {};
    return {
      spec,
      title: manual.title || auto.title,
      description: manual.description || auto.description,
      highlight: typeof manual.highlight === "boolean" ? manual.highlight : false,
    };
  });

  if (normalizedMain) {
    generated.sort((left, right) => scoreMainSellingPointMatch(right, normalizedMain) - scoreMainSellingPointMatch(left, normalizedMain));
  }

  generated = generated.map((item, index) => ({
    ...item,
    highlight: normalizedMain ? index === 0 && scoreMainSellingPointMatch(item, normalizedMain) > 0 : index === 0,
  }));

  return ensureUniqueFeatureCards(generated)
    .filter((item) => item.title)
    .map(({ spec, ...item }) => item)
    .slice(0, 6);
}

function clampLeadDescription(text) {
  if (!text) return "";
  const hasCJK = /[一-鿿]/.test(text);
  if (hasCJK) {
    if (text.length <= 60) return text;
    return text.substring(0, 57) + "...";
  }
  const words = text.split(/\s+/);
  if (words.length <= 40) return text;
  return words.slice(0, 40).join(" ") + "...";
}

function deriveHeroFeature(data, features) {
  const category = CopyEngine.resolveCategory(data.productType);
  const normalizedMain = String(data.mainSellingPoint || "").trim().toLowerCase();
  const primary = features.find((item) => normalizedMain && scoreMainSellingPointMatch(item, normalizedMain) > 0)
    || features.find((item) => item.highlight)
    || features[0]
    || { title: "", description: "" };
  const secondary = features.find((item) => item.title && item.title !== primary.title) || { title: "ANGLE VIEW", description: "" };
  const isViewShowcase = determineShowcaseType(data) === "VIEW_SHOWCASE";
  const heroLead = CopyEngine.heroLead(primary.title, category, data.productType);
  return {
    sectionTitle: String(data.heroFeature.sectionTitle || "").trim() || CopyEngine.titleCase(primary.title, category) || "Key Product Story",
    leadDescription: clampLeadDescription(String(data.heroFeature.leadDescription || "").trim() || heroLead),
    detail1Name: String(data.heroFeature.detail1Name || "").trim() || (isViewShowcase ? "TOP VIEW" : CopyEngine.titleCase(primary.title, category) || "MODE 01"),
    detail1Image: data.heroFeature.detail1Image || "",
    detail1Caption: isViewShowcase ? "" : (String(data.heroFeature.detail1Caption || "").trim() || primary.description || ""),
    detail2Name: String(data.heroFeature.detail2Name || "").trim() || (isViewShowcase ? "ANGLE VIEW" : CopyEngine.titleCase(secondary.title, category) || "MODE 02"),
    detail2Image: data.heroFeature.detail2Image || "",
    detail2Caption: isViewShowcase ? "" : (String(data.heroFeature.detail2Caption || "").trim() || secondary.description || ""),
  };
}

function deriveSoftwareControl(data) {
  if (data.hasSoftware === "no") {
    return { sectionTitle: "", leadDescription: "", editor1Name: "", editor1Image: "", editor1Caption: "", editor2Name: "", editor2Image: "", editor2Caption: "" };
  }
  const category = CopyEngine.resolveCategory(data.productType);
  const specs = parseSpecLines(data.specSellingPointsText);
  const cards = CopyEngine.softwareCards(specs, category);

  if (!cards) {
    // No software-relevant features found — treat as no-software
    return { sectionTitle: "", leadDescription: "", editor1Name: "", editor1Image: "", editor1Caption: "", editor2Name: "", editor2Image: "", editor2Caption: "" };
  }

  return {
    sectionTitle: String(data.softwareControl.sectionTitle || "").trim() || cards.sectionTitle,
    leadDescription: String(data.softwareControl.leadDescription || "").trim() || cards.leadDescription,
    editor1Name: String(data.softwareControl.editor1Name || "").trim() || cards.card1.title,
    editor1Image: data.softwareControl.editor1Image || "",
    editor1Caption: String(data.softwareControl.editor1Caption || "").trim() || cards.card1.description,
    editor2Name: String(data.softwareControl.editor2Name || "").trim() || cards.card2.title,
    editor2Image: data.softwareControl.editor2Image || "",
    editor2Caption: String(data.softwareControl.editor2Caption || "").trim() || cards.card2.description,
  };
}

function parseSpecLines(value) {
  return String(value || "").split(/\r?\n/).map((line) => line.replace(/^[-*•]\s*/, "").trim()).filter(Boolean);
}

/** @deprecated Replaced by CopyEngine.mergeSpecs(). Remove after Phase 1 regression passes. */
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

/** @deprecated Replaced by CopyEngine.mergeSpecs(). Remove after Phase 1 regression passes. */
function mergeFeatureSpecs(specs) {
  const pool = [...specs];
  const take = (pattern) => {
    const index = pool.findIndex((spec) => pattern.test(spec));
    if (index === -1) return null;
    return pool.splice(index, 1)[0];
  };

  const mic = take(/microphone|mic/i);
  const aiEnc = take(/ai enc|enc/i);
  const surround = take(/surround/i);
  const eq = take(/\beq\b/i);
  const connection = take(/tri-mode|quad-mode/i);
  const platform = take(/platform/i);
  const battery = take(/battery/i);
  const software = take(/software|driver|custom/i);

  const merged = [];
  if (mic && aiEnc) merged.push("Retractable Mic + AI ENC Communication");
  else {
    if (mic) merged.push(mic);
    if (aiEnc) merged.push(aiEnc);
  }

  if (surround && eq) merged.push("7.1 Surround + Built-In EQ");
  else {
    if (surround) merged.push(surround);
    if (eq) merged.push(eq);
  }

  if (connection && platform) merged.push("Multi-Platform Quad-Mode Connection");
  else {
    if (connection) merged.push(connection);
    if (platform) merged.push(platform);
  }

  if (battery) merged.push("Long-Life Battery + Wireless Freedom");
  if (software) merged.push("Software Customization Control");

  while (pool.length && merged.length < 6) {
    merged.push(pool.shift());
  }

  return merged.slice(0, 6);
}

/** @deprecated Replaced by CopyEngine.feature(). Remove after Phase 1 regression passes. */
function featureFromSpec(spec) {
  return { title: titleFromSpec(spec), description: descriptionFromSpec(spec) };
}

/** @deprecated Replaced by CopyEngine.feature() internals. Remove after Phase 1 regression passes. */
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

/** @deprecated Replaced by CopyEngine.feature() internals. Remove after Phase 1 regression passes. */
function descriptionFromSpec(spec) {
  const lower = spec.toLowerCase();
  if (lower.includes("retractable microphone")) return "A retractable mic keeps communication ready when needed while preserving a cleaner everyday look when voice chat is off. That makes the headset easier to use across both gaming and daily listening.";
  if (lower.includes("quad-mode")) return "More connection options reduce compatibility friction and make the product easier to position across gaming, mobile, and desktop use. It gives retailers a broader sell-in angle with one model.";
  if (lower.includes("hot swappable")) return "Users can change switches without soldering, which makes the keyboard easier to customize and much more attractive to enthusiast buyers. It also gives sellers a stronger mod-friendly story.";
  if (lower.includes("tri-mode")) return "Flexible wired and wireless switching makes the product fit more setups without extra friction. That versatility helps both users and retailers get more value from one SKU.";
  if (lower.includes("battery")) return "A stronger battery story improves real daily usability and gives the product a more confident wireless positioning. It is easier to sell when users do not worry about constant charging.";
  if (lower.includes("gasket")) return "A softer, more premium typing feel helps the product stand out when buyers compare comfort and sound quality side by side. It makes the product feel more refined, not just more technical.";
  if (lower.includes("software") || lower.includes("driver")) return "Software support extends the product beyond basic hardware use and gives buyers a clearer long-term value story. It also gives retailers a stronger premium feature story to sell.";
  if (lower.includes("rgb")) return "Lighting customization adds stronger desktop presence and makes the product more visually demonstrable in retail and creator content. It helps the product look more alive on first impression.";
  if (lower.includes("knob")) return "Dedicated physical control reduces friction in frequent daily actions and makes the product feel more intentional in use. It is the kind of tactile feature buyers notice immediately in demos.";
  if (lower.includes("matrix") || lower.includes("display")) return "An integrated display creates immediate visual differentiation and gives the product a more memorable identity on the desk. It helps retailers show something customers notice at first glance.";
  if (lower.includes("ai enc")) return "AI-assisted noise reduction improves voice clarity in team chat and helps the product feel more premium in real multiplayer use. It directly supports clearer communication where it matters most.";
  if (lower.includes("surround")) return "Virtual surround support adds a stronger gaming value story for buyers who expect positional audio without stepping up in price. It makes the headset easier to place as a gaming-first option.";
  return `${shortenFeatureTitle(spec)} makes the product easier to explain, easier to demo, and easier for buyers to appreciate in real use.`;
}

/** @deprecated Replaced by CopyEngine.titleCase(). Remove after Phase 1 regression passes. */
function shortenFeatureTitle(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

/** @deprecated Replaced by CopyEngine.keyword(). Remove after Phase 1 regression passes. */
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

/** @deprecated Replaced by CopyEngine internal logic. Remove after Phase 1 regression passes. */
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

function scoreMainSellingPointMatch(item, normalizedMain) {
  const main = normalizeMatchText(normalizedMain);
  const bag = normalizeMatchText([
    item?.spec,
    item?.title,
    item?.description,
  ].filter(Boolean).join(" "));
  if (!main || !bag) return 0;
  if (bag.includes(main)) return 100 + main.length;

  const mainTokens = new Set(main.split(" ").filter(Boolean));
  const bagTokens = new Set(bag.split(" ").filter(Boolean));
  let score = 0;
  for (const token of mainTokens) {
    if (bagTokens.has(token)) score += 10;
  }
  return score;
}

function normalizeMatchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\bmic\b/g, "microphone")
    .replace(/\benc\b/g, "ai enc")
    .replace(/\s+/g, " ")
    .trim();
}

/** @deprecated Replaced by CopyEngine.heroLead(). Remove after Phase 1 regression passes. */
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

async function generatePptxInBrowser(filled) {
  const PptxGenJS = window.PptxGenJS || window.pptxgen || window.pptxgenjs;
  if (!PptxGenJS) {
    throw new Error("PPTX export library did not load.");
  }

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.defineLayout({ name: "MAXFIT86", width: 10.417, height: 15.626 });
  pptx.layout = "MAXFIT86";
  pptx.author = "Codex";
  pptx.company = "FANTECH";
  pptx.subject = "Internal Offering";
  pptx.title = `${filled.productName} ${filled.productModel} Internal Offering`;

  const slide = pptx.addSlide();
  slide.background = { color: "FFFFFF" };

  const red = "E70012";
  const black = "14171C";
  const gray = "525864";
  const lightGray = "E5E7EB";
  const white = "FFFFFF";

  // Header
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 10.417, h: 0.48, line: { color: black, transparency: 100 }, fill: { color: black } });
  slide.addImage({ path: "assets/logo/gaming2.png", x: 0.24, y: 0.11, h: 0.28, w: 1.4, sizing: { type: "contain", x: 0.24, y: 0.11, w: 1.4, h: 0.28 } });
  slide.addText("INTERNAL OFFERING", { x: 1.72, y: 0.13, w: 2.1, h: 0.18, fontFace: "Poppins", fontSize: 10, color: white, breakLine: false, bold: false, margin: 0 });
  slide.addText("Document Date", { x: 8.95, y: 0.10, w: 1.0, h: 0.12, fontFace: "Poppins", fontSize: 6.5, color: "B8BCC5", align: "right", margin: 0 });
  slide.addText(formatMonthLabel(filled.documentMonth), { x: 8.95, y: 0.22, w: 1.0, h: 0.14, fontFace: "Poppins", fontSize: 8, color: white, align: "right", bold: true, margin: 0 });

  // Title strip
  slide.addText(`${filled.productName} ${filled.productModel}`, { x: 0.30, y: 0.62, w: 2.45, h: 0.26, fontFace: "Poppins", fontSize: 18, bold: true, color: black, margin: 0 });
  slide.addText(filled.productType, { x: 0.30, y: 0.93, w: 1.55, h: 0.20, fontFace: "Poppins", fontSize: 7.5, color: gray, border: { pt: 1, color: lightGray }, margin: 0.03 });
  slide.addText(shortenKeywordLine(filled.specKeywords), { x: 5.6, y: 0.88, w: 4.3, h: 0.18, fontFace: "Poppins", fontSize: 6.8, color: gray, align: "right", margin: 0 });
  slide.addShape(pptx.ShapeType.line, { x: 0.0, y: 1.22, w: 10.417, h: 0, line: { color: red, pt: 1.2 } });

  // Hero block
  slide.addText("APPLICATION SCENE", { x: 0.30, y: 1.32, w: 0.98, h: 0.16, fontFace: "Poppins", fontSize: 6.5, color: white, fill: { color: red }, margin: 0.02, bold: true });
  slide.addText(filled.sceneTitle, { x: 1.34, y: 1.32, w: 2.5, h: 0.16, fontFace: "Poppins", fontSize: 8.5, color: black, bold: true, margin: 0 });
  if (filled.heroImage) {
    slide.addImage({ data: filled.heroImage, x: 0.30, y: 1.54, w: 4.38, h: 3.37, sizing: { type: "contain", x: 0.30, y: 1.54, w: 4.38, h: 3.37 } });
  } else {
    slide.addShape(pptx.ShapeType.rect, { x: 0.30, y: 1.54, w: 4.38, h: 3.37, line: { color: "D0D5DC", pt: 1, dash: "dash" }, fill: { color: "FFFFFF", transparency: 100 } });
  }

  slide.addText("PRODUCT UNIQUE FEATURES", { x: 5.08, y: 1.30, w: 2.0, h: 0.14, fontFace: "Poppins", fontSize: 7, color: gray, margin: 0 });
  const features = filled.uniqueFeatures.filter((item) => item.title).slice(0, 6);
  let featureY = 1.52;
  features.forEach((item, index) => {
    slide.addText("•", { x: 5.08, y: featureY, w: 0.12, h: 0.16, fontFace: "Poppins", fontSize: 10, color: red, margin: 0 });
    slide.addText(item.title, { x: 5.23, y: featureY, w: 3.95, h: 0.16, fontFace: "Poppins", fontSize: 8, bold: true, color: index === 0 ? red : black, margin: 0 });
    slide.addText(item.description, { x: 5.23, y: featureY + 0.12, w: 4.25, h: 0.32, fontFace: "Poppins", fontSize: 6.6, color: gray, margin: 0 });
    featureY += 0.58;
  });

  // Mid row
  slide.addShape(pptx.ShapeType.line, { x: 0.30, y: 5.02, w: 4.58, h: 0, line: { color: red, pt: 1.2 } });
  slide.addText("HERO FEATURE", { x: 0.30, y: 5.08, w: 0.95, h: 0.16, fontFace: "Poppins", fontSize: 6.5, color: white, fill: { color: red }, margin: 0.02, bold: true });
  slide.addText(filled.heroFeature.sectionTitle, { x: 1.30, y: 5.08, w: 2.2, h: 0.16, fontFace: "Poppins", fontSize: 8.5, bold: true, color: black, margin: 0 });
  slide.addText(filled.heroFeature.leadDescription, { x: 0.30, y: 5.38, w: 4.55, h: 0.48, fontFace: "Poppins", fontSize: 6.8, color: gray, margin: 0 });

  const leftCardY = 6.06;
  const leftCardH = 3.45;
  slide.addShape(pptx.ShapeType.rect, { x: 0.30, y: leftCardY, w: 1.86, h: leftCardH, line: { color: lightGray, pt: 1 }, fill: { color: "FAFAFA" } });
  slide.addShape(pptx.ShapeType.rect, { x: 2.34, y: leftCardY, w: 1.86, h: leftCardH, line: { color: lightGray, pt: 1 }, fill: { color: "FAFAFA" } });
  slide.addText(filled.showcaseType === "VIEW_SHOWCASE" ? "TOP VIEW" : "MODE 01", { x: 0.38, y: 6.14, w: 0.9, h: 0.14, fontFace: "Poppins", fontSize: 6.1, color: red, bold: true, margin: 0 });
  slide.addText(filled.showcaseType === "VIEW_SHOWCASE" ? "ANGLE VIEW" : "MODE 02", { x: 2.42, y: 6.14, w: 0.9, h: 0.14, fontFace: "Poppins", fontSize: 6.1, color: red, bold: true, margin: 0 });
  if (filled.heroFeature.detail1Image) slide.addImage({ data: filled.heroFeature.detail1Image, x: 0.46, y: 6.50, w: 1.55, h: 2.55, sizing: { type: "contain", x: 0.46, y: 6.50, w: 1.55, h: 2.55 } });
  if (filled.heroFeature.detail2Image) slide.addImage({ data: filled.heroFeature.detail2Image, x: 2.50, y: 6.50, w: 1.55, h: 2.55, sizing: { type: "contain", x: 2.50, y: 6.50, w: 1.55, h: 2.55 } });
  if (filled.showcaseType !== "VIEW_SHOWCASE") {
    slide.addText(filled.heroFeature.detail1Caption, { x: 0.38, y: 8.95, w: 1.70, h: 0.35, fontFace: "Poppins", fontSize: 6.5, color: gray, margin: 0, align: "center" });
    slide.addText(filled.heroFeature.detail2Caption, { x: 2.42, y: 8.95, w: 1.70, h: 0.35, fontFace: "Poppins", fontSize: 6.5, color: gray, margin: 0, align: "center" });
  }

  if (filled.hasSoftware !== "no") {
    slide.addShape(pptx.ShapeType.line, { x: 5.10, y: 5.02, w: 4.58, h: 0, line: { color: "E5E7EB", pt: 1 } });
    slide.addText("SOFTWARE CONTROL", { x: 5.10, y: 5.08, w: 1.15, h: 0.16, fontFace: "Poppins", fontSize: 6.5, color: white, fill: { color: red }, margin: 0.02, bold: true });
    slide.addText(filled.softwareControl.sectionTitle, { x: 6.33, y: 5.08, w: 2.6, h: 0.16, fontFace: "Poppins", fontSize: 8.5, bold: true, color: black, margin: 0 });
    slide.addText(filled.softwareControl.leadDescription, { x: 5.10, y: 5.38, w: 4.50, h: 0.48, fontFace: "Poppins", fontSize: 6.8, color: gray, margin: 0 });

    const rightCardY = 6.06;
    const rightCardH = 3.45;
    slide.addShape(pptx.ShapeType.rect, { x: 5.10, y: rightCardY, w: 2.10, h: rightCardH, line: { color: lightGray, pt: 1 }, fill: { color: "FAFAFA" } });
    slide.addShape(pptx.ShapeType.rect, { x: 7.42, y: rightCardY, w: 2.10, h: rightCardH, line: { color: lightGray, pt: 1 }, fill: { color: "FAFAFA" } });
    if (filled.softwareControl.editor1Image) slide.addImage({ data: filled.softwareControl.editor1Image, x: 5.22, y: 6.30, w: 1.86, h: 1.95, sizing: { type: "contain", x: 5.22, y: 6.30, w: 1.86, h: 1.95 } });
    if (filled.softwareControl.editor2Image) slide.addImage({ data: filled.softwareControl.editor2Image, x: 7.54, y: 6.30, w: 1.86, h: 1.95, sizing: { type: "contain", x: 7.54, y: 6.30, w: 1.86, h: 1.95 } });
    slide.addText(filled.softwareControl.editor1Name, { x: 5.22, y: 8.35, w: 1.86, h: 0.18, fontFace: "Poppins", fontSize: 6.9, bold: true, color: black, margin: 0 });
    slide.addText(filled.softwareControl.editor2Name, { x: 7.54, y: 8.35, w: 1.86, h: 0.18, fontFace: "Poppins", fontSize: 6.9, bold: true, color: black, margin: 0 });
    slide.addText(filled.softwareControl.editor1Caption, { x: 5.22, y: 8.56, w: 1.86, h: 0.48, fontFace: "Poppins", fontSize: 6.3, color: gray, margin: 0 });
    slide.addText(filled.softwareControl.editor2Caption, { x: 7.54, y: 8.56, w: 1.86, h: 0.48, fontFace: "Poppins", fontSize: 6.3, color: gray, margin: 0 });
  }

  // Price strip
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 14.27, w: 10.417, h: 0.95, line: { color: black, transparency: 100 }, fill: { color: black } });
  const price = filled.priceStrip || {};
  const labels = [
    [price.priceLabel || "PRICE", price.price || "", price.priceSub || ""],
    ["MOQ", price.moq || "", price.moqSub || ""],
    ["COLOR", price.color || "", price.colorSub || ""],
    ["BOX SIZE", price.boxSize || "", price.boxSizeSub || ""],
    ["CARTON QTY", price.cartonQty || "", price.cartonQtySub || ""],
  ];
  const cellW = 10.417 / 5;
  labels.forEach((cell, index) => {
    const x = index * cellW;
    if (index > 0) {
      slide.addShape(pptx.ShapeType.line, { x1: x, y1: 14.27, x2: x, y2: 15.22, line: { color: "2A2D33", pt: 1 } });
    }
    slide.addText(cell[0], { x: x + 0.10, y: 14.38, w: cellW - 0.2, h: 0.12, fontFace: "Poppins", fontSize: 6.2, color: "B8BCC5", margin: 0 });
    slide.addText(cell[1], { x: x + 0.10, y: 14.56, w: cellW - 0.2, h: 0.18, fontFace: "Poppins", fontSize: index === 0 ? 14 : 12, bold: true, color: index === 0 ? red : white, margin: 0 });
    slide.addText(cell[2], { x: x + 0.10, y: 14.80, w: cellW - 0.2, h: 0.12, fontFace: "Poppins", fontSize: 6.2, color: "B8BCC5", margin: 0 });
  });

  slide.addText(`${filled.productName} ${filled.productModel} · ${filled.colorVariant} · FANTECH Internal Offering`, { x: 0.25, y: 15.32, w: 5.0, h: 0.12, fontFace: "Poppins", fontSize: 6.2, color: gray, margin: 0 });
  slide.addText(`INTERNAL OFFERING — ${formatMonthLabel(filled.documentMonth).toUpperCase()}`, { x: 7.25, y: 15.32, w: 2.8, h: 0.12, fontFace: "Poppins", fontSize: 7.0, bold: true, color: red, align: "right", margin: 0 });

  const filename = `${filled.documentMonth}_${fileSafeProductName(filled.productName)}_${filled.themeId}.pptx`;
  await pptx.writeFile({ fileName: filename });
}

async function generatePdfInBrowser(filled) {
  if (!window.html2canvas || !(window.jspdf && window.jspdf.jsPDF)) {
    throw new Error("PDF export libraries did not load.");
  }

  const isMobileDevice = window.matchMedia('(max-width: 760px)').matches;
  const PAGE_WIDTH_PX = 1190;
  const PAGE_HEIGHT_PX = 1683;
  const PDF_WIDTH_MM = 210;
  const PDF_HEIGHT_MM = 297;
  const html = await buildOfferingV2(filled);
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
  img:not(.logo-img):not(.hero-fit):not(.mode-fit):not(.sw-fit) { max-width: 100% !important; height: auto !important; }
  .hero-fit,
  .mode-fit,
  .sw-fit {
    max-width: 100% !important;
    max-height: 100% !important;
    display: block !important;
    object-fit: contain !important;
    object-position: center center !important;
    align-self: center !important;
    justify-self: center !important;
    margin: auto !important;
    transform: none !important;
  }
  .hero-img-placeholder,
	  .hero-img-box,
  .mode-img,
  .sw-editor-img {
    
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .mode-card.simple-view .mode-img,
  .mode-card .mode-img,
  .sw-editor-img,
  .hero-img-placeholder,
	  .hero-img-box {
    align-items: center !important;
  }
  .logo-img {
    height: 7mm !important;
    width: auto !important;
    max-width: none !important;
    object-fit: contain !important;
  }
  `;
  runtimeStyle.id = "pdf-export-style";

  document.head.appendChild(runtimeStyle);
  document.body.appendChild(mount);
  mount.appendChild(document.importNode(page, true));

  const filename = `${filled.documentMonth}_${fileSafeProductName(filled.productName)}_${filled.themeId}.pdf`;

  try {
    console.log("canvas-target", PAGE_WIDTH_PX, PAGE_HEIGHT_PX, PAGE_WIDTH_PX / PAGE_HEIGHT_PX);
    console.log("pdf-target", PDF_WIDTH_MM, PDF_HEIGHT_MM, PDF_WIDTH_MM / PDF_HEIGHT_MM);
    const canvas = await window.html2canvas(mount.firstElementChild, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
      width: PAGE_WIDTH_PX,
      height: PAGE_HEIGHT_PX,
      windowWidth: PAGE_WIDTH_PX,
      windowHeight: PAGE_HEIGHT_PX,
    });

    console.log("canvas-actual", canvas.width, canvas.height, canvas.width / canvas.height);
    const imageData = canvas.toDataURL("image/png");
    const pdf = new window.jspdf.jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [PDF_WIDTH_MM, PDF_HEIGHT_MM],
      compress: true,
    });
    pdf.addImage(imageData, "PNG", 0, 0, PDF_WIDTH_MM, PDF_HEIGHT_MM);
    if (isMobileDevice) {
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } else {
      pdf.save(filename);
    }
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
    `img:not(.hero-fit):not(.mode-fit):not(.sw-fit) { max-width: 100%; height: auto; }
.hero-fit,
.mode-fit,
.sw-fit {
  width: 100%;
  height: 100%;
  object-fit: contain !important;
  object-position: center center !important;
}
.hero-img-placeholder,
	  .hero-img-box,
.mode-img,
.sw-editor-img {
  
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
  html = replaceFirst(/(<div class="feature-sub">)(.*?)(<\/div>\s*<div class="fr-divider">)/s, `$1${escapeHtml(hero.leadDescription || "")}$3`, html);

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
    const highlights = featureItems.length > 6 ? featureItems.slice(6) : [];
    if (highlights.length > 0) {
      const highlightItemsHtml = highlights.map(item =>
        `<div class="feature-item"><div class="feature-name">${escapeHtml(item.title)}</div><div class="feature-desc">${escapeHtml(item.description)}</div></div>`
      ).join("");
      const noSwHtml = `
    <div class="fr-right">
      <div class="feature-header">
        <span class="feature-label">ADDITIONAL HIGHLIGHTS</span>
      </div>
      <div class="highlight-list">
        ${highlightItemsHtml}
      </div>
    </div>
    `;
      html = replaceFirst(/<div class="fr-right">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="price-strip">/s, `${noSwHtml}\n   </div>\n  </div>\n\n  <div class="price-strip">`, html);
    } else {
      html = replaceFirst(/\.feature-row-inner\s*\{/s, `.feature-row-inner {\n    grid-template-columns: minmax(0, 1fr);`, html);
      html = replaceFirst(/<div class="fr-right">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="price-strip">/s, `\n   </div>\n  </div>\n\n  <div class="price-strip">`, html);
    }
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

async function buildMasterOfferingHtmlStable(data) {
  const html = await loadMasterTemplate();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const monthLabel = formatMonthLabel(data.documentMonth);
  const footerMonth = monthLabel.toUpperCase();
  const productName = String(data.productName || "").trim();
  const productModel = String(data.productModel || "").trim();
  const productType = String(data.productType || "").trim();
  const colorVariant = String(data.colorVariant || "").trim();
  const keywords = String(data.specKeywords || "").trim();
  const sceneTitle = String(data.sceneTitle || "").trim();
  const hero = data.heroFeature || {};
  const hasSoftware = data.hasSoftware !== "no";
  const featureItems = data.uniqueFeatures.filter((item) => item.title);

  const hardeningStyle = doc.createElement("style");
  hardeningStyle.textContent = `
img:not(.logo-img):not(.hero-fit):not(.mode-fit):not(.sw-fit) { max-width: 100%; height: auto; }
.hero-fit,
.mode-fit,
.sw-fit {
  max-width: 100% !important;
  max-height: 100% !important;
  display: block !important;
  object-fit: contain !important;
  object-position: center center !important;
  align-self: center !important;
  justify-self: center !important;
  margin: auto !important;
}
.hero-img-placeholder,
	  .hero-img-box,
.mode-img,
.sw-editor-img {
  
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.mode-card.simple-view .mode-img,
.mode-card .mode-img,
.sw-editor-img,
.hero-img-placeholder,
	  .hero-img-box {
  align-items: center !important;
}
.product-view-img,
.product-view-dark,
.product-view-light {
  transform: none !important;
}
`;
  doc.head.appendChild(hardeningStyle);

  const setText = (selector, value) => {
    const node = doc.querySelector(selector);
    if (node) node.textContent = value;
  };

  const setImage = (containerSelector, className, src, alt, fallbackLabel, fallbackHint) => {
    const container = doc.querySelector(containerSelector);
    if (!container) return;
    container.innerHTML = `<img class="${className}" src="${getImageSrc(src, fallbackLabel, fallbackHint)}" alt="${escapeAttribute(alt)}">`;
  };

  doc.title = `${productName} ${productModel}`.trim() || "Internal Offering";
  const logo = doc.querySelector(".logo-img");
  if (logo) {
    logo.setAttribute("src", "assets/logo/gaming2.png");
    logo.setAttribute("alt", "FANTECH");
  }

  setText(".topbar-right b", monthLabel);
  setText(".product-name", `${productName} ${productModel}`.trim());
  setText(".product-category", productType);
  setText(".title-right", keywords);
  setText(".scene-caption", sceneTitle);
  setImage(".hero-img-placeholder", "hero-fit", data.heroImage, "hero image", "HERO IMAGE", data.heroPrompt);

  const heroRight = doc.querySelector(".hero-right");
  if (heroRight) {
    heroRight.querySelectorAll(".feature-item").forEach((node) => node.remove());
    const featuresTitle = heroRight.querySelector(".features-title");
    if (featuresTitle) {
      const featuresHtml = featureItems.map((item, index) => {
        const cls = item.highlight || index === 0 ? "feature-name red" : "feature-name";
        return `<div class="feature-item"><div class="${cls}">${escapeHtml(item.title)}</div><div class="feature-desc">${escapeHtml(item.description)}</div></div>`;
      }).join("");
      featuresTitle.insertAdjacentHTML("afterend", featuresHtml);
    }
  }

  setText(".fr-left .feature-headline", String(hero.sectionTitle || "").trim());
  setText(".fr-left .feature-sub", String(hero.leadDescription || "").trim());

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
  const modeRow = doc.querySelector(".fr-left .mode-row");
  if (modeRow) modeRow.innerHTML = showcaseHtml;

  if (hasSoftware) {
    const sw = data.softwareControl || {};
    setText(".fr-right .feature-headline", String(sw.sectionTitle || "").trim());
    setText(".fr-right .feature-sub", String(sw.leadDescription || "").trim());
    setImage(".fr-right .sw-editor-cell:nth-child(1) .sw-editor-img", "sw-fit", sw.editor1Image, "software 01", "SOFTWARE 01", "");
    setImage(".fr-right .sw-editor-cell:nth-child(2) .sw-editor-img", "sw-fit", sw.editor2Image, "software 02", "SOFTWARE 02", "");
    setText(".fr-right .sw-editor-cell:nth-child(1) .sw-editor-name", String(sw.editor1Name || "").trim());
    setText(".fr-right .sw-editor-cell:nth-child(1) .sw-editor-desc", String(sw.editor1Caption || "").trim());
    setText(".fr-right .sw-editor-cell:nth-child(2) .sw-editor-name", String(sw.editor2Name || "").trim());
    setText(".fr-right .sw-editor-cell:nth-child(2) .sw-editor-desc", String(sw.editor2Caption || "").trim());
  } else {
    const frRight = doc.querySelector(".fr-right");
    if (!frRight) return;
    // Replace SOFTWARE CONTROL with ADDITIONAL HIGHLIGHTS vertical feature list
    const highlights = featureItems.length > 6 ? featureItems.slice(6) : [];
    const highlightLabel = highlights.length > 0 ? "ADDITIONAL HIGHLIGHTS" : "";
    const highlightItemsHtml = highlights.map(item =>
      `<div class="feature-item"><div class="feature-name">${escapeHtml(item.title)}</div><div class="feature-desc">${escapeHtml(item.description)}</div></div>`
    ).join("");
    frRight.innerHTML = `
      <div class="feature-header">
        <span class="feature-label">${highlightLabel}</span>
      </div>
      <div class="highlight-list">
        ${highlightItemsHtml}
      </div>`;
    if (highlights.length === 0) frRight.remove();
  }

  const price = data.priceStrip || {};
  const priceCells = doc.querySelectorAll(".price-strip .price-cell");
  const priceEntries = [
    [String(price.priceLabel || "PRICE"), String(price.price || ""), String(price.priceSub || "")],
    ["MOQ", String(price.moq || ""), String(price.moqSub || "")],
    ["COLOR", String(price.color || ""), String(price.colorSub || "")],
    ["BOX SIZE", String(price.boxSize || ""), String(price.boxSizeSub || "")],
    ["CARTON QTY", String(price.cartonQty || ""), String(price.cartonQtySub || "")],
  ];
  priceCells.forEach((cell, index) => {
    const [label, value, suffix] = priceEntries[index] || ["", "", ""];
    const labelNode = cell.querySelector(".price-label");
    const valueNode = cell.querySelector(".price-value");
    const suffixNode = cell.querySelector(".price-suffix");
    if (labelNode) labelNode.textContent = label;
    if (valueNode) valueNode.textContent = value;
    if (suffixNode) suffixNode.textContent = suffix;
  });

  setText(".footer-left", `${productName} ${productModel} 路 ${productType} 路 ${colorVariant} 路 FANTECH Internal Offering 路 Confidential - Not for Distribution`);
  setText(".footer-right", `INTERNAL OFFERING - ${footerMonth}`);

  return `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;
}

// ================================================================
// OFFERING ENGINE V2 — Layout Engine
// ================================================================

function stateToBlocks(data) {
  const features = data.uniqueFeatures.filter(f => f.title);
  const hero = data.heroFeature || {};
  const sw = data.softwareControl || {};
  const isView = data.showcaseType === 'VIEW_SHOWCASE';
  return {
    heroConcept: {
      sceneTitle: data.sceneTitle || '',
      heroImage: data.heroImage || '',
      heroPrompt: data.heroPrompt || '',
    },
    featureBlocks: features.map((f, i) => ({ ...f, highlight: f.highlight || i === 0 })),
    modeSystem: {
      type: isView ? 'VIEW' : 'MODE',
      items: [
        { tag: isView ? 'TOP VIEW' : 'MODE 01', name: hero.detail1Name || '', image: hero.detail1Image || '', caption: isView ? '' : (hero.detail1Caption || '') },
        { tag: isView ? 'ANGLE VIEW' : 'MODE 02', name: hero.detail2Name || '', image: hero.detail2Image || '', caption: isView ? '' : (hero.detail2Caption || '') },
      ],
    },
    softwareSystem: data.hasSoftware !== 'no' ? {
      title: sw.sectionTitle || '',
      lead: sw.leadDescription || '',
      cards: [
        { name: sw.editor1Name || '', image: sw.editor1Image || '', desc: sw.editor1Caption || '' },
        { name: sw.editor2Name || '', image: sw.editor2Image || '', desc: sw.editor2Caption || '' },
      ],
    } : null,
    specStrip: {
      keywords: data.specKeywords || '',
      price: (data.priceStrip || {}).price || '',
      priceSub: (data.priceStrip || {}).priceSub || '',
      moq: (data.priceStrip || {}).moq || '',
      moqSub: (data.priceStrip || {}).moqSub || '',
      color: (data.priceStrip || {}).color || '',
      colorSub: (data.priceStrip || {}).colorSub || '',
      boxSize: (data.priceStrip || {}).boxSize || '',
      boxSizeSub: (data.priceStrip || {}).boxSizeSub || '',
      cartonQty: (data.priceStrip || {}).cartonQty || '',
      cartonQtySub: (data.priceStrip || {}).cartonQtySub || '',
    },
  };
}

function selectLayoutStrategy(blocks) {
  if (blocks.modeSystem && blocks.modeSystem.type === 'MODE') return 'HERO_MODE';
  if (blocks.softwareSystem) return 'HERO_SOFTWARE';
  return 'HERO_STANDARD';
}

function splitDescriptionToLayers(text) {
  const cleaned = String(text || '').trim();
  if (!cleaned) return { proof: '', benefit: '' };
  const match = cleaned.match(/^([^.!；;]+[.!；;])\s*(.*)$/s);
  if (match && match[2].length > 5) {
    return { proof: match[1].trim(), benefit: match[2].trim() };
  }
  return { proof: cleaned, benefit: '' };
}

async function buildOfferingV2(data) {
  const blocks = stateToBlocks(data);
  const strategy = selectLayoutStrategy(blocks);
  const theme = THEMES[data.themeId] || Object.values(THEMES)[0];

  let html = await loadOfferingEngineTemplate();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Inject theme tokens
  doc.documentElement.style.setProperty('--dt-primary', theme.colors.primary);
  doc.documentElement.style.setProperty('--dt-topbar-bg', theme.colors.topbarBg);
  doc.documentElement.style.setProperty('--dt-price-bg', theme.colors.priceStripBg || '#1A1A1A');

  // Helper: set text content
  const setText = (sel, val) => { const el = doc.querySelector(sel); if (el) el.textContent = val; };
  // Helper: set image src
  const setImg = (sel, src, fallback) => { const el = doc.querySelector(sel); if (el) el.src = getImageSrc(src, fallback, ''); };
  // Helper: set attribute
  const setAttr = (sel, attr, val) => { const el = doc.querySelector(sel); if (el) el.setAttribute(attr, val); };

  // Header
  setText('.topbar-right b', formatMonthLabel(data.documentMonth));
  setAttr('.logo-img', 'src', 'assets/logo/gaming2.png');

  // Title
  setText('[data-field="productName"]', `${data.productName} ${data.productModel}`.trim());
  setText('[data-field="productType"]', data.productType);
  setText('[data-field="specKeywords"]', blocks.specStrip.keywords);

  // Hero
  setText('[data-field="sceneTitle"]', blocks.heroConcept.sceneTitle);
  setImg('[data-field="heroImage"]', blocks.heroConcept.heroImage, 'HERO IMAGE');

  // Features
  const capabilityGrid = doc.querySelector('[data-list="uniqueFeatures"]');
  if (capabilityGrid) {
    capabilityGrid.innerHTML = blocks.featureBlocks.slice(0, 6).map((f, i) => {
      const layers = splitDescriptionToLayers(f.description);
      const highlightClass = f.highlight ? ' highlight' : '';
      const badge = String(i + 1).padStart(2, '0');
      return `<div class="capability-card">
      <div class="capability-badge">${badge}</div>
      <div class="capability-body">
        <div class="capability-headline${highlightClass}">${escapeHtml(f.title)}</div>
        <div class="capability-proof">${escapeHtml(layers.proof)}</div>${layers.benefit ? `\n        <div class="capability-benefit">${escapeHtml(layers.benefit)}</div>` : ''}
      </div>
    </div>`;
    }).join('');
  }

  // Hero Feature (left column)
  setText('[data-field="heroFeatureHeadline"]', data.heroFeature.sectionTitle || '');
  setText('[data-field="heroFeatureLead"]', data.heroFeature.leadDescription || '');

  // Showcase cards
  const showcaseSection = doc.querySelector('[data-section="showcase"]');
  if (showcaseSection) {
    showcaseSection.setAttribute('data-showcase-type', blocks.modeSystem.type);
    const cards = showcaseSection.querySelectorAll('.showcase-card');
    blocks.modeSystem.items.forEach((item, i) => {
      if (cards[i]) {
        cards[i].querySelector('.showcase-tag').textContent = item.tag;
        const img = cards[i].querySelector('.showcase-fit');
        if (img) img.src = getImageSrc(item.image, item.tag, '');
      }
    });
  }

  // Right column
  const controlZone = doc.querySelector('[data-section="controlZone"]');
  if (controlZone) {
    if (blocks.softwareSystem) {
      controlZone.setAttribute('data-has-software', 'yes');
      setText('[data-field="softwareHeadline"]', blocks.softwareSystem.title);
      setText('[data-field="softwareLead"]', blocks.softwareSystem.lead);
      blocks.softwareSystem.cards.forEach((card, i) => {
        setImg(`[data-field="editor${i+1}Image"]`, card.image, `SOFTWARE ${i+1}`);
        setText(`[data-field="editor${i+1}Name"]`, card.name);
        setText(`[data-field="editor${i+1}Caption"]`, card.desc);
      });
    } else {
      controlZone.setAttribute('data-has-software', 'no');
      const extraFeatures = blocks.featureBlocks.slice(6);
      if (extraFeatures.length > 0) {
        controlZone.innerHTML = `<div class="highlights-label">ADDITIONAL HIGHLIGHTS</div><div class="highlights-list">${extraFeatures.map(f => `<div class="feature-item"><div class="feature-name">${escapeHtml(f.title)}</div><div class="feature-desc">${escapeHtml(f.description)}</div></div>`).join('')}</div>`;
      } else {
        controlZone.innerHTML = '';
      }
    }
  }

  // Price
  setText('[data-field="price"]', blocks.specStrip.price || '');
  setText('[data-field="priceSub"]', blocks.specStrip.priceSub || '');
  setText('[data-field="moq"]', blocks.specStrip.moq || '');
  setText('[data-field="moqSub"]', blocks.specStrip.moqSub || '');
  setText('[data-field="color"]', blocks.specStrip.color || '');
  setText('[data-field="colorSub"]', blocks.specStrip.colorSub || '');
  setText('[data-field="boxSize"]', blocks.specStrip.boxSize || '');
  setText('[data-field="boxSizeSub"]', blocks.specStrip.boxSizeSub || '');
  setText('[data-field="cartonQty"]', blocks.specStrip.cartonQty || '');
  setText('[data-field="cartonQtySub"]', blocks.specStrip.cartonQtySub || '');

  // Footer
  const monthLabel = formatMonthLabel(data.documentMonth);
  setText('[data-field="footerLeft"]', `${data.productName} ${data.productModel} · ${data.productType} · ${data.colorVariant} · ${theme.brandName} Internal Offering · Confidential`);
  setText('[data-field="footerRight"]', `INTERNAL OFFERING — ${monthLabel.toUpperCase()}`);

  // Set title
  doc.title = `${data.productName} ${data.productModel}`.trim() || 'Internal Offering';

  // Inline hardening for PDF — CSS custom properties may not resolve from external file
  const h = doc.createElement('style');
  h.textContent = `.hero-fit,.showcase-fit{max-width:100%!important;max-height:100%!important;display:block!important;object-fit:contain!important;object-position:center center!important;margin:auto!important}.hero-image-container,.showcase-img,.control-card-img{display:flex!important;align-items:center!important;justify-content:center!important}`;
  doc.head.appendChild(h);

  return `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;
}

// Template cache for v2 engine
let offeringEngineCache = null;
async function loadOfferingEngineTemplate() {
  if (offeringEngineCache) return offeringEngineCache;
  const response = await fetch('offering-engine.html');
  if (!response.ok) throw new Error('Offering engine template failed to load.');
  offeringEngineCache = await response.text();
  return offeringEngineCache;
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
