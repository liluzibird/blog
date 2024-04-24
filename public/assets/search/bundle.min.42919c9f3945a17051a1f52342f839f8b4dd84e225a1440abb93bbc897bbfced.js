(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/mark.js/dist/mark.js
  var require_mark = __commonJS({
    "node_modules/mark.js/dist/mark.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.Mark = factory();
      })(exports, function() {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var classCallCheck = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };
        var createClass = /* @__PURE__ */ function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var DOMIterator = function() {
          function DOMIterator2(ctx) {
            var iframes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var exclude = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            var iframesTimeout = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 5e3;
            classCallCheck(this, DOMIterator2);
            this.ctx = ctx;
            this.iframes = iframes;
            this.exclude = exclude;
            this.iframesTimeout = iframesTimeout;
          }
          createClass(DOMIterator2, [{
            key: "getContexts",
            value: function getContexts() {
              var ctx = void 0, filteredCtx = [];
              if (typeof this.ctx === "undefined" || !this.ctx) {
                ctx = [];
              } else if (NodeList.prototype.isPrototypeOf(this.ctx)) {
                ctx = Array.prototype.slice.call(this.ctx);
              } else if (Array.isArray(this.ctx)) {
                ctx = this.ctx;
              } else if (typeof this.ctx === "string") {
                ctx = Array.prototype.slice.call(document.querySelectorAll(this.ctx));
              } else {
                ctx = [this.ctx];
              }
              ctx.forEach(function(ctx2) {
                var isDescendant = filteredCtx.filter(function(contexts) {
                  return contexts.contains(ctx2);
                }).length > 0;
                if (filteredCtx.indexOf(ctx2) === -1 && !isDescendant) {
                  filteredCtx.push(ctx2);
                }
              });
              return filteredCtx;
            }
          }, {
            key: "getIframeContents",
            value: function getIframeContents(ifr, successFn) {
              var errorFn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
              };
              var doc = void 0;
              try {
                var ifrWin = ifr.contentWindow;
                doc = ifrWin.document;
                if (!ifrWin || !doc) {
                  throw new Error("iframe inaccessible");
                }
              } catch (e) {
                errorFn();
              }
              if (doc) {
                successFn(doc);
              }
            }
          }, {
            key: "isIframeBlank",
            value: function isIframeBlank(ifr) {
              var bl = "about:blank", src = ifr.getAttribute("src").trim(), href = ifr.contentWindow.location.href;
              return href === bl && src !== bl && src;
            }
          }, {
            key: "observeIframeLoad",
            value: function observeIframeLoad(ifr, successFn, errorFn) {
              var _this = this;
              var called = false, tout = null;
              var listener = function listener2() {
                if (called) {
                  return;
                }
                called = true;
                clearTimeout(tout);
                try {
                  if (!_this.isIframeBlank(ifr)) {
                    ifr.removeEventListener("load", listener2);
                    _this.getIframeContents(ifr, successFn, errorFn);
                  }
                } catch (e) {
                  errorFn();
                }
              };
              ifr.addEventListener("load", listener);
              tout = setTimeout(listener, this.iframesTimeout);
            }
          }, {
            key: "onIframeReady",
            value: function onIframeReady(ifr, successFn, errorFn) {
              try {
                if (ifr.contentWindow.document.readyState === "complete") {
                  if (this.isIframeBlank(ifr)) {
                    this.observeIframeLoad(ifr, successFn, errorFn);
                  } else {
                    this.getIframeContents(ifr, successFn, errorFn);
                  }
                } else {
                  this.observeIframeLoad(ifr, successFn, errorFn);
                }
              } catch (e) {
                errorFn();
              }
            }
          }, {
            key: "waitForIframes",
            value: function waitForIframes(ctx, done) {
              var _this2 = this;
              var eachCalled = 0;
              this.forEachIframe(ctx, function() {
                return true;
              }, function(ifr) {
                eachCalled++;
                _this2.waitForIframes(ifr.querySelector("html"), function() {
                  if (!--eachCalled) {
                    done();
                  }
                });
              }, function(handled) {
                if (!handled) {
                  done();
                }
              });
            }
          }, {
            key: "forEachIframe",
            value: function forEachIframe(ctx, filter, each) {
              var _this3 = this;
              var end = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              };
              var ifr = ctx.querySelectorAll("iframe"), open = ifr.length, handled = 0;
              ifr = Array.prototype.slice.call(ifr);
              var checkEnd = function checkEnd2() {
                if (--open <= 0) {
                  end(handled);
                }
              };
              if (!open) {
                checkEnd();
              }
              ifr.forEach(function(ifr2) {
                if (DOMIterator2.matches(ifr2, _this3.exclude)) {
                  checkEnd();
                } else {
                  _this3.onIframeReady(ifr2, function(con) {
                    if (filter(ifr2)) {
                      handled++;
                      each(con);
                    }
                    checkEnd();
                  }, checkEnd);
                }
              });
            }
          }, {
            key: "createIterator",
            value: function createIterator(ctx, whatToShow, filter) {
              return document.createNodeIterator(ctx, whatToShow, filter, false);
            }
          }, {
            key: "createInstanceOnIframe",
            value: function createInstanceOnIframe(contents) {
              return new DOMIterator2(contents.querySelector("html"), this.iframes);
            }
          }, {
            key: "compareNodeIframe",
            value: function compareNodeIframe(node, prevNode, ifr) {
              var compCurr = node.compareDocumentPosition(ifr), prev = Node.DOCUMENT_POSITION_PRECEDING;
              if (compCurr & prev) {
                if (prevNode !== null) {
                  var compPrev = prevNode.compareDocumentPosition(ifr), after = Node.DOCUMENT_POSITION_FOLLOWING;
                  if (compPrev & after) {
                    return true;
                  }
                } else {
                  return true;
                }
              }
              return false;
            }
          }, {
            key: "getIteratorNode",
            value: function getIteratorNode(itr) {
              var prevNode = itr.previousNode();
              var node = void 0;
              if (prevNode === null) {
                node = itr.nextNode();
              } else {
                node = itr.nextNode() && itr.nextNode();
              }
              return {
                prevNode,
                node
              };
            }
          }, {
            key: "checkIframeFilter",
            value: function checkIframeFilter(node, prevNode, currIfr, ifr) {
              var key = false, handled = false;
              ifr.forEach(function(ifrDict, i) {
                if (ifrDict.val === currIfr) {
                  key = i;
                  handled = ifrDict.handled;
                }
              });
              if (this.compareNodeIframe(node, prevNode, currIfr)) {
                if (key === false && !handled) {
                  ifr.push({
                    val: currIfr,
                    handled: true
                  });
                } else if (key !== false && !handled) {
                  ifr[key].handled = true;
                }
                return true;
              }
              if (key === false) {
                ifr.push({
                  val: currIfr,
                  handled: false
                });
              }
              return false;
            }
          }, {
            key: "handleOpenIframes",
            value: function handleOpenIframes(ifr, whatToShow, eCb, fCb) {
              var _this4 = this;
              ifr.forEach(function(ifrDict) {
                if (!ifrDict.handled) {
                  _this4.getIframeContents(ifrDict.val, function(con) {
                    _this4.createInstanceOnIframe(con).forEachNode(whatToShow, eCb, fCb);
                  });
                }
              });
            }
          }, {
            key: "iterateThroughNodes",
            value: function iterateThroughNodes(whatToShow, ctx, eachCb, filterCb, doneCb) {
              var _this5 = this;
              var itr = this.createIterator(ctx, whatToShow, filterCb);
              var ifr = [], elements = [], node = void 0, prevNode = void 0, retrieveNodes = function retrieveNodes2() {
                var _getIteratorNode = _this5.getIteratorNode(itr);
                prevNode = _getIteratorNode.prevNode;
                node = _getIteratorNode.node;
                return node;
              };
              while (retrieveNodes()) {
                if (this.iframes) {
                  this.forEachIframe(ctx, function(currIfr) {
                    return _this5.checkIframeFilter(node, prevNode, currIfr, ifr);
                  }, function(con) {
                    _this5.createInstanceOnIframe(con).forEachNode(whatToShow, function(ifrNode) {
                      return elements.push(ifrNode);
                    }, filterCb);
                  });
                }
                elements.push(node);
              }
              elements.forEach(function(node2) {
                eachCb(node2);
              });
              if (this.iframes) {
                this.handleOpenIframes(ifr, whatToShow, eachCb, filterCb);
              }
              doneCb();
            }
          }, {
            key: "forEachNode",
            value: function forEachNode(whatToShow, each, filter) {
              var _this6 = this;
              var done = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              };
              var contexts = this.getContexts();
              var open = contexts.length;
              if (!open) {
                done();
              }
              contexts.forEach(function(ctx) {
                var ready = function ready2() {
                  _this6.iterateThroughNodes(whatToShow, ctx, each, filter, function() {
                    if (--open <= 0) {
                      done();
                    }
                  });
                };
                if (_this6.iframes) {
                  _this6.waitForIframes(ctx, ready);
                } else {
                  ready();
                }
              });
            }
          }], [{
            key: "matches",
            value: function matches(element, selector) {
              var selectors = typeof selector === "string" ? [selector] : selector, fn = element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector;
              if (fn) {
                var match = false;
                selectors.every(function(sel) {
                  if (fn.call(element, sel)) {
                    match = true;
                    return false;
                  }
                  return true;
                });
                return match;
              } else {
                return false;
              }
            }
          }]);
          return DOMIterator2;
        }();
        var Mark$1 = function() {
          function Mark3(ctx) {
            classCallCheck(this, Mark3);
            this.ctx = ctx;
            this.ie = false;
            var ua = window.navigator.userAgent;
            if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident") > -1) {
              this.ie = true;
            }
          }
          createClass(Mark3, [{
            key: "log",
            value: function log(msg) {
              var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "debug";
              var log2 = this.opt.log;
              if (!this.opt.debug) {
                return;
              }
              if ((typeof log2 === "undefined" ? "undefined" : _typeof(log2)) === "object" && typeof log2[level] === "function") {
                log2[level]("mark.js: " + msg);
              }
            }
          }, {
            key: "escapeStr",
            value: function escapeStr(str) {
              return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }
          }, {
            key: "createRegExp",
            value: function createRegExp(str) {
              if (this.opt.wildcards !== "disabled") {
                str = this.setupWildcardsRegExp(str);
              }
              str = this.escapeStr(str);
              if (Object.keys(this.opt.synonyms).length) {
                str = this.createSynonymsRegExp(str);
              }
              if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
                str = this.setupIgnoreJoinersRegExp(str);
              }
              if (this.opt.diacritics) {
                str = this.createDiacriticsRegExp(str);
              }
              str = this.createMergedBlanksRegExp(str);
              if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
                str = this.createJoinersRegExp(str);
              }
              if (this.opt.wildcards !== "disabled") {
                str = this.createWildcardsRegExp(str);
              }
              str = this.createAccuracyRegExp(str);
              return str;
            }
          }, {
            key: "createSynonymsRegExp",
            value: function createSynonymsRegExp(str) {
              var syn = this.opt.synonyms, sens = this.opt.caseSensitive ? "" : "i", joinerPlaceholder = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
              for (var index in syn) {
                if (syn.hasOwnProperty(index)) {
                  var value = syn[index], k1 = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(index) : this.escapeStr(index), k2 = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(value) : this.escapeStr(value);
                  if (k1 !== "" && k2 !== "") {
                    str = str.replace(new RegExp("(" + this.escapeStr(k1) + "|" + this.escapeStr(k2) + ")", "gm" + sens), joinerPlaceholder + ("(" + this.processSynomyms(k1) + "|") + (this.processSynomyms(k2) + ")") + joinerPlaceholder);
                  }
                }
              }
              return str;
            }
          }, {
            key: "processSynomyms",
            value: function processSynomyms(str) {
              if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
                str = this.setupIgnoreJoinersRegExp(str);
              }
              return str;
            }
          }, {
            key: "setupWildcardsRegExp",
            value: function setupWildcardsRegExp(str) {
              str = str.replace(/(?:\\)*\?/g, function(val) {
                return val.charAt(0) === "\\" ? "?" : "";
              });
              return str.replace(/(?:\\)*\*/g, function(val) {
                return val.charAt(0) === "\\" ? "*" : "";
              });
            }
          }, {
            key: "createWildcardsRegExp",
            value: function createWildcardsRegExp(str) {
              var spaces = this.opt.wildcards === "withSpaces";
              return str.replace(/\u0001/g, spaces ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, spaces ? "[\\S\\s]*?" : "\\S*");
            }
          }, {
            key: "setupIgnoreJoinersRegExp",
            value: function setupIgnoreJoinersRegExp(str) {
              return str.replace(/[^(|)\\]/g, function(val, indx, original) {
                var nextChar = original.charAt(indx + 1);
                if (/[(|)\\]/.test(nextChar) || nextChar === "") {
                  return val;
                } else {
                  return val + "\0";
                }
              });
            }
          }, {
            key: "createJoinersRegExp",
            value: function createJoinersRegExp(str) {
              var joiner = [];
              var ignorePunctuation = this.opt.ignorePunctuation;
              if (Array.isArray(ignorePunctuation) && ignorePunctuation.length) {
                joiner.push(this.escapeStr(ignorePunctuation.join("")));
              }
              if (this.opt.ignoreJoiners) {
                joiner.push("\\u00ad\\u200b\\u200c\\u200d");
              }
              return joiner.length ? str.split(/\u0000+/).join("[" + joiner.join("") + "]*") : str;
            }
          }, {
            key: "createDiacriticsRegExp",
            value: function createDiacriticsRegExp(str) {
              var sens = this.opt.caseSensitive ? "" : "i", dct = this.opt.caseSensitive ? ["a\xE0\xE1\u1EA3\xE3\u1EA1\u0103\u1EB1\u1EAF\u1EB3\u1EB5\u1EB7\xE2\u1EA7\u1EA5\u1EA9\u1EAB\u1EAD\xE4\xE5\u0101\u0105", "A\xC0\xC1\u1EA2\xC3\u1EA0\u0102\u1EB0\u1EAE\u1EB2\u1EB4\u1EB6\xC2\u1EA6\u1EA4\u1EA8\u1EAA\u1EAC\xC4\xC5\u0100\u0104", "c\xE7\u0107\u010D", "C\xC7\u0106\u010C", "d\u0111\u010F", "D\u0110\u010E", "e\xE8\xE9\u1EBB\u1EBD\u1EB9\xEA\u1EC1\u1EBF\u1EC3\u1EC5\u1EC7\xEB\u011B\u0113\u0119", "E\xC8\xC9\u1EBA\u1EBC\u1EB8\xCA\u1EC0\u1EBE\u1EC2\u1EC4\u1EC6\xCB\u011A\u0112\u0118", "i\xEC\xED\u1EC9\u0129\u1ECB\xEE\xEF\u012B", "I\xCC\xCD\u1EC8\u0128\u1ECA\xCE\xCF\u012A", "l\u0142", "L\u0141", "n\xF1\u0148\u0144", "N\xD1\u0147\u0143", "o\xF2\xF3\u1ECF\xF5\u1ECD\xF4\u1ED3\u1ED1\u1ED5\u1ED7\u1ED9\u01A1\u1EDF\u1EE1\u1EDB\u1EDD\u1EE3\xF6\xF8\u014D", "O\xD2\xD3\u1ECE\xD5\u1ECC\xD4\u1ED2\u1ED0\u1ED4\u1ED6\u1ED8\u01A0\u1EDE\u1EE0\u1EDA\u1EDC\u1EE2\xD6\xD8\u014C", "r\u0159", "R\u0158", "s\u0161\u015B\u0219\u015F", "S\u0160\u015A\u0218\u015E", "t\u0165\u021B\u0163", "T\u0164\u021A\u0162", "u\xF9\xFA\u1EE7\u0169\u1EE5\u01B0\u1EEB\u1EE9\u1EED\u1EEF\u1EF1\xFB\xFC\u016F\u016B", "U\xD9\xDA\u1EE6\u0168\u1EE4\u01AF\u1EEA\u1EE8\u1EEC\u1EEE\u1EF0\xDB\xDC\u016E\u016A", "y\xFD\u1EF3\u1EF7\u1EF9\u1EF5\xFF", "Y\xDD\u1EF2\u1EF6\u1EF8\u1EF4\u0178", "z\u017E\u017C\u017A", "Z\u017D\u017B\u0179"] : ["a\xE0\xE1\u1EA3\xE3\u1EA1\u0103\u1EB1\u1EAF\u1EB3\u1EB5\u1EB7\xE2\u1EA7\u1EA5\u1EA9\u1EAB\u1EAD\xE4\xE5\u0101\u0105A\xC0\xC1\u1EA2\xC3\u1EA0\u0102\u1EB0\u1EAE\u1EB2\u1EB4\u1EB6\xC2\u1EA6\u1EA4\u1EA8\u1EAA\u1EAC\xC4\xC5\u0100\u0104", "c\xE7\u0107\u010DC\xC7\u0106\u010C", "d\u0111\u010FD\u0110\u010E", "e\xE8\xE9\u1EBB\u1EBD\u1EB9\xEA\u1EC1\u1EBF\u1EC3\u1EC5\u1EC7\xEB\u011B\u0113\u0119E\xC8\xC9\u1EBA\u1EBC\u1EB8\xCA\u1EC0\u1EBE\u1EC2\u1EC4\u1EC6\xCB\u011A\u0112\u0118", "i\xEC\xED\u1EC9\u0129\u1ECB\xEE\xEF\u012BI\xCC\xCD\u1EC8\u0128\u1ECA\xCE\xCF\u012A", "l\u0142L\u0141", "n\xF1\u0148\u0144N\xD1\u0147\u0143", "o\xF2\xF3\u1ECF\xF5\u1ECD\xF4\u1ED3\u1ED1\u1ED5\u1ED7\u1ED9\u01A1\u1EDF\u1EE1\u1EDB\u1EDD\u1EE3\xF6\xF8\u014DO\xD2\xD3\u1ECE\xD5\u1ECC\xD4\u1ED2\u1ED0\u1ED4\u1ED6\u1ED8\u01A0\u1EDE\u1EE0\u1EDA\u1EDC\u1EE2\xD6\xD8\u014C", "r\u0159R\u0158", "s\u0161\u015B\u0219\u015FS\u0160\u015A\u0218\u015E", "t\u0165\u021B\u0163T\u0164\u021A\u0162", "u\xF9\xFA\u1EE7\u0169\u1EE5\u01B0\u1EEB\u1EE9\u1EED\u1EEF\u1EF1\xFB\xFC\u016F\u016BU\xD9\xDA\u1EE6\u0168\u1EE4\u01AF\u1EEA\u1EE8\u1EEC\u1EEE\u1EF0\xDB\xDC\u016E\u016A", "y\xFD\u1EF3\u1EF7\u1EF9\u1EF5\xFFY\xDD\u1EF2\u1EF6\u1EF8\u1EF4\u0178", "z\u017E\u017C\u017AZ\u017D\u017B\u0179"];
              var handled = [];
              str.split("").forEach(function(ch) {
                dct.every(function(dct2) {
                  if (dct2.indexOf(ch) !== -1) {
                    if (handled.indexOf(dct2) > -1) {
                      return false;
                    }
                    str = str.replace(new RegExp("[" + dct2 + "]", "gm" + sens), "[" + dct2 + "]");
                    handled.push(dct2);
                  }
                  return true;
                });
              });
              return str;
            }
          }, {
            key: "createMergedBlanksRegExp",
            value: function createMergedBlanksRegExp(str) {
              return str.replace(/[\s]+/gmi, "[\\s]+");
            }
          }, {
            key: "createAccuracyRegExp",
            value: function createAccuracyRegExp(str) {
              var _this = this;
              var chars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\xA1\xBF";
              var acc = this.opt.accuracy, val = typeof acc === "string" ? acc : acc.value, ls = typeof acc === "string" ? [] : acc.limiters, lsJoin = "";
              ls.forEach(function(limiter) {
                lsJoin += "|" + _this.escapeStr(limiter);
              });
              switch (val) {
                case "partially":
                default:
                  return "()(" + str + ")";
                case "complementary":
                  lsJoin = "\\s" + (lsJoin ? lsJoin : this.escapeStr(chars));
                  return "()([^" + lsJoin + "]*" + str + "[^" + lsJoin + "]*)";
                case "exactly":
                  return "(^|\\s" + lsJoin + ")(" + str + ")(?=$|\\s" + lsJoin + ")";
              }
            }
          }, {
            key: "getSeparatedKeywords",
            value: function getSeparatedKeywords(sv) {
              var _this2 = this;
              var stack = [];
              sv.forEach(function(kw) {
                if (!_this2.opt.separateWordSearch) {
                  if (kw.trim() && stack.indexOf(kw) === -1) {
                    stack.push(kw);
                  }
                } else {
                  kw.split(" ").forEach(function(kwSplitted) {
                    if (kwSplitted.trim() && stack.indexOf(kwSplitted) === -1) {
                      stack.push(kwSplitted);
                    }
                  });
                }
              });
              return {
                "keywords": stack.sort(function(a, b) {
                  return b.length - a.length;
                }),
                "length": stack.length
              };
            }
          }, {
            key: "isNumeric",
            value: function isNumeric(value) {
              return Number(parseFloat(value)) == value;
            }
          }, {
            key: "checkRanges",
            value: function checkRanges(array) {
              var _this3 = this;
              if (!Array.isArray(array) || Object.prototype.toString.call(array[0]) !== "[object Object]") {
                this.log("markRanges() will only accept an array of objects");
                this.opt.noMatch(array);
                return [];
              }
              var stack = [];
              var last = 0;
              array.sort(function(a, b) {
                return a.start - b.start;
              }).forEach(function(item) {
                var _callNoMatchOnInvalid = _this3.callNoMatchOnInvalidRanges(item, last), start = _callNoMatchOnInvalid.start, end = _callNoMatchOnInvalid.end, valid = _callNoMatchOnInvalid.valid;
                if (valid) {
                  item.start = start;
                  item.length = end - start;
                  stack.push(item);
                  last = end;
                }
              });
              return stack;
            }
          }, {
            key: "callNoMatchOnInvalidRanges",
            value: function callNoMatchOnInvalidRanges(range, last) {
              var start = void 0, end = void 0, valid = false;
              if (range && typeof range.start !== "undefined") {
                start = parseInt(range.start, 10);
                end = start + parseInt(range.length, 10);
                if (this.isNumeric(range.start) && this.isNumeric(range.length) && end - last > 0 && end - start > 0) {
                  valid = true;
                } else {
                  this.log("Ignoring invalid or overlapping range: " + ("" + JSON.stringify(range)));
                  this.opt.noMatch(range);
                }
              } else {
                this.log("Ignoring invalid range: " + JSON.stringify(range));
                this.opt.noMatch(range);
              }
              return {
                start,
                end,
                valid
              };
            }
          }, {
            key: "checkWhitespaceRanges",
            value: function checkWhitespaceRanges(range, originalLength, string) {
              var end = void 0, valid = true, max = string.length, offset = originalLength - max, start = parseInt(range.start, 10) - offset;
              start = start > max ? max : start;
              end = start + parseInt(range.length, 10);
              if (end > max) {
                end = max;
                this.log("End range automatically set to the max value of " + max);
              }
              if (start < 0 || end - start < 0 || start > max || end > max) {
                valid = false;
                this.log("Invalid range: " + JSON.stringify(range));
                this.opt.noMatch(range);
              } else if (string.substring(start, end).replace(/\s+/g, "") === "") {
                valid = false;
                this.log("Skipping whitespace only range: " + JSON.stringify(range));
                this.opt.noMatch(range);
              }
              return {
                start,
                end,
                valid
              };
            }
          }, {
            key: "getTextNodes",
            value: function getTextNodes(cb) {
              var _this4 = this;
              var val = "", nodes = [];
              this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function(node) {
                nodes.push({
                  start: val.length,
                  end: (val += node.textContent).length,
                  node
                });
              }, function(node) {
                if (_this4.matchesExclude(node.parentNode)) {
                  return NodeFilter.FILTER_REJECT;
                } else {
                  return NodeFilter.FILTER_ACCEPT;
                }
              }, function() {
                cb({
                  value: val,
                  nodes
                });
              });
            }
          }, {
            key: "matchesExclude",
            value: function matchesExclude(el) {
              return DOMIterator.matches(el, this.opt.exclude.concat(["script", "style", "title", "head", "html"]));
            }
          }, {
            key: "wrapRangeInTextNode",
            value: function wrapRangeInTextNode(node, start, end) {
              var hEl = !this.opt.element ? "mark" : this.opt.element, startNode = node.splitText(start), ret = startNode.splitText(end - start);
              var repl = document.createElement(hEl);
              repl.setAttribute("data-markjs", "true");
              if (this.opt.className) {
                repl.setAttribute("class", this.opt.className);
              }
              repl.textContent = startNode.textContent;
              startNode.parentNode.replaceChild(repl, startNode);
              return ret;
            }
          }, {
            key: "wrapRangeInMappedTextNode",
            value: function wrapRangeInMappedTextNode(dict, start, end, filterCb, eachCb) {
              var _this5 = this;
              dict.nodes.every(function(n, i) {
                var sibl = dict.nodes[i + 1];
                if (typeof sibl === "undefined" || sibl.start > start) {
                  if (!filterCb(n.node)) {
                    return false;
                  }
                  var s = start - n.start, e = (end > n.end ? n.end : end) - n.start, startStr = dict.value.substr(0, n.start), endStr = dict.value.substr(e + n.start);
                  n.node = _this5.wrapRangeInTextNode(n.node, s, e);
                  dict.value = startStr + endStr;
                  dict.nodes.forEach(function(k, j) {
                    if (j >= i) {
                      if (dict.nodes[j].start > 0 && j !== i) {
                        dict.nodes[j].start -= e;
                      }
                      dict.nodes[j].end -= e;
                    }
                  });
                  end -= e;
                  eachCb(n.node.previousSibling, n.start);
                  if (end > n.end) {
                    start = n.end;
                  } else {
                    return false;
                  }
                }
                return true;
              });
            }
          }, {
            key: "wrapMatches",
            value: function wrapMatches(regex, ignoreGroups, filterCb, eachCb, endCb) {
              var _this6 = this;
              var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
              this.getTextNodes(function(dict) {
                dict.nodes.forEach(function(node) {
                  node = node.node;
                  var match = void 0;
                  while ((match = regex.exec(node.textContent)) !== null && match[matchIdx] !== "") {
                    if (!filterCb(match[matchIdx], node)) {
                      continue;
                    }
                    var pos = match.index;
                    if (matchIdx !== 0) {
                      for (var i = 1; i < matchIdx; i++) {
                        pos += match[i].length;
                      }
                    }
                    node = _this6.wrapRangeInTextNode(node, pos, pos + match[matchIdx].length);
                    eachCb(node.previousSibling);
                    regex.lastIndex = 0;
                  }
                });
                endCb();
              });
            }
          }, {
            key: "wrapMatchesAcrossElements",
            value: function wrapMatchesAcrossElements(regex, ignoreGroups, filterCb, eachCb, endCb) {
              var _this7 = this;
              var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
              this.getTextNodes(function(dict) {
                var match = void 0;
                while ((match = regex.exec(dict.value)) !== null && match[matchIdx] !== "") {
                  var start = match.index;
                  if (matchIdx !== 0) {
                    for (var i = 1; i < matchIdx; i++) {
                      start += match[i].length;
                    }
                  }
                  var end = start + match[matchIdx].length;
                  _this7.wrapRangeInMappedTextNode(dict, start, end, function(node) {
                    return filterCb(match[matchIdx], node);
                  }, function(node, lastIndex) {
                    regex.lastIndex = lastIndex;
                    eachCb(node);
                  });
                }
                endCb();
              });
            }
          }, {
            key: "wrapRangeFromIndex",
            value: function wrapRangeFromIndex(ranges, filterCb, eachCb, endCb) {
              var _this8 = this;
              this.getTextNodes(function(dict) {
                var originalLength = dict.value.length;
                ranges.forEach(function(range, counter) {
                  var _checkWhitespaceRange = _this8.checkWhitespaceRanges(range, originalLength, dict.value), start = _checkWhitespaceRange.start, end = _checkWhitespaceRange.end, valid = _checkWhitespaceRange.valid;
                  if (valid) {
                    _this8.wrapRangeInMappedTextNode(dict, start, end, function(node) {
                      return filterCb(node, range, dict.value.substring(start, end), counter);
                    }, function(node) {
                      eachCb(node, range);
                    });
                  }
                });
                endCb();
              });
            }
          }, {
            key: "unwrapMatches",
            value: function unwrapMatches(node) {
              var parent = node.parentNode;
              var docFrag = document.createDocumentFragment();
              while (node.firstChild) {
                docFrag.appendChild(node.removeChild(node.firstChild));
              }
              parent.replaceChild(docFrag, node);
              if (!this.ie) {
                parent.normalize();
              } else {
                this.normalizeTextNode(parent);
              }
            }
          }, {
            key: "normalizeTextNode",
            value: function normalizeTextNode(node) {
              if (!node) {
                return;
              }
              if (node.nodeType === 3) {
                while (node.nextSibling && node.nextSibling.nodeType === 3) {
                  node.nodeValue += node.nextSibling.nodeValue;
                  node.parentNode.removeChild(node.nextSibling);
                }
              } else {
                this.normalizeTextNode(node.firstChild);
              }
              this.normalizeTextNode(node.nextSibling);
            }
          }, {
            key: "markRegExp",
            value: function markRegExp(regexp, opt) {
              var _this9 = this;
              this.opt = opt;
              this.log('Searching with expression "' + regexp + '"');
              var totalMatches = 0, fn = "wrapMatches";
              var eachCb = function eachCb2(element) {
                totalMatches++;
                _this9.opt.each(element);
              };
              if (this.opt.acrossElements) {
                fn = "wrapMatchesAcrossElements";
              }
              this[fn](regexp, this.opt.ignoreGroups, function(match, node) {
                return _this9.opt.filter(node, match, totalMatches);
              }, eachCb, function() {
                if (totalMatches === 0) {
                  _this9.opt.noMatch(regexp);
                }
                _this9.opt.done(totalMatches);
              });
            }
          }, {
            key: "mark",
            value: function mark(sv, opt) {
              var _this10 = this;
              this.opt = opt;
              var totalMatches = 0, fn = "wrapMatches";
              var _getSeparatedKeywords = this.getSeparatedKeywords(typeof sv === "string" ? [sv] : sv), kwArr = _getSeparatedKeywords.keywords, kwArrLen = _getSeparatedKeywords.length, sens = this.opt.caseSensitive ? "" : "i", handler = function handler2(kw) {
                var regex = new RegExp(_this10.createRegExp(kw), "gm" + sens), matches = 0;
                _this10.log('Searching with expression "' + regex + '"');
                _this10[fn](regex, 1, function(term, node) {
                  return _this10.opt.filter(node, kw, totalMatches, matches);
                }, function(element) {
                  matches++;
                  totalMatches++;
                  _this10.opt.each(element);
                }, function() {
                  if (matches === 0) {
                    _this10.opt.noMatch(kw);
                  }
                  if (kwArr[kwArrLen - 1] === kw) {
                    _this10.opt.done(totalMatches);
                  } else {
                    handler2(kwArr[kwArr.indexOf(kw) + 1]);
                  }
                });
              };
              if (this.opt.acrossElements) {
                fn = "wrapMatchesAcrossElements";
              }
              if (kwArrLen === 0) {
                this.opt.done(totalMatches);
              } else {
                handler(kwArr[0]);
              }
            }
          }, {
            key: "markRanges",
            value: function markRanges(rawRanges, opt) {
              var _this11 = this;
              this.opt = opt;
              var totalMatches = 0, ranges = this.checkRanges(rawRanges);
              if (ranges && ranges.length) {
                this.log("Starting to mark with the following ranges: " + JSON.stringify(ranges));
                this.wrapRangeFromIndex(ranges, function(node, range, match, counter) {
                  return _this11.opt.filter(node, range, match, counter);
                }, function(element, range) {
                  totalMatches++;
                  _this11.opt.each(element, range);
                }, function() {
                  _this11.opt.done(totalMatches);
                });
              } else {
                this.opt.done(totalMatches);
              }
            }
          }, {
            key: "unmark",
            value: function unmark(opt) {
              var _this12 = this;
              this.opt = opt;
              var sel = this.opt.element ? this.opt.element : "*";
              sel += "[data-markjs]";
              if (this.opt.className) {
                sel += "." + this.opt.className;
              }
              this.log('Removal selector "' + sel + '"');
              this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function(node) {
                _this12.unwrapMatches(node);
              }, function(node) {
                var matchesSel = DOMIterator.matches(node, sel), matchesExclude = _this12.matchesExclude(node);
                if (!matchesSel || matchesExclude) {
                  return NodeFilter.FILTER_REJECT;
                } else {
                  return NodeFilter.FILTER_ACCEPT;
                }
              }, this.opt.done);
            }
          }, {
            key: "opt",
            set: function set$$1(val) {
              this._opt = _extends({}, {
                "element": "",
                "className": "",
                "exclude": [],
                "iframes": false,
                "iframesTimeout": 5e3,
                "separateWordSearch": true,
                "diacritics": true,
                "synonyms": {},
                "accuracy": "partially",
                "acrossElements": false,
                "caseSensitive": false,
                "ignoreJoiners": false,
                "ignoreGroups": 0,
                "ignorePunctuation": [],
                "wildcards": "disabled",
                "each": function each() {
                },
                "noMatch": function noMatch() {
                },
                "filter": function filter() {
                  return true;
                },
                "done": function done() {
                },
                "debug": false,
                "log": window.console
              }, val);
            },
            get: function get$$1() {
              return this._opt;
            }
          }, {
            key: "iterator",
            get: function get$$1() {
              return new DOMIterator(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout);
            }
          }]);
          return Mark3;
        }();
        function Mark2(ctx) {
          var _this = this;
          var instance = new Mark$1(ctx);
          this.mark = function(sv, opt) {
            instance.mark(sv, opt);
            return _this;
          };
          this.markRegExp = function(sv, opt) {
            instance.markRegExp(sv, opt);
            return _this;
          };
          this.markRanges = function(sv, opt) {
            instance.markRanges(sv, opt);
            return _this;
          };
          this.unmark = function(opt) {
            instance.unmark(opt);
            return _this;
          };
          return this;
        }
        return Mark2;
      });
    }
  });

  // ns-hugo:/home/BigDuck/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.5.6/assets/search/search.ts
  var import_mark = __toESM(require_mark());

  // node_modules/mustache/mustache.mjs
  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill(object) {
    return objectToString.call(object) === "[object Array]";
  };
  function isFunction(object) {
    return typeof object === "function";
  }
  function typeStr(obj) {
    return isArray(obj) ? "array" : typeof obj;
  }
  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function hasProperty(obj, propName) {
    return obj != null && typeof obj === "object" && propName in obj;
  }
  function primitiveHasOwnProperty(primitive, propName) {
    return primitive != null && typeof primitive !== "object" && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
  }
  var regExpTest = RegExp.prototype.test;
  function testRegExp(re, string) {
    return regExpTest.call(re, string);
  }
  var nonSpaceRe = /\S/;
  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;"
  };
  function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
      return entityMap[s];
    });
  }
  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;
  function parseTemplate(template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];
    var tokens = [];
    var spaces = [];
    var hasTag = false;
    var nonSpace = false;
    var indentation = "";
    var tagIndex = 0;
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }
      hasTag = false;
      nonSpace = false;
    }
    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags(tagsToCompile) {
      if (typeof tagsToCompile === "string")
        tagsToCompile = tagsToCompile.split(spaceRe, 2);
      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error("Invalid tags: " + tagsToCompile);
      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
      closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
    }
    compileTags(tags || mustache.tags);
    var scanner = new Scanner(template);
    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;
      value = scanner.scanUntil(openingTagRe);
      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);
          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += " ";
          }
          tokens.push(["text", chr, start, start + 1]);
          start += 1;
          if (chr === "\n") {
            stripSpace();
            indentation = "";
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }
      if (!scanner.scan(openingTagRe))
        break;
      hasTag = true;
      type = scanner.scan(tagRe) || "name";
      scanner.scan(whiteRe);
      if (type === "=") {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === "{") {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = "&";
      } else {
        value = scanner.scanUntil(closingTagRe);
      }
      if (!scanner.scan(closingTagRe))
        throw new Error("Unclosed tag at " + scanner.pos);
      if (type == ">") {
        token = [type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
      } else {
        token = [type, value, start, scanner.pos];
      }
      tagIndex++;
      tokens.push(token);
      if (type === "#" || type === "^") {
        sections.push(token);
      } else if (type === "/") {
        openSection = sections.pop();
        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);
        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      } else if (type === "=") {
        compileTags(value);
      }
    }
    stripSpace();
    openSection = sections.pop();
    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    return nestTokens(squashTokens(tokens));
  }
  function squashTokens(tokens) {
    var squashedTokens = [];
    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      if (token) {
        if (token[0] === "text" && lastToken && lastToken[0] === "text") {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }
    return squashedTokens;
  }
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];
    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      switch (token[0]) {
        case "#":
        case "^":
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case "/":
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }
    return nestedTokens;
  }
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }
  Scanner.prototype.eos = function eos() {
    return this.tail === "";
  };
  Scanner.prototype.scan = function scan(re) {
    var match = this.tail.match(re);
    if (!match || match.index !== 0)
      return "";
    var string = match[0];
    this.tail = this.tail.substring(string.length);
    this.pos += string.length;
    return string;
  };
  Scanner.prototype.scanUntil = function scanUntil(re) {
    var index = this.tail.search(re), match;
    switch (index) {
      case -1:
        match = this.tail;
        this.tail = "";
        break;
      case 0:
        match = "";
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }
    this.pos += match.length;
    return match;
  };
  function Context(view, parentContext) {
    this.view = view;
    this.cache = { ".": this.view };
    this.parent = parentContext;
  }
  Context.prototype.push = function push(view) {
    return new Context(view, this);
  };
  Context.prototype.lookup = function lookup(name) {
    var cache = this.cache;
    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;
      while (context) {
        if (name.indexOf(".") > 0) {
          intermediateValue = context.view;
          names = name.split(".");
          index = 0;
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);
            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }
        if (lookupHit) {
          value = intermediateValue;
          break;
        }
        context = context.parent;
      }
      cache[name] = value;
    }
    if (isFunction(value))
      value = value.call(this.view);
    return value;
  };
  function Writer() {
    this.templateCache = {
      _cache: {},
      set: function set(key, value) {
        this._cache[key] = value;
      },
      get: function get2(key) {
        return this._cache[key];
      },
      clear: function clear() {
        this._cache = {};
      }
    };
  }
  Writer.prototype.clearCache = function clearCache() {
    if (typeof this.templateCache !== "undefined") {
      this.templateCache.clear();
    }
  };
  Writer.prototype.parse = function parse(template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ":" + (tags || mustache.tags).join(":");
    var isCacheEnabled = typeof cache !== "undefined";
    var tokens = isCacheEnabled ? cache.get(cacheKey) : void 0;
    if (tokens == void 0) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };
  Writer.prototype.render = function render(template, view, partials, config) {
    var tags = this.getConfigTags(config);
    var tokens = this.parse(template, tags);
    var context = view instanceof Context ? view : new Context(view, void 0);
    return this.renderTokens(tokens, context, partials, template, config);
  };
  Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, config) {
    var buffer = "";
    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = void 0;
      token = tokens[i];
      symbol = token[0];
      if (symbol === "#")
        value = this.renderSection(token, context, partials, originalTemplate, config);
      else if (symbol === "^")
        value = this.renderInverted(token, context, partials, originalTemplate, config);
      else if (symbol === ">")
        value = this.renderPartial(token, context, partials, config);
      else if (symbol === "&")
        value = this.unescapedValue(token, context);
      else if (symbol === "name")
        value = this.escapedValue(token, context, config);
      else if (symbol === "text")
        value = this.rawValue(token);
      if (value !== void 0)
        buffer += value;
    }
    return buffer;
  };
  Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate, config) {
    var self = this;
    var buffer = "";
    var value = context.lookup(token[1]);
    function subRender(template) {
      return self.render(template, context, partials, config);
    }
    if (!value)
      return;
    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
      }
    } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== "string")
        throw new Error("Cannot use higher-order sections without the original template");
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
    }
    return buffer;
  };
  Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate, config) {
    var value = context.lookup(token[1]);
    if (!value || isArray(value) && value.length === 0)
      return this.renderTokens(token[4], context, partials, originalTemplate, config);
  };
  Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, "");
    var partialByNl = partial.split("\n");
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join("\n");
  };
  Writer.prototype.renderPartial = function renderPartial(token, context, partials, config) {
    if (!partials)
      return;
    var tags = this.getConfigTags(config);
    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      var tokens = this.parse(indentedValue, tags);
      return this.renderTokens(tokens, context, partials, indentedValue, config);
    }
  };
  Writer.prototype.unescapedValue = function unescapedValue(token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };
  Writer.prototype.escapedValue = function escapedValue(token, context, config) {
    var escape = this.getConfigEscape(config) || mustache.escape;
    var value = context.lookup(token[1]);
    if (value != null)
      return typeof value === "number" && escape === mustache.escape ? String(value) : escape(value);
  };
  Writer.prototype.rawValue = function rawValue(token) {
    return token[1];
  };
  Writer.prototype.getConfigTags = function getConfigTags(config) {
    if (isArray(config)) {
      return config;
    } else if (config && typeof config === "object") {
      return config.tags;
    } else {
      return void 0;
    }
  };
  Writer.prototype.getConfigEscape = function getConfigEscape(config) {
    if (config && typeof config === "object" && !isArray(config)) {
      return config.escape;
    } else {
      return void 0;
    }
  };
  var mustache = {
    name: "mustache.js",
    version: "4.2.0",
    tags: ["{{", "}}"],
    clearCache: void 0,
    escape: void 0,
    parse: void 0,
    render: void 0,
    Scanner: void 0,
    Context: void 0,
    Writer: void 0,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache(cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache() {
      return defaultWriter.templateCache;
    }
  };
  var defaultWriter = new Writer();
  mustache.clearCache = function clearCache2() {
    return defaultWriter.clearCache();
  };
  mustache.parse = function parse2(template, tags) {
    return defaultWriter.parse(template, tags);
  };
  mustache.render = function render2(template, view, partials, config) {
    if (typeof template !== "string") {
      throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
    }
    return defaultWriter.render(template, view, partials, config);
  };
  mustache.escape = escapeHtml;
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;
  var mustache_default = mustache;

  // node_modules/fuse.js/dist/fuse.esm.js
  function isArray2(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  var INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
  var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
  var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
  var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
  var hasOwn = Object.prototype.hasOwnProperty;
  var KeyStore = class {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys.forEach((key) => {
        let obj = createKey(key);
        totalWeight += obj.weight;
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray2(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn;
    }
    return { path, id, weight, src, getFn };
  }
  function createKeyPath(key) {
    return isArray2(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray2(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path2, index) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index]) {
        list.push(obj2);
      } else {
        let key = path2[index];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString(value));
        } else if (isArray2(value)) {
          arr = true;
          for (let i = 0, len = value.length; i < len; i += 1) {
            deepGet(value[i], path2, index + 1);
          }
        } else if (path2.length) {
          deepGet(value, path2, index + 1);
        }
      }
    };
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
  };
  var Config = {
    ...BasicOptions,
    ...MatchOptions,
    ...FuzzyOptions,
    ...AdvancedOptions
  };
  var SPACE = /[^ ]+/g;
  function norm(weight = 1, mantissa = 3) {
    const cache = /* @__PURE__ */ new Map();
    const m = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
        const n = parseFloat(Math.round(norm2 * m) / m);
        cache.set(numTokens, n);
        return n;
      },
      clear() {
        cache.clear();
      }
    };
  }
  var FuseIndex = class {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys = []) {
      this.keys = keys;
      this._keysMap = {};
      keys.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
      const idx = this.size();
      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i = idx, len = this.size(); i < len; i += 1) {
        this.records[i].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray2(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray2(value2)) {
              value2.forEach((item, k) => {
                stack.push({
                  nestedArrIndex: k,
                  value: item
                });
              });
            } else
              ;
          }
          record.$[keyIndex] = subRecords;
        } else if (isString(value) && !isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  };
  function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore$1(pattern, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for (let len = matchmask.length; i < len; i += 1) {
      let match = matchmask[i];
      if (match && start === -1) {
        start = i;
      } else if (!match && start !== -1) {
        end = i - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i - 1] && i - start >= minMatchCharLength) {
      indices.push([start, i - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern, patternAlphabet, {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
      let score = computeScore$1(pattern, {
        currentLocation: index,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;
      if (computeMatches) {
        let i = 0;
        while (i < patternLen) {
          matchMask[index + i] = 1;
          i += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i = 0; i < patternLen; i += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore$1(pattern, {
          errors: i,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i) - 1;
      for (let j = finish; j >= start; j -= 1) {
        let currentLocation = j - 1;
        let charMatch = patternAlphabet[text.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
        if (i) {
          bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
        }
        if (bitArr[j] & mask) {
          finalScore = computeScore$1(pattern, {
            errors: i,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore$1(pattern, {
        errors: i + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    let mask = {};
    for (let i = 0, len = pattern.length; i < len; i += 1) {
      const char = pattern.charAt(i);
      mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
  }
  var BitapSearch = class {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i < end) {
          addChunk(this.pattern.substr(i, MAX_BITS), i);
          i += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const { isCaseSensitive, includeMatches } = this.options;
      if (!isCaseSensitive) {
        text = text.toLowerCase();
      }
      if (this.pattern === text) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text, pattern, alphabet, {
          location: location + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  };
  var BaseMatch = class {
    constructor(pattern) {
      this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
    search() {
    }
  };
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  var ExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text) {
      const isMatch = text === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InverseExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text) {
      const index = text.indexOf(this.pattern);
      const isMatch = index === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var PrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text) {
      const isMatch = text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InversePrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text) {
      const isMatch = !text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var SuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text) {
      const isMatch = text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  };
  var InverseSuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text) {
      const isMatch = !text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var FuzzyMatch = class extends BaseMatch {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern);
      this._bitapSearch = new BitapSearch(pattern, {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text) {
      return this._bitapSearch.searchIn(text);
    }
  };
  var IncludeMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text) {
      let location = 0;
      let index;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index = text.indexOf(this.pattern, location)) > -1) {
        location = index + patternLen;
        indices.push([index, location - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  };
  var searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  var searchersLen = searchers.length;
  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = "|";
  function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item) => {
      let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i = 0, len = query.length; i < len; i += 1) {
        const queryItem = query[i];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isMultiMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isSingleMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            break;
          }
        }
      }
      return results;
    });
  }
  var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
  var ExtendedSearch = class {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location,
        threshold,
        distance
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
      return options.useExtendedSearch;
    }
    searchIn(text) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i = 0, qLen = query.length; i < qLen; i += 1) {
        const searchers2 = query[i];
        allIndices.length = 0;
        numMatches = 0;
        for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
          const searcher = searchers2[j];
          const { isMatch, indices, score } = searcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type = searcher.constructor.type;
              if (MultiMatchSet.has(type)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  var registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options) {
    for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
      let searcherClass = registeredSearchers[i];
      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }
    return new BitapSearch(pattern, options);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  var isPath = (query) => !!query[KeyType.PATH];
  var isLeaf = (query) => !isArray2(query) && isObject(query) && !isExpression(query);
  var convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse3(query, options, { auto = true } = {}) {
    const next = (query2) => {
      let keys = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach((key) => {
        const value = query2[key];
        if (isArray2(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(
          score === 0 && weight ? Number.EPSILON : score,
          (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
        );
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const { indices, value } = match;
      let obj = {
        indices,
        value
      };
      if (match.key) {
        obj.key = match.key.src;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches)
      transformers.push(transformMatches);
    if (includeScore)
      transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  var Fuse = class {
    constructor(docs, options = {}, index) {
      this.options = { ...Config, ...options };
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index);
    }
    setCollection(docs, index) {
      this._docs = docs;
      if (index && !(index instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i = 0, len = this._docs.length; i < len; i += 1) {
        const doc = this._docs[i];
        if (predicate(doc, i)) {
          this.removeAt(i);
          i -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query) {
      const searcher = createSearcher(query, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          results.push({
            item: text,
            idx,
            matches: [{ score, value: text, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse3(query, this.options);
      const evaluate = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        const res = [];
        for (let i = 0, len = node.children.length; i < len; i += 1) {
          const child = node.children[i];
          const result = evaluate(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query) {
      const searcher = createSearcher(query, this.options);
      const { keys, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys.forEach((key, keyIndex) => {
          matches.push(
            ...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            })
          );
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray2(value)) {
        value.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({ score, key, value: text, norm: norm2, indices });
        }
      }
      return matches;
    }
  };
  Fuse.version = "6.6.2";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse3;
  }
  {
    register(ExtendedSearch);
  }

  // ns-params:@params
  var params_default = { fuse: { ignoreLocation: true, threshold: 0.1 }, maxResults: 100, paginate: 5, resultContentWordCount: 240 };

  // ns-hugo:/home/BigDuck/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.5.6/assets/search/engine.ts
  var Engine = class {
    fuse;
    pages = [];
    indices = [];
    constructor(form, callback) {
      document.querySelectorAll('meta[name="search-index"]').forEach((el) => {
        this.indices.push(el.getAttribute("content"));
      });
      const options = Object.assign(params_default.fuse, {
        useExtendedSearch: true,
        includeMatches: true,
        includeScore: true,
        keys: [
          "title",
          "content",
          "lang",
          "authors_titles",
          "categories_titles",
          "series_titles",
          "tags_titles"
        ]
      });
      console.debug("fuse.js options", options);
      const promises = [];
      for (const i in this.indices) {
        promises.push(
          fetch(this.indices[i], {
            method: "GET"
          }).then((response) => {
            return response.json();
          })
        );
      }
      Promise.all(promises).then((values) => {
        this.fuse = new Fuse([], options);
        const taxonomies = ["authors", "categories", "series", "tags"];
        for (const i in values) {
          for (const j in values[i]) {
            const value = values[i][j];
            for (const k in taxonomies) {
              const name = taxonomies[k];
              if (name in value) {
                value[name + "_titles"] = value[name].map((item) => item.title).join(" ");
              } else {
                value[name + "_titles"] = "";
              }
            }
            this.fuse.add(value);
            this.pages.push({
              timestamp: value["timestamp"]
            });
          }
        }
        callback(form.data());
      }).catch((err) => {
        console.error("unable to load search index", err);
      });
    }
    sortByDate(a, b, asc = true) {
      if (!(a.idx in this.pages)) {
        return 1;
      }
      if (!(b.idx in this.pages)) {
        return -1;
      }
      return this.pages[a.idx].timestamp < this.pages[b.idx].timestamp ? asc ? -1 : 1 : asc ? 1 : -1;
    }
    sortByScore(a, b) {
      return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
    }
    search(data) {
      switch (data.get("sort")) {
        case "date asc":
          this.fuse.options.sortFn = (a, b) => this.sortByDate(a, b);
          break;
        case "date desc":
          this.fuse.options.sortFn = (a, b) => {
            return this.sortByDate(a, b, false);
          };
          break;
        default:
          this.fuse.options.sortFn = this.sortByScore;
          break;
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          const q = {
            $and: [
              {
                $or: [{ title: data.get("q") }, { content: data.get("q") }]
              }
            ]
          };
          const author = data.get("author");
          if (author) {
            q.$and.push({ authors_titles: author });
          }
          const category = data.get("category");
          if (category) {
            q.$and.push({ categories_titles: category });
          }
          const series = data.get("series");
          if (series) {
            q.$and.push({ series_titles: series });
          }
          const tag = data.get("tag");
          if (tag) {
            q.$and.push({ tags_titles: tag });
          }
          const lang = data.get("lang");
          if (lang) {
            q.$and.push({ lang: "=" + lang });
          }
          resolve(
            this.fuse.search(q, {
              limit: parseInt(params_default.maxResults)
            })
          );
        }, 1);
      });
    }
  };
  var engine_default = Engine;

  // ns-hugo:/home/BigDuck/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.5.6/assets/search/form.ts
  var Form = class {
    constructor(form, callback) {
      this.form = form;
      this.callback = callback;
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.submit();
      });
      this.input = form.querySelector('input[name="q"]');
      if (this.input.value === "") {
        this.input.value = new URLSearchParams(window.location.search).get("q");
      }
      this.lang = form.querySelector('select[name="lang"]');
      this.lang.addEventListener("change", () => {
        this.submit();
      });
      form.querySelector("#sorting-select").addEventListener("change", () => {
        this.submit();
      });
    }
    callback;
    input;
    lang;
    submit() {
      this.callback(this.data());
    }
    data() {
      return new FormData(this.form);
    }
  };
  var form_default = Form;

  // ns-hugo:/home/BigDuck/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.5.6/assets/search/search.ts
  var Search = class _Search {
    resultsElement;
    stat;
    highlightOptions = {
      element: "span",
      className: "text-primary"
    };
    tmplMissingKeywords;
    tmplNoResults;
    tmplStat;
    tmplResult;
    page = 1;
    results;
    loading = false;
    loadingSpinner;
    loadMore;
    title = "";
    form;
    engine;
    meta = "";
    constructor(form) {
      this.meta = document.querySelector('meta[name="search-meta"]').getAttribute("content");
      this.form = new form_default(form, (data) => {
        this.search(data);
      });
      this.engine = new engine_default(this.form, (data) => {
        this.search(data);
      });
      this.title = document.title;
    }
    run() {
      this.resultsElement = document.getElementById("searchResults");
      this.stat = document.getElementById("searchStat");
      this.loadingSpinner = document.getElementById("loadingSpinner");
      this.tmplMissingKeywords = document.getElementById(
        "templateMissingKeywords"
      ).innerHTML;
      this.tmplNoResults = document.getElementById("templateNoResults").innerHTML;
      this.tmplStat = document.getElementById("templateStat").innerHTML;
      this.tmplResult = document.getElementById("templateResult").innerHTML;
      this.loadMore = document.getElementById("btnLoadMore");
      this.loadMore.addEventListener("click", () => {
        this.showLoadingSpinner();
        this.poplateResults().finally(() => {
          this.hideLoadingSpinner();
        });
      });
      fetch(this.meta).then((response) => {
        return response.json();
      }).then((data) => {
        for (const i in data) {
          const datalist = document.querySelector(`#${i}-list`);
          const terms = data[i];
          for (const j in terms) {
            const option = document.createElement("option");
            option.value = terms[j];
            datalist.appendChild(option);
          }
        }
      }).catch((err) => {
        console.error("unable to load search meta index", err);
      });
    }
    hideLoadMoreBtn() {
      this.loadMore.classList.add("d-none");
    }
    showLoadMoreBtn() {
      this.loadMore.classList.remove("d-none");
    }
    hideLoadingSpinner() {
      if (!this.loadingSpinner.classList.contains("d-none")) {
        this.loadingSpinner.classList.add("d-none");
      }
    }
    showLoadingSpinner() {
      this.loadingSpinner.classList.remove("d-none");
    }
    search(data) {
      this.resultsElement.innerHTML = "";
      this.showLoadingSpinner();
      if (!data.has("q")) {
        this.stat.innerHTML = this.tmplMissingKeywords;
        this.hideLoadMoreBtn();
        this.hideLoadingSpinner();
        return;
      }
      this.setPage(data.get("q"));
      this.engine.search(data).then((results) => {
        this.page = 1;
        this.results = results;
        if (this.results.length > params_default.paginate) {
          this.showLoadMoreBtn();
        } else {
          this.hideLoadMoreBtn();
        }
      }).then(() => {
        if (this.results.length > 0) {
          this.poplateResultsInternal();
        } else {
          this.stat.innerHTML = this.tmplNoResults;
        }
      }).catch((err) => {
        console.error(err);
      }).finally(() => {
        this.hideLoadingSpinner();
      });
    }
    setPage(query) {
      const title = (query ? `${query} - ` : "") + this.title;
      const url = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
      window.history.pushState(null, title, url);
      document.title = title;
    }
    static normalizeTaxonomy(text, render3) {
      return render3(text).toLowerCase().replaceAll(" ", "-");
    }
    poplateResults() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.poplateResultsInternal());
        }, 1);
      });
    }
    poplateResultsInternal() {
      if (!this.results) {
        return;
      }
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.loadMore.setAttribute("disabled", "");
      this.stat.innerHTML = mustache_default.render(this.tmplStat, {
        total: this.results.length
      });
      let i = (this.page - 1) * params_default.paginate;
      let count = 0;
      for (; i < this.results.length && count < params_default.paginate; i += 1, count += 1) {
        const result = this.results[i];
        const idx = (this.page - 1) * params_default.paginate + i;
        const titleKeywords = [];
        const contentKeywords = [];
        result.matches.forEach((match) => {
          match.indices.forEach((index) => {
            const keyword = match.value.substring(index[0], index[1] + 1);
            switch (match.key) {
              case "title":
                titleKeywords.push(keyword);
                break;
              case "content":
                contentKeywords.push(keyword);
                break;
              default:
            }
          });
        });
        let { content } = result.item;
        if (content.length > params_default.resultContentWordCount) {
          let contentStart = 0;
          if (contentKeywords.length > 0) {
            const pos = content.indexOf(contentKeywords[0]);
            if (pos + contentKeywords[0].length > params_default.resultContentWordCount - 1) {
              contentStart = pos;
            }
          }
          content = `${(contentStart === 0 ? "" : "...") + content.substring(
            contentStart,
            contentStart + params_default.resultContentWordCount
          )}...`;
        }
        const id = `searchResult${idx}`;
        this.resultsElement.insertAdjacentHTML(
          "beforeend",
          mustache_default.render(this.tmplResult, {
            title: result.item.title,
            content,
            id,
            img: result.item.img,
            smallImg: result.item.smallImg,
            largeImg: result.item.largeImg,
            permalink: result.item.permalink,
            categories: result.item.categories,
            authors: result.item.authors,
            tags: result.item.tags,
            series: result.item.series,
            score: _Search.formatScore(result.score),
            date: result.item.date,
            langName: result.item.langName,
            url() {
              return _Search.normalizeTaxonomy;
            }
          })
        );
        this.highlight(id, titleKeywords, contentKeywords);
      }
      this.loading = false;
      this.loadMore.removeAttribute("disabled");
      if (this.results.length <= params_default.paginate * this.page) {
        this.hideLoadMoreBtn();
      } else {
        this.showLoadMoreBtn();
      }
      this.page += 1;
      const event = document.createEvent("HTMLEvents");
      event.initEvent("hbs:viewer:update");
      document.dispatchEvent(event);
    }
    static formatScore(value) {
      return ((1 - value) * 5).toFixed(1);
    }
    highlight(id, titleKeywords, contentKeywords) {
      const titleHighlighter = new import_mark.default(
        document.querySelectorAll(`#${id} .search-result-title`)
      );
      titleHighlighter.mark(titleKeywords, this.highlightOptions);
      const contentHighlighter = new import_mark.default(
        document.querySelectorAll(`#${id} .search-result-content`)
      );
      contentHighlighter.mark(contentKeywords, this.highlightOptions);
    }
  };

  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    new Search(document.querySelector("#searchForm")).run();
  });
})();
/*! Bundled license information:

mark.js/dist/mark.js:
  (*!***************************************************
  * mark.js v8.11.1
  * https://markjs.io/
  * Copyright (c) 2014–2018, Julian Kühnel
  * Released under the MIT license https://git.io/vwTVl
  *****************************************************)

mustache/mustache.mjs:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
