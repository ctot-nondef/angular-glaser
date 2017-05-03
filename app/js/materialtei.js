var MaterialTEI = angular.module('MaterialTEI', [
  'ngAnimate',
  'ngSanitize',
  'ngMaterial',
  'md.data.table'
]);

// ******************************************************************************
// ** wraps https://github.com/TEIC/CETEIcean/blob/master/src/CETEI.js as an
// ** injectable AngularJS Service
MaterialTEI.service('CETEIceanService', function($http, $localStorage, $q, $log){
  var e = {};
  e["typeof"] = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
  } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
  }, e.classCallCheck = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }, e.createClass = function() {
      function e(e, t) {
          for (var r = 0; r < t.length; r++) {
              var a = t[r];
              a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
          }
      }
      return function(t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t
      }
  }();
  var t = {
      handlers: {
          eg: ["<pre>", "</pre>"],
          ptr: ['<a href="$rw@target">$@target</a>'],
          ref: ['<a href="$rw@target">', "</a>"],
          graphic: function(e) {
              var t = new Image;
              return t.src = this.rw(e.getAttribute("url")), e.hasAttribute("width") && (t.width = e.getAttribute("width").replace(/[^.0-9]/g, "")), e.hasAttribute("height") && (t.height = e.getAttribute("height").replace(/[^.0-9]/g, "")), t
          },
          list: function(e) {
              if (e.hasAttribute("type") && "gloss" == e.getAttribute("type")) {
                  var t = document.createElement("dl"),
                      r = !0,
                      a = !1,
                      n = void 0;
                  try {
                      for (var i, l = Array.from(e.children)[Symbol.iterator](); !(r = (i = l.next()).done); r = !0) {
                          var o = i.value;
                          if (o.nodeType == Node.ELEMENT_NODE) {
                              if ("tei-label" == o.localName) {
                                  var s = document.createElement("dt");
                                  s.innerHTML = o.innerHTML, t.appendChild(s)
                              }
                              if ("tei-item" == o.localName) {
                                  var u = document.createElement("dd");
                                  u.innerHTML = o.innerHTML, t.appendChild(u)
                              }
                          }
                      }
                  } catch (c) {
                      a = !0, n = c
                  } finally {
                      try {
                          !r && l["return"] && l["return"]()
                      } finally {
                          if (a) throw n
                      }
                  }
                  return t
              }
              return null
          },
          table: function n(e) {
              var n = document.createElement("table");
              if (n.innerHTML = e.innerHTML, "tei-head" == n.firstElementChild.localName) {
                  var t = n.firstElementChild;
                  t.remove();
                  var r = document.createElement("caption");
                  r.innerHTML = t.innerHTML, n.appendChild(r)
              }
              var a = !0,
                  i = !1,
                  l = void 0;
              try {
                  for (var o, s = Array.from(n.querySelectorAll("tei-row"))[Symbol.iterator](); !(a = (o = s.next()).done); a = !0) {
                      var u = o.value,
                          c = document.createElement("tr");
                      c.innerHTML = u.innerHTML;
                      var h = !0,
                          d = !1,
                          f = void 0;
                      try {
                          for (var m, v = Array.from(u.attributes)[Symbol.iterator](); !(h = (m = v.next()).done); h = !0) {
                              var y = m.value;
                              c.setAttribute(y.name, y.value)
                          }
                      } catch (p) {
                          d = !0, f = p
                      } finally {
                          try {
                              !h && v["return"] && v["return"]()
                          } finally {
                              if (d) throw f
                          }
                      }
                      u.parentElement.replaceChild(c, u)
                  }
              } catch (p) {
                  i = !0, l = p
              } finally {
                  try {
                      !a && s["return"] && s["return"]()
                  } finally {
                      if (i) throw l
                  }
              }
              var b = !0,
                  g = !1,
                  w = void 0;
              try {
                  for (var T, E = Array.from(n.querySelectorAll("tei-cell"))[Symbol.iterator](); !(b = (T = E.next()).done); b = !0) {
                      var N = T.value,
                          A = document.createElement("td");
                      N.hasAttribute("cols") && A.setAttribute("colspan", N.getAttribute("cols")), A.innerHTML = N.innerHTML;
                      var S = !0,
                          k = !1,
                          M = void 0;
                      try {
                          for (var L, x = Array.from(N.attributes)[Symbol.iterator](); !(S = (L = x.next()).done); S = !0) {
                              var C = L.value;
                              A.setAttribute(C.name, C.value)
                          }
                      } catch (p) {
                          k = !0, M = p
                      } finally {
                          try {
                              !S && x["return"] && x["return"]()
                          } finally {
                              if (k) throw M
                          }
                      }
                      N.parentElement.replaceChild(A, N)
                  }
              } catch (p) {
                  g = !0, w = p
              } finally {
                  try {
                      !b && E["return"] && E["return"]()
                  } finally {
                      if (g) throw w
                  }
              }
              return n
          },
          egXML: function(e) {
              var t = document.createElement("pre");
              return t.innerHTML = this.serialize(e, !0), t
          }
      }
  },
  r = function() {
          function r(a) {
              if (e.classCallCheck(this, r), this.els = [], this.behaviors = [], this.hasStyle = !1, this.prefixes = [], a) this.base = a;
              else try {
                  window && (this.base = window.location.href.replace(/\/[^\/]*$/, "/"))
              } catch (n) {
                  this.base = ""
              }
              this.behaviors.push(t), this.shadowCSS, this.supportsShadowDom = document.head.createShadowRoot || document.head.attachShadow
          }
          return e.createClass(r, [{
              key: "getHTML5",
              value: function(e, t, r) {
                  // used to contain XMLHttpRequest-wrapper, retrieves already retrieved xml/TEI file  now
                  var a = this;
                  return a.makeHTML5(e, t, r);
              }
          }, {
              key: "makeHTML5",
              value: function(e, t, r) {
                  var a = (new DOMParser).parseFromString(e, "text/xml");
                  return this.domToHTML5(a, t, r)
              }
          }, {
              key: "domToHTML5",
              value: function(e, t, r) {
                  var a = this;
                  this._fromTEI(e);
                  var n = function i(e) {
                      var t = void 0,
                          n = !1;
                      switch (e.namespaceURI) {
                          case "http://www.tei-c.org/ns/1.0":
                              t = document.createElement("tei-" + e.tagName);
                              break;
                          case "http://www.tei-c.org/ns/Examples":
                              if ("egXML" == e.tagName) {
                                  t = document.createElement("teieg-" + e.tagName);
                                  break
                              }
                          case "http://relaxng.org/ns/structure/1.0":
                              t = document.createElement("rng-" + e.tagName);
                              break;
                          default:
                              t = document.importNode(e, !1), n = !0
                      }
                      var l = !0,
                          o = !1,
                          s = void 0;
                      try {
                          for (var u, c = Array.from(e.attributes)[Symbol.iterator](); !(l = (u = c.next()).done); l = !0) {
                              var h = u.value;
                              !h.name.startsWith("xmlns") || n ? t.setAttribute(h.name, h.value) : "xmlns" == h.name && t.setAttribute("data-xmlns", h.value), "xml:id" != h.name || n || t.setAttribute("id", h.value), "xml:lang" != h.name || n || t.setAttribute("lang", h.value), "rendition" == h.name && t.setAttribute("class", h.value.replace(/#/g, ""))
                          }
                      } catch (d) {
                          o = !0, s = d
                      } finally {
                          try {
                              !l && c["return"] && c["return"]()
                          } finally {
                              if (o) throw s
                          }
                      }
                      if (t.setAttribute("data-teiname", e.localName), 0 == e.childNodes.length && t.setAttribute("data-empty", ""), "tagsDecl" == e.localName) {
                          var f = document.createElement("style"),
                              m = !0,
                              v = !1,
                              y = void 0;
                          try {
                              for (var p, b = Array.from(e.childNodes)[Symbol.iterator](); !(m = (p = b.next()).done); m = !0) {
                                  var g = p.value;
                                  if (g.nodeType == Node.ELEMENT_NODE && "rendition" == g.localName && "css" == g.getAttribute("scheme")) {
                                      var w = "";
                                      g.hasAttribute("selector") ? (w += g.getAttribute("selector").replace(/([^#, >]+\w*)/g, "tei-$1").replace(/#tei-/g, "#") + "{\n", w += g.textContent) : (w += "." + g.getAttribute("xml:id") + "{\n", w += g.textContent), w += "\n}\n", f.appendChild(document.createTextNode(w))
                                  }
                              }
                          } catch (d) {
                              v = !0, y = d
                          } finally {
                              try {
                                  !m && b["return"] && b["return"]()
                              } finally {
                                  if (v) throw y
                              }
                          }
                          f.childNodes.length > 0 && (t.appendChild(f), a.hasStyle = !0)
                      }
                      "prefixDef" == e.localName && (a.prefixes.push(e.getAttribute("ident")), a.prefixes[e.getAttribute("ident")] = {
                          matchPattern: e.getAttribute("matchPattern"),
                          replacementPattern: e.getAttribute("replacementPattern")
                      });
                      var T = !0,
                          E = !1,
                          N = void 0;
                      try {
                          for (var A, S = Array.from(e.childNodes)[Symbol.iterator](); !(T = (A = S.next()).done); T = !0) {
                              var k = A.value;
                              k.nodeType == Node.ELEMENT_NODE ? t.appendChild(i(k)) : t.appendChild(k.cloneNode())
                          }
                      } catch (d) {
                          E = !0, N = d
                      } finally {
                          try {
                              !T && S["return"] && S["return"]()
                          } finally {
                              if (E) throw N
                          }
                      }
                      return r && r(t), t
                  };
                  return this.dom = n(e.documentElement), document.registerElement ? this.registerAll(this.els) : this.fallback(this.els), this.done = !0, t ? void t(this.dom, this) : this.dom
              }
          }, {
              key: "addStyle",
              value: function(e, t) {
                  this.hasStyle && e.getElementsByTagName("head").item(0).appendChild(t.getElementsByTagName("style").item(0).cloneNode(!0))
              }
          }, {
              key: "addShadowStyle",
              value: function(e) {
                  this.shadowCSS && (e.innerHTML = '<style>@import url("' + this.shadowCSS + '");</style>' + e.innerHTML)
              }
          }, {
              key: "addBehaviors",
              value: function(e) {
                  e.handlers || e.fallbacks ? this.behaviors.push(e) : console.log("No handlers or fallback methods found.")
              }
          }, {
              key: "setBaseUrl",
              value: function(e) {
                  this.base = e
              }
          }, {
              key: "_fromTEI",
              value: function(e) {
                  var t = e.documentElement;
                  this.els = new Set(Array.from(t.getElementsByTagNameNS("http://www.tei-c.org/ns/1.0", "*"), function(e) {
                      return e.tagName
                  })), this.els.add("egXML"), this.els.add(t.tagName)
              }
          }, {
              key: "_insert",
              value: function(e, t) {
                  var r = document.createElement("span");
                  return t.length > 1 ? t[0].includes("<") && t[1].includes("</") ? r.innerHTML = t[0] + e.innerHTML + t[1] : r.innerHTML = "<span>" + t[0] + "</span>" + e.innerHTML + "<span>" + t[1] + "</span>" : t[0].includes("<") ? r.innerHTML = t[0] + e.innerHTML : r.innerHTML = "<span>" + t[0] + "</span>" + e.innerHTML, r.children.length > 1 ? r : r.children[0]
              }
          }, {
              key: "_template",
              value: function(e, t) {
                  var r = e;
                  if (e.search(/$(\w*)@(\w+)/))
                      for (var a = /\$(\w*)@(\w+)/g, n = void 0; n = a.exec(e);) t.hasAttribute(n[2]) && (r = n[1] && this[n[1]] ? r.replace(n[0], this[n[1]].call(this, t.getAttribute(n[2]))) : r.replace(n[0], t.getAttribute(n[2])));
                  return r
              }
          }, {
              key: "tagName",
              value: function(e) {
                  return "egXML" == e ? "teieg-" + e : "tei-" + e
              }
          }, {
              key: "decorator",
              value: function(e) {
                  var t = this;
                  return function(r) {
                      for (var a = [], n = 0; n < e.length; n++) a.push(t._template(e[n], r));
                      return t._insert(r, a)
                  }
              }
          }, {
              key: "getHandler",
              value: function(e) {
                  for (var t = this.behaviors.length - 1; t >= 0; t--)
                      if (this.behaviors[t].handlers[e]) return Array.isArray(this.behaviors[t].handlers[e]) ? this.append(this.decorator(this.behaviors[t].handlers[e])) : this.append(this.behaviors[t].handlers[e])
              }
          }, {
              key: "getFallback",
              value: function(e) {
                  for (var t = this.behaviors.length - 1; t >= 0; t--)
                      if (this.behaviors[t].handlers[e]) return Array.isArray(this.behaviors[t].handlers[e]) ? this.decorator(this.behaviors[t].handlers[e]) : this.behaviors[t].handlers[e]
              }
          }, {
              key: "append",
              value: function(t, r) {
                  var a = this;
                  if (r) {
                      var n = t.call(this, r);
                      n && !r.querySelector(":scope > " + n.nodeName) && (this.supportsShadowDom ? this._appendShadow(r, n) : this._appendBasic(r, n))
                  } else {
                      var i = function() {
                          var e = a;
                          return a.supportsShadowDom ? {
                              v: function() {
                                  var r = t.call(e, this);
                                  r && e._appendShadow(this, r)
                              }
                          } : {
                              v: function() {
                                  var r = t.call(e, this);
                                  r && !this.querySelector(":scope > " + r.nodeName) && e._appendBasic(this, r)
                              }
                          }
                      }();
                      if ("object" === ("undefined" == typeof i ? "undefined" : e["typeof"](i))) return i.v
                  }
              }
          }, {
              key: "_appendShadow",
              value: function(e, t) {
                  var r = e.attachShadow({
                      mode: "open"
                  });
                  this.addShadowStyle(r), r.appendChild(t)
              }
          }, {
              key: "_appendBasic",
              value: function(e, t) {
                  this.hideContent(e), e.appendChild(t)
              }
          }, {
              key: "registerAll",
              value: function(e) {
                  var t = !0,
                      r = !1,
                      a = void 0;
                  try {
                      for (var n, i = e[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                          var l = n.value,
                              o = Object.create(HTMLElement.prototype),
                              s = this.getHandler(l);
                          s && (o.createdCallback = s);
                          var u = this.tagName(l);
                          try {
                              document.registerElement(u, {
                                  prototype: o
                              })
                          } catch (c) {
                              console.log(u + " couldn't be registered or is already registered."), console.log(c)
                          }
                      }
                  } catch (h) {
                      r = !0, a = h
                  } finally {
                      try {
                          !t && i["return"] && i["return"]()
                      } finally {
                          if (r) throw a
                      }
                  }
              }
          }, {
              key: "fallback",
              value: function(e) {
                  var t = !0,
                      r = !1,
                      a = void 0;
                  try {
                      for (var n, i = e[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                          var l = n.value,
                              o = this.getFallback(l);
                          if (o) {
                              var s = !0,
                                  u = !1,
                                  c = void 0;
                              try {
                                  for (var h, d = Array.from(this.dom.getElementsByTagName(this.tagName(l)))[Symbol.iterator](); !(s = (h = d.next()).done); s = !0) {
                                      var f = h.value;
                                      this.append(o, f)
                                  }
                              } catch (m) {
                                  u = !0, c = m
                              } finally {
                                  try {
                                      !s && d["return"] && d["return"]()
                                  } finally {
                                      if (u) throw c
                                  }
                              }
                          }
                      }
                  } catch (m) {
                      r = !0, a = m
                  } finally {
                      try {
                          !t && i["return"] && i["return"]()
                      } finally {
                          if (r) throw a
                      }
                  }
              }
          }, {
              key: "rw",
              value: function(e) {
                  return e.match(/^(?:http|mailto|file|\/|#).*$/) ? e : this.base + e
              }
          }, {
              key: "first",
              value: function(e) {
                  return e.replace(/ .*$/, "")
              }
          }, {
              key: "serialize",
              value: function(e, t) {
                  var r = "";
                  if (!t) {
                      r += "&lt;" + e.getAttribute("data-teiname");
                      var a = !0,
                          n = !1,
                          i = void 0;
                      try {
                          for (var l, o = Array.from(e.attributes)[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                              var s = l.value;
                              s.name.startsWith("data-") || ["id", "lang", "class"].includes(s.name) || (r += " " + s.name + '="' + s.value + '"'), "data-xmlns" == s.name && (r += ' xmlns="' + s.value + '"')
                          }
                      } catch (u) {
                          n = !0, i = u
                      } finally {
                          try {
                              !a && o["return"] && o["return"]()
                          } finally {
                              if (n) throw i
                          }
                      }
                      r += e.childNodes.length > 0 ? ">" : "/>"
                  }
                  var c = !0,
                      h = !1,
                      d = void 0;
                  try {
                      for (var f, m = Array.from(e.childNodes)[Symbol.iterator](); !(c = (f = m.next()).done); c = !0) {
                          var v = f.value;
                          switch (v.nodeType) {
                              case Node.ELEMENT_NODE:
                                  r += this.serialize(v);
                                  break;
                              case Node.PROCESSING_INSTRUCTION_NODE:
                                  r += "&lt;?" + v.nodeValue + "?>";
                                  break;
                              case Node.COMMENT_NODE:
                                  r += "&lt;!--" + v.nodeValue + "-->";
                                  break;
                              default:
                                  r += v.nodeValue.replace(/</g, "&lt;")
                          }
                      }
                  } catch (u) {
                      h = !0, d = u
                  } finally {
                      try {
                          !c && m["return"] && m["return"]()
                      } finally {
                          if (h) throw d
                      }
                  }
                  return !t && e.childNodes.length > 0 && (r += "&lt;/" + e.getAttribute("data-teiname") + ">"), r
              }
          }, {
              key: "hideContent",
              value: function(e) {
                  if (e.childNodes.length > 0) {
                      var t = e.innerHTML;
                      e.innerHTML = "";
                      var r = document.createElement("span");
                      r.setAttribute("style", "display:none;"), r.setAttribute("class", "hide"), r.innerHTML = t, e.appendChild(r)
                  }
              }
          }, {
              key: "unEscapeEntities",
              value: function(e) {
                  return e.replace(/&gt;/, ">").replace(/&quot;/, '"').replace(/&apos;/, "'").replace(/&amp;/, "&")
              }
          }, {
              key: "savePosition",
              value: function() {
                  localStorage.setItem("scroll", window.scrollY)
              }
          }, {
              key: "restorePosition",
              value: function() {
                  localStorage.getItem("scroll") && window.scrollTo(0, localStorage.getItem("scroll"))
              }
          }, {
              key: "fromODD",
              value: function() {}
          }]), r
    }();
    return r;
});

MaterialTEI.directive('md-tei', function ($compile, CETEIceanService, $attrs) {
    var CETEI = new CETEIceanService();
    console.log($attrs.source);
    if($attrs.source) {
      var tei = angular.element(angular.element(jQuery.parseXML($attrs.source))["0"].children["0"].children["0"]).html();
      var template =  CETEI.getHTML5(tei);
    }
    var linker = function(scope, element){
        element.html(template).show();
        $compile(element.contents())(scope);
    };

    return {
        restrict: "E",
        replace: true,
        link: linker,
        scope: {
            content:'='
        }
    };
});
