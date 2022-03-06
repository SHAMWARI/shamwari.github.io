/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var s = [],
            o = Object.getPrototypeOf,
            a = s.slice,
            l = s.flat
              ? function (e) {
                  return s.flat.call(e);
                }
              : function (e) {
                  return s.concat.apply([], e);
                },
            c = s.push,
            u = s.indexOf,
            d = {},
            p = d.toString,
            h = d.hasOwnProperty,
            f = h.toString,
            g = f.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = i.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var i,
              r,
              s = (n = n || b).createElement("script");
            if (((s.text = e), t))
              for (i in w)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  s.setAttribute(i, r);
            n.head.appendChild(s).parentNode.removeChild(s);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[p.call(e)] || "object"
              : typeof e;
          }
          var S = "3.6.0",
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function E(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: S,
              constructor: C,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: s.sort,
              splice: s.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  s,
                  o = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof o &&
                    ((c = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === l && ((o = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          o !== i &&
                          (c &&
                          i &&
                          (C.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = o[t]),
                              (s =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (o[t] = C.extend(c, s, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            C.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = o(e)) ||
                    ("function" ==
                      typeof (n = h.call(t, "constructor") && t.constructor) &&
                      f.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (E(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
                  !t(e[r], r) !== o && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  s = 0,
                  o = [];
                if (E(e))
                  for (i = e.length; s < i; s++)
                    null != (r = t(e[s], s, n)) && o.push(r);
                else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
                return l(o);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = s[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var L = (function (e) {
            var t,
              n,
              i,
              r,
              s,
              o,
              a,
              l,
              c,
              u,
              d,
              p,
              h,
              f,
              g,
              m,
              v,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = e.document,
              T = 0,
              S = 0,
              C = le(),
              E = le(),
              L = le(),
              I = le(),
              O = function (e, t) {
                return e === t && (d = !0), 0;
              },
              A = {}.hasOwnProperty,
              k = [],
              M = k.pop,
              P = k.push,
              D = k.push,
              z = k.slice,
              $ = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              N =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              _ = "[\\x20\\t\\r\\n\\f]",
              j =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                j +
                ")(?:" +
                _ +
                "*([*^$|!~]?=)" +
                _ +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                j +
                "))|)" +
                _ +
                "*\\]",
              B =
                ":(" +
                j +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              q = new RegExp(_ + "+", "g"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              R = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              G = new RegExp(_ + "|>"),
              V = new RegExp(B),
              X = new RegExp("^" + j + "$"),
              Y = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              U = /HTML$/i,
              Z = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              se = function () {
                p();
              },
              oe = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply((k = z.call(x.childNodes)), x.childNodes),
                k[x.childNodes.length].nodeType;
            } catch (e) {
              D = {
                apply: k.length
                  ? function (e, t) {
                      P.apply(e, z.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, r) {
              var s,
                a,
                c,
                u,
                d,
                f,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!r && (p(t), (t = t || h), g)) {
                if (11 !== x && (d = J.exec(e)))
                  if ((s = d[1])) {
                    if (9 === x) {
                      if (!(c = t.getElementById(s))) return i;
                      if (c.id === s) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(s)) &&
                      b(t, c) &&
                      c.id === s
                    )
                      return i.push(c), i;
                  } else {
                    if (d[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (s = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return D.apply(i, t.getElementsByClassName(s)), i;
                  }
                if (
                  n.qsa &&
                  !I[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === x && (G.test(e) || R.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((u = t.getAttribute("id"))
                          ? (u = u.replace(ie, re))
                          : t.setAttribute("id", (u = w))),
                        a = (f = o(e)).length;
                      a--;

                    )
                      f[a] = (u ? "#" + u : ":scope") + " " + be(f[a]);
                    v = f.join(",");
                  }
                  try {
                    return D.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    I(e, !0);
                  } finally {
                    u === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(F, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[w] = !0), e;
            }
            function ue(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function he(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function fe(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, s = e([], n.length, t), o = s.length; o--; )
                      n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (s = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  r,
                  o = e ? e.ownerDocument || e : x;
                return o != h && 9 === o.nodeType && o.documentElement
                  ? ((f = (h = o).documentElement),
                    (g = !s(h)),
                    x != h &&
                      (r = h.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", se, !1)
                        : r.attachEvent && r.attachEvent("onunload", se)),
                    (n.scope = ue(function (e) {
                      return (
                        f.appendChild(e).appendChild(h.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(h.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Q.test(
                      h.getElementsByClassName
                    )),
                    (n.getById = ue(function (e) {
                      return (
                        (f.appendChild(e).id = w),
                        !h.getElementsByName || !h.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              i,
                              r,
                              s = t.getElementById(e);
                            if (s) {
                              if (
                                (n = s.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [s];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (s = r[i++]);

                              )
                                if (
                                  (n = s.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            s = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = s[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return s;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (m = []),
                    (n.qsa = Q.test(h.querySelectorAll)) &&
                      (ue(function (e) {
                        var t;
                        (f.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + N + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            m.push("~="),
                          (t = h.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            m.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (f.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = Q.test(
                      (y =
                        f.matches ||
                        f.webkitMatchesSelector ||
                        f.mozMatchesSelector ||
                        f.oMatchesSelector ||
                        f.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", B);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = Q.test(f.compareDocumentPosition)),
                    (b =
                      t || Q.test(f.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (O = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == h || (e.ownerDocument == x && b(x, e))
                                ? -1
                                : t == h || (t.ownerDocument == x && b(x, t))
                                ? 1
                                : u
                                ? $(u, e) - $(u, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            s = t.parentNode,
                            o = [e],
                            a = [t];
                          if (!r || !s)
                            return e == h
                              ? -1
                              : t == h
                              ? 1
                              : r
                              ? -1
                              : s
                              ? 1
                              : u
                              ? $(u, e) - $(u, t)
                              : 0;
                          if (r === s) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; o[i] === a[i]; ) i++;
                          return i
                            ? pe(o[i], a[i])
                            : o[i] == x
                            ? -1
                            : a[i] == x
                            ? 1
                            : 0;
                        }),
                    h)
                  : h;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !I[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  I(t, !0);
                }
              return ae(t, h, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != h && p(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != h && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                s =
                  r && A.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !g)
                    : void 0;
              return void 0 !== s
                ? s
                : n.attributes || !g
                ? e.getAttribute(t)
                : (s = e.getAttributeNode(t)) && s.specified
                ? s.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                s = 0;
              if (
                ((d = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(O),
                d)
              ) {
                for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (u = null), e;
            }),
            (r = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  s = e.nodeType;
                if (s) {
                  if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === s || 4 === s) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            V.test(n) &&
                            (t = o(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = C[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + _ + "|$)"
                      )) &&
                        C(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = ae.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var s = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            p,
                            h,
                            f,
                            g = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (m) {
                            if (s) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                f = g = "only" === e && !f && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((f = [o ? m.firstChild : m.lastChild]), o && y)
                            ) {
                              for (
                                b =
                                  (h =
                                    (c =
                                      (u =
                                        (d = (p = m)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (d[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && c[1]) && c[2],
                                  p = h && m.childNodes[h];
                                (p =
                                  (++h && p && p[g]) || (b = h = 0) || f.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  u[e] = [T, h, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = h =
                                  (c =
                                    (u =
                                      (d = (p = t)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (d[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++h && p && p[g]) ||
                                  (b = h = 0) ||
                                  f.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((u =
                                      (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                                      (d[p.uniqueID] = {}))[e] = [T, b]),
                                  p !== t));

                              );
                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return r[w]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, s = r(e, t), o = s.length; o--; )
                                e[(i = $(e, s[o]))] = !(n[i] = s[o]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(F, "$1"));
                    return i[w]
                      ? ce(function (e, t, n, r) {
                          for (
                            var s, o = i(e, null, r, []), a = e.length;
                            a--;

                          )
                            (s = o[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, r, s) {
                          return (
                            (t[0] = e),
                            i(t, null, s, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === f;
                  },
                  focus: function (e) {
                    return (
                      e === h.activeElement &&
                      (!h.hasFocus || h.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return K.test(e.nodeName);
                  },
                  input: function (e) {
                    return Z.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: me(function () {
                    return [0];
                  }),
                  last: me(function (e, t) {
                    return [t - 1];
                  }),
                  eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = he(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function we(e, t, n) {
              var i = t.dir,
                r = t.next,
                s = r || i,
                o = n && "parentNode" === s,
                a = S++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || o) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p = [T, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((u =
                              (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = u[s]) && c[0] === T && c[1] === a)
                              return (p[2] = c[2]);
                            if (((u[s] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, i, r) {
              for (
                var s, o = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (s = e[a]) &&
                  ((n && !n(s, i, r)) || (o.push(s), c && t.push(a)));
              return o;
            }
            function Se(e, t, n, i, r, s) {
              return (
                i && !i[w] && (i = Se(i)),
                r && !r[w] && (r = Se(r, s)),
                ce(function (s, o, a, l) {
                  var c,
                    u,
                    d,
                    p = [],
                    h = [],
                    f = o.length,
                    g =
                      s ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || (!s && t) ? g : Te(g, p, e, a, l),
                    v = n ? (r || (s ? e : f || i) ? [] : o) : m;
                  if ((n && n(m, v, a, l), i))
                    for (c = Te(v, h), i(c, [], a, l), u = c.length; u--; )
                      (d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                  if (s) {
                    if (r || e) {
                      if (r) {
                        for (c = [], u = v.length; u--; )
                          (d = v[u]) && c.push((m[u] = d));
                        r(null, (v = []), c, l);
                      }
                      for (u = v.length; u--; )
                        (d = v[u]) &&
                          (c = r ? $(s, d) : p[u]) > -1 &&
                          (s[c] = !(o[c] = d));
                    }
                  } else (v = Te(v === o ? v.splice(f, v.length) : v)), r ? r(null, o, v, l) : D.apply(o, v);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  r,
                  s = e.length,
                  o = i.relative[e[0].type],
                  a = o || i.relative[" "],
                  l = o ? 1 : 0,
                  u = we(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  d = we(
                    function (e) {
                      return $(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!o && (i || n !== c)) ||
                        ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < s;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (r = ++l; r < s && !i.relative[e[r].type]; r++);
                    return Se(
                      l > 1 && xe(p),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(F, "$1"),
                      n,
                      l < r && Ce(e.slice(l, r)),
                      r < s && Ce((e = e.slice(r))),
                      r < s && be(e)
                    );
                  }
                  p.push(n);
                }
              return xe(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (o = ae.tokenize =
                function (e, t) {
                  var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u = E[e + " "];
                  if (u) return t ? 0 : u.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                    for (o in ((n && !(r = W.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
                    (n = !1),
                    (r = R.exec(a)) &&
                      ((n = r.shift()),
                      s.push({ value: n, type: r[0].replace(F, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = Y[o].exec(a)) ||
                        (c[o] && !(r = c[o](r))) ||
                        ((n = r.shift()),
                        s.push({ value: n, type: o, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    r = [],
                    s = [],
                    a = L[e + " "];
                  if (!a) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (a = Ce(t[n]))[w] ? r.push(a) : s.push(a);
                    (a = L(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          s = function (s, o, a, l, u) {
                            var d,
                              f,
                              m,
                              v = 0,
                              y = "0",
                              b = s && [],
                              w = [],
                              x = c,
                              S = s || (r && i.find.TAG("*", u)),
                              C = (T += null == x ? 1 : Math.random() || 0.1),
                              E = S.length;
                            for (
                              u && (c = o == h || o || u);
                              y !== E && null != (d = S[y]);
                              y++
                            ) {
                              if (r && d) {
                                for (
                                  f = 0,
                                    o ||
                                      d.ownerDocument == h ||
                                      (p(d), (a = !g));
                                  (m = e[f++]);

                                )
                                  if (m(d, o || h, a)) {
                                    l.push(d);
                                    break;
                                  }
                                u && (T = C);
                              }
                              n && ((d = !m && d) && v--, s && b.push(d));
                            }
                            if (((v += y), n && y !== v)) {
                              for (f = 0; (m = t[f++]); ) m(b, w, o, a);
                              if (s) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = M.call(l));
                                w = Te(w);
                              }
                              D.apply(l, w),
                                u &&
                                  !s &&
                                  w.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return u && ((T = C), (c = x)), b;
                          };
                        return n ? ce(s) : s;
                      })(s, r)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, r) {
                  var s,
                    l,
                    c,
                    u,
                    d,
                    p = "function" == typeof e && e,
                    h = !r && o((e = p.selector || e));
                  if (((n = n || []), 1 === h.length)) {
                    if (
                      (l = h[0] = h[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      s = Y.needsContext.test(e) ? 0 : l.length;
                      s-- && ((c = l[s]), !i.relative[(u = c.type)]);

                    )
                      if (
                        (d = i.find[u]) &&
                        (r = d(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(s, 1), !(e = r.length && be(l))))
                          return D.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, h))(
                      r,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(O).join("") === w),
              (n.detectDuplicates = !!d),
              p(),
              (n.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(h.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(N, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (C.find = L),
            (C.expr = L.selectors),
            (C.expr[":"] = C.expr.pseudos),
            (C.uniqueSort = C.unique = L.uniqueSort),
            (C.text = L.getText),
            (C.isXMLDoc = L.isXML),
            (C.contains = L.contains),
            (C.escapeSelector = L.escape);
          var I = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && C(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            O = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            A = C.expr.match.needsContext;
          function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var M =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function P(e, t, n) {
            return v(t)
              ? C.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (C.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  C.find(e, r[t], n);
                return i > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(P(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(P(this, e || [], !0));
              },
              is: function (e) {
                return !!P(
                  this,
                  "string" == typeof e && A.test(e) ? C(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || D), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : z.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  M.test(i[1]) && C.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = b.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (D = C(b));
          var $ = /^(?:parents|prev(?:Until|All))/,
            N = { children: !0, contents: !0, next: !0, prev: !0 };
          function _(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof e && C(e);
              if (!A.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      s.push(n);
                      break;
                    }
              return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(C(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return I(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return I(e, "parentNode", n);
                },
                next: function (e) {
                  return _(e, "nextSibling");
                },
                prev: function (e) {
                  return _(e, "previousSibling");
                },
                nextAll: function (e) {
                  return I(e, "nextSibling");
                },
                prevAll: function (e) {
                  return I(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return I(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return I(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return O((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return O(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (k(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, i) {
                  var r = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = C.filter(i, r)),
                    this.length > 1 &&
                      (N[e] || C.uniqueSort(r), $.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var j = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function B(e) {
            throw e;
          }
          function q(e, t, n, i) {
            var r;
            try {
              e && v((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && v((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(j) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              i,
              r,
              s = [],
              o = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; o.length; a = -1)
                  for (n = o.shift(); ++a < s.length; )
                    !1 === s[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = s.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (s = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    s &&
                      (n && !t && ((a = s.length - 1), o.push(n)),
                      (function t(n) {
                        C.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || s.push(i)
                            : i && i.length && "string" !== T(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, s, n)) > -1; )
                        s.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                  return s && (s = []), this;
                },
                disable: function () {
                  return (r = o = []), (s = n = ""), this;
                },
                disabled: function () {
                  return !s;
                },
                lock: function () {
                  return (r = o = []), n || t || (s = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      o.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          s[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var s = 0;
                      function o(e, t, n, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < s)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(c)
                                    ? r
                                      ? c.call(i, o(s, t, H, r), o(s, t, B, r))
                                      : (s++,
                                        c.call(
                                          i,
                                          o(s, t, H, r),
                                          o(s, t, B, r),
                                          o(s, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((a = void 0), (l = [i])),
                                      (r || t.resolveWith)(a, l));
                              }
                            },
                            u = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(i, u.stackTrace),
                                      e + 1 >= s &&
                                        (n !== B && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? u()
                            : (C.Deferred.getStackHook &&
                                (u.stackTrace = C.Deferred.getStackHook()),
                              i.setTimeout(u));
                        };
                      }
                      return C.Deferred(function (i) {
                        t[0][3].add(o(0, i, v(r) ? r : H, i.notifyWith)),
                          t[1][3].add(o(0, i, v(e) ? e : H)),
                          t[2][3].add(o(0, i, v(n) ? n : B));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, r) : r;
                    },
                  },
                  s = {};
                return (
                  C.each(t, function (e, i) {
                    var o = i[2],
                      a = i[5];
                    (r[i[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      o.add(i[3].fire),
                      (s[i[0]] = function () {
                        return (
                          s[i[0] + "With"](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[i[0] + "With"] = o.fireWith);
                  }),
                  r.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = a.call(arguments),
                  s = C.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || s.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (q(e, s.done(o(n)).resolve, s.reject, !t),
                  "pending" === s.state() || v(r[n] && r[n].then))
                )
                  return s.then();
                for (; n--; ) q(r[n], o(n), s.reject);
                return s.promise();
              },
            });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              F.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (C.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var W = C.Deferred();
          function R() {
            b.removeEventListener("DOMContentLoaded", R),
              i.removeEventListener("load", R),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || W.resolveWith(b, [C]));
              },
            }),
            (C.ready.then = W.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? i.setTimeout(C.ready)
              : (b.addEventListener("DOMContentLoaded", R),
                i.addEventListener("load", R));
          var G = function (e, t, n, i, r, s, o) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === T(n))
                for (a in ((r = !0), n)) G(e, t, a, n[a], !0, s, o);
              else if (
                void 0 !== i &&
                ((r = !0),
                v(i) || (o = !0),
                c &&
                  (o
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(C(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : s;
            },
            V = /^-ms-/,
            X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function U(e) {
            return e.replace(V, "ms-").replace(X, Y);
          }
          var Z = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = C.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Z(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[U(t)] = n;
                else for (i in t) r[U(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][U(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(U)
                      : (t = U(t)) in i
                      ? [t]
                      : t.match(j) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var Q = new K(),
            J = new K(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                J.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return J.hasData(e) || Q.hasData(e);
            },
            data: function (e, t, n) {
              return J.access(e, t, n);
            },
            removeData: function (e, t) {
              J.remove(e, t);
            },
            _data: function (e, t, n) {
              return Q.access(e, t, n);
            },
            _removeData: function (e, t) {
              Q.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  s = this[0],
                  o = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = J.get(s)),
                    1 === s.nodeType && !Q.get(s, "hasDataAttrs"))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        0 === (i = o[n].name).indexOf("data-") &&
                        ((i = U(i.slice(5))), ne(s, i, r[i]));
                    Q.set(s, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      J.set(this, e);
                    })
                  : G(
                      this,
                      function (t) {
                        var n;
                        if (s && void 0 === t)
                          return void 0 !== (n = J.get(s, e)) ||
                            void 0 !== (n = ne(s, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          J.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  J.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = Q.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = Q.access(e, t, C.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  s = C._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete s.stop,
                    r.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      s
                    )),
                  !i && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Q.get(e, n) ||
                  Q.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      Q.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = C.Deferred(),
                  s = this,
                  o = this.length,
                  a = function () {
                    --i || r.resolveWith(s, [s]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (n = Q.get(s[o], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            se = ["Top", "Right", "Bottom", "Left"],
            oe = b.documentElement,
            ae = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function ue(e, t, n, i) {
            var r,
              s,
              o = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(C.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; o--; )
                C.style(e, t, u + c),
                  (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
                  (u /= s);
              (u *= 2), C.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
              r
            );
          }
          var de = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = de[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (de[i] = r),
              r)
            );
          }
          function he(e, t) {
            for (var n, i, r = [], s = 0, o = e.length; s < o; s++)
              (i = e[s]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[s] = Q.get(i, "display") || null),
                      r[s] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[s] = pe(i)))
                  : "none" !== n && ((r[s] = "none"), Q.set(i, "display", n)));
            for (s = 0; s < o; s++) null != r[s] && (e[s].style.display = r[s]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return he(this, !0);
            },
            hide: function () {
              return he(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var fe,
            ge,
            me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ge = b.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            fe.appendChild(ge),
            (m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (fe.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
            (fe.innerHTML = "<option></option>"),
            (m.option = !!fe.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function we(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && k(e, t)) ? C.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            m.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Se(e, t, n, i, r) {
            for (
              var s,
                o,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                p = [],
                h = 0,
                f = e.length;
              h < f;
              h++
            )
              if ((s = e[h]) || 0 === s)
                if ("object" === T(s)) C.merge(p, s.nodeType ? [s] : s);
                else if (Te.test(s)) {
                  for (
                    o = o || d.appendChild(t.createElement("div")),
                      a = (ve.exec(s) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      o.innerHTML = l[1] + C.htmlPrefilter(s) + l[2],
                      u = l[0];
                    u--;

                  )
                    o = o.lastChild;
                  C.merge(p, o.childNodes),
                    ((o = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(s));
            for (d.textContent = "", h = 0; (s = p[h++]); )
              if (i && C.inArray(s, i) > -1) r && r.push(s);
              else if (
                ((c = ae(s)),
                (o = we(d.appendChild(s), "script")),
                c && xe(o),
                n)
              )
                for (u = 0; (s = o[u++]); ) ye.test(s.type || "") && n.push(s);
            return d;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function Le() {
            return !1;
          }
          function Ie(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Oe(e, t, n, i, r, s) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Oe(e, a, n, i, t[a], s);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = Le;
            else if (!r) return e;
            return (
              1 === s &&
                ((o = r),
                (r = function (e) {
                  return C().off(e), o.apply(this, arguments);
                }),
                (r.guid = o.guid || (o.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, r, i, n);
              })
            );
          }
          function Ae(e, t, n) {
            n
              ? (Q.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      s = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (s.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((s = a.call(arguments)),
                        Q.set(this, t, s),
                        (i = n(this, t)),
                        this[t](),
                        s !== (r = Q.get(this, t)) || i
                          ? Q.set(this, t, !1)
                          : (r = {}),
                        s !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      s.length &&
                        (Q.set(this, t, {
                          value: C.event.trigger(
                            C.extend(s[0], C.Event.prototype),
                            s.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Q.get(e, t) && C.event.add(e, t, Ee);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var s,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                h,
                f,
                g,
                m = Q.get(e);
              if (Z(e))
                for (
                  n.handler && ((n = (s = n).handler), (r = s.selector)),
                    r && C.find.matchesSelector(oe, r),
                    n.guid || (n.guid = C.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (o = m.handle) ||
                      (o = m.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(j) || [""]).length;
                  c--;

                )
                  (h = g = (a = Ce.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h &&
                      ((d = C.event.special[h] || {}),
                      (h = (r ? d.delegateType : d.bindType) || h),
                      (d = C.event.special[h] || {}),
                      (u = C.extend(
                        {
                          type: h,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && C.expr.match.needsContext.test(r),
                          namespace: f.join("."),
                        },
                        s
                      )),
                      (p = l[h]) ||
                        (((p = l[h] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, f, o)) ||
                          (e.addEventListener && e.addEventListener(h, o))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (C.event.global[h] = !0));
            },
            remove: function (e, t, n, i, r) {
              var s,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                h,
                f,
                g,
                m = Q.hasData(e) && Q.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--; )
                  if (
                    ((h = g = (a = Ce.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      d = C.event.special[h] || {},
                        p =
                          l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        o = s = p.length;
                      s--;

                    )
                      (u = p[s]),
                        (!r && g !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (p.splice(s, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    o &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, f, m.handle)) ||
                        C.removeEvent(e, h, m.handle),
                      delete l[h]);
                  } else for (h in l) C.event.remove(e, h + t[c], n, i, !0);
                C.isEmptyObject(l) && Q.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a = new Array(arguments.length),
                l = C.event.fix(e),
                c =
                  (Q.get(this, "events") || Object.create(null))[l.type] || [],
                u = C.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  o = C.event.handlers.call(this, l, c), t = 0;
                  (r = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== s.namespace &&
                      !l.rnamespace.test(s.namespace)) ||
                      ((l.handleObj = s),
                      (l.data = s.data),
                      void 0 !==
                        (i = (
                          (C.event.special[s.origType] || {}).handle ||
                          s.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                s,
                o,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (s = [], o = {}, n = 0; n < l; n++)
                      void 0 === o[(r = (i = t[n]).selector + " ")] &&
                        (o[r] = i.needsContext
                          ? C(r, this).index(c) > -1
                          : C.find(r, this, null, [c]).length),
                        o[r] && s.push(i);
                    s.length && a.push({ elem: c, handlers: s });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Ae(t, "click", Ee),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Ae(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Q.get(t, "click")) ||
                    k(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : Le),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: Le,
              isPropagationStopped: Le,
              isImmediatePropagationStopped: Le,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              C.event.addProp
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              C.event.special[e] = {
                setup: function () {
                  return Ae(this, e, Ie), !1;
                },
                trigger: function () {
                  return Ae(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      r = e.relatedTarget,
                      s = e.handleObj;
                    return (
                      (r && (r === i || C.contains(i, r))) ||
                        ((e.type = s.origType),
                        (n = s.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            C.fn.extend({
              on: function (e, t, n, i) {
                return Oe(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Oe(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    C(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Le),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var ke = /<script|<style|<link/i,
            Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function De(e, t) {
            return (
              (k(e, "table") &&
                k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function ze(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function $e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ne(e, t) {
            var n, i, r, s, o, a;
            if (1 === t.nodeType) {
              if (Q.hasData(e) && (a = Q.get(e).events))
                for (r in (Q.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    C.event.add(t, r, a[r][n]);
              J.hasData(e) &&
                ((s = J.access(e)), (o = C.extend({}, s)), J.set(t, o));
            }
          }
          function _e(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function je(e, t, n, i) {
            t = l(t);
            var r,
              s,
              o,
              a,
              c,
              u,
              d = 0,
              p = e.length,
              h = p - 1,
              f = t[0],
              g = v(f);
            if (
              g ||
              (p > 1 && "string" == typeof f && !m.checkClone && Me.test(f))
            )
              return e.each(function (r) {
                var s = e.eq(r);
                g && (t[0] = f.call(this, r, s.html())), je(s, t, n, i);
              });
            if (
              p &&
              ((s = (r = Se(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = s),
              s || i)
            ) {
              for (a = (o = C.map(we(r, "script"), ze)).length; d < p; d++)
                (c = r),
                  d !== h &&
                    ((c = C.clone(c, !0, !0)),
                    a && C.merge(o, we(c, "script"))),
                  n.call(e[d], c, d);
              if (a)
                for (
                  u = o[o.length - 1].ownerDocument, C.map(o, $e), d = 0;
                  d < a;
                  d++
                )
                  (c = o[d]),
                    ye.test(c.type || "") &&
                      !Q.access(c, "globalEval") &&
                      C.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !c.noModule &&
                          C._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : x(c.textContent.replace(Pe, ""), c, u));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var i, r = t ? C.filter(t, e) : e, s = 0;
              null != (i = r[s]);
              s++
            )
              n || 1 !== i.nodeType || C.cleanData(we(i)),
                i.parentNode &&
                  (n && ae(i) && xe(we(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                s,
                o,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (o = we(a), i = 0, r = (s = we(e)).length; i < r; i++)
                  _e(s[i], o[i]);
              if (t)
                if (n)
                  for (
                    s = s || we(e), o = o || we(a), i = 0, r = s.length;
                    i < r;
                    i++
                  )
                    Ne(s[i], o[i]);
                else Ne(e, a);
              return (
                (o = we(a, "script")).length > 0 &&
                  xe(o, !l && we(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = C.event.special, s = 0;
                void 0 !== (n = e[s]);
                s++
              )
                if (Z(n)) {
                  if ((t = n[Q.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? C.event.remove(n, i)
                          : C.removeEvent(n, i, t.handle);
                    n[Q.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return G(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return je(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    De(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return je(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return je(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return je(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return G(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !ke.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return je(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, i = [], r = C(e), s = r.length - 1, o = 0;
                    o <= s;
                    o++
                  )
                    (n = o === s ? this : this.clone(!0)),
                      C(r[o])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            qe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Fe = function (e, t, n) {
              var i,
                r,
                s = {};
              for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
              return i;
            },
            We = new RegExp(se.join("|"), "i");
          function Re(e, t, n) {
            var i,
              r,
              s,
              o,
              a = e.style;
            return (
              (n = n || qe(e)) &&
                ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (o = C.style(e, t)),
                !m.pixelBoxStyles() &&
                  Be.test(o) &&
                  We.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (s = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = o),
                  (o = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = s))),
              void 0 !== o ? o + "" : o
            );
          }
          function Ge(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(c).appendChild(u);
                var e = i.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (s = 12 === t(u.offsetWidth / 3)),
                  oe.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              s,
              o,
              a,
              l,
              c = b.createElement("div"),
              u = b.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
              C.extend(m, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), s;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      oe.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ve = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ye = {};
          function Ue(e) {
            var t = C.cssProps[e] || Ye[e];
            return (
              t ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                        n--;

                      )
                        if ((e = Ve[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Ze = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Qe = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Je = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, s) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (l += C.css(e, n + se[o], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= C.css(e, "padding" + se[o], !0, r)),
                    "margin" !== n &&
                      (l -= C.css(e, "border" + se[o] + "Width", !0, r)))
                  : ((l += C.css(e, "padding" + se[o], !0, r)),
                    "padding" !== n
                      ? (l += C.css(e, "border" + se[o] + "Width", !0, r))
                      : (a += C.css(e, "border" + se[o] + "Width", !0, r)));
            return (
              !i &&
                s >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        s -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = qe(e),
              r =
                (!m.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, i),
              s = r,
              o = Re(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!m.boxSizingReliable() && r) ||
                (!m.reliableTrDimensions() && k(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === C.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
                (s = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) +
                tt(e, t, n || (r ? "border" : "content"), s, i, o) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Re(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  s,
                  o,
                  a = U(t),
                  l = Ke.test(t),
                  c = e.style;
                if (
                  (l || (t = Ue(a)),
                  (o = C.cssHooks[t] || C.cssHooks[a]),
                  void 0 === n)
                )
                  return o && "get" in o && void 0 !== (r = o.get(e, !1, i))
                    ? r
                    : c[t];
                "string" === (s = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = ue(e, t, r)), (s = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== s ||
                      l ||
                      (n += (r && r[3]) || (C.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                s,
                o,
                a = U(t);
              return (
                Ke.test(t) || (t = Ue(a)),
                (o = C.cssHooks[t] || C.cssHooks[a]) &&
                  "get" in o &&
                  (r = o.get(e, !0, n)),
                void 0 === r && (r = Re(e, t, i)),
                "normal" === r && t in Je && (r = Je[t]),
                "" === n || n
                  ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
                  : r
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Ze.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : Fe(e, Qe, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    s = qe(e),
                    o = !m.scrollboxSize() && "absolute" === s.position,
                    a =
                      (o || i) && "border-box" === C.css(e, "boxSizing", !1, s),
                    l = i ? tt(e, t, i, a, s) : 0;
                  return (
                    a &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(s[t]) -
                          tt(e, t, "border", !1, s) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = Ge(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Re(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Fe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        s = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + se[i] + t] = s[i] || s[i - 2] || s[0];
                    return r;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = et);
              }
            ),
            C.fn.extend({
              css: function (e, t) {
                return G(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      s = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (i = qe(e), r = t.length; o < r; o++)
                        s[t[o]] = C.css(e, t[o], !1, i);
                      return s;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (C.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, s) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = s || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = it.prototype.init),
            (C.fx.step = {});
          var rt,
            st,
            ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            st &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, C.fx.interval),
              C.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = se[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function dt(e, t, n) {
            for (
              var i,
                r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                s = 0,
                o = r.length;
              s < o;
              s++
            )
              if ((i = r[s].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              r,
              s = 0,
              o = pt.prefilters.length,
              a = C.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    s = 0,
                    o = c.tweens.length;
                  s < o;
                  s++
                )
                  c.tweens[s].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && o
                    ? n
                    : (o || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = C.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              !(function (e, t) {
                var n, i, r, s, o;
                for (n in e)
                  if (
                    ((r = t[(i = U(n))]),
                    (s = e[n]),
                    Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
                    n !== i && ((e[i] = s), delete e[n]),
                    (o = C.cssHooks[i]) && ("expand" in o))
                  )
                    for (n in ((s = o.expand(s)), delete e[i], s))
                      (n in e) || ((e[n] = s[n]), (t[n] = r));
                  else t[i] = r;
              })(u, c.opts.specialEasing);
              s < o;
              s++
            )
              if ((i = pt.prefilters[s].call(c, e, u, c.opts)))
                return (
                  v(i.stop) &&
                    (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              C.map(u, dt, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              C.fx.timer(
                C.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (C.Animation = C.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  p = this,
                  h = {},
                  f = e.style,
                  g = e.nodeType && ce(e),
                  m = Q.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (o = C._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, C.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), ot.test(r))) {
                    if (
                      (delete t[i],
                      (s = s || "toggle" === r),
                      r === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !m || void 0 === m[i]) continue;
                      g = !0;
                    }
                    h[i] = (m && m[i]) || C.style(e, i);
                  }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (c = m && m.display) && (c = Q.get(e, "display")),
                    "none" === (u = C.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (he([e], !0),
                          (c = e.style.display || c),
                          (u = C.css(e, "display")),
                          he([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === C.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          f.display = c;
                        }),
                        null == c &&
                          ((u = f.display), (c = "none" === u ? "" : u))),
                      (f.display = "inline-block"))),
                  n.overflow &&
                    ((f.overflow = "hidden"),
                    p.always(function () {
                      (f.overflow = n.overflow[0]),
                        (f.overflowX = n.overflow[1]),
                        (f.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  h))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = Q.access(e, "fxshow", { display: c })),
                      s && (m.hidden = !g),
                      g && he([e], !0),
                      p.done(function () {
                        for (i in (g || he([e]), Q.remove(e, "fxshow"), h))
                          C.style(e, i, h[i]);
                      })),
                      (l = dt(g ? m[i] : 0, i, p)),
                      i in m ||
                        ((m[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                C.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in C.fx.speeds
                      ? (i.duration = C.fx.speeds[i.duration])
                      : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && C.dequeue(this, i.queue);
                }),
                i
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = C.isEmptyObject(e),
                  s = C.speed(t, n, i),
                  o = function () {
                    var t = pt(this, C.extend({}, e), s);
                    (r || Q.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      s = C.timers,
                      o = Q.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                      for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
                    for (r = s.length; r--; )
                      s[r].elem !== this ||
                        (null != e && s[r].queue !== e) ||
                        (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Q.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      s = C.timers,
                      o = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = s.length;
                      t--;

                    )
                      s[t].elem === this &&
                        s[t].queue === e &&
                        (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, r);
              };
            }),
            C.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (rt = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              st || ((st = !0), lt());
            }),
            (C.fx.stop = function () {
              st = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var ht,
            ft = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return G(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === s && C.isXMLDoc(e)) ||
                        (r =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = C.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && k(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(j);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ht = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ft[t] || C.find.attr;
              ft[t] = function (e, t, i) {
                var r,
                  s,
                  o = t.toLowerCase();
                return (
                  i ||
                    ((s = ft[o]),
                    (ft[o] = r),
                    (r = null != n(e, t, i) ? o : null),
                    (ft[o] = s)),
                  r
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(j) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(j)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return G(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return (
                    (1 === s && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              }
            ),
            C.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    C(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (o = 0; (s = t[o++]); )
                        i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    C(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (o = 0; (s = t[o++]); )
                        for (; i.indexOf(" " + s + " ") > -1; )
                          i = i.replace(" " + s + " ", " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, s, o;
                      if (i)
                        for (r = 0, s = C(this), o = bt(e); (t = o[r++]); )
                          s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && Q.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Q.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, C(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = C.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    C.valHooks[r.type] ||
                    C.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : vt(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      s = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === s) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, s = C.makeArray(t), o = r.length;
                      o--;

                    )
                      ((i = r[o]).selected =
                        C.inArray(C.valHooks.option.get(i), s) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), s;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in i);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, r) {
              var s,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                f = [n || b],
                g = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(g + C.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(g, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (d = C.event.special[g] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!r && !d.noBubble && !y(n)) {
                  for (
                    l = d.delegateType || g,
                      xt.test(l + g) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    f.push(o), (a = o);
                  a === (n.ownerDocument || b) &&
                    f.push(a.defaultView || a.parentWindow || i);
                }
                for (s = 0; (o = f[s++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = s > 1 ? l : d.bindType || g),
                    (u =
                      (Q.get(o, "events") || Object.create(null))[e.type] &&
                      Q.get(o, "handle")) && u.apply(o, t),
                    (u = c && o[c]) &&
                      u.apply &&
                      Z(o) &&
                      ((e.result = u.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                    !Z(n) ||
                    (c &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (C.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Tt),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Tt),
                      (C.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(i, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  C.event.simulate(t, e.target, C.event.fix(e));
                };
                C.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Q.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      Q.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Q.access(i, t) - 1;
                    r
                      ? Q.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), Q.remove(i, t));
                  },
                };
              });
          var St = i.location,
            Ct = { guid: Date.now() },
            Et = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Lt = /\[\]$/,
            It = /\r?\n/g,
            Ot = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;
          function kt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              C.each(t, function (t, r) {
                n || Lt.test(e)
                  ? i(e, r)
                  : kt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== T(t)) i(e, t);
            else for (r in t) kt(e + "[" + r + "]", t[r], n, i);
          }
          (C.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) kt(n, e[n], t, r);
            return i.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      At.test(this.nodeName) &&
                      !Ot.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(It, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(It, "\r\n") };
                  })
                  .get();
              },
            });
          var Mt = /%20/g,
            Pt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            _t = {},
            jt = {},
            Ht = "*/".concat("*"),
            Bt = b.createElement("a");
          function qt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                s = t.toLowerCase().match(j) || [];
              if (v(n))
                for (; (i = s[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Ft(e, t, n, i) {
            var r = {},
              s = e === jt;
            function o(a) {
              var l;
              return (
                (r[a] = !0),
                C.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || s || r[c]
                    ? s
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!r["*"] && o("*"));
          }
          function Wt(e, t) {
            var n,
              i,
              r = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e;
          }
          (Bt.href = St.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    St.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e);
              },
              ajaxPrefilter: qt(_t),
              ajaxTransport: qt(jt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  h = C.ajaxSetup({}, t),
                  f = h.context || h,
                  g = h.context && (f.nodeType || f.jquery) ? C(f) : C.event,
                  m = C.Deferred(),
                  v = C.Callbacks("once memory"),
                  y = h.statusCode || {},
                  w = {},
                  x = {},
                  T = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!o)
                          for (o = {}; (t = zt.exec(s)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) S.always(e[S.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (m.promise(S),
                  (h.url = ((e || h.url || St.href) + "").replace(
                    Nt,
                    St.protocol + "//"
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(j) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        Bt.protocol + "//" + Bt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = C.param(h.data, h.traditional)),
                  Ft(_t, h, t, S),
                  c)
                )
                  return S;
                for (d in ((u = C.event && h.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !$t.test(h.type)),
                (r = h.url.replace(Pt, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(Mt, "+"))
                  : ((p = h.url.slice(r.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((r += (Et.test(r) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((r = r.replace(Dt, "$1")),
                      (p = (Et.test(r) ? "&" : "?") + "_=" + Ct.guid++ + p)),
                    (h.url = r + p)),
                h.ifModified &&
                  (C.lastModified[r] &&
                    S.setRequestHeader("If-Modified-Since", C.lastModified[r]),
                  C.etag[r] && S.setRequestHeader("If-None-Match", C.etag[r])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", h.contentType),
                S.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  S.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, S, h) || c))
                  return S.abort();
                if (
                  ((T = "abort"),
                  v.add(h.complete),
                  S.done(h.success),
                  S.fail(h.error),
                  (n = Ft(jt, h, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), u && g.trigger("ajaxSend", [S, h]), c)
                  )
                    return S;
                  h.async &&
                    h.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      S.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), n.send(w, E);
                  } catch (e) {
                    if (c) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, o, l) {
                  var d,
                    p,
                    b,
                    w,
                    x,
                    T = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (s = l || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (w = (function (e, t, n) {
                        for (
                          var i, r, s, o, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) s = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              s = r;
                              break;
                            }
                            o || (o = r);
                          }
                          s = s || o;
                        }
                        if (s) return s !== l[0] && l.unshift(s), n[s];
                      })(h, S, o)),
                    !d &&
                      C.inArray("script", h.dataTypes) > -1 &&
                      C.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (w = (function (e, t, n, i) {
                      var r,
                        s,
                        o,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (o in e.converters)
                          c[o.toLowerCase()] = e.converters[o];
                      for (s = u.shift(); s; )
                        if (
                          (e.responseFields[s] && (n[e.responseFields[s]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = s),
                          (s = u.shift()))
                        )
                          if ("*" === s) s = l;
                          else if ("*" !== l && l !== s) {
                            if (!(o = c[l + " " + s] || c["* " + s]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === s &&
                                  (o = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === o
                                    ? (o = c[r])
                                    : !0 !== c[r] &&
                                      ((s = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: o
                                      ? e
                                      : "No conversion from " + l + " to " + s,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, w, S, d)),
                    d
                      ? (h.ifModified &&
                          ((x = S.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[r] = x),
                          (x = S.getResponseHeader("etag")) && (C.etag[r] = x)),
                        204 === e || "HEAD" === h.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = w.state), (p = w.data), (d = !(b = w.error))))
                      : ((b = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || T) + ""),
                    d
                      ? m.resolveWith(f, [p, T, S])
                      : m.rejectWith(f, [S, T, b]),
                    S.statusCode(y),
                    (y = void 0),
                    u &&
                      g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        S,
                        h,
                        d ? p : b,
                      ]),
                    v.fireWith(f, [S, T]),
                    u &&
                      (g.trigger("ajaxComplete", [S, h]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, i, r) {
                return (
                  v(n) && ((r = r || i), (i = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      C.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Rt = { 0: 200, 1223: 204 },
            Gt = C.ajaxSettings.xhr();
          (m.cors = !!Gt && "withCredentials" in Gt),
            (m.ajax = Gt = !!Gt),
            C.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Gt && !e.crossDomain))
                return {
                  send: function (r, s) {
                    var o,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(o, r[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? s(0, "error")
                              : s(a.status, a.statusText)
                            : s(
                                Rt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Vt,
            Xt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || C.expando + "_" + Ct.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                s,
                o,
                a =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Yt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return o || C.error(r + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (s = i[r]),
                  (i[r] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === s ? C(i).removeProp(r) : (i[r] = s),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                      o && v(s) && s(o[0]),
                      (o = s = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Vt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Vt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((i = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(i))
                      : (t = b)),
                  (s = !n && []),
                  (r = M.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Se([e], t, s)),
                      s && s.length && C(s).remove(),
                      C.merge([], r.childNodes)));
              var i, r, s;
            }),
            (C.fn.load = function (e, t, n) {
              var i,
                r,
                s,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                o.length > 0 &&
                  C.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (s = arguments),
                        o.html(
                          i ? C("<div>").append(C.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c = C.css(e, "position"),
                  u = C(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (s = C.css(e, "top")),
                  (l = C.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (s + l).indexOf("auto") > -1
                    ? ((o = (i = u.position()).top), (r = i.left))
                    : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, C.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + o),
                  null != t.left && (d.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (i) {
                  return G(
                    this,
                    function (e, i, r) {
                      var s;
                      if (
                        (y(e)
                          ? (s = e)
                          : 9 === e.nodeType && (s = e.defaultView),
                        void 0 === r)
                      )
                        return s ? s[t] : e[i];
                      s
                        ? s.scrollTo(
                            n ? s.pageXOffset : r,
                            n ? r : s.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = Ge(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Re(e, t)), Be.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  C.fn[i] = function (r, s) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === s ? "margin" : "border");
                    return G(
                      this,
                      function (t, n, r) {
                        var s;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((s = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              s["scroll" + e],
                              t.body["offset" + e],
                              s["offset" + e],
                              s["client" + e]
                            ))
                          : void 0 === r
                          ? C.css(t, n, a)
                          : C.style(t, n, r, a);
                      },
                      t,
                      o ? r : void 0,
                      o
                    );
                  };
                }
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || C.guid++),
                r
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = k),
            (C.isFunction = v),
            (C.isWindow = y),
            (C.camelCase = U),
            (C.type = T),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(Ut, "");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Zt = i.jQuery,
            Kt = i.$;
          return (
            (C.noConflict = function (e) {
              return (
                i.$ === C && (i.$ = Kt),
                e && i.jQuery === C && (i.jQuery = Zt),
                C
              );
            }),
            void 0 === r && (i.jQuery = i.$ = C),
            C
          );
        });
      },
      2: function (e, t, n) {
        var i, r;
        window.Element &&
          !Element.prototype.closest &&
          (Element.prototype.closest = function (e) {
            var t,
              n = (this.document || this.ownerDocument).querySelectorAll(e),
              i = this;
            do {
              for (t = n.length; 0 <= --t && n.item(t) !== i; );
            } while (t < 0 && (i = i.parentElement));
            return i;
          }),
          (function () {
            function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var n = document.createEvent("CustomEvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            }
            "function" != typeof window.CustomEvent &&
              ((e.prototype = window.Event.prototype),
              (window.CustomEvent = e));
          })(),
          (function () {
            for (
              var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0;
              n < t.length && !window.requestAnimationFrame;
              ++n
            )
              (window.requestAnimationFrame =
                window[t[n] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[t[n] + "CancelAnimationFrame"] ||
                  window[t[n] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (t, n) {
                var i = new Date().getTime(),
                  r = Math.max(0, 16 - (i - e)),
                  s = window.setTimeout(function () {
                    t(i + r);
                  }, r);
                return (e = i + r), s;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          (r =
            void 0 !== n.g
              ? n.g
              : "undefined" != typeof window
              ? window
              : this),
          (i = function () {
            return (function (e) {
              "use strict";
              var t = {
                  ignore: "[data-scroll-ignore]",
                  header: null,
                  topOnEmptyHash: !0,
                  speed: 500,
                  speedAsDuration: !1,
                  durationMax: null,
                  durationMin: null,
                  clip: !0,
                  offset: 0,
                  easing: "easeInOutCubic",
                  customEasing: null,
                  updateURL: !0,
                  popstate: !0,
                  emitEvents: !0,
                },
                n = function () {
                  var e = {};
                  return (
                    Array.prototype.forEach.call(arguments, function (t) {
                      for (var n in t) {
                        if (!t.hasOwnProperty(n)) return;
                        e[n] = t[n];
                      }
                    }),
                    e
                  );
                },
                i = function (e) {
                  "#" === e.charAt(0) && (e = e.substr(1));
                  for (
                    var t,
                      n = String(e),
                      i = n.length,
                      r = -1,
                      s = "",
                      o = n.charCodeAt(0);
                    ++r < i;

                  ) {
                    if (0 === (t = n.charCodeAt(r)))
                      throw new InvalidCharacterError(
                        "Invalid character: the input contains U+0000."
                      );
                    s +=
                      (1 <= t && t <= 31) ||
                      127 == t ||
                      (0 === r && 48 <= t && t <= 57) ||
                      (1 === r && 48 <= t && t <= 57 && 45 === o)
                        ? "\\" + t.toString(16) + " "
                        : 128 <= t ||
                          45 === t ||
                          95 === t ||
                          (48 <= t && t <= 57) ||
                          (65 <= t && t <= 90) ||
                          (97 <= t && t <= 122)
                        ? n.charAt(r)
                        : "\\" + n.charAt(r);
                  }
                  return "#" + s;
                },
                r = function () {
                  return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                  );
                },
                s = function (t) {
                  return t
                    ? ((n = t),
                      parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop)
                    : 0;
                  var n;
                },
                o = function (t, n, i) {
                  0 === t && document.body.focus(),
                    i ||
                      (t.focus(),
                      document.activeElement !== t &&
                        (t.setAttribute("tabindex", "-1"),
                        t.focus(),
                        (t.style.outline = "none")),
                      e.scrollTo(0, n));
                },
                a = function (t, n, i, r) {
                  if (n.emitEvents && "function" == typeof e.CustomEvent) {
                    var s = new CustomEvent(t, {
                      bubbles: !0,
                      detail: { anchor: i, toggle: r },
                    });
                    document.dispatchEvent(s);
                  }
                };
              return function (l, c) {
                var u,
                  d,
                  p,
                  h,
                  f = {
                    cancelScroll: function (e) {
                      cancelAnimationFrame(h),
                        (h = null),
                        e || a("scrollCancel", u);
                    },
                    animateScroll: function (i, l, c) {
                      f.cancelScroll();
                      var d = n(u || t, c || {}),
                        g =
                          "[object Number]" ===
                          Object.prototype.toString.call(i),
                        m = g || !i.tagName ? null : i;
                      if (g || m) {
                        var v = e.pageYOffset;
                        d.header &&
                          !p &&
                          (p = document.querySelector(d.header));
                        var y,
                          b,
                          w,
                          x,
                          T,
                          S,
                          C,
                          E,
                          L = s(p),
                          I = g
                            ? i
                            : (function (t, n, i, s) {
                                var o = 0;
                                if (t.offsetParent)
                                  for (
                                    ;
                                    (o += t.offsetTop), (t = t.offsetParent);

                                  );
                                return (
                                  (o = Math.max(o - n - i, 0)),
                                  s && (o = Math.min(o, r() - e.innerHeight)),
                                  o
                                );
                              })(
                                m,
                                L,
                                parseInt(
                                  "function" == typeof d.offset
                                    ? d.offset(i, l)
                                    : d.offset,
                                  10
                                ),
                                d.clip
                              ),
                          O = I - v,
                          A = r(),
                          k = 0,
                          M =
                            ((y = O),
                            (w = (b = d).speedAsDuration
                              ? b.speed
                              : Math.abs((y / 1e3) * b.speed)),
                            b.durationMax && w > b.durationMax
                              ? b.durationMax
                              : b.durationMin && w < b.durationMin
                              ? b.durationMin
                              : parseInt(w, 10)),
                          P = function (t) {
                            var n, r, s;
                            x || (x = t),
                              (k += t - x),
                              (S =
                                v +
                                O *
                                  ((r = T =
                                    1 < (T = 0 === M ? 0 : k / M) ? 1 : T),
                                  "easeInQuad" === (n = d).easing &&
                                    (s = r * r),
                                  "easeOutQuad" === n.easing &&
                                    (s = r * (2 - r)),
                                  "easeInOutQuad" === n.easing &&
                                    (s =
                                      r < 0.5
                                        ? 2 * r * r
                                        : (4 - 2 * r) * r - 1),
                                  "easeInCubic" === n.easing && (s = r * r * r),
                                  "easeOutCubic" === n.easing &&
                                    (s = --r * r * r + 1),
                                  "easeInOutCubic" === n.easing &&
                                    (s =
                                      r < 0.5
                                        ? 4 * r * r * r
                                        : (r - 1) * (2 * r - 2) * (2 * r - 2) +
                                          1),
                                  "easeInQuart" === n.easing &&
                                    (s = r * r * r * r),
                                  "easeOutQuart" === n.easing &&
                                    (s = 1 - --r * r * r * r),
                                  "easeInOutQuart" === n.easing &&
                                    (s =
                                      r < 0.5
                                        ? 8 * r * r * r * r
                                        : 1 - 8 * --r * r * r * r),
                                  "easeInQuint" === n.easing &&
                                    (s = r * r * r * r * r),
                                  "easeOutQuint" === n.easing &&
                                    (s = 1 + --r * r * r * r * r),
                                  "easeInOutQuint" === n.easing &&
                                    (s =
                                      r < 0.5
                                        ? 16 * r * r * r * r * r
                                        : 1 + 16 * --r * r * r * r * r),
                                  n.customEasing && (s = n.customEasing(r)),
                                  s || r)),
                              e.scrollTo(0, Math.floor(S)),
                              (function (t, n) {
                                var r = e.pageYOffset;
                                if (
                                  t == n ||
                                  r == n ||
                                  (v < n && e.innerHeight + r) >= A
                                )
                                  return (
                                    f.cancelScroll(!0),
                                    o(i, n, g),
                                    a("scrollStop", d, i, l),
                                    !(h = x = null)
                                  );
                              })(S, I) ||
                                ((h = e.requestAnimationFrame(P)), (x = t));
                          };
                        0 === e.pageYOffset && e.scrollTo(0, 0),
                          (C = i),
                          (E = d),
                          g ||
                            (history.pushState &&
                              E.updateURL &&
                              history.pushState(
                                {
                                  smoothScroll: JSON.stringify(E),
                                  anchor: C.id,
                                },
                                document.title,
                                C === document.documentElement
                                  ? "#top"
                                  : "#" + C.id
                              )),
                          "matchMedia" in e &&
                          e.matchMedia("(prefers-reduced-motion)").matches
                            ? o(i, Math.floor(I), !1)
                            : (a("scrollStart", d, i, l),
                              f.cancelScroll(!0),
                              e.requestAnimationFrame(P));
                      }
                    },
                  },
                  g = function (t) {
                    if (
                      !t.defaultPrevented &&
                      !(
                        0 !== t.button ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey
                      ) &&
                      "closest" in t.target &&
                      (d = t.target.closest(l)) &&
                      "a" === d.tagName.toLowerCase() &&
                      !t.target.closest(u.ignore) &&
                      d.hostname === e.location.hostname &&
                      d.pathname === e.location.pathname &&
                      /#/.test(d.href)
                    ) {
                      var n, r;
                      try {
                        n = i(decodeURIComponent(d.hash));
                      } catch (t) {
                        n = i(d.hash);
                      }
                      if ("#" === n) {
                        if (!u.topOnEmptyHash) return;
                        r = document.documentElement;
                      } else r = document.querySelector(n);
                      (r = r || "#top" !== n ? r : document.documentElement) &&
                        (t.preventDefault(),
                        (function (t) {
                          if (
                            history.replaceState &&
                            t.updateURL &&
                            !history.state
                          ) {
                            var n = e.location.hash;
                            (n = n || ""),
                              history.replaceState(
                                {
                                  smoothScroll: JSON.stringify(t),
                                  anchor: n || e.pageYOffset,
                                },
                                document.title,
                                n || e.location.href
                              );
                          }
                        })(u),
                        f.animateScroll(r, d));
                    }
                  },
                  m = function (e) {
                    if (
                      null !== history.state &&
                      history.state.smoothScroll &&
                      history.state.smoothScroll === JSON.stringify(u)
                    ) {
                      var t = history.state.anchor;
                      ("string" == typeof t &&
                        t &&
                        !(t = document.querySelector(
                          i(history.state.anchor)
                        ))) ||
                        f.animateScroll(t, null, { updateURL: !1 });
                    }
                  };
                return (
                  (f.destroy = function () {
                    u &&
                      (document.removeEventListener("click", g, !1),
                      e.removeEventListener("popstate", m, !1),
                      f.cancelScroll(),
                      (h = p = d = u = null));
                  }),
                  (function () {
                    if (
                      !(
                        "querySelector" in document &&
                        "addEventListener" in e &&
                        "requestAnimationFrame" in e &&
                        "closest" in e.Element.prototype
                      )
                    )
                      throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    f.destroy(),
                      (u = n(t, c || {})),
                      (p = u.header ? document.querySelector(u.header) : null),
                      document.addEventListener("click", g, !1),
                      u.updateURL &&
                        u.popstate &&
                        e.addEventListener("popstate", m, !1);
                  })(),
                  f
                );
              };
            })(r);
          }.apply(t, [])),
          void 0 === i || (e.exports = i);
      },
      641: (e, t, n) => {
        var i, r, s;
        (r = [n(755)]),
          void 0 ===
            (s =
              "function" ==
              typeof (i = function (e) {
                return (
                  (e.fn.tilt = function (t) {
                    const n = function () {
                        this.ticking ||
                          (requestAnimationFrame(u.bind(this)),
                          (this.ticking = !0));
                      },
                      i = function () {
                        const t = this;
                        e(this).on("mousemove", a),
                          e(this).on("mouseenter", s),
                          this.settings.reset && e(this).on("mouseleave", l),
                          this.settings.glare &&
                            e(window).on("resize", p.bind(t));
                      },
                      r = function () {
                        void 0 !== this.timeout && clearTimeout(this.timeout),
                          e(this).css({
                            transition: `${this.settings.speed}ms ${this.settings.easing}`,
                          }),
                          this.settings.glare &&
                            this.glareElement.css({
                              transition: `opacity ${this.settings.speed}ms ${this.settings.easing}`,
                            }),
                          (this.timeout = setTimeout(() => {
                            e(this).css({ transition: "" }),
                              this.settings.glare &&
                                this.glareElement.css({ transition: "" });
                          }, this.settings.speed));
                      },
                      s = function (t) {
                        (this.ticking = !1),
                          e(this).css({ "will-change": "transform" }),
                          r.call(this),
                          e(this).trigger("tilt.mouseEnter");
                      },
                      o = function (t) {
                        return (
                          void 0 === t &&
                            (t = {
                              pageX:
                                e(this).offset().left +
                                e(this).outerWidth() / 2,
                              pageY:
                                e(this).offset().top +
                                e(this).outerHeight() / 2,
                            }),
                          { x: t.pageX, y: t.pageY }
                        );
                      },
                      a = function (e) {
                        (this.mousePositions = o(e)), n.call(this);
                      },
                      l = function () {
                        r.call(this),
                          (this.reset = !0),
                          n.call(this),
                          e(this).trigger("tilt.mouseLeave");
                      },
                      c = function () {
                        const t = e(this).outerWidth(),
                          n = e(this).outerHeight(),
                          i = e(this).offset().left,
                          r = e(this).offset().top,
                          s = (this.mousePositions.x - i) / t,
                          o = (this.mousePositions.y - r) / n;
                        return {
                          tiltX: (
                            this.settings.maxTilt / 2 -
                            s * this.settings.maxTilt
                          ).toFixed(2),
                          tiltY: (
                            o * this.settings.maxTilt -
                            this.settings.maxTilt / 2
                          ).toFixed(2),
                          percentageX: 100 * s,
                          percentageY: 100 * o,
                          angle:
                            Math.atan2(
                              this.mousePositions.x - (i + t / 2),
                              -(this.mousePositions.y - (r + n / 2))
                            ) *
                            (180 / Math.PI),
                        };
                      },
                      u = function () {
                        if (((this.transforms = c.call(this)), this.reset))
                          return (
                            (this.reset = !1),
                            e(this).css(
                              "transform",
                              `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`
                            ),
                            void (
                              this.settings.glare &&
                              (this.glareElement.css(
                                "transform",
                                "rotate(180deg) translate(-50%, -50%)"
                              ),
                              this.glareElement.css("opacity", "0"))
                            )
                          );
                        e(this).css(
                          "transform",
                          `perspective(${
                            this.settings.perspective
                          }px) rotateX(${
                            "x" === this.settings.disableAxis
                              ? 0
                              : this.transforms.tiltY
                          }deg) rotateY(${
                            "y" === this.settings.disableAxis
                              ? 0
                              : this.transforms.tiltX
                          }deg) scale3d(${this.settings.scale},${
                            this.settings.scale
                          },${this.settings.scale})`
                        ),
                          this.settings.glare &&
                            (this.glareElement.css(
                              "transform",
                              `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`
                            ),
                            this.glareElement.css(
                              "opacity",
                              "" +
                                (this.transforms.percentageY *
                                  this.settings.maxGlare) /
                                  100
                            )),
                          e(this).trigger("change", [this.transforms]),
                          (this.ticking = !1);
                      },
                      d = function () {
                        const t = this.settings.glarePrerender;
                        if (
                          (t ||
                            e(this).append(
                              '<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'
                            ),
                          (this.glareElementWrapper =
                            e(this).find(".js-tilt-glare")),
                          (this.glareElement = e(this).find(
                            ".js-tilt-glare-inner"
                          )),
                          t)
                        )
                          return;
                        const n = {
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        };
                        this.glareElementWrapper
                          .css(n)
                          .css({
                            overflow: "hidden",
                            "pointer-events": "none",
                          }),
                          this.glareElement.css({
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            "background-image":
                              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                            width: "" + 2 * e(this).outerWidth(),
                            height: "" + 2 * e(this).outerWidth(),
                            transform: "rotate(180deg) translate(-50%, -50%)",
                            "transform-origin": "0% 0%",
                            opacity: "0",
                          });
                      },
                      p = function () {
                        this.glareElement.css({
                          width: "" + 2 * e(this).outerWidth(),
                          height: "" + 2 * e(this).outerWidth(),
                        });
                      };
                    return (
                      (e.fn.tilt.destroy = function () {
                        e(this).each(function () {
                          e(this).find(".js-tilt-glare").remove(),
                            e(this).css({ "will-change": "", transform: "" }),
                            e(this).off("mousemove mouseenter mouseleave");
                        });
                      }),
                      (e.fn.tilt.getValues = function () {
                        const t = [];
                        return (
                          e(this).each(function () {
                            (this.mousePositions = o.call(this)),
                              t.push(c.call(this));
                          }),
                          t
                        );
                      }),
                      (e.fn.tilt.reset = function () {
                        e(this).each(function () {
                          (this.mousePositions = o.call(this)),
                            (this.settings = e(this).data("settings")),
                            l.call(this),
                            setTimeout(() => {
                              this.reset = !1;
                            }, this.settings.transition);
                        });
                      }),
                      this.each(function () {
                        (this.settings = e.extend(
                          {
                            maxTilt: e(this).is("[data-tilt-max]")
                              ? e(this).data("tilt-max")
                              : 20,
                            perspective: e(this).is("[data-tilt-perspective]")
                              ? e(this).data("tilt-perspective")
                              : 300,
                            easing: e(this).is("[data-tilt-easing]")
                              ? e(this).data("tilt-easing")
                              : "cubic-bezier(.03,.98,.52,.99)",
                            scale: e(this).is("[data-tilt-scale]")
                              ? e(this).data("tilt-scale")
                              : "1",
                            speed: e(this).is("[data-tilt-speed]")
                              ? e(this).data("tilt-speed")
                              : "400",
                            transition:
                              !e(this).is("[data-tilt-transition]") ||
                              e(this).data("tilt-transition"),
                            disableAxis: e(this).is("[data-tilt-disable-axis]")
                              ? e(this).data("tilt-disable-axis")
                              : null,
                            axis: e(this).is("[data-tilt-axis]")
                              ? e(this).data("tilt-axis")
                              : null,
                            reset:
                              !e(this).is("[data-tilt-reset]") ||
                              e(this).data("tilt-reset"),
                            glare:
                              !!e(this).is("[data-tilt-glare]") &&
                              e(this).data("tilt-glare"),
                            maxGlare: e(this).is("[data-tilt-maxglare]")
                              ? e(this).data("tilt-maxglare")
                              : 1,
                          },
                          t
                        )),
                          null !== this.settings.axis &&
                            (console.warn(
                              "Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"
                            ),
                            (this.settings.disableAxis = this.settings.axis)),
                          (this.init = () => {
                            e(this).data("settings", this.settings),
                              this.settings.glare && d.call(this),
                              i.call(this);
                          }),
                          this.init();
                      })
                    );
                  }),
                  e("[data-tilt]").tilt(),
                  !0
                );
              })
                ? i.apply(t, r)
                : i) || (e.exports = s);
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            n =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            r = t && "classList" in document.createElement("p"),
            s = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: n || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var n,
                i = "LazyLoad::Initialized",
                r = new e(t);
              try {
                n = new CustomEvent(i, { detail: { instance: r } });
              } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            u = "srcset",
            d = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            f = "data",
            g = "loading",
            m = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            w = "data-",
            x = "ll-status",
            T = function (e, t) {
              return e.getAttribute(w + t);
            },
            S = function (e) {
              return T(e, x);
            },
            C = function (e, t) {
              return (function (e, t, n) {
                var i = "data-ll-status";
                null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
              })(e, 0, t);
            },
            E = function (e) {
              return C(e, null);
            },
            L = function (e) {
              return null === S(e);
            },
            I = function (e) {
              return S(e) === b;
            },
            O = [g, m, v, y],
            A = function (e, t, n, i) {
              e &&
                (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
            },
            k = function (e, t) {
              r
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            M = function (e, t) {
              r
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (e) {
              return e.llTempImage;
            },
            D = function (e, t) {
              if (t) {
                var n = t._observer;
                n && n.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            $ = function (e, t) {
              e && (e.toLoadCount = t);
            },
            N = function (e) {
              for (var t, n = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && n.push(t);
              return n;
            },
            _ = function (e, t) {
              var n = e.parentNode;
              n && "PICTURE" === n.tagName && N(n).forEach(t);
            },
            j = function (e, t) {
              N(e).forEach(t);
            },
            H = [c],
            B = [c, p],
            q = [c, u, d],
            F = [f],
            W = function (e) {
              return !!e[h];
            },
            R = function (e) {
              return e[h];
            },
            G = function (e) {
              return delete e[h];
            },
            V = function (e, t) {
              if (!W(e)) {
                var n = {};
                t.forEach(function (t) {
                  n[t] = e.getAttribute(t);
                }),
                  (e[h] = n);
              }
            },
            X = function (e, t) {
              if (W(e)) {
                var n = R(e);
                t.forEach(function (t) {
                  !(function (e, t, n) {
                    n ? e.setAttribute(t, n) : e.removeAttribute(t);
                  })(e, t, n[t]);
                });
              }
            },
            Y = function (e, t, n) {
              k(e, t.class_loading),
                C(e, g),
                n && (z(n, 1), A(t.callback_loading, e, n));
            },
            U = function (e, t, n) {
              n && e.setAttribute(t, n);
            },
            Z = function (e, t) {
              U(e, d, T(e, t.data_sizes)),
                U(e, u, T(e, t.data_srcset)),
                U(e, c, T(e, t.data_src));
            },
            K = {
              IMG: function (e, t) {
                _(e, function (e) {
                  V(e, q), Z(e, t);
                }),
                  V(e, q),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                V(e, H), U(e, c, T(e, t.data_src));
              },
              VIDEO: function (e, t) {
                j(e, function (e) {
                  V(e, H), U(e, c, T(e, t.data_src));
                }),
                  V(e, B),
                  U(e, p, T(e, t.data_poster)),
                  U(e, c, T(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                V(e, F), U(e, f, T(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            J = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                A(e.callback_finish, t);
            },
            ee = function (e, t, n) {
              e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
            },
            te = function (e, t, n) {
              e.removeEventListener(t, n);
            },
            ne = function (e) {
              return !!e.llEvLisnrs;
            },
            ie = function (e) {
              if (ne(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                  var i = t[n];
                  te(e, n, i);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, n) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(n, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(n),
                M(e, t.class_loading),
                t.unobserve_completed && D(e, n);
            },
            se = function (e, t, n) {
              var i = P(e) || e;
              ne(i) ||
                (function (e, t, n) {
                  ne(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  ee(e, i, t), ee(e, "error", n);
                })(
                  i,
                  function (r) {
                    !(function (e, t, n, i) {
                      var r = I(t);
                      re(t, n, i),
                        k(t, n.class_loaded),
                        C(t, m),
                        A(n.callback_loaded, t, i),
                        r || J(n, i);
                    })(0, e, t, n),
                      ie(i);
                  },
                  function (r) {
                    !(function (e, t, n, i) {
                      var r = I(t);
                      re(t, n, i),
                        k(t, n.class_error),
                        C(t, y),
                        A(n.callback_error, t, i),
                        r || J(n, i);
                    })(0, e, t, n),
                      ie(i);
                  }
                );
            },
            oe = function (e, t, n) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                se(e, t, n),
                (function (e) {
                  W(e) || (e[h] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, n) {
                  var i = T(e, t.data_bg),
                    r = T(e, t.data_bg_hidpi),
                    o = s && r ? r : i;
                  o &&
                    ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                    P(e).setAttribute(c, o),
                    Y(e, t, n));
                })(e, t, n),
                (function (e, t, n) {
                  var i = T(e, t.data_bg_multi),
                    r = T(e, t.data_bg_multi_hidpi),
                    o = s && r ? r : i;
                  o &&
                    ((e.style.backgroundImage = o),
                    (function (e, t, n) {
                      k(e, t.class_applied),
                        C(e, v),
                        n &&
                          (t.unobserve_completed && D(e, t),
                          A(t.callback_applied, e, n));
                    })(e, t, n));
                })(e, t, n);
            },
            ae = function (e, t, n) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? oe(e, t, n)
                : (function (e, t, n) {
                    se(e, t, n),
                      (function (e, t, n) {
                        var i = K[e.tagName];
                        i && (i(e, t), Y(e, t, n));
                      })(e, t, n);
                  })(e, t, n);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(u), e.removeAttribute(d);
            },
            ce = function (e) {
              _(e, function (e) {
                X(e, q);
              }),
                X(e, q);
            },
            ue = {
              IMG: ce,
              IFRAME: function (e) {
                X(e, H);
              },
              VIDEO: function (e) {
                j(e, function (e) {
                  X(e, H);
                }),
                  X(e, B),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, F);
              },
            },
            de = function (e, t) {
              (function (e) {
                var t = ue[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (W(e)) {
                        var t = R(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    I(e) ||
                    (M(e, t.class_entered),
                    M(e, t.class_exited),
                    M(e, t.class_applied),
                    M(e, t.class_loading),
                    M(e, t.class_loaded),
                    M(e, t.class_error));
                })(e, t),
                E(e),
                G(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, n) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, n, i) {
                      var r = (function (e) {
                        return O.indexOf(S(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        k(e, n.class_entered),
                        M(e, n.class_exited),
                        (function (e, t, n) {
                          t.unobserve_entered && D(e, n);
                        })(e, n, i),
                        A(n.callback_enter, e, t, i),
                        r || ae(e, n, i);
                    })(e.target, e, t, n)
                  : (function (e, t, n, i) {
                      L(e) ||
                        (k(e, n.class_exited),
                        (function (e, t, n, i) {
                          n.cancel_on_exit &&
                            (function (e) {
                              return S(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ie(e),
                            (function (e) {
                              _(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            M(e, n.class_loading),
                            z(i, -1),
                            E(e),
                            A(n.callback_cancel, e, t, i));
                        })(e, t, n, i),
                        A(n.callback_exit, e, t, i));
                    })(e.target, e, t, n);
              });
            },
            ge = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return S(e) === y;
              })(e);
            },
            ye = function (e, t) {
              return (function (e) {
                return ge(e).filter(L);
              })(e || me(t));
            },
            be = function (e, n) {
              var r = a(e);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (n) {
                        fe(n, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(r, this),
                (function (e, n) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var n;
                        ((n = me(e)), ge(n).filter(ve)).forEach(function (t) {
                          M(t, e.class_error), E(t);
                        }),
                          t.update();
                      })(e, n);
                    });
                })(r, this),
                this.update(n);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  r,
                  s = this._settings,
                  o = ye(e, s);
                $(this, o.length),
                  !n && i
                    ? he(s)
                      ? (function (e, t, n) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, n) {
                                e.setAttribute("loading", "lazy"),
                                  se(e, t, n),
                                  (function (e, t) {
                                    var n = K[e.tagName];
                                    n && n(e, t);
                                  })(e, t),
                                  C(e, b);
                              })(e, t, n);
                          }),
                            $(n, 0);
                        })(o, s, this)
                      : ((r = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, r))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  me(this._settings).forEach(function (e) {
                    G(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  n = this._settings;
                ye(e, n).forEach(function (e) {
                  D(e, t), ae(e, n, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  de(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var n = a(t);
              ae(e, n);
            }),
            (be.resetStatus = function (e) {
              E(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var n, i = 0; (n = t[i]); i += 1) l(e, n);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var s = (t[i] = { exports: {} });
    return e[i].call(s.exports, s, s.exports, n), s.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      "use strict";
      class e {
        constructor(e, t = null) {
          if (
            ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
            this.config.init)
          ) {
            const e = document.querySelectorAll("[data-prlx-mouse]");
            e.length
              ? (this.paralaxMouseInit(e),
                this.setLogging(`Проснулся, слежу за объектами: (${e.length})`))
              : this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
          }
        }
        paralaxMouseInit(e) {
          e.forEach((e) => {
            const t = e.closest("[data-prlx-mouse-wrapper]"),
              n = e.dataset.prlxCx ? +e.dataset.prlxCx : 100,
              i = e.dataset.prlxCy ? +e.dataset.prlxCy : 100,
              r = e.hasAttribute("data-prlx-dxr") ? -1 : 1,
              s = e.hasAttribute("data-prlx-dyr") ? -1 : 1,
              o = e.dataset.prlxA ? +e.dataset.prlxA : 50;
            let a = 0,
              l = 0,
              c = 0,
              u = 0;
            function d(t = window) {
              t.addEventListener("mousemove", function (t) {
                const n = e.getBoundingClientRect().top + window.scrollY;
                if (
                  n >= window.scrollY ||
                  n + e.offsetHeight >= window.scrollY
                ) {
                  const e = window.innerWidth,
                    n = window.innerHeight,
                    i = t.clientX - e / 2,
                    r = t.clientY - n / 2;
                  (c = (i / e) * 100), (u = (r / n) * 100);
                }
              });
            }
            !(function t() {
              (a += ((c - a) * o) / 1e3),
                (l += ((u - l) * o) / 1e3),
                (e.style.cssText = `transform: translate3D(${
                  (r * a) / (n / 10)
                }%,${(s * l) / (i / 10)}%,0);`),
                requestAnimationFrame(t);
            })(),
              t ? d(t) : d();
          });
        }
        setLogging(e) {
          this.config.logging && l(`[PRLX Mouse]: ${e}`);
        }
      }
      let t = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
          );
        },
      };
      let i = (e, t = 500, n = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = n ? `${n}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !n),
                !n && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !n && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t));
        },
        r = (e, t = 500, n = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              n && e.style.removeProperty("height");
            let i = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = n ? `${n}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = i + "px"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              window.setTimeout(() => {
                e.style.removeProperty("height"),
                  e.style.removeProperty("overflow"),
                  e.style.removeProperty("transition-duration"),
                  e.style.removeProperty("transition-property"),
                  e.classList.remove("_slide");
              }, t);
          }
        },
        s = !0,
        o = (e = 500) => {
          let t = document.querySelector("body");
          if (s) {
            let n = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < n.length; e++) {
                n[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (s = !1),
              setTimeout(function () {
                s = !0;
              }, e);
          }
        },
        a = (e = 500) => {
          let t = document.querySelector("body");
          if (s) {
            let n = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (s = !1),
              setTimeout(function () {
                s = !0;
              }, e);
          }
        };
      function l(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function c(e) {
        return e.filter(function (e, t, n) {
          return n.indexOf(e) === t;
        });
      }
      function u(e, t) {
        const n = Array.from(e).filter(function (e, n, i) {
          if (e.dataset[t]) return e.dataset[t].split(",")[0];
        });
        if (n.length) {
          const e = [];
          n.forEach((n) => {
            const i = {},
              r = n.dataset[t].split(",");
            (i.value = r[0]),
              (i.type = r[1] ? r[1].trim() : "max"),
              (i.item = n),
              e.push(i);
          });
          let i = e.map(function (e) {
            return (
              "(" +
              e.type +
              "-width: " +
              e.value +
              "px)," +
              e.value +
              "," +
              e.type
            );
          });
          i = c(i);
          const r = [];
          if (i.length)
            return (
              i.forEach((t) => {
                const n = t.split(","),
                  i = n[1],
                  s = n[2],
                  o = window.matchMedia(n[0]),
                  a = e.filter(function (e) {
                    if (e.value === i && e.type === s) return !0;
                  });
                r.push({ itemsArray: a, matchMedia: o });
              }),
              r
            );
        }
      }
      var d = n(2);
      let p = (e, t = !1, n = 500, i = 0) => {
        const r = document.querySelector(e);
        if (r) {
          let s = "",
            a = 0;
          t &&
            ((s = "header.header"),
            (a = document.querySelector(s).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: n,
            header: s,
            offset: i,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (o(), document.documentElement.classList.remove("menu-open")),
            void 0 !== d)
          )
            new d().animateScroll(r, "", c);
          else {
            let e = r.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
          }
          l(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else l(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      function h(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function f(e) {
        return e instanceof h(e).Element || e instanceof Element;
      }
      function g(e) {
        return e instanceof h(e).HTMLElement || e instanceof HTMLElement;
      }
      function m(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof h(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var v = Math.max,
        y = Math.min,
        b = Math.round;
      function w(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
          i = 1,
          r = 1;
        if (g(e) && t) {
          var s = e.offsetHeight,
            o = e.offsetWidth;
          o > 0 && (i = b(n.width) / o || 1),
            s > 0 && (r = b(n.height) / s || 1);
        }
        return {
          width: n.width / i,
          height: n.height / r,
          top: n.top / r,
          right: n.right / i,
          bottom: n.bottom / r,
          left: n.left / i,
          x: n.left / i,
          y: n.top / r,
        };
      }
      function x(e) {
        var t = h(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function T(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function S(e) {
        return ((f(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function C(e) {
        return w(S(e)).left + x(e).scrollLeft;
      }
      function E(e) {
        return h(e).getComputedStyle(e);
      }
      function L(e) {
        var t = E(e),
          n = t.overflow,
          i = t.overflowX,
          r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + i);
      }
      function I(e, t, n) {
        void 0 === n && (n = !1);
        var i,
          r,
          s = g(t),
          o =
            g(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = b(t.width) / e.offsetWidth || 1,
                i = b(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== i;
            })(t),
          a = S(t),
          l = w(e, o),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (s || (!s && !n)) &&
            (("body" !== T(t) || L(a)) &&
              (c =
                (i = t) !== h(i) && g(i)
                  ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                  : x(i)),
            g(t)
              ? (((u = w(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : a && (u.x = C(a))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function O(e) {
        var t = w(e),
          n = e.offsetWidth,
          i = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - i) <= 1 && (i = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
        );
      }
      function A(e) {
        return "html" === T(e)
          ? e
          : e.assignedSlot || e.parentNode || (m(e) ? e.host : null) || S(e);
      }
      function k(e) {
        return ["html", "body", "#document"].indexOf(T(e)) >= 0
          ? e.ownerDocument.body
          : g(e) && L(e)
          ? e
          : k(A(e));
      }
      function M(e, t) {
        var n;
        void 0 === t && (t = []);
        var i = k(e),
          r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = h(i),
          o = r ? [s].concat(s.visualViewport || [], L(i) ? i : []) : i,
          a = t.concat(o);
        return r ? a : a.concat(M(A(o)));
      }
      function P(e) {
        return ["table", "td", "th"].indexOf(T(e)) >= 0;
      }
      function D(e) {
        return g(e) && "fixed" !== E(e).position ? e.offsetParent : null;
      }
      function z(e) {
        for (var t = h(e), n = D(e); n && P(n) && "static" === E(n).position; )
          n = D(n);
        return n &&
          ("html" === T(n) || ("body" === T(n) && "static" === E(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  g(e) &&
                  "fixed" === E(e).position
                )
                  return null;
                for (
                  var n = A(e);
                  g(n) && ["html", "body"].indexOf(T(n)) < 0;

                ) {
                  var i = E(n);
                  if (
                    "none" !== i.transform ||
                    "none" !== i.perspective ||
                    "paint" === i.contain ||
                    -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                    (t && "filter" === i.willChange) ||
                    (t && i.filter && "none" !== i.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var $ = "top",
        N = "bottom",
        _ = "right",
        j = "left",
        H = "auto",
        B = [$, N, _, j],
        q = "start",
        F = "end",
        W = "viewport",
        R = "popper",
        G = B.reduce(function (e, t) {
          return e.concat([t + "-" + q, t + "-" + F]);
        }, []),
        V = [].concat(B, [H]).reduce(function (e, t) {
          return e.concat([t, t + "-" + q, t + "-" + F]);
        }, []),
        X = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function Y(e) {
        var t = new Map(),
          n = new Set(),
          i = [];
        function r(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var i = t.get(e);
                  i && r(i);
                }
              }),
            i.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || r(e);
          }),
          i
        );
      }
      var U = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Z() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function K(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          i = void 0 === n ? [] : n,
          r = t.defaultOptions,
          s = void 0 === r ? U : r;
        return function (e, t, n) {
          void 0 === n && (n = s);
          var r,
            o,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, U, s),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: a,
              setOptions: function (n) {
                var r = "function" == typeof n ? n(a.options) : n;
                d(),
                  (a.options = Object.assign({}, s, a.options, r)),
                  (a.scrollParents = {
                    reference: f(e)
                      ? M(e)
                      : e.contextElement
                      ? M(e.contextElement)
                      : [],
                    popper: M(t),
                  });
                var o = (function (e) {
                  var t = Y(e);
                  return X.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(i, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = o.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      i = void 0 === n ? {} : n,
                      r = e.effect;
                    if ("function" == typeof r) {
                      var s = r({ state: a, name: t, instance: u, options: i }),
                        o = function () {};
                      l.push(s || o);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Z(t, n)) {
                    (a.rects = {
                      reference: I(t, z(n), "fixed" === a.options.strategy),
                      popper: O(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var i = 0; i < a.orderedModifiers.length; i++)
                      if (!0 !== a.reset) {
                        var r = a.orderedModifiers[i],
                          s = r.fn,
                          o = r.options,
                          l = void 0 === o ? {} : o,
                          d = r.name;
                        "function" == typeof s &&
                          (a =
                            s({ state: a, options: l, name: d, instance: u }) ||
                            a);
                      } else (a.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((r = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    o ||
                      (o = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (o = void 0), e(r());
                        });
                      })),
                    o
                  );
                }),
              destroy: function () {
                d(), (c = !0);
              },
            };
          if (!Z(e, t)) return u;
          function d() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Q = { passive: !0 };
      const J = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            i = e.options,
            r = i.scroll,
            s = void 0 === r || r,
            o = i.resize,
            a = void 0 === o || o,
            l = h(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            s &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, Q);
              }),
            a && l.addEventListener("resize", n.update, Q),
            function () {
              s &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Q);
                }),
                a && l.removeEventListener("resize", n.update, Q);
            }
          );
        },
        data: {},
      };
      function ee(e) {
        return e.split("-")[0];
      }
      function te(e) {
        return e.split("-")[1];
      }
      function ne(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function ie(e) {
        var t,
          n = e.reference,
          i = e.element,
          r = e.placement,
          s = r ? ee(r) : null,
          o = r ? te(r) : null,
          a = n.x + n.width / 2 - i.width / 2,
          l = n.y + n.height / 2 - i.height / 2;
        switch (s) {
          case $:
            t = { x: a, y: n.y - i.height };
            break;
          case N:
            t = { x: a, y: n.y + n.height };
            break;
          case _:
            t = { x: n.x + n.width, y: l };
            break;
          case j:
            t = { x: n.x - i.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = s ? ne(s) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (o) {
            case q:
              t[c] = t[c] - (n[u] / 2 - i[u] / 2);
              break;
            case F:
              t[c] = t[c] + (n[u] / 2 - i[u] / 2);
          }
        }
        return t;
      }
      var re = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function se(e) {
        var t,
          n = e.popper,
          i = e.popperRect,
          r = e.placement,
          s = e.variation,
          o = e.offsets,
          a = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          p = o.x,
          f = void 0 === p ? 0 : p,
          g = o.y,
          m = void 0 === g ? 0 : g,
          v = "function" == typeof u ? u({ x: f, y: m }) : { x: f, y: m };
        (f = v.x), (m = v.y);
        var y = o.hasOwnProperty("x"),
          w = o.hasOwnProperty("y"),
          x = j,
          T = $,
          C = window;
        if (c) {
          var L = z(n),
            I = "clientHeight",
            O = "clientWidth";
          if (
            (L === h(n) &&
              "static" !== E((L = S(n))).position &&
              "absolute" === a &&
              ((I = "scrollHeight"), (O = "scrollWidth")),
            (L = L),
            r === $ || ((r === j || r === _) && s === F))
          )
            (T = N),
              (m -=
                (d && C.visualViewport ? C.visualViewport.height : L[I]) -
                i.height),
              (m *= l ? 1 : -1);
          if (r === j || ((r === $ || r === N) && s === F))
            (x = _),
              (f -=
                (d && C.visualViewport ? C.visualViewport.width : L[O]) -
                i.width),
              (f *= l ? 1 : -1);
        }
        var A,
          k = Object.assign({ position: a }, c && re),
          M =
            !0 === u
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    i = window.devicePixelRatio || 1;
                  return { x: b(t * i) / i || 0, y: b(n * i) / i || 0 };
                })({ x: f, y: m })
              : { x: f, y: m };
        return (
          (f = M.x),
          (m = M.y),
          l
            ? Object.assign(
                {},
                k,
                (((A = {})[T] = w ? "0" : ""),
                (A[x] = y ? "0" : ""),
                (A.transform =
                  (C.devicePixelRatio || 1) <= 1
                    ? "translate(" + f + "px, " + m + "px)"
                    : "translate3d(" + f + "px, " + m + "px, 0)"),
                A)
              )
            : Object.assign(
                {},
                k,
                (((t = {})[T] = w ? m + "px" : ""),
                (t[x] = y ? f + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const oe = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              i = t.attributes[e] || {},
              r = t.elements[e];
            g(r) &&
              T(r) &&
              (Object.assign(r.style, n),
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                !1 === t
                  ? r.removeAttribute(e)
                  : r.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var i = t.elements[e],
                  r = t.attributes[e] || {},
                  s = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                g(i) &&
                  T(i) &&
                  (Object.assign(i.style, s),
                  Object.keys(r).forEach(function (e) {
                    i.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      const ae = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = e.name,
            r = n.offset,
            s = void 0 === r ? [0, 0] : r,
            o = V.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var i = ee(e),
                    r = [j, $].indexOf(i) >= 0 ? -1 : 1,
                    s =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    o = s[0],
                    a = s[1];
                  return (
                    (o = o || 0),
                    (a = (a || 0) * r),
                    [j, _].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
                  );
                })(n, t.rects, s)),
                e
              );
            }, {}),
            a = o[t.placement],
            l = a.x,
            c = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[i] = o);
        },
      };
      var le = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ce(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return le[e];
        });
      }
      var ue = { start: "end", end: "start" };
      function de(e) {
        return e.replace(/start|end/g, function (e) {
          return ue[e];
        });
      }
      function pe(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && m(n)) {
          var i = t;
          do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function he(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function fe(e, t) {
        return t === W
          ? he(
              (function (e) {
                var t = h(e),
                  n = S(e),
                  i = t.visualViewport,
                  r = n.clientWidth,
                  s = n.clientHeight,
                  o = 0,
                  a = 0;
                return (
                  i &&
                    ((r = i.width),
                    (s = i.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((o = i.offsetLeft), (a = i.offsetTop))),
                  { width: r, height: s, x: o + C(e), y: a }
                );
              })(e)
            )
          : f(t)
          ? (function (e) {
              var t = w(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : he(
              (function (e) {
                var t,
                  n = S(e),
                  i = x(e),
                  r = null == (t = e.ownerDocument) ? void 0 : t.body,
                  s = v(
                    n.scrollWidth,
                    n.clientWidth,
                    r ? r.scrollWidth : 0,
                    r ? r.clientWidth : 0
                  ),
                  o = v(
                    n.scrollHeight,
                    n.clientHeight,
                    r ? r.scrollHeight : 0,
                    r ? r.clientHeight : 0
                  ),
                  a = -i.scrollLeft + C(e),
                  l = -i.scrollTop;
                return (
                  "rtl" === E(r || n).direction &&
                    (a += v(n.clientWidth, r ? r.clientWidth : 0) - s),
                  { width: s, height: o, x: a, y: l }
                );
              })(S(e))
            );
      }
      function ge(e, t, n) {
        var i =
            "clippingParents" === t
              ? (function (e) {
                  var t = M(A(e)),
                    n =
                      ["absolute", "fixed"].indexOf(E(e).position) >= 0 && g(e)
                        ? z(e)
                        : e;
                  return f(n)
                    ? t.filter(function (e) {
                        return f(e) && pe(e, n) && "body" !== T(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          r = [].concat(i, [n]),
          s = r[0],
          o = r.reduce(function (t, n) {
            var i = fe(e, n);
            return (
              (t.top = v(i.top, t.top)),
              (t.right = y(i.right, t.right)),
              (t.bottom = y(i.bottom, t.bottom)),
              (t.left = v(i.left, t.left)),
              t
            );
          }, fe(e, s));
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      }
      function me(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function ve(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function ye(e, t) {
        void 0 === t && (t = {});
        var n = t,
          i = n.placement,
          r = void 0 === i ? e.placement : i,
          s = n.boundary,
          o = void 0 === s ? "clippingParents" : s,
          a = n.rootBoundary,
          l = void 0 === a ? W : a,
          c = n.elementContext,
          u = void 0 === c ? R : c,
          d = n.altBoundary,
          p = void 0 !== d && d,
          h = n.padding,
          g = void 0 === h ? 0 : h,
          m = me("number" != typeof g ? g : ve(g, B)),
          v = u === R ? "reference" : R,
          y = e.rects.popper,
          b = e.elements[p ? v : u],
          x = ge(f(b) ? b : b.contextElement || S(e.elements.popper), o, l),
          T = w(e.elements.reference),
          C = ie({
            reference: T,
            element: y,
            strategy: "absolute",
            placement: r,
          }),
          E = he(Object.assign({}, y, C)),
          L = u === R ? E : T,
          I = {
            top: x.top - L.top + m.top,
            bottom: L.bottom - x.bottom + m.bottom,
            left: x.left - L.left + m.left,
            right: L.right - x.right + m.right,
          },
          O = e.modifiersData.offset;
        if (u === R && O) {
          var A = O[r];
          Object.keys(I).forEach(function (e) {
            var t = [_, N].indexOf(e) >= 0 ? 1 : -1,
              n = [$, N].indexOf(e) >= 0 ? "y" : "x";
            I[e] += A[n] * t;
          });
        }
        return I;
      }
      function be(e, t, n) {
        return v(e, y(t, n));
      }
      const we = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = e.name,
            r = n.mainAxis,
            s = void 0 === r || r,
            o = n.altAxis,
            a = void 0 !== o && o,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            d = n.padding,
            p = n.tether,
            h = void 0 === p || p,
            f = n.tetherOffset,
            g = void 0 === f ? 0 : f,
            m = ye(t, {
              boundary: l,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            b = ee(t.placement),
            w = te(t.placement),
            x = !w,
            T = ne(b),
            S = "x" === T ? "y" : "x",
            C = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            L = t.rects.popper,
            I =
              "function" == typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            A =
              "number" == typeof I
                ? { mainAxis: I, altAxis: I }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
            k = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            M = { x: 0, y: 0 };
          if (C) {
            if (s) {
              var P,
                D = "y" === T ? $ : j,
                H = "y" === T ? N : _,
                B = "y" === T ? "height" : "width",
                F = C[T],
                W = F + m[D],
                R = F - m[H],
                G = h ? -L[B] / 2 : 0,
                V = w === q ? E[B] : L[B],
                X = w === q ? -L[B] : -E[B],
                Y = t.elements.arrow,
                U = h && Y ? O(Y) : { width: 0, height: 0 },
                Z = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                K = Z[D],
                Q = Z[H],
                J = be(0, E[B], U[B]),
                ie = x
                  ? E[B] / 2 - G - J - K - A.mainAxis
                  : V - J - K - A.mainAxis,
                re = x
                  ? -E[B] / 2 + G + J + Q + A.mainAxis
                  : X + J + Q + A.mainAxis,
                se = t.elements.arrow && z(t.elements.arrow),
                oe = se
                  ? "y" === T
                    ? se.clientTop || 0
                    : se.clientLeft || 0
                  : 0,
                ae = null != (P = null == k ? void 0 : k[T]) ? P : 0,
                le = F + re - ae,
                ce = be(h ? y(W, F + ie - ae - oe) : W, F, h ? v(R, le) : R);
              (C[T] = ce), (M[T] = ce - F);
            }
            if (a) {
              var ue,
                de = "x" === T ? $ : j,
                pe = "x" === T ? N : _,
                he = C[S],
                fe = "y" === S ? "height" : "width",
                ge = he + m[de],
                me = he - m[pe],
                ve = -1 !== [$, j].indexOf(b),
                we = null != (ue = null == k ? void 0 : k[S]) ? ue : 0,
                xe = ve ? ge : he - E[fe] - L[fe] - we + A.altAxis,
                Te = ve ? he + E[fe] + L[fe] - we - A.altAxis : me,
                Se =
                  h && ve
                    ? (function (e, t, n) {
                        var i = be(e, t, n);
                        return i > n ? n : i;
                      })(xe, he, Te)
                    : be(h ? xe : ge, he, h ? Te : me);
              (C[S] = Se), (M[S] = Se - he);
            }
            t.modifiersData[i] = M;
          }
        },
        requiresIfExists: ["offset"],
      };
      const xe = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            i = e.name,
            r = e.options,
            s = n.elements.arrow,
            o = n.modifiersData.popperOffsets,
            a = ee(n.placement),
            l = ne(a),
            c = [j, _].indexOf(a) >= 0 ? "height" : "width";
          if (s && o) {
            var u = (function (e, t) {
                return me(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : ve(e, B)
                );
              })(r.padding, n),
              d = O(s),
              p = "y" === l ? $ : j,
              h = "y" === l ? N : _,
              f =
                n.rects.reference[c] +
                n.rects.reference[l] -
                o[l] -
                n.rects.popper[c],
              g = o[l] - n.rects.reference[l],
              m = z(s),
              v = m
                ? "y" === l
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = f / 2 - g / 2,
              b = u[p],
              w = v - d[c] - u[h],
              x = v / 2 - d[c] / 2 + y,
              T = be(b, x, w),
              S = l;
            n.modifiersData[i] =
              (((t = {})[S] = T), (t.centerOffset = T - x), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            i = void 0 === n ? "[data-popper-arrow]" : n;
          null != i &&
            ("string" != typeof i ||
              (i = t.elements.popper.querySelector(i))) &&
            pe(t.elements.popper, i) &&
            (t.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Te(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Se(e) {
        return [$, _, N, j].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Ce = K({
          defaultModifiers: [
            J,
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = ie({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  i = n.gpuAcceleration,
                  r = void 0 === i || i,
                  s = n.adaptive,
                  o = void 0 === s || s,
                  a = n.roundOffsets,
                  l = void 0 === a || a,
                  c = {
                    placement: ee(t.placement),
                    variation: te(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: r,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    se(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: o,
                        roundOffsets: l,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      se(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: l,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            oe,
            ae,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  i = e.name;
                if (!t.modifiersData[i]._skip) {
                  for (
                    var r = n.mainAxis,
                      s = void 0 === r || r,
                      o = n.altAxis,
                      a = void 0 === o || o,
                      l = n.fallbackPlacements,
                      c = n.padding,
                      u = n.boundary,
                      d = n.rootBoundary,
                      p = n.altBoundary,
                      h = n.flipVariations,
                      f = void 0 === h || h,
                      g = n.allowedAutoPlacements,
                      m = t.options.placement,
                      v = ee(m),
                      y =
                        l ||
                        (v === m || !f
                          ? [ce(m)]
                          : (function (e) {
                              if (ee(e) === H) return [];
                              var t = ce(e);
                              return [de(e), t, de(t)];
                            })(m)),
                      b = [m].concat(y).reduce(function (e, n) {
                        return e.concat(
                          ee(n) === H
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  i = n.placement,
                                  r = n.boundary,
                                  s = n.rootBoundary,
                                  o = n.padding,
                                  a = n.flipVariations,
                                  l = n.allowedAutoPlacements,
                                  c = void 0 === l ? V : l,
                                  u = te(i),
                                  d = u
                                    ? a
                                      ? G
                                      : G.filter(function (e) {
                                          return te(e) === u;
                                        })
                                    : B,
                                  p = d.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === p.length && (p = d);
                                var h = p.reduce(function (t, n) {
                                  return (
                                    (t[n] = ye(e, {
                                      placement: n,
                                      boundary: r,
                                      rootBoundary: s,
                                      padding: o,
                                    })[ee(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(h).sort(function (e, t) {
                                  return h[e] - h[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: u,
                                rootBoundary: d,
                                padding: c,
                                flipVariations: f,
                                allowedAutoPlacements: g,
                              })
                            : n
                        );
                      }, []),
                      w = t.rects.reference,
                      x = t.rects.popper,
                      T = new Map(),
                      S = !0,
                      C = b[0],
                      E = 0;
                    E < b.length;
                    E++
                  ) {
                    var L = b[E],
                      I = ee(L),
                      O = te(L) === q,
                      A = [$, N].indexOf(I) >= 0,
                      k = A ? "width" : "height",
                      M = ye(t, {
                        placement: L,
                        boundary: u,
                        rootBoundary: d,
                        altBoundary: p,
                        padding: c,
                      }),
                      P = A ? (O ? _ : j) : O ? N : $;
                    w[k] > x[k] && (P = ce(P));
                    var D = ce(P),
                      z = [];
                    if (
                      (s && z.push(M[I] <= 0),
                      a && z.push(M[P] <= 0, M[D] <= 0),
                      z.every(function (e) {
                        return e;
                      }))
                    ) {
                      (C = L), (S = !1);
                      break;
                    }
                    T.set(L, z);
                  }
                  if (S)
                    for (
                      var F = function (e) {
                          var t = b.find(function (t) {
                            var n = T.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (C = t), "break";
                        },
                        W = f ? 3 : 1;
                      W > 0;
                      W--
                    ) {
                      if ("break" === F(W)) break;
                    }
                  t.placement !== C &&
                    ((t.modifiersData[i]._skip = !0),
                    (t.placement = C),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            we,
            xe,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  i = t.rects.reference,
                  r = t.rects.popper,
                  s = t.modifiersData.preventOverflow,
                  o = ye(t, { elementContext: "reference" }),
                  a = ye(t, { altBoundary: !0 }),
                  l = Te(o, i),
                  c = Te(a, r, s),
                  u = Se(l),
                  d = Se(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
          ],
        }),
        Ee = "tippy-content",
        Le = "tippy-backdrop",
        Ie = "tippy-arrow",
        Oe = "tippy-svg-arrow",
        Ae = { passive: !0, capture: !0 },
        ke = function () {
          return document.body;
        };
      function Me(e, t, n) {
        if (Array.isArray(e)) {
          var i = e[t];
          return null == i ? (Array.isArray(n) ? n[t] : n) : i;
        }
        return e;
      }
      function Pe(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function De(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function ze(e, t) {
        return 0 === t
          ? e
          : function (i) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(i);
                }, t));
            };
        var n;
      }
      function $e(e) {
        return [].concat(e);
      }
      function Ne(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function _e(e) {
        return e.split("-")[0];
      }
      function je(e) {
        return [].slice.call(e);
      }
      function He(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function Be() {
        return document.createElement("div");
      }
      function qe(e) {
        return ["Element", "Fragment"].some(function (t) {
          return Pe(e, t);
        });
      }
      function Fe(e) {
        return Pe(e, "MouseEvent");
      }
      function We(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function Re(e) {
        return qe(e)
          ? [e]
          : (function (e) {
              return Pe(e, "NodeList");
            })(e)
          ? je(e)
          : Array.isArray(e)
          ? e
          : je(document.querySelectorAll(e));
      }
      function Ge(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Ve(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Xe(e) {
        var t,
          n = $e(e)[0];
        return null != n && null != (t = n.ownerDocument) && t.body
          ? n.ownerDocument
          : document;
      }
      function Ye(e, t, n) {
        var i = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[i](t, n);
        });
      }
      function Ue(e, t) {
        for (var n = t; n; ) {
          var i;
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (i = n.getRootNode())
              ? void 0
              : i.host;
        }
        return !1;
      }
      var Ze = { isTouch: !1 },
        Ke = 0;
      function Qe() {
        Ze.isTouch ||
          ((Ze.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Je));
      }
      function Je() {
        var e = performance.now();
        e - Ke < 20 &&
          ((Ze.isTouch = !1), document.removeEventListener("mousemove", Je)),
          (Ke = e);
      }
      function et() {
        var e = document.activeElement;
        if (We(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var tt =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var nt = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        it = Object.assign(
          {
            appendTo: ke,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          nt,
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        rt = Object.keys(it);
      function st(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var i,
            r = n.name,
            s = n.defaultValue;
          r && (t[r] = void 0 !== e[r] ? e[r] : null != (i = it[r]) ? i : s);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function ot(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: De(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(st(Object.assign({}, it, { plugins: t })))
                    : rt
                ).reduce(function (t, n) {
                  var i = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!i) return t;
                  if ("content" === n) t[n] = i;
                  else
                    try {
                      t[n] = JSON.parse(i);
                    } catch (e) {
                      t[n] = i;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, it.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      function at(e, t) {
        e.innerHTML = t;
      }
      function lt(e) {
        var t = Be();
        return (
          !0 === e
            ? (t.className = Ie)
            : ((t.className = Oe), qe(e) ? t.appendChild(e) : at(t, e)),
          t
        );
      }
      function ct(e, t) {
        qe(t.content)
          ? (at(e, ""), e.appendChild(t.content))
          : "function" != typeof t.content &&
            (t.allowHTML ? at(e, t.content) : (e.textContent = t.content));
      }
      function ut(e) {
        var t = e.firstElementChild,
          n = je(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(Ee);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(Ie) || e.classList.contains(Oe);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(Le);
          }),
        };
      }
      function dt(e) {
        var t = Be(),
          n = Be();
        (n.className = "tippy-box"),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var i = Be();
        function r(n, i) {
          var r = ut(t),
            s = r.box,
            o = r.content,
            a = r.arrow;
          i.theme
            ? s.setAttribute("data-theme", i.theme)
            : s.removeAttribute("data-theme"),
            "string" == typeof i.animation
              ? s.setAttribute("data-animation", i.animation)
              : s.removeAttribute("data-animation"),
            i.inertia
              ? s.setAttribute("data-inertia", "")
              : s.removeAttribute("data-inertia"),
            (s.style.maxWidth =
              "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
            i.role ? s.setAttribute("role", i.role) : s.removeAttribute("role"),
            (n.content === i.content && n.allowHTML === i.allowHTML) ||
              ct(o, e.props),
            i.arrow
              ? a
                ? n.arrow !== i.arrow &&
                  (s.removeChild(a), s.appendChild(lt(i.arrow)))
                : s.appendChild(lt(i.arrow))
              : a && s.removeChild(a);
        }
        return (
          (i.className = Ee),
          i.setAttribute("data-state", "hidden"),
          ct(i, e.props),
          t.appendChild(n),
          n.appendChild(i),
          r(e.props, e.props),
          { popper: t, onUpdate: r }
        );
      }
      dt.$$tippy = !0;
      var pt = 1,
        ht = [],
        ft = [];
      function gt(e, t) {
        var n,
          i,
          r,
          s,
          o,
          a,
          l,
          c,
          u = ot(e, Object.assign({}, it, st(He(t)))),
          d = !1,
          p = !1,
          h = !1,
          f = !1,
          g = [],
          m = ze(X, u.interactiveDebounce),
          v = pt++,
          y = (c = u.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          b = {
            id: v,
            reference: e,
            popper: Be(),
            popperInstance: null,
            props: u,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: y,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(i), cancelAnimationFrame(r);
            },
            setProps: function (t) {
              0;
              if (b.state.isDestroyed) return;
              D("onBeforeUpdate", [b, t]), G();
              var n = b.props,
                i = ot(
                  e,
                  Object.assign({}, n, He(t), { ignoreAttributes: !0 })
                );
              (b.props = i),
                R(),
                n.interactiveDebounce !== i.interactiveDebounce &&
                  (N(), (m = ze(X, i.interactiveDebounce)));
              n.triggerTarget && !i.triggerTarget
                ? $e(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : i.triggerTarget && e.removeAttribute("aria-expanded");
              $(), P(), T && T(n, i);
              b.popperInstance &&
                (K(),
                J().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              D("onAfterUpdate", [b, t]);
            },
            setContent: function (e) {
              b.setProps({ content: e });
            },
            show: function () {
              0;
              var e = b.state.isVisible,
                t = b.state.isDestroyed,
                n = !b.state.isEnabled,
                i = Ze.isTouch && !b.props.touch,
                r = Me(b.props.duration, 0, it.duration);
              if (e || t || n || i) return;
              if (O().hasAttribute("disabled")) return;
              if ((D("onShow", [b], !1), !1 === b.props.onShow(b))) return;
              (b.state.isVisible = !0), I() && (x.style.visibility = "visible");
              P(), B(), b.state.isMounted || (x.style.transition = "none");
              if (I()) {
                var s = k(),
                  o = s.box,
                  l = s.content;
                Ge([o, l], 0);
              }
              (a = function () {
                var e;
                if (b.state.isVisible && !f) {
                  if (
                    ((f = !0),
                    x.offsetHeight,
                    (x.style.transition = b.props.moveTransition),
                    I() && b.props.animation)
                  ) {
                    var t = k(),
                      n = t.box,
                      i = t.content;
                    Ge([n, i], r), Ve([n, i], "visible");
                  }
                  z(),
                    $(),
                    Ne(ft, b),
                    null == (e = b.popperInstance) || e.forceUpdate(),
                    D("onMount", [b]),
                    b.props.animation &&
                      I() &&
                      (function (e, t) {
                        F(e, t);
                      })(r, function () {
                        (b.state.isShown = !0), D("onShown", [b]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = b.props.appendTo,
                    n = O();
                  e =
                    (b.props.interactive && t === ke) || "parent" === t
                      ? n.parentNode
                      : De(t, [n]);
                  e.contains(x) || e.appendChild(x);
                  (b.state.isMounted = !0), K(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !b.state.isVisible,
                t = b.state.isDestroyed,
                n = !b.state.isEnabled,
                i = Me(b.props.duration, 1, it.duration);
              if (e || t || n) return;
              if ((D("onHide", [b], !1), !1 === b.props.onHide(b))) return;
              (b.state.isVisible = !1),
                (b.state.isShown = !1),
                (f = !1),
                (d = !1),
                I() && (x.style.visibility = "hidden");
              if ((N(), q(), P(!0), I())) {
                var r = k(),
                  s = r.box,
                  o = r.content;
                b.props.animation && (Ge([s, o], i), Ve([s, o], "hidden"));
              }
              z(),
                $(),
                b.props.animation
                  ? I() &&
                    (function (e, t) {
                      F(e, function () {
                        !b.state.isVisible &&
                          x.parentNode &&
                          x.parentNode.contains(x) &&
                          t();
                      });
                    })(i, b.unmount)
                  : b.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              A().addEventListener("mousemove", m), Ne(ht, m), m(e);
            },
            enable: function () {
              b.state.isEnabled = !0;
            },
            disable: function () {
              b.hide(), (b.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              b.state.isVisible && b.hide();
              if (!b.state.isMounted) return;
              Q(),
                J().forEach(function (e) {
                  e._tippy.unmount();
                }),
                x.parentNode && x.parentNode.removeChild(x);
              (ft = ft.filter(function (e) {
                return e !== b;
              })),
                (b.state.isMounted = !1),
                D("onHidden", [b]);
            },
            destroy: function () {
              0;
              if (b.state.isDestroyed) return;
              b.clearDelayTimeouts(),
                b.unmount(),
                G(),
                delete e._tippy,
                (b.state.isDestroyed = !0),
                D("onDestroy", [b]);
            },
          };
        if (!u.render) return b;
        var w = u.render(b),
          x = w.popper,
          T = w.onUpdate;
        x.setAttribute("data-tippy-root", ""),
          (x.id = "tippy-" + b.id),
          (b.popper = x),
          (e._tippy = b),
          (x._tippy = b);
        var S = y.map(function (e) {
            return e.fn(b);
          }),
          C = e.hasAttribute("aria-expanded");
        return (
          R(),
          $(),
          P(),
          D("onCreate", [b]),
          u.showOnCreate && ee(),
          x.addEventListener("mouseenter", function () {
            b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
          }),
          x.addEventListener("mouseleave", function () {
            b.props.interactive &&
              b.props.trigger.indexOf("mouseenter") >= 0 &&
              A().addEventListener("mousemove", m);
          }),
          b
        );
        function E() {
          var e = b.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function L() {
          return "hold" === E()[0];
        }
        function I() {
          var e;
          return !(null == (e = b.props.render) || !e.$$tippy);
        }
        function O() {
          return l || e;
        }
        function A() {
          var e = O().parentNode;
          return e ? Xe(e) : document;
        }
        function k() {
          return ut(x);
        }
        function M(e) {
          return (b.state.isMounted && !b.state.isVisible) ||
            Ze.isTouch ||
            (s && "focus" === s.type)
            ? 0
            : Me(b.props.delay, e ? 0 : 1, it.delay);
        }
        function P(e) {
          void 0 === e && (e = !1),
            (x.style.pointerEvents = b.props.interactive && !e ? "" : "none"),
            (x.style.zIndex = "" + b.props.zIndex);
        }
        function D(e, t, n) {
          var i;
          (void 0 === n && (n = !0),
          S.forEach(function (n) {
            n[e] && n[e].apply(n, t);
          }),
          n) && (i = b.props)[e].apply(i, t);
        }
        function z() {
          var t = b.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              i = x.id;
            $e(b.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (b.state.isVisible) e.setAttribute(n, t ? t + " " + i : i);
              else {
                var r = t && t.replace(i, "").trim();
                r ? e.setAttribute(n, r) : e.removeAttribute(n);
              }
            });
          }
        }
        function $() {
          !C &&
            b.props.aria.expanded &&
            $e(b.props.triggerTarget || e).forEach(function (e) {
              b.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    b.state.isVisible && e === O() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function N() {
          A().removeEventListener("mousemove", m),
            (ht = ht.filter(function (e) {
              return e !== m;
            }));
        }
        function _(t) {
          if (!Ze.isTouch || (!h && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!b.props.interactive || !Ue(x, n)) {
              if (
                $e(b.props.triggerTarget || e).some(function (e) {
                  return Ue(e, n);
                })
              ) {
                if (Ze.isTouch) return;
                if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                  return;
              } else D("onClickOutside", [b, t]);
              !0 === b.props.hideOnClick &&
                (b.clearDelayTimeouts(),
                b.hide(),
                (p = !0),
                setTimeout(function () {
                  p = !1;
                }),
                b.state.isMounted || q());
            }
          }
        }
        function j() {
          h = !0;
        }
        function H() {
          h = !1;
        }
        function B() {
          var e = A();
          e.addEventListener("mousedown", _, !0),
            e.addEventListener("touchend", _, Ae),
            e.addEventListener("touchstart", H, Ae),
            e.addEventListener("touchmove", j, Ae);
        }
        function q() {
          var e = A();
          e.removeEventListener("mousedown", _, !0),
            e.removeEventListener("touchend", _, Ae),
            e.removeEventListener("touchstart", H, Ae),
            e.removeEventListener("touchmove", j, Ae);
        }
        function F(e, t) {
          var n = k().box;
          function i(e) {
            e.target === n && (Ye(n, "remove", i), t());
          }
          if (0 === e) return t();
          Ye(n, "remove", o), Ye(n, "add", i), (o = i);
        }
        function W(t, n, i) {
          void 0 === i && (i = !1),
            $e(b.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, i),
                g.push({ node: e, eventType: t, handler: n, options: i });
            });
        }
        function R() {
          L() &&
            (W("touchstart", V, { passive: !0 }),
            W("touchend", Y, { passive: !0 })),
            (function (e) {
              return e.split(/\s+/).filter(Boolean);
            })(b.props.trigger).forEach(function (e) {
              if ("manual" !== e)
                switch ((W(e, V), e)) {
                  case "mouseenter":
                    W("mouseleave", Y);
                    break;
                  case "focus":
                    W(tt ? "focusout" : "blur", U);
                    break;
                  case "focusin":
                    W("focusout", U);
                }
            });
        }
        function G() {
          g.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              i = e.handler,
              r = e.options;
            t.removeEventListener(n, i, r);
          }),
            (g = []);
        }
        function V(e) {
          var t,
            n = !1;
          if (b.state.isEnabled && !Z(e) && !p) {
            var i = "focus" === (null == (t = s) ? void 0 : t.type);
            (s = e),
              (l = e.currentTarget),
              $(),
              !b.state.isVisible &&
                Fe(e) &&
                ht.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (b.props.trigger.indexOf("mouseenter") < 0 || d) &&
              !1 !== b.props.hideOnClick &&
              b.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (d = !n),
              n && !i && te(e);
          }
        }
        function X(e) {
          var t = e.target,
            n = O().contains(t) || x.contains(t);
          if ("mousemove" !== e.type || !n) {
            var i = J()
              .concat(x)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: u,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                i = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  r = e.popperState,
                  s = e.props.interactiveBorder,
                  o = _e(r.placement),
                  a = r.modifiersData.offset;
                if (!a) return !0;
                var l = "bottom" === o ? a.top.y : 0,
                  c = "top" === o ? a.bottom.y : 0,
                  u = "right" === o ? a.left.x : 0,
                  d = "left" === o ? a.right.x : 0,
                  p = t.top - i + l > s,
                  h = i - t.bottom - c > s,
                  f = t.left - n + u > s,
                  g = n - t.right - d > s;
                return p || h || f || g;
              });
            })(i, e) && (N(), te(e));
          }
        }
        function Y(e) {
          Z(e) ||
            (b.props.trigger.indexOf("click") >= 0 && d) ||
            (b.props.interactive ? b.hideWithInteractivity(e) : te(e));
        }
        function U(e) {
          (b.props.trigger.indexOf("focusin") < 0 && e.target !== O()) ||
            (b.props.interactive &&
              e.relatedTarget &&
              x.contains(e.relatedTarget)) ||
            te(e);
        }
        function Z(e) {
          return !!Ze.isTouch && L() !== e.type.indexOf("touch") >= 0;
        }
        function K() {
          Q();
          var t = b.props,
            n = t.popperOptions,
            i = t.placement,
            r = t.offset,
            s = t.getReferenceClientRect,
            o = t.moveTransition,
            l = I() ? ut(x).arrow : null,
            c = s
              ? {
                  getBoundingClientRect: s,
                  contextElement: s.contextElement || O(),
                }
              : e,
            u = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (I()) {
                  var n = k().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? n.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? n.setAttribute("data-" + e, "")
                        : n.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            d = [
              { name: "offset", options: { offset: r } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !o } },
              u,
            ];
          I() &&
            l &&
            d.push({ name: "arrow", options: { element: l, padding: 3 } }),
            d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
            (b.popperInstance = Ce(
              c,
              x,
              Object.assign({}, n, {
                placement: i,
                onFirstUpdate: a,
                modifiers: d,
              })
            ));
        }
        function Q() {
          b.popperInstance &&
            (b.popperInstance.destroy(), (b.popperInstance = null));
        }
        function J() {
          return je(x.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          b.clearDelayTimeouts(), e && D("onTrigger", [b, e]), B();
          var t = M(!0),
            i = E(),
            r = i[0],
            s = i[1];
          Ze.isTouch && "hold" === r && s && (t = s),
            t
              ? (n = setTimeout(function () {
                  b.show();
                }, t))
              : b.show();
        }
        function te(e) {
          if (
            (b.clearDelayTimeouts(),
            D("onUntrigger", [b, e]),
            b.state.isVisible)
          ) {
            if (
              !(
                b.props.trigger.indexOf("mouseenter") >= 0 &&
                b.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                d
              )
            ) {
              var t = M(!1);
              t
                ? (i = setTimeout(function () {
                    b.state.isVisible && b.hide();
                  }, t))
                : (r = requestAnimationFrame(function () {
                    b.hide();
                  }));
            }
          } else q();
        }
      }
      function mt(e, t) {
        void 0 === t && (t = {});
        var n = it.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Qe, Ae),
          window.addEventListener("blur", et);
        var i = Object.assign({}, t, { plugins: n }),
          r = Re(e).reduce(function (e, t) {
            var n = t && gt(t, i);
            return n && e.push(n), e;
          }, []);
        return qe(e) ? r[0] : r;
      }
      (mt.defaultProps = it),
        (mt.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            it[t] = e[t];
          });
        }),
        (mt.currentInput = Ze);
      Object.assign({}, oe, {
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
        },
      });
      mt.setDefaultProps({ render: dt });
      function vt(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function yt(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          void 0 === e[n]
            ? (e[n] = t[n])
            : vt(t[n]) &&
              vt(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              yt(e[n], t[n]);
        });
      }
      mt("[data-tippy-content]", {});
      const bt = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function wt() {
        const e = "undefined" != typeof document ? document : {};
        return yt(e, bt), e;
      }
      const xt = {
        document: bt,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function Tt() {
        const e = "undefined" != typeof window ? window : {};
        return yt(e, xt), e;
      }
      class St extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function Ct(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...Ct(e)) : t.push(e);
          }),
          t
        );
      }
      function Et(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function Lt(e, t) {
        const n = Tt(),
          i = wt();
        let r = [];
        if (!t && e instanceof St) return e;
        if (!e) return new St(r);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"),
              0 === n.indexOf("<tr") && (e = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
              0 === n.indexOf("<tbody") && (e = "table"),
              0 === n.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1)
              r.push(t.childNodes[e]);
          } else
            r = (function (e, t) {
              if ("string" != typeof e) return [e];
              const n = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) n.push(i[e]);
              return n;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === n || e === i) r.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof St) return e;
          r = e;
        }
        return new St(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(r)
        );
      }
      Lt.fn = St.prototype;
      const It = "resize scroll".split(" ");
      function Ot(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              It.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : Lt(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      Ot("click"),
        Ot("blur"),
        Ot("focus"),
        Ot("focusin"),
        Ot("focusout"),
        Ot("keyup"),
        Ot("keydown"),
        Ot("keypress"),
        Ot("submit"),
        Ot("change"),
        Ot("mousedown"),
        Ot("mousemove"),
        Ot("mouseup"),
        Ot("mouseenter"),
        Ot("mouseleave"),
        Ot("mouseout"),
        Ot("mouseover"),
        Ot("touchstart"),
        Ot("touchend"),
        Ot("touchmove"),
        Ot("resize"),
        Ot("scroll");
      const At = {
        addClass: function (...e) {
          const t = Ct(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = Ct(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = Ct(e.map((e) => e.split(" ")));
          return (
            Et(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = Ct(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, n, i, r] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const r = e.target.dom7EventData || [];
            if ((r.indexOf(e) < 0 && r.unshift(e), Lt(t).is(n))) i.apply(t, r);
            else {
              const e = Lt(t).parents();
              for (let t = 0; t < e.length; t += 1)
                Lt(e[t]).is(n) && i.apply(e[t], r);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (n)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  t.addEventListener(e, s, r);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                  t.addEventListener(e, o, r);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, i, r] = e;
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const s = t.split(" ");
          for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let o;
              if (
                (!n && s.dom7Listeners
                  ? (o = s.dom7Listeners[t])
                  : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const n = o[e];
                  (i && n.listener === i) ||
                  (i &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === i)
                    ? (s.removeEventListener(t, n.proxyListener, r),
                      o.splice(e, 1))
                    : i ||
                      (s.removeEventListener(t, n.proxyListener, r),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = Tt(),
            n = e[0].split(" "),
            i = e[1];
          for (let r = 0; r < n.length; r += 1) {
            const s = n[r];
            for (let n = 0; n < this.length; n += 1) {
              const r = this[n];
              if (t.CustomEvent) {
                const n = new t.CustomEvent(s, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (r.dom7EventData = e.filter((e, t) => t > 0)),
                  r.dispatchEvent(n),
                  (r.dom7EventData = []),
                  delete r.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function n(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = Tt();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = Tt(),
              t = wt(),
              n = this[0],
              i = n.getBoundingClientRect(),
              r = t.body,
              s = n.clientTop || r.clientTop || 0,
              o = n.clientLeft || r.clientLeft || 0,
              a = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return { top: i.top + a - s, left: i.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const n = Tt();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = Tt(),
            n = wt(),
            i = this[0];
          let r, s;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (r = Lt(e), s = 0; s < r.length; s += 1)
              if (r[s] === i) return !0;
            return !1;
          }
          if (e === n) return i === n;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof St) {
            for (r = e.nodeType ? [e] : e, s = 0; s < r.length; s += 1)
              if (r[s] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return Lt([]);
          if (e < 0) {
            const n = t + e;
            return Lt(n < 0 ? [] : [this[n]]);
          }
          return Lt([this[e]]);
        },
        append: function (...e) {
          let t;
          const n = wt();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = n.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof St)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = wt();
          let n, i;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const r = t.createElement("div");
              for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
                this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
            } else if (e instanceof St)
              for (i = 0; i < e.length; i += 1)
                this[n].insertBefore(e[i], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                Lt(this[0].nextElementSibling).is(e)
                ? Lt([this[0].nextElementSibling])
                : Lt([])
              : this[0].nextElementSibling
              ? Lt([this[0].nextElementSibling])
              : Lt([])
            : Lt([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Lt([]);
          for (; n.nextElementSibling; ) {
            const i = n.nextElementSibling;
            e ? Lt(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return Lt(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && Lt(t.previousElementSibling).is(e)
                ? Lt([t.previousElementSibling])
                : Lt([])
              : t.previousElementSibling
              ? Lt([t.previousElementSibling])
              : Lt([]);
          }
          return Lt([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Lt([]);
          for (; n.previousElementSibling; ) {
            const i = n.previousElementSibling;
            e ? Lt(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return Lt(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? Lt(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return Lt(t);
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode;
            for (; i; )
              e ? Lt(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return Lt(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? Lt([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return Lt(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].children;
            for (let n = 0; n < i.length; n += 1)
              (e && !Lt(i[n]).is(e)) || t.push(i[n]);
          }
          return Lt(t);
        },
        filter: function (e) {
          return Lt(Et(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(At).forEach((e) => {
        Object.defineProperty(Lt.fn, e, { value: At[e], writable: !0 });
      });
      const kt = Lt;
      function Mt(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function Pt() {
        return Date.now();
      }
      function Dt(e, t) {
        void 0 === t && (t = "x");
        const n = Tt();
        let i, r, s;
        const o = (function (e) {
          const t = Tt();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((r = o.transform || o.webkitTransform),
              r.split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = s.toString().split(","))),
          "x" === t &&
            (r = n.WebKitCSSMatrix
              ? s.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (r = n.WebKitCSSMatrix
              ? s.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          r || 0
        );
      }
      function zt(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function $t(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function Nt() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && !$t(i)) {
            const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, r = n.length; t < r; t += 1) {
              const r = n[t],
                s = Object.getOwnPropertyDescriptor(i, r);
              void 0 !== s &&
                s.enumerable &&
                (zt(e[r]) && zt(i[r])
                  ? i[r].__swiper__
                    ? (e[r] = i[r])
                    : Nt(e[r], i[r])
                  : !zt(e[r]) && zt(i[r])
                  ? ((e[r] = {}),
                    i[r].__swiper__ ? (e[r] = i[r]) : Nt(e[r], i[r]))
                  : (e[r] = i[r]));
            }
          }
        }
        return e;
      }
      function _t(e, t, n) {
        e.style.setProperty(t, n);
      }
      function jt(e) {
        let { swiper: t, targetPosition: n, side: i } = e;
        const r = Tt(),
          s = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(t.cssModeFrameID);
        const c = n > s ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          d = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = s + c * (n - s);
            if ((u(p, n) && (p = n), t.wrapperEl.scrollTo({ [i]: p }), u(p, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: p });
                }),
                void r.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = r.requestAnimationFrame(d);
          };
        d();
      }
      let Ht, Bt, qt;
      function Ft() {
        return (
          Ht ||
            (Ht = (function () {
              const e = Tt(),
                t = wt();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const n = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Ht
        );
      }
      function Wt(e) {
        return (
          void 0 === e && (e = {}),
          Bt ||
            (Bt = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = Ft(),
                i = Tt(),
                r = i.navigator.platform,
                s = t || i.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = i.screen.width,
                l = i.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = s.match(/(iPad).*OS\s([\d_]+)/);
              const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === r;
              let f = "MacIntel" === r;
              return (
                !u &&
                  f &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((u = s.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (f = !1)),
                c && !h && ((o.os = "android"), (o.android = !0)),
                (u || p || d) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          Bt
        );
      }
      function Rt() {
        return (
          qt ||
            (qt = (function () {
              const e = Tt();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          qt
        );
      }
      const Gt = {
        on(e, t, n) {
          const i = this;
          if ("function" != typeof t) return i;
          const r = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][r](t);
            }),
            i
          );
        },
        once(e, t, n) {
          const i = this;
          if ("function" != typeof t) return i;
          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
              s[o] = arguments[o];
            t.apply(i, s);
          }
          return (r.__emitterProxy = t), i.on(e, r, n);
        },
        onAny(e, t) {
          const n = this;
          if ("function" != typeof e) return n;
          const i = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((i, r) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(r, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners) return e;
          let t, n, i;
          for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
            s[o] = arguments[o];
          "string" == typeof s[0] || Array.isArray(s[0])
            ? ((t = s[0]), (n = s.slice(1, s.length)), (i = e))
            : ((t = s[0].events), (n = s[0].data), (i = s[0].context || e)),
            n.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, n);
                  });
            }),
            e
          );
        },
      };
      const Vt = {
        updateSize: function () {
          const e = this;
          let t, n;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (n =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const i = e.params,
            { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            u = r.children(`.${e.params.slideClass}`),
            d = l ? e.virtual.slides.length : u.length;
          let p = [];
          const h = [],
            f = [];
          let g = i.slidesOffsetBefore;
          "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
          let m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = i.spaceBetween,
            w = -g,
            x = 0,
            T = 0;
          if (void 0 === s) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * s),
            (e.virtualSize = -b),
            o
              ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (_t(e.wrapperEl, "--swiper-centered-offset-before", ""),
              _t(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const S = i.grid && i.grid.rows > 1 && e.grid;
          let C;
          S && e.grid.initSlides(d);
          const E =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let r = 0; r < d; r += 1) {
            C = 0;
            const o = u.eq(r);
            if (
              (S && e.grid.updateSlide(r, o, d, t), "none" !== o.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                E && (u[r].style[t("width")] = "");
                const s = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = n(s, "width"),
                    t = n(s, "padding-left"),
                    i = n(s, "padding-right"),
                    r = n(s, "margin-left"),
                    a = n(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + r + a;
                  else {
                    const { clientWidth: n, offsetWidth: s } = o[0];
                    C = e + t + i + r + a + (s - n);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  i.roundLengths && (C = Math.floor(C));
              } else
                (C = (s - (i.slidesPerView - 1) * b) / i.slidesPerView),
                  i.roundLengths && (C = Math.floor(C)),
                  u[r] && (u[r].style[t("width")] = `${C}px`);
              u[r] && (u[r].swiperSlideSize = C),
                f.push(C),
                i.centeredSlides
                  ? ((w = w + C / 2 + x / 2 + b),
                    0 === x && 0 !== r && (w = w - s / 2 - b),
                    0 === r && (w = w - s / 2 - b),
                    Math.abs(w) < 0.001 && (w = 0),
                    i.roundLengths && (w = Math.floor(w)),
                    T % i.slidesPerGroup == 0 && p.push(w),
                    h.push(w))
                  : (i.roundLengths && (w = Math.floor(w)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(w),
                    h.push(w),
                    (w = w + C + b)),
                (e.virtualSize += C + b),
                (x = C),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + m),
            o &&
              a &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            S && e.grid.updateWrapperSize(C, p, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let r = p[n];
              i.roundLengths && (r = Math.floor(r)),
                p[n] <= e.virtualSize - s && t.push(r);
            }
            (p = t),
              Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - s);
          }
          if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
            const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            u.filter((e, t) => !i.cssMode || t !== u.length - 1).css({
              [n]: `${b}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - s;
            p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              p.forEach((e, n) => {
                p[n] = e - t;
              }),
                h.forEach((e, n) => {
                  h[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: u,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            _t(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              _t(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (d !== c && e.emit("slidesLengthChange"),
            p.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== y && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              n = e.$el.hasClass(t);
            d <= i.maxBackfaceHiddenSlides
              ? n || e.$el.addClass(t)
              : n && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            i = t.virtual && t.params.virtual.enabled;
          let r,
            s = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                n.push(e);
              });
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (r = 0; r < n.length; r += 1)
            if (void 0 !== n[r]) {
              const e = n[r].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: i, rtlTranslate: r, snapGrid: s } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          r && (o = e),
            i.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const a = i[e];
            let l = a.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              u =
                (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              d = -(o - l),
              p = d + t.slidesSizesGrid[e];
            ((d >= 0 && d < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(n.slideVisibleClass)),
              (a.progress = r ? -c : c),
              (a.originalProgress = r ? -u : u);
          }
          t.visibleSlides = kt(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === i
            ? ((r = 0), (s = !0), (o = !0))
            : ((r = (e - t.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
            Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: i,
              activeIndex: r,
              realIndex: s,
            } = e,
            o = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${r}"]`
                )
              : t.eq(r)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: r,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            u = e;
          if (void 0 === u) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (u = e)
                  : n >= i[e] && n < i[e + 1] && (u = e + 1)
                : n >= i[e] && (u = e);
            s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }
          if (r.indexOf(n) >= 0) c = r.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, u);
            c = e + Math.floor((u - e) / s.slidesPerGroup);
          }
          if ((c >= r.length && (c = r.length - 1), u === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const d = parseInt(
            t.slides.eq(u).attr("data-swiper-slide-index") || u,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: d,
            previousIndex: o,
            activeIndex: u,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            i = kt(e).closest(`.${n.slideClass}`)[0];
          let r,
            s = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (s = !0), (r = e);
                break;
              }
          if (!i || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  kt(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = r),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const Xt = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: i,
            $wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          let s = Dt(r[0], e);
          return n && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: i,
              params: r,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = n;
          let l,
            c = 0,
            u = 0;
          n.isHorizontal() ? (c = i ? -e : e) : (u = e),
            r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
            r.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -c : -u)
              : r.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${u}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? c : u);
          const d = n.maxTranslate() - n.minTranslate();
          (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
            l !== a && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === i && (i = !0);
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let u;
          if (
            ((u = i && e > l ? l : i && e < c ? c : e),
            s.updateProgress(u),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!s.support.smoothScroll)
                return (
                  jt({
                    swiper: s,
                    targetPosition: -u,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, r),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, r),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        n && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Yt(e) {
        let { swiper: t, runCallbacks: n, direction: i, step: r } = e;
        const { activeIndex: s, previousIndex: o } = t;
        let a = i;
        if (
          (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
          t.emit(`transition${r}`),
          n && s !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`),
            "next" === a
              ? t.emit(`slideNextTransition${r}`)
              : t.emit(`slidePrevTransition${r}`);
        }
      }
      const Ut = {
        slideTo: function (e, t, n, i, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!f && !i && !r)
          )
            return !1;
          const g = Math.min(s.params.slidesPerGroupSkip, o);
          let m = g + Math.floor((o - g) / s.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (d || a.initialSlide || 0) === (u || 0) &&
              n &&
              s.emit("beforeSlideChangeStart");
          const v = -l[m];
          if ((s.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= n && t < i - (i - n) / 2
                  ? (o = e)
                  : t >= n && t < i && (o = e + 1)
                : t >= n && (o = e);
            }
          if (s.initialized && o !== d) {
            if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              v > s.translate &&
              v > s.maxTranslate() &&
              (d || 0) !== o
            )
              return !1;
          }
          let y;
          if (
            ((y = o > d ? "next" : o < d ? "prev" : "reset"),
            (p && -v === s.translate) || (!p && v === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(v),
              "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              n = p ? v : -v;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  jt({
                    swiper: s,
                    targetPosition: n,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(v),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(n, y),
            0 === t
              ? s.transitionEnd(n, y)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, y));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          const r = this;
          let s = e;
          return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: r, enabled: s, params: o } = i;
          if (!s) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (r && o.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return o.rewind && i.isEnd
            ? i.slideTo(0, e, t, n)
            : i.slideTo(i.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: r,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (r.loop) {
            if (s && r.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const d = u(l ? i.translate : -i.translate),
            p = o.map((e) => u(e));
          let h = o[p.indexOf(d) - 1];
          if (void 0 === h && r.cssMode) {
            let e;
            o.forEach((t, n) => {
              d >= t && (e = n);
            }),
              void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== h &&
              ((f = a.indexOf(h)),
              f < 0 && (f = i.activeIndex - 1),
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            r.rewind && i.isBeginning)
          ) {
            const r =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(r, e, t, n);
          }
          return i.slideTo(f, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const r = this;
          let s = r.activeIndex;
          const o = Math.min(r.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[a]) {
            const e = r.snapGrid[a];
            l - e > (r.snapGrid[a + 1] - e) * i &&
              (s += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[a - 1];
            l - e <= (r.snapGrid[a] - e) * i && (s -= r.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, r.slidesGrid.length - 1)),
            r.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              kt(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - i / 2 ||
                  s > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    Mt(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - i
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  Mt(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      const Zt = {
        loopCreate: function () {
          const e = this,
            t = wt(),
            { params: n, $wrapperEl: i } = e,
            r = i.children().length > 0 ? kt(i.children()[0].parentNode) : i;
          r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let s = r.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = kt(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                r.append(e);
              }
              s = r.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          const o = [],
            a = [];
          s.each((t, n) => {
            const i = kt(t);
            n < e.loopedSlides && a.push(t),
              n < s.length && n >= s.length - e.loopedSlides && o.push(t),
              i.attr("data-swiper-slide-index", n);
          });
          for (let e = 0; e < a.length; e += 1)
            r.append(kt(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            r.prepend(kt(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: i,
            allowSlidePrev: r,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < i) {
            (l = n.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= n.length - i) {
            (l = -n.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
      function Kt(e) {
        const t = this,
          n = wt(),
          i = Tt(),
          r = t.touchEventsData,
          { params: s, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = kt(l.target);
        if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((r.isTouchEvent = "touchstart" === l.type),
          !r.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!r.isTouchEvent && "button" in l && l.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        !!s.noSwipingClass &&
          "" !== s.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = kt(e.path[0]));
        const u = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          d = !(!l.target || !l.target.shadowRoot);
        if (
          s.noSwiping &&
          (d
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    return n && n !== wt() && n !== Tt()
                      ? (n.assignedSlot && (n = n.assignedSlot),
                        n.closest(e) || t(n.getRootNode().host))
                      : null;
                  })(t)
                );
              })(u, l.target)
            : c.closest(u)[0])
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const p = o.currentX,
          h = o.currentY,
          f = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          g = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (f && (p <= g || p >= i.innerWidth - g)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        if (
          (Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = p),
          (o.startY = h),
          (r.touchStartTime = Pt()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (r.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(r.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (r.isTouched = !1)),
            n.activeElement &&
              kt(n.activeElement).is(r.focusableElements) &&
              n.activeElement !== c[0] &&
              n.activeElement.blur();
          const i = e && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function Qt(e) {
        const t = wt(),
          n = this,
          i = n.touchEventsData,
          { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            n.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          u = "touchmove" === l.type ? c.pageX : l.pageX,
          d = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (s.startX = u), void (s.startY = d);
        if (!n.allowTouchMove)
          return (
            kt(l.target).is(i.focusableElements) || (n.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(s, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d,
              }),
              (i.touchStartTime = Pt()))
            )
          );
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (n.isVertical()) {
            if (
              (d < s.startY && n.translate <= n.maxTranslate()) ||
              (d > s.startY && n.translate >= n.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (u < s.startX && n.translate <= n.maxTranslate()) ||
            (u > s.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          kt(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (n.allowClick = !1);
        if (
          (i.allowTouchCallbacks && n.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (s.currentX = u), (s.currentY = d);
        const p = s.currentX - s.startX,
          h = s.currentY - s.startY;
        if (
          n.params.threshold &&
          Math.sqrt(p ** 2 + h ** 2) < n.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (n.isHorizontal() && s.currentY === s.startY) ||
          (n.isVertical() && s.currentX === s.startX)
            ? (i.isScrolling = !1)
            : p * p + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
              (i.isScrolling = n.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (i.isScrolling && n.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (n.allowClick = !1),
          !r.cssMode && l.cancelable && l.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
          i.isMoved ||
            (r.loop && !r.cssMode && n.loopFix(),
            (i.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", l)),
          n.emit("sliderMove", l),
          (i.isMoved = !0);
        let f = n.isHorizontal() ? p : h;
        (s.diff = f),
          (f *= r.touchRatio),
          o && (f = -f),
          (n.swipeDirection = f > 0 ? "prev" : "next"),
          (i.currentTranslate = f + i.startTranslate);
        let g = !0,
          m = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (m = 0),
          f > 0 && i.currentTranslate > n.minTranslate()
            ? ((g = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + i.startTranslate + f) ** m))
            : f < 0 &&
              i.currentTranslate < n.maxTranslate() &&
              ((g = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - i.startTranslate - f) ** m)),
          g && (l.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(f) > r.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (i.currentTranslate = i.startTranslate),
              void (s.diff = n.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
            r.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            r.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(i.currentTranslate),
          n.setTranslate(i.currentTranslate));
      }
      function Jt(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: r,
            rtlTranslate: s,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = Pt(),
          u = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            u < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((n.lastClickTime = Pt()),
          Mt(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let d;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (d = i.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: d });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? d >= o[e] && d < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
            : d >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        let f = null,
          g = null;
        i.rewind &&
          (t.isBeginning
            ? (g =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (f = 0));
        const m = (d - o[p]) / h,
          v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? f : p + v)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (m > 1 - i.longSwipesRatio
                ? t.slideTo(p + v)
                : null !== g && m < 0 && Math.abs(m) > i.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(p));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + v)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
              "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p));
        }
      }
      function en() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = i),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function tn(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function nn() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
        if (!i) return;
        let r;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let rn = !1;
      function sn() {}
      const on = (e, t) => {
        const n = wt(),
          {
            params: i,
            touchEvents: r,
            el: s,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!i.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== r.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[u](r.start, e.onTouchStart, t),
            s[u](
              r.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            s[u](r.end, e.onTouchEnd, t),
            r.cancel && s[u](r.cancel, e.onTouchEnd, t);
        } else
          s[u](r.start, e.onTouchStart, !1),
            n[u](r.move, e.onTouchMove, c),
            n[u](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          s[u]("click", e.onClick, !0),
          i.cssMode && o[u]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[d](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                en,
                !0
              )
            : e[d]("observerUpdate", en, !0);
      };
      const an = {
          attachEvents: function () {
            const e = this,
              t = wt(),
              { params: n, support: i } = e;
            (e.onTouchStart = Kt.bind(e)),
              (e.onTouchMove = Qt.bind(e)),
              (e.onTouchEnd = Jt.bind(e)),
              n.cssMode && (e.onScroll = nn.bind(e)),
              (e.onClick = tn.bind(e)),
              i.touch &&
                !rn &&
                (t.addEventListener("touchstart", sn), (rn = !0)),
              on(e, "on");
          },
          detachEvents: function () {
            on(this, "off");
          },
        },
        ln = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const cn = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: n,
              loopedSlides: i = 0,
              params: r,
              $el: s,
            } = e,
            o = r.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = ln(e, r),
            u = ln(e, l),
            d = r.enabled;
          c && !u
            ? (s.removeClass(
                `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              u &&
              (s.addClass(`${r.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === r.grid.fill)) &&
                s.addClass(`${r.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const p = l.direction && l.direction !== r.direction,
            h = r.loop && (l.slidesPerView !== r.slidesPerView || p);
          p && n && e.changeDirection(), Nt(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            d && !f ? e.disable() : !d && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            h &&
              n &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let i = !1;
          const r = Tt(),
            s = "window" === t ? r.innerHeight : n.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: s, value: a } = o[e];
            "window" === t
              ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
              : a <= n.clientWidth && (i = s);
          }
          return i || "max";
        },
      };
      const un = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: i,
              $el: r,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && n.push(t + i);
                      })
                    : "string" == typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: i },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
              ],
              n.containerModifierClass
            );
          t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const dn = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function pn(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const i = Object.keys(n)[0],
            r = n[i];
          "object" == typeof r && null !== r
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in r
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  Nt(t, n))
                : Nt(t, n))
            : Nt(t, n);
        };
      }
      const hn = {
          eventsEmitter: Gt,
          update: Vt,
          translate: Xt,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              i.cssMode ||
                (i.autoHeight && n.updateAutoHeight(),
                Yt({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              (n.animating = !1),
                i.cssMode ||
                  (n.setTransition(0),
                  Yt({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Ut,
          loop: Zt,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: an,
          breakpoints: cn,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: i } = n;
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: un,
          images: {
            loadImage: function (e, t, n, i, r, s) {
              const o = Tt();
              let a;
              function l() {
                s && s();
              }
              kt(e).parent("picture")[0] || (e.complete && r)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        fn = {};
      class gn {
        constructor() {
          let e, t;
          for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = Nt({}, t)),
            e && !t.el && (t.el = e),
            t.el && kt(t.el).length > 1)
          ) {
            const e = [];
            return (
              kt(t.el).each((n) => {
                const i = Nt({}, t, { el: n });
                e.push(new gn(i));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = Ft()),
            (s.device = Wt({ userAgent: t.userAgent })),
            (s.browser = Rt()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules);
          const o = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: pn(t, o),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const a = Nt({}, dn, o);
          return (
            (s.params = Nt({}, a, fn, t)),
            (s.originalParams = Nt({}, s.params)),
            (s.passedParams = Nt({}, t)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = kt),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: e,
              classNames: [],
              slides: kt(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: Pt(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = n.minTranslate(),
            r = (n.maxTranslate() - i) * e + i;
          n.translateTo(r, void 0 === t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n) => {
            const i = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let n = a + 1; n < i.length; n += 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1) {
              (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              r[a] - r[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let r;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((r =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                r || i()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            i = n.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${i}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = kt(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = kt(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => n.children(e)), t;
            }
            return n.children(i());
          })();
          if (0 === r.length && t.params.createElements) {
            const e = wt().createElement("div");
            (r = kt(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                r.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: r,
              wrapperEl: r[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
              wrongRTL: "-webkit-box" === r.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: i, $el: r, $wrapperEl: s, slides: o } = n;
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              i.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                r.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          Nt(fn, e);
        }
        static get extendedDefaults() {
          return fn;
        }
        static get defaults() {
          return dn;
        }
        static installModule(e) {
          gn.prototype.__modules__ || (gn.prototype.__modules__ = []);
          const t = gn.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => gn.installModule(e)), gn)
            : (gn.installModule(e), gn);
        }
      }
      Object.keys(hn).forEach((e) => {
        Object.keys(hn[e]).forEach((t) => {
          gn.prototype[t] = hn[e][t];
        });
      }),
        gn.use([
          function (e) {
            let { swiper: t, on: n, emit: i } = e;
            const r = Tt();
            let s = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && void 0 !== r.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver((e) => {
                    o = r.requestAnimationFrame(() => {
                      const { width: n, height: i } = t;
                      let r = n,
                        s = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: i,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((r = i ? i.width : (n[0] || n).inlineSize),
                          (s = i ? i.height : (n[0] || n).blockSize));
                      }),
                        (r === n && s === i) || a();
                    });
                  })),
                  s.observe(t.el))
                : (r.addEventListener("resize", a),
                  r.addEventListener("orientationchange", l));
            }),
              n("destroy", () => {
                o && r.cancelAnimationFrame(o),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  r.removeEventListener("resize", a),
                  r.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: i, emit: r } = e;
            const s = [],
              o = Tt(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const t = function () {
                      r("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  s.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      const mn = gn;
      function vn(e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        n({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let s = !1,
          o = !1;
        function a(e, n) {
          void 0 === n && (n = !0);
          const i = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            o = s.find(
              `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
            );
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            o.push(s[0]),
            0 !== o.length &&
              o.each((e) => {
                const o = kt(e);
                o.addClass(i.loadingClass);
                const l = o.attr("data-background"),
                  c = o.attr("data-src"),
                  u = o.attr("data-srcset"),
                  d = o.attr("data-sizes"),
                  p = o.parent("picture");
                t.loadImage(o[0], c || l, u, d, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", `url("${l}")`),
                          o.removeAttr("data-background"))
                        : (u &&
                            (o.attr("srcset", u), o.removeAttr("data-srcset")),
                          d && (o.attr("sizes", d), o.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each((e) => {
                              const t = kt(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (o.attr("src", c), o.removeAttr("data-src"))),
                      o.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find(`.${i.preloaderClass}`).remove(),
                      t.params.loop && n)
                    ) {
                      const e = s.attr("data-swiper-slide-index");
                      if (s.hasClass(t.params.slideDuplicateClass)) {
                        a(
                          t.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        );
                      } else {
                        a(
                          t.$wrapperEl
                            .children(
                              `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            )
                            .index(),
                          !1
                        );
                      }
                    }
                    r("lazyImageReady", s[0], o[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  r("lazyImageLoad", s[0], o[0]);
              });
        }
        function l() {
          const { $wrapperEl: e, params: n, slides: i, activeIndex: r } = t,
            s = t.virtual && n.virtual.enabled,
            l = n.lazy;
          let c = n.slidesPerView;
          function u(t) {
            if (s) {
              if (
                e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (i[t]) return !0;
            return !1;
          }
          function d(e) {
            return s ? kt(e).attr("data-swiper-slide-index") : kt(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            o || (o = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${n.slideVisibleClass}`).each((e) => {
              a(s ? kt(e).attr("data-swiper-slide-index") : kt(e).index());
            });
          else if (c > 1) for (let e = r; e < r + c; e += 1) u(e) && a(e);
          else a(r);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = c,
                n = Math.min(r + t + Math.max(e, t), i.length),
                s = Math.max(r - Math.max(t, e), 0);
              for (let e = r + c; e < n; e += 1) u(e) && a(e);
              for (let e = s; e < r; e += 1) u(e) && a(e);
            } else {
              const t = e.children(`.${n.slideNextClass}`);
              t.length > 0 && a(d(t));
              const i = e.children(`.${n.slidePrevClass}`);
              i.length > 0 && a(d(i));
            }
        }
        function c() {
          const e = Tt();
          if (!t || t.destroyed) return;
          const n = t.params.lazy.scrollingElement
              ? kt(t.params.lazy.scrollingElement)
              : kt(e),
            i = n[0] === e,
            r = i ? e.innerWidth : n[0].offsetWidth,
            o = i ? e.innerHeight : n[0].offsetHeight,
            a = t.$el.offset(),
            { rtlTranslate: u } = t;
          let d = !1;
          u && (a.left -= t.$el[0].scrollLeft);
          const p = [
            [a.left, a.top],
            [a.left + t.width, a.top],
            [a.left, a.top + t.height],
            [a.left + t.width, a.top + t.height],
          ];
          for (let e = 0; e < p.length; e += 1) {
            const t = p[e];
            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o) {
              if (0 === t[0] && 0 === t[1]) continue;
              d = !0;
            }
          }
          const h = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          d
            ? (l(), n.off("scroll", c, h))
            : s || ((s = !0), n.on("scroll", c, h));
        }
        i("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          i("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              l();
          }),
          i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !o)) &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("slideChange", () => {
            const {
              lazy: e,
              cssMode: n,
              watchSlidesProgress: i,
              touchReleaseOnEdges: r,
              resistanceRatio: s,
            } = t.params;
            e.enabled && (n || (i && (r || 0 === s))) && l();
          }),
          Object.assign(t.lazy, { load: l, loadInSlide: a });
      }
      function yn(e) {
        let t,
          { swiper: n, extendParams: i, on: r, emit: s } = e;
        function o() {
          const e = n.slides.eq(n.activeIndex);
          let i = n.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
            clearTimeout(t),
            (t = Mt(() => {
              let e;
              n.params.autoplay.reverseDirection
                ? n.params.loop
                  ? (n.loopFix(),
                    (e = n.slidePrev(n.params.speed, !0, !0)),
                    s("autoplay"))
                  : n.isBeginning
                  ? n.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = n.slideTo(
                        n.slides.length - 1,
                        n.params.speed,
                        !0,
                        !0
                      )),
                      s("autoplay"))
                  : ((e = n.slidePrev(n.params.speed, !0, !0)), s("autoplay"))
                : n.params.loop
                ? (n.loopFix(),
                  (e = n.slideNext(n.params.speed, !0, !0)),
                  s("autoplay"))
                : n.isEnd
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = n.slideTo(0, n.params.speed, !0, !0)), s("autoplay"))
                : ((e = n.slideNext(n.params.speed, !0, !0)), s("autoplay")),
                ((n.params.cssMode && n.autoplay.running) || !1 === e) && o();
            }, i));
        }
        function a() {
          return (
            void 0 === t &&
            !n.autoplay.running &&
            ((n.autoplay.running = !0), s("autoplayStart"), o(), !0)
          );
        }
        function l() {
          return (
            !!n.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (n.autoplay.running = !1),
            s("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          n.autoplay.running &&
            (n.autoplay.paused ||
              (t && clearTimeout(t),
              (n.autoplay.paused = !0),
              0 !== e && n.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    n.$wrapperEl[0].addEventListener(e, d);
                  })
                : ((n.autoplay.paused = !1), o())));
        }
        function u() {
          const e = wt();
          "hidden" === e.visibilityState && n.autoplay.running && c(),
            "visible" === e.visibilityState &&
              n.autoplay.paused &&
              (o(), (n.autoplay.paused = !1));
        }
        function d(e) {
          n &&
            !n.destroyed &&
            n.$wrapperEl &&
            e.target === n.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, d);
            }),
            (n.autoplay.paused = !1),
            n.autoplay.running ? o() : l());
        }
        function p() {
          n.params.autoplay.disableOnInteraction
            ? l()
            : (s("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, d);
            });
        }
        function h() {
          n.params.autoplay.disableOnInteraction ||
            ((n.autoplay.paused = !1), s("autoplayResume"), o());
        }
        (n.autoplay = { running: !1, paused: !1 }),
          i({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          r("init", () => {
            if (n.params.autoplay.enabled) {
              a();
              wt().addEventListener("visibilitychange", u),
                n.params.autoplay.pauseOnMouseEnter &&
                  (n.$el.on("mouseenter", p), n.$el.on("mouseleave", h));
            }
          }),
          r("beforeTransitionStart", (e, t, i) => {
            n.autoplay.running &&
              (i || !n.params.autoplay.disableOnInteraction
                ? n.autoplay.pause(t)
                : l());
          }),
          r("sliderFirstMove", () => {
            n.autoplay.running &&
              (n.params.autoplay.disableOnInteraction ? l() : c());
          }),
          r("touchEnd", () => {
            n.params.cssMode &&
              n.autoplay.paused &&
              !n.params.autoplay.disableOnInteraction &&
              o();
          }),
          r("destroy", () => {
            n.$el.off("mouseenter", p),
              n.$el.off("mouseleave", h),
              n.autoplay.running && l();
            wt().removeEventListener("visibilitychange", u);
          }),
          Object.assign(n.autoplay, { pause: c, run: o, start: a, stop: l });
      }
      function bn() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        bn(),
          document.querySelector(".team") &&
            new mn(".team__slider", {
              modules: [vn, yn],
              grabCursor: !0,
              autoplay: { delay: 2e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 3,
              spaceBetween: 30,
              lazy: !0,
              lazy: { loadPrevNext: !0 },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 0 },
                475: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 30 },
                1268: { slidesPerView: 3, spaceBetween: 30 },
              },
              on: {},
            });
      });
      new (n(732))({
        elements_selector: "[data-src]",
        class_loaded: "_lazy-loaded",
        use_native: !0,
      });
      class wn {
        constructor(e) {
          (this.config = Object.assign({ logging: !0 }, e)),
            this.observer,
            !document.documentElement.classList.contains("watcher") &&
              this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"),
            this.scrollWatcherConstructor(
              document.querySelectorAll("[data-watch]")
            );
        }
        scrollWatcherConstructor(e) {
          if (e.length) {
            this.scrollWatcherLogging(
              `Проснулся, слежу за объектами (${e.length})...`
            ),
              c(
                Array.from(e).map(function (e) {
                  return `${
                    e.dataset.watchRoot ? e.dataset.watchRoot : null
                  }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
                })
              ).forEach((t) => {
                let n = t.split("|"),
                  i = { root: n[0], margin: n[1], threshold: n[2] },
                  r = Array.from(e).filter(function (e) {
                    let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                      n = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                      r = e.dataset.watchThreshold
                        ? e.dataset.watchThreshold
                        : 0;
                    if (
                      String(t) === i.root &&
                      String(n) === i.margin &&
                      String(r) === i.threshold
                    )
                      return e;
                  }),
                  s = this.getScrollWatcherConfig(i);
                this.scrollWatcherInit(r, s);
              });
          } else
            this.scrollWatcherLogging(
              "Сплю, нет объектов для слежения. ZzzZZzz"
            );
        }
        getScrollWatcherConfig(e) {
          let t = {};
          if (
            (document.querySelector(e.root)
              ? (t.root = document.querySelector(e.root))
              : "null" !== e.root &&
                this.scrollWatcherLogging(
                  `Эмм... родительского объекта ${e.root} нет на странице`
                ),
            (t.rootMargin = e.margin),
            !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
          ) {
            if ("prx" === e.threshold) {
              e.threshold = [];
              for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
            } else e.threshold = e.threshold.split(",");
            return (t.threshold = e.threshold), t;
          }
          this.scrollWatcherLogging(
            "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
          );
        }
        scrollWatcherCreate(e) {
          this.observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
              this.scrollWatcherCallback(e, t);
            });
          }, e);
        }
        scrollWatcherInit(e, t) {
          this.scrollWatcherCreate(t),
            e.forEach((e) => this.observer.observe(e));
        }
        scrollWatcherIntersecting(e, t) {
          e.isIntersecting
            ? (!t.classList.contains("_watcher-view") &&
                t.classList.add("_watcher-view"),
              this.scrollWatcherLogging(
                `Я вижу ${t.classList}, добавил класс _watcher-view`
              ))
            : (t.classList.contains("_watcher-view") &&
                t.classList.remove("_watcher-view"),
              this.scrollWatcherLogging(
                `Я не вижу ${t.classList}, убрал класс _watcher-view`
              ));
        }
        scrollWatcherOff(e, t) {
          t.unobserve(e),
            this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
        }
        scrollWatcherLogging(e) {
          this.config.logging && l(`[Наблюдатель]: ${e}`);
        }
        scrollWatcherCallback(e, t) {
          const n = e.target;
          this.scrollWatcherIntersecting(e, n),
            n.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(n, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      }
      let xn = !1;
      setTimeout(() => {
        if (xn) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0);
      var Tn = function () {
        return (
          (Tn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          Tn.apply(this, arguments)
        );
      };
      var Sn = "lgAfterAppendSlide",
        Cn = "lgInit",
        En = "lgHasVideo",
        Ln = "lgContainerResize",
        In = "lgUpdateSlides",
        On = "lgAfterAppendSubHtml",
        An = "lgBeforeOpen",
        kn = "lgAfterOpen",
        Mn = "lgSlideItemLoad",
        Pn = "lgBeforeSlide",
        Dn = "lgAfterSlide",
        zn = "lgPosterClick",
        $n = "lgDragStart",
        Nn = "lgDragMove",
        _n = "lgDragEnd",
        jn = "lgBeforeNextSlide",
        Hn = "lgBeforePrevSlide",
        Bn = "lgBeforeClose",
        qn = "lgAfterClose",
        Fn = {
          mode: "lg-slide",
          easing: "ease",
          speed: 400,
          licenseKey: "0000-0000-000-0000",
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 300,
          container: "",
          startAnimationDuration: 400,
          zoomFromOrigin: !0,
          hideBarsDelay: 0,
          showBarsAfter: 1e4,
          slideDelay: 0,
          supportLegacyBrowser: !0,
          allowMediaOverlap: !1,
          videoMaxSize: "1280-720",
          loadYouTubePoster: !0,
          defaultCaptionHeight: 0,
          ariaLabelledby: "",
          ariaDescribedby: "",
          closable: !0,
          swipeToClose: !0,
          closeOnTap: !0,
          showCloseIcon: !0,
          showMaximizeIcon: !1,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          controls: !0,
          slideEndAnimation: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 2,
          numberOfSlideItemsInDom: 10,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: 0,
          iframeWidth: "100%",
          iframeHeight: "100%",
          iframeMaxWidth: "100%",
          iframeMaxHeight: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          extraProps: [],
          exThumbImage: "",
          isMobile: void 0,
          mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
          plugins: [],
          strings: {
            closeGallery: "Close gallery",
            toggleMaximize: "Toggle maximize",
            previousSlide: "Previous slide",
            nextSlide: "Next slide",
            download: "Download",
            playVideo: "Play video",
          },
        };
      var Wn = (function () {
        function e(e) {
          return (
            (this.cssVenderPrefixes = [
              "TransitionDuration",
              "TransitionTimingFunction",
              "Transform",
              "Transition",
            ]),
            (this.selector = this._getSelector(e)),
            (this.firstElement = this._getFirstEl()),
            this
          );
        }
        return (
          (e.generateUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            );
          }),
          (e.prototype._getSelector = function (e, t) {
            return (
              void 0 === t && (t = document),
              "string" != typeof e
                ? e
                : ((t = t || document),
                  "#" === e.substring(0, 1)
                    ? t.querySelector(e)
                    : t.querySelectorAll(e))
            );
          }),
          (e.prototype._each = function (e) {
            return this.selector
              ? (void 0 !== this.selector.length
                  ? [].forEach.call(this.selector, e)
                  : e(this.selector, 0),
                this)
              : this;
          }),
          (e.prototype._setCssVendorPrefix = function (e, t, n) {
            var i = t.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            });
            -1 !== this.cssVenderPrefixes.indexOf(i)
              ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = n),
                (e.style["webkit" + i] = n),
                (e.style["moz" + i] = n),
                (e.style["ms" + i] = n),
                (e.style["o" + i] = n))
              : (e.style[i] = n);
          }),
          (e.prototype._getFirstEl = function () {
            return this.selector && void 0 !== this.selector.length
              ? this.selector[0]
              : this.selector;
          }),
          (e.prototype.isEventMatched = function (e, t) {
            var n = t.split(".");
            return e
              .split(".")
              .filter(function (e) {
                return e;
              })
              .every(function (e) {
                return -1 !== n.indexOf(e);
              });
          }),
          (e.prototype.attr = function (e, t) {
            return void 0 === t
              ? this.firstElement
                ? this.firstElement.getAttribute(e)
                : ""
              : (this._each(function (n) {
                  n.setAttribute(e, t);
                }),
                this);
          }),
          (e.prototype.find = function (e) {
            return Rn(this._getSelector(e, this.selector));
          }),
          (e.prototype.first = function () {
            return this.selector && void 0 !== this.selector.length
              ? Rn(this.selector[0])
              : Rn(this.selector);
          }),
          (e.prototype.eq = function (e) {
            return Rn(this.selector[e]);
          }),
          (e.prototype.parent = function () {
            return Rn(this.selector.parentElement);
          }),
          (e.prototype.get = function () {
            return this._getFirstEl();
          }),
          (e.prototype.removeAttr = function (e) {
            var t = e.split(" ");
            return (
              this._each(function (e) {
                t.forEach(function (t) {
                  return e.removeAttribute(t);
                });
              }),
              this
            );
          }),
          (e.prototype.wrap = function (e) {
            if (!this.firstElement) return this;
            var t = document.createElement("div");
            return (
              (t.className = e),
              this.firstElement.parentNode.insertBefore(t, this.firstElement),
              this.firstElement.parentNode.removeChild(this.firstElement),
              t.appendChild(this.firstElement),
              this
            );
          }),
          (e.prototype.addClass = function (e) {
            return (
              void 0 === e && (e = ""),
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.add(e);
                });
              }),
              this
            );
          }),
          (e.prototype.removeClass = function (e) {
            return (
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.remove(e);
                });
              }),
              this
            );
          }),
          (e.prototype.hasClass = function (e) {
            return (
              !!this.firstElement && this.firstElement.classList.contains(e)
            );
          }),
          (e.prototype.hasAttribute = function (e) {
            return !!this.firstElement && this.firstElement.hasAttribute(e);
          }),
          (e.prototype.toggleClass = function (e) {
            return this.firstElement
              ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
                this)
              : this;
          }),
          (e.prototype.css = function (e, t) {
            var n = this;
            return (
              this._each(function (i) {
                n._setCssVendorPrefix(i, e, t);
              }),
              this
            );
          }),
          (e.prototype.on = function (t, n) {
            var i = this;
            return this.selector
              ? (t.split(" ").forEach(function (t) {
                  Array.isArray(e.eventListeners[t]) ||
                    (e.eventListeners[t] = []),
                    e.eventListeners[t].push(n),
                    i.selector.addEventListener(t.split(".")[0], n);
                }),
                this)
              : this;
          }),
          (e.prototype.once = function (e, t) {
            var n = this;
            return (
              this.on(e, function () {
                n.off(e), t(e);
              }),
              this
            );
          }),
          (e.prototype.off = function (t) {
            var n = this;
            return this.selector
              ? (Object.keys(e.eventListeners).forEach(function (i) {
                  n.isEventMatched(t, i) &&
                    (e.eventListeners[i].forEach(function (e) {
                      n.selector.removeEventListener(i.split(".")[0], e);
                    }),
                    (e.eventListeners[i] = []));
                }),
                this)
              : this;
          }),
          (e.prototype.trigger = function (e, t) {
            if (!this.firstElement) return this;
            var n = new CustomEvent(e.split(".")[0], { detail: t || null });
            return this.firstElement.dispatchEvent(n), this;
          }),
          (e.prototype.load = function (e) {
            var t = this;
            return (
              fetch(e)
                .then(function (e) {
                  return e.text();
                })
                .then(function (e) {
                  t.selector.innerHTML = e;
                }),
              this
            );
          }),
          (e.prototype.html = function (e) {
            return void 0 === e
              ? this.firstElement
                ? this.firstElement.innerHTML
                : ""
              : (this._each(function (t) {
                  t.innerHTML = e;
                }),
                this);
          }),
          (e.prototype.append = function (e) {
            return (
              this._each(function (t) {
                "string" == typeof e
                  ? t.insertAdjacentHTML("beforeend", e)
                  : t.appendChild(e);
              }),
              this
            );
          }),
          (e.prototype.prepend = function (e) {
            return (
              this._each(function (t) {
                t.insertAdjacentHTML("afterbegin", e);
              }),
              this
            );
          }),
          (e.prototype.remove = function () {
            return (
              this._each(function (e) {
                e.parentNode.removeChild(e);
              }),
              this
            );
          }),
          (e.prototype.empty = function () {
            return (
              this._each(function (e) {
                e.innerHTML = "";
              }),
              this
            );
          }),
          (e.prototype.scrollTop = function (e) {
            return void 0 !== e
              ? ((document.body.scrollTop = e),
                (document.documentElement.scrollTop = e),
                this)
              : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
          }),
          (e.prototype.scrollLeft = function (e) {
            return void 0 !== e
              ? ((document.body.scrollLeft = e),
                (document.documentElement.scrollLeft = e),
                this)
              : window.pageXOffset ||
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft ||
                  0;
          }),
          (e.prototype.offset = function () {
            if (!this.firstElement) return { left: 0, top: 0 };
            var e = this.firstElement.getBoundingClientRect(),
              t = Rn("body").style().marginLeft;
            return {
              left: e.left - parseFloat(t) + this.scrollLeft(),
              top: e.top + this.scrollTop(),
            };
          }),
          (e.prototype.style = function () {
            return this.firstElement
              ? this.firstElement.currentStyle ||
                  window.getComputedStyle(this.firstElement)
              : {};
          }),
          (e.prototype.width = function () {
            var e = this.style();
            return (
              this.firstElement.clientWidth -
              parseFloat(e.paddingLeft) -
              parseFloat(e.paddingRight)
            );
          }),
          (e.prototype.height = function () {
            var e = this.style();
            return (
              this.firstElement.clientHeight -
              parseFloat(e.paddingTop) -
              parseFloat(e.paddingBottom)
            );
          }),
          (e.eventListeners = {}),
          e
        );
      })();
      function Rn(e) {
        return (
          (function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: null };
              var n = document.createEvent("CustomEvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            };
          })(),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          new Wn(e)
        );
      }
      var Gn = [
        "src",
        "sources",
        "subHtml",
        "subHtmlUrl",
        "html",
        "video",
        "poster",
        "slideName",
        "responsive",
        "srcset",
        "sizes",
        "iframe",
        "downloadUrl",
        "download",
        "width",
        "facebookShareUrl",
        "tweetText",
        "iframeTitle",
        "twitterShareUrl",
        "pinterestShareUrl",
        "pinterestText",
        "fbHtml",
        "disqusIdentifier",
        "disqusUrl",
      ];
      function Vn(e) {
        return "href" === e
          ? "src"
          : (e = (e =
              (e = e.replace("data-", "")).charAt(0).toLowerCase() +
              e.slice(1)).replace(/-([a-z])/g, function (e) {
              return e[1].toUpperCase();
            }));
      }
      var Xn = function (e, t, n, i) {
          void 0 === n && (n = 0);
          var r = Rn(e).attr("data-lg-size") || i;
          if (r) {
            var s = r.split(",");
            if (s[1])
              for (var o = window.innerWidth, a = 0; a < s.length; a++) {
                var l = s[a];
                if (parseInt(l.split("-")[2], 10) > o) {
                  r = l;
                  break;
                }
                a === s.length - 1 && (r = l);
              }
            var c = r.split("-"),
              u = parseInt(c[0], 10),
              d = parseInt(c[1], 10),
              p = t.width(),
              h = t.height() - n,
              f = Math.min(p, u),
              g = Math.min(h, d),
              m = Math.min(f / u, g / d);
            return { width: u * m, height: d * m };
          }
        },
        Yn = function (e, t, n, i, r) {
          if (r) {
            var s = Rn(e).find("img").first();
            if (s.get()) {
              var o = t.get().getBoundingClientRect(),
                a = o.width,
                l = t.height() - (n + i),
                c = s.width(),
                u = s.height(),
                d = s.style(),
                p =
                  (a - c) / 2 -
                  s.offset().left +
                  (parseFloat(d.paddingLeft) || 0) +
                  (parseFloat(d.borderLeft) || 0) +
                  Rn(window).scrollLeft() +
                  o.left,
                h =
                  (l - u) / 2 -
                  s.offset().top +
                  (parseFloat(d.paddingTop) || 0) +
                  (parseFloat(d.borderTop) || 0) +
                  Rn(window).scrollTop() +
                  n;
              return (
                "translate3d(" +
                (p *= -1) +
                "px, " +
                (h *= -1) +
                "px, 0) scale3d(" +
                c / r.width +
                ", " +
                u / r.height +
                ", 1)"
              );
            }
          }
        },
        Un = function (e, t, n, i, r, s) {
          return (
            '<div class="lg-video-cont lg-has-iframe" style="width:' +
            e +
            "; max-width:" +
            n +
            "; height: " +
            t +
            "; max-height:" +
            i +
            '">\n                    <iframe class="lg-object" frameborder="0" ' +
            (s ? 'title="' + s + '"' : "") +
            ' src="' +
            r +
            '"  allowfullscreen="true"></iframe>\n                </div>'
          );
        },
        Zn = function (e, t, n, i, r, s) {
          var o =
              "<img " +
              n +
              " " +
              (i ? 'srcset="' + i + '"' : "") +
              "  " +
              (r ? 'sizes="' + r + '"' : "") +
              ' class="lg-object lg-image" data-index="' +
              e +
              '" src="' +
              t +
              '" />',
            a = "";
          s &&
            (a = ("string" == typeof s ? JSON.parse(s) : s).map(function (e) {
              var t = "";
              return (
                Object.keys(e).forEach(function (n) {
                  t += " " + n + '="' + e[n] + '"';
                }),
                "<source " + t + "></source>"
              );
            }));
          return "" + a + o;
        },
        Kn = function (e) {
          for (var t = [], n = [], i = "", r = 0; r < e.length; r++) {
            var s = e[r].split(" ");
            "" === s[0] && s.splice(0, 1), n.push(s[0]), t.push(s[1]);
          }
          for (var o = window.innerWidth, a = 0; a < t.length; a++)
            if (parseInt(t[a], 10) > o) {
              i = n[a];
              break;
            }
          return i;
        },
        Qn = function (e) {
          return !!e && !!e.complete && 0 !== e.naturalWidth;
        },
        Jn = function (e, t, n, i, r) {
          return (
            '<div class="lg-video-cont ' +
            (r && r.youtube
              ? "lg-has-youtube"
              : r && r.vimeo
              ? "lg-has-vimeo"
              : "lg-has-html5") +
            '" style="' +
            n +
            '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
            i +
            '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
            i +
            '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
            (t || "") +
            '\n            <img class="lg-object lg-video-poster" src="' +
            e +
            '" />\n        </div>'
          );
        },
        ei = function (e, t, n, i) {
          var r = [],
            s = (function () {
              for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length;
              var i = Array(e),
                r = 0;
              for (t = 0; t < n; t++)
                for (var s = arguments[t], o = 0, a = s.length; o < a; o++, r++)
                  i[r] = s[o];
              return i;
            })(Gn, t);
          return (
            [].forEach.call(e, function (e) {
              for (var t = {}, o = 0; o < e.attributes.length; o++) {
                var a = e.attributes[o];
                if (a.specified) {
                  var l = Vn(a.name),
                    c = "";
                  s.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
                }
              }
              var u = Rn(e),
                d = u.find("img").first().attr("alt"),
                p = u.attr("title"),
                h = i ? u.attr(i) : u.find("img").first().attr("src");
              (t.thumb = h),
                n && !t.subHtml && (t.subHtml = p || d || ""),
                (t.alt = d || p || ""),
                r.push(t);
            }),
            r
          );
        },
        ti = function () {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },
        ni = function (e, t, n) {
          if (!e)
            return t
              ? { html5: !0 }
              : void console.error(
                  "lightGallery :- data-src is not provided on slide item " +
                    (n + 1) +
                    ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                );
          var i = e.match(
              /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
            ),
            r = e.match(
              /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
            ),
            s = e.match(
              /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
            );
          return i
            ? { youtube: i }
            : r
            ? { vimeo: r }
            : s
            ? { wistia: s }
            : void 0;
        },
        ii = 0,
        ri = (function () {
          function e(e, t) {
            if (
              ((this.lgOpened = !1),
              (this.index = 0),
              (this.plugins = []),
              (this.lGalleryOn = !1),
              (this.lgBusy = !1),
              (this.currentItemsInDom = []),
              (this.prevScrollTop = 0),
              (this.isDummyImageRemoved = !1),
              (this.dragOrSwipeEnabled = !1),
              (this.mediaContainerPosition = { top: 0, bottom: 0 }),
              !e)
            )
              return this;
            if (
              (ii++,
              (this.lgId = ii),
              (this.el = e),
              (this.LGel = Rn(e)),
              this.generateSettings(t),
              this.buildModules(),
              this.settings.dynamic &&
                void 0 !== this.settings.dynamicEl &&
                !Array.isArray(this.settings.dynamicEl))
            )
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
              (this.galleryItems = this.getItems()),
              this.normalizeSettings(),
              this.init(),
              this.validateLicense(),
              this
            );
          }
          return (
            (e.prototype.generateSettings = function (e) {
              if (
                ((this.settings = Tn(Tn({}, Fn), e)),
                this.settings.isMobile &&
                "function" == typeof this.settings.isMobile
                  ? this.settings.isMobile()
                  : ti())
              ) {
                var t = Tn(
                  Tn({}, this.settings.mobileSettings),
                  this.settings.mobileSettings
                );
                this.settings = Tn(Tn({}, this.settings), t);
              }
            }),
            (e.prototype.normalizeSettings = function () {
              this.settings.slideEndAnimation &&
                (this.settings.hideControlOnEnd = !1),
                this.settings.closable || (this.settings.swipeToClose = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                this.settings.dynamic && (this.zoomFromOrigin = !1),
                this.settings.container ||
                  (this.settings.container = document.body),
                (this.settings.preload = Math.min(
                  this.settings.preload,
                  this.galleryItems.length
                ));
            }),
            (e.prototype.init = function () {
              var e = this;
              this.addSlideVideoInfo(this.galleryItems),
                this.buildStructure(),
                this.LGel.trigger(Cn, { instance: this }),
                this.settings.keyPress && this.keyPress(),
                setTimeout(function () {
                  e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
                }, 50),
                this.arrow(),
                this.settings.mousewheel && this.mousewheel(),
                this.settings.dynamic || this.openGalleryOnItemClick();
            }),
            (e.prototype.openGalleryOnItemClick = function () {
              for (
                var e = this,
                  t = function (t) {
                    var i = n.items[t],
                      r = Rn(i),
                      s = Wn.generateUUID();
                    r.attr("data-lg-id", s).on(
                      "click.lgcustom-item-" + s,
                      function (n) {
                        n.preventDefault();
                        var r = e.settings.index || t;
                        e.openGallery(r, i);
                      }
                    );
                  },
                  n = this,
                  i = 0;
                i < this.items.length;
                i++
              )
                t(i);
            }),
            (e.prototype.buildModules = function () {
              var e = this;
              this.settings.plugins.forEach(function (t) {
                e.plugins.push(new t(e, Rn));
              });
            }),
            (e.prototype.validateLicense = function () {
              this.settings.licenseKey
                ? "0000-0000-000-0000" === this.settings.licenseKey &&
                  console.warn(
                    "lightGallery: " +
                      this.settings.licenseKey +
                      " license key is not valid for production use"
                  )
                : console.error("Please provide a valid license key");
            }),
            (e.prototype.getSlideItem = function (e) {
              return Rn(this.getSlideItemId(e));
            }),
            (e.prototype.getSlideItemId = function (e) {
              return "#lg-item-" + this.lgId + "-" + e;
            }),
            (e.prototype.getIdName = function (e) {
              return e + "-" + this.lgId;
            }),
            (e.prototype.getElementById = function (e) {
              return Rn("#" + this.getIdName(e));
            }),
            (e.prototype.manageSingleSlideClassName = function () {
              this.galleryItems.length < 2
                ? this.outer.addClass("lg-single-item")
                : this.outer.removeClass("lg-single-item");
            }),
            (e.prototype.buildStructure = function () {
              var e = this;
              if (!(this.$container && this.$container.get())) {
                var t = "",
                  n = "";
                this.settings.controls &&
                  (t =
                    '<button type="button" id="' +
                    this.getIdName("lg-prev") +
                    '" aria-label="' +
                    this.settings.strings.previousSlide +
                    '" class="lg-prev lg-icon"> ' +
                    this.settings.prevHtml +
                    ' </button>\n                <button type="button" id="' +
                    this.getIdName("lg-next") +
                    '" aria-label="' +
                    this.settings.strings.nextSlide +
                    '" class="lg-next lg-icon"> ' +
                    this.settings.nextHtml +
                    " </button>"),
                  ".lg-item" !== this.settings.appendSubHtmlTo &&
                    (n =
                      '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var i = "";
                this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
                var r = this.settings.ariaLabelledby
                    ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                    : "",
                  s = this.settings.ariaDescribedby
                    ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                    : "",
                  o =
                    "lg-container " +
                    this.settings.addClass +
                    " " +
                    (document.body !== this.settings.container
                      ? "lg-inline"
                      : ""),
                  a =
                    this.settings.closable && this.settings.showCloseIcon
                      ? '<button type="button" aria-label="' +
                        this.settings.strings.closeGallery +
                        '" id="' +
                        this.getIdName("lg-close") +
                        '" class="lg-close lg-icon"></button>'
                      : "",
                  l = this.settings.showMaximizeIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.toggleMaximize +
                      '" id="' +
                      this.getIdName("lg-maximize") +
                      '" class="lg-maximize lg-icon"></button>'
                    : "",
                  c =
                    '\n        <div class="' +
                    o +
                    '" id="' +
                    this.getIdName("lg-container") +
                    '" tabindex="-1" aria-modal="true" ' +
                    r +
                    " " +
                    s +
                    ' role="dialog"\n        >\n            <div id="' +
                    this.getIdName("lg-backdrop") +
                    '" class="lg-backdrop"></div>\n\n            <div id="' +
                    this.getIdName("lg-outer") +
                    '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                    i +
                    ' ">\n\n              <div id="' +
                    this.getIdName("lg-content") +
                    '" class="lg-content">\n                <div id="' +
                    this.getIdName("lg-inner") +
                    '" class="lg-inner">\n                </div>\n                ' +
                    t +
                    '\n              </div>\n                <div id="' +
                    this.getIdName("lg-toolbar") +
                    '" class="lg-toolbar lg-group">\n                    ' +
                    l +
                    "\n                    " +
                    a +
                    "\n                    </div>\n                    " +
                    (".lg-outer" === this.settings.appendSubHtmlTo ? n : "") +
                    '\n                <div id="' +
                    this.getIdName("lg-components") +
                    '" class="lg-components">\n                    ' +
                    (".lg-sub-html" === this.settings.appendSubHtmlTo
                      ? n
                      : "") +
                    "\n                </div>\n            </div>\n        </div>\n        ";
                Rn(this.settings.container).append(c),
                  document.body !== this.settings.container &&
                    Rn(this.settings.container).css("position", "relative"),
                  (this.outer = this.getElementById("lg-outer")),
                  (this.$lgComponents = this.getElementById("lg-components")),
                  (this.$backdrop = this.getElementById("lg-backdrop")),
                  (this.$container = this.getElementById("lg-container")),
                  (this.$inner = this.getElementById("lg-inner")),
                  (this.$content = this.getElementById("lg-content")),
                  (this.$toolbar = this.getElementById("lg-toolbar")),
                  this.$backdrop.css(
                    "transition-duration",
                    this.settings.backdropDuration + "ms"
                  );
                var u = this.settings.mode + " ";
                this.manageSingleSlideClassName(),
                  this.settings.enableDrag && (u += "lg-grab "),
                  this.outer.addClass(u),
                  this.$inner.css(
                    "transition-timing-function",
                    this.settings.easing
                  ),
                  this.$inner.css(
                    "transition-duration",
                    this.settings.speed + "ms"
                  ),
                  this.settings.download &&
                    this.$toolbar.append(
                      '<a id="' +
                        this.getIdName("lg-download") +
                        '" target="_blank" rel="noopener" aria-label="' +
                        this.settings.strings.download +
                        '" download class="lg-download lg-icon"></a>'
                    ),
                  this.counter(),
                  Rn(window).on(
                    "resize.lg.global" +
                      this.lgId +
                      " orientationchange.lg.global" +
                      this.lgId,
                    function () {
                      e.refreshOnResize();
                    }
                  ),
                  this.hideBars(),
                  this.manageCloseGallery(),
                  this.toggleMaximize(),
                  this.initModules();
              }
            }),
            (e.prototype.refreshOnResize = function () {
              if (this.lgOpened) {
                var e = this.galleryItems[this.index].__slideVideoInfo;
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var t = this.mediaContainerPosition,
                  n = t.top,
                  i = t.bottom;
                if (
                  ((this.currentImageSize = Xn(
                    this.items[this.index],
                    this.outer,
                    n + i,
                    e && this.settings.videoMaxSize
                  )),
                  e && this.resizeVideoSlide(this.index, this.currentImageSize),
                  this.zoomFromOrigin && !this.isDummyImageRemoved)
                ) {
                  var r = this.getDummyImgStyles(this.currentImageSize);
                  this.outer
                    .find(".lg-current .lg-dummy-img")
                    .first()
                    .attr("style", r);
                }
                this.LGel.trigger(Ln);
              }
            }),
            (e.prototype.resizeVideoSlide = function (e, t) {
              var n = this.getVideoContStyle(t);
              this.getSlideItem(e).find(".lg-video-cont").attr("style", n);
            }),
            (e.prototype.updateSlides = function (e, t) {
              if (
                (this.index > e.length - 1 && (this.index = e.length - 1),
                1 === e.length && (this.index = 0),
                e.length)
              ) {
                var n = this.galleryItems[t].src;
                (this.galleryItems = e),
                  this.updateControls(),
                  this.$inner.empty(),
                  (this.currentItemsInDom = []);
                var i = 0;
                this.galleryItems.some(function (e, t) {
                  return e.src === n && ((i = t), !0);
                }),
                  (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                  this.loadContent(i, !0),
                  this.getSlideItem(i).addClass("lg-current"),
                  (this.index = i),
                  this.updateCurrentCounter(i),
                  this.LGel.trigger(In);
              } else this.closeGallery();
            }),
            (e.prototype.getItems = function () {
              if (((this.items = []), this.settings.dynamic))
                return this.settings.dynamicEl || [];
              if ("this" === this.settings.selector) this.items.push(this.el);
              else if (this.settings.selector)
                if ("string" == typeof this.settings.selector)
                  if (this.settings.selectWithin) {
                    var e = Rn(this.settings.selectWithin);
                    this.items = e.find(this.settings.selector).get();
                  } else
                    this.items = this.el.querySelectorAll(
                      this.settings.selector
                    );
                else this.items = this.settings.selector;
              else this.items = this.el.children;
              return ei(
                this.items,
                this.settings.extraProps,
                this.settings.getCaptionFromTitleOrAlt,
                this.settings.exThumbImage
              );
            }),
            (e.prototype.openGallery = function (e, t) {
              var n = this;
              if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
                (this.lgOpened = !0),
                  this.outer.get().focus(),
                  this.outer.removeClass("lg-hide-items"),
                  this.$container.addClass("lg-show");
                var i = this.getItemsToBeInsertedToDom(e, e);
                this.currentItemsInDom = i;
                var r = "";
                i.forEach(function (e) {
                  r = r + '<div id="' + e + '" class="lg-item"></div>';
                }),
                  this.$inner.append(r),
                  this.addHtml(e);
                var s = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var o = this.mediaContainerPosition,
                  a = o.top,
                  l = o.bottom;
                this.settings.allowMediaOverlap ||
                  this.setMediaContainerPosition(a, l);
                var c = this.galleryItems[e].__slideVideoInfo;
                this.zoomFromOrigin &&
                  t &&
                  ((this.currentImageSize = Xn(
                    t,
                    this.outer,
                    a + l,
                    c && this.settings.videoMaxSize
                  )),
                  (s = Yn(t, this.outer, a, l, this.currentImageSize))),
                  (this.zoomFromOrigin && s) ||
                    (this.outer.addClass(this.settings.startClass),
                    this.getSlideItem(e).removeClass("lg-complete"));
                var u = this.settings.zoomFromOrigin
                  ? 100
                  : this.settings.backdropDuration;
                setTimeout(function () {
                  n.outer.addClass("lg-components-open");
                }, u),
                  (this.index = e),
                  this.LGel.trigger(An),
                  this.getSlideItem(e).addClass("lg-current"),
                  (this.lGalleryOn = !1),
                  (this.prevScrollTop = Rn(window).scrollTop()),
                  setTimeout(function () {
                    if (n.zoomFromOrigin && s) {
                      var t = n.getSlideItem(e);
                      t.css("transform", s),
                        setTimeout(function () {
                          t
                            .addClass("lg-start-progress lg-start-end-progress")
                            .css(
                              "transition-duration",
                              n.settings.startAnimationDuration + "ms"
                            ),
                            n.outer.addClass("lg-zoom-from-image");
                        }),
                        setTimeout(function () {
                          t.css("transform", "translate3d(0, 0, 0)");
                        }, 100);
                    }
                    setTimeout(function () {
                      n.$backdrop.addClass("in"),
                        n.$container.addClass("lg-show-in");
                    }, 10),
                      (n.zoomFromOrigin && s) ||
                        setTimeout(function () {
                          n.outer.addClass("lg-visible");
                        }, n.settings.backdropDuration),
                      n.slide(e, !1, !1, !1),
                      n.LGel.trigger(kn);
                  }),
                  document.body === this.settings.container &&
                    Rn("html").addClass("lg-on");
              }
            }),
            (e.prototype.getMediaContainerPosition = function () {
              if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
              var e = this.$toolbar.get().clientHeight || 0,
                t = this.outer.find(".lg-components .lg-sub-html").get(),
                n =
                  this.settings.defaultCaptionHeight ||
                  (t && t.clientHeight) ||
                  0,
                i = this.outer.find(".lg-thumb-outer").get();
              return { top: e, bottom: (i ? i.clientHeight : 0) + n };
            }),
            (e.prototype.setMediaContainerPosition = function (e, t) {
              void 0 === e && (e = 0),
                void 0 === t && (t = 0),
                this.$content.css("top", e + "px").css("bottom", t + "px");
            }),
            (e.prototype.hideBars = function () {
              var e = this;
              setTimeout(function () {
                e.outer.removeClass("lg-hide-items"),
                  e.settings.hideBarsDelay > 0 &&
                    (e.outer.on(
                      "mousemove.lg click.lg touchstart.lg",
                      function () {
                        e.outer.removeClass("lg-hide-items"),
                          clearTimeout(e.hideBarTimeout),
                          (e.hideBarTimeout = setTimeout(function () {
                            e.outer.addClass("lg-hide-items");
                          }, e.settings.hideBarsDelay));
                      }
                    ),
                    e.outer.trigger("mousemove.lg"));
              }, this.settings.showBarsAfter);
            }),
            (e.prototype.initPictureFill = function (e) {
              if (this.settings.supportLegacyBrowser)
                try {
                  picturefill({ elements: [e.get()] });
                } catch (e) {
                  console.warn(
                    "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                  );
                }
            }),
            (e.prototype.counter = function () {
              if (this.settings.counter) {
                var e =
                  '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                  this.getIdName("lg-counter-current") +
                  '" class="lg-counter-current">' +
                  (this.index + 1) +
                  ' </span> /\n                <span id="' +
                  this.getIdName("lg-counter-all") +
                  '" class="lg-counter-all">' +
                  this.galleryItems.length +
                  " </span></div>";
                this.outer.find(this.settings.appendCounterTo).append(e);
              }
            }),
            (e.prototype.addHtml = function (e) {
              var t, n;
              if (
                (this.galleryItems[e].subHtmlUrl
                  ? (n = this.galleryItems[e].subHtmlUrl)
                  : (t = this.galleryItems[e].subHtml),
                !n)
              )
                if (t) {
                  var i = t.substring(0, 1);
                  ("." !== i && "#" !== i) ||
                    (t =
                      this.settings.subHtmlSelectorRelative &&
                      !this.settings.dynamic
                        ? Rn(this.items).eq(e).find(t).first().html()
                        : Rn(t).first().html());
                } else t = "";
              if (".lg-item" !== this.settings.appendSubHtmlTo)
                n
                  ? this.outer.find(".lg-sub-html").load(n)
                  : this.outer.find(".lg-sub-html").html(t);
              else {
                var r = Rn(this.getSlideItemId(e));
                n
                  ? r.load(n)
                  : r.append('<div class="lg-sub-html">' + t + "</div>");
              }
              null != t &&
                ("" === t
                  ? this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .addClass("lg-empty-html")
                  : this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .removeClass("lg-empty-html")),
                this.LGel.trigger(On, { index: e });
            }),
            (e.prototype.preload = function (e) {
              for (
                var t = 1;
                t <= this.settings.preload &&
                !(t >= this.galleryItems.length - e);
                t++
              )
                this.loadContent(e + t, !1);
              for (var n = 1; n <= this.settings.preload && !(e - n < 0); n++)
                this.loadContent(e - n, !1);
            }),
            (e.prototype.getDummyImgStyles = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                margin-left: -" +
                    e.width / 2 +
                    "px;\n                margin-top: -" +
                    e.height / 2 +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getVideoContStyle = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getDummyImageContent = function (e, t, n) {
              var i;
              if ((this.settings.dynamic || (i = Rn(this.items).eq(t)), i)) {
                var r = void 0;
                if (
                  !(r = this.settings.exThumbImage
                    ? i.attr(this.settings.exThumbImage)
                    : i.find("img").first().attr("src"))
                )
                  return "";
                var s =
                  "<img " +
                  n +
                  ' style="' +
                  this.getDummyImgStyles(this.currentImageSize) +
                  '" class="lg-dummy-img" src="' +
                  r +
                  '" />';
                return (
                  e.addClass("lg-first-slide"),
                  this.outer.addClass("lg-first-slide-loading"),
                  s
                );
              }
              return "";
            }),
            (e.prototype.setImgMarkup = function (e, t, n) {
              var i = this.galleryItems[n],
                r = i.alt,
                s = i.srcset,
                o = i.sizes,
                a = i.sources,
                l = r ? 'alt="' + r + '"' : "",
                c =
                  '<picture class="lg-img-wrap"> ' +
                  (this.isFirstSlideWithZoomAnimation()
                    ? this.getDummyImageContent(t, n, l)
                    : Zn(n, e, l, s, o, a)) +
                  "</picture>";
              t.prepend(c);
            }),
            (e.prototype.onSlideObjectLoad = function (e, t, n, i) {
              var r = e.find(".lg-object").first();
              Qn(r.get()) || t
                ? n()
                : (r.on("load.lg error.lg", function () {
                    n && n();
                  }),
                  r.on("error.lg", function () {
                    i && i();
                  }));
            }),
            (e.prototype.onLgObjectLoad = function (e, t, n, i, r, s) {
              var o = this;
              this.onSlideObjectLoad(
                e,
                s,
                function () {
                  o.triggerSlideItemLoad(e, t, n, i, r);
                },
                function () {
                  e.addClass("lg-complete lg-complete_"),
                    e.html(
                      '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                    );
                }
              );
            }),
            (e.prototype.triggerSlideItemLoad = function (e, t, n, i, r) {
              var s = this,
                o = this.galleryItems[t],
                a = r && "video" === this.getSlideType(o) && !o.poster ? i : 0;
              setTimeout(function () {
                e.addClass("lg-complete lg-complete_"),
                  s.LGel.trigger(Mn, {
                    index: t,
                    delay: n || 0,
                    isFirstSlide: r,
                  });
              }, a);
            }),
            (e.prototype.isFirstSlideWithZoomAnimation = function () {
              return !(
                this.lGalleryOn ||
                !this.zoomFromOrigin ||
                !this.currentImageSize
              );
            }),
            (e.prototype.addSlideVideoInfo = function (e) {
              var t = this;
              e.forEach(function (e, n) {
                (e.__slideVideoInfo = ni(e.src, !!e.video, n)),
                  e.__slideVideoInfo &&
                    t.settings.loadYouTubePoster &&
                    !e.poster &&
                    e.__slideVideoInfo.youtube &&
                    (e.poster =
                      "//img.youtube.com/vi/" +
                      e.__slideVideoInfo.youtube[1] +
                      "/maxresdefault.jpg");
              });
            }),
            (e.prototype.loadContent = function (e, t) {
              var n = this,
                i = this.galleryItems[e],
                r = Rn(this.getSlideItemId(e)),
                s = i.poster,
                o = i.srcset,
                a = i.sizes,
                l = i.sources,
                c = i.src,
                u = i.video,
                d = u && "string" == typeof u ? JSON.parse(u) : u;
              if (i.responsive) {
                var p = i.responsive.split(",");
                c = Kn(p) || c;
              }
              var h = i.__slideVideoInfo,
                f = "",
                g = !!i.iframe,
                m = !this.lGalleryOn,
                v = 0;
              if (
                (m &&
                  (v =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                !r.hasClass("lg-loaded"))
              ) {
                if (h) {
                  var y = this.mediaContainerPosition,
                    b = y.top,
                    w = y.bottom,
                    x = Xn(
                      this.items[e],
                      this.outer,
                      b + w,
                      h && this.settings.videoMaxSize
                    );
                  f = this.getVideoContStyle(x);
                }
                if (g) {
                  var T = Un(
                    this.settings.iframeWidth,
                    this.settings.iframeHeight,
                    this.settings.iframeMaxWidth,
                    this.settings.iframeMaxHeight,
                    c,
                    i.iframeTitle
                  );
                  r.prepend(T);
                } else if (s) {
                  var S = "";
                  m &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (S = this.getDummyImageContent(r, e, ""));
                  T = Jn(s, S || "", f, this.settings.strings.playVideo, h);
                  r.prepend(T);
                } else if (h) {
                  T = '<div class="lg-video-cont " style="' + f + '"></div>';
                  r.prepend(T);
                } else if ((this.setImgMarkup(c, r, e), o || l)) {
                  var C = r.find(".lg-object");
                  this.initPictureFill(C);
                }
                (s || h) &&
                  this.LGel.trigger(En, {
                    index: e,
                    src: c,
                    html5Video: d,
                    hasPoster: !!s,
                  }),
                  this.LGel.trigger(Sn, { index: e }),
                  this.lGalleryOn &&
                    ".lg-item" === this.settings.appendSubHtmlTo &&
                    this.addHtml(e);
              }
              var E = 0;
              v && !Rn(document.body).hasClass("lg-from-hash") && (E = v),
                this.isFirstSlideWithZoomAnimation() &&
                  (setTimeout(function () {
                    r.removeClass(
                      "lg-start-end-progress lg-start-progress"
                    ).removeAttr("style");
                  }, this.settings.startAnimationDuration + 100),
                  r.hasClass("lg-loaded") ||
                    setTimeout(function () {
                      if (
                        "image" === n.getSlideType(i) &&
                        (r
                          .find(".lg-img-wrap")
                          .append(Zn(e, c, "", o, a, i.sources)),
                        o || l)
                      ) {
                        var t = r.find(".lg-object");
                        n.initPictureFill(t);
                      }
                      ("image" === n.getSlideType(i) ||
                        ("video" === n.getSlideType(i) && s)) &&
                        (n.onLgObjectLoad(r, e, v, E, !0, !1),
                        n.onSlideObjectLoad(
                          r,
                          !(!h || !h.html5 || s),
                          function () {
                            n.loadContentOnFirstSlideLoad(e, r, E);
                          },
                          function () {
                            n.loadContentOnFirstSlideLoad(e, r, E);
                          }
                        ));
                    }, this.settings.startAnimationDuration + 100)),
                r.addClass("lg-loaded"),
                (this.isFirstSlideWithZoomAnimation() &&
                  ("video" !== this.getSlideType(i) || s)) ||
                  this.onLgObjectLoad(r, e, v, E, m, !(!h || !h.html5 || s)),
                (this.zoomFromOrigin && this.currentImageSize) ||
                  !r.hasClass("lg-complete_") ||
                  this.lGalleryOn ||
                  setTimeout(function () {
                    r.addClass("lg-complete");
                  }, this.settings.backdropDuration),
                (this.lGalleryOn = !0),
                !0 === t &&
                  (r.hasClass("lg-complete_")
                    ? this.preload(e)
                    : r
                        .find(".lg-object")
                        .first()
                        .on("load.lg error.lg", function () {
                          n.preload(e);
                        }));
            }),
            (e.prototype.loadContentOnFirstSlideLoad = function (e, t, n) {
              var i = this;
              setTimeout(function () {
                t.find(".lg-dummy-img").remove(),
                  t.removeClass("lg-first-slide"),
                  i.outer.removeClass("lg-first-slide-loading"),
                  (i.isDummyImageRemoved = !0),
                  i.preload(e);
              }, n + 300);
            }),
            (e.prototype.getItemsToBeInsertedToDom = function (e, t, n) {
              var i = this;
              void 0 === n && (n = 0);
              var r = [],
                s = Math.max(n, 3);
              s = Math.min(s, this.galleryItems.length);
              var o = "lg-item-" + this.lgId + "-" + t;
              if (this.galleryItems.length <= 3)
                return (
                  this.galleryItems.forEach(function (e, t) {
                    r.push("lg-item-" + i.lgId + "-" + t);
                  }),
                  r
                );
              if (e < (this.galleryItems.length - 1) / 2) {
                for (var a = e; a > e - s / 2 && a >= 0; a--)
                  r.push("lg-item-" + this.lgId + "-" + a);
                var l = r.length;
                for (a = 0; a < s - l; a++)
                  r.push("lg-item-" + this.lgId + "-" + (e + a + 1));
              } else {
                for (
                  a = e;
                  a <= this.galleryItems.length - 1 && a < e + s / 2;
                  a++
                )
                  r.push("lg-item-" + this.lgId + "-" + a);
                for (l = r.length, a = 0; a < s - l; a++)
                  r.push("lg-item-" + this.lgId + "-" + (e - a - 1));
              }
              return (
                this.settings.loop &&
                  (e === this.galleryItems.length - 1
                    ? r.push("lg-item-" + this.lgId + "-0")
                    : 0 === e &&
                      r.push(
                        "lg-item-" +
                          this.lgId +
                          "-" +
                          (this.galleryItems.length - 1)
                      )),
                -1 === r.indexOf(o) && r.push("lg-item-" + this.lgId + "-" + t),
                r
              );
            }),
            (e.prototype.organizeSlideItems = function (e, t) {
              var n = this,
                i = this.getItemsToBeInsertedToDom(
                  e,
                  t,
                  this.settings.numberOfSlideItemsInDom
                );
              return (
                i.forEach(function (e) {
                  -1 === n.currentItemsInDom.indexOf(e) &&
                    n.$inner.append(
                      '<div id="' + e + '" class="lg-item"></div>'
                    );
                }),
                this.currentItemsInDom.forEach(function (e) {
                  -1 === i.indexOf(e) && Rn("#" + e).remove();
                }),
                i
              );
            }),
            (e.prototype.getPreviousSlideIndex = function () {
              var e = 0;
              try {
                var t = this.outer.find(".lg-current").first().attr("id");
                e = parseInt(t.split("-")[3]) || 0;
              } catch (t) {
                e = 0;
              }
              return e;
            }),
            (e.prototype.setDownloadValue = function (e) {
              if (this.settings.download) {
                var t = this.galleryItems[e];
                if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                  this.outer.addClass("lg-hide-download");
                else {
                  var n = this.getElementById("lg-download");
                  this.outer.removeClass("lg-hide-download"),
                    n.attr("href", t.downloadUrl || t.src),
                    t.download && n.attr("download", t.download);
                }
              }
            }),
            (e.prototype.makeSlideAnimation = function (e, t, n) {
              var i = this;
              this.lGalleryOn && n.addClass("lg-slide-progress"),
                setTimeout(
                  function () {
                    i.outer.addClass("lg-no-trans"),
                      i.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-next-slide"),
                      "prev" === e
                        ? (t.addClass("lg-prev-slide"),
                          n.addClass("lg-next-slide"))
                        : (t.addClass("lg-next-slide"),
                          n.addClass("lg-prev-slide")),
                      setTimeout(function () {
                        i.outer.find(".lg-item").removeClass("lg-current"),
                          t.addClass("lg-current"),
                          i.outer.removeClass("lg-no-trans");
                      }, 50);
                  },
                  this.lGalleryOn ? this.settings.slideDelay : 0
                );
            }),
            (e.prototype.slide = function (e, t, n, i) {
              var r = this,
                s = this.getPreviousSlideIndex();
              if (
                ((this.currentItemsInDom = this.organizeSlideItems(e, s)),
                !this.lGalleryOn || s !== e)
              ) {
                var o = this.galleryItems.length;
                if (!this.lgBusy) {
                  this.settings.counter && this.updateCurrentCounter(e);
                  var a = this.getSlideItem(e),
                    l = this.getSlideItem(s),
                    c = this.galleryItems[e],
                    u = c.__slideVideoInfo;
                  if (
                    (this.outer.attr(
                      "data-lg-slide-type",
                      this.getSlideType(c)
                    ),
                    this.setDownloadValue(e),
                    u)
                  ) {
                    var d = this.mediaContainerPosition,
                      p = d.top,
                      h = d.bottom,
                      f = Xn(
                        this.items[e],
                        this.outer,
                        p + h,
                        u && this.settings.videoMaxSize
                      );
                    this.resizeVideoSlide(e, f);
                  }
                  if (
                    (this.LGel.trigger(Pn, {
                      prevIndex: s,
                      index: e,
                      fromTouch: !!t,
                      fromThumb: !!n,
                    }),
                    (this.lgBusy = !0),
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(e),
                    i || (e < s ? (i = "prev") : e > s && (i = "next")),
                    t)
                  ) {
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-current lg-next-slide");
                    var g = void 0,
                      m = void 0;
                    o > 2
                      ? ((g = e - 1),
                        (m = e + 1),
                        ((0 === e && s === o - 1) ||
                          (e === o - 1 && 0 === s)) &&
                          ((m = 0), (g = o - 1)))
                      : ((g = 0), (m = 1)),
                      "prev" === i
                        ? this.getSlideItem(m).addClass("lg-next-slide")
                        : this.getSlideItem(g).addClass("lg-prev-slide"),
                      a.addClass("lg-current");
                  } else this.makeSlideAnimation(i, a, l);
                  this.lGalleryOn
                    ? setTimeout(function () {
                        r.loadContent(e, !0),
                          ".lg-item" !== r.settings.appendSubHtmlTo &&
                            r.addHtml(e);
                      }, this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay))
                    : this.loadContent(e, !0),
                    setTimeout(function () {
                      (r.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        r.LGel.trigger(Dn, {
                          prevIndex: s,
                          index: e,
                          fromTouch: t,
                          fromThumb: n,
                        });
                    }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (t ? 0 : this.settings.slideDelay));
                }
                this.index = e;
              }
            }),
            (e.prototype.updateCurrentCounter = function (e) {
              this.getElementById("lg-counter-current").html(e + 1 + "");
            }),
            (e.prototype.updateCounterTotal = function () {
              this.getElementById("lg-counter-all").html(
                this.galleryItems.length + ""
              );
            }),
            (e.prototype.getSlideType = function (e) {
              return e.__slideVideoInfo
                ? "video"
                : e.iframe
                ? "iframe"
                : "image";
            }),
            (e.prototype.touchMove = function (e, t, n) {
              var i = t.pageX - e.pageX,
                r = t.pageY - e.pageY,
                s = !1;
              if (
                (this.swipeDirection
                  ? (s = !0)
                  : Math.abs(i) > 15
                  ? ((this.swipeDirection = "horizontal"), (s = !0))
                  : Math.abs(r) > 15 &&
                    ((this.swipeDirection = "vertical"), (s = !0)),
                s)
              ) {
                var o = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                  null == n || n.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(o, i, 0);
                  var a = o.get().offsetWidth,
                    l = (15 * a) / 100 - Math.abs((10 * i) / 100);
                  this.setTranslate(
                    this.outer.find(".lg-prev-slide").first(),
                    -a + i - l,
                    0
                  ),
                    this.setTranslate(
                      this.outer.find(".lg-next-slide").first(),
                      a + i + l,
                      0
                    );
                } else if (
                  "vertical" === this.swipeDirection &&
                  this.settings.swipeToClose
                ) {
                  null == n || n.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                  var c = 1 - Math.abs(r) / window.innerHeight;
                  this.$backdrop.css("opacity", c);
                  var u = 1 - Math.abs(r) / (2 * window.innerWidth);
                  this.setTranslate(o, 0, r, u, u),
                    Math.abs(r) > 100 &&
                      this.outer
                        .addClass("lg-hide-items")
                        .removeClass("lg-components-open");
                }
              }
            }),
            (e.prototype.touchEnd = function (e, t, n) {
              var i,
                r = this;
              "lg-slide" !== this.settings.mode &&
                this.outer.addClass("lg-slide"),
                setTimeout(function () {
                  r.$container.removeClass("lg-dragging-vertical"),
                    r.outer
                      .removeClass("lg-dragging lg-hide-items")
                      .addClass("lg-components-open");
                  var s = !0;
                  if ("horizontal" === r.swipeDirection) {
                    i = e.pageX - t.pageX;
                    var o = Math.abs(e.pageX - t.pageX);
                    i < 0 && o > r.settings.swipeThreshold
                      ? (r.goToNextSlide(!0), (s = !1))
                      : i > 0 &&
                        o > r.settings.swipeThreshold &&
                        (r.goToPrevSlide(!0), (s = !1));
                  } else if ("vertical" === r.swipeDirection) {
                    if (
                      ((i = Math.abs(e.pageY - t.pageY)),
                      r.settings.closable && r.settings.swipeToClose && i > 100)
                    )
                      return void r.closeGallery();
                    r.$backdrop.css("opacity", 1);
                  }
                  if (
                    (r.outer.find(".lg-item").removeAttr("style"),
                    s && Math.abs(e.pageX - t.pageX) < 5)
                  ) {
                    var a = Rn(n.target);
                    r.isPosterElement(a) && r.LGel.trigger(zn);
                  }
                  r.swipeDirection = void 0;
                }),
                setTimeout(function () {
                  r.outer.hasClass("lg-dragging") ||
                    "lg-slide" === r.settings.mode ||
                    r.outer.removeClass("lg-slide");
                }, this.settings.speed + 100);
            }),
            (e.prototype.enableSwipe = function () {
              var e = this,
                t = {},
                n = {},
                i = !1,
                r = !1;
              this.settings.enableSwipe &&
                (this.$inner.on("touchstart.lg", function (n) {
                  e.dragOrSwipeEnabled = !0;
                  var i = e.getSlideItem(e.index);
                  (!Rn(n.target).hasClass("lg-item") &&
                    !i.get().contains(n.target)) ||
                    e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    1 !== n.targetTouches.length ||
                    ((r = !0),
                    (e.touchAction = "swipe"),
                    e.manageSwipeClass(),
                    (t = {
                      pageX: n.targetTouches[0].pageX,
                      pageY: n.targetTouches[0].pageY,
                    }));
                }),
                this.$inner.on("touchmove.lg", function (s) {
                  r &&
                    "swipe" === e.touchAction &&
                    1 === s.targetTouches.length &&
                    ((n = {
                      pageX: s.targetTouches[0].pageX,
                      pageY: s.targetTouches[0].pageY,
                    }),
                    e.touchMove(t, n, s),
                    (i = !0));
                }),
                this.$inner.on("touchend.lg", function (s) {
                  if ("swipe" === e.touchAction) {
                    if (i) (i = !1), e.touchEnd(n, t, s);
                    else if (r) {
                      var o = Rn(s.target);
                      e.isPosterElement(o) && e.LGel.trigger(zn);
                    }
                    (e.touchAction = void 0), (r = !1);
                  }
                }));
            }),
            (e.prototype.enableDrag = function () {
              var e = this,
                t = {},
                n = {},
                i = !1,
                r = !1;
              this.settings.enableDrag &&
                (this.outer.on("mousedown.lg", function (n) {
                  e.dragOrSwipeEnabled = !0;
                  var r = e.getSlideItem(e.index);
                  (Rn(n.target).hasClass("lg-item") ||
                    r.get().contains(n.target)) &&
                    (e.outer.hasClass("lg-zoomed") ||
                      e.lgBusy ||
                      (n.preventDefault(),
                      e.lgBusy ||
                        (e.manageSwipeClass(),
                        (t = { pageX: n.pageX, pageY: n.pageY }),
                        (i = !0),
                        (e.outer.get().scrollLeft += 1),
                        (e.outer.get().scrollLeft -= 1),
                        e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                        e.LGel.trigger($n))));
                }),
                Rn(window).on("mousemove.lg.global" + this.lgId, function (s) {
                  i &&
                    e.lgOpened &&
                    ((r = !0),
                    (n = { pageX: s.pageX, pageY: s.pageY }),
                    e.touchMove(t, n),
                    e.LGel.trigger(Nn));
                }),
                Rn(window).on("mouseup.lg.global" + this.lgId, function (s) {
                  if (e.lgOpened) {
                    var o = Rn(s.target);
                    r
                      ? ((r = !1), e.touchEnd(n, t, s), e.LGel.trigger(_n))
                      : e.isPosterElement(o) && e.LGel.trigger(zn),
                      i &&
                        ((i = !1),
                        e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                  }
                }));
            }),
            (e.prototype.triggerPosterClick = function () {
              var e = this;
              this.$inner.on("click.lg", function (t) {
                !e.dragOrSwipeEnabled &&
                  e.isPosterElement(Rn(t.target)) &&
                  e.LGel.trigger(zn);
              });
            }),
            (e.prototype.manageSwipeClass = function () {
              var e = this.index + 1,
                t = this.index - 1;
              this.settings.loop &&
                this.galleryItems.length > 2 &&
                (0 === this.index
                  ? (t = this.galleryItems.length - 1)
                  : this.index === this.galleryItems.length - 1 && (e = 0)),
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-next-slide lg-prev-slide"),
                t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
                this.getSlideItem(e).addClass("lg-next-slide");
            }),
            (e.prototype.goToNextSlide = function (e) {
              var t = this,
                n = this.settings.loop;
              e && this.galleryItems.length < 3 && (n = !1),
                this.lgBusy ||
                  (this.index + 1 < this.galleryItems.length
                    ? (this.index++,
                      this.LGel.trigger(jn, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : n
                    ? ((this.index = 0),
                      this.LGel.trigger(jn, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-right-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-right-end");
                      }, 400)));
            }),
            (e.prototype.goToPrevSlide = function (e) {
              var t = this,
                n = this.settings.loop;
              e && this.galleryItems.length < 3 && (n = !1),
                this.lgBusy ||
                  (this.index > 0
                    ? (this.index--,
                      this.LGel.trigger(Hn, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : n
                    ? ((this.index = this.galleryItems.length - 1),
                      this.LGel.trigger(Hn, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-left-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-left-end");
                      }, 400)));
            }),
            (e.prototype.keyPress = function () {
              var e = this;
              Rn(window).on("keydown.lg.global" + this.lgId, function (t) {
                e.lgOpened &&
                  !0 === e.settings.escKey &&
                  27 === t.keyCode &&
                  (t.preventDefault(),
                  e.settings.allowMediaOverlap &&
                  e.outer.hasClass("lg-can-toggle") &&
                  e.outer.hasClass("lg-components-open")
                    ? e.outer.removeClass("lg-components-open")
                    : e.closeGallery()),
                  e.lgOpened &&
                    e.galleryItems.length > 1 &&
                    (37 === t.keyCode &&
                      (t.preventDefault(), e.goToPrevSlide()),
                    39 === t.keyCode &&
                      (t.preventDefault(), e.goToNextSlide()));
              });
            }),
            (e.prototype.arrow = function () {
              var e = this;
              this.getElementById("lg-prev").on("click.lg", function () {
                e.goToPrevSlide();
              }),
                this.getElementById("lg-next").on("click.lg", function () {
                  e.goToNextSlide();
                });
            }),
            (e.prototype.arrowDisable = function (e) {
              if (!this.settings.loop && this.settings.hideControlOnEnd) {
                var t = this.getElementById("lg-prev"),
                  n = this.getElementById("lg-next");
                e + 1 === this.galleryItems.length
                  ? n.attr("disabled", "disabled").addClass("disabled")
                  : n.removeAttr("disabled").removeClass("disabled"),
                  0 === e
                    ? t.attr("disabled", "disabled").addClass("disabled")
                    : t.removeAttr("disabled").removeClass("disabled");
              }
            }),
            (e.prototype.setTranslate = function (e, t, n, i, r) {
              void 0 === i && (i = 1),
                void 0 === r && (r = 1),
                e.css(
                  "transform",
                  "translate3d(" +
                    t +
                    "px, " +
                    n +
                    "px, 0px) scale3d(" +
                    i +
                    ", " +
                    r +
                    ", 1)"
                );
            }),
            (e.prototype.mousewheel = function () {
              var e = this,
                t = 0;
              this.outer.on("wheel.lg", function (n) {
                if (n.deltaY && !(e.galleryItems.length < 2)) {
                  n.preventDefault();
                  var i = new Date().getTime();
                  i - t < 1e3 ||
                    ((t = i),
                    n.deltaY > 0
                      ? e.goToNextSlide()
                      : n.deltaY < 0 && e.goToPrevSlide());
                }
              });
            }),
            (e.prototype.isSlideElement = function (e) {
              return (
                e.hasClass("lg-outer") ||
                e.hasClass("lg-item") ||
                e.hasClass("lg-img-wrap")
              );
            }),
            (e.prototype.isPosterElement = function (e) {
              var t = this.getSlideItem(this.index)
                .find(".lg-video-play-button")
                .get();
              return (
                e.hasClass("lg-video-poster") ||
                e.hasClass("lg-video-play-button") ||
                (t && t.contains(e.get()))
              );
            }),
            (e.prototype.toggleMaximize = function () {
              var e = this;
              this.getElementById("lg-maximize").on("click.lg", function () {
                e.$container.toggleClass("lg-inline"), e.refreshOnResize();
              });
            }),
            (e.prototype.invalidateItems = function () {
              for (var e = 0; e < this.items.length; e++) {
                var t = Rn(this.items[e]);
                t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
              }
            }),
            (e.prototype.manageCloseGallery = function () {
              var e = this;
              if (this.settings.closable) {
                var t = !1;
                this.getElementById("lg-close").on("click.lg", function () {
                  e.closeGallery();
                }),
                  this.settings.closeOnTap &&
                    (this.outer.on("mousedown.lg", function (n) {
                      var i = Rn(n.target);
                      t = !!e.isSlideElement(i);
                    }),
                    this.outer.on("mousemove.lg", function () {
                      t = !1;
                    }),
                    this.outer.on("mouseup.lg", function (n) {
                      var i = Rn(n.target);
                      e.isSlideElement(i) &&
                        t &&
                        (e.outer.hasClass("lg-dragging") || e.closeGallery());
                    }));
              }
            }),
            (e.prototype.closeGallery = function (e) {
              var t = this;
              if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
              this.LGel.trigger(Bn), Rn(window).scrollTop(this.prevScrollTop);
              var n,
                i = this.items[this.index];
              if (this.zoomFromOrigin && i) {
                var r = this.mediaContainerPosition,
                  s = r.top,
                  o = r.bottom,
                  a = this.galleryItems[this.index],
                  l = a.__slideVideoInfo,
                  c = a.poster,
                  u = Xn(
                    i,
                    this.outer,
                    s + o,
                    l && c && this.settings.videoMaxSize
                  );
                n = Yn(i, this.outer, s, o, u);
              }
              this.zoomFromOrigin && n
                ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                  this.getSlideItem(this.index)
                    .addClass("lg-start-end-progress")
                    .css(
                      "transition-duration",
                      this.settings.startAnimationDuration + "ms"
                    )
                    .css("transform", n))
                : (this.outer.addClass("lg-hide-items"),
                  this.outer.removeClass("lg-zoom-from-image")),
                this.destroyModules(),
                (this.lGalleryOn = !1),
                (this.isDummyImageRemoved = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                clearTimeout(this.hideBarTimeout),
                (this.hideBarTimeout = !1),
                Rn("html").removeClass("lg-on"),
                this.outer.removeClass("lg-visible lg-components-open"),
                this.$backdrop.removeClass("in").css("opacity", 0);
              var d =
                this.zoomFromOrigin && n
                  ? Math.max(
                      this.settings.startAnimationDuration,
                      this.settings.backdropDuration
                    )
                  : this.settings.backdropDuration;
              return (
                this.$container.removeClass("lg-show-in"),
                setTimeout(function () {
                  t.zoomFromOrigin &&
                    n &&
                    t.outer.removeClass("lg-zoom-from-image"),
                    t.$container.removeClass("lg-show"),
                    t.$backdrop
                      .removeAttr("style")
                      .css(
                        "transition-duration",
                        t.settings.backdropDuration + "ms"
                      ),
                    t.outer.removeClass("lg-closing " + t.settings.startClass),
                    t
                      .getSlideItem(t.index)
                      .removeClass("lg-start-end-progress"),
                    t.$inner.empty(),
                    t.lgOpened && t.LGel.trigger(qn, { instance: t }),
                    t.outer.get() && t.outer.get().blur(),
                    (t.lgOpened = !1);
                }, d + 100),
                d + 100
              );
            }),
            (e.prototype.initModules = function () {
              this.plugins.forEach(function (e) {
                try {
                  e.init();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly initiated"
                  );
                }
              });
            }),
            (e.prototype.destroyModules = function (e) {
              this.plugins.forEach(function (t) {
                try {
                  e ? t.destroy() : t.closeGallery && t.closeGallery();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly destroyed"
                  );
                }
              });
            }),
            (e.prototype.refresh = function (e) {
              this.settings.dynamic || this.invalidateItems(),
                (this.galleryItems = e || this.getItems()),
                this.updateControls(),
                this.openGalleryOnItemClick(),
                this.LGel.trigger(In);
            }),
            (e.prototype.updateControls = function () {
              this.addSlideVideoInfo(this.galleryItems),
                this.updateCounterTotal(),
                this.manageSingleSlideClassName();
            }),
            (e.prototype.destroy = function () {
              var e = this,
                t = this.closeGallery(!0);
              return (
                setTimeout(function () {
                  e.destroyModules(!0),
                    e.settings.dynamic || e.invalidateItems(),
                    Rn(window).off(".lg.global" + e.lgId),
                    e.LGel.off(".lg"),
                    e.$container.remove();
                }, t),
                t
              );
            }),
            e
          );
        })();
      const si = function (e, t) {
        return new ri(e, t);
      };
      var oi = function () {
          return (
            (oi =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            oi.apply(this, arguments)
          );
        },
        ai = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: "middle",
          alignThumbnails: "middle",
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbMargin: 5,
          appendThumbnailsTo: ".lg-components",
          toggleThumb: !1,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          thumbnailSwipeThreshold: 10,
          loadYouTubeThumbnail: !0,
          youTubeThumbSize: 1,
          thumbnailPluginStrings: { toggleThumbnails: "Toggle thumbnails" },
        },
        li = "lgContainerResize",
        ci = "lgUpdateSlides",
        ui = "lgBeforeOpen",
        di = "lgBeforeSlide",
        pi = (function () {
          function e(e, t) {
            return (
              (this.thumbOuterWidth = 0),
              (this.thumbTotalWidth = 0),
              (this.translateX = 0),
              (this.thumbClickable = !1),
              (this.core = e),
              (this.$LG = t),
              this
            );
          }
          return (
            (e.prototype.init = function () {
              (this.settings = oi(oi({}, ai), this.core.settings)),
                (this.thumbOuterWidth = 0),
                (this.thumbTotalWidth =
                  this.core.galleryItems.length *
                  (this.settings.thumbWidth + this.settings.thumbMargin)),
                (this.translateX = 0),
                this.setAnimateThumbStyles(),
                this.core.settings.allowMediaOverlap ||
                  (this.settings.toggleThumb = !1),
                this.settings.thumbnail &&
                  (this.build(),
                  this.settings.animateThumb
                    ? (this.settings.enableThumbDrag && this.enableThumbDrag(),
                      this.settings.enableThumbSwipe && this.enableThumbSwipe(),
                      (this.thumbClickable = !1))
                    : (this.thumbClickable = !0),
                  this.toggleThumbBar(),
                  this.thumbKeyPress());
            }),
            (e.prototype.build = function () {
              var e = this;
              this.setThumbMarkup(),
                this.manageActiveClassOnSlideChange(),
                this.$lgThumb.first().on("click.lg touchend.lg", function (t) {
                  var n = e.$LG(t.target);
                  n.hasAttribute("data-lg-item-id") &&
                    setTimeout(function () {
                      if (e.thumbClickable && !e.core.lgBusy) {
                        var t = parseInt(n.attr("data-lg-item-id"));
                        e.core.slide(t, !1, !0, !1);
                      }
                    }, 50);
                }),
                this.core.LGel.on(di + ".thumb", function (t) {
                  var n = t.detail.index;
                  e.animateThumb(n);
                }),
                this.core.LGel.on(ui + ".thumb", function () {
                  e.thumbOuterWidth = e.core.outer.get().offsetWidth;
                }),
                this.core.LGel.on(ci + ".thumb", function () {
                  e.rebuildThumbnails();
                }),
                this.core.LGel.on(li + ".thumb", function () {
                  e.core.lgOpened &&
                    setTimeout(function () {
                      (e.thumbOuterWidth = e.core.outer.get().offsetWidth),
                        e.animateThumb(e.core.index),
                        (e.thumbOuterWidth = e.core.outer.get().offsetWidth);
                    }, 50);
                });
            }),
            (e.prototype.setThumbMarkup = function () {
              var e = "lg-thumb-outer ";
              this.settings.alignThumbnails &&
                (e += "lg-thumb-align-" + this.settings.alignThumbnails);
              var t =
                '<div class="' +
                e +
                '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
              this.core.outer.addClass("lg-has-thumb"),
                ".lg-components" === this.settings.appendThumbnailsTo
                  ? this.core.$lgComponents.append(t)
                  : this.core.outer.append(t),
                (this.$thumbOuter = this.core.outer
                  .find(".lg-thumb-outer")
                  .first()),
                (this.$lgThumb = this.core.outer.find(".lg-thumb").first()),
                this.settings.animateThumb &&
                  this.core.outer
                    .find(".lg-thumb")
                    .css("transition-duration", this.core.settings.speed + "ms")
                    .css("width", this.thumbTotalWidth + "px")
                    .css("position", "relative"),
                this.setThumbItemHtml(this.core.galleryItems);
            }),
            (e.prototype.enableThumbDrag = function () {
              var e = this,
                t = {
                  cords: { startX: 0, endX: 0 },
                  isMoved: !1,
                  newTranslateX: 0,
                  startTime: new Date(),
                  endTime: new Date(),
                  touchMoveTime: 0,
                },
                n = !1;
              this.$thumbOuter.addClass("lg-grab"),
                this.core.outer
                  .find(".lg-thumb")
                  .first()
                  .on("mousedown.lg.thumb", function (i) {
                    e.thumbTotalWidth > e.thumbOuterWidth &&
                      (i.preventDefault(),
                      (t.cords.startX = i.pageX),
                      (t.startTime = new Date()),
                      (e.thumbClickable = !1),
                      (n = !0),
                      (e.core.outer.get().scrollLeft += 1),
                      (e.core.outer.get().scrollLeft -= 1),
                      e.$thumbOuter
                        .removeClass("lg-grab")
                        .addClass("lg-grabbing"));
                  }),
                this.$LG(window).on(
                  "mousemove.lg.thumb.global" + this.core.lgId,
                  function (i) {
                    e.core.lgOpened &&
                      n &&
                      ((t.cords.endX = i.pageX), (t = e.onThumbTouchMove(t)));
                  }
                ),
                this.$LG(window).on(
                  "mouseup.lg.thumb.global" + this.core.lgId,
                  function () {
                    e.core.lgOpened &&
                      (t.isMoved
                        ? (t = e.onThumbTouchEnd(t))
                        : (e.thumbClickable = !0),
                      n &&
                        ((n = !1),
                        e.$thumbOuter
                          .removeClass("lg-grabbing")
                          .addClass("lg-grab")));
                  }
                );
            }),
            (e.prototype.enableThumbSwipe = function () {
              var e = this,
                t = {
                  cords: { startX: 0, endX: 0 },
                  isMoved: !1,
                  newTranslateX: 0,
                  startTime: new Date(),
                  endTime: new Date(),
                  touchMoveTime: 0,
                };
              this.$lgThumb.on("touchstart.lg", function (n) {
                e.thumbTotalWidth > e.thumbOuterWidth &&
                  (n.preventDefault(),
                  (t.cords.startX = n.targetTouches[0].pageX),
                  (e.thumbClickable = !1),
                  (t.startTime = new Date()));
              }),
                this.$lgThumb.on("touchmove.lg", function (n) {
                  e.thumbTotalWidth > e.thumbOuterWidth &&
                    (n.preventDefault(),
                    (t.cords.endX = n.targetTouches[0].pageX),
                    (t = e.onThumbTouchMove(t)));
                }),
                this.$lgThumb.on("touchend.lg", function () {
                  t.isMoved
                    ? (t = e.onThumbTouchEnd(t))
                    : (e.thumbClickable = !0);
                });
            }),
            (e.prototype.rebuildThumbnails = function () {
              var e = this;
              this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),
                setTimeout(function () {
                  (e.thumbTotalWidth =
                    e.core.galleryItems.length *
                    (e.settings.thumbWidth + e.settings.thumbMargin)),
                    e.$lgThumb.css("width", e.thumbTotalWidth + "px"),
                    e.$lgThumb.empty(),
                    e.setThumbItemHtml(e.core.galleryItems),
                    e.animateThumb(e.core.index);
                }, 50),
                setTimeout(function () {
                  e.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
                }, 200);
            }),
            (e.prototype.setTranslate = function (e) {
              this.$lgThumb.css(
                "transform",
                "translate3d(-" + e + "px, 0px, 0px)"
              );
            }),
            (e.prototype.getPossibleTransformX = function (e) {
              return (
                e > this.thumbTotalWidth - this.thumbOuterWidth &&
                  (e = this.thumbTotalWidth - this.thumbOuterWidth),
                e < 0 && (e = 0),
                e
              );
            }),
            (e.prototype.animateThumb = function (e) {
              if (
                (this.$lgThumb.css(
                  "transition-duration",
                  this.core.settings.speed + "ms"
                ),
                this.settings.animateThumb)
              ) {
                var t = 0;
                switch (this.settings.currentPagerPosition) {
                  case "left":
                    t = 0;
                    break;
                  case "middle":
                    t = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                    break;
                  case "right":
                    t = this.thumbOuterWidth - this.settings.thumbWidth;
                }
                (this.translateX =
                  (this.settings.thumbWidth + this.settings.thumbMargin) * e -
                  1 -
                  t),
                  this.translateX >
                    this.thumbTotalWidth - this.thumbOuterWidth &&
                    (this.translateX =
                      this.thumbTotalWidth - this.thumbOuterWidth),
                  this.translateX < 0 && (this.translateX = 0),
                  this.setTranslate(this.translateX);
              }
            }),
            (e.prototype.onThumbTouchMove = function (e) {
              return (
                (e.newTranslateX = this.translateX),
                (e.isMoved = !0),
                (e.touchMoveTime = new Date().valueOf()),
                (e.newTranslateX -= e.cords.endX - e.cords.startX),
                (e.newTranslateX = this.getPossibleTransformX(e.newTranslateX)),
                this.setTranslate(e.newTranslateX),
                this.$thumbOuter.addClass("lg-dragging"),
                e
              );
            }),
            (e.prototype.onThumbTouchEnd = function (e) {
              (e.isMoved = !1),
                (e.endTime = new Date()),
                this.$thumbOuter.removeClass("lg-dragging");
              var t = e.endTime.valueOf() - e.startTime.valueOf(),
                n = e.cords.endX - e.cords.startX,
                i = Math.abs(n) / t;
              return (
                i > 0.15 && e.endTime.valueOf() - e.touchMoveTime < 30
                  ? ((i += 1) > 2 && (i += 1),
                    (i += i * (Math.abs(n) / this.thumbOuterWidth)),
                    this.$lgThumb.css(
                      "transition-duration",
                      Math.min(i - 1, 2) + "settings"
                    ),
                    (n *= i),
                    (this.translateX = this.getPossibleTransformX(
                      this.translateX - n
                    )),
                    this.setTranslate(this.translateX))
                  : (this.translateX = e.newTranslateX),
                Math.abs(e.cords.endX - e.cords.startX) <
                  this.settings.thumbnailSwipeThreshold &&
                  (this.thumbClickable = !0),
                e
              );
            }),
            (e.prototype.getThumbHtml = function (e, t) {
              var n,
                i = this.core.galleryItems[t].__slideVideoInfo || {};
              return (
                (n =
                  i.youtube && this.settings.loadYouTubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      i.youtube[1] +
                      "/" +
                      this.settings.youTubeThumbSize +
                      ".jpg"
                    : e),
                '<div data-lg-item-id="' +
                  t +
                  '" class="lg-thumb-item ' +
                  (t === this.core.index ? " active" : "") +
                  '" \n        style="width:' +
                  this.settings.thumbWidth +
                  "px; height: " +
                  this.settings.thumbHeight +
                  ";\n            margin-right: " +
                  this.settings.thumbMargin +
                  'px;">\n            <img data-lg-item-id="' +
                  t +
                  '" src="' +
                  n +
                  '" />\n        </div>'
              );
            }),
            (e.prototype.getThumbItemHtml = function (e) {
              for (var t = "", n = 0; n < e.length; n++)
                t += this.getThumbHtml(e[n].thumb, n);
              return t;
            }),
            (e.prototype.setThumbItemHtml = function (e) {
              var t = this.getThumbItemHtml(e);
              this.$lgThumb.html(t);
            }),
            (e.prototype.setAnimateThumbStyles = function () {
              this.settings.animateThumb &&
                this.core.outer.addClass("lg-animate-thumb");
            }),
            (e.prototype.manageActiveClassOnSlideChange = function () {
              var e = this;
              this.core.LGel.on(di + ".thumb", function (t) {
                var n = e.core.outer.find(".lg-thumb-item"),
                  i = t.detail.index;
                n.removeClass("active"), n.eq(i).addClass("active");
              });
            }),
            (e.prototype.toggleThumbBar = function () {
              var e = this;
              this.settings.toggleThumb &&
                (this.core.outer.addClass("lg-can-toggle"),
                this.core.$toolbar.append(
                  '<button type="button" aria-label="' +
                    this.settings.thumbnailPluginStrings.toggleThumbnails +
                    '" class="lg-toggle-thumb lg-icon"></button>'
                ),
                this.core.outer
                  .find(".lg-toggle-thumb")
                  .first()
                  .on("click.lg", function () {
                    e.core.outer.toggleClass("lg-components-open");
                  }));
            }),
            (e.prototype.thumbKeyPress = function () {
              var e = this;
              this.$LG(window).on(
                "keydown.lg.thumb.global" + this.core.lgId,
                function (t) {
                  e.core.lgOpened &&
                    e.settings.toggleThumb &&
                    (38 === t.keyCode
                      ? (t.preventDefault(),
                        e.core.outer.addClass("lg-components-open"))
                      : 40 === t.keyCode &&
                        (t.preventDefault(),
                        e.core.outer.removeClass("lg-components-open")));
                }
              );
            }),
            (e.prototype.destroy = function () {
              this.settings.thumbnail &&
                (this.$LG(window).off(".lg.thumb.global" + this.core.lgId),
                this.core.LGel.off(".lg.thumb"),
                this.core.LGel.off(".thumb"),
                this.$thumbOuter.remove(),
                this.core.outer.removeClass("lg-has-thumb"));
            }),
            e
          );
        })();
      const hi = pi;
      var fi = function () {
          return (
            (fi =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            fi.apply(this, arguments)
          );
        },
        gi = {
          fullScreen: !0,
          fullscreenPluginStrings: { toggleFullscreen: "Toggle Fullscreen" },
        },
        mi = (function () {
          function e(e, t) {
            return (
              (this.core = e),
              (this.$LG = t),
              (this.settings = fi(fi({}, gi), this.core.settings)),
              this
            );
          }
          return (
            (e.prototype.init = function () {
              var e = "";
              if (this.settings.fullScreen) {
                if (
                  !(
                    document.fullscreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.msFullscreenEnabled
                  )
                )
                  return;
                (e =
                  '<button type="button" aria-label="' +
                  this.settings.fullscreenPluginStrings.toggleFullscreen +
                  '" class="lg-fullscreen lg-icon"></button>'),
                  this.core.$toolbar.append(e),
                  this.fullScreen();
              }
            }),
            (e.prototype.isFullScreen = function () {
              return (
                document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement
              );
            }),
            (e.prototype.requestFullscreen = function () {
              var e = document.documentElement;
              e.requestFullscreen
                ? e.requestFullscreen()
                : e.msRequestFullscreen
                ? e.msRequestFullscreen()
                : e.mozRequestFullScreen
                ? e.mozRequestFullScreen()
                : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
            }),
            (e.prototype.exitFullscreen = function () {
              document.exitFullscreen
                ? document.exitFullscreen()
                : document.msExitFullscreen
                ? document.msExitFullscreen()
                : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.webkitExitFullscreen &&
                  document.webkitExitFullscreen();
            }),
            (e.prototype.fullScreen = function () {
              var e = this;
              this.$LG(document).on(
                "fullscreenchange.lg.global" +
                  this.core.lgId +
                  " \n            webkitfullscreenchange.lg.global" +
                  this.core.lgId +
                  " \n            mozfullscreenchange.lg.global" +
                  this.core.lgId +
                  " \n            MSFullscreenChange.lg.global" +
                  this.core.lgId,
                function () {
                  e.core.lgOpened &&
                    e.core.outer.toggleClass("lg-fullscreen-on");
                }
              ),
                this.core.outer
                  .find(".lg-fullscreen")
                  .first()
                  .on("click.lg", function () {
                    e.isFullScreen()
                      ? e.exitFullscreen()
                      : e.requestFullscreen();
                  });
            }),
            (e.prototype.closeGallery = function () {
              this.isFullScreen() && this.exitFullscreen();
            }),
            (e.prototype.destroy = function () {
              this.$LG(document).off(
                "fullscreenchange.lg.global" +
                  this.core.lgId +
                  " \n            webkitfullscreenchange.lg.global" +
                  this.core.lgId +
                  " \n            mozfullscreenchange.lg.global" +
                  this.core.lgId +
                  " \n            MSFullscreenChange.lg.global" +
                  this.core.lgId
              );
            }),
            e
          );
        })();
      const vi = mi;
      var yi = function () {
          return (
            (yi =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            yi.apply(this, arguments)
          );
        },
        bi = {
          scale: 1,
          zoom: !0,
          actualSize: !0,
          showZoomInOutIcons: !1,
          actualSizeIcons: { zoomIn: "lg-zoom-in", zoomOut: "lg-zoom-out" },
          enableZoomAfter: 300,
          zoomPluginStrings: {
            zoomIn: "Zoom in",
            zoomOut: "Zoom out",
            viewActualSize: "View actual size",
          },
        },
        wi = "lgContainerResize",
        xi = "lgBeforeOpen",
        Ti = "lgAfterOpen",
        Si = "lgSlideItemLoad",
        Ci = "lgAfterSlide",
        Ei = "lgRotateLeft",
        Li = "lgRotateRight",
        Ii = "lgFlipHorizontal",
        Oi = "lgFlipVertical",
        Ai = (function () {
          function e(e, t) {
            return (
              (this.core = e),
              (this.$LG = t),
              (this.settings = yi(yi({}, bi), this.core.settings)),
              this
            );
          }
          return (
            (e.prototype.buildTemplates = function () {
              var e = this.settings.showZoomInOutIcons
                ? '<button id="' +
                  this.core.getIdName("lg-zoom-in") +
                  '" type="button" aria-label="' +
                  this.settings.zoomPluginStrings.zoomIn +
                  '" class="lg-zoom-in lg-icon"></button><button id="' +
                  this.core.getIdName("lg-zoom-out") +
                  '" type="button" aria-label="' +
                  this.settings.zoomPluginStrings.zoomIn +
                  '" class="lg-zoom-out lg-icon"></button>'
                : "";
              this.settings.actualSize &&
                (e +=
                  '<button id="' +
                  this.core.getIdName("lg-actual-size") +
                  '" type="button" aria-label="' +
                  this.settings.zoomPluginStrings.viewActualSize +
                  '" class="' +
                  this.settings.actualSizeIcons.zoomIn +
                  ' lg-icon"></button>'),
                this.core.outer.addClass("lg-use-transition-for-zoom"),
                this.core.$toolbar.first().append(e);
            }),
            (e.prototype.enableZoom = function (e) {
              var t = this,
                n = this.settings.enableZoomAfter + e.detail.delay;
              this.$LG("body").first().hasClass("lg-from-hash") &&
              e.detail.delay
                ? (n = 0)
                : this.$LG("body").first().removeClass("lg-from-hash"),
                (this.zoomableTimeout = setTimeout(function () {
                  t.isImageSlide() &&
                    (t.core
                      .getSlideItem(e.detail.index)
                      .addClass("lg-zoomable"),
                    e.detail.index === t.core.index && t.setZoomEssentials());
                }, n + 30));
            }),
            (e.prototype.enableZoomOnSlideItemLoad = function () {
              this.core.LGel.on(Si + ".zoom", this.enableZoom.bind(this));
            }),
            (e.prototype.getModifier = function (e, t, n) {
              var i = e;
              e = Math.abs(e);
              var r = this.getCurrentTransform(n);
              if (!r) return 1;
              var s = 1;
              if ("X" === t) {
                var o = Math.sign(parseFloat(r[0]));
                0 === e || 180 === e
                  ? (s = 1)
                  : 90 === e &&
                    (s =
                      (-90 === i && 1 === o) || (90 === i && -1 === o)
                        ? -1
                        : 1),
                  (s *= o);
              } else {
                var a = Math.sign(parseFloat(r[3]));
                if (0 === e || 180 === e) s = 1;
                else if (90 === e) {
                  var l = parseFloat(r[1]),
                    c = parseFloat(r[2]);
                  s = Math.sign(l * c * i * a);
                }
                s *= a;
              }
              return s;
            }),
            (e.prototype.getImageSize = function (e, t, n) {
              return (
                90 === Math.abs(t) && (n = "x" === n ? "y" : "x"),
                e[{ y: "offsetHeight", x: "offsetWidth" }[n]]
              );
            }),
            (e.prototype.getDragCords = function (e, t) {
              return 90 === t
                ? { x: e.pageY, y: e.pageX }
                : { x: e.pageX, y: e.pageY };
            }),
            (e.prototype.getSwipeCords = function (e, t) {
              var n = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY;
              return 90 === t ? { x: i, y: n } : { x: n, y: i };
            }),
            (e.prototype.getDragAllowedAxises = function (e, t) {
              t = t || this.scale || 1;
              var n = this.imageYSize * t > this.containerRect.height,
                i = this.imageXSize * t > this.containerRect.width;
              return 90 === e
                ? { allowX: n, allowY: i }
                : { allowX: i, allowY: n };
            }),
            (e.prototype.getCurrentTransform = function (e) {
              if (e) {
                var t = window.getComputedStyle(e, null),
                  n =
                    t.getPropertyValue("-webkit-transform") ||
                    t.getPropertyValue("-moz-transform") ||
                    t.getPropertyValue("-ms-transform") ||
                    t.getPropertyValue("-o-transform") ||
                    t.getPropertyValue("transform") ||
                    "none";
                return "none" !== n
                  ? n.split("(")[1].split(")")[0].split(",")
                  : void 0;
              }
            }),
            (e.prototype.getCurrentRotation = function (e) {
              if (!e) return 0;
              var t = this.getCurrentTransform(e);
              return t
                ? Math.round(
                    Math.atan2(parseFloat(t[1]), parseFloat(t[0])) *
                      (180 / Math.PI)
                  )
                : 0;
            }),
            (e.prototype.setZoomEssentials = function () {
              var e = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-image")
                  .first(),
                t = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-img-rotate")
                  .first()
                  .get();
              (this.rotateValue = this.getCurrentRotation(t)),
                (this.imageYSize = this.getImageSize(
                  e.get(),
                  this.rotateValue,
                  "y"
                )),
                (this.imageXSize = this.getImageSize(
                  e.get(),
                  this.rotateValue,
                  "x"
                )),
                (this.containerRect = this.core.outer
                  .get()
                  .getBoundingClientRect()),
                (this.modifierX = this.getModifier(this.rotateValue, "X", t)),
                (this.modifierY = this.getModifier(this.rotateValue, "Y", t));
            }),
            (e.prototype.zoomImage = function (e) {
              var t,
                n,
                i =
                  (this.containerRect.width - this.imageXSize) / 2 +
                  this.containerRect.left,
                r = this.core.mediaContainerPosition,
                s = r.top,
                o = r.bottom,
                a = Math.abs(s - o) / 2,
                l =
                  (this.containerRect.height -
                    this.imageYSize -
                    a * this.modifierX) /
                    2 +
                  this.scrollTop +
                  this.containerRect.top;
              1 === e && (this.positionChanged = !1);
              var c = this.getDragAllowedAxises(Math.abs(this.rotateValue), e),
                u = c.allowY,
                d = c.allowX;
              this.positionChanged &&
                ((t = this.left / (this.scale - 1)),
                (n = this.top / (this.scale - 1)),
                (this.pageX = Math.abs(t) + i),
                (this.pageY = Math.abs(n) + l),
                (this.positionChanged = !1));
              var p = this.getPossibleSwipeDragCords(this.rotateValue, e),
                h = (e - 1) * (i - this.pageX),
                f = (e - 1) * (l - this.pageY);
              d
                ? this.isBeyondPossibleLeft(h, p.minX)
                  ? (h = p.minX)
                  : this.isBeyondPossibleRight(h, p.maxX) && (h = p.maxX)
                : e > 1 &&
                  (h < p.minX ? (h = p.minX) : h > p.maxX && (h = p.maxX)),
                u
                  ? this.isBeyondPossibleTop(f, p.minY)
                    ? (f = p.minY)
                    : this.isBeyondPossibleBottom(f, p.maxY) && (f = p.maxY)
                  : e > 1 &&
                    (f < p.minY ? (f = p.minY) : f > p.maxY && (f = p.maxY)),
                this.setZoomStyles({ x: h, y: f, scale: e });
            }),
            (e.prototype.setZoomStyles = function (e) {
              var t = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-image")
                  .first(),
                n = this.core.outer.find(".lg-current .lg-dummy-img").first(),
                i = t.parent();
              (this.scale = e.scale),
                t.css(
                  "transform",
                  "scale3d(" + e.scale + ", " + e.scale + ", 1)"
                ),
                n.css(
                  "transform",
                  "scale3d(" + e.scale + ", " + e.scale + ", 1)"
                );
              var r = "translate3d(" + e.x + "px, " + e.y + "px, 0)";
              i.css("transform", r), (this.left = e.x), (this.top = e.y);
            }),
            (e.prototype.setActualSize = function (e, t) {
              var n = this;
              if (
                this.isImageSlide() &&
                !this.core.outer.hasClass("lg-first-slide-loading")
              ) {
                var i = this.getCurrentImageActualSizeScale();
                this.core.outer.hasClass("lg-zoomed")
                  ? (this.scale = 1)
                  : (this.scale = this.getScale(i)),
                  this.setPageCords(t),
                  this.beginZoom(this.scale),
                  this.zoomImage(this.scale),
                  setTimeout(function () {
                    n.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
                  }, 10);
              }
            }),
            (e.prototype.getNaturalWidth = function (e) {
              var t = this.core.getSlideItem(e).find(".lg-image").first(),
                n = this.core.galleryItems[e].width;
              return n ? parseFloat(n) : t.get().naturalWidth;
            }),
            (e.prototype.getActualSizeScale = function (e, t) {
              return e > t ? e / t || 2 : 1;
            }),
            (e.prototype.getCurrentImageActualSizeScale = function () {
              var e = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-image")
                  .first()
                  .get().offsetWidth,
                t = this.getNaturalWidth(this.core.index) || e;
              return this.getActualSizeScale(t, e);
            }),
            (e.prototype.getPageCords = function (e) {
              var t = {};
              if (e)
                (t.x = e.pageX || e.targetTouches[0].pageX),
                  (t.y = e.pageY || e.targetTouches[0].pageY);
              else {
                var n = this.core.outer.get().getBoundingClientRect();
                (t.x = n.width / 2 + n.left),
                  (t.y = n.height / 2 + this.scrollTop + n.top);
              }
              return t;
            }),
            (e.prototype.setPageCords = function (e) {
              var t = this.getPageCords(e);
              (this.pageX = t.x), (this.pageY = t.y);
            }),
            (e.prototype.beginZoom = function (e) {
              (this.core.outer.removeClass(
                "lg-zoom-drag-transition lg-zoom-dragging"
              ),
              e > 1)
                ? (this.core.outer.addClass("lg-zoomed"),
                  this.core
                    .getElementById("lg-actual-size")
                    .removeClass(this.settings.actualSizeIcons.zoomIn)
                    .addClass(this.settings.actualSizeIcons.zoomOut))
                : this.resetZoom();
              return e > 1;
            }),
            (e.prototype.getScale = function (e) {
              var t = this.getCurrentImageActualSizeScale();
              return e < 1 ? (e = 1) : e > t && (e = t), e;
            }),
            (e.prototype.init = function () {
              var e = this;
              if (this.settings.zoom) {
                this.buildTemplates(), this.enableZoomOnSlideItemLoad();
                var t = null;
                this.core.outer.on("dblclick.lg", function (t) {
                  e.$LG(t.target).hasClass("lg-image") &&
                    e.setActualSize(e.core.index, t);
                }),
                  this.core.outer.on("touchstart.lg", function (n) {
                    var i = e.$LG(n.target);
                    1 === n.targetTouches.length &&
                      i.hasClass("lg-image") &&
                      (t
                        ? (clearTimeout(t),
                          (t = null),
                          n.preventDefault(),
                          e.setActualSize(e.core.index, n))
                        : (t = setTimeout(function () {
                            t = null;
                          }, 300)));
                  }),
                  this.core.LGel.on(
                    wi +
                      ".zoom " +
                      Li +
                      ".zoom " +
                      Ei +
                      ".zoom " +
                      Ii +
                      ".zoom " +
                      Oi +
                      ".zoom",
                    function () {
                      e.core.lgOpened &&
                        e.isImageSlide() &&
                        (e.setPageCords(),
                        e.setZoomEssentials(),
                        e.zoomImage(e.scale));
                    }
                  ),
                  this.$LG(window).on(
                    "scroll.lg.zoom.global" + this.core.lgId,
                    function () {
                      e.core.lgOpened &&
                        (e.scrollTop = e.$LG(window).scrollTop());
                    }
                  ),
                  this.core
                    .getElementById("lg-zoom-out")
                    .on("click.lg", function () {
                      e.core.outer.find(".lg-current .lg-image").get() &&
                        ((e.scale -= e.settings.scale),
                        (e.scale = e.getScale(e.scale)),
                        e.beginZoom(e.scale),
                        e.zoomImage(e.scale));
                    }),
                  this.core
                    .getElementById("lg-zoom-in")
                    .on("click.lg", function () {
                      e.zoomIn();
                    }),
                  this.core
                    .getElementById("lg-actual-size")
                    .on("click.lg", function () {
                      e.setActualSize(e.core.index);
                    }),
                  this.core.LGel.on(xi + ".zoom", function () {
                    e.core.outer.find(".lg-item").removeClass("lg-zoomable");
                  }),
                  this.core.LGel.on(Ti + ".zoom", function () {
                    (e.scrollTop = e.$LG(window).scrollTop()),
                      (e.pageX = e.core.outer.width() / 2),
                      (e.pageY = e.core.outer.height() / 2 + e.scrollTop),
                      (e.scale = 1);
                  }),
                  this.core.LGel.on(Ci + ".zoom", function (t) {
                    var n = t.detail.prevIndex;
                    (e.scale = 1),
                      (e.positionChanged = !1),
                      e.resetZoom(n),
                      e.isImageSlide() && e.setZoomEssentials();
                  }),
                  this.zoomDrag(),
                  this.pinchZoom(),
                  this.zoomSwipe(),
                  (this.zoomableTimeout = !1),
                  (this.positionChanged = !1);
              }
            }),
            (e.prototype.zoomIn = function (e) {
              this.isImageSlide() &&
                (e ? (this.scale = e) : (this.scale += this.settings.scale),
                (this.scale = this.getScale(this.scale)),
                this.beginZoom(this.scale),
                this.zoomImage(this.scale));
            }),
            (e.prototype.resetZoom = function (e) {
              this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
              var t = this.core.getElementById("lg-actual-size"),
                n = this.core.getSlideItem(void 0 !== e ? e : this.core.index);
              t
                .removeClass(this.settings.actualSizeIcons.zoomOut)
                .addClass(this.settings.actualSizeIcons.zoomIn),
                n.find(".lg-img-wrap").first().removeAttr("style"),
                n.find(".lg-image").first().removeAttr("style"),
                (this.scale = 1),
                (this.left = 0),
                (this.top = 0),
                this.setPageCords();
            }),
            (e.prototype.getTouchDistance = function (e) {
              return Math.sqrt(
                (e.targetTouches[0].pageX - e.targetTouches[1].pageX) *
                  (e.targetTouches[0].pageX - e.targetTouches[1].pageX) +
                  (e.targetTouches[0].pageY - e.targetTouches[1].pageY) *
                    (e.targetTouches[0].pageY - e.targetTouches[1].pageY)
              );
            }),
            (e.prototype.pinchZoom = function () {
              var e = this,
                t = 0,
                n = !1,
                i = 1,
                r = this.core.getSlideItem(this.core.index);
              this.core.$inner.on("touchstart.lg", function (n) {
                (r = e.core.getSlideItem(e.core.index)),
                  e.isImageSlide() &&
                    (2 !== n.targetTouches.length ||
                      e.core.outer.hasClass("lg-first-slide-loading") ||
                      (!e.$LG(n.target).hasClass("lg-item") &&
                        !r.get().contains(n.target)) ||
                      ((i = e.scale || 1),
                      e.core.outer.removeClass(
                        "lg-zoom-drag-transition lg-zoom-dragging"
                      ),
                      (e.core.touchAction = "pinch"),
                      (t = e.getTouchDistance(n))));
              }),
                this.core.$inner.on("touchmove.lg", function (s) {
                  if (
                    2 === s.targetTouches.length &&
                    "pinch" === e.core.touchAction &&
                    (e.$LG(s.target).hasClass("lg-item") ||
                      r.get().contains(s.target))
                  ) {
                    s.preventDefault();
                    var o = e.getTouchDistance(s),
                      a = t - o;
                    !n && Math.abs(a) > 5 && (n = !0),
                      n &&
                        ((e.scale = Math.max(1, i + 0.008 * -a)),
                        e.zoomImage(e.scale));
                  }
                }),
                this.core.$inner.on("touchend.lg", function (i) {
                  "pinch" === e.core.touchAction &&
                    (e.$LG(i.target).hasClass("lg-item") ||
                      r.get().contains(i.target)) &&
                    ((n = !1),
                    (t = 0),
                    e.scale <= 1
                      ? e.resetZoom()
                      : ((e.scale = e.getScale(e.scale)),
                        e.zoomImage(e.scale),
                        e.core.outer.addClass("lg-zoomed")),
                    (e.core.touchAction = void 0));
                });
            }),
            (e.prototype.touchendZoom = function (e, t, n, i, r, s) {
              var o = t.x - e.x,
                a = t.y - e.y,
                l = Math.abs(o) / r + 1,
                c = Math.abs(a) / r + 1;
              l > 2 && (l += 1), c > 2 && (c += 1), (o *= l), (a *= c);
              var u = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-img-wrap")
                  .first(),
                d = {};
              (d.x = this.left + o * this.modifierX),
                (d.y = this.top + a * this.modifierY);
              var p = this.getPossibleSwipeDragCords(s);
              (Math.abs(o) > 15 || Math.abs(a) > 15) &&
                (i &&
                  (this.isBeyondPossibleTop(d.y, p.minY)
                    ? (d.y = p.minY)
                    : this.isBeyondPossibleBottom(d.y, p.maxY) &&
                      (d.y = p.maxY)),
                n &&
                  (this.isBeyondPossibleLeft(d.x, p.minX)
                    ? (d.x = p.minX)
                    : this.isBeyondPossibleRight(d.x, p.maxX) &&
                      (d.x = p.maxX)),
                i ? (this.top = d.y) : (d.y = this.top),
                n ? (this.left = d.x) : (d.x = this.left),
                this.setZoomSwipeStyles(u, d),
                (this.positionChanged = !0));
            }),
            (e.prototype.getZoomSwipeCords = function (e, t, n, i, r) {
              var s = {};
              if (i) {
                if (
                  ((s.y = this.top + (t.y - e.y) * this.modifierY),
                  this.isBeyondPossibleTop(s.y, r.minY))
                ) {
                  var o = r.minY - s.y;
                  s.y = r.minY - o / 6;
                } else if (this.isBeyondPossibleBottom(s.y, r.maxY)) {
                  var a = s.y - r.maxY;
                  s.y = r.maxY + a / 6;
                }
              } else s.y = this.top;
              if (n) {
                if (
                  ((s.x = this.left + (t.x - e.x) * this.modifierX),
                  this.isBeyondPossibleLeft(s.x, r.minX))
                ) {
                  var l = r.minX - s.x;
                  s.x = r.minX - l / 6;
                } else if (this.isBeyondPossibleRight(s.x, r.maxX)) {
                  var c = s.x - r.maxX;
                  s.x = r.maxX + c / 6;
                }
              } else s.x = this.left;
              return s;
            }),
            (e.prototype.isBeyondPossibleLeft = function (e, t) {
              return e >= t;
            }),
            (e.prototype.isBeyondPossibleRight = function (e, t) {
              return e <= t;
            }),
            (e.prototype.isBeyondPossibleTop = function (e, t) {
              return e >= t;
            }),
            (e.prototype.isBeyondPossibleBottom = function (e, t) {
              return e <= t;
            }),
            (e.prototype.isImageSlide = function () {
              var e = this.core.galleryItems[this.core.index];
              return "image" === this.core.getSlideType(e);
            }),
            (e.prototype.getPossibleSwipeDragCords = function (e, t) {
              var n = t || this.scale || 1,
                i = Math.abs(n),
                r = this.core.mediaContainerPosition,
                s = r.top,
                o = r.bottom,
                a = Math.abs(s - o) / 2,
                l =
                  (this.imageYSize - this.containerRect.height) / 2 +
                  a * this.modifierX,
                c = this.containerRect.height - this.imageYSize * i + l,
                u = (this.imageXSize - this.containerRect.width) / 2,
                d = this.containerRect.width - this.imageXSize * i + u,
                p = { minY: l, maxY: c, minX: u, maxX: d };
              return (
                90 === Math.abs(e) &&
                  (p = { minY: u, maxY: d, minX: l, maxX: c }),
                p
              );
            }),
            (e.prototype.setZoomSwipeStyles = function (e, t) {
              e.css(
                "transform",
                "translate3d(" + t.x + "px, " + t.y + "px, 0)"
              );
            }),
            (e.prototype.zoomSwipe = function () {
              var e,
                t,
                n = this,
                i = {},
                r = {},
                s = !1,
                o = !1,
                a = !1,
                l = new Date(),
                c = (new Date(), this.core.getSlideItem(this.core.index));
              this.core.$inner.on("touchstart.lg", function (r) {
                if (
                  n.isImageSlide() &&
                  ((c = n.core.getSlideItem(n.core.index)),
                  (n.$LG(r.target).hasClass("lg-item") ||
                    c.get().contains(r.target)) &&
                    1 === r.targetTouches.length &&
                    n.core.outer.hasClass("lg-zoomed"))
                ) {
                  r.preventDefault(),
                    (l = new Date()),
                    (n.core.touchAction = "zoomSwipe"),
                    (t = n.core
                      .getSlideItem(n.core.index)
                      .find(".lg-img-wrap")
                      .first());
                  var s = n.getDragAllowedAxises(Math.abs(n.rotateValue));
                  (a = s.allowY),
                    ((o = s.allowX) || a) &&
                      (i = n.getSwipeCords(r, Math.abs(n.rotateValue))),
                    (e = n.getPossibleSwipeDragCords(n.rotateValue)),
                    n.core.outer.addClass(
                      "lg-zoom-dragging lg-zoom-drag-transition"
                    );
                }
              }),
                this.core.$inner.on("touchmove.lg", function (l) {
                  if (
                    1 === l.targetTouches.length &&
                    "zoomSwipe" === n.core.touchAction &&
                    (n.$LG(l.target).hasClass("lg-item") ||
                      c.get().contains(l.target))
                  ) {
                    l.preventDefault(),
                      (n.core.touchAction = "zoomSwipe"),
                      (r = n.getSwipeCords(l, Math.abs(n.rotateValue)));
                    var u = n.getZoomSwipeCords(i, r, o, a, e);
                    (Math.abs(r.x - i.x) > 15 || Math.abs(r.y - i.y) > 15) &&
                      ((s = !0), n.setZoomSwipeStyles(t, u));
                  }
                }),
                this.core.$inner.on("touchend.lg", function (e) {
                  if (
                    "zoomSwipe" === n.core.touchAction &&
                    (n.$LG(e.target).hasClass("lg-item") ||
                      c.get().contains(e.target))
                  ) {
                    if (
                      ((n.core.touchAction = void 0),
                      n.core.outer.removeClass("lg-zoom-dragging"),
                      !s)
                    )
                      return;
                    s = !1;
                    var t = new Date().valueOf() - l.valueOf();
                    n.touchendZoom(i, r, o, a, t, n.rotateValue);
                  }
                });
            }),
            (e.prototype.zoomDrag = function () {
              var e,
                t,
                n,
                i,
                r = this,
                s = {},
                o = {},
                a = !1,
                l = !1,
                c = !1,
                u = !1;
              this.core.outer.on("mousedown.lg.zoom", function (t) {
                if (r.isImageSlide()) {
                  var o = r.core.getSlideItem(r.core.index);
                  if (
                    r.$LG(t.target).hasClass("lg-item") ||
                    o.get().contains(t.target)
                  ) {
                    (e = new Date()),
                      (i = r.core
                        .getSlideItem(r.core.index)
                        .find(".lg-img-wrap")
                        .first());
                    var l = r.getDragAllowedAxises(Math.abs(r.rotateValue));
                    (u = l.allowY),
                      (c = l.allowX),
                      r.core.outer.hasClass("lg-zoomed") &&
                        r.$LG(t.target).hasClass("lg-object") &&
                        (c || u) &&
                        (t.preventDefault(),
                        (s = r.getDragCords(t, Math.abs(r.rotateValue))),
                        (n = r.getPossibleSwipeDragCords(r.rotateValue)),
                        (a = !0),
                        (r.core.outer.get().scrollLeft += 1),
                        (r.core.outer.get().scrollLeft -= 1),
                        r.core.outer
                          .removeClass("lg-grab")
                          .addClass(
                            "lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"
                          ));
                  }
                }
              }),
                this.$LG(window).on(
                  "mousemove.lg.zoom.global" + this.core.lgId,
                  function (e) {
                    if (a) {
                      (l = !0),
                        (o = r.getDragCords(e, Math.abs(r.rotateValue)));
                      var t = r.getZoomSwipeCords(s, o, c, u, n);
                      r.setZoomSwipeStyles(i, t);
                    }
                  }
                ),
                this.$LG(window).on(
                  "mouseup.lg.zoom.global" + this.core.lgId,
                  function (n) {
                    if (a) {
                      if (
                        ((t = new Date()),
                        (a = !1),
                        r.core.outer.removeClass("lg-zoom-dragging"),
                        l && (s.x !== o.x || s.y !== o.y))
                      ) {
                        o = r.getDragCords(n, Math.abs(r.rotateValue));
                        var i = t.valueOf() - e.valueOf();
                        r.touchendZoom(s, o, c, u, i, r.rotateValue);
                      }
                      l = !1;
                    }
                    r.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
                  }
                );
            }),
            (e.prototype.closeGallery = function () {
              this.resetZoom();
            }),
            (e.prototype.destroy = function () {
              this.$LG(window).off(".lg.zoom.global" + this.core.lgId),
                this.core.LGel.off(".lg.zoom"),
                this.core.LGel.off(".zoom"),
                clearTimeout(this.zoomableTimeout),
                (this.zoomableTimeout = !1);
            }),
            e
          );
        })();
      const ki = Ai;
      var Mi = function () {
          return (
            (Mi =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            Mi.apply(this, arguments)
          );
        },
        Pi = "lgAfterAppendSlide",
        Di = "lgBeforeSlide",
        zi = "lgRotateLeft",
        $i = "lgRotateRight",
        Ni = "lgFlipHorizontal",
        _i = "lgFlipVertical",
        ji = {
          rotate: !0,
          rotateSpeed: 400,
          rotateLeft: !0,
          rotateRight: !0,
          flipHorizontal: !0,
          flipVertical: !0,
          rotatePluginStrings: {
            flipVertical: "Flip vertical",
            flipHorizontal: "Flip horizontal",
            rotateLeft: "Rotate left",
            rotateRight: "Rotate right",
          },
        },
        Hi = (function () {
          function e(e, t) {
            return (
              (this.core = e),
              (this.$LG = t),
              (this.settings = Mi(Mi({}, ji), this.core.settings)),
              this
            );
          }
          return (
            (e.prototype.buildTemplates = function () {
              var e = "";
              this.settings.flipVertical &&
                (e +=
                  '<button type="button" id="lg-flip-ver" aria-label="' +
                  this.settings.rotatePluginStrings.flipVertical +
                  '" class="lg-flip-ver lg-icon"></button>'),
                this.settings.flipHorizontal &&
                  (e +=
                    '<button type="button" id="lg-flip-hor" aria-label="' +
                    this.settings.rotatePluginStrings.flipHorizontal +
                    '" class="lg-flip-hor lg-icon"></button>'),
                this.settings.rotateLeft &&
                  (e +=
                    '<button type="button" id="lg-rotate-left" aria-label="' +
                    this.settings.rotatePluginStrings.rotateLeft +
                    '" class="lg-rotate-left lg-icon"></button>'),
                this.settings.rotateRight &&
                  (e +=
                    '<button type="button" id="lg-rotate-right" aria-label="' +
                    this.settings.rotatePluginStrings.rotateRight +
                    '" class="lg-rotate-right lg-icon"></button>'),
                this.core.$toolbar.append(e);
            }),
            (e.prototype.init = function () {
              var e = this;
              this.settings.rotate &&
                (this.buildTemplates(),
                (this.rotateValuesList = {}),
                this.core.LGel.on(Pi + ".rotate", function (t) {
                  var n = t.detail.index;
                  e.core
                    .getSlideItem(n)
                    .find(".lg-img-wrap")
                    .first()
                    .wrap("lg-img-rotate"),
                    e.core
                      .getSlideItem(e.core.index)
                      .find(".lg-img-rotate")
                      .css(
                        "transition-duration",
                        e.settings.rotateSpeed + "ms"
                      );
                }),
                this.core.outer
                  .find("#lg-rotate-left")
                  .first()
                  .on("click.lg", this.rotateLeft.bind(this)),
                this.core.outer
                  .find("#lg-rotate-right")
                  .first()
                  .on("click.lg", this.rotateRight.bind(this)),
                this.core.outer
                  .find("#lg-flip-hor")
                  .first()
                  .on("click.lg", this.flipHorizontal.bind(this)),
                this.core.outer
                  .find("#lg-flip-ver")
                  .first()
                  .on("click.lg", this.flipVertical.bind(this)),
                this.core.LGel.on(Di + ".rotate", function (t) {
                  e.rotateValuesList[t.detail.index] ||
                    (e.rotateValuesList[t.detail.index] = {
                      rotate: 0,
                      flipHorizontal: 1,
                      flipVertical: 1,
                    });
                }));
            }),
            (e.prototype.applyStyles = function () {
              this.core
                .getSlideItem(this.core.index)
                .find(".lg-img-rotate")
                .first()
                .css(
                  "transform",
                  "rotate(" +
                    this.rotateValuesList[this.core.index].rotate +
                    "deg) scale3d(" +
                    this.rotateValuesList[this.core.index].flipHorizontal +
                    ", " +
                    this.rotateValuesList[this.core.index].flipVertical +
                    ", 1)"
                );
            }),
            (e.prototype.rotateLeft = function () {
              (this.rotateValuesList[this.core.index].rotate -= 90),
                this.applyStyles(),
                this.triggerEvents(zi, {
                  rotate: this.rotateValuesList[this.core.index].rotate,
                });
            }),
            (e.prototype.rotateRight = function () {
              (this.rotateValuesList[this.core.index].rotate += 90),
                this.applyStyles(),
                this.triggerEvents($i, {
                  rotate: this.rotateValuesList[this.core.index].rotate,
                });
            }),
            (e.prototype.getCurrentRotation = function (e) {
              if (!e) return 0;
              var t = this.$LG(e).style(),
                n =
                  t.getPropertyValue("-webkit-transform") ||
                  t.getPropertyValue("-moz-transform") ||
                  t.getPropertyValue("-ms-transform") ||
                  t.getPropertyValue("-o-transform") ||
                  t.getPropertyValue("transform") ||
                  "none";
              if ("none" !== n) {
                var i = n.split("(")[1].split(")")[0].split(",");
                if (i) {
                  var r = Math.round(Math.atan2(i[1], i[0]) * (180 / Math.PI));
                  return r < 0 ? r + 360 : r;
                }
              }
              return 0;
            }),
            (e.prototype.flipHorizontal = function () {
              var e = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-img-rotate")
                  .first()
                  .get(),
                t = this.getCurrentRotation(e),
                n = "flipHorizontal";
              (90 !== t && 270 !== t) || (n = "flipVertical"),
                (this.rotateValuesList[this.core.index][n] *= -1),
                this.applyStyles(),
                this.triggerEvents(Ni, {
                  flipHorizontal: this.rotateValuesList[this.core.index][n],
                });
            }),
            (e.prototype.flipVertical = function () {
              var e = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-img-rotate")
                  .first()
                  .get(),
                t = this.getCurrentRotation(e),
                n = "flipVertical";
              (90 !== t && 270 !== t) || (n = "flipHorizontal"),
                (this.rotateValuesList[this.core.index][n] *= -1),
                this.applyStyles(),
                this.triggerEvents(_i, {
                  flipVertical: this.rotateValuesList[this.core.index][n],
                });
            }),
            (e.prototype.triggerEvents = function (e, t) {
              var n = this;
              setTimeout(function () {
                n.core.LGel.trigger(e, t);
              }, this.settings.rotateSpeed + 10);
            }),
            (e.prototype.isImageOrientationChanged = function () {
              var e = this.rotateValuesList[this.core.index],
                t = Math.abs(e.rotate) % 360 != 0,
                n = e.flipHorizontal < 0,
                i = e.flipVertical < 0;
              return t || n || i;
            }),
            (e.prototype.closeGallery = function () {
              this.isImageOrientationChanged() &&
                this.core.getSlideItem(this.core.index).css("opacity", 0),
                (this.rotateValuesList = {});
            }),
            (e.prototype.destroy = function () {
              this.core.LGel.off(".lg.rotate"), this.core.LGel.off(".rotate");
            }),
            e
          );
        })();
      const Bi = Hi,
        qi = document.querySelectorAll("[data-gallery]");
      qi.length &&
        qi.forEach((e) => {
          si(e, {
            plugins: [vi, ki, hi, Bi],
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
          });
        });
      n(641);
      (window.FLS = !1),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        window.addEventListener("load", function () {
          setTimeout(function () {
            document.documentElement.classList.add("loaded");
          }, 0);
        }),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              s &&
                (((e = 600) => {
                  document.documentElement.classList.contains("lock")
                    ? o(e)
                    : a(e);
                })(),
                document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          if (
            document.querySelectorAll("[data-fullscreen]").length &&
            t.any()
          ) {
            function e() {
              let e = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty("--vh", `${e}px`);
            }
            window.addEventListener("resize", e), e();
          }
        })(),
        (function () {
          const e = document.querySelectorAll("[data-tabs]");
          let t = [];
          if (e.length > 0) {
            const i = location.hash.replace("#", "");
            i.startsWith("tab-") && (t = i.replace("tab-", "").split("-")),
              e.forEach((e, n) => {
                e.classList.add("_tab-init"),
                  e.setAttribute("data-tabs-index", n),
                  e.addEventListener("click", s),
                  (function (e) {
                    const n = e.querySelectorAll("[data-tabs-titles]>*"),
                      i = e.querySelectorAll("[data-tabs-body]>*"),
                      r = e.dataset.tabsIndex,
                      s = t[0] == r;
                    if (s) {
                      e.querySelector(
                        "[data-tabs-titles]>._tab-active"
                      ).classList.remove("_tab-active");
                    }
                    i.length > 0 &&
                      i.forEach((e, i) => {
                        n[i].setAttribute("data-tabs-title", ""),
                          e.setAttribute("data-tabs-item", ""),
                          s && i == t[1] && n[i].classList.add("_tab-active"),
                          (e.hidden = !n[i].classList.contains("_tab-active"));
                      });
                  })(e);
              });
            let r = u(e, "tabs");
            r &&
              r.length &&
              r.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  n(e.itemsArray, e.matchMedia);
                }),
                  n(e.itemsArray, e.matchMedia);
              });
          }
          function n(e, t) {
            e.forEach((e) => {
              const n = (e = e.item).querySelector("[data-tabs-titles]"),
                i = e.querySelectorAll("[data-tabs-title]"),
                r = e.querySelector("[data-tabs-body]");
              e.querySelectorAll("[data-tabs-item]").forEach((s, o) => {
                t.matches
                  ? (r.append(i[o]),
                    r.append(s),
                    e.classList.add("_tab-spoller"))
                  : (n.append(i[o]), e.classList.remove("_tab-spoller"));
              });
            });
          }
          function s(e) {
            const t = e.target;
            if (t.closest("[data-tabs-title]")) {
              const n = t.closest("[data-tabs-title]"),
                s = n.closest("[data-tabs]");
              if (
                !n.classList.contains("_tab-active") &&
                !s.querySelectorAll("._slide").length
              ) {
                const e = s.querySelector("[data-tabs-title]._tab-active");
                e && e.classList.remove("_tab-active"),
                  n.classList.add("_tab-active"),
                  (function (e) {
                    const t = e.querySelectorAll("[data-tabs-title]"),
                      n = e.querySelectorAll("[data-tabs-item]"),
                      s = e.dataset.tabsIndex,
                      o = (function (e) {
                        if (e.hasAttribute("data-tabs-animate"))
                          return e.dataset.tabsAnimate > 0
                            ? e.dataset.tabsAnimate
                            : 500;
                      })(e);
                    n.length > 0 &&
                      n.forEach((e, n) => {
                        t[n].classList.contains("_tab-active")
                          ? (o ? r(e, o) : (e.hidden = !1),
                            e.closest(".popup") ||
                              (location.hash = `tab-${s}-${n}`))
                          : o
                          ? i(e, o)
                          : (e.hidden = !0);
                      });
                  })(s);
              }
              e.preventDefault();
            }
          }
        })(),
        new e({}),
        new wn({}),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const n = t.closest("[data-goto]"),
                  i = n.dataset.goto ? n.dataset.goto : "",
                  r = !!n.hasAttribute("data-goto-header"),
                  s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
                p(i, r, s), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                n = t.target;
              if ("navigator" === n.dataset.watch) {
                const e = n.id,
                  i =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? i && i.classList.add("_navigator-active")
                  : i && i.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          xn = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            i = e.dataset.scroll ? e.dataset.scroll : 1;
          let r,
            s = 0;
          document.addEventListener("windowScroll", function (o) {
            const a = window.scrollY;
            clearTimeout(r),
              a >= i
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (a > s
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (r = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, n))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (s = a <= 0 ? 0 : a);
          });
        })();
    })();
})();
