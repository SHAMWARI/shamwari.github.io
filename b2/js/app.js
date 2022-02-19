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
        })("undefined" != typeof window ? window : this, function (i, s) {
          "use strict";
          var r = [],
            o = Object.getPrototypeOf,
            a = r.slice,
            l = r.flat
              ? function (e) {
                  return r.flat.call(e);
                }
              : function (e) {
                  return r.concat.apply([], e);
                },
            c = r.push,
            d = r.indexOf,
            u = {},
            p = u.toString,
            h = u.hasOwnProperty,
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
              s,
              r = (n = n || b).createElement("script");
            if (((r.text = e), t))
              for (i in w)
                (s = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  r.setAttribute(i, s);
            n.head.appendChild(r).parentNode.removeChild(r);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? u[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            S = function (e, t) {
              return new S.fn.init(e, t);
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
          (S.fn = S.prototype =
            {
              jquery: C,
              constructor: S,
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
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return S.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  S.map(this, function (t, n) {
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
                  S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
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
              sort: r.sort,
              splice: r.splice,
            }),
            (S.extend = S.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  s,
                  r,
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
                          (S.isPlainObject(i) || (s = Array.isArray(i)))
                            ? ((n = o[t]),
                              (r =
                                s && !Array.isArray(n)
                                  ? []
                                  : s || S.isPlainObject(n)
                                  ? n
                                  : {}),
                              (s = !1),
                              (o[t] = S.extend(c, r, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            S.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
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
                      ? S.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, s = e.length; i < n; i++)
                  e[s++] = t[i];
                return (e.length = s), e;
              },
              grep: function (e, t, n) {
                for (var i = [], s = 0, r = e.length, o = !n; s < r; s++)
                  !t(e[s], s) !== o && i.push(e[s]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  s,
                  r = 0,
                  o = [];
                if (E(e))
                  for (i = e.length; r < i; r++)
                    null != (s = t(e[r], r, n)) && o.push(s);
                else for (r in e) null != (s = t(e[r], r, n)) && o.push(s);
                return l(o);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (S.fn[Symbol.iterator] = r[Symbol.iterator]),
            S.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var I = (function (e) {
            var t,
              n,
              i,
              s,
              r,
              o,
              a,
              l,
              c,
              d,
              u,
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
              C = 0,
              S = le(),
              E = le(),
              I = le(),
              k = le(),
              L = function (e, t) {
                return e === t && (u = !0), 0;
              },
              A = {}.hasOwnProperty,
              M = [],
              O = M.pop,
              D = M.push,
              P = M.push,
              N = M.slice,
              _ = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              z =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              $ = "[\\x20\\t\\r\\n\\f]",
              j =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                j +
                ")(?:" +
                $ +
                "*([*^$|!~]?=)" +
                $ +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                j +
                "))|)" +
                $ +
                "*\\]",
              F =
                ":(" +
                j +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              q = new RegExp($ + "+", "g"),
              B = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              G = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              W = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              R = new RegExp($ + "|>"),
              V = new RegExp(F),
              X = new RegExp("^" + j + "$"),
              Y = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              U = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              Z = /^h\d$/i,
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
              se = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              re = function () {
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
              P.apply((M = N.call(x.childNodes)), x.childNodes),
                M[x.childNodes.length].nodeType;
            } catch (e) {
              P = {
                apply: M.length
                  ? function (e, t) {
                      D.apply(e, N.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, s) {
              var r,
                a,
                c,
                d,
                u,
                f,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!s && (p(t), (t = t || h), g)) {
                if (11 !== x && (u = J.exec(e)))
                  if ((r = u[1])) {
                    if (9 === x) {
                      if (!(c = t.getElementById(r))) return i;
                      if (c.id === r) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(r)) &&
                      b(t, c) &&
                      c.id === r
                    )
                      return i.push(c), i;
                  } else {
                    if (u[2]) return P.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (r = u[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return P.apply(i, t.getElementsByClassName(r)), i;
                  }
                if (
                  n.qsa &&
                  !k[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === x && (R.test(e) || W.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((d = t.getAttribute("id"))
                          ? (d = d.replace(ie, se))
                          : t.setAttribute("id", (d = w))),
                        a = (f = o(e)).length;
                      a--;

                    )
                      f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                    v = f.join(",");
                  }
                  try {
                    return P.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    k(e, !0);
                  } finally {
                    d === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(B, "$1"), t, i, s);
            }
            function le() {
              var e = [];
              return function t(n, s) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = s)
                );
              };
            }
            function ce(e) {
              return (e[w] = !0), e;
            }
            function de(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), s = n.length; s--; )
                i.attrHandle[n[s]] = t;
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
                    for (var s, r = e([], n.length, t), o = r.length; o--; )
                      n[(s = r[o])] && (n[s] = !(i[s] = n[s]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (r = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  s,
                  o = e ? e.ownerDocument || e : x;
                return o != h && 9 === o.nodeType && o.documentElement
                  ? ((f = (h = o).documentElement),
                    (g = !r(h)),
                    x != h &&
                      (s = h.defaultView) &&
                      s.top !== s &&
                      (s.addEventListener
                        ? s.addEventListener("unload", re, !1)
                        : s.attachEvent && s.attachEvent("onunload", re)),
                    (n.scope = de(function (e) {
                      return (
                        f.appendChild(e).appendChild(h.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = de(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = de(function (e) {
                      return (
                        e.appendChild(h.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Q.test(
                      h.getElementsByClassName
                    )),
                    (n.getById = de(function (e) {
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
                              s,
                              r = t.getElementById(e);
                            if (r) {
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                              for (
                                s = t.getElementsByName(e), i = 0;
                                (r = s[i++]);

                              )
                                if (
                                  (n = r.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [r];
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
                            s = 0,
                            r = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = r[s++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return r;
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
                      (de(function (e) {
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
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + z + ")"
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
                      de(function (e) {
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
                      de(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", F);
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
                    (L = t
                      ? function (e, t) {
                          if (e === t) return (u = !0), 0;
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
                                : d
                                ? _(d, e) - _(d, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var n,
                            i = 0,
                            s = e.parentNode,
                            r = t.parentNode,
                            o = [e],
                            a = [t];
                          if (!s || !r)
                            return e == h
                              ? -1
                              : t == h
                              ? 1
                              : s
                              ? -1
                              : r
                              ? 1
                              : d
                              ? _(d, e) - _(d, t)
                              : 0;
                          if (s === r) return pe(e, t);
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
                  !k[t + " "] &&
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
                  k(t, !0);
                }
              return ae(t, h, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != h && p(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != h && p(e);
              var s = i.attrHandle[t.toLowerCase()],
                r =
                  s && A.call(i.attrHandle, t.toLowerCase())
                    ? s(e, t, !g)
                    : void 0;
              return void 0 !== r
                ? r
                : n.attributes || !g
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, se);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                s = 0,
                r = 0;
              if (
                ((u = !n.detectDuplicates),
                (d = !n.sortStable && e.slice(0)),
                e.sort(L),
                u)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (s = i.push(r));
                for (; s--; ) e.splice(i[s], 1);
              }
              return (d = null), e;
            }),
            (s = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  r = e.nodeType;
                if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += s(t);
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
                    var t = S[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + $ + "|$)"
                      )) &&
                        S(e, function (e) {
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
                      var s = ae.attr(i, e);
                      return null == s
                        ? "!=" === t
                        : !t ||
                            ((s += ""),
                            "=" === t
                              ? s === n
                              : "!=" === t
                              ? s !== n
                              : "^=" === t
                              ? n && 0 === s.indexOf(n)
                              : "*=" === t
                              ? n && s.indexOf(n) > -1
                              : "$=" === t
                              ? n && s.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + s.replace(q, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (s === n ||
                                  s.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, s) {
                    var r = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === s
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            d,
                            u,
                            p,
                            h,
                            f,
                            g = r !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (m) {
                            if (r) {
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
                                      (d =
                                        (u = (p = m)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (u[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && c[1]) && c[2],
                                  p = h && m.childNodes[h];
                                (p =
                                  (++h && p && p[g]) || (b = h = 0) || f.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  d[e] = [T, h, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = h =
                                  (c =
                                    (d =
                                      (u = (p = t)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (u[p.uniqueID] = {}))[e] ||
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
                                    ((d =
                                      (u = p[w] || (p[w] = {}))[p.uniqueID] ||
                                      (u[p.uniqueID] = {}))[e] = [T, b]),
                                  p !== t));

                              );
                            return (b -= s) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      s =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return s[w]
                      ? s(t)
                      : s.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, r = s(e, t), o = r.length; o--; )
                                e[(i = _(e, r[o]))] = !(n[i] = r[o]);
                            })
                          : function (e) {
                              return s(e, 0, n);
                            })
                      : s;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(B, "$1"));
                    return i[w]
                      ? ce(function (e, t, n, s) {
                          for (
                            var r, o = i(e, null, s, []), a = e.length;
                            a--;

                          )
                            (r = o[a]) && (e[a] = !(t[a] = r));
                        })
                      : function (e, s, r) {
                          return (
                            (t[0] = e),
                            i(t, null, r, n),
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
                        return (t.textContent || s(t)).indexOf(e) > -1;
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
                    return Z.test(e.nodeName);
                  },
                  input: function (e) {
                    return K.test(e.nodeName);
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
                s = t.next,
                r = s || i,
                o = n && "parentNode" === r,
                a = C++;
              return t.first
                ? function (t, n, s) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || o) return e(t, n, s);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p = [T, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((d =
                              (u = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (u[t.uniqueID] = {})),
                            s && s === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = d[r]) && c[0] === T && c[1] === a)
                              return (p[2] = c[2]);
                            if (((d[r] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var s = e.length; s--; ) if (!e[s](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, i, s) {
              for (
                var r, o = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (r = e[a]) &&
                  ((n && !n(r, i, s)) || (o.push(r), c && t.push(a)));
              return o;
            }
            function Ce(e, t, n, i, s, r) {
              return (
                i && !i[w] && (i = Ce(i)),
                s && !s[w] && (s = Ce(s, r)),
                ce(function (r, o, a, l) {
                  var c,
                    d,
                    u,
                    p = [],
                    h = [],
                    f = o.length,
                    g =
                      r ||
                      (function (e, t, n) {
                        for (var i = 0, s = t.length; i < s; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || (!r && t) ? g : Te(g, p, e, a, l),
                    v = n ? (s || (r ? e : f || i) ? [] : o) : m;
                  if ((n && n(m, v, a, l), i))
                    for (c = Te(v, h), i(c, [], a, l), d = c.length; d--; )
                      (u = c[d]) && (v[h[d]] = !(m[h[d]] = u));
                  if (r) {
                    if (s || e) {
                      if (s) {
                        for (c = [], d = v.length; d--; )
                          (u = v[d]) && c.push((m[d] = u));
                        s(null, (v = []), c, l);
                      }
                      for (d = v.length; d--; )
                        (u = v[d]) &&
                          (c = s ? _(r, u) : p[d]) > -1 &&
                          (r[c] = !(o[c] = u));
                    }
                  } else (v = Te(v === o ? v.splice(f, v.length) : v)), s ? s(null, o, v, l) : P.apply(o, v);
                })
              );
            }
            function Se(e) {
              for (
                var t,
                  n,
                  s,
                  r = e.length,
                  o = i.relative[e[0].type],
                  a = o || i.relative[" "],
                  l = o ? 1 : 0,
                  d = we(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  u = we(
                    function (e) {
                      return _(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var s =
                        (!o && (i || n !== c)) ||
                        ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                      return (t = null), s;
                    },
                  ];
                l < r;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (s = ++l; s < r && !i.relative[e[s].type]; s++);
                    return Ce(
                      l > 1 && xe(p),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(B, "$1"),
                      n,
                      l < s && Se(e.slice(l, s)),
                      s < r && Se((e = e.slice(s))),
                      s < r && be(e)
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
                    s,
                    r,
                    o,
                    a,
                    l,
                    c,
                    d = E[e + " "];
                  if (d) return t ? 0 : d.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                    for (o in ((n && !(s = G.exec(a))) ||
                      (s && (a = a.slice(s[0].length) || a), l.push((r = []))),
                    (n = !1),
                    (s = W.exec(a)) &&
                      ((n = s.shift()),
                      r.push({ value: n, type: s[0].replace(B, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(s = Y[o].exec(a)) ||
                        (c[o] && !(s = c[o](s))) ||
                        ((n = s.shift()),
                        r.push({ value: n, type: o, matches: s }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    s = [],
                    r = [],
                    a = I[e + " "];
                  if (!a) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (a = Se(t[n]))[w] ? s.push(a) : r.push(a);
                    (a = I(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          s = e.length > 0,
                          r = function (r, o, a, l, d) {
                            var u,
                              f,
                              m,
                              v = 0,
                              y = "0",
                              b = r && [],
                              w = [],
                              x = c,
                              C = r || (s && i.find.TAG("*", d)),
                              S = (T += null == x ? 1 : Math.random() || 0.1),
                              E = C.length;
                            for (
                              d && (c = o == h || o || d);
                              y !== E && null != (u = C[y]);
                              y++
                            ) {
                              if (s && u) {
                                for (
                                  f = 0,
                                    o ||
                                      u.ownerDocument == h ||
                                      (p(u), (a = !g));
                                  (m = e[f++]);

                                )
                                  if (m(u, o || h, a)) {
                                    l.push(u);
                                    break;
                                  }
                                d && (T = S);
                              }
                              n && ((u = !m && u) && v--, r && b.push(u));
                            }
                            if (((v += y), n && y !== v)) {
                              for (f = 0; (m = t[f++]); ) m(b, w, o, a);
                              if (r) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = O.call(l));
                                w = Te(w);
                              }
                              P.apply(l, w),
                                d &&
                                  !r &&
                                  w.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return d && ((T = S), (c = x)), b;
                          };
                        return n ? ce(r) : r;
                      })(r, s)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, s) {
                  var r,
                    l,
                    c,
                    d,
                    u,
                    p = "function" == typeof e && e,
                    h = !s && o((e = p.selector || e));
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
                      r = Y.needsContext.test(e) ? 0 : l.length;
                      r-- && ((c = l[r]), !i.relative[(d = c.type)]);

                    )
                      if (
                        (u = i.find[d]) &&
                        (s = u(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(r, 1), !(e = s.length && be(l))))
                          return P.apply(n, s), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, h))(
                      s,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(L).join("") === w),
              (n.detectDuplicates = !!u),
              p(),
              (n.sortDetached = de(function (e) {
                return (
                  1 & e.compareDocumentPosition(h.createElement("fieldset"))
                );
              })),
              de(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                de(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              de(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(z, function (e, t, n) {
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
          (S.find = I),
            (S.expr = I.selectors),
            (S.expr[":"] = S.expr.pseudos),
            (S.uniqueSort = S.unique = I.uniqueSort),
            (S.text = I.getText),
            (S.isXMLDoc = I.isXML),
            (S.contains = I.contains),
            (S.escapeSelector = I.escape);
          var k = function (e, t, n) {
              for (
                var i = [], s = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (s && S(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            L = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            A = S.expr.match.needsContext;
          function M(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var O =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function D(e, t, n) {
            return v(t)
              ? S.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? S.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? S.grep(e, function (e) {
                  return d.call(t, e) > -1 !== n;
                })
              : S.filter(t, e, n);
          }
          (S.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? S.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            S.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  s = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    S(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (S.contains(s[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  S.find(e, s[t], n);
                return i > 1 ? S.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(D(this, e || [], !0));
              },
              is: function (e) {
                return !!D(
                  this,
                  "string" == typeof e && A.test(e) ? S(e) : e || [],
                  !1
                ).length;
              },
            });
          var P,
            N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function (e, t, n) {
            var i, s;
            if (!e) return this;
            if (((n = n || P), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : N.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(
                    this,
                    S.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  O.test(i[1]) && S.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (s = b.getElementById(i[2])) &&
                  ((this[0] = s), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this);
          }).prototype = S.fn),
            (P = S(b));
          var _ = /^(?:parents|prev(?:Until|All))/,
            z = { children: !0, contents: !0, next: !0, prev: !0 };
          function $(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function (e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                s = this.length,
                r = [],
                o = "string" != typeof e && S(e);
              if (!A.test(e))
                for (; i < s; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : 1 === n.nodeType && S.find.matchesSelector(n, e))
                    ) {
                      r.push(n);
                      break;
                    }
              return this.pushStack(r.length > 1 ? S.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? d.call(S(e), this[0])
                  : d.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            S.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return k(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return k(e, "parentNode", n);
                },
                next: function (e) {
                  return $(e, "nextSibling");
                },
                prev: function (e) {
                  return $(e, "previousSibling");
                },
                nextAll: function (e) {
                  return k(e, "nextSibling");
                },
                prevAll: function (e) {
                  return k(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return k(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return k(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return L((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return L(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (M(e, "template") && (e = e.content || e),
                      S.merge([], e.childNodes));
                },
              },
              function (e, t) {
                S.fn[e] = function (n, i) {
                  var s = S.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (s = S.filter(i, s)),
                    this.length > 1 &&
                      (z[e] || S.uniqueSort(s), _.test(e) && s.reverse()),
                    this.pushStack(s)
                  );
                };
              }
            );
          var j = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function F(e) {
            throw e;
          }
          function q(e, t, n, i) {
            var s;
            try {
              e && v((s = e.promise))
                ? s.call(e).done(t).fail(n)
                : e && v((s = e.then))
                ? s.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      S.each(e.match(j) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              i,
              s,
              r = [],
              o = [],
              a = -1,
              l = function () {
                for (s = s || e.once, i = t = !0; o.length; a = -1)
                  for (n = o.shift(); ++a < r.length; )
                    !1 === r[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = r.length), (n = !1));
                e.memory || (n = !1), (t = !1), s && (r = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    r &&
                      (n && !t && ((a = r.length - 1), o.push(n)),
                      (function t(n) {
                        S.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || r.push(i)
                            : i && i.length && "string" !== T(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    S.each(arguments, function (e, t) {
                      for (var n; (n = S.inArray(t, r, n)) > -1; )
                        r.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? S.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function () {
                  return r && (r = []), this;
                },
                disable: function () {
                  return (s = o = []), (r = n = ""), this;
                },
                disabled: function () {
                  return !r;
                },
                lock: function () {
                  return (s = o = []), n || t || (r = n = ""), this;
                },
                locked: function () {
                  return !!s;
                },
                fireWith: function (e, n) {
                  return (
                    s ||
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
            S.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      S.Callbacks("memory"),
                      S.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  s = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return s.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return S.Deferred(function (n) {
                        S.each(t, function (t, i) {
                          var s = v(e[i[4]]) && e[i[4]];
                          r[i[1]](function () {
                            var e = s && s.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, s ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, s) {
                      var r = 0;
                      function o(e, t, n, s) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < r)) {
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
                                    ? s
                                      ? c.call(i, o(r, t, H, s), o(r, t, F, s))
                                      : (r++,
                                        c.call(
                                          i,
                                          o(r, t, H, s),
                                          o(r, t, F, s),
                                          o(r, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((a = void 0), (l = [i])),
                                      (s || t.resolveWith)(a, l));
                              }
                            },
                            d = s
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    S.Deferred.exceptionHook &&
                                      S.Deferred.exceptionHook(i, d.stackTrace),
                                      e + 1 >= r &&
                                        (n !== F && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? d()
                            : (S.Deferred.getStackHook &&
                                (d.stackTrace = S.Deferred.getStackHook()),
                              i.setTimeout(d));
                        };
                      }
                      return S.Deferred(function (i) {
                        t[0][3].add(o(0, i, v(s) ? s : H, i.notifyWith)),
                          t[1][3].add(o(0, i, v(e) ? e : H)),
                          t[2][3].add(o(0, i, v(n) ? n : F));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? S.extend(e, s) : s;
                    },
                  },
                  r = {};
                return (
                  S.each(t, function (e, i) {
                    var o = i[2],
                      a = i[5];
                    (s[i[1]] = o.add),
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
                      (r[i[0]] = function () {
                        return (
                          r[i[0] + "With"](
                            this === r ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (r[i[0] + "With"] = o.fireWith);
                  }),
                  s.promise(r),
                  e && e.call(r, r),
                  r
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  s = a.call(arguments),
                  r = S.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (s[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || r.resolveWith(i, s);
                    };
                  };
                if (
                  t <= 1 &&
                  (q(e, r.done(o(n)).resolve, r.reject, !t),
                  "pending" === r.state() || v(s[n] && s[n].then))
                )
                  return r.then();
                for (; n--; ) q(s[n], o(n), r.reject);
                return r.promise();
              },
            });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              B.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (S.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var G = S.Deferred();
          function W() {
            b.removeEventListener("DOMContentLoaded", W),
              i.removeEventListener("load", W),
              S.ready();
          }
          (S.fn.ready = function (e) {
            return (
              G.then(e).catch(function (e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0),
                  (!0 !== e && --S.readyWait > 0) || G.resolveWith(b, [S]));
              },
            }),
            (S.ready.then = G.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? i.setTimeout(S.ready)
              : (b.addEventListener("DOMContentLoaded", W),
                i.addEventListener("load", W));
          var R = function (e, t, n, i, s, r, o) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === T(n))
                for (a in ((s = !0), n)) R(e, t, a, n[a], !0, r, o);
              else if (
                void 0 !== i &&
                ((s = !0),
                v(i) || (o = !0),
                c &&
                  (o
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(S(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
              return s ? e : c ? t.call(e) : l ? t(e[0], n) : r;
            },
            V = /^-ms-/,
            X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function U(e) {
            return e.replace(V, "ms-").replace(X, Y);
          }
          var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Z() {
            this.expando = S.expando + Z.uid++;
          }
          (Z.uid = 1),
            (Z.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    K(e) &&
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
                  s = this.cache(e);
                if ("string" == typeof t) s[U(t)] = n;
                else for (i in t) s[U(i)] = t[i];
                return s;
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
                  (void 0 === t || S.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var Q = new Z(),
            J = new Z(),
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
          S.extend({
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
            S.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  s,
                  r = this[0],
                  o = r && r.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((s = J.get(r)),
                    1 === r.nodeType && !Q.get(r, "hasDataAttrs"))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        0 === (i = o[n].name).indexOf("data-") &&
                        ((i = U(i.slice(5))), ne(r, i, s[i]));
                    Q.set(r, "hasDataAttrs", !0);
                  }
                  return s;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      J.set(this, e);
                    })
                  : R(
                      this,
                      function (t) {
                        var n;
                        if (r && void 0 === t)
                          return void 0 !== (n = J.get(r, e)) ||
                            void 0 !== (n = ne(r, e))
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
            S.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = Q.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = Q.access(e, t, S.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                  i = n.length,
                  s = n.shift(),
                  r = S._queueHooks(e, t);
                "inprogress" === s && ((s = n.shift()), i--),
                  s &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    s.call(
                      e,
                      function () {
                        S.dequeue(e, t);
                      },
                      r
                    )),
                  !i && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Q.get(e, n) ||
                  Q.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                      Q.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            S.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  s = S.Deferred(),
                  r = this,
                  o = this.length,
                  a = function () {
                    --i || s.resolveWith(r, [r]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (n = Q.get(r[o], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), s.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            se = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            oe = b.documentElement,
            ae = function (e) {
              return S.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === S.css(e, "display"))
            );
          };
          function de(e, t, n, i) {
            var s,
              r,
              o = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return S.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
              d =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== c && +l)) &&
                se.exec(S.css(e, t));
            if (d && d[3] !== c) {
              for (l /= 2, c = c || d[3], d = +l || 1; o--; )
                S.style(e, t, d + c),
                  (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (o = 0),
                  (d /= r);
              (d *= 2), S.style(e, t, d + c), (n = n || []);
            }
            return (
              n &&
                ((d = +d || +l || 0),
                (s = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = d), (i.end = s))),
              s
            );
          }
          var ue = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              s = ue[i];
            return (
              s ||
              ((t = n.body.appendChild(n.createElement(i))),
              (s = S.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === s && (s = "block"),
              (ue[i] = s),
              s)
            );
          }
          function he(e, t) {
            for (var n, i, s = [], r = 0, o = e.length; r < o; r++)
              (i = e[r]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((s[r] = Q.get(i, "display") || null),
                      s[r] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (s[r] = pe(i)))
                  : "none" !== n && ((s[r] = "none"), Q.set(i, "display", n)));
            for (r = 0; r < o; r++) null != s[r] && (e[r].style.display = s[r]);
            return e;
          }
          S.fn.extend({
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
                    ce(this) ? S(this).show() : S(this).hide();
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
              void 0 === t || (t && M(e, t)) ? S.merge([e], n) : n
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
          function Ce(e, t, n, i, s) {
            for (
              var r,
                o,
                a,
                l,
                c,
                d,
                u = t.createDocumentFragment(),
                p = [],
                h = 0,
                f = e.length;
              h < f;
              h++
            )
              if ((r = e[h]) || 0 === r)
                if ("object" === T(r)) S.merge(p, r.nodeType ? [r] : r);
                else if (Te.test(r)) {
                  for (
                    o = o || u.appendChild(t.createElement("div")),
                      a = (ve.exec(r) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      o.innerHTML = l[1] + S.htmlPrefilter(r) + l[2],
                      d = l[0];
                    d--;

                  )
                    o = o.lastChild;
                  S.merge(p, o.childNodes),
                    ((o = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
            for (u.textContent = "", h = 0; (r = p[h++]); )
              if (i && S.inArray(r, i) > -1) s && s.push(r);
              else if (
                ((c = ae(r)),
                (o = we(u.appendChild(r), "script")),
                c && xe(o),
                n)
              )
                for (d = 0; (r = o[d++]); ) ye.test(r.type || "") && n.push(r);
            return u;
          }
          var Se = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function Ie() {
            return !1;
          }
          function ke(e, t) {
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
          function Le(e, t, n, i, s, r) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Le(e, a, n, i, t[a], r);
              return e;
            }
            if (
              (null == i && null == s
                ? ((s = n), (i = n = void 0))
                : null == s &&
                  ("string" == typeof n
                    ? ((s = i), (i = void 0))
                    : ((s = i), (i = n), (n = void 0))),
              !1 === s)
            )
              s = Ie;
            else if (!s) return e;
            return (
              1 === r &&
                ((o = s),
                (s = function (e) {
                  return S().off(e), o.apply(this, arguments);
                }),
                (s.guid = o.guid || (o.guid = S.guid++))),
              e.each(function () {
                S.event.add(this, t, s, i, n);
              })
            );
          }
          function Ae(e, t, n) {
            n
              ? (Q.set(e, t, !1),
                S.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      s,
                      r = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r.length)
                        (S.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = a.call(arguments)),
                        Q.set(this, t, r),
                        (i = n(this, t)),
                        this[t](),
                        r !== (s = Q.get(this, t)) || i
                          ? Q.set(this, t, !1)
                          : (s = {}),
                        r !== s)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          s && s.value
                        );
                    } else
                      r.length &&
                        (Q.set(this, t, {
                          value: S.event.trigger(
                            S.extend(r[0], S.Event.prototype),
                            r.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Q.get(e, t) && S.event.add(e, t, Ee);
          }
          (S.event = {
            global: {},
            add: function (e, t, n, i, s) {
              var r,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                h,
                f,
                g,
                m = Q.get(e);
              if (K(e))
                for (
                  n.handler && ((n = (r = n).handler), (s = r.selector)),
                    s && S.find.matchesSelector(oe, s),
                    n.guid || (n.guid = S.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (o = m.handle) ||
                      (o = m.handle =
                        function (t) {
                          return void 0 !== S && S.event.triggered !== t.type
                            ? S.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(j) || [""]).length;
                  c--;

                )
                  (h = g = (a = Se.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h &&
                      ((u = S.event.special[h] || {}),
                      (h = (s ? u.delegateType : u.bindType) || h),
                      (u = S.event.special[h] || {}),
                      (d = S.extend(
                        {
                          type: h,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: s,
                          needsContext: s && S.expr.match.needsContext.test(s),
                          namespace: f.join("."),
                        },
                        r
                      )),
                      (p = l[h]) ||
                        (((p = l[h] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, i, f, o)) ||
                          (e.addEventListener && e.addEventListener(h, o))),
                      u.add &&
                        (u.add.call(e, d),
                        d.handler.guid || (d.handler.guid = n.guid)),
                      s ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                      (S.event.global[h] = !0));
            },
            remove: function (e, t, n, i, s) {
              var r,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                h,
                f,
                g,
                m = Q.hasData(e) && Q.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--; )
                  if (
                    ((h = g = (a = Se.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      u = S.event.special[h] || {},
                        p =
                          l[(h = (i ? u.delegateType : u.bindType) || h)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        o = r = p.length;
                      r--;

                    )
                      (d = p[r]),
                        (!s && g !== d.origType) ||
                          (n && n.guid !== d.guid) ||
                          (a && !a.test(d.namespace)) ||
                          (i &&
                            i !== d.selector &&
                            ("**" !== i || !d.selector)) ||
                          (p.splice(r, 1),
                          d.selector && p.delegateCount--,
                          u.remove && u.remove.call(e, d));
                    o &&
                      !p.length &&
                      ((u.teardown && !1 !== u.teardown.call(e, f, m.handle)) ||
                        S.removeEvent(e, h, m.handle),
                      delete l[h]);
                  } else for (h in l) S.event.remove(e, h + t[c], n, i, !0);
                S.isEmptyObject(l) && Q.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                s,
                r,
                o,
                a = new Array(arguments.length),
                l = S.event.fix(e),
                c =
                  (Q.get(this, "events") || Object.create(null))[l.type] || [],
                d = S.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !d.preDispatch || !1 !== d.preDispatch.call(this, l))
              ) {
                for (
                  o = S.event.handlers.call(this, l, c), t = 0;
                  (s = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = s.elem, n = 0;
                    (r = s.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== r.namespace &&
                      !l.rnamespace.test(r.namespace)) ||
                      ((l.handleObj = r),
                      (l.data = r.data),
                      void 0 !==
                        (i = (
                          (S.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(s.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                s,
                r,
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
                    for (r = [], o = {}, n = 0; n < l; n++)
                      void 0 === o[(s = (i = t[n]).selector + " ")] &&
                        (o[s] = i.needsContext
                          ? S(s, this).index(c) > -1
                          : S.find(s, this, null, [c]).length),
                        o[s] && r.push(i);
                    r.length && a.push({ elem: c, handlers: r });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(S.Event.prototype, e, {
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
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click", Ee),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Q.get(t, "click")) ||
                    M(t, "a")
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
            (S.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function (e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : Ie),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: Ie,
              isPropagationStopped: Ie,
              isImmediatePropagationStopped: Ie,
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
            S.each(
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
              S.event.addProp
            ),
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              S.event.special[e] = {
                setup: function () {
                  return Ae(this, e, ke), !1;
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
            S.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      s = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (s && (s === i || S.contains(i, s))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            S.fn.extend({
              on: function (e, t, n, i) {
                return Le(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Le(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, s;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    S(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (s in e) this.off(s, t, e[s]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ie),
                  this.each(function () {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Me = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Pe(e, t) {
            return (
              (M(e, "table") &&
                M(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
              e
            );
          }
          function Ne(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function _e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function ze(e, t) {
            var n, i, s, r, o, a;
            if (1 === t.nodeType) {
              if (Q.hasData(e) && (a = Q.get(e).events))
                for (s in (Q.remove(t, "handle events"), a))
                  for (n = 0, i = a[s].length; n < i; n++)
                    S.event.add(t, s, a[s][n]);
              J.hasData(e) &&
                ((r = J.access(e)), (o = S.extend({}, r)), J.set(t, o));
            }
          }
          function $e(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function je(e, t, n, i) {
            t = l(t);
            var s,
              r,
              o,
              a,
              c,
              d,
              u = 0,
              p = e.length,
              h = p - 1,
              f = t[0],
              g = v(f);
            if (
              g ||
              (p > 1 && "string" == typeof f && !m.checkClone && Oe.test(f))
            )
              return e.each(function (s) {
                var r = e.eq(s);
                g && (t[0] = f.call(this, s, r.html())), je(r, t, n, i);
              });
            if (
              p &&
              ((r = (s = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === s.childNodes.length && (s = r),
              r || i)
            ) {
              for (a = (o = S.map(we(s, "script"), Ne)).length; u < p; u++)
                (c = s),
                  u !== h &&
                    ((c = S.clone(c, !0, !0)),
                    a && S.merge(o, we(c, "script"))),
                  n.call(e[u], c, u);
              if (a)
                for (
                  d = o[o.length - 1].ownerDocument, S.map(o, _e), u = 0;
                  u < a;
                  u++
                )
                  (c = o[u]),
                    ye.test(c.type || "") &&
                      !Q.access(c, "globalEval") &&
                      S.contains(d, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? S._evalUrl &&
                          !c.noModule &&
                          S._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            d
                          )
                        : x(c.textContent.replace(De, ""), c, d));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var i, s = t ? S.filter(t, e) : e, r = 0;
              null != (i = s[r]);
              r++
            )
              n || 1 !== i.nodeType || S.cleanData(we(i)),
                i.parentNode &&
                  (n && ae(i) && xe(we(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          S.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                s,
                r,
                o,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  S.isXMLDoc(e)
                )
              )
                for (o = we(a), i = 0, s = (r = we(e)).length; i < s; i++)
                  $e(r[i], o[i]);
              if (t)
                if (n)
                  for (
                    r = r || we(e), o = o || we(a), i = 0, s = r.length;
                    i < s;
                    i++
                  )
                    ze(r[i], o[i]);
                else ze(e, a);
              return (
                (o = we(a, "script")).length > 0 &&
                  xe(o, !l && we(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, s = S.event.special, r = 0;
                void 0 !== (n = e[r]);
                r++
              )
                if (K(n)) {
                  if ((t = n[Q.expando])) {
                    if (t.events)
                      for (i in t.events)
                        s[i]
                          ? S.event.remove(n, i)
                          : S.removeEvent(n, i, t.handle);
                    n[Q.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return R(
                  this,
                  function (e) {
                    return void 0 === e
                      ? S.text(this)
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
                    Pe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return je(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Pe(this, e);
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
                    (S.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return R(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Me.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (S.cleanData(we(t, !1)), (t.innerHTML = e));
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
                    S.inArray(this, e) < 0 &&
                      (S.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            S.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                S.fn[e] = function (e) {
                  for (
                    var n, i = [], s = S(e), r = s.length - 1, o = 0;
                    o <= r;
                    o++
                  )
                    (n = o === r ? this : this.clone(!0)),
                      S(s[o])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Fe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            qe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var i,
                s,
                r = {};
              for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s]);
              for (s in ((i = n.call(e)), t)) e.style[s] = r[s];
              return i;
            },
            Ge = new RegExp(re.join("|"), "i");
          function We(e, t, n) {
            var i,
              s,
              r,
              o,
              a = e.style;
            return (
              (n = n || qe(e)) &&
                ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (o = S.style(e, t)),
                !m.pixelBoxStyles() &&
                  Fe.test(o) &&
                  Ge.test(t) &&
                  ((i = a.width),
                  (s = a.minWidth),
                  (r = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = o),
                  (o = n.width),
                  (a.width = i),
                  (a.minWidth = s),
                  (a.maxWidth = r))),
              void 0 !== o ? o + "" : o
            );
          }
          function Re(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (d) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (d.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(c).appendChild(d);
                var e = i.getComputedStyle(d);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (d.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (s = 36 === t(e.width)),
                  (d.style.position = "absolute"),
                  (r = 12 === t(d.offsetWidth / 3)),
                  oe.removeChild(c),
                  (d = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              s,
              r,
              o,
              a,
              l,
              c = b.createElement("div"),
              d = b.createElement("div");
            d.style &&
              ((d.style.backgroundClip = "content-box"),
              (d.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
              S.extend(m, {
                boxSizingReliable: function () {
                  return e(), s;
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
                  return e(), r;
                },
                reliableTrDimensions: function () {
                  var e, t, n, s;
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
                      (s = i.getComputedStyle(t)),
                      (a =
                        parseInt(s.height, 10) +
                          parseInt(s.borderTopWidth, 10) +
                          parseInt(s.borderBottomWidth, 10) ===
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
            var t = S.cssProps[e] || Ye[e];
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
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            Qe = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Je = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = se.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, s, r) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (l += S.css(e, n + re[o], !0, s)),
                i
                  ? ("content" === n &&
                      (l -= S.css(e, "padding" + re[o], !0, s)),
                    "margin" !== n &&
                      (l -= S.css(e, "border" + re[o] + "Width", !0, s)))
                  : ((l += S.css(e, "padding" + re[o], !0, s)),
                    "padding" !== n
                      ? (l += S.css(e, "border" + re[o] + "Width", !0, s))
                      : (a += S.css(e, "border" + re[o] + "Width", !0, s)));
            return (
              !i &&
                r >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
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
              s =
                (!m.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, i),
              r = s,
              o = We(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Fe.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!m.boxSizingReliable() && s) ||
                (!m.reliableTrDimensions() && M(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === S.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((s = "border-box" === S.css(e, "boxSizing", !1, i)),
                (r = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) +
                tt(e, t, n || (s ? "border" : "content"), r, i, o) +
                "px"
            );
          }
          function it(e, t, n, i, s) {
            return new it.prototype.init(e, t, n, i, s);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = We(e, "opacity");
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
                var s,
                  r,
                  o,
                  a = U(t),
                  l = Ze.test(t),
                  c = e.style;
                if (
                  (l || (t = Ue(a)),
                  (o = S.cssHooks[t] || S.cssHooks[a]),
                  void 0 === n)
                )
                  return o && "get" in o && void 0 !== (s = o.get(e, !1, i))
                    ? s
                    : c[t];
                "string" === (r = typeof n) &&
                  (s = se.exec(n)) &&
                  s[1] &&
                  ((n = de(e, t, s)), (r = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== r ||
                      l ||
                      (n += (s && s[3]) || (S.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var s,
                r,
                o,
                a = U(t);
              return (
                Ze.test(t) || (t = Ue(a)),
                (o = S.cssHooks[t] || S.cssHooks[a]) &&
                  "get" in o &&
                  (s = o.get(e, !0, n)),
                void 0 === s && (s = We(e, t, i)),
                "normal" === s && t in Je && (s = Je[t]),
                "" === n || n
                  ? ((r = parseFloat(s)), !0 === n || isFinite(r) ? r || 0 : s)
                  : s
              );
            },
          }),
            S.each(["height", "width"], function (e, t) {
              S.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Ke.test(S.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : Be(e, Qe, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var s,
                    r = qe(e),
                    o = !m.scrollboxSize() && "absolute" === r.position,
                    a =
                      (o || i) && "border-box" === S.css(e, "boxSizing", !1, r),
                    l = i ? tt(e, t, i, a, r) : 0;
                  return (
                    a &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(r[t]) -
                          tt(e, t, "border", !1, r) -
                          0.5
                      )),
                    l &&
                      (s = se.exec(n)) &&
                      "px" !== (s[3] || "px") &&
                      ((e.style[t] = n), (n = S.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = Re(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(We(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            S.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (S.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        s = {},
                        r = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      s[e + re[i] + t] = r[i] || r[i - 2] || r[0];
                    return s;
                  },
                }),
                  "margin" !== e && (S.cssHooks[e + t].set = et);
              }
            ),
            S.fn.extend({
              css: function (e, t) {
                return R(
                  this,
                  function (e, t, n) {
                    var i,
                      s,
                      r = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (i = qe(e), s = t.length; o < s; o++)
                        r[t[o]] = S.css(e, t[o], !1, i);
                      return r;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (S.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, s, r) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = s || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = r || (S.cssNumber[n] ? "" : "px"));
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
                        S.easing[this.easing](
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
                    : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!S.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit);
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
            (S.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (S.fx = it.prototype.init),
            (S.fx.step = {});
          var st,
            rt,
            ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            rt &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, S.fx.interval),
              S.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                st = void 0;
              }),
              (st = Date.now())
            );
          }
          function dt(e, t) {
            var n,
              i = 0,
              s = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              s["margin" + (n = re[i])] = s["padding" + n] = e;
            return t && (s.opacity = s.width = e), s;
          }
          function ut(e, t, n) {
            for (
              var i,
                s = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                r = 0,
                o = s.length;
              r < o;
              r++
            )
              if ((i = s[r].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              s,
              r = 0,
              o = pt.prefilters.length,
              a = S.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (s) return !1;
                for (
                  var t = st || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    r = 0,
                    o = c.tweens.length;
                  r < o;
                  r++
                )
                  c.tweens[r].run(i);
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
                props: S.extend({}, t),
                opts: S.extend(
                  !0,
                  { specialEasing: {}, easing: S.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: st || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = S.Tween(
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
                  if (s) return this;
                  for (s = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              d = c.props;
            for (
              !(function (e, t) {
                var n, i, s, r, o;
                for (n in e)
                  if (
                    ((s = t[(i = U(n))]),
                    (r = e[n]),
                    Array.isArray(r) && ((s = r[1]), (r = e[n] = r[0])),
                    n !== i && ((e[i] = r), delete e[n]),
                    (o = S.cssHooks[i]) && ("expand" in o))
                  )
                    for (n in ((r = o.expand(r)), delete e[i], r))
                      (n in e) || ((e[n] = r[n]), (t[n] = s));
                  else t[i] = s;
              })(d, c.opts.specialEasing);
              r < o;
              r++
            )
              if ((i = pt.prefilters[r].call(c, e, d, c.opts)))
                return (
                  v(i.stop) &&
                    (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              S.map(d, ut, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              S.fx.timer(
                S.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (S.Animation = S.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return de(n.elem, e, se.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
              for (var n, i = 0, s = e.length; i < s; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  s,
                  r,
                  o,
                  a,
                  l,
                  c,
                  d,
                  u = "width" in t || "height" in t,
                  p = this,
                  h = {},
                  f = e.style,
                  g = e.nodeType && ce(e),
                  m = Q.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (o = S._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, S.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((s = t[i]), ot.test(s))) {
                    if (
                      (delete t[i],
                      (r = r || "toggle" === s),
                      s === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== s || !m || void 0 === m[i]) continue;
                      g = !0;
                    }
                    h[i] = (m && m[i]) || S.style(e, i);
                  }
                if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                  for (i in (u &&
                    1 === e.nodeType &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (c = m && m.display) && (c = Q.get(e, "display")),
                    "none" === (d = S.css(e, "display")) &&
                      (c
                        ? (d = c)
                        : (he([e], !0),
                          (c = e.style.display || c),
                          (d = S.css(e, "display")),
                          he([e]))),
                    ("inline" === d || ("inline-block" === d && null != c)) &&
                      "none" === S.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          f.display = c;
                        }),
                        null == c &&
                          ((d = f.display), (c = "none" === d ? "" : d))),
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
                      r && (m.hidden = !g),
                      g && he([e], !0),
                      p.done(function () {
                        for (i in (g || he([e]), Q.remove(e, "fxshow"), h))
                          S.style(e, i, h[i]);
                      })),
                      (l = ut(g ? m[i] : 0, i, p)),
                      i in m ||
                        ((m[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (S.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? S.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                S.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in S.fx.speeds
                      ? (i.duration = S.fx.speeds[i.duration])
                      : (i.duration = S.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && S.dequeue(this, i.queue);
                }),
                i
              );
            }),
            S.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var s = S.isEmptyObject(e),
                  r = S.speed(t, n, i),
                  o = function () {
                    var t = pt(this, S.extend({}, e), r);
                    (s || Q.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
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
                      s = null != e && e + "queueHooks",
                      r = S.timers,
                      o = Q.get(this);
                    if (s) o[s] && o[s].stop && i(o[s]);
                    else
                      for (s in o) o[s] && o[s].stop && at.test(s) && i(o[s]);
                    for (s = r.length; s--; )
                      r[s].elem !== this ||
                        (null != e && r[s].queue !== e) ||
                        (r[s].anim.stop(n), (t = !1), r.splice(s, 1));
                    (!t && n) || S.dequeue(this, e);
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
                      s = n[e + "queueHooks"],
                      r = S.timers,
                      o = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        S.queue(this, e, []),
                        s && s.stop && s.stop.call(this, !0),
                        t = r.length;
                      t--;

                    )
                      r[t].elem === this &&
                        r[t].queue === e &&
                        (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < o; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(["toggle", "show", "hide"], function (e, t) {
              var n = S.fn[t];
              S.fn[t] = function (e, i, s) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(dt(t, !0), e, i, s);
              };
            }),
            S.each(
              {
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                S.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (S.timers = []),
            (S.fx.tick = function () {
              var e,
                t = 0,
                n = S.timers;
              for (st = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (st = void 0);
            }),
            (S.fx.timer = function (e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function () {
              rt || ((rt = !0), lt());
            }),
            (S.fx.stop = function () {
              rt = null;
            }),
            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (S.fn.delay = function (e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var s = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(s);
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
            ft = S.expr.attrHandle;
          S.fn.extend({
            attr: function (e, t) {
              return R(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function (e, t, n) {
                var i,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === r && S.isXMLDoc(e)) ||
                        (s =
                          S.attrHooks[t.toLowerCase()] ||
                          (S.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : s && "set" in s && void 0 !== (i = s.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : s && "get" in s && null !== (i = s.get(e, t))
                        ? i
                        : null == (i = S.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && M(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  s = t && t.match(j);
                if (s && 1 === e.nodeType)
                  for (; (n = s[i++]); ) e.removeAttribute(n);
              },
            }),
            (ht = {
              set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ft[t] || S.find.attr;
              ft[t] = function (e, t, i) {
                var s,
                  r,
                  o = t.toLowerCase();
                return (
                  i ||
                    ((r = ft[o]),
                    (ft[o] = s),
                    (s = null != n(e, t, i) ? o : null),
                    (ft[o] = r)),
                  s
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
          S.fn.extend({
            prop: function (e, t) {
              return R(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function (e, t, n) {
                var i,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && S.isXMLDoc(e)) ||
                      ((t = S.propFix[t] || t), (s = S.propHooks[t])),
                    void 0 !== n
                      ? s && "set" in s && void 0 !== (i = s.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : s && "get" in s && null !== (i = s.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = S.find.attr(e, "tabindex");
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
              (S.propHooks.selected = {
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
            S.each(
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
                S.propFix[this.toLowerCase()] = this;
              }
            ),
            S.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  s,
                  r,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((s = yt(n)), (i = 1 === n.nodeType && " " + vt(s) + " "))
                    ) {
                      for (o = 0; (r = t[o++]); )
                        i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                      s !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  s,
                  r,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((s = yt(n)), (i = 1 === n.nodeType && " " + vt(s) + " "))
                    ) {
                      for (o = 0; (r = t[o++]); )
                        for (; i.indexOf(" " + r + " ") > -1; )
                          i = i.replace(" " + r + " ", " ");
                      s !== (a = vt(i)) && n.setAttribute("class", a);
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
                      S(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, s, r, o;
                      if (i)
                        for (s = 0, r = S(this), o = bt(e); (t = o[s++]); )
                          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
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
          S.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                s = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var s;
                    1 === this.nodeType &&
                      (null == (s = i ? e.call(this, n, S(this).val()) : e)
                        ? (s = "")
                        : "number" == typeof s
                        ? (s += "")
                        : Array.isArray(s) &&
                          (s = S.map(s, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        S.valHooks[this.type] ||
                        S.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, s, "value")) ||
                        (this.value = s));
                  }))
                : s
                ? (t =
                    S.valHooks[s.type] ||
                    S.valHooks[s.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(s, "value"))
                  ? n
                  : "string" == typeof (n = s.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      s = e.options,
                      r = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      l = o ? r + 1 : s.length;
                    for (i = r < 0 ? l : o ? r : 0; i < l; i++)
                      if (
                        ((n = s[i]).selected || i === r) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))
                      ) {
                        if (((t = S(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, s = e.options, r = S.makeArray(t), o = s.length;
                      o--;

                    )
                      ((i = s[o]).selected =
                        S.inArray(S.valHooks.option.get(i), r) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            S.each(["radio", "checkbox"], function () {
              (S.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in i);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function (e, t, n, s) {
              var r,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                f = [n || b],
                g = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(g + S.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[S.expando]
                    ? e
                    : new S.Event(g, "object" == typeof e && e)).isTrigger = s
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
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (u = S.event.special[g] || {}),
                  s || !u.trigger || !1 !== u.trigger.apply(n, t)))
              ) {
                if (!s && !u.noBubble && !y(n)) {
                  for (
                    l = u.delegateType || g,
                      xt.test(l + g) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    f.push(o), (a = o);
                  a === (n.ownerDocument || b) &&
                    f.push(a.defaultView || a.parentWindow || i);
                }
                for (r = 0; (o = f[r++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = r > 1 ? l : u.bindType || g),
                    (d =
                      (Q.get(o, "events") || Object.create(null))[e.type] &&
                      Q.get(o, "handle")) && d.apply(o, t),
                    (d = c && o[c]) &&
                      d.apply &&
                      K(o) &&
                      ((e.result = d.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  s ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(f.pop(), t)) ||
                    !K(n) ||
                    (c &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (S.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Tt),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Tt),
                      (S.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
              S.event.trigger(i, null, t);
            },
          }),
            S.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  S.event.simulate(t, e.target, S.event.fix(e));
                };
                S.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      s = Q.access(i, t);
                    s || i.addEventListener(e, n, !0),
                      Q.access(i, t, (s || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      s = Q.access(i, t) - 1;
                    s
                      ? Q.access(i, t, s)
                      : (i.removeEventListener(e, n, !0), Q.remove(i, t));
                  },
                };
              });
          var Ct = i.location,
            St = { guid: Date.now() },
            Et = /\?/;
          S.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                S.error(
                  "Invalid XML: " +
                    (n
                      ? S.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var It = /\[\]$/,
            kt = /\r?\n/g,
            Lt = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;
          function Mt(e, t, n, i) {
            var s;
            if (Array.isArray(t))
              S.each(t, function (t, s) {
                n || It.test(e)
                  ? i(e, s)
                  : Mt(
                      e +
                        "[" +
                        ("object" == typeof s && null != s ? t : "") +
                        "]",
                      s,
                      n,
                      i
                    );
              });
            else if (n || "object" !== T(t)) i(e, t);
            else for (s in t) Mt(e + "[" + s + "]", t[s], n, i);
          }
          (S.param = function (e, t) {
            var n,
              i = [],
              s = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function () {
                s(this.name, this.value);
              });
            else for (n in e) Mt(n, e[n], t, s);
            return i.join("&");
          }),
            S.fn.extend({
              serialize: function () {
                return S.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = S.prop(this, "elements");
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(":disabled") &&
                      At.test(this.nodeName) &&
                      !Lt.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? S.map(n, function (e) {
                          return { name: t.name, value: e.replace(kt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(kt, "\r\n") };
                  })
                  .get();
              },
            });
          var Ot = /%20/g,
            Dt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            _t = /^(?:GET|HEAD)$/,
            zt = /^\/\//,
            $t = {},
            jt = {},
            Ht = "*/".concat("*"),
            Ft = b.createElement("a");
          function qt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                s = 0,
                r = t.toLowerCase().match(j) || [];
              if (v(n))
                for (; (i = r[s++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Bt(e, t, n, i) {
            var s = {},
              r = e === jt;
            function o(a) {
              var l;
              return (
                (s[a] = !0),
                S.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || r || s[c]
                    ? r
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!s["*"] && o("*"));
          }
          function Gt(e, t) {
            var n,
              i,
              s = S.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
            return i && S.extend(!0, e, i), e;
          }
          (Ft.href = Ct.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
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
                  "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Gt(Gt(e, S.ajaxSettings), t) : Gt(S.ajaxSettings, e);
              },
              ajaxPrefilter: qt($t),
              ajaxTransport: qt(jt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  s,
                  r,
                  o,
                  a,
                  l,
                  c,
                  d,
                  u,
                  p,
                  h = S.ajaxSetup({}, t),
                  f = h.context || h,
                  g = h.context && (f.nodeType || f.jquery) ? S(f) : S.event,
                  m = S.Deferred(),
                  v = S.Callbacks("once memory"),
                  y = h.statusCode || {},
                  w = {},
                  x = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!o)
                          for (o = {}; (t = Nt.exec(r)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? r : null;
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
                        if (c) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (m.promise(C),
                  (h.url = ((e || h.url || Ct.href) + "").replace(
                    zt,
                    Ct.protocol + "//"
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
                        Ft.protocol + "//" + Ft.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = S.param(h.data, h.traditional)),
                  Bt($t, h, t, C),
                  c)
                )
                  return C;
                for (u in ((d = S.event && h.global) &&
                  0 == S.active++ &&
                  S.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !_t.test(h.type)),
                (s = h.url.replace(Dt, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(Ot, "+"))
                  : ((p = h.url.slice(s.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((s += (Et.test(s) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((s = s.replace(Pt, "$1")),
                      (p = (Et.test(s) ? "&" : "?") + "_=" + St.guid++ + p)),
                    (h.url = s + p)),
                h.ifModified &&
                  (S.lastModified[s] &&
                    C.setRequestHeader("If-Modified-Since", S.lastModified[s]),
                  S.etag[s] && C.setRequestHeader("If-None-Match", S.etag[s])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", h.contentType),
                C.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  C.setRequestHeader(u, h.headers[u]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, C, h) || c))
                  return C.abort();
                if (
                  ((T = "abort"),
                  v.add(h.complete),
                  C.done(h.success),
                  C.fail(h.error),
                  (n = Bt(jt, h, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), d && g.trigger("ajaxSend", [C, h]), c)
                  )
                    return C;
                  h.async &&
                    h.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      C.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), n.send(w, E);
                  } catch (e) {
                    if (c) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, o, l) {
                  var u,
                    p,
                    b,
                    w,
                    x,
                    T = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (r = l || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (u = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (w = (function (e, t, n) {
                        for (
                          var i, s, r, o, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (s in a)
                            if (a[s] && a[s].test(i)) {
                              l.unshift(s);
                              break;
                            }
                        if (l[0] in n) r = l[0];
                        else {
                          for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                              r = s;
                              break;
                            }
                            o || (o = s);
                          }
                          r = r || o;
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r];
                      })(h, C, o)),
                    !u &&
                      S.inArray("script", h.dataTypes) > -1 &&
                      S.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (w = (function (e, t, n, i) {
                      var s,
                        r,
                        o,
                        a,
                        l,
                        c = {},
                        d = e.dataTypes.slice();
                      if (d[1])
                        for (o in e.converters)
                          c[o.toLowerCase()] = e.converters[o];
                      for (r = d.shift(); r; )
                        if (
                          (e.responseFields[r] && (n[e.responseFields[r]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = r),
                          (r = d.shift()))
                        )
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                            if (!(o = c[l + " " + r] || c["* " + r]))
                              for (s in c)
                                if (
                                  (a = s.split(" "))[1] === r &&
                                  (o = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === o
                                    ? (o = c[s])
                                    : !0 !== c[s] &&
                                      ((r = a[0]), d.unshift(a[1]));
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
                                      : "No conversion from " + l + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, w, C, u)),
                    u
                      ? (h.ifModified &&
                          ((x = C.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[s] = x),
                          (x = C.getResponseHeader("etag")) && (S.etag[s] = x)),
                        204 === e || "HEAD" === h.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = w.state), (p = w.data), (u = !(b = w.error))))
                      : ((b = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    u
                      ? m.resolveWith(f, [p, T, C])
                      : m.rejectWith(f, [C, T, b]),
                    C.statusCode(y),
                    (y = void 0),
                    d &&
                      g.trigger(u ? "ajaxSuccess" : "ajaxError", [
                        C,
                        h,
                        u ? p : b,
                      ]),
                    v.fireWith(f, [C, T]),
                    d &&
                      (g.trigger("ajaxComplete", [C, h]),
                      --S.active || S.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
              },
            }),
            S.each(["get", "post"], function (e, t) {
              S[t] = function (e, n, i, s) {
                return (
                  v(n) && ((s = s || i), (i = n), (n = void 0)),
                  S.ajax(
                    S.extend(
                      { url: e, type: t, dataType: s, data: n, success: i },
                      S.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            S.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (S._evalUrl = function (e, t, n) {
              return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  S.globalEval(e, t, n);
                },
              });
            }),
            S.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function (e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (S.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Wt = { 0: 200, 1223: 204 },
            Rt = S.ajaxSettings.xhr();
          (m.cors = !!Rt && "withCredentials" in Rt),
            (m.ajax = Rt = !!Rt),
            S.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Rt && !e.crossDomain))
                return {
                  send: function (s, r) {
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
                      s["X-Requested-With"] ||
                      (s["X-Requested-With"] = "XMLHttpRequest"),
                    s))
                      a.setRequestHeader(o, s[o]);
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
                              ? r(0, "error")
                              : r(a.status, a.statusText)
                            : r(
                                Wt[a.status] || a.status,
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
            S.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            S.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, s) {
                    (t = S("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && s("error" === e.type ? 404 : 200, e.type);
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
          S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || S.expando + "_" + St.guid++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter("json jsonp", function (e, t, n) {
              var s,
                r,
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
                  (s = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Yt, "$1" + s))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                  (e.converters["script json"] = function () {
                    return o || S.error(s + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = i[s]),
                  (i[s] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === r ? S(i).removeProp(s) : (i[s] = r),
                      e[s] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(s)),
                      o && v(r) && r(o[0]),
                      (o = r = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Vt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Vt.childNodes.length)),
            (S.parseHTML = function (e, t, n) {
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
                  (r = !n && []),
                  (s = O.exec(e))
                    ? [t.createElement(s[1])]
                    : ((s = Ce([e], t, r)),
                      r && r.length && S(r).remove(),
                      S.merge([], s.childNodes)));
              var i, s, r;
            }),
            (S.fn.load = function (e, t, n) {
              var i,
                s,
                r,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (s = "POST"),
                o.length > 0 &&
                  S.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (r = arguments),
                        o.html(
                          i ? S("<div>").append(S.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, r || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (S.expr.pseudos.animated = function (e) {
              return S.grep(S.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function (e, t, n) {
                var i,
                  s,
                  r,
                  o,
                  a,
                  l,
                  c = S.css(e, "position"),
                  d = S(e),
                  u = {};
                "static" === c && (e.style.position = "relative"),
                  (a = d.offset()),
                  (r = S.css(e, "top")),
                  (l = S.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (r + l).indexOf("auto") > -1
                    ? ((o = (i = d.position()).top), (s = i.left))
                    : ((o = parseFloat(r) || 0), (s = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, S.extend({}, a))),
                  null != t.top && (u.top = t.top - a.top + o),
                  null != t.left && (u.left = t.left - a.left + s),
                  "using" in t ? t.using.call(e, u) : d.css(u);
              },
            }),
            S.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        S.offset.setOffset(this, e, t);
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
                    s = { top: 0, left: 0 };
                  if ("fixed" === S.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === S.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((s = S(e).offset()).top += S.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (s.left += S.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - s.top - S.css(i, "marginTop", !0),
                    left: t.left - s.left - S.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === S.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            S.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function (i) {
                  return R(
                    this,
                    function (e, i, s) {
                      var r;
                      if (
                        (y(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === s)
                      )
                        return r ? r[t] : e[i];
                      r
                        ? r.scrollTo(
                            n ? r.pageXOffset : s,
                            n ? s : r.pageYOffset
                          )
                        : (e[i] = s);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            S.each(["top", "left"], function (e, t) {
              S.cssHooks[t] = Re(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = We(e, t)), Fe.test(n) ? S(e).position()[t] + "px" : n
                  );
              });
            }),
            S.each({ Height: "height", Width: "width" }, function (e, t) {
              S.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  S.fn[i] = function (s, r) {
                    var o = arguments.length && (n || "boolean" != typeof s),
                      a = n || (!0 === s || !0 === r ? "margin" : "border");
                    return R(
                      this,
                      function (t, n, s) {
                        var r;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              r["scroll" + e],
                              t.body["offset" + e],
                              r["offset" + e],
                              r["client" + e]
                            ))
                          : void 0 === s
                          ? S.css(t, n, a)
                          : S.style(t, n, s, a);
                      },
                      t,
                      o ? s : void 0,
                      o
                    );
                  };
                }
              );
            }),
            S.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                S.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            S.fn.extend({
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
            S.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                S.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (S.proxy = function (e, t) {
            var n, i, s;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (s = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (s.guid = e.guid = e.guid || S.guid++),
                s
              );
          }),
            (S.holdReady = function (e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = M),
            (S.isFunction = v),
            (S.isWindow = y),
            (S.camelCase = U),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
              var t = S.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (S.trim = function (e) {
              return null == e ? "" : (e + "").replace(Ut, "");
            }),
            void 0 ===
              (n = function () {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var Kt = i.jQuery,
            Zt = i.$;
          return (
            (S.noConflict = function (e) {
              return (
                i.$ === S && (i.$ = Zt),
                e && i.jQuery === S && (i.jQuery = Kt),
                S
              );
            }),
            void 0 === s && (i.jQuery = i.$ = S),
            S
          );
        });
      },
      641: (e, t, n) => {
        var i, s, r;
        (s = [n(755)]),
          void 0 ===
            (r =
              "function" ==
              typeof (i = function (e) {
                return (
                  (e.fn.tilt = function (t) {
                    const n = function () {
                        this.ticking ||
                          (requestAnimationFrame(d.bind(this)),
                          (this.ticking = !0));
                      },
                      i = function () {
                        const t = this;
                        e(this).on("mousemove", a),
                          e(this).on("mouseenter", r),
                          this.settings.reset && e(this).on("mouseleave", l),
                          this.settings.glare &&
                            e(window).on("resize", p.bind(t));
                      },
                      s = function () {
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
                      r = function (t) {
                        (this.ticking = !1),
                          e(this).css({ "will-change": "transform" }),
                          s.call(this),
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
                        s.call(this),
                          (this.reset = !0),
                          n.call(this),
                          e(this).trigger("tilt.mouseLeave");
                      },
                      c = function () {
                        const t = e(this).outerWidth(),
                          n = e(this).outerHeight(),
                          i = e(this).offset().left,
                          s = e(this).offset().top,
                          r = (this.mousePositions.x - i) / t,
                          o = (this.mousePositions.y - s) / n;
                        return {
                          tiltX: (
                            this.settings.maxTilt / 2 -
                            r * this.settings.maxTilt
                          ).toFixed(2),
                          tiltY: (
                            o * this.settings.maxTilt -
                            this.settings.maxTilt / 2
                          ).toFixed(2),
                          percentageX: 100 * r,
                          percentageY: 100 * o,
                          angle:
                            Math.atan2(
                              this.mousePositions.x - (i + t / 2),
                              -(this.mousePositions.y - (s + n / 2))
                            ) *
                            (180 / Math.PI),
                        };
                      },
                      d = function () {
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
                      u = function () {
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
                              this.settings.glare && u.call(this),
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
                ? i.apply(t, s)
                : i) || (e.exports = r);
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
            s = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
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
                s = new e(t);
              try {
                n = new CustomEvent(i, { detail: { instance: s } });
              } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: s }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            f = "loading",
            g = "loaded",
            m = "applied",
            v = "error",
            y = "native",
            b = "data-",
            w = "ll-status",
            x = function (e, t) {
              return e.getAttribute(b + t);
            },
            T = function (e) {
              return x(e, w);
            },
            C = function (e, t) {
              return (function (e, t, n) {
                var i = "data-ll-status";
                null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
              })(e, 0, t);
            },
            S = function (e) {
              return C(e, null);
            },
            E = function (e) {
              return null === T(e);
            },
            I = function (e) {
              return T(e) === y;
            },
            k = [f, g, m, v],
            L = function (e, t, n, i) {
              e &&
                (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
            },
            A = function (e, t) {
              s
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            M = function (e, t) {
              s
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            O = function (e) {
              return e.llTempImage;
            },
            D = function (e, t) {
              if (t) {
                var n = t._observer;
                n && n.unobserve(e);
              }
            },
            P = function (e, t) {
              e && (e.loadingCount += t);
            },
            N = function (e, t) {
              e && (e.toLoadCount = t);
            },
            _ = function (e) {
              for (var t, n = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && n.push(t);
              return n;
            },
            z = function (e, t) {
              var n = e.parentNode;
              n && "PICTURE" === n.tagName && _(n).forEach(t);
            },
            $ = function (e, t) {
              _(e).forEach(t);
            },
            j = [c],
            H = [c, p],
            F = [c, d, u],
            q = function (e) {
              return !!e[h];
            },
            B = function (e) {
              return e[h];
            },
            G = function (e) {
              return delete e[h];
            },
            W = function (e, t) {
              if (!q(e)) {
                var n = {};
                t.forEach(function (t) {
                  n[t] = e.getAttribute(t);
                }),
                  (e[h] = n);
              }
            },
            R = function (e, t) {
              if (q(e)) {
                var n = B(e);
                t.forEach(function (t) {
                  !(function (e, t, n) {
                    n ? e.setAttribute(t, n) : e.removeAttribute(t);
                  })(e, t, n[t]);
                });
              }
            },
            V = function (e, t, n) {
              A(e, t.class_loading),
                C(e, f),
                n && (P(n, 1), L(t.callback_loading, e, n));
            },
            X = function (e, t, n) {
              n && e.setAttribute(t, n);
            },
            Y = function (e, t) {
              X(e, u, x(e, t.data_sizes)),
                X(e, d, x(e, t.data_srcset)),
                X(e, c, x(e, t.data_src));
            },
            U = {
              IMG: function (e, t) {
                z(e, function (e) {
                  W(e, F), Y(e, t);
                }),
                  W(e, F),
                  Y(e, t);
              },
              IFRAME: function (e, t) {
                W(e, j), X(e, c, x(e, t.data_src));
              },
              VIDEO: function (e, t) {
                $(e, function (e) {
                  W(e, j), X(e, c, x(e, t.data_src));
                }),
                  W(e, H),
                  X(e, p, x(e, t.data_poster)),
                  X(e, c, x(e, t.data_src)),
                  e.load();
              },
            },
            K = ["IMG", "IFRAME", "VIDEO"],
            Z = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            Q = function (e, t, n) {
              e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
            },
            J = function (e, t, n) {
              e.removeEventListener(t, n);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                  var i = t[n];
                  J(e, n, i);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, n) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                P(n, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(n),
                M(e, t.class_loading),
                t.unobserve_completed && D(e, n);
            },
            ie = function (e, t, n) {
              var i = O(e) || e;
              ee(i) ||
                (function (e, t, n) {
                  ee(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  Q(e, i, t), Q(e, "error", n);
                })(
                  i,
                  function (s) {
                    !(function (e, t, n, i) {
                      var s = I(t);
                      ne(t, n, i),
                        A(t, n.class_loaded),
                        C(t, g),
                        L(n.callback_loaded, t, i),
                        s || Z(n, i);
                    })(0, e, t, n),
                      te(i);
                  },
                  function (s) {
                    !(function (e, t, n, i) {
                      var s = I(t);
                      ne(t, n, i),
                        A(t, n.class_error),
                        C(t, v),
                        L(n.callback_error, t, i),
                        s || Z(n, i);
                    })(0, e, t, n),
                      te(i);
                  }
                );
            },
            se = function (e, t, n) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                ie(e, t, n),
                (function (e) {
                  q(e) || (e[h] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, n) {
                  var i = x(e, t.data_bg),
                    s = x(e, t.data_bg_hidpi),
                    o = r && s ? s : i;
                  o &&
                    ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                    O(e).setAttribute(c, o),
                    V(e, t, n));
                })(e, t, n),
                (function (e, t, n) {
                  var i = x(e, t.data_bg_multi),
                    s = x(e, t.data_bg_multi_hidpi),
                    o = r && s ? s : i;
                  o &&
                    ((e.style.backgroundImage = o),
                    (function (e, t, n) {
                      A(e, t.class_applied),
                        C(e, m),
                        n &&
                          (t.unobserve_completed && D(e, t),
                          L(t.callback_applied, e, n));
                    })(e, t, n));
                })(e, t, n);
            },
            re = function (e, t, n) {
              !(function (e) {
                return K.indexOf(e.tagName) > -1;
              })(e)
                ? se(e, t, n)
                : (function (e, t, n) {
                    ie(e, t, n),
                      (function (e, t, n) {
                        var i = U[e.tagName];
                        i && (i(e, t), V(e, t, n));
                      })(e, t, n);
                  })(e, t, n);
            },
            oe = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ae = function (e) {
              z(e, function (e) {
                R(e, F);
              }),
                R(e, F);
            },
            le = {
              IMG: ae,
              IFRAME: function (e) {
                R(e, j);
              },
              VIDEO: function (e) {
                $(e, function (e) {
                  R(e, j);
                }),
                  R(e, H),
                  e.load();
              },
            },
            ce = function (e, t) {
              (function (e) {
                var t = le[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (q(e)) {
                        var t = B(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  E(e) ||
                    I(e) ||
                    (M(e, t.class_entered),
                    M(e, t.class_exited),
                    M(e, t.class_applied),
                    M(e, t.class_loading),
                    M(e, t.class_loaded),
                    M(e, t.class_error));
                })(e, t),
                S(e),
                G(e);
            },
            de = ["IMG", "IFRAME", "VIDEO"],
            ue = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            pe = function (e, t, n) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, n, i) {
                      var s = (function (e) {
                        return k.indexOf(T(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        A(e, n.class_entered),
                        M(e, n.class_exited),
                        (function (e, t, n) {
                          t.unobserve_entered && D(e, n);
                        })(e, n, i),
                        L(n.callback_enter, e, t, i),
                        s || re(e, n, i);
                    })(e.target, e, t, n)
                  : (function (e, t, n, i) {
                      E(e) ||
                        (A(e, n.class_exited),
                        (function (e, t, n, i) {
                          n.cancel_on_exit &&
                            (function (e) {
                              return T(e) === f;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              z(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            ae(e),
                            M(e, n.class_loading),
                            P(i, -1),
                            S(e),
                            L(n.callback_cancel, e, t, i));
                        })(e, t, n, i),
                        L(n.callback_exit, e, t, i));
                    })(e.target, e, t, n);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ge = function (e) {
              return (function (e) {
                return T(e) === v;
              })(e);
            },
            me = function (e, t) {
              return (function (e) {
                return he(e).filter(E);
              })(e || fe(t));
            },
            ve = function (e, n) {
              var s = a(e);
              (this._settings = s),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !ue(e) &&
                    (t._observer = new IntersectionObserver(
                      function (n) {
                        pe(n, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(s, this),
                (function (e, n) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var n;
                        ((n = fe(e)), he(n).filter(ge)).forEach(function (t) {
                          M(t, e.class_error), S(t);
                        }),
                          t.update();
                      })(e, n);
                    });
                })(s, this),
                this.update(n);
            };
          return (
            (ve.prototype = {
              update: function (e) {
                var t,
                  s,
                  r = this._settings,
                  o = me(e, r);
                N(this, o.length),
                  !n && i
                    ? ue(r)
                      ? (function (e, t, n) {
                          e.forEach(function (e) {
                            -1 !== de.indexOf(e.tagName) &&
                              (function (e, t, n) {
                                e.setAttribute("loading", "lazy"),
                                  ie(e, t, n),
                                  (function (e, t) {
                                    var n = U[e.tagName];
                                    n && n(e, t);
                                  })(e, t),
                                  C(e, y);
                              })(e, t, n);
                          }),
                            N(n, 0);
                        })(o, r, this)
                      : ((s = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, s))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  fe(this._settings).forEach(function (e) {
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
                me(e, n).forEach(function (e) {
                  D(e, t), re(e, n, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  ce(t, e);
                });
              },
            }),
            (ve.load = function (e, t) {
              var n = a(t);
              re(e, n);
            }),
            (ve.resetStatus = function (e) {
              S(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var n, i = 0; (n = t[i]); i += 1) l(e, n);
                  else l(e, t);
              })(ve, window.lazyLoadOptions),
            ve
          );
        })();
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
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
            s = e.hasAttribute("data-prlx-dxr") ? -1 : 1,
            r = e.hasAttribute("data-prlx-dyr") ? -1 : 1,
            o = e.dataset.prlxA ? +e.dataset.prlxA : 50;
          let a = 0,
            l = 0,
            c = 0,
            d = 0;
          function u(t = window) {
            t.addEventListener("mousemove", function (t) {
              const n = e.getBoundingClientRect().top + window.scrollY;
              if (n >= window.scrollY || n + e.offsetHeight >= window.scrollY) {
                const e = window.innerWidth,
                  n = window.innerHeight,
                  i = t.clientX - e / 2,
                  s = t.clientY - n / 2;
                (c = (i / e) * 100), (d = (s / n) * 100);
              }
            });
          }
          !(function t() {
            (a += ((c - a) * o) / 1e3),
              (l += ((d - l) * o) / 1e3),
              (e.style.cssText = `transform: translate3D(${
                (s * a) / (n / 10)
              }%,${(r * l) / (i / 10)}%,0);`),
              requestAnimationFrame(t);
          })(),
            t ? u(t) : u();
        });
      }
      setLogging(e) {
        this.config.logging && o(`[PRLX Mouse]: ${e}`);
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
    let i = !0,
      s = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      },
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
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
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      };
    function o(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function a(e) {
      return e.filter(function (e, t, n) {
        return n.indexOf(e) === t;
      });
    }
    let l = (e, t = !1, n = 500, i = 0) => {
      const r = document.querySelector(e);
      if (r) {
        let a = "",
          l = 0;
        t &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: n,
          header: a,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (s(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", c);
        else {
          let e = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        o(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    function c(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function d(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : c(t[n]) && c(e[n]) && Object.keys(t[n]).length > 0 && d(e[n], t[n]);
      });
    }
    const u = {
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
    function p() {
      const e = "undefined" != typeof document ? document : {};
      return d(e, u), e;
    }
    const h = {
      document: u,
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
    function f() {
      const e = "undefined" != typeof window ? window : {};
      return d(e, h), e;
    }
    class g extends Array {
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
    function m(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...m(e)) : t.push(e);
        }),
        t
      );
    }
    function v(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function y(e, t) {
      const n = f(),
        i = p();
      let s = [];
      if (!t && e instanceof g) return e;
      if (!e) return new g(s);
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
            s.push(t.childNodes[e]);
        } else
          s = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) s.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof g) return e;
        s = e;
      }
      return new g(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(s)
      );
    }
    y.fn = g.prototype;
    const b = "resize scroll".split(" ");
    function w(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            b.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : y(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    w("click"),
      w("blur"),
      w("focus"),
      w("focusin"),
      w("focusout"),
      w("keyup"),
      w("keydown"),
      w("keypress"),
      w("submit"),
      w("change"),
      w("mousedown"),
      w("mousemove"),
      w("mouseup"),
      w("mouseenter"),
      w("mouseleave"),
      w("mouseout"),
      w("mouseover"),
      w("touchstart"),
      w("touchend"),
      w("touchmove"),
      w("resize"),
      w("scroll");
    const x = {
      addClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
        return (
          v(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
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
        let [t, n, i, s] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), y(t).is(n))) i.apply(t, s);
          else {
            const e = y(t).parents();
            for (let t = 0; t < e.length; t += 1)
              y(e[t]).is(n) && i.apply(e[t], s);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
          s || (s = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, s);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, s] = e;
        "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
          s || (s = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!n && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (r.removeEventListener(t, n.proxyListener, s),
                    o.splice(e, 1))
                  : i ||
                    (r.removeEventListener(t, n.proxyListener, s),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = f(),
          n = e[0].split(" "),
          i = e[1];
        for (let s = 0; s < n.length; s += 1) {
          const r = n[s];
          for (let n = 0; n < this.length; n += 1) {
            const s = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(n),
                (s.dom7EventData = []),
                delete s.dom7EventData;
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
              i.target === this && (e.call(this, i), t.off("transitionend", n));
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
        const e = f();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = f(),
            t = p(),
            n = this[0],
            i = n.getBoundingClientRect(),
            s = t.body,
            r = n.clientTop || s.clientTop || 0,
            o = n.clientLeft || s.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + a - r, left: i.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const n = f();
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
        const t = f(),
          n = p(),
          i = this[0];
        let s, r;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (s = y(e), r = 0; r < s.length; r += 1) if (s[r] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof g) {
          for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
            if (s[r] === i) return !0;
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
        if (e > t - 1) return y([]);
        if (e < 0) {
          const n = t + e;
          return y(n < 0 ? [] : [this[n]]);
        }
        return y([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = p();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof g)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = p();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(s.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof g)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && y(this[0].nextElementSibling).is(e)
              ? y([this[0].nextElementSibling])
              : y([])
            : this[0].nextElementSibling
            ? y([this[0].nextElementSibling])
            : y([])
          : y([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return y([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? y(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return y(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && y(t.previousElementSibling).is(e)
              ? y([t.previousElementSibling])
              : y([])
            : t.previousElementSibling
            ? y([t.previousElementSibling])
            : y([]);
        }
        return y([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return y([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? y(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return y(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? y(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return y(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? y(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return y(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? y([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return y(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !y(i[n]).is(e)) || t.push(i[n]);
        }
        return y(t);
      },
      filter: function (e) {
        return y(v(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(x).forEach((e) => {
      Object.defineProperty(y.fn, e, { value: x[e], writable: !0 });
    });
    const T = y;
    function C(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function S() {
      return Date.now();
    }
    function E(e, t) {
      void 0 === t && (t = "x");
      const n = f();
      let i, s, r;
      const o = (function (e) {
        const t = f();
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
          ? ((s = o.transform || o.webkitTransform),
            s.split(",").length > 6 &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new n.WebKitCSSMatrix("none" === s ? "" : s)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (s = n.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (s = n.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        s || 0
      );
    }
    function I(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function k(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function L() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != i && !k(i)) {
          const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = n.length; t < s; t += 1) {
            const s = n[t],
              r = Object.getOwnPropertyDescriptor(i, s);
            void 0 !== r &&
              r.enumerable &&
              (I(e[s]) && I(i[s])
                ? i[s].__swiper__
                  ? (e[s] = i[s])
                  : L(e[s], i[s])
                : !I(e[s]) && I(i[s])
                ? ((e[s] = {}), i[s].__swiper__ ? (e[s] = i[s]) : L(e[s], i[s]))
                : (e[s] = i[s]));
          }
        }
      }
      return e;
    }
    function A(e, t, n) {
      e.style.setProperty(t, n);
    }
    function M(e) {
      let { swiper: t, targetPosition: n, side: i } = e;
      const s = f(),
        r = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(t.cssModeFrameID);
      const c = n > r ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + c * (n - r);
          if ((d(p, n) && (p = n), t.wrapperEl.scrollTo({ [i]: p }), d(p, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void s.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = s.requestAnimationFrame(u);
        };
      u();
    }
    let O, D, P;
    function N() {
      return (
        O ||
          (O = (function () {
            const e = f(),
              t = p();
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
        O
      );
    }
    function _(e) {
      return (
        void 0 === e && (e = {}),
        D ||
          (D = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = N(),
              i = f(),
              s = i.navigator.platform,
              r = t || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = i.screen.width,
              l = i.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === s;
            let g = "MacIntel" === s;
            return (
              !d &&
                g &&
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
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (g = !1)),
              c && !h && ((o.os = "android"), (o.android = !0)),
              (d || p || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        D
      );
    }
    function z() {
      return (
        P ||
          (P = (function () {
            const e = f();
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
        P
      );
    }
    const $ = {
      on(e, t, n) {
        const i = this;
        if ("function" != typeof t) return i;
        const s = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][s](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if ("function" != typeof t) return i;
        function s() {
          i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          t.apply(i, r);
        }
        return (s.__emitterProxy = t), i.on(e, s, n);
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
                  n.eventsListeners[e].forEach((i, s) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(s, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, n, i;
        for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
          r[o] = arguments[o];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (n = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (n = r[0].data), (i = r[0].context || e)),
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
    const j = {
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
          { $wrapperEl: s, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = s.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
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
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (A(e.wrapperEl, "--swiper-centered-offset-before", ""),
            A(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let S;
        C && e.grid.initSlides(u);
        const E =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let s = 0; s < u; s += 1) {
          S = 0;
          const o = d.eq(s);
          if (
            (C && e.grid.updateSlide(s, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              E && (d[s].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                S = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = n(r, "width"),
                  t = n(r, "padding-left"),
                  i = n(r, "padding-right"),
                  s = n(r, "margin-left"),
                  a = n(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) S = e + s + a;
                else {
                  const { clientWidth: n, offsetWidth: r } = o[0];
                  S = e + t + i + s + a + (r - n);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                i.roundLengths && (S = Math.floor(S));
            } else
              (S = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
                i.roundLengths && (S = Math.floor(S)),
                d[s] && (d[s].style[t("width")] = `${S}px`);
            d[s] && (d[s].swiperSlideSize = S),
              f.push(S),
              i.centeredSlides
                ? ((w = w + S / 2 + x / 2 + b),
                  0 === x && 0 !== s && (w = w - r / 2 - b),
                  0 === s && (w = w - r / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  T % i.slidesPerGroup == 0 && p.push(w),
                  h.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  h.push(w),
                  (w = w + S + b)),
              (e.virtualSize += S + b),
              (x = S),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + m),
          o &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            s.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            s.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(S, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let s = p[n];
            i.roundLengths && (s = Math.floor(s)),
              p[n] <= e.virtualSize - r && t.push(s);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [n]: `${b}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
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
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          A(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            A(
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
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= i.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          i = t.virtual && t.params.virtual.enabled;
        let s,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              n.push(e);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length && !i) break;
              n.push(o(e));
            }
        else n.push(o(t.activeIndex));
        for (s = 0; s < n.length; s += 1)
          if (void 0 !== n[s]) {
            const e = n[s].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
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
          { slides: i, rtlTranslate: s, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        s && (o = e),
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
            d =
              (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(n.slideVisibleClass)),
            (a.progress = s ? -c : c),
            (a.originalProgress = s ? -d : d);
        }
        t.visibleSlides = T(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === i
          ? ((s = 0), (r = !0), (o = !0))
          : ((s = (e - t.minTranslate()) / i), (r = s <= 0), (o = s >= 1)),
          Object.assign(t, { progress: s, isBeginning: r, isEnd: o }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: i,
            activeIndex: s,
            realIndex: r,
          } = e,
          o = e.virtual && n.virtual.enabled;
        let a;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${s}"]`
              )
            : t.eq(s)),
          a.addClass(n.slideActiveClass),
          n.loop &&
            (a.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
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
            snapGrid: s,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : n >= i[e] && n < i[e + 1] && (d = e + 1)
              : n >= i[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (s.indexOf(n) >= 0) c = s.indexOf(n);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= s.length && (c = s.length - 1), d === o))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          i = T(e).closest(`.${n.slideClass}`)[0];
        let s,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (s = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                T(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = s),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const H = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: i,
          $wrapperEl: s,
        } = this;
        if (t.virtualTranslate) return n ? -i : i;
        if (t.cssMode) return i;
        let r = E(s[0], e);
        return n && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: i,
            params: s,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = n;
        let l,
          c = 0,
          d = 0;
        n.isHorizontal() ? (c = i ? -e : e) : (d = e),
          s.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          s.cssMode
            ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -c : -d)
            : s.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? c : d);
        const u = n.maxTranslate() - n.minTranslate();
        (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
          l !== a && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, n, i, s) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === i && (i = !0);
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = i && e > l ? l : i && e < c ? c : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                M({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              n &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              n &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      n && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function F(e) {
      let { swiper: t, runCallbacks: n, direction: i, step: s } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = i;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit(`transition${s}`),
        n && r !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
        t.emit(`slideChangeTransition${s}`),
          "next" === a
            ? t.emit(`slideNextTransition${s}`)
            : t.emit(`slidePrevTransition${s}`);
      }
    }
    const q = {
      slideTo: function (e, t, n, i, s) {
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
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !i && !s)
        )
          return !1;
        const g = Math.min(r.params.slidesPerGroupSkip, o);
        let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1),
          (u || a.initialSlide || 0) === (d || 0) &&
            n &&
            r.emit("beforeSlideChangeStart");
        const v = -l[m];
        if ((r.updateProgress(v), a.normalizeSlideIndex))
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
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(n, y), r.transitionEnd(n, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                M({ swiper: r, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(n, y),
          0 === t
            ? r.transitionEnd(n, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(n, y));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, n, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0);
        const s = this;
        let r = e;
        return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, n, i);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: s, enabled: r, params: o } = i;
        if (!r) return i;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (s && o.loopPreventsSlide) return !1;
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
            params: s,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? i.translate : -i.translate),
          p = o.map((e) => d(e));
        let h = o[p.indexOf(u) - 1];
        if (void 0 === h && s.cssMode) {
          let e;
          o.forEach((t, n) => {
            u >= t && (e = n);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          s.rewind && i.isBeginning)
        ) {
          const s =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(s, e, t, n);
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
        const s = this;
        let r = s.activeIndex;
        const o = Math.min(s.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[a]) {
          const e = s.snapGrid[a];
          l - e > (s.snapGrid[a + 1] - e) * i && (r += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[a - 1];
          l - e <= (s.snapGrid[a] - e) * i && (r -= s.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, s.slidesGrid.length - 1)),
          s.slideTo(r, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt(T(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  C(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                C(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const B = {
      loopCreate: function () {
        const e = this,
          t = p(),
          { params: n, $wrapperEl: i } = e,
          s = i.children().length > 0 ? T(i.children()[0].parentNode) : i;
        s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let r = s.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (r.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = T(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              s.append(e);
            }
            r = s.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((t, n) => {
          const i = T(t);
          n < e.loopedSlides && a.push(t),
            n < r.length && n >= r.length - e.loopedSlides && o.push(t),
            i.attr("data-swiper-slide-index", n);
        });
        for (let e = 0; e < a.length; e += 1)
          s.append(T(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          s.prepend(T(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: i,
          allowSlidePrev: s,
          allowSlideNext: r,
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
        (e.allowSlidePrev = s), (e.allowSlideNext = r), e.emit("loopFix");
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
    function G(e) {
      const t = this,
        n = p(),
        i = f(),
        s = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = T(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((s.isTouchEvent = "touchstart" === l.type),
        !s.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!s.isTouchEvent && "button" in l && l.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = T(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  return n && n !== p() && n !== f()
                    ? (n.assignedSlot && (n = n.assignedSlot),
                      n.closest(e) || t(n.getRootNode().host))
                    : null;
                })(t)
              );
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const h = o.currentX,
        g = o.currentY,
        m = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (m && (h <= v || h >= i.innerWidth - v)) {
        if ("prevent" !== m) return;
        e.preventDefault();
      }
      if (
        (Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = h),
        (o.startY = g),
        (s.touchStartTime = S()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (s.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(s.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (s.isTouched = !1)),
          n.activeElement &&
            T(n.activeElement).is(s.focusableElements) &&
            n.activeElement !== c[0] &&
            n.activeElement.blur();
        const i = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function W(e) {
      const t = p(),
        n = this,
        i = n.touchEventsData,
        { params: s, touches: r, rtlTranslate: o, enabled: a } = n;
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
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!n.allowTouchMove)
        return (
          T(l.target).is(i.focusableElements) || (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (i.touchStartTime = S()))
          )
        );
      if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (n.isVertical()) {
          if (
            (u < r.startY && n.translate <= n.maxTranslate()) ||
            (u > r.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < r.startX && n.translate <= n.maxTranslate()) ||
          (d > r.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        T(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const h = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (n.params.threshold && Math.sqrt(h ** 2 + f ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (n.isHorizontal() && r.currentY === r.startY) ||
        (n.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : h * h + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !s.cssMode && l.cancelable && l.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
        i.isMoved ||
          (s.loop && !s.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (i.isMoved = !0);
      let g = n.isHorizontal() ? h : f;
      (r.diff = g),
        (g *= s.touchRatio),
        o && (g = -g),
        (n.swipeDirection = g > 0 ? "prev" : "next"),
        (i.currentTranslate = g + i.startTranslate);
      let m = !0,
        v = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (v = 0),
        g > 0 && i.currentTranslate > n.minTranslate()
          ? ((m = !1),
            s.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + g) ** v))
          : g < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            s.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - g) ** v)),
        m && (l.preventedByNestedSwiper = !0),
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
        s.threshold > 0)
      ) {
        if (!(Math.abs(g) > s.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = n.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
          s.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          s.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function R(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: i,
          touches: s,
          rtlTranslate: r,
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
      const c = S(),
        d = c - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = S()),
        C(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      const f = (u - o[p]) / h,
        g = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (f >= i.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (f > 1 - i.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + g)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(p + g),
            "prev" === t.swipeDirection && t.slideTo(p));
      }
    }
    function V() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e;
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
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function X(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Y() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
      if (!i) return;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let U = !1;
    function K() {}
    const Z = (e, t) => {
      const n = p(),
        {
          params: i,
          touchEvents: s,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== s.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](s.start, e.onTouchStart, t),
          r[d](
            s.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](s.end, e.onTouchEnd, t),
          s.cancel && r[d](s.cancel, e.onTouchEnd, t);
      } else
        r[d](s.start, e.onTouchStart, !1),
          n[d](s.move, e.onTouchMove, c),
          n[d](s.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        i.cssMode && o[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              V,
              !0
            )
          : e[u]("observerUpdate", V, !0);
    };
    const Q = {
        attachEvents: function () {
          const e = this,
            t = p(),
            { params: n, support: i } = e;
          (e.onTouchStart = G.bind(e)),
            (e.onTouchMove = W.bind(e)),
            (e.onTouchEnd = R.bind(e)),
            n.cssMode && (e.onScroll = Y.bind(e)),
            (e.onClick = X.bind(e)),
            i.touch && !U && (t.addEventListener("touchstart", K), (U = !0)),
            Z(e, "on");
        },
        detachEvents: function () {
          Z(this, "off");
        },
      },
      J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ee = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: i = 0,
            params: s,
            $el: r,
          } = e,
          o = s.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = J(e, s),
          d = J(e, l),
          u = s.enabled;
        c && !d
          ? (r.removeClass(
              `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${s.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === s.grid.fill)) &&
              r.addClass(`${s.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== s.direction,
          h = s.loop && (l.slidesPerView !== s.slidesPerView || p);
        p && n && e.changeDirection(), L(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
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
        const s = f(),
          r = "window" === t ? s.innerHeight : n.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
            : a <= n.clientWidth && (i = r);
        }
        return i || "max";
      },
    };
    const te = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: i,
            $el: s,
            device: r,
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
              { android: r.android },
              { ios: r.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
            ],
            n.containerModifierClass
          );
        t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ne = {
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
    function ie(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const i = Object.keys(n)[0],
          s = n[i];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in s
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                L(t, n))
              : L(t, n))
          : L(t, n);
      };
    }
    const se = {
        eventsEmitter: $,
        update: j,
        translate: H,
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
              F({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            (n.animating = !1),
              i.cssMode ||
                (n.setTransition(0),
                F({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: q,
        loop: B,
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
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: Q,
        breakpoints: ee,
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
        classes: te,
        images: {
          loadImage: function (e, t, n, i, s, r) {
            const o = f();
            let a;
            function l() {
              r && r();
            }
            T(e).parent("picture")[0] || (e.complete && s)
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
      re = {};
    class oe {
      constructor() {
        let e, t;
        for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
          i[s] = arguments[s];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = L({}, t)),
          e && !t.el && (t.el = e),
          t.el && T(t.el).length > 1)
        ) {
          const e = [];
          return (
            T(t.el).each((n) => {
              const i = L({}, t, { el: n });
              e.push(new oe(i));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = N()),
          (r.device = _({ userAgent: t.userAgent })),
          (r.browser = z()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const o = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: ie(t, o),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const a = L({}, ne, o);
        return (
          (r.params = L({}, a, re, t)),
          (r.originalParams = L({}, r.params)),
          (r.passedParams = L({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = T),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: T(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
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
              focusableElements: r.params.focusableElements,
              lastClickTime: S(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
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
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
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
          s = (n.maxTranslate() - i) * e + i;
        n.translateTo(s, void 0 === t ? 0 : t),
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
          slidesGrid: s,
          slidesSizesGrid: r,
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
            (t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            s[a] - s[e] < o && (l += 1);
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
        let s;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || i()),
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
        const n = T(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = T(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children(i());
        })();
        if (0 === s.length && t.params.createElements) {
          const e = p().createElement("div");
          (s = T(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              s.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
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
          { params: i, $el: s, $wrapperEl: r, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              s.removeAttr("style"),
              r.removeAttr("style"),
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
        L(re, e);
      }
      static get extendedDefaults() {
        return re;
      }
      static get defaults() {
        return ne;
      }
      static installModule(e) {
        oe.prototype.__modules__ || (oe.prototype.__modules__ = []);
        const t = oe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => oe.installModule(e)), oe)
          : (oe.installModule(e), oe);
      }
    }
    Object.keys(se).forEach((e) => {
      Object.keys(se[e]).forEach((t) => {
        oe.prototype[t] = se[e][t];
      });
    }),
      oe.use([
        function (e) {
          let { swiper: t, on: n, emit: i } = e;
          const s = f();
          let r = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            a = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== s.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  const { width: n, height: i } = t;
                  let s = n,
                    r = i;
                  e.forEach((e) => {
                    let { contentBoxSize: n, contentRect: i, target: o } = e;
                    (o && o !== t.el) ||
                      ((s = i ? i.width : (n[0] || n).inlineSize),
                      (r = i ? i.height : (n[0] || n).blockSize));
                  }),
                    (s === n && r === i) || o();
                })),
                r.observe(t.el))
              : (s.addEventListener("resize", o),
                s.addEventListener("orientationchange", a));
          }),
            n("destroy", () => {
              r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                s.removeEventListener("resize", o),
                s.removeEventListener("orientationchange", a);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: i, emit: s } = e;
          const r = [],
            o = f(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const t = function () {
                    s("observerUpdate", e[0]);
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
                r.push(n);
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
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const ae = oe;
    function le(e) {
      let { swiper: t, extendParams: n, on: i, emit: s } = e;
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
      let r = !1,
        o = !1;
      function a(e, n) {
        void 0 === n && (n = !0);
        const i = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          o = r.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
        !r.hasClass(i.elementClass) ||
          r.hasClass(i.loadedClass) ||
          r.hasClass(i.loadingClass) ||
          o.push(r[0]),
          0 !== o.length &&
            o.each((e) => {
              const o = T(e);
              o.addClass(i.loadingClass);
              const l = o.attr("data-background"),
                c = o.attr("data-src"),
                d = o.attr("data-srcset"),
                u = o.attr("data-sizes"),
                p = o.parent("picture");
              t.loadImage(o[0], c || l, d, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (o.css("background-image", `url("${l}")`),
                        o.removeAttr("data-background"))
                      : (d &&
                          (o.attr("srcset", d), o.removeAttr("data-srcset")),
                        u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                        p.length &&
                          p.children("source").each((e) => {
                            const t = T(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        c && (o.attr("src", c), o.removeAttr("data-src"))),
                    o.addClass(i.loadedClass).removeClass(i.loadingClass),
                    r.find(`.${i.preloaderClass}`).remove(),
                    t.params.loop && n)
                  ) {
                    const e = r.attr("data-swiper-slide-index");
                    if (r.hasClass(t.params.slideDuplicateClass)) {
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
                  s("lazyImageReady", r[0], o[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                s("lazyImageLoad", r[0], o[0]);
            });
      }
      function l() {
        const { $wrapperEl: e, params: n, slides: i, activeIndex: s } = t,
          r = t.virtual && n.virtual.enabled,
          l = n.lazy;
        let c = n.slidesPerView;
        function d(t) {
          if (r) {
            if (
              e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (i[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? T(e).attr("data-swiper-slide-index") : T(e).index();
        }
        if (
          ("auto" === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${n.slideVisibleClass}`).each((e) => {
            a(r ? T(e).attr("data-swiper-slide-index") : T(e).index());
          });
        else if (c > 1) for (let e = s; e < s + c; e += 1) d(e) && a(e);
        else a(s);
        if (l.loadPrevNext)
          if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
            const e = l.loadPrevNextAmount,
              t = c,
              n = Math.min(s + t + Math.max(e, t), i.length),
              r = Math.max(s - Math.max(t, e), 0);
            for (let e = s + c; e < n; e += 1) d(e) && a(e);
            for (let e = r; e < s; e += 1) d(e) && a(e);
          } else {
            const t = e.children(`.${n.slideNextClass}`);
            t.length > 0 && a(u(t));
            const i = e.children(`.${n.slidePrevClass}`);
            i.length > 0 && a(u(i));
          }
      }
      function c() {
        const e = f();
        if (!t || t.destroyed) return;
        const n = t.params.lazy.scrollingElement
            ? T(t.params.lazy.scrollingElement)
            : T(e),
          i = n[0] === e,
          s = i ? e.innerWidth : n[0].offsetWidth,
          o = i ? e.innerHeight : n[0].offsetHeight,
          a = t.$el.offset(),
          { rtlTranslate: d } = t;
        let u = !1;
        d && (a.left -= t.$el[0].scrollLeft);
        const p = [
          [a.left, a.top],
          [a.left + t.width, a.top],
          [a.left, a.top + t.height],
          [a.left + t.width, a.top + t.height],
        ];
        for (let e = 0; e < p.length; e += 1) {
          const t = p[e];
          if (t[0] >= 0 && t[0] <= s && t[1] >= 0 && t[1] <= o) {
            if (0 === t[0] && 0 === t[1]) continue;
            u = !0;
          }
        }
        const h = !(
          "touchstart" !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        u
          ? (l(), n.off("scroll", c, h))
          : r || ((r = !0), n.on("scroll", c, h));
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
            touchReleaseOnEdges: s,
            resistanceRatio: r,
          } = t.params;
          e.enabled && (n || (i && (s || 0 === r))) && l();
        }),
        Object.assign(t.lazy, { load: l, loadInSlide: a });
    }
    function ce(e) {
      let t,
        { swiper: n, extendParams: i, on: s, emit: r } = e;
      function o() {
        const e = n.slides.eq(n.activeIndex);
        let i = n.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
          clearTimeout(t),
          (t = C(() => {
            let e;
            n.params.autoplay.reverseDirection
              ? n.params.loop
                ? (n.loopFix(),
                  (e = n.slidePrev(n.params.speed, !0, !0)),
                  r("autoplay"))
                : n.isBeginning
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = n.slideTo(
                      n.slides.length - 1,
                      n.params.speed,
                      !0,
                      !0
                    )),
                    r("autoplay"))
                : ((e = n.slidePrev(n.params.speed, !0, !0)), r("autoplay"))
              : n.params.loop
              ? (n.loopFix(),
                (e = n.slideNext(n.params.speed, !0, !0)),
                r("autoplay"))
              : n.isEnd
              ? n.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = n.slideTo(0, n.params.speed, !0, !0)), r("autoplay"))
              : ((e = n.slideNext(n.params.speed, !0, !0)), r("autoplay")),
              ((n.params.cssMode && n.autoplay.running) || !1 === e) && o();
          }, i));
      }
      function a() {
        return (
          void 0 === t &&
          !n.autoplay.running &&
          ((n.autoplay.running = !0), r("autoplayStart"), o(), !0)
        );
      }
      function l() {
        return (
          !!n.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (n.autoplay.running = !1),
          r("autoplayStop"),
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
                  n.$wrapperEl[0].addEventListener(e, u);
                })
              : ((n.autoplay.paused = !1), o())));
      }
      function d() {
        const e = p();
        "hidden" === e.visibilityState && n.autoplay.running && c(),
          "visible" === e.visibilityState &&
            n.autoplay.paused &&
            (o(), (n.autoplay.paused = !1));
      }
      function u(e) {
        n &&
          !n.destroyed &&
          n.$wrapperEl &&
          e.target === n.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, u);
          }),
          (n.autoplay.paused = !1),
          n.autoplay.running ? o() : l());
      }
      function h() {
        n.params.autoplay.disableOnInteraction
          ? l()
          : (r("autoplayPause"), c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function f() {
        n.params.autoplay.disableOnInteraction ||
          ((n.autoplay.paused = !1), r("autoplayResume"), o());
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
        s("init", () => {
          if (n.params.autoplay.enabled) {
            a();
            p().addEventListener("visibilitychange", d),
              n.params.autoplay.pauseOnMouseEnter &&
                (n.$el.on("mouseenter", h), n.$el.on("mouseleave", f));
          }
        }),
        s("beforeTransitionStart", (e, t, i) => {
          n.autoplay.running &&
            (i || !n.params.autoplay.disableOnInteraction
              ? n.autoplay.pause(t)
              : l());
        }),
        s("sliderFirstMove", () => {
          n.autoplay.running &&
            (n.params.autoplay.disableOnInteraction ? l() : c());
        }),
        s("touchEnd", () => {
          n.params.cssMode &&
            n.autoplay.paused &&
            !n.params.autoplay.disableOnInteraction &&
            o();
        }),
        s("destroy", () => {
          n.$el.off("mouseenter", h),
            n.$el.off("mouseleave", f),
            n.autoplay.running && l();
          p().removeEventListener("visibilitychange", d);
        }),
        Object.assign(n.autoplay, { pause: c, run: o, start: a, stop: l });
    }
    function de() {
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
      de(),
        document.querySelector(".team") &&
          new ae(".team__slider", {
            modules: [le, ce],
            grabCursor: !0,
            autoplay: { delay: 2e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 500,
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
    class ue {
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
            a(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let n = t.split("|"),
                i = { root: n[0], margin: n[1], threshold: n[2] },
                s = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    n = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    s = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(n) === i.margin &&
                    String(s) === i.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(s, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
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
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
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
        this.config.logging && o(`[Наблюдатель]: ${e}`);
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
    let pe = !1;
    setTimeout(() => {
      if (pe) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var he = function () {
      return (
        (he =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var s in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }),
        he.apply(this, arguments)
      );
    };
    var fe = "lgAfterAppendSlide",
      ge = "lgInit",
      me = "lgHasVideo",
      ve = "lgContainerResize",
      ye = "lgUpdateSlides",
      be = "lgAfterAppendSubHtml",
      we = "lgBeforeOpen",
      xe = "lgAfterOpen",
      Te = "lgSlideItemLoad",
      Ce = "lgBeforeSlide",
      Se = "lgAfterSlide",
      Ee = "lgPosterClick",
      Ie = "lgDragStart",
      ke = "lgDragMove",
      Le = "lgDragEnd",
      Ae = "lgBeforeNextSlide",
      Me = "lgBeforePrevSlide",
      Oe = "lgBeforeClose",
      De = "lgAfterClose",
      Pe = {
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
    var Ne = (function () {
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
          return _e(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? _e(this.selector[0])
            : _e(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return _e(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return _e(this.selector.parentElement);
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
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
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
            t = _e("body").style().marginLeft;
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
    function _e(e) {
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
        new Ne(e)
      );
    }
    var ze = [
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
    function $e(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var je = function (e, t, n, i) {
        void 0 === n && (n = 0);
        var s = _e(e).attr("data-lg-size") || i;
        if (s) {
          var r = s.split(",");
          if (r[1])
            for (var o = window.innerWidth, a = 0; a < r.length; a++) {
              var l = r[a];
              if (parseInt(l.split("-")[2], 10) > o) {
                s = l;
                break;
              }
              a === r.length - 1 && (s = l);
            }
          var c = s.split("-"),
            d = parseInt(c[0], 10),
            u = parseInt(c[1], 10),
            p = t.width(),
            h = t.height() - n,
            f = Math.min(p, d),
            g = Math.min(h, u),
            m = Math.min(f / d, g / u);
          return { width: d * m, height: u * m };
        }
      },
      He = function (e, t, n, i, s) {
        if (s) {
          var r = _e(e).find("img").first();
          if (r.get()) {
            var o = t.get().getBoundingClientRect(),
              a = o.width,
              l = t.height() - (n + i),
              c = r.width(),
              d = r.height(),
              u = r.style(),
              p =
                (a - c) / 2 -
                r.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                _e(window).scrollLeft() +
                o.left,
              h =
                (l - d) / 2 -
                r.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                _e(window).scrollTop() +
                n;
            return (
              "translate3d(" +
              (p *= -1) +
              "px, " +
              (h *= -1) +
              "px, 0) scale3d(" +
              c / s.width +
              ", " +
              d / s.height +
              ", 1)"
            );
          }
        }
      },
      Fe = function (e, t, n, i, s, r) {
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
          (r ? 'title="' + r + '"' : "") +
          ' src="' +
          s +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      qe = function (e, t, n, i, s, r) {
        var o =
            "<img " +
            n +
            " " +
            (i ? 'srcset="' + i + '"' : "") +
            "  " +
            (s ? 'sizes="' + s + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          a = "";
        r &&
          (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
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
      Be = function (e) {
        for (var t = [], n = [], i = "", s = 0; s < e.length; s++) {
          var r = e[s].split(" ");
          "" === r[0] && r.splice(0, 1), n.push(r[0]), t.push(r[1]);
        }
        for (var o = window.innerWidth, a = 0; a < t.length; a++)
          if (parseInt(t[a], 10) > o) {
            i = n[a];
            break;
          }
        return i;
      },
      Ge = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      We = function (e, t, n, i, s) {
        return (
          '<div class="lg-video-cont ' +
          (s && s.youtube
            ? "lg-has-youtube"
            : s && s.vimeo
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
      Re = function (e, t, n, i) {
        var s = [],
          r = (function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length;
            var i = Array(e),
              s = 0;
            for (t = 0; t < n; t++)
              for (var r = arguments[t], o = 0, a = r.length; o < a; o++, s++)
                i[s] = r[o];
            return i;
          })(ze, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, o = 0; o < e.attributes.length; o++) {
              var a = e.attributes[o];
              if (a.specified) {
                var l = $e(a.name),
                  c = "";
                r.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
              }
            }
            var d = _e(e),
              u = d.find("img").first().attr("alt"),
              p = d.attr("title"),
              h = i ? d.attr(i) : d.find("img").first().attr("src");
            (t.thumb = h),
              n && !t.subHtml && (t.subHtml = p || u || ""),
              (t.alt = u || p || ""),
              s.push(t);
          }),
          s
        );
      },
      Ve = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      Xe = function (e, t, n) {
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
          s = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          r = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return i
          ? { youtube: i }
          : s
          ? { vimeo: s }
          : r
          ? { wistia: r }
          : void 0;
      },
      Ye = 0,
      Ue = (function () {
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
            (Ye++,
            (this.lgId = Ye),
            (this.el = e),
            (this.LGel = _e(e)),
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
              ((this.settings = he(he({}, Pe), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : Ve())
            ) {
              var t = he(
                he({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = he(he({}, this.settings), t);
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
              this.LGel.trigger(ge, { instance: this }),
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
                    s = _e(i),
                    r = Ne.generateUUID();
                  s.attr("data-lg-id", r).on(
                    "click.lgcustom-item-" + r,
                    function (n) {
                      n.preventDefault();
                      var s = e.settings.index || t;
                      e.openGallery(s, i);
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
              e.plugins.push(new t(e, _e));
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
            return _e(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return _e("#" + this.getIdName(e));
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
              var s = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                r = this.settings.ariaDescribedby
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
                  s +
                  " " +
                  r +
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
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? n : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              _e(this.settings.container).append(c),
                document.body !== this.settings.container &&
                  _e(this.settings.container).css("position", "relative"),
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
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.outer.addClass(d),
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
                _e(window).on(
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
                ((this.currentImageSize = je(
                  this.items[this.index],
                  this.outer,
                  n + i,
                  e && this.settings.videoMaxSize
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var s = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", s);
              }
              this.LGel.trigger(ve);
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
                this.LGel.trigger(ye);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = _e(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return Re(
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
              var s = "";
              i.forEach(function (e) {
                s = s + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(s),
                this.addHtml(e);
              var r = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var o = this.mediaContainerPosition,
                a = o.top,
                l = o.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(a, l);
              var c = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = je(
                  t,
                  this.outer,
                  a + l,
                  c && this.settings.videoMaxSize
                )),
                (r = He(t, this.outer, a, l, this.currentImageSize))),
                (this.zoomFromOrigin && r) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                n.outer.addClass("lg-components-open");
              }, d),
                (this.index = e),
                this.LGel.trigger(we),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = _e(window).scrollTop()),
                setTimeout(function () {
                  if (n.zoomFromOrigin && r) {
                    var t = n.getSlideItem(e);
                    t.css("transform", r),
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
                    (n.zoomFromOrigin && r) ||
                      setTimeout(function () {
                        n.outer.addClass("lg-visible");
                      }, n.settings.backdropDuration),
                    n.slide(e, !1, !1, !1),
                    n.LGel.trigger(xe);
                }),
                document.body === this.settings.container &&
                  _e("html").addClass("lg-on");
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
                      ? _e(this.items).eq(e).find(t).first().html()
                      : _e(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              n
                ? this.outer.find(".lg-sub-html").load(n)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var s = _e(this.getSlideItemId(e));
              n
                ? s.load(n)
                : s.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(be, { index: e });
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
            if ((this.settings.dynamic || (i = _e(this.items).eq(t)), i)) {
              var s = void 0;
              if (
                !(s = this.settings.exThumbImage
                  ? i.attr(this.settings.exThumbImage)
                  : i.find("img").first().attr("src"))
              )
                return "";
              var r =
                "<img " +
                n +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                s +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                r
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, n) {
            var i = this.galleryItems[n],
              s = i.alt,
              r = i.srcset,
              o = i.sizes,
              a = i.sources,
              l = s ? 'alt="' + s + '"' : "",
              c =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, n, l)
                  : qe(n, e, l, r, o, a)) +
                "</picture>";
            t.prepend(c);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, n, i) {
            var s = e.find(".lg-object").first();
            Ge(s.get()) || t
              ? n()
              : (s.on("load.lg error.lg", function () {
                  n && n();
                }),
                s.on("error.lg", function () {
                  i && i();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, n, i, s, r) {
            var o = this;
            this.onSlideObjectLoad(
              e,
              r,
              function () {
                o.triggerSlideItemLoad(e, t, n, i, s);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, n, i, s) {
            var r = this,
              o = this.galleryItems[t],
              a = s && "video" === this.getSlideType(o) && !o.poster ? i : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                r.LGel.trigger(Te, {
                  index: t,
                  delay: n || 0,
                  isFirstSlide: s,
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
              (e.__slideVideoInfo = Xe(e.src, !!e.video, n)),
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
              s = _e(this.getSlideItemId(e)),
              r = i.poster,
              o = i.srcset,
              a = i.sizes,
              l = i.sources,
              c = i.src,
              d = i.video,
              u = d && "string" == typeof d ? JSON.parse(d) : d;
            if (i.responsive) {
              var p = i.responsive.split(",");
              c = Be(p) || c;
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
              !s.hasClass("lg-loaded"))
            ) {
              if (h) {
                var y = this.mediaContainerPosition,
                  b = y.top,
                  w = y.bottom,
                  x = je(
                    this.items[e],
                    this.outer,
                    b + w,
                    h && this.settings.videoMaxSize
                  );
                f = this.getVideoContStyle(x);
              }
              if (g) {
                var T = Fe(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  c,
                  i.iframeTitle
                );
                s.prepend(T);
              } else if (r) {
                var C = "";
                m &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (C = this.getDummyImageContent(s, e, ""));
                T = We(r, C || "", f, this.settings.strings.playVideo, h);
                s.prepend(T);
              } else if (h) {
                T = '<div class="lg-video-cont " style="' + f + '"></div>';
                s.prepend(T);
              } else if ((this.setImgMarkup(c, s, e), o || l)) {
                var S = s.find(".lg-object");
                this.initPictureFill(S);
              }
              (r || h) &&
                this.LGel.trigger(me, {
                  index: e,
                  src: c,
                  html5Video: u,
                  hasPoster: !!r,
                }),
                this.LGel.trigger(fe, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var E = 0;
            v && !_e(document.body).hasClass("lg-from-hash") && (E = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  s.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                s.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if (
                      "image" === n.getSlideType(i) &&
                      (s
                        .find(".lg-img-wrap")
                        .append(qe(e, c, "", o, a, i.sources)),
                      o || l)
                    ) {
                      var t = s.find(".lg-object");
                      n.initPictureFill(t);
                    }
                    ("image" === n.getSlideType(i) ||
                      ("video" === n.getSlideType(i) && r)) &&
                      (n.onLgObjectLoad(s, e, v, E, !0, !1),
                      n.onSlideObjectLoad(
                        s,
                        !(!h || !h.html5 || r),
                        function () {
                          n.loadContentOnFirstSlideLoad(e, s, E);
                        },
                        function () {
                          n.loadContentOnFirstSlideLoad(e, s, E);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              s.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(i) || r)) ||
                this.onLgObjectLoad(s, e, v, E, m, !(!h || !h.html5 || r)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !s.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  s.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (s.hasClass("lg-complete_")
                  ? this.preload(e)
                  : s
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
            var s = [],
              r = Math.max(n, 3);
            r = Math.min(r, this.galleryItems.length);
            var o = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  s.push("lg-item-" + i.lgId + "-" + t);
                }),
                s
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var a = e; a > e - r / 2 && a >= 0; a--)
                s.push("lg-item-" + this.lgId + "-" + a);
              var l = s.length;
              for (a = 0; a < r - l; a++)
                s.push("lg-item-" + this.lgId + "-" + (e + a + 1));
            } else {
              for (
                a = e;
                a <= this.galleryItems.length - 1 && a < e + r / 2;
                a++
              )
                s.push("lg-item-" + this.lgId + "-" + a);
              for (l = s.length, a = 0; a < r - l; a++)
                s.push("lg-item-" + this.lgId + "-" + (e - a - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? s.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    s.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === s.indexOf(o) && s.push("lg-item-" + this.lgId + "-" + t),
              s
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
                  n.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === i.indexOf(e) && _e("#" + e).remove();
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
            var s = this,
              r = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
              !this.lGalleryOn || r !== e)
            ) {
              var o = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var a = this.getSlideItem(e),
                  l = this.getSlideItem(r),
                  c = this.galleryItems[e],
                  d = c.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                  this.setDownloadValue(e),
                  d)
                ) {
                  var u = this.mediaContainerPosition,
                    p = u.top,
                    h = u.bottom,
                    f = je(
                      this.items[e],
                      this.outer,
                      p + h,
                      d && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(e, f);
                }
                if (
                  (this.LGel.trigger(Ce, {
                    prevIndex: r,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!n,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  i || (e < r ? (i = "prev") : e > r && (i = "next")),
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
                      ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                        ((m = 0), (g = o - 1)))
                    : ((g = 0), (m = 1)),
                    "prev" === i
                      ? this.getSlideItem(m).addClass("lg-next-slide")
                      : this.getSlideItem(g).addClass("lg-prev-slide"),
                    a.addClass("lg-current");
                } else this.makeSlideAnimation(i, a, l);
                this.lGalleryOn
                  ? setTimeout(function () {
                      s.loadContent(e, !0),
                        ".lg-item" !== s.settings.appendSubHtmlTo &&
                          s.addHtml(e);
                    }, this.settings.speed +
                      50 +
                      (t ? 0 : this.settings.slideDelay))
                  : this.loadContent(e, !0),
                  setTimeout(function () {
                    (s.lgBusy = !1),
                      l.removeClass("lg-slide-progress"),
                      s.LGel.trigger(Se, {
                        prevIndex: r,
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
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, n) {
            var i = t.pageX - e.pageX,
              s = t.pageY - e.pageY,
              r = !1;
            if (
              (this.swipeDirection
                ? (r = !0)
                : Math.abs(i) > 15
                ? ((this.swipeDirection = "horizontal"), (r = !0))
                : Math.abs(s) > 15 &&
                  ((this.swipeDirection = "vertical"), (r = !0)),
              r)
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
                var c = 1 - Math.abs(s) / window.innerHeight;
                this.$backdrop.css("opacity", c);
                var d = 1 - Math.abs(s) / (2 * window.innerWidth);
                this.setTranslate(o, 0, s, d, d),
                  Math.abs(s) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, n) {
            var i,
              s = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                s.$container.removeClass("lg-dragging-vertical"),
                  s.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var r = !0;
                if ("horizontal" === s.swipeDirection) {
                  i = e.pageX - t.pageX;
                  var o = Math.abs(e.pageX - t.pageX);
                  i < 0 && o > s.settings.swipeThreshold
                    ? (s.goToNextSlide(!0), (r = !1))
                    : i > 0 &&
                      o > s.settings.swipeThreshold &&
                      (s.goToPrevSlide(!0), (r = !1));
                } else if ("vertical" === s.swipeDirection) {
                  if (
                    ((i = Math.abs(e.pageY - t.pageY)),
                    s.settings.closable && s.settings.swipeToClose && i > 100)
                  )
                    return void s.closeGallery();
                  s.$backdrop.css("opacity", 1);
                }
                if (
                  (s.outer.find(".lg-item").removeAttr("style"),
                  r && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var a = _e(n.target);
                  s.isPosterElement(a) && s.LGel.trigger(Ee);
                }
                s.swipeDirection = void 0;
              }),
              setTimeout(function () {
                s.outer.hasClass("lg-dragging") ||
                  "lg-slide" === s.settings.mode ||
                  s.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              n = {},
              i = !1,
              s = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (n) {
                e.dragOrSwipeEnabled = !0;
                var i = e.getSlideItem(e.index);
                (!_e(n.target).hasClass("lg-item") &&
                  !i.get().contains(n.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== n.targetTouches.length ||
                  ((s = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: n.targetTouches[0].pageX,
                    pageY: n.targetTouches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (r) {
                s &&
                  "swipe" === e.touchAction &&
                  1 === r.targetTouches.length &&
                  ((n = {
                    pageX: r.targetTouches[0].pageX,
                    pageY: r.targetTouches[0].pageY,
                  }),
                  e.touchMove(t, n, r),
                  (i = !0));
              }),
              this.$inner.on("touchend.lg", function (r) {
                if ("swipe" === e.touchAction) {
                  if (i) (i = !1), e.touchEnd(n, t, r);
                  else if (s) {
                    var o = _e(r.target);
                    e.isPosterElement(o) && e.LGel.trigger(Ee);
                  }
                  (e.touchAction = void 0), (s = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              n = {},
              i = !1,
              s = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (n) {
                e.dragOrSwipeEnabled = !0;
                var s = e.getSlideItem(e.index);
                (_e(n.target).hasClass("lg-item") ||
                  s.get().contains(n.target)) &&
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
                      e.LGel.trigger(Ie))));
              }),
              _e(window).on("mousemove.lg.global" + this.lgId, function (r) {
                i &&
                  e.lgOpened &&
                  ((s = !0),
                  (n = { pageX: r.pageX, pageY: r.pageY }),
                  e.touchMove(t, n),
                  e.LGel.trigger(ke));
              }),
              _e(window).on("mouseup.lg.global" + this.lgId, function (r) {
                if (e.lgOpened) {
                  var o = _e(r.target);
                  s
                    ? ((s = !1), e.touchEnd(n, t, r), e.LGel.trigger(Le))
                    : e.isPosterElement(o) && e.LGel.trigger(Ee),
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
                e.isPosterElement(_e(t.target)) &&
                e.LGel.trigger(Ee);
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
                    this.LGel.trigger(Ae, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : n
                  ? ((this.index = 0),
                    this.LGel.trigger(Ae, { index: this.index }),
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
                    this.LGel.trigger(Me, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : n
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(Me, { index: this.index, fromTouch: e }),
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
            _e(window).on("keydown.lg.global" + this.lgId, function (t) {
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
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
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
          (e.prototype.setTranslate = function (e, t, n, i, s) {
            void 0 === i && (i = 1),
              void 0 === s && (s = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  n +
                  "px, 0px) scale3d(" +
                  i +
                  ", " +
                  s +
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
              var t = _e(this.items[e]);
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
                    var i = _e(n.target);
                    t = !!e.isSlideElement(i);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (n) {
                    var i = _e(n.target);
                    e.isSlideElement(i) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(Oe), _e(window).scrollTop(this.prevScrollTop);
            var n,
              i = this.items[this.index];
            if (this.zoomFromOrigin && i) {
              var s = this.mediaContainerPosition,
                r = s.top,
                o = s.bottom,
                a = this.galleryItems[this.index],
                l = a.__slideVideoInfo,
                c = a.poster,
                d = je(
                  i,
                  this.outer,
                  r + o,
                  l && c && this.settings.videoMaxSize
                );
              n = He(i, this.outer, r, o, d);
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
              _e("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
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
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(De, { instance: t }),
                  t.outer.get() && t.outer.get().blur(),
                  (t.lgOpened = !1);
              }, u + 100),
              u + 100
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
              this.LGel.trigger(ye);
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
                  _e(window).off(".lg.global" + e.lgId),
                  e.LGel.off(".lg"),
                  e.$container.remove();
              }, t),
              t
            );
          }),
          e
        );
      })();
    const Ke = function (e, t) {
      return new Ue(e, t);
    };
    var Ze = function () {
        return (
          (Ze =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var s in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              return e;
            }),
          Ze.apply(this, arguments)
        );
      },
      Qe = {
        fullScreen: !0,
        fullscreenPluginStrings: { toggleFullscreen: "Toggle Fullscreen" },
      },
      Je = (function () {
        function e(e, t) {
          return (
            (this.core = e),
            (this.$LG = t),
            (this.settings = Ze(Ze({}, Qe), this.core.settings)),
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
                e.core.lgOpened && e.core.outer.toggleClass("lg-fullscreen-on");
              }
            ),
              this.core.outer
                .find(".lg-fullscreen")
                .first()
                .on("click.lg", function () {
                  e.isFullScreen() ? e.exitFullscreen() : e.requestFullscreen();
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
    const et = Je,
      tt = document.querySelectorAll("[data-gallery]");
    tt.length &&
      tt.forEach((e) => {
        Ke(e, {
          plugins: [et],
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
            i &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? s(e)
                  : r(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      new e({}),
      new ue({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const n = t.closest("[data-goto]"),
                i = n.dataset.goto ? n.dataset.goto : "",
                s = !!n.hasAttribute("data-goto-header"),
                r = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              l(i, s, r), e.preventDefault();
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
        pe = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let s,
          r = 0;
        document.addEventListener("windowScroll", function (o) {
          const a = window.scrollY;
          clearTimeout(s),
            a >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (a > r
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (s = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, n))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (r = a <= 0 ? 0 : a);
        });
      })();
  })();
})();
