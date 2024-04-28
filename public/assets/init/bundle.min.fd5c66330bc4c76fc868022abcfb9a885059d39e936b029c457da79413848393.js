(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ns-params:@params
  var params_default = { analytics: null, archive: { paginate: 20 }, baseURL: "http://localhost:45357/", brand: "Blog Dude", breadcrumb: true, carouselpostcount: 5, codeblock: { linenos: false }, color: "auto", contact: null, counttaxonomyposts: true, creativecommons: { by: true, nc: false, nd: false, sa: true }, customcss: null, customjs: null, dateformat: ":date_long", description: "A website where I talk about whatever comes into my mind", diagram: false, featuredpostcount: 5, fixedheader: true, fontsize: null, fullwidth: false, giscus: { category: "Giscus", categoryid: "DIC_kwDOLyXds84Ce5Y5", reactions: true, repo: "liluzibird/blog", repoid: "R_kgDOLyXdsw" }, googleadsense: null, keywords: "Hugo, Bootstrap, Blog Dude, liluzibird, Blog, Documentation, Linux Documentation, Linux Gaming", mainsections: ["blog", "posts", "news", "docs"], palette: "indigo", palettes: ["blue", "blue gray", "brown", "cyan", "green", "indigo", "orange", "pink", "purple", "red", "teal", "yellow"], pinnedpost: true, pinnedpostcount: 3, post: { featuredimage: true, numberifyheadings: true, numberifyheadingsseparator: "." }, postdate: true, poweredby: true, pwa: { manifest: { short_name: "Blog Dude" } }, readingtime: true, recentpostcount: 5, relatedpostcount: 5, repo: { branch: "main", url: "https://github.com/liluzibird/blog" }, reward: null, rss: "home", search: { fuse: { threshold: 0.1 }, paginate: 5 }, searchbar: true, sidebar: { enablegitinfo: true }, sidebartaxonomies: ["series", "categories", "tags", "authors"], siteverification: { baidu: null, baiduunion: null, bing: null, google: null, shenma: null, so: null, sogou: null }, social: { email: "alberth03@protonmail.com", github: "liluzibird/blog", linkedin: "albert-huynh-50658b176" }, socialshare: false, taxonomypaginate: 10, taxonomypostcount: 20, titlecase: true, titleseparator: "-", tocwordcount: 1, topappbar: { social: { github: "liluzibird/blog" } }, viewer: true };

  // ns-hugo:/home/bigduck/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.5.6/assets/js/local-storage/index.ts
  var PathLocalStorage = class {
    constructor(baseURL) {
      this.baseURL = baseURL;
      __publicField(this, "prefix", "hbs:");
      if (baseURL.substring(0, 2) === "//") {
        baseURL = "http:" + baseURL;
      }
      let url;
      try {
        url = new URL(baseURL);
      } catch (e) {
        url = new URL(baseURL, location.protocol + "//" + location.host);
      }
      const pathname = url.pathname.replace(/^(\/+)/, "").replace(/(\/+)$/, "");
      if (pathname !== "") {
        this.prefix += pathname.replace("/", "-") + ":";
      }
    }
    getItem(key) {
      return localStorage.getItem(this.prefix + key);
    }
    setItem(key, value) {
      localStorage.setItem(this.prefix + key, value);
    }
    removeItem(key) {
      localStorage.removeItem(this.prefix + key);
    }
  };
  var local_storage_default = new PathLocalStorage(params_default.baseURL);

  // ns-hugo:/home/bigduck/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.5.6/assets/js/mode/index.ts
  var MODE_AUTO = "auto";
  var MODE_DARK = "dark";
  var MODE_LIGHT = "light";
  var modes = [MODE_AUTO, MODE_DARK, MODE_LIGHT];
  var ModeToggle = class _ModeToggle {
    constructor() {
      // Cache key.
      __publicField(this, "key", "mode");
      // Current color mode.
      __publicField(this, "mode");
      __publicField(this, "items");
      let mode = local_storage_default.getItem(this.key);
      if (!mode) {
        mode = params_default.color;
      }
      this.mode = modes.includes(mode) ? mode : MODE_AUTO;
    }
    run() {
      this.setMode(this.mode);
      window.addEventListener("load", () => {
        this.initListeners();
        this.active(this.mode);
      });
    }
    initListeners() {
      this.items = document.querySelectorAll(".mode-item");
      this.items.forEach((ele) => {
        ele.addEventListener("click", () => {
          const mode = ele.getAttribute("data-color-mode");
          this.setMode(mode);
          this.active(mode);
        });
      });
      window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
        if (this.isAuto()) {
          this.setMode(e.matches ? "dark" : "light");
        }
      });
    }
    isAuto() {
      return this.mode === MODE_AUTO;
    }
    // Active the relative HTML elements.
    active(mode) {
      var _a, _b;
      this.mode = mode;
      local_storage_default.setItem(this.key, mode);
      this.items.forEach((ele) => {
        const classList = ele.querySelector(".dropdown-item").classList;
        if (ele.getAttribute("data-color-mode") === mode) {
          classList.add("active");
        } else {
          classList.remove("active");
        }
      });
      const icon = (_a = document.querySelector('.mode-item[data-color-mode="' + mode + '"] .mode-icon')) == null ? void 0 : _a.cloneNode(true);
      if (!icon) {
        return;
      }
      icon.setAttribute("id", "modeIcon");
      (_b = document.querySelector("#modeIcon")) == null ? void 0 : _b.replaceWith(icon);
    }
    setMode(value) {
      if (value === "auto") {
        value = _ModeToggle.getPreferredMode();
      }
      console.debug(`Switch to ${value} mode`);
      document.documentElement.setAttribute("data-bs-theme", value);
      const event = new CustomEvent("hbs:mode", { detail: { mode: value } });
      document.dispatchEvent(event);
    }
    static getPreferredMode() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    }
  };
  var mode_default = ModeToggle;

  // ns-hugo:/home/bigduck/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.5.6/assets/js/palettes/index.ts
  var PaletteSelector = class {
    constructor() {
      __publicField(this, "key", "palette");
    }
    run() {
      const palette = this.getPalette();
      if (palette) {
        this.setPalette(palette);
      }
      window.addEventListener("load", () => {
        this.initPalette();
      });
    }
    initPalette() {
      const selected = this.getPalette();
      document.querySelectorAll(".palette").forEach((element) => {
        const paletteId = element.getAttribute("id").replace("palette-", "");
        if (paletteId === selected) {
          element.classList.add("active");
        }
        element.addEventListener("click", () => {
          this.setPalette(paletteId);
          document.querySelector(".palette.active").classList.remove("active");
          element.classList.add("active");
        });
      });
    }
    getPalette() {
      const palette = local_storage_default.getItem(this.key);
      if (palette) {
        return palette;
      }
      const paletteMeta = document.documentElement.getAttribute("data-palette");
      if (paletteMeta) {
        return paletteMeta;
      }
      return "";
    }
    setPalette(palette) {
      console.debug(`switch to palette: ${palette}`);
      document.documentElement.setAttribute("data-palette", palette);
      local_storage_default.setItem(this.key, palette);
    }
  };
  var palettes_default = PaletteSelector;

  // <stdin>
  new mode_default().run();
  new palettes_default().run();
})();
