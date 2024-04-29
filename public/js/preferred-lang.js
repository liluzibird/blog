(() => {
  // ns-params:@params
  var params_default = { fallback: "http://localhost:1313/", homes: { en: "http://localhost:1313/" } };

  // <stdin>
  (() => {
    const lang = navigator.language || navigator.userLanguage;
    if (lang in params_default.homes) {
      window.location.href = params_default.homes[lang];
      return;
    }
    const codes = lang.split("-");
    for (let lang2 in params_default.homes) {
      if (lang2.indexOf(codes[0]) === 0) {
        window.location.href = params_default.homes[lang2];
        return;
      }
    }
    window.location.href = params_default.fallback;
  })();
})();
