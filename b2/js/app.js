/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      2: function (e, t, i) {
        var s, n;
        window.Element &&
          !Element.prototype.closest &&
          (Element.prototype.closest = function (e) {
            var t,
              i = (this.document || this.ownerDocument).querySelectorAll(e),
              s = this;
            do {
              for (t = i.length; 0 <= --t && i.item(t) !== s; );
            } while (t < 0 && (s = s.parentElement));
            return s;
          }),
          (function () {
            function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var i = document.createEvent("CustomEvent");
              return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
            }
            "function" != typeof window.CustomEvent &&
              ((e.prototype = window.Event.prototype),
              (window.CustomEvent = e));
          })(),
          (function () {
            for (
              var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0;
              i < t.length && !window.requestAnimationFrame;
              ++i
            )
              (window.requestAnimationFrame =
                window[t[i] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[t[i] + "CancelAnimationFrame"] ||
                  window[t[i] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (t, i) {
                var s = new Date().getTime(),
                  n = Math.max(0, 16 - (s - e)),
                  o = window.setTimeout(function () {
                    t(s + n);
                  }, n);
                return (e = s + n), o;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          (n =
            void 0 !== i.g
              ? i.g
              : "undefined" != typeof window
              ? window
              : this),
          (s = function () {
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
                i = function () {
                  var e = {};
                  return (
                    Array.prototype.forEach.call(arguments, function (t) {
                      for (var i in t) {
                        if (!t.hasOwnProperty(i)) return;
                        e[i] = t[i];
                      }
                    }),
                    e
                  );
                },
                s = function (e) {
                  "#" === e.charAt(0) && (e = e.substr(1));
                  for (
                    var t,
                      i = String(e),
                      s = i.length,
                      n = -1,
                      o = "",
                      r = i.charCodeAt(0);
                    ++n < s;

                  ) {
                    if (0 === (t = i.charCodeAt(n)))
                      throw new InvalidCharacterError(
                        "Invalid character: the input contains U+0000."
                      );
                    o +=
                      (1 <= t && t <= 31) ||
                      127 == t ||
                      (0 === n && 48 <= t && t <= 57) ||
                      (1 === n && 48 <= t && t <= 57 && 45 === r)
                        ? "\\" + t.toString(16) + " "
                        : 128 <= t ||
                          45 === t ||
                          95 === t ||
                          (48 <= t && t <= 57) ||
                          (65 <= t && t <= 90) ||
                          (97 <= t && t <= 122)
                        ? i.charAt(n)
                        : "\\" + i.charAt(n);
                  }
                  return "#" + o;
                },
                n = function () {
                  return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                  );
                },
                o = function (t) {
                  return t
                    ? ((i = t),
                      parseInt(e.getComputedStyle(i).height, 10) + t.offsetTop)
                    : 0;
                  var i;
                },
                r = function (t, i, s) {
                  0 === t && document.body.focus(),
                    s ||
                      (t.focus(),
                      document.activeElement !== t &&
                        (t.setAttribute("tabindex", "-1"),
                        t.focus(),
                        (t.style.outline = "none")),
                      e.scrollTo(0, i));
                },
                a = function (t, i, s, n) {
                  if (i.emitEvents && "function" == typeof e.CustomEvent) {
                    var o = new CustomEvent(t, {
                      bubbles: !0,
                      detail: { anchor: s, toggle: n },
                    });
                    document.dispatchEvent(o);
                  }
                };
              return function (l, c) {
                var d,
                  u,
                  h,
                  p,
                  g = {
                    cancelScroll: function (e) {
                      cancelAnimationFrame(p),
                        (p = null),
                        e || a("scrollCancel", d);
                    },
                    animateScroll: function (s, l, c) {
                      g.cancelScroll();
                      var u = i(d || t, c || {}),
                        f =
                          "[object Number]" ===
                          Object.prototype.toString.call(s),
                        m = f || !s.tagName ? null : s;
                      if (f || m) {
                        var v = e.pageYOffset;
                        u.header &&
                          !h &&
                          (h = document.querySelector(u.header));
                        var y,
                          b,
                          w,
                          x,
                          S,
                          T,
                          C,
                          E,
                          I = o(h),
                          L = f
                            ? s
                            : (function (t, i, s, o) {
                                var r = 0;
                                if (t.offsetParent)
                                  for (
                                    ;
                                    (r += t.offsetTop), (t = t.offsetParent);

                                  );
                                return (
                                  (r = Math.max(r - i - s, 0)),
                                  o && (r = Math.min(r, n() - e.innerHeight)),
                                  r
                                );
                              })(
                                m,
                                I,
                                parseInt(
                                  "function" == typeof u.offset
                                    ? u.offset(s, l)
                                    : u.offset,
                                  10
                                ),
                                u.clip
                              ),
                          O = L - v,
                          M = n(),
                          A = 0,
                          z =
                            ((y = O),
                            (w = (b = u).speedAsDuration
                              ? b.speed
                              : Math.abs((y / 1e3) * b.speed)),
                            b.durationMax && w > b.durationMax
                              ? b.durationMax
                              : b.durationMin && w < b.durationMin
                              ? b.durationMin
                              : parseInt(w, 10)),
                          P = function (t) {
                            var i, n, o;
                            x || (x = t),
                              (A += t - x),
                              (T =
                                v +
                                O *
                                  ((n = S =
                                    1 < (S = 0 === z ? 0 : A / z) ? 1 : S),
                                  "easeInQuad" === (i = u).easing &&
                                    (o = n * n),
                                  "easeOutQuad" === i.easing &&
                                    (o = n * (2 - n)),
                                  "easeInOutQuad" === i.easing &&
                                    (o =
                                      n < 0.5
                                        ? 2 * n * n
                                        : (4 - 2 * n) * n - 1),
                                  "easeInCubic" === i.easing && (o = n * n * n),
                                  "easeOutCubic" === i.easing &&
                                    (o = --n * n * n + 1),
                                  "easeInOutCubic" === i.easing &&
                                    (o =
                                      n < 0.5
                                        ? 4 * n * n * n
                                        : (n - 1) * (2 * n - 2) * (2 * n - 2) +
                                          1),
                                  "easeInQuart" === i.easing &&
                                    (o = n * n * n * n),
                                  "easeOutQuart" === i.easing &&
                                    (o = 1 - --n * n * n * n),
                                  "easeInOutQuart" === i.easing &&
                                    (o =
                                      n < 0.5
                                        ? 8 * n * n * n * n
                                        : 1 - 8 * --n * n * n * n),
                                  "easeInQuint" === i.easing &&
                                    (o = n * n * n * n * n),
                                  "easeOutQuint" === i.easing &&
                                    (o = 1 + --n * n * n * n * n),
                                  "easeInOutQuint" === i.easing &&
                                    (o =
                                      n < 0.5
                                        ? 16 * n * n * n * n * n
                                        : 1 + 16 * --n * n * n * n * n),
                                  i.customEasing && (o = i.customEasing(n)),
                                  o || n)),
                              e.scrollTo(0, Math.floor(T)),
                              (function (t, i) {
                                var n = e.pageYOffset;
                                if (
                                  t == i ||
                                  n == i ||
                                  (v < i && e.innerHeight + n) >= M
                                )
                                  return (
                                    g.cancelScroll(!0),
                                    r(s, i, f),
                                    a("scrollStop", u, s, l),
                                    !(p = x = null)
                                  );
                              })(T, L) ||
                                ((p = e.requestAnimationFrame(P)), (x = t));
                          };
                        0 === e.pageYOffset && e.scrollTo(0, 0),
                          (C = s),
                          (E = u),
                          f ||
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
                            ? r(s, Math.floor(L), !1)
                            : (a("scrollStart", u, s, l),
                              g.cancelScroll(!0),
                              e.requestAnimationFrame(P));
                      }
                    },
                  },
                  f = function (t) {
                    if (
                      !t.defaultPrevented &&
                      !(
                        0 !== t.button ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey
                      ) &&
                      "closest" in t.target &&
                      (u = t.target.closest(l)) &&
                      "a" === u.tagName.toLowerCase() &&
                      !t.target.closest(d.ignore) &&
                      u.hostname === e.location.hostname &&
                      u.pathname === e.location.pathname &&
                      /#/.test(u.href)
                    ) {
                      var i, n;
                      try {
                        i = s(decodeURIComponent(u.hash));
                      } catch (t) {
                        i = s(u.hash);
                      }
                      if ("#" === i) {
                        if (!d.topOnEmptyHash) return;
                        n = document.documentElement;
                      } else n = document.querySelector(i);
                      (n = n || "#top" !== i ? n : document.documentElement) &&
                        (t.preventDefault(),
                        (function (t) {
                          if (
                            history.replaceState &&
                            t.updateURL &&
                            !history.state
                          ) {
                            var i = e.location.hash;
                            (i = i || ""),
                              history.replaceState(
                                {
                                  smoothScroll: JSON.stringify(t),
                                  anchor: i || e.pageYOffset,
                                },
                                document.title,
                                i || e.location.href
                              );
                          }
                        })(d),
                        g.animateScroll(n, u));
                    }
                  },
                  m = function (e) {
                    if (
                      null !== history.state &&
                      history.state.smoothScroll &&
                      history.state.smoothScroll === JSON.stringify(d)
                    ) {
                      var t = history.state.anchor;
                      ("string" == typeof t &&
                        t &&
                        !(t = document.querySelector(
                          s(history.state.anchor)
                        ))) ||
                        g.animateScroll(t, null, { updateURL: !1 });
                    }
                  };
                return (
                  (g.destroy = function () {
                    d &&
                      (document.removeEventListener("click", f, !1),
                      e.removeEventListener("popstate", m, !1),
                      g.cancelScroll(),
                      (p = h = u = d = null));
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
                    g.destroy(),
                      (d = i(t, c || {})),
                      (h = d.header ? document.querySelector(d.header) : null),
                      document.addEventListener("click", f, !1),
                      d.updateURL &&
                        d.popstate &&
                        e.addEventListener("popstate", m, !1);
                  })(),
                  g
                );
              };
            })(n);
          }.apply(t, [])),
          void 0 === s || (e.exports = s);
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
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            o = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
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
              return e({}, r, t);
            },
            l = function (e, t) {
              var i,
                s = "LazyLoad::Initialized",
                n = new e(t);
              try {
                i = new CustomEvent(s, { detail: { instance: n } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(i);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            g = "data",
            f = "loading",
            m = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            w = "data-",
            x = "ll-status",
            S = function (e, t) {
              return e.getAttribute(w + t);
            },
            T = function (e) {
              return S(e, x);
            },
            C = function (e, t) {
              return (function (e, t, i) {
                var s = "data-ll-status";
                null !== i ? e.setAttribute(s, i) : e.removeAttribute(s);
              })(e, 0, t);
            },
            E = function (e) {
              return C(e, null);
            },
            I = function (e) {
              return null === T(e);
            },
            L = function (e) {
              return T(e) === b;
            },
            O = [f, m, v, y],
            M = function (e, t, i, s) {
              e &&
                (void 0 === s ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, s));
            },
            A = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            z = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (e) {
              return e.llTempImage;
            },
            k = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            D = function (e, t) {
              e && (e.loadingCount += t);
            },
            $ = function (e, t) {
              e && (e.toLoadCount = t);
            },
            _ = function (e) {
              for (var t, i = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            G = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && _(i).forEach(t);
            },
            B = function (e, t) {
              _(e).forEach(t);
            },
            V = [c],
            F = [c, h],
            H = [c, d, u],
            W = [g],
            N = function (e) {
              return !!e[p];
            },
            R = function (e) {
              return e[p];
            },
            X = function (e) {
              return delete e[p];
            },
            j = function (e, t) {
              if (!N(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[p] = i);
              }
            },
            q = function (e, t) {
              if (N(e)) {
                var i = R(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            Y = function (e, t, i) {
              A(e, t.class_loading),
                C(e, f),
                i && (D(i, 1), M(t.callback_loading, e, i));
            },
            U = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            Z = function (e, t) {
              U(e, u, S(e, t.data_sizes)),
                U(e, d, S(e, t.data_srcset)),
                U(e, c, S(e, t.data_src));
            },
            K = {
              IMG: function (e, t) {
                G(e, function (e) {
                  j(e, H), Z(e, t);
                }),
                  j(e, H),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                j(e, V), U(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  j(e, V), U(e, c, S(e, t.data_src));
                }),
                  j(e, F),
                  U(e, h, S(e, t.data_poster)),
                  U(e, c, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                j(e, W), U(e, g, S(e, t.data_src));
              },
            },
            J = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            Q = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                M(e.callback_finish, t);
            },
            ee = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            te = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            se = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var s = t[i];
                  te(e, i, s);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                D(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                z(e, t.class_loading),
                t.unobserve_completed && k(e, i);
            },
            oe = function (e, t, i) {
              var s = P(e) || e;
              ie(s) ||
                (function (e, t, i) {
                  ie(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  ee(e, s, t), ee(e, "error", i);
                })(
                  s,
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = L(t);
                      ne(t, i, s),
                        A(t, i.class_loaded),
                        C(t, m),
                        M(i.callback_loaded, t, s),
                        n || Q(i, s);
                    })(0, e, t, i),
                      se(s);
                  },
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = L(t);
                      ne(t, i, s),
                        A(t, i.class_error),
                        C(t, y),
                        M(i.callback_error, t, s),
                        n || Q(i, s);
                    })(0, e, t, i),
                      se(s);
                  }
                );
            },
            re = function (e, t, i) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                oe(e, t, i),
                (function (e) {
                  N(e) || (e[p] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, i) {
                  var s = S(e, t.data_bg),
                    n = S(e, t.data_bg_hidpi),
                    r = o && n ? n : s;
                  r &&
                    ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                    P(e).setAttribute(c, r),
                    Y(e, t, i));
                })(e, t, i),
                (function (e, t, i) {
                  var s = S(e, t.data_bg_multi),
                    n = S(e, t.data_bg_multi_hidpi),
                    r = o && n ? n : s;
                  r &&
                    ((e.style.backgroundImage = r),
                    (function (e, t, i) {
                      A(e, t.class_applied),
                        C(e, v),
                        i &&
                          (t.unobserve_completed && k(e, t),
                          M(t.callback_applied, e, i));
                    })(e, t, i));
                })(e, t, i);
            },
            ae = function (e, t, i) {
              !(function (e) {
                return J.indexOf(e.tagName) > -1;
              })(e)
                ? re(e, t, i)
                : (function (e, t, i) {
                    oe(e, t, i),
                      (function (e, t, i) {
                        var s = K[e.tagName];
                        s && (s(e, t), Y(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              G(e, function (e) {
                q(e, H);
              }),
                q(e, H);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                q(e, V);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  q(e, V);
                }),
                  q(e, F),
                  e.load();
              },
              OBJECT: function (e) {
                q(e, W);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (N(e)) {
                        var t = R(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  I(e) ||
                    L(e) ||
                    (z(e, t.class_entered),
                    z(e, t.class_exited),
                    z(e, t.class_applied),
                    z(e, t.class_loading),
                    z(e, t.class_loaded),
                    z(e, t.class_error));
                })(e, t),
                E(e),
                X(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            ge = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, s) {
                      var n = (function (e) {
                        return O.indexOf(T(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        A(e, i.class_entered),
                        z(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && k(e, i);
                        })(e, i, s),
                        M(i.callback_enter, e, t, s),
                        n || ae(e, i, s);
                    })(e.target, e, t, i)
                  : (function (e, t, i, s) {
                      I(e) ||
                        (A(e, i.class_exited),
                        (function (e, t, i, s) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return T(e) === f;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (se(e),
                            (function (e) {
                              G(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            z(e, i.class_loading),
                            D(s, -1),
                            E(e),
                            M(i.callback_cancel, e, t, s));
                        })(e, t, i, s),
                        M(i.callback_exit, e, t, s));
                    })(e.target, e, t, i);
              });
            },
            fe = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return T(e) === y;
              })(e);
            },
            ye = function (e, t) {
              return (function (e) {
                return fe(e).filter(I);
              })(e || me(t));
            },
            be = function (e, i) {
              var n = a(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        ge(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, i) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var i;
                        ((i = me(e)), fe(i).filter(ve)).forEach(function (t) {
                          z(t, e.class_error), E(t);
                        }),
                          t.update();
                      })(e, i);
                    });
                })(n, this),
                this.update(i);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  n,
                  o = this._settings,
                  r = ye(e, o);
                $(this, r.length),
                  !i && s
                    ? pe(o)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, i),
                                  (function (e, t) {
                                    var i = K[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  C(e, b);
                              })(e, t, i);
                          }),
                            $(i, 0);
                        })(r, o, this)
                      : ((n = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  me(this._settings).forEach(function (e) {
                    X(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                ye(e, i).forEach(function (e) {
                  k(e, t), ae(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var i = a(t);
              ae(e, i);
            }),
            (be.resetStatus = function (e) {
              E(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, s = 0; (i = t[s]); s += 1) l(e, i);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var o = (t[s] = { exports: {} });
    return e[s].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.g = (function () {
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
              i = e.dataset.prlxCx ? +e.dataset.prlxCx : 100,
              s = e.dataset.prlxCy ? +e.dataset.prlxCy : 100,
              n = e.hasAttribute("data-prlx-dxr") ? -1 : 1,
              o = e.hasAttribute("data-prlx-dyr") ? -1 : 1,
              r = e.dataset.prlxA ? +e.dataset.prlxA : 50;
            let a = 0,
              l = 0,
              c = 0,
              d = 0;
            function u(t = window) {
              t.addEventListener("mousemove", function (t) {
                const i = e.getBoundingClientRect().top + window.scrollY;
                if (
                  i >= window.scrollY ||
                  i + e.offsetHeight >= window.scrollY
                ) {
                  const e = window.innerWidth,
                    i = window.innerHeight,
                    s = t.clientX - e / 2,
                    n = t.clientY - i / 2;
                  (c = (s / e) * 100), (d = (n / i) * 100);
                }
              });
            }
            !(function t() {
              (a += ((c - a) * r) / 1e3),
                (l += ((d - l) * r) / 1e3),
                (e.style.cssText = `transform: translate3D(${
                  (n * a) / (i / 10)
                }%,${(o * l) / (s / 10)}%,0);`),
                requestAnimationFrame(t);
            })(),
              t ? u(t) : u();
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
      let s = (e, t = 500, i = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = i ? `${i}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !i),
                !i && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !i && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t));
        },
        n = (e, t = 500, i = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              i && e.style.removeProperty("height");
            let s = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = i ? `${i}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = s + "px"),
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
        o = !0,
        r = (e = 500) => {
          let t = document.querySelector("body");
          if (o) {
            let i = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < i.length; e++) {
                i[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (o = !1),
              setTimeout(function () {
                o = !0;
              }, e);
          }
        },
        a = (e = 500) => {
          let t = document.querySelector("body");
          if (o) {
            let i = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (o = !1),
              setTimeout(function () {
                o = !0;
              }, e);
          }
        };
      function l(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function c(e) {
        return e.filter(function (e, t, i) {
          return i.indexOf(e) === t;
        });
      }
      function d(e, t) {
        const i = Array.from(e).filter(function (e, i, s) {
          if (e.dataset[t]) return e.dataset[t].split(",")[0];
        });
        if (i.length) {
          const e = [];
          i.forEach((i) => {
            const s = {},
              n = i.dataset[t].split(",");
            (s.value = n[0]),
              (s.type = n[1] ? n[1].trim() : "max"),
              (s.item = i),
              e.push(s);
          });
          let s = e.map(function (e) {
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
          s = c(s);
          const n = [];
          if (s.length)
            return (
              s.forEach((t) => {
                const i = t.split(","),
                  s = i[1],
                  o = i[2],
                  r = window.matchMedia(i[0]),
                  a = e.filter(function (e) {
                    if (e.value === s && e.type === o) return !0;
                  });
                n.push({ itemsArray: a, matchMedia: r });
              }),
              n
            );
        }
      }
      var u = i(2);
      let h = (e, t = !1, i = 500, s = 0) => {
        const n = document.querySelector(e);
        if (n) {
          let o = "",
            a = 0;
          t &&
            ((o = "header.header"),
            (a = document.querySelector(o).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: i,
            header: o,
            offset: s,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (r(), document.documentElement.classList.remove("menu-open")),
            void 0 !== u)
          )
            new u().animateScroll(n, "", c);
          else {
            let e = n.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
          }
          l(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else l(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      function p(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function g(e) {
        return e instanceof p(e).Element || e instanceof Element;
      }
      function f(e) {
        return e instanceof p(e).HTMLElement || e instanceof HTMLElement;
      }
      function m(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof p(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var v = Math.max,
        y = Math.min,
        b = Math.round;
      function w(e, t) {
        void 0 === t && (t = !1);
        var i = e.getBoundingClientRect(),
          s = 1,
          n = 1;
        if (f(e) && t) {
          var o = e.offsetHeight,
            r = e.offsetWidth;
          r > 0 && (s = b(i.width) / r || 1),
            o > 0 && (n = b(i.height) / o || 1);
        }
        return {
          width: i.width / s,
          height: i.height / n,
          top: i.top / n,
          right: i.right / s,
          bottom: i.bottom / n,
          left: i.left / s,
          x: i.left / s,
          y: i.top / n,
        };
      }
      function x(e) {
        var t = p(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function S(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function T(e) {
        return ((g(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function C(e) {
        return w(T(e)).left + x(e).scrollLeft;
      }
      function E(e) {
        return p(e).getComputedStyle(e);
      }
      function I(e) {
        var t = E(e),
          i = t.overflow,
          s = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + n + s);
      }
      function L(e, t, i) {
        void 0 === i && (i = !1);
        var s,
          n,
          o = f(t),
          r =
            f(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                i = b(t.width) / e.offsetWidth || 1,
                s = b(t.height) / e.offsetHeight || 1;
              return 1 !== i || 1 !== s;
            })(t),
          a = T(t),
          l = w(e, r),
          c = { scrollLeft: 0, scrollTop: 0 },
          d = { x: 0, y: 0 };
        return (
          (o || (!o && !i)) &&
            (("body" !== S(t) || I(a)) &&
              (c =
                (s = t) !== p(s) && f(s)
                  ? { scrollLeft: (n = s).scrollLeft, scrollTop: n.scrollTop }
                  : x(s)),
            f(t)
              ? (((d = w(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
              : a && (d.x = C(a))),
          {
            x: l.left + c.scrollLeft - d.x,
            y: l.top + c.scrollTop - d.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function O(e) {
        var t = w(e),
          i = e.offsetWidth,
          s = e.offsetHeight;
        return (
          Math.abs(t.width - i) <= 1 && (i = t.width),
          Math.abs(t.height - s) <= 1 && (s = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: i, height: s }
        );
      }
      function M(e) {
        return "html" === S(e)
          ? e
          : e.assignedSlot || e.parentNode || (m(e) ? e.host : null) || T(e);
      }
      function A(e) {
        return ["html", "body", "#document"].indexOf(S(e)) >= 0
          ? e.ownerDocument.body
          : f(e) && I(e)
          ? e
          : A(M(e));
      }
      function z(e, t) {
        var i;
        void 0 === t && (t = []);
        var s = A(e),
          n = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
          o = p(s),
          r = n ? [o].concat(o.visualViewport || [], I(s) ? s : []) : s,
          a = t.concat(r);
        return n ? a : a.concat(z(M(r)));
      }
      function P(e) {
        return ["table", "td", "th"].indexOf(S(e)) >= 0;
      }
      function k(e) {
        return f(e) && "fixed" !== E(e).position ? e.offsetParent : null;
      }
      function D(e) {
        for (var t = p(e), i = k(e); i && P(i) && "static" === E(i).position; )
          i = k(i);
        return i &&
          ("html" === S(i) || ("body" === S(i) && "static" === E(i).position))
          ? t
          : i ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  f(e) &&
                  "fixed" === E(e).position
                )
                  return null;
                for (
                  var i = M(e);
                  f(i) && ["html", "body"].indexOf(S(i)) < 0;

                ) {
                  var s = E(i);
                  if (
                    "none" !== s.transform ||
                    "none" !== s.perspective ||
                    "paint" === s.contain ||
                    -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                    (t && "filter" === s.willChange) ||
                    (t && s.filter && "none" !== s.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var $ = "top",
        _ = "bottom",
        G = "right",
        B = "left",
        V = "auto",
        F = [$, _, G, B],
        H = "start",
        W = "end",
        N = "viewport",
        R = "popper",
        X = F.reduce(function (e, t) {
          return e.concat([t + "-" + H, t + "-" + W]);
        }, []),
        j = [].concat(F, [V]).reduce(function (e, t) {
          return e.concat([t, t + "-" + H, t + "-" + W]);
        }, []),
        q = [
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
          i = new Set(),
          s = [];
        function n(e) {
          i.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!i.has(e)) {
                  var s = t.get(e);
                  s && n(s);
                }
              }),
            s.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            i.has(e.name) || n(e);
          }),
          s
        );
      }
      var U = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Z() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function K(e) {
        void 0 === e && (e = {});
        var t = e,
          i = t.defaultModifiers,
          s = void 0 === i ? [] : i,
          n = t.defaultOptions,
          o = void 0 === n ? U : n;
        return function (e, t, i) {
          void 0 === i && (i = o);
          var n,
            r,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, U, o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            d = {
              state: a,
              setOptions: function (i) {
                var n = "function" == typeof i ? i(a.options) : i;
                u(),
                  (a.options = Object.assign({}, o, a.options, n)),
                  (a.scrollParents = {
                    reference: g(e)
                      ? z(e)
                      : e.contextElement
                      ? z(e.contextElement)
                      : [],
                    popper: z(t),
                  });
                var r = (function (e) {
                  var t = Y(e);
                  return q.reduce(function (e, i) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === i;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var i = e[t.name];
                      return (
                        (e[t.name] = i
                          ? Object.assign({}, i, t, {
                              options: Object.assign({}, i.options, t.options),
                              data: Object.assign({}, i.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(s, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = r.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      i = e.options,
                      s = void 0 === i ? {} : i,
                      n = e.effect;
                    if ("function" == typeof n) {
                      var o = n({ state: a, name: t, instance: d, options: s }),
                        r = function () {};
                      l.push(o || r);
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    i = e.popper;
                  if (Z(t, i)) {
                    (a.rects = {
                      reference: L(t, D(i), "fixed" === a.options.strategy),
                      popper: O(i),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var s = 0; s < a.orderedModifiers.length; s++)
                      if (!0 !== a.reset) {
                        var n = a.orderedModifiers[s],
                          o = n.fn,
                          r = n.options,
                          l = void 0 === r ? {} : r,
                          u = n.name;
                        "function" == typeof o &&
                          (a =
                            o({ state: a, options: l, name: u, instance: d }) ||
                            a);
                      } else (a.reset = !1), (s = -1);
                  }
                }
              },
              update:
                ((n = function () {
                  return new Promise(function (e) {
                    d.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    r ||
                      (r = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (r = void 0), e(n());
                        });
                      })),
                    r
                  );
                }),
              destroy: function () {
                u(), (c = !0);
              },
            };
          if (!Z(e, t)) return d;
          function u() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            d.setOptions(i).then(function (e) {
              !c && i.onFirstUpdate && i.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var J = { passive: !0 };
      const Q = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            i = e.instance,
            s = e.options,
            n = s.scroll,
            o = void 0 === n || n,
            r = s.resize,
            a = void 0 === r || r,
            l = p(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            o &&
              c.forEach(function (e) {
                e.addEventListener("scroll", i.update, J);
              }),
            a && l.addEventListener("resize", i.update, J),
            function () {
              o &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", i.update, J);
                }),
                a && l.removeEventListener("resize", i.update, J);
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
      function ie(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function se(e) {
        var t,
          i = e.reference,
          s = e.element,
          n = e.placement,
          o = n ? ee(n) : null,
          r = n ? te(n) : null,
          a = i.x + i.width / 2 - s.width / 2,
          l = i.y + i.height / 2 - s.height / 2;
        switch (o) {
          case $:
            t = { x: a, y: i.y - s.height };
            break;
          case _:
            t = { x: a, y: i.y + i.height };
            break;
          case G:
            t = { x: i.x + i.width, y: l };
            break;
          case B:
            t = { x: i.x - s.width, y: l };
            break;
          default:
            t = { x: i.x, y: i.y };
        }
        var c = o ? ie(o) : null;
        if (null != c) {
          var d = "y" === c ? "height" : "width";
          switch (r) {
            case H:
              t[c] = t[c] - (i[d] / 2 - s[d] / 2);
              break;
            case W:
              t[c] = t[c] + (i[d] / 2 - s[d] / 2);
          }
        }
        return t;
      }
      var ne = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function oe(e) {
        var t,
          i = e.popper,
          s = e.popperRect,
          n = e.placement,
          o = e.variation,
          r = e.offsets,
          a = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          d = e.roundOffsets,
          u = e.isFixed,
          h = r.x,
          g = void 0 === h ? 0 : h,
          f = r.y,
          m = void 0 === f ? 0 : f,
          v = "function" == typeof d ? d({ x: g, y: m }) : { x: g, y: m };
        (g = v.x), (m = v.y);
        var y = r.hasOwnProperty("x"),
          w = r.hasOwnProperty("y"),
          x = B,
          S = $,
          C = window;
        if (c) {
          var I = D(i),
            L = "clientHeight",
            O = "clientWidth";
          if (
            (I === p(i) &&
              "static" !== E((I = T(i))).position &&
              "absolute" === a &&
              ((L = "scrollHeight"), (O = "scrollWidth")),
            (I = I),
            n === $ || ((n === B || n === G) && o === W))
          )
            (S = _),
              (m -=
                (u && C.visualViewport ? C.visualViewport.height : I[L]) -
                s.height),
              (m *= l ? 1 : -1);
          if (n === B || ((n === $ || n === _) && o === W))
            (x = G),
              (g -=
                (u && C.visualViewport ? C.visualViewport.width : I[O]) -
                s.width),
              (g *= l ? 1 : -1);
        }
        var M,
          A = Object.assign({ position: a }, c && ne),
          z =
            !0 === d
              ? (function (e) {
                  var t = e.x,
                    i = e.y,
                    s = window.devicePixelRatio || 1;
                  return { x: b(t * s) / s || 0, y: b(i * s) / s || 0 };
                })({ x: g, y: m })
              : { x: g, y: m };
        return (
          (g = z.x),
          (m = z.y),
          l
            ? Object.assign(
                {},
                A,
                (((M = {})[S] = w ? "0" : ""),
                (M[x] = y ? "0" : ""),
                (M.transform =
                  (C.devicePixelRatio || 1) <= 1
                    ? "translate(" + g + "px, " + m + "px)"
                    : "translate3d(" + g + "px, " + m + "px, 0)"),
                M)
              )
            : Object.assign(
                {},
                A,
                (((t = {})[S] = w ? m + "px" : ""),
                (t[x] = y ? g + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const re = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var i = t.styles[e] || {},
              s = t.attributes[e] || {},
              n = t.elements[e];
            f(n) &&
              S(n) &&
              (Object.assign(n.style, i),
              Object.keys(s).forEach(function (e) {
                var t = s[e];
                !1 === t
                  ? n.removeAttribute(e)
                  : n.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            i = {
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
            Object.assign(t.elements.popper.style, i.popper),
            (t.styles = i),
            t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var s = t.elements[e],
                  n = t.attributes[e] || {},
                  o = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                f(s) &&
                  S(s) &&
                  (Object.assign(s.style, o),
                  Object.keys(n).forEach(function (e) {
                    s.removeAttribute(e);
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
            i = e.options,
            s = e.name,
            n = i.offset,
            o = void 0 === n ? [0, 0] : n,
            r = j.reduce(function (e, i) {
              return (
                (e[i] = (function (e, t, i) {
                  var s = ee(e),
                    n = [B, $].indexOf(s) >= 0 ? -1 : 1,
                    o =
                      "function" == typeof i
                        ? i(Object.assign({}, t, { placement: e }))
                        : i,
                    r = o[0],
                    a = o[1];
                  return (
                    (r = r || 0),
                    (a = (a || 0) * n),
                    [B, G].indexOf(s) >= 0 ? { x: a, y: r } : { x: r, y: a }
                  );
                })(i, t.rects, o)),
                e
              );
            }, {}),
            a = r[t.placement],
            l = a.x,
            c = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[s] = r);
        },
      };
      var le = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ce(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return le[e];
        });
      }
      var de = { start: "end", end: "start" };
      function ue(e) {
        return e.replace(/start|end/g, function (e) {
          return de[e];
        });
      }
      function he(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && m(i)) {
          var s = t;
          do {
            if (s && e.isSameNode(s)) return !0;
            s = s.parentNode || s.host;
          } while (s);
        }
        return !1;
      }
      function pe(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ge(e, t) {
        return t === N
          ? pe(
              (function (e) {
                var t = p(e),
                  i = T(e),
                  s = t.visualViewport,
                  n = i.clientWidth,
                  o = i.clientHeight,
                  r = 0,
                  a = 0;
                return (
                  s &&
                    ((n = s.width),
                    (o = s.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((r = s.offsetLeft), (a = s.offsetTop))),
                  { width: n, height: o, x: r + C(e), y: a }
                );
              })(e)
            )
          : g(t)
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
          : pe(
              (function (e) {
                var t,
                  i = T(e),
                  s = x(e),
                  n = null == (t = e.ownerDocument) ? void 0 : t.body,
                  o = v(
                    i.scrollWidth,
                    i.clientWidth,
                    n ? n.scrollWidth : 0,
                    n ? n.clientWidth : 0
                  ),
                  r = v(
                    i.scrollHeight,
                    i.clientHeight,
                    n ? n.scrollHeight : 0,
                    n ? n.clientHeight : 0
                  ),
                  a = -s.scrollLeft + C(e),
                  l = -s.scrollTop;
                return (
                  "rtl" === E(n || i).direction &&
                    (a += v(i.clientWidth, n ? n.clientWidth : 0) - o),
                  { width: o, height: r, x: a, y: l }
                );
              })(T(e))
            );
      }
      function fe(e, t, i) {
        var s =
            "clippingParents" === t
              ? (function (e) {
                  var t = z(M(e)),
                    i =
                      ["absolute", "fixed"].indexOf(E(e).position) >= 0 && f(e)
                        ? D(e)
                        : e;
                  return g(i)
                    ? t.filter(function (e) {
                        return g(e) && he(e, i) && "body" !== S(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          n = [].concat(s, [i]),
          o = n[0],
          r = n.reduce(function (t, i) {
            var s = ge(e, i);
            return (
              (t.top = v(s.top, t.top)),
              (t.right = y(s.right, t.right)),
              (t.bottom = y(s.bottom, t.bottom)),
              (t.left = v(s.left, t.left)),
              t
            );
          }, ge(e, o));
        return (
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      }
      function me(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function ve(e, t) {
        return t.reduce(function (t, i) {
          return (t[i] = e), t;
        }, {});
      }
      function ye(e, t) {
        void 0 === t && (t = {});
        var i = t,
          s = i.placement,
          n = void 0 === s ? e.placement : s,
          o = i.boundary,
          r = void 0 === o ? "clippingParents" : o,
          a = i.rootBoundary,
          l = void 0 === a ? N : a,
          c = i.elementContext,
          d = void 0 === c ? R : c,
          u = i.altBoundary,
          h = void 0 !== u && u,
          p = i.padding,
          f = void 0 === p ? 0 : p,
          m = me("number" != typeof f ? f : ve(f, F)),
          v = d === R ? "reference" : R,
          y = e.rects.popper,
          b = e.elements[h ? v : d],
          x = fe(g(b) ? b : b.contextElement || T(e.elements.popper), r, l),
          S = w(e.elements.reference),
          C = se({
            reference: S,
            element: y,
            strategy: "absolute",
            placement: n,
          }),
          E = pe(Object.assign({}, y, C)),
          I = d === R ? E : S,
          L = {
            top: x.top - I.top + m.top,
            bottom: I.bottom - x.bottom + m.bottom,
            left: x.left - I.left + m.left,
            right: I.right - x.right + m.right,
          },
          O = e.modifiersData.offset;
        if (d === R && O) {
          var M = O[n];
          Object.keys(L).forEach(function (e) {
            var t = [G, _].indexOf(e) >= 0 ? 1 : -1,
              i = [$, _].indexOf(e) >= 0 ? "y" : "x";
            L[e] += M[i] * t;
          });
        }
        return L;
      }
      function be(e, t, i) {
        return v(e, y(t, i));
      }
      const we = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            i = e.options,
            s = e.name,
            n = i.mainAxis,
            o = void 0 === n || n,
            r = i.altAxis,
            a = void 0 !== r && r,
            l = i.boundary,
            c = i.rootBoundary,
            d = i.altBoundary,
            u = i.padding,
            h = i.tether,
            p = void 0 === h || h,
            g = i.tetherOffset,
            f = void 0 === g ? 0 : g,
            m = ye(t, {
              boundary: l,
              rootBoundary: c,
              padding: u,
              altBoundary: d,
            }),
            b = ee(t.placement),
            w = te(t.placement),
            x = !w,
            S = ie(b),
            T = "x" === S ? "y" : "x",
            C = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            I = t.rects.popper,
            L =
              "function" == typeof f
                ? f(Object.assign({}, t.rects, { placement: t.placement }))
                : f,
            M =
              "number" == typeof L
                ? { mainAxis: L, altAxis: L }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
            A = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            z = { x: 0, y: 0 };
          if (C) {
            if (o) {
              var P,
                k = "y" === S ? $ : B,
                V = "y" === S ? _ : G,
                F = "y" === S ? "height" : "width",
                W = C[S],
                N = W + m[k],
                R = W - m[V],
                X = p ? -I[F] / 2 : 0,
                j = w === H ? E[F] : I[F],
                q = w === H ? -I[F] : -E[F],
                Y = t.elements.arrow,
                U = p && Y ? O(Y) : { width: 0, height: 0 },
                Z = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                K = Z[k],
                J = Z[V],
                Q = be(0, E[F], U[F]),
                se = x
                  ? E[F] / 2 - X - Q - K - M.mainAxis
                  : j - Q - K - M.mainAxis,
                ne = x
                  ? -E[F] / 2 + X + Q + J + M.mainAxis
                  : q + Q + J + M.mainAxis,
                oe = t.elements.arrow && D(t.elements.arrow),
                re = oe
                  ? "y" === S
                    ? oe.clientTop || 0
                    : oe.clientLeft || 0
                  : 0,
                ae = null != (P = null == A ? void 0 : A[S]) ? P : 0,
                le = W + ne - ae,
                ce = be(p ? y(N, W + se - ae - re) : N, W, p ? v(R, le) : R);
              (C[S] = ce), (z[S] = ce - W);
            }
            if (a) {
              var de,
                ue = "x" === S ? $ : B,
                he = "x" === S ? _ : G,
                pe = C[T],
                ge = "y" === T ? "height" : "width",
                fe = pe + m[ue],
                me = pe - m[he],
                ve = -1 !== [$, B].indexOf(b),
                we = null != (de = null == A ? void 0 : A[T]) ? de : 0,
                xe = ve ? fe : pe - E[ge] - I[ge] - we + M.altAxis,
                Se = ve ? pe + E[ge] + I[ge] - we - M.altAxis : me,
                Te =
                  p && ve
                    ? (function (e, t, i) {
                        var s = be(e, t, i);
                        return s > i ? i : s;
                      })(xe, pe, Se)
                    : be(p ? xe : fe, pe, p ? Se : me);
              (C[T] = Te), (z[T] = Te - pe);
            }
            t.modifiersData[s] = z;
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
            i = e.state,
            s = e.name,
            n = e.options,
            o = i.elements.arrow,
            r = i.modifiersData.popperOffsets,
            a = ee(i.placement),
            l = ie(a),
            c = [B, G].indexOf(a) >= 0 ? "height" : "width";
          if (o && r) {
            var d = (function (e, t) {
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
                    : ve(e, F)
                );
              })(n.padding, i),
              u = O(o),
              h = "y" === l ? $ : B,
              p = "y" === l ? _ : G,
              g =
                i.rects.reference[c] +
                i.rects.reference[l] -
                r[l] -
                i.rects.popper[c],
              f = r[l] - i.rects.reference[l],
              m = D(o),
              v = m
                ? "y" === l
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = g / 2 - f / 2,
              b = d[h],
              w = v - u[c] - d[p],
              x = v / 2 - u[c] / 2 + y,
              S = be(b, x, w),
              T = l;
            i.modifiersData[s] =
              (((t = {})[T] = S), (t.centerOffset = S - x), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            i = e.options.element,
            s = void 0 === i ? "[data-popper-arrow]" : i;
          null != s &&
            ("string" != typeof s ||
              (s = t.elements.popper.querySelector(s))) &&
            he(t.elements.popper, s) &&
            (t.elements.arrow = s);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Se(e, t, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x,
          }
        );
      }
      function Te(e) {
        return [$, G, _, B].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Ce = K({
          defaultModifiers: [
            Q,
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  i = e.name;
                t.modifiersData[i] = se({
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
                  i = e.options,
                  s = i.gpuAcceleration,
                  n = void 0 === s || s,
                  o = i.adaptive,
                  r = void 0 === o || o,
                  a = i.roundOffsets,
                  l = void 0 === a || a,
                  c = {
                    placement: ee(t.placement),
                    variation: te(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: n,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    oe(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: r,
                        roundOffsets: l,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      oe(
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
            re,
            ae,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  i = e.options,
                  s = e.name;
                if (!t.modifiersData[s]._skip) {
                  for (
                    var n = i.mainAxis,
                      o = void 0 === n || n,
                      r = i.altAxis,
                      a = void 0 === r || r,
                      l = i.fallbackPlacements,
                      c = i.padding,
                      d = i.boundary,
                      u = i.rootBoundary,
                      h = i.altBoundary,
                      p = i.flipVariations,
                      g = void 0 === p || p,
                      f = i.allowedAutoPlacements,
                      m = t.options.placement,
                      v = ee(m),
                      y =
                        l ||
                        (v === m || !g
                          ? [ce(m)]
                          : (function (e) {
                              if (ee(e) === V) return [];
                              var t = ce(e);
                              return [ue(e), t, ue(t)];
                            })(m)),
                      b = [m].concat(y).reduce(function (e, i) {
                        return e.concat(
                          ee(i) === V
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var i = t,
                                  s = i.placement,
                                  n = i.boundary,
                                  o = i.rootBoundary,
                                  r = i.padding,
                                  a = i.flipVariations,
                                  l = i.allowedAutoPlacements,
                                  c = void 0 === l ? j : l,
                                  d = te(s),
                                  u = d
                                    ? a
                                      ? X
                                      : X.filter(function (e) {
                                          return te(e) === d;
                                        })
                                    : F,
                                  h = u.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === h.length && (h = u);
                                var p = h.reduce(function (t, i) {
                                  return (
                                    (t[i] = ye(e, {
                                      placement: i,
                                      boundary: n,
                                      rootBoundary: o,
                                      padding: r,
                                    })[ee(i)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(p).sort(function (e, t) {
                                  return p[e] - p[t];
                                });
                              })(t, {
                                placement: i,
                                boundary: d,
                                rootBoundary: u,
                                padding: c,
                                flipVariations: g,
                                allowedAutoPlacements: f,
                              })
                            : i
                        );
                      }, []),
                      w = t.rects.reference,
                      x = t.rects.popper,
                      S = new Map(),
                      T = !0,
                      C = b[0],
                      E = 0;
                    E < b.length;
                    E++
                  ) {
                    var I = b[E],
                      L = ee(I),
                      O = te(I) === H,
                      M = [$, _].indexOf(L) >= 0,
                      A = M ? "width" : "height",
                      z = ye(t, {
                        placement: I,
                        boundary: d,
                        rootBoundary: u,
                        altBoundary: h,
                        padding: c,
                      }),
                      P = M ? (O ? G : B) : O ? _ : $;
                    w[A] > x[A] && (P = ce(P));
                    var k = ce(P),
                      D = [];
                    if (
                      (o && D.push(z[L] <= 0),
                      a && D.push(z[P] <= 0, z[k] <= 0),
                      D.every(function (e) {
                        return e;
                      }))
                    ) {
                      (C = I), (T = !1);
                      break;
                    }
                    S.set(I, D);
                  }
                  if (T)
                    for (
                      var W = function (e) {
                          var t = b.find(function (t) {
                            var i = S.get(t);
                            if (i)
                              return i.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (C = t), "break";
                        },
                        N = g ? 3 : 1;
                      N > 0;
                      N--
                    ) {
                      if ("break" === W(N)) break;
                    }
                  t.placement !== C &&
                    ((t.modifiersData[s]._skip = !0),
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
                  i = e.name,
                  s = t.rects.reference,
                  n = t.rects.popper,
                  o = t.modifiersData.preventOverflow,
                  r = ye(t, { elementContext: "reference" }),
                  a = ye(t, { altBoundary: !0 }),
                  l = Se(r, s),
                  c = Se(a, n, o),
                  d = Te(l),
                  u = Te(c);
                (t.modifiersData[i] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: d,
                  hasPopperEscaped: u,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": d,
                      "data-popper-escaped": u,
                    }
                  ));
              },
            },
          ],
        }),
        Ee = "tippy-content",
        Ie = "tippy-backdrop",
        Le = "tippy-arrow",
        Oe = "tippy-svg-arrow",
        Me = { passive: !0, capture: !0 },
        Ae = function () {
          return document.body;
        };
      function ze(e, t, i) {
        if (Array.isArray(e)) {
          var s = e[t];
          return null == s ? (Array.isArray(i) ? i[t] : i) : s;
        }
        return e;
      }
      function Pe(e, t) {
        var i = {}.toString.call(e);
        return 0 === i.indexOf("[object") && i.indexOf(t + "]") > -1;
      }
      function ke(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function De(e, t) {
        return 0 === t
          ? e
          : function (s) {
              clearTimeout(i),
                (i = setTimeout(function () {
                  e(s);
                }, t));
            };
        var i;
      }
      function $e(e) {
        return [].concat(e);
      }
      function _e(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Ge(e) {
        return e.split("-")[0];
      }
      function Be(e) {
        return [].slice.call(e);
      }
      function Ve(e) {
        return Object.keys(e).reduce(function (t, i) {
          return void 0 !== e[i] && (t[i] = e[i]), t;
        }, {});
      }
      function Fe() {
        return document.createElement("div");
      }
      function He(e) {
        return ["Element", "Fragment"].some(function (t) {
          return Pe(e, t);
        });
      }
      function We(e) {
        return Pe(e, "MouseEvent");
      }
      function Ne(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function Re(e) {
        return He(e)
          ? [e]
          : (function (e) {
              return Pe(e, "NodeList");
            })(e)
          ? Be(e)
          : Array.isArray(e)
          ? e
          : Be(document.querySelectorAll(e));
      }
      function Xe(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function je(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function qe(e) {
        var t,
          i = $e(e)[0];
        return null != i && null != (t = i.ownerDocument) && t.body
          ? i.ownerDocument
          : document;
      }
      function Ye(e, t, i) {
        var s = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[s](t, i);
        });
      }
      function Ue(e, t) {
        for (var i = t; i; ) {
          var s;
          if (e.contains(i)) return !0;
          i =
            null == i.getRootNode || null == (s = i.getRootNode())
              ? void 0
              : s.host;
        }
        return !1;
      }
      var Ze = { isTouch: !1 },
        Ke = 0;
      function Je() {
        Ze.isTouch ||
          ((Ze.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Qe));
      }
      function Qe() {
        var e = performance.now();
        e - Ke < 20 &&
          ((Ze.isTouch = !1), document.removeEventListener("mousemove", Qe)),
          (Ke = e);
      }
      function et() {
        var e = document.activeElement;
        if (Ne(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var tt =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var it = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        st = Object.assign(
          {
            appendTo: Ae,
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
          it,
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
        nt = Object.keys(st);
      function ot(e) {
        var t = (e.plugins || []).reduce(function (t, i) {
          var s,
            n = i.name,
            o = i.defaultValue;
          n && (t[n] = void 0 !== e[n] ? e[n] : null != (s = st[n]) ? s : o);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function rt(e, t) {
        var i = Object.assign(
          {},
          t,
          { content: ke(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(ot(Object.assign({}, st, { plugins: t })))
                    : nt
                ).reduce(function (t, i) {
                  var s = (e.getAttribute("data-tippy-" + i) || "").trim();
                  if (!s) return t;
                  if ("content" === i) t[i] = s;
                  else
                    try {
                      t[i] = JSON.parse(s);
                    } catch (e) {
                      t[i] = s;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (i.aria = Object.assign({}, st.aria, i.aria)),
          (i.aria = {
            expanded:
              "auto" === i.aria.expanded ? t.interactive : i.aria.expanded,
            content:
              "auto" === i.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : i.aria.content,
          }),
          i
        );
      }
      function at(e, t) {
        e.innerHTML = t;
      }
      function lt(e) {
        var t = Fe();
        return (
          !0 === e
            ? (t.className = Le)
            : ((t.className = Oe), He(e) ? t.appendChild(e) : at(t, e)),
          t
        );
      }
      function ct(e, t) {
        He(t.content)
          ? (at(e, ""), e.appendChild(t.content))
          : "function" != typeof t.content &&
            (t.allowHTML ? at(e, t.content) : (e.textContent = t.content));
      }
      function dt(e) {
        var t = e.firstElementChild,
          i = Be(t.children);
        return {
          box: t,
          content: i.find(function (e) {
            return e.classList.contains(Ee);
          }),
          arrow: i.find(function (e) {
            return e.classList.contains(Le) || e.classList.contains(Oe);
          }),
          backdrop: i.find(function (e) {
            return e.classList.contains(Ie);
          }),
        };
      }
      function ut(e) {
        var t = Fe(),
          i = Fe();
        (i.className = "tippy-box"),
          i.setAttribute("data-state", "hidden"),
          i.setAttribute("tabindex", "-1");
        var s = Fe();
        function n(i, s) {
          var n = dt(t),
            o = n.box,
            r = n.content,
            a = n.arrow;
          s.theme
            ? o.setAttribute("data-theme", s.theme)
            : o.removeAttribute("data-theme"),
            "string" == typeof s.animation
              ? o.setAttribute("data-animation", s.animation)
              : o.removeAttribute("data-animation"),
            s.inertia
              ? o.setAttribute("data-inertia", "")
              : o.removeAttribute("data-inertia"),
            (o.style.maxWidth =
              "number" == typeof s.maxWidth ? s.maxWidth + "px" : s.maxWidth),
            s.role ? o.setAttribute("role", s.role) : o.removeAttribute("role"),
            (i.content === s.content && i.allowHTML === s.allowHTML) ||
              ct(r, e.props),
            s.arrow
              ? a
                ? i.arrow !== s.arrow &&
                  (o.removeChild(a), o.appendChild(lt(s.arrow)))
                : o.appendChild(lt(s.arrow))
              : a && o.removeChild(a);
        }
        return (
          (s.className = Ee),
          s.setAttribute("data-state", "hidden"),
          ct(s, e.props),
          t.appendChild(i),
          i.appendChild(s),
          n(e.props, e.props),
          { popper: t, onUpdate: n }
        );
      }
      ut.$$tippy = !0;
      var ht = 1,
        pt = [],
        gt = [];
      function ft(e, t) {
        var i,
          s,
          n,
          o,
          r,
          a,
          l,
          c,
          d = rt(e, Object.assign({}, st, ot(Ve(t)))),
          u = !1,
          h = !1,
          p = !1,
          g = !1,
          f = [],
          m = De(q, d.interactiveDebounce),
          v = ht++,
          y = (c = d.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          b = {
            id: v,
            reference: e,
            popper: Fe(),
            popperInstance: null,
            props: d,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: y,
            clearDelayTimeouts: function () {
              clearTimeout(i), clearTimeout(s), cancelAnimationFrame(n);
            },
            setProps: function (t) {
              0;
              if (b.state.isDestroyed) return;
              k("onBeforeUpdate", [b, t]), X();
              var i = b.props,
                s = rt(
                  e,
                  Object.assign({}, i, Ve(t), { ignoreAttributes: !0 })
                );
              (b.props = s),
                R(),
                i.interactiveDebounce !== s.interactiveDebounce &&
                  (_(), (m = De(q, s.interactiveDebounce)));
              i.triggerTarget && !s.triggerTarget
                ? $e(i.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : s.triggerTarget && e.removeAttribute("aria-expanded");
              $(), P(), S && S(i, s);
              b.popperInstance &&
                (K(),
                Q().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              k("onAfterUpdate", [b, t]);
            },
            setContent: function (e) {
              b.setProps({ content: e });
            },
            show: function () {
              0;
              var e = b.state.isVisible,
                t = b.state.isDestroyed,
                i = !b.state.isEnabled,
                s = Ze.isTouch && !b.props.touch,
                n = ze(b.props.duration, 0, st.duration);
              if (e || t || i || s) return;
              if (O().hasAttribute("disabled")) return;
              if ((k("onShow", [b], !1), !1 === b.props.onShow(b))) return;
              (b.state.isVisible = !0), L() && (x.style.visibility = "visible");
              P(), F(), b.state.isMounted || (x.style.transition = "none");
              if (L()) {
                var o = A(),
                  r = o.box,
                  l = o.content;
                Xe([r, l], 0);
              }
              (a = function () {
                var e;
                if (b.state.isVisible && !g) {
                  if (
                    ((g = !0),
                    x.offsetHeight,
                    (x.style.transition = b.props.moveTransition),
                    L() && b.props.animation)
                  ) {
                    var t = A(),
                      i = t.box,
                      s = t.content;
                    Xe([i, s], n), je([i, s], "visible");
                  }
                  D(),
                    $(),
                    _e(gt, b),
                    null == (e = b.popperInstance) || e.forceUpdate(),
                    k("onMount", [b]),
                    b.props.animation &&
                      L() &&
                      (function (e, t) {
                        W(e, t);
                      })(n, function () {
                        (b.state.isShown = !0), k("onShown", [b]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = b.props.appendTo,
                    i = O();
                  e =
                    (b.props.interactive && t === Ae) || "parent" === t
                      ? i.parentNode
                      : ke(t, [i]);
                  e.contains(x) || e.appendChild(x);
                  (b.state.isMounted = !0), K(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !b.state.isVisible,
                t = b.state.isDestroyed,
                i = !b.state.isEnabled,
                s = ze(b.props.duration, 1, st.duration);
              if (e || t || i) return;
              if ((k("onHide", [b], !1), !1 === b.props.onHide(b))) return;
              (b.state.isVisible = !1),
                (b.state.isShown = !1),
                (g = !1),
                (u = !1),
                L() && (x.style.visibility = "hidden");
              if ((_(), H(), P(!0), L())) {
                var n = A(),
                  o = n.box,
                  r = n.content;
                b.props.animation && (Xe([o, r], s), je([o, r], "hidden"));
              }
              D(),
                $(),
                b.props.animation
                  ? L() &&
                    (function (e, t) {
                      W(e, function () {
                        !b.state.isVisible &&
                          x.parentNode &&
                          x.parentNode.contains(x) &&
                          t();
                      });
                    })(s, b.unmount)
                  : b.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              M().addEventListener("mousemove", m), _e(pt, m), m(e);
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
              J(),
                Q().forEach(function (e) {
                  e._tippy.unmount();
                }),
                x.parentNode && x.parentNode.removeChild(x);
              (gt = gt.filter(function (e) {
                return e !== b;
              })),
                (b.state.isMounted = !1),
                k("onHidden", [b]);
            },
            destroy: function () {
              0;
              if (b.state.isDestroyed) return;
              b.clearDelayTimeouts(),
                b.unmount(),
                X(),
                delete e._tippy,
                (b.state.isDestroyed = !0),
                k("onDestroy", [b]);
            },
          };
        if (!d.render) return b;
        var w = d.render(b),
          x = w.popper,
          S = w.onUpdate;
        x.setAttribute("data-tippy-root", ""),
          (x.id = "tippy-" + b.id),
          (b.popper = x),
          (e._tippy = b),
          (x._tippy = b);
        var T = y.map(function (e) {
            return e.fn(b);
          }),
          C = e.hasAttribute("aria-expanded");
        return (
          R(),
          $(),
          P(),
          k("onCreate", [b]),
          d.showOnCreate && ee(),
          x.addEventListener("mouseenter", function () {
            b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
          }),
          x.addEventListener("mouseleave", function () {
            b.props.interactive &&
              b.props.trigger.indexOf("mouseenter") >= 0 &&
              M().addEventListener("mousemove", m);
          }),
          b
        );
        function E() {
          var e = b.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function I() {
          return "hold" === E()[0];
        }
        function L() {
          var e;
          return !(null == (e = b.props.render) || !e.$$tippy);
        }
        function O() {
          return l || e;
        }
        function M() {
          var e = O().parentNode;
          return e ? qe(e) : document;
        }
        function A() {
          return dt(x);
        }
        function z(e) {
          return (b.state.isMounted && !b.state.isVisible) ||
            Ze.isTouch ||
            (o && "focus" === o.type)
            ? 0
            : ze(b.props.delay, e ? 0 : 1, st.delay);
        }
        function P(e) {
          void 0 === e && (e = !1),
            (x.style.pointerEvents = b.props.interactive && !e ? "" : "none"),
            (x.style.zIndex = "" + b.props.zIndex);
        }
        function k(e, t, i) {
          var s;
          (void 0 === i && (i = !0),
          T.forEach(function (i) {
            i[e] && i[e].apply(i, t);
          }),
          i) && (s = b.props)[e].apply(s, t);
        }
        function D() {
          var t = b.props.aria;
          if (t.content) {
            var i = "aria-" + t.content,
              s = x.id;
            $e(b.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(i);
              if (b.state.isVisible) e.setAttribute(i, t ? t + " " + s : s);
              else {
                var n = t && t.replace(s, "").trim();
                n ? e.setAttribute(i, n) : e.removeAttribute(i);
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
        function _() {
          M().removeEventListener("mousemove", m),
            (pt = pt.filter(function (e) {
              return e !== m;
            }));
        }
        function G(t) {
          if (!Ze.isTouch || (!p && "mousedown" !== t.type)) {
            var i = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!b.props.interactive || !Ue(x, i)) {
              if (
                $e(b.props.triggerTarget || e).some(function (e) {
                  return Ue(e, i);
                })
              ) {
                if (Ze.isTouch) return;
                if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                  return;
              } else k("onClickOutside", [b, t]);
              !0 === b.props.hideOnClick &&
                (b.clearDelayTimeouts(),
                b.hide(),
                (h = !0),
                setTimeout(function () {
                  h = !1;
                }),
                b.state.isMounted || H());
            }
          }
        }
        function B() {
          p = !0;
        }
        function V() {
          p = !1;
        }
        function F() {
          var e = M();
          e.addEventListener("mousedown", G, !0),
            e.addEventListener("touchend", G, Me),
            e.addEventListener("touchstart", V, Me),
            e.addEventListener("touchmove", B, Me);
        }
        function H() {
          var e = M();
          e.removeEventListener("mousedown", G, !0),
            e.removeEventListener("touchend", G, Me),
            e.removeEventListener("touchstart", V, Me),
            e.removeEventListener("touchmove", B, Me);
        }
        function W(e, t) {
          var i = A().box;
          function s(e) {
            e.target === i && (Ye(i, "remove", s), t());
          }
          if (0 === e) return t();
          Ye(i, "remove", r), Ye(i, "add", s), (r = s);
        }
        function N(t, i, s) {
          void 0 === s && (s = !1),
            $e(b.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, i, s),
                f.push({ node: e, eventType: t, handler: i, options: s });
            });
        }
        function R() {
          I() &&
            (N("touchstart", j, { passive: !0 }),
            N("touchend", Y, { passive: !0 })),
            (function (e) {
              return e.split(/\s+/).filter(Boolean);
            })(b.props.trigger).forEach(function (e) {
              if ("manual" !== e)
                switch ((N(e, j), e)) {
                  case "mouseenter":
                    N("mouseleave", Y);
                    break;
                  case "focus":
                    N(tt ? "focusout" : "blur", U);
                    break;
                  case "focusin":
                    N("focusout", U);
                }
            });
        }
        function X() {
          f.forEach(function (e) {
            var t = e.node,
              i = e.eventType,
              s = e.handler,
              n = e.options;
            t.removeEventListener(i, s, n);
          }),
            (f = []);
        }
        function j(e) {
          var t,
            i = !1;
          if (b.state.isEnabled && !Z(e) && !h) {
            var s = "focus" === (null == (t = o) ? void 0 : t.type);
            (o = e),
              (l = e.currentTarget),
              $(),
              !b.state.isVisible &&
                We(e) &&
                pt.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (b.props.trigger.indexOf("mouseenter") < 0 || u) &&
              !1 !== b.props.hideOnClick &&
              b.state.isVisible
                ? (i = !0)
                : ee(e),
              "click" === e.type && (u = !i),
              i && !s && te(e);
          }
        }
        function q(e) {
          var t = e.target,
            i = O().contains(t) || x.contains(t);
          if ("mousemove" !== e.type || !i) {
            var s = Q()
              .concat(x)
              .map(function (e) {
                var t,
                  i = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return i
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: i,
                      props: d,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var i = t.clientX,
                s = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  n = e.popperState,
                  o = e.props.interactiveBorder,
                  r = Ge(n.placement),
                  a = n.modifiersData.offset;
                if (!a) return !0;
                var l = "bottom" === r ? a.top.y : 0,
                  c = "top" === r ? a.bottom.y : 0,
                  d = "right" === r ? a.left.x : 0,
                  u = "left" === r ? a.right.x : 0,
                  h = t.top - s + l > o,
                  p = s - t.bottom - c > o,
                  g = t.left - i + d > o,
                  f = i - t.right - u > o;
                return h || p || g || f;
              });
            })(s, e) && (_(), te(e));
          }
        }
        function Y(e) {
          Z(e) ||
            (b.props.trigger.indexOf("click") >= 0 && u) ||
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
          return !!Ze.isTouch && I() !== e.type.indexOf("touch") >= 0;
        }
        function K() {
          J();
          var t = b.props,
            i = t.popperOptions,
            s = t.placement,
            n = t.offset,
            o = t.getReferenceClientRect,
            r = t.moveTransition,
            l = L() ? dt(x).arrow : null,
            c = o
              ? {
                  getBoundingClientRect: o,
                  contextElement: o.contextElement || O(),
                }
              : e,
            d = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (L()) {
                  var i = A().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? i.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? i.setAttribute("data-" + e, "")
                        : i.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            u = [
              { name: "offset", options: { offset: n } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !r } },
              d,
            ];
          L() &&
            l &&
            u.push({ name: "arrow", options: { element: l, padding: 3 } }),
            u.push.apply(u, (null == i ? void 0 : i.modifiers) || []),
            (b.popperInstance = Ce(
              c,
              x,
              Object.assign({}, i, {
                placement: s,
                onFirstUpdate: a,
                modifiers: u,
              })
            ));
        }
        function J() {
          b.popperInstance &&
            (b.popperInstance.destroy(), (b.popperInstance = null));
        }
        function Q() {
          return Be(x.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          b.clearDelayTimeouts(), e && k("onTrigger", [b, e]), F();
          var t = z(!0),
            s = E(),
            n = s[0],
            o = s[1];
          Ze.isTouch && "hold" === n && o && (t = o),
            t
              ? (i = setTimeout(function () {
                  b.show();
                }, t))
              : b.show();
        }
        function te(e) {
          if (
            (b.clearDelayTimeouts(),
            k("onUntrigger", [b, e]),
            b.state.isVisible)
          ) {
            if (
              !(
                b.props.trigger.indexOf("mouseenter") >= 0 &&
                b.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                u
              )
            ) {
              var t = z(!1);
              t
                ? (s = setTimeout(function () {
                    b.state.isVisible && b.hide();
                  }, t))
                : (n = requestAnimationFrame(function () {
                    b.hide();
                  }));
            }
          } else H();
        }
      }
      function mt(e, t) {
        void 0 === t && (t = {});
        var i = st.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Je, Me),
          window.addEventListener("blur", et);
        var s = Object.assign({}, t, { plugins: i }),
          n = Re(e).reduce(function (e, t) {
            var i = t && ft(t, s);
            return i && e.push(i), e;
          }, []);
        return He(e) ? n[0] : n;
      }
      (mt.defaultProps = st),
        (mt.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            st[t] = e[t];
          });
        }),
        (mt.currentInput = Ze);
      Object.assign({}, re, {
        effect: function (e) {
          var t = e.state,
            i = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          Object.assign(t.elements.popper.style, i.popper),
            (t.styles = i),
            t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
        },
      });
      mt.setDefaultProps({ render: ut });
      function vt(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function yt(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : vt(t[i]) &&
              vt(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              yt(e[i], t[i]);
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
      function St() {
        const e = "undefined" != typeof window ? window : {};
        return yt(e, xt), e;
      }
      class Tt extends Array {
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
      function It(e, t) {
        const i = St(),
          s = wt();
        let n = [];
        if (!t && e instanceof Tt) return e;
        if (!e) return new Tt(n);
        if ("string" == typeof e) {
          const i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            let e = "div";
            0 === i.indexOf("<li") && (e = "ul"),
              0 === i.indexOf("<tr") && (e = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
              0 === i.indexOf("<tbody") && (e = "table"),
              0 === i.indexOf("<option") && (e = "select");
            const t = s.createElement(e);
            t.innerHTML = i;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const i = [],
                s = t.querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) i.push(s[e]);
              return i;
            })(e.trim(), t || s);
        } else if (e.nodeType || e === i || e === s) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof Tt) return e;
          n = e;
        }
        return new Tt(
          (function (e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1)
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
          })(n)
        );
      }
      It.fn = Tt.prototype;
      const Lt = "resize scroll".split(" ");
      function Ot(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              Lt.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : It(this[t]).trigger(e));
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
      const Mt = {
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
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (const t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
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
          let [t, i, s, n] = e;
          function o(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), It(t).is(i))) s.apply(t, n);
            else {
              const e = It(t).parents();
              for (let t = 0; t < e.length; t += 1)
                It(e[t]).is(i) && s.apply(e[t], n);
            }
          }
          function r(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
          }
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: s,
                    proxyListener: o,
                  }),
                  t.addEventListener(e, o, n);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: s, proxyListener: r }),
                  t.addEventListener(e, r, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, i, s, n] = e;
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const o = t.split(" ");
          for (let e = 0; e < o.length; e += 1) {
            const t = o[e];
            for (let e = 0; e < this.length; e += 1) {
              const o = this[e];
              let r;
              if (
                (!i && o.dom7Listeners
                  ? (r = o.dom7Listeners[t])
                  : i && o.dom7LiveListeners && (r = o.dom7LiveListeners[t]),
                r && r.length)
              )
                for (let e = r.length - 1; e >= 0; e -= 1) {
                  const i = r[e];
                  (s && i.listener === s) ||
                  (s &&
                    i.listener &&
                    i.listener.dom7proxy &&
                    i.listener.dom7proxy === s)
                    ? (o.removeEventListener(t, i.proxyListener, n),
                      r.splice(e, 1))
                    : s ||
                      (o.removeEventListener(t, i.proxyListener, n),
                      r.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = St(),
            i = e[0].split(" "),
            s = e[1];
          for (let n = 0; n < i.length; n += 1) {
            const o = i[n];
            for (let i = 0; i < this.length; i += 1) {
              const n = this[i];
              if (t.CustomEvent) {
                const i = new t.CustomEvent(o, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(i),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function i(s) {
                s.target === this &&
                  (e.call(this, s), t.off("transitionend", i));
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
          const e = St();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = St(),
              t = wt(),
              i = this[0],
              s = i.getBoundingClientRect(),
              n = t.body,
              o = i.clientTop || n.clientTop || 0,
              r = i.clientLeft || n.clientLeft || 0,
              a = i === e ? e.scrollY : i.scrollTop,
              l = i === e ? e.scrollX : i.scrollLeft;
            return { top: s.top + a - o, left: s.left + l - r };
          }
          return null;
        },
        css: function (e, t) {
          const i = St();
          let s;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (s = 0; s < this.length; s += 1)
                for (const t in e) this[s].style[t] = e[t];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, i) => {
                e.apply(t, [t, i]);
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
          const t = St(),
            i = wt(),
            s = this[0];
          let n, o;
          if (!s || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (n = It(e), o = 0; o < n.length; o += 1)
              if (n[o] === s) return !0;
            return !1;
          }
          if (e === i) return s === i;
          if (e === t) return s === t;
          if (e.nodeType || e instanceof Tt) {
            for (n = e.nodeType ? [e] : e, o = 0; o < n.length; o += 1)
              if (n[o] === s) return !0;
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
          if (e > t - 1) return It([]);
          if (e < 0) {
            const i = t + e;
            return It(i < 0 ? [] : [this[i]]);
          }
          return It([this[e]]);
        },
        append: function (...e) {
          let t;
          const i = wt();
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const s = i.createElement("div");
                for (s.innerHTML = t; s.firstChild; )
                  this[e].appendChild(s.firstChild);
              } else if (t instanceof Tt)
                for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = wt();
          let i, s;
          for (i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
                this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
            } else if (e instanceof Tt)
              for (s = 0; s < e.length; s += 1)
                this[i].insertBefore(e[s], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                It(this[0].nextElementSibling).is(e)
                ? It([this[0].nextElementSibling])
                : It([])
              : this[0].nextElementSibling
              ? It([this[0].nextElementSibling])
              : It([])
            : It([]);
        },
        nextAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return It([]);
          for (; i.nextElementSibling; ) {
            const s = i.nextElementSibling;
            e ? It(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return It(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && It(t.previousElementSibling).is(e)
                ? It([t.previousElementSibling])
                : It([])
              : t.previousElementSibling
              ? It([t.previousElementSibling])
              : It([]);
          }
          return It([]);
        },
        prevAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return It([]);
          for (; i.previousElementSibling; ) {
            const s = i.previousElementSibling;
            e ? It(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return It(t);
        },
        parent: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? It(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return It(t);
        },
        parents: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              e ? It(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          }
          return It(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? It([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e]);
          }
          return It(t);
        },
        children: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].children;
            for (let i = 0; i < s.length; i += 1)
              (e && !It(s[i]).is(e)) || t.push(s[i]);
          }
          return It(t);
        },
        filter: function (e) {
          return It(Et(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Mt).forEach((e) => {
        Object.defineProperty(It.fn, e, { value: Mt[e], writable: !0 });
      });
      const At = It;
      function zt(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function Pt() {
        return Date.now();
      }
      function kt(e, t) {
        void 0 === t && (t = "x");
        const i = St();
        let s, n, o;
        const r = (function (e) {
          const t = St();
          let i;
          return (
            t.getComputedStyle && (i = t.getComputedStyle(e, null)),
            !i && e.currentStyle && (i = e.currentStyle),
            i || (i = e.style),
            i
          );
        })(e);
        return (
          i.WebKitCSSMatrix
            ? ((n = r.transform || r.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (o = new i.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((o =
                r.MozTransform ||
                r.OTransform ||
                r.MsTransform ||
                r.msTransform ||
                r.transform ||
                r
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (s = o.toString().split(","))),
          "x" === t &&
            (n = i.WebKitCSSMatrix
              ? o.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          "y" === t &&
            (n = i.WebKitCSSMatrix
              ? o.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          n || 0
        );
      }
      function Dt(e) {
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
      function _t() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != s && !$t(s)) {
            const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, n = i.length; t < n; t += 1) {
              const n = i[t],
                o = Object.getOwnPropertyDescriptor(s, n);
              void 0 !== o &&
                o.enumerable &&
                (Dt(e[n]) && Dt(s[n])
                  ? s[n].__swiper__
                    ? (e[n] = s[n])
                    : _t(e[n], s[n])
                  : !Dt(e[n]) && Dt(s[n])
                  ? ((e[n] = {}),
                    s[n].__swiper__ ? (e[n] = s[n]) : _t(e[n], s[n]))
                  : (e[n] = s[n]));
            }
          }
        }
        return e;
      }
      function Gt(e, t, i) {
        e.style.setProperty(t, i);
      }
      function Bt(e) {
        let { swiper: t, targetPosition: i, side: s } = e;
        const n = St(),
          o = -t.translate;
        let r,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(t.cssModeFrameID);
        const c = i > o ? "next" : "prev",
          d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (r = new Date().getTime()), null === a && (a = r);
            const e = Math.max(Math.min((r - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let h = o + c * (i - o);
            if ((d(h, i) && (h = i), t.wrapperEl.scrollTo({ [s]: h }), d(h, i)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [s]: h });
                }),
                void n.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = n.requestAnimationFrame(u);
          };
        u();
      }
      let Vt, Ft, Ht;
      function Wt() {
        return (
          Vt ||
            (Vt = (function () {
              const e = St(),
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
                    const i = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, i);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Vt
        );
      }
      function Nt(e) {
        return (
          void 0 === e && (e = {}),
          Ft ||
            (Ft = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const i = Wt(),
                s = St(),
                n = s.navigator.platform,
                o = t || s.navigator.userAgent,
                r = { ios: !1, android: !1 },
                a = s.screen.width,
                l = s.screen.height,
                c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
              let d = o.match(/(iPad).*OS\s([\d_]+)/);
              const u = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === n;
              let g = "MacIntel" === n;
              return (
                !d &&
                  g &&
                  i.touch &&
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
                  ((d = o.match(/(Version)\/([\d.]+)/)),
                  d || (d = [0, 1, "13_0_0"]),
                  (g = !1)),
                c && !p && ((r.os = "android"), (r.android = !0)),
                (d || h || u) && ((r.os = "ios"), (r.ios = !0)),
                r
              );
            })(e)),
          Ft
        );
      }
      function Rt() {
        return (
          Ht ||
            (Ht = (function () {
              const e = St();
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
          Ht
        );
      }
      const Xt = {
        on(e, t, i) {
          const s = this;
          if ("function" != typeof t) return s;
          const n = i ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][n](t);
            }),
            s
          );
        },
        once(e, t, i) {
          const s = this;
          if ("function" != typeof t) return s;
          function n() {
            s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
              o[r] = arguments[r];
            t.apply(s, o);
          }
          return (n.__emitterProxy = t), s.on(e, n, i);
        },
        onAny(e, t) {
          const i = this;
          if ("function" != typeof e) return i;
          const s = t ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((s, n) => {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(n, 1);
                    });
              }),
              i)
            : i;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners) return e;
          let t, i, s;
          for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          "string" == typeof o[0] || Array.isArray(o[0])
            ? ((t = o[0]), (i = o.slice(1, o.length)), (s = e))
            : ((t = o[0].events), (i = o[0].data), (s = o[0].context || e)),
            i.unshift(s);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(s, [t, ...i]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(s, i);
                  });
            }),
            e
          );
        },
      };
      const jt = {
        updateSize: function () {
          const e = this;
          let t, i;
          const s = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : s[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((t =
                t -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
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
          function i(e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          }
          const s = e.params,
            { $wrapperEl: n, size: o, rtlTranslate: r, wrongRTL: a } = e,
            l = e.virtual && s.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = n.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let h = [];
          const p = [],
            g = [];
          let f = s.slidesOffsetBefore;
          "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
          let m = s.slidesOffsetAfter;
          "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = s.spaceBetween,
            w = -f,
            x = 0,
            S = 0;
          if (void 0 === o) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * o),
            (e.virtualSize = -b),
            r
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            s.centeredSlides &&
              s.cssMode &&
              (Gt(e.wrapperEl, "--swiper-centered-offset-before", ""),
              Gt(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const T = s.grid && s.grid.rows > 1 && e.grid;
          let C;
          T && e.grid.initSlides(u);
          const E =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => void 0 !== s.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < u; n += 1) {
            C = 0;
            const r = d.eq(n);
            if (
              (T && e.grid.updateSlide(n, r, u, t), "none" !== r.css("display"))
            ) {
              if ("auto" === s.slidesPerView) {
                E && (d[n].style[t("width")] = "");
                const o = getComputedStyle(r[0]),
                  a = r[0].style.transform,
                  l = r[0].style.webkitTransform;
                if (
                  (a && (r[0].style.transform = "none"),
                  l && (r[0].style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  C = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                else {
                  const e = i(o, "width"),
                    t = i(o, "padding-left"),
                    s = i(o, "padding-right"),
                    n = i(o, "margin-left"),
                    a = i(o, "margin-right"),
                    l = o.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + n + a;
                  else {
                    const { clientWidth: i, offsetWidth: o } = r[0];
                    C = e + t + s + n + a + (o - i);
                  }
                }
                a && (r[0].style.transform = a),
                  l && (r[0].style.webkitTransform = l),
                  s.roundLengths && (C = Math.floor(C));
              } else
                (C = (o - (s.slidesPerView - 1) * b) / s.slidesPerView),
                  s.roundLengths && (C = Math.floor(C)),
                  d[n] && (d[n].style[t("width")] = `${C}px`);
              d[n] && (d[n].swiperSlideSize = C),
                g.push(C),
                s.centeredSlides
                  ? ((w = w + C / 2 + x / 2 + b),
                    0 === x && 0 !== n && (w = w - o / 2 - b),
                    0 === n && (w = w - o / 2 - b),
                    Math.abs(w) < 0.001 && (w = 0),
                    s.roundLengths && (w = Math.floor(w)),
                    S % s.slidesPerGroup == 0 && h.push(w),
                    p.push(w))
                  : (s.roundLengths && (w = Math.floor(w)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(w),
                    p.push(w),
                    (w = w + C + b)),
                (e.virtualSize += C + b),
                (x = C),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, o) + m),
            r &&
              a &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
            T && e.grid.updateWrapperSize(C, h, t),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < h.length; i += 1) {
              let n = h[i];
              s.roundLengths && (n = Math.floor(n)),
                h[i] <= e.virtualSize - o && t.push(n);
            }
            (h = t),
              Math.floor(e.virtualSize - o) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - o);
          }
          if ((0 === h.length && (h = [0]), 0 !== s.spaceBetween)) {
            const i = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
              [i]: `${b}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            g.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (e -= s.spaceBetween);
            const t = e - o;
            h = h.map((e) => (e < 0 ? -f : e > t ? t + m : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (
              (g.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (e -= s.spaceBetween),
              e < o)
            ) {
              const t = (o - e) / 2;
              h.forEach((e, i) => {
                h[i] = e - t;
              }),
                p.forEach((e, i) => {
                  p[i] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: h,
              slidesGrid: p,
              slidesSizesGrid: g,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            Gt(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
              Gt(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - g[g.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + i));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            h.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== y && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
          ) {
            const t = `${s.containerModifierClass}backface-hidden`,
              i = e.$el.hasClass(t);
            u <= s.maxBackfaceHiddenSlides
              ? i || e.$el.addClass(t)
              : i && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            i = [],
            s = t.virtual && t.params.virtual.enabled;
          let n,
            o = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const r = (e) =>
            s
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                i.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !s) break;
                i.push(r(e));
              }
          else i.push(r(t.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const e = i[n].offsetHeight;
              o = e > o ? e : o;
            }
          (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = e.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            i = t.params,
            { slides: s, rtlTranslate: n, snapGrid: o } = t;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          let r = -e;
          n && (r = e),
            s.removeClass(i.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < s.length; e += 1) {
            const a = s[e];
            let l = a.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
            const c =
                (r + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              d =
                (r - o[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              u = -(r - l),
              h = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (h > 1 && h <= t.size) ||
              (u <= 0 && h >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              s.eq(e).addClass(i.slideVisibleClass)),
              (a.progress = n ? -c : c),
              (a.originalProgress = n ? -d : d);
          }
          t.visibleSlides = At(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * i) || 0;
          }
          const i = t.params,
            s = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: o, isEnd: r } = t;
          const a = o,
            l = r;
          0 === s
            ? ((n = 0), (o = !0), (r = !0))
            : ((n = (e - t.minTranslate()) / s), (o = n <= 0), (r = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: o, isEnd: r }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            o && !a && t.emit("reachBeginning toEdge"),
            r && !l && t.emit("reachEnd toEdge"),
            ((a && !o) || (l && !r)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: i,
              $wrapperEl: s,
              activeIndex: n,
              realIndex: o,
            } = e,
            r = e.virtual && i.virtual.enabled;
          let a;
          t.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
          ),
            (a = r
              ? e.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            a.addClass(i.slideActiveClass),
            i.loop &&
              (a.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(i.slideNextClass));
          let c = a
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: s,
              snapGrid: n,
              params: o,
              activeIndex: r,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < s.length; e += 1)
              void 0 !== s[e + 1]
                ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                  ? (d = e)
                  : i >= s[e] && i < s[e + 1] && (d = e + 1)
                : i >= s[e] && (d = e);
            o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(i) >= 0) c = n.indexOf(i);
          else {
            const e = Math.min(o.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / o.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === r))
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
            previousIndex: r,
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
            i = t.params,
            s = At(e).closest(`.${i.slideClass}`)[0];
          let n,
            o = !1;
          if (s)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === s) {
                (o = !0), (n = e);
                break;
              }
          if (!s || !o)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = s),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  At(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const qt = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: i,
            translate: s,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          let o = kt(n[0], e);
          return i && (o = -o), o || 0;
        },
        setTranslate: function (e, t) {
          const i = this,
            {
              rtlTranslate: s,
              params: n,
              $wrapperEl: o,
              wrapperEl: r,
              progress: a,
            } = i;
          let l,
            c = 0,
            d = 0;
          i.isHorizontal() ? (c = s ? -e : e) : (d = e),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  i.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                o.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? c : d);
          const u = i.maxTranslate() - i.minTranslate();
          (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
            l !== a && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, n) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
          const o = this,
            { params: r, wrapperEl: a } = o;
          if (o.animating && r.preventInteractionOnTransition) return !1;
          const l = o.minTranslate(),
            c = o.maxTranslate();
          let d;
          if (
            ((d = s && e > l ? l : s && e < c ? c : e),
            o.updateProgress(d),
            r.cssMode)
          ) {
            const e = o.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!o.support.smoothScroll)
                return (
                  Bt({
                    swiper: o,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(d),
                i &&
                  (o.emit("beforeTransitionStart", t, n),
                  o.emit("transitionEnd")))
              : (o.setTransition(t),
                o.setTranslate(d),
                i &&
                  (o.emit("beforeTransitionStart", t, n),
                  o.emit("transitionStart")),
                o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                    (o.onTranslateToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        (o.onTranslateToWrapperTransitionEnd = null),
                        delete o.onTranslateToWrapperTransitionEnd,
                        i && o.emit("transitionEnd"));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Yt(e) {
        let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
        const { activeIndex: o, previousIndex: r } = t;
        let a = s;
        if (
          (a || (a = o > r ? "next" : o < r ? "prev" : "reset"),
          t.emit(`transition${n}`),
          i && o !== r)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`),
            "next" === a
              ? t.emit(`slideNextTransition${n}`)
              : t.emit(`slidePrevTransition${n}`);
        }
      }
      const Ut = {
        slideTo: function (e, t, i, s, n) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
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
          const o = this;
          let r = e;
          r < 0 && (r = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: h,
            wrapperEl: p,
            enabled: g,
          } = o;
          if (
            (o.animating && a.preventInteractionOnTransition) ||
            (!g && !s && !n)
          )
            return !1;
          const f = Math.min(o.params.slidesPerGroupSkip, r);
          let m = f + Math.floor((r - f) / o.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              i &&
              o.emit("beforeSlideChangeStart");
          const v = -l[m];
          if ((o.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                i = Math.floor(100 * c[e]),
                s = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= i && t < s - (s - i) / 2
                  ? (r = e)
                  : t >= i && t < s && (r = e + 1)
                : t >= i && (r = e);
            }
          if (o.initialized && r !== u) {
            if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              v > o.translate &&
              v > o.maxTranslate() &&
              (u || 0) !== r
            )
              return !1;
          }
          let y;
          if (
            ((y = r > u ? "next" : r < u ? "prev" : "reset"),
            (h && -v === o.translate) || (!h && v === o.translate))
          )
            return (
              o.updateActiveIndex(r),
              a.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== a.effect && o.setTranslate(v),
              "reset" !== y && (o.transitionStart(i, y), o.transitionEnd(i, y)),
              !1
            );
          if (a.cssMode) {
            const e = o.isHorizontal(),
              i = h ? v : -v;
            if (0 === t) {
              const t = o.virtual && o.params.virtual.enabled;
              t &&
                ((o.wrapperEl.style.scrollSnapType = "none"),
                (o._immediateVirtual = !0)),
                (p[e ? "scrollLeft" : "scrollTop"] = i),
                t &&
                  requestAnimationFrame(() => {
                    (o.wrapperEl.style.scrollSnapType = ""),
                      (o._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!o.support.smoothScroll)
                return (
                  Bt({
                    swiper: o,
                    targetPosition: i,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            o.setTransition(t),
            o.setTranslate(v),
            o.updateActiveIndex(r),
            o.updateSlidesClasses(),
            o.emit("beforeTransitionStart", t, s),
            o.transitionStart(i, y),
            0 === t
              ? o.transitionEnd(i, y)
              : o.animating ||
                ((o.animating = !0),
                o.onSlideToWrapperTransitionEnd ||
                  (o.onSlideToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      (o.onSlideToWrapperTransitionEnd = null),
                      delete o.onSlideToWrapperTransitionEnd,
                      o.transitionEnd(i, y));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          const n = this;
          let o = e;
          return n.params.loop && (o += n.loopedSlides), n.slideTo(o, t, i, s);
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            { animating: n, enabled: o, params: r } = s;
          if (!o) return s;
          let a = r.slidesPerGroup;
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : a;
          if (r.loop) {
            if (n && r.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return r.rewind && s.isEnd
            ? s.slideTo(0, e, t, i)
            : s.slideTo(s.activeIndex + l, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            {
              params: n,
              animating: o,
              snapGrid: r,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = s;
          if (!c) return s;
          if (n.loop) {
            if (o && n.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? s.translate : -s.translate),
            h = r.map((e) => d(e));
          let p = r[h.indexOf(u) - 1];
          if (void 0 === p && n.cssMode) {
            let e;
            r.forEach((t, i) => {
              u >= t && (e = i);
            }),
              void 0 !== e && (p = r[e > 0 ? e - 1 : e]);
          }
          let g = 0;
          if (
            (void 0 !== p &&
              ((g = a.indexOf(p)),
              g < 0 && (g = s.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((g = g - s.slidesPerViewDynamic("previous", !0) + 1),
                (g = Math.max(g, 0)))),
            n.rewind && s.isBeginning)
          ) {
            const n =
              s.params.virtual && s.params.virtual.enabled && s.virtual
                ? s.virtual.slides.length - 1
                : s.slides.length - 1;
            return s.slideTo(n, e, t, i);
          }
          return s.slideTo(g, e, t, i);
        },
        slideReset: function (e, t, i) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
          );
        },
        slideToClosest: function (e, t, i, s) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = 0.5);
          const n = this;
          let o = n.activeIndex;
          const r = Math.min(n.params.slidesPerGroupSkip, o),
            a = r + Math.floor((o - r) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[a]) {
            const e = n.snapGrid[a];
            l - e > (n.snapGrid[a + 1] - e) * s &&
              (o += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[a - 1];
            l - e <= (n.snapGrid[a] - e) * s && (o -= n.params.slidesPerGroup);
          }
          return (
            (o = Math.max(o, 0)),
            (o = Math.min(o, n.slidesGrid.length - 1)),
            n.slideTo(o, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: i } = e,
            s =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            o = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              At(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? o < e.loopedSlides - s / 2 ||
                  o > e.slides.length - e.loopedSlides + s / 2
                  ? (e.loopFix(),
                    (o = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    zt(() => {
                      e.slideTo(o);
                    }))
                  : e.slideTo(o)
                : o > e.slides.length - s
                ? (e.loopFix(),
                  (o = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  zt(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o);
          } else e.slideTo(o);
        },
      };
      const Zt = {
        loopCreate: function () {
          const e = this,
            t = wt(),
            { params: i, $wrapperEl: s } = e,
            n = s.children().length > 0 ? At(s.children()[0].parentNode) : s;
          n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let o = n.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const e = i.slidesPerGroup - (o.length % i.slidesPerGroup);
            if (e !== i.slidesPerGroup) {
              for (let s = 0; s < e; s += 1) {
                const e = At(t.createElement("div")).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`
                );
                n.append(e);
              }
              o = n.children(`.${i.slideClass}`);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = o.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > o.length && (e.loopedSlides = o.length);
          const r = [],
            a = [];
          o.each((t, i) => {
            const s = At(t);
            i < e.loopedSlides && a.push(t),
              i < o.length && i >= o.length - e.loopedSlides && r.push(t),
              s.attr("data-swiper-slide-index", i);
          });
          for (let e = 0; e < a.length; e += 1)
            n.append(At(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let e = r.length - 1; e >= 0; e -= 1)
            n.prepend(At(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: i,
            loopedSlides: s,
            allowSlidePrev: n,
            allowSlideNext: o,
            snapGrid: r,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -r[t] - e.getTranslate();
          if (t < s) {
            (l = i.length - 3 * s + t), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= i.length - s) {
            (l = -i.length + t + s), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = o), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: i } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
      function Kt(e) {
        const t = this,
          i = wt(),
          s = St(),
          n = t.touchEventsData,
          { params: o, touches: r, enabled: a } = t;
        if (!a) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = At(l.target);
        if ("wrapper" === o.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!o.noSwipingClass &&
          "" !== o.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = At(e.path[0]));
        const d = o.noSwipingSelector
            ? o.noSwipingSelector
            : `.${o.noSwipingClass}`,
          u = !(!l.target || !l.target.shadowRoot);
        if (
          o.noSwiping &&
          (u
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    return i && i !== wt() && i !== St()
                      ? (i.assignedSlot && (i = i.assignedSlot),
                        i.closest(e) || t(i.getRootNode().host))
                      : null;
                  })(t)
                );
              })(d, l.target)
            : c.closest(d)[0])
        )
          return void (t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)[0]) return;
        (r.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (r.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const h = r.currentX,
          p = r.currentY,
          g = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
          f = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
        if (g && (h <= f || h >= s.innerWidth - f)) {
          if ("prevent" !== g) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (r.startX = h),
          (r.startY = p),
          (n.touchStartTime = Pt()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          o.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(n.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
            i.activeElement &&
              At(i.activeElement).is(n.focusableElements) &&
              i.activeElement !== c[0] &&
              i.activeElement.blur();
          const s = e && t.allowTouchMove && o.touchStartPreventDefault;
          (!o.touchStartForcePreventDefault && !s) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !o.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function Jt(e) {
        const t = wt(),
          i = this,
          s = i.touchEventsData,
          { params: n, touches: o, rtlTranslate: r, enabled: a } = i;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
          return void (
            s.startMoving &&
            s.isScrolling &&
            i.emit("touchMoveOpposite", l)
          );
        if (s.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (o.startX = d), void (o.startY = u);
        if (!i.allowTouchMove)
          return (
            At(l.target).is(s.focusableElements) || (i.allowClick = !1),
            void (
              s.isTouched &&
              (Object.assign(o, {
                startX: d,
                startY: u,
                currentX: d,
                currentY: u,
              }),
              (s.touchStartTime = Pt()))
            )
          );
        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (i.isVertical()) {
            if (
              (u < o.startY && i.translate <= i.maxTranslate()) ||
              (u > o.startY && i.translate >= i.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (d < o.startX && i.translate <= i.maxTranslate()) ||
            (d > o.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          s.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          At(l.target).is(s.focusableElements)
        )
          return (s.isMoved = !0), void (i.allowClick = !1);
        if (
          (s.allowTouchCallbacks && i.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (o.currentX = d), (o.currentY = u);
        const h = o.currentX - o.startX,
          p = o.currentY - o.startY;
        if (
          i.params.threshold &&
          Math.sqrt(h ** 2 + p ** 2) < i.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (i.isHorizontal() && o.currentY === o.startY) ||
          (i.isVertical() && o.currentX === o.startX)
            ? (s.isScrolling = !1)
            : h * h + p * p >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
              (s.isScrolling = i.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && i.emit("touchMoveOpposite", l),
          void 0 === s.startMoving &&
            ((o.currentX === o.startX && o.currentY === o.startY) ||
              (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          s.isMoved ||
            (n.loop && !n.cssMode && i.loopFix(),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating &&
              i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit("sliderFirstMove", l)),
          i.emit("sliderMove", l),
          (s.isMoved = !0);
        let g = i.isHorizontal() ? h : p;
        (o.diff = g),
          (g *= n.touchRatio),
          r && (g = -g),
          (i.swipeDirection = g > 0 ? "prev" : "next"),
          (s.currentTranslate = g + s.startTranslate);
        let f = !0,
          m = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (m = 0),
          g > 0 && s.currentTranslate > i.minTranslate()
            ? ((f = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + g) ** m))
            : g < 0 &&
              s.currentTranslate < i.maxTranslate() &&
              ((f = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - g) ** m)),
          f && (l.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            "next" === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            "prev" === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(g) > n.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (o.startX = o.currentX),
              (o.startY = o.currentY),
              (s.currentTranslate = s.startTranslate),
              void (o.diff = i.isHorizontal()
                ? o.currentX - o.startX
                : o.currentY - o.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
            n.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            n.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function Qt(e) {
        const t = this,
          i = t.touchEventsData,
          {
            params: s,
            touches: n,
            rtlTranslate: o,
            slidesGrid: r,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", l),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = Pt(),
          d = c - i.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - i.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((i.lastClickTime = Pt()),
          zt(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        let u;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (u = s.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          s.cssMode)
        )
          return;
        if (t.params.freeMode && s.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let h = 0,
          p = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < r.length;
          e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== r[e + t]
            ? u >= r[e] && u < r[e + t] && ((h = e), (p = r[e + t] - r[e]))
            : u >= r[e] && ((h = e), (p = r[r.length - 1] - r[r.length - 2]));
        }
        let g = null,
          f = null;
        s.rewind &&
          (t.isBeginning
            ? (f =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (g = 0));
        const m = (u - r[h]) / p,
          v = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= s.longSwipesRatio
              ? t.slideTo(s.rewind && t.isEnd ? g : h + v)
              : t.slideTo(h)),
            "prev" === t.swipeDirection &&
              (m > 1 - s.longSwipesRatio
                ? t.slideTo(h + v)
                : null !== f && m < 0 && Math.abs(m) > s.longSwipesRatio
                ? t.slideTo(f)
                : t.slideTo(h));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(h + v)
              : t.slideTo(h)
            : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + v),
              "prev" === t.swipeDirection && t.slideTo(null !== f ? f : h));
        }
      }
      function ei() {
        const e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: s, allowSlidePrev: n, snapGrid: o } = e;
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
          (e.allowSlidePrev = n),
          (e.allowSlideNext = s),
          e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
      }
      function ti(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function ii() {
        const e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
        if (!s) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const o = e.maxTranslate() - e.minTranslate();
        (n = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
          n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let si = !1;
      function ni() {}
      const oi = (e, t) => {
        const i = wt(),
          {
            params: s,
            touchEvents: n,
            el: o,
            wrapperEl: r,
            device: a,
            support: l,
          } = e,
          c = !!s.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !s.passiveListeners
          ) && { passive: !0, capture: !1 };
          o[d](n.start, e.onTouchStart, t),
            o[d](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            o[d](n.end, e.onTouchEnd, t),
            n.cancel && o[d](n.cancel, e.onTouchEnd, t);
        } else
          o[d](n.start, e.onTouchStart, !1),
            i[d](n.move, e.onTouchMove, c),
            i[d](n.end, e.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) &&
          o[d]("click", e.onClick, !0),
          s.cssMode && r[d]("scroll", e.onScroll),
          s.updateOnWindowResize
            ? e[u](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                ei,
                !0
              )
            : e[u]("observerUpdate", ei, !0);
      };
      const ri = {
          attachEvents: function () {
            const e = this,
              t = wt(),
              { params: i, support: s } = e;
            (e.onTouchStart = Kt.bind(e)),
              (e.onTouchMove = Jt.bind(e)),
              (e.onTouchEnd = Qt.bind(e)),
              i.cssMode && (e.onScroll = ii.bind(e)),
              (e.onClick = ti.bind(e)),
              s.touch &&
                !si &&
                (t.addEventListener("touchstart", ni), (si = !0)),
              oi(e, "on");
          },
          detachEvents: function () {
            oi(this, "off");
          },
        },
        ai = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const li = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: i,
              loopedSlides: s = 0,
              params: n,
              $el: o,
            } = e,
            r = n.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in r ? r[a] : void 0) || e.originalParams,
            c = ai(e, n),
            d = ai(e, l),
            u = n.enabled;
          c && !d
            ? (o.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (o.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                o.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const h = l.direction && l.direction !== n.direction,
            p = n.loop && (l.slidesPerView !== n.slidesPerView || h);
          h && i && e.changeDirection(), _t(e.params, l);
          const g = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !g ? e.disable() : !u && g && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            p &&
              i &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - s + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, i) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
            return;
          let s = !1;
          const n = St(),
            o = "window" === t ? n.innerHeight : i.clientHeight,
            r = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: o * t, point: e };
              }
              return { value: e, point: e };
            });
          r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < r.length; e += 1) {
            const { point: o, value: a } = r[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = o)
              : a <= i.clientWidth && (s = o);
          }
          return s || "max";
        },
      };
      const ci = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: i,
              rtl: s,
              $el: n,
              device: o,
              support: r,
            } = e,
            a = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((s) => {
                        e[s] && i.push(t + s);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "pointer-events": !r.touch },
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: o.android },
                { ios: o.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
              ],
              i.containerModifierClass
            );
          t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const di = {
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
      function ui(e, t) {
        return function (i) {
          void 0 === i && (i = {});
          const s = Object.keys(i)[0],
            n = i[s];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                !0 === e[s] &&
                (e[s] = { auto: !0 }),
              s in e && "enabled" in n
                ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                  "object" != typeof e[s] ||
                    "enabled" in e[s] ||
                    (e[s].enabled = !0),
                  e[s] || (e[s] = { enabled: !1 }),
                  _t(t, i))
                : _t(t, i))
            : _t(t, i);
        };
      }
      const hi = {
          eventsEmitter: Xt,
          update: jt,
          translate: qt,
          transition: {
            setTransition: function (e, t) {
              const i = this;
              i.params.cssMode || i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const i = this,
                { params: s } = i;
              s.cssMode ||
                (s.autoHeight && i.updateAutoHeight(),
                Yt({
                  swiper: i,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const i = this,
                { params: s } = i;
              (i.animating = !1),
                s.cssMode ||
                  (i.setTransition(0),
                  Yt({
                    swiper: i,
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
              const i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (i.style.cursor = "move"),
                (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (i.style.cursor = e ? "grabbing" : "grab");
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
          events: ri,
          breakpoints: li,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: s } = i;
              if (s) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: ci,
          images: {
            loadImage: function (e, t, i, s, n, o) {
              const r = St();
              let a;
              function l() {
                o && o();
              }
              At(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((a = new r.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  s && (a.sizes = s),
                  i && (a.srcset = i),
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
              for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                const s = e.imagesToLoad[i];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        pi = {};
      class gi {
        constructor() {
          let e, t;
          for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
            s[n] = arguments[n];
          if (
            (1 === s.length &&
            s[0].constructor &&
            "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
              ? (t = s[0])
              : ([e, t] = s),
            t || (t = {}),
            (t = _t({}, t)),
            e && !t.el && (t.el = e),
            t.el && At(t.el).length > 1)
          ) {
            const e = [];
            return (
              At(t.el).each((i) => {
                const s = _t({}, t, { el: i });
                e.push(new gi(s));
              }),
              e
            );
          }
          const o = this;
          (o.__swiper__ = !0),
            (o.support = Wt()),
            (o.device = Nt({ userAgent: t.userAgent })),
            (o.browser = Rt()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            (o.modules = [...o.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              o.modules.push(...t.modules);
          const r = {};
          o.modules.forEach((e) => {
            e({
              swiper: o,
              extendParams: ui(t, r),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o),
            });
          });
          const a = _t({}, di, r);
          return (
            (o.params = _t({}, a, pi, t)),
            (o.originalParams = _t({}, o.params)),
            (o.passedParams = _t({}, t)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach((e) => {
                o.on(e, o.params.on[e]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            (o.$ = At),
            Object.assign(o, {
              enabled: o.params.enabled,
              el: e,
              classNames: [],
              slides: At(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === o.params.direction,
              isVertical: () => "vertical" === o.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (o.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (o.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  o.support.touch || !o.params.simulateTouch
                    ? o.touchEventsTouch
                    : o.touchEventsDesktop
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
                focusableElements: o.params.focusableElements,
                lastClickTime: Pt(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
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
            o.emit("_swiper"),
            o.params.init && o.init(),
            o
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
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const s = i.minTranslate(),
            n = (i.maxTranslate() - s) * e + s;
          i.translateTo(n, void 0 === t ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
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
          e.slides.each((i) => {
            const s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: i,
            slides: s,
            slidesGrid: n,
            slidesSizesGrid: o,
            size: r,
            activeIndex: a,
          } = this;
          let l = 1;
          if (i.centeredSlides) {
            let e,
              t = s[a].swiperSlideSize;
            for (let i = a + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > r && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > r && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < s.length; e += 1) {
              (t ? n[e] + o[e] - n[a] < r : n[e] - n[a] < r) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              n[a] - n[e] < r && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (s(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || s()),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const i = this,
            s = i.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${s}`)
                .addClass(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              i.emit("changeDirection"),
              t && i.update()),
            i
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const i = At(e || t.params.el);
          if (!(e = i[0])) return !1;
          e.swiper = t;
          const s = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = At(e.shadowRoot.querySelector(s()));
              return (t.children = (e) => i.children(e)), t;
            }
            return i.children(s());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = wt().createElement("div");
            (n = At(e)),
              (e.className = t.params.wrapperClass),
              i.append(e),
              i.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: i,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
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
          const i = this,
            { params: s, $el: n, $wrapperEl: o, slides: r } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                n.removeAttr("style"),
                o.removeAttr("style"),
                r &&
                  r.length &&
                  r
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
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
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          _t(pi, e);
        }
        static get extendedDefaults() {
          return pi;
        }
        static get defaults() {
          return di;
        }
        static installModule(e) {
          gi.prototype.__modules__ || (gi.prototype.__modules__ = []);
          const t = gi.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => gi.installModule(e)), gi)
            : (gi.installModule(e), gi);
        }
      }
      Object.keys(hi).forEach((e) => {
        Object.keys(hi[e]).forEach((t) => {
          gi.prototype[t] = hi[e][t];
        });
      }),
        gi.use([
          function (e) {
            let { swiper: t, on: i, emit: s } = e;
            const n = St();
            let o = null,
              r = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && s("orientationchange");
              };
            i("init", () => {
              t.params.resizeObserver && void 0 !== n.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((o = new ResizeObserver((e) => {
                    r = n.requestAnimationFrame(() => {
                      const { width: i, height: s } = t;
                      let n = i,
                        o = s;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: s,
                          target: r,
                        } = e;
                        (r && r !== t.el) ||
                          ((n = s ? s.width : (i[0] || i).inlineSize),
                          (o = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (n === i && o === s) || a();
                    });
                  })),
                  o.observe(t.el))
                : (n.addEventListener("resize", a),
                  n.addEventListener("orientationchange", l));
            }),
              i("destroy", () => {
                r && n.cancelAnimationFrame(r),
                  o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)),
                  n.removeEventListener("resize", a),
                  n.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: n } = e;
            const o = [],
              r = St(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const i = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                      n("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  }
                );
                i.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  o.push(i);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              s("destroy", () => {
                o.forEach((e) => {
                  e.disconnect();
                }),
                  o.splice(0, o.length);
              });
          },
        ]);
      const fi = gi;
      function mi(e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        i({
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
        let o = !1,
          r = !1;
        function a(e, i) {
          void 0 === i && (i = !0);
          const s = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const o =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            r = o.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
          !o.hasClass(s.elementClass) ||
            o.hasClass(s.loadedClass) ||
            o.hasClass(s.loadingClass) ||
            r.push(o[0]),
            0 !== r.length &&
              r.each((e) => {
                const r = At(e);
                r.addClass(s.loadingClass);
                const l = r.attr("data-background"),
                  c = r.attr("data-src"),
                  d = r.attr("data-srcset"),
                  u = r.attr("data-sizes"),
                  h = r.parent("picture");
                t.loadImage(r[0], c || l, d, u, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (l
                        ? (r.css("background-image", `url("${l}")`),
                          r.removeAttr("data-background"))
                        : (d &&
                            (r.attr("srcset", d), r.removeAttr("data-srcset")),
                          u && (r.attr("sizes", u), r.removeAttr("data-sizes")),
                          h.length &&
                            h.children("source").each((e) => {
                              const t = At(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (r.attr("src", c), r.removeAttr("data-src"))),
                      r.addClass(s.loadedClass).removeClass(s.loadingClass),
                      o.find(`.${s.preloaderClass}`).remove(),
                      t.params.loop && i)
                    ) {
                      const e = o.attr("data-swiper-slide-index");
                      if (o.hasClass(t.params.slideDuplicateClass)) {
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
                    n("lazyImageReady", o[0], r[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  n("lazyImageLoad", o[0], r[0]);
              });
        }
        function l() {
          const { $wrapperEl: e, params: i, slides: s, activeIndex: n } = t,
            o = t.virtual && i.virtual.enabled,
            l = i.lazy;
          let c = i.slidesPerView;
          function d(t) {
            if (o) {
              if (
                e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (s[t]) return !0;
            return !1;
          }
          function u(e) {
            return o ? At(e).attr("data-swiper-slide-index") : At(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            r || (r = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${i.slideVisibleClass}`).each((e) => {
              a(o ? At(e).attr("data-swiper-slide-index") : At(e).index());
            });
          else if (c > 1) for (let e = n; e < n + c; e += 1) d(e) && a(e);
          else a(n);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = c,
                i = Math.min(n + t + Math.max(e, t), s.length),
                o = Math.max(n - Math.max(t, e), 0);
              for (let e = n + c; e < i; e += 1) d(e) && a(e);
              for (let e = o; e < n; e += 1) d(e) && a(e);
            } else {
              const t = e.children(`.${i.slideNextClass}`);
              t.length > 0 && a(u(t));
              const s = e.children(`.${i.slidePrevClass}`);
              s.length > 0 && a(u(s));
            }
        }
        function c() {
          const e = St();
          if (!t || t.destroyed) return;
          const i = t.params.lazy.scrollingElement
              ? At(t.params.lazy.scrollingElement)
              : At(e),
            s = i[0] === e,
            n = s ? e.innerWidth : i[0].offsetWidth,
            r = s ? e.innerHeight : i[0].offsetHeight,
            a = t.$el.offset(),
            { rtlTranslate: d } = t;
          let u = !1;
          d && (a.left -= t.$el[0].scrollLeft);
          const h = [
            [a.left, a.top],
            [a.left + t.width, a.top],
            [a.left, a.top + t.height],
            [a.left + t.width, a.top + t.height],
          ];
          for (let e = 0; e < h.length; e += 1) {
            const t = h[e];
            if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= r) {
              if (0 === t[0] && 0 === t[1]) continue;
              u = !0;
            }
          }
          const p = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          u
            ? (l(), i.off("scroll", c, p))
            : o || ((o = !0), i.on("scroll", c, p));
        }
        s("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          s("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          s("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              l();
          }),
          s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          s("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !r)) &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          s("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          s("slideChange", () => {
            const {
              lazy: e,
              cssMode: i,
              watchSlidesProgress: s,
              touchReleaseOnEdges: n,
              resistanceRatio: o,
            } = t.params;
            e.enabled && (i || (s && (n || 0 === o))) && l();
          }),
          Object.assign(t.lazy, { load: l, loadInSlide: a });
      }
      function vi(e) {
        let t,
          { swiper: i, extendParams: s, on: n, emit: o } = e;
        function r() {
          const e = i.slides.eq(i.activeIndex);
          let s = i.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
            clearTimeout(t),
            (t = zt(() => {
              let e;
              i.params.autoplay.reverseDirection
                ? i.params.loop
                  ? (i.loopFix(),
                    (e = i.slidePrev(i.params.speed, !0, !0)),
                    o("autoplay"))
                  : i.isBeginning
                  ? i.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = i.slideTo(
                        i.slides.length - 1,
                        i.params.speed,
                        !0,
                        !0
                      )),
                      o("autoplay"))
                  : ((e = i.slidePrev(i.params.speed, !0, !0)), o("autoplay"))
                : i.params.loop
                ? (i.loopFix(),
                  (e = i.slideNext(i.params.speed, !0, !0)),
                  o("autoplay"))
                : i.isEnd
                ? i.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = i.slideTo(0, i.params.speed, !0, !0)), o("autoplay"))
                : ((e = i.slideNext(i.params.speed, !0, !0)), o("autoplay")),
                ((i.params.cssMode && i.autoplay.running) || !1 === e) && r();
            }, s));
        }
        function a() {
          return (
            void 0 === t &&
            !i.autoplay.running &&
            ((i.autoplay.running = !0), o("autoplayStart"), r(), !0)
          );
        }
        function l() {
          return (
            !!i.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (i.autoplay.running = !1),
            o("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          i.autoplay.running &&
            (i.autoplay.paused ||
              (t && clearTimeout(t),
              (i.autoplay.paused = !0),
              0 !== e && i.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    i.$wrapperEl[0].addEventListener(e, u);
                  })
                : ((i.autoplay.paused = !1), r())));
        }
        function d() {
          const e = wt();
          "hidden" === e.visibilityState && i.autoplay.running && c(),
            "visible" === e.visibilityState &&
              i.autoplay.paused &&
              (r(), (i.autoplay.paused = !1));
        }
        function u(e) {
          i &&
            !i.destroyed &&
            i.$wrapperEl &&
            e.target === i.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              i.$wrapperEl[0].removeEventListener(e, u);
            }),
            (i.autoplay.paused = !1),
            i.autoplay.running ? r() : l());
        }
        function h() {
          i.params.autoplay.disableOnInteraction
            ? l()
            : (o("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              i.$wrapperEl[0].removeEventListener(e, u);
            });
        }
        function p() {
          i.params.autoplay.disableOnInteraction ||
            ((i.autoplay.paused = !1), o("autoplayResume"), r());
        }
        (i.autoplay = { running: !1, paused: !1 }),
          s({
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
          n("init", () => {
            if (i.params.autoplay.enabled) {
              a();
              wt().addEventListener("visibilitychange", d),
                i.params.autoplay.pauseOnMouseEnter &&
                  (i.$el.on("mouseenter", h), i.$el.on("mouseleave", p));
            }
          }),
          n("beforeTransitionStart", (e, t, s) => {
            i.autoplay.running &&
              (s || !i.params.autoplay.disableOnInteraction
                ? i.autoplay.pause(t)
                : l());
          }),
          n("sliderFirstMove", () => {
            i.autoplay.running &&
              (i.params.autoplay.disableOnInteraction ? l() : c());
          }),
          n("touchEnd", () => {
            i.params.cssMode &&
              i.autoplay.paused &&
              !i.params.autoplay.disableOnInteraction &&
              r();
          }),
          n("destroy", () => {
            i.$el.off("mouseenter", h),
              i.$el.off("mouseleave", p),
              i.autoplay.running && l();
            wt().removeEventListener("visibilitychange", d);
          }),
          Object.assign(i.autoplay, { pause: c, run: r, start: a, stop: l });
      }
      function yi() {
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
        yi(),
          document.querySelector(".team") &&
            new fi(".team__slider", {
              modules: [mi, vi],
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
      new (i(732))({
        elements_selector: "[data-src]",
        class_loaded: "_lazy-loaded",
        use_native: !0,
      });
      class bi {
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
                let i = t.split("|"),
                  s = { root: i[0], margin: i[1], threshold: i[2] },
                  n = Array.from(e).filter(function (e) {
                    let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                      i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                      n = e.dataset.watchThreshold
                        ? e.dataset.watchThreshold
                        : 0;
                    if (
                      String(t) === s.root &&
                      String(i) === s.margin &&
                      String(n) === s.threshold
                    )
                      return e;
                  }),
                  o = this.getScrollWatcherConfig(s);
                this.scrollWatcherInit(n, o);
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
          const i = e.target;
          this.scrollWatcherIntersecting(e, i),
            i.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(i, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      }
      let wi = !1;
      setTimeout(() => {
        if (wi) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0);
      var xi = function () {
        return (
          (xi =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          xi.apply(this, arguments)
        );
      };
      var Si = "lgAfterAppendSlide",
        Ti = "lgInit",
        Ci = "lgHasVideo",
        Ei = "lgContainerResize",
        Ii = "lgUpdateSlides",
        Li = "lgAfterAppendSubHtml",
        Oi = "lgBeforeOpen",
        Mi = "lgAfterOpen",
        Ai = "lgSlideItemLoad",
        zi = "lgBeforeSlide",
        Pi = "lgAfterSlide",
        ki = "lgPosterClick",
        Di = "lgDragStart",
        $i = "lgDragMove",
        _i = "lgDragEnd",
        Gi = "lgBeforeNextSlide",
        Bi = "lgBeforePrevSlide",
        Vi = "lgBeforeClose",
        Fi = "lgAfterClose",
        Hi = {
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
      var Wi = (function () {
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
          (e.prototype._setCssVendorPrefix = function (e, t, i) {
            var s = t.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            });
            -1 !== this.cssVenderPrefixes.indexOf(s)
              ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
                (e.style["webkit" + s] = i),
                (e.style["moz" + s] = i),
                (e.style["ms" + s] = i),
                (e.style["o" + s] = i))
              : (e.style[s] = i);
          }),
          (e.prototype._getFirstEl = function () {
            return this.selector && void 0 !== this.selector.length
              ? this.selector[0]
              : this.selector;
          }),
          (e.prototype.isEventMatched = function (e, t) {
            var i = t.split(".");
            return e
              .split(".")
              .filter(function (e) {
                return e;
              })
              .every(function (e) {
                return -1 !== i.indexOf(e);
              });
          }),
          (e.prototype.attr = function (e, t) {
            return void 0 === t
              ? this.firstElement
                ? this.firstElement.getAttribute(e)
                : ""
              : (this._each(function (i) {
                  i.setAttribute(e, t);
                }),
                this);
          }),
          (e.prototype.find = function (e) {
            return Ni(this._getSelector(e, this.selector));
          }),
          (e.prototype.first = function () {
            return this.selector && void 0 !== this.selector.length
              ? Ni(this.selector[0])
              : Ni(this.selector);
          }),
          (e.prototype.eq = function (e) {
            return Ni(this.selector[e]);
          }),
          (e.prototype.parent = function () {
            return Ni(this.selector.parentElement);
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
            var i = this;
            return (
              this._each(function (s) {
                i._setCssVendorPrefix(s, e, t);
              }),
              this
            );
          }),
          (e.prototype.on = function (t, i) {
            var s = this;
            return this.selector
              ? (t.split(" ").forEach(function (t) {
                  Array.isArray(e.eventListeners[t]) ||
                    (e.eventListeners[t] = []),
                    e.eventListeners[t].push(i),
                    s.selector.addEventListener(t.split(".")[0], i);
                }),
                this)
              : this;
          }),
          (e.prototype.once = function (e, t) {
            var i = this;
            return (
              this.on(e, function () {
                i.off(e), t(e);
              }),
              this
            );
          }),
          (e.prototype.off = function (t) {
            var i = this;
            return this.selector
              ? (Object.keys(e.eventListeners).forEach(function (s) {
                  i.isEventMatched(t, s) &&
                    (e.eventListeners[s].forEach(function (e) {
                      i.selector.removeEventListener(s.split(".")[0], e);
                    }),
                    (e.eventListeners[s] = []));
                }),
                this)
              : this;
          }),
          (e.prototype.trigger = function (e, t) {
            if (!this.firstElement) return this;
            var i = new CustomEvent(e.split(".")[0], { detail: t || null });
            return this.firstElement.dispatchEvent(i), this;
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
              t = Ni("body").style().marginLeft;
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
      function Ni(e) {
        return (
          (function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: null };
              var i = document.createEvent("CustomEvent");
              return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
            };
          })(),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          new Wi(e)
        );
      }
      var Ri = [
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
      function Xi(e) {
        return "href" === e
          ? "src"
          : (e = (e =
              (e = e.replace("data-", "")).charAt(0).toLowerCase() +
              e.slice(1)).replace(/-([a-z])/g, function (e) {
              return e[1].toUpperCase();
            }));
      }
      var ji = function (e, t, i, s) {
          void 0 === i && (i = 0);
          var n = Ni(e).attr("data-lg-size") || s;
          if (n) {
            var o = n.split(",");
            if (o[1])
              for (var r = window.innerWidth, a = 0; a < o.length; a++) {
                var l = o[a];
                if (parseInt(l.split("-")[2], 10) > r) {
                  n = l;
                  break;
                }
                a === o.length - 1 && (n = l);
              }
            var c = n.split("-"),
              d = parseInt(c[0], 10),
              u = parseInt(c[1], 10),
              h = t.width(),
              p = t.height() - i,
              g = Math.min(h, d),
              f = Math.min(p, u),
              m = Math.min(g / d, f / u);
            return { width: d * m, height: u * m };
          }
        },
        qi = function (e, t, i, s, n) {
          if (n) {
            var o = Ni(e).find("img").first();
            if (o.get()) {
              var r = t.get().getBoundingClientRect(),
                a = r.width,
                l = t.height() - (i + s),
                c = o.width(),
                d = o.height(),
                u = o.style(),
                h =
                  (a - c) / 2 -
                  o.offset().left +
                  (parseFloat(u.paddingLeft) || 0) +
                  (parseFloat(u.borderLeft) || 0) +
                  Ni(window).scrollLeft() +
                  r.left,
                p =
                  (l - d) / 2 -
                  o.offset().top +
                  (parseFloat(u.paddingTop) || 0) +
                  (parseFloat(u.borderTop) || 0) +
                  Ni(window).scrollTop() +
                  i;
              return (
                "translate3d(" +
                (h *= -1) +
                "px, " +
                (p *= -1) +
                "px, 0) scale3d(" +
                c / n.width +
                ", " +
                d / n.height +
                ", 1)"
              );
            }
          }
        },
        Yi = function (e, t, i, s, n, o) {
          return (
            '<div class="lg-video-cont lg-has-iframe" style="width:' +
            e +
            "; max-width:" +
            i +
            "; height: " +
            t +
            "; max-height:" +
            s +
            '">\n                    <iframe class="lg-object" frameborder="0" ' +
            (o ? 'title="' + o + '"' : "") +
            ' src="' +
            n +
            '"  allowfullscreen="true"></iframe>\n                </div>'
          );
        },
        Ui = function (e, t, i, s, n, o) {
          var r =
              "<img " +
              i +
              " " +
              (s ? 'srcset="' + s + '"' : "") +
              "  " +
              (n ? 'sizes="' + n + '"' : "") +
              ' class="lg-object lg-image" data-index="' +
              e +
              '" src="' +
              t +
              '" />',
            a = "";
          o &&
            (a = ("string" == typeof o ? JSON.parse(o) : o).map(function (e) {
              var t = "";
              return (
                Object.keys(e).forEach(function (i) {
                  t += " " + i + '="' + e[i] + '"';
                }),
                "<source " + t + "></source>"
              );
            }));
          return "" + a + r;
        },
        Zi = function (e) {
          for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
            var o = e[n].split(" ");
            "" === o[0] && o.splice(0, 1), i.push(o[0]), t.push(o[1]);
          }
          for (var r = window.innerWidth, a = 0; a < t.length; a++)
            if (parseInt(t[a], 10) > r) {
              s = i[a];
              break;
            }
          return s;
        },
        Ki = function (e) {
          return !!e && !!e.complete && 0 !== e.naturalWidth;
        },
        Ji = function (e, t, i, s, n) {
          return (
            '<div class="lg-video-cont ' +
            (n && n.youtube
              ? "lg-has-youtube"
              : n && n.vimeo
              ? "lg-has-vimeo"
              : "lg-has-html5") +
            '" style="' +
            i +
            '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
            s +
            '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
            s +
            '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
            (t || "") +
            '\n            <img class="lg-object lg-video-poster" src="' +
            e +
            '" />\n        </div>'
          );
        },
        Qi = function (e, t, i, s) {
          var n = [],
            o = (function () {
              for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                e += arguments[t].length;
              var s = Array(e),
                n = 0;
              for (t = 0; t < i; t++)
                for (var o = arguments[t], r = 0, a = o.length; r < a; r++, n++)
                  s[n] = o[r];
              return s;
            })(Ri, t);
          return (
            [].forEach.call(e, function (e) {
              for (var t = {}, r = 0; r < e.attributes.length; r++) {
                var a = e.attributes[r];
                if (a.specified) {
                  var l = Xi(a.name),
                    c = "";
                  o.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
                }
              }
              var d = Ni(e),
                u = d.find("img").first().attr("alt"),
                h = d.attr("title"),
                p = s ? d.attr(s) : d.find("img").first().attr("src");
              (t.thumb = p),
                i && !t.subHtml && (t.subHtml = h || u || ""),
                (t.alt = u || h || ""),
                n.push(t);
            }),
            n
          );
        },
        es = function () {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },
        ts = function (e, t, i) {
          if (!e)
            return t
              ? { html5: !0 }
              : void console.error(
                  "lightGallery :- data-src is not provided on slide item " +
                    (i + 1) +
                    ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                );
          var s = e.match(
              /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
            ),
            n = e.match(
              /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
            ),
            o = e.match(
              /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
            );
          return s
            ? { youtube: s }
            : n
            ? { vimeo: n }
            : o
            ? { wistia: o }
            : void 0;
        },
        is = 0,
        ss = (function () {
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
              (is++,
              (this.lgId = is),
              (this.el = e),
              (this.LGel = Ni(e)),
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
                ((this.settings = xi(xi({}, Hi), e)),
                this.settings.isMobile &&
                "function" == typeof this.settings.isMobile
                  ? this.settings.isMobile()
                  : es())
              ) {
                var t = xi(
                  xi({}, this.settings.mobileSettings),
                  this.settings.mobileSettings
                );
                this.settings = xi(xi({}, this.settings), t);
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
                this.LGel.trigger(Ti, { instance: this }),
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
                    var s = i.items[t],
                      n = Ni(s),
                      o = Wi.generateUUID();
                    n.attr("data-lg-id", o).on(
                      "click.lgcustom-item-" + o,
                      function (i) {
                        i.preventDefault();
                        var n = e.settings.index || t;
                        e.openGallery(n, s);
                      }
                    );
                  },
                  i = this,
                  s = 0;
                s < this.items.length;
                s++
              )
                t(s);
            }),
            (e.prototype.buildModules = function () {
              var e = this;
              this.settings.plugins.forEach(function (t) {
                e.plugins.push(new t(e, Ni));
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
              return Ni(this.getSlideItemId(e));
            }),
            (e.prototype.getSlideItemId = function (e) {
              return "#lg-item-" + this.lgId + "-" + e;
            }),
            (e.prototype.getIdName = function (e) {
              return e + "-" + this.lgId;
            }),
            (e.prototype.getElementById = function (e) {
              return Ni("#" + this.getIdName(e));
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
                  i = "";
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
                    (i =
                      '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var s = "";
                this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                var n = this.settings.ariaLabelledby
                    ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                    : "",
                  o = this.settings.ariaDescribedby
                    ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                    : "",
                  r =
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
                    r +
                    '" id="' +
                    this.getIdName("lg-container") +
                    '" tabindex="-1" aria-modal="true" ' +
                    n +
                    " " +
                    o +
                    ' role="dialog"\n        >\n            <div id="' +
                    this.getIdName("lg-backdrop") +
                    '" class="lg-backdrop"></div>\n\n            <div id="' +
                    this.getIdName("lg-outer") +
                    '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                    s +
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
                    (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                    '\n                <div id="' +
                    this.getIdName("lg-components") +
                    '" class="lg-components">\n                    ' +
                    (".lg-sub-html" === this.settings.appendSubHtmlTo
                      ? i
                      : "") +
                    "\n                </div>\n            </div>\n        </div>\n        ";
                Ni(this.settings.container).append(c),
                  document.body !== this.settings.container &&
                    Ni(this.settings.container).css("position", "relative"),
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
                  Ni(window).on(
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
                  i = t.top,
                  s = t.bottom;
                if (
                  ((this.currentImageSize = ji(
                    this.items[this.index],
                    this.outer,
                    i + s,
                    e && this.settings.videoMaxSize
                  )),
                  e && this.resizeVideoSlide(this.index, this.currentImageSize),
                  this.zoomFromOrigin && !this.isDummyImageRemoved)
                ) {
                  var n = this.getDummyImgStyles(this.currentImageSize);
                  this.outer
                    .find(".lg-current .lg-dummy-img")
                    .first()
                    .attr("style", n);
                }
                this.LGel.trigger(Ei);
              }
            }),
            (e.prototype.resizeVideoSlide = function (e, t) {
              var i = this.getVideoContStyle(t);
              this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
            }),
            (e.prototype.updateSlides = function (e, t) {
              if (
                (this.index > e.length - 1 && (this.index = e.length - 1),
                1 === e.length && (this.index = 0),
                e.length)
              ) {
                var i = this.galleryItems[t].src;
                (this.galleryItems = e),
                  this.updateControls(),
                  this.$inner.empty(),
                  (this.currentItemsInDom = []);
                var s = 0;
                this.galleryItems.some(function (e, t) {
                  return e.src === i && ((s = t), !0);
                }),
                  (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                  this.loadContent(s, !0),
                  this.getSlideItem(s).addClass("lg-current"),
                  (this.index = s),
                  this.updateCurrentCounter(s),
                  this.LGel.trigger(Ii);
              } else this.closeGallery();
            }),
            (e.prototype.getItems = function () {
              if (((this.items = []), this.settings.dynamic))
                return this.settings.dynamicEl || [];
              if ("this" === this.settings.selector) this.items.push(this.el);
              else if (this.settings.selector)
                if ("string" == typeof this.settings.selector)
                  if (this.settings.selectWithin) {
                    var e = Ni(this.settings.selectWithin);
                    this.items = e.find(this.settings.selector).get();
                  } else
                    this.items = this.el.querySelectorAll(
                      this.settings.selector
                    );
                else this.items = this.settings.selector;
              else this.items = this.el.children;
              return Qi(
                this.items,
                this.settings.extraProps,
                this.settings.getCaptionFromTitleOrAlt,
                this.settings.exThumbImage
              );
            }),
            (e.prototype.openGallery = function (e, t) {
              var i = this;
              if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
                (this.lgOpened = !0),
                  this.outer.get().focus(),
                  this.outer.removeClass("lg-hide-items"),
                  this.$container.addClass("lg-show");
                var s = this.getItemsToBeInsertedToDom(e, e);
                this.currentItemsInDom = s;
                var n = "";
                s.forEach(function (e) {
                  n = n + '<div id="' + e + '" class="lg-item"></div>';
                }),
                  this.$inner.append(n),
                  this.addHtml(e);
                var o = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var r = this.mediaContainerPosition,
                  a = r.top,
                  l = r.bottom;
                this.settings.allowMediaOverlap ||
                  this.setMediaContainerPosition(a, l);
                var c = this.galleryItems[e].__slideVideoInfo;
                this.zoomFromOrigin &&
                  t &&
                  ((this.currentImageSize = ji(
                    t,
                    this.outer,
                    a + l,
                    c && this.settings.videoMaxSize
                  )),
                  (o = qi(t, this.outer, a, l, this.currentImageSize))),
                  (this.zoomFromOrigin && o) ||
                    (this.outer.addClass(this.settings.startClass),
                    this.getSlideItem(e).removeClass("lg-complete"));
                var d = this.settings.zoomFromOrigin
                  ? 100
                  : this.settings.backdropDuration;
                setTimeout(function () {
                  i.outer.addClass("lg-components-open");
                }, d),
                  (this.index = e),
                  this.LGel.trigger(Oi),
                  this.getSlideItem(e).addClass("lg-current"),
                  (this.lGalleryOn = !1),
                  (this.prevScrollTop = Ni(window).scrollTop()),
                  setTimeout(function () {
                    if (i.zoomFromOrigin && o) {
                      var t = i.getSlideItem(e);
                      t.css("transform", o),
                        setTimeout(function () {
                          t
                            .addClass("lg-start-progress lg-start-end-progress")
                            .css(
                              "transition-duration",
                              i.settings.startAnimationDuration + "ms"
                            ),
                            i.outer.addClass("lg-zoom-from-image");
                        }),
                        setTimeout(function () {
                          t.css("transform", "translate3d(0, 0, 0)");
                        }, 100);
                    }
                    setTimeout(function () {
                      i.$backdrop.addClass("in"),
                        i.$container.addClass("lg-show-in");
                    }, 10),
                      (i.zoomFromOrigin && o) ||
                        setTimeout(function () {
                          i.outer.addClass("lg-visible");
                        }, i.settings.backdropDuration),
                      i.slide(e, !1, !1, !1),
                      i.LGel.trigger(Mi);
                  }),
                  document.body === this.settings.container &&
                    Ni("html").addClass("lg-on");
              }
            }),
            (e.prototype.getMediaContainerPosition = function () {
              if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
              var e = this.$toolbar.get().clientHeight || 0,
                t = this.outer.find(".lg-components .lg-sub-html").get(),
                i =
                  this.settings.defaultCaptionHeight ||
                  (t && t.clientHeight) ||
                  0,
                s = this.outer.find(".lg-thumb-outer").get();
              return { top: e, bottom: (s ? s.clientHeight : 0) + i };
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
              var t, i;
              if (
                (this.galleryItems[e].subHtmlUrl
                  ? (i = this.galleryItems[e].subHtmlUrl)
                  : (t = this.galleryItems[e].subHtml),
                !i)
              )
                if (t) {
                  var s = t.substring(0, 1);
                  ("." !== s && "#" !== s) ||
                    (t =
                      this.settings.subHtmlSelectorRelative &&
                      !this.settings.dynamic
                        ? Ni(this.items).eq(e).find(t).first().html()
                        : Ni(t).first().html());
                } else t = "";
              if (".lg-item" !== this.settings.appendSubHtmlTo)
                i
                  ? this.outer.find(".lg-sub-html").load(i)
                  : this.outer.find(".lg-sub-html").html(t);
              else {
                var n = Ni(this.getSlideItemId(e));
                i
                  ? n.load(i)
                  : n.append('<div class="lg-sub-html">' + t + "</div>");
              }
              null != t &&
                ("" === t
                  ? this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .addClass("lg-empty-html")
                  : this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .removeClass("lg-empty-html")),
                this.LGel.trigger(Li, { index: e });
            }),
            (e.prototype.preload = function (e) {
              for (
                var t = 1;
                t <= this.settings.preload &&
                !(t >= this.galleryItems.length - e);
                t++
              )
                this.loadContent(e + t, !1);
              for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
                this.loadContent(e - i, !1);
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
            (e.prototype.getDummyImageContent = function (e, t, i) {
              var s;
              if ((this.settings.dynamic || (s = Ni(this.items).eq(t)), s)) {
                var n = void 0;
                if (
                  !(n = this.settings.exThumbImage
                    ? s.attr(this.settings.exThumbImage)
                    : s.find("img").first().attr("src"))
                )
                  return "";
                var o =
                  "<img " +
                  i +
                  ' style="' +
                  this.getDummyImgStyles(this.currentImageSize) +
                  '" class="lg-dummy-img" src="' +
                  n +
                  '" />';
                return (
                  e.addClass("lg-first-slide"),
                  this.outer.addClass("lg-first-slide-loading"),
                  o
                );
              }
              return "";
            }),
            (e.prototype.setImgMarkup = function (e, t, i) {
              var s = this.galleryItems[i],
                n = s.alt,
                o = s.srcset,
                r = s.sizes,
                a = s.sources,
                l = n ? 'alt="' + n + '"' : "",
                c =
                  '<picture class="lg-img-wrap"> ' +
                  (this.isFirstSlideWithZoomAnimation()
                    ? this.getDummyImageContent(t, i, l)
                    : Ui(i, e, l, o, r, a)) +
                  "</picture>";
              t.prepend(c);
            }),
            (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
              var n = e.find(".lg-object").first();
              Ki(n.get()) || t
                ? i()
                : (n.on("load.lg error.lg", function () {
                    i && i();
                  }),
                  n.on("error.lg", function () {
                    s && s();
                  }));
            }),
            (e.prototype.onLgObjectLoad = function (e, t, i, s, n, o) {
              var r = this;
              this.onSlideObjectLoad(
                e,
                o,
                function () {
                  r.triggerSlideItemLoad(e, t, i, s, n);
                },
                function () {
                  e.addClass("lg-complete lg-complete_"),
                    e.html(
                      '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                    );
                }
              );
            }),
            (e.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
              var o = this,
                r = this.galleryItems[t],
                a = n && "video" === this.getSlideType(r) && !r.poster ? s : 0;
              setTimeout(function () {
                e.addClass("lg-complete lg-complete_"),
                  o.LGel.trigger(Ai, {
                    index: t,
                    delay: i || 0,
                    isFirstSlide: n,
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
              e.forEach(function (e, i) {
                (e.__slideVideoInfo = ts(e.src, !!e.video, i)),
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
              var i = this,
                s = this.galleryItems[e],
                n = Ni(this.getSlideItemId(e)),
                o = s.poster,
                r = s.srcset,
                a = s.sizes,
                l = s.sources,
                c = s.src,
                d = s.video,
                u = d && "string" == typeof d ? JSON.parse(d) : d;
              if (s.responsive) {
                var h = s.responsive.split(",");
                c = Zi(h) || c;
              }
              var p = s.__slideVideoInfo,
                g = "",
                f = !!s.iframe,
                m = !this.lGalleryOn,
                v = 0;
              if (
                (m &&
                  (v =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                !n.hasClass("lg-loaded"))
              ) {
                if (p) {
                  var y = this.mediaContainerPosition,
                    b = y.top,
                    w = y.bottom,
                    x = ji(
                      this.items[e],
                      this.outer,
                      b + w,
                      p && this.settings.videoMaxSize
                    );
                  g = this.getVideoContStyle(x);
                }
                if (f) {
                  var S = Yi(
                    this.settings.iframeWidth,
                    this.settings.iframeHeight,
                    this.settings.iframeMaxWidth,
                    this.settings.iframeMaxHeight,
                    c,
                    s.iframeTitle
                  );
                  n.prepend(S);
                } else if (o) {
                  var T = "";
                  m &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (T = this.getDummyImageContent(n, e, ""));
                  S = Ji(o, T || "", g, this.settings.strings.playVideo, p);
                  n.prepend(S);
                } else if (p) {
                  S = '<div class="lg-video-cont " style="' + g + '"></div>';
                  n.prepend(S);
                } else if ((this.setImgMarkup(c, n, e), r || l)) {
                  var C = n.find(".lg-object");
                  this.initPictureFill(C);
                }
                (o || p) &&
                  this.LGel.trigger(Ci, {
                    index: e,
                    src: c,
                    html5Video: u,
                    hasPoster: !!o,
                  }),
                  this.LGel.trigger(Si, { index: e }),
                  this.lGalleryOn &&
                    ".lg-item" === this.settings.appendSubHtmlTo &&
                    this.addHtml(e);
              }
              var E = 0;
              v && !Ni(document.body).hasClass("lg-from-hash") && (E = v),
                this.isFirstSlideWithZoomAnimation() &&
                  (setTimeout(function () {
                    n.removeClass(
                      "lg-start-end-progress lg-start-progress"
                    ).removeAttr("style");
                  }, this.settings.startAnimationDuration + 100),
                  n.hasClass("lg-loaded") ||
                    setTimeout(function () {
                      if (
                        "image" === i.getSlideType(s) &&
                        (n
                          .find(".lg-img-wrap")
                          .append(Ui(e, c, "", r, a, s.sources)),
                        r || l)
                      ) {
                        var t = n.find(".lg-object");
                        i.initPictureFill(t);
                      }
                      ("image" === i.getSlideType(s) ||
                        ("video" === i.getSlideType(s) && o)) &&
                        (i.onLgObjectLoad(n, e, v, E, !0, !1),
                        i.onSlideObjectLoad(
                          n,
                          !(!p || !p.html5 || o),
                          function () {
                            i.loadContentOnFirstSlideLoad(e, n, E);
                          },
                          function () {
                            i.loadContentOnFirstSlideLoad(e, n, E);
                          }
                        ));
                    }, this.settings.startAnimationDuration + 100)),
                n.addClass("lg-loaded"),
                (this.isFirstSlideWithZoomAnimation() &&
                  ("video" !== this.getSlideType(s) || o)) ||
                  this.onLgObjectLoad(n, e, v, E, m, !(!p || !p.html5 || o)),
                (this.zoomFromOrigin && this.currentImageSize) ||
                  !n.hasClass("lg-complete_") ||
                  this.lGalleryOn ||
                  setTimeout(function () {
                    n.addClass("lg-complete");
                  }, this.settings.backdropDuration),
                (this.lGalleryOn = !0),
                !0 === t &&
                  (n.hasClass("lg-complete_")
                    ? this.preload(e)
                    : n
                        .find(".lg-object")
                        .first()
                        .on("load.lg error.lg", function () {
                          i.preload(e);
                        }));
            }),
            (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
              var s = this;
              setTimeout(function () {
                t.find(".lg-dummy-img").remove(),
                  t.removeClass("lg-first-slide"),
                  s.outer.removeClass("lg-first-slide-loading"),
                  (s.isDummyImageRemoved = !0),
                  s.preload(e);
              }, i + 300);
            }),
            (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
              var s = this;
              void 0 === i && (i = 0);
              var n = [],
                o = Math.max(i, 3);
              o = Math.min(o, this.galleryItems.length);
              var r = "lg-item-" + this.lgId + "-" + t;
              if (this.galleryItems.length <= 3)
                return (
                  this.galleryItems.forEach(function (e, t) {
                    n.push("lg-item-" + s.lgId + "-" + t);
                  }),
                  n
                );
              if (e < (this.galleryItems.length - 1) / 2) {
                for (var a = e; a > e - o / 2 && a >= 0; a--)
                  n.push("lg-item-" + this.lgId + "-" + a);
                var l = n.length;
                for (a = 0; a < o - l; a++)
                  n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
              } else {
                for (
                  a = e;
                  a <= this.galleryItems.length - 1 && a < e + o / 2;
                  a++
                )
                  n.push("lg-item-" + this.lgId + "-" + a);
                for (l = n.length, a = 0; a < o - l; a++)
                  n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
              }
              return (
                this.settings.loop &&
                  (e === this.galleryItems.length - 1
                    ? n.push("lg-item-" + this.lgId + "-0")
                    : 0 === e &&
                      n.push(
                        "lg-item-" +
                          this.lgId +
                          "-" +
                          (this.galleryItems.length - 1)
                      )),
                -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + t),
                n
              );
            }),
            (e.prototype.organizeSlideItems = function (e, t) {
              var i = this,
                s = this.getItemsToBeInsertedToDom(
                  e,
                  t,
                  this.settings.numberOfSlideItemsInDom
                );
              return (
                s.forEach(function (e) {
                  -1 === i.currentItemsInDom.indexOf(e) &&
                    i.$inner.append(
                      '<div id="' + e + '" class="lg-item"></div>'
                    );
                }),
                this.currentItemsInDom.forEach(function (e) {
                  -1 === s.indexOf(e) && Ni("#" + e).remove();
                }),
                s
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
                  var i = this.getElementById("lg-download");
                  this.outer.removeClass("lg-hide-download"),
                    i.attr("href", t.downloadUrl || t.src),
                    t.download && i.attr("download", t.download);
                }
              }
            }),
            (e.prototype.makeSlideAnimation = function (e, t, i) {
              var s = this;
              this.lGalleryOn && i.addClass("lg-slide-progress"),
                setTimeout(
                  function () {
                    s.outer.addClass("lg-no-trans"),
                      s.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-next-slide"),
                      "prev" === e
                        ? (t.addClass("lg-prev-slide"),
                          i.addClass("lg-next-slide"))
                        : (t.addClass("lg-next-slide"),
                          i.addClass("lg-prev-slide")),
                      setTimeout(function () {
                        s.outer.find(".lg-item").removeClass("lg-current"),
                          t.addClass("lg-current"),
                          s.outer.removeClass("lg-no-trans");
                      }, 50);
                  },
                  this.lGalleryOn ? this.settings.slideDelay : 0
                );
            }),
            (e.prototype.slide = function (e, t, i, s) {
              var n = this,
                o = this.getPreviousSlideIndex();
              if (
                ((this.currentItemsInDom = this.organizeSlideItems(e, o)),
                !this.lGalleryOn || o !== e)
              ) {
                var r = this.galleryItems.length;
                if (!this.lgBusy) {
                  this.settings.counter && this.updateCurrentCounter(e);
                  var a = this.getSlideItem(e),
                    l = this.getSlideItem(o),
                    c = this.galleryItems[e],
                    d = c.__slideVideoInfo;
                  if (
                    (this.outer.attr(
                      "data-lg-slide-type",
                      this.getSlideType(c)
                    ),
                    this.setDownloadValue(e),
                    d)
                  ) {
                    var u = this.mediaContainerPosition,
                      h = u.top,
                      p = u.bottom,
                      g = ji(
                        this.items[e],
                        this.outer,
                        h + p,
                        d && this.settings.videoMaxSize
                      );
                    this.resizeVideoSlide(e, g);
                  }
                  if (
                    (this.LGel.trigger(zi, {
                      prevIndex: o,
                      index: e,
                      fromTouch: !!t,
                      fromThumb: !!i,
                    }),
                    (this.lgBusy = !0),
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(e),
                    s || (e < o ? (s = "prev") : e > o && (s = "next")),
                    t)
                  ) {
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-current lg-next-slide");
                    var f = void 0,
                      m = void 0;
                    r > 2
                      ? ((f = e - 1),
                        (m = e + 1),
                        ((0 === e && o === r - 1) ||
                          (e === r - 1 && 0 === o)) &&
                          ((m = 0), (f = r - 1)))
                      : ((f = 0), (m = 1)),
                      "prev" === s
                        ? this.getSlideItem(m).addClass("lg-next-slide")
                        : this.getSlideItem(f).addClass("lg-prev-slide"),
                      a.addClass("lg-current");
                  } else this.makeSlideAnimation(s, a, l);
                  this.lGalleryOn
                    ? setTimeout(function () {
                        n.loadContent(e, !0),
                          ".lg-item" !== n.settings.appendSubHtmlTo &&
                            n.addHtml(e);
                      }, this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay))
                    : this.loadContent(e, !0),
                    setTimeout(function () {
                      (n.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        n.LGel.trigger(Pi, {
                          prevIndex: o,
                          index: e,
                          fromTouch: t,
                          fromThumb: i,
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
            (e.prototype.touchMove = function (e, t, i) {
              var s = t.pageX - e.pageX,
                n = t.pageY - e.pageY,
                o = !1;
              if (
                (this.swipeDirection
                  ? (o = !0)
                  : Math.abs(s) > 15
                  ? ((this.swipeDirection = "horizontal"), (o = !0))
                  : Math.abs(n) > 15 &&
                    ((this.swipeDirection = "vertical"), (o = !0)),
                o)
              ) {
                var r = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                  null == i || i.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(r, s, 0);
                  var a = r.get().offsetWidth,
                    l = (15 * a) / 100 - Math.abs((10 * s) / 100);
                  this.setTranslate(
                    this.outer.find(".lg-prev-slide").first(),
                    -a + s - l,
                    0
                  ),
                    this.setTranslate(
                      this.outer.find(".lg-next-slide").first(),
                      a + s + l,
                      0
                    );
                } else if (
                  "vertical" === this.swipeDirection &&
                  this.settings.swipeToClose
                ) {
                  null == i || i.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                  var c = 1 - Math.abs(n) / window.innerHeight;
                  this.$backdrop.css("opacity", c);
                  var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                  this.setTranslate(r, 0, n, d, d),
                    Math.abs(n) > 100 &&
                      this.outer
                        .addClass("lg-hide-items")
                        .removeClass("lg-components-open");
                }
              }
            }),
            (e.prototype.touchEnd = function (e, t, i) {
              var s,
                n = this;
              "lg-slide" !== this.settings.mode &&
                this.outer.addClass("lg-slide"),
                setTimeout(function () {
                  n.$container.removeClass("lg-dragging-vertical"),
                    n.outer
                      .removeClass("lg-dragging lg-hide-items")
                      .addClass("lg-components-open");
                  var o = !0;
                  if ("horizontal" === n.swipeDirection) {
                    s = e.pageX - t.pageX;
                    var r = Math.abs(e.pageX - t.pageX);
                    s < 0 && r > n.settings.swipeThreshold
                      ? (n.goToNextSlide(!0), (o = !1))
                      : s > 0 &&
                        r > n.settings.swipeThreshold &&
                        (n.goToPrevSlide(!0), (o = !1));
                  } else if ("vertical" === n.swipeDirection) {
                    if (
                      ((s = Math.abs(e.pageY - t.pageY)),
                      n.settings.closable && n.settings.swipeToClose && s > 100)
                    )
                      return void n.closeGallery();
                    n.$backdrop.css("opacity", 1);
                  }
                  if (
                    (n.outer.find(".lg-item").removeAttr("style"),
                    o && Math.abs(e.pageX - t.pageX) < 5)
                  ) {
                    var a = Ni(i.target);
                    n.isPosterElement(a) && n.LGel.trigger(ki);
                  }
                  n.swipeDirection = void 0;
                }),
                setTimeout(function () {
                  n.outer.hasClass("lg-dragging") ||
                    "lg-slide" === n.settings.mode ||
                    n.outer.removeClass("lg-slide");
                }, this.settings.speed + 100);
            }),
            (e.prototype.enableSwipe = function () {
              var e = this,
                t = {},
                i = {},
                s = !1,
                n = !1;
              this.settings.enableSwipe &&
                (this.$inner.on("touchstart.lg", function (i) {
                  e.dragOrSwipeEnabled = !0;
                  var s = e.getSlideItem(e.index);
                  (!Ni(i.target).hasClass("lg-item") &&
                    !s.get().contains(i.target)) ||
                    e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    1 !== i.targetTouches.length ||
                    ((n = !0),
                    (e.touchAction = "swipe"),
                    e.manageSwipeClass(),
                    (t = {
                      pageX: i.targetTouches[0].pageX,
                      pageY: i.targetTouches[0].pageY,
                    }));
                }),
                this.$inner.on("touchmove.lg", function (o) {
                  n &&
                    "swipe" === e.touchAction &&
                    1 === o.targetTouches.length &&
                    ((i = {
                      pageX: o.targetTouches[0].pageX,
                      pageY: o.targetTouches[0].pageY,
                    }),
                    e.touchMove(t, i, o),
                    (s = !0));
                }),
                this.$inner.on("touchend.lg", function (o) {
                  if ("swipe" === e.touchAction) {
                    if (s) (s = !1), e.touchEnd(i, t, o);
                    else if (n) {
                      var r = Ni(o.target);
                      e.isPosterElement(r) && e.LGel.trigger(ki);
                    }
                    (e.touchAction = void 0), (n = !1);
                  }
                }));
            }),
            (e.prototype.enableDrag = function () {
              var e = this,
                t = {},
                i = {},
                s = !1,
                n = !1;
              this.settings.enableDrag &&
                (this.outer.on("mousedown.lg", function (i) {
                  e.dragOrSwipeEnabled = !0;
                  var n = e.getSlideItem(e.index);
                  (Ni(i.target).hasClass("lg-item") ||
                    n.get().contains(i.target)) &&
                    (e.outer.hasClass("lg-zoomed") ||
                      e.lgBusy ||
                      (i.preventDefault(),
                      e.lgBusy ||
                        (e.manageSwipeClass(),
                        (t = { pageX: i.pageX, pageY: i.pageY }),
                        (s = !0),
                        (e.outer.get().scrollLeft += 1),
                        (e.outer.get().scrollLeft -= 1),
                        e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                        e.LGel.trigger(Di))));
                }),
                Ni(window).on("mousemove.lg.global" + this.lgId, function (o) {
                  s &&
                    e.lgOpened &&
                    ((n = !0),
                    (i = { pageX: o.pageX, pageY: o.pageY }),
                    e.touchMove(t, i),
                    e.LGel.trigger($i));
                }),
                Ni(window).on("mouseup.lg.global" + this.lgId, function (o) {
                  if (e.lgOpened) {
                    var r = Ni(o.target);
                    n
                      ? ((n = !1), e.touchEnd(i, t, o), e.LGel.trigger(_i))
                      : e.isPosterElement(r) && e.LGel.trigger(ki),
                      s &&
                        ((s = !1),
                        e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                  }
                }));
            }),
            (e.prototype.triggerPosterClick = function () {
              var e = this;
              this.$inner.on("click.lg", function (t) {
                !e.dragOrSwipeEnabled &&
                  e.isPosterElement(Ni(t.target)) &&
                  e.LGel.trigger(ki);
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
                i = this.settings.loop;
              e && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index + 1 < this.galleryItems.length
                    ? (this.index++,
                      this.LGel.trigger(Gi, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : i
                    ? ((this.index = 0),
                      this.LGel.trigger(Gi, { index: this.index }),
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
                i = this.settings.loop;
              e && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index > 0
                    ? (this.index--,
                      this.LGel.trigger(Bi, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : i
                    ? ((this.index = this.galleryItems.length - 1),
                      this.LGel.trigger(Bi, {
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
              Ni(window).on("keydown.lg.global" + this.lgId, function (t) {
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
                  i = this.getElementById("lg-next");
                e + 1 === this.galleryItems.length
                  ? i.attr("disabled", "disabled").addClass("disabled")
                  : i.removeAttr("disabled").removeClass("disabled"),
                  0 === e
                    ? t.attr("disabled", "disabled").addClass("disabled")
                    : t.removeAttr("disabled").removeClass("disabled");
              }
            }),
            (e.prototype.setTranslate = function (e, t, i, s, n) {
              void 0 === s && (s = 1),
                void 0 === n && (n = 1),
                e.css(
                  "transform",
                  "translate3d(" +
                    t +
                    "px, " +
                    i +
                    "px, 0px) scale3d(" +
                    s +
                    ", " +
                    n +
                    ", 1)"
                );
            }),
            (e.prototype.mousewheel = function () {
              var e = this,
                t = 0;
              this.outer.on("wheel.lg", function (i) {
                if (i.deltaY && !(e.galleryItems.length < 2)) {
                  i.preventDefault();
                  var s = new Date().getTime();
                  s - t < 1e3 ||
                    ((t = s),
                    i.deltaY > 0
                      ? e.goToNextSlide()
                      : i.deltaY < 0 && e.goToPrevSlide());
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
                var t = Ni(this.items[e]);
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
                    (this.outer.on("mousedown.lg", function (i) {
                      var s = Ni(i.target);
                      t = !!e.isSlideElement(s);
                    }),
                    this.outer.on("mousemove.lg", function () {
                      t = !1;
                    }),
                    this.outer.on("mouseup.lg", function (i) {
                      var s = Ni(i.target);
                      e.isSlideElement(s) &&
                        t &&
                        (e.outer.hasClass("lg-dragging") || e.closeGallery());
                    }));
              }
            }),
            (e.prototype.closeGallery = function (e) {
              var t = this;
              if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
              this.LGel.trigger(Vi), Ni(window).scrollTop(this.prevScrollTop);
              var i,
                s = this.items[this.index];
              if (this.zoomFromOrigin && s) {
                var n = this.mediaContainerPosition,
                  o = n.top,
                  r = n.bottom,
                  a = this.galleryItems[this.index],
                  l = a.__slideVideoInfo,
                  c = a.poster,
                  d = ji(
                    s,
                    this.outer,
                    o + r,
                    l && c && this.settings.videoMaxSize
                  );
                i = qi(s, this.outer, o, r, d);
              }
              this.zoomFromOrigin && i
                ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                  this.getSlideItem(this.index)
                    .addClass("lg-start-end-progress")
                    .css(
                      "transition-duration",
                      this.settings.startAnimationDuration + "ms"
                    )
                    .css("transform", i))
                : (this.outer.addClass("lg-hide-items"),
                  this.outer.removeClass("lg-zoom-from-image")),
                this.destroyModules(),
                (this.lGalleryOn = !1),
                (this.isDummyImageRemoved = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                clearTimeout(this.hideBarTimeout),
                (this.hideBarTimeout = !1),
                Ni("html").removeClass("lg-on"),
                this.outer.removeClass("lg-visible lg-components-open"),
                this.$backdrop.removeClass("in").css("opacity", 0);
              var u =
                this.zoomFromOrigin && i
                  ? Math.max(
                      this.settings.startAnimationDuration,
                      this.settings.backdropDuration
                    )
                  : this.settings.backdropDuration;
              return (
                this.$container.removeClass("lg-show-in"),
                setTimeout(function () {
                  t.zoomFromOrigin &&
                    i &&
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
                    t.lgOpened && t.LGel.trigger(Fi, { instance: t }),
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
                this.LGel.trigger(Ii);
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
                    Ni(window).off(".lg.global" + e.lgId),
                    e.LGel.off(".lg"),
                    e.$container.remove();
                }, t),
                t
              );
            }),
            e
          );
        })();
      const ns = function (e, t) {
        return new ss(e, t);
      };
      var os = function () {
          return (
            (os =
              Object.assign ||
              function (e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                  for (var n in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
            os.apply(this, arguments)
          );
        },
        rs = {
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
        as = "lgContainerResize",
        ls = "lgUpdateSlides",
        cs = "lgBeforeOpen",
        ds = "lgBeforeSlide",
        us = (function () {
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
              (this.settings = os(os({}, rs), this.core.settings)),
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
                  var i = e.$LG(t.target);
                  i.hasAttribute("data-lg-item-id") &&
                    setTimeout(function () {
                      if (e.thumbClickable && !e.core.lgBusy) {
                        var t = parseInt(i.attr("data-lg-item-id"));
                        e.core.slide(t, !1, !0, !1);
                      }
                    }, 50);
                }),
                this.core.LGel.on(ds + ".thumb", function (t) {
                  var i = t.detail.index;
                  e.animateThumb(i);
                }),
                this.core.LGel.on(cs + ".thumb", function () {
                  e.thumbOuterWidth = e.core.outer.get().offsetWidth;
                }),
                this.core.LGel.on(ls + ".thumb", function () {
                  e.rebuildThumbnails();
                }),
                this.core.LGel.on(as + ".thumb", function () {
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
                i = !1;
              this.$thumbOuter.addClass("lg-grab"),
                this.core.outer
                  .find(".lg-thumb")
                  .first()
                  .on("mousedown.lg.thumb", function (s) {
                    e.thumbTotalWidth > e.thumbOuterWidth &&
                      (s.preventDefault(),
                      (t.cords.startX = s.pageX),
                      (t.startTime = new Date()),
                      (e.thumbClickable = !1),
                      (i = !0),
                      (e.core.outer.get().scrollLeft += 1),
                      (e.core.outer.get().scrollLeft -= 1),
                      e.$thumbOuter
                        .removeClass("lg-grab")
                        .addClass("lg-grabbing"));
                  }),
                this.$LG(window).on(
                  "mousemove.lg.thumb.global" + this.core.lgId,
                  function (s) {
                    e.core.lgOpened &&
                      i &&
                      ((t.cords.endX = s.pageX), (t = e.onThumbTouchMove(t)));
                  }
                ),
                this.$LG(window).on(
                  "mouseup.lg.thumb.global" + this.core.lgId,
                  function () {
                    e.core.lgOpened &&
                      (t.isMoved
                        ? (t = e.onThumbTouchEnd(t))
                        : (e.thumbClickable = !0),
                      i &&
                        ((i = !1),
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
              this.$lgThumb.on("touchstart.lg", function (i) {
                e.thumbTotalWidth > e.thumbOuterWidth &&
                  (i.preventDefault(),
                  (t.cords.startX = i.targetTouches[0].pageX),
                  (e.thumbClickable = !1),
                  (t.startTime = new Date()));
              }),
                this.$lgThumb.on("touchmove.lg", function (i) {
                  e.thumbTotalWidth > e.thumbOuterWidth &&
                    (i.preventDefault(),
                    (t.cords.endX = i.targetTouches[0].pageX),
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
                i = e.cords.endX - e.cords.startX,
                s = Math.abs(i) / t;
              return (
                s > 0.15 && e.endTime.valueOf() - e.touchMoveTime < 30
                  ? ((s += 1) > 2 && (s += 1),
                    (s += s * (Math.abs(i) / this.thumbOuterWidth)),
                    this.$lgThumb.css(
                      "transition-duration",
                      Math.min(s - 1, 2) + "settings"
                    ),
                    (i *= s),
                    (this.translateX = this.getPossibleTransformX(
                      this.translateX - i
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
              var i,
                s = this.core.galleryItems[t].__slideVideoInfo || {};
              return (
                (i =
                  s.youtube && this.settings.loadYouTubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      s.youtube[1] +
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
                  i +
                  '" />\n        </div>'
              );
            }),
            (e.prototype.getThumbItemHtml = function (e) {
              for (var t = "", i = 0; i < e.length; i++)
                t += this.getThumbHtml(e[i].thumb, i);
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
              this.core.LGel.on(ds + ".thumb", function (t) {
                var i = e.core.outer.find(".lg-thumb-item"),
                  s = t.detail.index;
                i.removeClass("active"), i.eq(s).addClass("active");
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
      const hs = us;
      var ps = function () {
          return (
            (ps =
              Object.assign ||
              function (e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                  for (var n in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
            ps.apply(this, arguments)
          );
        },
        gs = {
          fullScreen: !0,
          fullscreenPluginStrings: { toggleFullscreen: "Toggle Fullscreen" },
        },
        fs = (function () {
          function e(e, t) {
            return (
              (this.core = e),
              (this.$LG = t),
              (this.settings = ps(ps({}, gs), this.core.settings)),
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
      const ms = fs;
      var vs = function () {
          return (
            (vs =
              Object.assign ||
              function (e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                  for (var n in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
            vs.apply(this, arguments)
          );
        },
        ys = {
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
        bs = "lgContainerResize",
        ws = "lgBeforeOpen",
        xs = "lgAfterOpen",
        Ss = "lgSlideItemLoad",
        Ts = "lgAfterSlide",
        Cs = "lgRotateLeft",
        Es = "lgRotateRight",
        Is = "lgFlipHorizontal",
        Ls = "lgFlipVertical",
        Os = (function () {
          function e(e, t) {
            return (
              (this.core = e),
              (this.$LG = t),
              (this.settings = vs(vs({}, ys), this.core.settings)),
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
                i = this.settings.enableZoomAfter + e.detail.delay;
              this.$LG("body").first().hasClass("lg-from-hash") &&
              e.detail.delay
                ? (i = 0)
                : this.$LG("body").first().removeClass("lg-from-hash"),
                (this.zoomableTimeout = setTimeout(function () {
                  t.isImageSlide() &&
                    (t.core
                      .getSlideItem(e.detail.index)
                      .addClass("lg-zoomable"),
                    e.detail.index === t.core.index && t.setZoomEssentials());
                }, i + 30));
            }),
            (e.prototype.enableZoomOnSlideItemLoad = function () {
              this.core.LGel.on(Ss + ".zoom", this.enableZoom.bind(this));
            }),
            (e.prototype.getModifier = function (e, t, i) {
              var s = e;
              e = Math.abs(e);
              var n = this.getCurrentTransform(i);
              if (!n) return 1;
              var o = 1;
              if ("X" === t) {
                var r = Math.sign(parseFloat(n[0]));
                0 === e || 180 === e
                  ? (o = 1)
                  : 90 === e &&
                    (o =
                      (-90 === s && 1 === r) || (90 === s && -1 === r)
                        ? -1
                        : 1),
                  (o *= r);
              } else {
                var a = Math.sign(parseFloat(n[3]));
                if (0 === e || 180 === e) o = 1;
                else if (90 === e) {
                  var l = parseFloat(n[1]),
                    c = parseFloat(n[2]);
                  o = Math.sign(l * c * s * a);
                }
                o *= a;
              }
              return o;
            }),
            (e.prototype.getImageSize = function (e, t, i) {
              return (
                90 === Math.abs(t) && (i = "x" === i ? "y" : "x"),
                e[{ y: "offsetHeight", x: "offsetWidth" }[i]]
              );
            }),
            (e.prototype.getDragCords = function (e, t) {
              return 90 === t
                ? { x: e.pageY, y: e.pageX }
                : { x: e.pageX, y: e.pageY };
            }),
            (e.prototype.getSwipeCords = function (e, t) {
              var i = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY;
              return 90 === t ? { x: s, y: i } : { x: i, y: s };
            }),
            (e.prototype.getDragAllowedAxises = function (e, t) {
              t = t || this.scale || 1;
              var i = this.imageYSize * t > this.containerRect.height,
                s = this.imageXSize * t > this.containerRect.width;
              return 90 === e
                ? { allowX: i, allowY: s }
                : { allowX: s, allowY: i };
            }),
            (e.prototype.getCurrentTransform = function (e) {
              if (e) {
                var t = window.getComputedStyle(e, null),
                  i =
                    t.getPropertyValue("-webkit-transform") ||
                    t.getPropertyValue("-moz-transform") ||
                    t.getPropertyValue("-ms-transform") ||
                    t.getPropertyValue("-o-transform") ||
                    t.getPropertyValue("transform") ||
                    "none";
                return "none" !== i
                  ? i.split("(")[1].split(")")[0].split(",")
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
                i,
                s =
                  (this.containerRect.width - this.imageXSize) / 2 +
                  this.containerRect.left,
                n = this.core.mediaContainerPosition,
                o = n.top,
                r = n.bottom,
                a = Math.abs(o - r) / 2,
                l =
                  (this.containerRect.height -
                    this.imageYSize -
                    a * this.modifierX) /
                    2 +
                  this.scrollTop +
                  this.containerRect.top;
              1 === e && (this.positionChanged = !1);
              var c = this.getDragAllowedAxises(Math.abs(this.rotateValue), e),
                d = c.allowY,
                u = c.allowX;
              this.positionChanged &&
                ((t = this.left / (this.scale - 1)),
                (i = this.top / (this.scale - 1)),
                (this.pageX = Math.abs(t) + s),
                (this.pageY = Math.abs(i) + l),
                (this.positionChanged = !1));
              var h = this.getPossibleSwipeDragCords(this.rotateValue, e),
                p = (e - 1) * (s - this.pageX),
                g = (e - 1) * (l - this.pageY);
              u
                ? this.isBeyondPossibleLeft(p, h.minX)
                  ? (p = h.minX)
                  : this.isBeyondPossibleRight(p, h.maxX) && (p = h.maxX)
                : e > 1 &&
                  (p < h.minX ? (p = h.minX) : p > h.maxX && (p = h.maxX)),
                d
                  ? this.isBeyondPossibleTop(g, h.minY)
                    ? (g = h.minY)
                    : this.isBeyondPossibleBottom(g, h.maxY) && (g = h.maxY)
                  : e > 1 &&
                    (g < h.minY ? (g = h.minY) : g > h.maxY && (g = h.maxY)),
                this.setZoomStyles({ x: p, y: g, scale: e });
            }),
            (e.prototype.setZoomStyles = function (e) {
              var t = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-image")
                  .first(),
                i = this.core.outer.find(".lg-current .lg-dummy-img").first(),
                s = t.parent();
              (this.scale = e.scale),
                t.css(
                  "transform",
                  "scale3d(" + e.scale + ", " + e.scale + ", 1)"
                ),
                i.css(
                  "transform",
                  "scale3d(" + e.scale + ", " + e.scale + ", 1)"
                );
              var n = "translate3d(" + e.x + "px, " + e.y + "px, 0)";
              s.css("transform", n), (this.left = e.x), (this.top = e.y);
            }),
            (e.prototype.setActualSize = function (e, t) {
              var i = this;
              if (
                this.isImageSlide() &&
                !this.core.outer.hasClass("lg-first-slide-loading")
              ) {
                var s = this.getCurrentImageActualSizeScale();
                this.core.outer.hasClass("lg-zoomed")
                  ? (this.scale = 1)
                  : (this.scale = this.getScale(s)),
                  this.setPageCords(t),
                  this.beginZoom(this.scale),
                  this.zoomImage(this.scale),
                  setTimeout(function () {
                    i.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
                  }, 10);
              }
            }),
            (e.prototype.getNaturalWidth = function (e) {
              var t = this.core.getSlideItem(e).find(".lg-image").first(),
                i = this.core.galleryItems[e].width;
              return i ? parseFloat(i) : t.get().naturalWidth;
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
                var i = this.core.outer.get().getBoundingClientRect();
                (t.x = i.width / 2 + i.left),
                  (t.y = i.height / 2 + this.scrollTop + i.top);
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
                  this.core.outer.on("touchstart.lg", function (i) {
                    var s = e.$LG(i.target);
                    1 === i.targetTouches.length &&
                      s.hasClass("lg-image") &&
                      (t
                        ? (clearTimeout(t),
                          (t = null),
                          i.preventDefault(),
                          e.setActualSize(e.core.index, i))
                        : (t = setTimeout(function () {
                            t = null;
                          }, 300)));
                  }),
                  this.core.LGel.on(
                    bs +
                      ".zoom " +
                      Es +
                      ".zoom " +
                      Cs +
                      ".zoom " +
                      Is +
                      ".zoom " +
                      Ls +
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
                  this.core.LGel.on(ws + ".zoom", function () {
                    e.core.outer.find(".lg-item").removeClass("lg-zoomable");
                  }),
                  this.core.LGel.on(xs + ".zoom", function () {
                    (e.scrollTop = e.$LG(window).scrollTop()),
                      (e.pageX = e.core.outer.width() / 2),
                      (e.pageY = e.core.outer.height() / 2 + e.scrollTop),
                      (e.scale = 1);
                  }),
                  this.core.LGel.on(Ts + ".zoom", function (t) {
                    var i = t.detail.prevIndex;
                    (e.scale = 1),
                      (e.positionChanged = !1),
                      e.resetZoom(i),
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
                i = this.core.getSlideItem(void 0 !== e ? e : this.core.index);
              t
                .removeClass(this.settings.actualSizeIcons.zoomOut)
                .addClass(this.settings.actualSizeIcons.zoomIn),
                i.find(".lg-img-wrap").first().removeAttr("style"),
                i.find(".lg-image").first().removeAttr("style"),
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
                i = !1,
                s = 1,
                n = this.core.getSlideItem(this.core.index);
              this.core.$inner.on("touchstart.lg", function (i) {
                (n = e.core.getSlideItem(e.core.index)),
                  e.isImageSlide() &&
                    (2 !== i.targetTouches.length ||
                      e.core.outer.hasClass("lg-first-slide-loading") ||
                      (!e.$LG(i.target).hasClass("lg-item") &&
                        !n.get().contains(i.target)) ||
                      ((s = e.scale || 1),
                      e.core.outer.removeClass(
                        "lg-zoom-drag-transition lg-zoom-dragging"
                      ),
                      (e.core.touchAction = "pinch"),
                      (t = e.getTouchDistance(i))));
              }),
                this.core.$inner.on("touchmove.lg", function (o) {
                  if (
                    2 === o.targetTouches.length &&
                    "pinch" === e.core.touchAction &&
                    (e.$LG(o.target).hasClass("lg-item") ||
                      n.get().contains(o.target))
                  ) {
                    o.preventDefault();
                    var r = e.getTouchDistance(o),
                      a = t - r;
                    !i && Math.abs(a) > 5 && (i = !0),
                      i &&
                        ((e.scale = Math.max(1, s + 0.008 * -a)),
                        e.zoomImage(e.scale));
                  }
                }),
                this.core.$inner.on("touchend.lg", function (s) {
                  "pinch" === e.core.touchAction &&
                    (e.$LG(s.target).hasClass("lg-item") ||
                      n.get().contains(s.target)) &&
                    ((i = !1),
                    (t = 0),
                    e.scale <= 1
                      ? e.resetZoom()
                      : ((e.scale = e.getScale(e.scale)),
                        e.zoomImage(e.scale),
                        e.core.outer.addClass("lg-zoomed")),
                    (e.core.touchAction = void 0));
                });
            }),
            (e.prototype.touchendZoom = function (e, t, i, s, n, o) {
              var r = t.x - e.x,
                a = t.y - e.y,
                l = Math.abs(r) / n + 1,
                c = Math.abs(a) / n + 1;
              l > 2 && (l += 1), c > 2 && (c += 1), (r *= l), (a *= c);
              var d = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-img-wrap")
                  .first(),
                u = {};
              (u.x = this.left + r * this.modifierX),
                (u.y = this.top + a * this.modifierY);
              var h = this.getPossibleSwipeDragCords(o);
              (Math.abs(r) > 15 || Math.abs(a) > 15) &&
                (s &&
                  (this.isBeyondPossibleTop(u.y, h.minY)
                    ? (u.y = h.minY)
                    : this.isBeyondPossibleBottom(u.y, h.maxY) &&
                      (u.y = h.maxY)),
                i &&
                  (this.isBeyondPossibleLeft(u.x, h.minX)
                    ? (u.x = h.minX)
                    : this.isBeyondPossibleRight(u.x, h.maxX) &&
                      (u.x = h.maxX)),
                s ? (this.top = u.y) : (u.y = this.top),
                i ? (this.left = u.x) : (u.x = this.left),
                this.setZoomSwipeStyles(d, u),
                (this.positionChanged = !0));
            }),
            (e.prototype.getZoomSwipeCords = function (e, t, i, s, n) {
              var o = {};
              if (s) {
                if (
                  ((o.y = this.top + (t.y - e.y) * this.modifierY),
                  this.isBeyondPossibleTop(o.y, n.minY))
                ) {
                  var r = n.minY - o.y;
                  o.y = n.minY - r / 6;
                } else if (this.isBeyondPossibleBottom(o.y, n.maxY)) {
                  var a = o.y - n.maxY;
                  o.y = n.maxY + a / 6;
                }
              } else o.y = this.top;
              if (i) {
                if (
                  ((o.x = this.left + (t.x - e.x) * this.modifierX),
                  this.isBeyondPossibleLeft(o.x, n.minX))
                ) {
                  var l = n.minX - o.x;
                  o.x = n.minX - l / 6;
                } else if (this.isBeyondPossibleRight(o.x, n.maxX)) {
                  var c = o.x - n.maxX;
                  o.x = n.maxX + c / 6;
                }
              } else o.x = this.left;
              return o;
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
              var i = t || this.scale || 1,
                s = Math.abs(i),
                n = this.core.mediaContainerPosition,
                o = n.top,
                r = n.bottom,
                a = Math.abs(o - r) / 2,
                l =
                  (this.imageYSize - this.containerRect.height) / 2 +
                  a * this.modifierX,
                c = this.containerRect.height - this.imageYSize * s + l,
                d = (this.imageXSize - this.containerRect.width) / 2,
                u = this.containerRect.width - this.imageXSize * s + d,
                h = { minY: l, maxY: c, minX: d, maxX: u };
              return (
                90 === Math.abs(e) &&
                  (h = { minY: d, maxY: u, minX: l, maxX: c }),
                h
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
                i = this,
                s = {},
                n = {},
                o = !1,
                r = !1,
                a = !1,
                l = new Date(),
                c = (new Date(), this.core.getSlideItem(this.core.index));
              this.core.$inner.on("touchstart.lg", function (n) {
                if (
                  i.isImageSlide() &&
                  ((c = i.core.getSlideItem(i.core.index)),
                  (i.$LG(n.target).hasClass("lg-item") ||
                    c.get().contains(n.target)) &&
                    1 === n.targetTouches.length &&
                    i.core.outer.hasClass("lg-zoomed"))
                ) {
                  n.preventDefault(),
                    (l = new Date()),
                    (i.core.touchAction = "zoomSwipe"),
                    (t = i.core
                      .getSlideItem(i.core.index)
                      .find(".lg-img-wrap")
                      .first());
                  var o = i.getDragAllowedAxises(Math.abs(i.rotateValue));
                  (a = o.allowY),
                    ((r = o.allowX) || a) &&
                      (s = i.getSwipeCords(n, Math.abs(i.rotateValue))),
                    (e = i.getPossibleSwipeDragCords(i.rotateValue)),
                    i.core.outer.addClass(
                      "lg-zoom-dragging lg-zoom-drag-transition"
                    );
                }
              }),
                this.core.$inner.on("touchmove.lg", function (l) {
                  if (
                    1 === l.targetTouches.length &&
                    "zoomSwipe" === i.core.touchAction &&
                    (i.$LG(l.target).hasClass("lg-item") ||
                      c.get().contains(l.target))
                  ) {
                    l.preventDefault(),
                      (i.core.touchAction = "zoomSwipe"),
                      (n = i.getSwipeCords(l, Math.abs(i.rotateValue)));
                    var d = i.getZoomSwipeCords(s, n, r, a, e);
                    (Math.abs(n.x - s.x) > 15 || Math.abs(n.y - s.y) > 15) &&
                      ((o = !0), i.setZoomSwipeStyles(t, d));
                  }
                }),
                this.core.$inner.on("touchend.lg", function (e) {
                  if (
                    "zoomSwipe" === i.core.touchAction &&
                    (i.$LG(e.target).hasClass("lg-item") ||
                      c.get().contains(e.target))
                  ) {
                    if (
                      ((i.core.touchAction = void 0),
                      i.core.outer.removeClass("lg-zoom-dragging"),
                      !o)
                    )
                      return;
                    o = !1;
                    var t = new Date().valueOf() - l.valueOf();
                    i.touchendZoom(s, n, r, a, t, i.rotateValue);
                  }
                });
            }),
            (e.prototype.zoomDrag = function () {
              var e,
                t,
                i,
                s,
                n = this,
                o = {},
                r = {},
                a = !1,
                l = !1,
                c = !1,
                d = !1;
              this.core.outer.on("mousedown.lg.zoom", function (t) {
                if (n.isImageSlide()) {
                  var r = n.core.getSlideItem(n.core.index);
                  if (
                    n.$LG(t.target).hasClass("lg-item") ||
                    r.get().contains(t.target)
                  ) {
                    (e = new Date()),
                      (s = n.core
                        .getSlideItem(n.core.index)
                        .find(".lg-img-wrap")
                        .first());
                    var l = n.getDragAllowedAxises(Math.abs(n.rotateValue));
                    (d = l.allowY),
                      (c = l.allowX),
                      n.core.outer.hasClass("lg-zoomed") &&
                        n.$LG(t.target).hasClass("lg-object") &&
                        (c || d) &&
                        (t.preventDefault(),
                        (o = n.getDragCords(t, Math.abs(n.rotateValue))),
                        (i = n.getPossibleSwipeDragCords(n.rotateValue)),
                        (a = !0),
                        (n.core.outer.get().scrollLeft += 1),
                        (n.core.outer.get().scrollLeft -= 1),
                        n.core.outer
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
                        (r = n.getDragCords(e, Math.abs(n.rotateValue)));
                      var t = n.getZoomSwipeCords(o, r, c, d, i);
                      n.setZoomSwipeStyles(s, t);
                    }
                  }
                ),
                this.$LG(window).on(
                  "mouseup.lg.zoom.global" + this.core.lgId,
                  function (i) {
                    if (a) {
                      if (
                        ((t = new Date()),
                        (a = !1),
                        n.core.outer.removeClass("lg-zoom-dragging"),
                        l && (o.x !== r.x || o.y !== r.y))
                      ) {
                        r = n.getDragCords(i, Math.abs(n.rotateValue));
                        var s = t.valueOf() - e.valueOf();
                        n.touchendZoom(o, r, c, d, s, n.rotateValue);
                      }
                      l = !1;
                    }
                    n.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
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
      const Ms = Os;
      var As = function () {
          return (
            (As =
              Object.assign ||
              function (e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                  for (var n in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
            As.apply(this, arguments)
          );
        },
        zs = "lgAfterAppendSlide",
        Ps = "lgBeforeSlide",
        ks = "lgRotateLeft",
        Ds = "lgRotateRight",
        $s = "lgFlipHorizontal",
        _s = "lgFlipVertical",
        Gs = {
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
        Bs = (function () {
          function e(e, t) {
            return (
              (this.core = e),
              (this.$LG = t),
              (this.settings = As(As({}, Gs), this.core.settings)),
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
                this.core.LGel.on(zs + ".rotate", function (t) {
                  var i = t.detail.index;
                  e.core
                    .getSlideItem(i)
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
                this.core.LGel.on(Ps + ".rotate", function (t) {
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
                this.triggerEvents(ks, {
                  rotate: this.rotateValuesList[this.core.index].rotate,
                });
            }),
            (e.prototype.rotateRight = function () {
              (this.rotateValuesList[this.core.index].rotate += 90),
                this.applyStyles(),
                this.triggerEvents(Ds, {
                  rotate: this.rotateValuesList[this.core.index].rotate,
                });
            }),
            (e.prototype.getCurrentRotation = function (e) {
              if (!e) return 0;
              var t = this.$LG(e).style(),
                i =
                  t.getPropertyValue("-webkit-transform") ||
                  t.getPropertyValue("-moz-transform") ||
                  t.getPropertyValue("-ms-transform") ||
                  t.getPropertyValue("-o-transform") ||
                  t.getPropertyValue("transform") ||
                  "none";
              if ("none" !== i) {
                var s = i.split("(")[1].split(")")[0].split(",");
                if (s) {
                  var n = Math.round(Math.atan2(s[1], s[0]) * (180 / Math.PI));
                  return n < 0 ? n + 360 : n;
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
                i = "flipHorizontal";
              (90 !== t && 270 !== t) || (i = "flipVertical"),
                (this.rotateValuesList[this.core.index][i] *= -1),
                this.applyStyles(),
                this.triggerEvents($s, {
                  flipHorizontal: this.rotateValuesList[this.core.index][i],
                });
            }),
            (e.prototype.flipVertical = function () {
              var e = this.core
                  .getSlideItem(this.core.index)
                  .find(".lg-img-rotate")
                  .first()
                  .get(),
                t = this.getCurrentRotation(e),
                i = "flipVertical";
              (90 !== t && 270 !== t) || (i = "flipHorizontal"),
                (this.rotateValuesList[this.core.index][i] *= -1),
                this.applyStyles(),
                this.triggerEvents(_s, {
                  flipVertical: this.rotateValuesList[this.core.index][i],
                });
            }),
            (e.prototype.triggerEvents = function (e, t) {
              var i = this;
              setTimeout(function () {
                i.core.LGel.trigger(e, t);
              }, this.settings.rotateSpeed + 10);
            }),
            (e.prototype.isImageOrientationChanged = function () {
              var e = this.rotateValuesList[this.core.index],
                t = Math.abs(e.rotate) % 360 != 0,
                i = e.flipHorizontal < 0,
                s = e.flipVertical < 0;
              return t || i || s;
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
      const Vs = Bs,
        Fs = document.querySelectorAll("[data-gallery]");
      Fs.length &&
        Fs.forEach((e) => {
          ns(e, {
            plugins: [ms, Ms, hs, Vs],
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
          });
        }),
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
              o &&
                (((e = 600) => {
                  document.documentElement.classList.contains("lock")
                    ? r(e)
                    : a(e);
                })(),
                document.documentElement.classList.toggle("menu-open"),
                (document.querySelector(".header").add.style.paddingRight =
                  "6"));
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
            const s = location.hash.replace("#", "");
            s.startsWith("tab-") && (t = s.replace("tab-", "").split("-")),
              e.forEach((e, i) => {
                e.classList.add("_tab-init"),
                  e.setAttribute("data-tabs-index", i),
                  e.addEventListener("click", o),
                  (function (e) {
                    const i = e.querySelectorAll("[data-tabs-titles]>*"),
                      s = e.querySelectorAll("[data-tabs-body]>*"),
                      n = e.dataset.tabsIndex,
                      o = t[0] == n;
                    if (o) {
                      e.querySelector(
                        "[data-tabs-titles]>._tab-active"
                      ).classList.remove("_tab-active");
                    }
                    s.length > 0 &&
                      s.forEach((e, s) => {
                        i[s].setAttribute("data-tabs-title", ""),
                          e.setAttribute("data-tabs-item", ""),
                          o && s == t[1] && i[s].classList.add("_tab-active"),
                          (e.hidden = !i[s].classList.contains("_tab-active"));
                      });
                  })(e);
              });
            let n = d(e, "tabs");
            n &&
              n.length &&
              n.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  i(e.itemsArray, e.matchMedia);
                }),
                  i(e.itemsArray, e.matchMedia);
              });
          }
          function i(e, t) {
            e.forEach((e) => {
              const i = (e = e.item).querySelector("[data-tabs-titles]"),
                s = e.querySelectorAll("[data-tabs-title]"),
                n = e.querySelector("[data-tabs-body]");
              e.querySelectorAll("[data-tabs-item]").forEach((o, r) => {
                t.matches
                  ? (n.append(s[r]),
                    n.append(o),
                    e.classList.add("_tab-spoller"))
                  : (i.append(s[r]), e.classList.remove("_tab-spoller"));
              });
            });
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-tabs-title]")) {
              const i = t.closest("[data-tabs-title]"),
                o = i.closest("[data-tabs]");
              if (
                !i.classList.contains("_tab-active") &&
                !o.querySelectorAll("._slide").length
              ) {
                const e = o.querySelector("[data-tabs-title]._tab-active");
                e && e.classList.remove("_tab-active"),
                  i.classList.add("_tab-active"),
                  (function (e) {
                    const t = e.querySelectorAll("[data-tabs-title]"),
                      i = e.querySelectorAll("[data-tabs-item]"),
                      o = e.dataset.tabsIndex,
                      r = (function (e) {
                        if (e.hasAttribute("data-tabs-animate"))
                          return e.dataset.tabsAnimate > 0
                            ? e.dataset.tabsAnimate
                            : 500;
                      })(e);
                    i.length > 0 &&
                      i.forEach((e, i) => {
                        t[i].classList.contains("_tab-active")
                          ? (r ? n(e, r) : (e.hidden = !1),
                            e.closest(".popup") ||
                              (location.hash = `tab-${o}-${i}`))
                          : r
                          ? s(e, r)
                          : (e.hidden = !0);
                      });
                  })(o);
              }
              e.preventDefault();
            }
          }
        })(),
        new e({}),
        new bi({}),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const i = t.closest("[data-goto]"),
                  s = i.dataset.goto ? i.dataset.goto : "",
                  n = !!i.hasAttribute("data-goto-header"),
                  o = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
                h(s, n, o), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                i = t.target;
              if ("navigator" === i.dataset.watch) {
                const e = i.id,
                  s =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? s && s.classList.add("_navigator-active")
                  : s && s.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          wi = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            i = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            s = e.dataset.scroll ? e.dataset.scroll : 1;
          let n,
            o = 0;
          document.addEventListener("windowScroll", function (r) {
            const a = window.scrollY;
            clearTimeout(n),
              a >= s
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (a > o
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (n = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, i))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (o = a <= 0 ? 0 : a);
          });
        })();
    })();
})();
