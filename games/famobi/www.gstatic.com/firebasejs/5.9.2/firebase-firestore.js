! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function(sc) {
    "use strict";
    try {
        (function() {
            var o, t;
            sc = sc && sc.hasOwnProperty("default") ? sc.default : sc, (t = o || (o = {}))[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
            var e = o.INFO,
                n = function(t, e) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    if (!(e < t.logLevel)) {
                        var i = (new Date).toISOString();
                        switch (e) {
                            case o.DEBUG:
                            case o.VERBOSE:
                                console.log.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            case o.INFO:
                                console.info.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            case o.WARN:
                                console.warn.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            case o.ERROR:
                                console.error.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            default:
                                throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")")
                        }
                    }
                },
                r = function() {
                    function t(t) {
                        this.name = t, this._logLevel = e, this._logHandler = n
                    }
                    return Object.defineProperty(t.prototype, "logLevel", {
                        get: function() {
                            return this._logLevel
                        },
                        set: function(t) {
                            if (!(t in o)) throw new TypeError("Invalid value assigned to `logLevel`");
                            this._logLevel = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "logHandler", {
                        get: function() {
                            return this._logHandler
                        },
                        set: function(t) {
                            if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.debug = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, o.DEBUG].concat(t))
                    }, t.prototype.log = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, o.VERBOSE].concat(t))
                    }, t.prototype.info = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, o.INFO].concat(t))
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, o.WARN].concat(t))
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, o.ERROR].concat(t))
                    }, t
                }(),
                i = function(t, e) {
                    return (i = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                };

            function a(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function h(o, s, a, u) {
                return new(a || (a = Promise))(function(t, e) {
                    function n(t) {
                        try {
                            i(u.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function r(t) {
                        try {
                            i(u.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(e) {
                        e.done ? t(e.value) : new a(function(t) {
                            t(e.value)
                        }).then(n, r)
                    }
                    i((u = u.apply(o, s || [])).next())
                })
            }

            function p(n, r) {
                var i, o, s, t, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return t = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                    return this
                }), t;

                function e(e) {
                    return function(t) {
                        return function(e) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                                switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        s = e;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: e[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                            a.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && a.label < s[1]) {
                                            a.label = s[1], s = e;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(e);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                e = r.call(n, a)
                            } catch (t) {
                                e = [6, t], o = 0
                            } finally {
                                i = s = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, t])
                    }
                }
            }
            var s, u = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                c = c || {},
                l = u;

            function f(t) {
                return "string" == typeof t
            }

            function d(t, e) {
                t = t.split("."), e = e || l;
                for (var n = 0; n < t.length; n++)
                    if (null == (e = e[t[n]])) return null;
                return e
            }

            function m() {}

            function y(t) {
                var e = typeof t;
                if ("object" == e) {
                    if (!t) return "null";
                    if (t instanceof Array) return "array";
                    if (t instanceof Object) return e;
                    var n = Object.prototype.toString.call(t);
                    if ("[object Window]" == n) return "object";
                    if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                } else if ("function" == e && void 0 === t.call) return "object";
                return e
            }

            function g(t) {
                return "array" == y(t)
            }

            function v(t) {
                var e = y(t);
                return "array" == e || "object" == e && "number" == typeof t.length
            }

            function b(t) {
                var e = typeof t;
                return "object" == e && null != t || "function" == e
            }
            var w = "closure_uid_" + (1e9 * Math.random() >>> 0),
                E = 0;

            function S(t, e, n) {
                return t.call.apply(t.bind, arguments)
            }

            function T(e, n, t) {
                if (!e) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var t = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(t, r), e.apply(n, t)
                    }
                }
                return function() {
                    return e.apply(n, arguments)
                }
            }

            function I(t, e, n) {
                return (I = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? S : T).apply(null, arguments)
            }

            function C(e, t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var t = n.slice();
                    return t.push.apply(t, arguments), e.apply(this, t)
                }
            }
            var D = Date.now || function() {
                return +new Date
            };

            function N(t, o) {
                function e() {}
                e.prototype = o.prototype, t.S = o.prototype, t.prototype = new e, (t.prototype.constructor = t).re = function(t, e, n) {
                    for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    return o.prototype[e].apply(t, r)
                }
            }

            function A() {
                this.i = this.i, this.j = this.j
            }
            A.prototype.i = !1, A.prototype.La = function() {
                if (!this.i && (this.i = !0, this.G(), 0)) this[w] || (this[w] = ++E)
            }, A.prototype.G = function() {
                if (this.j)
                    for (; this.j.length;) this.j.shift()()
            };
            var k = Array.prototype.indexOf ? function(t, e) {
                    return Array.prototype.indexOf.call(t, e, void 0)
                } : function(t, e) {
                    if (f(t)) return f(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e) return n;
                    return -1
                },
                R = Array.prototype.forEach ? function(t, e, n) {
                    Array.prototype.forEach.call(t, e, n)
                } : function(t, e, n) {
                    for (var r = t.length, i = f(t) ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
                };

            function M(t) {
                return Array.prototype.concat.apply([], arguments)
            }

            function _(t) {
                var e = t.length;
                if (0 < e) {
                    for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                    return n
                }
                return []
            }

            function O(t) {
                return /^[\s\xa0]*$/.test(t)
            }
            var P, L = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
            };

            function x(t, e) {
                return -1 != t.indexOf(e)
            }

            function q(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }
            t: {
                var F = l.navigator;
                if (F) {
                    var V = F.userAgent;
                    if (V) {
                        P = V;
                        break t
                    }
                }
                P = ""
            }

            function B(t, e, n) {
                for (var r in t) e.call(n, t[r], r, t)
            }

            function U(t) {
                var e, n = {};
                for (e in t) n[e] = t[e];
                return n
            }
            var Q = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function K(t, e) {
                for (var n, r, i = 1; i < arguments.length; i++) {
                    for (n in r = arguments[i]) t[n] = r[n];
                    for (var o = 0; o < Q.length; o++) n = Q[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
            }

            function j(t) {
                return j[" "](t), t
            }
            j[" "] = m;
            var W, G, z = x(P, "Opera"),
                H = x(P, "Trident") || x(P, "MSIE"),
                Y = x(P, "Edge"),
                X = Y || H,
                J = x(P, "Gecko") && !(x(P.toLowerCase(), "webkit") && !x(P, "Edge")) && !(x(P, "Trident") || x(P, "MSIE")) && !x(P, "Edge"),
                $ = x(P.toLowerCase(), "webkit") && !x(P, "Edge");

            function Z() {
                var t = l.document;
                return t ? t.documentMode : void 0
            }
            t: {
                var tt = "",
                    et = (G = P, J ? /rv:([^\);]+)(\)|;)/.exec(G) : Y ? /Edge\/([\d\.]+)/.exec(G) : H ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(G) : $ ? /WebKit\/(\S+)/.exec(G) : z ? /(?:Version)[ \/]?(\S+)/.exec(G) : void 0);
                if (et && (tt = et ? et[1] : ""), H) {
                    var nt = Z();
                    if (null != nt && nt > parseFloat(tt)) {
                        W = String(nt);
                        break t
                    }
                }
                W = tt
            }
            var rt, it = {};

            function ot(a) {
                return t = a, e = function() {
                    for (var t = 0, e = L(String(W)).split("."), n = L(String(a)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) {
                        var o = e[i] || "",
                            s = n[i] || "";
                        do {
                            if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == o[0].length && 0 == s[0].length) break;
                            t = q(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || q(0 == o[2].length, 0 == s[2].length) || q(o[2], s[2]), o = o[3], s = s[3]
                        } while (0 == t)
                    }
                    return 0 <= t
                }, n = it, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
                var t, e, n
            }
            var st = l.document;
            rt = st && H ? Z() || ("CSS1Compat" == st.compatMode ? parseInt(W, 10) : 5) : void 0;
            var at = !H || 9 <= Number(rt),
                ut = H && !ot("9"),
                ct = function() {
                    if (!l.addEventListener || !Object.defineProperty) return !1;
                    var t = !1,
                        e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                    try {
                        l.addEventListener("test", m, e), l.removeEventListener("test", m, e)
                    } catch (t) {}
                    return t
                }();

            function ht(t, e) {
                this.type = t, this.a = this.target = e, this.b = !1, this.hc = !0
            }

            function lt(t, e) {
                ht.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.f = null, t && this.g(t, e)
            }
            ht.prototype.c = function() {
                this.hc = !1
            }, N(lt, ht);
            var ft = {
                2: "touch",
                3: "pen",
                4: "mouse"
            };
            lt.prototype.g = function(t, e) {
                var n = this.type = t.type,
                    r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) {
                    if (J) {
                        t: {
                            try {
                                j(e.nodeName);
                                var i = !0;
                                break t
                            } catch (t) {}
                            i = !1
                        }
                        i || (e = null)
                    }
                } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                this.relatedTarget = e, this.screenY = r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = f(t.pointerType) ? t.pointerType : ft[t.pointerType] || "", (this.f = t).defaultPrevented && this.c()
            }, lt.prototype.c = function() {
                lt.S.c.call(this);
                var t = this.f;
                if (t.preventDefault) t.preventDefault();
                else if (t.returnValue = !1, ut) try {
                    (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                } catch (t) {}
            };
            var pt = "closure_listenable_" + (1e6 * Math.random() | 0),
                dt = 0;

            function mt(t, e, n, r, i) {
                this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.ya = i, this.key = ++dt, this.ja = this.oa = !1
            }

            function yt(t) {
                this.src = t, this.a = {}, this.b = 0
            }

            function gt(t, e, n, r) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (!o.ja && o.listener == e && o.capture == !!n && o.ya == r) return i
                }
                return -1
            }
            mt.prototype.a = function() {
                this.ja = !0, this.ya = this.src = this.proxy = this.listener = null
            }, (s = yt.prototype).add = function(t, e, n, r, i) {
                var o = t.toString();
                (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                var s = gt(t, e, r, i);
                return -1 < s ? (e = t[s], n || (e.oa = !1)) : ((e = new mt(e, this.src, o, !!r, i)).oa = n, t.push(e)), e
            }, s.Sc = function(t, e, n, r) {
                if ((t = t.toString()) in this.a) {
                    var i = this.a[t]; - 1 < (e = gt(i, e, n, r)) && (i[e].a(), Array.prototype.splice.call(i, e, 1), 0 == i.length && (delete this.a[t], this.b--))
                }
            }, s.fc = function(t) {
                var e = t.type;
                if (e in this.a) {
                    var n, r = this.a[e],
                        i = k(r, t);
                    (n = 0 <= i) && Array.prototype.splice.call(r, i, 1), n && (t.a(), 0 == this.a[e].length && (delete this.a[e], this.b--))
                }
            }, s.Tc = function() {
                var t;
                for (t in this.a) {
                    for (var e = this.a[t], n = 0; n < e.length; n++) e[n].a();
                    delete this.a[t], this.b--
                }
            }, s.Rc = function(t, e, n, r) {
                var i = -1;
                return (t = this.a[t.toString()]) && (i = gt(t, e, n, r)), -1 < i ? t[i] : null
            };
            var vt = "closure_lm_" + (1e6 * Math.random() | 0),
                bt = {};

            function wt(t, e, n, r, i) {
                if (r && r.once) return function t(e, n, r, i, o) {
                    if (g(n)) {
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                        return null
                    }
                    r = At(r);
                    return e && e[pt] ? e.Mb(n, r, b(i) ? !!i.capture : !!i, o) : Et(e, n, r, !0, i, o)
                }(t, e, n, r, i);
                if (g(e)) {
                    for (var o = 0; o < e.length; o++) wt(t, e[o], n, r, i);
                    return null
                }
                return n = At(n), t && t[pt] ? t.Lb(e, n, b(r) ? !!r.capture : !!r, i) : Et(t, e, n, !1, r, i)
            }

            function Et(t, e, n, r, i, o) {
                if (!e) throw Error("Invalid event type");
                var s = b(i) ? !!i.capture : !!i;
                if (s && !at) return null;
                var a, u, c = Dt(t);
                if (c || (t[vt] = c = new yt(t)), (n = c.add(e, n, r, s, o)).proxy) return n;
                if (a = Ct, r = u = at ? function(t) {
                        return a.call(u.src, u.listener, t)
                    } : function(t) {
                        if (!(t = a.call(u.src, u.listener, t))) return t
                    }, (n.proxy = r).src = t, r.listener = n, t.addEventListener) ct || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(Tt(e.toString()), r);
                else {
                    if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    t.addListener(r)
                }
                return n
            }

            function St(t) {
                if ("number" != typeof t && t && !t.ja) {
                    var e = t.src;
                    if (e && e[pt]) e.nc(t);
                    else {
                        var n = t.type,
                            r = t.proxy;
                        e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(Tt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Dt(e)) ? (n.fc(t), 0 == n.b && (n.src = null, e[vt] = null)) : t.a()
                    }
                }
            }

            function Tt(t) {
                return t in bt ? bt[t] : bt[t] = "on" + t
            }

            function It(t, e) {
                var n = t.listener,
                    r = t.ya || t.src;
                return t.oa && St(t), n.call(r, e)
            }

            function Ct(t, e) {
                return !!t.ja || (at ? It(t, new lt(e, this)) : It(t, e = new lt(e || d("window.event"), this)))
            }

            function Dt(t) {
                return (t = t[vt]) instanceof yt ? t : null
            }
            var Nt = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function At(e) {
                return "function" == y(e) ? e : (e[Nt] || (e[Nt] = function(t) {
                    return e.handleEvent(t)
                }), e[Nt])
            }

            function kt() {
                A.call(this), this.c = new yt(this), (this.K = this).F = null
            }
            N(kt, A), kt.prototype[pt] = !0, (s = kt.prototype).addEventListener = function(t, e, n, r) {
                wt(this, t, e, n, r)
            }, s.removeEventListener = function(t, e, n, r) {
                ! function t(e, n, r, i, o) {
                    if (g(n))
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                    else i = b(i) ? !!i.capture : !!i, r = At(r), e && e[pt] ? e.Qc(n, r, i, o) : e && (e = Dt(e)) && (n = e.Rc(n, r, i, o)) && St(n)
                }(this, t, e, n, r)
            }, s.dispatchEvent = function(t) {
                var e, n = this.F;
                if (n)
                    for (e = []; n; n = n.F) e.push(n);
                n = this.K;
                var r = t.type || t;
                if (f(t)) t = new ht(t, n);
                else if (t instanceof ht) t.target = t.target || n;
                else {
                    var i = t;
                    K(t = new ht(r, n), i)
                }
                if (i = !0, e)
                    for (var o = e.length - 1; !t.b && 0 <= o; o--) {
                        var s = t.a = e[o];
                        i = s.ua(r, !0, t) && i
                    }
                if (t.b || (i = (s = t.a = n).ua(r, !0, t) && i, t.b || (i = s.ua(r, !1, t) && i)), e)
                    for (o = 0; !t.b && o < e.length; o++) i = (s = t.a = e[o]).ua(r, !1, t) && i;
                return i
            }, s.G = function() {
                kt.S.G.call(this), this.Id(), this.F = null
            }, s.Lb = function(t, e, n, r) {
                return this.c.add(String(t), e, !1, n, r)
            }, s.Mb = function(t, e, n, r) {
                return this.c.add(String(t), e, !0, n, r)
            }, s.Qc = function(t, e, n, r) {
                this.c.Sc(String(t), e, n, r)
            }, s.nc = function(t) {
                this.c.fc(t)
            }, s.Id = function() {
                this.c && this.c.Tc()
            }, s.ua = function(t, e, n) {
                if (!(t = this.c.a[String(t)])) return !0;
                t = t.concat();
                for (var r = !0, i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o && !o.ja && o.capture == e) {
                        var s = o.listener,
                            a = o.ya || o.src;
                        o.oa && this.nc(o), r = !1 !== s.call(a, n) && r
                    }
                }
                return r && 0 != n.hc
            };
            var Rt = l.JSON.stringify;

            function Mt(t, e) {
                this.g = 100, this.c = t, this.h = e, this.b = 0, this.a = null
            }

            function _t() {
                this.b = this.a = null
            }
            Mt.prototype.get = function() {
                if (0 < this.b) {
                    this.b--;
                    var t = this.a;
                    this.a = t.next, t.next = null
                } else t = this.c();
                return t
            }, Mt.prototype.f = function(t) {
                this.h(t), this.b < this.g && (this.b++, t.next = this.a, this.a = t)
            };
            var Ot, Pt = new Mt(function() {
                return new Lt
            }, function(t) {
                t.reset()
            });

            function Lt() {
                this.next = this.b = this.a = null
            }

            function xt(t) {
                l.setTimeout(function() {
                    throw t
                }, 0)
            }
            _t.prototype.add = function(t, e) {
                var n = this.c();
                n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
            }, _t.prototype.f = function() {
                var t = null;
                return this.a && (t = this.a, this.a = this.a.next, this.a || (this.b = null), t.next = null), t
            }, _t.prototype.g = function(t) {
                Pt.f(t)
            }, _t.prototype.c = function() {
                return Pt.get()
            }, Lt.prototype.set = function(t, e) {
                this.a = t, this.b = e, this.next = null
            };
            var qt = !(Lt.prototype.reset = function() {
                    this.next = this.b = this.a = null
                }),
                Ft = new _t;

            function Vt() {
                for (var t; t = Ft.f();) {
                    try {
                        t.a.call(t.b)
                    } catch (t) {
                        xt(t)
                    }
                    Ft.g(t)
                }
                qt = !1
            }

            function Bt(t, e) {
                kt.call(this), this.b = t || 1, this.a = e || l, this.f = I(this.$d, this), this.g = D()
            }

            function Ut(t, e, n) {
                if ("function" == y(t)) n && (t = I(t, n));
                else {
                    if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                    t = I(t.handleEvent, t)
                }
                return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0)
            }

            function Qt(t, e, n) {
                A.call(this), this.f = null != n ? I(t, n) : t, this.c = e, this.b = I(this.Cd, this), this.a = []
            }

            function Kt(t) {
                A.call(this), this.b = t, this.a = {}
            }
            N(Bt, kt), (s = Bt.prototype).wa = !1, s.P = null, s.$d = function() {
                if (this.wa) {
                    var t = D() - this.g;
                    0 < t && t < .8 * this.b ? this.P = this.a.setTimeout(this.f, this.b - t) : (this.P && (this.a.clearTimeout(this.P), this.P = null), this.Gc(), this.wa && (this.Na(), this.start()))
                }
            }, s.Gc = function() {
                this.dispatchEvent("tick")
            }, s.start = function() {
                this.wa = !0, this.P || (this.P = this.a.setTimeout(this.f, this.b), this.g = D())
            }, s.Na = function() {
                this.wa = !1, this.P && (this.a.clearTimeout(this.P), this.P = null)
            }, s.G = function() {
                Bt.S.G.call(this), this.Na(), delete this.a
            }, N(Qt, A), (s = Qt.prototype).Ca = !1, s.ec = 0, s.ba = null, s.Hc = function(t) {
                this.a = arguments, this.ba || this.ec ? this.Ca = !0 : this.yb()
            }, s.Pc = function() {
                this.ba && (l.clearTimeout(this.ba), this.ba = null, this.Ca = !1, this.a = [])
            }, s.G = function() {
                Qt.S.G.call(this), this.Pc()
            }, s.Cd = function() {
                this.ba = null, this.Ca && !this.ec && (this.Ca = !1, this.yb())
            }, s.yb = function() {
                this.ba = Ut(this.b, this.c), this.f.apply(null, this.a)
            }, N(Kt, A);
            var jt = [];

            function Wt() {}(s = Kt.prototype).Jb = function(t, e, n) {
                this.wd(t, e, n)
            }, s.wd = function(t, e, n) {
                g(e) || (e && (jt[0] = e.toString()), e = jt);
                for (var r = 0; r < e.length; r++) {
                    var i = wt(t, e[r], n || this.handleEvent, !1, this.b || this);
                    if (!i) break;
                    this.a[i.key] = i
                }
            }, s.Kb = function() {
                B(this.a, function(t, e) {
                    this.a.hasOwnProperty(e) && St(t)
                }, this), this.a = {}
            }, s.G = function() {
                Kt.S.G.call(this), this.Kb()
            }, s.handleEvent = function() {
                throw Error("EventHandler.handleEvent not implemented")
            };
            var Gt = new kt;

            function zt(t) {
                ht.call(this, "serverreachability", t)
            }

            function Ht(t) {
                Gt.dispatchEvent(new zt(Gt, t))
            }

            function Yt(t) {
                ht.call(this, "statevent", t)
            }

            function Xt(t) {
                Gt.dispatchEvent(new Yt(Gt, t))
            }

            function Jt(t) {
                ht.call(this, "timingevent", t)
            }

            function $t(t, e) {
                if ("function" != y(t)) throw Error("Fn must not be null and must be a function");
                return l.setTimeout(function() {
                    t()
                }, e)
            }
            N(zt, ht), N(Yt, ht), N(Jt, ht);
            var Zt = {
                    NO_ERROR: 0,
                    ae: 1,
                    he: 2,
                    ge: 3,
                    de: 4,
                    fe: 5,
                    ie: 6,
                    qc: 7,
                    TIMEOUT: 8,
                    le: 9
                },
                te = {
                    ce: "complete",
                    pe: "success",
                    rc: "error",
                    qc: "abort",
                    ne: "ready",
                    oe: "readystatechange",
                    TIMEOUT: "timeout",
                    je: "incrementaldata",
                    me: "progress",
                    ee: "downloadprogress",
                    qe: "uploadprogress"
                };

            function ee() {}

            function ne() {}
            ee.prototype.a = null, ee.prototype.c = function() {
                return this.a || (this.a = {})
            };
            var re, ie = {
                OPEN: "a",
                be: "b",
                rc: "c",
                ke: "d"
            };

            function oe() {
                ht.call(this, "d")
            }

            function se() {
                ht.call(this, "c")
            }

            function ae() {}

            function ue(t, e, n) {
                this.g = t, this.da = e, this.ca = n || 1, this.I = new Kt(this), this.L = 45e3, t = X ? 125 : void 0, this.T = new Bt(t), this.J = null, this.b = !1, this.i = this.C = this.f = this.F = this.u = this.U = this.h = null, this.j = [], this.a = null, this.A = 0, this.c = this.v = null, this.o = -1, this.l = !1, this.K = 0, this.B = null, this.s = this.Y = this.H = !1
            }
            N(oe, ht), N(se, ht), N(ae, ee), ae.prototype.b = function() {
                return new XMLHttpRequest
            }, re = new ae;
            var ce = {},
                he = {};

            function le(t, e) {
                if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                else if (v(t) || f(t)) R(t, e, void 0);
                else {
                    if (t.O && "function" == typeof t.O) var n = t.O();
                    else if (t.D && "function" == typeof t.D) n = void 0;
                    else if (v(t) || f(t)) {
                        n = [];
                        for (var r = t.length, i = 0; i < r; i++) n.push(i)
                    } else
                        for (i in n = [], r = 0, t) n[r++] = i;
                    i = (r = function(t) {
                        if (t.D && "function" == typeof t.D) return t.D();
                        if (f(t)) return t.split("");
                        if (v(t)) {
                            for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                            return e
                        }
                        for (r in e = [], n = 0, t) e[n++] = t[r];
                        return e
                    }(t)).length;
                    for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
                }
            }

            function fe(t, e) {
                this.b = {}, this.a = [], this.c = 0;
                var n = arguments.length;
                if (1 < n) {
                    if (n % 2) throw Error("Uneven number of arguments");
                    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                } else t && this.fd(t)
            }

            function pe(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }(s = ue.prototype).ha = function(t) {
                this.J = t
            }, s.setTimeout = function(t) {
                this.L = t
            }, s.Xc = function(t) {
                this.K = t
            }, s.Qd = function(t) {
                this.j = t
            }, s.cb = function(t, e) {
                this.F = 1, this.f = t.N().za(), this.i = e, this.H = !0, this.ic(null)
            }, s.bb = function(t, e, n) {
                this.F = 1, this.f = t.N().za(), this.i = null, this.H = e, this.ic(n)
            }, s.ic = function(t) {
                this.u = D(), this.fa(), this.C = this.f.N(), this.C.Aa("t", this.ca), this.A = 0, this.a = this.g.sa(this.g.Da() ? t : null), 0 < this.K && (this.B = new Qt(I(this.oc, this, this.a), this.K)), this.I.Jb(this.a, "readystatechange", this.Hd), t = this.J ? U(this.J) : {}, this.i ? (this.v || (this.v = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", this.a.xa(this.C, this.v, this.i, t)) : (this.v = "GET", this.a.xa(this.C, this.v, null, t)), Ht(1)
            }, s.Hd = function(t) {
                t = t.target;
                var e = this.B;
                e && 3 == t.W() ? e.Hc() : this.oc(t)
            }, s.oc = function(t) {
                try {
                    t == this.a && this.Ed()
                } catch (t) {}
            }, s.Ed = function() {
                var t = this.a.W(),
                    e = this.a.Db(),
                    n = this.a.aa();
                if (!(t < 3 || 3 == t && !X && !this.a.va()))
                    if (this.l || 4 != t || 7 == e || Ht(8 == e || n <= 0 ? 3 : 2), this.pa(), this.o = n = this.a.aa(), e = this.a.va(), this.b = 200 == n) {
                        if (this.Td()) {
                            if (!(n = this.Kc())) return this.b = !1, this.c = 3, Xt(12), this.Z(), void this.ta();
                            this.s = !0, this.Wa(n)
                        }
                        this.H ? (this.vb(t, e), X && this.b && 3 == t && this.Yd()) : this.Wa(e), 4 == t && this.Z(), this.b && !this.l && (4 == t ? this.g.Va(this) : (this.b = !1, this.fa()))
                    } else 400 == n && 0 < e.indexOf("Unknown SID") ? (this.c = 3, Xt(12)) : (this.c = 0, Xt(13)), this.Z(), this.ta()
            }, s.Td = function() {
                return this.Y && !this.s
            }, s.Kc = function() {
                if (this.a) {
                    var t = this.a.ga("X-HTTP-Initial-Response");
                    if (t && !O(t)) return t
                }
                return null
            }, s.Md = function() {
                this.Y = !0
            }, s.vb = function(t, e) {
                for (var n = !0; !this.l && this.A < e.length;) {
                    var r = this.Lc(e);
                    if (r == he) {
                        4 == t && (this.c = 4, Xt(14), n = !1);
                        break
                    }
                    if (r == ce) {
                        this.c = 4, Xt(15), n = !1;
                        break
                    }
                    this.Wa(r)
                }
                4 == t && 0 == e.length && (this.c = 1, Xt(16), n = !1), this.b = this.b && n, n || (this.Z(), this.ta())
            }, s.Gd = function() {
                if (this.a) {
                    var t = this.a.W(),
                        e = this.a.va();
                    this.A < e.length && (this.pa(), this.vb(t, e), this.b && 4 != t && this.fa())
                }
            }, s.Yd = function() {
                this.I.Jb(this.T, "tick", this.Gd), this.T.start()
            }, s.Lc = function(t) {
                var e = this.A,
                    n = t.indexOf("\n", e);
                return -1 == n ? he : (e = Number(t.substring(e, n)), isNaN(e) ? ce : (n += 1) + e > t.length ? he : (t = t.substr(n, e), this.A = n + e, t))
            }, s.Ld = function(t) {
                this.F = 2, this.f = t.N().za(), t = !1, l.navigator && l.navigator.sendBeacon && (t = l.navigator.sendBeacon(this.f.toString(), "")), !t && l.Image && ((new Image).src = this.f, t = !0), t || (this.a = this.g.sa(null), this.a.xa(this.f)), this.u = D(), this.fa()
            }, s.cancel = function() {
                this.l = !0, this.Z()
            }, s.Kd = function(t) {
                t && this.setTimeout(t), this.h && (this.pa(), this.fa())
            }, s.fa = function() {
                this.U = D() + this.L, this.mc(this.L)
            }, s.mc = function(t) {
                if (null != this.h) throw Error("WatchDog timer not null");
                this.h = $t(I(this.Dd, this), t)
            }, s.pa = function() {
                this.h && (l.clearTimeout(this.h), this.h = null)
            }, s.Dd = function() {
                this.h = null;
                var t = D();
                0 <= t - this.U ? this.md() : this.mc(this.U - t)
            }, s.md = function() {
                2 != this.F && (Ht(3), Xt(17)), this.Z(), this.c = 2, this.ta()
            }, s.ta = function() {
                this.g.Tb() || this.l || this.g.Va(this)
            }, s.Z = function() {
                this.pa();
                var t = this.B;
                t && "function" == typeof t.La && t.La(), this.B = null, this.T.Na(), this.I.Kb(), this.a && (t = this.a, this.a = null, t.abort(), t.La())
            }, s.Wa = function(t) {
                try {
                    this.g.bc(this, t), Ht(4)
                } catch (t) {}
            }, (s = fe.prototype).D = function() {
                this.Ka();
                for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                return t
            }, s.O = function() {
                return this.Ka(), this.a.concat()
            }, s.Ra = function(t) {
                return pe(this.b, t)
            }, s.hd = function() {
                return 0 == this.c
            }, s.gd = function() {
                this.b = {}, this.c = this.a.length = 0
            }, s.Qb = function(t) {
                pe(this.b, t) && (delete this.b[t], this.c--, this.a.length > 2 * this.c && this.Ka())
            }, s.Ka = function() {
                if (this.c != this.a.length) {
                    for (var t = 0, e = 0; t < this.a.length;) {
                        var n = this.a[t];
                        pe(this.b, n) && (this.a[e++] = n), t++
                    }
                    this.a.length = e
                }
                if (this.c != this.a.length) {
                    var r = {};
                    for (e = t = 0; t < this.a.length;) pe(r, n = this.a[t]) || (r[this.a[e++] = n] = 1), t++;
                    this.a.length = e
                }
            }, s.get = function(t, e) {
                return pe(this.b, t) ? this.b[t] : e
            }, s.set = function(t, e) {
                pe(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
            }, s.fd = function(t) {
                if (t instanceof fe)
                    for (var e = t.O(), n = 0; n < e.length; n++) this.set(e[n], t.get(e[n]));
                else
                    for (e in t) this.set(e, t[e])
            }, s.forEach = function(t, e) {
                for (var n = this.O(), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = this.get(i);
                    t.call(e, o, i, this)
                }
            }, s.Pb = function() {
                return new fe(this)
            };
            var de = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function me(t, e) {
                var n;
                this.c = this.i = this.b = "", this.h = null, this.j = this.g = "", this.f = this.l = !1, t instanceof me ? (this.f = void 0 !== e ? e : t.f, this.ma(t.b), this.$a(t.i), this.ka(t.c), this.la(t.h), this.Ba(t.g), this.Za(t.a.Gb()), this.Ya(t.j)) : t && (n = String(t).match(de)) ? (this.f = !!e, this.ma(n[1] || "", !0), this.$a(n[2] || "", !0), this.ka(n[3] || "", !0), this.la(n[4]), this.Ba(n[5] || "", !0), this.Za(n[6] || "", !0), this.Ya(n[7] || "", !0)) : (this.f = !!e, this.a = new Ie(null, this.f))
            }

            function ye(t, e) {
                return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
            }

            function ge(t, e, n) {
                return f(t) ? (t = encodeURI(t).replace(e, ve), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
            }

            function ve(t) {
                return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
            }(s = me.prototype).toString = function() {
                var t = [],
                    e = this.b;
                e && t.push(ge(e, be, !0), ":");
                var n = this.c;
                return (n || "file" == e) && (t.push("//"), (e = this.i) && t.push(ge(e, be, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.h) && t.push(":", String(n))), (n = this.g) && (this.Sa() && "/" != n.charAt(0) && t.push("/"), t.push(ge(n, "/" == n.charAt(0) ? Ee : we, !0))), (n = this.Ic()) && t.push("?", n), (n = this.j) && t.push("#", ge(n, Te)), t.join("")
            }, s.resolve = function(t) {
                var e = this.N(),
                    n = t.qd();
                n ? e.ma(t.b) : n = t.rd(), n ? e.$a(t.i) : n = t.Sa(), n ? e.ka(t.c) : n = t.od();
                var r = t.g;
                if (n) e.la(t.h);
                else if (n = t.Sb()) {
                    if ("/" != r.charAt(0))
                        if (this.Sa() && !this.Sb()) r = "/" + r;
                        else {
                            var i = e.g.lastIndexOf("/"); - 1 != i && (r = e.g.substr(0, i + 1) + r)
                        }
                    if (".." == (i = r) || "." == i) r = "";
                    else if (x(i, "./") || x(i, "/.")) {
                        r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
                        for (var o = [], s = 0; s < i.length;) {
                            var a = i[s++];
                            "." == a ? r && s == i.length && o.push("") : ".." == a ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && s == i.length && o.push("")) : (o.push(a), r = !0)
                        }
                        r = o.join("/")
                    } else r = i
                }
                return n ? e.Ba(r) : n = t.pd(), n ? e.Za(t.a.Gb()) : n = t.nd(), n && e.Ya(t.j), e
            }, s.N = function() {
                return new me(this)
            }, s.ma = function(t, e) {
                this.M(), (this.b = e ? ye(t, !0) : t) && (this.b = this.b.replace(/:$/, ""))
            }, s.qd = function() {
                return !!this.b
            }, s.$a = function(t, e) {
                this.M(), this.i = e ? ye(t) : t
            }, s.rd = function() {
                return !!this.i
            }, s.ka = function(t, e) {
                this.M(), this.c = e ? ye(t, !0) : t
            }, s.Sa = function() {
                return !!this.c
            }, s.la = function(t) {
                if (this.M(), t) {
                    if (t = Number(t), isNaN(t) || t < 0) throw Error("Bad port number " + t);
                    this.h = t
                } else this.h = null
            }, s.od = function() {
                return null != this.h
            }, s.Ba = function(t, e) {
                this.M(), this.g = e ? ye(t, !0) : t
            }, s.Sb = function() {
                return !!this.g
            }, s.pd = function() {
                return "" !== this.a.toString()
            }, s.Za = function(t, e) {
                this.M(), t instanceof Ie ? (this.a = t, this.a.Oc(this.f)) : (e || (t = ge(t, Se)), this.a = new Ie(t, this.f))
            }, s.Ic = function() {
                return this.a.toString()
            }, s.m = function(t, e) {
                this.M(), this.a.set(t, e)
            }, s.Aa = function(t, e) {
                this.M(), g(e) || (e = [String(e)]), this.a.lc(t, e)
            }, s.Ya = function(t, e) {
                this.M(), this.j = e ? ye(t) : t
            }, s.nd = function() {
                return !!this.j
            }, s.za = function() {
                return this.M(), this.m("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ D()).toString(36)), this
            }, s.M = function() {
                if (this.l) throw Error("Tried to modify a read-only Uri")
            };
            var be = /[#\/\?@]/g,
                we = /[#\?:]/g,
                Ee = /[#\?]/g,
                Se = /[#\?@]/g,
                Te = /#/g;

            function Ie(t, e) {
                this.b = this.a = null, this.c = t || null, this.f = !!e
            }

            function Ce(t) {
                this.a = t, this.b = this.h = null, this.g = !1, this.i = null, this.c = -1, this.l = this.f = null
            }

            function De() {
                this.a = this.b = null
            }

            function Ne() {
                this.a = new fe
            }

            function Ae(t) {
                var e = typeof t;
                return "object" == e && t || "function" == e ? "o" + (t[w] || (t[w] = ++E)) : e.charAt(0) + t
            }

            function ke(t, e) {
                this.a = t, this.b = e
            }

            function Re(t) {
                this.g = t || Me, t = l.PerformanceNavigationTiming ? 0 < (t = l.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(l.Ja && l.Ja.Vb && l.Ja.Vb() && l.Ja.Vb().te), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Ne), this.b = null, this.c = []
            }(s = Ie.prototype).V = function() {
                if (!this.a && (this.a = new fe, this.b = 0, this.c)) {
                    var n = this;
                    ! function(t, e) {
                        if (t) {
                            t = t.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n].indexOf("="),
                                    i = null;
                                if (0 <= r) {
                                    var o = t[n].substring(0, r);
                                    i = t[n].substring(r + 1)
                                } else o = t[n];
                                e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(this.c, function(t, e) {
                        n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                    })
                }
            }, s.add = function(t, e) {
                this.V(), this.ia(), t = this.$(t);
                var n = this.a.get(t);
                return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
            }, s.Ib = function(t) {
                this.V(), t = this.$(t), this.a.Ra(t) && (this.ia(), this.b -= this.a.get(t).length, this.a.Qb(t))
            }, s.Hb = function(t) {
                return this.V(), t = this.$(t), this.a.Ra(t)
            }, s.forEach = function(n, r) {
                this.V(), this.a.forEach(function(t, e) {
                    R(t, function(t) {
                        n.call(r, t, e, this)
                    }, this)
                }, this)
            }, s.O = function() {
                this.V();
                for (var t = this.a.D(), e = this.a.O(), n = [], r = 0; r < e.length; r++)
                    for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                return n
            }, s.D = function(t) {
                this.V();
                var e = [];
                if (f(t)) this.Hb(t) && (e = M(e, this.a.get(this.$(t))));
                else {
                    t = this.a.D();
                    for (var n = 0; n < t.length; n++) e = M(e, t[n])
                }
                return e
            }, s.set = function(t, e) {
                return this.V(), this.ia(), t = this.$(t), this.Hb(t) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
            }, s.get = function(t, e) {
                return t && 0 < (t = this.D(t)).length ? String(t[0]) : e
            }, s.lc = function(t, e) {
                this.Ib(t), 0 < e.length && (this.ia(), this.a.set(this.$(t), _(e)), this.b += e.length)
            }, s.toString = function() {
                if (this.c) return this.c;
                if (!this.a) return "";
                for (var t = [], e = this.a.O(), n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = encodeURIComponent(String(r));
                    r = this.D(r);
                    for (var o = 0; o < r.length; o++) {
                        var s = i;
                        "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s)
                    }
                }
                return this.c = t.join("&")
            }, s.ia = function() {
                this.c = null
            }, s.Gb = function() {
                var t = new Ie;
                return t.c = this.c, this.a && (t.a = this.a.Pb(), t.b = this.b), t
            }, s.$ = function(t) {
                return t = String(t), this.f && (t = t.toLowerCase()), t
            }, s.Oc = function(t) {
                t && !this.f && (this.V(), this.ia(), this.a.forEach(function(t, e) {
                    var n = e.toLowerCase();
                    e != n && (this.Ib(e), this.lc(n, t))
                }, this)), this.f = t
            }, N(function() {}, function() {}), (s = Ce.prototype).R = null, s.Wc = function(t) {
                this.h = t
            }, s.Vc = function(t) {
                this.i = t, t = this.a.Cb(this.i), Xt(3);
                var e = this.a.H.b;
                null != e ? (this.f = this.a.Oa(e[0]), this.R = 1, this.rb()) : (t.Aa("MODE", "init"), !this.a.o && this.a.j && t.Aa("X-HTTP-Session-Id", this.a.j), this.b = new ue(this, void 0, void 0), this.b.ha(this.h), this.b.bb(t, !1, null), this.R = 0)
            }, s.rb = function() {
                var t = this.a.H.a;
                if (null != t) Xt(4), t ? (Xt(10), this.a.na(this, !1)) : (Xt(11), this.a.na(this, !0));
                else {
                    this.b = new ue(this, void 0, void 0), this.b.ha(this.h), t = this.a.Bb(this.f, this.i), Xt(4), t.Aa("TYPE", "xmlhttp");
                    var e = this.a.j,
                        n = this.a.Fa;
                    e && n && t.m(e, n), this.b.bb(t, !1, this.f)
                }
            }, s.sa = function(t) {
                return this.a.sa(t)
            }, s.abort = function() {
                this.b && (this.b.cancel(), this.b = null), this.c = -1
            }, s.Tb = function() {
                return !1
            }, s.bc = function(t, e) {
                if (this.c = t.o, 0 == this.R)
                    if (this.Uc(t), e) {
                        try {
                            var n = this.a.U.a(e)
                        } catch (t) {
                            return void this.a.ab(this)
                        }
                        this.f = this.a.Oa(n[0])
                    } else this.a.ab(this);
                else 1 == this.R && (this.g ? Xt(6) : "11111" == e ? (Xt(5), this.g = !0, this.Ac() && (this.c = 200, this.b.cancel(), Xt(11), this.a.na(this, !0))) : (Xt(7), this.g = !1))
            }, s.Va = function() {
                this.c = this.b.o, this.b.b ? 0 == this.R ? (this.R = 1, this.rb()) : 1 == this.R && (this.g ? (Xt(11), this.a.na(this, !0)) : (Xt(10), this.a.na(this, !1))) : (0 == this.R ? Xt(8) : 1 == this.R && Xt(9), this.a.ab(this))
            }, s.Uc = function(t) {
                if (!this.a.o && (t = t.a)) {
                    var e = t.ga("X-Client-Wire-Protocol");
                    this.l = e || null, this.a.j && (t = t.ga("X-HTTP-Session-Id")) && this.a.kc(t)
                }
            }, s.Da = function() {
                return this.a.Da()
            }, s.Pa = function() {
                return this.a.Pa()
            }, s.Ac = function() {
                return !H || 10 <= Number(rt)
            }, (s = Ne.prototype).add = function(t) {
                this.a.set(Ae(t), t)
            }, s.ed = function(t) {
                this.a.Qb(Ae(t))
            }, s.jd = function() {
                this.a.gd()
            }, s.Rb = function() {
                return this.a.hd()
            }, s.Ob = function(t) {
                return this.a.Ra(Ae(t))
            }, s.D = function() {
                return this.a.D()
            };
            var Me = 10;

            function _e() {
                this.b = this.a = void 0
            }

            function Oe() {
                this.f = new _e
            }

            function Pe(t, e, n, r, i) {
                try {
                    e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
                } catch (t) {}
            }(s = Re.prototype).kb = function(t) {
                !this.a && (x(t, "spdy") || x(t, "quic") || x(t, "h2")) && (this.f = this.g, this.a = new Ne, this.b && (this.Ha(this.b), this.b = null))
            }, s.Ub = function() {
                return !!this.b || !!this.a && this.a.a.c >= this.f
            }, s.Mc = function() {
                return this.b ? 1 : this.a ? this.a.a.c : 0
            }, s.Ta = function(t) {
                return this.b ? this.b == t : !!this.a && this.a.Ob(t)
            }, s.Ha = function(t) {
                this.a ? this.a.add(t) : this.b = t
            }, s.gc = function(t) {
                this.b && this.b == t ? this.b = null : this.a && this.a.Ob(t) && this.a.ed(t)
            }, s.cancel = function() {
                this.c = this.Xb(), this.b ? (this.b.cancel(), this.b = null) : this.a && !this.a.Rb() && (R(this.a.D(), function(t) {
                    t.cancel()
                }), this.a.jd())
            }, s.Xb = function() {
                if (null != this.b) return this.c.concat(this.b.j);
                if (null == this.a || this.a.Rb()) return _(this.c);
                var e = this.c;
                return R(this.a.D(), function(t) {
                    e = e.concat(t.j)
                }), e
            }, s.wc = function(t) {
                this.c = this.c.concat(t)
            }, s.Bc = function() {
                this.c.length = 0
            }, _e.prototype.stringify = function(t) {
                return l.JSON.stringify(t, this.a)
            }, _e.prototype.parse = function(t) {
                return l.JSON.parse(t, this.b)
            }, Oe.prototype.b = function(t, r, e) {
                var i = e || "";
                try {
                    le(t, function(t, e) {
                        var n = t;
                        b(t) && (n = Rt(t)), r.push(i + e + "=" + encodeURIComponent(n))
                    })
                } catch (t) {
                    throw r.push(i + "type=" + encodeURIComponent("_badmap")), t
                }
            }, Oe.prototype.c = function(t, e, n) {
                for (var r = -1;;) {
                    var i = ["count=" + e]; - 1 == r ? 0 < e ? (r = t[0].a, i.push("ofs=" + r)) : r = 0 : i.push("ofs=" + r);
                    for (var o = !0, s = 0; s < e; s++) {
                        var a = t[s].a,
                            u = t[s].b;
                        if ((a -= r) < 0) r = Math.max(0, t[s].a - 100), o = !1;
                        else try {
                            this.b(u, i, "req" + a + "_")
                        } catch (t) {
                            n && n(u)
                        }
                    }
                    if (o) return i.join("&")
                }
            }, Oe.prototype.a = function(t) {
                return this.f.parse(t)
            };
            var Le = l.JSON.parse;

            function xe(t) {
                kt.call(this), this.headers = new fe, this.l = t || null, this.b = !1, this.v = this.a = null, this.C = "", this.h = 0, this.f = "", this.g = this.B = this.o = this.A = !1, this.u = 0, this.s = null, this.J = qe, this.H = this.L = this.I = !1
            }
            N(xe, kt);
            var qe = "",
                Fe = /^https?$/i,
                Ve = ["POST", "PUT"];

            function Be(t) {
                return "content-type" == t.toLowerCase()
            }

            function Ue(t, e) {
                return {
                    type: e,
                    lengthComputable: t.lengthComputable,
                    loaded: t.loaded,
                    total: t.total
                }
            }

            function Qe(t, e, n) {
                t: {
                    for (r in n) {
                        var r = !1;
                        break t
                    }
                    r = !0
                }
                if (r) return t;
                var i;
                if (i = "", B(n, function(t, e) {
                        i += e, i += ":", i += t, i += "\r\n"
                    }), n = i, f(t)) {
                    if (e = encodeURIComponent(String(e)), e += n = null != n ? "=" + encodeURIComponent(String(n)) : "") {
                        if ((n = t.indexOf("#")) < 0 && (n = t.length), (r = t.indexOf("?")) < 0 || n < r) {
                            r = n;
                            var o = ""
                        } else o = t.substring(r + 1, n);
                        n = (t = [t.substr(0, r), o, t.substr(n)])[1], t[1] = e ? n ? n + "&" + e : e : n, t = t[0] + (t[1] ? "?" + t[1] : "") + t[2]
                    }
                    return t
                }
                return t.m(e, n),
                t
            }

            function Ke(t) {
                this.gb = 22, this.g = [], this.H = new De, this.da = this.fb = this.C = this.Ea = this.a = this.Fa = this.j = this.ca = this.f = this.J = this.h = null, this.sc = !0, this.zc = this.L = 0, this.uc = !!d("internalChannelParams.failFast", t), this.Ga = this.v = this.s = this.l = this.i = this.b = null, this.eb = !0, this.B = this.jb = this.K = -1, this.Y = this.u = this.A = 0, this.tc = d("internalChannelParams.baseRetryDelayMs", t) || 5e3, this.Fc = d("internalChannelParams.retryDelaySeedMs", t) || 1e4, this.pc = d("internalChannelParams.forwardChannelMaxRetries", t) || 2, this.ib = d("internalChannelParams.forwardChannelRequestTimeoutMs", t) || 2e4, this.xc = t && t.ue || void 0, this.F = void 0, this.vc = 0, this.T = t && t.supportsCrossDomainXhr || !1, this.I = "", this.c = new Re(t && t.concurrentRequestLimit), this.U = new Oe, this.o = !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest, (this.hb = t && t.fastHandshake || !1) && !this.o && (this.o = !0), t && t.se && (this.eb = !1)
            }

            function je() {}

            function We() {
                if (H && !(10 <= Number(rt))) throw Error("Environmental error: no available transport.")
            }

            function Ge(t, e) {
                kt.call(this), this.a = new Ke(e), this.g = t, this.o = e && e.testUrl ? e.testUrl : function(t) {
                    for (var e = t, n = 1; n < arguments.length; n++) {
                        var r, i = arguments[n];
                        0 == i.lastIndexOf("/", 0) ? e = i : ((r = "" == e) || (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r), e += r ? i : "/" + i)
                    }
                    return e
                }(this.g, "test"), this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
                    "X-Client-Protocol": "webchannel"
                }), this.a.cd(t), t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
                    "X-WebChannel-Content-Type": e.messageContentType
                }), e && e.tb && (t ? t["X-WebChannel-Client-Profile"] = e.tb : t = {
                    "X-WebChannel-Client-Profile": e.tb
                }), this.a.Pd(t), (t = e && e.httpHeadersOverwriteParam) && !O(t) && this.a.Nd(t), this.l = e && e.supportsCrossDomainXhr || !1, this.h = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !O(e) && (this.a.Od(e), null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new Ye(this)
            }

            function ze(t) {
                oe.call(this);
                var e = t.__sm__;
                if (e) {
                    t: {
                        for (var n in e) {
                            t = n;
                            break t
                        }
                        t = void 0
                    }(this.f = t) ? (t = this.f, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e
                }
                else this.data = t
            }

            function He() {
                se.call(this), this.status = 1
            }

            function Ye(t) {
                this.a = t
            }(s = xe.prototype).Sd = function(t) {
                this.I = t
            }, s.xa = function(t, e, n, r) {
                if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.C + "; newUri=" + t);
                e = e ? e.toUpperCase() : "GET", this.C = t, this.f = "", this.h = 0, this.A = !1, this.b = !0, this.a = this.Ec(), this.v = this.l ? this.l.c() : re.c(), this.a.onreadystatechange = I(this.ac, this), this.L && "onprogress" in this.a && (this.a.onprogress = I(function(t) {
                    this.Zb(t, !0)
                }, this), this.a.upload && (this.a.upload.onprogress = I(this.Zb, this)));
                try {
                    this.B = !0, this.a.open(e, String(t), !0), this.B = !1
                } catch (t) {
                    return void this.Ab(t)
                }
                t = n || "";
                var i, o = this.headers.Pb();
                r && le(r, function(t, e) {
                    o.set(e, t)
                }), r = function(t) {
                    t: {
                        for (var e = Be, n = t.length, r = f(t) ? t.split("") : t, i = 0; i < n; i++)
                            if (i in r && e.call(void 0, r[i], i, t)) {
                                e = i;
                                break t
                            }
                        e = -1
                    }
                    return e < 0 ? null : f(t) ? t.charAt(e) : t[e]
                }(o.O()), n = l.FormData && t instanceof l.FormData, !(0 <= k(Ve, e)) || r || n || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(t, e) {
                    this.a.setRequestHeader(e, t)
                }, this), this.J && (this.a.responseType = this.J), "withCredentials" in this.a && this.a.withCredentials !== this.I && (this.a.withCredentials = this.I);
                try {
                    this.sb(), 0 < this.u && ((this.H = (i = this.a, H && ot(9) && "number" == typeof i.timeout && void 0 !== i.ontimeout)) ? (this.a.timeout = this.u, this.a.ontimeout = I(this.Nb, this)) : this.s = Ut(this.Nb, this.u, this)), this.o = !0, this.a.send(t), this.o = !1
                } catch (t) {
                    this.Ab(t)
                }
            }, s.Ec = function() {
                return this.l ? this.l.b() : re.b()
            }, s.Nb = function() {
                void 0 !== c && this.a && (this.f = "Timed out after " + this.u + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8))
            }, s.Ab = function(t) {
                this.b = !1, this.a && (this.g = !0, this.a.abort(), this.g = !1), this.f = t, this.h = 5, this.xb(), this.qa()
            }, s.xb = function() {
                this.A || (this.A = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"))
            }, s.abort = function(t) {
                this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.qa())
            }, s.G = function() {
                this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), this.qa(!0)), xe.S.G.call(this)
            }, s.ac = function() {
                this.i || (this.B || this.o || this.g ? this.$b() : this.Bd())
            }, s.Bd = function() {
                this.$b()
            }, s.$b = function() {
                if (this.b && void 0 !== c && (!this.v[1] || 4 != this.W() || 2 != this.aa()))
                    if (this.o && 4 == this.W()) Ut(this.ac, 0, this);
                    else if (this.dispatchEvent("readystatechange"), this.td()) {
                    this.b = !1;
                    try {
                        this.vd() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.h = 6, this.f = this.Fb() + " [" + this.aa() + "]", this.xb())
                    } finally {
                        this.qa()
                    }
                }
            }, s.Zb = function(t, e) {
                this.dispatchEvent(Ue(t, "progress")), this.dispatchEvent(Ue(t, e ? "downloadprogress" : "uploadprogress"))
            }, s.qa = function(t) {
                if (this.a) {
                    this.sb();
                    var e = this.a,
                        n = this.v[0] ? m : null;
                    this.v = this.a = null, t || this.dispatchEvent("ready");
                    try {
                        e.onreadystatechange = n
                    } catch (t) {}
                }
            }, s.sb = function() {
                this.a && this.H && (this.a.ontimeout = null), this.s && (l.clearTimeout(this.s), this.s = null)
            }, s.td = function() {
                return 4 == this.W()
            }, s.vd = function() {
                var t = this.aa();
                t: switch (t) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var e = !0;
                        break t;
                    default:
                        e = !1
                }
                return e || 0 === t && !this.ud()
            }, s.ud = function() {
                var t = String(this.C).match(de)[1] || null;
                return !t && l.self && l.self.location && (t = (t = l.self.location.protocol).substr(0, t.length - 1)), Fe.test(t ? t.toLowerCase() : "")
            }, s.W = function() {
                return this.a ? this.a.readyState : 0
            }, s.aa = function() {
                try {
                    return 2 < this.W() ? this.a.status : -1
                } catch (t) {
                    return -1
                }
            }, s.Fb = function() {
                try {
                    return 2 < this.W() ? this.a.statusText : ""
                } catch (t) {
                    return ""
                }
            }, s.va = function() {
                try {
                    return this.a ? this.a.responseText : ""
                } catch (t) {
                    return ""
                }
            }, s.Nc = function(t) {
                if (this.a) {
                    var e = this.a.responseText;
                    return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Le(e)
                }
            }, s.ga = function(t) {
                return this.a ? this.a.getResponseHeader(t) : null
            }, s.Db = function() {
                return this.h
            }, s.dd = function() {
                return f(this.f) ? this.f : String(this.f)
            }, (s = Ke.prototype).qb = 8, s.w = 1, s.bd = function(t, e, n) {
                Xt(0), this.Ea = e, this.ca = n || {}, this.o && (this.H.b = [], this.H.a = !1), this.Dc(t)
            }, s.Qa = function() {
                if (this.lb(), 3 == this.w) {
                    var t = this.L++,
                        e = this.C.N();
                    e.m("SID", this.I), e.m("RID", t), e.m("TYPE", "terminate"), this.ea(e), new ue(this, t, void 0).Ld(e)
                }
                this.Yb()
            }, s.Dc = function(t) {
                this.v = new Ce(this), null === this.f && this.v.Wc(this.h);
                var e = t;
                this.f && this.h && (e = Qe(t, this.f, this.h)), this.v.Vc(e)
            }, s.Cc = function() {
                this.C = this.Cb(this.Ea), this.Ma()
            }, s.lb = function() {
                this.v && (this.v.abort(), this.v = null), this.a && (this.a.cancel(), this.a = null), this.l && (l.clearTimeout(this.l), this.l = null), this.ra(), this.c.cancel(), this.i && (l.clearTimeout(this.i), this.i = null)
            }, s.cd = function(t) {
                this.h = t
            }, s.Pd = function(t) {
                this.J = t
            }, s.Nd = function(t) {
                this.f = t
            }, s.Od = function(t) {
                this.j = t
            }, s.kc = function(t) {
                this.Fa = t
            }, s.Rd = function() {
                this.T = !0
            }, s.jc = function(t) {
                this.b = t
            }, s.sd = function() {
                return !this.Ga
            }, s.Xa = function(t) {
                this.g.push(new ke(this.zc++, t)), 3 == this.w && this.Ma()
            }, s.Jc = function() {
                return this.uc ? 0 : this.pc
            }, s.Tb = function() {
                return 0 == this.w
            }, s.Ma = function() {
                this.c.Ub() || this.i || (this.i = $t(I(this.dc, this), 0), this.A = 0)
            }, s.xd = function(t) {
                return !(this.c.Mc() >= this.c.f - (this.i ? 1 : 0)) && (this.i ? (this.g = t.j.concat(this.g), !0) : !(1 == this.w || 2 == this.w || this.A >= this.Jc()) && (this.i = $t(I(this.dc, this, t), this.Eb(this.A)), this.A++, !0))
            }, s.dc = function(t) {
                this.i = null, this.Xd(t)
            }, s.Xd = function(t) {
                1 == this.w ? t || (this.Fd(), this.w = 2) : 3 == this.w && (t ? this.Wb(t) : 0 == this.g.length || this.c.Ub() || this.Wb())
            }, s.Fd = function() {
                this.L = Math.floor(1e5 * Math.random());
                var t = this.L++,
                    e = new ue(this, t, void 0),
                    n = this.h;
                this.J && (n ? K(n = U(n), this.J) : n = this.J), null === this.f && e.ha(n);
                var r = this.wb(e),
                    i = this.C.N();
                i.m("RID", t), 0 < this.gb && i.m("CVER", this.gb), this.o && this.j && i.m("X-HTTP-Session-Id", this.j), this.ea(i), this.f && n && Qe(i, this.f, n), this.c.Ha(e), this.hb ? (i.m("$req", r), i.m("SID", "null"), e.Md(), e.cb(i, null)) : e.cb(i, r)
            }, s.Wb = function(t) {
                var e;
                e = t ? t.da : this.L++;
                var n = this.C.N();
                n.m("SID", this.I), n.m("RID", e), n.m("AID", this.K), this.ea(n), this.f && this.h && Qe(n, this.f, this.h), e = new ue(this, e, this.A + 1), null === this.f && e.ha(this.h), t && this.Jd(t), t = this.wb(e), e.setTimeout(Math.round(.5 * this.ib) + Math.round(.5 * this.ib * Math.random())), this.c.Ha(e), e.cb(n, t)
            }, s.ea = function(n) {
                this.b && le({}, function(t, e) {
                    n.m(e, t)
                })
            }, s.wb = function(t) {
                var e = Math.min(this.g.length, 1e3),
                    n = this.b ? I(this.b.yc, this.b, this) : null;
                return n = this.U.c(this.g, e, n), t.Qd(this.g.splice(0, e)), n
            }, s.Jd = function(t) {
                this.g = t.j.concat(this.g)
            }, s.zb = function() {
                if (!this.a && !this.l) {
                    this.Y = 1;
                    var t = this.cc;
                    Ot || (e = l.Promise.resolve(void 0), Ot = function() {
                        e.then(Vt)
                    }), qt || (Ot(), qt = !0), Ft.add(t, this), this.u = 0
                }
                var e
            }, s.Ua = function() {
                return !(this.a || this.l || 3 <= this.u) && (this.Y++, this.l = $t(I(this.cc, this), this.Eb(this.u)), this.u++, !0)
            }, s.cc = function() {
                this.l = null, this.Vd()
            }, s.Vd = function() {
                this.a = new ue(this, "rpc", this.Y), null === this.f && this.a.ha(this.h), this.a.Xc(this.vc);
                var t = this.fb.N();
                t.m("RID", "rpc"), t.m("SID", this.I), t.m("CI", this.Ga ? "0" : "1"), t.m("AID", this.K), this.ea(t), t.m("TYPE", "xmlhttp"), this.f && this.h && Qe(t, this.f, this.h), this.F && this.a.setTimeout(this.F), this.a.bb(t, !0, this.da)
            }, s.na = function(t, e) {
                var n = t.l;
                n && this.c.kb(n), this.Ga = this.eb && e, this.B = t.c, this.Cc()
            }, s.ab = function(t) {
                this.B = t.c, this.X(2)
            }, s.bc = function(t, e) {
                if (0 != this.w && (this.a == t || this.c.Ta(t)))
                    if (this.B = t.o, !t.s && this.c.Ta(t) && 3 == this.w) {
                        try {
                            var n = this.U.a(e)
                        } catch (t) {
                            n = null
                        }
                        g(n) && 3 == n.length ? this.ld(n, t) : this.X(11)
                    } else(t.s || this.a == t) && this.ra(), O(e) || (n = this.U.a(e), this.Ad(n, t))
            }, s.ld = function(t, e) {
                0 == t[0] ? this.kd(e) : (this.jb = t[1], 0 < this.jb - this.K && this.Ud(t[2]) && !this.s && (this.s = $t(I(this.yd, this), 6e3)))
            }, s.kd = function(t) {
                if (!this.l) {
                    if (this.a) {
                        if (!(this.a.u + 3e3 < t.u)) return;
                        this.ra(), this.a.cancel(), this.a = null
                    }
                    this.Ua(), Xt(18)
                }
            }, s.Ud = function(t) {
                return t < 37500 && !this.sd() && 0 == this.u
            }, s.Oa = function(t) {
                return this.sc ? this.b ? this.b.$c(t) : t : null
            }, s.yd = function() {
                null != this.s && (this.s = null, this.a.cancel(), this.a = null, this.Ua(), Xt(19))
            }, s.ra = function() {
                null != this.s && (l.clearTimeout(this.s), this.s = null)
            }, s.Va = function(t) {
                var e = null;
                if (this.a == t) {
                    this.ra(), this.a = null;
                    var n = 2
                } else {
                    if (!this.c.Ta(t)) return;
                    e = t.j, this.c.gc(t), n = 1
                }
                if (this.B = t.o, 0 != this.w)
                    if (t.b) 1 == n ? (n = D() - t.u, Gt.dispatchEvent(new Jt(Gt, t.i ? t.i.length : 0, n, this.A)), this.Ma()) : this.zb();
                    else {
                        var r = t.c;
                        if (3 == r || 0 == r && 0 < this.B || !(1 == n && this.xd(t) || 2 == n && this.Ua())) switch (e && 0 < e.length && this.c.wc(e), r) {
                            case 1:
                                this.X(5);
                                break;
                            case 4:
                                this.X(10);
                                break;
                            case 3:
                                this.X(6);
                                break;
                            default:
                                this.X(2)
                        }
                    }
            }, s.Eb = function(t) {
                var e = this.tc + Math.floor(Math.random() * this.Fc);
                return this.Pa() || (e *= 2), e * t
            }, s.ad = function(t) {
                if (this.o && (t = t.a)) {
                    var e = t.ga("X-Client-Wire-Protocol");
                    e && this.c.kb(e), this.j && (t = t.ga("X-HTTP-Session-Id")) && (this.kc(t), this.C.m(this.j, t))
                }
            }, s.Ad = function(t, e) {
                for (var n = this.b && this.b.Ia ? [] : null, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (this.K = i[0], i = i[1], 2 == this.w)
                        if ("c" == i[0]) {
                            this.I = i[1], this.da = this.Oa(i[2]);
                            var o = i[3];
                            null != o && (this.qb = o), null != (i = i[5]) && "number" == typeof i && 0 < i && (this.F = 1.5 * i), this.ad(e), this.w = 3, this.b && this.b.pb(), this.Wd(e)
                        } else "stop" != i[0] && "close" != i[0] || this.X(7);
                    else 3 == this.w && ("stop" == i[0] || "close" == i[0] ? (n && 0 != n.length && (this.b.Ia(this, n), n.length = 0), "stop" == i[0] ? this.X(7) : this.Qa()) : "noop" != i[0] && (n ? n.push(i) : this.b && this.b.ob(i)), this.u = 0)
                }
                n && 0 != n.length && this.b.Ia(this, n)
            }, s.Wd = function(t) {
                this.fb = this.Bb(this.da, this.Ea), t.s ? (this.c.gc(t), t.Kd(this.F), this.a = t) : this.zb()
            }, s.X = function(t) {
                if (2 == t) {
                    var e = null;
                    this.b && (e = null);
                    var n = I(this.Zd, this);
                    e || (e = new me("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || e.ma("https"), e.za()), r = e.toString(), i = n, o = new Wt, (s = new Image).onload = C(Pe, o, s, "TestLoadImage: loaded", !0, i), s.onerror = C(Pe, o, s, "TestLoadImage: error", !1, i), s.onabort = C(Pe, o, s, "TestLoadImage: abort", !1, i), s.ontimeout = C(Pe, o, s, "TestLoadImage: timeout", !1, i), l.setTimeout(function() {
                        s.ontimeout && s.ontimeout()
                    }, 1e4), s.src = r
                } else Xt(2);
                var r, i, o, s;
                this.zd(t)
            }, s.Zd = function(t) {
                Xt(t ? 2 : 1)
            }, s.zd = function(t) {
                this.w = 0, this.b && this.b.nb(t), this.Yb(), this.lb()
            }, s.Yb = function() {
                this.w = 0, this.B = -1, this.b && (0 == this.c.Xb().length && 0 == this.g.length || (this.c.Bc(), _(this.g), this.g.length = 0), this.b.mb())
            }, s.Cb = function(t) {
                return this.ub(null, t)
            }, s.Bb = function(t, e) {
                return this.ub(this.Da() ? t : null, e)
            }, s.ub = function(t, e) {
                var n, r, i, o, s, a, u = (n = e) instanceof me ? n.N() : new me(n, void 0);
                if ("" != u.c) t && u.ka(t + "." + u.c), u.la(u.h);
                else {
                    var c, h = l.location;
                    c = t ? t + "." + h.hostname : h.hostname, r = h.protocol, i = c, o = +h.port, s = e, a = new me(null, void 0), r && a.ma(r), i && a.ka(i), o && a.la(o), s && a.Ba(s), u = a
                }
                return this.ca && B(this.ca, function(t, e) {
                    u.m(e, t)
                }), t = this.j, e = this.Fa, t && e && u.m(t, e), u.m("VER", this.qb), this.ea(u), u
            }, s.sa = function(t) {
                if (t && !this.T) throw Error("Can't create secondary domain capable XhrIo object.");
                return (t = new xe(this.xc)).Sd(this.T), t
            }, s.Pa = function() {
                return !!this.b && !0
            }, s.Da = function() {
                return this.T
            }, (s = je.prototype).Ia = null, s.pb = function() {}, s.ob = function() {}, s.nb = function() {}, s.mb = function() {}, s.yc = function() {}, s.$c = function(t) {
                return t
            }, We.prototype.a = function(t, e) {
                return new Ge(t, e)
            }, N(Ge, kt), (s = Ge.prototype).addEventListener = function(t, e, n, r) {
                Ge.S.addEventListener.call(this, t, e, n, r)
            }, s.removeEventListener = function(t, e, n, r) {
                Ge.S.removeEventListener.call(this, t, e, n, r)
            }, s.Yc = function() {
                this.a.jc(this.f), this.l && this.a.Rd(), this.a.bd(this.o, this.g, this.b || void 0)
            }, s.close = function() {
                this.a.Qa()
            }, s.Zc = function(t) {
                if (f(t)) {
                    var e = {};
                    e.__data__ = t, this.a.Xa(e)
                } else this.h ? ((e = {}).__data__ = Rt(t), this.a.Xa(e)) : this.a.Xa(t)
            }, s.G = function() {
                this.a.jc(null), delete this.f, this.a.Qa(), delete this.a, Ge.S.G.call(this)
            }, N(ze, oe), N(He, se), N(Ye, je), Ye.prototype.pb = function() {
                this.a.dispatchEvent("a")
            }, Ye.prototype.ob = function(t) {
                this.a.dispatchEvent(new ze(t))
            }, Ye.prototype.nb = function(t) {
                this.a.dispatchEvent(new He(t))
            }, Ye.prototype.mb = function() {
                this.a.dispatchEvent("b")
            };
            var Xe = C(function(t, e) {
                function n() {}
                n.prototype = t.prototype;
                var r = new n;
                return t.apply(r, Array.prototype.slice.call(arguments, 1)), r
            }, We);
            We.prototype.createWebChannel = We.prototype.a, Ge.prototype.send = Ge.prototype.Zc, Ge.prototype.open = Ge.prototype.Yc, Ge.prototype.close = Ge.prototype.close, Zt.NO_ERROR = 0, Zt.TIMEOUT = 8, Zt.HTTP_ERROR = 6, te.COMPLETE = "complete", (ne.EventType = ie).OPEN = "a", ie.CLOSE = "b", ie.ERROR = "c", ie.MESSAGE = "d", kt.prototype.listen = kt.prototype.Lb, xe.prototype.listenOnce = xe.prototype.Mb, xe.prototype.getLastError = xe.prototype.dd, xe.prototype.getLastErrorCode = xe.prototype.Db, xe.prototype.getStatus = xe.prototype.aa, xe.prototype.getStatusText = xe.prototype.Fb, xe.prototype.getResponseJson = xe.prototype.Nc, xe.prototype.getResponseText = xe.prototype.va, xe.prototype.send = xe.prototype.xa;
            var Je = {
                    createWebChannelTransport: Xe,
                    ErrorCode: Zt,
                    EventType: te,
                    WebChannel: ne,
                    XhrIo: xe
                },
                $e = Je.createWebChannelTransport,
                Ze = Je.ErrorCode,
                tn = Je.EventType,
                en = Je.WebChannel,
                nn = Je.XhrIo,
                rn = "FirebaseError",
                on = Error.captureStackTrace,
                sn = function(t, e) {
                    if (this.code = t, this.message = e, on) on(this, cn.prototype.create);
                    else try {
                        throw Error.apply(this, arguments)
                    } catch (t) {
                        this.name = rn, Object.defineProperty(this, "stack", {
                            get: function() {
                                return t.stack
                            }
                        })
                    }
                };
            sn.prototype = Object.create(Error.prototype), (sn.prototype.constructor = sn).prototype.name = rn;
            var an, un, cn = function() {
                    function t(t, e, n) {
                        this.service = t, this.serviceName = e, this.errors = n, this.pattern = /\{\$([^}]+)}/g
                    }
                    return t.prototype.create = function(t, r) {
                        void 0 === r && (r = {});
                        var e, n = this.errors[t],
                            i = this.service + "/" + t;
                        e = void 0 === n ? "Error" : n.replace(this.pattern, function(t, e) {
                            var n = r[e];
                            return void 0 !== n ? n.toString() : "<" + e + "?>"
                        }), e = this.serviceName + ": " + e + " (" + i + ").";
                        var o = new sn(i, e);
                        for (var s in r) r.hasOwnProperty(s) && "_" !== s.slice(-1) && (o[s] = r[s]);
                        return o
                    }, t
                }(),
                hn = (function(n) {
                    function t() {
                        var t = n.call(this) || this;
                        t.chain_ = [], t.buf_ = [], t.W_ = [], t.pad_ = [], t.inbuf_ = 0, t.total_ = 0, t.blockSize = 64, t.pad_[0] = 128;
                        for (var e = 1; e < t.blockSize; ++e) t.pad_[e] = 0;
                        return t.reset(), t
                    }
                    a(t, n), t.prototype.reset = function() {
                        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                    }, t.prototype.compress_ = function(t, e) {
                        e || (e = 0);
                        var n = this.W_;
                        if ("string" == typeof t)
                            for (var r = 0; r < 16; r++) n[r] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
                        else
                            for (r = 0; r < 16; r++) n[r] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
                        for (r = 16; r < 80; r++) {
                            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                            n[r] = 4294967295 & (i << 1 | i >>> 31)
                        }
                        var o, s, a = this.chain_[0],
                            u = this.chain_[1],
                            c = this.chain_[2],
                            h = this.chain_[3],
                            l = this.chain_[4];
                        for (r = 0; r < 80; r++) {
                            s = r < 40 ? r < 20 ? (o = h ^ u & (c ^ h), 1518500249) : (o = u ^ c ^ h, 1859775393) : r < 60 ? (o = u & c | h & (u | c), 2400959708) : (o = u ^ c ^ h, 3395469782);
                            i = (a << 5 | a >>> 27) + o + l + s + n[r] & 4294967295;
                            l = h, h = c, c = 4294967295 & (u << 30 | u >>> 2), u = a, a = i
                        }
                        this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + u & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295
                    }, t.prototype.update = function(t, e) {
                        if (null != t) {
                            void 0 === e && (e = t.length);
                            for (var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < e;) {
                                if (0 == o)
                                    for (; r <= n;) this.compress_(t, r), r += this.blockSize;
                                if ("string" == typeof t) {
                                    for (; r < e;)
                                        if (i[o] = t.charCodeAt(r), ++r, ++o == this.blockSize) {
                                            this.compress_(i), o = 0;
                                            break
                                        }
                                } else
                                    for (; r < e;)
                                        if (i[o] = t[r], ++r, ++o == this.blockSize) {
                                            this.compress_(i), o = 0;
                                            break
                                        }
                            }
                            this.inbuf_ = o, this.total_ += e
                        }
                    }, t.prototype.digest = function() {
                        var t = [],
                            e = 8 * this.total_;
                        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                        for (var n = this.blockSize - 1; 56 <= n; n--) this.buf_[n] = 255 & e, e /= 256;
                        this.compress_(this.buf_);
                        var r = 0;
                        for (n = 0; n < 5; n++)
                            for (var i = 24; 0 <= i; i -= 8) t[r] = this.chain_[n] >> i & 255, ++r;
                        return t
                    }
                }(function() {
                    this.blockSize = -1
                }), sc.SDK_VERSION),
                ln = new r("@firebase/firestore");

            function fn() {
                return ln.logLevel === o.DEBUG ? an.DEBUG : ln.logLevel === o.SILENT ? an.SILENT : an.ERROR
            }

            function pn(t) {
                switch (t) {
                    case an.DEBUG:
                        ln.logLevel = o.DEBUG;
                        break;
                    case an.ERROR:
                        ln.logLevel = o.ERROR;
                        break;
                    case an.SILENT:
                        ln.logLevel = o.SILENT;
                        break;
                    default:
                        ln.error("Firestore (" + hn + "): Invalid value passed to `setLogLevel`")
                }
            }

            function dn(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (ln.logLevel <= o.DEBUG) {
                    var i = n.map(yn);
                    ln.debug.apply(ln, ["Firestore (" + hn + ") [" + t + "]: " + e].concat(i))
                }
            }

            function mn(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (ln.logLevel <= o.ERROR) {
                    var r = e.map(yn);
                    ln.error.apply(ln, ["Firestore (" + hn + "): " + t].concat(r))
                }
            }

            function yn(e) {
                if ("string" == typeof e) return e;
                var t = bn.getPlatform();
                try {
                    return t.formatJSON(e)
                } catch (t) {
                    return e
                }
            }

            function gn(t) {
                var e = "FIRESTORE (" + hn + ") INTERNAL ASSERTION FAILED: " + t;
                throw mn(e), new Error(e)
            }

            function vn(t, e) {
                t || gn(e)
            }(un = an || (an = {}))[un.DEBUG = 0] = "DEBUG", un[un.ERROR = 1] = "ERROR", un[un.SILENT = 2] = "SILENT";
            var bn = function() {
                function e() {}
                return e.setPlatform = function(t) {
                    e.platform && gn("Platform already defined"), e.platform = t
                }, e.getPlatform = function() {
                    return e.platform || gn("Platform not set"), e.platform
                }, e
            }();

            function wn() {
                return bn.getPlatform().emptyByteString
            }
            var En = {
                    OK: "ok",
                    CANCELLED: "cancelled",
                    UNKNOWN: "unknown",
                    INVALID_ARGUMENT: "invalid-argument",
                    DEADLINE_EXCEEDED: "deadline-exceeded",
                    NOT_FOUND: "not-found",
                    ALREADY_EXISTS: "already-exists",
                    PERMISSION_DENIED: "permission-denied",
                    UNAUTHENTICATED: "unauthenticated",
                    RESOURCE_EXHAUSTED: "resource-exhausted",
                    FAILED_PRECONDITION: "failed-precondition",
                    ABORTED: "aborted",
                    OUT_OF_RANGE: "out-of-range",
                    UNIMPLEMENTED: "unimplemented",
                    INTERNAL: "internal",
                    UNAVAILABLE: "unavailable",
                    DATA_LOSS: "data-loss"
                },
                Sn = function(r) {
                    function t(t, e) {
                        var n = r.call(this, e) || this;
                        return n.code = t, n.message = e, n.name = "FirebaseError", n.toString = function() {
                            return n.name + ": [code=" + n.code + "]: " + n.message
                        }, n
                    }
                    return a(t, r), t
                }(Error);

            function Tn(t, e) {
                function n() {
                    var t = "This constructor is private.";
                    throw e && (t += " ", t += e), new Sn(En.INVALID_ARGUMENT, t)
                }
                for (var r in n.prototype = t.prototype, t) t.hasOwnProperty(r) && (n[r] = t[r]);
                return n
            }

            function In(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function Cn(t, e) {
                return void 0 !== t ? t : e
            }

            function Dn(t, e) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Number(n);
                        isNaN(r) || e(r, t[n])
                    }
            }

            function Nn(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }

            function An(t) {
                for (var e in vn(null != t && "object" == typeof t, "isEmpty() expects object parameter."), t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }

            function kn(t, e) {
                if (0 !== e.length) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + Gn(e.length, "argument") + ".")
            }

            function Rn(t, e, n) {
                if (e.length !== n) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires " + Gn(n, "argument") + ", but was called with " + Gn(e.length, "argument") + ".")
            }

            function Mn(t, e, n) {
                if (e.length < n) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires at least " + Gn(n, "argument") + ", but was called with " + Gn(e.length, "argument") + ".")
            }

            function _n(t, e, n, r) {
                if (e.length < n || e.length > r) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + Gn(e.length, "argument") + ".")
            }

            function On(t, e, n, r) {
                Vn(t, e, Wn(n) + " argument", r)
            }

            function Pn(t, e, n, r) {
                void 0 !== r && On(t, e, n, r)
            }

            function Ln(t, e, n, r) {
                Vn(t, e, n + " option", r)
            }

            function xn(t, e, n, r) {
                void 0 !== r && Ln(t, e, n, r)
            }

            function qn(t, e, n, r, i) {
                void 0 !== r && function(t, e, n, r, i) {
                    if (!(r instanceof Array)) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + Un(r));
                    for (var o = 0; o < r.length; ++o)
                        if (!i(r[o])) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + Un(r[o]))
                }(t, e, n, r, i)
            }

            function Fn(t, e, n, r, i) {
                void 0 !== r && function(t, e, n, r, i) {
                    for (var o = [], s = 0, a = i; s < a.length; s++) {
                        var u = a[s];
                        if (u === r) return;
                        o.push(Un(u))
                    }
                    var c = Un(r);
                    throw new Sn(En.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "))
                }(t, 0, n, r, i)
            }

            function Vn(t, e, n, r) {
                if (!("object" === e ? Bn(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
                    var i = Un(r);
                    throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i)
                }
            }

            function Bn(t) {
                return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
            }

            function Un(t) {
                if (void 0 === t) return "undefined";
                if (null === t) return "null";
                if ("string" == typeof t) return 20 < t.length && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
                if ("number" == typeof t || "boolean" == typeof t) return "" + t;
                if ("object" != typeof t) return "function" == typeof t ? "a function" : gn("Unknown wrong type: " + typeof t);
                if (t instanceof Array) return "an array";
                var e = function(t) {
                    if (t.constructor) {
                        var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                        if (e && 1 < e.length) return e[1]
                    }
                    return null
                }(t);
                return e ? "a custom " + e + " object" : "an object"
            }

            function Qn(t, e, n) {
                if (void 0 === n) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Wn(e) + " argument, but it was undefined.")
            }

            function Kn(n, t, r) {
                Nn(t, function(t, e) {
                    if (r.indexOf(t) < 0) throw new Sn(En.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + n + "(). Available options: " + r.join(", "))
                })
            }

            function jn(t, e, n, r) {
                var i = Un(r);
                return new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires its " + Wn(n) + " argument to be a " + e + ", but it was: " + i)
            }

            function Wn(t) {
                switch (t) {
                    case 1:
                        return "first";
                    case 2:
                        return "second";
                    case 3:
                        return "third";
                    default:
                        return t + "th"
                }
            }

            function Gn(t, e) {
                return t + " " + e + (1 === t ? "" : "s")
            }
            var zn = function() {
                function t() {}
                return t.newId = function() {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                    return vn(20 === e.length, "Invalid auto ID: " + e), e
                }, t
            }();

            function Hn(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }

            function Yn(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (!t[n].isEqual(e[n])) return !1;
                return !0
            }

            function Xn(t) {
                return t + "\0"
            }

            function Jn() {
                if ("undefined" == typeof Uint8Array) throw new Sn(En.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
            }

            function $n() {
                if (!bn.getPlatform().base64Available) throw new Sn(En.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
            }
            var Zn, tr, er, nr, rr = function() {
                    function e(t) {
                        $n(), this._binaryString = t
                    }
                    return e.fromBase64String = function(t) {
                        Rn("Blob.fromBase64String", arguments, 1), On("Blob.fromBase64String", "string", 1, t), $n();
                        try {
                            return new e(bn.getPlatform().atob(t))
                        } catch (t) {
                            throw new Sn(En.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t)
                        }
                    }, e.fromUint8Array = function(t) {
                        if (Rn("Blob.fromUint8Array", arguments, 1), Jn(), !(t instanceof Uint8Array)) throw jn("Blob.fromUint8Array", "Uint8Array", 1, t);
                        return new e(Array.prototype.map.call(t, function(t) {
                            return String.fromCharCode(t)
                        }).join(""))
                    }, e.prototype.toBase64 = function() {
                        return Rn("Blob.toBase64", arguments, 0), $n(), bn.getPlatform().btoa(this._binaryString)
                    }, e.prototype.toUint8Array = function() {
                        Rn("Blob.toUint8Array", arguments, 0), Jn();
                        for (var t = new Uint8Array(this._binaryString.length), e = 0; e < this._binaryString.length; e++) t[e] = this._binaryString.charCodeAt(e);
                        return t
                    }, e.prototype.toString = function() {
                        return "Blob(base64: " + this.toBase64() + ")"
                    }, e.prototype.isEqual = function(t) {
                        return this._binaryString === t._binaryString
                    }, e.prototype._compareTo = function(t) {
                        return Hn(this._binaryString, t._binaryString)
                    }, e
                }(),
                ir = Tn(rr, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
                or = function() {
                    function t(t, e) {
                        if (Rn("GeoPoint", arguments, 2), On("GeoPoint", "number", 1, t), On("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || 90 < t) throw new Sn(En.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                        if (!isFinite(e) || e < -180 || 180 < e) throw new Sn(En.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                        this._lat = t, this._long = e
                    }
                    return Object.defineProperty(t.prototype, "latitude", {
                        get: function() {
                            return this._lat
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "longitude", {
                        get: function() {
                            return this._long
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isEqual = function(t) {
                        return this._lat === t._lat && this._long === t._long
                    }, t.prototype._compareTo = function(t) {
                        return Hn(this._lat, t._lat) || Hn(this._long, t._long)
                    }, t
                }(),
                sr = function() {
                    function n(t, e) {
                        if (this.seconds = t, (this.nanoseconds = e) < 0) throw new Sn(En.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                        if (1e9 <= e) throw new Sn(En.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                        if (t < -62135596800) throw new Sn(En.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
                        if (253402300800 <= t) throw new Sn(En.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
                    }
                    return n.now = function() {
                        return n.fromMillis(Date.now())
                    }, n.fromDate = function(t) {
                        return n.fromMillis(t.getTime())
                    }, n.fromMillis = function(t) {
                        var e = Math.floor(t / 1e3);
                        return new n(e, 1e6 * (t - 1e3 * e))
                    }, n.prototype.toDate = function() {
                        return new Date(this.toMillis())
                    }, n.prototype.toMillis = function() {
                        return 1e3 * this.seconds + this.nanoseconds / 1e6
                    }, n.prototype._compareTo = function(t) {
                        return this.seconds === t.seconds ? Hn(this.nanoseconds, t.nanoseconds) : Hn(this.seconds, t.seconds)
                    }, n.prototype.isEqual = function(t) {
                        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
                    }, n.prototype.toString = function() {
                        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                    }, n
                }(),
                ar = function(t, e, n, r) {
                    this.databaseId = t, this.persistenceKey = e, this.host = n, this.ssl = r
                },
                ur = "(default)",
                cr = function() {
                    function e(t, e) {
                        this.projectId = t, this.database = e || ur
                    }
                    return Object.defineProperty(e.prototype, "isDefaultDatabase", {
                        get: function() {
                            return this.database === ur
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(t) {
                        return t instanceof e && t.projectId === this.projectId && t.database === this.database
                    }, e.prototype.compareTo = function(t) {
                        return Hn(this.projectId, t.projectId) || Hn(this.database, t.database)
                    }, e
                }(),
                hr = "__name__",
                lr = function() {
                    function n(t, e, n) {
                        this.init(t, e, n)
                    }
                    return n.prototype.init = function(t, e, n) {
                        void 0 === e ? e = 0 : e > t.length && gn("offset " + e + " out of range " + t.length), void 0 === n ? n = t.length - e : n > t.length - e && gn("length " + n + " out of range " + (t.length - e)), this.segments = t, this.offset = e, this.len = n
                    }, n.prototype.construct = function(t, e, n) {
                        var r = Object.create(Object.getPrototypeOf(this));
                        return r.init(t, e, n), r
                    }, Object.defineProperty(n.prototype, "length", {
                        get: function() {
                            return this.len
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.isEqual = function(t) {
                        return 0 === n.comparator(this, t)
                    }, n.prototype.child = function(t) {
                        var e = this.segments.slice(this.offset, this.limit());
                        return t instanceof n ? t.forEach(function(t) {
                            e.push(t)
                        }) : "string" == typeof t ? e.push(t) : gn("Unknown parameter type for Path.child(): " + t), this.construct(e)
                    }, n.prototype.limit = function() {
                        return this.offset + this.length
                    }, n.prototype.popFirst = function(t) {
                        return t = void 0 === t ? 1 : t, vn(this.length >= t, "Can't call popFirst() with less segments"), this.construct(this.segments, this.offset + t, this.length - t)
                    }, n.prototype.popLast = function() {
                        return vn(!this.isEmpty(), "Can't call popLast() on empty path"), this.construct(this.segments, this.offset, this.length - 1)
                    }, n.prototype.firstSegment = function() {
                        return vn(!this.isEmpty(), "Can't call firstSegment() on empty path"), this.segments[this.offset]
                    }, n.prototype.lastSegment = function() {
                        return this.get(this.length - 1)
                    }, n.prototype.get = function(t) {
                        return vn(t < this.length, "Index out of range"), this.segments[this.offset + t]
                    }, n.prototype.isEmpty = function() {
                        return 0 === this.length
                    }, n.prototype.isPrefixOf = function(t) {
                        if (t.length < this.length) return !1;
                        for (var e = 0; e < this.length; e++)
                            if (this.get(e) !== t.get(e)) return !1;
                        return !0
                    }, n.prototype.isImmediateParentOf = function(t) {
                        if (this.length + 1 !== t.length) return !1;
                        for (var e = 0; e < this.length; e++)
                            if (this.get(e) !== t.get(e)) return !1;
                        return !0
                    }, n.prototype.forEach = function(t) {
                        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
                    }, n.prototype.toArray = function() {
                        return this.segments.slice(this.offset, this.limit())
                    }, n.comparator = function(t, e) {
                        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                            var i = t.get(r),
                                o = e.get(r);
                            if (i < o) return -1;
                            if (o < i) return 1
                        }
                        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                    }, n
                }(),
                fr = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return a(e, t), e.prototype.canonicalString = function() {
                        return this.toArray().join("/")
                    }, e.prototype.toString = function() {
                        return this.canonicalString()
                    }, e.fromString = function(t) {
                        if (0 <= t.indexOf("//")) throw new Sn(En.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
                        return new e(t.split("/").filter(function(t) {
                            return 0 < t.length
                        }))
                    }, e.EMPTY_PATH = new e([]), e
                }(lr),
                pr = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                dr = function(t) {
                    function u() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return a(u, t), u.isValidIdentifier = function(t) {
                        return pr.test(t)
                    }, u.prototype.canonicalString = function() {
                        return this.toArray().map(function(t) {
                            return t = t.replace("\\", "\\\\").replace("`", "\\`"), u.isValidIdentifier(t) || (t = "`" + t + "`"), t
                        }).join(".")
                    }, u.prototype.toString = function() {
                        return this.canonicalString()
                    }, u.prototype.isKeyField = function() {
                        return 1 === this.length && this.get(0) === hr
                    }, u.keyField = function() {
                        return new u([hr])
                    }, u.fromServerFormat = function(t) {
                        for (var e = [], n = "", r = 0, i = function() {
                                if (0 === n.length) throw new Sn(En.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                                e.push(n), n = ""
                            }, o = !1; r < t.length;) {
                            var s = t[r];
                            if ("\\" === s) {
                                if (r + 1 === t.length) throw new Sn(En.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                                var a = t[r + 1];
                                if ("\\" !== a && "." !== a && "`" !== a) throw new Sn(En.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                                n += a, r += 2
                            } else "`" === s ? o = !o : "." !== s || o ? n += s : i(), r++
                        }
                        if (i(), o) throw new Sn(En.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                        return new u(e)
                    }, u.EMPTY_PATH = new u([]), u
                }(lr),
                mr = function() {
                    function e(t) {
                        this.path = t, vn(e.isDocumentKey(t), "Invalid DocumentKey with an odd number of segments: " + t.toArray().join("/"))
                    }
                    return e.prototype.hasCollectionId = function(t) {
                        return 2 <= this.path.length && this.path.get(this.path.length - 2) === t
                    }, e.prototype.isEqual = function(t) {
                        return null !== t && 0 === fr.comparator(this.path, t.path)
                    }, e.prototype.toString = function() {
                        return this.path.toString()
                    }, e.comparator = function(t, e) {
                        return fr.comparator(t.path, e.path)
                    }, e.isDocumentKey = function(t) {
                        return t.length % 2 == 0
                    }, e.fromSegments = function(t) {
                        return new e(new fr(t.slice()))
                    }, e.fromPathString = function(t) {
                        return new e(fr.fromString(t))
                    }, e.EMPTY = new e(new fr([])), e
                }(),
                yr = function() {
                    function t(t, e) {
                        this.key = t, this.version = e
                    }
                    return t.compareByKey = function(t, e) {
                        return mr.comparator(t.key, e.key)
                    }, t
                }(),
                gr = function(s) {
                    function e(t, e, n, r, i) {
                        var o = s.call(this, t, e) || this;
                        return o.data = n, o.proto = i, o.hasLocalMutations = !!r.hasLocalMutations, o.hasCommittedMutations = !!r.hasCommittedMutations, o
                    }
                    return a(e, s), e.prototype.field = function(t) {
                        return this.data.field(t)
                    }, e.prototype.fieldValue = function(t) {
                        var e = this.field(t);
                        return e ? e.value() : void 0
                    }, e.prototype.value = function() {
                        return this.data.value()
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.data.isEqual(t.data) && this.hasLocalMutations === t.hasLocalMutations && this.hasCommittedMutations === t.hasCommittedMutations
                    }, e.prototype.toString = function() {
                        return "Document(" + this.key + ", " + this.version + ", " + this.data.toString() + ", {hasLocalMutations: " + this.hasLocalMutations + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
                    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                        get: function() {
                            return this.hasLocalMutations || this.hasCommittedMutations
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.compareByField = function(t, e, n) {
                        var r = e.field(t),
                            i = n.field(t);
                        return void 0 !== r && void 0 !== i ? r.compareTo(i) : gn("Trying to compare documents on fields that don't exist")
                    }, e
                }(yr),
                vr = function(i) {
                    function e(t, e, n) {
                        var r = i.call(this, t, e) || this;
                        return r.hasCommittedMutations = !(!n || !n.hasCommittedMutations), r
                    }
                    return a(e, i), e.prototype.toString = function() {
                        return "NoDocument(" + this.key + ", " + this.version + ")"
                    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                        get: function() {
                            return this.hasCommittedMutations
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(t) {
                        return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                    }, e
                }(yr),
                br = function(n) {
                    function e(t, e) {
                        return n.call(this, t, e) || this
                    }
                    return a(e, n), e.prototype.toString = function() {
                        return "UnknownDocument(" + this.key + ", " + this.version + ")"
                    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(t) {
                        return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                    }, e
                }(yr),
                wr = function() {
                    function n(t, e) {
                        this.comparator = t, this.root = e || Sr.EMPTY
                    }
                    return n.prototype.insert = function(t, e) {
                        return new n(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, Sr.BLACK, null, null))
                    }, n.prototype.remove = function(t) {
                        return new n(this.comparator, this.root.remove(t, this.comparator).copy(null, null, Sr.BLACK, null, null))
                    }, n.prototype.get = function(t) {
                        for (var e = this.root; !e.isEmpty();) {
                            var n = this.comparator(t, e.key);
                            if (0 === n) return e.value;
                            n < 0 ? e = e.left : 0 < n && (e = e.right)
                        }
                        return null
                    }, n.prototype.indexOf = function(t) {
                        for (var e = 0, n = this.root; !n.isEmpty();) {
                            var r = this.comparator(t, n.key);
                            if (0 === r) return e + n.left.size;
                            n = r < 0 ? n.left : (e += n.left.size + 1, n.right)
                        }
                        return -1
                    }, n.prototype.isEmpty = function() {
                        return this.root.isEmpty()
                    }, Object.defineProperty(n.prototype, "size", {
                        get: function() {
                            return this.root.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.minKey = function() {
                        return this.root.minKey()
                    }, n.prototype.maxKey = function() {
                        return this.root.maxKey()
                    }, n.prototype.inorderTraversal = function(t) {
                        return this.root.inorderTraversal(t)
                    }, n.prototype.forEach = function(n) {
                        this.inorderTraversal(function(t, e) {
                            return n(t, e), !1
                        })
                    }, n.prototype.toString = function() {
                        var n = [];
                        return this.inorderTraversal(function(t, e) {
                            return n.push(t + ":" + e), !1
                        }), "{" + n.join(", ") + "}"
                    }, n.prototype.reverseTraversal = function(t) {
                        return this.root.reverseTraversal(t)
                    }, n.prototype.getIterator = function() {
                        return new Er(this.root, null, this.comparator, !1)
                    }, n.prototype.getIteratorFrom = function(t) {
                        return new Er(this.root, t, this.comparator, !1)
                    }, n.prototype.getReverseIterator = function() {
                        return new Er(this.root, null, this.comparator, !0)
                    }, n.prototype.getReverseIteratorFrom = function(t) {
                        return new Er(this.root, t, this.comparator, !0)
                    }, n
                }(),
                Er = function() {
                    function t(t, e, n, r) {
                        this.isReverse = r, this.nodeStack = [];
                        for (var i = 1; !t.isEmpty();)
                            if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                            else {
                                if (0 === i) {
                                    this.nodeStack.push(t);
                                    break
                                }
                                this.nodeStack.push(t), t = this.isReverse ? t.right : t.left
                            }
                    }
                    return t.prototype.getNext = function() {
                        vn(0 < this.nodeStack.length, "getNext() called on iterator when hasNext() is false.");
                        var t = this.nodeStack.pop(),
                            e = {
                                key: t.key,
                                value: t.value
                            };
                        if (this.isReverse)
                            for (t = t.left; !t.isEmpty();) this.nodeStack.push(t), t = t.right;
                        else
                            for (t = t.right; !t.isEmpty();) this.nodeStack.push(t), t = t.left;
                        return e
                    }, t.prototype.hasNext = function() {
                        return 0 < this.nodeStack.length
                    }, t.prototype.peek = function() {
                        if (0 === this.nodeStack.length) return null;
                        var t = this.nodeStack[this.nodeStack.length - 1];
                        return {
                            key: t.key,
                            value: t.value
                        }
                    }, t
                }(),
                Sr = function() {
                    function o(t, e, n, r, i) {
                        this.key = t, this.value = e, this.color = null != n ? n : o.RED, this.left = null != r ? r : o.EMPTY, this.right = null != i ? i : o.EMPTY, this.size = this.left.size + 1 + this.right.size
                    }
                    return o.prototype.copy = function(t, e, n, r, i) {
                        return new o(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
                    }, o.prototype.isEmpty = function() {
                        return !1
                    }, o.prototype.inorderTraversal = function(t) {
                        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
                    }, o.prototype.reverseTraversal = function(t) {
                        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
                    }, o.prototype.min = function() {
                        return this.left.isEmpty() ? this : this.left.min()
                    }, o.prototype.minKey = function() {
                        return this.min().key
                    }, o.prototype.maxKey = function() {
                        return this.right.isEmpty() ? this.key : this.right.maxKey()
                    }, o.prototype.insert = function(t, e, n) {
                        var r = this,
                            i = n(t, r.key);
                        return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp()
                    }, o.prototype.removeMin = function() {
                        if (this.left.isEmpty()) return o.EMPTY;
                        var t = this;
                        return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp()
                    }, o.prototype.remove = function(t, e) {
                        var n, r = this;
                        if (e(t, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(t, e), null);
                        else {
                            if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === e(t, r.key)) {
                                if (r.right.isEmpty()) return o.EMPTY;
                                n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin())
                            }
                            r = r.copy(null, null, null, null, r.right.remove(t, e))
                        }
                        return r.fixUp()
                    }, o.prototype.isRed = function() {
                        return this.color
                    }, o.prototype.fixUp = function() {
                        var t = this;
                        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t
                    }, o.prototype.moveRedLeft = function() {
                        var t = this.colorFlip();
                        return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), t
                    }, o.prototype.moveRedRight = function() {
                        var t = this.colorFlip();
                        return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t
                    }, o.prototype.rotateLeft = function() {
                        var t = this.copy(null, null, o.RED, null, this.right.left);
                        return this.right.copy(null, null, this.color, t, null)
                    }, o.prototype.rotateRight = function() {
                        var t = this.copy(null, null, o.RED, this.left.right, null);
                        return this.left.copy(null, null, this.color, null, t)
                    }, o.prototype.colorFlip = function() {
                        var t = this.left.copy(null, null, !this.left.color, null, null),
                            e = this.right.copy(null, null, !this.right.color, null, null);
                        return this.copy(null, null, !this.color, t, e)
                    }, o.prototype.checkMaxDepth = function() {
                        var t = this.check();
                        return Math.pow(2, t) <= this.size + 1
                    }, o.prototype.check = function() {
                        if (this.isRed() && this.left.isRed()) throw gn("Red node has red child(" + this.key + "," + this.value + ")");
                        if (this.right.isRed()) throw gn("Right child of (" + this.key + "," + this.value + ") is red");
                        var t = this.left.check();
                        if (t !== this.right.check()) throw gn("Black depths differ");
                        return t + (this.isRed() ? 0 : 1)
                    }, o.EMPTY = null, o.RED = !0, o.BLACK = !1, o
                }(),
                Tr = function() {
                    function t() {
                        this.size = 0
                    }
                    return t.prototype.copy = function(t, e, n, r, i) {
                        return this
                    }, t.prototype.insert = function(t, e, n) {
                        return new Sr(t, e)
                    }, t.prototype.remove = function(t, e) {
                        return this
                    }, t.prototype.isEmpty = function() {
                        return !0
                    }, t.prototype.inorderTraversal = function(t) {
                        return !1
                    }, t.prototype.reverseTraversal = function(t) {
                        return !1
                    }, t.prototype.minKey = function() {
                        return null
                    }, t.prototype.maxKey = function() {
                        return null
                    }, t.prototype.isRed = function() {
                        return !1
                    }, t.prototype.checkMaxDepth = function() {
                        return !0
                    }, t.prototype.check = function() {
                        return 0
                    }, t
                }();
            Sr.EMPTY = new Tr, (tr = Zn || (Zn = {}))[tr.NullValue = 0] = "NullValue", tr[tr.BooleanValue = 1] = "BooleanValue", tr[tr.NumberValue = 2] = "NumberValue", tr[tr.TimestampValue = 3] = "TimestampValue", tr[tr.StringValue = 4] = "StringValue", tr[tr.BlobValue = 5] = "BlobValue", tr[tr.RefValue = 6] = "RefValue", tr[tr.GeoPointValue = 7] = "GeoPointValue", tr[tr.ArrayValue = 8] = "ArrayValue", tr[tr.ObjectValue = 9] = "ObjectValue", (nr = er || (er = {}))[nr.Default = 0] = "Default", nr[nr.Estimate = 1] = "Estimate", nr[nr.Previous = 2] = "Previous";
            var Ir = function() {
                    function n(t, e) {
                        this.serverTimestampBehavior = t, this.timestampsInSnapshots = e
                    }
                    return n.fromSnapshotOptions = function(t, e) {
                        switch (t.serverTimestamps) {
                            case "estimate":
                                return new n(er.Estimate, e);
                            case "previous":
                                return new n(er.Previous, e);
                            case "none":
                            case void 0:
                                return new n(er.Default, e);
                            default:
                                return gn("fromSnapshotOptions() called with invalid options.")
                        }
                    }, n
                }(),
                Cr = function() {
                    function t() {}
                    return t.prototype.toString = function() {
                        var t = this.value();
                        return null === t ? "null" : t.toString()
                    }, t.prototype.defaultCompareTo = function(t) {
                        return vn(this.typeOrder !== t.typeOrder, "Default compareTo should not be used for values of same type."), Hn(this.typeOrder, t.typeOrder)
                    }, t
                }(),
                Dr = function(e) {
                    function n() {
                        var t = e.call(this) || this;
                        return t.typeOrder = Zn.NullValue, t.internalValue = null, t
                    }
                    return a(n, e), n.prototype.value = function(t) {
                        return null
                    }, n.prototype.isEqual = function(t) {
                        return t instanceof n
                    }, n.prototype.compareTo = function(t) {
                        return t instanceof n ? 0 : this.defaultCompareTo(t)
                    }, n.INSTANCE = new n, n
                }(Cr),
                Nr = function(n) {
                    function e(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.BooleanValue, e
                    }
                    return a(e, n), e.prototype.value = function(t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.internalValue === t.internalValue
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? Hn(this, t) : this.defaultCompareTo(t)
                    }, e.of = function(t) {
                        return t ? e.TRUE : e.FALSE
                    }, e.TRUE = new e(!0), e.FALSE = new e(!1), e
                }(Cr),
                Ar = function(n) {
                    function r(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.NumberValue, e
                    }
                    return a(r, n), r.prototype.value = function(t) {
                        return this.internalValue
                    }, r.prototype.compareTo = function(t) {
                        return t instanceof r ? (e = this.internalValue, n = t.internalValue, e < n ? -1 : n < e ? 1 : e === n ? 0 : isNaN(e) ? isNaN(n) ? 0 : -1 : 1) : this.defaultCompareTo(t);
                        var e, n
                    }, r
                }(Cr);

            function kr(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
            var Rr = function(e) {
                    function n(t) {
                        return e.call(this, t) || this
                    }
                    return a(n, e), n.prototype.isEqual = function(t) {
                        return t instanceof n && kr(this.internalValue, t.internalValue)
                    }, n
                }(Ar),
                Mr = function(n) {
                    function e(t) {
                        var e = n.call(this, t) || this;
                        return e.internalValue = t, e
                    }
                    return a(e, n), e.prototype.isEqual = function(t) {
                        return t instanceof e && kr(this.internalValue, t.internalValue)
                    }, e.NAN = new e(NaN), e.POSITIVE_INFINITY = new e(1 / 0), e.NEGATIVE_INFINITY = new e(-1 / 0), e
                }(Ar),
                _r = function(n) {
                    function e(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.StringValue, e
                    }
                    return a(e, n), e.prototype.value = function(t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.internalValue === t.internalValue
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? Hn(this.internalValue, t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(Cr),
                Or = function(n) {
                    function e(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.TimestampValue, e
                    }
                    return a(e, n), e.prototype.value = function(t) {
                        return !t || t.timestampsInSnapshots ? this.internalValue : this.internalValue.toDate()
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.internalValue.isEqual(t.internalValue)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.internalValue._compareTo(t.internalValue) : t instanceof Pr ? -1 : this.defaultCompareTo(t)
                    }, e
                }(Cr),
                Pr = function(r) {
                    function e(t, e) {
                        var n = r.call(this) || this;
                        return n.localWriteTime = t, n.previousValue = e, n.typeOrder = Zn.TimestampValue, n
                    }
                    return a(e, r), e.prototype.value = function(t) {
                        return t && t.serverTimestampBehavior === er.Estimate ? new Or(this.localWriteTime).value(t) : t && t.serverTimestampBehavior === er.Previous && this.previousValue ? this.previousValue.value(t) : null
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.localWriteTime.isEqual(t.localWriteTime)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.localWriteTime._compareTo(t.localWriteTime) : t instanceof Or ? 1 : this.defaultCompareTo(t)
                    }, e.prototype.toString = function() {
                        return "<ServerTimestamp localTime=" + this.localWriteTime.toString() + ">"
                    }, e
                }(Cr),
                Lr = function(n) {
                    function e(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.BlobValue, e
                    }
                    return a(e, n), e.prototype.value = function(t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.internalValue.isEqual(t.internalValue)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(Cr),
                xr = function(r) {
                    function n(t, e) {
                        var n = r.call(this) || this;
                        return n.databaseId = t, n.key = e, n.typeOrder = Zn.RefValue, n
                    }
                    return a(n, r), n.prototype.value = function(t) {
                        return this.key
                    }, n.prototype.isEqual = function(t) {
                        return t instanceof n && (this.key.isEqual(t.key) && this.databaseId.isEqual(t.databaseId))
                    }, n.prototype.compareTo = function(t) {
                        if (t instanceof n) {
                            var e = this.databaseId.compareTo(t.databaseId);
                            return 0 !== e ? e : mr.comparator(this.key, t.key)
                        }
                        return this.defaultCompareTo(t)
                    }, n
                }(Cr),
                qr = function(n) {
                    function e(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.GeoPointValue, e
                    }
                    return a(e, n), e.prototype.value = function(t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.internalValue.isEqual(t.internalValue)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(Cr),
                Fr = function(n) {
                    function s(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.ObjectValue, e
                    }
                    return a(s, n), s.prototype.value = function(n) {
                        var r = {};
                        return this.internalValue.inorderTraversal(function(t, e) {
                            r[t] = e.value(n)
                        }), r
                    }, s.prototype.forEach = function(t) {
                        this.internalValue.inorderTraversal(t)
                    }, s.prototype.isEqual = function(t) {
                        if (t instanceof s) {
                            for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) {
                                var r = e.getNext(),
                                    i = n.getNext();
                                if (r.key !== i.key || !r.value.isEqual(i.value)) return !1
                            }
                            return !e.hasNext() && !n.hasNext()
                        }
                        return !1
                    }, s.prototype.compareTo = function(t) {
                        if (t instanceof s) {
                            for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) {
                                var r = e.getNext(),
                                    i = n.getNext(),
                                    o = Hn(r.key, i.key) || r.value.compareTo(i.value);
                                if (o) return o
                            }
                            return Hn(e.hasNext(), n.hasNext())
                        }
                        return this.defaultCompareTo(t)
                    }, s.prototype.set = function(t, e) {
                        if (vn(!t.isEmpty(), "Cannot set field for empty path on ObjectValue"), 1 === t.length) return this.setChild(t.firstSegment(), e);
                        var n = this.child(t.firstSegment());
                        n instanceof s || (n = s.EMPTY);
                        var r = n.set(t.popFirst(), e);
                        return this.setChild(t.firstSegment(), r)
                    }, s.prototype.delete = function(t) {
                        if (vn(!t.isEmpty(), "Cannot delete field for empty path on ObjectValue"), 1 === t.length) return new s(this.internalValue.remove(t.firstSegment()));
                        var e = this.child(t.firstSegment());
                        if (e instanceof s) {
                            var n = e.delete(t.popFirst());
                            return new s(this.internalValue.insert(t.firstSegment(), n))
                        }
                        return this
                    }, s.prototype.contains = function(t) {
                        return void 0 !== this.field(t)
                    }, s.prototype.field = function(t) {
                        vn(!t.isEmpty(), "Can't get field of empty path");
                        var e = this;
                        return t.forEach(function(t) {
                            e = e instanceof s && e.internalValue.get(t) || void 0
                        }), e
                    }, s.prototype.toString = function() {
                        return this.internalValue.toString()
                    }, s.prototype.child = function(t) {
                        return this.internalValue.get(t) || void 0
                    }, s.prototype.setChild = function(t, e) {
                        return new s(this.internalValue.insert(t, e))
                    }, s.EMPTY = new s(new wr(Hn)), s
                }(Cr),
                Vr = function(n) {
                    function i(t) {
                        var e = n.call(this) || this;
                        return e.internalValue = t, e.typeOrder = Zn.ArrayValue, e
                    }
                    return a(i, n), i.prototype.value = function(e) {
                        return this.internalValue.map(function(t) {
                            return t.value(e)
                        })
                    }, i.prototype.forEach = function(t) {
                        this.internalValue.forEach(t)
                    }, i.prototype.isEqual = function(t) {
                        if (t instanceof i) {
                            if (this.internalValue.length !== t.internalValue.length) return !1;
                            for (var e = 0; e < this.internalValue.length; e++)
                                if (!this.internalValue[e].isEqual(t.internalValue[e])) return !1;
                            return !0
                        }
                        return !1
                    }, i.prototype.compareTo = function(t) {
                        if (t instanceof i) {
                            for (var e = Math.min(this.internalValue.length, t.internalValue.length), n = 0; n < e; n++) {
                                var r = this.internalValue[n].compareTo(t.internalValue[n]);
                                if (r) return r
                            }
                            return Hn(this.internalValue.length, t.internalValue.length)
                        }
                        return this.defaultCompareTo(t)
                    }, i.prototype.toString = function() {
                        return "[" + this.internalValue.map(function(t) {
                            return t.toString()
                        }).join(",") + "]"
                    }, i
                }(Cr),
                Br = Number,
                Ur = Br.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1),
                Qr = Br.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
                Kr = Br.isInteger || function(t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
                };

            function jr(t) {
                return null == t
            }

            function Wr(t) {
                return Kr(t) && t <= Qr && Ur <= t
            }
            var Gr, zr, Hr = function() {
                    function n(t, e, n, r, i, o, s) {
                        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.memoizedCanonicalId = null, this.memoizedOrderBy = null, this.startAt && this.assertValidBound(this.startAt), this.endAt && this.assertValidBound(this.endAt)
                    }
                    return n.atPath = function(t) {
                        return new n(t)
                    }, Object.defineProperty(n.prototype, "orderBy", {
                        get: function() {
                            if (null === this.memoizedOrderBy) {
                                var t = this.getInequalityFilterField(),
                                    e = this.getFirstOrderByField();
                                if (null !== t && null === e) t.isKeyField() ? this.memoizedOrderBy = [ri] : this.memoizedOrderBy = [new ni(t), ri];
                                else {
                                    vn(null === t || null !== e && t.isEqual(e), "First orderBy should match inequality field.");
                                    for (var n = !(this.memoizedOrderBy = []), r = 0, i = this.explicitOrderBy; r < i.length; r++) {
                                        var o = i[r];
                                        this.memoizedOrderBy.push(o), o.field.isKeyField() && (n = !0)
                                    }
                                    if (!n) {
                                        var s = 0 < this.explicitOrderBy.length ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir : ti.ASCENDING;
                                        this.memoizedOrderBy.push(s === ti.ASCENDING ? ri : ii)
                                    }
                                }
                            }
                            return this.memoizedOrderBy
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.addFilter = function(t) {
                        vn(null == this.getInequalityFilterField() || !(t instanceof Jr) || !t.isInequality() || t.field.isEqual(this.getInequalityFilterField()), "Query must only have one inequality field."), vn(!this.isDocumentQuery(), "No filtering allowed for document query");
                        var e = this.filters.concat([t]);
                        return new n(this.path, this.collectionGroup, this.explicitOrderBy.slice(), e, this.limit, this.startAt, this.endAt)
                    }, n.prototype.addOrderBy = function(t) {
                        vn(!this.startAt && !this.endAt, "Bounds must be set after orderBy");
                        var e = this.explicitOrderBy.concat([t]);
                        return new n(this.path, this.collectionGroup, e, this.filters.slice(), this.limit, this.startAt, this.endAt)
                    }, n.prototype.withLimit = function(t) {
                        return new n(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), t, this.startAt, this.endAt)
                    }, n.prototype.withStartAt = function(t) {
                        return new n(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, t, this.endAt)
                    }, n.prototype.withEndAt = function(t) {
                        return new n(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, t)
                    }, n.prototype.asCollectionQueryAtPath = function(t) {
                        return new n(t, null, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, this.endAt)
                    }, n.prototype.canonicalId = function() {
                        if (null === this.memoizedCanonicalId) {
                            var t = this.path.canonicalString();
                            this.isCollectionGroupQuery() && (t += "|cg:" + this.collectionGroup), t += "|f:";
                            for (var e = 0, n = this.filters; e < n.length; e++) {
                                t += n[e].canonicalId(), t += ","
                            }
                            t += "|ob:";
                            for (var r = 0, i = this.orderBy; r < i.length; r++) {
                                t += i[r].canonicalId(), t += ","
                            }
                            jr(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.memoizedCanonicalId = t
                        }
                        return this.memoizedCanonicalId
                    }, n.prototype.toString = function() {
                        var t = "Query(" + this.path.canonicalString();
                        return this.isCollectionGroupQuery() && (t += " collectionGroup=" + this.collectionGroup), 0 < this.filters.length && (t += ", filters: [" + this.filters.join(", ") + "]"), jr(this.limit) || (t += ", limit: " + this.limit), 0 < this.explicitOrderBy.length && (t += ", orderBy: [" + this.explicitOrderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), t + ")"
                    }, n.prototype.isEqual = function(t) {
                        if (this.limit !== t.limit) return !1;
                        if (this.orderBy.length !== t.orderBy.length) return !1;
                        for (var e = 0; e < this.orderBy.length; e++)
                            if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
                        if (this.filters.length !== t.filters.length) return !1;
                        for (e = 0; e < this.filters.length; e++)
                            if (!this.filters[e].isEqual(t.filters[e])) return !1;
                        return this.collectionGroup === t.collectionGroup && (!!this.path.isEqual(t.path) && (!(null !== this.startAt ? !this.startAt.isEqual(t.startAt) : null !== t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)))
                    }, n.prototype.docComparator = function(t, e) {
                        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
                            var o = i[r],
                                s = o.compare(t, e);
                            if (0 !== s) return s;
                            n = n || o.field.isKeyField()
                        }
                        return vn(n, "orderBy used that doesn't compare on key field"), 0
                    }, n.prototype.matches = function(t) {
                        return this.matchesPathAndCollectionGroup(t) && this.matchesOrderBy(t) && this.matchesFilters(t) && this.matchesBounds(t)
                    }, n.prototype.hasLimit = function() {
                        return !jr(this.limit)
                    }, n.prototype.getFirstOrderByField = function() {
                        return 0 < this.explicitOrderBy.length ? this.explicitOrderBy[0].field : null
                    }, n.prototype.getInequalityFilterField = function() {
                        for (var t = 0, e = this.filters; t < e.length; t++) {
                            var n = e[t];
                            if (n instanceof Jr && n.isInequality()) return n.field
                        }
                        return null
                    }, n.prototype.hasArrayContainsFilter = function() {
                        return void 0 !== this.filters.find(function(t) {
                            return t instanceof Jr && t.op === Xr.ARRAY_CONTAINS
                        })
                    }, n.prototype.isDocumentQuery = function() {
                        return mr.isDocumentKey(this.path) && null === this.collectionGroup && 0 === this.filters.length
                    }, n.prototype.isCollectionGroupQuery = function() {
                        return null !== this.collectionGroup
                    }, n.prototype.matchesPathAndCollectionGroup = function(t) {
                        var e = t.key.path;
                        return null !== this.collectionGroup ? t.key.hasCollectionId(this.collectionGroup) && this.path.isPrefixOf(e) : mr.isDocumentKey(this.path) ? this.path.isEqual(e) : this.path.isImmediateParentOf(e)
                    }, n.prototype.matchesOrderBy = function(t) {
                        for (var e = 0, n = this.explicitOrderBy; e < n.length; e++) {
                            var r = n[e];
                            if (!r.field.isKeyField() && void 0 === t.field(r.field)) return !1
                        }
                        return !0
                    }, n.prototype.matchesFilters = function(t) {
                        for (var e = 0, n = this.filters; e < n.length; e++) {
                            if (!n[e].matches(t)) return !1
                        }
                        return !0
                    }, n.prototype.matchesBounds = function(t) {
                        return !(this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, t)) && (!this.endAt || !this.endAt.sortsBeforeDocument(this.orderBy, t))
                    }, n.prototype.assertValidBound = function(t) {
                        vn(t.position.length <= this.orderBy.length, "Bound is longer than orderBy")
                    }, n
                }(),
                Yr = function() {
                    function t() {}
                    return t.create = function(t, e, n) {
                        if (n.isEqual(Dr.INSTANCE)) {
                            if (e !== Xr.EQUAL) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on null.");
                            return new $r(t)
                        }
                        if (n.isEqual(Mr.NAN)) {
                            if (e !== Xr.EQUAL) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on NaN.");
                            return new Zr(t)
                        }
                        return new Jr(t, e, n)
                    }, t
                }(),
                Xr = function() {
                    function e(t) {
                        this.name = t
                    }
                    return e.fromString = function(t) {
                        switch (t) {
                            case "<":
                                return e.LESS_THAN;
                            case "<=":
                                return e.LESS_THAN_OR_EQUAL;
                            case "==":
                                return e.EQUAL;
                            case ">=":
                                return e.GREATER_THAN_OR_EQUAL;
                            case ">":
                                return e.GREATER_THAN;
                            case "array-contains":
                                return e.ARRAY_CONTAINS;
                            default:
                                return gn("Unknown relation: " + t)
                        }
                    }, e.prototype.toString = function() {
                        return this.name
                    }, e.prototype.isEqual = function(t) {
                        return this.name === t.name
                    }, e.LESS_THAN = new e("<"), e.LESS_THAN_OR_EQUAL = new e("<="), e.EQUAL = new e("=="), e.GREATER_THAN = new e(">"), e.GREATER_THAN_OR_EQUAL = new e(">="), e.ARRAY_CONTAINS = new e("array-contains"), e
                }(),
                Jr = function(i) {
                    function e(t, e, n) {
                        var r = i.call(this) || this;
                        return r.field = t, r.op = e, r.value = n, r
                    }
                    return a(e, i), e.prototype.matches = function(t) {
                        if (this.field.isKeyField()) {
                            vn(this.value instanceof xr, "Comparing on key, but filter value not a RefValue"), vn(this.op !== Xr.ARRAY_CONTAINS, "array-contains queries don't make sense on document keys.");
                            var e = this.value,
                                n = mr.comparator(t.key, e.key);
                            return this.matchesComparison(n)
                        }
                        var r = t.field(this.field);
                        return void 0 !== r && this.matchesValue(r)
                    }, e.prototype.matchesValue = function(t) {
                        var e = this;
                        return this.op === Xr.ARRAY_CONTAINS ? t instanceof Vr && void 0 !== t.internalValue.find(function(t) {
                            return t.isEqual(e.value)
                        }) : this.value.typeOrder === t.typeOrder && this.matchesComparison(t.compareTo(this.value))
                    }, e.prototype.matchesComparison = function(t) {
                        switch (this.op) {
                            case Xr.LESS_THAN:
                                return t < 0;
                            case Xr.LESS_THAN_OR_EQUAL:
                                return t <= 0;
                            case Xr.EQUAL:
                                return 0 === t;
                            case Xr.GREATER_THAN:
                                return 0 < t;
                            case Xr.GREATER_THAN_OR_EQUAL:
                                return 0 <= t;
                            default:
                                return gn("Unknown relation op" + this.op)
                        }
                    }, e.prototype.isInequality = function() {
                        return this.op !== Xr.EQUAL && this.op !== Xr.ARRAY_CONTAINS
                    }, e.prototype.canonicalId = function() {
                        return this.field.canonicalString() + this.op.toString() + this.value.toString()
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && (this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value))
                    }, e.prototype.toString = function() {
                        return this.field.canonicalString() + " " + this.op + " " + this.value.value()
                    }, e
                }(Yr),
                $r = function(n) {
                    function e(t) {
                        var e = n.call(this) || this;
                        return e.field = t, e
                    }
                    return a(e, n), e.prototype.matches = function(t) {
                        var e = t.field(this.field);
                        return void 0 !== e && null === e.value()
                    }, e.prototype.canonicalId = function() {
                        return this.field.canonicalString() + " IS null"
                    }, e.prototype.toString = function() {
                        return this.field.canonicalString() + " IS null"
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.field.isEqual(t.field)
                    }, e
                }(Yr),
                Zr = function(n) {
                    function e(t) {
                        var e = n.call(this) || this;
                        return e.field = t, e
                    }
                    return a(e, n), e.prototype.matches = function(t) {
                        var e = t.field(this.field),
                            n = e && e.value();
                        return "number" == typeof n && isNaN(n)
                    }, e.prototype.canonicalId = function() {
                        return this.field.canonicalString() + " IS NaN"
                    }, e.prototype.toString = function() {
                        return this.field.canonicalString() + " IS NaN"
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.field.isEqual(t.field)
                    }, e
                }(Yr),
                ti = function() {
                    function t(t) {
                        this.name = t
                    }
                    return t.prototype.toString = function() {
                        return this.name
                    }, t.ASCENDING = new t("asc"), t.DESCENDING = new t("desc"), t
                }(),
                ei = function() {
                    function t(t, e) {
                        this.position = t, this.before = e
                    }
                    return t.prototype.canonicalId = function() {
                        for (var t = this.before ? "b:" : "a:", e = 0, n = this.position; e < n.length; e++) {
                            t += n[e].toString()
                        }
                        return t
                    }, t.prototype.sortsBeforeDocument = function(t, e) {
                        vn(this.position.length <= t.length, "Bound has more components than query's orderBy");
                        for (var n = 0, r = 0; r < this.position.length; r++) {
                            var i = t[r],
                                o = this.position[r];
                            if (i.field.isKeyField()) vn(o instanceof xr, "Bound has a non-key value where the key path is being used."), n = mr.comparator(o.key, e.key);
                            else {
                                var s = e.field(i.field);
                                vn(void 0 !== s, "Field should exist since document matched the orderBy already."), n = o.compareTo(s)
                            }
                            if (i.dir === ti.DESCENDING && (n *= -1), 0 !== n) break
                        }
                        return this.before ? n <= 0 : n < 0
                    }, t.prototype.isEqual = function(t) {
                        if (null === t) return !1;
                        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
                        for (var e = 0; e < this.position.length; e++) {
                            var n = this.position[e],
                                r = t.position[e];
                            return n.isEqual(r)
                        }
                        return !0
                    }, t
                }(),
                ni = function() {
                    function t(t, e) {
                        this.field = t, void 0 === e && (e = ti.ASCENDING), this.dir = e, this.isKeyOrderBy = t.isKeyField()
                    }
                    return t.prototype.compare = function(t, e) {
                        var n = this.isKeyOrderBy ? gr.compareByKey(t, e) : gr.compareByField(this.field, t, e);
                        switch (this.dir) {
                            case ti.ASCENDING:
                                return n;
                            case ti.DESCENDING:
                                return -1 * n;
                            default:
                                return gn("Unknown direction: " + this.dir)
                        }
                    }, t.prototype.canonicalId = function() {
                        return this.field.canonicalString() + this.dir.toString()
                    }, t.prototype.toString = function() {
                        return this.field.canonicalString() + " (" + this.dir + ")"
                    }, t.prototype.isEqual = function(t) {
                        return this.dir === t.dir && this.field.isEqual(t.field)
                    }, t
                }(),
                ri = new ni(dr.keyField(), ti.ASCENDING),
                ii = new ni(dr.keyField(), ti.DESCENDING),
                oi = function() {
                    function n(t) {
                        this.timestamp = t
                    }
                    return n.fromMicroseconds = function(t) {
                        var e = Math.floor(t / 1e6);
                        return new n(new sr(e, t % 1e6 * 1e3))
                    }, n.fromTimestamp = function(t) {
                        return new n(t)
                    }, n.forDeletedDoc = function() {
                        return n.MIN
                    }, n.prototype.compareTo = function(t) {
                        return this.timestamp._compareTo(t.timestamp)
                    }, n.prototype.isEqual = function(t) {
                        return this.timestamp.isEqual(t.timestamp)
                    }, n.prototype.toMicroseconds = function() {
                        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                    }, n.prototype.toString = function() {
                        return "SnapshotVersion(" + this.timestamp.toString() + ")"
                    }, n.prototype.toTimestamp = function() {
                        return this.timestamp
                    }, n.MIN = new n(new sr(0, 0)), n
                }();
            (zr = Gr || (Gr = {}))[zr.Listen = 0] = "Listen", zr[zr.ExistenceFilterMismatch = 1] = "ExistenceFilterMismatch", zr[zr.LimboResolution = 2] = "LimboResolution";
            var si, ai, ui = function() {
                    function e(t, e, n, r, i, o) {
                        void 0 === i && (i = oi.MIN), void 0 === o && (o = wn()), this.query = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.resumeToken = o
                    }
                    return e.prototype.copy = function(t) {
                        return new e(this.query, this.targetId, this.purpose, void 0 === t.sequenceNumber ? this.sequenceNumber : t.sequenceNumber, void 0 === t.snapshotVersion ? this.snapshotVersion : t.snapshotVersion, void 0 === t.resumeToken ? this.resumeToken : t.resumeToken)
                    }, e.prototype.isEqual = function(t) {
                        return this.targetId === t.targetId && this.purpose === t.purpose && this.sequenceNumber === t.sequenceNumber && this.snapshotVersion.isEqual(t.snapshotVersion) && this.resumeToken === t.resumeToken && this.query.isEqual(t.query)
                    }, e
                }(),
                ci = function() {
                    function o(t) {
                        this.comparator = t, this.data = new wr(this.comparator)
                    }
                    return o.fromMapKeys = function(t) {
                        var e = new o(t.comparator);
                        return t.forEach(function(t) {
                            e = e.add(t)
                        }), e
                    }, o.prototype.has = function(t) {
                        return null !== this.data.get(t)
                    }, o.prototype.first = function() {
                        return this.data.minKey()
                    }, o.prototype.last = function() {
                        return this.data.maxKey()
                    }, Object.defineProperty(o.prototype, "size", {
                        get: function() {
                            return this.data.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), o.prototype.indexOf = function(t) {
                        return this.data.indexOf(t)
                    }, o.prototype.forEach = function(n) {
                        this.data.inorderTraversal(function(t, e) {
                            return n(t), !1
                        })
                    }, o.prototype.forEachInRange = function(t, e) {
                        for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) {
                            var r = n.getNext();
                            if (0 <= this.comparator(r.key, t[1])) return;
                            e(r.key)
                        }
                    }, o.prototype.forEachWhile = function(t, e) {
                        var n;
                        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();) {
                            if (!t(n.getNext().key)) return
                        }
                    }, o.prototype.firstAfterOrEqual = function(t) {
                        var e = this.data.getIteratorFrom(t);
                        return e.hasNext() ? e.getNext().key : null
                    }, o.prototype.getIterator = function() {
                        return new hi(this.data.getIterator())
                    }, o.prototype.getIteratorFrom = function(t) {
                        return new hi(this.data.getIteratorFrom(t))
                    }, o.prototype.add = function(t) {
                        return this.copy(this.data.remove(t).insert(t, !0))
                    }, o.prototype.delete = function(t) {
                        return this.has(t) ? this.copy(this.data.remove(t)) : this
                    }, o.prototype.isEmpty = function() {
                        return this.data.isEmpty()
                    }, o.prototype.unionWith = function(t) {
                        var e = this;
                        return t.forEach(function(t) {
                            e = e.add(t)
                        }), e
                    }, o.prototype.isEqual = function(t) {
                        if (!(t instanceof o)) return !1;
                        if (this.size !== t.size) return !1;
                        for (var e = this.data.getIterator(), n = t.data.getIterator(); e.hasNext();) {
                            var r = e.getNext().key,
                                i = n.getNext().key;
                            if (0 !== this.comparator(r, i)) return !1
                        }
                        return !0
                    }, o.prototype.toArray = function() {
                        var e = [];
                        return this.forEach(function(t) {
                            e.push(t)
                        }), e
                    }, o.prototype.toString = function() {
                        var e = [];
                        return this.forEach(function(t) {
                            return e.push(t)
                        }), "SortedSet(" + e.toString() + ")"
                    }, o.prototype.copy = function(t) {
                        var e = new o(this.comparator);
                        return e.data = t, e
                    }, o
                }(),
                hi = function() {
                    function t(t) {
                        this.iter = t
                    }
                    return t.prototype.getNext = function() {
                        return this.iter.getNext().key
                    }, t.prototype.hasNext = function() {
                        return this.iter.hasNext()
                    }, t
                }(),
                li = function() {
                    function n(t) {
                        this.fields = t
                    }
                    return n.fromSet = function(t) {
                        return new n(t)
                    }, n.fromArray = function(t) {
                        var e = new ci(dr.comparator);
                        return t.forEach(function(t) {
                            return e = e.add(t)
                        }), new n(e)
                    }, n.prototype.covers = function(e) {
                        var n = !1;
                        return this.fields.forEach(function(t) {
                            t.isPrefixOf(e) && (n = !0)
                        }), n
                    }, n.prototype.applyTo = function(n) {
                        var r = Fr.EMPTY;
                        return this.fields.forEach(function(t) {
                            if (t.isEmpty()) return n;
                            var e = n.field(t);
                            void 0 !== e && (r = r.set(t, e))
                        }), r
                    }, n.prototype.isEqual = function(t) {
                        return this.fields.isEqual(t.fields)
                    }, n
                }(),
                fi = function() {
                    function t(t, e) {
                        this.field = t, this.transform = e
                    }
                    return Object.defineProperty(t.prototype, "isIdempotent", {
                        get: function() {
                            return this.transform.isIdempotent
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isEqual = function(t) {
                        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform)
                    }, t
                }(),
                pi = function(t, e) {
                    this.version = t, this.transformResults = e
                };
            (ai = si || (si = {}))[ai.Set = 0] = "Set", ai[ai.Patch = 1] = "Patch", ai[ai.Transform = 2] = "Transform", ai[ai.Delete = 3] = "Delete";
            var di = function() {
                    function e(t, e) {
                        this.updateTime = t, this.exists = e, vn(void 0 === t || void 0 === e, 'Precondition can specify "exists" or "updateTime" but not both')
                    }
                    return e.exists = function(t) {
                        return new e(void 0, t)
                    }, e.updateTime = function(t) {
                        return new e(t)
                    }, Object.defineProperty(e.prototype, "isNone", {
                        get: function() {
                            return void 0 === this.updateTime && void 0 === this.exists
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isValidFor = function(t) {
                        return void 0 !== this.updateTime ? t instanceof gr && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof gr : (vn(this.isNone, "Precondition should be empty"), !0)
                    }, e.prototype.isEqual = function(t) {
                        return e = this.updateTime, n = t.updateTime, (null != e ? !(!n || !e.isEqual(n)) : e === n) && this.exists === t.exists;
                        var e, n
                    }, e.NONE = new e, e
                }(),
                mi = function() {
                    function t() {}
                    return t.prototype.verifyKeyMatches = function(t) {
                        null != t && vn(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key")
                    }, t.getPostMutationVersion = function(t) {
                        return t instanceof gr ? t.version : oi.MIN
                    }, t
                }(),
                yi = function(i) {
                    function e(t, e, n) {
                        var r = i.call(this) || this;
                        return r.key = t, r.value = e, r.precondition = n, r.type = si.Set, r
                    }
                    return a(e, i), e.prototype.applyToRemoteDocument = function(t, e) {
                        this.verifyKeyMatches(t), vn(null == e.transformResults, "Transform results received by SetMutation.");
                        var n = e.version;
                        return new gr(this.key, n, this.value, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function(t, e, n) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var r = mi.getPostMutationVersion(t);
                        return new gr(this.key, r, this.value, {
                            hasLocalMutations: !0
                        })
                    }, Object.defineProperty(e.prototype, "isIdempotent", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "fieldMask", {
                        get: function() {
                            return null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.precondition.isEqual(t.precondition)
                    }, e
                }(mi),
                gi = function(o) {
                    function e(t, e, n, r) {
                        var i = o.call(this) || this;
                        return i.key = t, i.data = e, i.fieldMask = n, i.precondition = r, i.type = si.Patch, i
                    }
                    return a(e, o), e.prototype.applyToRemoteDocument = function(t, e) {
                        if (this.verifyKeyMatches(t), vn(null == e.transformResults, "Transform results received by PatchMutation."), !this.precondition.isValidFor(t)) return new br(this.key, e.version);
                        var n = this.patchDocument(t);
                        return new gr(this.key, e.version, n, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function(t, e, n) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var r = mi.getPostMutationVersion(t),
                            i = this.patchDocument(t);
                        return new gr(this.key, r, i, {
                            hasLocalMutations: !0
                        })
                    }, Object.defineProperty(e.prototype, "isIdempotent", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.fieldMask.isEqual(t.fieldMask) && this.precondition.isEqual(t.precondition)
                    }, e.prototype.patchDocument = function(t) {
                        var e;
                        return e = t instanceof gr ? t.data : Fr.EMPTY, this.patchObject(e)
                    }, e.prototype.patchObject = function(n) {
                        var r = this;
                        return this.fieldMask.fields.forEach(function(t) {
                            if (!t.isEmpty()) {
                                var e = r.data.field(t);
                                n = void 0 !== e ? n.set(t, e) : n.delete(t)
                            }
                        }), n
                    }, e
                }(mi),
                vi = function(r) {
                    function e(t, e) {
                        var n = r.call(this) || this;
                        return n.key = t, n.fieldTransforms = e, n.type = si.Transform, n.precondition = di.exists(!0), n
                    }
                    return a(e, r), e.prototype.applyToRemoteDocument = function(t, e) {
                        if (this.verifyKeyMatches(t), vn(null != e.transformResults, "Transform results missing for TransformMutation."), !this.precondition.isValidFor(t)) return new br(this.key, e.version);
                        var n = this.requireDocument(t),
                            r = this.serverTransformResults(t, e.transformResults),
                            i = e.version,
                            o = this.transformObject(n.data, r);
                        return new gr(this.key, i, o, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function(t, e, n) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var r = this.requireDocument(t),
                            i = this.localTransformResults(n, e),
                            o = this.transformObject(r.data, i);
                        return new gr(this.key, r.version, o, {
                            hasLocalMutations: !0
                        })
                    }, Object.defineProperty(e.prototype, "isIdempotent", {
                        get: function() {
                            for (var t = 0, e = this.fieldTransforms; t < e.length; t++) {
                                if (!e[t].isIdempotent) return !1
                            }
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "fieldMask", {
                        get: function() {
                            var e = new ci(dr.comparator);
                            return this.fieldTransforms.forEach(function(t) {
                                return e = e.add(t.field)
                            }), new li(e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(t) {
                        return t instanceof e && this.key.isEqual(t.key) && Yn(this.fieldTransforms, t.fieldTransforms) && this.precondition.isEqual(t.precondition)
                    }, e.prototype.requireDocument = function(t) {
                        vn(t instanceof gr, "Unknown MaybeDocument type " + t);
                        var e = t;
                        return vn(e.key.isEqual(this.key), "Can only transform a document with the same key"), e
                    }, e.prototype.serverTransformResults = function(t, e) {
                        var n = [];
                        vn(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
                        for (var r = 0; r < e.length; r++) {
                            var i = this.fieldTransforms[r],
                                o = i.transform,
                                s = null;
                            t instanceof gr && (s = t.field(i.field) || null), n.push(o.applyToRemoteDocument(s, e[r]))
                        }
                        return n
                    }, e.prototype.localTransformResults = function(t, e) {
                        for (var n = [], r = 0, i = this.fieldTransforms; r < i.length; r++) {
                            var o = i[r],
                                s = o.transform,
                                a = null;
                            e instanceof gr && (a = e.field(o.field) || null), n.push(s.applyToLocalView(a, t))
                        }
                        return n
                    }, e.prototype.transformObject = function(t, e) {
                        vn(e.length === this.fieldTransforms.length, "TransformResults length mismatch.");
                        for (var n = 0; n < this.fieldTransforms.length; n++) {
                            var r = this.fieldTransforms[n].field;
                            t = t.set(r, e[n])
                        }
                        return t
                    }, e
                }(mi),
                bi = function(r) {
                    function e(t, e) {
                        var n = r.call(this) || this;
                        return n.key = t, n.precondition = e, n.type = si.Delete, n
                    }
                    return a(e, r), e.prototype.applyToRemoteDocument = function(t, e) {
                        return this.verifyKeyMatches(t), vn(null == e.transformResults, "Transform results received by DeleteMutation."), new vr(this.key, e.version, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function(t, e, n) {
                        return this.verifyKeyMatches(t), this.precondition.isValidFor(t) ? (t && vn(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), new vr(this.key, oi.forDeletedDoc())) : t
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.precondition.isEqual(t.precondition)
                    }, Object.defineProperty(e.prototype, "isIdempotent", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "fieldMask", {
                        get: function() {
                            return null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }(mi),
                wi = function() {
                    function e() {
                        this.isIdempotent = !0
                    }
                    return e.prototype.applyToLocalView = function(t, e) {
                        return new Pr(e, t)
                    }, e.prototype.applyToRemoteDocument = function(t, e) {
                        return e
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e
                    }, e.instance = new e, e
                }(),
                Ei = function() {
                    function e(t) {
                        this.elements = t, this.isIdempotent = !0
                    }
                    return e.prototype.applyToLocalView = function(t, e) {
                        return this.apply(t)
                    }, e.prototype.applyToRemoteDocument = function(t, e) {
                        return this.apply(t)
                    }, e.prototype.apply = function(t) {
                        for (var n = Ii(t), e = function(e) {
                                n.find(function(t) {
                                    return t.isEqual(e)
                                }) || n.push(e)
                            }, r = 0, i = this.elements; r < i.length; r++) {
                            e(i[r])
                        }
                        return new Vr(n)
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && Yn(t.elements, this.elements)
                    }, e
                }(),
                Si = function() {
                    function e(t) {
                        this.elements = t, this.isIdempotent = !0
                    }
                    return e.prototype.applyToLocalView = function(t, e) {
                        return this.apply(t)
                    }, e.prototype.applyToRemoteDocument = function(t, e) {
                        return this.apply(t)
                    }, e.prototype.apply = function(t) {
                        for (var n = Ii(t), e = function(e) {
                                n = n.filter(function(t) {
                                    return !t.isEqual(e)
                                })
                            }, r = 0, i = this.elements; r < i.length; r++) {
                            e(i[r])
                        }
                        return new Vr(n)
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && Yn(t.elements, this.elements)
                    }, e
                }(),
                Ti = function() {
                    function e(t) {
                        this.operand = t, this.isIdempotent = !1
                    }
                    return e.prototype.applyToLocalView = function(t, e) {
                        if (t instanceof Rr && this.operand instanceof Rr) {
                            var n = t.internalValue + this.operand.internalValue;
                            return new Rr(n)
                        }
                        if (t instanceof Ar) {
                            n = t.internalValue + this.operand.internalValue;
                            return new Mr(n)
                        }
                        return this.operand
                    }, e.prototype.applyToRemoteDocument = function(t, e) {
                        return vn(null !== e, "Didn't receive transformResult for NUMERIC_ADD transform"), e
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e && this.operand.isEqual(t.operand)
                    }, e
                }();

            function Ii(t) {
                return t instanceof Vr ? t.internalValue.slice() : []
            }
            var Ci, Di, Ni = function() {
                function t(t) {
                    this.count = t
                }
                return t.prototype.isEqual = function(t) {
                    return t && t.count === this.count
                }, t
            }();

            function Ai(t) {
                switch (t) {
                    case En.OK:
                        return gn("Treated status OK as error");
                    case En.CANCELLED:
                    case En.UNKNOWN:
                    case En.DEADLINE_EXCEEDED:
                    case En.RESOURCE_EXHAUSTED:
                    case En.INTERNAL:
                    case En.UNAVAILABLE:
                    case En.UNAUTHENTICATED:
                        return !1;
                    case En.INVALID_ARGUMENT:
                    case En.NOT_FOUND:
                    case En.ALREADY_EXISTS:
                    case En.PERMISSION_DENIED:
                    case En.FAILED_PRECONDITION:
                    case En.ABORTED:
                    case En.OUT_OF_RANGE:
                    case En.UNIMPLEMENTED:
                    case En.DATA_LOSS:
                        return !0;
                    default:
                        return gn("Unknown status code: " + t)
                }
            }

            function ki(t) {
                if (void 0 === t) return mn("GRPC error has no .code"), En.UNKNOWN;
                switch (t) {
                    case Ci.OK:
                        return En.OK;
                    case Ci.CANCELLED:
                        return En.CANCELLED;
                    case Ci.UNKNOWN:
                        return En.UNKNOWN;
                    case Ci.DEADLINE_EXCEEDED:
                        return En.DEADLINE_EXCEEDED;
                    case Ci.RESOURCE_EXHAUSTED:
                        return En.RESOURCE_EXHAUSTED;
                    case Ci.INTERNAL:
                        return En.INTERNAL;
                    case Ci.UNAVAILABLE:
                        return En.UNAVAILABLE;
                    case Ci.UNAUTHENTICATED:
                        return En.UNAUTHENTICATED;
                    case Ci.INVALID_ARGUMENT:
                        return En.INVALID_ARGUMENT;
                    case Ci.NOT_FOUND:
                        return En.NOT_FOUND;
                    case Ci.ALREADY_EXISTS:
                        return En.ALREADY_EXISTS;
                    case Ci.PERMISSION_DENIED:
                        return En.PERMISSION_DENIED;
                    case Ci.FAILED_PRECONDITION:
                        return En.FAILED_PRECONDITION;
                    case Ci.ABORTED:
                        return En.ABORTED;
                    case Ci.OUT_OF_RANGE:
                        return En.OUT_OF_RANGE;
                    case Ci.UNIMPLEMENTED:
                        return En.UNIMPLEMENTED;
                    case Ci.DATA_LOSS:
                        return En.DATA_LOSS;
                    default:
                        return gn("Unknown status code: " + t)
                }
            }(Di = Ci || (Ci = {}))[Di.OK = 0] = "OK", Di[Di.CANCELLED = 1] = "CANCELLED", Di[Di.UNKNOWN = 2] = "UNKNOWN", Di[Di.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Di[Di.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Di[Di.NOT_FOUND = 5] = "NOT_FOUND", Di[Di.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Di[Di.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Di[Di.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Di[Di.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Di[Di.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Di[Di.ABORTED = 10] = "ABORTED", Di[Di.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Di[Di.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Di[Di.INTERNAL = 13] = "INTERNAL", Di[Di.UNAVAILABLE = 14] = "UNAVAILABLE", Di[Di.DATA_LOSS = 15] = "DATA_LOSS";
            var Ri = new wr(mr.comparator);

            function Mi() {
                return Ri
            }

            function _i() {
                return Mi()
            }
            var Oi = new wr(mr.comparator);

            function Pi() {
                return Oi
            }
            var Li = new wr(mr.comparator);

            function xi() {
                return Li
            }
            var qi = new ci(mr.comparator);

            function Fi() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = qi, r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    n = n.add(o)
                }
                return n
            }
            var Vi = new ci(Hn);

            function Bi() {
                return Vi
            }
            var Ui, Qi, Ki, ji, Wi = function() {
                function o(n) {
                    this.comparator = n ? function(t, e) {
                        return n(t, e) || mr.comparator(t.key, e.key)
                    } : function(t, e) {
                        return mr.comparator(t.key, e.key)
                    }, this.keyedMap = Pi(), this.sortedSet = new wr(this.comparator)
                }
                return o.emptySet = function(t) {
                    return new o(t.comparator)
                }, o.prototype.has = function(t) {
                    return null != this.keyedMap.get(t)
                }, o.prototype.get = function(t) {
                    return this.keyedMap.get(t)
                }, o.prototype.first = function() {
                    return this.sortedSet.minKey()
                }, o.prototype.last = function() {
                    return this.sortedSet.maxKey()
                }, o.prototype.isEmpty = function() {
                    return this.sortedSet.isEmpty()
                }, o.prototype.indexOf = function(t) {
                    var e = this.keyedMap.get(t);
                    return e ? this.sortedSet.indexOf(e) : -1
                }, Object.defineProperty(o.prototype, "size", {
                    get: function() {
                        return this.sortedSet.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), o.prototype.forEach = function(n) {
                    this.sortedSet.inorderTraversal(function(t, e) {
                        return n(t), !1
                    })
                }, o.prototype.add = function(t) {
                    var e = this.delete(t.key);
                    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null))
                }, o.prototype.delete = function(t) {
                    var e = this.get(t);
                    return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this
                }, o.prototype.isEqual = function(t) {
                    if (!(t instanceof o)) return !1;
                    if (this.size !== t.size) return !1;
                    for (var e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator(); e.hasNext();) {
                        var r = e.getNext().key,
                            i = n.getNext().key;
                        if (!r.isEqual(i)) return !1
                    }
                    return !0
                }, o.prototype.toString = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t.toString())
                    }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
                }, o.prototype.copy = function(t, e) {
                    var n = new o;
                    return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n
                }, o
            }();
            (Qi = Ui || (Ui = {}))[Qi.Added = 0] = "Added", Qi[Qi.Removed = 1] = "Removed", Qi[Qi.Modified = 2] = "Modified", Qi[Qi.Metadata = 3] = "Metadata", (ji = Ki || (Ki = {}))[ji.Local = 0] = "Local", ji[ji.Synced = 1] = "Synced";
            var Gi, zi, Hi = function() {
                    function t() {
                        this.changeMap = new wr(mr.comparator)
                    }
                    return t.prototype.track = function(t) {
                        var e = t.doc.key,
                            n = this.changeMap.get(e);
                        n ? t.type !== Ui.Added && n.type === Ui.Metadata ? this.changeMap = this.changeMap.insert(e, t) : t.type === Ui.Metadata && n.type !== Ui.Removed ? this.changeMap = this.changeMap.insert(e, {
                            type: n.type,
                            doc: t.doc
                        }) : t.type === Ui.Modified && n.type === Ui.Modified ? this.changeMap = this.changeMap.insert(e, {
                            type: Ui.Modified,
                            doc: t.doc
                        }) : t.type === Ui.Modified && n.type === Ui.Added ? this.changeMap = this.changeMap.insert(e, {
                            type: Ui.Added,
                            doc: t.doc
                        }) : t.type === Ui.Removed && n.type === Ui.Added ? this.changeMap = this.changeMap.remove(e) : t.type === Ui.Removed && n.type === Ui.Modified ? this.changeMap = this.changeMap.insert(e, {
                            type: Ui.Removed,
                            doc: n.doc
                        }) : t.type === Ui.Added && n.type === Ui.Removed ? this.changeMap = this.changeMap.insert(e, {
                            type: Ui.Modified,
                            doc: t.doc
                        }) : gn("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.changeMap = this.changeMap.insert(e, t)
                    }, t.prototype.getChanges = function() {
                        var n = [];
                        return this.changeMap.inorderTraversal(function(t, e) {
                            n.push(e)
                        }), n
                    }, t
                }(),
                Yi = function() {
                    function o(t, e, n, r, i, o, s, a) {
                        this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = a
                    }
                    return o.fromInitialDocuments = function(t, e, n, r) {
                        var i = [];
                        return e.forEach(function(t) {
                            i.push({
                                type: Ui.Added,
                                doc: t
                            })
                        }), new o(t, e, Wi.emptySet(e), i, n, r, !0, !1)
                    }, Object.defineProperty(o.prototype, "hasPendingWrites", {
                        get: function() {
                            return !this.mutatedKeys.isEmpty()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), o.prototype.isEqual = function(t) {
                        if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
                        var e = this.docChanges,
                            n = t.docChanges;
                        if (e.length !== n.length) return !1;
                        for (var r = 0; r < e.length; r++)
                            if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                        return !0
                    }, o
                }(),
                Xi = function() {
                    function i(t, e, n, r, i) {
                        this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i
                    }
                    return i.createSynthesizedRemoteEventForCurrentChange = function(t, e) {
                        var n, r = ((n = {})[t] = Ji.createSynthesizedTargetChangeForCurrentChange(t, e), n);
                        return new i(oi.MIN, r, Bi(), Mi(), Fi())
                    }, i
                }(),
                Ji = function() {
                    function n(t, e, n, r, i) {
                        this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i
                    }
                    return n.createSynthesizedTargetChangeForCurrentChange = function(t, e) {
                        return new n(wn(), e, Fi(), Fi(), Fi())
                    }, n
                }(),
                $i = function(t, e, n, r) {
                    this.updatedTargetIds = t, this.removedTargetIds = e, this.key = n, this.newDoc = r
                },
                Zi = function(t, e) {
                    this.targetId = t, this.existenceFilter = e
                };
            (zi = Gi || (Gi = {}))[zi.NoChange = 0] = "NoChange", zi[zi.Added = 1] = "Added", zi[zi.Removed = 2] = "Removed", zi[zi.Current = 3] = "Current", zi[zi.Reset = 4] = "Reset";
            var to = function(t, e, n, r) {
                    void 0 === n && (n = wn()), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
                },
                eo = function() {
                    function t() {
                        this.pendingResponses = 0, this.documentChanges = io(), this._resumeToken = wn(), this._current = !1, this._hasPendingChanges = !0
                    }
                    return Object.defineProperty(t.prototype, "current", {
                        get: function() {
                            return this._current
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "resumeToken", {
                        get: function() {
                            return this._resumeToken
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPending", {
                        get: function() {
                            return 0 !== this.pendingResponses
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasPendingChanges", {
                        get: function() {
                            return this._hasPendingChanges
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.updateResumeToken = function(t) {
                        0 < t.length && (this._hasPendingChanges = !0, this._resumeToken = t)
                    }, t.prototype.toTargetChange = function() {
                        var n = Fi(),
                            r = Fi(),
                            i = Fi();
                        return this.documentChanges.forEach(function(t, e) {
                            switch (e) {
                                case Ui.Added:
                                    n = n.add(t);
                                    break;
                                case Ui.Modified:
                                    r = r.add(t);
                                    break;
                                case Ui.Removed:
                                    i = i.add(t);
                                    break;
                                default:
                                    gn("Encountered invalid change type: " + e)
                            }
                        }), new Ji(this._resumeToken, this._current, n, r, i)
                    }, t.prototype.clearPendingChanges = function() {
                        this._hasPendingChanges = !1, this.documentChanges = io()
                    }, t.prototype.addDocumentChange = function(t, e) {
                        this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.insert(t, e)
                    }, t.prototype.removeDocumentChange = function(t) {
                        this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.remove(t)
                    }, t.prototype.recordPendingTargetRequest = function() {
                        this.pendingResponses += 1
                    }, t.prototype.recordTargetResponse = function() {
                        this.pendingResponses -= 1
                    }, t.prototype.markCurrent = function() {
                        this._hasPendingChanges = !0, this._current = !0
                    }, t
                }(),
                no = function() {
                    function t(t) {
                        this.metadataProvider = t, this.targetStates = {}, this.pendingDocumentUpdates = Mi(), this.pendingDocumentTargetMapping = ro(), this.pendingTargetResets = new ci(Hn)
                    }
                    return t.prototype.handleDocumentChange = function(t) {
                        for (var e = 0, n = t.updatedTargetIds; e < n.length; e++) {
                            var r = n[e];
                            t.newDoc instanceof gr ? this.addDocumentToTarget(r, t.newDoc) : t.newDoc instanceof vr && this.removeDocumentFromTarget(r, t.key, t.newDoc)
                        }
                        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
                            r = o[i];
                            this.removeDocumentFromTarget(r, t.key, t.newDoc)
                        }
                    }, t.prototype.handleTargetChange = function(n) {
                        var r = this;
                        this.forEachTarget(n, function(t) {
                            var e = r.ensureTargetState(t);
                            switch (n.state) {
                                case Gi.NoChange:
                                    r.isActiveTarget(t) && e.updateResumeToken(n.resumeToken);
                                    break;
                                case Gi.Added:
                                    e.recordTargetResponse(), e.isPending || e.clearPendingChanges(), e.updateResumeToken(n.resumeToken);
                                    break;
                                case Gi.Removed:
                                    e.recordTargetResponse(), e.isPending || r.removeTarget(t), vn(!n.cause, "WatchChangeAggregator does not handle errored targets");
                                    break;
                                case Gi.Current:
                                    r.isActiveTarget(t) && (e.markCurrent(), e.updateResumeToken(n.resumeToken));
                                    break;
                                case Gi.Reset:
                                    r.isActiveTarget(t) && (r.resetTarget(t), e.updateResumeToken(n.resumeToken));
                                    break;
                                default:
                                    gn("Unknown target watch change state: " + n.state)
                            }
                        })
                    }, t.prototype.forEachTarget = function(t, e) {
                        0 < t.targetIds.length ? t.targetIds.forEach(e) : Dn(this.targetStates, e)
                    }, t.prototype.handleExistenceFilter = function(t) {
                        var e = t.targetId,
                            n = t.existenceFilter.count,
                            r = this.queryDataForActiveTarget(e);
                        if (r) {
                            var i = r.query;
                            if (i.isDocumentQuery())
                                if (0 === n) {
                                    var o = new mr(i.path);
                                    this.removeDocumentFromTarget(e, o, new vr(o, oi.forDeletedDoc()))
                                } else vn(1 === n, "Single document existence filter with count: " + n);
                            else this.getCurrentDocumentCountForTarget(e) !== n && (this.resetTarget(e), this.pendingTargetResets = this.pendingTargetResets.add(e))
                        }
                    }, t.prototype.createRemoteEvent = function(i) {
                        var o = this,
                            s = {};
                        Dn(this.targetStates, function(t, e) {
                            var n = o.queryDataForActiveTarget(t);
                            if (n) {
                                if (e.current && n.query.isDocumentQuery()) {
                                    var r = new mr(n.query.path);
                                    null !== o.pendingDocumentUpdates.get(r) || o.targetContainsDocument(t, r) || o.removeDocumentFromTarget(t, r, new vr(r, i))
                                }
                                e.hasPendingChanges && (s[t] = e.toTargetChange(), e.clearPendingChanges())
                            }
                        });
                        var r = Fi();
                        this.pendingDocumentTargetMapping.forEach(function(t, e) {
                            var n = !0;
                            e.forEachWhile(function(t) {
                                var e = o.queryDataForActiveTarget(t);
                                return !e || e.purpose === Gr.LimboResolution || (n = !1)
                            }), n && (r = r.add(t))
                        });
                        var t = new Xi(i, s, this.pendingTargetResets, this.pendingDocumentUpdates, r);
                        return this.pendingDocumentUpdates = Mi(), this.pendingDocumentTargetMapping = ro(), this.pendingTargetResets = new ci(Hn), t
                    }, t.prototype.addDocumentToTarget = function(t, e) {
                        if (this.isActiveTarget(t)) {
                            var n = this.targetContainsDocument(t, e.key) ? Ui.Modified : Ui.Added;
                            this.ensureTargetState(t).addDocumentChange(e.key, n), this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e.key, e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e.key, this.ensureDocumentTargetMapping(e.key).add(t))
                        }
                    }, t.prototype.removeDocumentFromTarget = function(t, e, n) {
                        if (this.isActiveTarget(t)) {
                            var r = this.ensureTargetState(t);
                            this.targetContainsDocument(t, e) ? r.addDocumentChange(e, Ui.Removed) : r.removeDocumentChange(e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e, this.ensureDocumentTargetMapping(e).delete(t)), n && (this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e, n))
                        }
                    }, t.prototype.removeTarget = function(t) {
                        delete this.targetStates[t]
                    }, t.prototype.getCurrentDocumentCountForTarget = function(t) {
                        var e = this.ensureTargetState(t).toTargetChange();
                        return this.metadataProvider.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size
                    }, t.prototype.recordPendingTargetRequest = function(t) {
                        this.ensureTargetState(t).recordPendingTargetRequest()
                    }, t.prototype.ensureTargetState = function(t) {
                        return this.targetStates[t] || (this.targetStates[t] = new eo), this.targetStates[t]
                    }, t.prototype.ensureDocumentTargetMapping = function(t) {
                        var e = this.pendingDocumentTargetMapping.get(t);
                        return e || (e = new ci(Hn), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(t, e)), e
                    }, t.prototype.isActiveTarget = function(t) {
                        return null !== this.queryDataForActiveTarget(t)
                    }, t.prototype.queryDataForActiveTarget = function(t) {
                        var e = this.targetStates[t];
                        return e && e.isPending ? null : this.metadataProvider.getQueryDataForTarget(t)
                    }, t.prototype.resetTarget = function(e) {
                        var n = this;
                        vn(!this.targetStates[e].isPending, "Should only reset active targets"), this.targetStates[e] = new eo, this.metadataProvider.getRemoteKeysForTarget(e).forEach(function(t) {
                            n.removeDocumentFromTarget(e, t, null)
                        })
                    }, t.prototype.targetContainsDocument = function(t, e) {
                        return this.metadataProvider.getRemoteKeysForTarget(t).has(e)
                    }, t
                }();

            function ro() {
                return new wr(mr.comparator)
            }

            function io() {
                return new wr(mr.comparator)
            }
            var oo, so, ao = ((oo = {})[ti.ASCENDING.name] = "ASCENDING", oo[ti.DESCENDING.name] = "DESCENDING", oo),
                uo = ((so = {})[Xr.LESS_THAN.name] = "LESS_THAN", so[Xr.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", so[Xr.GREATER_THAN.name] = "GREATER_THAN", so[Xr.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", so[Xr.EQUAL.name] = "EQUAL", so[Xr.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", so),
                co = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function ho(t, e) {
                vn(!jr(t), e + " is missing")
            }

            function lo(t) {
                return "number" == typeof t ? t : "string" == typeof t ? Number(t) : gn("can't parse " + t)
            }
            var fo = function() {
                function t(t, e) {
                    this.databaseId = t, this.options = e
                }
                return t.prototype.emptyByteString = function() {
                    return this.options.useProto3Json ? "" : new Uint8Array(0)
                }, t.prototype.unsafeCastProtoByteString = function(t) {
                    return t
                }, t.prototype.fromRpcStatus = function(t) {
                    var e = void 0 === t.code ? En.UNKNOWN : ki(t.code);
                    return new Sn(e, t.message || "")
                }, t.prototype.toInt32Value = function(t) {
                    return jr(t) ? void 0 : {
                        value: t
                    }
                }, t.prototype.fromInt32Value = function(t) {
                    var e;
                    return jr(e = "object" == typeof t ? t.value : t) ? null : e
                }, t.prototype.toTimestamp = function(t) {
                    return {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }, t.prototype.fromTimestamp = function(t) {
                    if ("string" == typeof t) return this.fromIso8601String(t);
                    vn(!!t, "Cannot deserialize null or undefined timestamp.");
                    var e = lo(t.seconds || "0"),
                        n = t.nanos || 0;
                    return new sr(e, n)
                }, t.prototype.fromIso8601String = function(t) {
                    var e = 0,
                        n = co.exec(t);
                    if (vn(!!n, "invalid timestamp: " + t), n[1]) {
                        var r = n[1];
                        r = (r + "000000000").substr(0, 9), e = Number(r)
                    }
                    var i = new Date(t),
                        o = Math.floor(i.getTime() / 1e3);
                    return new sr(o, e)
                }, t.prototype.toBytes = function(t) {
                    return this.options.useProto3Json ? t.toBase64() : this.unsafeCastProtoByteString(t.toUint8Array())
                }, t.prototype.fromBlob = function(t) {
                    return "string" == typeof t ? (vn(this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), rr.fromBase64String(t)) : (vn(!this.options.useProto3Json, "Expected bytes to be passed in as string, but got something else instead."), rr.fromUint8Array(t))
                }, t.prototype.toVersion = function(t) {
                    return this.toTimestamp(t.toTimestamp())
                }, t.prototype.fromVersion = function(t) {
                    return vn(!!t, "Trying to deserialize version that isn't set"), oi.fromTimestamp(this.fromTimestamp(t))
                }, t.prototype.toResourceName = function(t, e) {
                    return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()
                }, t.prototype.fromResourceName = function(t) {
                    var e = fr.fromString(t);
                    return vn(this.isValidResourceName(e), "Tried to deserialize invalid key " + e.toString()), e
                }, t.prototype.toName = function(t) {
                    return this.toResourceName(this.databaseId, t.path)
                }, t.prototype.fromName = function(t) {
                    var e = this.fromResourceName(t);
                    return vn(e.get(1) === this.databaseId.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.databaseId.projectId), vn(!e.get(3) && !this.databaseId.database || e.get(3) === this.databaseId.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.databaseId.database), new mr(this.extractLocalPathFromResourceName(e))
                }, t.prototype.toQueryPath = function(t) {
                    return this.toResourceName(this.databaseId, t)
                }, t.prototype.fromQueryPath = function(t) {
                    var e = this.fromResourceName(t);
                    return 4 === e.length ? fr.EMPTY_PATH : this.extractLocalPathFromResourceName(e)
                }, Object.defineProperty(t.prototype, "encodedDatabaseId", {
                    get: function() {
                        return new fr(["projects", this.databaseId.projectId, "databases", this.databaseId.database]).canonicalString()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.fullyQualifiedPrefixPath = function(t) {
                    return new fr(["projects", t.projectId, "databases", t.database])
                }, t.prototype.extractLocalPathFromResourceName = function(t) {
                    return vn(4 < t.length && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), t.popFirst(5)
                }, t.prototype.isValidResourceName = function(t) {
                    return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2)
                }, t.prototype.toValue = function(t) {
                    if (t instanceof Dr) return {
                        nullValue: "NULL_VALUE"
                    };
                    if (t instanceof Nr) return {
                        booleanValue: t.value()
                    };
                    if (t instanceof Rr) return {
                        integerValue: "" + t.value()
                    };
                    if (t instanceof Mr) {
                        var e = t.value();
                        if (this.options.useProto3Json) {
                            if (isNaN(e)) return {
                                doubleValue: "NaN"
                            };
                            if (e === 1 / 0) return {
                                doubleValue: "Infinity"
                            };
                            if (e === -1 / 0) return {
                                doubleValue: "-Infinity"
                            }
                        }
                        return {
                            doubleValue: t.value()
                        }
                    }
                    return t instanceof _r ? {
                        stringValue: t.value()
                    } : t instanceof Fr ? {
                        mapValue: this.toMapValue(t)
                    } : t instanceof Vr ? {
                        arrayValue: this.toArrayValue(t)
                    } : t instanceof Or ? {
                        timestampValue: this.toTimestamp(t.internalValue)
                    } : t instanceof qr ? {
                        geoPointValue: {
                            latitude: t.value().latitude,
                            longitude: t.value().longitude
                        }
                    } : t instanceof Lr ? {
                        bytesValue: this.toBytes(t.value())
                    } : t instanceof xr ? {
                        referenceValue: this.toResourceName(t.databaseId, t.key.path)
                    } : gn("Unknown FieldValue " + JSON.stringify(t))
                }, t.prototype.fromValue = function(t) {
                    var e = this,
                        n = t.value_type;
                    if (po(t, n, "nullValue")) return Dr.INSTANCE;
                    if (po(t, n, "booleanValue")) return Nr.of(t.booleanValue);
                    if (po(t, n, "integerValue")) return new Rr(lo(t.integerValue));
                    if (po(t, n, "doubleValue")) {
                        if (this.options.useProto3Json) {
                            if ("NaN" === t.doubleValue) return Mr.NAN;
                            if ("Infinity" === t.doubleValue) return Mr.POSITIVE_INFINITY;
                            if ("-Infinity" === t.doubleValue) return Mr.NEGATIVE_INFINITY
                        }
                        return new Mr(t.doubleValue)
                    }
                    if (po(t, n, "stringValue")) return new _r(t.stringValue);
                    if (po(t, n, "mapValue")) return this.fromFields(t.mapValue.fields || {});
                    if (po(t, n, "arrayValue")) {
                        ho(t.arrayValue, "arrayValue");
                        var r = t.arrayValue.values || [];
                        return new Vr(r.map(function(t) {
                            return e.fromValue(t)
                        }))
                    }
                    if (po(t, n, "timestampValue")) return ho(t.timestampValue, "timestampValue"), new Or(this.fromTimestamp(t.timestampValue));
                    if (po(t, n, "geoPointValue")) {
                        ho(t.geoPointValue, "geoPointValue");
                        var i = t.geoPointValue.latitude || 0,
                            o = t.geoPointValue.longitude || 0;
                        return new qr(new or(i, o))
                    }
                    if (po(t, n, "bytesValue")) {
                        ho(t.bytesValue, "bytesValue");
                        var s = this.fromBlob(t.bytesValue);
                        return new Lr(s)
                    }
                    if (po(t, n, "referenceValue")) {
                        ho(t.referenceValue, "referenceValue");
                        var a = this.fromResourceName(t.referenceValue),
                            u = new cr(a.get(1), a.get(3)),
                            c = new mr(this.extractLocalPathFromResourceName(a));
                        return new xr(u, c)
                    }
                    return gn("Unknown Value proto " + JSON.stringify(t))
                }, t.prototype.toMutationDocument = function(t, e) {
                    return {
                        name: this.toName(t),
                        fields: this.toFields(e)
                    }
                }, t.prototype.toDocument = function(t) {
                    return vn(!t.hasLocalMutations, "Can't serialize documents with mutations."), {
                        name: this.toName(t.key),
                        fields: this.toFields(t.data),
                        updateTime: this.toTimestamp(t.version.toTimestamp())
                    }
                }, t.prototype.fromDocument = function(t, e) {
                    return new gr(this.fromName(t.name), this.fromVersion(t.updateTime), this.fromFields(t.fields || {}), {
                        hasCommittedMutations: !!e
                    })
                }, t.prototype.toFields = function(t) {
                    var n = this,
                        r = {};
                    return t.forEach(function(t, e) {
                        r[t] = n.toValue(e)
                    }), r
                }, t.prototype.fromFields = function(t) {
                    var n = this,
                        e = t,
                        r = Fr.EMPTY;
                    return Nn(e, function(t, e) {
                        r = r.set(new dr([t]), n.fromValue(e))
                    }), r
                }, t.prototype.toMapValue = function(t) {
                    return {
                        fields: this.toFields(t)
                    }
                }, t.prototype.toArrayValue = function(t) {
                    var e = this,
                        n = [];
                    return t.forEach(function(t) {
                        n.push(e.toValue(t))
                    }), {
                        values: n
                    }
                }, t.prototype.fromFound = function(t) {
                    vn(!!t.found, "Tried to deserialize a found document from a missing document."), ho(t.found.name, "doc.found.name"), ho(t.found.updateTime, "doc.found.updateTime");
                    var e = this.fromName(t.found.name),
                        n = this.fromVersion(t.found.updateTime),
                        r = this.fromFields(t.found.fields || {});
                    return new gr(e, n, r, {}, t.found)
                }, t.prototype.fromMissing = function(t) {
                    vn(!!t.missing, "Tried to deserialize a missing document from a found document."), vn(!!t.readTime, "Tried to deserialize a missing document without a read time.");
                    var e = this.fromName(t.missing),
                        n = this.fromVersion(t.readTime);
                    return new vr(e, n)
                }, t.prototype.fromMaybeDocument = function(t) {
                    var e = t.result;
                    return po(t, e, "found") ? this.fromFound(t) : po(t, e, "missing") ? this.fromMissing(t) : gn("invalid batch get response: " + JSON.stringify(t))
                }, t.prototype.toWatchTargetChangeState = function(t) {
                    switch (t) {
                        case Gi.Added:
                            return "ADD";
                        case Gi.Current:
                            return "CURRENT";
                        case Gi.NoChange:
                            return "NO_CHANGE";
                        case Gi.Removed:
                            return "REMOVE";
                        case Gi.Reset:
                            return "RESET";
                        default:
                            return gn("Unknown WatchTargetChangeState: " + t)
                    }
                }, t.prototype.toTestWatchChange = function(t) {
                    if (t instanceof Zi) return {
                        filter: {
                            count: t.existenceFilter.count,
                            targetId: t.targetId
                        }
                    };
                    if (t instanceof $i) {
                        if (t.newDoc instanceof gr) {
                            var e = t.newDoc;
                            return {
                                documentChange: {
                                    document: {
                                        name: this.toName(e.key),
                                        fields: this.toFields(e.data),
                                        updateTime: this.toVersion(e.version)
                                    },
                                    targetIds: t.updatedTargetIds,
                                    removedTargetIds: t.removedTargetIds
                                }
                            }
                        }
                        if (t.newDoc instanceof vr) {
                            e = t.newDoc;
                            return {
                                documentDelete: {
                                    document: this.toName(e.key),
                                    readTime: this.toVersion(e.version),
                                    removedTargetIds: t.removedTargetIds
                                }
                            }
                        }
                        if (null === t.newDoc) return {
                            documentRemove: {
                                document: this.toName(t.key),
                                removedTargetIds: t.removedTargetIds
                            }
                        }
                    }
                    if (t instanceof to) {
                        var n = void 0;
                        return t.cause && (n = {
                            code: function(t) {
                                if (void 0 === t) return Ci.OK;
                                switch (t) {
                                    case En.OK:
                                        return Ci.OK;
                                    case En.CANCELLED:
                                        return Ci.CANCELLED;
                                    case En.UNKNOWN:
                                        return Ci.UNKNOWN;
                                    case En.DEADLINE_EXCEEDED:
                                        return Ci.DEADLINE_EXCEEDED;
                                    case En.RESOURCE_EXHAUSTED:
                                        return Ci.RESOURCE_EXHAUSTED;
                                    case En.INTERNAL:
                                        return Ci.INTERNAL;
                                    case En.UNAVAILABLE:
                                        return Ci.UNAVAILABLE;
                                    case En.UNAUTHENTICATED:
                                        return Ci.UNAUTHENTICATED;
                                    case En.INVALID_ARGUMENT:
                                        return Ci.INVALID_ARGUMENT;
                                    case En.NOT_FOUND:
                                        return Ci.NOT_FOUND;
                                    case En.ALREADY_EXISTS:
                                        return Ci.ALREADY_EXISTS;
                                    case En.PERMISSION_DENIED:
                                        return Ci.PERMISSION_DENIED;
                                    case En.FAILED_PRECONDITION:
                                        return Ci.FAILED_PRECONDITION;
                                    case En.ABORTED:
                                        return Ci.ABORTED;
                                    case En.OUT_OF_RANGE:
                                        return Ci.OUT_OF_RANGE;
                                    case En.UNIMPLEMENTED:
                                        return Ci.UNIMPLEMENTED;
                                    case En.DATA_LOSS:
                                        return Ci.DATA_LOSS;
                                    default:
                                        return gn("Unknown status code: " + t)
                                }
                            }(t.cause.code),
                            message: t.cause.message
                        }), {
                            targetChange: {
                                targetChangeType: this.toWatchTargetChangeState(t.state),
                                targetIds: t.targetIds,
                                resumeToken: this.unsafeCastProtoByteString(t.resumeToken),
                                cause: n
                            }
                        }
                    }
                    return gn("Unrecognized watch change: " + JSON.stringify(t))
                }, t.prototype.fromWatchChange = function(t) {
                    var e, n = t.response_type;
                    if (po(t, n, "targetChange")) {
                        ho(t.targetChange, "targetChange");
                        var r = this.fromWatchTargetChangeState(t.targetChange.targetChangeType || "NO_CHANGE"),
                            i = t.targetChange.targetIds || [],
                            o = t.targetChange.resumeToken || this.emptyByteString(),
                            s = t.targetChange.cause,
                            a = s && this.fromRpcStatus(s);
                        e = new to(r, i, o, a || null)
                    } else if (po(t, n, "documentChange")) {
                        ho(t.documentChange, "documentChange"), ho(t.documentChange.document, "documentChange.name"), ho(t.documentChange.document.name, "documentChange.document.name"), ho(t.documentChange.document.updateTime, "documentChange.document.updateTime");
                        var u = t.documentChange,
                            c = this.fromName(u.document.name),
                            h = this.fromVersion(u.document.updateTime),
                            l = this.fromFields(u.document.fields || {}),
                            f = new gr(c, h, l, {}, u.document),
                            p = u.targetIds || [],
                            d = u.removedTargetIds || [];
                        e = new $i(p, d, f.key, f)
                    } else if (po(t, n, "documentDelete")) {
                        ho(t.documentDelete, "documentDelete"), ho(t.documentDelete.document, "documentDelete.document");
                        var m = t.documentDelete;
                        c = this.fromName(m.document), h = m.readTime ? this.fromVersion(m.readTime) : oi.forDeletedDoc(), f = new vr(c, h), d = m.removedTargetIds || [];
                        e = new $i([], d, f.key, f)
                    } else if (po(t, n, "documentRemove")) {
                        ho(t.documentRemove, "documentRemove"), ho(t.documentRemove.document, "documentRemove");
                        var y = t.documentRemove;
                        c = this.fromName(y.document), d = y.removedTargetIds || [];
                        e = new $i([], d, c, null)
                    } else {
                        if (!po(t, n, "filter")) return gn("Unknown change type " + JSON.stringify(t));
                        ho(t.filter, "filter"), ho(t.filter.targetId, "filter.targetId");
                        var g = t.filter,
                            v = g.count || 0,
                            b = new Ni(v),
                            w = g.targetId;
                        e = new Zi(w, b)
                    }
                    return e
                }, t.prototype.fromWatchTargetChangeState = function(t) {
                    return "NO_CHANGE" === t ? Gi.NoChange : "ADD" === t ? Gi.Added : "REMOVE" === t ? Gi.Removed : "CURRENT" === t ? Gi.Current : "RESET" === t ? Gi.Reset : gn("Got unexpected TargetChange.state: " + t)
                }, t.prototype.versionFromListenResponse = function(t) {
                    if (!po(t, t.response_type, "targetChange")) return oi.MIN;
                    var e = t.targetChange;
                    return e.targetIds && e.targetIds.length ? oi.MIN : e.readTime ? this.fromVersion(e.readTime) : oi.MIN
                }, t.prototype.toMutation = function(t) {
                    var e, n = this;
                    if (t instanceof yi) e = {
                        update: this.toMutationDocument(t.key, t.value)
                    };
                    else if (t instanceof bi) e = {
                        delete: this.toName(t.key)
                    };
                    else if (t instanceof gi) e = {
                        update: this.toMutationDocument(t.key, t.data),
                        updateMask: this.toDocumentMask(t.fieldMask)
                    };
                    else {
                        if (!(t instanceof vi)) return gn("Unknown mutation type " + t.type);
                        e = {
                            transform: {
                                document: this.toName(t.key),
                                fieldTransforms: t.fieldTransforms.map(function(t) {
                                    return n.toFieldTransform(t)
                                })
                            }
                        }
                    }
                    return t.precondition.isNone || (e.currentDocument = this.toPrecondition(t.precondition)), e
                }, t.prototype.fromMutation = function(t) {
                    var e = this,
                        n = t.currentDocument ? this.fromPrecondition(t.currentDocument) : di.NONE;
                    if (t.update) {
                        ho(t.update.name, "name");
                        var r = this.fromName(t.update.name),
                            i = this.fromFields(t.update.fields || {});
                        if (t.updateMask) {
                            var o = this.fromDocumentMask(t.updateMask);
                            return new gi(r, i, o, n)
                        }
                        return new yi(r, i, n)
                    }
                    if (t.delete) {
                        r = this.fromName(t.delete);
                        return new bi(r, n)
                    }
                    if (t.transform) {
                        r = this.fromName(t.transform.document);
                        var s = t.transform.fieldTransforms.map(function(t) {
                            return e.fromFieldTransform(t)
                        });
                        return vn(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new vi(r, s)
                    }
                    return gn("unknown mutation proto: " + JSON.stringify(t))
                }, t.prototype.toPrecondition = function(t) {
                    return vn(!t.isNone, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? {
                        updateTime: this.toVersion(t.updateTime)
                    } : void 0 !== t.exists ? {
                        exists: t.exists
                    } : gn("Unknown precondition")
                }, t.prototype.fromPrecondition = function(t) {
                    return void 0 !== t.updateTime ? di.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? di.exists(t.exists) : di.NONE
                }, t.prototype.fromWriteResult = function(t, e) {
                    var n = this,
                        r = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e),
                        i = null;
                    return t.transformResults && 0 < t.transformResults.length && (i = t.transformResults.map(function(t) {
                        return n.fromValue(t)
                    })), new pi(r, i)
                }, t.prototype.fromWriteResults = function(t, e) {
                    var n = this;
                    return t && 0 < t.length ? (vn(void 0 !== e, "Received a write result without a commit time"), t.map(function(t) {
                        return n.fromWriteResult(t, e)
                    })) : []
                }, t.prototype.toFieldTransform = function(t) {
                    var e = this,
                        n = t.transform;
                    if (n instanceof wi) return {
                        fieldPath: t.field.canonicalString(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof Ei) return {
                        fieldPath: t.field.canonicalString(),
                        appendMissingElements: {
                            values: n.elements.map(function(t) {
                                return e.toValue(t)
                            })
                        }
                    };
                    if (n instanceof Si) return {
                        fieldPath: t.field.canonicalString(),
                        removeAllFromArray: {
                            values: n.elements.map(function(t) {
                                return e.toValue(t)
                            })
                        }
                    };
                    if (n instanceof Ti) return {
                        fieldPath: t.field.canonicalString(),
                        increment: this.toValue(n.operand)
                    };
                    throw gn("Unknown transform: " + t.transform)
                }, t.prototype.fromFieldTransform = function(t) {
                    var e = this,
                        n = t.transform_type,
                        r = null;
                    if (po(t, n, "setToServerValue")) vn("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), r = wi.instance;
                    else if (po(t, n, "appendMissingElements")) {
                        var i = t.appendMissingElements.values || [];
                        r = new Ei(i.map(function(t) {
                            return e.fromValue(t)
                        }))
                    } else if (po(t, n, "removeAllFromArray")) {
                        i = t.removeAllFromArray.values || [];
                        r = new Si(i.map(function(t) {
                            return e.fromValue(t)
                        }))
                    } else if (po(t, n, "increment")) {
                        var o = this.fromValue(t.increment);
                        vn(o instanceof Ar, "NUMERIC_ADD transform requires a NumberValue"), r = new Ti(o)
                    } else gn("Unknown transform proto: " + JSON.stringify(t));
                    var s = dr.fromServerFormat(t.fieldPath);
                    return new fi(s, r)
                }, t.prototype.toDocumentsTarget = function(t) {
                    return {
                        documents: [this.toQueryPath(t.path)]
                    }
                }, t.prototype.fromDocumentsTarget = function(t) {
                    var e = t.documents.length;
                    vn(1 === e, "DocumentsTarget contained other than 1 document: " + e);
                    var n = t.documents[0];
                    return Hr.atPath(this.fromQueryPath(n))
                }, t.prototype.toQueryTarget = function(t) {
                    var e = {
                            structuredQuery: {}
                        },
                        n = t.path;
                    null !== t.collectionGroup ? (vn(n.length % 2 == 0, "Collection Group queries should be within a document path or root."), e.parent = this.toQueryPath(n), e.structuredQuery.from = [{
                        collectionId: t.collectionGroup,
                        allDescendants: !0
                    }]) : (vn(n.length % 2 != 0, "Document queries with filters are not supported."), e.parent = this.toQueryPath(n.popLast()), e.structuredQuery.from = [{
                        collectionId: n.lastSegment()
                    }]);
                    var r = this.toFilter(t.filters);
                    r && (e.structuredQuery.where = r);
                    var i = this.toOrder(t.orderBy);
                    i && (e.structuredQuery.orderBy = i);
                    var o = this.toInt32Value(t.limit);
                    return void 0 !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.toCursor(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.toCursor(t.endAt)), e
                }, t.prototype.fromQueryTarget = function(t) {
                    var e = this.fromQueryPath(t.parent),
                        n = t.structuredQuery,
                        r = n.from ? n.from.length : 0,
                        i = null;
                    if (0 < r) {
                        vn(1 === r, "StructuredQuery.from with more than one collection is not supported.");
                        var o = n.from[0];
                        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
                    }
                    var s = [];
                    n.where && (s = this.fromFilter(n.where));
                    var a = [];
                    n.orderBy && (a = this.fromOrder(n.orderBy));
                    var u = null;
                    n.limit && (u = this.fromInt32Value(n.limit));
                    var c = null;
                    n.startAt && (c = this.fromCursor(n.startAt));
                    var h = null;
                    return n.endAt && (h = this.fromCursor(n.endAt)), new Hr(e, i, a, s, u, c, h)
                }, t.prototype.toListenRequestLabels = function(t) {
                    var e = this.toLabel(t.purpose);
                    return null == e ? null : {
                        "goog-listen-tags": e
                    }
                }, t.prototype.toLabel = function(t) {
                    switch (t) {
                        case Gr.Listen:
                            return null;
                        case Gr.ExistenceFilterMismatch:
                            return "existence-filter-mismatch";
                        case Gr.LimboResolution:
                            return "limbo-document";
                        default:
                            return gn("Unrecognized query purpose: " + t)
                    }
                }, t.prototype.toTarget = function(t) {
                    var e, n = t.query;
                    return (e = n.isDocumentQuery() ? {
                        documents: this.toDocumentsTarget(n)
                    } : {
                        query: this.toQueryTarget(n)
                    }).targetId = t.targetId, 0 < t.resumeToken.length && (e.resumeToken = this.unsafeCastProtoByteString(t.resumeToken)), e
                }, t.prototype.toFilter = function(t) {
                    var e = this;
                    if (0 !== t.length) {
                        var n = t.map(function(t) {
                            return t instanceof Jr ? e.toRelationFilter(t) : e.toUnaryFilter(t)
                        });
                        return 1 === n.length ? n[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: n
                            }
                        }
                    }
                }, t.prototype.fromFilter = function(t) {
                    var e = this;
                    return t ? void 0 !== t.unaryFilter ? [this.fromUnaryFilter(t)] : void 0 !== t.fieldFilter ? [this.fromRelationFilter(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) {
                        return e.fromFilter(t)
                    }).reduce(function(t, e) {
                        return t.concat(e)
                    }) : gn("Unknown filter: " + JSON.stringify(t)) : []
                }, t.prototype.toOrder = function(t) {
                    var e = this;
                    if (0 !== t.length) return t.map(function(t) {
                        return e.toPropertyOrder(t)
                    })
                }, t.prototype.fromOrder = function(t) {
                    var e = this;
                    return t.map(function(t) {
                        return e.fromPropertyOrder(t)
                    })
                }, t.prototype.toCursor = function(t) {
                    var e = this;
                    return {
                        before: t.before,
                        values: t.position.map(function(t) {
                            return e.toValue(t)
                        })
                    }
                }, t.prototype.fromCursor = function(t) {
                    var e = this,
                        n = !!t.before,
                        r = t.values.map(function(t) {
                            return e.fromValue(t)
                        });
                    return new ei(r, n)
                }, t.prototype.toDirection = function(t) {
                    return ao[t.name]
                }, t.prototype.fromDirection = function(t) {
                    switch (t) {
                        case "ASCENDING":
                            return ti.ASCENDING;
                        case "DESCENDING":
                            return ti.DESCENDING;
                        default:
                            return
                    }
                }, t.prototype.toOperatorName = function(t) {
                    return uo[t.name]
                }, t.prototype.fromOperatorName = function(t) {
                    switch (t) {
                        case "EQUAL":
                            return Xr.EQUAL;
                        case "GREATER_THAN":
                            return Xr.GREATER_THAN;
                        case "GREATER_THAN_OR_EQUAL":
                            return Xr.GREATER_THAN_OR_EQUAL;
                        case "LESS_THAN":
                            return Xr.LESS_THAN;
                        case "LESS_THAN_OR_EQUAL":
                            return Xr.LESS_THAN_OR_EQUAL;
                        case "ARRAY_CONTAINS":
                            return Xr.ARRAY_CONTAINS;
                        case "OPERATOR_UNSPECIFIED":
                            return gn("Unspecified relation");
                        default:
                            return gn("Unknown relation")
                    }
                }, t.prototype.toFieldPathReference = function(t) {
                    return {
                        fieldPath: t.canonicalString()
                    }
                }, t.prototype.fromFieldPathReference = function(t) {
                    return dr.fromServerFormat(t.fieldPath)
                }, t.prototype.toPropertyOrder = function(t) {
                    return {
                        field: this.toFieldPathReference(t.field),
                        direction: this.toDirection(t.dir)
                    }
                }, t.prototype.fromPropertyOrder = function(t) {
                    return new ni(this.fromFieldPathReference(t.field), this.fromDirection(t.direction))
                }, t.prototype.toRelationFilter = function(t) {
                    return t instanceof Jr ? {
                        fieldFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: this.toOperatorName(t.op),
                            value: this.toValue(t.value)
                        }
                    } : gn("Unrecognized filter: " + JSON.stringify(t))
                }, t.prototype.fromRelationFilter = function(t) {
                    return new Jr(this.fromFieldPathReference(t.fieldFilter.field), this.fromOperatorName(t.fieldFilter.op), this.fromValue(t.fieldFilter.value))
                }, t.prototype.toUnaryFilter = function(t) {
                    return t instanceof Zr ? {
                        unaryFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: "IS_NAN"
                        }
                    } : t instanceof $r ? {
                        unaryFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: "IS_NULL"
                        }
                    } : gn("Unrecognized filter: " + JSON.stringify(t))
                }, t.prototype.fromUnaryFilter = function(t) {
                    switch (t.unaryFilter.op) {
                        case "IS_NAN":
                            var e = this.fromFieldPathReference(t.unaryFilter.field);
                            return new Zr(e);
                        case "IS_NULL":
                            var n = this.fromFieldPathReference(t.unaryFilter.field);
                            return new $r(n);
                        case "OPERATOR_UNSPECIFIED":
                            return gn("Unspecified filter");
                        default:
                            return gn("Unknown filter")
                    }
                }, t.prototype.toDocumentMask = function(t) {
                    var e = [];
                    return t.fields.forEach(function(t) {
                        return e.push(t.canonicalString())
                    }), {
                        fieldPaths: e
                    }
                }, t.prototype.fromDocumentMask = function(t) {
                    var e = (t.fieldPaths || []).map(function(t) {
                        return dr.fromServerFormat(t)
                    });
                    return li.fromArray(e)
                }, t
            }();

            function po(t, e, n) {
                return e === n || !e && n in t
            }
            var mo = function() {
                    function t(t) {
                        this.sendFn = t.sendFn, this.closeFn = t.closeFn
                    }
                    return t.prototype.onOpen = function(t) {
                        vn(!this.wrappedOnOpen, "Called onOpen on stream twice!"), this.wrappedOnOpen = t
                    }, t.prototype.onClose = function(t) {
                        vn(!this.wrappedOnClose, "Called onClose on stream twice!"), this.wrappedOnClose = t
                    }, t.prototype.onMessage = function(t) {
                        vn(!this.wrappedOnMessage, "Called onMessage on stream twice!"), this.wrappedOnMessage = t
                    }, t.prototype.close = function() {
                        this.closeFn()
                    }, t.prototype.send = function(t) {
                        this.sendFn(t)
                    }, t.prototype.callOnOpen = function() {
                        vn(void 0 !== this.wrappedOnOpen, "Cannot call onOpen because no callback was set"), this.wrappedOnOpen()
                    }, t.prototype.callOnClose = function(t) {
                        vn(void 0 !== this.wrappedOnClose, "Cannot call onClose because no callback was set"), this.wrappedOnClose(t)
                    }, t.prototype.callOnMessage = function(t) {
                        vn(void 0 !== this.wrappedOnMessage, "Cannot call onMessage because no callback was set"), this.wrappedOnMessage(t)
                    }, t
                }(),
                yo = "Connection",
                go = {
                    BatchGetDocuments: "batchGet",
                    Commit: "commit"
                },
                vo = "gl-js/ fire/" + hn,
                bo = function() {
                    function t(t) {
                        this.databaseId = t.databaseId;
                        var e = t.ssl ? "https" : "http";
                        this.baseUrl = e + "://" + t.host
                    }
                    return t.prototype.modifyHeadersForRequest = function(t, e) {
                        if (e)
                            for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
                        t["X-Goog-Api-Client"] = vo
                    }, t.prototype.invokeRPC = function(o, s, a) {
                        var u = this,
                            c = this.makeUrl(o);
                        return new Promise(function(n, r) {
                            var i = new nn;
                            i.listenOnce(tn.COMPLETE, function() {
                                try {
                                    switch (i.getLastErrorCode()) {
                                        case Ze.NO_ERROR:
                                            var t = i.getResponseJson();
                                            dn(yo, "XHR received:", JSON.stringify(t)), n(t);
                                            break;
                                        case Ze.TIMEOUT:
                                            dn(yo, 'RPC "' + o + '" timed out'), r(new Sn(En.DEADLINE_EXCEEDED, "Request time out"));
                                            break;
                                        case Ze.HTTP_ERROR:
                                            var e = i.getStatus();
                                            dn(yo, 'RPC "' + o + '" failed with status:', e, "response text:", i.getResponseText()), 0 < e ? r(new Sn(function(t) {
                                                switch (t) {
                                                    case 200:
                                                        return En.OK;
                                                    case 400:
                                                        return En.INVALID_ARGUMENT;
                                                    case 401:
                                                        return En.UNAUTHENTICATED;
                                                    case 403:
                                                        return En.PERMISSION_DENIED;
                                                    case 404:
                                                        return En.NOT_FOUND;
                                                    case 409:
                                                        return En.ABORTED;
                                                    case 416:
                                                        return En.OUT_OF_RANGE;
                                                    case 429:
                                                        return En.RESOURCE_EXHAUSTED;
                                                    case 499:
                                                        return En.CANCELLED;
                                                    case 500:
                                                        return En.UNKNOWN;
                                                    case 501:
                                                        return En.UNIMPLEMENTED;
                                                    case 503:
                                                        return En.UNAVAILABLE;
                                                    case 504:
                                                        return En.DEADLINE_EXCEEDED;
                                                    default:
                                                        return 200 <= t && t < 300 ? En.OK : 400 <= t && t < 500 ? En.FAILED_PRECONDITION : 500 <= t && t < 600 ? En.INTERNAL : En.UNKNOWN
                                                }
                                            }(e), "Server responded with status " + i.getStatusText())) : (dn(yo, 'RPC "' + o + '" failed'), r(new Sn(En.UNAVAILABLE, "Connection failed.")));
                                            break;
                                        default:
                                            gn('RPC "' + o + '" failed with unanticipated webchannel error ' + i.getLastErrorCode() + ": " + i.getLastError() + ", giving up.")
                                    }
                                } finally {
                                    dn(yo, 'RPC "' + o + '" completed.')
                                }
                            });
                            var t = JSON.stringify(s);
                            dn(yo, "XHR sending: ", c + " " + t);
                            var e = {
                                "Content-Type": "text/plain"
                            };
                            u.modifyHeadersForRequest(e, a), i.send(c, "POST", t, e, 15)
                        })
                    }, t.prototype.invokeStreamingRPC = function(t, e, n) {
                        return this.invokeRPC(t, e, n)
                    }, t.prototype.openStream = function(t, e) {
                        var n = [this.baseUrl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                            r = $e(),
                            i = {
                                backgroundChannelTest: !0,
                                httpSessionIdParam: "gsessionid",
                                initMessageHeaders: {},
                                messageUrlParams: {
                                    database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
                                },
                                sendRawJson: !0,
                                supportsCrossDomainXhr: !0,
                                internalChannelParams: {
                                    forwardChannelRequestTimeoutMs: 6e5
                                }
                            };
                        this.modifyHeadersForRequest(i.initMessageHeaders, e), "object" == typeof navigator && "ReactNative" === navigator.product || (i.httpHeadersOverwriteParam = "$httpHeaders");
                        var o = n.join("");
                        dn(yo, "Creating WebChannel: " + o + " " + i);
                        var s = r.createWebChannel(o, i),
                            a = !1,
                            u = !1,
                            c = new mo({
                                sendFn: function(t) {
                                    u ? dn(yo, "Not sending because WebChannel is closed:", t) : (a || (dn(yo, "Opening WebChannel transport."), s.open(), a = !0), dn(yo, "WebChannel sending:", t), s.send(t))
                                },
                                closeFn: function() {
                                    return s.close()
                                }
                            }),
                            h = function(t, e) {
                                s.listen(t, function(t) {
                                    try {
                                        e(t)
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 0)
                                    }
                                })
                            };
                        return h(en.EventType.OPEN, function() {
                            u || dn(yo, "WebChannel transport opened.")
                        }), h(en.EventType.CLOSE, function() {
                            u || (u = !0, dn(yo, "WebChannel transport closed"), c.callOnClose())
                        }), h(en.EventType.ERROR, function(t) {
                            u || (u = !0, dn(yo, "WebChannel transport errored:", t), c.callOnClose(new Sn(En.UNAVAILABLE, "The operation could not be completed")))
                        }), h(en.EventType.MESSAGE, function(t) {
                            if (!u) {
                                var e = t.data[0];
                                vn(!!e, "Got a webchannel message without data.");
                                var n = e.error || e[0] && e[0].error;
                                if (n) {
                                    dn(yo, "WebChannel received error:", n);
                                    var r = n.status,
                                        i = function(t) {
                                            var e = Ci[t];
                                            if (void 0 !== e) return ki(e)
                                        }(r),
                                        o = n.message;
                                    void 0 === i && (i = En.INTERNAL, o = "Unknown error status: " + r + " with message " + n.message), u = !0, c.callOnClose(new Sn(i, o)), s.close()
                                } else dn(yo, "WebChannel received:", e), c.callOnMessage(e)
                            }
                        }), setTimeout(function() {
                            c.callOnOpen()
                        }, 0), c
                    }, t.prototype.makeUrl = function(t) {
                        var e = go[t];
                        vn(void 0 !== e, "Unknown REST mapping for: " + t);
                        var n = [this.baseUrl, "/", "v1"];
                        return n.push("/projects/"), n.push(this.databaseId.projectId), n.push("/databases/"), n.push(this.databaseId.database), n.push("/documents"), n.push(":"), n.push(e), n.join("")
                    }, t
                }(),
                wo = function() {
                    function t() {
                        this.emptyByteString = "", this.base64Available = "undefined" != typeof atob
                    }
                    return Object.defineProperty(t.prototype, "document", {
                        get: function() {
                            return "undefined" != typeof document ? document : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "window", {
                        get: function() {
                            return "undefined" != typeof window ? window : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.loadConnection = function(t) {
                        return Promise.resolve(new bo(t))
                    }, t.prototype.newSerializer = function(t) {
                        return new fo(t, {
                            useProto3Json: !0
                        })
                    }, t.prototype.formatJSON = function(t) {
                        return JSON.stringify(t)
                    }, t.prototype.atob = function(t) {
                        return atob(t)
                    }, t.prototype.btoa = function(t) {
                        return btoa(t)
                    }, t
                }();
            bn.setPlatform(new wo);
            var Eo, So, To = function() {
                    function t(t, e) {
                        var n = this;
                        this.previousValue = t, e && (e.sequenceNumberHandler = function(t) {
                            return n.setPreviousValue(t)
                        }, this.writeNewSequenceNumber = function(t) {
                            return e.writeSequenceNumber(t)
                        })
                    }
                    return t.prototype.setPreviousValue = function(t) {
                        return this.previousValue = Math.max(t, this.previousValue), this.previousValue
                    }, t.prototype.next = function() {
                        var t = ++this.previousValue;
                        return this.writeNewSequenceNumber && this.writeNewSequenceNumber(t), t
                    }, t.INVALID = -1, t
                }(),
                Io = function() {
                    var n = this;
                    this.promise = new Promise(function(t, e) {
                        n.resolve = t, n.reject = e
                    })
                };
            (So = Eo || (Eo = {})).All = "all", So.ListenStreamIdle = "listen_stream_idle", So.ListenStreamConnectionBackoff = "listen_stream_connection_backoff", So.WriteStreamIdle = "write_stream_idle", So.WriteStreamConnectionBackoff = "write_stream_connection_backoff", So.OnlineStateTimeout = "online_state_timeout", So.ClientMetadataRefresh = "client_metadata_refresh", So.LruGarbageCollection = "lru_garbage_collection";
            var Co = function() {
                    function s(t, e, n, r, i) {
                        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new Io, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.catch = this.deferred.promise.catch.bind(this.deferred.promise), this.deferred.promise.catch(function(t) {})
                    }
                    return s.createAndSchedule = function(t, e, n, r, i) {
                        var o = new s(t, e, Date.now() + n, r, i);
                        return o.start(n), o
                    }, s.prototype.start = function(t) {
                        var e = this;
                        this.timerHandle = setTimeout(function() {
                            return e.handleDelayElapsed()
                        }, t)
                    }, s.prototype.skipDelay = function() {
                        return this.handleDelayElapsed()
                    }, s.prototype.cancel = function(t) {
                        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Sn(En.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
                    }, s.prototype.handleDelayElapsed = function() {
                        var e = this;
                        this.asyncQueue.enqueueAndForget(function() {
                            return null !== e.timerHandle ? (e.clearTimeout(), e.op().then(function(t) {
                                return e.deferred.resolve(t)
                            })) : Promise.resolve()
                        })
                    }, s.prototype.clearTimeout = function() {
                        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
                    }, s
                }(),
                Do = function() {
                    function t() {
                        this.tail = Promise.resolve(), this.delayedOperations = [], this.operationInProgress = !1
                    }
                    return t.prototype.enqueueAndForget = function(t) {
                        this.enqueue(t)
                    }, t.prototype.enqueue = function(t) {
                        var n = this;
                        this.verifyNotFailed();
                        var e = this.tail.then(function() {
                            return n.operationInProgress = !0, t().catch(function(t) {
                                n.failure = t, n.operationInProgress = !1;
                                var e = t.stack || t.message || "";
                                throw mn("INTERNAL UNHANDLED ERROR: ", e), e.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function() {
                                    throw t
                                }, 0), t
                            }).then(function(t) {
                                return n.operationInProgress = !1, t
                            })
                        });
                        return this.tail = e
                    }, t.prototype.enqueueAfterDelay = function(t, e, n) {
                        var r = this;
                        this.verifyNotFailed(), vn(0 <= e, "Attempted to schedule an operation with a negative delay of " + e), vn(!this.containsDelayedOperation(t), "Attempted to schedule multiple operations with timer id " + t + ".");
                        var i = Co.createAndSchedule(this, t, e, n, function(t) {
                            return r.removeDelayedOperation(t)
                        });
                        return this.delayedOperations.push(i), i
                    }, t.prototype.verifyNotFailed = function() {
                        this.failure && gn("AsyncQueue is already failed: " + (this.failure.stack || this.failure.message))
                    }, t.prototype.verifyOperationInProgress = function() {
                        vn(this.operationInProgress, "verifyOpInProgress() called when no op in progress on this queue.")
                    }, t.prototype.drain = function() {
                        return this.enqueue(function() {
                            return Promise.resolve()
                        })
                    }, t.prototype.containsDelayedOperation = function(t) {
                        for (var e = 0, n = this.delayedOperations; e < n.length; e++) {
                            if (n[e].timerId === t) return !0
                        }
                        return !1
                    }, t.prototype.runDelayedOperationsEarly = function(r) {
                        var i = this;
                        return this.drain().then(function() {
                            vn(r === Eo.All || i.containsDelayedOperation(r), "Attempted to drain to missing operation " + r), i.delayedOperations.sort(function(t, e) {
                                return t.targetTimeMs - e.targetTimeMs
                            });
                            for (var t = 0, e = i.delayedOperations; t < e.length; t++) {
                                var n = e[t];
                                if (n.skipDelay(), r !== Eo.All && n.timerId === r) break
                            }
                            return i.drain()
                        })
                    }, t.prototype.removeDelayedOperation = function(t) {
                        var e = this.delayedOperations.indexOf(t);
                        vn(0 <= e, "Delayed operation not found."), this.delayedOperations.splice(e, 1)
                    }, t
                }(),
                No = "",
                Ao = "",
                ko = "",
                Ro = "";

            function Mo(t) {
                for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = Oo(e)), e = _o(t.get(n), e);
                return Oo(e)
            }

            function _o(t, e) {
                for (var n = e, r = t.length, i = 0; i < r; i++) {
                    var o = t.charAt(i);
                    switch (o) {
                        case "\0":
                            n += No + ko;
                            break;
                        case No:
                            n += No + Ro;
                            break;
                        default:
                            n += o
                    }
                }
                return n
            }

            function Oo(t) {
                return t + No + Ao
            }

            function Po(t) {
                var e = t.length;
                if (vn(2 <= e, "Invalid path " + t), 2 === e) return vn(t.charAt(0) === No && t.charAt(1) === Ao, "Non-empty path " + t + " had length 2"), fr.EMPTY_PATH;
                for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
                    var s = t.indexOf(No, o);
                    switch ((s < 0 || n < s) && gn('Invalid encoded resource path: "' + t + '"'), t.charAt(s + 1)) {
                        case Ao:
                            var a = t.substring(o, s),
                                u = void 0;
                            0 === i.length ? u = a : (u = i += a, i = ""), r.push(u);
                            break;
                        case ko:
                            i += t.substring(o, s), i += "\0";
                            break;
                        case Ro:
                            i += t.substring(o, s + 1);
                            break;
                        default:
                            gn('Invalid encoded resource path: "' + t + '"')
                    }
                    o = s + 2
                }
                return new fr(r)
            }
            var Lo = function() {
                    function t(t, e, n, r) {
                        this.batchId = t, this.localWriteTime = e, this.baseMutations = n, vn(0 < (this.mutations = r).length, "Cannot create an empty mutation batch")
                    }
                    return t.prototype.applyToRemoteDocument = function(t, e, n) {
                        e && vn(e.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                        var r = n.mutationResults;
                        vn(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ").");
                        for (var i = 0; i < this.mutations.length; i++) {
                            var o = this.mutations[i];
                            if (o.key.isEqual(t)) {
                                var s = r[i];
                                e = o.applyToRemoteDocument(e, s)
                            }
                        }
                        return e
                    }, t.prototype.applyToLocalView = function(t, e) {
                        e && vn(e.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
                            (a = r[n]).key.isEqual(t) && (e = a.applyToLocalView(e, e, this.localWriteTime))
                        }
                        for (var i = e, o = 0, s = this.mutations; o < s.length; o++) {
                            var a;
                            (a = s[o]).key.isEqual(t) && (e = a.applyToLocalView(e, i, this.localWriteTime))
                        }
                        return e
                    }, t.prototype.applyToLocalDocumentSet = function(n) {
                        var r = this,
                            i = n;
                        return this.mutations.forEach(function(t) {
                            var e = r.applyToLocalView(t.key, n.get(t.key));
                            e && (i = i.insert(t.key, e))
                        }), i
                    }, t.prototype.keys = function() {
                        return this.mutations.reduce(function(t, e) {
                            return t.add(e.key)
                        }, Fi())
                    }, t.prototype.isEqual = function(t) {
                        return this.batchId === t.batchId && Yn(this.mutations, t.mutations) && Yn(this.baseMutations, t.baseMutations)
                    }, t
                }(),
                xo = function() {
                    function a(t, e, n, r, i) {
                        this.batch = t, this.commitVersion = e, this.mutationResults = n, this.streamToken = r, this.docVersions = i
                    }
                    return a.from = function(t, e, n, r) {
                        vn(t.mutations.length === n.length, "Mutations sent " + t.mutations.length + " must equal results received " + n.length);
                        for (var i = xi(), o = t.mutations, s = 0; s < o.length; s++) i = i.insert(o[s].key, n[s].version);
                        return new a(t, e, n, r, i)
                    }, a
                }(),
                qo = function() {
                    function s(t) {
                        var e = this;
                        this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(function(t) {
                            e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t)
                        }, function(t) {
                            e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t)
                        })
                    }
                    return s.prototype.catch = function(t) {
                        return this.next(void 0, t)
                    }, s.prototype.next = function(r, i) {
                        var o = this;
                        return this.callbackAttached && gn("Called next() or catch() twice for PersistencePromise"), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(i, this.error) : this.wrapSuccess(r, this.result) : new s(function(e, n) {
                            o.nextCallback = function(t) {
                                o.wrapSuccess(r, t).next(e, n)
                            }, o.catchCallback = function(t) {
                                o.wrapFailure(i, t).next(e, n)
                            }
                        })
                    }, s.prototype.toPromise = function() {
                        var n = this;
                        return new Promise(function(t, e) {
                            n.next(t, e)
                        })
                    }, s.prototype.wrapUserFunction = function(t) {
                        try {
                            var e = t();
                            return e instanceof s ? e : s.resolve(e)
                        } catch (t) {
                            return s.reject(t)
                        }
                    }, s.prototype.wrapSuccess = function(t, e) {
                        return t ? this.wrapUserFunction(function() {
                            return t(e)
                        }) : s.resolve(e)
                    }, s.prototype.wrapFailure = function(t, e) {
                        return t ? this.wrapUserFunction(function() {
                            return t(e)
                        }) : s.reject(e)
                    }, s.resolve = function(n) {
                        return new s(function(t, e) {
                            t(n)
                        })
                    }, s.reject = function(n) {
                        return new s(function(t, e) {
                            e(n)
                        })
                    }, s.waitFor = function(t) {
                        return new s(function(e, n) {
                            var r = 0,
                                i = 0,
                                o = !1;
                            t.forEach(function(t) {
                                ++r, t.next(function() {
                                    ++i, o && i === r && e()
                                }, function(t) {
                                    return n(t)
                                })
                            }), o = !0, i === r && e()
                        })
                    }, s.or = function(t) {
                        for (var n = s.resolve(!1), e = function(e) {
                                n = n.next(function(t) {
                                    return t ? s.resolve(t) : e()
                                })
                            }, r = 0, i = t; r < i.length; r++) {
                            e(i[r])
                        }
                        return n
                    }, s.forEach = function(t, n) {
                        var r = this,
                            i = [];
                        return t.forEach(function(t, e) {
                            i.push(n.call(r, t, e))
                        }), this.waitFor(i)
                    }, s
                }(),
                Fo = function() {
                    function i(t, e, n, r) {
                        this.userId = t, this.serializer = e, this.indexManager = n, this.referenceDelegate = r, this.documentKeysByBatchId = {}
                    }
                    return i.forUser = function(t, e, n, r) {
                        return vn("" !== t.uid, "UserID must not be an empty string."), new i(t.isAuthenticated() ? t.uid : "", e, n, r)
                    }, i.prototype.checkEmpty = function(t) {
                        var r = !0,
                            e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                        return Qo(t).iterate({
                            index: Ss.userMutationsIndex,
                            range: e
                        }, function(t, e, n) {
                            r = !1, n.done()
                        }).next(function() {
                            return r
                        })
                    }, i.prototype.acknowledgeBatch = function(e, t, n) {
                        return this.getMutationQueueMetadata(e).next(function(t) {
                            return t.lastStreamToken = Uo(n), jo(e).put(t)
                        })
                    }, i.prototype.getLastStreamToken = function(t) {
                        return this.getMutationQueueMetadata(t).next(function(t) {
                            return t.lastStreamToken
                        })
                    }, i.prototype.setLastStreamToken = function(e, n) {
                        return this.getMutationQueueMetadata(e).next(function(t) {
                            return t.lastStreamToken = Uo(n), jo(e).put(t)
                        })
                    }, i.prototype.addMutationBatch = function(u, c, h, l) {
                        var f = this,
                            p = Ko(u),
                            d = Qo(u);
                        return d.add({}).next(function(t) {
                            vn("number" == typeof t, "Auto-generated key is not a number");
                            var e = new Lo(t, c, h, l),
                                n = f.serializer.toDbMutationBatch(f.userId, e);
                            f.documentKeysByBatchId[t] = e.keys();
                            for (var r = [], i = 0, o = l; i < o.length; i++) {
                                var s = o[i],
                                    a = Ts.key(f.userId, s.key.path, t);
                                r.push(d.put(n)), r.push(p.put(a, Ts.PLACEHOLDER)), r.push(f.indexManager.addToCollectionParentIndex(u, s.key.path.popLast()))
                            }
                            return qo.waitFor(r).next(function() {
                                return e
                            })
                        })
                    }, i.prototype.lookupMutationBatch = function(t, e) {
                        var n = this;
                        return Qo(t).get(e).next(function(t) {
                            return t ? (vn(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), n.serializer.fromDbMutationBatch(t)) : null
                        })
                    }, i.prototype.lookupMutationKeys = function(t, n) {
                        var r = this;
                        return this.documentKeysByBatchId[n] ? qo.resolve(this.documentKeysByBatchId[n]) : this.lookupMutationBatch(t, n).next(function(t) {
                            if (t) {
                                var e = t.keys();
                                return r.documentKeysByBatchId[n] = e
                            }
                            return null
                        })
                    }, i.prototype.getNextMutationBatchAfterBatchId = function(n, o) {
                        var s = this;
                        return this.getMutationQueueMetadata(n).next(function(t) {
                            var r = o + 1,
                                e = IDBKeyRange.lowerBound([s.userId, r]),
                                i = null;
                            return Qo(n).iterate({
                                index: Ss.userMutationsIndex,
                                range: e
                            }, function(t, e, n) {
                                e.userId === s.userId && (vn(e.batchId >= r, "Should have found mutation after " + r), i = s.serializer.fromDbMutationBatch(e)), n.done()
                            }).next(function() {
                                return i
                            })
                        })
                    }, i.prototype.getAllMutationBatches = function(t) {
                        var e = this,
                            n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                        return Qo(t).loadAll(Ss.userMutationsIndex, n).next(function(t) {
                            return t.map(function(t) {
                                return e.serializer.fromDbMutationBatch(t)
                            })
                        })
                    }, i.prototype.getAllMutationBatchesAffectingDocumentKey = function(a, u) {
                        var c = this,
                            t = Ts.prefixForPath(this.userId, u.path),
                            e = IDBKeyRange.lowerBound(t),
                            h = [];
                        return Ko(a).iterate({
                            range: e
                        }, function(e, t, n) {
                            var r = e[0],
                                i = e[1],
                                o = e[2],
                                s = Po(i);
                            if (r === c.userId && u.path.isEqual(s)) return Qo(a).get(o).next(function(t) {
                                if (!t) throw gn("Dangling document-mutation reference found: " + e + " which points to " + o);
                                vn(t.userId === c.userId, "Unexpected user '" + t.userId + "' for mutation batch " + o), h.push(c.serializer.fromDbMutationBatch(t))
                            });
                            n.done()
                        }).next(function() {
                            return h
                        })
                    }, i.prototype.getAllMutationBatchesAffectingDocumentKeys = function(r, t) {
                        var u = this,
                            c = new ci(Hn),
                            i = [];
                        return t.forEach(function(a) {
                            var t = Ts.prefixForPath(u.userId, a.path),
                                e = IDBKeyRange.lowerBound(t),
                                n = Ko(r).iterate({
                                    range: e
                                }, function(t, e, n) {
                                    var r = t[0],
                                        i = t[1],
                                        o = t[2],
                                        s = Po(i);
                                    r === u.userId && a.path.isEqual(s) ? c = c.add(o) : n.done()
                                });
                            i.push(n)
                        }), qo.waitFor(i).next(function() {
                            return u.lookupMutationBatches(r, c)
                        })
                    }, i.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                        var a = this;
                        vn(!e.isDocumentQuery(), "Document queries shouldn't go down this path"), vn(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                        var u = e.path,
                            c = u.length + 1,
                            n = Ts.prefixForPath(this.userId, u),
                            r = IDBKeyRange.lowerBound(n),
                            h = new ci(Hn);
                        return Ko(t).iterate({
                            range: r
                        }, function(t, e, n) {
                            var r = t[0],
                                i = t[1],
                                o = t[2],
                                s = Po(i);
                            r === a.userId && u.isPrefixOf(s) ? s.length === c && (h = h.add(o)) : n.done()
                        }).next(function() {
                            return a.lookupMutationBatches(t, h)
                        })
                    }, i.prototype.lookupMutationBatches = function(t, e) {
                        var n = this,
                            r = [],
                            i = [];
                        return e.forEach(function(e) {
                            i.push(Qo(t).get(e).next(function(t) {
                                if (null === t) throw gn("Dangling document-mutation reference found, which points to " + e);
                                vn(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), r.push(n.serializer.fromDbMutationBatch(t))
                            }))
                        }), qo.waitFor(i).next(function() {
                            return r
                        })
                    }, i.prototype.removeMutationBatch = function(e, n) {
                        var r = this;
                        return Bo(e.simpleDbTransaction, this.userId, n).next(function(t) {
                            return r.removeCachedMutationKeys(n.batchId), qo.forEach(t, function(t) {
                                return r.referenceDelegate.removeMutationReference(e, t)
                            })
                        })
                    }, i.prototype.removeCachedMutationKeys = function(t) {
                        delete this.documentKeysByBatchId[t]
                    }, i.prototype.performConsistencyCheck = function(n) {
                        var o = this;
                        return this.checkEmpty(n).next(function(t) {
                            if (!t) return qo.resolve();
                            var e = IDBKeyRange.lowerBound(Ts.prefixForUser(o.userId)),
                                i = [];
                            return Ko(n).iterate({
                                range: e
                            }, function(t, e, n) {
                                if (t[0] === o.userId) {
                                    var r = Po(t[1]);
                                    i.push(r)
                                } else n.done()
                            }).next(function() {
                                vn(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map(function(t) {
                                    return t.canonicalString()
                                }))
                            })
                        })
                    }, i.prototype.containsKey = function(t, e) {
                        return Vo(t, this.userId, e)
                    }, i.prototype.getMutationQueueMetadata = function(t) {
                        var e = this;
                        return jo(t).get(this.userId).next(function(t) {
                            return t || new Es(e.userId, -1, "")
                        })
                    }, i
                }();

            function Vo(t, o, e) {
                var n = Ts.prefixForPath(o, e.path),
                    s = n[1],
                    r = IDBKeyRange.lowerBound(n),
                    a = !1;
                return Ko(t).iterate({
                    range: r,
                    keysOnly: !0
                }, function(t, e, n) {
                    var r = t[0],
                        i = t[1];
                    t[2];
                    r === o && i === s && (a = !0), n.done()
                }).next(function() {
                    return a
                })
            }

            function Bo(t, e, n) {
                var r = t.store(Ss.store),
                    i = t.store(Ts.store),
                    o = [],
                    s = IDBKeyRange.only(n.batchId),
                    a = 0,
                    u = r.iterate({
                        range: s
                    }, function(t, e, n) {
                        return a++, n.delete()
                    });
                o.push(u.next(function() {
                    vn(1 === a, "Dangling document-mutation reference found: Missing batch " + n.batchId)
                }));
                for (var c = [], h = 0, l = n.mutations; h < l.length; h++) {
                    var f = l[h],
                        p = Ts.key(e, f.key.path, n.batchId);
                    o.push(i.delete(p)), c.push(f.key)
                }
                return qo.waitFor(o).next(function() {
                    return c
                })
            }

            function Uo(t) {
                return t instanceof Uint8Array ? (vn("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence."), t.toString()) : t
            }

            function Qo(t) {
                return Ys.getStore(t, Ss.store)
            }

            function Ko(t) {
                return Ys.getStore(t, Ts.store)
            }

            function jo(t) {
                return Ys.getStore(t, Es.store)
            }
            var Wo, Go;
            (Go = Wo || (Wo = {}))[Go.QueryCache = 0] = "QueryCache", Go[Go.SyncEngine = 1] = "SyncEngine";
            var zo = function() {
                    function t(t, e) {
                        vn((1 & (this.generatorId = t)) === t, "Generator ID " + t + " contains more than 1 reserved bits"), this.seek(void 0 !== e ? e : this.generatorId)
                    }
                    return t.prototype.next = function() {
                        var t = this.nextId;
                        return this.nextId += 2, t
                    }, t.prototype.after = function(t) {
                        return this.seek(t + 2), this.next()
                    }, t.prototype.seek = function(t) {
                        vn((1 & t) === this.generatorId, "Cannot supply target ID from different generator ID"), this.nextId = t
                    }, t.forQueryCache = function() {
                        return new t(Wo.QueryCache, 2)
                    }, t.forSyncEngine = function() {
                        return new t(Wo.SyncEngine)
                    }, t
                }(),
                Ho = "SimpleDb",
                Yo = function() {
                    function a(t) {
                        this.db = t
                    }
                    return a.openOrCreate = function(o, t, s) {
                        return vn(a.isAvailable(), "IndexedDB not supported in current environment."), dn(Ho, "Opening database:", o), new qo(function(n, r) {
                            var i = window.indexedDB.open(o, t);
                            i.onsuccess = function(t) {
                                var e = t.target.result;
                                n(new a(e))
                            }, i.onblocked = function() {
                                r(new Sn(En.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                            }, i.onerror = function(t) {
                                var e = t.target.error;
                                "VersionError" === e.name ? r(new Sn(En.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(e)
                            }, i.onupgradeneeded = function(t) {
                                dn(Ho, 'Database "' + o + '" requires upgrade from version:', t.oldVersion);
                                var e = t.target.result,
                                    n = new Jo(i.transaction);
                                s.createOrUpgrade(e, n, t.oldVersion, gs).next(function() {
                                    dn(Ho, "Database upgrade to version " + gs + " complete")
                                })
                            }
                        }).toPromise()
                    }, a.delete = function(t) {
                        return dn(Ho, "Removing database:", t), Zo(window.indexedDB.deleteDatabase(t)).toPromise()
                    }, a.isAvailable = function() {
                        if ("undefined" == typeof window || null == window.indexedDB) return !1;
                        if (void 0 === window.navigator) return "YES" === process.env.USE_MOCK_PERSISTENCE;
                        var t = window.navigator.userAgent;
                        return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/"))
                    }, a.getStore = function(t, e) {
                        return t.store(e)
                    }, a.prototype.runTransaction = function(t, e, n) {
                        var r = Jo.open(this.db, t, e),
                            i = n(r).catch(function(t) {
                                return r.abort(t), qo.reject(t)
                            }).toPromise();
                        return i.catch(function() {}), r.completionPromise.then(function() {
                            return i
                        })
                    }, a.prototype.close = function() {
                        this.db.close()
                    }, a
                }(),
                Xo = function() {
                    function t(t) {
                        this.dbCursor = t, this.shouldStop = !1, this.nextKey = null
                    }
                    return Object.defineProperty(t.prototype, "isDone", {
                        get: function() {
                            return this.shouldStop
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "skipToKey", {
                        get: function() {
                            return this.nextKey
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "cursor", {
                        set: function(t) {
                            this.dbCursor = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.done = function() {
                        this.shouldStop = !0
                    }, t.prototype.skip = function(t) {
                        this.nextKey = t
                    }, t.prototype.delete = function() {
                        return Zo(this.dbCursor.delete())
                    }, t
                }(),
                Jo = function() {
                    function r(t) {
                        var e = this;
                        this.transaction = t, this.aborted = !1, this.completionDeferred = new Io, this.transaction.oncomplete = function() {
                            e.completionDeferred.resolve()
                        }, this.transaction.onabort = function() {
                            t.error ? e.completionDeferred.reject(t.error) : e.completionDeferred.resolve()
                        }, this.transaction.onerror = function(t) {
                            e.completionDeferred.reject(t.target.error)
                        }
                    }
                    return r.open = function(t, e, n) {
                        return new r(t.transaction(n, e))
                    }, Object.defineProperty(r.prototype, "completionPromise", {
                        get: function() {
                            return this.completionDeferred.promise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), r.prototype.abort = function(t) {
                        t && this.completionDeferred.reject(t), this.aborted || (dn(Ho, "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
                    }, r.prototype.store = function(t) {
                        var e = this.transaction.objectStore(t);
                        return vn(!!e, "Object store not part of transaction: " + t), new $o(e)
                    }, r
                }(),
                $o = function() {
                    function t(t) {
                        this.store = t
                    }
                    return t.prototype.put = function(t, e) {
                        return Zo(void 0 !== e ? (dn(Ho, "PUT", this.store.name, t, e), this.store.put(e, t)) : (dn(Ho, "PUT", this.store.name, "<auto-key>", t), this.store.put(t)))
                    }, t.prototype.add = function(t) {
                        return dn(Ho, "ADD", this.store.name, t, t), Zo(this.store.add(t))
                    }, t.prototype.get = function(e) {
                        var n = this;
                        return Zo(this.store.get(e)).next(function(t) {
                            return void 0 === t && (t = null), dn(Ho, "GET", n.store.name, e, t), t
                        })
                    }, t.prototype.delete = function(t) {
                        return dn(Ho, "DELETE", this.store.name, t), Zo(this.store.delete(t))
                    }, t.prototype.count = function() {
                        return dn(Ho, "COUNT", this.store.name), Zo(this.store.count())
                    }, t.prototype.loadAll = function(t, e) {
                        var n = this.cursor(this.options(t, e)),
                            r = [];
                        return this.iterateCursor(n, function(t, e) {
                            r.push(e)
                        }).next(function() {
                            return r
                        })
                    }, t.prototype.deleteAll = function(t, e) {
                        dn(Ho, "DELETE ALL", this.store.name);
                        var n = this.options(t, e);
                        n.keysOnly = !1;
                        var r = this.cursor(n);
                        return this.iterateCursor(r, function(t, e, n) {
                            return n.delete()
                        })
                    }, t.prototype.iterate = function(t, e) {
                        var n;
                        e ? n = t : (n = {}, e = t);
                        var r = this.cursor(n);
                        return this.iterateCursor(r, e)
                    }, t.prototype.iterateSerial = function(r) {
                        var t = this.cursor({});
                        return new qo(function(n, e) {
                            t.onerror = function(t) {
                                e(t.target.error)
                            }, t.onsuccess = function(t) {
                                var e = t.target.result;
                                e ? r(e.primaryKey, e.value).next(function(t) {
                                    t ? e.continue() : n()
                                }) : n()
                            }
                        })
                    }, t.prototype.iterateCursor = function(t, s) {
                        var a = [];
                        return new qo(function(o, e) {
                            t.onerror = function(t) {
                                e(t.target.error)
                            }, t.onsuccess = function(t) {
                                var e = t.target.result;
                                if (e) {
                                    var n = new Xo(e),
                                        r = s(e.primaryKey, e.value, n);
                                    if (r instanceof qo) {
                                        var i = r.catch(function(t) {
                                            return n.done(), qo.reject(t)
                                        });
                                        a.push(i)
                                    }
                                    n.isDone ? o() : null === n.skipToKey ? e.continue() : e.continue(n.skipToKey)
                                } else o()
                            }
                        }).next(function() {
                            return qo.waitFor(a)
                        })
                    }, t.prototype.options = function(t, e) {
                        var n = void 0;
                        return void 0 !== t && ("string" == typeof t ? n = t : (vn(void 0 === e, "3rd argument must not be defined if 2nd is a range."), e = t)), {
                            index: n,
                            range: e
                        }
                    }, t.prototype.cursor = function(t) {
                        var e = "next";
                        if (t.reverse && (e = "prev"), t.index) {
                            var n = this.store.index(t.index);
                            return t.keysOnly ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                        }
                        return this.store.openCursor(t.range, e)
                    }, t
                }();

            function Zo(t) {
                return new qo(function(n, e) {
                    t.onsuccess = function(t) {
                        var e = t.target.result;
                        n(e)
                    }, t.onerror = function(t) {
                        e(t.target.error)
                    }
                })
            }
            var ts = function() {
                function t(t, e) {
                    this.referenceDelegate = t, this.serializer = e, this.targetIdGenerator = zo.forQueryCache()
                }
                return t.prototype.allocateTargetId = function(e) {
                    var n = this;
                    return this.retrieveMetadata(e).next(function(t) {
                        return t.highestTargetId = n.targetIdGenerator.after(t.highestTargetId), n.saveMetadata(e, t).next(function() {
                            return t.highestTargetId
                        })
                    })
                }, t.prototype.getLastRemoteSnapshotVersion = function(t) {
                    return this.retrieveMetadata(t).next(function(t) {
                        return oi.fromTimestamp(new sr(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
                    })
                }, t.prototype.getHighestSequenceNumber = function(t) {
                    return rs(t.simpleDbTransaction)
                }, t.prototype.setTargetsMetadata = function(e, n, r) {
                    var i = this;
                    return this.retrieveMetadata(e).next(function(t) {
                        return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.toTimestamp()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.saveMetadata(e, t)
                    })
                }, t.prototype.addQueryData = function(e, n) {
                    var r = this;
                    return this.saveQueryData(e, n).next(function() {
                        return r.retrieveMetadata(e).next(function(t) {
                            return t.targetCount += 1, r.updateMetadataFromQueryData(n, t), r.saveMetadata(e, t)
                        })
                    })
                }, t.prototype.updateQueryData = function(t, e) {
                    return this.saveQueryData(t, e)
                }, t.prototype.removeQueryData = function(e, t) {
                    var n = this;
                    return this.removeMatchingKeysForTargetId(e, t.targetId).next(function() {
                        return es(e).delete(t.targetId)
                    }).next(function() {
                        return n.retrieveMetadata(e)
                    }).next(function(t) {
                        return vn(0 < t.targetCount, "Removing from an empty query cache"), t.targetCount -= 1, n.saveMetadata(e, t)
                    })
                }, t.prototype.removeTargets = function(r, i, o) {
                    var s = this,
                        a = 0,
                        u = [];
                    return es(r).iterate(function(t, e) {
                        var n = s.serializer.fromDbTarget(e);
                        n.sequenceNumber <= i && void 0 === o[n.targetId] && (a++, u.push(s.removeQueryData(r, n)))
                    }).next(function() {
                        return qo.waitFor(u)
                    }).next(function() {
                        return a
                    })
                }, t.prototype.forEachTarget = function(t, r) {
                    var i = this;
                    return es(t).iterate(function(t, e) {
                        var n = i.serializer.fromDbTarget(e);
                        r(n)
                    })
                }, t.prototype.retrieveMetadata = function(t) {
                    return ns(t.simpleDbTransaction)
                }, t.prototype.saveMetadata = function(t, e) {
                    return (n = t, Ys.getStore(n, Rs.store)).put(Rs.key, e);
                    var n
                }, t.prototype.saveQueryData = function(t, e) {
                    return es(t).put(this.serializer.toDbTarget(e))
                }, t.prototype.updateMetadataFromQueryData = function(t, e) {
                    var n = !1;
                    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
                }, t.prototype.getQueryCount = function(t) {
                    return this.retrieveMetadata(t).next(function(t) {
                        return t.targetCount
                    })
                }, t.prototype.getQueryData = function(t, i) {
                    var o = this,
                        e = i.canonicalId(),
                        n = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                        s = null;
                    return es(t).iterate({
                        range: n,
                        index: As.queryTargetsIndexName
                    }, function(t, e, n) {
                        var r = o.serializer.fromDbTarget(e);
                        i.isEqual(r.query) && (s = r, n.done())
                    }).next(function() {
                        return s
                    })
                }, t.prototype.addMatchingKeys = function(n, t, r) {
                    var i = this,
                        o = [],
                        s = is(n);
                    return t.forEach(function(t) {
                        var e = Mo(t.path);
                        o.push(s.put(new ks(r, e))), o.push(i.referenceDelegate.addReference(n, t))
                    }), qo.waitFor(o)
                }, t.prototype.removeMatchingKeys = function(n, t, r) {
                    var i = this,
                        o = is(n);
                    return qo.forEach(t, function(t) {
                        var e = Mo(t.path);
                        return qo.waitFor([o.delete([r, e]), i.referenceDelegate.removeReference(n, t)])
                    })
                }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
                    var n = is(t),
                        r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                    return n.delete(r)
                }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
                    var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                        r = is(t),
                        o = Fi();
                    return r.iterate({
                        range: n,
                        keysOnly: !0
                    }, function(t, e, n) {
                        var r = Po(t[1]),
                            i = new mr(r);
                        o = o.add(i)
                    }).next(function() {
                        return o
                    })
                }, t.prototype.containsKey = function(t, e) {
                    var n = Mo(e.path),
                        r = IDBKeyRange.bound([n], [Xn(n)], !1, !0),
                        i = 0;
                    return is(t).iterate({
                        index: ks.documentTargetsIndex,
                        keysOnly: !0,
                        range: r
                    }, function(t, e, n) {
                        var r = t[0];
                        t[1];
                        0 !== r && (i++, n.done())
                    }).next(function() {
                        return 0 < i
                    })
                }, t.prototype.getQueryDataForTarget = function(t, e) {
                    var n = this;
                    return es(t).get(e).next(function(t) {
                        return t ? n.serializer.fromDbTarget(t) : null
                    })
                }, t
            }();

            function es(t) {
                return Ys.getStore(t, As.store)
            }

            function ns(t) {
                return Yo.getStore(t, Rs.store).get(Rs.key).next(function(t) {
                    return vn(null !== t, "Missing metadata row."), t
                })
            }

            function rs(t) {
                return ns(t).next(function(t) {
                    return t.highestListenSequenceNumber
                })
            }

            function is(t) {
                return Ys.getStore(t, ks.store)
            }
            var os = function() {
                    function t(t) {
                        this.mapKeyFn = t, this.inner = {}
                    }
                    return t.prototype.get = function(t) {
                        var e = this.mapKeyFn(t),
                            n = this.inner[e];
                        if (void 0 !== n)
                            for (var r = 0, i = n; r < i.length; r++) {
                                var o = i[r],
                                    s = o[0],
                                    a = o[1];
                                if (s.isEqual(t)) return a
                            }
                    }, t.prototype.has = function(t) {
                        return void 0 !== this.get(t)
                    }, t.prototype.set = function(t, e) {
                        var n = this.mapKeyFn(t),
                            r = this.inner[n];
                        if (void 0 !== r) {
                            for (var i = 0; i < r.length; i++)
                                if (r[i][0].isEqual(t)) return void(r[i] = [t, e]);
                            r.push([t, e])
                        } else this.inner[n] = [
                            [t, e]
                        ]
                    }, t.prototype.delete = function(t) {
                        var e = this.mapKeyFn(t),
                            n = this.inner[e];
                        if (void 0 === n) return !1;
                        for (var r = 0; r < n.length; r++)
                            if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                        return !1
                    }, t.prototype.forEach = function(a) {
                        Nn(this.inner, function(t, e) {
                            for (var n = 0, r = e; n < r.length; n++) {
                                var i = r[n],
                                    o = i[0],
                                    s = i[1];
                                a(o, s)
                            }
                        })
                    }, t.prototype.isEmpty = function() {
                        return An(this.inner)
                    }, t
                }(),
                ss = function() {
                    function t() {
                        this.changes = Mi(), this.documentSizes = new os(function(t) {
                            return t.toString()
                        })
                    }
                    return t.prototype.addEntry = function(t) {
                        var e = this.assertChanges();
                        this.changes = e.insert(t.key, t)
                    }, t.prototype.getEntry = function(t, e) {
                        var n = this,
                            r = this.assertChanges().get(e);
                        return r ? qo.resolve(r) : this.getFromCache(t, e).next(function(t) {
                            return null === t ? (n.documentSizes.set(e, 0), null) : (n.documentSizes.set(e, t.size), t.maybeDocument)
                        })
                    }, t.prototype.getEntries = function(t, e) {
                        var n = this;
                        return this.getAllFromCache(t, e).next(function(t) {
                            var e = t.maybeDocuments;
                            return t.sizeMap.forEach(function(t, e) {
                                n.documentSizes.set(t, e)
                            }), e
                        })
                    }, t.prototype.apply = function(t) {
                        var e = this.applyChanges(t);
                        return this.changes = null, e
                    }, t.prototype.assertChanges = function() {
                        return vn(null !== this.changes, "Changes have already been applied."), this.changes
                    }, t
                }(),
                as = "The remote document changelog no longer contains all changes for all local query views. It may be necessary to rebuild these views.",
                us = function() {
                    function t(t, e, n) {
                        this.serializer = t, this.indexManager = e, this.keepDocumentChangeLog = n, this._lastProcessedDocumentChangeId = 0
                    }
                    return Object.defineProperty(t.prototype, "lastProcessedDocumentChangeId", {
                        get: function() {
                            return this._lastProcessedDocumentChangeId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.start = function(t) {
                        var e = Yo.getStore(t, Os.store);
                        return this.synchronizeLastDocumentChangeId(e)
                    }, t.prototype.addEntries = function(t, e, n) {
                        var r = [];
                        if (0 < e.length) {
                            for (var i = ls(t), o = Fi(), s = 0, a = e; s < a.length; s++) {
                                var u = a[s],
                                    c = u.key,
                                    h = u.doc;
                                r.push(i.put(ps(c), h)), o = o.add(c), r.push(this.indexManager.addToCollectionParentIndex(t, c.path.popLast()))
                            }
                            this.keepDocumentChangeLog && r.push(fs(t).put({
                                changes: this.serializer.toDbResourcePaths(o)
                            })), r.push(this.updateSize(t, n))
                        }
                        return qo.waitFor(r)
                    }, t.prototype.removeEntry = function(t, e) {
                        var n = ls(t),
                            r = ps(e);
                        return n.get(r).next(function(t) {
                            return t ? n.delete(r).next(function() {
                                return ds(t)
                            }) : qo.resolve(0)
                        })
                    }, t.prototype.getEntry = function(t, e) {
                        var n = this;
                        return ls(t).get(ps(e)).next(function(t) {
                            return t ? n.serializer.fromDbRemoteDocument(t) : null
                        })
                    }, t.prototype.getSizedEntry = function(t, e) {
                        var n = this;
                        return ls(t).get(ps(e)).next(function(t) {
                            return t ? {
                                maybeDocument: n.serializer.fromDbRemoteDocument(t),
                                size: ds(t)
                            } : null
                        })
                    }, t.prototype.getEntries = function(t, e) {
                        var n = this,
                            r = _i();
                        return this.forEachDbEntry(t, e, function(t, e) {
                            r = e ? r.insert(t, n.serializer.fromDbRemoteDocument(e)) : r.insert(t, null)
                        }).next(function() {
                            return r
                        })
                    }, t.prototype.getSizedEntries = function(t, e) {
                        var n = this,
                            r = _i(),
                            i = new wr(mr.comparator);
                        return this.forEachDbEntry(t, e, function(t, e) {
                            i = e ? (r = r.insert(t, n.serializer.fromDbRemoteDocument(e)), i.insert(t, ds(e))) : (r = r.insert(t, null), i.insert(t, 0))
                        }).next(function() {
                            return {
                                maybeDocuments: r,
                                sizeMap: i
                            }
                        })
                    }, t.prototype.forEachDbEntry = function(t, e, i) {
                        if (e.isEmpty()) return qo.resolve();
                        var n = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
                            o = e.getIterator(),
                            s = o.getNext();
                        return ls(t).iterate({
                            range: n
                        }, function(t, e, n) {
                            for (var r = mr.fromSegments(t); s && mr.comparator(s, r) < 0;) i(s, null), s = o.getNext();
                            s && s.isEqual(r) && (i(s, e), s = o.hasNext() ? o.getNext() : null), s ? n.skip(s.path.toArray()) : n.done()
                        }).next(function() {
                            for (; s;) i(s, null), s = o.hasNext() ? o.getNext() : null
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function(t, i) {
                        var o = this;
                        vn(!i.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                        var s = Pi(),
                            a = i.path.length + 1,
                            e = i.path.toArray(),
                            n = IDBKeyRange.lowerBound(e);
                        return ls(t).iterate({
                            range: n
                        }, function(t, e, n) {
                            if (t.length === a) {
                                var r = o.serializer.fromDbRemoteDocument(e);
                                i.path.isPrefixOf(r.key.path) ? r instanceof gr && i.matches(r) && (s = s.insert(r.key, r)) : n.done()
                            }
                        }).next(function() {
                            return s
                        })
                    }, t.prototype.getNewDocumentChanges = function(e) {
                        var r = this;
                        vn(this.keepDocumentChangeLog, "Can only call getNewDocumentChanges() when document change log is enabled");
                        var n = Fi(),
                            i = Mi(),
                            t = IDBKeyRange.lowerBound(this._lastProcessedDocumentChangeId + 1),
                            o = !0,
                            s = fs(e);
                        return s.iterate({
                            range: t
                        }, function(t, e) {
                            if (o && (o = !1, r._lastProcessedDocumentChangeId + 1 !== e.id)) return r.synchronizeLastDocumentChangeId(s).next(function() {
                                return qo.reject(new Sn(En.DATA_LOSS, as))
                            });
                            n = n.unionWith(r.serializer.fromDbResourcePaths(e.changes)), r._lastProcessedDocumentChangeId = e.id
                        }).next(function() {
                            var t = [];
                            return n.forEach(function(n) {
                                t.push(r.getEntry(e, n).next(function(t) {
                                    var e = t || new vr(n, oi.forDeletedDoc());
                                    i = i.insert(n, e)
                                }))
                            }), qo.waitFor(t)
                        }).next(function() {
                            return i
                        })
                    }, t.prototype.removeDocumentChangesThroughChangeId = function(t, e) {
                        var n = IDBKeyRange.upperBound(e);
                        return fs(t).delete(n)
                    }, t.prototype.synchronizeLastDocumentChangeId = function(t) {
                        var r = this;
                        return this._lastProcessedDocumentChangeId = 0, t.iterate({
                            keysOnly: !0,
                            reverse: !0
                        }, function(t, e, n) {
                            r._lastProcessedDocumentChangeId = t, n.done()
                        })
                    }, t.prototype.newChangeBuffer = function() {
                        return new hs(this)
                    }, t.prototype.getSize = function(t) {
                        return this.getMetadata(t).next(function(t) {
                            return t.byteSize
                        })
                    }, t.prototype.getMetadata = function(t) {
                        return cs(t).get(Ns.key).next(function(t) {
                            return vn(!!t, "Missing document cache metadata"), t
                        })
                    }, t.prototype.setMetadata = function(t, e) {
                        return cs(t).put(Ns.key, e)
                    }, t.prototype.updateSize = function(e, n) {
                        var r = this;
                        return this.getMetadata(e).next(function(t) {
                            return t.byteSize += n, r.setMetadata(e, t)
                        })
                    }, t
                }();

            function cs(t) {
                return Ys.getStore(t, Ns.store)
            }
            var hs = function(n) {
                function t(t) {
                    var e = n.call(this) || this;
                    return e.documentCache = t, e
                }
                return a(t, n), t.prototype.applyChanges = function(t) {
                    var o = this,
                        e = this.assertChanges(),
                        s = 0,
                        a = [];
                    return e.forEach(function(t, e) {
                        var n = o.documentCache.serializer.toDbRemoteDocument(e),
                            r = o.documentSizes.get(t);
                        vn(void 0 !== r, "Attempting to change document " + t.toString() + " without having read it first");
                        var i = ds(n);
                        s += i - r, a.push({
                            key: t,
                            doc: n
                        })
                    }), this.documentCache.addEntries(t, a, s)
                }, t.prototype.getFromCache = function(t, e) {
                    return this.documentCache.getSizedEntry(t, e)
                }, t.prototype.getAllFromCache = function(t, e) {
                    return this.documentCache.getSizedEntries(t, e)
                }, t
            }(ss);

            function ls(t) {
                return Ys.getStore(t, Ds.store)
            }

            function fs(t) {
                return Ys.getStore(t, Os.store)
            }

            function ps(t) {
                return t.path.toArray()
            }

            function ds(t) {
                var e;
                if (t.document) e = t.document;
                else if (t.unknownDocument) e = t.unknownDocument;
                else {
                    if (!t.noDocument) throw gn("Unknown remote document type");
                    e = t.noDocument
                }
                return JSON.stringify(e).length
            }
            var ms = function() {
                    function t() {
                        this.collectionParentIndex = new ys
                    }
                    return t.prototype.addToCollectionParentIndex = function(t, e) {
                        return this.collectionParentIndex.add(e), qo.resolve()
                    }, t.prototype.getCollectionParents = function(t, e) {
                        return qo.resolve(this.collectionParentIndex.getEntries(e))
                    }, t
                }(),
                ys = function() {
                    function t() {
                        this.index = {}
                    }
                    return t.prototype.add = function(t) {
                        vn(t.length % 2 == 1, "Expected a collection path.");
                        var e = t.lastSegment(),
                            n = t.popLast(),
                            r = this.index[e] || new ci(fr.comparator),
                            i = !r.has(n);
                        return this.index[e] = r.add(n), i
                    }, t.prototype.getEntries = function(t) {
                        return (this.index[t] || new ci(fr.comparator)).toArray()
                    }, t
                }(),
                gs = 8,
                vs = function() {
                    function t(t) {
                        this.serializer = t
                    }
                    return t.prototype.createOrUpgrade = function(t, n, e, r) {
                        var i, o = this;
                        vn(e < r && 0 <= e && r <= gs, "Unexpected schema upgrade from v" + e + " to v{toVersion}."), e < 1 && 1 <= r && (t.createObjectStore(ws.store), (i = t).createObjectStore(Es.store, {
                            keyPath: Es.keyPath
                        }), i.createObjectStore(Ss.store, {
                            keyPath: Ss.keyPath,
                            autoIncrement: !0
                        }).createIndex(Ss.userMutationsIndex, Ss.userMutationsKeyPath, {
                            unique: !0
                        }), i.createObjectStore(Ts.store), _s(t), t.createObjectStore(Ds.store));
                        var s, a = qo.resolve();
                        return e < 3 && 3 <= r && (0 !== e && ((s = t).deleteObjectStore(ks.store), s.deleteObjectStore(As.store), s.deleteObjectStore(Rs.store), _s(t)), a = a.next(function() {
                            return t = n.store(Rs.store), e = new Rs(0, 0, oi.MIN.toTimestamp(), 0), t.put(Rs.key, e);
                            var t, e
                        })), e < 4 && 4 <= r && (0 !== e && (a = a.next(function() {
                            return i = t, (o = n).store(Ss.store).loadAll().next(function(t) {
                                i.deleteObjectStore(Ss.store);
                                var e = i.createObjectStore(Ss.store, {
                                    keyPath: Ss.keyPath,
                                    autoIncrement: !0
                                });
                                e.createIndex(Ss.userMutationsIndex, Ss.userMutationsKeyPath, {
                                    unique: !0
                                });
                                var n = o.store(Ss.store),
                                    r = t.map(function(t) {
                                        return n.put(t)
                                    });
                                return qo.waitFor(r)
                            });
                            var i, o
                        })), a = a.next(function() {
                            t.createObjectStore(Ps.store, {
                                keyPath: Ps.keyPath
                            }), t.createObjectStore(Os.store, {
                                keyPath: "id",
                                autoIncrement: !0
                            })
                        })), e < 5 && 5 <= r && (a = a.next(function() {
                            return o.removeAcknowledgedMutations(n)
                        })), e < 6 && 6 <= r && (a = a.next(function() {
                            return t.createObjectStore(Ns.store), o.addDocumentGlobal(n)
                        })), e < 7 && 7 <= r && (a = a.next(function() {
                            return o.ensureSequenceNumbers(n)
                        })), e < 8 && 8 <= r && (a = a.next(function() {
                            return o.createCollectionParentIndex(t, n)
                        })), a
                    }, t.prototype.addDocumentGlobal = function(e) {
                        var n = 0;
                        return e.store(Ds.store).iterate(function(t, e) {
                            n += ds(e)
                        }).next(function() {
                            var t = new Ns(n);
                            return e.store(Ns.store).put(Ns.key, t)
                        })
                    }, t.prototype.removeAcknowledgedMutations = function(r) {
                        var i = this,
                            t = r.store(Es.store),
                            e = r.store(Ss.store);
                        return t.loadAll().next(function(t) {
                            return qo.forEach(t, function(n) {
                                var t = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                                return e.loadAll(Ss.userMutationsIndex, t).next(function(t) {
                                    return qo.forEach(t, function(t) {
                                        vn(t.userId === n.userId, "Cannot process batch " + t.batchId + " from unexpected user");
                                        var e = i.serializer.fromDbMutationBatch(t);
                                        return Bo(r, n.userId, e).next(function() {})
                                    })
                                })
                            })
                        })
                    }, t.prototype.ensureSequenceNumbers = function(t) {
                        var s = t.store(ks.store),
                            e = t.store(Ds.store);
                        return rs(t).next(function(i) {
                            var o = [];
                            return e.iterate(function(t, e) {
                                var n = new fr(t),
                                    r = [0, Mo(n)];
                                o.push(s.get(r).next(function(t) {
                                    return t ? qo.resolve() : (e = n, s.put(new ks(0, Mo(e), i)));
                                    var e
                                }))
                            }).next(function() {
                                return qo.waitFor(o)
                            })
                        })
                    }, t.prototype.createCollectionParentIndex = function(t, e) {
                        t.createObjectStore(Ms.store, {
                            keyPath: Ms.keyPath
                        });
                        var r = e.store(Ms.store),
                            i = new ys,
                            o = function(t) {
                                if (i.add(t)) {
                                    var e = t.lastSegment(),
                                        n = t.popLast();
                                    return r.put({
                                        collectionId: e,
                                        parent: Mo(n)
                                    })
                                }
                            };
                        return e.store(Ds.store).iterate({
                            keysOnly: !0
                        }, function(t, e) {
                            var n = new fr(t);
                            return o(n.popLast())
                        }).next(function() {
                            return e.store(Ts.store).iterate({
                                keysOnly: !0
                            }, function(t, e) {
                                t[0];
                                var n = t[1],
                                    r = (t[2], Po(n));
                                return o(r.popLast())
                            })
                        })
                    }, t
                }();
            var bs = function(t, e) {
                    this.seconds = t, this.nanoseconds = e
                },
                ws = function() {
                    function t(t, e, n) {
                        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
                    }
                    return t.store = "owner", t.key = "owner", t
                }();
            var Es = function() {
                    function t(t, e, n) {
                        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
                    }
                    return t.store = "mutationQueues", t.keyPath = "userId", t
                }(),
                Ss = function() {
                    function t(t, e, n, r, i) {
                        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i
                    }
                    return t.store = "mutations", t.keyPath = "batchId", t.userMutationsIndex = "userMutationsIndex", t.userMutationsKeyPath = ["userId", "batchId"], t
                }();
            var Ts = function() {
                function t() {}
                return t.prefixForUser = function(t) {
                    return [t]
                }, t.prefixForPath = function(t, e) {
                    return [t, Mo(e)]
                }, t.key = function(t, e, n) {
                    return [t, Mo(e), n]
                }, t.store = "documentMutations", t.PLACEHOLDER = new t, t
            }();
            var Is = function(t, e) {
                    this.path = t, this.readTime = e
                },
                Cs = function(t, e) {
                    this.path = t, this.version = e
                },
                Ds = function() {
                    function t(t, e, n, r) {
                        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r
                    }
                    return t.store = "remoteDocuments", t
                }(),
                Ns = function() {
                    function t(t) {
                        this.byteSize = t
                    }
                    return t.store = "remoteDocumentGlobal", t.key = "remoteDocumentGlobalKey", t
                }();
            var As = function() {
                    function t(t, e, n, r, i, o) {
                        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.query = o
                    }
                    return t.store = "targets", t.keyPath = "targetId", t.queryTargetsIndexName = "queryTargetsIndex", t.queryTargetsKeyPath = ["canonicalId", "targetId"], t
                }(),
                ks = function() {
                    function t(t, e, n) {
                        this.targetId = t, this.path = e, vn(0 === t == (void 0 !== (this.sequenceNumber = n)), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number")
                    }
                    return t.store = "targetDocuments", t.keyPath = ["targetId", "path"], t.documentTargetsIndex = "documentTargetsIndex", t.documentTargetsKeyPath = ["path", "targetId"], t
                }(),
                Rs = function() {
                    function t(t, e, n, r) {
                        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
                    }
                    return t.key = "targetGlobalKey", t.store = "targetGlobal", t
                }(),
                Ms = function() {
                    function t(t, e) {
                        this.collectionId = t, this.parent = e
                    }
                    return t.store = "collectionParents", t.keyPath = ["collectionId", "parent"], t
                }();

            function _s(t) {
                t.createObjectStore(ks.store, {
                    keyPath: ks.keyPath
                }).createIndex(ks.documentTargetsIndex, ks.documentTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(As.store, {
                    keyPath: As.keyPath
                }).createIndex(As.queryTargetsIndexName, As.queryTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(Rs.store)
            }
            var Os = function() {
                function t(t) {
                    this.changes = t
                }
                return t.store = "remoteDocumentChanges", t.keyPath = "id", t
            }();
            var Ps = function() {
                function t(t, e, n, r, i) {
                    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r, this.lastProcessedDocumentChangeId = i
                }
                return t.store = "clientMetadata", t.keyPath = "clientId", t
            }();
            var Ls = [Es.store, Ss.store, Ts.store, Ds.store, As.store, ws.store, Rs.store, ks.store].concat([Ps.store, Os.store]).concat([Ns.store]).concat([Ms.store]),
                xs = function() {
                    function t() {
                        this.collectionParentsCache = new ys
                    }
                    return t.prototype.addToCollectionParentIndex = function(t, e) {
                        if (vn(e.length % 2 == 1, "Expected a collection path."), this.collectionParentsCache.add(e)) {
                            vn(1 <= e.length, "Invalid collection path.");
                            var n = e.lastSegment(),
                                r = e.popLast();
                            return qs(t).put({
                                collectionId: n,
                                parent: Mo(r)
                            })
                        }
                        return qo.resolve()
                    }, t.prototype.getCollectionParents = function(t, i) {
                        var o = [],
                            e = IDBKeyRange.bound([i, ""], [Xn(i), ""], !1, !0);
                        return qs(t).loadAll(e).next(function(t) {
                            for (var e = 0, n = t; e < n.length; e++) {
                                var r = n[e];
                                if (r.collectionId !== i) break;
                                o.push(Po(r.parent))
                            }
                            return o
                        })
                    }, t
                }();

            function qs(t) {
                return Ys.getStore(t, Ms.store)
            }
            var Fs = function() {
                function t(t) {
                    this.remoteSerializer = t
                }
                return t.prototype.fromDbRemoteDocument = function(t) {
                    if (t.document) return this.remoteSerializer.fromDocument(t.document, !!t.hasCommittedMutations);
                    if (t.noDocument) {
                        var e = mr.fromSegments(t.noDocument.path),
                            n = this.fromDbTimestamp(t.noDocument.readTime);
                        return new vr(e, n, {
                            hasCommittedMutations: !!t.hasCommittedMutations
                        })
                    }
                    if (t.unknownDocument) {
                        e = mr.fromSegments(t.unknownDocument.path), n = this.fromDbTimestamp(t.unknownDocument.version);
                        return new br(e, n)
                    }
                    return gn("Unexpected DbRemoteDocument")
                }, t.prototype.toDbRemoteDocument = function(t) {
                    if (t instanceof gr) {
                        var e = t.proto ? t.proto : this.remoteSerializer.toDocument(t),
                            n = t.hasCommittedMutations;
                        return new Ds(null, null, e, n)
                    }
                    if (t instanceof vr) {
                        var r = t.key.path.toArray(),
                            i = this.toDbTimestamp(t.version);
                        n = t.hasCommittedMutations;
                        return new Ds(null, new Is(r, i), null, n)
                    }
                    if (t instanceof br) {
                        r = t.key.path.toArray(), i = this.toDbTimestamp(t.version);
                        return new Ds(new Cs(r, i), null, null, !0)
                    }
                    return gn("Unexpected MaybeDocumment")
                }, t.prototype.toDbTimestamp = function(t) {
                    var e = t.toTimestamp();
                    return new bs(e.seconds, e.nanoseconds)
                }, t.prototype.fromDbTimestamp = function(t) {
                    var e = new sr(t.seconds, t.nanoseconds);
                    return oi.fromTimestamp(e)
                }, t.prototype.toDbMutationBatch = function(t, e) {
                    var n = this,
                        r = e.baseMutations.map(function(t) {
                            return n.remoteSerializer.toMutation(t)
                        }),
                        i = e.mutations.map(function(t) {
                            return n.remoteSerializer.toMutation(t)
                        });
                    return new Ss(t, e.batchId, e.localWriteTime.toMillis(), r, i)
                }, t.prototype.fromDbMutationBatch = function(t) {
                    var e = this,
                        n = (t.baseMutations || []).map(function(t) {
                            return e.remoteSerializer.fromMutation(t)
                        }),
                        r = t.mutations.map(function(t) {
                            return e.remoteSerializer.fromMutation(t)
                        }),
                        i = sr.fromMillis(t.localWriteTimeMs);
                    return new Lo(t.batchId, i, n, r)
                }, t.prototype.toDbResourcePaths = function(t) {
                    var e = [];
                    return t.forEach(function(t) {
                        e.push(Mo(t.path))
                    }), e
                }, t.prototype.fromDbResourcePaths = function(t) {
                    for (var e = Fi(), n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        e = e.add(new mr(Po(i)))
                    }
                    return e
                }, t.prototype.fromDbTarget = function(t) {
                    var e, n = this.fromDbTimestamp(t.readTime);
                    return e = void 0 !== t.query.documents ? this.remoteSerializer.fromDocumentsTarget(t.query) : this.remoteSerializer.fromQueryTarget(t.query), new ui(e, t.targetId, Gr.Listen, t.lastListenSequenceNumber, n, t.resumeToken)
                }, t.prototype.toDbTarget = function(t) {
                    vn(Gr.Listen === t.purpose, "Only queries with purpose " + Gr.Listen + " may be stored, got " + t.purpose);
                    var e, n, r = this.toDbTimestamp(t.snapshotVersion);
                    return e = t.query.isDocumentQuery() ? this.remoteSerializer.toDocumentsTarget(t.query) : this.remoteSerializer.toQueryTarget(t.query), n = t.resumeToken instanceof Uint8Array ? (vn("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence ."), t.resumeToken.toString()) : t.resumeToken, new As(t.targetId, t.query.canonicalId(), r, n, t.sequenceNumber, e)
                }, t
            }();

            function Vs(t, e) {
                var n = t[0],
                    r = t[1],
                    i = e[0],
                    o = e[1],
                    s = Hn(n, i);
                return 0 === s ? Hn(r, o) : s
            }
            var Bs = function() {
                    function t(t) {
                        this.maxElements = t, this.buffer = new ci(Vs), this.previousIndex = 0
                    }
                    return t.prototype.nextIndex = function() {
                        return ++this.previousIndex
                    }, t.prototype.addElement = function(t) {
                        var e = [t, this.nextIndex()];
                        if (this.buffer.size < this.maxElements) this.buffer = this.buffer.add(e);
                        else {
                            var n = this.buffer.last();
                            Vs(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                        }
                    }, Object.defineProperty(t.prototype, "maxValue", {
                        get: function() {
                            return this.buffer.last()[0]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                Us = {
                    didRun: !1,
                    sequenceNumbersCollected: 0,
                    targetsRemoved: 0,
                    documentsRemoved: 0
                },
                Qs = function() {
                    function e(t, e, n) {
                        this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n
                    }
                    return e.withCacheSize = function(t) {
                        return new e(t, e.DEFAULT_COLLECTION_PERCENTILE, e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
                    }, e.COLLECTION_DISABLED = -1, e.MINIMUM_CACHE_SIZE_BYTES = 1048576, e.DEFAULT = new e(e.DEFAULT_CACHE_SIZE_BYTES = 41943040, e.DEFAULT_COLLECTION_PERCENTILE = 10, e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3), e.DISABLED = new e(e.COLLECTION_DISABLED, 0, 0), e
                }(),
                Ks = function() {
                    function t(t, e, n) {
                        this.garbageCollector = t, this.asyncQueue = e, this.localStore = n, this.gcTask = null
                    }
                    return t.prototype.start = function() {
                        vn(null === this.gcTask, "Cannot start an already started LruScheduler"), this.garbageCollector.params.cacheSizeCollectionThreshold !== Qs.COLLECTION_DISABLED && this.scheduleGC()
                    }, t.prototype.stop = function() {
                        this.gcTask && (this.gcTask.cancel(), this.gcTask = null)
                    }, Object.defineProperty(t.prototype, "started", {
                        get: function() {
                            return null !== this.gcTask
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.scheduleGC = function() {
                        var t = this;
                        vn(null === this.gcTask, "Cannot schedule GC while a task is pending");
                        var e = this.hasRun ? 3e5 : 6e4;
                        dn("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.gcTask = this.asyncQueue.enqueueAfterDelay(Eo.LruGarbageCollection, e, function() {
                            return t.gcTask = null, t.hasRun = !0, t.localStore.collectGarbage(t.garbageCollector).then(function() {
                                return t.scheduleGC()
                            }).catch(Xs)
                        })
                    }, t
                }(),
                js = function() {
                    function t(t, e) {
                        this.delegate = t, this.params = e
                    }
                    return t.prototype.calculateTargetCount = function(t, e) {
                        return this.delegate.getSequenceNumberCount(t).next(function(t) {
                            return Math.floor(e / 100 * t)
                        })
                    }, t.prototype.nthSequenceNumber = function(t, e) {
                        var n = this;
                        if (0 === e) return qo.resolve(To.INVALID);
                        var r = new Bs(e);
                        return this.delegate.forEachTarget(t, function(t) {
                            return r.addElement(t.sequenceNumber)
                        }).next(function() {
                            return n.delegate.forEachOrphanedDocumentSequenceNumber(t, function(t) {
                                return r.addElement(t)
                            })
                        }).next(function() {
                            return r.maxValue
                        })
                    }, t.prototype.removeTargets = function(t, e, n) {
                        return this.delegate.removeTargets(t, e, n)
                    }, t.prototype.removeOrphanedDocuments = function(t, e) {
                        return this.delegate.removeOrphanedDocuments(t, e)
                    }, t.prototype.collect = function(e, n) {
                        var r = this;
                        return this.params.cacheSizeCollectionThreshold === Qs.COLLECTION_DISABLED ? (dn("LruGarbageCollector", "Garbage collection skipped; disabled"), qo.resolve(Us)) : this.getCacheSize(e).next(function(t) {
                            return t < r.params.cacheSizeCollectionThreshold ? (dn("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.params.cacheSizeCollectionThreshold), Us) : r.runGarbageCollection(e, n)
                        })
                    }, t.prototype.getCacheSize = function(t) {
                        return this.delegate.getCacheSize(t)
                    }, t.prototype.runGarbageCollection = function(e, n) {
                        var r, i, o, s, a, u, c, h, l = this;
                        return s = Date.now(), this.calculateTargetCount(e, this.params.percentileToCollect).next(function(t) {
                            return i = t > l.params.maximumSequenceNumbersToCollect ? (dn("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + l.params.maximumSequenceNumbersToCollect + " from " + t), l.params.maximumSequenceNumbersToCollect) : t, a = Date.now(), l.nthSequenceNumber(e, i)
                        }).next(function(t) {
                            return r = t, u = Date.now(), l.removeTargets(e, r, n)
                        }).next(function(t) {
                            return o = t, c = Date.now(), l.removeOrphanedDocuments(e, r)
                        }).next(function(t) {
                            (h = Date.now(), fn() <= an.DEBUG) && dn("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (a - s) + "ms\n\tDetermined least recently used " + i + " in " + (u - a) + "ms\n\tRemoved " + o + " targets in " + (c - u) + "ms\n\tRemoved " + t + " documents in " + (h - c) + "ms\nTotal Duration: " + (h - s) + "ms");
                            return qo.resolve({
                                didRun: !0,
                                sequenceNumbersCollected: i,
                                targetsRemoved: o,
                                documentsRemoved: t
                            })
                        })
                    }, t
                }(),
                Ws = "IndexedDbPersistence",
                Gs = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                zs = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `experimentalTabSynchronization:true` in all tabs.",
                Hs = function(r) {
                    function t(t, e) {
                        var n = r.call(this) || this;
                        return n.simpleDbTransaction = t, n.currentSequenceNumber = e, n
                    }
                    return a(t, r), t
                }(function() {}),
                Ys = function() {
                    function c(t, e, n, r, i, o, s) {
                        if (this.persistenceKey = t, this.clientId = e, this.queue = r, this.multiClientParams = s, this._started = !1, this.isPrimary = !1, this.networkEnabled = !0, this.inForeground = !1, this.lastGarbageCollectionTime = Number.NEGATIVE_INFINITY, this.primaryStateListener = function(t) {
                                return Promise.resolve()
                            }, !c.isAvailable()) throw new Sn(En.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                        if (this.referenceDelegate = new Zs(this, o), this.dbName = t + c.MAIN_DATABASE, this.serializer = new Fs(i), this.document = n.document, this.allowTabSynchronization = void 0 !== s, this.queryCache = new ts(this.referenceDelegate, this.serializer), this.indexManager = new xs, this.remoteDocumentCache = new us(this.serializer, this.indexManager, this.allowTabSynchronization), !n.window || !n.window.localStorage) throw new Sn(En.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                        this.window = n.window, this.webStorage = this.window.localStorage
                    }
                    return c.getStore = function(t, e) {
                        if (t instanceof Hs) return Yo.getStore(t.simpleDbTransaction, e);
                        throw gn("IndexedDbPersistence must use instances of IndexedDbTransaction")
                    }, c.createIndexedDbPersistence = function(n, r, i, o, s, a) {
                        return h(this, void 0, void 0, function() {
                            var e;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (e = new c(n, r, i, o, s, a)).start()];
                                    case 1:
                                        return t.sent(), [2, e]
                                }
                            })
                        })
                    }, c.createMultiClientIndexedDbPersistence = function(n, r, i, o, s, a, u) {
                        return h(this, void 0, void 0, function() {
                            var e;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (e = new c(n, r, i, o, s, a, u)).start()];
                                    case 1:
                                        return t.sent(), [2, e]
                                }
                            })
                        })
                    }, c.prototype.start = function() {
                        var n = this;
                        return vn(!this.started, "IndexedDbPersistence double-started!"), vn(null !== this.window, "Expected 'window' to be defined"), Yo.openOrCreate(this.dbName, gs, new vs(this.serializer)).then(function(t) {
                            return n.simpleDb = t, n.updateClientMetadataAndTryBecomePrimary()
                        }).then(function() {
                            return n.attachVisibilityHandler(), n.attachWindowUnloadHook(), n.scheduleClientMetadataAndPrimaryLeaseRefreshes(), n.startRemoteDocumentCache()
                        }).then(function() {
                            return n.simpleDb.runTransaction("readonly", [Rs.store], function(t) {
                                return rs(t).next(function(t) {
                                    var e = n.multiClientParams ? n.multiClientParams.sequenceNumberSyncer : void 0;
                                    n.listenSequence = new To(t, e)
                                })
                            })
                        }).then(function() {
                            n._started = !0
                        }).catch(function(t) {
                            return n.simpleDb && n.simpleDb.close(), Promise.reject(t)
                        })
                    }, c.prototype.startRemoteDocumentCache = function() {
                        var e = this;
                        return this.simpleDb.runTransaction("readonly", Ls, function(t) {
                            return e.remoteDocumentCache.start(t)
                        })
                    }, c.prototype.setPrimaryStateListener = function(n) {
                        var t = this;
                        return this.primaryStateListener = function(e) {
                            return h(t, void 0, void 0, function() {
                                return p(this, function(t) {
                                    return this.started ? [2, n(e)] : [2]
                                })
                            })
                        }, n(this.isPrimary)
                    }, c.prototype.setNetworkEnabled = function(t) {
                        var e = this;
                        this.networkEnabled !== t && (this.networkEnabled = t, this.queue.enqueueAndForget(function() {
                            return h(e, void 0, void 0, function() {
                                return p(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.started ? [4, this.updateClientMetadataAndTryBecomePrimary()] : [3, 2];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }))
                    }, c.prototype.updateClientMetadataAndTryBecomePrimary = function() {
                        var r = this;
                        return this.simpleDb.runTransaction("readwrite", Ls, function(n) {
                            return $s(n).put(new Ps(r.clientId, Date.now(), r.networkEnabled, r.inForeground, r.remoteDocumentCache.lastProcessedDocumentChangeId)).next(function() {
                                if (r.isPrimary) return r.verifyPrimaryLease(n).next(function(t) {
                                    t || (r.isPrimary = !1, r.queue.enqueueAndForget(function() {
                                        return r.primaryStateListener(!1)
                                    }))
                                })
                            }).next(function() {
                                return r.canActAsPrimary(n)
                            }).next(function(t) {
                                var e = r.isPrimary;
                                return r.isPrimary = t, e !== r.isPrimary && r.queue.enqueueAndForget(function() {
                                    return r.primaryStateListener(r.isPrimary)
                                }), e && !r.isPrimary ? r.releasePrimaryLeaseIfHeld(n) : r.isPrimary ? r.acquireOrExtendPrimaryLease(n) : void 0
                            })
                        })
                    }, c.prototype.verifyPrimaryLease = function(t) {
                        var e = this;
                        return Js(t).get(ws.key).next(function(t) {
                            return qo.resolve(e.isLocalClient(t))
                        })
                    }, c.prototype.removeClientMetadata = function(t) {
                        return $s(t).delete(this.clientId)
                    }, c.prototype.maybeGarbageCollectMultiClientState = function() {
                        return h(this, void 0, void 0, function() {
                            var r, i, o = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return !this.isPrimary || this.isWithinAge(this.lastGarbageCollectionTime, 18e5) ? [3, 2] : (this.lastGarbageCollectionTime = Date.now(), i = [], [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(n) {
                                            var e = c.getStore(n, Ps.store);
                                            return e.loadAll().next(function(t) {
                                                r = o.filterActiveClients(t, 18e5), i = t.filter(function(t) {
                                                    return -1 === r.indexOf(t)
                                                })
                                            }).next(function() {
                                                return qo.forEach(i, function(t) {
                                                    return e.delete(t.clientId)
                                                })
                                            }).next(function() {
                                                if (0 < (r = r.filter(function(t) {
                                                        return t.clientId !== o.clientId
                                                    })).length) {
                                                    var t = r.map(function(t) {
                                                            return t.lastProcessedDocumentChangeId || 0
                                                        }),
                                                        e = Math.min.apply(Math, t);
                                                    return o.remoteDocumentCache.removeDocumentChangesThroughChangeId(n, e)
                                                }
                                            })
                                        })]);
                                    case 1:
                                        t.sent(), i.forEach(function(t) {
                                            o.window.localStorage.removeItem(o.zombiedClientLocalStorageKey(t.clientId))
                                        }), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, c.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes = function() {
                        var t = this;
                        this.clientMetadataRefresher = this.queue.enqueueAfterDelay(Eo.ClientMetadataRefresh, 4e3, function() {
                            return t.updateClientMetadataAndTryBecomePrimary().then(function() {
                                return t.maybeGarbageCollectMultiClientState()
                            }).then(function() {
                                return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()
                            })
                        })
                    }, c.prototype.isLocalClient = function(t) {
                        return !!t && t.ownerId === this.clientId
                    }, c.prototype.canActAsPrimary = function(e) {
                        var i = this;
                        return Js(e).get(ws.key).next(function(t) {
                            if (null !== t && i.isWithinAge(t.leaseTimestampMs, 5e3) && !i.isClientZombied(t.ownerId)) {
                                if (i.isLocalClient(t) && i.networkEnabled) return !0;
                                if (!i.isLocalClient(t)) {
                                    if (!t.allowTabSynchronization) throw new Sn(En.FAILED_PRECONDITION, zs);
                                    return !1
                                }
                            }
                            return !(!i.networkEnabled || !i.inForeground) || $s(e).loadAll().next(function(t) {
                                return void 0 === i.filterActiveClients(t, 5e3).find(function(t) {
                                    if (i.clientId !== t.clientId) {
                                        var e = !i.networkEnabled && t.networkEnabled,
                                            n = !i.inForeground && t.inForeground,
                                            r = i.networkEnabled === t.networkEnabled;
                                        if (e || n && r) return !0
                                    }
                                    return !1
                                })
                            })
                        }).next(function(t) {
                            return i.isPrimary !== t && dn(Ws, "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
                        })
                    }, c.prototype.shutdown = function(n) {
                        return h(this, void 0, void 0, function() {
                            var e = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this._started = !1, this.markClientZombied(), this.clientMetadataRefresher && this.clientMetadataRefresher.cancel(), this.detachVisibilityHandler(), this.detachWindowUnloadHook(), [4, this.simpleDb.runTransaction("readwrite", [ws.store, Ps.store], function(t) {
                                            return e.releasePrimaryLeaseIfHeld(t).next(function() {
                                                return e.removeClientMetadata(t)
                                            })
                                        })];
                                    case 1:
                                        return t.sent(), this.simpleDb.close(), this.removeClientZombiedEntry(), n ? [4, Yo.delete(this.dbName)] : [3, 3];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, c.prototype.filterActiveClients = function(t, e) {
                        var n = this;
                        return t.filter(function(t) {
                            return n.isWithinAge(t.updateTimeMs, e) && !n.isClientZombied(t.clientId)
                        })
                    }, c.prototype.getActiveClients = function() {
                        var e = this;
                        return this.simpleDb.runTransaction("readonly", [Ps.store], function(t) {
                            return $s(t).loadAll().next(function(t) {
                                return e.filterActiveClients(t, 18e5).map(function(t) {
                                    return t.clientId
                                })
                            })
                        })
                    }, Object.defineProperty(c.prototype, "started", {
                        get: function() {
                            return this._started
                        },
                        enumerable: !0,
                        configurable: !0
                    }), c.prototype.getMutationQueue = function(t) {
                        return vn(this.started, "Cannot initialize MutationQueue before persistence is started."), Fo.forUser(t, this.serializer, this.indexManager, this.referenceDelegate)
                    }, c.prototype.getQueryCache = function() {
                        return vn(this.started, "Cannot initialize QueryCache before persistence is started."), this.queryCache
                    }, c.prototype.getRemoteDocumentCache = function() {
                        return vn(this.started, "Cannot initialize RemoteDocumentCache before persistence is started."), this.remoteDocumentCache
                    }, c.prototype.getIndexManager = function() {
                        return vn(this.started, "Cannot initialize IndexManager before persistence is started."), this.indexManager
                    }, c.prototype.runTransaction = function(n, t, r) {
                        var i = this;
                        return dn(Ws, "Starting transaction:", n), this.simpleDb.runTransaction("readonly" === t ? "readonly" : "readwrite", Ls, function(e) {
                            return "readwrite-primary" === t ? i.verifyPrimaryLease(e).next(function(t) {
                                if (!t) throw mn("Failed to obtain primary lease for action '" + n + "'."), i.isPrimary = !1, i.queue.enqueueAndForget(function() {
                                    return i.primaryStateListener(!1)
                                }), new Sn(En.FAILED_PRECONDITION, Gs);
                                return r(new Hs(e, i.listenSequence.next()))
                            }).next(function(t) {
                                return i.acquireOrExtendPrimaryLease(e).next(function() {
                                    return t
                                })
                            }) : i.verifyAllowTabSynchronization(e).next(function() {
                                return r(new Hs(e, i.listenSequence.next()))
                            })
                        })
                    }, c.prototype.verifyAllowTabSynchronization = function(t) {
                        var e = this;
                        return Js(t).get(ws.key).next(function(t) {
                            if (null !== t && e.isWithinAge(t.leaseTimestampMs, 5e3) && !e.isClientZombied(t.ownerId) && !e.isLocalClient(t) && !t.allowTabSynchronization) throw new Sn(En.FAILED_PRECONDITION, zs)
                        })
                    }, c.prototype.acquireOrExtendPrimaryLease = function(t) {
                        var e = new ws(this.clientId, this.allowTabSynchronization, Date.now());
                        return Js(t).put(ws.key, e)
                    }, c.isAvailable = function() {
                        return Yo.isAvailable()
                    }, c.buildStoragePrefix = function(t) {
                        var e = t.databaseId.projectId;
                        return t.databaseId.isDefaultDatabase || (e += "." + t.databaseId.database), "firestore/" + t.persistenceKey + "/" + e + "/"
                    }, c.prototype.releasePrimaryLeaseIfHeld = function(t) {
                        var e = this,
                            n = Js(t);
                        return n.get(ws.key).next(function(t) {
                            return e.isLocalClient(t) ? (dn(Ws, "Releasing primary lease."), n.delete(ws.key)) : qo.resolve()
                        })
                    }, c.prototype.isWithinAge = function(t, e) {
                        var n = Date.now();
                        return !(t < n - e) && (!(n < t) || (mn("Detected an update time that is in the future: " + t + " > " + n), !1))
                    }, c.prototype.attachVisibilityHandler = function() {
                        var t = this;
                        null !== this.document && "function" == typeof this.document.addEventListener && (this.documentVisibilityHandler = function() {
                            t.queue.enqueueAndForget(function() {
                                return t.inForeground = "visible" === t.document.visibilityState, t.updateClientMetadataAndTryBecomePrimary()
                            })
                        }, this.document.addEventListener("visibilitychange", this.documentVisibilityHandler), this.inForeground = "visible" === this.document.visibilityState)
                    }, c.prototype.detachVisibilityHandler = function() {
                        this.documentVisibilityHandler && (vn(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), this.document.removeEventListener("visibilitychange", this.documentVisibilityHandler), this.documentVisibilityHandler = null)
                    }, c.prototype.attachWindowUnloadHook = function() {
                        var t = this;
                        "function" == typeof this.window.addEventListener && (this.windowUnloadHandler = function() {
                            t.markClientZombied(), t.queue.enqueueAndForget(function() {
                                return t.shutdown()
                            })
                        }, this.window.addEventListener("unload", this.windowUnloadHandler))
                    }, c.prototype.detachWindowUnloadHook = function() {
                        this.windowUnloadHandler && (vn("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), this.window.removeEventListener("unload", this.windowUnloadHandler), this.windowUnloadHandler = null)
                    }, c.prototype.isClientZombied = function(t) {
                        try {
                            var e = null !== this.webStorage.getItem(this.zombiedClientLocalStorageKey(t));
                            return dn(Ws, "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e
                        } catch (t) {
                            return mn(Ws, "Failed to get zombied client id.", t), !1
                        }
                    }, c.prototype.markClientZombied = function() {
                        try {
                            this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId), String(Date.now()))
                        } catch (t) {
                            mn("Failed to set zombie client id.", t)
                        }
                    }, c.prototype.removeClientZombiedEntry = function() {
                        try {
                            this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))
                        } catch (t) {}
                    }, c.prototype.zombiedClientLocalStorageKey = function(t) {
                        return "firestore_zombie_" + this.persistenceKey + "_" + t
                    }, c.MAIN_DATABASE = "main", c
                }();

            function Xs(n) {
                return h(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        if ((e = n).code !== En.FAILED_PRECONDITION || e.message !== Gs) throw n;
                        var e;
                        return dn(Ws, "Unexpectedly lost primary lease"), [2]
                    })
                })
            }

            function Js(t) {
                return t.store(ws.store)
            }

            function $s(t) {
                return t.store(Ps.store)
            }
            var Zs = function() {
                function t(t, e) {
                    this.db = t, this.garbageCollector = new js(this, e)
                }
                return t.prototype.getSequenceNumberCount = function(t) {
                    var n = this.orphanedDocmentCount(t);
                    return this.db.getQueryCache().getQueryCount(t).next(function(e) {
                        return n.next(function(t) {
                            return e + t
                        })
                    })
                }, t.prototype.orphanedDocmentCount = function(t) {
                    var e = 0;
                    return this.forEachOrphanedDocumentSequenceNumber(t, function(t) {
                        e++
                    }).next(function() {
                        return e
                    })
                }, t.prototype.forEachTarget = function(t, e) {
                    return this.db.getQueryCache().forEachTarget(t, e)
                }, t.prototype.forEachOrphanedDocumentSequenceNumber = function(t, n) {
                    return this.forEachOrphanedDocument(t, function(t, e) {
                        return n(e)
                    })
                }, t.prototype.setInMemoryPins = function(t) {
                    this.inMemoryPins = t
                }, t.prototype.addReference = function(t, e) {
                    return ta(t, e)
                }, t.prototype.removeReference = function(t, e) {
                    return ta(t, e)
                }, t.prototype.removeTargets = function(t, e, n) {
                    return this.db.getQueryCache().removeTargets(t, e, n)
                }, t.prototype.removeMutationReference = function(t, e) {
                    return ta(t, e)
                }, t.prototype.isPinned = function(t, e) {
                    return this.inMemoryPins.containsKey(e) ? qo.resolve(!0) : (r = e, i = !1, jo(n = t).iterateSerial(function(t) {
                        return Vo(n, t, r).next(function(t) {
                            return t && (i = !0), qo.resolve(!t)
                        })
                    }).next(function() {
                        return i
                    }));
                    var n, r, i
                }, t.prototype.removeOrphanedDocuments = function(r, i) {
                    var o = this,
                        s = 0,
                        a = 0,
                        u = [];
                    return this.forEachOrphanedDocument(r, function(e, t) {
                        if (t <= i) {
                            var n = o.isPinned(r, e).next(function(t) {
                                if (!t) return s++, o.removeOrphanedDocument(r, e).next(function(t) {
                                    a += t
                                })
                            });
                            u.push(n)
                        }
                    }).next(function() {
                        return qo.waitFor(u)
                    }).next(function() {
                        return o.db.getRemoteDocumentCache().updateSize(r, -a)
                    }).next(function() {
                        return s
                    })
                }, t.prototype.removeOrphanedDocument = function(t, e) {
                    var n, r = 0,
                        i = this.db.getRemoteDocumentCache();
                    return qo.waitFor([is(t).delete((n = e, [0, Mo(n.path)])), i.removeEntry(t, e).next(function(t) {
                        r += t
                    })]).next(function() {
                        return r
                    })
                }, t.prototype.removeTarget = function(t, e) {
                    var n = e.copy({
                        sequenceNumber: t.currentSequenceNumber
                    });
                    return this.db.getQueryCache().updateQueryData(t, n)
                }, t.prototype.updateLimboDocument = function(t, e) {
                    return ta(t, e)
                }, t.prototype.forEachOrphanedDocument = function(t, o) {
                    var s, e = is(t),
                        a = To.INVALID;
                    return e.iterate({
                        index: ks.documentTargetsIndex
                    }, function(t, e) {
                        var n = t[0],
                            r = (t[1], e.path),
                            i = e.sequenceNumber;
                        0 === n ? (a !== To.INVALID && o(new mr(Po(s)), a), a = i, s = r) : a = To.INVALID
                    }).next(function() {
                        a !== To.INVALID && o(new mr(Po(s)), a)
                    })
                }, t.prototype.getCacheSize = function(t) {
                    return this.db.getRemoteDocumentCache().getSize(t)
                }, t
            }();

            function ta(t, e) {
                return is(t).put((n = e, r = t.currentSequenceNumber, new ks(0, Mo(n.path), r)));
                var n, r
            }
            var ea = function() {
                    function t(t, e, n) {
                        this.remoteDocumentCache = t, this.mutationQueue = e, this.indexManager = n
                    }
                    return t.prototype.getDocument = function(e, n) {
                        var r = this;
                        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(e, n).next(function(t) {
                            return r.getDocumentInternal(e, n, t)
                        })
                    }, t.prototype.getDocumentInternal = function(t, r, i) {
                        return this.remoteDocumentCache.getEntry(t, r).next(function(t) {
                            for (var e = 0, n = i; e < n.length; e++) {
                                t = n[e].applyToLocalView(r, t)
                            }
                            return t
                        })
                    }, t.prototype.applyLocalMutationsToDocuments = function(t, e, i) {
                        var o = _i();
                        return e.forEach(function(t, e) {
                            for (var n = 0, r = i; n < r.length; n++) {
                                e = r[n].applyToLocalView(t, e)
                            }
                            o = o.insert(t, e)
                        }), o
                    }, t.prototype.getDocuments = function(e, t) {
                        var n = this;
                        return this.remoteDocumentCache.getEntries(e, t).next(function(t) {
                            return n.getLocalViewOfDocuments(e, t)
                        })
                    }, t.prototype.getLocalViewOfDocuments = function(r, i) {
                        var o = this;
                        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(r, i).next(function(t) {
                            var e = o.applyLocalMutationsToDocuments(r, i, t),
                                n = Mi();
                            return e.forEach(function(t, e) {
                                e || (e = new vr(t, oi.forDeletedDoc())), n = n.insert(t, e)
                            }), n
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function(t, e) {
                        return e.isDocumentQuery() ? this.getDocumentsMatchingDocumentQuery(t, e.path) : e.isCollectionGroupQuery() ? this.getDocumentsMatchingCollectionGroupQuery(t, e) : this.getDocumentsMatchingCollectionQuery(t, e)
                    }, t.prototype.getDocumentsMatchingDocumentQuery = function(t, e) {
                        return this.getDocument(t, new mr(e)).next(function(t) {
                            var e = Pi();
                            return t instanceof gr && (e = e.insert(t.key, t)), e
                        })
                    }, t.prototype.getDocumentsMatchingCollectionGroupQuery = function(n, r) {
                        var i = this;
                        vn(r.path.isEmpty(), "Currently we only support collection group queries at the root.");
                        var o = r.collectionGroup,
                            s = Pi();
                        return this.indexManager.getCollectionParents(n, o).next(function(t) {
                            return qo.forEach(t, function(t) {
                                var e = r.asCollectionQueryAtPath(t.child(o));
                                return i.getDocumentsMatchingCollectionQuery(n, e).next(function(t) {
                                    t.forEach(function(t, e) {
                                        s = s.insert(t, e)
                                    })
                                })
                            }).next(function() {
                                return s
                            })
                        })
                    }, t.prototype.getDocumentsMatchingCollectionQuery = function(e, h) {
                        var l, n = this;
                        return this.remoteDocumentCache.getDocumentsMatchingQuery(e, h).next(function(t) {
                            return l = t, n.mutationQueue.getAllMutationBatchesAffectingQuery(e, h)
                        }).next(function(t) {
                            for (var e = 0, n = t; e < n.length; e++)
                                for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) {
                                    var s = o[i],
                                        a = s.key;
                                    if (h.path.isImmediateParentOf(a.path)) {
                                        var u = l.get(a),
                                            c = s.applyToLocalView(u, u, r.localWriteTime);
                                        l = c instanceof gr ? l.insert(a, c) : l.remove(a)
                                    }
                                }
                        }).next(function() {
                            return l.forEach(function(t, e) {
                                h.matches(e) || (l = l.remove(t))
                            }), l
                        })
                    }, t
                }(),
                na = function() {
                    function t() {
                        this.refsByKey = new ci(ra.compareByKey), this.refsByTarget = new ci(ra.compareByTargetId)
                    }
                    return t.prototype.isEmpty = function() {
                        return this.refsByKey.isEmpty()
                    }, t.prototype.addReference = function(t, e) {
                        var n = new ra(t, e);
                        this.refsByKey = this.refsByKey.add(n), this.refsByTarget = this.refsByTarget.add(n)
                    }, t.prototype.addReferences = function(t, e) {
                        var n = this;
                        t.forEach(function(t) {
                            return n.addReference(t, e)
                        })
                    }, t.prototype.removeReference = function(t, e) {
                        this.removeRef(new ra(t, e))
                    }, t.prototype.removeReferences = function(t, e) {
                        var n = this;
                        t.forEach(function(t) {
                            return n.removeReference(t, e)
                        })
                    }, t.prototype.removeReferencesForId = function(t) {
                        var e = this,
                            n = mr.EMPTY,
                            r = new ra(n, t),
                            i = new ra(n, t + 1),
                            o = [];
                        return this.refsByTarget.forEachInRange([r, i], function(t) {
                            e.removeRef(t), o.push(t.key)
                        }), o
                    }, t.prototype.removeAllReferences = function() {
                        var e = this;
                        this.refsByKey.forEach(function(t) {
                            return e.removeRef(t)
                        })
                    }, t.prototype.removeRef = function(t) {
                        this.refsByKey = this.refsByKey.delete(t), this.refsByTarget = this.refsByTarget.delete(t)
                    }, t.prototype.referencesForId = function(t) {
                        var e = mr.EMPTY,
                            n = new ra(e, t),
                            r = new ra(e, t + 1),
                            i = Fi();
                        return this.refsByTarget.forEachInRange([n, r], function(t) {
                            i = i.add(t.key)
                        }), i
                    }, t.prototype.containsKey = function(t) {
                        var e = new ra(t, 0),
                            n = this.refsByKey.firstAfterOrEqual(e);
                        return null !== n && t.isEqual(n.key)
                    }, t
                }(),
                ra = function() {
                    function t(t, e) {
                        this.key = t, this.targetOrBatchId = e
                    }
                    return t.compareByKey = function(t, e) {
                        return mr.comparator(t.key, e.key) || Hn(t.targetOrBatchId, e.targetOrBatchId)
                    }, t.compareByTargetId = function(t, e) {
                        return Hn(t.targetOrBatchId, e.targetOrBatchId) || mr.comparator(t.key, e.key)
                    }, t
                }(),
                ia = function() {
                    function l(t, e) {
                        this.persistence = t, this.localViewReferences = new na, this.queryDataByTarget = {}, vn(t.started, "LocalStore was passed an unstarted persistence implementation"), this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences), this.mutationQueue = t.getMutationQueue(e), this.remoteDocuments = t.getRemoteDocumentCache(), this.queryCache = t.getQueryCache(), this.localDocuments = new ea(this.remoteDocuments, this.mutationQueue, this.persistence.getIndexManager())
                    }
                    return l.prototype.handleUserChange = function(e) {
                        var y = this;
                        return this.persistence.runTransaction("Handle user change", "readonly", function(d) {
                            var m;
                            return y.mutationQueue.getAllMutationBatches(d).next(function(t) {
                                return m = t, y.mutationQueue = y.persistence.getMutationQueue(e), y.localDocuments = new ea(y.remoteDocuments, y.mutationQueue, y.persistence.getIndexManager()), y.mutationQueue.getAllMutationBatches(d)
                            }).next(function(t) {
                                for (var e = [], n = [], r = Fi(), i = 0, o = m; i < o.length; i++) {
                                    var s = o[i];
                                    e.push(s.batchId);
                                    for (var a = 0, u = s.mutations; a < u.length; a++) {
                                        var c = u[a];
                                        r = r.add(c.key)
                                    }
                                }
                                for (var h = 0, l = t; h < l.length; h++) {
                                    s = l[h];
                                    n.push(s.batchId);
                                    for (var f = 0, p = s.mutations; f < p.length; f++) {
                                        c = p[f];
                                        r = r.add(c.key)
                                    }
                                }
                                return y.localDocuments.getDocuments(d, r).next(function(t) {
                                    return {
                                        affectedDocuments: t,
                                        removedBatchIds: e,
                                        addedBatchIds: n
                                    }
                                })
                            })
                        })
                    }, l.prototype.localWrite = function(c) {
                        var h = this,
                            l = sr.now(),
                            t = c.reduce(function(t, e) {
                                return t.add(e.key)
                            }, Fi());
                        return this.persistence.runTransaction("Locally write mutations", "readwrite", function(u) {
                            return h.localDocuments.getDocuments(u, t).next(function(n) {
                                for (var t = [], e = 0, r = c; e < r.length; e++) {
                                    var i = r[e],
                                        o = n.get(i.key);
                                    if (!i.isIdempotent) {
                                        var s = i.fieldMask;
                                        if (s) {
                                            var a = o instanceof gr ? s.applyTo(o.data) : Fr.EMPTY;
                                            t.push(new gi(i.key, a, s, di.exists(!0)))
                                        }
                                    }
                                }
                                return h.mutationQueue.addMutationBatch(u, l, t, c).next(function(t) {
                                    var e = t.applyToLocalDocumentSet(n);
                                    return {
                                        batchId: t.batchId,
                                        changes: e
                                    }
                                })
                            })
                        })
                    }, l.prototype.lookupMutationDocuments = function(t) {
                        var n = this;
                        return this.persistence.runTransaction("Lookup mutation documents", "readonly", function(e) {
                            return n.mutationQueue.lookupMutationKeys(e, t).next(function(t) {
                                return t ? n.localDocuments.getDocuments(e, t) : qo.resolve(null)
                            })
                        })
                    }, l.prototype.acknowledgeBatch = function(r) {
                        var i = this;
                        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t) {
                            var e = r.batch.keys(),
                                n = i.remoteDocuments.newChangeBuffer();
                            return i.mutationQueue.acknowledgeBatch(t, r.batch, r.streamToken).next(function() {
                                return i.applyWriteToRemoteDocuments(t, r, n)
                            }).next(function() {
                                return n.apply(t)
                            }).next(function() {
                                return i.mutationQueue.performConsistencyCheck(t)
                            }).next(function() {
                                return i.localDocuments.getDocuments(t, e)
                            })
                        })
                    }, l.prototype.rejectBatch = function(t) {
                        var r = this;
                        return this.persistence.runTransaction("Reject batch", "readwrite-primary", function(e) {
                            var n;
                            return r.mutationQueue.lookupMutationBatch(e, t).next(function(t) {
                                return vn(null !== t, "Attempt to reject nonexistent batch!"), n = t.keys(), r.mutationQueue.removeMutationBatch(e, t)
                            }).next(function() {
                                return r.mutationQueue.performConsistencyCheck(e)
                            }).next(function() {
                                return r.localDocuments.getDocuments(e, n)
                            })
                        })
                    }, l.prototype.getLastStreamToken = function() {
                        var e = this;
                        return this.persistence.runTransaction("Get last stream token", "readonly", function(t) {
                            return e.mutationQueue.getLastStreamToken(t)
                        })
                    }, l.prototype.setLastStreamToken = function(e) {
                        var n = this;
                        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", function(t) {
                            return n.mutationQueue.setLastStreamToken(t, e)
                        })
                    }, l.prototype.getLastRemoteSnapshotVersion = function() {
                        var e = this;
                        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t) {
                            return e.queryCache.getLastRemoteSnapshotVersion(t)
                        })
                    }, l.prototype.applyRemoteEvent = function(u) {
                        var c = this,
                            h = this.remoteDocuments.newChangeBuffer();
                        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", function(o) {
                            var s = [],
                                a = Fi();
                            Dn(u.targetChanges, function(t, e) {
                                var n = c.queryDataByTarget[t];
                                if (n) {
                                    e.addedDocuments.forEach(function(t) {
                                        a = a.add(t)
                                    }), e.modifiedDocuments.forEach(function(t) {
                                        a = a.add(t)
                                    }), s.push(c.queryCache.removeMatchingKeys(o, e.removedDocuments, t).next(function() {
                                        return c.queryCache.addMatchingKeys(o, e.addedDocuments, t)
                                    }));
                                    var r = e.resumeToken;
                                    if (0 < r.length) {
                                        var i = n;
                                        n = n.copy({
                                            resumeToken: r,
                                            snapshotVersion: u.snapshotVersion
                                        }), c.queryDataByTarget[t] = n, l.shouldPersistQueryData(i, n, e) && s.push(c.queryCache.updateQueryData(o, n))
                                    }
                                }
                            });
                            var i = Mi(),
                                n = Fi();
                            u.documentUpdates.forEach(function(t, e) {
                                n = n.add(t)
                            }), s.push(h.getEntries(o, n).next(function(r) {
                                u.documentUpdates.forEach(function(t, e) {
                                    var n = r.get(t);
                                    null == n || e.version.isEqual(oi.MIN) || a.has(e.key) && !n.hasPendingWrites || 0 <= e.version.compareTo(n.version) ? (h.addEntry(e), i = i.insert(t, e)) : dn("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version), u.resolvedLimboDocuments.has(t) && s.push(c.persistence.referenceDelegate.updateLimboDocument(o, t))
                                })
                            }));
                            var e = u.snapshotVersion;
                            if (!e.isEqual(oi.MIN)) {
                                var t = c.queryCache.getLastRemoteSnapshotVersion(o).next(function(t) {
                                    return vn(0 <= e.compareTo(t), "Watch stream reverted to previous snapshot?? " + e + " < " + t), c.queryCache.setTargetsMetadata(o, o.currentSequenceNumber, e)
                                });
                                s.push(t)
                            }
                            return qo.waitFor(s).next(function() {
                                return h.apply(o)
                            }).next(function() {
                                return c.localDocuments.getLocalViewOfDocuments(o, i)
                            })
                        })
                    }, l.shouldPersistQueryData = function(t, e, n) {
                        return 0 !== e.resumeToken.length && (0 === t.resumeToken.length || (e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= this.RESUME_TOKEN_MAX_AGE_MICROS || 0 < n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size))
                    }, l.prototype.notifyLocalViewChanges = function(t) {
                        var n = this;
                        return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(e) {
                            return qo.forEach(t, function(t) {
                                return n.localViewReferences.addReferences(t.addedKeys, t.targetId), n.localViewReferences.removeReferences(t.removedKeys, t.targetId), qo.forEach(t.removedKeys, function(t) {
                                    return n.persistence.referenceDelegate.removeReference(e, t)
                                })
                            })
                        })
                    }, l.prototype.nextMutationBatch = function(e) {
                        var n = this;
                        return this.persistence.runTransaction("Get next mutation batch", "readonly", function(t) {
                            return void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t, e)
                        })
                    }, l.prototype.readDocument = function(e) {
                        var n = this;
                        return this.persistence.runTransaction("read document", "readonly", function(t) {
                            return n.localDocuments.getDocument(t, e)
                        })
                    }, l.prototype.allocateQuery = function(r) {
                        var i = this;
                        return this.persistence.runTransaction("Allocate query", "readwrite", function(e) {
                            var n;
                            return i.queryCache.getQueryData(e, r).next(function(t) {
                                return t ? (n = t, qo.resolve()) : i.queryCache.allocateTargetId(e).next(function(t) {
                                    return n = new ui(r, t, Gr.Listen, e.currentSequenceNumber), i.queryCache.addQueryData(e, n)
                                })
                            }).next(function() {
                                return vn(!i.queryDataByTarget[n.targetId], "Tried to allocate an already allocated query: " + r), i.queryDataByTarget[n.targetId] = n
                            })
                        })
                    }, l.prototype.releaseQuery = function(o, s) {
                        var a = this,
                            t = s ? "readwrite" : "readwrite-primary";
                        return this.persistence.runTransaction("Release query", t, function(i) {
                            return a.queryCache.getQueryData(i, o).next(function(t) {
                                vn(null != t, "Tried to release nonexistent query: " + o);
                                var e = t.targetId,
                                    n = a.queryDataByTarget[e],
                                    r = a.localViewReferences.removeReferencesForId(e);
                                return delete a.queryDataByTarget[e], s ? qo.resolve() : qo.forEach(r, function(t) {
                                    return a.persistence.referenceDelegate.removeReference(i, t)
                                }).next(function() {
                                    return a.persistence.referenceDelegate.removeTarget(i, n)
                                })
                            })
                        })
                    }, l.prototype.executeQuery = function(e) {
                        var n = this;
                        return this.persistence.runTransaction("Execute query", "readonly", function(t) {
                            return n.localDocuments.getDocumentsMatchingQuery(t, e)
                        })
                    }, l.prototype.remoteDocumentKeys = function(e) {
                        var n = this;
                        return this.persistence.runTransaction("Remote document keys", "readonly", function(t) {
                            return n.queryCache.getMatchingKeysForTargetId(t, e)
                        })
                    }, l.prototype.getActiveClients = function() {
                        return this.persistence.getActiveClients()
                    }, l.prototype.removeCachedMutationBatchMetadata = function(t) {
                        this.mutationQueue.removeCachedMutationKeys(t)
                    }, l.prototype.setNetworkEnabled = function(t) {
                        this.persistence.setNetworkEnabled(t)
                    }, l.prototype.applyWriteToRemoteDocuments = function(t, i, o) {
                        var e = this,
                            s = i.batch,
                            n = s.keys(),
                            a = qo.resolve();
                        return n.forEach(function(r) {
                            a = a.next(function() {
                                return o.getEntry(t, r)
                            }).next(function(t) {
                                var e = t,
                                    n = i.docVersions.get(r);
                                vn(null !== n, "ackVersions should contain every doc in the write."), (!e || e.version.compareTo(n) < 0) && ((e = s.applyToRemoteDocument(r, e, i)) ? o.addEntry(e) : vn(!t, "Mutation batch " + s + " applied to document " + t + " resulted in null"))
                            })
                        }), a.next(function() {
                            return e.mutationQueue.removeMutationBatch(t, s)
                        })
                    }, l.prototype.collectGarbage = function(e) {
                        var n = this;
                        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(t) {
                            return e.collect(t, n.queryDataByTarget)
                        })
                    }, l.prototype.getQueryForTarget = function(e) {
                        var n = this;
                        return this.queryDataByTarget[e] ? Promise.resolve(this.queryDataByTarget[e].query) : this.persistence.runTransaction("Get query data", "readonly", function(t) {
                            return n.queryCache.getQueryDataForTarget(t, e).next(function(t) {
                                return t ? t.query : null
                            })
                        })
                    }, l.prototype.getNewDocumentChanges = function() {
                        var e = this;
                        return this.persistence.runTransaction("Get new document changes", "readonly", function(t) {
                            return e.remoteDocuments.getNewDocumentChanges(t)
                        })
                    }, l.RESUME_TOKEN_MAX_AGE_MICROS = 3e8, l
                }(),
                oa = function() {
                    function t(t, e) {
                        this.indexManager = t, this.referenceDelegate = e, this.mutationQueue = [], this.nextBatchId = 1, this.lastStreamToken = wn(), this.batchesByDocumentKey = new ci(ra.compareByKey)
                    }
                    return t.prototype.checkEmpty = function(t) {
                        return qo.resolve(0 === this.mutationQueue.length)
                    }, t.prototype.acknowledgeBatch = function(t, e, n) {
                        var r = e.batchId,
                            i = this.indexOfExistingBatchId(r, "acknowledged");
                        vn(0 === i, "Can only acknowledge the first batch in the mutation queue");
                        var o = this.mutationQueue[i];
                        return vn(r === o.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + o.batchId), this.lastStreamToken = n, qo.resolve()
                    }, t.prototype.getLastStreamToken = function(t) {
                        return qo.resolve(this.lastStreamToken)
                    }, t.prototype.setLastStreamToken = function(t, e) {
                        return this.lastStreamToken = e, qo.resolve()
                    }, t.prototype.addMutationBatch = function(t, e, n, r) {
                        vn(0 !== r.length, "Mutation batches should not be empty");
                        var i = this.nextBatchId;
                        (this.nextBatchId++, 0 < this.mutationQueue.length) && vn(this.mutationQueue[this.mutationQueue.length - 1].batchId < i, "Mutation batchIDs must be monotonically increasing order");
                        var o = new Lo(i, e, n, r);
                        this.mutationQueue.push(o);
                        for (var s = 0, a = r; s < a.length; s++) {
                            var u = a[s];
                            this.batchesByDocumentKey = this.batchesByDocumentKey.add(new ra(u.key, i)), this.indexManager.addToCollectionParentIndex(t, u.key.path.popLast())
                        }
                        return qo.resolve(o)
                    }, t.prototype.lookupMutationBatch = function(t, e) {
                        return qo.resolve(this.findMutationBatch(e))
                    }, t.prototype.lookupMutationKeys = function(t, e) {
                        var n = this.findMutationBatch(e);
                        return vn(null != n, "Failed to find local mutation batch."), qo.resolve(n.keys())
                    }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
                        var n = e + 1,
                            r = this.indexOfBatchId(n),
                            i = r < 0 ? 0 : r;
                        return qo.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null)
                    }, t.prototype.getAllMutationBatches = function(t) {
                        return qo.resolve(this.mutationQueue.slice())
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, n) {
                        var r = this,
                            e = new ra(n, 0),
                            i = new ra(n, Number.POSITIVE_INFINITY),
                            o = [];
                        return this.batchesByDocumentKey.forEachInRange([e, i], function(t) {
                            vn(n.isEqual(t.key), "Should only iterate over a single key's batches");
                            var e = r.findMutationBatch(t.targetOrBatchId);
                            vn(null !== e, "Batches in the index must exist in the main table"), o.push(e)
                        }), qo.resolve(o)
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) {
                        var r = this,
                            i = new ci(Hn);
                        return e.forEach(function(e) {
                            var t = new ra(e, 0),
                                n = new ra(e, Number.POSITIVE_INFINITY);
                            r.batchesByDocumentKey.forEachInRange([t, n], function(t) {
                                vn(e.isEqual(t.key), "For each key, should only iterate over a single key's batches"), i = i.add(t.targetOrBatchId)
                            })
                        }), qo.resolve(this.findMutationBatches(i))
                    }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                        vn(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                        var n = e.path,
                            r = n.length + 1,
                            i = n;
                        mr.isDocumentKey(i) || (i = i.child(""));
                        var o = new ra(new mr(i), 0),
                            s = new ci(Hn);
                        return this.batchesByDocumentKey.forEachWhile(function(t) {
                            var e = t.key.path;
                            return !!n.isPrefixOf(e) && (e.length === r && (s = s.add(t.targetOrBatchId)), !0)
                        }, o), qo.resolve(this.findMutationBatches(s))
                    }, t.prototype.findMutationBatches = function(t) {
                        var n = this,
                            r = [];
                        return t.forEach(function(t) {
                            var e = n.findMutationBatch(t);
                            null !== e && r.push(e)
                        }), r
                    }, t.prototype.removeMutationBatch = function(n, r) {
                        var i = this;
                        vn(0 === this.indexOfExistingBatchId(r.batchId, "removed"), "Can only remove the first entry of the mutation queue"), this.mutationQueue.shift();
                        var o = this.batchesByDocumentKey;
                        return qo.forEach(r.mutations, function(t) {
                            var e = new ra(t.key, r.batchId);
                            return o = o.delete(e), i.referenceDelegate.removeMutationReference(n, t.key)
                        }).next(function() {
                            i.batchesByDocumentKey = o
                        })
                    }, t.prototype.removeCachedMutationKeys = function(t) {}, t.prototype.containsKey = function(t, e) {
                        var n = new ra(e, 0),
                            r = this.batchesByDocumentKey.firstAfterOrEqual(n);
                        return qo.resolve(e.isEqual(r && r.key))
                    }, t.prototype.performConsistencyCheck = function(t) {
                        return 0 === this.mutationQueue.length && vn(this.batchesByDocumentKey.isEmpty(), "Document leak -- detected dangling mutation references when queue is empty."), qo.resolve()
                    }, t.prototype.indexOfExistingBatchId = function(t, e) {
                        var n = this.indexOfBatchId(t);
                        return vn(0 <= n && n < this.mutationQueue.length, "Batches must exist to be " + e), n
                    }, t.prototype.indexOfBatchId = function(t) {
                        return 0 === this.mutationQueue.length ? 0 : t - this.mutationQueue[0].batchId
                    }, t.prototype.findMutationBatch = function(t) {
                        var e = this.indexOfBatchId(t);
                        if (e < 0 || e >= this.mutationQueue.length) return null;
                        var n = this.mutationQueue[e];
                        return vn(n.batchId === t, "If found batch must match"), n
                    }, t
                }(),
                sa = function() {
                    function t(t) {
                        this.persistence = t, this.queries = new os(function(t) {
                            return t.canonicalId()
                        }), this.lastRemoteSnapshotVersion = oi.MIN, this.highestTargetId = 0, this.highestSequenceNumber = 0, this.references = new na, this.targetCount = 0, this.targetIdGenerator = zo.forQueryCache()
                    }
                    return t.prototype.getTargetCount = function(t) {
                        return qo.resolve(this.targetCount)
                    }, t.prototype.forEachTarget = function(t, n) {
                        return this.queries.forEach(function(t, e) {
                            return n(e)
                        }), qo.resolve()
                    }, t.prototype.getLastRemoteSnapshotVersion = function(t) {
                        return qo.resolve(this.lastRemoteSnapshotVersion)
                    }, t.prototype.getHighestSequenceNumber = function(t) {
                        return qo.resolve(this.highestSequenceNumber)
                    }, t.prototype.allocateTargetId = function(t) {
                        var e = this.targetIdGenerator.after(this.highestTargetId);
                        return this.highestTargetId = e, qo.resolve(e)
                    }, t.prototype.setTargetsMetadata = function(t, e, n) {
                        return n && (this.lastRemoteSnapshotVersion = n), e > this.highestSequenceNumber && (this.highestSequenceNumber = e), qo.resolve()
                    }, t.prototype.saveQueryData = function(t) {
                        this.queries.set(t.query, t);
                        var e = t.targetId;
                        e > this.highestTargetId && (this.highestTargetId = e), t.sequenceNumber > this.highestSequenceNumber && (this.highestSequenceNumber = t.sequenceNumber)
                    }, t.prototype.addQueryData = function(t, e) {
                        return vn(!this.queries.has(e.query), "Adding a query that already exists"), this.saveQueryData(e), this.targetCount += 1, qo.resolve()
                    }, t.prototype.updateQueryData = function(t, e) {
                        return vn(this.queries.has(e.query), "Updating a non-existent query"), this.saveQueryData(e), qo.resolve()
                    }, t.prototype.removeQueryData = function(t, e) {
                        return vn(0 < this.targetCount, "Removing a target from an empty cache"), vn(this.queries.has(e.query), "Removing a non-existent target from the cache"), this.queries.delete(e.query), this.references.removeReferencesForId(e.targetId), this.targetCount -= 1, qo.resolve()
                    }, t.prototype.removeTargets = function(n, r, i) {
                        var o = this,
                            s = 0,
                            a = [];
                        return this.queries.forEach(function(t, e) {
                            e.sequenceNumber <= r && !i[e.targetId] && (o.queries.delete(t), a.push(o.removeMatchingKeysForTargetId(n, e.targetId)), s++)
                        }), qo.waitFor(a).next(function() {
                            return s
                        })
                    }, t.prototype.getQueryCount = function(t) {
                        return qo.resolve(this.targetCount)
                    }, t.prototype.getQueryData = function(t, e) {
                        var n = this.queries.get(e) || null;
                        return qo.resolve(n)
                    }, t.prototype.getQueryDataForTarget = function(t, e) {
                        return gn("Not yet implemented.")
                    }, t.prototype.addMatchingKeys = function(e, t, n) {
                        this.references.addReferences(t, n);
                        var r = this.persistence.referenceDelegate,
                            i = [];
                        return r && t.forEach(function(t) {
                            i.push(r.addReference(e, t))
                        }), qo.waitFor(i)
                    }, t.prototype.removeMatchingKeys = function(e, t, n) {
                        this.references.removeReferences(t, n);
                        var r = this.persistence.referenceDelegate,
                            i = [];
                        return r && t.forEach(function(t) {
                            i.push(r.removeReference(e, t))
                        }), qo.waitFor(i)
                    }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
                        return this.references.removeReferencesForId(e), qo.resolve()
                    }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
                        var n = this.references.referencesForId(e);
                        return qo.resolve(n)
                    }, t.prototype.containsKey = function(t, e) {
                        return qo.resolve(this.references.containsKey(e))
                    }, t
                }();
            var aa, ua, ca = function() {
                    function t(t, e) {
                        this.indexManager = t, this.sizer = e, this.docs = new wr(mr.comparator), this.newDocumentChanges = Fi(), this.size = 0
                    }
                    return t.prototype.addEntries = function(t, e, n) {
                        for (var r = [], i = 0, o = e; i < o.length; i++) {
                            var s = o[i],
                                a = s.maybeDocument.key;
                            this.docs = this.docs.insert(a, s), this.newDocumentChanges = this.newDocumentChanges.add(a), r.push(this.indexManager.addToCollectionParentIndex(t, a.path.popLast()))
                        }
                        return this.size += n, qo.waitFor(r)
                    }, t.prototype.removeEntry = function(t, e) {
                        var n = this.docs.get(e);
                        return n ? (this.docs = this.docs.remove(e), this.size -= n.size, qo.resolve(n.size)) : qo.resolve(0)
                    }, t.prototype.getEntry = function(t, e) {
                        var n = this.docs.get(e);
                        return qo.resolve(n ? n.maybeDocument : null)
                    }, t.prototype.getSizedEntry = function(t, e) {
                        return qo.resolve(this.docs.get(e))
                    }, t.prototype.getEntries = function(t, e) {
                        var n = this,
                            r = _i();
                        return e.forEach(function(t) {
                            var e = n.docs.get(t);
                            r = r.insert(t, e ? e.maybeDocument : null)
                        }), qo.resolve(r)
                    }, t.prototype.getSizedEntries = function(t, e) {
                        var n = this,
                            r = _i(),
                            i = new wr(mr.comparator);
                        return e.forEach(function(t) {
                            var e = n.docs.get(t);
                            r = r.insert(t, e ? e.maybeDocument : null), i = i.insert(t, e ? e.size : 0)
                        }), qo.resolve({
                            maybeDocuments: r,
                            sizeMap: i
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function(t, e) {
                        vn(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                        for (var n = Pi(), r = new mr(e.path.child("")), i = this.docs.getIteratorFrom(r); i.hasNext();) {
                            var o = i.getNext(),
                                s = o.key,
                                a = o.value.maybeDocument;
                            if (!e.path.isPrefixOf(s.path)) break;
                            a instanceof gr && e.matches(a) && (n = n.insert(a.key, a))
                        }
                        return qo.resolve(n)
                    }, t.prototype.forEachDocumentKey = function(t, e) {
                        return qo.forEach(this.docs, function(t) {
                            return e(t)
                        })
                    }, t.prototype.getNewDocumentChanges = function(t) {
                        var r = this,
                            i = Mi();
                        return this.newDocumentChanges.forEach(function(t) {
                            var e = r.docs.get(t),
                                n = e ? e.maybeDocument : new vr(t, oi.forDeletedDoc());
                            i = i.insert(t, n)
                        }), this.newDocumentChanges = Fi(), qo.resolve(i)
                    }, t.prototype.newChangeBuffer = function() {
                        return new ha(this.sizer, this)
                    }, t.prototype.getSize = function(t) {
                        return qo.resolve(this.size)
                    }, t
                }(),
                ha = function(r) {
                    function t(t, e) {
                        var n = r.call(this) || this;
                        return n.sizer = t, n.documentCache = e, n
                    }
                    return a(t, r), t.prototype.applyChanges = function(t) {
                        var i = this,
                            e = this.assertChanges(),
                            o = 0,
                            s = [];
                        return e.forEach(function(t, e) {
                            var n = i.documentSizes.get(t);
                            vn(void 0 !== n, "Attempting to change document " + t.toString() + " without having read it first");
                            var r = i.sizer(e);
                            o += r - n, s.push({
                                maybeDocument: e,
                                size: r
                            })
                        }), this.documentCache.addEntries(t, s, o)
                    }, t.prototype.getFromCache = function(t, e) {
                        return this.documentCache.getSizedEntry(t, e)
                    }, t.prototype.getAllFromCache = function(t, e) {
                        return this.documentCache.getSizedEntries(t, e)
                    }, t
                }(ss),
                la = function() {
                    function r(t, e) {
                        var n = this;
                        this.clientId = t, this.mutationQueues = {}, this.listenSequence = new To(0), this._started = !1, this._started = !0, this.referenceDelegate = e(this), this.queryCache = new sa(this);
                        this.indexManager = new ms, this.remoteDocumentCache = new ca(this.indexManager, function(t) {
                            return n.referenceDelegate.documentSize(t)
                        })
                    }
                    return r.createLruPersistence = function(t, e, n) {
                        return new r(t, function(t) {
                            return new da(t, new Fs(e), n)
                        })
                    }, r.createEagerPersistence = function(t) {
                        return new r(t, function(t) {
                            return new pa(t)
                        })
                    }, r.prototype.shutdown = function(t) {
                        return this._started = !1, Promise.resolve()
                    }, Object.defineProperty(r.prototype, "started", {
                        get: function() {
                            return this._started
                        },
                        enumerable: !0,
                        configurable: !0
                    }), r.prototype.getActiveClients = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                return [2, [this.clientId]]
                            })
                        })
                    }, r.prototype.setPrimaryStateListener = function(t) {
                        return t(!0)
                    }, r.prototype.setNetworkEnabled = function(t) {}, r.prototype.getIndexManager = function() {
                        return this.indexManager
                    }, r.prototype.getMutationQueue = function(t) {
                        var e = this.mutationQueues[t.toKey()];
                        return e || (e = new oa(this.indexManager, this.referenceDelegate), this.mutationQueues[t.toKey()] = e), e
                    }, r.prototype.getQueryCache = function() {
                        return this.queryCache
                    }, r.prototype.getRemoteDocumentCache = function() {
                        return this.remoteDocumentCache
                    }, r.prototype.runTransaction = function(t, e, n) {
                        var r = this;
                        dn("MemoryPersistence", "Starting transaction:", t);
                        var i = new fa(this.listenSequence.next());
                        return this.referenceDelegate.onTransactionStarted(), n(i).next(function(t) {
                            return r.referenceDelegate.onTransactionCommitted(i).next(function() {
                                return t
                            })
                        }).toPromise()
                    }, r.prototype.mutationQueuesContainKey = function(e, n) {
                        return qo.or((t = this.mutationQueues, r = [], Nn(t, function(t, e) {
                            return r.push(e)
                        }), r).map(function(t) {
                            return function() {
                                return t.containsKey(e, n)
                            }
                        }));
                        var t, r
                    }, r
                }(),
                fa = function(t) {
                    this.currentSequenceNumber = t
                },
                pa = function() {
                    function t(t) {
                        this.persistence = t
                    }
                    return t.prototype.setInMemoryPins = function(t) {
                        this.inMemoryPins = t
                    }, t.prototype.addReference = function(t, e) {
                        return this.orphanedDocuments.delete(e), qo.resolve()
                    }, t.prototype.removeReference = function(t, e) {
                        return this.orphanedDocuments.add(e), qo.resolve()
                    }, t.prototype.removeMutationReference = function(t, e) {
                        return this.orphanedDocuments.add(e), qo.resolve()
                    }, t.prototype.removeTarget = function(t, e) {
                        var n = this,
                            r = this.persistence.getQueryCache();
                        return r.getMatchingKeysForTargetId(t, e.targetId).next(function(t) {
                            t.forEach(function(t) {
                                return n.orphanedDocuments.add(t)
                            })
                        }).next(function() {
                            return r.removeQueryData(t, e)
                        })
                    }, t.prototype.onTransactionStarted = function() {
                        this.orphanedDocuments = new Set
                    }, t.prototype.onTransactionCommitted = function(n) {
                        var t = this,
                            r = this.persistence.getRemoteDocumentCache();
                        return qo.forEach(this.orphanedDocuments, function(e) {
                            return t.isReferenced(n, e).next(function(t) {
                                return t ? qo.resolve() : r.removeEntry(n, e).next(function() {})
                            })
                        })
                    }, t.prototype.updateLimboDocument = function(t, e) {
                        var n = this;
                        return this.isReferenced(t, e).next(function(t) {
                            t ? n.orphanedDocuments.delete(e) : n.orphanedDocuments.add(e)
                        })
                    }, t.prototype.documentSize = function(t) {
                        return 0
                    }, t.prototype.isReferenced = function(t, e) {
                        var n = this;
                        return qo.or([function() {
                            return n.persistence.getQueryCache().containsKey(t, e)
                        }, function() {
                            return n.persistence.mutationQueuesContainKey(t, e)
                        }, function() {
                            return qo.resolve(n.inMemoryPins.containsKey(e))
                        }])
                    }, t
                }(),
                da = function() {
                    function t(t, e, n) {
                        this.persistence = t, this.serializer = e, this.orphanedSequenceNumbers = new os(function(t) {
                            return Mo(t.path)
                        }), this.garbageCollector = new js(this, n)
                    }
                    return t.prototype.onTransactionStarted = function() {}, t.prototype.onTransactionCommitted = function(t) {
                        return qo.resolve()
                    }, t.prototype.forEachTarget = function(t, e) {
                        return this.persistence.getQueryCache().forEachTarget(t, e)
                    }, t.prototype.getSequenceNumberCount = function(t) {
                        var n = this.orphanedDocumentCount(t);
                        return this.persistence.getQueryCache().getTargetCount(t).next(function(e) {
                            return n.next(function(t) {
                                return e + t
                            })
                        })
                    }, t.prototype.orphanedDocumentCount = function(t) {
                        var e = 0;
                        return this.forEachOrphanedDocumentSequenceNumber(t, function(t) {
                            e++
                        }).next(function() {
                            return e
                        })
                    }, t.prototype.forEachOrphanedDocumentSequenceNumber = function(n, r) {
                        var i = this;
                        return qo.forEach(this.orphanedSequenceNumbers, function(t, e) {
                            return i.isPinned(n, t, e).next(function(t) {
                                return t ? qo.resolve() : r(e)
                            })
                        })
                    }, t.prototype.setInMemoryPins = function(t) {
                        this.inMemoryPins = t
                    }, t.prototype.removeTargets = function(t, e, n) {
                        return this.persistence.getQueryCache().removeTargets(t, e, n)
                    }, t.prototype.removeOrphanedDocuments = function(n, t) {
                        var r = this,
                            i = 0,
                            o = this.persistence.getRemoteDocumentCache();
                        return o.forEachDocumentKey(n, function(e) {
                            return r.isPinned(n, e, t).next(function(t) {
                                return t ? qo.resolve() : (i++, o.removeEntry(n, e).next())
                            })
                        }).next(function() {
                            return i
                        })
                    }, t.prototype.removeMutationReference = function(t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), qo.resolve()
                    }, t.prototype.removeTarget = function(t, e) {
                        var n = e.copy({
                            sequenceNumber: t.currentSequenceNumber
                        });
                        return this.persistence.getQueryCache().updateQueryData(t, n)
                    }, t.prototype.addReference = function(t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), qo.resolve()
                    }, t.prototype.removeReference = function(t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), qo.resolve()
                    }, t.prototype.updateLimboDocument = function(t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), qo.resolve()
                    }, t.prototype.documentSize = function(t) {
                        var e, n = this.serializer.toDbRemoteDocument(t);
                        if (n.document) e = n.document;
                        else if (n.unknownDocument) e = n.unknownDocument;
                        else {
                            if (!n.noDocument) throw gn("Unknown remote document type");
                            e = n.noDocument
                        }
                        return JSON.stringify(e).length
                    }, t.prototype.isPinned = function(t, e, n) {
                        var r = this;
                        return qo.or([function() {
                            return r.persistence.mutationQueuesContainKey(t, e)
                        }, function() {
                            return qo.resolve(r.inMemoryPins.containsKey(e))
                        }, function() {
                            return r.persistence.getQueryCache().containsKey(t, e)
                        }, function() {
                            var t = r.orphanedSequenceNumbers.get(e);
                            return qo.resolve(void 0 !== t && n < t)
                        }])
                    }, t.prototype.getCacheSize = function(t) {
                        return this.persistence.getRemoteDocumentCache().getSize(t)
                    }, t
                }(),
                ma = function() {
                    function t(t, e, n, r, i) {
                        this.queue = t, this.timerId = e, this.initialDelayMs = n, this.backoffFactor = r, this.maxDelayMs = i, this.timerPromise = null, this.lastAttemptTime = Date.now(), this.reset()
                    }
                    return t.prototype.reset = function() {
                        this.currentBaseMs = 0
                    }, t.prototype.resetToMax = function() {
                        this.currentBaseMs = this.maxDelayMs
                    }, t.prototype.backoffAndRun = function(t) {
                        var e = this;
                        this.cancel();
                        var n = Math.floor(this.currentBaseMs + this.jitterDelayMs()),
                            r = Math.max(0, Date.now() - this.lastAttemptTime),
                            i = Math.max(0, n - r);
                        0 < this.currentBaseMs && dn("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.currentBaseMs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, i, function() {
                            return e.lastAttemptTime = Date.now(), t()
                        }), this.currentBaseMs *= this.backoffFactor, this.currentBaseMs < this.initialDelayMs && (this.currentBaseMs = this.initialDelayMs), this.currentBaseMs > this.maxDelayMs && (this.currentBaseMs = this.maxDelayMs)
                    }, t.prototype.cancel = function() {
                        null !== this.timerPromise && (this.timerPromise.cancel(), this.timerPromise = null)
                    }, t.prototype.jitterDelayMs = function() {
                        return (Math.random() - .5) * this.currentBaseMs
                    }, t
                }(),
                ya = "PersistentStream";
            (ua = aa || (aa = {}))[ua.Initial = 0] = "Initial", ua[ua.Starting = 1] = "Starting", ua[ua.Open = 2] = "Open", ua[ua.Error = 3] = "Error", ua[ua.Backoff = 4] = "Backoff";
            var ga, va, ba, wa, Ea = function() {
                    function t(t, e, n, r, i, o) {
                        this.queue = t, this.idleTimerId = n, this.connection = r, this.credentialsProvider = i, this.listener = o, this.state = aa.Initial, this.closeCount = 0, this.idleTimer = null, this.stream = null, this.backoff = new ma(t, e, 1e3, 1.5, 6e4)
                    }
                    return t.prototype.isStarted = function() {
                        return this.state === aa.Starting || this.state === aa.Open || this.state === aa.Backoff
                    }, t.prototype.isOpen = function() {
                        return this.state === aa.Open
                    }, t.prototype.start = function() {
                        this.state !== aa.Error ? (vn(this.state === aa.Initial, "Already started"), this.auth()) : this.performBackoff()
                    }, t.prototype.stop = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.isStarted() ? [4, this.close(aa.Initial)] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.inhibitBackoff = function() {
                        vn(!this.isStarted(), "Can only inhibit backoff in a stopped state"), this.state = aa.Initial, this.backoff.reset()
                    }, t.prototype.markIdle = function() {
                        var t = this;
                        this.isOpen() && null === this.idleTimer && (this.idleTimer = this.queue.enqueueAfterDelay(this.idleTimerId, 6e4, function() {
                            return t.handleIdleCloseTimer()
                        }))
                    }, t.prototype.sendRequest = function(t) {
                        this.cancelIdleCheck(), this.stream.send(t)
                    }, t.prototype.handleIdleCloseTimer = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                return this.isOpen() ? [2, this.close(aa.Initial)] : [2]
                            })
                        })
                    }, t.prototype.cancelIdleCheck = function() {
                        this.idleTimer && (this.idleTimer.cancel(), this.idleTimer = null)
                    }, t.prototype.close = function(e, n) {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return vn(this.isStarted(), "Only started streams should be closed."), vn(e === aa.Error || jr(n), "Can't provide an error when not in an error state."), this.cancelIdleCheck(), this.backoff.cancel(), this.closeCount++, e !== aa.Error ? this.backoff.reset() : n && n.code === En.RESOURCE_EXHAUSTED ? (mn(n.toString()), mn("Using maximum backoff delay to prevent overloading the backend."), this.backoff.resetToMax()) : n && n.code === En.UNAUTHENTICATED && this.credentialsProvider.invalidateToken(), null !== this.stream && (this.tearDown(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.onClose(n)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.tearDown = function() {}, t.prototype.auth = function() {
                        var n = this;
                        vn(this.state === aa.Initial, "Must be in initial state to auth"), this.state = aa.Starting;
                        var t = this.getCloseGuardedDispatcher(this.closeCount),
                            e = this.closeCount;
                        this.credentialsProvider.getToken().then(function(t) {
                            n.closeCount === e && n.startStream(t)
                        }, function(e) {
                            t(function() {
                                var t = new Sn(En.UNKNOWN, "Fetching auth token failed: " + e.message);
                                return n.handleStreamClose(t)
                            })
                        })
                    }, t.prototype.startStream = function(t) {
                        var e = this;
                        vn(this.state === aa.Starting, "Trying to start stream in a non-starting state");
                        var n = this.getCloseGuardedDispatcher(this.closeCount);
                        this.stream = this.startRpc(t), this.stream.onOpen(function() {
                            n(function() {
                                return vn(e.state === aa.Starting, "Expected stream to be in state Starting, but was " + e.state), e.state = aa.Open, e.listener.onOpen()
                            })
                        }), this.stream.onClose(function(t) {
                            n(function() {
                                return e.handleStreamClose(t)
                            })
                        }), this.stream.onMessage(function(t) {
                            n(function() {
                                return e.onMessage(t)
                            })
                        })
                    }, t.prototype.performBackoff = function() {
                        var t = this;
                        vn(this.state === aa.Error, "Should only perform backoff when in Error state"), this.state = aa.Backoff, this.backoff.backoffAndRun(function() {
                            return h(t, void 0, void 0, function() {
                                return p(this, function(t) {
                                    return vn(this.state === aa.Backoff, "Backoff elapsed but state is now: " + this.state), this.state = aa.Initial, this.start(), vn(this.isStarted(), "PersistentStream should have started"), [2]
                                })
                            })
                        })
                    }, t.prototype.handleStreamClose = function(t) {
                        return vn(this.isStarted(), "Can't handle server close on non-started stream"), dn(ya, "close with error: " + t), this.stream = null, this.close(aa.Error, t)
                    }, t.prototype.getCloseGuardedDispatcher = function(e) {
                        var n = this;
                        return function(t) {
                            n.queue.enqueueAndForget(function() {
                                return n.closeCount === e ? t() : (dn(ya, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                            })
                        }
                    }, t
                }(),
                Sa = function(s) {
                    function t(t, e, n, r, i) {
                        var o = s.call(this, t, Eo.ListenStreamConnectionBackoff, Eo.ListenStreamIdle, e, n, i) || this;
                        return o.serializer = r, o
                    }
                    return a(t, s), t.prototype.startRpc = function(t) {
                        return this.connection.openStream("Listen", t)
                    }, t.prototype.onMessage = function(t) {
                        this.backoff.reset();
                        var e = this.serializer.fromWatchChange(t),
                            n = this.serializer.versionFromListenResponse(t);
                        return this.listener.onWatchChange(e, n)
                    }, t.prototype.watch = function(t) {
                        var e = {};
                        e.database = this.serializer.encodedDatabaseId, e.addTarget = this.serializer.toTarget(t);
                        var n = this.serializer.toListenRequestLabels(t);
                        n && (e.labels = n), this.sendRequest(e)
                    }, t.prototype.unwatch = function(t) {
                        var e = {};
                        e.database = this.serializer.encodedDatabaseId, e.removeTarget = t, this.sendRequest(e)
                    }, t
                }(Ea),
                Ta = function(s) {
                    function t(t, e, n, r, i) {
                        var o = s.call(this, t, Eo.WriteStreamConnectionBackoff, Eo.WriteStreamIdle, e, n, i) || this;
                        return o.serializer = r, o.handshakeComplete_ = !1, o
                    }
                    return a(t, s), Object.defineProperty(t.prototype, "handshakeComplete", {
                        get: function() {
                            return this.handshakeComplete_
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.start = function() {
                        this.handshakeComplete_ = !1, s.prototype.start.call(this)
                    }, t.prototype.tearDown = function() {
                        this.handshakeComplete_ && this.writeMutations([])
                    }, t.prototype.startRpc = function(t) {
                        return this.connection.openStream("Write", t)
                    }, t.prototype.onMessage = function(t) {
                        if (vn(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = t.streamToken, this.handshakeComplete_) {
                            this.backoff.reset();
                            var e = this.serializer.fromWriteResults(t.writeResults, t.commitTime),
                                n = this.serializer.fromVersion(t.commitTime);
                            return this.listener.onMutationResult(n, e)
                        }
                        return vn(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), this.handshakeComplete_ = !0, this.listener.onHandshakeComplete()
                    }, t.prototype.writeHandshake = function() {
                        vn(this.isOpen(), "Writing handshake requires an opened stream"), vn(!this.handshakeComplete_, "Handshake already completed");
                        var t = {};
                        t.database = this.serializer.encodedDatabaseId, this.sendRequest(t)
                    }, t.prototype.writeMutations = function(t) {
                        var e = this;
                        vn(this.isOpen(), "Writing mutations requires an opened stream"), vn(this.handshakeComplete_, "Handshake must be complete before writing mutations"), vn(0 < this.lastStreamToken.length, "Trying to write mutation without a token");
                        var n = {
                            streamToken: this.lastStreamToken,
                            writes: t.map(function(t) {
                                return e.serializer.toMutation(t)
                            })
                        };
                        this.sendRequest(n)
                    }, t
                }(Ea),
                Ia = function() {
                    function t(t, e, n, r) {
                        this.queue = t, this.connection = e, this.credentials = n, this.serializer = r
                    }
                    return t.prototype.newPersistentWriteStream = function(t) {
                        return new Ta(this.queue, this.connection, this.credentials, this.serializer, t)
                    }, t.prototype.newPersistentWatchStream = function(t) {
                        return new Sa(this.queue, this.connection, this.credentials, this.serializer, t)
                    }, t.prototype.commit = function(t) {
                        var e = this,
                            n = {
                                database: this.serializer.encodedDatabaseId,
                                writes: t.map(function(t) {
                                    return e.serializer.toMutation(t)
                                })
                            };
                        return this.invokeRPC("Commit", n).then(function(t) {
                            return e.serializer.fromWriteResults(t.writeResults, t.commitTime)
                        })
                    }, t.prototype.lookup = function(e) {
                        var i = this,
                            t = {
                                database: this.serializer.encodedDatabaseId,
                                documents: e.map(function(t) {
                                    return i.serializer.toName(t)
                                })
                            };
                        return this.invokeStreamingRPC("BatchGetDocuments", t).then(function(t) {
                            var n = Mi();
                            t.forEach(function(t) {
                                var e = i.serializer.fromMaybeDocument(t);
                                n = n.insert(e.key, e)
                            });
                            var r = [];
                            return e.forEach(function(t) {
                                var e = n.get(t);
                                vn(!!e, "Missing entity in write response for " + t), r.push(e)
                            }), r
                        })
                    }, t.prototype.invokeRPC = function(e, n) {
                        var r = this;
                        return this.credentials.getToken().then(function(t) {
                            return r.connection.invokeRPC(e, n, t)
                        }).catch(function(t) {
                            throw t.code === En.UNAUTHENTICATED && r.credentials.invalidateToken(), t
                        })
                    }, t.prototype.invokeStreamingRPC = function(e, n) {
                        var r = this;
                        return this.credentials.getToken().then(function(t) {
                            return r.connection.invokeStreamingRPC(e, n, t)
                        }).catch(function(t) {
                            throw t.code === En.UNAUTHENTICATED && r.credentials.invalidateToken(), t
                        })
                    }, t
                }(),
                Ca = function() {
                    function t(t) {
                        this.datastore = t, this.readVersions = xi(), this.mutations = [], this.committed = !1
                    }
                    return t.prototype.recordVersion = function(t) {
                        var e;
                        if (t instanceof gr) e = t.version;
                        else {
                            if (!(t instanceof vr)) throw gn("Document in a transaction was a " + t.constructor.name);
                            e = oi.forDeletedDoc()
                        }
                        var n = this.readVersions.get(t.key);
                        if (null !== n) {
                            if (!e.isEqual(n)) throw new Sn(En.ABORTED, "Document version changed between two reads.")
                        } else this.readVersions = this.readVersions.insert(t.key, e)
                    }, t.prototype.lookup = function(t) {
                        var e = this;
                        return this.committed ? Promise.reject("Transaction has already completed.") : 0 < this.mutations.length ? Promise.reject("Transactions lookups are invalid after writes.") : this.datastore.lookup(t).then(function(t) {
                            return t.forEach(function(t) {
                                t instanceof vr || t instanceof gr ? e.recordVersion(t) : gn("Document in a transaction was a " + t.constructor.name)
                            }), t
                        })
                    }, t.prototype.write = function(t) {
                        if (this.committed) throw new Sn(En.FAILED_PRECONDITION, "Transaction has already completed.");
                        this.mutations = this.mutations.concat(t)
                    }, t.prototype.precondition = function(t) {
                        var e = this.readVersions.get(t);
                        return e ? di.updateTime(e) : di.NONE
                    }, t.prototype.preconditionForUpdate = function(t) {
                        var e = this.readVersions.get(t);
                        if (e && e.isEqual(oi.forDeletedDoc())) throw new Sn(En.FAILED_PRECONDITION, "Can't update a document that doesn't exist.");
                        return e ? di.updateTime(e) : di.exists(!0)
                    }, t.prototype.set = function(t, e) {
                        this.write(e.toMutations(t, this.precondition(t)))
                    }, t.prototype.update = function(t, e) {
                        this.write(e.toMutations(t, this.preconditionForUpdate(t)))
                    }, t.prototype.delete = function(t) {
                        this.write([new bi(t, this.precondition(t))]), this.readVersions = this.readVersions.insert(t, oi.forDeletedDoc())
                    }, t.prototype.commit = function() {
                        var t = this,
                            e = this.readVersions;
                        return this.mutations.forEach(function(t) {
                            e = e.remove(t.key)
                        }), e.isEmpty() ? this.datastore.commit(this.mutations).then(function() {
                            t.committed = !0
                        }) : Promise.reject(Error("Every document read in a transaction must also be written."))
                    }, t
                }();
            (va = ga || (ga = {}))[va.Unknown = 0] = "Unknown", va[va.Online = 1] = "Online", va[va.Offline = 2] = "Offline", (wa = ba || (ba = {}))[wa.RemoteStore = 0] = "RemoteStore", wa[wa.SharedClientState = 1] = "SharedClientState";
            var Da = function() {
                    function t(t, e) {
                        this.asyncQueue = t, this.onlineStateHandler = e, this.state = ga.Unknown, this.watchStreamFailures = 0, this.onlineStateTimer = null, this.shouldWarnClientIsOffline = !0
                    }
                    return t.prototype.handleWatchStreamStart = function() {
                        var t = this;
                        0 === this.watchStreamFailures && (this.setAndBroadcast(ga.Unknown), vn(null === this.onlineStateTimer, "onlineStateTimer shouldn't be started yet"), this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay(Eo.OnlineStateTimeout, 1e4, function() {
                            return t.onlineStateTimer = null, vn(t.state === ga.Unknown, "Timer should be canceled if we transitioned to a different state."), t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."), t.setAndBroadcast(ga.Offline), Promise.resolve()
                        }))
                    }, t.prototype.handleWatchStreamFailure = function(t) {
                        this.state === ga.Online ? (this.setAndBroadcast(ga.Unknown), vn(0 === this.watchStreamFailures, "watchStreamFailures must be 0"), vn(null === this.onlineStateTimer, "onlineStateTimer must be null")) : (this.watchStreamFailures++, 1 <= this.watchStreamFailures && (this.clearOnlineStateTimer(), this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: " + t.toString()), this.setAndBroadcast(ga.Offline)))
                    }, t.prototype.set = function(t) {
                        this.clearOnlineStateTimer(), this.watchStreamFailures = 0, t === ga.Online && (this.shouldWarnClientIsOffline = !1), this.setAndBroadcast(t)
                    }, t.prototype.setAndBroadcast = function(t) {
                        t !== this.state && (this.state = t, this.onlineStateHandler(t))
                    }, t.prototype.logClientOfflineWarningIfNecessary = function(t) {
                        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                        this.shouldWarnClientIsOffline ? (mn(e), this.shouldWarnClientIsOffline = !1) : dn("OnlineStateTracker", e)
                    }, t.prototype.clearOnlineStateTimer = function() {
                        null !== this.onlineStateTimer && (this.onlineStateTimer.cancel(), this.onlineStateTimer = null)
                    }, t
                }(),
                Na = "RemoteStore",
                Aa = function() {
                    function t(t, e, n, r) {
                        this.localStore = t, this.datastore = e, this.writePipeline = [], this.listenTargets = {}, this.watchChangeAggregator = null, this.networkEnabled = !1, this.isPrimary = !1, this.onlineStateTracker = new Da(n, r), this.watchStream = this.datastore.newPersistentWatchStream({
                            onOpen: this.onWatchStreamOpen.bind(this),
                            onClose: this.onWatchStreamClose.bind(this),
                            onWatchChange: this.onWatchStreamChange.bind(this)
                        }), this.writeStream = this.datastore.newPersistentWriteStream({
                            onOpen: this.onWriteStreamOpen.bind(this),
                            onClose: this.onWriteStreamClose.bind(this),
                            onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
                            onMutationResult: this.onMutationResult.bind(this)
                        })
                    }
                    return t.prototype.start = function() {
                        return this.enableNetwork()
                    }, t.prototype.enableNetwork = function() {
                        return h(this, void 0, void 0, function() {
                            var e;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.networkEnabled = !0, this.canUseNetwork() ? (e = this.writeStream, [4, this.localStore.getLastStreamToken()]) : [3, 3];
                                    case 1:
                                        return e.lastStreamToken = t.sent(), this.shouldStartWatchStream() ? this.startWatchStream() : this.onlineStateTracker.set(ga.Unknown), [4, this.fillWritePipeline()];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.disableNetwork = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                    case 1:
                                        return t.sent(), this.onlineStateTracker.set(ga.Offline), [2]
                                }
                            })
                        })
                    }, t.prototype.disableNetworkInternal = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.writeStream.stop()];
                                    case 1:
                                        return t.sent(), [4, this.watchStream.stop()];
                                    case 2:
                                        return t.sent(), 0 < this.writePipeline.length && (dn(Na, "Stopping write stream with " + this.writePipeline.length + " pending writes"), this.writePipeline = []), this.cleanUpWatchStreamState(), [2]
                                }
                            })
                        })
                    }, t.prototype.shutdown = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return dn(Na, "RemoteStore shutting down."), this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                    case 1:
                                        return t.sent(), this.onlineStateTracker.set(ga.Unknown), [2]
                                }
                            })
                        })
                    }, t.prototype.listen = function(t) {
                        vn(!In(this.listenTargets, t.targetId), "listen called with duplicate targetId!"), this.listenTargets[t.targetId] = t, this.shouldStartWatchStream() ? this.startWatchStream() : this.watchStream.isOpen() && this.sendWatchRequest(t)
                    }, t.prototype.unlisten = function(t) {
                        vn(In(this.listenTargets, t), "unlisten called without assigned target ID!"), delete this.listenTargets[t], this.watchStream.isOpen() && this.sendUnwatchRequest(t), An(this.listenTargets) && (this.watchStream.isOpen() ? this.watchStream.markIdle() : this.canUseNetwork() && this.onlineStateTracker.set(ga.Unknown))
                    }, t.prototype.getQueryDataForTarget = function(t) {
                        return this.listenTargets[t] || null
                    }, t.prototype.getRemoteKeysForTarget = function(t) {
                        return this.syncEngine.getRemoteKeysForTarget(t)
                    }, t.prototype.sendWatchRequest = function(t) {
                        this.watchChangeAggregator.recordPendingTargetRequest(t.targetId), this.watchStream.watch(t)
                    }, t.prototype.sendUnwatchRequest = function(t) {
                        this.watchChangeAggregator.recordPendingTargetRequest(t), this.watchStream.unwatch(t)
                    }, t.prototype.startWatchStream = function() {
                        vn(this.shouldStartWatchStream(), "startWatchStream() called when shouldStartWatchStream() is false."), this.watchChangeAggregator = new no(this), this.watchStream.start(), this.onlineStateTracker.handleWatchStreamStart()
                    }, t.prototype.shouldStartWatchStream = function() {
                        return this.canUseNetwork() && !this.watchStream.isStarted() && !An(this.listenTargets)
                    }, t.prototype.canUseNetwork = function() {
                        return this.isPrimary && this.networkEnabled
                    }, t.prototype.cleanUpWatchStreamState = function() {
                        this.watchChangeAggregator = null
                    }, t.prototype.onWatchStreamOpen = function() {
                        return h(this, void 0, void 0, function() {
                            var n = this;
                            return p(this, function(t) {
                                return Dn(this.listenTargets, function(t, e) {
                                    n.sendWatchRequest(e)
                                }), [2]
                            })
                        })
                    }, t.prototype.onWatchStreamClose = function(e) {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                return void 0 === e && vn(!this.shouldStartWatchStream(), "Watch stream was stopped gracefully while still needed."), this.cleanUpWatchStreamState(), this.shouldStartWatchStream() ? (this.onlineStateTracker.handleWatchStreamFailure(e), this.startWatchStream()) : this.onlineStateTracker.set(ga.Unknown), [2]
                            })
                        })
                    }, t.prototype.onWatchStreamChange = function(n, r) {
                        return h(this, void 0, void 0, function() {
                            var e;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.onlineStateTracker.set(ga.Online), n instanceof to && n.state === Gi.Removed && n.cause ? [2, this.handleTargetError(n)] : (n instanceof $i ? this.watchChangeAggregator.handleDocumentChange(n) : n instanceof Zi ? this.watchChangeAggregator.handleExistenceFilter(n) : (vn(n instanceof to, "Expected watchChange to be an instance of WatchTargetChange"), this.watchChangeAggregator.handleTargetChange(n)), r.isEqual(oi.MIN) ? [3, 3] : [4, this.localStore.getLastRemoteSnapshotVersion()]);
                                    case 1:
                                        return e = t.sent(), 0 <= r.compareTo(e) ? [4, this.raiseWatchSnapshot(r)] : [3, 3];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.raiseWatchSnapshot = function(r) {
                        var i = this;
                        vn(!r.isEqual(oi.MIN), "Can't raise event for unknown SnapshotVersion");
                        var t = this.watchChangeAggregator.createRemoteEvent(r);
                        return Dn(t.targetChanges, function(t, e) {
                            if (0 < e.resumeToken.length) {
                                var n = i.listenTargets[t];
                                n && (i.listenTargets[t] = n.copy({
                                    resumeToken: e.resumeToken,
                                    snapshotVersion: r
                                }))
                            }
                        }), t.targetMismatches.forEach(function(t) {
                            var e = i.listenTargets[t];
                            if (e) {
                                i.listenTargets[t] = e.copy({
                                    resumeToken: wn()
                                }), i.sendUnwatchRequest(t);
                                var n = new ui(e.query, t, Gr.ExistenceFilterMismatch, e.sequenceNumber);
                                i.sendWatchRequest(n)
                            }
                        }), this.syncEngine.applyRemoteEvent(t)
                    }, t.prototype.handleTargetError = function(t) {
                        var n = this;
                        vn(!!t.cause, "Handling target error without a cause");
                        var r = t.cause,
                            i = Promise.resolve();
                        return t.targetIds.forEach(function(e) {
                            i = i.then(function() {
                                return h(n, void 0, void 0, function() {
                                    return p(this, function(t) {
                                        return In(this.listenTargets, e) ? (delete this.listenTargets[e], this.watchChangeAggregator.removeTarget(e), [2, this.syncEngine.rejectListen(e, r)]) : [2]
                                    })
                                })
                            })
                        }), i
                    }, t.prototype.fillWritePipeline = function() {
                        return h(this, void 0, void 0, function() {
                            var e, n;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.canAddToWritePipeline() ? (e = 0 < this.writePipeline.length ? this.writePipeline[this.writePipeline.length - 1].batchId : -1, [4, this.localStore.nextMutationBatch(e)]) : [3, 4];
                                    case 1:
                                        return null !== (n = t.sent()) ? [3, 2] : (0 === this.writePipeline.length && this.writeStream.markIdle(), [3, 4]);
                                    case 2:
                                        return this.addToWritePipeline(n), [4, this.fillWritePipeline()];
                                    case 3:
                                        t.sent(), t.label = 4;
                                    case 4:
                                        return this.shouldStartWriteStream() && this.startWriteStream(), [2]
                                }
                            })
                        })
                    }, t.prototype.canAddToWritePipeline = function() {
                        return this.canUseNetwork() && this.writePipeline.length < 10
                    }, t.prototype.outstandingWrites = function() {
                        return this.writePipeline.length
                    }, t.prototype.addToWritePipeline = function(t) {
                        vn(this.canAddToWritePipeline(), "addToWritePipeline called when pipeline is full"), this.writePipeline.push(t), this.writeStream.isOpen() && this.writeStream.handshakeComplete && this.writeStream.writeMutations(t.mutations)
                    }, t.prototype.shouldStartWriteStream = function() {
                        return this.canUseNetwork() && !this.writeStream.isStarted() && 0 < this.writePipeline.length
                    }, t.prototype.startWriteStream = function() {
                        vn(this.shouldStartWriteStream(), "startWriteStream() called when shouldStartWriteStream() is false."), this.writeStream.start()
                    }, t.prototype.onWriteStreamOpen = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                return this.writeStream.writeHandshake(), [2]
                            })
                        })
                    }, t.prototype.onWriteHandshakeComplete = function() {
                        var r = this;
                        return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function() {
                            for (var t = 0, e = r.writePipeline; t < e.length; t++) {
                                var n = e[t];
                                r.writeStream.writeMutations(n.mutations)
                            }
                        }).catch(Xs)
                    }, t.prototype.onMutationResult = function(t, e) {
                        var n = this;
                        vn(0 < this.writePipeline.length, "Got result for empty write pipeline");
                        var r = this.writePipeline.shift(),
                            i = xo.from(r, t, e, this.writeStream.lastStreamToken);
                        return this.syncEngine.applySuccessfulWrite(i).then(function() {
                            return n.fillWritePipeline()
                        })
                    }, t.prototype.onWriteStreamClose = function(n) {
                        return h(this, void 0, void 0, function() {
                            var e = this;
                            return p(this, function(t) {
                                return void 0 === n && vn(!this.shouldStartWriteStream(), "Write stream was stopped gracefully while still needed."), n && 0 < this.writePipeline.length ? (void 0, [2, (this.writeStream.handshakeComplete ? this.handleWriteError(n) : this.handleHandshakeError(n)).then(function() {
                                    e.shouldStartWriteStream() && e.startWriteStream()
                                })]) : [2]
                            })
                        })
                    }, t.prototype.handleHandshakeError = function(e) {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                return Ai(e.code) ? (dn(Na, "RemoteStore error before completed handshake; resetting stream token: ", this.writeStream.lastStreamToken), this.writeStream.lastStreamToken = wn(), [2, this.localStore.setLastStreamToken(wn()).catch(Xs)]) : [2]
                            })
                        })
                    }, t.prototype.handleWriteError = function(i) {
                        return h(this, void 0, void 0, function() {
                            var n, r = this;
                            return p(this, function(t) {
                                return Ai(e = i.code) && e !== En.ABORTED ? (n = this.writePipeline.shift(), this.writeStream.inhibitBackoff(), [2, this.syncEngine.rejectFailedWrite(n.batchId, i).then(function() {
                                    return r.fillWritePipeline()
                                })]) : [2];
                                var e
                            })
                        })
                    }, t.prototype.createTransaction = function() {
                        return new Ca(this.datastore)
                    }, t.prototype.handleCredentialChange = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.canUseNetwork() ? (dn(Na, "RemoteStore restarting streams for new credential"), this.networkEnabled = !1, [4, this.disableNetworkInternal()]) : [3, 3];
                                    case 1:
                                        return t.sent(), this.onlineStateTracker.set(ga.Unknown), [4, this.enableNetwork()];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.applyPrimaryState = function(e) {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return (this.isPrimary = e) && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                                    case 1:
                                        return t.sent(), [3, 4];
                                    case 2:
                                        return e ? [3, 4] : [4, this.disableNetworkInternal()];
                                    case 3:
                                        t.sent(), this.onlineStateTracker.set(ga.Unknown), t.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(),
                ka = function() {
                    this.listeners = []
                },
                Ra = function() {
                    function t(t) {
                        this.syncEngine = t, this.queries = new os(function(t) {
                            return t.canonicalId()
                        }), this.onlineState = ga.Unknown, this.syncEngine.subscribe(this)
                    }
                    return t.prototype.listen = function(t) {
                        var e = t.query,
                            n = !1,
                            r = this.queries.get(e);
                        return r || (n = !0, r = new ka, this.queries.set(e, r)), r.listeners.push(t), t.applyOnlineStateChange(this.onlineState), r.viewSnap && t.onViewSnapshot(r.viewSnap), n ? this.syncEngine.listen(e).then(function(t) {
                            return r.targetId = t
                        }) : Promise.resolve(r.targetId)
                    }, t.prototype.unlisten = function(o) {
                        return h(this, void 0, void 0, function() {
                            var e, n, r, i;
                            return p(this, function(t) {
                                return e = o.query, n = !1, (r = this.queries.get(e)) && 0 <= (i = r.listeners.indexOf(o)) && (r.listeners.splice(i, 1), n = 0 === r.listeners.length), n ? (this.queries.delete(e), [2, this.syncEngine.unlisten(e)]) : [2]
                            })
                        })
                    }, t.prototype.onWatchChange = function(t) {
                        for (var e = 0, n = t; e < n.length; e++) {
                            var r = n[e],
                                i = r.query,
                                o = this.queries.get(i);
                            if (o) {
                                for (var s = 0, a = o.listeners; s < a.length; s++) {
                                    a[s].onViewSnapshot(r)
                                }
                                o.viewSnap = r
                            }
                        }
                    }, t.prototype.onWatchError = function(t, e) {
                        var n = this.queries.get(t);
                        if (n)
                            for (var r = 0, i = n.listeners; r < i.length; r++) {
                                i[r].onError(e)
                            }
                        this.queries.delete(t)
                    }, t.prototype.onOnlineStateChange = function(i) {
                        this.onlineState = i, this.queries.forEach(function(t, e) {
                            for (var n = 0, r = e.listeners; n < r.length; n++) {
                                r[n].applyOnlineStateChange(i)
                            }
                        })
                    }, t
                }(),
                Ma = function() {
                    function t(t, e, n) {
                        this.query = t, this.queryObserver = e, this.raisedInitialEvent = !1, this.onlineState = ga.Unknown, this.options = n || {}
                    }
                    return t.prototype.onViewSnapshot = function(t) {
                        if (vn(0 < t.docChanges.length || t.syncStateChanged, "We got a new snapshot with no changes?"), !this.options.includeMetadataChanges) {
                            for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                                var i = r[n];
                                i.type !== Ui.Metadata && e.push(i)
                            }
                            t = new Yi(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0)
                        }
                        this.raisedInitialEvent ? this.shouldRaiseEvent(t) && this.queryObserver.next(t) : this.shouldRaiseInitialEvent(t, this.onlineState) && this.raiseInitialEvent(t), this.snap = t
                    }, t.prototype.onError = function(t) {
                        this.queryObserver.error(t)
                    }, t.prototype.applyOnlineStateChange = function(t) {
                        this.onlineState = t, this.snap && !this.raisedInitialEvent && this.shouldRaiseInitialEvent(this.snap, t) && this.raiseInitialEvent(this.snap)
                    }, t.prototype.shouldRaiseInitialEvent = function(t, e) {
                        if (vn(!this.raisedInitialEvent, "Determining whether to raise first event but already had first event"), !t.fromCache) return !0;
                        var n = e !== ga.Offline;
                        return this.options.waitForSyncWhenOnline && n ? (vn(t.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !t.docs.isEmpty() || e === ga.Offline
                    }, t.prototype.shouldRaiseEvent = function(t) {
                        if (0 < t.docChanges.length) return !0;
                        var e = this.snap && this.snap.hasPendingWrites !== t.hasPendingWrites;
                        return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges
                    }, t.prototype.raiseInitialEvent = function(t) {
                        vn(!this.raisedInitialEvent, "Trying to raise initial events for second time"), t = Yi.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.raisedInitialEvent = !0, this.queryObserver.next(t)
                    }, t
                }(),
                _a = function() {
                    function a(t, e, n) {
                        this.targetId = t, this.addedKeys = e, this.removedKeys = n
                    }
                    return a.fromSnapshot = function(t, e) {
                        for (var n = Fi(), r = Fi(), i = 0, o = e.docChanges; i < o.length; i++) {
                            var s = o[i];
                            switch (s.type) {
                                case Ui.Added:
                                    n = n.add(s.doc.key);
                                    break;
                                case Ui.Removed:
                                    r = r.add(s.doc.key)
                            }
                        }
                        return new a(t, n, r)
                    }, a
                }(),
                Oa = function(t) {
                    this.key = t
                },
                Pa = function(t) {
                    this.key = t
                },
                La = function() {
                    function t(t, e) {
                        this.query = t, this._syncedDocuments = e, this.syncState = null, this.current = !1, this.limboDocuments = Fi(), this.mutatedKeys = Fi(), this.documentSet = new Wi(t.docComparator.bind(t))
                    }
                    return Object.defineProperty(t.prototype, "syncedDocuments", {
                        get: function() {
                            return this._syncedDocuments
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.computeDocChanges = function(t, e) {
                        var a = this,
                            u = e ? e.changeSet : new Hi,
                            c = e ? e.documentSet : this.documentSet,
                            h = e ? e.mutatedKeys : this.mutatedKeys,
                            l = c,
                            f = !1,
                            p = this.query.hasLimit() && c.size === this.query.limit ? c.last() : null;
                        if (t.inorderTraversal(function(t, e) {
                                var n = c.get(t),
                                    r = e instanceof gr ? e : null;
                                r && (vn(t.isEqual(r.key), "Mismatching keys found in document changes: " + t + " != " + r.key), r = a.query.matches(r) ? r : null);
                                var i = !!n && a.mutatedKeys.has(n.key),
                                    o = !!r && (r.hasLocalMutations || a.mutatedKeys.has(r.key) && r.hasCommittedMutations),
                                    s = !1;
                                n && r ? n.data.isEqual(r.data) ? i !== o && (u.track({
                                    type: Ui.Metadata,
                                    doc: r
                                }), s = !0) : a.shouldWaitForSyncedDocument(n, r) || (u.track({
                                    type: Ui.Modified,
                                    doc: r
                                }), s = !0, p && 0 < a.query.docComparator(r, p) && (f = !0)) : !n && r ? (u.track({
                                    type: Ui.Added,
                                    doc: r
                                }), s = !0) : n && !r && (u.track({
                                    type: Ui.Removed,
                                    doc: n
                                }), s = !0, p && (f = !0));
                                s && (h = r ? (l = l.add(r), o ? h.add(t) : h.delete(t)) : (l = l.delete(t), h.delete(t)))
                            }), this.query.hasLimit())
                            for (; l.size > this.query.limit;) {
                                var n = l.last();
                                l = l.delete(n.key), h = h.delete(n.key), u.track({
                                    type: Ui.Removed,
                                    doc: n
                                })
                            }
                        return vn(!f || !e, "View was refilled using docs that themselves needed refilling."), {
                            documentSet: l,
                            changeSet: u,
                            needsRefill: f,
                            mutatedKeys: h
                        }
                    }, t.prototype.shouldWaitForSyncedDocument = function(t, e) {
                        return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
                    }, t.prototype.applyChanges = function(t, e, n) {
                        var o = this;
                        vn(!t.needsRefill, "Cannot apply changes that need a refill");
                        var r = this.documentSet;
                        this.documentSet = t.documentSet, this.mutatedKeys = t.mutatedKeys;
                        var i = t.changeSet.getChanges();
                        i.sort(function(t, e) {
                            return n = t.type, r = e.type, (i = function(t) {
                                switch (t) {
                                    case Ui.Added:
                                        return 1;
                                    case Ui.Modified:
                                    case Ui.Metadata:
                                        return 2;
                                    case Ui.Removed:
                                        return 0;
                                    default:
                                        return gn("Unknown ChangeType: " + t)
                                }
                            })(n) - i(r) || o.query.docComparator(t.doc, e.doc);
                            var n, r, i
                        }), this.applyTargetChange(n);
                        var s = e ? this.updateLimboDocuments() : [],
                            a = 0 === this.limboDocuments.size && this.current ? Ki.Synced : Ki.Local,
                            u = a !== this.syncState;
                        return this.syncState = a, 0 !== i.length || u ? {
                            snapshot: new Yi(this.query, t.documentSet, r, i, t.mutatedKeys, a === Ki.Local, u, !1),
                            limboChanges: s
                        } : {
                            limboChanges: s
                        }
                    }, t.prototype.applyOnlineStateChange = function(t) {
                        return this.current && t === ga.Offline ? (this.current = !1, this.applyChanges({
                            documentSet: this.documentSet,
                            changeSet: new Hi,
                            mutatedKeys: this.mutatedKeys,
                            needsRefill: !1
                        }, !1)) : {
                            limboChanges: []
                        }
                    }, t.prototype.shouldBeInLimbo = function(t) {
                        return !this._syncedDocuments.has(t) && (!!this.documentSet.has(t) && !this.documentSet.get(t).hasLocalMutations)
                    }, t.prototype.applyTargetChange = function(t) {
                        var e = this;
                        t && (t.addedDocuments.forEach(function(t) {
                            return e._syncedDocuments = e._syncedDocuments.add(t)
                        }), t.modifiedDocuments.forEach(function(t) {
                            return vn(e._syncedDocuments.has(t), "Modified document " + t + " not found in view.")
                        }), t.removedDocuments.forEach(function(t) {
                            return e._syncedDocuments = e._syncedDocuments.delete(t)
                        }), this.current = t.current)
                    }, t.prototype.updateLimboDocuments = function() {
                        var e = this;
                        if (!this.current) return [];
                        var n = this.limboDocuments;
                        this.limboDocuments = Fi(), this.documentSet.forEach(function(t) {
                            e.shouldBeInLimbo(t.key) && (e.limboDocuments = e.limboDocuments.add(t.key))
                        });
                        var r = [];
                        return n.forEach(function(t) {
                            e.limboDocuments.has(t) || r.push(new Pa(t))
                        }), this.limboDocuments.forEach(function(t) {
                            n.has(t) || r.push(new Oa(t))
                        }), r
                    }, t.prototype.synchronizeWithPersistedState = function(t, e) {
                        this._syncedDocuments = e, this.limboDocuments = Fi();
                        var n = this.computeDocChanges(t);
                        return this.applyChanges(n, !0)
                    }, t.prototype.computeInitialSnapshot = function() {
                        return Yi.fromInitialDocuments(this.query, this.documentSet, this.mutatedKeys, this.syncState === Ki.Local)
                    }, t
                }();
            var xa = "SyncEngine",
                qa = function(t, e, n) {
                    this.query = t, this.targetId = e, this.view = n
                },
                Fa = function(t) {
                    this.key = t
                },
                Va = function() {
                    function t(t, e, n, r) {
                        this.localStore = t, this.remoteStore = e, this.sharedClientState = n, this.currentUser = r, this.syncEngineListener = null, this.queryViewsByQuery = new os(function(t) {
                            return t.canonicalId()
                        }), this.queryViewsByTarget = {}, this.limboTargetsByKey = new wr(mr.comparator), this.limboResolutionsByTarget = {}, this.limboDocumentRefs = new na, this.mutationUserCallbacks = {}, this.limboTargetIdGenerator = zo.forSyncEngine(), this.isPrimary = void 0, this.onlineState = ga.Unknown
                    }
                    return Object.defineProperty(t.prototype, "isPrimaryClient", {
                        get: function() {
                            return !0 === this.isPrimary
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.subscribe = function(t) {
                        vn(null !== t, "SyncEngine listener cannot be null"), vn(null === this.syncEngineListener, "SyncEngine already has a subscriber."), this.syncEngineListener = t
                    }, t.prototype.listen = function(s) {
                        return h(this, void 0, void 0, function() {
                            var e, n, r, i, o;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.assertSubscribed("listen()"), (r = this.queryViewsByQuery.get(s)) ? (e = r.targetId, this.sharedClientState.addLocalQueryTarget(e), n = r.view.computeInitialSnapshot(), [3, 4]) : [3, 1];
                                    case 1:
                                        return [4, this.localStore.allocateQuery(s)];
                                    case 2:
                                        return i = t.sent(), o = this.sharedClientState.addLocalQueryTarget(i.targetId), e = i.targetId, [4, this.initializeViewAndComputeSnapshot(i, "current" === o)];
                                    case 3:
                                        n = t.sent(), this.isPrimary && this.remoteStore.listen(i), t.label = 4;
                                    case 4:
                                        return this.syncEngineListener.onWatchChange([n]), [2, e]
                                }
                            })
                        })
                    }, t.prototype.initializeViewAndComputeSnapshot = function(a, u) {
                        var c = this,
                            h = a.query;
                        return this.localStore.executeQuery(h).then(function(s) {
                            return c.localStore.remoteDocumentKeys(a.targetId).then(function(t) {
                                var e = new La(h, t),
                                    n = e.computeDocChanges(s),
                                    r = Ji.createSynthesizedTargetChangeForCurrentChange(a.targetId, u && c.onlineState !== ga.Offline),
                                    i = e.applyChanges(n, !0 === c.isPrimary, r);
                                vn(0 === i.limboChanges.length, "View returned limbo docs before target ack from the server."), vn(!!i.snapshot, "applyChanges for new view should always return a snapshot");
                                var o = new qa(h, a.targetId, e);
                                return c.queryViewsByQuery.set(h, o), c.queryViewsByTarget[a.targetId] = o, i.snapshot
                            })
                        })
                    }, t.prototype.synchronizeViewAndComputeSnapshot = function(i) {
                        var t = this;
                        return this.localStore.executeQuery(i.query).then(function(r) {
                            return t.localStore.remoteDocumentKeys(i.targetId).then(function(n) {
                                return h(t, void 0, void 0, function() {
                                    var e;
                                    return p(this, function(t) {
                                        return e = i.view.synchronizeWithPersistedState(r, n), this.isPrimary && this.updateTrackedLimbos(i.targetId, e.limboChanges), [2, e]
                                    })
                                })
                            })
                        })
                    }, t.prototype.unlisten = function(r) {
                        return h(this, void 0, void 0, function() {
                            var e, n = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.assertSubscribed("unlisten()"), vn(!!(e = this.queryViewsByQuery.get(r)), "Trying to unlisten on query not found:" + r), this.isPrimary ? (this.sharedClientState.removeLocalQueryTarget(e.targetId), this.sharedClientState.isActiveQueryTarget(e.targetId) ? [3, 2] : [4, this.localStore.releaseQuery(r, !1).then(function() {
                                            n.sharedClientState.clearQueryState(e.targetId), n.remoteStore.unlisten(e.targetId), n.removeAndCleanupQuery(e)
                                        }).catch(Xs)]) : [3, 3];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [3, 5];
                                    case 3:
                                        return this.removeAndCleanupQuery(e), [4, this.localStore.releaseQuery(r, !0)];
                                    case 4:
                                        t.sent(), t.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.write = function(t, e) {
                        var n = this;
                        return this.assertSubscribed("write()"), this.localStore.localWrite(t).then(function(t) {
                            return n.sharedClientState.addPendingMutation(t.batchId), n.addMutationCallback(t.batchId, e), n.emitNewSnapsAndNotifyLocalStore(t.changes)
                        }).then(function() {
                            return n.remoteStore.fillWritePipeline()
                        })
                    }, t.prototype.wrapUpdateFunctionError = function(t) {
                        return t
                    }, t.prototype.runTransaction = function(e, n) {
                        var r = this;
                        void 0 === n && (n = 5), vn(0 <= n, "Got negative number of retries for transaction.");
                        var i = this.remoteStore.createTransaction();
                        return function() {
                            try {
                                var t = e(i);
                                return !jr(t) && t.catch && t.then ? t.catch(function(t) {
                                    return Promise.reject(r.wrapUpdateFunctionError(t))
                                }) : Promise.reject(Error("Transaction callback must return a Promise"))
                            } catch (t) {
                                return Promise.reject(r.wrapUpdateFunctionError(t))
                            }
                        }().then(function(t) {
                            return i.commit().then(function() {
                                return t
                            }).catch(function(t) {
                                return 0 === n ? Promise.reject(t) : r.runTransaction(e, n - 1)
                            })
                        })
                    }, t.prototype.applyRemoteEvent = function(e) {
                        var r = this;
                        return this.assertSubscribed("applyRemoteEvent()"), this.localStore.applyRemoteEvent(e).then(function(t) {
                            return Nn(e.targetChanges, function(t, e) {
                                var n = r.limboResolutionsByTarget[t];
                                n && (vn(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1, "Limbo resolution for single document contains multiple changes."), 0 < e.addedDocuments.size ? n.receivedDocument = !0 : 0 < e.modifiedDocuments.size ? vn(n.receivedDocument, "Received change for limbo target document without add.") : 0 < e.removedDocuments.size && (vn(n.receivedDocument, "Received remove for limbo target document without add."), n.receivedDocument = !1))
                            }), r.emitNewSnapsAndNotifyLocalStore(t, e)
                        }).catch(Xs)
                    }, t.prototype.applyOnlineStateChange = function(r, t) {
                        if (this.isPrimary && t === ba.RemoteStore || !this.isPrimary && t === ba.SharedClientState) {
                            var i = [];
                            this.queryViewsByQuery.forEach(function(t, e) {
                                var n = e.view.applyOnlineStateChange(r);
                                vn(0 === n.limboChanges.length, "OnlineState should not affect limbo documents."), n.snapshot && i.push(n.snapshot)
                            }), this.syncEngineListener.onOnlineStateChange(r), this.syncEngineListener.onWatchChange(i), this.onlineState = r, this.isPrimary && this.sharedClientState.setOnlineState(r)
                        }
                    }, t.prototype.rejectListen = function(u, c) {
                        return h(this, void 0, void 0, function() {
                            var e, n, r, i, o, s, a = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.assertSubscribed("rejectListens()"), this.sharedClientState.updateQueryState(u, "rejected", c), e = this.limboResolutionsByTarget[u], (n = e && e.key) ? (this.limboTargetsByKey = this.limboTargetsByKey.remove(n), delete this.limboResolutionsByTarget[u], r = (r = new wr(mr.comparator)).insert(n, new vr(n, oi.forDeletedDoc())), i = Fi().add(n), o = new Xi(oi.MIN, {}, new ci(Hn), r, i), [2, this.applyRemoteEvent(o)]) : [3, 1];
                                    case 1:
                                        return vn(!!(s = this.queryViewsByTarget[u]), "Unknown targetId: " + u), [4, this.localStore.releaseQuery(s.query, !1).then(function() {
                                            return a.removeAndCleanupQuery(s)
                                        }).catch(Xs)];
                                    case 2:
                                        t.sent(), this.syncEngineListener.onWatchError(s.query, c), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.applyBatchState = function(n, r, i) {
                        return h(this, void 0, void 0, function() {
                            var e;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.assertSubscribed("applyBatchState()"), [4, this.localStore.lookupMutationDocuments(n)];
                                    case 1:
                                        return null === (e = t.sent()) ? (dn(xa, "Cannot apply mutation batch with id: " + n), [2]) : "pending" !== r ? [3, 3] : [4, this.remoteStore.fillWritePipeline()];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        "acknowledged" === r || "rejected" === r ? (this.processUserCallback(n, i || null), this.localStore.removeCachedMutationBatchMetadata(n)) : gn("Unknown batchState: " + r), t.label = 4;
                                    case 4:
                                        return [4, this.emitNewSnapsAndNotifyLocalStore(e)];
                                    case 5:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.applySuccessfulWrite = function(t) {
                        var e = this;
                        this.assertSubscribed("applySuccessfulWrite()");
                        var n = t.batch.batchId;
                        return this.processUserCallback(n, null), this.localStore.acknowledgeBatch(t).then(function(t) {
                            return e.sharedClientState.updateMutationState(n, "acknowledged"), e.emitNewSnapsAndNotifyLocalStore(t)
                        }).catch(Xs)
                    }, t.prototype.rejectFailedWrite = function(e, n) {
                        var r = this;
                        return this.assertSubscribed("rejectFailedWrite()"), this.processUserCallback(e, n), this.localStore.rejectBatch(e).then(function(t) {
                            return r.sharedClientState.updateMutationState(e, "rejected", n), r.emitNewSnapsAndNotifyLocalStore(t)
                        }).catch(Xs)
                    }, t.prototype.addMutationCallback = function(t, e) {
                        var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                        n || (n = new wr(Hn)), n = n.insert(t, e), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                    }, t.prototype.processUserCallback = function(t, e) {
                        var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                        if (n) {
                            var r = n.get(t);
                            r && (vn(t === n.minKey(), "Mutation callbacks processed out-of-order?"), e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                        }
                    }, t.prototype.removeAndCleanupQuery = function(t) {
                        var e = this;
                        if (this.sharedClientState.removeLocalQueryTarget(t.targetId), this.queryViewsByQuery.delete(t.query), delete this.queryViewsByTarget[t.targetId], this.isPrimary) {
                            var n = this.limboDocumentRefs.referencesForId(t.targetId);
                            this.limboDocumentRefs.removeReferencesForId(t.targetId), n.forEach(function(t) {
                                e.limboDocumentRefs.containsKey(t) || e.removeLimboTarget(t)
                            })
                        }
                    }, t.prototype.removeLimboTarget = function(t) {
                        var e = this.limboTargetsByKey.get(t);
                        null !== e && (this.remoteStore.unlisten(e), this.limboTargetsByKey = this.limboTargetsByKey.remove(t), delete this.limboResolutionsByTarget[e])
                    }, t.prototype.updateTrackedLimbos = function(t, e) {
                        for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n];
                            if (i instanceof Oa) this.limboDocumentRefs.addReference(i.key, t), this.trackLimboChange(i);
                            else if (i instanceof Pa) {
                                dn(xa, "Document no longer in limbo: " + i.key), this.limboDocumentRefs.removeReference(i.key, t), this.limboDocumentRefs.containsKey(i.key) || this.removeLimboTarget(i.key)
                            } else gn("Unknown limbo change: " + JSON.stringify(i))
                        }
                    }, t.prototype.trackLimboChange = function(t) {
                        var e = t.key;
                        if (!this.limboTargetsByKey.get(e)) {
                            dn(xa, "New document in limbo: " + e);
                            var n = this.limboTargetIdGenerator.next(),
                                r = Hr.atPath(e.path);
                            this.limboResolutionsByTarget[n] = new Fa(e), this.remoteStore.listen(new ui(r, n, Gr.LimboResolution, To.INVALID)), this.limboTargetsByKey = this.limboTargetsByKey.insert(e, n)
                        }
                    }, t.prototype.currentLimboDocs = function() {
                        return this.limboTargetsByKey
                    }, t.prototype.emitNewSnapsAndNotifyLocalStore = function(n, u) {
                        return h(this, void 0, void 0, function() {
                            var o, s, e, a = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return o = [], s = [], e = [], this.queryViewsByQuery.forEach(function(t, i) {
                                            e.push(Promise.resolve().then(function() {
                                                var e = i.view.computeDocChanges(n);
                                                return e.needsRefill ? a.localStore.executeQuery(i.query).then(function(t) {
                                                    return i.view.computeDocChanges(t, e)
                                                }) : e
                                            }).then(function(t) {
                                                var e = u && u.targetChanges[i.targetId],
                                                    n = i.view.applyChanges(t, !0 === a.isPrimary, e);
                                                if (a.updateTrackedLimbos(i.targetId, n.limboChanges), n.snapshot) {
                                                    a.isPrimary && a.sharedClientState.updateQueryState(i.targetId, n.snapshot.fromCache ? "not-current" : "current"), o.push(n.snapshot);
                                                    var r = _a.fromSnapshot(i.targetId, n.snapshot);
                                                    s.push(r)
                                                }
                                            }))
                                        }), [4, Promise.all(e)];
                                    case 1:
                                        return t.sent(), this.syncEngineListener.onWatchChange(o), [4, this.localStore.notifyLocalViewChanges(s)];
                                    case 2:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.assertSubscribed = function(t) {
                        vn(null !== this.syncEngineListener, "Trying to call " + t + " before calling subscribe().")
                    }, t.prototype.handleCredentialChange = function(r) {
                        return h(this, void 0, void 0, function() {
                            var e, n;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = !this.currentUser.isEqual(r), this.currentUser = r, e ? [4, this.localStore.handleUserChange(r)] : [3, 3];
                                    case 1:
                                        return n = t.sent(), this.sharedClientState.handleUserChange(r, n.removedBatchIds, n.addedBatchIds), [4, this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [4, this.remoteStore.handleCredentialChange()];
                                    case 4:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.applyPrimaryState = function(c) {
                        return h(this, void 0, void 0, function() {
                            var e, n, r, i, o, s, a, u = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return !0 !== c || !0 === this.isPrimary ? [3, 3] : (this.isPrimary = !0, [4, this.remoteStore.applyPrimaryState(!0)]);
                                    case 1:
                                        return t.sent(), e = this.sharedClientState.getAllActiveQueryTargets(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())];
                                    case 2:
                                        for (n = t.sent(), r = 0, i = n; r < i.length; r++) o = i[r], this.remoteStore.listen(o);
                                        return [3, 7];
                                    case 3:
                                        return !1 !== c || !1 === this.isPrimary ? [3, 7] : (this.isPrimary = !1, s = [], a = Promise.resolve(), Dn(this.queryViewsByTarget, function(t, e) {
                                            u.sharedClientState.isLocalQueryTarget(t) ? s.push(t) : a = a.then(function() {
                                                return u.unlisten(e.query)
                                            }), u.remoteStore.unlisten(e.targetId)
                                        }), [4, a]);
                                    case 4:
                                        return t.sent(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(s)];
                                    case 5:
                                        return t.sent(), this.resetLimboDocuments(), [4, this.remoteStore.applyPrimaryState(!1)];
                                    case 6:
                                        t.sent(), t.label = 7;
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.resetLimboDocuments = function() {
                        var e = this;
                        Dn(this.limboResolutionsByTarget, function(t) {
                            e.remoteStore.unlisten(t)
                        }), this.limboDocumentRefs.removeAllReferences(), this.limboResolutionsByTarget = [], this.limboTargetsByKey = new wr(mr.comparator)
                    }, t.prototype.synchronizeQueryViewsAndRaiseSnapshots = function(t) {
                        for (var e = this, n = Promise.resolve(), s = [], a = [], r = function(o) {
                                n = n.then(function() {
                                    return h(e, void 0, void 0, function() {
                                        var e, n, r, i;
                                        return p(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return (n = this.queryViewsByTarget[o]) ? [4, this.localStore.releaseQuery(n.query, !0)] : [3, 4];
                                                case 1:
                                                    return t.sent(), [4, this.localStore.allocateQuery(n.query)];
                                                case 2:
                                                    return e = t.sent(), [4, this.synchronizeViewAndComputeSnapshot(n)];
                                                case 3:
                                                    return (r = t.sent()).snapshot && a.push(r.snapshot), [3, 8];
                                                case 4:
                                                    return vn(!0 === this.isPrimary, "A secondary tab should never have an active query without an active view."), [4, this.localStore.getQueryForTarget(o)];
                                                case 5:
                                                    return vn(!!(i = t.sent()), "Query data for target " + o + " not found"), [4, this.localStore.allocateQuery(i)];
                                                case 6:
                                                    return e = t.sent(), [4, this.initializeViewAndComputeSnapshot(e, !1)];
                                                case 7:
                                                    t.sent(), t.label = 8;
                                                case 8:
                                                    return s.push(e), [2]
                                            }
                                        })
                                    })
                                })
                            }, i = 0, o = t; i < o.length; i++) {
                            r(o[i])
                        }
                        return n.then(function() {
                            return e.syncEngineListener.onWatchChange(a), s
                        })
                    }, t.prototype.getActiveClients = function() {
                        return this.localStore.getActiveClients()
                    }, t.prototype.applyTargetState = function(r, o, n) {
                        return h(this, void 0, void 0, function() {
                            var e, i = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isPrimary) return dn(xa, "Ignoring unexpected query state notification."), [2];
                                        if (!this.queryViewsByTarget[r]) return [3, 5];
                                        switch (o) {
                                            case "current":
                                            case "not-current":
                                                return [3, 1];
                                            case "rejected":
                                                return [3, 2]
                                        }
                                        return [3, 4];
                                    case 1:
                                        return [2, this.localStore.getNewDocumentChanges().then(function(n) {
                                            return h(i, void 0, void 0, function() {
                                                var e;
                                                return p(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return e = Xi.createSynthesizedRemoteEventForCurrentChange(r, "current" === o), [4, this.emitNewSnapsAndNotifyLocalStore(n, e)];
                                                        case 1:
                                                            return t.sent(), [2]
                                                    }
                                                })
                                            })
                                        }, function(r) {
                                            return h(i, void 0, void 0, function() {
                                                var n;
                                                return p(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return (e = r).code !== En.DATA_LOSS || e.message !== as ? [3, 2] : (n = [], Dn(this.queryViewsByTarget, function(t) {
                                                                return n.push(t)
                                                            }), [4, this.synchronizeQueryViewsAndRaiseSnapshots(n)]);
                                                        case 1:
                                                            return t.sent(), [3, 3];
                                                        case 2:
                                                            throw r;
                                                        case 3:
                                                            return [2]
                                                    }
                                                    var e
                                                })
                                            })
                                        })];
                                    case 2:
                                        return e = this.queryViewsByTarget[r], this.removeAndCleanupQuery(e), [4, this.localStore.releaseQuery(e.query, !0)];
                                    case 3:
                                        return t.sent(), this.syncEngineListener.onWatchError(e.query, n), [3, 5];
                                    case 4:
                                        gn("Unexpected target state: " + o), t.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.applyActiveTargetsChange = function(l, f) {
                        return h(this, void 0, void 0, function() {
                            var e, n, r, i, o, s, a, u, c, h = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.isPrimary) return [2];
                                        e = 0, n = l, t.label = 1;
                                    case 1:
                                        return e < n.length ? (c = n[e], vn(!this.queryViewsByTarget[c], "Trying to add an already active target"), [4, this.localStore.getQueryForTarget(c)]) : [3, 6];
                                    case 2:
                                        return vn(!!(r = t.sent()), "Query data for active target " + c + " not found"), [4, this.localStore.allocateQuery(r)];
                                    case 3:
                                        return i = t.sent(), [4, this.initializeViewAndComputeSnapshot(i, !1)];
                                    case 4:
                                        t.sent(), this.remoteStore.listen(i), t.label = 5;
                                    case 5:
                                        return e++, [3, 1];
                                    case 6:
                                        o = function(e) {
                                            var n;
                                            return p(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return (n = s.queryViewsByTarget[e]) ? [4, s.localStore.releaseQuery(n.query, !1).then(function() {
                                                            h.remoteStore.unlisten(e), h.removeAndCleanupQuery(n)
                                                        }).catch(Xs)] : [3, 2];
                                                    case 1:
                                                        t.sent(), t.label = 2;
                                                    case 2:
                                                        return [2]
                                                }
                                            })
                                        }, s = this, a = 0, u = f, t.label = 7;
                                    case 7:
                                        return a < u.length ? (c = u[a], [5, o(c)]) : [3, 10];
                                    case 8:
                                        t.sent(), t.label = 9;
                                    case 9:
                                        return a++, [3, 7];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.enableNetwork = function() {
                        return this.localStore.setNetworkEnabled(!0), this.remoteStore.enableNetwork()
                    }, t.prototype.disableNetwork = function() {
                        return this.localStore.setNetworkEnabled(!1), this.remoteStore.disableNetwork()
                    }, t.prototype.getRemoteKeysForTarget = function(t) {
                        var e = this.limboResolutionsByTarget[t];
                        return e && e.receivedDocument ? Fi().add(e.key) : this.queryViewsByTarget[t] ? this.queryViewsByTarget[t].view.syncedDocuments : Fi()
                    }, t
                }(),
                Ba = function() {
                    function t(t) {
                        this.uid = t
                    }
                    return t.prototype.isAuthenticated = function() {
                        return null != this.uid
                    }, t.prototype.toKey = function() {
                        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
                    }, t.prototype.isEqual = function(t) {
                        return t.uid === this.uid
                    }, t.UNAUTHENTICATED = new t(null), t.GOOGLE_CREDENTIALS = new t("google-credentials-uid"), t.FIRST_PARTY = new t("first-party-uid"), t
                }(),
                Ua = "SharedClientState",
                Qa = "firestore_clients",
                Ka = "firestore_mutations",
                ja = "firestore_targets",
                Wa = function() {
                    function s(t, e, n, r) {
                        this.user = t, this.batchId = e, this.state = n, vn(void 0 !== (this.error = r) == ("rejected" === n), "MutationMetadata must contain an error iff state is 'rejected'")
                    }
                    return s.fromWebStorageEntry = function(t, e, n) {
                        var r = JSON.parse(n),
                            i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                            o = void 0;
                        return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new Sn(r.error.code, r.error.message)), i ? new s(t, e, r.state, o) : (mn(Ua, "Failed to parse mutation state for ID '" + e + "': " + n), null)
                    }, s.prototype.toWebStorageJSON = function() {
                        var t = {
                            state: this.state,
                            updateTimeMs: Date.now()
                        };
                        return this.error && (t.error = {
                            code: this.error.code,
                            message: this.error.message
                        }), JSON.stringify(t)
                    }, s
                }(),
                Ga = function() {
                    function o(t, e, n) {
                        this.targetId = t, this.state = e, vn(void 0 !== (this.error = n) == ("rejected" === e), "QueryTargetMetadata must contain an error iff state is 'rejected'")
                    }
                    return o.fromWebStorageEntry = function(t, e) {
                        var n = JSON.parse(e),
                            r = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error),
                            i = void 0;
                        return r && n.error && (r = "string" == typeof n.error.message && "string" == typeof n.error.code) && (i = new Sn(n.error.code, n.error.message)), r ? new o(t, n.state, i) : (mn(Ua, "Failed to parse target state for ID '" + t + "': " + e), null)
                    }, o.prototype.toWebStorageJSON = function() {
                        var t = {
                            state: this.state,
                            updateTimeMs: Date.now()
                        };
                        return this.error && (t.error = {
                            code: this.error.code,
                            message: this.error.message
                        }), JSON.stringify(t)
                    }, o
                }(),
                za = function() {
                    function s(t, e) {
                        this.clientId = t, this.activeTargetIds = e
                    }
                    return s.fromWebStorageEntry = function(t, e) {
                        for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = Bi(), o = 0; r && o < n.activeTargetIds.length; ++o) r = Wr(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]);
                        return r ? new s(t, i) : (mn(Ua, "Failed to parse client data for instance '" + t + "': " + e), null)
                    }, s
                }(),
                Ha = function() {
                    function n(t, e) {
                        this.clientId = t, this.onlineState = e
                    }
                    return n.fromWebStorageEntry = function(t) {
                        var e = JSON.parse(t);
                        return "object" == typeof e && void 0 !== ga[e.onlineState] && "string" == typeof e.clientId ? new n(e.clientId, ga[e.onlineState]) : (mn(Ua, "Failed to parse online state: " + t), null)
                    }, n
                }(),
                Ya = function() {
                    function t() {
                        this.activeTargetIds = Bi()
                    }
                    return t.prototype.addQueryTarget = function(t) {
                        vn(!this.activeTargetIds.has(t), "Target with ID '" + t + "' already active."), this.activeTargetIds = this.activeTargetIds.add(t)
                    }, t.prototype.removeQueryTarget = function(t) {
                        this.activeTargetIds = this.activeTargetIds.delete(t)
                    }, t.prototype.toWebStorageJSON = function() {
                        var t = {
                            activeTargetIds: this.activeTargetIds.toArray(),
                            updateTimeMs: Date.now()
                        };
                        return JSON.stringify(t)
                    }, t
                }(),
                Xa = function() {
                    function s(t, e, n, r, i) {
                        if (this.queue = t, this.platform = e, this.persistenceKey = n, this.localClientId = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.activeClients = {}, this.storageListener = this.handleWebStorageEvent.bind(this), this.started = !1, this.earlyEvents = [], !s.isAvailable(this.platform)) throw new Sn(En.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
                        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                        this.storage = this.platform.window.localStorage, this.currentUser = i, this.localClientStorageKey = this.toWebStorageClientStateKey(this.localClientId), this.sequenceNumberKey = "firestore_sequence_number_" + n, this.activeClients[this.localClientId] = new Ya, this.clientStateKeyRe = new RegExp("^" + Qa + "_" + o + "_([^_]*)$"), this.mutationBatchKeyRe = new RegExp("^" + Ka + "_" + o + "_(\\d+)(?:_(.*))?$"), this.queryTargetKeyRe = new RegExp("^" + ja + "_" + o + "_(\\d+)$"), this.onlineStateKey = "firestore_online_state_" + n, this.platform.window.addEventListener("storage", this.storageListener)
                    }
                    return s.isAvailable = function(t) {
                        return !(!t.window || null == t.window.localStorage)
                    }, s.prototype.start = function() {
                        return h(this, void 0, void 0, function() {
                            var e, n, r, i, o, s, a, u, c, h, l, f = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return vn(!this.started, "WebStorageSharedClientState already started"), vn(null !== this.syncEngine, "syncEngine property must be set before calling start()"), vn(null !== this.onlineStateHandler, "onlineStateHandler property must be set before calling start()"), [4, this.syncEngine.getActiveClients()];
                                    case 1:
                                        for (e = t.sent(), n = 0, r = e; n < r.length; n++)(i = r[n]) !== this.localClientId && (o = this.getItem(this.toWebStorageClientStateKey(i))) && (s = za.fromWebStorageEntry(i, o)) && (this.activeClients[s.clientId] = s);
                                        for (this.persistClientState(), (a = this.storage.getItem(this.onlineStateKey)) && (u = this.fromWebStorageOnlineState(a)) && this.handleOnlineStateEvent(u), c = 0, h = this.earlyEvents; c < h.length; c++) l = h[c], this.handleWebStorageEvent(l);
                                        return this.earlyEvents = [], this.platform.window.addEventListener("unload", function() {
                                            return f.shutdown()
                                        }), this.started = !0, [2]
                                }
                            })
                        })
                    }, s.prototype.writeSequenceNumber = function(t) {
                        this.setItem(this.sequenceNumberKey, JSON.stringify(t))
                    }, s.prototype.getAllActiveQueryTargets = function() {
                        var n = Bi();
                        return Nn(this.activeClients, function(t, e) {
                            n = n.unionWith(e.activeTargetIds)
                        }), n
                    }, s.prototype.isActiveQueryTarget = function(t) {
                        for (var e in this.activeClients)
                            if (this.activeClients.hasOwnProperty(e) && this.activeClients[e].activeTargetIds.has(t)) return !0;
                        return !1
                    }, s.prototype.addPendingMutation = function(t) {
                        this.persistMutationState(t, "pending")
                    }, s.prototype.updateMutationState = function(t, e, n) {
                        this.persistMutationState(t, e, n), this.removeMutationState(t)
                    }, s.prototype.addLocalQueryTarget = function(t) {
                        var e = "not-current";
                        if (this.isActiveQueryTarget(t)) {
                            var n = this.storage.getItem(this.toWebStorageQueryTargetMetadataKey(t));
                            if (n) {
                                var r = Ga.fromWebStorageEntry(t, n);
                                r && (e = r.state)
                            }
                        }
                        return this.localClientState.addQueryTarget(t), this.persistClientState(), e
                    }, s.prototype.removeLocalQueryTarget = function(t) {
                        this.localClientState.removeQueryTarget(t), this.persistClientState()
                    }, s.prototype.isLocalQueryTarget = function(t) {
                        return this.localClientState.activeTargetIds.has(t)
                    }, s.prototype.clearQueryState = function(t) {
                        this.removeItem(this.toWebStorageQueryTargetMetadataKey(t))
                    }, s.prototype.updateQueryState = function(t, e, n) {
                        this.persistQueryTargetState(t, e, n)
                    }, s.prototype.handleUserChange = function(t, e, n) {
                        var r = this;
                        e.forEach(function(t) {
                            r.removeMutationState(t)
                        }), this.currentUser = t, n.forEach(function(t) {
                            r.addPendingMutation(t)
                        })
                    }, s.prototype.setOnlineState = function(t) {
                        this.persistOnlineState(t)
                    }, s.prototype.shutdown = function() {
                        this.started && (this.platform.window.removeEventListener("storage", this.storageListener), this.removeItem(this.localClientStorageKey), this.started = !1)
                    }, s.prototype.getItem = function(t) {
                        var e = this.storage.getItem(t);
                        return dn(Ua, "READ", t, e), e
                    }, s.prototype.setItem = function(t, e) {
                        dn(Ua, "SET", t, e), this.storage.setItem(t, e)
                    }, s.prototype.removeItem = function(t) {
                        dn(Ua, "REMOVE", t), this.storage.removeItem(t)
                    }, s.prototype.handleWebStorageEvent = function(a) {
                        var t = this;
                        if (a.storageArea === this.storage) {
                            if (dn(Ua, "EVENT", a.key, a.newValue), a.key === this.localClientStorageKey) return void mn("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                            this.queue.enqueueAndForget(function() {
                                return h(t, void 0, void 0, function() {
                                    var e, n, r, i, o, s;
                                    return p(this, function(t) {
                                        if (!this.started) return this.earlyEvents.push(a), [2];
                                        if (null === a.key) return [2];
                                        if (this.clientStateKeyRe.test(a.key)) {
                                            if (null == a.newValue) return n = this.fromWebStorageClientStateKey(a.key), [2, this.handleClientStateEvent(n, null)];
                                            if (e = this.fromWebStorageClientState(a.key, a.newValue)) return [2, this.handleClientStateEvent(e.clientId, e)]
                                        } else if (this.mutationBatchKeyRe.test(a.key)) {
                                            if (null !== a.newValue && (r = this.fromWebStorageMutationMetadata(a.key, a.newValue))) return [2, this.handleMutationBatchEvent(r)]
                                        } else if (this.queryTargetKeyRe.test(a.key)) {
                                            if (null !== a.newValue && (i = this.fromWebStorageQueryTargetMetadata(a.key, a.newValue))) return [2, this.handleQueryTargetEvent(i)]
                                        } else if (a.key === this.onlineStateKey) {
                                            if (null !== a.newValue && (o = this.fromWebStorageOnlineState(a.newValue))) return [2, this.handleOnlineStateEvent(o)]
                                        } else a.key === this.sequenceNumberKey && (vn(!!this.sequenceNumberHandler, "Missing sequenceNumberHandler"), (s = function(t) {
                                            var e = To.INVALID;
                                            if (null != t) try {
                                                var n = JSON.parse(t);
                                                vn("number" == typeof n, "Found non-numeric sequence number"), e = n
                                            } catch (t) {
                                                mn(Ua, "Failed to read sequence number from WebStorage", t)
                                            }
                                            return e
                                        }(a.newValue)) !== To.INVALID && this.sequenceNumberHandler(s));
                                        return [2]
                                    })
                                })
                            })
                        }
                    }, Object.defineProperty(s.prototype, "localClientState", {
                        get: function() {
                            return this.activeClients[this.localClientId]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), s.prototype.persistClientState = function() {
                        this.setItem(this.localClientStorageKey, this.localClientState.toWebStorageJSON())
                    }, s.prototype.persistMutationState = function(t, e, n) {
                        var r = new Wa(this.currentUser, t, e, n),
                            i = this.toWebStorageMutationBatchKey(t);
                        this.setItem(i, r.toWebStorageJSON())
                    }, s.prototype.removeMutationState = function(t) {
                        var e = this.toWebStorageMutationBatchKey(t);
                        this.removeItem(e)
                    }, s.prototype.persistOnlineState = function(t) {
                        var e = {
                            clientId: this.localClientId,
                            onlineState: ga[t]
                        };
                        this.storage.setItem(this.onlineStateKey, JSON.stringify(e))
                    }, s.prototype.persistQueryTargetState = function(t, e, n) {
                        var r = this.toWebStorageQueryTargetMetadataKey(t),
                            i = new Ga(t, e, n);
                        this.setItem(r, i.toWebStorageJSON())
                    }, s.prototype.toWebStorageClientStateKey = function(t) {
                        return vn(-1 === t.indexOf("_"), "Client key cannot contain '_', but was '" + t + "'"), Qa + "_" + this.persistenceKey + "_" + t
                    }, s.prototype.toWebStorageQueryTargetMetadataKey = function(t) {
                        return ja + "_" + this.persistenceKey + "_" + t
                    }, s.prototype.toWebStorageMutationBatchKey = function(t) {
                        var e = Ka + "_" + this.persistenceKey + "_" + t;
                        return this.currentUser.isAuthenticated() && (e += "_" + this.currentUser.uid), e
                    }, s.prototype.fromWebStorageClientStateKey = function(t) {
                        var e = this.clientStateKeyRe.exec(t);
                        return e ? e[1] : null
                    }, s.prototype.fromWebStorageClientState = function(t, e) {
                        var n = this.fromWebStorageClientStateKey(t);
                        return vn(null !== n, "Cannot parse client state key '" + t + "'"), za.fromWebStorageEntry(n, e)
                    }, s.prototype.fromWebStorageMutationMetadata = function(t, e) {
                        var n = this.mutationBatchKeyRe.exec(t);
                        vn(null !== n, "Cannot parse mutation batch key '" + t + "'");
                        var r = Number(n[1]),
                            i = void 0 !== n[2] ? n[2] : null;
                        return Wa.fromWebStorageEntry(new Ba(i), r, e)
                    }, s.prototype.fromWebStorageQueryTargetMetadata = function(t, e) {
                        var n = this.queryTargetKeyRe.exec(t);
                        vn(null !== n, "Cannot parse query target key '" + t + "'");
                        var r = Number(n[1]);
                        return Ga.fromWebStorageEntry(r, e)
                    }, s.prototype.fromWebStorageOnlineState = function(t) {
                        return Ha.fromWebStorageEntry(t)
                    }, s.prototype.handleMutationBatchEvent = function(e) {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                return e.user.uid !== this.currentUser.uid ? (dn(Ua, "Ignoring mutation for non-active user " + e.user.uid), [2]) : [2, this.syncEngine.applyBatchState(e.batchId, e.state, e.error)]
                            })
                        })
                    }, s.prototype.handleQueryTargetEvent = function(t) {
                        return this.syncEngine.applyTargetState(t.targetId, t.state, t.error)
                    }, s.prototype.handleClientStateEvent = function(t, e) {
                        var n = this,
                            r = this.getAllActiveQueryTargets();
                        e ? this.activeClients[t] = e : delete this.activeClients[t];
                        var i = this.getAllActiveQueryTargets(),
                            o = [],
                            s = [];
                        return i.forEach(function(e) {
                            return h(n, void 0, void 0, function() {
                                return p(this, function(t) {
                                    return r.has(e) || o.push(e), [2]
                                })
                            })
                        }), r.forEach(function(e) {
                            return h(n, void 0, void 0, function() {
                                return p(this, function(t) {
                                    return i.has(e) || s.push(e), [2]
                                })
                            })
                        }), this.syncEngine.applyActiveTargetsChange(o, s)
                    }, s.prototype.handleOnlineStateEvent = function(t) {
                        this.activeClients[t.clientId] && this.onlineStateHandler(t.onlineState)
                    }, s
                }();
            var Ja = function() {
                    function t() {
                        this.localState = new Ya, this.queryState = {}, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null
                    }
                    return t.prototype.addPendingMutation = function(t) {}, t.prototype.updateMutationState = function(t, e, n) {}, t.prototype.addLocalQueryTarget = function(t) {
                        return this.localState.addQueryTarget(t), this.queryState[t] || "not-current"
                    }, t.prototype.updateQueryState = function(t, e, n) {
                        this.queryState[t] = e
                    }, t.prototype.removeLocalQueryTarget = function(t) {
                        this.localState.removeQueryTarget(t)
                    }, t.prototype.isLocalQueryTarget = function(t) {
                        return this.localState.activeTargetIds.has(t)
                    }, t.prototype.clearQueryState = function(t) {
                        delete this.queryState[t]
                    }, t.prototype.getAllActiveQueryTargets = function() {
                        return this.localState.activeTargetIds
                    }, t.prototype.isActiveQueryTarget = function(t) {
                        return this.localState.activeTargetIds.has(t)
                    }, t.prototype.start = function() {
                        return this.localState = new Ya, Promise.resolve()
                    }, t.prototype.handleUserChange = function(t, e, n) {}, t.prototype.setOnlineState = function(t) {}, t.prototype.shutdown = function() {}, t.prototype.writeSequenceNumber = function(t) {}, t
                }(),
                $a = "FirestoreClient",
                Za = function() {
                    function t(t, e) {
                        this.cacheSizeBytes = t, this.experimentalTabSynchronization = e
                    }
                    return t.prototype.lruParams = function() {
                        return Qs.withCacheSize(this.cacheSizeBytes)
                    }, t
                }(),
                tu = function() {},
                eu = function() {
                    function t(t, e, n, r) {
                        this.platform = t, this.databaseInfo = e, this.credentials = n, this.asyncQueue = r, this.clientId = zn.newId()
                    }
                    return t.prototype.start = function(t) {
                        var n = this,
                            r = new Io,
                            i = new Io,
                            o = !1;
                        return this.credentials.setChangeListener(function(e) {
                            o ? n.asyncQueue.enqueueAndForget(function() {
                                return n.handleCredentialChange(e)
                            }) : (o = !0, n.initializePersistence(t, i, e).then(function(t) {
                                return n.initializeRest(e, t)
                            }).then(r.resolve, r.reject))
                        }), this.asyncQueue.enqueueAndForget(function() {
                            return r.promise
                        }), i.promise
                    }, t.prototype.enableNetwork = function() {
                        var t = this;
                        return this.asyncQueue.enqueue(function() {
                            return t.syncEngine.enableNetwork()
                        })
                    }, t.prototype.initializePersistence = function(t, e, n) {
                        var r = this;
                        return t instanceof Za ? this.startIndexedDbPersistence(n, t).then(function(t) {
                            return e.resolve(), t
                        }).catch(function(t) {
                            if (e.reject(t), !r.canFallback(t)) throw t;
                            return console.warn("Error enabling offline storage. Falling back to storage disabled: " + t), r.startMemoryPersistence()
                        }) : (e.resolve(), this.startMemoryPersistence())
                    }, t.prototype.canFallback = function(t) {
                        return t instanceof Sn ? t.code === En.FAILED_PRECONDITION || t.code === En.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code)
                    }, t.prototype.startIndexedDbPersistence = function(r, i) {
                        var t = this,
                            o = Ys.buildStoragePrefix(this.databaseInfo),
                            s = new fo(this.databaseInfo.databaseId, {
                                useProto3Json: !0
                            });
                        return Promise.resolve().then(function() {
                            return h(t, void 0, void 0, function() {
                                var e, n;
                                return p(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (i.experimentalTabSynchronization && !Xa.isAvailable(this.platform)) throw new Sn(En.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                                            return n = i.lruParams(), i.experimentalTabSynchronization ? (this.sharedClientState = new Xa(this.asyncQueue, this.platform, o, this.clientId, r), [4, Ys.createMultiClientIndexedDbPersistence(o, this.clientId, this.platform, this.asyncQueue, s, n, {
                                                sequenceNumberSyncer: this.sharedClientState
                                            })]) : [3, 2];
                                        case 1:
                                            return e = t.sent(), [3, 4];
                                        case 2:
                                            return this.sharedClientState = new Ja, [4, Ys.createIndexedDbPersistence(o, this.clientId, this.platform, this.asyncQueue, s, n)];
                                        case 3:
                                            e = t.sent(), t.label = 4;
                                        case 4:
                                            return [2, (this.persistence = e).referenceDelegate.garbageCollector]
                                    }
                                })
                            })
                        })
                    }, t.prototype.startMemoryPersistence = function() {
                        return this.persistence = la.createEagerPersistence(this.clientId), this.sharedClientState = new Ja, Promise.resolve(null)
                    }, t.prototype.initializeRest = function(a, u) {
                        var t = this;
                        return dn($a, "Initializing. user=", a.uid), this.platform.loadConnection(this.databaseInfo).then(function(s) {
                            return h(t, void 0, void 0, function() {
                                var e, n, r, i, o = this;
                                return p(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.localStore = new ia(this.persistence, a), u && (this.lruScheduler = new Ks(u, this.asyncQueue, this.localStore)), e = this.platform.newSerializer(this.databaseInfo.databaseId), n = new Ia(this.asyncQueue, s, this.credentials, e), r = function(t) {
                                                return o.syncEngine.applyOnlineStateChange(t, ba.RemoteStore)
                                            }, i = function(t) {
                                                return o.syncEngine.applyOnlineStateChange(t, ba.SharedClientState)
                                            }, this.remoteStore = new Aa(this.localStore, n, this.asyncQueue, r), this.syncEngine = new Va(this.localStore, this.remoteStore, this.sharedClientState, a), this.sharedClientState.onlineStateHandler = i, this.remoteStore.syncEngine = this.syncEngine, this.sharedClientState.syncEngine = this.syncEngine, this.eventMgr = new Ra(this.syncEngine), [4, this.sharedClientState.start()];
                                        case 1:
                                            return t.sent(), [4, this.remoteStore.start()];
                                        case 2:
                                            return t.sent(), [4, this.persistence.setPrimaryStateListener(function(e) {
                                                return h(o, void 0, void 0, function() {
                                                    return p(this, function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                return [4, this.syncEngine.applyPrimaryState(e)];
                                                            case 1:
                                                                return t.sent(), this.lruScheduler && (e && !this.lruScheduler.started ? this.lruScheduler.start() : e || this.lruScheduler.stop()), [2]
                                                        }
                                                    })
                                                })
                                            })];
                                        case 3:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        })
                    }, t.prototype.handleCredentialChange = function(t) {
                        return this.asyncQueue.verifyOperationInProgress(), dn($a, "Credential Changed. Current user: " + t.uid), this.syncEngine.handleCredentialChange(t)
                    }, t.prototype.disableNetwork = function() {
                        var t = this;
                        return this.asyncQueue.enqueue(function() {
                            return t.syncEngine.disableNetwork()
                        })
                    }, t.prototype.shutdown = function(e) {
                        var t = this;
                        return this.asyncQueue.enqueue(function() {
                            return h(t, void 0, void 0, function() {
                                return p(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.lruScheduler && this.lruScheduler.stop(), [4, this.remoteStore.shutdown()];
                                        case 1:
                                            return t.sent(), [4, this.sharedClientState.shutdown()];
                                        case 2:
                                            return t.sent(), [4, this.persistence.shutdown(e && e.purgePersistenceWithDataLoss)];
                                        case 3:
                                            return t.sent(), this.credentials.removeChangeListener(), [2]
                                    }
                                })
                            })
                        })
                    }, t.prototype.listen = function(t, e, n) {
                        var r = this,
                            i = new Ma(t, e, n);
                        return this.asyncQueue.enqueueAndForget(function() {
                            return r.eventMgr.listen(i)
                        }), i
                    }, t.prototype.unlisten = function(t) {
                        var e = this;
                        this.asyncQueue.enqueueAndForget(function() {
                            return e.eventMgr.unlisten(t)
                        })
                    }, t.prototype.getDocumentFromLocalCache = function(t) {
                        var e = this;
                        return this.asyncQueue.enqueue(function() {
                            return e.localStore.readDocument(t)
                        }).then(function(t) {
                            if (t instanceof gr) return t;
                            if (t instanceof vr) return null;
                            throw new Sn(En.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")
                        })
                    }, t.prototype.getDocumentsFromLocalCache = function(i) {
                        var t = this;
                        return this.asyncQueue.enqueue(function() {
                            return t.localStore.executeQuery(i)
                        }).then(function(t) {
                            var e = Fi(),
                                n = new La(i, e),
                                r = n.computeDocChanges(t);
                            return n.applyChanges(r, !1).snapshot
                        })
                    }, t.prototype.write = function(t) {
                        var e = this,
                            n = new Io;
                        return this.asyncQueue.enqueueAndForget(function() {
                            return e.syncEngine.write(t, n)
                        }), n.promise
                    }, t.prototype.databaseId = function() {
                        return this.databaseInfo.databaseId
                    }, t.prototype.transaction = function(t) {
                        var e = this;
                        return this.asyncQueue.enqueue(function() {
                            return h(e, void 0, void 0, function() {
                                return p(this, function(t) {
                                    return [2]
                                })
                            })
                        }).then(function() {
                            return e.syncEngine.runTransaction(t)
                        })
                    }, t
                }(),
                nu = function() {
                    function t(t) {
                        this.observer = t, this.muted = !1
                    }
                    return t.prototype.next = function(t) {
                        this.scheduleEvent(this.observer.next, t)
                    }, t.prototype.error = function(t) {
                        this.scheduleEvent(this.observer.error, t)
                    }, t.prototype.mute = function() {
                        this.muted = !0
                    }, t.prototype.scheduleEvent = function(t, e) {
                        var n = this;
                        this.muted || setTimeout(function() {
                            n.muted || t(e)
                        }, 0)
                    }, t
                }(),
                ru = function() {
                    function e() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        ! function(t, e, n, r) {
                            if (!(e instanceof Array) || e.length < r) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " argument to be an array with at least " + Gn(r, "element") + ".")
                        }("FieldPath", t, "fieldNames", 1);
                        for (var n = 0; n < t.length; ++n)
                            if (On("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new Sn(En.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                        this._internalPath = new dr(t)
                    }
                    return e.documentId = function() {
                        return e._DOCUMENT_ID
                    }, e.prototype.isEqual = function(t) {
                        if (!(t instanceof e)) throw jn("isEqual", "FieldPath", 1, t);
                        return this._internalPath.isEqual(t._internalPath)
                    }, e._DOCUMENT_ID = new e(dr.keyField().canonicalString()), e
                }(),
                iu = new RegExp("[~\\*/\\[\\]]");
            var ou = function(t, e) {
                    this.user = e, this.type = "OAuth", this.authHeaders = {
                        Authorization: "Bearer " + t
                    }
                },
                su = function() {
                    function t() {
                        this.changeListener = null
                    }
                    return t.prototype.getToken = function() {
                        return Promise.resolve(null)
                    }, t.prototype.invalidateToken = function() {}, t.prototype.setChangeListener = function(t) {
                        vn(!this.changeListener, "Can only call setChangeListener() once."), (this.changeListener = t)(Ba.UNAUTHENTICATED)
                    }, t.prototype.removeChangeListener = function() {
                        vn(null !== this.changeListener, "removeChangeListener() when no listener registered"), this.changeListener = null
                    }, t
                }(),
                au = function() {
                    function t(t) {
                        var e = this;
                        this.app = t, this.tokenListener = null, this.tokenCounter = 0, this.changeListener = null, this.forceRefresh = !1, this.tokenListener = function() {
                            e.tokenCounter++, e.currentUser = e.getUser(), e.changeListener && e.changeListener(e.currentUser)
                        }, this.tokenCounter = 0, this.app.INTERNAL.addAuthTokenListener(this.tokenListener)
                    }
                    return t.prototype.getToken = function() {
                        var e = this;
                        vn(null != this.tokenListener, "getToken cannot be called after listener removed.");
                        var n = this.tokenCounter,
                            t = this.forceRefresh;
                        return this.forceRefresh = !1, this.app.INTERNAL.getToken(t).then(function(t) {
                            if (e.tokenCounter !== n) throw new Sn(En.ABORTED, "getToken aborted due to token change.");
                            return t ? (vn("string" == typeof t.accessToken, "Invalid tokenData returned from getToken():" + t), new ou(t.accessToken, e.currentUser)) : null
                        })
                    }, t.prototype.invalidateToken = function() {
                        this.forceRefresh = !0
                    }, t.prototype.setChangeListener = function(t) {
                        vn(!this.changeListener, "Can only call setChangeListener() once."), this.changeListener = t, this.currentUser && t(this.currentUser)
                    }, t.prototype.removeChangeListener = function() {
                        vn(null != this.tokenListener, "removeChangeListener() called twice"), vn(null !== this.changeListener, "removeChangeListener() called when no listener registered"), this.app.INTERNAL.removeAuthTokenListener(this.tokenListener), this.tokenListener = null, this.changeListener = null
                    }, t.prototype.getUser = function() {
                        var t = this.app.INTERNAL.getUid();
                        return vn(null === t || "string" == typeof t, "Received invalid UID: " + t), new Ba(t)
                    }, t
                }(),
                uu = function() {
                    function t(t, e) {
                        this.gapi = t, this.sessionIndex = e, this.type = "FirstParty", this.user = Ba.FIRST_PARTY
                    }
                    return Object.defineProperty(t.prototype, "authHeaders", {
                        get: function() {
                            var t = {
                                    "X-Goog-AuthUser": this.sessionIndex
                                },
                                e = this.gapi.auth.getAuthHeaderValueForFirstParty([]);
                            return e && (t.Authorization = e), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                cu = function() {
                    function t(t, e) {
                        this.gapi = t, this.sessionIndex = e
                    }
                    return t.prototype.getToken = function() {
                        return Promise.resolve(new uu(this.gapi, this.sessionIndex))
                    }, t.prototype.setChangeListener = function(t) {
                        t(Ba.FIRST_PARTY)
                    }, t.prototype.removeChangeListener = function() {}, t.prototype.invalidateToken = function() {}, t
                }();

            function hu(t) {
                return function(t, e) {
                    if ("object" != typeof t || null === t) return !1;
                    for (var n = t, r = 0, i = e; r < i.length; r++) {
                        var o = i[r];
                        if (o in n && "function" == typeof n[o]) return !0
                    }
                    return !1
                }(t, ["next", "error", "complete"])
            }
            var lu, fu, pu = function() {
                    function t(t) {
                        this._methodName = t
                    }
                    return t.delete = function() {
                        return kn("FieldValue.delete", arguments), du.instance
                    }, t.serverTimestamp = function() {
                        return kn("FieldValue.serverTimestamp", arguments), mu.instance
                    }, t.arrayUnion = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return Mn("FieldValue.arrayUnion", arguments, 1), new yu(t)
                    }, t.arrayRemove = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return Mn("FieldValue.arrayRemove", arguments, 1), new gu(t)
                    }, t.increment = function(t) {
                        return On("FieldValue.increment", "number", 1, t), Rn("FieldValue.increment", arguments, 1), new vu(t)
                    }, t.prototype.isEqual = function(t) {
                        return this === t
                    }, t
                }(),
                du = function(t) {
                    function e() {
                        return t.call(this, "FieldValue.delete") || this
                    }
                    return a(e, t), e.instance = new e, e
                }(pu),
                mu = function(t) {
                    function e() {
                        return t.call(this, "FieldValue.serverTimestamp") || this
                    }
                    return a(e, t), e.instance = new e, e
                }(pu),
                yu = function(n) {
                    function t(t) {
                        var e = n.call(this, "FieldValue.arrayUnion") || this;
                        return e._elements = t, e
                    }
                    return a(t, n), t
                }(pu),
                gu = function(n) {
                    function t(t) {
                        var e = n.call(this, "FieldValue.arrayRemove") || this;
                        return e._elements = t, e
                    }
                    return a(t, n), t
                }(pu),
                vu = function(n) {
                    function t(t) {
                        var e = n.call(this, "FieldValue.increment") || this;
                        return e._operand = t, e
                    }
                    return a(t, n), t
                }(pu),
                bu = Tn(pu, "Use FieldValue.<field>() instead."),
                wu = /^__.*__$/,
                Eu = function() {
                    function t(t, e, n) {
                        this.data = t, this.fieldMask = e, this.fieldTransforms = n
                    }
                    return t.prototype.toMutations = function(t, e) {
                        var n = [];
                        return null !== this.fieldMask ? n.push(new gi(t, this.data, this.fieldMask, e)) : n.push(new yi(t, this.data, e)), 0 < this.fieldTransforms.length && n.push(new vi(t, this.fieldTransforms)), n
                    }, t
                }(),
                Su = function() {
                    function t(t, e, n) {
                        this.data = t, this.fieldMask = e, this.fieldTransforms = n
                    }
                    return t.prototype.toMutations = function(t, e) {
                        var n = [new gi(t, this.data, this.fieldMask, e)];
                        return 0 < this.fieldTransforms.length && n.push(new vi(t, this.fieldTransforms)), n
                    }, t
                }();

            function Tu(t) {
                switch (t) {
                    case lu.Set:
                    case lu.MergeSet:
                    case lu.Update:
                        return !0;
                    case lu.Argument:
                        return !1;
                    default:
                        throw gn("Unexpected case for UserDataSource: " + t)
                }
            }(fu = lu || (lu = {}))[fu.Set = 0] = "Set", fu[fu.Update = 1] = "Update", fu[fu.MergeSet = 2] = "MergeSet", fu[fu.Argument = 3] = "Argument";
            var Iu = function() {
                    function r(t, e, n, r, i, o) {
                        this.dataSource = t, this.methodName = e, this.path = n, this.arrayElement = r, void 0 === i && this.validatePath(), this.arrayElement = void 0 !== r && r, this.fieldTransforms = i || [], this.fieldMask = o || []
                    }
                    return r.prototype.childContextForField = function(t) {
                        var e = null == this.path ? null : this.path.child(t),
                            n = new r(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask);
                        return n.validatePathSegment(t), n
                    }, r.prototype.childContextForFieldPath = function(t) {
                        var e = null == this.path ? null : this.path.child(t),
                            n = new r(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask);
                        return n.validatePath(), n
                    }, r.prototype.childContextForArray = function(t) {
                        return new r(this.dataSource, this.methodName, null, !0, this.fieldTransforms, this.fieldMask)
                    }, r.prototype.createError = function(t) {
                        var e = null === this.path || this.path.isEmpty() ? "" : " (found in field " + this.path.toString() + ")";
                        return new Sn(En.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e)
                    }, r.prototype.contains = function(e) {
                        return void 0 !== this.fieldMask.find(function(t) {
                            return e.isPrefixOf(t)
                        }) || void 0 !== this.fieldTransforms.find(function(t) {
                            return e.isPrefixOf(t.field)
                        })
                    }, r.prototype.validatePath = function() {
                        if (null !== this.path)
                            for (var t = 0; t < this.path.length; t++) this.validatePathSegment(this.path.get(t))
                    }, r.prototype.validatePathSegment = function(t) {
                        if (Tu(this.dataSource) && wu.test(t)) throw this.createError("Document fields cannot begin and end with __")
                    }, r
                }(),
                Cu = function(t, e) {
                    this.databaseId = t, this.key = e
                },
                Du = function() {
                    function t(t) {
                        this.preConverter = t
                    }
                    return t.prototype.parseSetData = function(t, e) {
                        var n = new Iu(lu.Set, t, dr.EMPTY_PATH);
                        Au("Data must be an object, but it was:", n, e);
                        var r = this.parseData(e, n);
                        return new Eu(r, null, n.fieldTransforms)
                    }, t.prototype.parseMergeData = function(t, e, n) {
                        var r = new Iu(lu.MergeSet, t, dr.EMPTY_PATH);
                        Au("Data must be an object, but it was:", r, e);
                        var i, o, s = this.parseData(e, r);
                        if (n) {
                            for (var a = new ci(dr.comparator), u = 0, c = n; u < c.length; u++) {
                                var h = c[u],
                                    l = void 0;
                                if (h instanceof ru) l = h._internalPath;
                                else {
                                    if ("string" != typeof h) throw gn("Expected stringOrFieldPath to be a string or a FieldPath");
                                    l = Ru(t, h)
                                }
                                if (!r.contains(l)) throw new Sn(En.INVALID_ARGUMENT, "Field '" + l + "' is specified in your field mask but missing from your input data.");
                                a = a.add(l)
                            }
                            i = li.fromSet(a), o = r.fieldTransforms.filter(function(t) {
                                return i.covers(t.field)
                            })
                        } else i = li.fromArray(r.fieldMask), o = r.fieldTransforms;
                        return new Eu(s, i, o)
                    }, t.prototype.parseUpdateData = function(o, t) {
                        var s = this,
                            a = new Iu(lu.Update, o, dr.EMPTY_PATH);
                        Au("Data must be an object, but it was:", a, t);
                        var u = new ci(dr.comparator),
                            c = Fr.EMPTY;
                        Nn(t, function(t, e) {
                            var n = Ru(o, t),
                                r = a.childContextForFieldPath(n);
                            if ((e = s.runPreConverter(e, r)) instanceof du) u = u.add(n);
                            else {
                                var i = s.parseData(e, r);
                                null != i && (u = u.add(n), c = c.set(n, i))
                            }
                        });
                        var e = li.fromSet(u);
                        return new Su(c, e, a.fieldTransforms)
                    }, t.prototype.parseUpdateVarargs = function(t, e, n, r) {
                        var i = new Iu(lu.Update, t, dr.EMPTY_PATH),
                            o = [ku(t, e)],
                            s = [n];
                        if (r.length % 2 != 0) throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
                        for (var a = 0; a < r.length; a += 2) o.push(ku(t, r[a])), s.push(r[a + 1]);
                        var u = new ci(dr.comparator),
                            c = Fr.EMPTY;
                        for (a = 0; a < o.length; ++a) {
                            var h = o[a],
                                l = i.childContextForFieldPath(h),
                                f = this.runPreConverter(s[a], l);
                            if (f instanceof du) u = u.add(h);
                            else {
                                var p = this.parseData(f, l);
                                null != p && (u = u.add(h), c = c.set(h, p))
                            }
                        }
                        var d = li.fromSet(u);
                        return new Su(c, d, i.fieldTransforms)
                    }, t.prototype.parseQueryValue = function(t, e) {
                        var n = new Iu(lu.Argument, t, dr.EMPTY_PATH),
                            r = this.parseData(e, n);
                        return vn(null != r, "Parsed data should not be null."), vn(0 === n.fieldTransforms.length, "Field transforms should have been disallowed."), r
                    }, t.prototype.runPreConverter = function(t, e) {
                        try {
                            return this.preConverter(t)
                        } catch (t) {
                            var n = Mu(t);
                            throw e.createError(n)
                        }
                    }, t.prototype.parseData = function(t, e) {
                        if (Nu(t = this.runPreConverter(t, e))) return Au("Unsupported field value:", e, t), this.parseObject(t, e);
                        if (t instanceof pu) return this.parseSentinelFieldValue(t, e), null;
                        if (e.path && e.fieldMask.push(e.path), t instanceof Array) {
                            if (e.arrayElement) throw e.createError("Nested arrays are not supported");
                            return this.parseArray(t, e)
                        }
                        return this.parseScalarValue(t, e)
                    }, t.prototype.parseObject = function(t, r) {
                        var i = this,
                            o = new wr(Hn);
                        return An(t) ? r.path && 0 < r.path.length && r.fieldMask.push(r.path) : Nn(t, function(t, e) {
                            var n = i.parseData(e, r.childContextForField(t));
                            null != n && (o = o.insert(t, n))
                        }), new Fr(o)
                    }, t.prototype.parseArray = function(t, e) {
                        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                            var s = o[i],
                                a = this.parseData(s, e.childContextForArray(r));
                            null == a && (a = Dr.INSTANCE), n.push(a), r++
                        }
                        return new Vr(n)
                    }, t.prototype.parseSentinelFieldValue = function(t, e) {
                        if (!Tu(e.dataSource)) throw e.createError(t._methodName + "() can only be used with update() and set()");
                        if (null === e.path) throw e.createError(t._methodName + "() is not currently supported inside arrays");
                        if (t instanceof du) {
                            if (e.dataSource !== lu.MergeSet) throw e.dataSource === lu.Update ? (vn(0 < e.path.length, "FieldValue.delete() at the top level should have already been handled."), e.createError("FieldValue.delete() can only appear at the top level of your update data")) : e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                            e.fieldMask.push(e.path)
                        } else if (t instanceof mu) e.fieldTransforms.push(new fi(e.path, wi.instance));
                        else if (t instanceof yu) {
                            var n = this.parseArrayTransformElements(t._methodName, t._elements),
                                r = new Ei(n);
                            e.fieldTransforms.push(new fi(e.path, r))
                        } else if (t instanceof gu) {
                            n = this.parseArrayTransformElements(t._methodName, t._elements);
                            var i = new Si(n);
                            e.fieldTransforms.push(new fi(e.path, i))
                        } else if (t instanceof vu) {
                            var o = this.parseQueryValue("FieldValue.increment", t._operand),
                                s = new Ti(o);
                            e.fieldTransforms.push(new fi(e.path, s))
                        } else gn("Unknown FieldValue type: " + t)
                    }, t.prototype.parseScalarValue = function(t, e) {
                        if (null === t) return Dr.INSTANCE;
                        if ("number" == typeof t) return Wr(t) ? new Rr(t) : new Mr(t);
                        if ("boolean" == typeof t) return Nr.of(t);
                        if ("string" == typeof t) return new _r(t);
                        if (t instanceof Date) return new Or(sr.fromDate(t));
                        if (t instanceof sr) return new Or(new sr(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)));
                        if (t instanceof or) return new qr(t);
                        if (t instanceof rr) return new Lr(t);
                        if (t instanceof Cu) return new xr(t.databaseId, t.key);
                        throw e.createError("Unsupported field value: " + Un(t))
                    }, t.prototype.parseArrayTransformElements = function(r, t) {
                        var i = this;
                        return t.map(function(t, e) {
                            var n = new Iu(lu.Argument, r, dr.EMPTY_PATH);
                            return i.parseData(t, n.childContextForArray(e))
                        })
                    }, t
                }();

            function Nu(t) {
                return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof sr || t instanceof or || t instanceof rr || t instanceof Cu || t instanceof pu)
            }

            function Au(t, e, n) {
                if (!Nu(n) || !Bn(n)) {
                    var r = Un(n);
                    throw "an object" === r ? e.createError(t + " a custom object") : e.createError(t + " " + r)
                }
            }

            function ku(t, e) {
                if (e instanceof ru) return e._internalPath;
                if ("string" == typeof e) return Ru(t, e);
                throw new Sn(En.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.")
            }

            function Ru(e, t) {
                try {
                    return function(e) {
                        if (0 <= e.search(iu)) throw new Sn(En.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");
                        try {
                            return new(ru.bind.apply(ru, [void 0].concat(e.split("."))))
                        } catch (t) {
                            throw new Sn(En.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
                        }
                    }(t)._internalPath
                } catch (t) {
                    var n = Mu(t);
                    throw new Sn(En.INVALID_ARGUMENT, "Function " + e + "() called with invalid data. " + n)
                }
            }

            function Mu(t) {
                return t instanceof Error ? t.message : t.toString()
            }
            var _u = Qs.COLLECTION_DISABLED,
                Ou = function() {
                    function t(t) {
                        if (void 0 === t.host) {
                            if (void 0 !== t.ssl) throw new Sn(En.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                            this.host = "firestore.googleapis.com", this.ssl = !0
                        } else Ln("settings", "non-empty string", "host", t.host), this.host = t.host, xn("settings", "boolean", "ssl", t.ssl), this.ssl = Cn(t.ssl, !0);
                        if (Kn("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes"]), xn("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, xn("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), !0 === t.timestampsInSnapshots ? mn("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && mn("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), this.timestampsInSnapshots = Cn(t.timestampsInSnapshots, !0), xn("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Qs.DEFAULT_CACHE_SIZE_BYTES;
                        else {
                            if (t.cacheSizeBytes !== _u && t.cacheSizeBytes < Qs.MINIMUM_CACHE_SIZE_BYTES) throw new Sn(En.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Qs.MINIMUM_CACHE_SIZE_BYTES);
                            this.cacheSizeBytes = t.cacheSizeBytes
                        }
                    }
                    return t.prototype.isEqual = function(t) {
                        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes
                    }, t
                }(),
                Pu = function() {},
                Lu = function() {
                    function o(t) {
                        var n = this;
                        this._queue = new Do, this.INTERNAL = {
                            delete: function(e) {
                                return h(n, void 0, void 0, function() {
                                    return p(this, function(t) {
                                        return this._firestoreClient ? [2, this._firestoreClient.shutdown(e)] : [2]
                                    })
                                })
                            }
                        };
                        var e = new Pu;
                        if ("object" == typeof t.options) {
                            var r = t;
                            e.firebaseApp = r, e.databaseId = o.databaseIdFromApp(r), e.persistenceKey = e.firebaseApp.name, e.credentials = new au(r)
                        } else {
                            var i = t;
                            if (!i.projectId) throw new Sn(En.INVALID_ARGUMENT, "Must provide projectId");
                            e.databaseId = new cr(i.projectId, i.database), e.persistenceKey = "[DEFAULT]", e.credentials = new su
                        }
                        e.settings = new Ou({}), this._config = e, this._databaseId = e.databaseId
                    }
                    return o.prototype.settings = function(t) {
                        if (Rn("Firestore.settings", arguments, 1), On("Firestore.settings", "object", 1, t), In(t, "persistence")) throw new Sn(En.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
                        var e = new Ou(t);
                        if (this._firestoreClient && !this._config.settings.isEqual(e)) throw new Sn(En.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                        void 0 !== (this._config.settings = e).credentials && (this._config.credentials = function(t) {
                            if (!t) return new su;
                            switch (t.type) {
                                case "gapi":
                                    var e = t.client;
                                    return vn(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), new cu(e, t.sessionIndex || "0");
                                case "provider":
                                    return t.client;
                                default:
                                    throw new Sn(En.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                            }
                        }(e.credentials))
                    }, o.prototype.enableNetwork = function() {
                        return this.ensureClientConfigured(), this._firestoreClient.enableNetwork()
                    }, o.prototype.disableNetwork = function() {
                        return this.ensureClientConfigured(), this._firestoreClient.disableNetwork()
                    }, o.prototype.enablePersistence = function(t) {
                        if (this._firestoreClient) throw new Sn(En.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                        return this.configureClient(new Za(this._config.settings.cacheSizeBytes, void 0 !== t && Cn(t.experimentalTabSynchronization, !1)))
                    }, o.prototype.ensureClientConfigured = function() {
                        return this._firestoreClient || this.configureClient(new tu), this._firestoreClient
                    }, o.prototype.configureClient = function(t) {
                        var r = this;
                        vn(!!this._config.settings.host, "FirestoreSettings.host cannot be falsey"), vn(!this._firestoreClient, "configureClient() called multiple times");
                        var e = new ar(this._config.databaseId, this._config.persistenceKey, this._config.settings.host, this._config.settings.ssl);
                        return this._dataConverter = new Du(function(t) {
                            if (t instanceof Fu) {
                                var e = r._config.databaseId,
                                    n = t.firestore._config.databaseId;
                                if (!n.isEqual(e)) throw new Sn(En.INVALID_ARGUMENT, "Document reference is for database " + n.projectId + "/" + n.database + " but should be for database " + e.projectId + "/" + e.database);
                                return new Cu(r._config.databaseId, t._key)
                            }
                            return t
                        }), this._firestoreClient = new eu(bn.getPlatform(), e, this._config.credentials, this._queue), this._firestoreClient.start(t)
                    }, o.databaseIdFromApp = function(t) {
                        var e = t.options;
                        if (!In(e, "projectId")) throw new Sn(En.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                        var n = e.projectId;
                        if (!n || "string" != typeof n) throw new Sn(En.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
                        return new cr(n)
                    }, Object.defineProperty(o.prototype, "app", {
                        get: function() {
                            if (!this._config.firebaseApp) throw new Sn(En.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                            return this._config.firebaseApp
                        },
                        enumerable: !0,
                        configurable: !0
                    }), o.prototype.collection = function(t) {
                        return Rn("Firestore.collection", arguments, 1), On("Firestore.collection", "non-empty string", 1, t), this.ensureClientConfigured(), new ju(fr.fromString(t), this)
                    }, o.prototype.doc = function(t) {
                        return Rn("Firestore.doc", arguments, 1), On("Firestore.doc", "non-empty string", 1, t), this.ensureClientConfigured(), Fu.forPath(fr.fromString(t), this)
                    }, o.prototype._collectionGroup = function(t) {
                        if (Rn("Firestore.collectionGroup", arguments, 1), On("Firestore.collectionGroup", "non-empty string", 1, t), 0 <= t.indexOf("/")) throw new Sn(En.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
                        return this.ensureClientConfigured(), new Qu(new Hr(fr.EMPTY_PATH, t), this)
                    }, o.prototype.runTransaction = function(e) {
                        var n = this;
                        return Rn("Firestore.runTransaction", arguments, 1), On("Firestore.runTransaction", "function", 1, e), this.ensureClientConfigured().transaction(function(t) {
                            return e(new xu(n, t))
                        })
                    }, o.prototype.batch = function() {
                        return this.ensureClientConfigured(), new qu(this)
                    }, Object.defineProperty(o, "logLevel", {
                        get: function() {
                            switch (fn()) {
                                case an.DEBUG:
                                    return "debug";
                                case an.ERROR:
                                    return "error";
                                case an.SILENT:
                                    return "silent";
                                default:
                                    return gn("Unknown log level: " + fn())
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), o.setLogLevel = function(t) {
                        switch (Rn("Firestore.setLogLevel", arguments, 1), On("Firestore.setLogLevel", "non-empty string", 1, t), t) {
                            case "debug":
                                pn(an.DEBUG);
                                break;
                            case "error":
                                pn(an.ERROR);
                                break;
                            case "silent":
                                pn(an.SILENT);
                                break;
                            default:
                                throw new Sn(En.INVALID_ARGUMENT, "Invalid log level: " + t)
                        }
                    }, o.prototype._areTimestampsInSnapshotsEnabled = function() {
                        return this._config.settings.timestampsInSnapshots
                    }, o
                }(),
                xu = function() {
                    function t(t, e) {
                        this._firestore = t, this._transaction = e
                    }
                    return t.prototype.get = function(t) {
                        var n = this;
                        Rn("Transaction.get", arguments, 1);
                        var r = Hu("Transaction.get", t, this._firestore);
                        return this._transaction.lookup([r._key]).then(function(t) {
                            if (!t || 1 !== t.length) return gn("Mismatch in docs returned from document lookup.");
                            var e = t[0];
                            if (e instanceof vr) return new Bu(n._firestore, r._key, null, !1, !1);
                            if (e instanceof gr) return new Bu(n._firestore, r._key, e, !1, !1);
                            throw gn("BatchGetDocumentsRequest returned unexpected document type: " + e.constructor.name)
                        })
                    }, t.prototype.set = function(t, e, n) {
                        _n("Transaction.set", arguments, 2, 3);
                        var r = Hu("Transaction.set", t, this._firestore),
                            i = (n = Wu("Transaction.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("Transaction.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("Transaction.set", e);
                        return this._transaction.set(r._key, i), this
                    }, t.prototype.update = function(t, e, n) {
                        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                        return i = "string" == typeof e || e instanceof ru ? (Mn("Transaction.update", arguments, 3), r = Hu("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("Transaction.update", e, n, o)) : (Rn("Transaction.update", arguments, 2), r = Hu("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("Transaction.update", e)), this._transaction.update(r._key, i), this
                    }, t.prototype.delete = function(t) {
                        Rn("Transaction.delete", arguments, 1);
                        var e = Hu("Transaction.delete", t, this._firestore);
                        return this._transaction.delete(e._key), this
                    }, t
                }(),
                qu = function() {
                    function t(t) {
                        this._firestore = t, this._mutations = [], this._committed = !1
                    }
                    return t.prototype.set = function(t, e, n) {
                        _n("WriteBatch.set", arguments, 2, 3), this.verifyNotCommitted();
                        var r = Hu("WriteBatch.set", t, this._firestore),
                            i = (n = Wu("WriteBatch.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("WriteBatch.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("WriteBatch.set", e);
                        return this._mutations = this._mutations.concat(i.toMutations(r._key, di.NONE)), this
                    }, t.prototype.update = function(t, e, n) {
                        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                        return this.verifyNotCommitted(), i = "string" == typeof e || e instanceof ru ? (Mn("WriteBatch.update", arguments, 3), r = Hu("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update", e, n, o)) : (Rn("WriteBatch.update", arguments, 2), r = Hu("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("WriteBatch.update", e)), this._mutations = this._mutations.concat(i.toMutations(r._key, di.exists(!0))), this
                    }, t.prototype.delete = function(t) {
                        Rn("WriteBatch.delete", arguments, 1), this.verifyNotCommitted();
                        var e = Hu("WriteBatch.delete", t, this._firestore);
                        return this._mutations = this._mutations.concat(new bi(e._key, di.NONE)), this
                    }, t.prototype.commit = function() {
                        return h(this, void 0, void 0, function() {
                            return p(this, function(t) {
                                return this.verifyNotCommitted(), this._committed = !0, 0 < this._mutations.length ? [2, this._firestore.ensureClientConfigured().write(this._mutations)] : [2]
                            })
                        })
                    }, t.prototype.verifyNotCommitted = function() {
                        if (this._committed) throw new Sn(En.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                    }, t
                }(),
                Fu = function() {
                    function n(t, e) {
                        this._key = t, this.firestore = e, this._firestoreClient = this.firestore.ensureClientConfigured()
                    }
                    return n.forPath = function(t, e) {
                        if (t.length % 2 != 0) throw new Sn(En.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length);
                        return new n(new mr(t), e)
                    }, Object.defineProperty(n.prototype, "id", {
                        get: function() {
                            return this._key.path.lastSegment()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "parent", {
                        get: function() {
                            return new ju(this._key.path.popLast(), this.firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "path", {
                        get: function() {
                            return this._key.path.canonicalString()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.collection = function(t) {
                        if (Rn("DocumentReference.collection", arguments, 1), On("DocumentReference.collection", "non-empty string", 1, t), !t) throw new Sn(En.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
                        var e = fr.fromString(t);
                        return new ju(this._key.path.child(e), this.firestore)
                    }, n.prototype.isEqual = function(t) {
                        if (!(t instanceof n)) throw jn("isEqual", "DocumentReference", 1, t);
                        return this.firestore === t.firestore && this._key.isEqual(t._key)
                    }, n.prototype.set = function(t, e) {
                        _n("DocumentReference.set", arguments, 1, 2);
                        var n = (e = Wu("DocumentReference.set", e)).merge || e.mergeFields ? this.firestore._dataConverter.parseMergeData("DocumentReference.set", t, e.mergeFields) : this.firestore._dataConverter.parseSetData("DocumentReference.set", t);
                        return this._firestoreClient.write(n.toMutations(this._key, di.NONE))
                    }, n.prototype.update = function(t, e) {
                        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                        return n = "string" == typeof t || t instanceof ru ? (Mn("DocumentReference.update", arguments, 2), this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update", t, e, r)) : (Rn("DocumentReference.update", arguments, 1), this.firestore._dataConverter.parseUpdateData("DocumentReference.update", t)), this._firestoreClient.write(n.toMutations(this._key, di.exists(!0)))
                    }, n.prototype.delete = function() {
                        return Rn("DocumentReference.delete", arguments, 0), this._firestoreClient.write([new bi(this._key, di.NONE)])
                    }, n.prototype.onSnapshot = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        _n("DocumentReference.onSnapshot", arguments, 1, 4);
                        var n, r = {
                                includeMetadataChanges: !1
                            },
                            i = 0;
                        "object" != typeof t[i] || hu(t[i]) || (Kn("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), xn("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
                        var o = {
                            includeMetadataChanges: r.includeMetadataChanges
                        };
                        return n = hu(t[i]) ? t[i] : (On("DocumentReference.onSnapshot", "function", i, t[i]), Pn("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), Pn("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), {
                            next: t[i],
                            error: t[i + 1],
                            complete: t[i + 2]
                        }), this.onSnapshotInternal(o, n)
                    }, n.prototype.onSnapshotInternal = function(t, n) {
                        var r = this,
                            e = function(t) {
                                console.error("Uncaught Error in onSnapshot:", t)
                            };
                        n.error && (e = n.error.bind(n));
                        var i = new nu({
                                next: function(t) {
                                    if (n.next) {
                                        vn(t.docs.size <= 1, "Too many documents returned on a document query");
                                        var e = t.docs.get(r._key);
                                        n.next(new Bu(r.firestore, r._key, e, t.fromCache, t.hasPendingWrites))
                                    }
                                },
                                error: e
                            }),
                            o = this._firestoreClient.listen(Hr.atPath(this._key.path), i, t);
                        return function() {
                            i.mute(), r._firestoreClient.unlisten(o)
                        }
                    }, n.prototype.get = function(n) {
                        var r = this;
                        return _n("DocumentReference.get", arguments, 0, 1), zu("DocumentReference.get", n), new Promise(function(e, t) {
                            n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentFromLocalCache(r._key).then(function(t) {
                                e(new Bu(r.firestore, r._key, t, !0, t instanceof gr && t.hasLocalMutations))
                            }, t) : r.getViaSnapshotListener(e, t, n)
                        })
                    }, n.prototype.getViaSnapshotListener = function(e, n, r) {
                        var i = this.onSnapshotInternal({
                            includeMetadataChanges: !0,
                            waitForSyncWhenOnline: !0
                        }, {
                            next: function(t) {
                                i(), !t.exists && t.metadata.fromCache ? n(new Sn(En.UNAVAILABLE, "Failed to get document because the client is offline.")) : t.exists && t.metadata.fromCache && r && "server" === r.source ? n(new Sn(En.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : e(t)
                            },
                            error: n
                        })
                    }, n
                }(),
                Vu = function() {
                    function t(t, e) {
                        this.hasPendingWrites = t, this.fromCache = e
                    }
                    return t.prototype.isEqual = function(t) {
                        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
                    }, t
                }(),
                Bu = function() {
                    function e(t, e, n, r, i) {
                        this._firestore = t, this._key = e, this._document = n, this._fromCache = r, this._hasPendingWrites = i
                    }
                    return e.prototype.data = function(t) {
                        return _n("DocumentSnapshot.data", arguments, 0, 1), t = Gu("DocumentSnapshot.data", t), this._document ? this.convertObject(this._document.data, Ir.fromSnapshotOptions(t, this._firestore._areTimestampsInSnapshotsEnabled())) : void 0
                    }, e.prototype.get = function(t, e) {
                        if (_n("DocumentSnapshot.get", arguments, 1, 2), e = Gu("DocumentSnapshot.get", e), this._document) {
                            var n = this._document.data.field(ku("DocumentSnapshot.get", t));
                            if (void 0 !== n) return this.convertValue(n, Ir.fromSnapshotOptions(e, this._firestore._areTimestampsInSnapshotsEnabled()))
                        }
                    }, Object.defineProperty(e.prototype, "id", {
                        get: function() {
                            return this._key.path.lastSegment()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "ref", {
                        get: function() {
                            return new Fu(this._key, this._firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "exists", {
                        get: function() {
                            return null !== this._document
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "metadata", {
                        get: function() {
                            return new Vu(this._hasPendingWrites, this._fromCache)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function(t) {
                        if (!(t instanceof e)) throw jn("isEqual", "DocumentSnapshot", 1, t);
                        return this._firestore === t._firestore && this._fromCache === t._fromCache && this._key.isEqual(t._key) && (null === this._document ? null === t._document : this._document.isEqual(t._document))
                    }, e.prototype.convertObject = function(t, n) {
                        var r = this,
                            i = {};
                        return t.forEach(function(t, e) {
                            i[t] = r.convertValue(e, n)
                        }), i
                    }, e.prototype.convertValue = function(t, e) {
                        if (t instanceof Fr) return this.convertObject(t, e);
                        if (t instanceof Vr) return this.convertArray(t, e);
                        if (t instanceof xr) {
                            var n = t.value(e),
                                r = this._firestore.ensureClientConfigured().databaseId();
                            return t.databaseId.isEqual(r) || mn("Document " + this._key.path + " contains a document reference within a different database (" + t.databaseId.projectId + "/" + t.databaseId.database + ") which is not supported. It will be treated as a reference in the current database (" + r.projectId + "/" + r.database + ") instead."), new Fu(n, this._firestore)
                        }
                        return t.value(e)
                    }, e.prototype.convertArray = function(t, e) {
                        var n = this;
                        return t.internalValue.map(function(t) {
                            return n.convertValue(t, e)
                        })
                    }, e
                }(),
                Uu = function(o) {
                    function t(t, e, n, r, i) {
                        return o.call(this, t, e, n, r, i) || this
                    }
                    return a(t, o), t.prototype.data = function(t) {
                        var e = o.prototype.data.call(this, t);
                        return vn("object" == typeof e, "Document in a QueryDocumentSnapshot should exist"), e
                    }, t
                }(Bu),
                Qu = function() {
                    function c(t, e) {
                        this._query = t, this.firestore = e
                    }
                    return c.prototype.where = function(t, e, n) {
                        var r;
                        Rn("Query.where", arguments, 3), On("Query.where", "non-empty string", 2, e), Qn("Query.where", 3, n);
                        var i = ku("Query.where", t),
                            o = Xr.fromString(e);
                        if (i.isKeyField()) {
                            if (o === Xr.ARRAY_CONTAINS) throw new Sn(En.INVALID_ARGUMENT, "Invalid Query. You can't perform array-contains queries on FieldPath.documentId() since document IDs are not arrays.");
                            if ("string" == typeof n) {
                                if ("" === n) throw new Sn(En.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it was an empty string.");
                                if (!this._query.isCollectionGroupQuery() && -1 !== n.indexOf("/")) throw new Sn(En.INVALID_ARGUMENT, "Invalid third parameter to Query.where(). When querying a collection by FieldPath.documentId(), the value provided must be a plain document ID, but '" + n + "' contains a slash.");
                                var s = this._query.path.child(fr.fromString(n));
                                if (!mr.isDocumentKey(s)) throw new Sn(En.INVALID_ARGUMENT, "Invalid third parameter to Query.where(). When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + s + "' is not because it has an odd number of segments (" + s.length + ").");
                                r = new xr(this.firestore._databaseId, new mr(s))
                            } else {
                                if (!(n instanceof Fu)) throw new Sn(En.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a string or a DocumentReference if the first parameter is FieldPath.documentId(), but it was: " + Un(n) + ".");
                                var a = n;
                                r = new xr(this.firestore._databaseId, a._key)
                            }
                        } else r = this.firestore._dataConverter.parseQueryValue("Query.where", n);
                        var u = Yr.create(i, o, r);
                        return this.validateNewFilter(u), new c(this._query.addFilter(u), this.firestore)
                    }, c.prototype.orderBy = function(t, e) {
                        var n;
                        if (_n("Query.orderBy", arguments, 1, 2), Pn("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e) n = ti.ASCENDING;
                        else {
                            if ("desc" !== e) throw new Sn(En.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
                            n = ti.DESCENDING
                        }
                        if (null !== this._query.startAt) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                        if (null !== this._query.endAt) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                        var r = ku("Query.orderBy", t),
                            i = new ni(r, n);
                        return this.validateNewOrderBy(i), new c(this._query.addOrderBy(i), this.firestore)
                    }, c.prototype.limit = function(t) {
                        if (Rn("Query.limit", arguments, 1), On("Query.limit", "number", 1, t), t <= 0) throw new Sn(En.INVALID_ARGUMENT, "Invalid Query. Query limit (" + t + ") is invalid. Limit must be positive.");
                        return new c(this._query.withLimit(t), this.firestore)
                    }, c.prototype.startAt = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        Mn("Query.startAt", arguments, 1);
                        var r = this.boundFromDocOrFields("Query.startAt", t, e, !0);
                        return new c(this._query.withStartAt(r), this.firestore)
                    }, c.prototype.startAfter = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        Mn("Query.startAfter", arguments, 1);
                        var r = this.boundFromDocOrFields("Query.startAfter", t, e, !1);
                        return new c(this._query.withStartAt(r), this.firestore)
                    }, c.prototype.endBefore = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        Mn("Query.endBefore", arguments, 1);
                        var r = this.boundFromDocOrFields("Query.endBefore", t, e, !0);
                        return new c(this._query.withEndAt(r), this.firestore)
                    }, c.prototype.endAt = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        Mn("Query.endAt", arguments, 1);
                        var r = this.boundFromDocOrFields("Query.endAt", t, e, !1);
                        return new c(this._query.withEndAt(r), this.firestore)
                    }, c.prototype.isEqual = function(t) {
                        if (!(t instanceof c)) throw jn("isEqual", "Query", 1, t);
                        return this.firestore === t.firestore && this._query.isEqual(t._query)
                    }, c.prototype.boundFromDocOrFields = function(t, e, n, r) {
                        if (Qn(t, 1, e), e instanceof Bu) {
                            if (0 < n.length) throw new Sn(En.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
                            var i = e;
                            if (!i.exists) throw new Sn(En.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
                            return this.boundFromDocument(t, i._document, r)
                        }
                        var o = [e].concat(n);
                        return this.boundFromFields(t, o, r)
                    }, c.prototype.boundFromDocument = function(t, e, n) {
                        for (var r = [], i = 0, o = this._query.orderBy; i < o.length; i++) {
                            var s = o[i];
                            if (s.field.isKeyField()) r.push(new xr(this.firestore._databaseId, e.key));
                            else {
                                var a = e.field(s.field);
                                if (a instanceof Pr) throw new Sn(En.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                                if (void 0 === a) {
                                    var u = s.field.canonicalString();
                                    throw new Sn(En.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.")
                                }
                                r.push(a)
                            }
                        }
                        return new ei(r, n)
                    }, c.prototype.boundFromFields = function(t, e, n) {
                        var r = this._query.explicitOrderBy;
                        if (e.length > r.length) throw new Sn(En.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                        for (var i = [], o = 0; o < e.length; o++) {
                            var s = e[o];
                            if (r[o].field.isKeyField()) {
                                if ("string" != typeof s) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                                if (!this._query.isCollectionGroupQuery() && -1 !== s.indexOf("/")) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                                var a = this._query.path.child(fr.fromString(s));
                                if (!mr.isDocumentKey(a)) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + a + "' is not because it contains an odd number of segments.");
                                var u = new mr(a);
                                i.push(new xr(this.firestore._databaseId, u))
                            } else {
                                var c = this.firestore._dataConverter.parseQueryValue(t, s);
                                i.push(c)
                            }
                        }
                        return new ei(i, n)
                    }, c.prototype.onSnapshot = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        _n("Query.onSnapshot", arguments, 1, 4);
                        var n, r = {},
                            i = 0;
                        return "object" != typeof t[i] || hu(t[i]) || (Kn("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), xn("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), n = hu(t[i]) ? t[i] : (On("Query.onSnapshot", "function", i, t[i]), Pn("Query.onSnapshot", "function", i + 1, t[i + 1]), Pn("Query.onSnapshot", "function", i + 2, t[i + 2]), {
                            next: t[i],
                            error: t[i + 1],
                            complete: t[i + 2]
                        }), this.onSnapshotInternal(r, n)
                    }, c.prototype.onSnapshotInternal = function(t, e) {
                        var n = this,
                            r = function(t) {
                                console.error("Uncaught Error in onSnapshot:", t)
                            };
                        e.error && (r = e.error.bind(e));
                        var i = new nu({
                                next: function(t) {
                                    e.next && e.next(new Ku(n.firestore, n._query, t))
                                },
                                error: r
                            }),
                            o = this.firestore.ensureClientConfigured(),
                            s = o.listen(this._query, i, t);
                        return function() {
                            i.mute(), o.unlisten(s)
                        }
                    }, c.prototype.get = function(n) {
                        var r = this;
                        return _n("Query.get", arguments, 0, 1), zu("Query.get", n), new Promise(function(e, t) {
                            n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentsFromLocalCache(r._query).then(function(t) {
                                e(new Ku(r.firestore, r._query, t))
                            }, t) : r.getViaSnapshotListener(e, t, n)
                        })
                    }, c.prototype.getViaSnapshotListener = function(e, n, r) {
                        var i = this.onSnapshotInternal({
                            includeMetadataChanges: !0,
                            waitForSyncWhenOnline: !0
                        }, {
                            next: function(t) {
                                i(), t.metadata.fromCache && r && "server" === r.source ? n(new Sn(En.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : e(t)
                            },
                            error: n
                        })
                    }, c.prototype.validateNewFilter = function(t) {
                        if (t instanceof Jr)
                            if (t.isInequality()) {
                                var e = this._query.getInequalityFilterField();
                                if (null !== e && !e.isEqual(t.field)) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + e.toString() + "' and '" + t.field.toString() + "'");
                                var n = this._query.getFirstOrderByField();
                                null !== n && this.validateOrderByAndInequalityMatch(t.field, n)
                            } else if (t.op === Xr.ARRAY_CONTAINS && this._query.hasArrayContainsFilter()) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. Queries only support a single array-contains filter.")
                    }, c.prototype.validateNewOrderBy = function(t) {
                        if (null === this._query.getFirstOrderByField()) {
                            var e = this._query.getInequalityFilterField();
                            null !== e && this.validateOrderByAndInequalityMatch(e, t.field)
                        }
                    }, c.prototype.validateOrderByAndInequalityMatch = function(t, e) {
                        if (!e.isEqual(t)) throw new Sn(En.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.")
                    }, c
                }(),
                Ku = function() {
                    function e(t, e, n) {
                        this._firestore = t, this._originalQuery = e, this._snapshot = n, this._cachedChanges = null, this._cachedChangesIncludeMetadataChanges = null, this.metadata = new Vu(n.hasPendingWrites, n.fromCache)
                    }
                    return Object.defineProperty(e.prototype, "docs", {
                        get: function() {
                            var e = [];
                            return this.forEach(function(t) {
                                return e.push(t)
                            }), e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "empty", {
                        get: function() {
                            return this._snapshot.docs.isEmpty()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            return this._snapshot.docs.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.forEach = function(e, n) {
                        var r = this;
                        _n("QuerySnapshot.forEach", arguments, 1, 2), On("QuerySnapshot.forEach", "function", 1, e), this._snapshot.docs.forEach(function(t) {
                            e.call(n, r.convertToDocumentImpl(t))
                        })
                    }, Object.defineProperty(e.prototype, "query", {
                        get: function() {
                            return new Qu(this._originalQuery, this._firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.docChanges = function(t) {
                        t && (Kn("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), xn("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
                        var e = !(!t || !t.includeMetadataChanges);
                        if (e && this._snapshot.excludesMetadataChanges) throw new Sn(En.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(i, e, o) {
                            {
                                if (o.oldDocs.isEmpty()) {
                                    var n, r = 0;
                                    return o.docChanges.map(function(t) {
                                        var e = new Uu(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key));
                                        return vn(t.type === Ui.Added, "Invalid event type for first snapshot"), vn(!n || o.query.docComparator(n, t.doc) < 0, "Got added events in wrong order"), n = t.doc, {
                                            type: "added",
                                            doc: e,
                                            oldIndex: -1,
                                            newIndex: r++
                                        }
                                    })
                                }
                                var s = o.oldDocs;
                                return o.docChanges.filter(function(t) {
                                    return e || t.type !== Ui.Metadata
                                }).map(function(t) {
                                    var e = new Uu(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key)),
                                        n = -1,
                                        r = -1;
                                    return t.type !== Ui.Added && (vn(0 <= (n = s.indexOf(t.doc.key)), "Index for document not found"), s = s.delete(t.doc.key)), t.type !== Ui.Removed && (s = s.add(t.doc), r = s.indexOf(t.doc.key)), {
                                        type: function(t) {
                                            switch (t) {
                                                case Ui.Added:
                                                    return "added";
                                                case Ui.Modified:
                                                case Ui.Metadata:
                                                    return "modified";
                                                case Ui.Removed:
                                                    return "removed";
                                                default:
                                                    return gn("Unknown change type: " + t)
                                            }
                                        }(t.type),
                                        doc: e,
                                        oldIndex: n,
                                        newIndex: r
                                    }
                                })
                            }
                        }(this._firestore, e, this._snapshot), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges
                    }, e.prototype.isEqual = function(t) {
                        if (!(t instanceof e)) throw jn("isEqual", "QuerySnapshot", 1, t);
                        return this._firestore === t._firestore && this._originalQuery.isEqual(t._originalQuery) && this._snapshot.isEqual(t._snapshot)
                    }, e.prototype.convertToDocumentImpl = function(t) {
                        return new Uu(this._firestore, t.key, t, this.metadata.fromCache, this._snapshot.mutatedKeys.has(t.key))
                    }, e
                }();
            ["length", "forEach", "map"].concat("undefined" != typeof Symbol ? [Symbol.iterator] : []).forEach(function(t) {
                try {
                    Object.defineProperty(Ku.prototype.docChanges, t, {
                        get: function() {
                            return function() {
                                throw new Sn(En.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')
                            }()
                        }
                    })
                } catch (t) {}
            });
            var ju = function(r) {
                function t(t, e) {
                    var n = r.call(this, Hr.atPath(t), e) || this;
                    if (t.length % 2 != 1) throw new Sn(En.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.canonicalString() + " has " + t.length);
                    return n
                }
                return a(t, r), Object.defineProperty(t.prototype, "id", {
                    get: function() {
                        return this._query.path.lastSegment()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parent", {
                    get: function() {
                        var t = this._query.path.popLast();
                        return t.isEmpty() ? null : new Fu(new mr(t), this.firestore)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "path", {
                    get: function() {
                        return this._query.path.canonicalString()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.doc = function(t) {
                    if (_n("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = zn.newId()), On("CollectionReference.doc", "non-empty string", 1, t), "" === t) throw new Sn(En.INVALID_ARGUMENT, "Document path must be a non-empty string");
                    var e = fr.fromString(t);
                    return Fu.forPath(this._query.path.child(e), this.firestore)
                }, t.prototype.add = function(t) {
                    Rn("CollectionReference.add", arguments, 1), On("CollectionReference.add", "object", 1, t);
                    var e = this.doc();
                    return e.set(t).then(function() {
                        return e
                    })
                }, t
            }(Qu);

            function Wu(t, e) {
                if (void 0 === e) return {
                    merge: !1
                };
                if (Kn(t, e, ["merge", "mergeFields"]), xn(t, "boolean", "merge", e.merge), qn(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function(t) {
                        return "string" == typeof t || t instanceof ru
                    }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new Sn(En.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
                return e
            }

            function Gu(t, e) {
                return void 0 === e ? {} : (Kn(t, e, ["serverTimestamps"]), Fn(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e)
            }

            function zu(t, e) {
                Pn(t, "object", 1, e), e && (Kn(t, e, ["source"]), Fn(t, 0, "source", e.source, ["default", "server", "cache"]))
            }

            function Hu(t, e, n) {
                if (e instanceof Fu) {
                    if (e.firestore !== n) throw new Sn(En.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                    return e
                }
                throw jn(t, "DocumentReference", 1, e)
            }
            var Yu = Tn(Lu, "Use firebase.firestore() instead."),
                Xu = Tn(xu, "Use firebase.firestore().runTransaction() instead."),
                Ju = Tn(qu, "Use firebase.firestore().batch() instead."),
                $u = Tn(Fu, "Use firebase.firestore().doc() instead."),
                Zu = Tn(Bu),
                tc = Tn(Uu),
                ec = Tn(Qu),
                nc = Tn(Ku),
                rc = Tn(ju, "Use firebase.firestore().collection() instead."),
                ic = {
                    Firestore: Yu,
                    GeoPoint: or,
                    Timestamp: sr,
                    Blob: ir,
                    Transaction: Xu,
                    WriteBatch: Ju,
                    DocumentReference: $u,
                    DocumentSnapshot: Zu,
                    Query: ec,
                    QueryDocumentSnapshot: tc,
                    QuerySnapshot: nc,
                    CollectionReference: rc,
                    FieldPath: ru,
                    FieldValue: bu,
                    setLogLevel: Lu.setLogLevel,
                    CACHE_SIZE_UNLIMITED: _u
                };

            function oc(t) {
                t.INTERNAL.registerService("firestore", function(t) {
                    return new Lu(t)
                }, function(t) {
                    vn(t && "object" == typeof t, "shallowCopy() expects object parameter.");
                    var e = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }(ic))
            }
            oc(sc)
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-firestore - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-firestore.js.map