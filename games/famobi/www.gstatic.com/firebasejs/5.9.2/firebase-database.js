! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function(tr) {
    "use strict";
    try {
        (function() {
            tr = tr && tr.hasOwnProperty("default") ? tr.default : tr;
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            };

            function s(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function e(n, r) {
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
            var t = !1,
                n = !1,
                i = "${JSCORE_VERSION}",
                C = function(t, e) {
                    if (!t) throw p(e)
                },
                p = function(t) {
                    return new Error("Firebase Database (" + i + ") INTERNAL ASSERT FAILED: " + t)
                },
                a = function(t) {
                    for (var e = [], n = 0, r = 0; r < t.length; r++) {
                        var i = t.charCodeAt(r);
                        e[n++] = i < 128 ? i : (e[n++] = i < 2048 ? i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < t.length && 56320 == (64512 & t.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r)), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128) : e[n++] = i >> 12 | 224, i >> 6 & 63 | 128), 63 & i | 128)
                    }
                    return e
                },
                h = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + "+/="
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + "-_."
                    },
                    HAS_NATIVE_SUPPORT: "function" == typeof atob,
                    encodeByteArray: function(t, e) {
                        if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
                        this.init_();
                        for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) {
                            var o = t[i],
                                s = i + 1 < t.length,
                                a = s ? t[i + 1] : 0,
                                h = i + 2 < t.length,
                                u = h ? t[i + 2] : 0,
                                l = o >> 2,
                                c = (3 & o) << 4 | a >> 4,
                                p = (15 & a) << 2 | u >> 6,
                                d = 63 & u;
                            h || (d = 64, s || (p = 64)), r.push(n[l], n[c], n[p], n[d])
                        }
                        return r.join("")
                    },
                    encodeString: function(t, e) {
                        return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(a(t), e)
                    },
                    decodeString: function(t, e) {
                        return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function(t) {
                            for (var e = [], n = 0, r = 0; n < t.length;) {
                                var i = t[n++];
                                if (i < 128) e[r++] = String.fromCharCode(i);
                                else if (191 < i && i < 224) {
                                    var o = t[n++];
                                    e[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                                } else if (239 < i && i < 365) {
                                    var s = ((7 & i) << 18 | (63 & (o = t[n++])) << 12 | (63 & (a = t[n++])) << 6 | 63 & t[n++]) - 65536;
                                    e[r++] = String.fromCharCode(55296 + (s >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & s))
                                } else {
                                    o = t[n++];
                                    var a = t[n++];
                                    e[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a)
                                }
                            }
                            return e.join("")
                        }(this.decodeStringToByteArray(t, e))
                    },
                    decodeStringToByteArray: function(t, e) {
                        this.init_();
                        for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length;) {
                            var o = n[t.charAt(i++)],
                                s = i < t.length ? n[t.charAt(i)] : 0,
                                a = ++i < t.length ? n[t.charAt(i)] : 64,
                                h = ++i < t.length ? n[t.charAt(i)] : 64;
                            if (++i, null == o || null == s || null == a || null == h) throw Error();
                            var u = o << 2 | s >> 4;
                            if (r.push(u), 64 != a) {
                                var l = s << 4 & 240 | a >> 2;
                                if (r.push(l), 64 != h) {
                                    var c = a << 6 & 192 | h;
                                    r.push(c)
                                }
                            }
                        }
                        return r
                    },
                    init_: function() {
                        if (!this.byteToCharMap_) {
                            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                            for (var t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
                        }
                    }
                },
                u = function(t) {
                    try {
                        return h.decodeString(t, !0)
                    } catch (t) {
                        console.error("base64Decode failed: ", t)
                    }
                    return null
                };

            function o(t) {
                return function t(e, n) {
                    if (!(n instanceof Object)) return n;
                    switch (n.constructor) {
                        case Date:
                            var r = n;
                            return new Date(r.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return n
                    }
                    for (var i in n) n.hasOwnProperty(i) && (e[i] = t(e[i], n[i]));
                    return e
                }(void 0, t)
            }
            var l = function() {
                    function t() {
                        var n = this;
                        this.promise = new Promise(function(t, e) {
                            n.resolve = t, n.reject = e
                        })
                    }
                    return t.prototype.wrapCallback = function(n) {
                        var r = this;
                        return function(t, e) {
                            t ? r.reject(t) : r.resolve(e), "function" == typeof n && (r.promise.catch(function() {}), 1 === n.length ? n(t) : n(t, e))
                        }
                    }, t
                }(),
                c = function() {
                    return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "")
                },
                d = function() {
                    return !0 === t || !0 === n
                },
                f = "FirebaseError",
                _ = Error.captureStackTrace,
                y = function(t, e) {
                    if (this.code = t, this.message = e, _) _(this, v.prototype.create);
                    else try {
                        throw Error.apply(this, arguments)
                    } catch (t) {
                        this.name = f, Object.defineProperty(this, "stack", {
                            get: function() {
                                return t.stack
                            }
                        })
                    }
                };
            y.prototype = Object.create(Error.prototype), (y.prototype.constructor = y).prototype.name = f;
            var v = function() {
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
                    var o = new y(i, e);
                    for (var s in r) r.hasOwnProperty(s) && "_" !== s.slice(-1) && (o[s] = r[s]);
                    return o
                }, t
            }();

            function g(t) {
                return JSON.parse(t)
            }

            function m(t) {
                return JSON.stringify(t)
            }
            var E = function(t) {
                    var e = {},
                        n = {},
                        r = {},
                        i = "";
                    try {
                        var o = t.split(".");
                        e = g(u(o[0]) || ""), n = g(u(o[1]) || ""), i = o[2], r = n.d || {}, delete n.d
                    } catch (t) {}
                    return {
                        header: e,
                        claims: n,
                        data: r,
                        signature: i
                    }
                },
                w = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                },
                b = function(t, e) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
                },
                S = function(t, e) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
                },
                T = function(t) {
                    return n = {}, S(t, function(t, e) {
                        n[t] = e
                    }), n;
                    var n
                },
                I = function(t) {
                    for (var e in t) return !1;
                    return !0
                },
                N = function(t) {
                    var e = 0;
                    for (var n in t) e++;
                    return e
                },
                R = function(t, e, n) {
                    var r = {};
                    for (var i in t) r[i] = e.call(n, t[i], i, t);
                    return r
                },
                P = function(t, e, n) {
                    for (var r in t)
                        if (e.call(n, t[r], r, t)) return r
                },
                D = function(t) {
                    for (var e in t) return e
                },
                O = function(n) {
                    function t() {
                        var t = n.call(this) || this;
                        t.chain_ = [], t.buf_ = [], t.W_ = [], t.pad_ = [], t.inbuf_ = 0, t.total_ = 0, t.blockSize = 64, t.pad_[0] = 128;
                        for (var e = 1; e < t.blockSize; ++e) t.pad_[e] = 0;
                        return t.reset(), t
                    }
                    return s(t, n), t.prototype.reset = function() {
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
                            h = this.chain_[1],
                            u = this.chain_[2],
                            l = this.chain_[3],
                            c = this.chain_[4];
                        for (r = 0; r < 80; r++) {
                            s = r < 40 ? r < 20 ? (o = l ^ h & (u ^ l), 1518500249) : (o = h ^ u ^ l, 1859775393) : r < 60 ? (o = h & u | l & (h | u), 2400959708) : (o = h ^ u ^ l, 3395469782);
                            i = (a << 5 | a >>> 27) + o + c + s + n[r] & 4294967295;
                            c = l, l = u, u = 4294967295 & (h << 30 | h >>> 2), h = a, a = i
                        }
                        this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + h & 4294967295, this.chain_[2] = this.chain_[2] + u & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + c & 4294967295
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
                    }, t
                }(function() {
                    this.blockSize = -1
                }),
                k = function(t, e, n, r) {
                    var i;
                    if (r < e ? i = "at least " + e : n < r && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(t + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
                };

            function x(t, e, n) {
                var r = "";
                switch (e) {
                    case 1:
                        r = n ? "first" : "First";
                        break;
                    case 2:
                        r = n ? "second" : "Second";
                        break;
                    case 3:
                        r = n ? "third" : "Third";
                        break;
                    case 4:
                        r = n ? "fourth" : "Fourth";
                        break;
                    default:
                        throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
                }
                var i = t + " failed: ";
                return i += r + " argument "
            }

            function F(t, e, n, r) {
                if ((!r || n) && "function" != typeof n) throw new Error(x(t, e, r) + "must be a valid function.")
            }

            function A(t, e, n, r) {
                if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(x(t, e, r) + "must be a valid context object.")
            }
            var L, M, W = function(t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    r < 128 ? e++ : r < 2048 ? e += 2 : 55296 <= r && r <= 56319 ? (e += 4, n++) : e += 3
                }
                return e
            };
            (M = L || (L = {}))[M.DEBUG = 0] = "DEBUG", M[M.VERBOSE = 1] = "VERBOSE", M[M.INFO = 2] = "INFO", M[M.WARN = 3] = "WARN", M[M.ERROR = 4] = "ERROR", M[M.SILENT = 5] = "SILENT";
            var q, Q = L.INFO,
                U = function(t, e) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    if (!(e < t.logLevel)) {
                        var i = (new Date).toISOString();
                        switch (e) {
                            case L.DEBUG:
                            case L.VERBOSE:
                                console.log.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            case L.INFO:
                                console.info.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            case L.WARN:
                                console.warn.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            case L.ERROR:
                                console.error.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
                                break;
                            default:
                                throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")")
                        }
                    }
                },
                V = function() {
                    function t(t) {
                        this.name = t, this._logLevel = Q, this._logHandler = U
                    }
                    return Object.defineProperty(t.prototype, "logLevel", {
                        get: function() {
                            return this._logLevel
                        },
                        set: function(t) {
                            if (!(t in L)) throw new TypeError("Invalid value assigned to `logLevel`");
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
                        this._logHandler.apply(this, [this, L.DEBUG].concat(t))
                    }, t.prototype.log = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, L.VERBOSE].concat(t))
                    }, t.prototype.info = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, L.INFO].concat(t))
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, L.WARN].concat(t))
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._logHandler.apply(this, [this, L.ERROR].concat(t))
                    }, t
                }(),
                H = function() {
                    function t(t) {
                        this.domStorage_ = t, this.prefix_ = "firebase:"
                    }
                    return t.prototype.set = function(t, e) {
                        null == e ? this.domStorage_.removeItem(this.prefixedName_(t)) : this.domStorage_.setItem(this.prefixedName_(t), m(e))
                    }, t.prototype.get = function(t) {
                        var e = this.domStorage_.getItem(this.prefixedName_(t));
                        return null == e ? null : g(e)
                    }, t.prototype.remove = function(t) {
                        this.domStorage_.removeItem(this.prefixedName_(t))
                    }, t.prototype.prefixedName_ = function(t) {
                        return this.prefix_ + t
                    }, t.prototype.toString = function() {
                        return this.domStorage_.toString()
                    }, t
                }(),
                B = function() {
                    function t() {
                        this.cache_ = {}, this.isInMemoryStorage = !0
                    }
                    return t.prototype.set = function(t, e) {
                        null == e ? delete this.cache_[t] : this.cache_[t] = e
                    }, t.prototype.get = function(t) {
                        return w(this.cache_, t) ? this.cache_[t] : null
                    }, t.prototype.remove = function(t) {
                        delete this.cache_[t]
                    }, t
                }(),
                j = function(t) {
                    try {
                        if ("undefined" != typeof window && void 0 !== window[t]) {
                            var e = window[t];
                            return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new H(e)
                        }
                    } catch (t) {}
                    return new B
                },
                K = j("localStorage"),
                Y = j("sessionStorage"),
                z = new V("@firebase/database"),
                G = (q = 1, function() {
                    return q++
                }),
                X = function(t) {
                    var e = function(t) {
                            for (var e = [], n = 0, r = 0; r < t.length; r++) {
                                var i = t.charCodeAt(r);
                                if (55296 <= i && i <= 56319) {
                                    var o = i - 55296;
                                    C(++r < t.length, "Surrogate pair missing trail surrogate."), i = 65536 + (o << 10) + (t.charCodeAt(r) - 56320)
                                }
                                e[n++] = i < 128 ? i : (e[n++] = i < 2048 ? i >> 6 | 192 : (e[n++] = i < 65536 ? i >> 12 | 224 : (e[n++] = i >> 18 | 240, i >> 12 & 63 | 128), i >> 6 & 63 | 128), 63 & i | 128)
                            }
                            return e
                        }(t),
                        n = new O;
                    n.update(e);
                    var r = n.digest();
                    return h.encodeByteArray(r)
                },
                $ = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n = "", r = 0; r < t.length; r++) Array.isArray(t[r]) || t[r] && "object" == typeof t[r] && "number" == typeof t[r].length ? n += $.apply(null, t[r]) : "object" == typeof t[r] ? n += m(t[r]) : n += t[r], n += " ";
                    return n
                },
                J = null,
                Z = !0,
                tt = function(t, e) {
                    C(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."), !0 === t ? (z.logLevel = L.VERBOSE, J = z.log.bind(z), e && Y.set("logging_enabled", !0)) : "function" == typeof t ? J = t : (J = null, Y.remove("logging_enabled"))
                },
                et = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    if (!0 === Z && (Z = !1, null === J && !0 === Y.get("logging_enabled") && tt(!0)), J) {
                        var n = $.apply(null, t);
                        J(n)
                    }
                },
                nt = function(n) {
                    return function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        et.apply(void 0, [n].concat(t))
                    }
                },
                rt = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = "FIREBASE INTERNAL ERROR: " + $.apply(void 0, t);
                    z.error(n)
                },
                it = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = "FIREBASE FATAL ERROR: " + $.apply(void 0, t);
                    throw z.error(n), new Error(n)
                },
                ot = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = "FIREBASE WARNING: " + $.apply(void 0, t);
                    z.warn(n)
                },
                st = function(t) {
                    return "number" == typeof t && (t != t || t == Number.POSITIVE_INFINITY || t == Number.NEGATIVE_INFINITY)
                },
                at = "[MIN_NAME]",
                ht = "[MAX_NAME]",
                ut = function(t, e) {
                    if (t === e) return 0;
                    if (t === at || e === ht) return -1;
                    if (e === at || t === ht) return 1;
                    var n = vt(t),
                        r = vt(e);
                    return null !== n ? null !== r ? n - r == 0 ? t.length - e.length : n - r : -1 : null !== r ? 1 : t < e ? -1 : 1
                },
                lt = function(t, e) {
                    return t === e ? 0 : t < e ? -1 : 1
                },
                ct = function(t, e) {
                    if (e && t in e) return e[t];
                    throw new Error("Missing required key (" + t + ") in object: " + m(e))
                },
                pt = function(t) {
                    if ("object" != typeof t || null === t) return m(t);
                    var e = [];
                    for (var n in t) e.push(n);
                    e.sort();
                    for (var r = "{", i = 0; i < e.length; i++) 0 !== i && (r += ","), r += m(e[i]), r += ":", r += pt(t[e[i]]);
                    return r += "}"
                },
                dt = function(t, e) {
                    var n = t.length;
                    if (n <= e) return [t];
                    for (var r = [], i = 0; i < n; i += e) n < i + e ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
                    return r
                },
                ft = function(t, n) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; ++e) n(e, t[e]);
                    else S(t, function(t, e) {
                        return n(e, t)
                    })
                },
                _t = function(t) {
                    C(!st(t), "Invalid JSON number");
                    var e, n, r, i, o, s, a;
                    for (0 === t ? e = 1 / t == -1 / (r = n = 0) ? 1 : 0 : (e = t < 0, r = (t = Math.abs(t)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) + 1023, Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, Math.round(t / Math.pow(2, -1074)))), s = [], o = 52; o; o -= 1) s.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
                    for (o = 11; o; o -= 1) s.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                    s.push(e ? 1 : 0), s.reverse(), a = s.join("");
                    var h = "";
                    for (o = 0; o < 64; o += 8) {
                        var u = parseInt(a.substr(o, 8), 2).toString(16);
                        1 === u.length && (u = "0" + u), h += u
                    }
                    return h.toLowerCase()
                },
                yt = new RegExp("^-?\\d{1,10}$"),
                vt = function(t) {
                    if (yt.test(t)) {
                        var e = Number(t);
                        if (-2147483648 <= e && e <= 2147483647) return e
                    }
                    return null
                },
                gt = function(t) {
                    try {
                        t()
                    } catch (e) {
                        setTimeout(function() {
                            var t = e.stack || "";
                            throw ot("Exception was thrown by user callback.", t), e
                        }, Math.floor(0))
                    }
                },
                mt = function(t, e) {
                    var n = setTimeout(t, e);
                    return "object" == typeof n && n.unref && n.unref(), n
                },
                Ct = function() {
                    function i(t, e) {
                        if (void 0 === e) {
                            this.pieces_ = t.split("/");
                            for (var n = 0, r = 0; r < this.pieces_.length; r++) 0 < this.pieces_[r].length && (this.pieces_[n] = this.pieces_[r], n++);
                            this.pieces_.length = n, this.pieceNum_ = 0
                        } else this.pieces_ = t, this.pieceNum_ = e
                    }
                    return Object.defineProperty(i, "Empty", {
                        get: function() {
                            return new i("")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), i.prototype.getFront = function() {
                        return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_]
                    }, i.prototype.getLength = function() {
                        return this.pieces_.length - this.pieceNum_
                    }, i.prototype.popFront = function() {
                        var t = this.pieceNum_;
                        return t < this.pieces_.length && t++, new i(this.pieces_, t)
                    }, i.prototype.getBack = function() {
                        return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null
                    }, i.prototype.toString = function() {
                        for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + this.pieces_[e]);
                        return t || "/"
                    }, i.prototype.toUrlEncodedString = function() {
                        for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + encodeURIComponent(String(this.pieces_[e])));
                        return t || "/"
                    }, i.prototype.slice = function(t) {
                        return void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t)
                    }, i.prototype.parent = function() {
                        if (this.pieceNum_ >= this.pieces_.length) return null;
                        for (var t = [], e = this.pieceNum_; e < this.pieces_.length - 1; e++) t.push(this.pieces_[e]);
                        return new i(t, 0)
                    }, i.prototype.child = function(t) {
                        for (var e = [], n = this.pieceNum_; n < this.pieces_.length; n++) e.push(this.pieces_[n]);
                        if (t instanceof i)
                            for (n = t.pieceNum_; n < t.pieces_.length; n++) e.push(t.pieces_[n]);
                        else {
                            var r = t.split("/");
                            for (n = 0; n < r.length; n++) 0 < r[n].length && e.push(r[n])
                        }
                        return new i(e, 0)
                    }, i.prototype.isEmpty = function() {
                        return this.pieceNum_ >= this.pieces_.length
                    }, i.relativePath = function(t, e) {
                        var n = t.getFront(),
                            r = e.getFront();
                        if (null === n) return e;
                        if (n === r) return i.relativePath(t.popFront(), e.popFront());
                        throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")")
                    }, i.comparePaths = function(t, e) {
                        for (var n = t.slice(), r = e.slice(), i = 0; i < n.length && i < r.length; i++) {
                            var o = ut(n[i], r[i]);
                            if (0 !== o) return o
                        }
                        return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
                    }, i.prototype.equals = function(t) {
                        if (this.getLength() !== t.getLength()) return !1;
                        for (var e = this.pieceNum_, n = t.pieceNum_; e <= this.pieces_.length; e++, n++)
                            if (this.pieces_[e] !== t.pieces_[n]) return !1;
                        return !0
                    }, i.prototype.contains = function(t) {
                        var e = this.pieceNum_,
                            n = t.pieceNum_;
                        if (this.getLength() > t.getLength()) return !1;
                        for (; e < this.pieces_.length;) {
                            if (this.pieces_[e] !== t.pieces_[n]) return !1;
                            ++e, ++n
                        }
                        return !0
                    }, i
                }(),
                Et = function() {
                    function t(t, e) {
                        this.errorPrefix_ = e, this.parts_ = t.slice(), this.byteLength_ = Math.max(1, this.parts_.length);
                        for (var n = 0; n < this.parts_.length; n++) this.byteLength_ += W(this.parts_[n]);
                        this.checkValid_()
                    }
                    return Object.defineProperty(t, "MAX_PATH_DEPTH", {
                        get: function() {
                            return 32
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "MAX_PATH_LENGTH_BYTES", {
                        get: function() {
                            return 768
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.push = function(t) {
                        0 < this.parts_.length && (this.byteLength_ += 1), this.parts_.push(t), this.byteLength_ += W(t), this.checkValid_()
                    }, t.prototype.pop = function() {
                        var t = this.parts_.pop();
                        this.byteLength_ -= W(t), 0 < this.parts_.length && (this.byteLength_ -= 1)
                    }, t.prototype.checkValid_ = function() {
                        if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES) throw new Error(this.errorPrefix_ + "has a key path longer than " + t.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ").");
                        if (this.parts_.length > t.MAX_PATH_DEPTH) throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + t.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString())
                    }, t.prototype.toErrorString = function() {
                        return 0 == this.parts_.length ? "" : "in property '" + this.parts_.join(".") + "'"
                    }, t
                }(),
                wt = "firebaseio.com",
                bt = "websocket",
                St = "long_polling",
                Tt = function() {
                    function t(t, e, n, r, i) {
                        void 0 === i && (i = ""), this.secure = e, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.host = t.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = K.get("host:" + t) || this.host
                    }
                    return t.prototype.needsQueryParam = function() {
                        return this.host !== this.internalHost || this.isCustomHost()
                    }, t.prototype.isCacheableHost = function() {
                        return "s-" === this.internalHost.substr(0, 2)
                    }, t.prototype.isDemoHost = function() {
                        return "firebaseio-demo.com" === this.domain
                    }, t.prototype.isCustomHost = function() {
                        return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain
                    }, t.prototype.updateHost = function(t) {
                        t !== this.internalHost && (this.internalHost = t, this.isCacheableHost() && K.set("host:" + this.host, this.internalHost))
                    }, t.prototype.connectionURL = function(t, e) {
                        var n;
                        if (C("string" == typeof t, "typeof type must == string"), C("object" == typeof e, "typeof params must == object"), t === bt) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
                        else {
                            if (t !== St) throw new Error("Unknown connection type: " + t);
                            n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?"
                        }
                        this.needsQueryParam() && (e.ns = this.namespace);
                        var r = [];
                        return S(e, function(t, e) {
                            r.push(t + "=" + e)
                        }), n + r.join("&")
                    }, t.prototype.toString = function() {
                        var t = this.toURLString();
                        return this.persistenceKey && (t += "<" + this.persistenceKey + ">"), t
                    }, t.prototype.toURLString = function() {
                        return (this.secure ? "https://" : "http://") + this.host
                    }, t
                }();
            var It, Nt, Rt, Pt, Dt, Ot = function(t) {
                    var e = kt(t),
                        n = e.subdomain;
                    "firebase" === e.domain && it(e.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), n && "undefined" != n || "localhost" === e.domain || it("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), e.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
                    var r = "ws" === e.scheme || "wss" === e.scheme;
                    return {
                        repoInfo: new Tt(e.host, e.secure, n, r),
                        path: new Ct(e.pathString)
                    }
                },
                kt = function(t) {
                    var e = "",
                        n = "",
                        r = "",
                        i = "",
                        o = !0,
                        s = "https",
                        a = 443;
                    if ("string" == typeof t) {
                        var h = t.indexOf("//");
                        0 <= h && (s = t.substring(0, h - 1), t = t.substring(h + 2));
                        var u = t.indexOf("/"); - 1 === u && (u = t.length);
                        var l = t.indexOf("?"); - 1 === l && (l = t.length), e = t.substring(0, Math.min(u, l)), u < l && (i = function(t) {
                            for (var e = "", n = t.split("/"), r = 0; r < n.length; r++)
                                if (0 < n[r].length) {
                                    var i = n[r];
                                    try {
                                        i = decodeURIComponent(i.replace(/\+/g, " "))
                                    } catch (t) {}
                                    e += "/" + i
                                }
                            return e
                        }(t.substring(u, l)));
                        var c = function(t) {
                            var e = {};
                            "?" === t.charAt(0) && (t = t.substring(1));
                            for (var n = 0, r = t.split("&"); n < r.length; n++) {
                                var i = r[n];
                                if (0 !== i.length) {
                                    var o = i.split("=");
                                    2 === o.length ? e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) : ot("Invalid query segment '" + i + "' in query '" + t + "'")
                                }
                            }
                            return e
                        }(t.substring(Math.min(t.length, l)));
                        0 <= (h = e.indexOf(":")) ? (o = "https" === s || "wss" === s, a = parseInt(e.substring(h + 1), 10)) : h = t.length;
                        var p = e.split(".");
                        3 === p.length ? (n = p[1], r = p[0].toLowerCase()) : 2 === p.length ? n = p[0] : "localhost" === p[0].slice(0, h).toLowerCase() && (n = "localhost"), "" === r && "ns" in c && (r = c.ns)
                    }
                    return {
                        host: e,
                        port: a,
                        domain: n,
                        subdomain: r,
                        secure: o,
                        scheme: s,
                        pathString: i
                    }
                },
                xt = /[\[\].#$\/\u0000-\u001F\u007F]/,
                Ft = /[\[\].#$\u0000-\u001F\u007F]/,
                At = 10485760,
                Lt = function(t) {
                    return "string" == typeof t && 0 !== t.length && !xt.test(t)
                },
                Mt = function(t) {
                    return "string" == typeof t && 0 !== t.length && !Ft.test(t)
                },
                Wt = function(t) {
                    return null === t || "string" == typeof t || "number" == typeof t && !st(t) || t && "object" == typeof t && w(t, ".sv")
                },
                qt = function(t, e, n, r, i) {
                    i && void 0 === n || Qt(x(t, e, i), n, r)
                },
                Qt = function(n, t, e) {
                    var r = e instanceof Ct ? new Et(e, n) : e;
                    if (void 0 === t) throw new Error(n + "contains undefined " + r.toErrorString());
                    if ("function" == typeof t) throw new Error(n + "contains a function " + r.toErrorString() + " with contents = " + t.toString());
                    if (st(t)) throw new Error(n + "contains " + t.toString() + " " + r.toErrorString());
                    if ("string" == typeof t && t.length > At / 3 && W(t) > At) throw new Error(n + "contains a string greater than " + At + " utf8 bytes " + r.toErrorString() + " ('" + t.substring(0, 50) + "...')");
                    if (t && "object" == typeof t) {
                        var i = !1,
                            o = !1;
                        if (S(t, function(t, e) {
                                if (".value" === t) i = !0;
                                else if (".priority" !== t && ".sv" !== t && (o = !0, !Lt(t))) throw new Error(n + " contains an invalid key (" + t + ") " + r.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                r.push(t), Qt(n, e, r), r.pop()
                            }), i && o) throw new Error(n + ' contains ".value" child ' + r.toErrorString() + " in addition to actual children.")
                    }
                },
                Ut = function(t, e, n, r, i) {
                    if (!i || void 0 !== n) {
                        var o = x(t, e, i);
                        if (!n || "object" != typeof n || Array.isArray(n)) throw new Error(o + " must be an object containing the children to replace.");
                        var s = [];
                        S(n, function(t, e) {
                                var n = new Ct(t);
                                if (Qt(o, e, r.child(n)), ".priority" === n.getBack() && !Wt(e)) throw new Error(o + "contains an invalid value for '" + n.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                                s.push(n)
                            }),
                            function(t, e) {
                                var n, r;
                                for (n = 0; n < e.length; n++)
                                    for (var i = (r = e[n]).slice(), o = 0; o < i.length; o++)
                                        if (".priority" === i[o] && o === i.length - 1);
                                        else if (!Lt(i[o])) throw new Error(t + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                e.sort(Ct.comparePaths);
                                var s = null;
                                for (n = 0; n < e.length; n++) {
                                    if (r = e[n], null !== s && s.contains(r)) throw new Error(t + "contains a path " + s.toString() + " that is ancestor of another path " + r.toString());
                                    s = r
                                }
                            }(o, s)
                    }
                },
                Vt = function(t, e, n, r) {
                    if (!r || void 0 !== n) {
                        if (st(n)) throw new Error(x(t, e, r) + "is " + n.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                        if (!Wt(n)) throw new Error(x(t, e, r) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
                    }
                },
                Ht = function(t, e, n, r) {
                    if (!r || void 0 !== n) switch (n) {
                        case "value":
                        case "child_added":
                        case "child_removed":
                        case "child_changed":
                        case "child_moved":
                            break;
                        default:
                            throw new Error(x(t, e, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                    }
                },
                Bt = function(t, e, n, r) {
                    if (!(r && void 0 === n || Lt(n))) throw new Error(x(t, e, r) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
                },
                jt = function(t, e, n, r) {
                    if (!(r && void 0 === n || Mt(n))) throw new Error(x(t, e, r) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
                },
                Kt = function(t, e) {
                    if (".info" === e.getFront()) throw new Error(t + " failed = Can't modify data under /.info/")
                },
                Yt = function(t, e, n) {
                    var r, i = n.path.toString();
                    if ("string" != typeof n.repoInfo.host || 0 === n.repoInfo.host.length || !Lt(n.repoInfo.namespace) && "localhost" !== n.repoInfo.host.split(":")[0] || 0 !== i.length && ((r = i) && (r = r.replace(/^\/*\.info(\/|$)/, "/")), !Mt(r))) throw new Error(x(t, e, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
                },
                zt = function() {
                    function t(t, e) {
                        this.repo_ = t, this.path_ = e
                    }
                    return t.prototype.cancel = function(t) {
                        k("OnDisconnect.cancel", 0, 1, arguments.length), F("OnDisconnect.cancel", 1, t, !0);
                        var e = new l;
                        return this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)), e.promise
                    }, t.prototype.remove = function(t) {
                        k("OnDisconnect.remove", 0, 1, arguments.length), Kt("OnDisconnect.remove", this.path_), F("OnDisconnect.remove", 1, t, !0);
                        var e = new l;
                        return this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)), e.promise
                    }, t.prototype.set = function(t, e) {
                        k("OnDisconnect.set", 1, 2, arguments.length), Kt("OnDisconnect.set", this.path_), qt("OnDisconnect.set", 1, t, this.path_, !1), F("OnDisconnect.set", 2, e, !0);
                        var n = new l;
                        return this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)), n.promise
                    }, t.prototype.setWithPriority = function(t, e, n) {
                        k("OnDisconnect.setWithPriority", 2, 3, arguments.length), Kt("OnDisconnect.setWithPriority", this.path_), qt("OnDisconnect.setWithPriority", 1, t, this.path_, !1), Vt("OnDisconnect.setWithPriority", 2, e, !1), F("OnDisconnect.setWithPriority", 3, n, !0);
                        var r = new l;
                        return this.repo_.onDisconnectSetWithPriority(this.path_, t, e, r.wrapCallback(n)), r.promise
                    }, t.prototype.update = function(t, e) {
                        if (k("OnDisconnect.update", 1, 2, arguments.length), Kt("OnDisconnect.update", this.path_), Array.isArray(t)) {
                            for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];
                            t = n, ot("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                        }
                        Ut("OnDisconnect.update", 1, t, this.path_, !1), F("OnDisconnect.update", 2, e, !0);
                        var i = new l;
                        return this.repo_.onDisconnectUpdate(this.path_, t, i.wrapCallback(e)), i.promise
                    }, t
                }(),
                Gt = function() {
                    function t(t, e) {
                        this.committed = t, this.snapshot = e
                    }
                    return t.prototype.toJSON = function() {
                        return k("TransactionResult.toJSON", 0, 1, arguments.length), {
                            committed: this.committed,
                            snapshot: this.snapshot.toJSON()
                        }
                    }, t
                }(),
                Xt = (It = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", Nt = 0, Rt = [], function(t) {
                    var e, n = t === Nt;
                    Nt = t;
                    var r = new Array(8);
                    for (e = 7; 0 <= e; e--) r[e] = It.charAt(t % 64), t = Math.floor(t / 64);
                    C(0 === t, "Cannot push at time == 0");
                    var i = r.join("");
                    if (n) {
                        for (e = 11; 0 <= e && 63 === Rt[e]; e--) Rt[e] = 0;
                        Rt[e]++
                    } else
                        for (e = 0; e < 12; e++) Rt[e] = Math.floor(64 * Math.random());
                    for (e = 0; e < 12; e++) i += It.charAt(Rt[e]);
                    return C(20 === i.length, "nextPushId: Length should be 20."), i
                }),
                $t = function() {
                    function n(t, e) {
                        this.name = t, this.node = e
                    }
                    return n.Wrap = function(t, e) {
                        return new n(t, e)
                    }, n
                }(),
                Jt = function() {
                    function t() {}
                    return t.prototype.getCompare = function() {
                        return this.compare.bind(this)
                    }, t.prototype.indexedValueChanged = function(t, e) {
                        var n = new $t(at, t),
                            r = new $t(at, e);
                        return 0 !== this.compare(n, r)
                    }, t.prototype.minPost = function() {
                        return $t.MIN
                    }, t
                }(),
                Zt = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s(e, t), Object.defineProperty(e, "__EMPTY_NODE", {
                        get: function() {
                            return Pt
                        },
                        set: function(t) {
                            Pt = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.compare = function(t, e) {
                        return ut(t.name, e.name)
                    }, e.prototype.isDefinedOn = function(t) {
                        throw p("KeyIndex.isDefinedOn not expected to be called.")
                    }, e.prototype.indexedValueChanged = function(t, e) {
                        return !1
                    }, e.prototype.minPost = function() {
                        return $t.MIN
                    }, e.prototype.maxPost = function() {
                        return new $t(ht, Pt)
                    }, e.prototype.makePost = function(t, e) {
                        return C("string" == typeof t, "KeyIndex indexValue must always be a string."), new $t(t, Pt)
                    }, e.prototype.toString = function() {
                        return ".key"
                    }, e
                }(Jt),
                te = new Zt;
            var ee, ne, re, ie = function(t) {
                    return "number" == typeof t ? "number:" + _t(t) : "string:" + t
                },
                oe = function(t) {
                    if (t.isLeafNode()) {
                        var e = t.val();
                        C("string" == typeof e || "number" == typeof e || "object" == typeof e && w(e, ".sv"), "Priority must be a string or number.")
                    } else C(t === Dt || t.isEmpty(), "priority of unexpected type.");
                    C(t === Dt || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
                },
                se = function() {
                    function o(t, e) {
                        void 0 === e && (e = o.__childrenNodeConstructor.EMPTY_NODE), this.value_ = t, this.priorityNode_ = e, this.lazyHash_ = null, C(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), oe(this.priorityNode_)
                    }
                    return Object.defineProperty(o, "__childrenNodeConstructor", {
                        get: function() {
                            return ee
                        },
                        set: function(t) {
                            ee = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), o.prototype.isLeafNode = function() {
                        return !0
                    }, o.prototype.getPriority = function() {
                        return this.priorityNode_
                    }, o.prototype.updatePriority = function(t) {
                        return new o(this.value_, t)
                    }, o.prototype.getImmediateChild = function(t) {
                        return ".priority" === t ? this.priorityNode_ : o.__childrenNodeConstructor.EMPTY_NODE
                    }, o.prototype.getChild = function(t) {
                        return t.isEmpty() ? this : ".priority" === t.getFront() ? this.priorityNode_ : o.__childrenNodeConstructor.EMPTY_NODE
                    }, o.prototype.hasChild = function() {
                        return !1
                    }, o.prototype.getPredecessorChildName = function(t, e) {
                        return null
                    }, o.prototype.updateImmediateChild = function(t, e) {
                        return ".priority" === t ? this.updatePriority(e) : e.isEmpty() && ".priority" !== t ? this : o.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, e).updatePriority(this.priorityNode_)
                    }, o.prototype.updateChild = function(t, e) {
                        var n = t.getFront();
                        return null === n ? e : e.isEmpty() && ".priority" !== n ? this : (C(".priority" !== n || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(n, o.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), e)))
                    }, o.prototype.isEmpty = function() {
                        return !1
                    }, o.prototype.numChildren = function() {
                        return 0
                    }, o.prototype.forEachChild = function(t, e) {
                        return !1
                    }, o.prototype.val = function(t) {
                        return t && !this.getPriority().isEmpty() ? {
                            ".value": this.getValue(),
                            ".priority": this.getPriority().val()
                        } : this.getValue()
                    }, o.prototype.hash = function() {
                        if (null === this.lazyHash_) {
                            var t = "";
                            this.priorityNode_.isEmpty() || (t += "priority:" + ie(this.priorityNode_.val()) + ":");
                            var e = typeof this.value_;
                            t += e + ":", t += "number" === e ? _t(this.value_) : this.value_, this.lazyHash_ = X(t)
                        }
                        return this.lazyHash_
                    }, o.prototype.getValue = function() {
                        return this.value_
                    }, o.prototype.compareTo = function(t) {
                        return t === o.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof o.__childrenNodeConstructor ? -1 : (C(t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(t))
                    }, o.prototype.compareToLeafNode_ = function(t) {
                        var e = typeof t.value_,
                            n = typeof this.value_,
                            r = o.VALUE_TYPE_ORDER.indexOf(e),
                            i = o.VALUE_TYPE_ORDER.indexOf(n);
                        return C(0 <= r, "Unknown leaf type: " + e), C(0 <= i, "Unknown leaf type: " + n), r === i ? "object" === n ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : i - r
                    }, o.prototype.withIndex = function() {
                        return this
                    }, o.prototype.isIndexed = function() {
                        return !0
                    }, o.prototype.equals = function(t) {
                        if (t === this) return !0;
                        if (t.isLeafNode()) {
                            var e = t;
                            return this.value_ === e.value_ && this.priorityNode_.equals(e.priorityNode_)
                        }
                        return !1
                    }, o.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], o
                }();
            var ae, he, ue = new(function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s(e, t), e.prototype.compare = function(t, e) {
                        var n = t.node.getPriority(),
                            r = e.node.getPriority(),
                            i = n.compareTo(r);
                        return 0 === i ? ut(t.name, e.name) : i
                    }, e.prototype.isDefinedOn = function(t) {
                        return !t.getPriority().isEmpty()
                    }, e.prototype.indexedValueChanged = function(t, e) {
                        return !t.getPriority().equals(e.getPriority())
                    }, e.prototype.minPost = function() {
                        return $t.MIN
                    }, e.prototype.maxPost = function() {
                        return new $t(ht, new se("[PRIORITY-POST]", re))
                    }, e.prototype.makePost = function(t, e) {
                        var n = ne(t);
                        return new $t(e, new se("[PRIORITY-POST]", n))
                    }, e.prototype.toString = function() {
                        return ".priority"
                    }, e
                }(Jt)),
                le = function() {
                    function t(t, e, n, r, i) {
                        void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];
                        for (var o = 1; !t.isEmpty();)
                            if (t = t, o = e ? n(t.key, e) : 1, r && (o *= -1), o < 0) t = this.isReverse_ ? t.left : t.right;
                            else {
                                if (0 === o) {
                                    this.nodeStack_.push(t);
                                    break
                                }
                                this.nodeStack_.push(t), t = this.isReverse_ ? t.right : t.left
                            }
                    }
                    return t.prototype.getNext = function() {
                        if (0 === this.nodeStack_.length) return null;
                        var t, e = this.nodeStack_.pop();
                        if (t = this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                                key: e.key,
                                value: e.value
                            }, this.isReverse_)
                            for (e = e.left; !e.isEmpty();) this.nodeStack_.push(e), e = e.right;
                        else
                            for (e = e.right; !e.isEmpty();) this.nodeStack_.push(e), e = e.left;
                        return t
                    }, t.prototype.hasNext = function() {
                        return 0 < this.nodeStack_.length
                    }, t.prototype.peek = function() {
                        if (0 === this.nodeStack_.length) return null;
                        var t = this.nodeStack_[this.nodeStack_.length - 1];
                        return this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                            key: t.key,
                            value: t.value
                        }
                    }, t
                }(),
                ce = function() {
                    function o(t, e, n, r, i) {
                        this.key = t, this.value = e, this.color = null != n ? n : o.RED, this.left = null != r ? r : de.EMPTY_NODE, this.right = null != i ? i : de.EMPTY_NODE
                    }
                    return o.prototype.copy = function(t, e, n, r, i) {
                        return new o(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
                    }, o.prototype.count = function() {
                        return this.left.count() + 1 + this.right.count()
                    }, o.prototype.isEmpty = function() {
                        return !1
                    }, o.prototype.inorderTraversal = function(t) {
                        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
                    }, o.prototype.reverseTraversal = function(t) {
                        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
                    }, o.prototype.min_ = function() {
                        return this.left.isEmpty() ? this : this.left.min_()
                    }, o.prototype.minKey = function() {
                        return this.min_().key
                    }, o.prototype.maxKey = function() {
                        return this.right.isEmpty() ? this.key : this.right.maxKey()
                    }, o.prototype.insert = function(t, e, n) {
                        var r, i;
                        return (i = (r = n(t, (i = this).key)) < 0 ? i.copy(null, null, null, i.left.insert(t, e, n), null) : 0 === r ? i.copy(null, e, null, null, null) : i.copy(null, null, null, null, i.right.insert(t, e, n))).fixUp_()
                    }, o.prototype.removeMin_ = function() {
                        if (this.left.isEmpty()) return de.EMPTY_NODE;
                        var t = this;
                        return t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()), (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_()
                    }, o.prototype.remove = function(t, e) {
                        var n, r;
                        if (e(t, (n = this).key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(t, e), null);
                        else {
                            if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === e(t, n.key)) {
                                if (n.right.isEmpty()) return de.EMPTY_NODE;
                                r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_())
                            }
                            n = n.copy(null, null, null, null, n.right.remove(t, e))
                        }
                        return n.fixUp_()
                    }, o.prototype.isRed_ = function() {
                        return this.color
                    }, o.prototype.fixUp_ = function() {
                        var t = this;
                        return t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()), t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()), t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()), t
                    }, o.prototype.moveRedLeft_ = function() {
                        var t = this.colorFlip_();
                        return t.right.left.isRed_() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight_())).rotateLeft_()).colorFlip_()), t
                    }, o.prototype.moveRedRight_ = function() {
                        var t = this.colorFlip_();
                        return t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()), t
                    }, o.prototype.rotateLeft_ = function() {
                        var t = this.copy(null, null, o.RED, null, this.right.left);
                        return this.right.copy(null, null, this.color, t, null)
                    }, o.prototype.rotateRight_ = function() {
                        var t = this.copy(null, null, o.RED, this.left.right, null);
                        return this.left.copy(null, null, this.color, null, t)
                    }, o.prototype.colorFlip_ = function() {
                        var t = this.left.copy(null, null, !this.left.color, null, null),
                            e = this.right.copy(null, null, !this.right.color, null, null);
                        return this.copy(null, null, !this.color, t, e)
                    }, o.prototype.checkMaxDepth_ = function() {
                        var t = this.check_();
                        return Math.pow(2, t) <= this.count() + 1
                    }, o.prototype.check_ = function() {
                        var t;
                        if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                        if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                        if ((t = this.left.check_()) !== this.right.check_()) throw new Error("Black depths differ");
                        return t + (this.isRed_() ? 0 : 1)
                    }, o.RED = !0, o.BLACK = !1, o
                }(),
                pe = function() {
                    function t() {}
                    return t.prototype.copy = function(t, e, n, r, i) {
                        return this
                    }, t.prototype.insert = function(t, e, n) {
                        return new ce(t, e, null)
                    }, t.prototype.remove = function(t, e) {
                        return this
                    }, t.prototype.count = function() {
                        return 0
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
                    }, t.prototype.check_ = function() {
                        return 0
                    }, t.prototype.isRed_ = function() {
                        return !1
                    }, t
                }(),
                de = function() {
                    function n(t, e) {
                        void 0 === e && (e = n.EMPTY_NODE), this.comparator_ = t, this.root_ = e
                    }
                    return n.prototype.insert = function(t, e) {
                        return new n(this.comparator_, this.root_.insert(t, e, this.comparator_).copy(null, null, ce.BLACK, null, null))
                    }, n.prototype.remove = function(t) {
                        return new n(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, ce.BLACK, null, null))
                    }, n.prototype.get = function(t) {
                        for (var e, n = this.root_; !n.isEmpty();) {
                            if (0 === (e = this.comparator_(t, n.key))) return n.value;
                            e < 0 ? n = n.left : 0 < e && (n = n.right)
                        }
                        return null
                    }, n.prototype.getPredecessorKey = function(t) {
                        for (var e, n = this.root_, r = null; !n.isEmpty();) {
                            if (0 === (e = this.comparator_(t, n.key))) {
                                if (n.left.isEmpty()) return r ? r.key : null;
                                for (n = n.left; !n.right.isEmpty();) n = n.right;
                                return n.key
                            }
                            e < 0 ? n = n.left : 0 < e && (n = (r = n).right)
                        }
                        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
                    }, n.prototype.isEmpty = function() {
                        return this.root_.isEmpty()
                    }, n.prototype.count = function() {
                        return this.root_.count()
                    }, n.prototype.minKey = function() {
                        return this.root_.minKey()
                    }, n.prototype.maxKey = function() {
                        return this.root_.maxKey()
                    }, n.prototype.inorderTraversal = function(t) {
                        return this.root_.inorderTraversal(t)
                    }, n.prototype.reverseTraversal = function(t) {
                        return this.root_.reverseTraversal(t)
                    }, n.prototype.getIterator = function(t) {
                        return new le(this.root_, null, this.comparator_, !1, t)
                    }, n.prototype.getIteratorFrom = function(t, e) {
                        return new le(this.root_, t, this.comparator_, !1, e)
                    }, n.prototype.getReverseIteratorFrom = function(t, e) {
                        return new le(this.root_, t, this.comparator_, !0, e)
                    }, n.prototype.getReverseIterator = function(t) {
                        return new le(this.root_, null, this.comparator_, !0, t)
                    }, n.EMPTY_NODE = new pe, n
                }(),
                fe = Math.log(2),
                _e = function() {
                    function t(t) {
                        var e;
                        this.count = (e = t + 1, parseInt(Math.log(e) / fe, 10)), this.current_ = this.count - 1;
                        var n, r = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
                        this.bits_ = t + 1 & r
                    }
                    return t.prototype.nextBitIsOne = function() {
                        var t = !(this.bits_ & 1 << this.current_);
                        return this.current_--, t
                    }, t
                }(),
                ye = function(u, t, l, e) {
                    u.sort(t);
                    var c = function(t, e) {
                            var n, r, i = e - t;
                            if (0 == i) return null;
                            if (1 == i) return n = u[t], r = l ? l(n) : n, new ce(r, n.node, ce.BLACK, null, null);
                            var o = parseInt(i / 2, 10) + t,
                                s = c(t, o),
                                a = c(o + 1, e);
                            return n = u[o], r = l ? l(n) : n, new ce(r, n.node, ce.BLACK, s, a)
                        },
                        n = function(t) {
                            for (var e = null, n = null, a = u.length, r = function(t, e) {
                                    var n = a - t,
                                        r = a;
                                    a -= t;
                                    var i = c(n + 1, r),
                                        o = u[n],
                                        s = l ? l(o) : o;
                                    h(new ce(s, o.node, e, null, i))
                                }, h = function(t) {
                                    e = e ? e.left = t : n = t
                                }, i = 0; i < t.count; ++i) {
                                var o = t.nextBitIsOne(),
                                    s = Math.pow(2, t.count - (i + 1));
                                o ? r(s, ce.BLACK) : (r(s, ce.BLACK), r(s, ce.RED))
                            }
                            return n
                        }(new _e(u.length));
                    return new de(e || t, n)
                },
                ve = {},
                ge = function() {
                    function c(t, e) {
                        this.indexes_ = t, this.indexSet_ = e
                    }
                    return Object.defineProperty(c, "Default", {
                        get: function() {
                            return C(ue, "ChildrenNode.ts has not been loaded"), ae = ae || new c({
                                ".priority": ve
                            }, {
                                ".priority": ue
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), c.prototype.get = function(t) {
                        var e = b(this.indexes_, t);
                        if (!e) throw new Error("No index defined for " + t);
                        return e === ve ? null : e
                    }, c.prototype.hasIndex = function(t) {
                        return w(this.indexSet_, t.toString())
                    }, c.prototype.addIndex = function(t, e) {
                        C(t !== te, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                        for (var n, r = [], i = !1, o = e.getIterator($t.Wrap), s = o.getNext(); s;) i = i || t.isDefinedOn(s.node), r.push(s), s = o.getNext();
                        n = i ? ye(r, t.getCompare()) : ve;
                        var a = t.toString(),
                            h = T(this.indexSet_);
                        h[a] = t;
                        var u = T(this.indexes_);
                        return u[a] = n, new c(u, h)
                    }, c.prototype.addToIndexes = function(h, u) {
                        var l = this;
                        return new c(R(this.indexes_, function(t, e) {
                            var n = b(l.indexSet_, e);
                            if (C(n, "Missing index implementation for " + e), t === ve) {
                                if (n.isDefinedOn(h.node)) {
                                    for (var r = [], i = u.getIterator($t.Wrap), o = i.getNext(); o;) o.name != h.name && r.push(o), o = i.getNext();
                                    return r.push(h), ye(r, n.getCompare())
                                }
                                return ve
                            }
                            var s = u.get(h.name),
                                a = t;
                            return s && (a = a.remove(new $t(h.name, s))), a.insert(h, h.node)
                        }), this.indexSet_)
                    }, c.prototype.removeFromIndexes = function(n, r) {
                        return new c(R(this.indexes_, function(t) {
                            if (t === ve) return t;
                            var e = r.get(n.name);
                            return e ? t.remove(new $t(n.name, e)) : t
                        }), this.indexSet_)
                    }, c
                }();

            function me(t, e) {
                return ut(t.name, e.name)
            }

            function Ce(t, e) {
                return ut(t, e)
            }
            var Ee = function() {
                    function a(t, e, n) {
                        this.children_ = t, this.priorityNode_ = e, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && oe(this.priorityNode_), this.children_.isEmpty() && C(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
                    }
                    return Object.defineProperty(a, "EMPTY_NODE", {
                        get: function() {
                            return he || (he = new a(new de(Ce), null, ge.Default))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), a.prototype.isLeafNode = function() {
                        return !1
                    }, a.prototype.getPriority = function() {
                        return this.priorityNode_ || he
                    }, a.prototype.updatePriority = function(t) {
                        return this.children_.isEmpty() ? this : new a(this.children_, t, this.indexMap_)
                    }, a.prototype.getImmediateChild = function(t) {
                        if (".priority" === t) return this.getPriority();
                        var e = this.children_.get(t);
                        return null === e ? he : e
                    }, a.prototype.getChild = function(t) {
                        var e = t.getFront();
                        return null === e ? this : this.getImmediateChild(e).getChild(t.popFront())
                    }, a.prototype.hasChild = function(t) {
                        return null !== this.children_.get(t)
                    }, a.prototype.updateImmediateChild = function(t, e) {
                        if (C(e, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(e);
                        var n = new $t(t, e),
                            r = void 0,
                            i = void 0;
                        return i = e.isEmpty() ? (r = this.children_.remove(t), this.indexMap_.removeFromIndexes(n, this.children_)) : (r = this.children_.insert(t, e), this.indexMap_.addToIndexes(n, this.children_)), new a(r, r.isEmpty() ? he : this.priorityNode_, i)
                    }, a.prototype.updateChild = function(t, e) {
                        var n = t.getFront();
                        if (null === n) return e;
                        C(".priority" !== t.getFront() || 1 === t.getLength(), ".priority must be the last token in a path");
                        var r = this.getImmediateChild(n).updateChild(t.popFront(), e);
                        return this.updateImmediateChild(n, r)
                    }, a.prototype.isEmpty = function() {
                        return this.children_.isEmpty()
                    }, a.prototype.numChildren = function() {
                        return this.children_.count()
                    }, a.prototype.val = function(n) {
                        if (this.isEmpty()) return null;
                        var r = {},
                            i = 0,
                            o = 0,
                            s = !0;
                        if (this.forEachChild(ue, function(t, e) {
                                r[t] = e.val(n), i++, s && a.INTEGER_REGEXP_.test(t) ? o = Math.max(o, Number(t)) : s = !1
                            }), !n && s && o < 2 * i) {
                            var t = [];
                            for (var e in r) t[e] = r[e];
                            return t
                        }
                        return n && !this.getPriority().isEmpty() && (r[".priority"] = this.getPriority().val()), r
                    }, a.prototype.hash = function() {
                        if (null === this.lazyHash_) {
                            var r = "";
                            this.getPriority().isEmpty() || (r += "priority:" + ie(this.getPriority().val()) + ":"), this.forEachChild(ue, function(t, e) {
                                var n = e.hash();
                                "" !== n && (r += ":" + t + ":" + n)
                            }), this.lazyHash_ = "" === r ? "" : X(r)
                        }
                        return this.lazyHash_
                    }, a.prototype.getPredecessorChildName = function(t, e, n) {
                        var r = this.resolveIndex_(n);
                        if (r) {
                            var i = r.getPredecessorKey(new $t(t, e));
                            return i ? i.name : null
                        }
                        return this.children_.getPredecessorKey(t)
                    }, a.prototype.getFirstChildName = function(t) {
                        var e = this.resolveIndex_(t);
                        if (e) {
                            var n = e.minKey();
                            return n && n.name
                        }
                        return this.children_.minKey()
                    }, a.prototype.getFirstChild = function(t) {
                        var e = this.getFirstChildName(t);
                        return e ? new $t(e, this.children_.get(e)) : null
                    }, a.prototype.getLastChildName = function(t) {
                        var e = this.resolveIndex_(t);
                        if (e) {
                            var n = e.maxKey();
                            return n && n.name
                        }
                        return this.children_.maxKey()
                    }, a.prototype.getLastChild = function(t) {
                        var e = this.getLastChildName(t);
                        return e ? new $t(e, this.children_.get(e)) : null
                    }, a.prototype.forEachChild = function(t, e) {
                        var n = this.resolveIndex_(t);
                        return n ? n.inorderTraversal(function(t) {
                            return e(t.name, t.node)
                        }) : this.children_.inorderTraversal(e)
                    }, a.prototype.getIterator = function(t) {
                        return this.getIteratorFrom(t.minPost(), t)
                    }, a.prototype.getIteratorFrom = function(t, e) {
                        var n = this.resolveIndex_(e);
                        if (n) return n.getIteratorFrom(t, function(t) {
                            return t
                        });
                        for (var r = this.children_.getIteratorFrom(t.name, $t.Wrap), i = r.peek(); null != i && e.compare(i, t) < 0;) r.getNext(), i = r.peek();
                        return r
                    }, a.prototype.getReverseIterator = function(t) {
                        return this.getReverseIteratorFrom(t.maxPost(), t)
                    }, a.prototype.getReverseIteratorFrom = function(t, e) {
                        var n = this.resolveIndex_(e);
                        if (n) return n.getReverseIteratorFrom(t, function(t) {
                            return t
                        });
                        for (var r = this.children_.getReverseIteratorFrom(t.name, $t.Wrap), i = r.peek(); null != i && 0 < e.compare(i, t);) r.getNext(), i = r.peek();
                        return r
                    }, a.prototype.compareTo = function(t) {
                        return this.isEmpty() ? t.isEmpty() ? 0 : -1 : t.isLeafNode() || t.isEmpty() ? 1 : t === we ? -1 : 0
                    }, a.prototype.withIndex = function(t) {
                        if (t === te || this.indexMap_.hasIndex(t)) return this;
                        var e = this.indexMap_.addIndex(t, this.children_);
                        return new a(this.children_, this.priorityNode_, e)
                    }, a.prototype.isIndexed = function(t) {
                        return t === te || this.indexMap_.hasIndex(t)
                    }, a.prototype.equals = function(t) {
                        if (t === this) return !0;
                        if (t.isLeafNode()) return !1;
                        var e = t;
                        if (this.getPriority().equals(e.getPriority())) {
                            if (this.children_.count() !== e.children_.count()) return !1;
                            for (var n = this.getIterator(ue), r = e.getIterator(ue), i = n.getNext(), o = r.getNext(); i && o;) {
                                if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                                i = n.getNext(), o = r.getNext()
                            }
                            return null === i && null === o
                        }
                        return !1
                    }, a.prototype.resolveIndex_ = function(t) {
                        return t === te ? null : this.indexMap_.get(t.toString())
                    }, a.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, a
                }(),
                we = new(function(t) {
                    function e() {
                        return t.call(this, new de(Ce), Ee.EMPTY_NODE, ge.Default) || this
                    }
                    return s(e, t), e.prototype.compareTo = function(t) {
                        return t === this ? 0 : 1
                    }, e.prototype.equals = function(t) {
                        return t === this
                    }, e.prototype.getPriority = function() {
                        return this
                    }, e.prototype.getImmediateChild = function(t) {
                        return Ee.EMPTY_NODE
                    }, e.prototype.isEmpty = function() {
                        return !1
                    }, e
                }(Ee));
            Object.defineProperties($t, {
                MIN: {
                    value: new $t(at, Ee.EMPTY_NODE)
                },
                MAX: {
                    value: new $t(ht, we)
                }
            }), Zt.__EMPTY_NODE = Ee.EMPTY_NODE, se.__childrenNodeConstructor = Ee, Dt = we, re = we;
            var be = !0;

            function Se(t, e) {
                if (void 0 === e && (e = null), null === t) return Ee.EMPTY_NODE;
                if ("object" == typeof t && ".priority" in t && (e = t[".priority"]), C(null === e || "string" == typeof e || "number" == typeof e || "object" == typeof e && ".sv" in e, "Invalid priority type found: " + typeof e), "object" == typeof t && ".value" in t && null !== t[".value"] && (t = t[".value"]), "object" != typeof t || ".sv" in t) return new se(t, Se(e));
                if (t instanceof Array || !be) {
                    var r = Ee.EMPTY_NODE,
                        i = t;
                    return S(i, function(t, e) {
                        if (w(i, t) && "." !== t.substring(0, 1)) {
                            var n = Se(e);
                            !n.isLeafNode() && n.isEmpty() || (r = r.updateImmediateChild(t, n))
                        }
                    }), r.updatePriority(Se(e))
                }
                var o = [],
                    s = !1,
                    a = t;
                if (S(a, function(t, e) {
                        if ("string" != typeof t || "." !== t.substring(0, 1)) {
                            var n = Se(a[t]);
                            n.isEmpty() || (s = s || !n.getPriority().isEmpty(), o.push(new $t(t, n)))
                        }
                    }), 0 == o.length) return Ee.EMPTY_NODE;
                var n = ye(o, me, function(t) {
                    return t.name
                }, Ce);
                if (s) {
                    var h = ye(o, ue.getCompare());
                    return new Ee(n, Se(e), new ge({
                        ".priority": h
                    }, {
                        ".priority": ue
                    }))
                }
                return new Ee(n, Se(e), ge.Default)
            }
            ne = Se;
            var Te, Ie, Ne, Re = new(function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s(e, t), e.prototype.compare = function(t, e) {
                        var n = t.node.compareTo(e.node);
                        return 0 === n ? ut(t.name, e.name) : n
                    }, e.prototype.isDefinedOn = function(t) {
                        return !0
                    }, e.prototype.indexedValueChanged = function(t, e) {
                        return !t.equals(e)
                    }, e.prototype.minPost = function() {
                        return $t.MIN
                    }, e.prototype.maxPost = function() {
                        return $t.MAX
                    }, e.prototype.makePost = function(t, e) {
                        var n = Se(t);
                        return new $t(e, n)
                    }, e.prototype.toString = function() {
                        return ".value"
                    }, e
                }(Jt)),
                Pe = function(n) {
                    function t(t) {
                        var e = n.call(this) || this;
                        return e.indexPath_ = t, C(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), e
                    }
                    return s(t, n), t.prototype.extractChild = function(t) {
                        return t.getChild(this.indexPath_)
                    }, t.prototype.isDefinedOn = function(t) {
                        return !t.getChild(this.indexPath_).isEmpty()
                    }, t.prototype.compare = function(t, e) {
                        var n = this.extractChild(t.node),
                            r = this.extractChild(e.node),
                            i = n.compareTo(r);
                        return 0 === i ? ut(t.name, e.name) : i
                    }, t.prototype.makePost = function(t, e) {
                        var n = Se(t),
                            r = Ee.EMPTY_NODE.updateChild(this.indexPath_, n);
                        return new $t(e, r)
                    }, t.prototype.maxPost = function() {
                        var t = Ee.EMPTY_NODE.updateChild(this.indexPath_, we);
                        return new $t(ht, t)
                    }, t.prototype.toString = function() {
                        return this.indexPath_.slice().join("/")
                    }, t
                }(Jt),
                De = function() {
                    function i(t, e, n) {
                        this.node_ = t, this.ref_ = e, this.index_ = n
                    }
                    return i.prototype.val = function() {
                        return k("DataSnapshot.val", 0, 0, arguments.length), this.node_.val()
                    }, i.prototype.exportVal = function() {
                        return k("DataSnapshot.exportVal", 0, 0, arguments.length), this.node_.val(!0)
                    }, i.prototype.toJSON = function() {
                        return k("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal()
                    }, i.prototype.exists = function() {
                        return k("DataSnapshot.exists", 0, 0, arguments.length), !this.node_.isEmpty()
                    }, i.prototype.child = function(t) {
                        k("DataSnapshot.child", 0, 1, arguments.length), t = String(t), jt("DataSnapshot.child", 1, t, !1);
                        var e = new Ct(t),
                            n = this.ref_.child(e);
                        return new i(this.node_.getChild(e), n, ue)
                    }, i.prototype.hasChild = function(t) {
                        k("DataSnapshot.hasChild", 1, 1, arguments.length), jt("DataSnapshot.hasChild", 1, t, !1);
                        var e = new Ct(t);
                        return !this.node_.getChild(e).isEmpty()
                    }, i.prototype.getPriority = function() {
                        return k("DataSnapshot.getPriority", 0, 0, arguments.length), this.node_.getPriority().val()
                    }, i.prototype.forEach = function(n) {
                        var r = this;
                        return k("DataSnapshot.forEach", 1, 1, arguments.length), F("DataSnapshot.forEach", 1, n, !1), !this.node_.isLeafNode() && !!this.node_.forEachChild(this.index_, function(t, e) {
                            return n(new i(e, r.ref_.child(t), ue))
                        })
                    }, i.prototype.hasChildren = function() {
                        return k("DataSnapshot.hasChildren", 0, 0, arguments.length), !this.node_.isLeafNode() && !this.node_.isEmpty()
                    }, Object.defineProperty(i.prototype, "key", {
                        get: function() {
                            return this.ref_.getKey()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), i.prototype.numChildren = function() {
                        return k("DataSnapshot.numChildren", 0, 0, arguments.length), this.node_.numChildren()
                    }, i.prototype.getRef = function() {
                        return k("DataSnapshot.ref", 0, 0, arguments.length), this.ref_
                    }, Object.defineProperty(i.prototype, "ref", {
                        get: function() {
                            return this.getRef()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), i
                }(),
                Oe = function() {
                    function t(t, e, n, r) {
                        this.eventType = t, this.eventRegistration = e, this.snapshot = n, this.prevName = r
                    }
                    return t.prototype.getPath = function() {
                        var t = this.snapshot.getRef();
                        return "value" === this.eventType ? t.path : t.getParent().path
                    }, t.prototype.getEventType = function() {
                        return this.eventType
                    }, t.prototype.getEventRunner = function() {
                        return this.eventRegistration.getEventRunner(this)
                    }, t.prototype.toString = function() {
                        return this.getPath().toString() + ":" + this.eventType + ":" + m(this.snapshot.exportVal())
                    }, t
                }(),
                ke = function() {
                    function t(t, e, n) {
                        this.eventRegistration = t, this.error = e, this.path = n
                    }
                    return t.prototype.getPath = function() {
                        return this.path
                    }, t.prototype.getEventType = function() {
                        return "cancel"
                    }, t.prototype.getEventRunner = function() {
                        return this.eventRegistration.getEventRunner(this)
                    }, t.prototype.toString = function() {
                        return this.path.toString() + ":cancel"
                    }, t
                }(),
                xe = function() {
                    function e(t, e, n) {
                        this.callback_ = t, this.cancelCallback_ = e, this.context_ = n
                    }
                    return e.prototype.respondsTo = function(t) {
                        return "value" === t
                    }, e.prototype.createEvent = function(t, e) {
                        var n = e.getQueryParams().getIndex();
                        return new Oe("value", this, new De(t.snapshotNode, e.getRef(), n))
                    }, e.prototype.getEventRunner = function(t) {
                        var e = this.context_;
                        if ("cancel" === t.getEventType()) {
                            C(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                            var n = this.cancelCallback_;
                            return function() {
                                n.call(e, t.error)
                            }
                        }
                        var r = this.callback_;
                        return function() {
                            r.call(e, t.snapshot)
                        }
                    }, e.prototype.createCancelEvent = function(t, e) {
                        return this.cancelCallback_ ? new ke(this, t, e) : null
                    }, e.prototype.matches = function(t) {
                        return t instanceof e && (!t.callback_ || !this.callback_ || t.callback_ === this.callback_ && t.context_ === this.context_)
                    }, e.prototype.hasAnyCallback = function() {
                        return null !== this.callback_
                    }, e
                }(),
                Fe = function() {
                    function i(t, e, n) {
                        this.callbacks_ = t, this.cancelCallback_ = e, this.context_ = n
                    }
                    return i.prototype.respondsTo = function(t) {
                        var e = "children_added" === t ? "child_added" : t;
                        return e = "children_removed" === e ? "child_removed" : e, w(this.callbacks_, e)
                    }, i.prototype.createCancelEvent = function(t, e) {
                        return this.cancelCallback_ ? new ke(this, t, e) : null
                    }, i.prototype.createEvent = function(t, e) {
                        C(null != t.childName, "Child events should have a childName.");
                        var n = e.getRef().child(t.childName),
                            r = e.getQueryParams().getIndex();
                        return new Oe(t.type, this, new De(t.snapshotNode, n, r), t.prevName)
                    }, i.prototype.getEventRunner = function(t) {
                        var e = this.context_;
                        if ("cancel" === t.getEventType()) {
                            C(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                            var n = this.cancelCallback_;
                            return function() {
                                n.call(e, t.error)
                            }
                        }
                        var r = this.callbacks_[t.eventType];
                        return function() {
                            r.call(e, t.snapshot, t.prevName)
                        }
                    }, i.prototype.matches = function(n) {
                        if (n instanceof i) {
                            if (!this.callbacks_ || !n.callbacks_) return !0;
                            if (this.context_ === n.context_) {
                                var t = N(n.callbacks_);
                                if (t === N(this.callbacks_)) {
                                    if (1 !== t) return function(t, e) {
                                        for (var n in t)
                                            if (Object.prototype.hasOwnProperty.call(t, n) && !e(n, t[n])) return !1;
                                        return !0
                                    }(this.callbacks_, function(t, e) {
                                        return n.callbacks_[t] === e
                                    });
                                    var e = D(n.callbacks_),
                                        r = D(this.callbacks_);
                                    return !(r !== e || n.callbacks_[e] && this.callbacks_[r] && n.callbacks_[e] !== this.callbacks_[r])
                                }
                            }
                        }
                        return !1
                    }, i.prototype.hasAnyCallback = function() {
                        return null !== this.callbacks_
                    }, i
                }(),
                Ae = function() {
                    function u(t, e, n, r) {
                        this.repo = t, this.path = e, this.queryParams_ = n, this.orderByCalled_ = r
                    }
                    return Object.defineProperty(u, "__referenceConstructor", {
                        get: function() {
                            return C(Te, "Reference.ts has not been loaded"), Te
                        },
                        set: function(t) {
                            Te = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), u.validateQueryEndpoints_ = function(t) {
                        var e = null,
                            n = null;
                        if (t.hasStart() && (e = t.getIndexStartValue()), t.hasEnd() && (n = t.getIndexEndValue()), t.getIndex() === te) {
                            var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                                i = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
                            if (t.hasStart()) {
                                if (t.getIndexStartName() != at) throw new Error(r);
                                if ("string" != typeof e) throw new Error(i)
                            }
                            if (t.hasEnd()) {
                                if (t.getIndexEndName() != ht) throw new Error(r);
                                if ("string" != typeof n) throw new Error(i)
                            }
                        } else if (t.getIndex() === ue) {
                            if (null != e && !Wt(e) || null != n && !Wt(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
                        } else if (C(t.getIndex() instanceof Pe || t.getIndex() === Re, "unknown index type."), null != e && "object" == typeof e || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
                    }, u.validateLimit_ = function(t) {
                        if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
                    }, u.prototype.validateNoPreviousOrderByCall_ = function(t) {
                        if (!0 === this.orderByCalled_) throw new Error(t + ": You can't combine multiple orderBy calls.")
                    }, u.prototype.getQueryParams = function() {
                        return this.queryParams_
                    }, u.prototype.getRef = function() {
                        return k("Query.ref", 0, 0, arguments.length), new u.__referenceConstructor(this.repo, this.path)
                    }, u.prototype.on = function(t, e, n, r) {
                        k("Query.on", 2, 4, arguments.length), Ht("Query.on", 1, t, !1), F("Query.on", 2, e, !1);
                        var i = u.getCancelAndContextArgs_("Query.on", n, r);
                        if ("value" === t) this.onValueEvent(e, i.cancel, i.context);
                        else {
                            var o = {};
                            o[t] = e, this.onChildEvent(o, i.cancel, i.context)
                        }
                        return e
                    }, u.prototype.onValueEvent = function(t, e, n) {
                        var r = new xe(t, e || null, n || null);
                        this.repo.addEventCallbackForQuery(this, r)
                    }, u.prototype.onChildEvent = function(t, e, n) {
                        var r = new Fe(t, e, n);
                        this.repo.addEventCallbackForQuery(this, r)
                    }, u.prototype.off = function(t, e, n) {
                        k("Query.off", 0, 3, arguments.length), Ht("Query.off", 1, t, !0), F("Query.off", 2, e, !0), A("Query.off", 3, n, !0);
                        var r = null,
                            i = null;
                        "value" === t ? r = new xe(e || null, null, n || null) : t && (e && ((i = {})[t] = e), r = new Fe(i, null, n || null));
                        this.repo.removeEventCallbackForQuery(this, r)
                    }, u.prototype.once = function(e, n, t, r) {
                        var i = this;
                        k("Query.once", 1, 4, arguments.length), Ht("Query.once", 1, e, !1), F("Query.once", 2, n, !0);
                        var o = u.getCancelAndContextArgs_("Query.once", t, r),
                            s = !0,
                            a = new l;
                        a.promise.catch(function() {});
                        var h = function(t) {
                            s && (s = !1, i.off(e, h), n && n.bind(o.context)(t), a.resolve(t))
                        };
                        return this.on(e, h, function(t) {
                            i.off(e, h), o.cancel && o.cancel.bind(o.context)(t), a.reject(t)
                        }), a.promise
                    }, u.prototype.limitToFirst = function(t) {
                        if (k("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToFirst: First argument must be a positive integer.");
                        if (this.queryParams_.hasLimit()) throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                        return new u(this.repo, this.path, this.queryParams_.limitToFirst(t), this.orderByCalled_)
                    }, u.prototype.limitToLast = function(t) {
                        if (k("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToLast: First argument must be a positive integer.");
                        if (this.queryParams_.hasLimit()) throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                        return new u(this.repo, this.path, this.queryParams_.limitToLast(t), this.orderByCalled_)
                    }, u.prototype.orderByChild = function(t) {
                        if (k("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
                        if ("$priority" === t) throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
                        if ("$value" === t) throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                        jt("Query.orderByChild", 1, t, !1), this.validateNoPreviousOrderByCall_("Query.orderByChild");
                        var e = new Ct(t);
                        if (e.isEmpty()) throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
                        var n = new Pe(e),
                            r = this.queryParams_.orderBy(n);
                        return u.validateQueryEndpoints_(r), new u(this.repo, this.path, r, !0)
                    }, u.prototype.orderByKey = function() {
                        k("Query.orderByKey", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByKey");
                        var t = this.queryParams_.orderBy(te);
                        return u.validateQueryEndpoints_(t), new u(this.repo, this.path, t, !0)
                    }, u.prototype.orderByPriority = function() {
                        k("Query.orderByPriority", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByPriority");
                        var t = this.queryParams_.orderBy(ue);
                        return u.validateQueryEndpoints_(t), new u(this.repo, this.path, t, !0)
                    }, u.prototype.orderByValue = function() {
                        k("Query.orderByValue", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByValue");
                        var t = this.queryParams_.orderBy(Re);
                        return u.validateQueryEndpoints_(t), new u(this.repo, this.path, t, !0)
                    }, u.prototype.startAt = function(t, e) {
                        void 0 === t && (t = null), k("Query.startAt", 0, 2, arguments.length), qt("Query.startAt", 1, t, this.path, !0), Bt("Query.startAt", 2, e, !0);
                        var n = this.queryParams_.startAt(t, e);
                        if (u.validateLimit_(n), u.validateQueryEndpoints_(n), this.queryParams_.hasStart()) throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
                        return void 0 === t && (e = t = null), new u(this.repo, this.path, n, this.orderByCalled_)
                    }, u.prototype.endAt = function(t, e) {
                        void 0 === t && (t = null), k("Query.endAt", 0, 2, arguments.length), qt("Query.endAt", 1, t, this.path, !0), Bt("Query.endAt", 2, e, !0);
                        var n = this.queryParams_.endAt(t, e);
                        if (u.validateLimit_(n), u.validateQueryEndpoints_(n), this.queryParams_.hasEnd()) throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
                        return new u(this.repo, this.path, n, this.orderByCalled_)
                    }, u.prototype.equalTo = function(t, e) {
                        if (k("Query.equalTo", 1, 2, arguments.length), qt("Query.equalTo", 1, t, this.path, !1), Bt("Query.equalTo", 2, e, !0), this.queryParams_.hasStart()) throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
                        if (this.queryParams_.hasEnd()) throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
                        return this.startAt(t, e).endAt(t, e)
                    }, u.prototype.toString = function() {
                        return k("Query.toString", 0, 0, arguments.length), this.repo.toString() + this.path.toUrlEncodedString()
                    }, u.prototype.toJSON = function() {
                        return k("Query.toJSON", 0, 1, arguments.length), this.toString()
                    }, u.prototype.queryObject = function() {
                        return this.queryParams_.getQueryObject()
                    }, u.prototype.queryIdentifier = function() {
                        var t = this.queryObject(),
                            e = pt(t);
                        return "{}" === e ? "default" : e
                    }, u.prototype.isEqual = function(t) {
                        if (k("Query.isEqual", 1, 1, arguments.length), !(t instanceof u)) {
                            throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")
                        }
                        var e = this.repo === t.repo,
                            n = this.path.equals(t.path),
                            r = this.queryIdentifier() === t.queryIdentifier();
                        return e && n && r
                    }, u.getCancelAndContextArgs_ = function(t, e, n) {
                        var r = {
                            cancel: null,
                            context: null
                        };
                        if (e && n) r.cancel = e, F(t, 3, r.cancel, !0), r.context = n, A(t, 4, r.context, !0);
                        else if (e)
                            if ("object" == typeof e && null !== e) r.context = e;
                            else {
                                if ("function" != typeof e) throw new Error(x(t, 3, !0) + " must either be a cancel callback or a context object.");
                                r.cancel = e
                            }
                        return r
                    }, Object.defineProperty(u.prototype, "ref", {
                        get: function() {
                            return this.getRef()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), u
                }(),
                Le = function() {
                    function t() {
                        this.set = {}
                    }
                    return t.prototype.add = function(t, e) {
                        this.set[t] = null === e || e
                    }, t.prototype.contains = function(t) {
                        return w(this.set, t)
                    }, t.prototype.get = function(t) {
                        return this.contains(t) ? this.set[t] : void 0
                    }, t.prototype.remove = function(t) {
                        delete this.set[t]
                    }, t.prototype.clear = function() {
                        this.set = {}
                    }, t.prototype.isEmpty = function() {
                        return I(this.set)
                    }, t.prototype.count = function() {
                        return N(this.set)
                    }, t.prototype.each = function(n) {
                        S(this.set, function(t, e) {
                            return n(t, e)
                        })
                    }, t.prototype.keys = function() {
                        var e = [];
                        return S(this.set, function(t) {
                            e.push(t)
                        }), e
                    }, t
                }(),
                Me = function() {
                    function i() {
                        this.value_ = null, this.children_ = null
                    }
                    return i.prototype.find = function(t) {
                        if (null != this.value_) return this.value_.getChild(t);
                        if (t.isEmpty() || null == this.children_) return null;
                        var e = t.getFront();
                        return t = t.popFront(), this.children_.contains(e) ? this.children_.get(e).find(t) : null
                    }, i.prototype.remember = function(t, e) {
                        if (t.isEmpty()) this.value_ = e, this.children_ = null;
                        else if (null !== this.value_) this.value_ = this.value_.updateChild(t, e);
                        else {
                            null == this.children_ && (this.children_ = new Le);
                            var n = t.getFront();
                            this.children_.contains(n) || this.children_.add(n, new i);
                            var r = this.children_.get(n);
                            t = t.popFront(), r.remember(t, e)
                        }
                    }, i.prototype.forget = function(t) {
                        if (t.isEmpty()) return this.value_ = null, !(this.children_ = null);
                        if (null !== this.value_) {
                            if (this.value_.isLeafNode()) return !1;
                            var e = this.value_;
                            this.value_ = null;
                            var n = this;
                            return e.forEachChild(ue, function(t, e) {
                                n.remember(new Ct(t), e)
                            }), this.forget(t)
                        }
                        if (null === this.children_) return !0;
                        var r = t.getFront();
                        return t = t.popFront(), this.children_.contains(r) && this.children_.get(r).forget(t) && this.children_.remove(r), !!this.children_.isEmpty() && !(this.children_ = null)
                    }, i.prototype.forEachTree = function(r, i) {
                        null !== this.value_ ? i(r, this.value_) : this.forEachChild(function(t, e) {
                            var n = new Ct(r.toString() + "/" + t);
                            e.forEachTree(n, i)
                        })
                    }, i.prototype.forEachChild = function(n) {
                        null !== this.children_ && this.children_.each(function(t, e) {
                            n(t, e)
                        })
                    }, i
                }(),
                We = function(t, e) {
                    return t && "object" == typeof t ? (C(".sv" in t, "Unexpected leaf node or priority contents"), e[t[".sv"]]) : t
                },
                qe = function(t, r) {
                    var i, e = t.getPriority().val(),
                        n = We(e, r);
                    if (t.isLeafNode()) {
                        var o = t,
                            s = We(o.getValue(), r);
                        return s !== o.getValue() || n !== o.getPriority().val() ? new se(s, Se(n)) : t
                    }
                    var a = t;
                    return n !== (i = a).getPriority().val() && (i = i.updatePriority(new se(n))), a.forEachChild(ue, function(t, e) {
                        var n = qe(e, r);
                        n !== e && (i = i.updateImmediateChild(t, n))
                    }), i
                };
            (Ne = Ie || (Ie = {}))[Ne.OVERWRITE = 0] = "OVERWRITE", Ne[Ne.MERGE = 1] = "MERGE", Ne[Ne.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", Ne[Ne.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
            var Qe, Ue, Ve = function() {
                    function e(t, e, n, r) {
                        this.fromUser = t, this.fromServer = e, this.queryId = n, this.tagged = r, C(!r || e, "Tagged queries must be from server.")
                    }
                    return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function(t) {
                        return new e(!1, !0, t, !0)
                    }, e
                }(),
                He = function() {
                    function n(t, e, n) {
                        this.path = t, this.affectedTree = e, this.revert = n, this.type = Ie.ACK_USER_WRITE, this.source = Ve.User
                    }
                    return n.prototype.operationForChild = function(t) {
                        if (this.path.isEmpty()) {
                            if (null != this.affectedTree.value) return C(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
                            var e = this.affectedTree.subtree(new Ct(t));
                            return new n(Ct.Empty, e, this.revert)
                        }
                        return C(this.path.getFront() === t, "operationForChild called for unrelated child."), new n(this.path.popFront(), this.affectedTree, this.revert)
                    }, n
                }(),
                Be = function() {
                    function o(t, e) {
                        void 0 === e && (Qe || (Qe = new de(lt)), e = Qe), this.value = t, this.children = e
                    }
                    return o.fromObject = function(t) {
                        var n = o.Empty;
                        return S(t, function(t, e) {
                            n = n.set(new Ct(t), e)
                        }), n
                    }, o.prototype.isEmpty = function() {
                        return null === this.value && this.children.isEmpty()
                    }, o.prototype.findRootMostMatchingPathAndValue = function(t, e) {
                        if (null != this.value && e(this.value)) return {
                            path: Ct.Empty,
                            value: this.value
                        };
                        if (t.isEmpty()) return null;
                        var n = t.getFront(),
                            r = this.children.get(n);
                        if (null === r) return null;
                        var i = r.findRootMostMatchingPathAndValue(t.popFront(), e);
                        return null == i ? null : {
                            path: new Ct(n).child(i.path),
                            value: i.value
                        }
                    }, o.prototype.findRootMostValueAndPath = function(t) {
                        return this.findRootMostMatchingPathAndValue(t, function() {
                            return !0
                        })
                    }, o.prototype.subtree = function(t) {
                        if (t.isEmpty()) return this;
                        var e = t.getFront(),
                            n = this.children.get(e);
                        return null !== n ? n.subtree(t.popFront()) : o.Empty
                    }, o.prototype.set = function(t, e) {
                        if (t.isEmpty()) return new o(e, this.children);
                        var n = t.getFront(),
                            r = (this.children.get(n) || o.Empty).set(t.popFront(), e),
                            i = this.children.insert(n, r);
                        return new o(this.value, i)
                    }, o.prototype.remove = function(t) {
                        if (t.isEmpty()) return this.children.isEmpty() ? o.Empty : new o(null, this.children);
                        var e = t.getFront(),
                            n = this.children.get(e);
                        if (n) {
                            var r = n.remove(t.popFront()),
                                i = void 0;
                            return i = r.isEmpty() ? this.children.remove(e) : this.children.insert(e, r), null === this.value && i.isEmpty() ? o.Empty : new o(this.value, i)
                        }
                        return this
                    }, o.prototype.get = function(t) {
                        if (t.isEmpty()) return this.value;
                        var e = t.getFront(),
                            n = this.children.get(e);
                        return n ? n.get(t.popFront()) : null
                    }, o.prototype.setTree = function(t, e) {
                        if (t.isEmpty()) return e;
                        var n = t.getFront(),
                            r = (this.children.get(n) || o.Empty).setTree(t.popFront(), e),
                            i = void 0;
                        return i = r.isEmpty() ? this.children.remove(n) : this.children.insert(n, r), new o(this.value, i)
                    }, o.prototype.fold = function(t) {
                        return this.fold_(Ct.Empty, t)
                    }, o.prototype.fold_ = function(n, r) {
                        var i = {};
                        return this.children.inorderTraversal(function(t, e) {
                            i[t] = e.fold_(n.child(t), r)
                        }), r(n, this.value, i)
                    }, o.prototype.findOnPath = function(t, e) {
                        return this.findOnPath_(t, Ct.Empty, e)
                    }, o.prototype.findOnPath_ = function(t, e, n) {
                        var r = !!this.value && n(e, this.value);
                        if (r) return r;
                        if (t.isEmpty()) return null;
                        var i = t.getFront(),
                            o = this.children.get(i);
                        return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null
                    }, o.prototype.foreachOnPath = function(t, e) {
                        return this.foreachOnPath_(t, Ct.Empty, e)
                    }, o.prototype.foreachOnPath_ = function(t, e, n) {
                        if (t.isEmpty()) return this;
                        this.value && n(e, this.value);
                        var r = t.getFront(),
                            i = this.children.get(r);
                        return i ? i.foreachOnPath_(t.popFront(), e.child(r), n) : o.Empty
                    }, o.prototype.foreach = function(t) {
                        this.foreach_(Ct.Empty, t)
                    }, o.prototype.foreach_ = function(n, r) {
                        this.children.inorderTraversal(function(t, e) {
                            e.foreach_(n.child(t), r)
                        }), this.value && r(n, this.value)
                    }, o.prototype.foreachChild = function(n) {
                        this.children.inorderTraversal(function(t, e) {
                            e.value && n(t, e.value)
                        })
                    }, o.Empty = new o(null), o
                }(),
                je = function() {
                    function e(t, e) {
                        this.source = t, this.path = e, this.type = Ie.LISTEN_COMPLETE
                    }
                    return e.prototype.operationForChild = function(t) {
                        return this.path.isEmpty() ? new e(this.source, Ct.Empty) : new e(this.source, this.path.popFront())
                    }, e
                }(),
                Ke = function() {
                    function e(t, e, n) {
                        this.source = t, this.path = e, this.snap = n, this.type = Ie.OVERWRITE
                    }
                    return e.prototype.operationForChild = function(t) {
                        return this.path.isEmpty() ? new e(this.source, Ct.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap)
                    }, e
                }(),
                Ye = function() {
                    function n(t, e, n) {
                        this.source = t, this.path = e, this.children = n, this.type = Ie.MERGE
                    }
                    return n.prototype.operationForChild = function(t) {
                        if (this.path.isEmpty()) {
                            var e = this.children.subtree(new Ct(t));
                            return e.isEmpty() ? null : e.value ? new Ke(this.source, Ct.Empty, e.value) : new n(this.source, Ct.Empty, e)
                        }
                        return C(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new n(this.source, this.path.popFront(), this.children)
                    }, n.prototype.toString = function() {
                        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
                    }, n
                }(),
                ze = function() {
                    function t(t, e, n) {
                        this.node_ = t, this.fullyInitialized_ = e, this.filtered_ = n
                    }
                    return t.prototype.isFullyInitialized = function() {
                        return this.fullyInitialized_
                    }, t.prototype.isFiltered = function() {
                        return this.filtered_
                    }, t.prototype.isCompleteForPath = function(t) {
                        if (t.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
                        var e = t.getFront();
                        return this.isCompleteForChild(e)
                    }, t.prototype.isCompleteForChild = function(t) {
                        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(t)
                    }, t.prototype.getNode = function() {
                        return this.node_
                    }, t
                }(),
                Ge = function() {
                    function r(t, e) {
                        this.eventCache_ = t, this.serverCache_ = e
                    }
                    return r.prototype.updateEventSnap = function(t, e, n) {
                        return new r(new ze(t, e, n), this.serverCache_)
                    }, r.prototype.updateServerSnap = function(t, e, n) {
                        return new r(this.eventCache_, new ze(t, e, n))
                    }, r.prototype.getEventCache = function() {
                        return this.eventCache_
                    }, r.prototype.getCompleteEventSnap = function() {
                        return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null
                    }, r.prototype.getServerCache = function() {
                        return this.serverCache_
                    }, r.prototype.getCompleteServerSnap = function() {
                        return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null
                    }, r.Empty = new r(new ze(Ee.EMPTY_NODE, !1, !1), new ze(Ee.EMPTY_NODE, !1, !1)), r
                }(),
                Xe = function() {
                    function r(t, e, n, r, i) {
                        this.type = t, this.snapshotNode = e, this.childName = n, this.oldSnap = r, this.prevName = i
                    }
                    return r.valueChange = function(t) {
                        return new r(r.VALUE, t)
                    }, r.childAddedChange = function(t, e) {
                        return new r(r.CHILD_ADDED, e, t)
                    }, r.childRemovedChange = function(t, e) {
                        return new r(r.CHILD_REMOVED, e, t)
                    }, r.childChangedChange = function(t, e, n) {
                        return new r(r.CHILD_CHANGED, e, t, n)
                    }, r.childMovedChange = function(t, e) {
                        return new r(r.CHILD_MOVED, e, t)
                    }, r.CHILD_ADDED = "child_added", r.CHILD_REMOVED = "child_removed", r.CHILD_CHANGED = "child_changed", r.CHILD_MOVED = "child_moved", r.VALUE = "value", r
                }(),
                $e = function() {
                    function t(t) {
                        this.index_ = t
                    }
                    return t.prototype.updateChild = function(t, e, n, r, i, o) {
                        C(t.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                        var s = t.getImmediateChild(e);
                        return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() == n.isEmpty() ? t : (null != o && (n.isEmpty() ? t.hasChild(e) ? o.trackChildChange(Xe.childRemovedChange(e, s)) : C(t.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : s.isEmpty() ? o.trackChildChange(Xe.childAddedChange(e, n)) : o.trackChildChange(Xe.childChangedChange(e, n, s))), t.isLeafNode() && n.isEmpty() ? t : t.updateImmediateChild(e, n).withIndex(this.index_))
                    }, t.prototype.updateFullNode = function(r, n, i) {
                        return null != i && (r.isLeafNode() || r.forEachChild(ue, function(t, e) {
                            n.hasChild(t) || i.trackChildChange(Xe.childRemovedChange(t, e))
                        }), n.isLeafNode() || n.forEachChild(ue, function(t, e) {
                            if (r.hasChild(t)) {
                                var n = r.getImmediateChild(t);
                                n.equals(e) || i.trackChildChange(Xe.childChangedChange(t, e, n))
                            } else i.trackChildChange(Xe.childAddedChange(t, e))
                        })), n.withIndex(this.index_)
                    }, t.prototype.updatePriority = function(t, e) {
                        return t.isEmpty() ? Ee.EMPTY_NODE : t.updatePriority(e)
                    }, t.prototype.filtersNodes = function() {
                        return !1
                    }, t.prototype.getIndexedFilter = function() {
                        return this
                    }, t.prototype.getIndex = function() {
                        return this.index_
                    }, t
                }(),
                Je = function() {
                    function t() {
                        this.changeMap_ = {}
                    }
                    return t.prototype.trackChildChange = function(t) {
                        var e = t.type,
                            n = t.childName;
                        C(e == Xe.CHILD_ADDED || e == Xe.CHILD_CHANGED || e == Xe.CHILD_REMOVED, "Only child changes supported for tracking"), C(".priority" !== n, "Only non-priority child changes can be tracked.");
                        var r = b(this.changeMap_, n);
                        if (r) {
                            var i = r.type;
                            if (e == Xe.CHILD_ADDED && i == Xe.CHILD_REMOVED) this.changeMap_[n] = Xe.childChangedChange(n, t.snapshotNode, r.snapshotNode);
                            else if (e == Xe.CHILD_REMOVED && i == Xe.CHILD_ADDED) delete this.changeMap_[n];
                            else if (e == Xe.CHILD_REMOVED && i == Xe.CHILD_CHANGED) this.changeMap_[n] = Xe.childRemovedChange(n, r.oldSnap);
                            else if (e == Xe.CHILD_CHANGED && i == Xe.CHILD_ADDED) this.changeMap_[n] = Xe.childAddedChange(n, t.snapshotNode);
                            else {
                                if (e != Xe.CHILD_CHANGED || i != Xe.CHILD_CHANGED) throw p("Illegal combination of changes: " + t + " occurred after " + r);
                                this.changeMap_[n] = Xe.childChangedChange(n, t.snapshotNode, r.oldSnap)
                            }
                        } else this.changeMap_[n] = t
                    }, t.prototype.getChanges = function() {
                        return function(t) {
                            var e = [],
                                n = 0;
                            for (var r in t) e[n++] = t[r];
                            return e
                        }(this.changeMap_)
                    }, t
                }(),
                Ze = new(function() {
                    function t() {}
                    return t.prototype.getCompleteChild = function(t) {
                        return null
                    }, t.prototype.getChildAfterChild = function(t, e, n) {
                        return null
                    }, t
                }()),
                tn = function() {
                    function t(t, e, n) {
                        void 0 === n && (n = null), this.writes_ = t, this.viewCache_ = e, this.optCompleteServerCache_ = n
                    }
                    return t.prototype.getCompleteChild = function(t) {
                        var e = this.viewCache_.getEventCache();
                        if (e.isCompleteForChild(t)) return e.getNode().getImmediateChild(t);
                        var n = null != this.optCompleteServerCache_ ? new ze(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache();
                        return this.writes_.calcCompleteChild(t, n)
                    }, t.prototype.getChildAfterChild = function(t, e, n) {
                        var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap(),
                            i = this.writes_.calcIndexedSlice(r, e, 1, n, t);
                        return 0 === i.length ? null : i[0]
                    }, t
                }(),
                en = function(t, e) {
                    this.viewCache = t, this.changes = e
                },
                nn = function() {
                    function c(t) {
                        this.filter_ = t
                    }
                    return c.prototype.assertIndexed = function(t) {
                        C(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed"), C(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed")
                    }, c.prototype.applyOperation = function(t, e, n, r) {
                        var i, o, s = new Je;
                        if (e.type === Ie.OVERWRITE) {
                            var a = e;
                            i = a.source.fromUser ? this.applyUserOverwrite_(t, a.path, a.snap, n, r, s) : (C(a.source.fromServer, "Unknown source."), o = a.source.tagged || t.getServerCache().isFiltered() && !a.path.isEmpty(), this.applyServerOverwrite_(t, a.path, a.snap, n, r, o, s))
                        } else if (e.type === Ie.MERGE) {
                            var h = e;
                            i = h.source.fromUser ? this.applyUserMerge_(t, h.path, h.children, n, r, s) : (C(h.source.fromServer, "Unknown source."), o = h.source.tagged || t.getServerCache().isFiltered(), this.applyServerMerge_(t, h.path, h.children, n, r, o, s))
                        } else if (e.type === Ie.ACK_USER_WRITE) {
                            var u = e;
                            i = u.revert ? this.revertUserWrite_(t, u.path, n, r, s) : this.ackUserWrite_(t, u.path, u.affectedTree, n, r, s)
                        } else {
                            if (e.type !== Ie.LISTEN_COMPLETE) throw p("Unknown operation type: " + e.type);
                            i = this.listenComplete_(t, e.path, n, s)
                        }
                        var l = s.getChanges();
                        return c.maybeAddValueEvent_(t, i, l), new en(i, l)
                    }, c.maybeAddValueEvent_ = function(t, e, n) {
                        var r = e.getEventCache();
                        if (r.isFullyInitialized()) {
                            var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                                o = t.getCompleteEventSnap();
                            (0 < n.length || !t.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(Xe.valueChange(e.getCompleteEventSnap()))
                        }
                    }, c.prototype.generateEventCacheAfterServerEvent_ = function(t, e, n, r, i) {
                        var o = t.getEventCache();
                        if (null != n.shadowingWrite(e)) return t;
                        var s = void 0,
                            a = void 0;
                        if (e.isEmpty())
                            if (C(t.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), t.getServerCache().isFiltered()) {
                                var h = t.getCompleteServerSnap(),
                                    u = h instanceof Ee ? h : Ee.EMPTY_NODE,
                                    l = n.calcCompleteEventChildren(u);
                                s = this.filter_.updateFullNode(t.getEventCache().getNode(), l, i)
                            } else {
                                var c = n.calcCompleteEventCache(t.getCompleteServerSnap());
                                s = this.filter_.updateFullNode(t.getEventCache().getNode(), c, i)
                            }
                        else {
                            var p = e.getFront();
                            if (".priority" == p) {
                                C(1 == e.getLength(), "Can't have a priority with additional path components");
                                var d = o.getNode();
                                a = t.getServerCache().getNode();
                                var f = n.calcEventCacheAfterServerOverwrite(e, d, a);
                                s = null != f ? this.filter_.updatePriority(d, f) : o.getNode()
                            } else {
                                var _ = e.popFront(),
                                    y = void 0;
                                if (o.isCompleteForChild(p)) {
                                    a = t.getServerCache().getNode();
                                    var v = n.calcEventCacheAfterServerOverwrite(e, o.getNode(), a);
                                    y = null != v ? o.getNode().getImmediateChild(p).updateChild(_, v) : o.getNode().getImmediateChild(p)
                                } else y = n.calcCompleteChild(p, t.getServerCache());
                                s = null != y ? this.filter_.updateChild(o.getNode(), p, y, _, r, i) : o.getNode()
                            }
                        }
                        return t.updateEventSnap(s, o.isFullyInitialized() || e.isEmpty(), this.filter_.filtersNodes())
                    }, c.prototype.applyServerOverwrite_ = function(t, e, n, r, i, o, s) {
                        var a, h = t.getServerCache(),
                            u = o ? this.filter_ : this.filter_.getIndexedFilter();
                        if (e.isEmpty()) a = u.updateFullNode(h.getNode(), n, null);
                        else if (u.filtersNodes() && !h.isFiltered()) {
                            var l = h.getNode().updateChild(e, n);
                            a = u.updateFullNode(h.getNode(), l, null)
                        } else {
                            var c = e.getFront();
                            if (!h.isCompleteForPath(e) && 1 < e.getLength()) return t;
                            var p = e.popFront(),
                                d = h.getNode().getImmediateChild(c).updateChild(p, n);
                            a = ".priority" == c ? u.updatePriority(h.getNode(), d) : u.updateChild(h.getNode(), c, d, p, Ze, null)
                        }
                        var f = t.updateServerSnap(a, h.isFullyInitialized() || e.isEmpty(), u.filtersNodes()),
                            _ = new tn(r, f, i);
                        return this.generateEventCacheAfterServerEvent_(f, e, r, _, s)
                    }, c.prototype.applyUserOverwrite_ = function(t, e, n, r, i, o) {
                        var s, a, h = t.getEventCache(),
                            u = new tn(r, t, i);
                        if (e.isEmpty()) a = this.filter_.updateFullNode(t.getEventCache().getNode(), n, o), s = t.updateEventSnap(a, !0, this.filter_.filtersNodes());
                        else {
                            var l = e.getFront();
                            if (".priority" === l) a = this.filter_.updatePriority(t.getEventCache().getNode(), n), s = t.updateEventSnap(a, h.isFullyInitialized(), h.isFiltered());
                            else {
                                var c = e.popFront(),
                                    p = h.getNode().getImmediateChild(l),
                                    d = void 0;
                                if (c.isEmpty()) d = n;
                                else {
                                    var f = u.getCompleteChild(l);
                                    d = null != f ? ".priority" === c.getBack() && f.getChild(c.parent()).isEmpty() ? f : f.updateChild(c, n) : Ee.EMPTY_NODE
                                }
                                if (p.equals(d)) s = t;
                                else {
                                    var _ = this.filter_.updateChild(h.getNode(), l, d, c, u, o);
                                    s = t.updateEventSnap(_, h.isFullyInitialized(), this.filter_.filtersNodes())
                                }
                            }
                        }
                        return s
                    }, c.cacheHasChild_ = function(t, e) {
                        return t.getEventCache().isCompleteForChild(e)
                    }, c.prototype.applyUserMerge_ = function(r, i, t, o, s, a) {
                        var h = this,
                            u = r;
                        return t.foreach(function(t, e) {
                            var n = i.child(t);
                            c.cacheHasChild_(r, n.getFront()) && (u = h.applyUserOverwrite_(u, n, e, o, s, a))
                        }), t.foreach(function(t, e) {
                            var n = i.child(t);
                            c.cacheHasChild_(r, n.getFront()) || (u = h.applyUserOverwrite_(u, n, e, o, s, a))
                        }), u
                    }, c.prototype.applyMerge_ = function(n, t) {
                        return t.foreach(function(t, e) {
                            n = n.updateChild(t, e)
                        }), n
                    }, c.prototype.applyServerMerge_ = function(o, t, e, s, a, h, u) {
                        var l = this;
                        if (o.getServerCache().getNode().isEmpty() && !o.getServerCache().isFullyInitialized()) return o;
                        var n, c = o;
                        n = t.isEmpty() ? e : Be.Empty.setTree(t, e);
                        var p = o.getServerCache().getNode();
                        return n.children.inorderTraversal(function(t, e) {
                            if (p.hasChild(t)) {
                                var n = o.getServerCache().getNode().getImmediateChild(t),
                                    r = l.applyMerge_(n, e);
                                c = l.applyServerOverwrite_(c, new Ct(t), r, s, a, h, u)
                            }
                        }), n.children.inorderTraversal(function(t, e) {
                            var n = !o.getServerCache().isCompleteForChild(t) && null == e.value;
                            if (!p.hasChild(t) && !n) {
                                var r = o.getServerCache().getNode().getImmediateChild(t),
                                    i = l.applyMerge_(r, e);
                                c = l.applyServerOverwrite_(c, new Ct(t), i, s, a, h, u)
                            }
                        }), c
                    }, c.prototype.ackUserWrite_ = function(t, r, e, n, i, o) {
                        if (null != n.shadowingWrite(r)) return t;
                        var s = t.getServerCache().isFiltered(),
                            a = t.getServerCache();
                        if (null != e.value) {
                            if (r.isEmpty() && a.isFullyInitialized() || a.isCompleteForPath(r)) return this.applyServerOverwrite_(t, r, a.getNode().getChild(r), n, i, s, o);
                            if (r.isEmpty()) {
                                var h = Be.Empty;
                                return a.getNode().forEachChild(te, function(t, e) {
                                    h = h.set(new Ct(t), e)
                                }), this.applyServerMerge_(t, r, h, n, i, s, o)
                            }
                            return t
                        }
                        var u = Be.Empty;
                        return e.foreach(function(t, e) {
                            var n = r.child(t);
                            a.isCompleteForPath(n) && (u = u.set(t, a.getNode().getChild(n)))
                        }), this.applyServerMerge_(t, r, u, n, i, s, o)
                    }, c.prototype.listenComplete_ = function(t, e, n, r) {
                        var i = t.getServerCache(),
                            o = t.updateServerSnap(i.getNode(), i.isFullyInitialized() || e.isEmpty(), i.isFiltered());
                        return this.generateEventCacheAfterServerEvent_(o, e, n, Ze, r)
                    }, c.prototype.revertUserWrite_ = function(t, e, n, r, i) {
                        var o;
                        if (null != n.shadowingWrite(e)) return t;
                        var s = new tn(n, t, r),
                            a = t.getEventCache().getNode(),
                            h = void 0;
                        if (e.isEmpty() || ".priority" === e.getFront()) {
                            var u = void 0;
                            if (t.getServerCache().isFullyInitialized()) u = n.calcCompleteEventCache(t.getCompleteServerSnap());
                            else {
                                var l = t.getServerCache().getNode();
                                C(l instanceof Ee, "serverChildren would be complete if leaf node"), u = n.calcCompleteEventChildren(l)
                            }
                            u = u, h = this.filter_.updateFullNode(a, u, i)
                        } else {
                            var c = e.getFront(),
                                p = n.calcCompleteChild(c, t.getServerCache());
                            null == p && t.getServerCache().isCompleteForChild(c) && (p = a.getImmediateChild(c)), (h = null != p ? this.filter_.updateChild(a, c, p, e.popFront(), s, i) : t.getEventCache().getNode().hasChild(c) ? this.filter_.updateChild(a, c, Ee.EMPTY_NODE, e.popFront(), s, i) : a).isEmpty() && t.getServerCache().isFullyInitialized() && (o = n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode() && (h = this.filter_.updateFullNode(h, o, i))
                        }
                        return o = t.getServerCache().isFullyInitialized() || null != n.shadowingWrite(Ct.Empty), t.updateEventSnap(h, o, this.filter_.filtersNodes())
                    }, c
                }(),
                rn = function() {
                    function t(t) {
                        this.query_ = t, this.index_ = this.query_.getQueryParams().getIndex()
                    }
                    return t.prototype.generateEventsForChanges = function(t, e, n) {
                        var r = this,
                            i = [],
                            o = [];
                        return t.forEach(function(t) {
                            t.type === Xe.CHILD_CHANGED && r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && o.push(Xe.childMovedChange(t.childName, t.snapshotNode))
                        }), this.generateEventsForType_(i, Xe.CHILD_REMOVED, t, n, e), this.generateEventsForType_(i, Xe.CHILD_ADDED, t, n, e), this.generateEventsForType_(i, Xe.CHILD_MOVED, o, n, e), this.generateEventsForType_(i, Xe.CHILD_CHANGED, t, n, e), this.generateEventsForType_(i, Xe.VALUE, t, n, e), i
                    }, t.prototype.generateEventsForType_ = function(r, e, t, i, o) {
                        var s = this,
                            n = t.filter(function(t) {
                                return t.type === e
                            });
                        n.sort(this.compareChanges_.bind(this)), n.forEach(function(e) {
                            var n = s.materializeSingleChange_(e, o);
                            i.forEach(function(t) {
                                t.respondsTo(e.type) && r.push(t.createEvent(n, s.query_))
                            })
                        })
                    }, t.prototype.materializeSingleChange_ = function(t, e) {
                        return "value" === t.type || "child_removed" === t.type || (t.prevName = e.getPredecessorChildName(t.childName, t.snapshotNode, this.index_)), t
                    }, t.prototype.compareChanges_ = function(t, e) {
                        if (null == t.childName || null == e.childName) throw p("Should only compare child_ events.");
                        var n = new $t(t.childName, t.snapshotNode),
                            r = new $t(e.childName, e.snapshotNode);
                        return this.index_.compare(n, r)
                    }, t
                }(),
                on = function() {
                    function t(t, e) {
                        this.query_ = t, this.eventRegistrations_ = [];
                        var n = this.query_.getQueryParams(),
                            r = new $e(n.getIndex()),
                            i = n.getNodeFilter();
                        this.processor_ = new nn(i);
                        var o = e.getServerCache(),
                            s = e.getEventCache(),
                            a = r.updateFullNode(Ee.EMPTY_NODE, o.getNode(), null),
                            h = i.updateFullNode(Ee.EMPTY_NODE, s.getNode(), null),
                            u = new ze(a, o.isFullyInitialized(), r.filtersNodes()),
                            l = new ze(h, s.isFullyInitialized(), i.filtersNodes());
                        this.viewCache_ = new Ge(l, u), this.eventGenerator_ = new rn(this.query_)
                    }
                    return t.prototype.getQuery = function() {
                        return this.query_
                    }, t.prototype.getServerCache = function() {
                        return this.viewCache_.getServerCache().getNode()
                    }, t.prototype.getCompleteServerCache = function(t) {
                        var e = this.viewCache_.getCompleteServerSnap();
                        return e && (this.query_.getQueryParams().loadsAllData() || !t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()) ? e.getChild(t) : null
                    }, t.prototype.isEmpty = function() {
                        return 0 === this.eventRegistrations_.length
                    }, t.prototype.addEventRegistration = function(t) {
                        this.eventRegistrations_.push(t)
                    }, t.prototype.removeEventRegistration = function(t, n) {
                        var r = [];
                        if (n) {
                            C(null == t, "A cancel should cancel all event registrations.");
                            var i = this.query_.path;
                            this.eventRegistrations_.forEach(function(t) {
                                n = n;
                                var e = t.createCancelEvent(n, i);
                                e && r.push(e)
                            })
                        }
                        if (t) {
                            for (var e = [], o = 0; o < this.eventRegistrations_.length; ++o) {
                                var s = this.eventRegistrations_[o];
                                if (s.matches(t)) {
                                    if (t.hasAnyCallback()) {
                                        e = e.concat(this.eventRegistrations_.slice(o + 1));
                                        break
                                    }
                                } else e.push(s)
                            }
                            this.eventRegistrations_ = e
                        } else this.eventRegistrations_ = [];
                        return r
                    }, t.prototype.applyOperation = function(t, e, n) {
                        t.type === Ie.MERGE && null !== t.source.queryId && (C(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges"), C(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
                        var r = this.viewCache_,
                            i = this.processor_.applyOperation(r, t, e, n);
                        return this.processor_.assertIndexed(i.viewCache), C(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(i.changes, i.viewCache.getEventCache().getNode(), null)
                    }, t.prototype.getInitialEvents = function(t) {
                        var e = this.viewCache_.getEventCache(),
                            n = [];
                        e.getNode().isLeafNode() || e.getNode().forEachChild(ue, function(t, e) {
                            n.push(Xe.childAddedChange(t, e))
                        });
                        return e.isFullyInitialized() && n.push(Xe.valueChange(e.getNode())), this.generateEventsForChanges_(n, e.getNode(), t)
                    }, t.prototype.generateEventsForChanges_ = function(t, e, n) {
                        var r = n ? [n] : this.eventRegistrations_;
                        return this.eventGenerator_.generateEventsForChanges(t, e, r)
                    }, t
                }(),
                sn = function() {
                    function u() {
                        this.views_ = {}
                    }
                    return Object.defineProperty(u, "__referenceConstructor", {
                        get: function() {
                            return C(Ue, "Reference.ts has not been loaded"), Ue
                        },
                        set: function(t) {
                            C(!Ue, "__referenceConstructor has already been defined"), Ue = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), u.prototype.isEmpty = function() {
                        return I(this.views_)
                    }, u.prototype.applyOperation = function(n, r, i) {
                        var t = n.source.queryId;
                        if (null !== t) {
                            var e = b(this.views_, t);
                            return C(null != e, "SyncTree gave us an op for an invalid query."), e.applyOperation(n, r, i)
                        }
                        var o = [];
                        return S(this.views_, function(t, e) {
                            o = o.concat(e.applyOperation(n, r, i))
                        }), o
                    }, u.prototype.addEventRegistration = function(t, e, n, r, i) {
                        var o = t.queryIdentifier(),
                            s = b(this.views_, o);
                        if (!s) {
                            var a = n.calcCompleteEventCache(i ? r : null),
                                h = !1;
                            h = !!a || (a = r instanceof Ee ? n.calcCompleteEventChildren(r) : Ee.EMPTY_NODE, !1);
                            var u = new Ge(new ze(a, h, !1), new ze(r, i, !1));
                            s = new on(t, u), this.views_[o] = s
                        }
                        return s.addEventRegistration(e), s.getInitialEvents(e)
                    }, u.prototype.removeEventRegistration = function(t, n, r) {
                        var e = t.queryIdentifier(),
                            i = [],
                            o = [],
                            s = this.hasCompleteView();
                        if ("default" === e) {
                            var a = this;
                            S(this.views_, function(t, e) {
                                o = o.concat(e.removeEventRegistration(n, r)), e.isEmpty() && (delete a.views_[t], e.getQuery().getQueryParams().loadsAllData() || i.push(e.getQuery()))
                            })
                        } else {
                            var h = b(this.views_, e);
                            h && (o = o.concat(h.removeEventRegistration(n, r)), h.isEmpty() && (delete this.views_[e], h.getQuery().getQueryParams().loadsAllData() || i.push(h.getQuery())))
                        }
                        return s && !this.hasCompleteView() && i.push(new u.__referenceConstructor(t.repo, t.path)), {
                            removed: i,
                            events: o
                        }
                    }, u.prototype.getQueryViews = function() {
                        var e = this;
                        return Object.keys(this.views_).map(function(t) {
                            return e.views_[t]
                        }).filter(function(t) {
                            return !t.getQuery().getQueryParams().loadsAllData()
                        })
                    }, u.prototype.getCompleteServerCache = function(n) {
                        var r = null;
                        return S(this.views_, function(t, e) {
                            r = r || e.getCompleteServerCache(n)
                        }), r
                    }, u.prototype.viewForQuery = function(t) {
                        if (t.getQueryParams().loadsAllData()) return this.getCompleteView();
                        var e = t.queryIdentifier();
                        return b(this.views_, e)
                    }, u.prototype.viewExistsForQuery = function(t) {
                        return null != this.viewForQuery(t)
                    }, u.prototype.hasCompleteView = function() {
                        return null != this.getCompleteView()
                    }, u.prototype.getCompleteView = function() {
                        var t, e, n;
                        return (t = this.views_, (n = P(t, function(t) {
                            return t.getQuery().getQueryParams().loadsAllData()
                        }, e)) && t[n]) || null
                    }, u
                }(),
                an = function() {
                    function a(t) {
                        this.writeTree_ = t
                    }
                    return a.prototype.addWrite = function(t, e) {
                        if (t.isEmpty()) return new a(new Be(e));
                        var n = this.writeTree_.findRootMostValueAndPath(t);
                        if (null != n) {
                            var r = n.path,
                                i = n.value,
                                o = Ct.relativePath(r, t);
                            return i = i.updateChild(o, e), new a(this.writeTree_.set(r, i))
                        }
                        var s = new Be(e);
                        return new a(this.writeTree_.setTree(t, s))
                    }, a.prototype.addWrites = function(n, t) {
                        var r = this;
                        return S(t, function(t, e) {
                            r = r.addWrite(n.child(t), e)
                        }), r
                    }, a.prototype.removeWrite = function(t) {
                        return t.isEmpty() ? a.Empty : new a(this.writeTree_.setTree(t, Be.Empty))
                    }, a.prototype.hasCompleteWrite = function(t) {
                        return null != this.getCompleteNode(t)
                    }, a.prototype.getCompleteNode = function(t) {
                        var e = this.writeTree_.findRootMostValueAndPath(t);
                        return null != e ? this.writeTree_.get(e.path).getChild(Ct.relativePath(e.path, t)) : null
                    }, a.prototype.getCompleteChildren = function() {
                        var n = [],
                            t = this.writeTree_.value;
                        return null != t ? t.isLeafNode() || t.forEachChild(ue, function(t, e) {
                            n.push(new $t(t, e))
                        }) : this.writeTree_.children.inorderTraversal(function(t, e) {
                            null != e.value && n.push(new $t(t, e.value))
                        }), n
                    }, a.prototype.childCompoundWrite = function(t) {
                        if (t.isEmpty()) return this;
                        var e = this.getCompleteNode(t);
                        return new a(null != e ? new Be(e) : this.writeTree_.subtree(t))
                    }, a.prototype.isEmpty = function() {
                        return this.writeTree_.isEmpty()
                    }, a.prototype.apply = function(t) {
                        return a.applySubtreeWrite_(Ct.Empty, this.writeTree_, t)
                    }, a.Empty = new a(new Be(null)), a.applySubtreeWrite_ = function(n, t, r) {
                        if (null != t.value) return r.updateChild(n, t.value);
                        var i = null;
                        return t.children.inorderTraversal(function(t, e) {
                            ".priority" === t ? (C(null !== e.value, "Priority writes must always be leaf nodes"), i = e.value) : r = a.applySubtreeWrite_(n.child(t), e, r)
                        }), r.getChild(n).isEmpty() || null === i || (r = r.updateChild(n.child(".priority"), i)), r
                    }, a
                }(),
                hn = function() {
                    function u() {
                        this.visibleWrites_ = an.Empty, this.allWrites_ = [], this.lastWriteId_ = -1
                    }
                    return u.prototype.childWrites = function(t) {
                        return new un(t, this)
                    }, u.prototype.addOverwrite = function(t, e, n, r) {
                        C(n > this.lastWriteId_, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.allWrites_.push({
                            path: t,
                            snap: e,
                            writeId: n,
                            visible: r
                        }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)), this.lastWriteId_ = n
                    }, u.prototype.addMerge = function(t, e, n) {
                        C(n > this.lastWriteId_, "Stacking an older merge on top of newer ones"), this.allWrites_.push({
                            path: t,
                            children: e,
                            writeId: n,
                            visible: !0
                        }), this.visibleWrites_ = this.visibleWrites_.addWrites(t, e), this.lastWriteId_ = n
                    }, u.prototype.getWrite = function(t) {
                        for (var e = 0; e < this.allWrites_.length; e++) {
                            var n = this.allWrites_[e];
                            if (n.writeId === t) return n
                        }
                        return null
                    }, u.prototype.removeWrite = function(e) {
                        var n = this,
                            t = this.allWrites_.findIndex(function(t) {
                                return t.writeId === e
                            });
                        C(0 <= t, "removeWrite called with nonexistent writeId.");
                        var r = this.allWrites_[t];
                        this.allWrites_.splice(t, 1);
                        for (var i = r.visible, o = !1, s = this.allWrites_.length - 1; i && 0 <= s;) {
                            var a = this.allWrites_[s];
                            a.visible && (t <= s && this.recordContainsPath_(a, r.path) ? i = !1 : r.path.contains(a.path) && (o = !0)), s--
                        }
                        if (i) {
                            if (o) return this.resetTree_(), !0;
                            if (r.snap) this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path);
                            else {
                                var h = r.children;
                                S(h, function(t) {
                                    n.visibleWrites_ = n.visibleWrites_.removeWrite(r.path.child(t))
                                })
                            }
                            return !0
                        }
                        return !1
                    }, u.prototype.getCompleteWriteData = function(t) {
                        return this.visibleWrites_.getCompleteNode(t)
                    }, u.prototype.calcCompleteEventCache = function(e, t, n, r) {
                        if (n || r) {
                            var i = this.visibleWrites_.childCompoundWrite(e);
                            if (!r && i.isEmpty()) return t;
                            if (r || null != t || i.hasCompleteWrite(Ct.Empty)) {
                                var o = u.layerTree_(this.allWrites_, function(t) {
                                    return (t.visible || r) && (!n || !~n.indexOf(t.writeId)) && (t.path.contains(e) || e.contains(t.path))
                                }, e);
                                h = t || Ee.EMPTY_NODE;
                                return o.apply(h)
                            }
                            return null
                        }
                        var s = this.visibleWrites_.getCompleteNode(e);
                        if (null != s) return s;
                        var a = this.visibleWrites_.childCompoundWrite(e);
                        if (a.isEmpty()) return t;
                        if (null != t || a.hasCompleteWrite(Ct.Empty)) {
                            var h = t || Ee.EMPTY_NODE;
                            return a.apply(h)
                        }
                        return null
                    }, u.prototype.calcCompleteEventChildren = function(t, e) {
                        var r = Ee.EMPTY_NODE,
                            n = this.visibleWrites_.getCompleteNode(t);
                        if (n) return n.isLeafNode() || n.forEachChild(ue, function(t, e) {
                            r = r.updateImmediateChild(t, e)
                        }), r;
                        if (e) {
                            var i = this.visibleWrites_.childCompoundWrite(t);
                            return e.forEachChild(ue, function(t, e) {
                                var n = i.childCompoundWrite(new Ct(t)).apply(e);
                                r = r.updateImmediateChild(t, n)
                            }), i.getCompleteChildren().forEach(function(t) {
                                r = r.updateImmediateChild(t.name, t.node)
                            }), r
                        }
                        return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function(t) {
                            r = r.updateImmediateChild(t.name, t.node)
                        }), r
                    }, u.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n, r) {
                        C(n || r, "Either existingEventSnap or existingServerSnap must exist");
                        var i = t.child(e);
                        if (this.visibleWrites_.hasCompleteWrite(i)) return null;
                        var o = this.visibleWrites_.childCompoundWrite(i);
                        return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e))
                    }, u.prototype.calcCompleteChild = function(t, e, n) {
                        var r = t.child(e),
                            i = this.visibleWrites_.getCompleteNode(r);
                        return null != i ? i : n.isCompleteForChild(e) ? this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)) : null
                    }, u.prototype.shadowingWrite = function(t) {
                        return this.visibleWrites_.getCompleteNode(t)
                    }, u.prototype.calcIndexedSlice = function(t, e, n, r, i, o) {
                        var s, a = this.visibleWrites_.childCompoundWrite(t),
                            h = a.getCompleteNode(Ct.Empty);
                        if (null != h) s = h;
                        else {
                            if (null == e) return [];
                            s = a.apply(e)
                        }
                        if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode()) return [];
                        for (var u = [], l = o.getCompare(), c = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o), p = c.getNext(); p && u.length < r;) 0 !== l(p, n) && u.push(p), p = c.getNext();
                        return u
                    }, u.prototype.recordContainsPath_ = function(n, r) {
                        return n.snap ? n.path.contains(r) : !!P(n.children, function(t, e) {
                            return n.path.child(e).contains(r)
                        })
                    }, u.prototype.resetTree_ = function() {
                        this.visibleWrites_ = u.layerTree_(this.allWrites_, u.DefaultFilter_, Ct.Empty), 0 < this.allWrites_.length ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1
                    }, u.DefaultFilter_ = function(t) {
                        return t.visible
                    }, u.layerTree_ = function(t, e, n) {
                        for (var r = an.Empty, i = 0; i < t.length; ++i) {
                            var o = t[i];
                            if (e(o)) {
                                var s = o.path,
                                    a = void 0;
                                if (o.snap) n.contains(s) ? (a = Ct.relativePath(n, s), r = r.addWrite(a, o.snap)) : s.contains(n) && (a = Ct.relativePath(s, n), r = r.addWrite(Ct.Empty, o.snap.getChild(a)));
                                else {
                                    if (!o.children) throw p("WriteRecord should have .snap or .children");
                                    if (n.contains(s)) a = Ct.relativePath(n, s), r = r.addWrites(a, o.children);
                                    else if (s.contains(n))
                                        if ((a = Ct.relativePath(s, n)).isEmpty()) r = r.addWrites(Ct.Empty, o.children);
                                        else {
                                            var h = b(o.children, a.getFront());
                                            if (h) {
                                                var u = h.getChild(a.popFront());
                                                r = r.addWrite(Ct.Empty, u)
                                            }
                                        }
                                }
                            }
                        }
                        return r
                    }, u
                }(),
                un = function() {
                    function e(t, e) {
                        this.treePath_ = t, this.writeTree_ = e
                    }
                    return e.prototype.calcCompleteEventCache = function(t, e, n) {
                        return this.writeTree_.calcCompleteEventCache(this.treePath_, t, e, n)
                    }, e.prototype.calcCompleteEventChildren = function(t) {
                        return this.writeTree_.calcCompleteEventChildren(this.treePath_, t)
                    }, e.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n) {
                        return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, t, e, n)
                    }, e.prototype.shadowingWrite = function(t) {
                        return this.writeTree_.shadowingWrite(this.treePath_.child(t))
                    }, e.prototype.calcIndexedSlice = function(t, e, n, r, i) {
                        return this.writeTree_.calcIndexedSlice(this.treePath_, t, e, n, r, i)
                    }, e.prototype.calcCompleteChild = function(t, e) {
                        return this.writeTree_.calcCompleteChild(this.treePath_, t, e)
                    }, e.prototype.child = function(t) {
                        return new e(this.treePath_.child(t), this.writeTree_)
                    }, e
                }(),
                ln = function() {
                    function v(t) {
                        this.listenProvider_ = t, this.syncPointTree_ = Be.Empty, this.pendingWriteTree_ = new hn, this.tagToQueryMap_ = {}, this.queryToTagMap_ = {}
                    }
                    return v.prototype.applyUserOverwrite = function(t, e, n, r) {
                        return this.pendingWriteTree_.addOverwrite(t, e, n, r), r ? this.applyOperationToSyncPoints_(new Ke(Ve.User, t, e)) : []
                    }, v.prototype.applyUserMerge = function(t, e, n) {
                        this.pendingWriteTree_.addMerge(t, e, n);
                        var r = Be.fromObject(e);
                        return this.applyOperationToSyncPoints_(new Ye(Ve.User, t, r))
                    }, v.prototype.ackUserWrite = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = this.pendingWriteTree_.getWrite(t);
                        if (this.pendingWriteTree_.removeWrite(t)) {
                            var r = Be.Empty;
                            return null != n.snap ? r = r.set(Ct.Empty, !0) : S(n.children, function(t, e) {
                                r = r.set(new Ct(t), e)
                            }), this.applyOperationToSyncPoints_(new He(n.path, r, e))
                        }
                        return []
                    }, v.prototype.applyServerOverwrite = function(t, e) {
                        return this.applyOperationToSyncPoints_(new Ke(Ve.Server, t, e))
                    }, v.prototype.applyServerMerge = function(t, e) {
                        var n = Be.fromObject(e);
                        return this.applyOperationToSyncPoints_(new Ye(Ve.Server, t, n))
                    }, v.prototype.applyListenComplete = function(t) {
                        return this.applyOperationToSyncPoints_(new je(Ve.Server, t))
                    }, v.prototype.applyTaggedQueryOverwrite = function(t, e, n) {
                        var r = this.queryKeyForTag_(n);
                        if (null == r) return [];
                        var i = v.parseQueryKey_(r),
                            o = i.path,
                            s = i.queryId,
                            a = Ct.relativePath(o, t),
                            h = new Ke(Ve.forServerTaggedQuery(s), a, e);
                        return this.applyTaggedOperation_(o, h)
                    }, v.prototype.applyTaggedQueryMerge = function(t, e, n) {
                        var r = this.queryKeyForTag_(n);
                        if (r) {
                            var i = v.parseQueryKey_(r),
                                o = i.path,
                                s = i.queryId,
                                a = Ct.relativePath(o, t),
                                h = Be.fromObject(e),
                                u = new Ye(Ve.forServerTaggedQuery(s), a, h);
                            return this.applyTaggedOperation_(o, u)
                        }
                        return []
                    }, v.prototype.applyTaggedListenComplete = function(t, e) {
                        var n = this.queryKeyForTag_(e);
                        if (n) {
                            var r = v.parseQueryKey_(n),
                                i = r.path,
                                o = r.queryId,
                                s = Ct.relativePath(i, t),
                                a = new je(Ve.forServerTaggedQuery(o), s);
                            return this.applyTaggedOperation_(i, a)
                        }
                        return []
                    }, v.prototype.addEventRegistration = function(t, e) {
                        var r = t.path,
                            i = null,
                            o = !1;
                        this.syncPointTree_.foreachOnPath(r, function(t, e) {
                            var n = Ct.relativePath(t, r);
                            i = i || e.getCompleteServerCache(n), o = o || e.hasCompleteView()
                        });
                        var n, s = this.syncPointTree_.get(r);
                        (s ? (o = o || s.hasCompleteView(), i = i || s.getCompleteServerCache(Ct.Empty)) : (s = new sn, this.syncPointTree_ = this.syncPointTree_.set(r, s)), null != i) ? n = !0: (n = !1, i = Ee.EMPTY_NODE, this.syncPointTree_.subtree(r).foreachChild(function(t, e) {
                            var n = e.getCompleteServerCache(Ct.Empty);
                            n && (i = i.updateImmediateChild(t, n))
                        }));
                        var a = s.viewExistsForQuery(t);
                        if (!a && !t.getQueryParams().loadsAllData()) {
                            var h = v.makeQueryKey_(t);
                            C(!(h in this.queryToTagMap_), "View does not exist, but we have a tag");
                            var u = v.getNextQueryTag_();
                            this.queryToTagMap_[h] = u, this.tagToQueryMap_["_" + u] = h
                        }
                        var l = this.pendingWriteTree_.childWrites(r),
                            c = s.addEventRegistration(t, e, l, i, n);
                        if (!a && !o) {
                            var p = s.viewForQuery(t);
                            c = c.concat(this.setupListener_(t, p))
                        }
                        return c
                    }, v.prototype.removeEventRegistration = function(t, e, n) {
                        var r = this,
                            i = t.path,
                            o = this.syncPointTree_.get(i),
                            s = [];
                        if (o && ("default" === t.queryIdentifier() || o.viewExistsForQuery(t))) {
                            var a = o.removeEventRegistration(t, e, n);
                            o.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(i));
                            var h = a.removed;
                            s = a.events;
                            var u = -1 !== h.findIndex(function(t) {
                                    return t.getQueryParams().loadsAllData()
                                }),
                                l = this.syncPointTree_.findOnPath(i, function(t, e) {
                                    return e.hasCompleteView()
                                });
                            if (u && !l) {
                                var c = this.syncPointTree_.subtree(i);
                                if (!c.isEmpty())
                                    for (var p = this.collectDistinctViewsForSubTree_(c), d = 0; d < p.length; ++d) {
                                        var f = p[d],
                                            _ = f.getQuery(),
                                            y = this.createListenerForView_(f);
                                        this.listenProvider_.startListening(v.queryForListening_(_), this.tagForQuery_(_), y.hashFn, y.onComplete)
                                    }
                            }
                            if (!l && 0 < h.length && !n)
                                if (u) {
                                    this.listenProvider_.stopListening(v.queryForListening_(t), null)
                                } else h.forEach(function(t) {
                                    var e = r.queryToTagMap_[v.makeQueryKey_(t)];
                                    r.listenProvider_.stopListening(v.queryForListening_(t), e)
                                });
                            this.removeTags_(h)
                        }
                        return s
                    }, v.prototype.calcCompleteEventCache = function(i, t) {
                        var e = this.pendingWriteTree_,
                            n = this.syncPointTree_.findOnPath(i, function(t, e) {
                                var n = Ct.relativePath(t, i),
                                    r = e.getCompleteServerCache(n);
                                if (r) return r
                            });
                        return e.calcCompleteEventCache(i, n, t, !0)
                    }, v.prototype.collectDistinctViewsForSubTree_ = function(t) {
                        return t.fold(function(t, e, n) {
                            if (e && e.hasCompleteView()) return [e.getCompleteView()];
                            var r = [];
                            return e && (r = e.getQueryViews()), S(n, function(t, e) {
                                r = r.concat(e)
                            }), r
                        })
                    }, v.prototype.removeTags_ = function(t) {
                        for (var e = 0; e < t.length; ++e) {
                            var n = t[e];
                            if (!n.getQueryParams().loadsAllData()) {
                                var r = v.makeQueryKey_(n),
                                    i = this.queryToTagMap_[r];
                                delete this.queryToTagMap_[r], delete this.tagToQueryMap_["_" + i]
                            }
                        }
                    }, v.queryForListening_ = function(t) {
                        return t.getQueryParams().loadsAllData() && !t.getQueryParams().isDefault() ? t.getRef() : t
                    }, v.prototype.setupListener_ = function(t, e) {
                        var n = t.path,
                            r = this.tagForQuery_(t),
                            i = this.createListenerForView_(e),
                            o = this.listenProvider_.startListening(v.queryForListening_(t), r, i.hashFn, i.onComplete),
                            s = this.syncPointTree_.subtree(n);
                        if (r) C(!s.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
                        else
                            for (var a = s.fold(function(t, e, n) {
                                    if (!t.isEmpty() && e && e.hasCompleteView()) return [e.getCompleteView().getQuery()];
                                    var r = [];
                                    return e && (r = r.concat(e.getQueryViews().map(function(t) {
                                        return t.getQuery()
                                    }))), S(n, function(t, e) {
                                        r = r.concat(e)
                                    }), r
                                }), h = 0; h < a.length; ++h) {
                                var u = a[h];
                                this.listenProvider_.stopListening(v.queryForListening_(u), this.tagForQuery_(u))
                            }
                        return o
                    }, v.prototype.createListenerForView_ = function(t) {
                        var n = this,
                            r = t.getQuery(),
                            i = this.tagForQuery_(r);
                        return {
                            hashFn: function() {
                                return (t.getServerCache() || Ee.EMPTY_NODE).hash()
                            },
                            onComplete: function(t) {
                                if ("ok" === t) return i ? n.applyTaggedListenComplete(r.path, i) : n.applyListenComplete(r.path);
                                var e = function(t, e) {
                                    var n = "Unknown Error";
                                    "too_big" === t ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == t ? n = "Client doesn't have permission to access the desired data." : "unavailable" == t && (n = "The service is unavailable");
                                    var r = new Error(t + " at " + e.path.toString() + ": " + n);
                                    return r.code = t.toUpperCase(), r
                                }(t, r);
                                return n.removeEventRegistration(r, null, e)
                            }
                        }
                    }, v.makeQueryKey_ = function(t) {
                        return t.path.toString() + "$" + t.queryIdentifier()
                    }, v.parseQueryKey_ = function(t) {
                        var e = t.indexOf("$");
                        return C(-1 !== e && e < t.length - 1, "Bad queryKey."), {
                            queryId: t.substr(e + 1),
                            path: new Ct(t.substr(0, e))
                        }
                    }, v.prototype.queryKeyForTag_ = function(t) {
                        return this.tagToQueryMap_["_" + t]
                    }, v.prototype.tagForQuery_ = function(t) {
                        var e = v.makeQueryKey_(t);
                        return b(this.queryToTagMap_, e)
                    }, v.getNextQueryTag_ = function() {
                        return v.nextQueryTag_++
                    }, v.prototype.applyTaggedOperation_ = function(t, e) {
                        var n = this.syncPointTree_.get(t);
                        C(n, "Missing sync point for query tag that we're tracking");
                        var r = this.pendingWriteTree_.childWrites(t);
                        return n.applyOperation(e, r, null)
                    }, v.prototype.applyOperationToSyncPoints_ = function(t) {
                        return this.applyOperationHelper_(t, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(Ct.Empty))
                    }, v.prototype.applyOperationHelper_ = function(t, e, n, r) {
                        if (t.path.isEmpty()) return this.applyOperationDescendantsHelper_(t, e, n, r);
                        var i = e.get(Ct.Empty);
                        null == n && null != i && (n = i.getCompleteServerCache(Ct.Empty));
                        var o = [],
                            s = t.path.getFront(),
                            a = t.operationForChild(s),
                            h = e.children.get(s);
                        if (h && a) {
                            var u = n ? n.getImmediateChild(s) : null,
                                l = r.child(s);
                            o = o.concat(this.applyOperationHelper_(a, h, u, l))
                        }
                        return i && (o = o.concat(i.applyOperation(t, r, n))), o
                    }, v.prototype.applyOperationDescendantsHelper_ = function(o, t, s, a) {
                        var h = this,
                            e = t.get(Ct.Empty);
                        null == s && null != e && (s = e.getCompleteServerCache(Ct.Empty));
                        var u = [];
                        return t.children.inorderTraversal(function(t, e) {
                            var n = s ? s.getImmediateChild(t) : null,
                                r = a.child(t),
                                i = o.operationForChild(t);
                            i && (u = u.concat(h.applyOperationDescendantsHelper_(i, e, n, r)))
                        }), e && (u = u.concat(e.applyOperation(o, a, s))), u
                    }, v.nextQueryTag_ = 1, v
                }(),
                cn = function() {
                    function t() {
                        this.rootNode_ = Ee.EMPTY_NODE
                    }
                    return t.prototype.getNode = function(t) {
                        return this.rootNode_.getChild(t)
                    }, t.prototype.updateSnapshot = function(t, e) {
                        this.rootNode_ = this.rootNode_.updateChild(t, e)
                    }, t
                }(),
                pn = function() {
                    function t(t) {
                        this.app_ = t
                    }
                    return t.prototype.getToken = function(t) {
                        return this.app_.INTERNAL.getToken(t).then(null, function(t) {
                            return t && "auth/token-not-initialized" === t.code ? (et("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(t)
                        })
                    }, t.prototype.addTokenChangeListener = function(t) {
                        this.app_.INTERNAL.addAuthTokenListener(t)
                    }, t.prototype.removeTokenChangeListener = function(t) {
                        this.app_.INTERNAL.removeAuthTokenListener(t)
                    }, t.prototype.notifyForInvalidToken = function() {
                        var t = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
                        "credential" in this.app_.options ? t += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? t += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : t += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', ot(t)
                    }, t
                }(),
                dn = function() {
                    function t() {
                        this.counters_ = {}
                    }
                    return t.prototype.incrementCounter = function(t, e) {
                        void 0 === e && (e = 1), w(this.counters_, t) || (this.counters_[t] = 0), this.counters_[t] += e
                    }, t.prototype.get = function() {
                        return o(this.counters_)
                    }, t
                }(),
                fn = function() {
                    function t() {}
                    return t.getCollection = function(t) {
                        var e = t.toString();
                        return this.collections_[e] || (this.collections_[e] = new dn), this.collections_[e]
                    }, t.getOrCreateReporter = function(t, e) {
                        var n = t.toString();
                        return this.reporters_[n] || (this.reporters_[n] = e()), this.reporters_[n]
                    }, t.collections_ = {}, t.reporters_ = {}, t
                }(),
                _n = function() {
                    function t(t) {
                        this.collection_ = t, this.last_ = null
                    }
                    return t.prototype.get = function() {
                        var t = this.collection_.get(),
                            n = T(t);
                        return this.last_ && S(this.last_, function(t, e) {
                            n[t] = n[t] - e
                        }), this.last_ = t, n
                    }, t
                }(),
                yn = function() {
                    function t(t, e) {
                        this.server_ = e, this.statsToReport_ = {}, this.statsListener_ = new _n(t);
                        var n = 1e4 + 2e4 * Math.random();
                        mt(this.reportStats_.bind(this), Math.floor(n))
                    }
                    return t.prototype.includeStat = function(t) {
                        this.statsToReport_[t] = !0
                    }, t.prototype.reportStats_ = function() {
                        var n = this,
                            t = this.statsListener_.get(),
                            r = {},
                            i = !1;
                        S(t, function(t, e) {
                            0 < e && w(n.statsToReport_, t) && (r[t] = e, i = !0)
                        }), i && this.server_.reportStats(r), mt(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
                    }, t
                }(),
                vn = function() {
                    function t() {
                        this.eventLists_ = [], this.recursionDepth_ = 0
                    }
                    return t.prototype.queueEvents = function(t) {
                        for (var e = null, n = 0; n < t.length; n++) {
                            var r = t[n],
                                i = r.getPath();
                            null === e || i.equals(e.getPath()) || (this.eventLists_.push(e), e = null), null === e && (e = new gn(i)), e.add(r)
                        }
                        e && this.eventLists_.push(e)
                    }, t.prototype.raiseEventsAtPath = function(e, t) {
                        this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) {
                            return t.equals(e)
                        })
                    }, t.prototype.raiseEventsForChangedPath = function(e, t) {
                        this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) {
                            return t.contains(e) || e.contains(t)
                        })
                    }, t.prototype.raiseQueuedEventsMatchingPredicate_ = function(t) {
                        this.recursionDepth_++;
                        for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
                            var r = this.eventLists_[n];
                            if (r) t(r.getPath()) ? (this.eventLists_[n].raise(), this.eventLists_[n] = null) : e = !1
                        }
                        e && (this.eventLists_ = []), this.recursionDepth_--
                    }, t
                }(),
                gn = function() {
                    function t(t) {
                        this.path_ = t, this.events_ = []
                    }
                    return t.prototype.add = function(t) {
                        this.events_.push(t)
                    }, t.prototype.raise = function() {
                        for (var t = 0; t < this.events_.length; t++) {
                            var e = this.events_[t];
                            if (null !== e) {
                                this.events_[t] = null;
                                var n = e.getEventRunner();
                                J && et("event: " + e.toString()), gt(n)
                            }
                        }
                    }, t.prototype.getPath = function() {
                        return this.path_
                    }, t
                }(),
                mn = function() {
                    function t(t) {
                        this.allowedEvents_ = t, this.listeners_ = {}, C(Array.isArray(t) && 0 < t.length, "Requires a non-empty array")
                    }
                    return t.prototype.trigger = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        if (Array.isArray(this.listeners_[t]))
                            for (var r = this.listeners_[t].slice(), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, e)
                    }, t.prototype.on = function(t, e, n) {
                        this.validateEventType_(t), this.listeners_[t] = this.listeners_[t] || [], this.listeners_[t].push({
                            callback: e,
                            context: n
                        });
                        var r = this.getInitialEvent(t);
                        r && e.apply(n, r)
                    }, t.prototype.off = function(t, e, n) {
                        this.validateEventType_(t);
                        for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                            if (r[i].callback === e && (!n || n === r[i].context)) return void r.splice(i, 1)
                    }, t.prototype.validateEventType_ = function(e) {
                        C(this.allowedEvents_.find(function(t) {
                            return t === e
                        }), "Unknown event: " + e)
                    }, t
                }(),
                Cn = function(r) {
                    function t() {
                        var e, t, n = r.call(this, ["visible"]) || this;
                        return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), n.visible_ = !0, t && document.addEventListener(t, function() {
                            var t = !document[e];
                            t !== n.visible_ && (n.visible_ = t, n.trigger("visible", t))
                        }, !1), n
                    }
                    return s(t, r), t.getInstance = function() {
                        return new t
                    }, t.prototype.getInitialEvent = function(t) {
                        return C("visible" === t, "Unknown event type: " + t), [this.visible_]
                    }, t
                }(mn),
                En = function(e) {
                    function t() {
                        var t = e.call(this, ["online"]) || this;
                        return t.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || c() || (window.addEventListener("online", function() {
                            t.online_ || (t.online_ = !0, t.trigger("online", !0))
                        }, !1), window.addEventListener("offline", function() {
                            t.online_ && (t.online_ = !1, t.trigger("online", !1))
                        }, !1)), t
                    }
                    return s(t, e), t.getInstance = function() {
                        return new t
                    }, t.prototype.getInitialEvent = function(t) {
                        return C("online" === t, "Unknown event type: " + t), [this.online_]
                    }, t.prototype.currentlyOnline = function() {
                        return this.online_
                    }, t
                }(mn),
                wn = function() {
                    function t(t) {
                        this.onMessage_ = t, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
                    }
                    return t.prototype.closeAfter = function(t, e) {
                        this.closeAfterResponse = t, this.onClose = e, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
                    }, t.prototype.handleResponse = function(t, e) {
                        var r = this;
                        this.pendingResponses[t] = e;
                        for (var n = function() {
                                var e = i.pendingResponses[i.currentResponseNum];
                                delete i.pendingResponses[i.currentResponseNum];
                                for (var t = function(t) {
                                        e[t] && gt(function() {
                                            r.onMessage_(e[t])
                                        })
                                    }, n = 0; n < e.length; ++n) t(n);
                                if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
                                i.currentResponseNum++
                            }, i = this; this.pendingResponses[this.currentResponseNum];) {
                            if ("break" === n()) break
                        }
                    }, t
                }(),
                bn = function() {
                    function t(t, e, n, r) {
                        this.connId = t, this.repoInfo = e, this.transportSessionId = n, this.lastSessionId = r, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = nt(t), this.stats_ = fn.getCollection(e), this.urlFn = function(t) {
                            return e.connectionURL(St, t)
                        }
                    }
                    return t.prototype.open = function(t, e) {
                        var o = this;
                        this.curSegmentNum = 0, this.onDisconnect_ = e, this.myPacketOrderer = new wn(t), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function() {
                                o.log_("Timed out trying to connect."), o.onClosed_(), o.connectTimeoutTimer_ = null
                            }, Math.floor(3e4)),
                            function(t) {
                                if (d() || "complete" === document.readyState) t();
                                else {
                                    var e = !1,
                                        n = function() {
                                            document.body ? e || (e = !0, t()) : setTimeout(n, Math.floor(10))
                                        };
                                    document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                                        "complete" === document.readyState && n()
                                    }), window.attachEvent("onload", n))
                                }
                            }(function() {
                                if (!o.isClosed_) {
                                    o.scriptTagHolder = new Sn(function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                        var n = t[0],
                                            r = t[1],
                                            i = t[2];
                                        if (o.incrementIncomingBytes_(t), o.scriptTagHolder)
                                            if (o.connectTimeoutTimer_ && (clearTimeout(o.connectTimeoutTimer_), o.connectTimeoutTimer_ = null), o.everConnected_ = !0, "start" == n) o.id = r, o.password = i;
                                            else {
                                                if ("close" !== n) throw new Error("Unrecognized command received: " + n);
                                                r ? (o.scriptTagHolder.sendNewPolls = !1, o.myPacketOrderer.closeAfter(r, function() {
                                                    o.onClosed_()
                                                })) : o.onClosed_()
                                            }
                                    }, function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                        var n = t[0],
                                            r = t[1];
                                        o.incrementIncomingBytes_(t), o.myPacketOrderer.handleResponse(n, r)
                                    }, function() {
                                        o.onClosed_()
                                    }, o.urlFn);
                                    var t = {
                                        start: "t"
                                    };
                                    t.ser = Math.floor(1e8 * Math.random()), o.scriptTagHolder.uniqueCallbackIdentifier && (t.cb = o.scriptTagHolder.uniqueCallbackIdentifier), t.v = "5", o.transportSessionId && (t.s = o.transportSessionId), o.lastSessionId && (t.ls = o.lastSessionId), !d() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(wt) && (t.r = "f");
                                    var e = o.urlFn(t);
                                    o.log_("Connecting via long-poll to " + e), o.scriptTagHolder.addTag(e, function() {})
                                }
                            })
                    }, t.prototype.start = function() {
                        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                    }, t.forceAllow = function() {
                        t.forceAllow_ = !0
                    }, t.forceDisallow = function() {
                        t.forceDisallow_ = !0
                    }, t.isAvailable = function() {
                        return t.forceAllow_ || !t.forceDisallow_ && "undefined" != typeof document && null != document.createElement && !("object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" == typeof Windows && "object" == typeof Windows.UI) && !d()
                    }, t.prototype.markConnectionHealthy = function() {}, t.prototype.shutdown_ = function() {
                        this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                    }, t.prototype.onClosed_ = function() {
                        this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                    }, t.prototype.close = function() {
                        this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                    }, t.prototype.send = function(t) {
                        var e = m(t);
                        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                        for (var n, r = (n = a(e), h.encodeByteArray(n, !0)), i = dt(r, 1840), o = 0; o < i.length; o++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]), this.curSegmentNum++
                    }, t.prototype.addDisconnectPingFrame = function(t, e) {
                        if (!d()) {
                            this.myDisconnFrame = document.createElement("iframe");
                            var n = {
                                dframe: "t"
                            };
                            n.id = t, n.pw = e, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                        }
                    }, t.prototype.incrementIncomingBytes_ = function(t) {
                        var e = m(t).length;
                        this.bytesReceived += e, this.stats_.incrementCounter("bytes_received", e)
                    }, t
                }(),
                Sn = function() {
                    function s(t, e, n, r) {
                        if (this.onDisconnect = n, this.urlFn = r, this.outstandingRequests = new Le, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, d()) this.commandCB = t, this.onMessageCB = e;
                        else {
                            this.uniqueCallbackIdentifier = G(), window["pLPCommand" + this.uniqueCallbackIdentifier] = t, window["pRTLPCB" + this.uniqueCallbackIdentifier] = e, this.myIFrame = s.createIFrame_();
                            var i = "";
                            if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) i = '<script>document.domain="' + document.domain + '";<\/script>';
                            var o = "<html><body>" + i + "</body></html>";
                            try {
                                this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close()
                            } catch (t) {
                                et("frame writing exception"), t.stack && et(t.stack), et(t)
                            }
                        }
                    }
                    return s.createIFrame_ = function() {
                        var e = document.createElement("iframe");
                        if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                        document.body.appendChild(e);
                        try {
                            e.contentWindow.document || et("No IE domain setting required")
                        } catch (t) {
                            var n = document.domain;
                            e.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())"
                        }
                        return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
                    }, s.prototype.close = function() {
                        var t = this;
                        if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function() {
                                null !== t.myIFrame && (document.body.removeChild(t.myIFrame), t.myIFrame = null)
                            }, Math.floor(0))), d() && this.myID) {
                            var e = {
                                disconn: "t"
                            };
                            e.id = this.myID, e.pw = this.myPW;
                            var n = this.urlFn(e);
                            s.nodeRestRequest(n)
                        }
                        var r = this.onDisconnect;
                        r && (this.onDisconnect = null, r())
                    }, s.prototype.startLongPoll = function(t, e) {
                        for (this.myID = t, this.myPW = e, this.alive = !0; this.newRequest_(););
                    }, s.prototype.newRequest_ = function() {
                        if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (0 < this.pendingSegs.length ? 2 : 1)) {
                            this.currentSerial++;
                            var t = {};
                            t.id = this.myID, t.pw = this.myPW, t.ser = this.currentSerial;
                            for (var e = this.urlFn(t), n = "", r = 0; 0 < this.pendingSegs.length;) {
                                if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
                                var i = this.pendingSegs.shift();
                                n = n + "&seg" + r + "=" + i.seg + "&ts" + r + "=" + i.ts + "&d" + r + "=" + i.d, r++
                            }
                            return e += n, this.addLongPollTag_(e, this.currentSerial), !0
                        }
                        return !1
                    }, s.prototype.enqueueSegment = function(t, e, n) {
                        this.pendingSegs.push({
                            seg: t,
                            ts: e,
                            d: n
                        }), this.alive && this.newRequest_()
                    }, s.prototype.addLongPollTag_ = function(t, e) {
                        var n = this;
                        this.outstandingRequests.add(e, 1);
                        var r = function() {
                                n.outstandingRequests.remove(e), n.newRequest_()
                            },
                            i = setTimeout(r, Math.floor(25e3));
                        this.addTag(t, function() {
                            clearTimeout(i), r()
                        })
                    }, s.prototype.addTag = function(t, n) {
                        var r = this;
                        d() ? this.doNodeLongPoll(t, n) : setTimeout(function() {
                            try {
                                if (!r.sendNewPolls) return;
                                var e = r.myIFrame.doc.createElement("script");
                                e.type = "text/javascript", e.async = !0, e.src = t, e.onload = e.onreadystatechange = function() {
                                    var t = e.readyState;
                                    t && "loaded" !== t && "complete" !== t || (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), n())
                                }, e.onerror = function() {
                                    et("Long-poll script failed to load: " + t), r.sendNewPolls = !1, r.close()
                                }, r.myIFrame.doc.body.appendChild(e)
                            } catch (t) {}
                        }, Math.floor(1))
                    }, s
                }(),
                Tn = null;
            "undefined" != typeof MozWebSocket ? Tn = MozWebSocket : "undefined" != typeof WebSocket && (Tn = WebSocket);
            var In = function() {
                    function i(t, e, n, r) {
                        this.connId = t, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = nt(this.connId), this.stats_ = fn.getCollection(e), this.connURL = i.connectionURL_(e, n, r)
                    }
                    return i.connectionURL_ = function(t, e, n) {
                        var r = {
                            v: "5"
                        };
                        return !d() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(wt) && (r.r = "f"), e && (r.s = e), n && (r.ls = n), t.connectionURL(bt, r)
                    }, i.prototype.open = function(t, e) {
                        var n = this;
                        this.onDisconnect = e, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, K.set("previous_websocket_failure", !0);
                        try {
                            if (d()) {
                                var r = {
                                        headers: {
                                            "User-Agent": "Firebase/5/" + tr.SDK_VERSION + "/" + process.platform + "/Node"
                                        }
                                    },
                                    i = process.env,
                                    o = 0 == this.connURL.indexOf("wss://") ? i.HTTPS_PROXY || i.https_proxy : i.HTTP_PROXY || i.http_proxy;
                                o && (r.proxy = {
                                    origin: o
                                }), this.mySock = new Tn(this.connURL, [], r)
                            } else this.mySock = new Tn(this.connURL)
                        } catch (t) {
                            this.log_("Error instantiating WebSocket.");
                            var s = t.message || t.data;
                            return s && this.log_(s), void this.onClosed_()
                        }
                        this.mySock.onopen = function() {
                            n.log_("Websocket connected."), n.everConnected_ = !0
                        }, this.mySock.onclose = function() {
                            n.log_("Websocket connection was disconnected."), n.mySock = null, n.onClosed_()
                        }, this.mySock.onmessage = function(t) {
                            n.handleIncomingFrame(t)
                        }, this.mySock.onerror = function(t) {
                            n.log_("WebSocket error.  Closing connection.");
                            var e = t.message || t.data;
                            e && n.log_(e), n.onClosed_()
                        }
                    }, i.prototype.start = function() {}, i.forceDisallow = function() {
                        i.forceDisallow_ = !0
                    }, i.isAvailable = function() {
                        var t = !1;
                        if ("undefined" != typeof navigator && navigator.userAgent) {
                            var e = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
                            e && 1 < e.length && parseFloat(e[1]) < 4.4 && (t = !0)
                        }
                        return !t && null !== Tn && !i.forceDisallow_
                    }, i.previouslyFailed = function() {
                        return K.isInMemoryStorage || !0 === K.get("previous_websocket_failure")
                    }, i.prototype.markConnectionHealthy = function() {
                        K.remove("previous_websocket_failure")
                    }, i.prototype.appendFrame_ = function(t) {
                        if (this.frames.push(t), this.frames.length == this.totalFrames) {
                            var e = this.frames.join("");
                            this.frames = null;
                            var n = g(e);
                            this.onMessage(n)
                        }
                    }, i.prototype.handleNewFrameCount_ = function(t) {
                        this.totalFrames = t, this.frames = []
                    }, i.prototype.extractFrameCount_ = function(t) {
                        if (C(null === this.frames, "We already have a frame buffer"), t.length <= 6) {
                            var e = Number(t);
                            if (!isNaN(e)) return this.handleNewFrameCount_(e), null
                        }
                        return this.handleNewFrameCount_(1), t
                    }, i.prototype.handleIncomingFrame = function(t) {
                        if (null !== this.mySock) {
                            var e = t.data;
                            if (this.bytesReceived += e.length, this.stats_.incrementCounter("bytes_received", e.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(e);
                            else {
                                var n = this.extractFrameCount_(e);
                                null !== n && this.appendFrame_(n)
                            }
                        }
                    }, i.prototype.send = function(t) {
                        this.resetKeepAlive();
                        var e = m(t);
                        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                        var n = dt(e, 16384);
                        1 < n.length && this.sendString_(String(n.length));
                        for (var r = 0; r < n.length; r++) this.sendString_(n[r])
                    }, i.prototype.shutdown_ = function() {
                        this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
                    }, i.prototype.onClosed_ = function() {
                        this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
                    }, i.prototype.close = function() {
                        this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
                    }, i.prototype.resetKeepAlive = function() {
                        var t = this;
                        clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function() {
                            t.mySock && t.sendString_("0"), t.resetKeepAlive()
                        }, Math.floor(45e3))
                    }, i.prototype.sendString_ = function(t) {
                        try {
                            this.mySock.send(t)
                        } catch (t) {
                            this.log_("Exception thrown from WebSocket.send():", t.message || t.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                        }
                    }, i.responsesRequiredToBeHealthy = 2, i.healthyTimeout = 3e4, i
                }(),
                Nn = function() {
                    function i(t) {
                        this.initTransports_(t)
                    }
                    return Object.defineProperty(i, "ALL_TRANSPORTS", {
                        get: function() {
                            return [bn, In]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), i.prototype.initTransports_ = function(t) {
                        var e = In && In.isAvailable(),
                            n = e && !In.previouslyFailed();
                        if (t.webSocketOnly && (e || ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), n = !0), n) this.transports_ = [In];
                        else {
                            var r = this.transports_ = [];
                            ft(i.ALL_TRANSPORTS, function(t, e) {
                                e && e.isAvailable() && r.push(e)
                            })
                        }
                    }, i.prototype.initialTransport = function() {
                        if (0 < this.transports_.length) return this.transports_[0];
                        throw new Error("No transports available")
                    }, i.prototype.upgradeTransport = function() {
                        return 1 < this.transports_.length ? this.transports_[1] : null
                    }, i
                }(),
                Rn = function() {
                    function t(t, e, n, r, i, o, s) {
                        this.id = t, this.repoInfo_ = e, this.onMessage_ = n, this.onReady_ = r, this.onDisconnect_ = i, this.onKill_ = o, this.lastSessionId = s, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = nt("c:" + this.id + ":"), this.transportManager_ = new Nn(e), this.log_("Connection created"), this.start_()
                    }
                    return t.prototype.start_ = function() {
                        var t = this,
                            e = this.transportManager_.initialTransport();
                        this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, void 0, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                        var n = this.connReceiver_(this.conn_),
                            r = this.disconnReceiver_(this.conn_);
                        this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function() {
                            t.conn_ && t.conn_.open(n, r)
                        }, Math.floor(0));
                        var i = e.healthyTimeout || 0;
                        0 < i && (this.healthyTimeout_ = mt(function() {
                            t.healthyTimeout_ = null, t.isHealthy_ || (t.conn_ && 102400 < t.conn_.bytesReceived ? (t.log_("Connection exceeded healthy timeout but has received " + t.conn_.bytesReceived + " bytes.  Marking connection healthy."), t.isHealthy_ = !0, t.conn_.markConnectionHealthy()) : t.conn_ && 10240 < t.conn_.bytesSent ? t.log_("Connection exceeded healthy timeout but has sent " + t.conn_.bytesSent + " bytes.  Leaving connection alive.") : (t.log_("Closing unhealthy connection after timeout."), t.close()))
                        }, Math.floor(i)))
                    }, t.prototype.nextTransportId_ = function() {
                        return "c:" + this.id + ":" + this.connectionCount++
                    }, t.prototype.disconnReceiver_ = function(e) {
                        var n = this;
                        return function(t) {
                            e === n.conn_ ? n.onConnectionLost_(t) : e === n.secondaryConn_ ? (n.log_("Secondary connection lost."), n.onSecondaryConnectionLost_()) : n.log_("closing an old connection")
                        }
                    }, t.prototype.connReceiver_ = function(e) {
                        var n = this;
                        return function(t) {
                            2 != n.state_ && (e === n.rx_ ? n.onPrimaryMessageReceived_(t) : e === n.secondaryConn_ ? n.onSecondaryMessageReceived_(t) : n.log_("message on old connection"))
                        }
                    }, t.prototype.sendRequest = function(t) {
                        var e = {
                            t: "d",
                            d: t
                        };
                        this.sendData_(e)
                    }, t.prototype.tryCleanupConnection = function() {
                        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
                    }, t.prototype.onSecondaryControl_ = function(t) {
                        if ("t" in t) {
                            var e = t.t;
                            "a" === e ? this.upgradeIfSecondaryHealthy_() : "r" === e ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === e && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
                        }
                    }, t.prototype.onSecondaryMessageReceived_ = function(t) {
                        var e = ct("t", t),
                            n = ct("d", t);
                        if ("c" == e) this.onSecondaryControl_(n);
                        else {
                            if ("d" != e) throw new Error("Unknown protocol layer: " + e);
                            this.pendingDataMessages.push(n)
                        }
                    }, t.prototype.upgradeIfSecondaryHealthy_ = function() {
                        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: "p",
                                d: {}
                            }
                        }))
                    }, t.prototype.proceedWithUpgrade_ = function() {
                        this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: "a",
                                d: {}
                            }
                        }), this.log_("Ending transmission on primary"), this.conn_.send({
                            t: "c",
                            d: {
                                t: "n",
                                d: {}
                            }
                        }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
                    }, t.prototype.onPrimaryMessageReceived_ = function(t) {
                        var e = ct("t", t),
                            n = ct("d", t);
                        "c" == e ? this.onControl_(n) : "d" == e && this.onDataMessage_(n)
                    }, t.prototype.onDataMessage_ = function(t) {
                        this.onPrimaryResponse_(), this.onMessage_(t)
                    }, t.prototype.onPrimaryResponse_ = function() {
                        this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
                    }, t.prototype.onControl_ = function(t) {
                        var e = ct("t", t);
                        if ("d" in t) {
                            var n = t.d;
                            if ("h" === e) this.onHandshake_(n);
                            else if ("n" === e) {
                                this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                                for (var r = 0; r < this.pendingDataMessages.length; ++r) this.onDataMessage_(this.pendingDataMessages[r]);
                                this.pendingDataMessages = [], this.tryCleanupConnection()
                            } else "s" === e ? this.onConnectionShutdown_(n) : "r" === e ? this.onReset_(n) : "e" === e ? rt("Server Error: " + n) : "o" === e ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : rt("Unknown control packet command: " + e)
                        }
                    }, t.prototype.onHandshake_ = function(t) {
                        var e = t.ts,
                            n = t.v,
                            r = t.h;
                        this.sessionId = t.s, this.repoInfo_.updateHost(r), 0 == this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, e), "5" !== n && ot("Protocol version mismatch detected"), this.tryStartUpgrade_())
                    }, t.prototype.tryStartUpgrade_ = function() {
                        var t = this.transportManager_.upgradeTransport();
                        t && this.startUpgrade_(t)
                    }, t.prototype.startUpgrade_ = function(t) {
                        var e = this;
                        this.secondaryConn_ = new t(this.nextTransportId_(), this.repoInfo_, this.sessionId), this.secondaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
                        var n = this.connReceiver_(this.secondaryConn_),
                            r = this.disconnReceiver_(this.secondaryConn_);
                        this.secondaryConn_.open(n, r), mt(function() {
                            e.secondaryConn_ && (e.log_("Timed out trying to upgrade."), e.secondaryConn_.close())
                        }, Math.floor(6e4))
                    }, t.prototype.onReset_ = function(t) {
                        this.log_("Reset packet received.  New host: " + t), this.repoInfo_.updateHost(t), 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
                    }, t.prototype.onConnectionEstablished_ = function(t, e) {
                        var n = this;
                        this.log_("Realtime connection established."), this.conn_ = t, this.state_ = 1, this.onReady_ && (this.onReady_(e, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : mt(function() {
                            n.sendPingOnPrimaryIfNecessary_()
                        }, Math.floor(5e3))
                    }, t.prototype.sendPingOnPrimaryIfNecessary_ = function() {
                        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                            t: "c",
                            d: {
                                t: "p",
                                d: {}
                            }
                        }))
                    }, t.prototype.onSecondaryConnectionLost_ = function() {
                        var t = this.secondaryConn_;
                        this.secondaryConn_ = null, this.tx_ !== t && this.rx_ !== t || this.close()
                    }, t.prototype.onConnectionLost_ = function(t) {
                        this.conn_ = null, t || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (K.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
                    }, t.prototype.onConnectionShutdown_ = function(t) {
                        this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(t), this.onKill_ = null), this.onDisconnect_ = null, this.close()
                    }, t.prototype.sendData_ = function(t) {
                        if (1 !== this.state_) throw "Connection is not connected";
                        this.tx_.send(t)
                    }, t.prototype.close = function() {
                        2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
                    }, t.prototype.closeConnections_ = function() {
                        this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
                    }, t
                }(),
                Pn = function() {
                    function t() {}
                    return t.prototype.put = function(t, e, n, r) {}, t.prototype.merge = function(t, e, n, r) {}, t.prototype.refreshAuthToken = function(t) {}, t.prototype.onDisconnectPut = function(t, e, n) {}, t.prototype.onDisconnectMerge = function(t, e, n) {}, t.prototype.onDisconnectCancel = function(t, e) {}, t.prototype.reportStats = function(t) {}, t
                }(),
                Dn = function(a) {
                    function l(t, e, n, r, i, o) {
                        var s = a.call(this) || this;
                        if (s.repoInfo_ = t, s.onDataUpdate_ = e, s.onConnectStatus_ = n, s.onServerInfoUpdate_ = r, s.authTokenProvider_ = i, s.authOverride_ = o, s.id = l.nextPersistentConnectionId_++, s.log_ = nt("p:" + s.id + ":"), s.interruptReasons_ = {}, s.listens_ = {}, s.outstandingPuts_ = [], s.outstandingPutCount_ = 0, s.onDisconnectRequestQueue_ = [], s.connected_ = !1, s.reconnectDelay_ = 1e3, s.maxReconnectDelay_ = 3e5, s.securityDebugCallback_ = null, s.lastSessionId = null, s.establishConnectionTimer_ = null, s.visible_ = !1, s.requestCBHash_ = {}, s.requestNumber_ = 0, s.realtime_ = null, s.authToken_ = null, s.forceTokenRefresh_ = !1, s.invalidAuthTokenCount_ = 0, s.firstConnection_ = !0, s.lastConnectionAttemptTime_ = null, s.lastConnectionEstablishedTime_ = null, o && !d()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                        return s.scheduleConnect_(0), Cn.getInstance().on("visible", s.onVisible_, s), -1 === t.host.indexOf("fblocal") && En.getInstance().on("online", s.onOnline_, s), s
                    }
                    return s(l, a), l.prototype.sendRequest = function(t, e, n) {
                        var r = ++this.requestNumber_,
                            i = {
                                r: r,
                                a: t,
                                b: e
                            };
                        this.log_(m(i)), C(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n)
                    }, l.prototype.listen = function(t, e, n, r) {
                        var i = t.queryIdentifier(),
                            o = t.path.toString();
                        this.log_("Listen called for " + o + " " + i), this.listens_[o] = this.listens_[o] || {}, C(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), C(!this.listens_[o][i], "listen() called twice for same path/queryId.");
                        var s = {
                            onComplete: r,
                            hashFn: e,
                            query: t,
                            tag: n
                        };
                        this.listens_[o][i] = s, this.connected_ && this.sendListen_(s)
                    }, l.prototype.sendListen_ = function(r) {
                        var i = this,
                            o = r.query,
                            s = o.path.toString(),
                            a = o.queryIdentifier();
                        this.log_("Listen on " + s + " for " + a);
                        var t = {
                            p: s
                        };
                        r.tag && (t.q = o.queryObject(), t.t = r.tag), t.h = r.hashFn(), this.sendRequest("q", t, function(t) {
                            var e = t.d,
                                n = t.s;
                            l.warnOnListenWarnings_(e, o), (i.listens_[s] && i.listens_[s][a]) === r && (i.log_("listen response", t), "ok" !== n && i.removeListen_(s, a), r.onComplete && r.onComplete(n, e))
                        })
                    }, l.warnOnListenWarnings_ = function(t, e) {
                        if (t && "object" == typeof t && w(t, "w")) {
                            var n = b(t, "w");
                            if (Array.isArray(n) && ~n.indexOf("no_index")) {
                                var r = '".indexOn": "' + e.getQueryParams().getIndex().toString() + '"',
                                    i = e.path.toString();
                                ot("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.")
                            }
                        }
                    }, l.prototype.refreshAuthToken = function(t) {
                        this.authToken_ = t, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function() {}), this.reduceReconnectDelayIfAdminCredential_(t)
                    }, l.prototype.reduceReconnectDelayIfAdminCredential_ = function(t) {
                        var e;
                        (t && 40 === t.length || "object" == typeof(e = E(t).claims) && !0 === e.admin) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
                    }, l.prototype.tryAuth = function() {
                        var t, r = this;
                        if (this.connected_ && this.authToken_) {
                            var i = this.authToken_,
                                e = (t = E(i).claims) && "object" == typeof t && t.hasOwnProperty("iat") ? "auth" : "gauth",
                                n = {
                                    cred: i
                                };
                            null === this.authOverride_ ? n.noauth = !0 : "object" == typeof this.authOverride_ && (n.authvar = this.authOverride_), this.sendRequest(e, n, function(t) {
                                var e = t.s,
                                    n = t.d || "error";
                                r.authToken_ === i && ("ok" === e ? r.invalidAuthTokenCount_ = 0 : r.onAuthRevoked_(e, n))
                            })
                        }
                    }, l.prototype.unlisten = function(t, e) {
                        var n = t.path.toString(),
                            r = t.queryIdentifier();
                        this.log_("Unlisten called for " + n + " " + r), C(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, t.queryObject(), e)
                    }, l.prototype.sendUnlisten_ = function(t, e, n, r) {
                        this.log_("Unlisten on " + t + " for " + e);
                        var i = {
                            p: t
                        };
                        r && (i.q = n, i.t = r), this.sendRequest("n", i)
                    }, l.prototype.onDisconnectPut = function(t, e, n) {
                        this.connected_ ? this.sendOnDisconnect_("o", t, e, n) : this.onDisconnectRequestQueue_.push({
                            pathString: t,
                            action: "o",
                            data: e,
                            onComplete: n
                        })
                    }, l.prototype.onDisconnectMerge = function(t, e, n) {
                        this.connected_ ? this.sendOnDisconnect_("om", t, e, n) : this.onDisconnectRequestQueue_.push({
                            pathString: t,
                            action: "om",
                            data: e,
                            onComplete: n
                        })
                    }, l.prototype.onDisconnectCancel = function(t, e) {
                        this.connected_ ? this.sendOnDisconnect_("oc", t, null, e) : this.onDisconnectRequestQueue_.push({
                            pathString: t,
                            action: "oc",
                            data: null,
                            onComplete: e
                        })
                    }, l.prototype.sendOnDisconnect_ = function(t, e, n, r) {
                        var i = {
                            p: e,
                            d: n
                        };
                        this.log_("onDisconnect " + t, i), this.sendRequest(t, i, function(t) {
                            r && setTimeout(function() {
                                r(t.s, t.d)
                            }, Math.floor(0))
                        })
                    }, l.prototype.put = function(t, e, n, r) {
                        this.putInternal("p", t, e, n, r)
                    }, l.prototype.merge = function(t, e, n, r) {
                        this.putInternal("m", t, e, n, r)
                    }, l.prototype.putInternal = function(t, e, n, r, i) {
                        var o = {
                            p: e,
                            d: n
                        };
                        void 0 !== i && (o.h = i), this.outstandingPuts_.push({
                            action: t,
                            request: o,
                            onComplete: r
                        }), this.outstandingPutCount_++;
                        var s = this.outstandingPuts_.length - 1;
                        this.connected_ ? this.sendPut_(s) : this.log_("Buffering put: " + e)
                    }, l.prototype.sendPut_ = function(e) {
                        var n = this,
                            r = this.outstandingPuts_[e].action,
                            t = this.outstandingPuts_[e].request,
                            i = this.outstandingPuts_[e].onComplete;
                        this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(r, t, function(t) {
                            n.log_(r + " response", t), delete n.outstandingPuts_[e], n.outstandingPutCount_--, 0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []), i && i(t.s, t.d)
                        })
                    }, l.prototype.reportStats = function(t) {
                        var n = this;
                        if (this.connected_) {
                            var e = {
                                c: t
                            };
                            this.log_("reportStats", e), this.sendRequest("s", e, function(t) {
                                if ("ok" !== t.s) {
                                    var e = t.d;
                                    n.log_("reportStats", "Error sending stats: " + e)
                                }
                            })
                        }
                    }, l.prototype.onDataMessage_ = function(t) {
                        if ("r" in t) {
                            this.log_("from server: " + m(t));
                            var e = t.r,
                                n = this.requestCBHash_[e];
                            n && (delete this.requestCBHash_[e], n(t.b))
                        } else {
                            if ("error" in t) throw "A server-side error has occurred: " + t.error;
                            "a" in t && this.onDataPush_(t.a, t.b)
                        }
                    }, l.prototype.onDataPush_ = function(t, e) {
                        this.log_("handleServerMessage", t, e), "d" === t ? this.onDataUpdate_(e.p, e.d, !1, e.t) : "m" === t ? this.onDataUpdate_(e.p, e.d, !0, e.t) : "c" === t ? this.onListenRevoked_(e.p, e.q) : "ac" === t ? this.onAuthRevoked_(e.s, e.d) : "sd" === t ? this.onSecurityDebugPacket_(e) : rt("Unrecognized action received from server: " + m(t) + "\nAre you using the latest client?")
                    }, l.prototype.onReady_ = function(t, e) {
                        this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(t), this.lastSessionId = e, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                    }, l.prototype.scheduleConnect_ = function(t) {
                        var e = this;
                        C(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function() {
                            e.establishConnectionTimer_ = null, e.establishConnection_()
                        }, Math.floor(t))
                    }, l.prototype.onVisible_ = function(t) {
                        t && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = t
                    }, l.prototype.onOnline_ = function(t) {
                        t ? (this.log_("Browser went online."), this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                    }, l.prototype.onRealtimeDisconnect_ = function() {
                        if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                            if (this.visible_) {
                                if (this.lastConnectionEstablishedTime_) {
                                    3e4 < (new Date).getTime() - this.lastConnectionEstablishedTime_ && (this.reconnectDelay_ = 1e3), this.lastConnectionEstablishedTime_ = null
                                }
                            } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
                            var t = (new Date).getTime() - this.lastConnectionAttemptTime_,
                                e = Math.max(0, this.reconnectDelay_ - t);
                            e = Math.random() * e, this.log_("Trying to reconnect in " + e + "ms"), this.scheduleConnect_(e), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
                        }
                        this.onConnectStatus_(!1)
                    }, l.prototype.establishConnection_ = function() {
                        if (this.shouldReconnect_()) {
                            this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
                            var e = this.onDataMessage_.bind(this),
                                n = this.onReady_.bind(this),
                                r = this.onRealtimeDisconnect_.bind(this),
                                i = this.id + ":" + l.nextConnectionId_++,
                                o = this,
                                s = this.lastSessionId,
                                a = !1,
                                h = null,
                                u = function() {
                                    h ? h.close() : (a = !0, r())
                                };
                            this.realtime_ = {
                                close: u,
                                sendRequest: function(t) {
                                    C(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(t)
                                }
                            };
                            var t = this.forceTokenRefresh_;
                            this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(t).then(function(t) {
                                a ? et("getToken() completed but was canceled") : (et("getToken() completed. Creating connection."), o.authToken_ = t && t.accessToken, h = new Rn(i, o.repoInfo_, e, n, r, function(t) {
                                    ot(t + " (" + o.repoInfo_.toString() + ")"), o.interrupt("server_kill")
                                }, s))
                            }).then(null, function(t) {
                                o.log_("Failed to get token: " + t), a || u()
                            })
                        }
                    }, l.prototype.interrupt = function(t) {
                        et("Interrupting connection for reason: " + t), this.interruptReasons_[t] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                    }, l.prototype.resume = function(t) {
                        et("Resuming connection for reason: " + t), delete this.interruptReasons_[t], I(this.interruptReasons_) && (this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0))
                    }, l.prototype.handleTimestamp_ = function(t) {
                        var e = t - (new Date).getTime();
                        this.onServerInfoUpdate_({
                            serverTimeOffset: e
                        })
                    }, l.prototype.cancelSentTransactions_ = function() {
                        for (var t = 0; t < this.outstandingPuts_.length; t++) {
                            var e = this.outstandingPuts_[t];
                            e && "h" in e.request && e.queued && (e.onComplete && e.onComplete("disconnect"), delete this.outstandingPuts_[t], this.outstandingPutCount_--)
                        }
                        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                    }, l.prototype.onListenRevoked_ = function(t, e) {
                        var n;
                        n = e ? e.map(function(t) {
                            return pt(t)
                        }).join("$") : "default";
                        var r = this.removeListen_(t, n);
                        r && r.onComplete && r.onComplete("permission_denied")
                    }, l.prototype.removeListen_ = function(t, e) {
                        var n, r = new Ct(t).toString();
                        return void 0 !== this.listens_[r] ? (n = this.listens_[r][e], delete this.listens_[r][e], 0 === N(this.listens_[r]) && delete this.listens_[r]) : n = void 0, n
                    }, l.prototype.onAuthRevoked_ = function(t, e) {
                        et("Auth token revoked: " + t + "/" + e), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== t && "permission_denied" !== t || (this.invalidAuthTokenCount_++, 3 <= this.invalidAuthTokenCount_ && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
                    }, l.prototype.onSecurityDebugPacket_ = function(t) {
                        this.securityDebugCallback_ ? this.securityDebugCallback_(t) : "msg" in t && console.log("FIREBASE: " + t.msg.replace("\n", "\nFIREBASE: "))
                    }, l.prototype.restoreState_ = function() {
                        var n = this;
                        this.tryAuth(), S(this.listens_, function(t, e) {
                            S(e, function(t, e) {
                                n.sendListen_(e)
                            })
                        });
                        for (var t = 0; t < this.outstandingPuts_.length; t++) this.outstandingPuts_[t] && this.sendPut_(t);
                        for (; this.onDisconnectRequestQueue_.length;) {
                            var e = this.onDisconnectRequestQueue_.shift();
                            this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
                        }
                    }, l.prototype.sendConnectStats_ = function() {
                        var t = {};
                        t["sdk.js." + tr.SDK_VERSION.replace(/\./g, "-")] = 1, c() ? t["framework.cordova"] = 1 : "object" == typeof navigator && "ReactNative" === navigator.product && (t["framework.reactnative"] = 1), this.reportStats(t)
                    }, l.prototype.shouldReconnect_ = function() {
                        var t = En.getInstance().currentlyOnline();
                        return I(this.interruptReasons_) && t
                    }, l.nextPersistentConnectionId_ = 0, l.nextConnectionId_ = 0, l
                }(Pn),
                On = function(i) {
                    function u(t, e, n) {
                        var r = i.call(this) || this;
                        return r.repoInfo_ = t, r.onDataUpdate_ = e, r.authTokenProvider_ = n, r.log_ = nt("p:rest:"), r.listens_ = {}, r
                    }
                    return s(u, i), u.prototype.reportStats = function(t) {
                        throw new Error("Method not implemented.")
                    }, u.getListenId_ = function(t, e) {
                        return void 0 !== e ? "tag$" + e : (C(t.getQueryParams().isDefault(), "should have a tag if it's not a default query."), t.path.toString())
                    }, u.prototype.listen = function(t, e, r, i) {
                        var o = this,
                            s = t.path.toString();
                        this.log_("Listen called for " + s + " " + t.queryIdentifier());
                        var a = u.getListenId_(t, r),
                            h = {};
                        this.listens_[a] = h;
                        var n = t.getQueryParams().toRestQueryStringParameters();
                        this.restRequest_(s + ".json", n, function(t, e) {
                            var n = e;
                            (404 === t && (t = n = null), null === t && o.onDataUpdate_(s, n, !1, r), b(o.listens_, a) === h) && i(t ? 401 == t ? "permission_denied" : "rest_error:" + t : "ok", null)
                        })
                    }, u.prototype.unlisten = function(t, e) {
                        var n = u.getListenId_(t, e);
                        delete this.listens_[n]
                    }, u.prototype.refreshAuthToken = function(t) {}, u.prototype.restRequest_ = function(o, s, a) {
                        var h = this;
                        void 0 === s && (s = {}), s.format = "export", this.authTokenProvider_.getToken(!1).then(function(t) {
                            var e = t && t.accessToken;
                            e && (s.auth = e);
                            var n, r = (h.repoInfo_.secure ? "https://" : "http://") + h.repoInfo_.host + o + "?ns=" + h.repoInfo_.namespace + (n = [], S(s, function(e, t) {
                                Array.isArray(t) ? t.forEach(function(t) {
                                    n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                                }) : n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                            }), n.length ? "&" + n.join("&") : "");
                            h.log_("Sending REST request for " + r);
                            var i = new XMLHttpRequest;
                            i.onreadystatechange = function() {
                                if (a && 4 === i.readyState) {
                                    h.log_("REST Response for " + r + " received. status:", i.status, "response:", i.responseText);
                                    var t = null;
                                    if (200 <= i.status && i.status < 300) {
                                        try {
                                            t = g(i.responseText)
                                        } catch (t) {
                                            ot("Failed to parse JSON response for " + r + ": " + i.responseText)
                                        }
                                        a(null, t)
                                    } else 401 !== i.status && 404 !== i.status && ot("Got unsuccessful REST response for " + r + " Status: " + i.status), a(i.status);
                                    a = null
                                }
                            }, i.open("GET", r, !0), i.send()
                        })
                    }, u
                }(Pn),
                kn = "repo_interrupt",
                xn = function() {
                    function t(t, e, n) {
                        var s = this;
                        this.repoInfo_ = t, this.app = n, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new vn, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = new Me, this.persistentConnection_ = null;
                        var r = new pn(n);
                        if (this.stats_ = fn.getCollection(t), e || 0 <= ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) this.server_ = new On(this.repoInfo_, this.onDataUpdate_.bind(this), r), setTimeout(this.onConnectStatus_.bind(this, !0), 0);
                        else {
                            var i = n.options.databaseAuthVariableOverride;
                            if (null != i) {
                                if ("object" != typeof i) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                                try {
                                    m(i)
                                } catch (t) {
                                    throw new Error("Invalid authOverride provided: " + t)
                                }
                            }
                            this.persistentConnection_ = new Dn(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), r, i), this.server_ = this.persistentConnection_
                        }
                        r.addTokenChangeListener(function(t) {
                            s.server_.refreshAuthToken(t)
                        }), this.statsReporter_ = fn.getOrCreateReporter(t, function() {
                            return new yn(s.stats_, s.server_)
                        }), this.transactions_init_(), this.infoData_ = new cn, this.infoSyncTree_ = new ln({
                            startListening: function(t, e, n, r) {
                                var i = [],
                                    o = s.infoData_.getNode(t.path);
                                return o.isEmpty() || (i = s.infoSyncTree_.applyServerOverwrite(t.path, o), setTimeout(function() {
                                    r("ok")
                                }, 0)), i
                            },
                            stopListening: function() {}
                        }), this.updateInfo_("connected", !1), this.serverSyncTree_ = new ln({
                            startListening: function(r, t, e, i) {
                                return s.server_.listen(r, e, t, function(t, e) {
                                    var n = i(t, e);
                                    s.eventQueue_.raiseEventsForChangedPath(r.path, n)
                                }), []
                            },
                            stopListening: function(t, e) {
                                s.server_.unlisten(t, e)
                            }
                        })
                    }
                    return t.prototype.toString = function() {
                        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                    }, t.prototype.name = function() {
                        return this.repoInfo_.namespace
                    }, t.prototype.serverTime = function() {
                        var t = this.infoData_.getNode(new Ct(".info/serverTimeOffset")).val() || 0;
                        return (new Date).getTime() + t
                    }, t.prototype.generateServerValues = function() {
                        return (t = (t = {
                            timestamp: this.serverTime()
                        }) || {}).timestamp = t.timestamp || (new Date).getTime(), t;
                        var t
                    }, t.prototype.onDataUpdate_ = function(t, e, n, r) {
                        this.dataUpdateCount++;
                        var i = new Ct(t);
                        e = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(t, e) : e;
                        var o = [];
                        if (r)
                            if (n) {
                                var s = R(e, function(t) {
                                    return Se(t)
                                });
                                o = this.serverSyncTree_.applyTaggedQueryMerge(i, s, r)
                            } else {
                                var a = Se(e);
                                o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, a, r)
                            }
                        else if (n) {
                            var h = R(e, function(t) {
                                return Se(t)
                            });
                            o = this.serverSyncTree_.applyServerMerge(i, h)
                        } else {
                            var u = Se(e);
                            o = this.serverSyncTree_.applyServerOverwrite(i, u)
                        }
                        var l = i;
                        0 < o.length && (l = this.rerunTransactions_(i)), this.eventQueue_.raiseEventsForChangedPath(l, o)
                    }, t.prototype.interceptServerData_ = function(t) {
                        this.interceptServerDataCallback_ = t
                    }, t.prototype.onConnectStatus_ = function(t) {
                        this.updateInfo_("connected", t), !1 === t && this.runOnDisconnectEvents_()
                    }, t.prototype.onServerInfoUpdate_ = function(t) {
                        var n = this;
                        ft(t, function(t, e) {
                            n.updateInfo_(e, t)
                        })
                    }, t.prototype.updateInfo_ = function(t, e) {
                        var n = new Ct("/.info/" + t),
                            r = Se(e);
                        this.infoData_.updateSnapshot(n, r);
                        var i = this.infoSyncTree_.applyServerOverwrite(n, r);
                        this.eventQueue_.raiseEventsForChangedPath(n, i)
                    }, t.prototype.getNextWriteId_ = function() {
                        return this.nextWriteId_++
                    }, t.prototype.setWithPriority = function(i, t, e, o) {
                        var s = this;
                        this.log_("set", {
                            path: i.toString(),
                            value: t,
                            priority: e
                        });
                        var n = this.generateServerValues(),
                            r = Se(t, e),
                            a = qe(r, n),
                            h = this.getNextWriteId_(),
                            u = this.serverSyncTree_.applyUserOverwrite(i, a, h, !0);
                        this.eventQueue_.queueEvents(u), this.server_.put(i.toString(), r.val(!0), function(t, e) {
                            var n = "ok" === t;
                            n || ot("set at " + i + " failed: " + t);
                            var r = s.serverSyncTree_.ackUserWrite(h, !n);
                            s.eventQueue_.raiseEventsForChangedPath(i, r), s.callOnCompleteCallback(o, t, e)
                        });
                        var l = this.abortTransactions_(i);
                        this.rerunTransactions_(l), this.eventQueue_.raiseEventsForChangedPath(l, [])
                    }, t.prototype.update = function(o, t, s) {
                        var a = this;
                        this.log_("update", {
                            path: o.toString(),
                            value: t
                        });
                        var r = !0,
                            i = this.generateServerValues(),
                            h = {};
                        if (S(t, function(t, e) {
                                r = !1;
                                var n = Se(e);
                                h[t] = qe(n, i)
                            }), r) et("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(s, "ok");
                        else {
                            var u = this.getNextWriteId_(),
                                e = this.serverSyncTree_.applyUserMerge(o, h, u);
                            this.eventQueue_.queueEvents(e), this.server_.merge(o.toString(), t, function(t, e) {
                                var n = "ok" === t;
                                n || ot("update at " + o + " failed: " + t);
                                var r = a.serverSyncTree_.ackUserWrite(u, !n),
                                    i = 0 < r.length ? a.rerunTransactions_(o) : o;
                                a.eventQueue_.raiseEventsForChangedPath(i, r), a.callOnCompleteCallback(s, t, e)
                            }), S(t, function(t) {
                                var e = a.abortTransactions_(o.child(t));
                                a.rerunTransactions_(e)
                            }), this.eventQueue_.raiseEventsForChangedPath(o, [])
                        }
                    }, t.prototype.runOnDisconnectEvents_ = function() {
                        var r = this;
                        this.log_("onDisconnectEvents");
                        var t, n, i, e = this.generateServerValues(),
                            o = (t = this.onDisconnect_, n = e, i = new Me, t.forEachTree(new Ct(""), function(t, e) {
                                i.remember(t, qe(e, n))
                            }), i),
                            s = [];
                        o.forEachTree(Ct.Empty, function(t, e) {
                            s = s.concat(r.serverSyncTree_.applyServerOverwrite(t, e));
                            var n = r.abortTransactions_(t);
                            r.rerunTransactions_(n)
                        }), this.onDisconnect_ = new Me, this.eventQueue_.raiseEventsForChangedPath(Ct.Empty, s)
                    }, t.prototype.onDisconnectCancel = function(n, r) {
                        var i = this;
                        this.server_.onDisconnectCancel(n.toString(), function(t, e) {
                            "ok" === t && i.onDisconnect_.forget(n), i.callOnCompleteCallback(r, t, e)
                        })
                    }, t.prototype.onDisconnectSet = function(n, t, r) {
                        var i = this,
                            o = Se(t);
                        this.server_.onDisconnectPut(n.toString(), o.val(!0), function(t, e) {
                            "ok" === t && i.onDisconnect_.remember(n, o), i.callOnCompleteCallback(r, t, e)
                        })
                    }, t.prototype.onDisconnectSetWithPriority = function(n, t, e, r) {
                        var i = this,
                            o = Se(t, e);
                        this.server_.onDisconnectPut(n.toString(), o.val(!0), function(t, e) {
                            "ok" === t && i.onDisconnect_.remember(n, o), i.callOnCompleteCallback(r, t, e)
                        })
                    }, t.prototype.onDisconnectUpdate = function(r, n, i) {
                        var o = this;
                        if (I(n)) return et("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(i, "ok");
                        this.server_.onDisconnectMerge(r.toString(), n, function(t, e) {
                            "ok" === t && S(n, function(t, e) {
                                var n = Se(e);
                                o.onDisconnect_.remember(r.child(t), n)
                            }), o.callOnCompleteCallback(i, t, e)
                        })
                    }, t.prototype.addEventCallbackForQuery = function(t, e) {
                        var n;
                        n = ".info" === t.path.getFront() ? this.infoSyncTree_.addEventRegistration(t, e) : this.serverSyncTree_.addEventRegistration(t, e), this.eventQueue_.raiseEventsAtPath(t.path, n)
                    }, t.prototype.removeEventCallbackForQuery = function(t, e) {
                        var n;
                        n = ".info" === t.path.getFront() ? this.infoSyncTree_.removeEventRegistration(t, e) : this.serverSyncTree_.removeEventRegistration(t, e), this.eventQueue_.raiseEventsAtPath(t.path, n)
                    }, t.prototype.interrupt = function() {
                        this.persistentConnection_ && this.persistentConnection_.interrupt(kn)
                    }, t.prototype.resume = function() {
                        this.persistentConnection_ && this.persistentConnection_.resume(kn)
                    }, t.prototype.stats = function(t) {
                        if (void 0 === t && (t = !1), "undefined" != typeof console) {
                            var e;
                            e = t ? (this.statsListener_ || (this.statsListener_ = new _n(this.stats_)), this.statsListener_.get()) : this.stats_.get();
                            var r = Object.keys(e).reduce(function(t, e) {
                                return Math.max(e.length, t)
                            }, 0);
                            S(e, function(t, e) {
                                for (var n = t.length; n < r + 2; n++) t += " ";
                                console.log(t + e)
                            })
                        }
                    }, t.prototype.statsIncrementCounter = function(t) {
                        this.stats_.incrementCounter(t), this.statsReporter_.includeStat(t)
                    }, t.prototype.log_ = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = "";
                        this.persistentConnection_ && (n = this.persistentConnection_.id + ":"), et.apply(void 0, [n].concat(t))
                    }, t.prototype.callOnCompleteCallback = function(r, i, o) {
                        r && gt(function() {
                            if ("ok" == i) r(null);
                            else {
                                var t = (i || "error").toUpperCase(),
                                    e = t;
                                o && (e += ": " + o);
                                var n = new Error(e);
                                n.code = t, r(n)
                            }
                        })
                    }, Object.defineProperty(t.prototype, "database", {
                        get: function() {
                            return this.__database || (this.__database = new jn(this))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                Fn = function() {
                    function e(t) {
                        this.indexedFilter_ = new $e(t.getIndex()), this.index_ = t.getIndex(), this.startPost_ = e.getStartPost_(t), this.endPost_ = e.getEndPost_(t)
                    }
                    return e.prototype.getStartPost = function() {
                        return this.startPost_
                    }, e.prototype.getEndPost = function() {
                        return this.endPost_
                    }, e.prototype.matches = function(t) {
                        return this.index_.compare(this.getStartPost(), t) <= 0 && this.index_.compare(t, this.getEndPost()) <= 0
                    }, e.prototype.updateChild = function(t, e, n, r, i, o) {
                        return this.matches(new $t(e, n)) || (n = Ee.EMPTY_NODE), this.indexedFilter_.updateChild(t, e, n, r, i, o)
                    }, e.prototype.updateFullNode = function(t, e, n) {
                        e.isLeafNode() && (e = Ee.EMPTY_NODE);
                        var r = e.withIndex(this.index_);
                        r = r.updatePriority(Ee.EMPTY_NODE);
                        var i = this;
                        return e.forEachChild(ue, function(t, e) {
                            i.matches(new $t(t, e)) || (r = r.updateImmediateChild(t, Ee.EMPTY_NODE))
                        }), this.indexedFilter_.updateFullNode(t, r, n)
                    }, e.prototype.updatePriority = function(t, e) {
                        return t
                    }, e.prototype.filtersNodes = function() {
                        return !0
                    }, e.prototype.getIndexedFilter = function() {
                        return this.indexedFilter_
                    }, e.prototype.getIndex = function() {
                        return this.index_
                    }, e.getStartPost_ = function(t) {
                        if (t.hasStart()) {
                            var e = t.getIndexStartName();
                            return t.getIndex().makePost(t.getIndexStartValue(), e)
                        }
                        return t.getIndex().minPost()
                    }, e.getEndPost_ = function(t) {
                        if (t.hasEnd()) {
                            var e = t.getIndexEndName();
                            return t.getIndex().makePost(t.getIndexEndValue(), e)
                        }
                        return t.getIndex().maxPost()
                    }, e
                }(),
                An = function() {
                    function t(t) {
                        this.rangedFilter_ = new Fn(t), this.index_ = t.getIndex(), this.limit_ = t.getLimit(), this.reverse_ = !t.isViewFromLeft()
                    }
                    return t.prototype.updateChild = function(t, e, n, r, i, o) {
                        return this.rangedFilter_.matches(new $t(e, n)) || (n = Ee.EMPTY_NODE), t.getImmediateChild(e).equals(n) ? t : t.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(t, e, n, r, i, o) : this.fullLimitUpdateChild_(t, e, n, i, o)
                    }, t.prototype.updateFullNode = function(t, e, n) {
                        var r;
                        if (e.isLeafNode() || e.isEmpty()) r = Ee.EMPTY_NODE.withIndex(this.index_);
                        else if (2 * this.limit_ < e.numChildren() && e.isIndexed(this.index_)) {
                            r = Ee.EMPTY_NODE.withIndex(this.index_);
                            var i = void 0;
                            i = this.reverse_ ? e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : e.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                            for (var o = 0; i.hasNext() && o < this.limit_;) {
                                var s = i.getNext();
                                if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <= 0 : this.index_.compare(s, this.rangedFilter_.getEndPost()) <= 0)) break;
                                r = r.updateImmediateChild(s.name, s.node), o++
                            }
                        } else {
                            r = (r = e.withIndex(this.index_)).updatePriority(Ee.EMPTY_NODE);
                            var a = void 0,
                                h = void 0,
                                u = void 0;
                            i = void 0;
                            if (this.reverse_) {
                                i = r.getReverseIterator(this.index_), a = this.rangedFilter_.getEndPost(), h = this.rangedFilter_.getStartPost();
                                var l = this.index_.getCompare();
                                u = function(t, e) {
                                    return l(e, t)
                                }
                            } else i = r.getIterator(this.index_), a = this.rangedFilter_.getStartPost(), h = this.rangedFilter_.getEndPost(), u = this.index_.getCompare();
                            o = 0;
                            for (var c = !1; i.hasNext();) {
                                s = i.getNext();
                                !c && u(a, s) <= 0 && (c = !0), c && o < this.limit_ && u(s, h) <= 0 ? o++ : r = r.updateImmediateChild(s.name, Ee.EMPTY_NODE)
                            }
                        }
                        return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n)
                    }, t.prototype.updatePriority = function(t, e) {
                        return t
                    }, t.prototype.filtersNodes = function() {
                        return !0
                    }, t.prototype.getIndexedFilter = function() {
                        return this.rangedFilter_.getIndexedFilter()
                    }, t.prototype.getIndex = function() {
                        return this.index_
                    }, t.prototype.fullLimitUpdateChild_ = function(t, e, n, r, i) {
                        var o;
                        if (this.reverse_) {
                            var s = this.index_.getCompare();
                            o = function(t, e) {
                                return s(e, t)
                            }
                        } else o = this.index_.getCompare();
                        var a = t;
                        C(a.numChildren() == this.limit_, "");
                        var h = new $t(e, n),
                            u = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_),
                            l = this.rangedFilter_.matches(h);
                        if (a.hasChild(e)) {
                            for (var c = a.getImmediateChild(e), p = r.getChildAfterChild(this.index_, u, this.reverse_); null != p && (p.name == e || a.hasChild(p.name));) p = r.getChildAfterChild(this.index_, p, this.reverse_);
                            var d = null == p ? 1 : o(p, h);
                            if (l && !n.isEmpty() && 0 <= d) return null != i && i.trackChildChange(Xe.childChangedChange(e, n, c)), a.updateImmediateChild(e, n);
                            null != i && i.trackChildChange(Xe.childRemovedChange(e, c));
                            var f = a.updateImmediateChild(e, Ee.EMPTY_NODE);
                            return null != p && this.rangedFilter_.matches(p) ? (null != i && i.trackChildChange(Xe.childAddedChange(p.name, p.node)), f.updateImmediateChild(p.name, p.node)) : f
                        }
                        return n.isEmpty() ? t : l && 0 <= o(u, h) ? (null != i && (i.trackChildChange(Xe.childRemovedChange(u.name, u.node)), i.trackChildChange(Xe.childAddedChange(e, n))), a.updateImmediateChild(e, n).updateImmediateChild(u.name, Ee.EMPTY_NODE)) : t
                    }, t
                }(),
                Ln = function() {
                    function r() {
                        this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = ue
                    }
                    return r.prototype.hasStart = function() {
                        return this.startSet_
                    }, r.prototype.isViewFromLeft = function() {
                        return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
                    }, r.prototype.getIndexStartValue = function() {
                        return C(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
                    }, r.prototype.getIndexStartName = function() {
                        return C(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : at
                    }, r.prototype.hasEnd = function() {
                        return this.endSet_
                    }, r.prototype.getIndexEndValue = function() {
                        return C(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
                    }, r.prototype.getIndexEndName = function() {
                        return C(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : ht
                    }, r.prototype.hasLimit = function() {
                        return this.limitSet_
                    }, r.prototype.hasAnchoredLimit = function() {
                        return this.limitSet_ && "" !== this.viewFrom_
                    }, r.prototype.getLimit = function() {
                        return C(this.limitSet_, "Only valid if limit has been set"), this.limit_
                    }, r.prototype.getIndex = function() {
                        return this.index_
                    }, r.prototype.copy_ = function() {
                        var t = new r;
                        return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_, t.startSet_ = this.startSet_, t.indexStartValue_ = this.indexStartValue_, t.startNameSet_ = this.startNameSet_, t.indexStartName_ = this.indexStartName_, t.endSet_ = this.endSet_, t.indexEndValue_ = this.indexEndValue_, t.endNameSet_ = this.endNameSet_, t.indexEndName_ = this.indexEndName_, t.index_ = this.index_, t.viewFrom_ = this.viewFrom_, t
                    }, r.prototype.limit = function(t) {
                        var e = this.copy_();
                        return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = "", e
                    }, r.prototype.limitToFirst = function(t) {
                        var e = this.copy_();
                        return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT, e
                    }, r.prototype.limitToLast = function(t) {
                        var e = this.copy_();
                        return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT, e
                    }, r.prototype.startAt = function(t, e) {
                        var n = this.copy_();
                        return n.startSet_ = !0, void 0 === t && (t = null), n.indexStartValue_ = t, n.indexStartName_ = null != e ? (n.startNameSet_ = !0, e) : (n.startNameSet_ = !1, ""), n
                    }, r.prototype.endAt = function(t, e) {
                        var n = this.copy_();
                        return n.endSet_ = !0, void 0 === t && (t = null), n.indexEndValue_ = t, n.indexEndName_ = void 0 !== e ? (n.endNameSet_ = !0, e) : (n.endNameSet_ = !1, ""), n
                    }, r.prototype.orderBy = function(t) {
                        var e = this.copy_();
                        return e.index_ = t, e
                    }, r.prototype.getQueryObject = function() {
                        var t = r.WIRE_PROTOCOL_CONSTANTS_,
                            e = {};
                        if (this.startSet_ && (e[t.INDEX_START_VALUE] = this.indexStartValue_, this.startNameSet_ && (e[t.INDEX_START_NAME] = this.indexStartName_)), this.endSet_ && (e[t.INDEX_END_VALUE] = this.indexEndValue_, this.endNameSet_ && (e[t.INDEX_END_NAME] = this.indexEndName_)), this.limitSet_) {
                            e[t.LIMIT] = this.limit_;
                            var n = this.viewFrom_;
                            "" === n && (n = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), e[t.VIEW_FROM] = n
                        }
                        return this.index_ !== ue && (e[t.INDEX] = this.index_.toString()), e
                    }, r.prototype.loadsAllData = function() {
                        return !(this.startSet_ || this.endSet_ || this.limitSet_)
                    }, r.prototype.isDefault = function() {
                        return this.loadsAllData() && this.index_ == ue
                    }, r.prototype.getNodeFilter = function() {
                        return this.loadsAllData() ? new $e(this.getIndex()) : this.hasLimit() ? new An(this) : new Fn(this)
                    }, r.prototype.toRestQueryStringParameters = function() {
                        var t, e = r.REST_QUERY_CONSTANTS_,
                            n = {};
                        return this.isDefault() || (t = this.index_ === ue ? e.PRIORITY_INDEX : this.index_ === Re ? e.VALUE_INDEX : this.index_ === te ? e.KEY_INDEX : (C(this.index_ instanceof Pe, "Unrecognized index type!"), this.index_.toString()), n[e.ORDER_BY] = m(t), this.startSet_ && (n[e.START_AT] = m(this.indexStartValue_), this.startNameSet_ && (n[e.START_AT] += "," + m(this.indexStartName_))), this.endSet_ && (n[e.END_AT] = m(this.indexEndValue_), this.endNameSet_ && (n[e.END_AT] += "," + m(this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ? n[e.LIMIT_TO_FIRST] = this.limit_ : n[e.LIMIT_TO_LAST] = this.limit_)), n
                    }, r.WIRE_PROTOCOL_CONSTANTS_ = {
                        INDEX_START_VALUE: "sp",
                        INDEX_START_NAME: "sn",
                        INDEX_END_VALUE: "ep",
                        INDEX_END_NAME: "en",
                        LIMIT: "l",
                        VIEW_FROM: "vf",
                        VIEW_FROM_LEFT: "l",
                        VIEW_FROM_RIGHT: "r",
                        INDEX: "i"
                    }, r.REST_QUERY_CONSTANTS_ = {
                        ORDER_BY: "orderBy",
                        PRIORITY_INDEX: "$priority",
                        VALUE_INDEX: "$value",
                        KEY_INDEX: "$key",
                        START_AT: "startAt",
                        END_AT: "endAt",
                        LIMIT_TO_FIRST: "limitToFirst",
                        LIMIT_TO_LAST: "limitToLast"
                    }, r.DEFAULT = new r, r
                }(),
                Mn = function(n) {
                    function o(t, e) {
                        if (!(t instanceof xn)) throw new Error("new Reference() no longer supported - use app.database().");
                        return n.call(this, t, e, Ln.DEFAULT, !1) || this
                    }
                    return s(o, n), o.prototype.getKey = function() {
                        return k("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack()
                    }, o.prototype.child = function(t) {
                        var e, n, r, i;
                        return k("Reference.child", 1, 1, arguments.length), "number" == typeof t ? t = String(t) : t instanceof Ct || (null === this.path.getFront() ? (e = "Reference.child", i = !(n = 1), (r = t) && (r = r.replace(/^\/*\.info(\/|$)/, "/")), jt(e, n, r, i)) : jt("Reference.child", 1, t, !1)), new o(this.repo, this.path.child(t))
                    }, o.prototype.getParent = function() {
                        k("Reference.parent", 0, 0, arguments.length);
                        var t = this.path.parent();
                        return null === t ? null : new o(this.repo, t)
                    }, o.prototype.getRoot = function() {
                        k("Reference.root", 0, 0, arguments.length);
                        for (var t = this; null !== t.getParent();) t = t.getParent();
                        return t
                    }, o.prototype.databaseProp = function() {
                        return this.repo.database
                    }, o.prototype.set = function(t, e) {
                        k("Reference.set", 1, 2, arguments.length), Kt("Reference.set", this.path), qt("Reference.set", 1, t, this.path, !1), F("Reference.set", 2, e, !0);
                        var n = new l;
                        return this.repo.setWithPriority(this.path, t, null, n.wrapCallback(e)), n.promise
                    }, o.prototype.update = function(t, e) {
                        if (k("Reference.update", 1, 2, arguments.length), Kt("Reference.update", this.path), Array.isArray(t)) {
                            for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];
                            t = n, ot("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                        }
                        Ut("Reference.update", 1, t, this.path, !1), F("Reference.update", 2, e, !0);
                        var i = new l;
                        return this.repo.update(this.path, t, i.wrapCallback(e)), i.promise
                    }, o.prototype.setWithPriority = function(t, e, n) {
                        if (k("Reference.setWithPriority", 2, 3, arguments.length), Kt("Reference.setWithPriority", this.path), qt("Reference.setWithPriority", 1, t, this.path, !1), Vt("Reference.setWithPriority", 2, e, !1), F("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
                        var r = new l;
                        return this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)), r.promise
                    }, o.prototype.remove = function(t) {
                        return k("Reference.remove", 0, 1, arguments.length), Kt("Reference.remove", this.path), F("Reference.remove", 1, t, !0), this.set(null, t)
                    }, o.prototype.transaction = function(t, r, e) {
                        if (k("Reference.transaction", 1, 3, arguments.length), Kt("Reference.transaction", this.path), F("Reference.transaction", 1, t, !1), F("Reference.transaction", 2, r, !0), function(t, e, n, r) {
                                if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(x(t, e, r) + "must be a boolean.")
                            }("Reference.transaction", 3, e, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
                        void 0 === e && (e = !0);
                        var i = new l;
                        "function" == typeof r && i.promise.catch(function() {});
                        return this.repo.startTransaction(this.path, t, function(t, e, n) {
                            t ? i.reject(t) : i.resolve(new Gt(e, n)), "function" == typeof r && r(t, e, n)
                        }, e), i.promise
                    }, o.prototype.setPriority = function(t, e) {
                        k("Reference.setPriority", 1, 2, arguments.length), Kt("Reference.setPriority", this.path), Vt("Reference.setPriority", 1, t, !1), F("Reference.setPriority", 2, e, !0);
                        var n = new l;
                        return this.repo.setWithPriority(this.path.child(".priority"), t, null, n.wrapCallback(e)), n.promise
                    }, o.prototype.push = function(t, e) {
                        k("Reference.push", 0, 2, arguments.length), Kt("Reference.push", this.path), qt("Reference.push", 1, t, this.path, !0), F("Reference.push", 2, e, !0);
                        var n, r = this.repo.serverTime(),
                            i = Xt(r),
                            o = this.child(i),
                            s = this.child(i);
                        return n = null != t ? o.set(t, e).then(function() {
                            return s
                        }) : Promise.resolve(s), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof e && n.catch(function() {}), o
                    }, o.prototype.onDisconnect = function() {
                        return Kt("Reference.onDisconnect", this.path), new zt(this.repo, this.path)
                    }, Object.defineProperty(o.prototype, "database", {
                        get: function() {
                            return this.databaseProp()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "key", {
                        get: function() {
                            return this.getKey()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "parent", {
                        get: function() {
                            return this.getParent()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "root", {
                        get: function() {
                            return this.getRoot()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), o
                }(Ae);
            Ae.__referenceConstructor = Mn, sn.__referenceConstructor = Mn;
            var Wn, qn, Qn = function() {
                    this.children = {}, this.childCount = 0, this.value = null
                },
                Un = function() {
                    function i(t, e, n) {
                        void 0 === t && (t = ""), void 0 === e && (e = null), void 0 === n && (n = new Qn), this.name_ = t, this.parent_ = e, this.node_ = n
                    }
                    return i.prototype.subTree = function(t) {
                        for (var e, n = t instanceof Ct ? t : new Ct(t), r = this; null !== (e = n.getFront());) {
                            r = new i(e, r, b(r.node_.children, e) || new Qn), n = n.popFront()
                        }
                        return r
                    }, i.prototype.getValue = function() {
                        return this.node_.value
                    }, i.prototype.setValue = function(t) {
                        C(void 0 !== t, "Cannot set value to undefined"), this.node_.value = t, this.updateParents_()
                    }, i.prototype.clear = function() {
                        this.node_.value = null, this.node_.children = {}, this.node_.childCount = 0, this.updateParents_()
                    }, i.prototype.hasChildren = function() {
                        return 0 < this.node_.childCount
                    }, i.prototype.isEmpty = function() {
                        return null === this.getValue() && !this.hasChildren()
                    }, i.prototype.forEachChild = function(n) {
                        var r = this;
                        S(this.node_.children, function(t, e) {
                            n(new i(t, r, e))
                        })
                    }, i.prototype.forEachDescendant = function(e, t, n) {
                        t && !n && e(this), this.forEachChild(function(t) {
                            t.forEachDescendant(e, !0, n)
                        }), t && n && e(this)
                    }, i.prototype.forEachAncestor = function(t, e) {
                        for (var n = e ? this : this.parent(); null !== n;) {
                            if (t(n)) return !0;
                            n = n.parent()
                        }
                        return !1
                    }, i.prototype.forEachImmediateDescendantWithValue = function(e) {
                        this.forEachChild(function(t) {
                            null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e)
                        })
                    }, i.prototype.path = function() {
                        return new Ct(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_)
                    }, i.prototype.name = function() {
                        return this.name_
                    }, i.prototype.parent = function() {
                        return this.parent_
                    }, i.prototype.updateParents_ = function() {
                        null !== this.parent_ && this.parent_.updateChild_(this.name_, this)
                    }, i.prototype.updateChild_ = function(t, e) {
                        var n = e.isEmpty(),
                            r = w(this.node_.children, t);
                        n && r ? (delete this.node_.children[t], this.node_.childCount--, this.updateParents_()) : n || r || (this.node_.children[t] = e.node_, this.node_.childCount++, this.updateParents_())
                    }, i
                }();
            (qn = Wn || (Wn = {}))[qn.RUN = 0] = "RUN", qn[qn.SENT = 1] = "SENT", qn[qn.COMPLETED = 2] = "COMPLETED", qn[qn.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", qn[qn.NEEDS_ABORT = 4] = "NEEDS_ABORT", xn.MAX_TRANSACTION_RETRIES_ = 25, xn.prototype.transactions_init_ = function() {
                this.transactionQueueTree_ = new Un
            }, xn.prototype.startTransaction = function(t, e, n, r) {
                this.log_("transaction on " + t);
                var i = function() {},
                    o = new Mn(this, t);
                o.on("value", i);
                var s = {
                        path: t,
                        update: e,
                        onComplete: n,
                        status: null,
                        order: G(),
                        applyLocally: r,
                        retryCount: 0,
                        unwatcher: function() {
                            o.off("value", i)
                        },
                        abortReason: null,
                        currentWriteId: null,
                        currentInputSnapshot: null,
                        currentOutputSnapshotRaw: null,
                        currentOutputSnapshotResolved: null
                    },
                    a = this.getLatestState_(t);
                s.currentInputSnapshot = a;
                var h = s.update(a.val());
                if (void 0 === h) {
                    if (s.unwatcher(), s.currentOutputSnapshotRaw = null, s.currentOutputSnapshotResolved = null, s.onComplete) {
                        var u = new De(s.currentInputSnapshot, new Mn(this, s.path), ue);
                        s.onComplete(null, !1, u)
                    }
                } else {
                    Qt("transaction failed: Data returned ", h, s.path), s.status = Wn.RUN;
                    var l = this.transactionQueueTree_.subTree(t),
                        c = l.getValue() || [];
                    c.push(s), l.setValue(c);
                    var p = void 0;
                    if ("object" == typeof h && null !== h && w(h, ".priority")) p = b(h, ".priority"), C(Wt(p), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
                    else p = (this.serverSyncTree_.calcCompleteEventCache(t) || Ee.EMPTY_NODE).getPriority().val();
                    p = p;
                    var d = this.generateServerValues(),
                        f = Se(h, p),
                        _ = qe(f, d);
                    s.currentOutputSnapshotRaw = f, s.currentOutputSnapshotResolved = _, s.currentWriteId = this.getNextWriteId_();
                    var y = this.serverSyncTree_.applyUserOverwrite(t, _, s.currentWriteId, s.applyLocally);
                    this.eventQueue_.raiseEventsForChangedPath(t, y), this.sendReadyTransactions_()
                }
            }, xn.prototype.getLatestState_ = function(t, e) {
                return this.serverSyncTree_.calcCompleteEventCache(t, e) || Ee.EMPTY_NODE
            }, xn.prototype.sendReadyTransactions_ = function(t) {
                var e = this;
                if (void 0 === t && (t = this.transactionQueueTree_), t || this.pruneCompletedTransactionsBelowNode_(t), null !== t.getValue()) {
                    var n = this.buildTransactionQueue_(t);
                    C(0 < n.length, "Sending zero length transaction queue"), n.every(function(t) {
                        return t.status === Wn.RUN
                    }) && this.sendTransactionQueue_(t.path(), n)
                } else t.hasChildren() && t.forEachChild(function(t) {
                    e.sendReadyTransactions_(t)
                })
            }, xn.prototype.sendTransactionQueue_ = function(a, h) {
                for (var u = this, t = h.map(function(t) {
                        return t.currentWriteId
                    }), e = this.getLatestState_(a, t), n = e, r = e.hash(), i = 0; i < h.length; i++) {
                    var o = h[i];
                    C(o.status === Wn.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), o.status = Wn.SENT, o.retryCount++;
                    var s = Ct.relativePath(a, o.path);
                    n = n.updateChild(s, o.currentOutputSnapshotRaw)
                }
                var l = n.val(!0),
                    c = a;
                this.server_.put(c.toString(), l, function(t) {
                    u.log_("transaction put response", {
                        path: c.toString(),
                        status: t
                    });
                    var e = [];
                    if ("ok" === t) {
                        for (var n = [], r = 0; r < h.length; r++) {
                            if (h[r].status = Wn.COMPLETED, e = e.concat(u.serverSyncTree_.ackUserWrite(h[r].currentWriteId)), h[r].onComplete) {
                                var i = h[r].currentOutputSnapshotResolved,
                                    o = new Mn(u, h[r].path),
                                    s = new De(i, o, ue);
                                n.push(h[r].onComplete.bind(null, null, !0, s))
                            }
                            h[r].unwatcher()
                        }
                        u.pruneCompletedTransactionsBelowNode_(u.transactionQueueTree_.subTree(a)), u.sendReadyTransactions_(), u.eventQueue_.raiseEventsForChangedPath(a, e);
                        for (r = 0; r < n.length; r++) gt(n[r])
                    } else {
                        if ("datastale" === t)
                            for (r = 0; r < h.length; r++) h[r].status === Wn.SENT_NEEDS_ABORT ? h[r].status = Wn.NEEDS_ABORT : h[r].status = Wn.RUN;
                        else {
                            ot("transaction at " + c.toString() + " failed: " + t);
                            for (r = 0; r < h.length; r++) h[r].status = Wn.NEEDS_ABORT, h[r].abortReason = t
                        }
                        u.rerunTransactions_(a)
                    }
                }, r)
            }, xn.prototype.rerunTransactions_ = function(t) {
                var e = this.getAncestorTransactionNode_(t),
                    n = e.path(),
                    r = this.buildTransactionQueue_(e);
                return this.rerunTransactionQueue_(r, n), n
            }, xn.prototype.rerunTransactionQueue_ = function(t, e) {
                if (0 !== t.length) {
                    for (var n, r = [], i = [], o = t.filter(function(t) {
                            return t.status === Wn.RUN
                        }).map(function(t) {
                            return t.currentWriteId
                        }), s = 0; s < t.length; s++) {
                        var a = t[s],
                            h = Ct.relativePath(e, a.path),
                            u = !1,
                            l = void 0;
                        if (C(null !== h, "rerunTransactionsUnderNode_: relativePath should not be null."), a.status === Wn.NEEDS_ABORT) u = !0, l = a.abortReason, i = i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId, !0));
                        else if (a.status === Wn.RUN)
                            if (a.retryCount >= xn.MAX_TRANSACTION_RETRIES_) u = !0, l = "maxretry", i = i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId, !0));
                            else {
                                var c = this.getLatestState_(a.path, o);
                                a.currentInputSnapshot = c;
                                var p = t[s].update(c.val());
                                if (void 0 !== p) {
                                    Qt("transaction failed: Data returned ", p, a.path);
                                    var d = Se(p);
                                    "object" == typeof p && null != p && w(p, ".priority") || (d = d.updatePriority(c.getPriority()));
                                    var f = a.currentWriteId,
                                        _ = this.generateServerValues(),
                                        y = qe(d, _);
                                    a.currentOutputSnapshotRaw = d, a.currentOutputSnapshotResolved = y, a.currentWriteId = this.getNextWriteId_(), o.splice(o.indexOf(f), 1), i = (i = i.concat(this.serverSyncTree_.applyUserOverwrite(a.path, y, a.currentWriteId, a.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(f, !0))
                                } else u = !0, l = "nodata", i = i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId, !0))
                            }
                        if (this.eventQueue_.raiseEventsForChangedPath(e, i), i = [], u && (t[s].status = Wn.COMPLETED, n = t[s].unwatcher, setTimeout(n, Math.floor(0)), t[s].onComplete))
                            if ("nodata" === l) {
                                var v = new Mn(this, t[s].path),
                                    g = t[s].currentInputSnapshot,
                                    m = new De(g, v, ue);
                                r.push(t[s].onComplete.bind(null, null, !1, m))
                            } else r.push(t[s].onComplete.bind(null, new Error(l), !1, null))
                    }
                    this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
                    for (s = 0; s < r.length; s++) gt(r[s]);
                    this.sendReadyTransactions_()
                }
            }, xn.prototype.getAncestorTransactionNode_ = function(t) {
                for (var e, n = this.transactionQueueTree_; null !== (e = t.getFront()) && null === n.getValue();) n = n.subTree(e), t = t.popFront();
                return n
            }, xn.prototype.buildTransactionQueue_ = function(t) {
                var e = [];
                return this.aggregateTransactionQueuesForNode_(t, e), e.sort(function(t, e) {
                    return t.order - e.order
                }), e
            }, xn.prototype.aggregateTransactionQueuesForNode_ = function(t, e) {
                var n = this,
                    r = t.getValue();
                if (null !== r)
                    for (var i = 0; i < r.length; i++) e.push(r[i]);
                t.forEachChild(function(t) {
                    n.aggregateTransactionQueuesForNode_(t, e)
                })
            }, xn.prototype.pruneCompletedTransactionsBelowNode_ = function(t) {
                var e = this,
                    n = t.getValue();
                if (n) {
                    for (var r = 0, i = 0; i < n.length; i++) n[i].status !== Wn.COMPLETED && (n[r] = n[i], r++);
                    n.length = r, t.setValue(0 < n.length ? n : null)
                }
                t.forEachChild(function(t) {
                    e.pruneCompletedTransactionsBelowNode_(t)
                })
            }, xn.prototype.abortTransactions_ = function(t) {
                var e = this,
                    n = this.getAncestorTransactionNode_(t).path(),
                    r = this.transactionQueueTree_.subTree(t);
                return r.forEachAncestor(function(t) {
                    e.abortTransactionsOnNode_(t)
                }), this.abortTransactionsOnNode_(r), r.forEachDescendant(function(t) {
                    e.abortTransactionsOnNode_(t)
                }), n
            }, xn.prototype.abortTransactionsOnNode_ = function(t) {
                var e = t.getValue();
                if (null !== e) {
                    for (var n = [], r = [], i = -1, o = 0; o < e.length; o++)
                        if (e[o].status === Wn.SENT_NEEDS_ABORT);
                        else if (e[o].status === Wn.SENT) C(i === o - 1, "All SENT items should be at beginning of queue."), e[i = o].status = Wn.SENT_NEEDS_ABORT, e[o].abortReason = "set";
                    else if (C(e[o].status === Wn.RUN, "Unexpected transaction status in abort"), e[o].unwatcher(), r = r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0)), e[o].onComplete) {
                        n.push(e[o].onComplete.bind(null, new Error("set"), !1, null))
                    } - 1 === i ? t.setValue(null) : e.length = i + 1, this.eventQueue_.raiseEventsForChangedPath(t.path(), r);
                    for (o = 0; o < n.length; o++) gt(n[o])
                }
            };
            var Vn, Hn = "databaseURL",
                Bn = function() {
                    function t() {
                        this.repos_ = {}, this.useRestClient_ = !1
                    }
                    return t.getInstance = function() {
                        return Vn || (Vn = new t), Vn
                    }, t.prototype.interrupt = function() {
                        for (var t in this.repos_)
                            for (var e in this.repos_[t]) this.repos_[t][e].interrupt()
                    }, t.prototype.resume = function() {
                        for (var t in this.repos_)
                            for (var e in this.repos_[t]) this.repos_[t][e].resume()
                    }, t.prototype.databaseFromApp = function(t, e) {
                        var n = e || t.options[Hn];
                        void 0 === n && it("Can't determine Firebase Database URL.  Be sure to include " + Hn + " option when calling firebase.initializeApp().");
                        var r = Ot(n),
                            i = r.repoInfo;
                        return Yt("Invalid Firebase Database URL", 1, r), r.path.isEmpty() || it("Database URL must point to the root of a Firebase Database (not including a child path)."), this.createRepo(i, t).database
                    }, t.prototype.deleteRepo = function(t) {
                        var e = b(this.repos_, t.app.name);
                        e && b(e, t.repoInfo_.toURLString()) === t || it("Database " + t.app.name + "(" + t.repoInfo_ + ") has already been deleted."), t.interrupt(), delete e[t.repoInfo_.toURLString()]
                    }, t.prototype.createRepo = function(t, e) {
                        var n = b(this.repos_, e.name);
                        n || (n = {}, this.repos_[e.name] = n);
                        var r = b(n, t.toURLString());
                        return r && it("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new xn(t, this.useRestClient_, e), n[t.toURLString()] = r
                    }, t.prototype.forceRestClient = function(t) {
                        this.useRestClient_ = t
                    }, t
                }(),
                jn = function() {
                    function t(t) {
                        (this.repo_ = t) instanceof xn || it("Don't call new Database() directly - please use firebase.database()."), this.root_ = new Mn(t, Ct.Empty), this.INTERNAL = new Kn(this)
                    }
                    return Object.defineProperty(t.prototype, "app", {
                        get: function() {
                            return this.repo_.app
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ref = function(t) {
                        return this.checkDeleted_("ref"), k("database.ref", 0, 1, arguments.length), t instanceof Mn ? this.refFromURL(t.toString()) : void 0 !== t ? this.root_.child(t) : this.root_
                    }, t.prototype.refFromURL = function(t) {
                        var e = "database.refFromURL";
                        this.checkDeleted_(e), k(e, 1, 1, arguments.length);
                        var n = Ot(t);
                        Yt(e, 1, n);
                        var r = n.repoInfo;
                        return r.host !== this.repo_.repoInfo_.host && it(e + ": Host name does not match the current database: (found " + r.host + " but expected " + this.repo_.repoInfo_.host + ")"), this.ref(n.path.toString())
                    }, t.prototype.checkDeleted_ = function(t) {
                        null === this.repo_ && it("Cannot call " + t + " on a deleted database.")
                    }, t.prototype.goOffline = function() {
                        k("database.goOffline", 0, 0, arguments.length), this.checkDeleted_("goOffline"), this.repo_.interrupt()
                    }, t.prototype.goOnline = function() {
                        k("database.goOnline", 0, 0, arguments.length), this.checkDeleted_("goOnline"), this.repo_.resume()
                    }, t.ServerValue = {
                        TIMESTAMP: {
                            ".sv": "timestamp"
                        }
                    }, t
                }(),
                Kn = function() {
                    function t(t) {
                        this.database = t
                    }
                    return t.prototype.delete = function() {
                        return o = this, h = function() {
                            return e(this, function(t) {
                                return this.database.checkDeleted_("delete"), Bn.getInstance().deleteRepo(this.database.repo_), this.database.repo_ = null, this.database.root_ = null, this.database.INTERNAL = null, this.database = null, [2]
                            })
                        }, new((a = s = void 0) || (a = Promise))(function(t, e) {
                            function n(t) {
                                try {
                                    i(h.next(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function r(t) {
                                try {
                                    i(h.throw(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function i(e) {
                                e.done ? t(e.value) : new a(function(t) {
                                    t(e.value)
                                }).then(n, r)
                            }
                            i((h = h.apply(o, s || [])).next())
                        });
                        var o, s, a, h
                    }, t
                }(),
                Yn = Object.freeze({
                    forceLongPolling: function() {
                        In.forceDisallow(), bn.forceAllow()
                    },
                    forceWebSockets: function() {
                        bn.forceDisallow()
                    },
                    isWebSocketsAvailable: function() {
                        return In.isAvailable()
                    },
                    setSecurityDebugCallback: function(t, e) {
                        t.repo.persistentConnection_.securityDebugCallback_ = e
                    },
                    stats: function(t, e) {
                        t.repo.stats(e)
                    },
                    statsIncrementCounter: function(t, e) {
                        t.repo.statsIncrementCounter(e)
                    },
                    dataUpdateCount: function(t) {
                        return t.repo.dataUpdateCount
                    },
                    interceptServerData: function(t, e) {
                        return t.repo.interceptServerData_(e)
                    }
                }),
                zn = Dn;
            Dn.prototype.simpleListen = function(t, e) {
                this.sendRequest("q", {
                    p: t
                }, e)
            }, Dn.prototype.echo = function(t, e) {
                this.sendRequest("echo", {
                    d: t
                }, e)
            };
            var Gn, Xn = Rn,
                $n = Tt,
                Jn = Object.freeze({
                    DataConnection: zn,
                    RealTimeConnection: Xn,
                    hijackHash: function(i) {
                        var o = Dn.prototype.put;
                        return Dn.prototype.put = function(t, e, n, r) {
                                void 0 !== r && (r = i()), o.call(this, t, e, n, r)
                            },
                            function() {
                                Dn.prototype.put = o
                            }
                    },
                    ConnectionTarget: $n,
                    queryIdentifier: function(t) {
                        return t.queryIdentifier()
                    },
                    listens: function(t) {
                        return t.repo.persistentConnection_.listens_
                    },
                    forceRestClient: function(t) {
                        Bn.getInstance().forceRestClient(t)
                    }
                }),
                Zn = jn.ServerValue;
            Gn = tr.INTERNAL.registerService("database", function(t, e, n) {
                return Bn.getInstance().databaseFromApp(t, n)
            }, {
                Reference: Mn,
                Query: Ae,
                Database: jn,
                DataSnapshot: De,
                enableLogging: tt,
                INTERNAL: Yn,
                ServerValue: Zn,
                TEST_ACCESS: Jn
            }, null, !0), d() && (module.exports = Gn)
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-database - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-database.js.map