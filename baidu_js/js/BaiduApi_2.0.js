window.BMAP_AUTHENTIC_KEY = "077E114C2eb9cf894df88566ea8cfce7"; (function() {
    var aa = void 0,
    i = !0,
    n = null,
    o = !1;
    function q() {
        return function() {}
    }
    function ba(a) {
        return function(b) {
            this[a] = b
        }
    }
    function s(a) {
        return function() {
            return this[a]
        }
    }
    function da(a) {
        return function() {
            return a
        }
    }
    var ea = [];
    function fa(a) {
        return function() {
            return ea[a].apply(this, arguments)
        }
    }
    function ga(a, b) {
        return ea[a] = b
    }
    var ha, t = ha = t || {
        version: "1.3.4"
    };
    t.L = "$BAIDU$";
    window[t.L] = window[t.L] || {};
    t.object = t.object || {};
    t.extend = t.object.extend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    t.z = t.z || {};
    t.z.R = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a: n
    };
    t.R = t.qc = t.z.R;
    t.z.H = function(a) {
        a = t.z.R(a);
        a.style.display = "none";
        return a
    };
    t.H = t.z.H;
    t.lang = t.lang || {};
    t.lang.ne = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    t.ne = t.lang.ne;
    t.z.xg = function(a) {
        return t.lang.ne(a) ? document.getElementById(a) : a
    };
    t.xg = t.z.xg;
    t.z.contains = function(a, b) {
        var c = t.z.xg,
        a = c(a),
        b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    t.M = t.M || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (t.M.S = t.S = document.documentMode || +RegExp.$1);
    var ia = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > t.M.S ? (ia["for"] = "htmlFor", ia["class"] = "className") : (ia.htmlFor = "for", ia.className = "class");
    t.z.jv = ia;
    t.z.ru = function(a, b, c) {
        a = t.z.R(a);
        if ("style" == b) a.style.cssText = c;
        else {
            b = t.z.jv[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    t.ru = t.z.ru;
    t.z.su = function(a, b) {
        var a = t.z.R(a),
        c;
        for (c in b) t.z.ru(a, c, b[c]);
        return a
    };
    t.su = t.z.su;
    t.rh = t.rh || {}; (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        t.rh.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    })();
    t.trim = t.rh.trim;
    t.rh.ri = function(a, b) {
        var a = "" + a,
        c = Array.prototype.slice.call(arguments, 1),
        d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== n && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b: c: c;
            return a.replace(/#\{(.+?)\}/g,
            function(a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "": g
            })
        }
        return a
    };
    t.ri = t.rh.ri;
    t.z.Ob = function(a, b) {
        for (var a = t.z.R(a), c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, j = 0; j < f; ++j) {
            g = 0;
            for (e = c.length; g < e; ++g) if (c[g] == d[j]) {
                c.splice(g, 1);
                break
            }
        }
        a.className = c.join(" ");
        return a
    };
    t.Ob = t.z.Ob;
    t.z.Et = function(a, b, c) {
        var a = t.z.R(a),
        d;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore": "setEndAfter"](a);
                d.collapse(b)
            }
            d.insertNode(d.createContextualFragment(c))
        }
        return a
    };
    t.Et = t.z.Et;
    t.z.show = function(a) {
        a = t.z.R(a);
        a.style.display = "";
        return a
    };
    t.show = t.z.show;
    t.z.Ys = function(a) {
        a = t.z.R(a);
        return a.nodeType == 9 ? a: a.ownerDocument || a.document
    };
    t.z.Ya = function(a, b) {
        for (var a = t.z.R(a), c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++) e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a
    };
    t.Ya = t.z.Ya;
    t.z.Jr = t.z.Jr || {};
    t.z.Qh = t.z.Qh || [];
    t.z.Qh.filter = function(a, b, c) {
        for (var d = 0,
        e = t.z.Qh,
        f; f = e[d]; d++) if (f = f[c]) b = f(a, b);
        return b
    };
    t.rh.FA = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a: a.replace(/[-_][^-_]/g,
        function(a) {
            return a.charAt(1).toUpperCase()
        })
    };
    t.z.YL = function(a, b) {
        t.z.zt(a, b) ? t.z.Ob(a, b) : t.z.Ya(a, b)
    };
    t.z.zt = function(a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return o;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
        b = a.split(" "),
        c;
        t.forEach(this,
        function(a) {
            for (var a = a.className,
            e = 0; e < b.length; e++) if (!~ (" " + a + " ").indexOf(" " + b[e] + " ")) {
                c = o;
                return
            }
            c !== o && (c = i)
        });
        return c
    };
    t.z.kg = function(a, b) {
        var c = t.z,
        a = c.R(a),
        b = t.rh.FA(b),
        d = a.style[b];
        if (!d) var e = c.Jr[b],
        d = a.currentStyle || (t.M.S ? a.style: getComputedStyle(a, n)),
        d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.Qh) d = e.filter(b, d, "get");
        return d
    };
    t.kg = t.z.kg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (t.M.opera = +RegExp.$1);
    t.M.lz = /webkit/i.test(navigator.userAgent);
    t.M.BH = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    t.M.Lt = "CSS1Compat" == document.compatMode;
    t.z.ba = function(a) {
        var a = t.z.R(a),
        b = t.z.Ys(a),
        c = t.M,
        d = t.z.kg;
        c.BH > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {
            left: 0,
            top: 0
        },
        f;
        if (a == (c.S && !c.Lt ? b.body: b.documentElement)) return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.S && !c.Lt) {
                e.left = e.left - (isNaN(b) ? 2 : b);
                e.top = e.top - (isNaN(d) ? 2 : d)
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.lz > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break
                }
                f = f.offsetParent
            } while ( f && f != a );
            if (c.opera > 0 || c.lz > 0 && d(a, "position") == "absolute") e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body;) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR") e.top = e.top - f.scrollTop;
                f = f.offsetParent
            }
        }
        return e
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (t.M.vf = +RegExp.$1);
    var ja = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ja) && !/chrome/i.test(ja) && (t.M.DI = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (t.M.Lx = +RegExp.$1);
    t.hc = t.hc || {};
    t.hc.Td = function(a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b) for (d = 0; d < e; d++) {
            c = a[d];
            c = b.call(a, c, d);
            if (c === o) break
        }
        return a
    };
    t.Td = t.hc.Td;
    t.lang.L = function() {
        return "TANGRAM__" + (window[t.L]._counter++).toString(36)
    };
    window[t.L]._counter = window[t.L]._counter || 1;
    window[t.L]._instances = window[t.L]._instances || {};
    t.lang.gm = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    t.lang.ua = function(a) {
        this.L = a || t.lang.L();
        window[t.L]._instances[this.L] = this
    };
    window[t.L]._instances = window[t.L]._instances || {};
    t.lang.ua.prototype.sf = fa(1);
    t.lang.ua.prototype.toString = function() {
        return "[object " + (this.IB || "Object") + "]"
    };
    t.lang.Sp = function(a, b) {
        this.type = a;
        this.returnValue = i;
        this.target = b || n;
        this.currentTarget = n
    };
    t.lang.ua.prototype.addEventListener = function(a, b, c) {
        if (t.lang.gm(b)) { ! this.Nf && (this.Nf = {});
            var d = this.Nf,
            e;
            if (typeof c == "string" && c) {
                if (/[^\w\-]/.test(c)) throw "nonstandard key:" + c;
                e = b.Ry = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            e = e || t.lang.L();
            b.Ry = e;
            d[a][e] = b
        }
    };
    t.lang.ua.prototype.removeEventListener = function(a, b) {
        if (t.lang.gm(b)) b = b.Ry;
        else if (!t.lang.ne(b)) return; ! this.Nf && (this.Nf = {});
        a.indexOf("on") != 0 && (a = "on" + a);
        var c = this.Nf;
        c[a] && c[a][b] && delete c[a][b]
    };
    t.lang.ua.prototype.dispatchEvent = function(a, b) {
        t.lang.ne(a) && (a = new t.lang.Sp(a)); ! this.Nf && (this.Nf = {});
        var b = b || {},
        c;
        for (c in b) a[c] = b[c];
        var d = this.Nf,
        e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        t.lang.gm(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object") for (c in d[e]) d[e][c].apply(this, arguments);
        return a.returnValue
    };
    t.lang.ia = function(a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f) e[d] = f[d];
        a.prototype.constructor = a;
        a.rJ = b.prototype;
        if ("string" == typeof c) e.IB = c
    };
    t.ia = t.lang.ia;
    t.lang.Mc = function(a) {
        return window[t.L]._instances[a] || n
    };
    t.platform = t.platform || {};
    t.platform.FH = /macintosh/i.test(navigator.userAgent);
    t.platform.mz = /windows/i.test(navigator.userAgent);
    t.platform.LH = /x11/i.test(navigator.userAgent);
    t.platform.Tj = /android/i.test(navigator.userAgent);
    /android (\d+\.\d)/i.test(navigator.userAgent) && (t.platform.wx = t.wx = RegExp.$1);
    t.platform.DH = /ipad/i.test(navigator.userAgent);
    t.platform.EH = /iphone/i.test(navigator.userAgent);
    function z(a, b) {
        b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    t.lang.Co = function(a) {
        var b = window[t.L];
        b.eD && delete b.eD[a]
    };
    t.event = {};
    t.C = t.event.C = function(a, b, c) {
        if (! (a = t.R(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, o) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    t.Uc = t.event.Uc = function(a, b, c) {
        if (! (a = t.R(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, o) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    t.z.zt = function(a, b) {
        if (!a || !a.className || typeof a.className != "string") return o;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch(d) {
            return o
        }
        return c > -1
    };
    t.Is = function() {
        function a(a) {
            document.addEventListener && (this.element = a, this.py = this.Ei ? "touchstart": "mousedown", this.Ls = this.Ei ? "touchmove": "mousemove", this.Ks = this.Ei ? "touchend": "mouseup", this.Ut = o, this.uA = this.tA = 0, this.element.addEventListener(this.py, this, o), ha.C(this.element, "mousedown", q()), this.handleEvent(n))
        }
        a.prototype = {
            Ei: "ontouchstart" in window || "createTouch" in document,
            start: function(a) {
                A(a);
                this.Ut = o;
                this.tA = this.Ei ? a.touches[0].clientX: a.clientX;
                this.uA = this.Ei ? a.touches[0].clientY: a.clientY;
                this.element.addEventListener(this.Ls, this, o);
                this.element.addEventListener(this.Ks, this, o)
            },
            move: function(a) {
                ka(a);
                var c = this.Ei ? a.touches[0].clientY: a.clientY;
                if (10 < Math.abs((this.Ei ? a.touches[0].clientX: a.clientX) - this.tA) || 10 < Math.abs(c - this.uA)) this.Ut = i
            },
            end: function(a) {
                ka(a);
                this.Ut || (a = document.createEvent("Event"), a.initEvent("tap", o, i), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.Ls, this, o);
                this.element.removeEventListener(this.Ks, this, o)
            },
            handleEvent: function(a) {
                if (a) switch (a.type) {
                case this.py:
                    this.start(a);
                    break;
                case this.Ls:
                    this.move(a);
                    break;
                case this.Ks:
                    this.end(a)
                }
            }
        };
        return function(b) {
            return new a(b)
        }
    } ();
    var B = window.BMap || {};
    B.version = "2.0";
    B.ll = [];
    B.md = function(a) {
        this.ll.push(a)
    };
    B.qr = [];
    B.$t = function(a) {
        this.qr.push(a)
    };
    B.OE = B.apiLoad || q();
    var la = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = n;
    var ma = window.BMap_loadScriptTime,
    na = (new Date).getTime(),
    oa = n,
    pa = i;
    function qa(a, b) {
        if (a = t.R(a)) {
            var c = this;
            t.lang.ua.call(c);
            b = b || {};
            c.F = {
                ds: 200,
                Ab: i,
                Io: o,
                Ds: i,
                Ol: o,
                Ql: o,
                Gs: i,
                Pl: i,
                Go: i,
                gd: 25,
                TJ: 240,
                CE: 450,
                jb: C.jb,
                kc: C.kc,
                $o: !!b.$o,
                mc: b.minZoom || 1,
                kd: b.maxZoom || 18,
                vb: b.mapType || ra,
                NL: o,
                Ho: o,
                ws: 500,
                PK: b.enableHighResolution !== o,
                Jo: b.enableMapClick !== o,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                Pu: b.vectorMapLevel || 12,
                lc: b.mapStyle || n,
                Az: b.logoControl === o ? o: i,
                VE: ["chrome"]
            };
            c.F.lc && (this.Zy(c.F.lc.controls), this.$y(c.F.lc.geotableId));
            c.F.lc && c.F.lc.styleId && c.Ny(c.F.lc.styleId);
            c.F.rf = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.F.Go = b.enableAutoResize);
            t.platform.Tj && 1.5 < window.devicePixelRatio && (c.F.devicePixelRatio = 1.5);
            for (var d = c.F.VE,
            e = 0,
            f = d.length; e < f; e++) if (t.M[d[e]]) {
                c.F.devicePixelRatio = 1;
                break
            }
            c.xa = a;
            c.Er(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.ta());
            b.size && this.Cc(b.size);
            d = c.Bb();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.Cd = c.platform.firstChild;
            c.Cd.style.width = c.width + "px";
            c.Cd.style.height = c.height + "px";
            c.Gc = {};
            c.Ee = new F(0, 0);
            c.Lb = new F(0, 0);
            c.la = 1;
            c.Zb = 0;
            c.ks = n;
            c.js = n;
            c.zb = "";
            c.Zr = "";
            c.gf = {};
            c.gf.custom = {};
            c.ya = 0;
            c.Q = new sa(a, {
                Fj: "api"
            });
            c.Q.H();
            c.Q.vu(c);
            b = b || {};
            d = c.vb = c.F.vb;
            c.Pc = d.Ai();
            d === ta && va(5002); (d === wa || d === xa) && va(5003);
            d = c.F;
            d.NA = b.minZoom;
            d.MA = b.maxZoom;
            c.lq();
            c.D = {
                Cb: o,
                hb: 0,
                km: 0,
                rz: 0,
                rL: 0,
                Xr: o,
                ju: -1,
                td: []
            };
            c.platform.style.cursor = c.F.jb;
            for (e = 0; e < B.ll.length; e++) B.ll[e](c);
            c.D.ju = e;
            c.N();
            G.load("map",
            function() {
                c.Tb()
            });
            c.F.Jo && (setTimeout(function() {
                va("load_mapclick")
            },
            1E3), G.load("mapclick",
            function() {
                window.MPC_Mgr = new ya(c)
            },
            i));
            za() && G.load("oppc",
            function() {
                c.fq()
            });
            H() && G.load("opmb",
            function() {
                c.fq()
            });
            a = n;
            c.Or = []
        }
    }
    t.lang.ia(qa, t.lang.ua, "Map");
    t.extend(qa.prototype, {
        ta: function() {
            var a = J("div"),
            b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = J("div", {
                "class": "BMap_mask"
            }),
            c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        Er: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" != Aa(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        N: function() {
            var a = this;
            a.tl = function() {
                var b = a.Bb();
                if (a.width != b.width || a.height != b.height) {
                    var c = new K(a.width, a.height),
                    d = new L("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.Ig((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.Cd.style.width = (a.width = b.width) + "px";
                    a.Cd.style.height = (a.height = b.height) + "px";
                    c = new L("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.F.Go && (a.D.wl = setInterval(a.tl, 80))
        },
        Ig: function(a, b, c, d) {
            var e = this.ha().Gb(this.U()),
            f = this.Pc,
            g = i;
            c && F.cz(c) && (this.Ee = new F(c.lng, c.lat), g = o);
            if (c = c && d ? f.Ii(c, this.zb) : this.Lb) if (this.Lb = new F(c.lng + a * e, c.lat - b * e), (a = f.eh(this.Lb, this.zb)) && g) this.Ee = a
        },
        Xe: function(a, b) {
            if (Ba(a) && (a = this.jj(a).zoom, a != this.la)) {
                this.Zb = this.la;
                this.la = a;
                var c;
                b ? c = b: this.Ke() && (c = this.Ke().ba());
                c && (c = this.kb(c, this.Zb), this.Ig(this.width / 2 - c.x, this.height / 2 - c.y, this.Sa(c, this.Zb), i));
                this.dispatchEvent(new L("onzoomstart"));
                this.dispatchEvent(new L("onzoomstartcode"))
            }
        },
        Fd: function(a) {
            this.Xe(a)
        },
        Qu: function(a) {
            this.Xe(this.la + 1, a)
        },
        Ru: function(a) {
            this.Xe(this.la - 1, a)
        },
        re: function(a) {
            a instanceof F && (this.Lb = this.Pc.Ii(a, this.zb), this.Ee = F.cz(a) ? new F(a.lng, a.lat) : this.Pc.eh(this.Lb, this.zb))
        },
        qe: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.Ig( - a, -b)
        },
        ho: function(a) {
            a && Ca(a.Md) && (a.Md(this), this.dispatchEvent(new L("onaddcontrol", a)))
        },
        bA: function(a) {
            a && Ca(a.remove) && (a.remove(), this.dispatchEvent(new L("onremovecontrol", a)))
        },
        zj: function(a) {
            a && Ca(a.sa) && (a.sa(this), this.dispatchEvent(new L("onaddcontextmenu", a)))
        },
        ck: function(a) {
            a && Ca(a.remove) && (this.dispatchEvent(new L("onremovecontextmenu", a)), a.remove())
        },
        Ua: function(a) {
            a && Ca(a.Md) && (a.Md(this), this.dispatchEvent(new L("onaddoverlay", a)))
        },
        Qc: function(a) {
            a && Ca(a.remove) && (a.remove(), this.dispatchEvent(new L("onremoveoverlay", a)))
        },
        Nx: function() {
            this.dispatchEvent(new L("onclearoverlays"))
        },
        pf: function(a) {
            a && this.dispatchEvent(new L("onaddtilelayer", a))
        },
        Gf: function(a) {
            a && this.dispatchEvent(new L("onremovetilelayer", a))
        },
        pg: function(a) {
            if (this.vb !== a) {
                var b = new L("onsetmaptype");
                b.IL = this.vb;
                this.vb = this.F.vb = a;
                this.Pc = this.vb.Ai();
                this.Ig(0, 0, this.Ga(), i);
                this.lq();
                var c = this.jj(this.U()).zoom;
                this.Xe(c);
                this.dispatchEvent(b);
                b = new L("onmaptypechange");
                b.la = c;
                b.vb = a;
                this.dispatchEvent(b); (a === wa || a === xa) && va(5003)
            }
        },
        se: function(a) {
            var b = this;
            if (a instanceof F) b.re(a, {
                noAnimation: i
            });
            else if (Da(a)) if (b.vb == ta) {
                var c = C.as[a];
                c && (pt = c.k, b.se(pt))
            } else {
                var d = this.bw();
                d.xu(function(c) {
                    0 == d.Bi() && 2 == d.ma.result.type && (b.se(c.Vg(0).point), ta.Hj(a) && b.uu(a))
                });
                d.search(a, {
                    log: "center"
                })
            }
        },
        Sd: function(a, b) {
            var c = this;
            if (Da(a)) if (c.vb == ta) {
                var d = C.as[a];
                d && (pt = d.k, c.Sd(pt, b))
            } else {
                var e = c.bw();
                e.xu(function(d) {
                    if (0 == e.Bi() && 2 == e.ma.result.type) {
                        var d = d.Vg(0).point,
                        f = b || N.Ss(e.ma.content.level, c);
                        c.Sd(d, f);
                        ta.Hj(a) && c.uu(a)
                    }
                });
                e.search(a, {
                    log: "center"
                })
            } else if (a instanceof F && b) {
                b = c.jj(b).zoom;
                c.Zb = c.la || b;
                c.la = b;
                c.Ee = new F(a.lng, a.lat);
                c.Lb = c.Pc.Ii(c.Ee, c.zb);
                c.ks = c.ks || c.la;
                c.js = c.js || c.Ee;
                var d = new L("onload"),
                f = new L("onloadcode");
                d.point = new F(a.lng, a.lat);
                d.pixel = c.kb(c.Ee, c.la);
                d.zoom = b;
                c.loaded || (c.loaded = i, c.dispatchEvent(d), oa || (oa = Ea()));
                c.dispatchEvent(f);
                c.dispatchEvent(new L("onmoveend"));
                c.Zb != c.la && c.dispatchEvent(new L("onzoomend"))
            }
        },
        bw: function() {
            this.D.wz || (this.D.wz = new Fa(1));
            return this.D.wz
        },
        reset: function() {
            this.Sd(this.js, this.ks, i)
        },
        enableDragging: function() {
            this.F.Ab = i
        },
        disableDragging: function() {
            this.F.Ab = o
        },
        enableInertialDragging: function() {
            this.F.Ho = i
        },
        disableInertialDragging: function() {
            this.F.Ho = o
        },
        enableScrollWheelZoom: function() {
            this.F.Ql = i
        },
        disableScrollWheelZoom: function() {
            this.F.Ql = o
        },
        enableContinuousZoom: function() {
            this.F.Ol = i
        },
        disableContinuousZoom: function() {
            this.F.Ol = o
        },
        enableDoubleClickZoom: function() {
            this.F.Ds = i
        },
        disableDoubleClickZoom: function() {
            this.F.Ds = o
        },
        enableKeyboard: function() {
            this.F.Io = i
        },
        disableKeyboard: function() {
            this.F.Io = o
        },
        enablePinchToZoom: function() {
            this.F.Pl = i
        },
        disablePinchToZoom: function() {
            this.F.Pl = o
        },
        enableAutoResize: function() {
            this.F.Go = i;
            this.tl();
            this.D.wl || (this.D.wl = setInterval(this.tl, 80))
        },
        disableAutoResize: function() {
            this.F.Go = o;
            this.D.wl && (clearInterval(this.D.wl), this.D.wl = n)
        },
        Bb: function() {
            return this.Hl && this.Hl instanceof K ? new K(this.Hl.width, this.Hl.height) : new K(this.xa.clientWidth, this.xa.clientHeight)
        },
        Cc: function(a) {
            a && a instanceof K ? (this.Hl = a, this.xa.style.width = a.width + "px", this.xa.style.height = a.height + "px") : this.Hl = n
        },
        Ga: s("Ee"),
        U: s("la"),
        iF: function() {
            this.tl()
        },
        jj: function(a) {
            var b = this.F.mc,
            c = this.F.kd,
            d = o;
            a < b && (d = i, a = b);
            a > c && (d = i, a = c);
            return {
                zoom: a,
                Ms: d
            }
        },
        Ba: s("xa"),
        kb: function(a, b) {
            b = b || this.U();
            return this.Pc.kb(a, b, this.Lb, this.Bb(), this.zb)
        },
        Sa: function(a, b) {
            b = b || this.U();
            return this.Pc.Sa(a, b, this.Lb, this.Bb(), this.zb)
        },
        Re: function(a, b) {
            if (a) {
                var c = this.kb(new F(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        Uz: function(a, b) {
            if (a) {
                var c = new O(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Sa(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.zb;
            this.vb == ta && c && Ha.Sx(a, this, b)
        },
        DL: function(a, b) {
            var c = map.zb;
            this.vb == ta && c && Ha.Rx(a, this, b)
        },
        EL: function(a, b) {
            var c = this,
            d = map.zb;
            c.vb == ta && d && Ha.Sx(a, c,
            function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        CL: function(a, b) {
            var c = map.zb;
            this.vb == ta && c && (a.x += this.offsetX, a.y += this.offsetY, Ha.Rx(a, this, b))
        },
        ig: function(a) {
            if (!this.It()) return new Ia;
            var b = a || {},
            a = b.margins || [0, 0, 0, 0],
            c = b.zoom || n,
            b = this.Sa({
                x: a[3],
                y: this.height - a[2]
            },
            c),
            a = this.Sa({
                x: this.width - a[1],
                y: a[0]
            },
            c);
            return new Ia(b, a)
        },
        It: function() {
            return !! this.loaded
        },
        BC: function(a, b) {
            for (var c = this.ha(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.Jj(), j = c = c.xi(); j >= g; j--) {
                var k = this.ha().Gb(j);
                if (a.Lu().lng / k < this.width - f && a.Lu().lat / k < this.height - d) break
            }
            j += e;
            j < g && (j = g);
            j > c && (j = c);
            return j
        },
        Wo: function(a, b) {
            var c = {
                center: this.Ga(),
                zoom: this.U()
            };
            if (!a || !a instanceof Ia && 0 == a.length || a instanceof Ia && a.mg()) return c;
            var d = [];
            a instanceof Ia ? (d.push(a.le()), d.push(a.me())) : d = a.slice(0);
            for (var b = b || {},
            e = [], f = 0, g = d.length; f < g; f++) e.push(this.Pc.Ii(d[f], this.zb));
            d = new Ia;
            for (f = e.length - 1; 0 <= f; f--) d.extend(e[f]);
            if (d.mg()) return c;
            c = d.Ga();
            e = this.BC(d, b);
            b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.ha().Gb(e), b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
            c = this.Pc.eh(c, this.zb);
            return {
                center: c,
                zoom: e
            }
        },
        kk: function(a, b) {
            var c;
            c = a && a.center ? a: this.Wo(a, b);
            var b = b || {},
            d = b.delay || 200;
            if (c.zoom == this.la && b.enableAnimation != o) {
                var e = this;
                setTimeout(function() {
                    e.re(c.center, {
                        duration: 210
                    })
                },
                d)
            } else this.Sd(c.center, c.zoom)
        },
        Me: s("Gc"),
        Ke: function() {
            return this.D.Ja && this.D.Ja.za() ? this.D.Ja: n
        },
        getDistance: function(a, b) {
            if (a && b) {
                var c = 0,
                c = P.Xs(a, b);
                if (c == n || c == aa) c = 0;
                return c
            }
        },
        jt: function() {
            var a = [],
            b = this.ea,
            c = this.Xc;
            if (b) for (var d in b) b[d] instanceof Q && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++) a.push(c[d])
            }
            return a
        },
        ha: s("vb"),
        fq: function() {
            for (var a = this.D.ju; a < B.ll.length; a++) B.ll[a](this);
            this.D.ju = a
        },
        uu: function(a) {
            this.zb = ta.Hj(a);
            this.Zr = ta.vG(this.zb);
            this.vb == ta && this.Pc instanceof Ja && (this.Pc.fs = this.zb)
        },
        setDefaultCursor: function(a) {
            this.F.jb = a;
            this.platform && (this.platform.style.cursor = this.F.jb)
        },
        getDefaultCursor: function() {
            return this.F.jb
        },
        setDraggingCursor: function(a) {
            this.F.kc = a
        },
        getDraggingCursor: function() {
            return this.F.kc
        },
        $g: da(o),
        ko: function(a, b) {
            b ? this.gf[b] || (this.gf[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof Ka && (this.gf[b][a.L] = a, a.sa(this));
            var c = this;
            G.load("hotspot",
            function() {
                c.fq()
            })
        },
        sI: function(a, b) {
            b || (b = "custom");
            this.gf[b][a.L] && delete this.gf[b][a.L]
        },
        di: function(a) {
            a || (a = "custom");
            this.gf[a] = {}
        },
        lq: function() {
            var a = this.$g() ? this.vb.m.nH: this.vb.Jj(),
            b = this.$g() ? this.vb.m.mH: this.vb.xi(),
            c = this.F;
            c.mc = c.NA || a;
            c.kd = c.MA || b;
            c.mc < a && (c.mc = a);
            c.kd > b && (c.kd = b)
        },
        setMinZoom: function(a) {
            a > this.F.kd && (a = this.F.kd);
            this.F.NA = a;
            this.hx()
        },
        setMaxZoom: function(a) {
            a < this.F.mc && (a = this.F.mc);
            this.F.MA = a;
            this.hx()
        },
        hx: function() {
            this.lq();
            var a = this.F;
            this.la < a.mc ? this.Fd(a.mc) : this.la > a.kd && this.Fd(a.kd);
            var b = new L("onzoomspanchange");
            b.mc = a.mc;
            b.kd = a.kd;
            this.dispatchEvent(b)
        },
        jL: s("Or"),
        getKey: function() {
            return la
        },
        lA: function(a) {
            if (a && (a.styleId ? this.Ny(a.styleId) : (this.F.lc = a, this.dispatchEvent(new L("onsetcustomstyles", a)), this.Zy(a.controls), this.$y(this.F.lc.geotableId)), a.style)) a = this.F.rf[a.style] ? this.F.rf[a.style].backColor: this.F.rf.normal.backColor,
            this.Ba().style.backgroundColor = a
        },
        Ny: function(a) {
            var b = this;
            La("style/poi/personalize?method=get&ak=" + la + "&id=" + a,
            function(a) {
                if (a && a.content && 0 < a.content.length) {
                    var a = a.content[0],
                    d = {};
                    a.features && 0 < a.features.length && (d.features = a.features);
                    a.controllers && 0 < a.controllers.length && (d.controls = a.controllers);
                    a.style && "" != a.style && (d.style = a.style);
                    a.geotable_id && "" != a.geotable_id && (d.geotableId = a.geotable_id);
                    setTimeout(function() {
                        b.lA(d)
                    },
                    200)
                }
            })
        },
        Zy: function(a) {
            this.controls || (this.controls = {
                navigationControl: new Ma,
                scaleControl: new Na,
                overviewMapControl: new Oa,
                mapTypeControl: new Pa
            });
            var b = this,
            c;
            for (c in this.controls) b.bA(b.controls[c]);
            a = a || [];
            t.hc.Td(a,
            function(a) {
                b.ho(b.controls[a])
            })
        },
        $y: function(a) {
            a ? this.Fl && this.Fl.ce == a || (this.Gf(this.Fl), this.Fl = new Qa({
                geotableId: a
            }), this.pf(this.Fl)) : this.Gf(this.Fl)
        },
        Dc: function() {
            var a = this.U() >= this.F.Pu && this.ha() == ra && 18 >= this.U(),
            b = o;
            try {
                document.createElement("canvas").getContext("2d"),
                b = i
            } catch(c) {
                b = o
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.Al,
                code: this.Ur
            }
        },
        getPanorama: s("Q"),
        setPanorama: function(a) {
            this.Q = a;
            this.Q.vu(this)
        }
    });
    function va(a, b) {
        if (a) {
            var b = b || {},
            c = "",
            d;
            for (d in b) c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function(a) {
                a && (Ra = i, setTimeout(function() {
                    Sa.src = "images/blank.gif?" + a.src
                },
                50))
            },
            f = function() {
                var a = Ta.shift();
                a && e(a)
            };
            d = (1E8 * Math.random()).toFixed(0);
            Ra ? Ta.push({
                src: "product=jsapi&v=" + B.version + "&t=" + d + "&code=" + a + c
            }) : e({
                src: "product=jsapi&v=" + B.version + "&t=" + d + "&code=" + a + c
            });
            Ua || (t.C(Sa, "load",
            function() {
                Ra = o;
                f()
            }), t.C(Sa, "error",
            function() {
                Ra = o;
                f()
            }), Ua = i)
        }
    }
    var Ra, Ua, Ta = [],
    Sa = new Image;
    va(5E3);
    function Va(a) {
        var b = {
            duration: 1E3,
            gd: 30,
            Pg: 0,
            Xd: Wa.uz,
            Yt: q()
        };
        this.Yd = [];
        if (a) for (var c in a) b[c] = a[c];
        this.m = b;
        if (Ba(b.Pg)) {
            var d = this;
            setTimeout(function() {
                d.start()
            },
            b.Pg)
        } else b.Pg != Xa && this.start()
    }
    var Xa = "INFINITE";
    Va.prototype.start = function() {
        this.an = Ea();
        this.Bq = this.an + this.m.duration;
        Ya(this)
    };
    Va.prototype.add = fa(0);
    function Ya(a) {
        var b = Ea();
        b >= a.Bq ? (Ca(a.m.ta) && a.m.ta(a.m.Xd(1)), Ca(a.m.finish) && a.m.finish(), 0 < a.Yd.length && (b = a.Yd[0], b.Yd = [].concat(a.Yd.slice(1)), b.start())) : (a.zp = a.m.Xd((b - a.an) / a.m.duration), Ca(a.m.ta) && a.m.ta(a.zp), a.Fu || (a.rl = setTimeout(function() {
            Ya(a)
        },
        1E3 / a.m.gd)))
    }
    Va.prototype.stop = function(a) {
        this.Fu = i;
        for (var b = 0; b < this.Yd.length; b++) this.Yd[b].stop(),
        this.Yd[b] = n;
        this.Yd.length = 0;
        this.rl && (clearTimeout(this.rl), this.rl = n);
        this.m.Yt(this.zp);
        a && (this.Bq = this.an, Ya(this))
    };
    Va.prototype.cancel = fa(2);
    var Wa = {
        uz: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        As: function(a) {
            return a * a
        },
        eG: function(a) {
            return Math.pow(a, 3)
        },
        gG: function(a) {
            return - (a * (a - 2))
        },
        fG: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        ly: function(a) {
            return 0.5 > a ? 2 * a * a: -2 * (a - 2) * a - 1
        },
        KK: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        LK: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    Wa["ease-in"] = Wa.As;
    Wa["ease-out"] = Wa.gG;
    var C = {
        ca: "images/",
        as: {
            "\u5317\u4eac": {
                qp: "bj",
                k: new F(116.403874, 39.914889)
            },
            "\u4e0a\u6d77": {
                qp: "sh",
                k: new F(121.487899, 31.249162)
            },
            "\u6df1\u5733": {
                qp: "sz",
                k: new F(114.025974, 22.546054)
            },
            "\u5e7f\u5dde": {
                qp: "gz",
                k: new F(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    t.M.vf ? (t.extend(C, {
        dy: "url(" + C.ca + "ruler.cur),crosshair",
        jb: "-moz-grab",
        kc: "-moz-grabbing"
    }), t.platform.mz && (C.fontFamily = "arial,simsun,sans-serif")) : t.M.Lx || t.M.DI ? t.extend(C, {
        dy: "url(" + C.ca + "ruler.cur) 2 6,crosshair",
        jb: "url(" + C.ca + "openhand.cur) 8 8,default",
        kc: "url(" + C.ca + "closedhand.cur) 8 8,move"
    }) : t.extend(C, {
        dy: "url(" + C.ca + "ruler.cur),crosshair",
        jb: "url(" + C.ca + "openhand.cur),default",
        kc: "url(" + C.ca + "closedhand.cur),move"
    });
    function Za(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function $a(a) {
        0 < t.M.S ? a.unselectable = "on": a.style.MozUserSelect = "none"
    }
    function ab(a) {
        return a && a.parentNode && 11 != a.parentNode.nodeType
    }
    function bb(a, b) {
        t.z.Et(a, "beforeEnd", b);
        return a.lastChild
    }
    function cb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent;) b.left += a.offsetLeft,
        b.top += a.offsetTop,
        a = a.offsetParent;
        return b
    }
    function A(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = i
    }
    function db(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = o;
        return o
    }
    function ka(a) {
        A(a);
        return db(a)
    }
    function eb() {
        var a = document.documentElement,
        b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function fb(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function gb(a, b) {
        var c = [],
        b = b ||
        function(a) {
            return a
        },
        d;
        for (d in a) c.push(d + "=" + b(a[d]));
        return c.join("&")
    }
    function J(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return t.z.su(d, b || {})
    }
    function Aa(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, n)
    }
    function Ca(a) {
        return "function" == typeof a
    }
    function Ba(a) {
        return "number" == typeof a
    }
    function Da(a) {
        return "string" == typeof a
    }
    function hb(a) {
        return "undefined" != typeof a
    }
    function jb(a) {
        return "object" == typeof a
    }
    var kb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function lb(a) {
        var b = "",
        c, d, e = "",
        f, g = "",
        j = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = kb.indexOf(a.charAt(j++)),
        d = kb.indexOf(a.charAt(j++)),
        f = kb.indexOf(a.charAt(j++)),
        g = kb.indexOf(a.charAt(j++)),
        c = c << 2 | d >> 4,
        d = (d & 15) << 4 | f >> 2,
        e = (f & 3) << 6 | g,
        b += String.fromCharCode(c),
        64 != f && (b += String.fromCharCode(d)),
        64 != g && (b += String.fromCharCode(e));
        while (j < a.length);
        return b
    }
    var L = t.lang.Sp;
    function H() {
        return ! (!t.platform.EH && !t.platform.DH && !t.platform.Tj)
    }
    function za() {
        return ! (!t.platform.mz && !t.platform.FH && !t.platform.LH)
    }
    function Ea() {
        return (new Date).getTime()
    }
    function mb() {
        var a = document.body.appendChild(J("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return o;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" == typeof b.adj: i;
        a.parentNode.removeChild(a);
        return b
    }
    function nb() {
        return !! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function ob() {
        return !! J("canvas").getContext
    };
    function La(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            B._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete B._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }
        var d = J("script", {
            src: a,
            type: "text/javascript",
            charset: "utf-8"
        });
        d.addEventListener ? d.addEventListener("load",
        function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        },
        o) : d.attachEvent && d.attachEvent("onreadystatechange",
        function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = n
        },
        1)
    };
    var pb = {
        map: "ztpf4n",
        common: "wb4byj",
        tile: "lzrp1p",
        marker: "yauso4",
        markeranimation: "kyonfe",
        poly: "5fhgev",
        draw: "2q1d2m",
        drawbysvg: "nuengq",
        drawbyvml: "dnr5wd",
        drawbycanvas: "li5qjt",
        infowindow: "gpgmcw",
        oppc: "b3fezq",
        opmb: "dgztk1",
        menu: "c13nuf",
        control: "txfbs5",
        navictrl: "hqd2rk",
        geoctrl: "n3xqdm",
        copyrightctrl: "uz2g2k",
        scommon: "wqnvxz",
        local: "hziyjb",
        route: "lh44ta",
        othersearch: "l3uwpr",
        mapclick: "jts1gt",
        buslinesearch: "vffp41",
        hotspot: "xuknk1",
        autocomplete: "e52uy4",
        coordtrans: "gdhwbl",
        coordtransutils: "jdgni0",
        clayer: "qbnjz5",
        panorama: "ry54t2",
        mapclick: "jts1gt",
        vector: "uk1atd"
    };
    t.Jp = function() {
        function a(a) {
            return d && !!c[b + a + "_" + pb[a]]
        }
        var b = "BMap_",
        c = window.localStorage,
        d = "localStorage" in window && c !== n && c !== aa;
        return {
            IH: d,
            set: function(a, f) {
                if (d) {
                    for (var g = b + a + "_",
                    j = c.length,
                    k; j--;) k = c.key(j),
                    -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + pb[a], f)
                    } catch(l) {
                        c.clear()
                    }
                }
            },
            get: function(e) {
                return d && a(e) ? c.getItem(b + e + "_" + pb[e]) : o
            },
            Jx: a
        }
    } ();
    function G() {}
    t.object.extend(G, {
        rg: {
            av: -1,
            nB: 0,
            tk: 1
        },
        Ay: function() {
            var a = "drawbysvg";
            nb() ? a = "drawbysvg": mb() ? a = "drawbyvml": ob() && (a = "drawbycanvas");
            return {
                control: [],
                marker: [],
                poly: ["marker", a],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                clayer: ["tile"],
                panorama: ["marker"]
            }
        },
        HL: {},
        Vu: {
            vB: "js/",
            zE: 5E3
        },
        ls: o,
        rc: {
            Gh: {},
            dj: [],
            Vn: []
        },
        load: function(a, b, c) {
            var d = this.El(a);//�Ƿ����
            if (d.vc == this.rg.tk) c && b();
            else {
                if (d.vc == this.rg.av) {
                    this.Px(a);
                    this.$z(a);
                    var e = this;
                    e.ls == o && (e.ls = i, setTimeout(function() {
                        for (var a = [], b = 0, c = e.rc.dj.length; b < c; b++) {
                            var d = e.rc.dj[b],
                            l = "";
                            ha.Jp.Jx(d) ? l = ha.Jp.get(d) : (l = "", a.push(d + "_" + pb[d]));
                            e.rc.Vn.push({
                                Gz: d,
                                St: l
                            })
                        }
                        e.ls = o;
                        e.rc.dj.length = 0;
						var showvalues = e.Vu.vB + "&mod=" + a.join(",");
						var showvalues_la = "";
						var localurl = "js/";
						//=="http://api0.map.bdimg.com/getmodules?v=2.0&mod=marker_yauso4,panorama_ry54t2,map_ztpf4n,scommon_wqnvxz,mapclick_jts1gt,oppc_b3fezq,navictrl_hqd2rk,tile_lzrp1p,control_txfbs5,draw_2q1d2m,drawbysvg_nuengq,poly_5fhgev,othersearch_l3uwpr"
						//=="http://api0.map.bdimg.com/getmodules?v=2.0&mod=copyrightctrl_uz2g2k"
						//=="http://api0.map.bdimg.com/getmodules?v=2.0&mod=hotspot_xuknk1"
						//���Ե������,����������дJS������
						//if(showvalues.match("http://api0\.map\.bdimg\.com/getmodules\?.*&mod=.*[.*,]+.*")){
						//	showvalues_la = localurl+"js/getmodules1.js";
						//}else if(showvalues.match("http://api0\.map\.bdimg\.com/getmodules\?.*&mod=copyrightctrl.*")){
						//	showvalues_la = localurl+"js/getmodules2.js";
						//}else if(showvalues.match("http://api0\.map\.bdimg\.com/getmodules\?.*&mod=hotspot.*")){
						//	showvalues_la = localurl+"js/getmodules3.js";
						//}
						//a = new Array();
						if(0 == a.length){
							e.oy();
						}else{
							//La(showvalues);
							for(var ai=0;ai<a.length;ai++){
								var avalue = a[ai];
								var key = avalue.substring(0,avalue.indexOf("_"));
								La(localurl+key+"_load.js");
							}
						}
                    },
                    1));
                    d.vc = this.rg.nB
                }
                d.bn.push(b)
            }
        },
        Px: function(a) {
            if (a && this.Ay()[a]) for (var a = this.Ay()[a], b = 0; b < a.length; b++) this.Px(a[b]),
            this.rc.Gh[a[b]] || this.$z(a[b])
        },
        $z: function(a) {
            for (var b = 0; b < this.rc.dj.length; b++) if (this.rc.dj[b] == a) return;
            this.rc.dj.push(a)
        },
        CI: function(a, b) {
            var c = this.El(a);
            try {
                eval(b)
            } catch(d) {
                return
            }
            c.vc = this.rg.tk;
            for (var e = 0,
            f = c.bn.length; e < f; e++) c.bn[e]();
            c.bn.length = 0
        },
        Jx: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.rc.Gh[a].vc != c.rg.tk ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            },
            c.Vu.zE)
        },
        El: function(a) {
            this.rc.Gh[a] || (this.rc.Gh[a] = {},
            this.rc.Gh[a].vc = this.rg.av, this.rc.Gh[a].bn = []);
            return this.rc.Gh[a]
        },
        remove: function(a) {
            delete this.El(a)
        },
        gF: function(a, b) {
            for (var c = this.rc.Vn,
            d = i,
            e = 0,
            f = c.length; e < f; e++)"" == c[e].St && (c[e].Gz == a ? c[e].St = b: d = o);
            d && this.oy()
        },
        oy: function() {
            for (var a = this.rc.Vn,
            b = 0,
            c = a.length; b < c; b++) this.CI(a[b].Gz, a[b].St);
            this.rc.Vn.length = 0
        }
    });
    function O(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    O.prototype.pb = function(a) {
        return a && a.x == this.x && a.y == this.y
    };
    function K(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    K.prototype.pb = function(a) {
        return a && this.width == a.width && this.height == a.height
    };
    function Ka(a, b) {
        a && (this.Ae = a, this.L = "spot" + Ka.L++, b = b || {},
        this.Yf = b.text || "", this.Mn = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.ix = b.userData || n, this.jf = b.minZoom || n, this.Pd = b.maxZoom || n)
    }
    Ka.L = 0;
    t.extend(Ka.prototype, {
        sa: function(a) {
            this.jf == n && (this.jf = a.F.mc);
            this.Pd == n && (this.Pd = a.F.kd)
        },
        ga: function(a) {
            a instanceof F && (this.Ae = a)
        },
        ba: s("Ae"),
        Dm: ba("Yf"),
        ut: s("Yf"),
        setUserData: ba("ix"),
        getUserData: s("ix")
    });
    function R() {
        this.A = n;
        this.tb = "control";
        this.sb = this.Dx = i
    }
    t.lang.ia(R, t.lang.ua, "Control");
    t.extend(R.prototype, {
        initialize: function(a) {
            this.A = a;
            if (this.B) return a.xa.appendChild(this.B),
            this.B
        },
        Md: function(a) { ! this.B && (this.initialize && Ca(this.initialize)) && (this.B = this.initialize(a));
            this.m = this.m || {
                Te: o
            };
            this.Er();
            this.Qn();
            this.B && (this.B.bl = this)
        },
        Er: function() {
            var a = this.B;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.hq || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Te || t.z.Ya(a, "BMap_noprint");
                H() || t.C(a, "contextmenu", ka)
            }
        },
        remove: function() {
            this.A = n;
            this.B && (this.B.parentNode && this.B.parentNode.removeChild(this.B), this.B = this.B.bl = n)
        },
        Za: function() {
            this.B = bb(this.A.xa, "<div unselectable='on'></div>");
            this.sb == o && t.z.H(this.B);
            return this.B
        },
        Qn: function() {
            this.Pb(this.m.anchor)
        },
        Pb: function(a) {
            if (this.wK || !Ba(a) || isNaN(a) || a < qb || 3 < a) a = this.defaultAnchor;
            this.m = this.m || {
                Te: o
            };
            this.m.fa = this.m.fa || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.B) {
                var c = this.B,
                d = this.m.fa.width,
                e = this.m.fa.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case qb:
                    c.style.top = e + "px";
                    c.style.left = d + "px";
                    break;
                case rb:
                    c.style.top = e + "px";
                    c.style.right = d + "px";
                    break;
                case sb:
                    c.style.bottom = e + "px";
                    c.style.left = d + "px";
                    break;
                case 3:
                    c.style.bottom = e + "px",
                    c.style.right = d + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                t.z.Ob(this.B, "anchor" + c[b]);
                t.z.Ya(this.B, "anchor" + c[a])
            }
        },
        Qs: function() {
            return this.m.anchor
        },
        Rc: function(a) {
            a instanceof K && (this.m = this.m || {
                Te: o
            },
            this.m.fa = new K(a.width, a.height), this.B && this.Pb(this.m.anchor))
        },
        Le: function() {
            return this.m.fa
        },
        hd: s("B"),
        show: function() {
            this.sb != i && (this.sb = i, this.B && t.z.show(this.B))
        },
        H: function() {
            this.sb != o && (this.sb = o, this.B && t.z.H(this.B))
        },
        isPrintable: function() {
            return !! this.m.Te
        },
        ng: function() {
            return ! this.B && !this.A ? o: !!this.sb
        }
    });
    var qb = 0,
    rb = 1,
    sb = 2;
    function Ma(a) {
        R.call(this);
        a = a || {};
        this.m = {
            Te: o,
            Au: a.showZoomInfo || i,
            anchor: a.anchor,
            fa: a.offset,
            type: a.type
        };
        this.defaultAnchor = H() ? 3 : qb;
        this.defaultOffset = new K(10, 10);
        this.Pb(a.anchor);
        this.Wi(a.type);
        this.Jd()
    }
    t.lang.ia(Ma, R, "NavigationControl");
    t.extend(Ma.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Wi: function(a) {
            this.m.type = Ba(a) && 0 <= a && 3 >= a ? a: 0
        },
        Pj: function() {
            return this.m.type
        },
        Jd: function() {
            var a = this;
            G.load("navictrl",
            function() {
                a.Id()
            })
        }
    });
    function tb(a) {
        R.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor,
            fa: a.offset,
            gJ: a.showAddressBar,
            my: a.enableAutoLocation,
            zz: a.locationIcon
        };
        this.defaultAnchor = sb;
        this.defaultOffset = new K(0, 4);
        this.Jd()
    }
    t.lang.ia(tb, R, "GeolocationControl");
    t.extend(tb.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Jd: function() {
            var a = this;
            G.load("geoctrl",
            function() {
                a.Id()
            })
        },
        getAddressComponent: function() {
            return this.vx || n
        },
        location: function() {
            this.m.my = i
        }
    });
    function ub(a) {
        R.call(this);
        a = a || {};
        this.m = {
            Te: o,
            anchor: a.anchor,
            fa: a.offset
        };
        this.eb = [];
        this.defaultAnchor = sb;
        this.defaultOffset = new K(5, 2);
        this.Pb(a.anchor);
        this.Dx = o;
        this.Jd()
    }
    t.lang.ia(ub, R, "CopyrightControl");
    t.object.extend(ub.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        io: function(a) {
            if (a && Ba(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: n,
                    content: ""
                },
                c;
                for (c in a) b[c] = a[c];
                if (a = this.ui(a.id)) for (var d in b) a[d] = b[d];
                else this.eb.push(b)
            }
        },
        ui: function(a) {
            for (var b = 0,
            c = this.eb.length; b < c; b++) if (this.eb[b].id == a) return this.eb[b]
        },
        Ws: s("eb"),
        ku: function(a) {
            for (var b = 0,
            c = this.eb.length; b < c; b++) this.eb[b].id == a && (r = this.eb.splice(b, 1), b--, c = this.eb.length)
        },
        Jd: function() {
            var a = this;
            G.load("copyrightctrl",
            function() {
                a.Id()
            })
        }
    });
    function Oa(a) {
        R.call(this);
        a = a || {};
        this.m = {
            Te: o,
            size: a.size || new K(150, 150),
            padding: 5,
            za: a.isOpen === i ? i: o,
            RJ: 4,
            fa: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new K(0, 0);
        this.Gk = this.Hk = 13;
        this.Pb(a.anchor);
        this.Cc(this.m.size);
        this.Jd()
    }
    t.lang.ia(Oa, R, "OverviewMapControl");
    t.extend(Oa.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Pb: function(a) {
            R.prototype.Pb.call(this, a)
        },
        Hc: function() {
            this.Hc.rj = i;
            this.m.za = !this.m.za;
            this.B || (this.Hc.rj = o)
        },
        Cc: function(a) {
            a instanceof K || (a = new K(150, 150));
            a.width = 0 < a.width ? a.width: 150;
            a.height = 0 < a.height ? a.height: 150;
            this.m.size = a
        },
        Bb: function() {
            return this.m.size
        },
        za: function() {
            return this.m.za
        },
        Jd: function() {
            var a = this;
            G.load("control",
            function() {
                a.Id()
            })
        }
    });
    function Na(a) {
        R.call(this);
        a = a || {};
        this.m = {
            Te: o,
            color: "black",
            Qb: "metric",
            fa: a.offset
        };
        this.defaultAnchor = sb;
        this.defaultOffset = new K(81, 18);
        this.Pb(a.anchor);
        this.mf = {
            metric: {
                name: "metric",
                Qx: 1,
                Yy: 1E3,
                IA: "\u7c73",
                JA: "\u516c\u91cc"
            },
            us: {
                name: "us",
                Qx: 3.2808,
                Yy: 5280,
                IA: "\u82f1\u5c3a",
                JA: "\u82f1\u91cc"
            }
        };
        this.mf[this.m.Qb] || (this.m.Qb = "metric");
        this.Ow = n;
        this.xw = {};
        this.Jd()
    }
    t.lang.ia(Na, R, "ScaleControl");
    t.object.extend(Na.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        tu: function(a) {
            this.m.color = a + ""
        },
        UK: function() {
            return this.m.color
        },
        zu: function(a) {
            this.m.Qb = this.mf[a] && this.mf[a].name || this.m.Qb
        },
        fH: function() {
            return this.m.Qb
        },
        Jd: function() {
            var a = this;
            G.load("control",
            function() {
                a.Id()
            })
        }
    });
    var wb = 0;
    function Pa(a) {
        R.call(this);
        a = a || {};
        this.defaultAnchor = rb;
        this.defaultOffset = new K(10, 10);
        this.m = {
            Te: o,
            Pe: [ra, wa, xa, ta],
            type: a.type || wb,
            fa: a.offset || this.defaultOffset,
            RK: i
        };
        this.Pb(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.Pe = a.mapTypes.slice(0));
        this.Jd()
    }
    t.lang.ia(Pa, R, "MapTypeControl");
    t.object.extend(Pa.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Jd: function() {
            var a = this;
            G.load("control",
            function() {
                a.Id()
            })
        }
    });
    function xb(a) {
        R.call(this);
        a = a || {};
        this.m = {
            Te: o,
            fa: a.offset,
            anchor: a.anchor
        };
        this.Sf = o;
        this.Xn = n;
        this.Ew = new yb({
            Fj: "api"
        });
        this.Fw = new zb(n, {
            Fj: "api"
        });
        this.defaultAnchor = rb;
        this.defaultOffset = new K(10, 10);
        this.Pb(a.anchor);
        this.Jd();
        va(5042)
    }
    t.lang.ia(xb, R, "PanoramaControl");
    t.extend(xb.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Jd: function() {
            var a = this;
            G.load("control",
            function() {
                a.Id()
            })
        }
    });
    function Ab(a) {
        t.lang.ua.call(this);
        this.m = {
            xa: n,
            cursor: "default"
        };
        this.m = t.extend(this.m, a);
        this.tb = "contextmenu";
        this.A = n;
        this.da = [];
        this.Qd = [];
        this.Yc = [];
        this.Ao = this.Dl = n;
        this.hf = o;
        var b = this;
        G.load("menu",
        function() {
            b.Tb()
        })
    }
    t.lang.ia(Ab, t.lang.ua, "ContextMenu");
    t.object.extend(Ab.prototype, {
        sa: function(a, b) {
            this.A = a;
            this.Kh = b || n
        },
        remove: function() {
            this.A = this.Kh = n
        },
        lo: function(a) {
            if (a && !("menuitem" != a.tb || "" == a.Yf || 0 >= a.BE)) {
                for (var b = 0,
                c = this.da.length; b < c; b++) if (this.da[b] === a) return;
                this.da.push(a);
                this.Qd.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.tb) {
                for (var b = 0,
                c = this.da.length; b < c; b++) this.da[b] === a && (this.da[b].remove(), this.da.splice(b, 1), c--);
                b = 0;
                for (c = this.Qd.length; b < c; b++) this.Qd[b] === a && (this.Qd[b].remove(), this.Qd.splice(b, 1), c--)
            }
        },
        Qr: function() {
            this.da.push({
                tb: "divider",
                vg: this.Yc.length
            });
            this.Yc.push({
                z: n
            })
        },
        lu: function(a) {
            if (this.Yc[a]) {
                for (var b = 0,
                c = this.da.length; b < c; b++) this.da[b] && ("divider" == this.da[b].tb && this.da[b].vg == a) && (this.da.splice(b, 1), c--),
                this.da[b] && ("divider" == this.da[b].tb && this.da[b].vg > a) && this.da[b].vg--;
                this.Yc.splice(a, 1)
            }
        },
        hd: s("B"),
        show: function() {
            this.hf != i && (this.hf = i)
        },
        H: function() {
            this.hf != o && (this.hf = o)
        },
        NI: function(a) {
            a && (this.m.cursor = a)
        },
        getItem: function(a) {
            return this.Qd[a]
        }
    });
    function Bb(a, b, c) {
        if (a && Ca(b)) {
            t.lang.ua.call(this);
            this.m = {
                width: 100,
                id: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width: 100;
            this.m.id = c.id ? c.id: "";
            this.Yf = a + "";
            this.$e = b;
            this.A = n;
            this.tb = "menuitem";
            this.B = this.bf = n;
            this.ef = i;
            var d = this;
            G.load("menu",
            function() {
                d.Tb()
            })
        }
    }
    t.lang.ia(Bb, t.lang.ua, "MenuItem");
    t.object.extend(Bb.prototype, {
        sa: function(a, b) {
            this.A = a;
            this.bf = b
        },
        remove: function() {
            this.A = this.bf = n
        },
        Dm: function(a) {
            a && (this.Yf = a + "")
        },
        hd: s("B"),
        enable: function() {
            this.ef = i
        },
        disable: function() {
            this.ef = o
        }
    });
    function Ia(a, b) {
        a && !b && (b = a);
        this.ad = this.$c = this.dd = this.cd = this.Sh = this.Jh = n;
        a && (this.Sh = new F(a.lng, a.lat), this.Jh = new F(b.lng, b.lat), this.dd = a.lng, this.cd = a.lat, this.ad = b.lng, this.$c = b.lat)
    }
    t.object.extend(Ia.prototype, {
        mg: function() {
            return ! this.Sh || !this.Jh
        },
        pb: function(a) {
            return ! (a instanceof Ia) || this.mg() ? o: this.me().pb(a.me()) && this.le().pb(a.le())
        },
        me: s("Sh"),
        le: s("Jh"),
        sF: function(a) {
            return ! (a instanceof Ia) || this.mg() || a.mg() ? o: a.dd > this.dd && a.ad < this.ad && a.cd > this.cd && a.$c < this.$c
        },
        Ga: function() {
            return this.mg() ? n: new F((this.dd + this.ad) / 2, (this.cd + this.$c) / 2)
        },
        az: function(a) {
            if (! (a instanceof Ia) || Math.max(a.dd, a.ad) < Math.min(this.dd, this.ad) || Math.min(a.dd, a.ad) > Math.max(this.dd, this.ad) || Math.max(a.cd, a.$c) < Math.min(this.cd, this.$c) || Math.min(a.cd, a.$c) > Math.max(this.cd, this.$c)) return n;
            var b = Math.max(this.dd, a.dd),
            c = Math.min(this.ad, a.ad),
            d = Math.max(this.cd, a.cd),
            a = Math.min(this.$c, a.$c);
            return new Ia(new F(b, d), new F(c, a))
        },
        tF: function(a) {
            return ! (a instanceof F) || this.mg() ? o: a.lng >= this.dd && a.lng <= this.ad && a.lat >= this.cd && a.lat <= this.$c
        },
        extend: function(a) {
            if (a instanceof F) {
                var b = a.lng,
                a = a.lat;
                this.Sh || (this.Sh = new F(0, 0));
                this.Jh || (this.Jh = new F(0, 0));
                if (!this.dd || this.dd > b) this.Sh.lng = this.dd = b;
                if (!this.ad || this.ad < b) this.Jh.lng = this.ad = b;
                if (!this.cd || this.cd > a) this.Sh.lat = this.cd = a;
                if (!this.$c || this.$c < a) this.Jh.lat = this.$c = a
            }
        },
        Lu: function() {
            return this.mg() ? new F(0, 0) : new F(Math.abs(this.ad - this.dd), Math.abs(this.$c - this.cd))
        }
    });
    function F(a, b) {
        isNaN(a) && (a = lb(a), a = isNaN(a) ? 0 : a);
        Da(a) && (a = parseFloat(a));
        isNaN(b) && (b = lb(b), b = isNaN(b) ? 0 : b);
        Da(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    F.cz = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    F.prototype.pb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };
    function Cb() {}
    Cb.prototype.mm = function() {
        throw "lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0";
    };
    Cb.prototype.$j = function() {
        throw "pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0";
    };
    function Db() {};
    var Ha = {
        Sx: function(a, b, c) {
            G.load("coordtransutils",
            function() {
                Ha.UE(a, b, c)
            },
            i)
        },
        Rx: function(a, b, c) {
            G.load("coordtransutils",
            function() {
                Ha.TE(a, b, c)
            },
            i)
        }
    };
    function P() {}
    P.prototype = new Cb;
    t.extend(P, {
        YA: 6370996.81,
        dv: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Xm: [75, 60, 45, 30, 15, 0],
        aB: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [ - 7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [ - 3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [ - 1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        bv: [[ - 0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [ - 3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [ - 3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        WK: function(a, b) {
            if (!a || !b) return 0;
            var c, d, a = this.ib(a);
            if (!a) return 0;
            c = this.th(a.lng);
            d = this.th(a.lat);
            b = this.ib(b);
            return ! b ? 0 : this.yd(c, this.th(b.lng), d, this.th(b.lat))
        },
        Xs: function(a, b) {
            if (!a || !b) return 0;
            a.lng = this.ft(a.lng, -180, 180);
            a.lat = this.lt(a.lat, -74, 74);
            b.lng = this.ft(b.lng, -180, 180);
            b.lat = this.lt(b.lat, -74, 74);
            return this.yd(this.th(a.lng), this.th(b.lng), this.th(a.lat), this.th(b.lat))
        },
        ib: function(a) {
            var b, c;
            b = new F(Math.abs(a.lng), Math.abs(a.lat));
            for (var d = 0; d < this.dv.length; d++) if (b.lat >= this.dv[d]) {
                c = this.aB[d];
                break
            }
            a = this.Tx(a, c);
            return a = new F(a.lng.toFixed(6), a.lat.toFixed(6))
        },
        ob: function(a) {
            var b, c;
            a.lng = this.ft(a.lng, -180, 180);
            a.lat = this.lt(a.lat, -74, 74);
            b = new F(a.lng, a.lat);
            for (var d = 0; d < this.Xm.length; d++) if (b.lat >= this.Xm[d]) {
                c = this.bv[d];
                break
            }
            if (!c) for (d = this.Xm.length - 1; 0 <= d; d--) if (b.lat <= -this.Xm[d]) {
                c = this.bv[d];
                break
            }
            a = this.Tx(a, c);
            return a = new F(a.lng.toFixed(2), a.lat.toFixed(2))
        },
        Tx: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                d = Math.abs(a.lat) / b[9],
                d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                c = c * (0 > a.lng ? -1 : 1),
                d = d * (0 > a.lat ? -1 : 1);
                return new F(c, d)
            }
        },
        yd: function(a, b, c, d) {
            return this.YA * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
        },
        th: function(a) {
            return Math.PI * a / 180
        },
        XL: function(a) {
            return 180 * a / Math.PI
        },
        lt: function(a, b, c) {
            b != n && (a = Math.max(a, b));
            c != n && (a = Math.min(a, c));
            return a
        },
        ft: function(a, b, c) {
            for (; a > c;) a -= c - b;
            for (; a < b;) a += c - b;
            return a
        }
    });
    t.extend(P.prototype, {
        Ii: function(a) {
            return P.ob(a)
        },
        mm: function(a) {
            a = P.ob(a);
            return new O(a.lng, a.lat)
        },
        eh: function(a) {
            return P.ib(a)
        },
        $j: function(a) {
            a = new F(a.x, a.y);
            return P.ib(a)
        },
        kb: function(a, b, c, d, e) {
            if (a) return a = this.Ii(a, e),
            b = this.Gb(b),
            new O(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
        },
        Sa: function(a, b, c, d, e) {
            if (a) return b = this.Gb(b),
            this.eh(new F(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
        },
        Gb: function(a) {
            return Math.pow(2, 18 - a)
        }
    });
    function Ja() {
        this.fs = "bj"
    }
    Ja.prototype = new P;
    t.extend(Ja.prototype, {
        Ii: function(a, b) {
            return this.LB(b, P.ob(a))
        },
        eh: function(a, b) {
            return P.ib(this.MB(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this,
            d = P.ob(a);
            G.load("coordtrans",
            function() {
                var a = Db.it(c.fs || "bj", d),
                a = new O(a.x, a.y);
                b && b(a)
            },
            i)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this,
            d = new F(a.x, a.y);
            G.load("coordtrans",
            function() {
                var a = Db.ht(c.fs || "bj", d),
                a = new F(a.lng, a.lat),
                a = P.ib(a);
                b && b(a)
            },
            i)
        },
        LB: function(a, b) {
            if (G.El("coordtrans").vc == G.rg.tk) {
                var c = Db.it(a || "bj", b);
                return new F(c.x, c.y)
            }
            G.load("coordtrans", q());
            return new F(0, 0)
        },
        MB: function(a, b) {
            if (G.El("coordtrans").vc == G.rg.tk) {
                var c = Db.ht(a || "bj", b);
                return new F(c.lng, c.lat)
            }
            G.load("coordtrans", q());
            return new F(0, 0)
        },
        Gb: function(a) {
            return Math.pow(2, 20 - a)
        }
    });
    function Eb() {
        this.tb = "overlay"
    }
    t.lang.ia(Eb, t.lang.ua, "Overlay");
    Eb.bm = function(a) {
        a *= 1;
        return ! a ? 0 : -1E5 * a << 1
    };
    t.extend(Eb.prototype, {
        Md: function(a) {
            if (!this.J && Ca(this.initialize) && (this.J = this.initialize(a))) this.J.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            throw "initialize\u65b9\u6cd5\u672a\u5b9e\u73b0";
        },
        draw: function() {
            throw "draw\u65b9\u6cd5\u672a\u5b9e\u73b0";
        },
        remove: function() {
            this.J && this.J.parentNode && this.J.parentNode.removeChild(this.J);
            this.J = n;
            this.dispatchEvent(new L("onremove"))
        },
        H: function() {
            this.J && t.z.H(this.J)
        },
        show: function() {
            this.J && t.z.show(this.J)
        },
        ng: function() {
            return ! this.J || "none" == this.J.style.display || "hidden" == this.J.style.visibility ? o: i
        }
    });
    B.md(function(a) {
        function b(a, b) {
            var c = J("div"),
            g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.D;
        c.Ed = a.Ed = b(a.platform, 200);
        a.Gc.Os = b(c.Ed, 800);
        a.Gc.Qt = b(c.Ed, 700);
        a.Gc.uy = b(c.Ed, 600);
        a.Gc.qz = b(c.Ed, 500);
        a.Gc.Cz = b(c.Ed, 400);
        a.Gc.Dz = b(c.Ed, 300);
        a.Gc.NJ = b(c.Ed, 201);
        a.Gc.fp = b(c.Ed, 200)
    });
    function Q() {
        t.lang.ua.call(this);
        Eb.call(this);
        this.map = n;
        this.sb = i;
        this.ub = n;
        this.Iv = 0
    }
    t.lang.ia(Q, Eb, "OverlayInternal");
    t.extend(Q.prototype, {
        initialize: function(a) {
            this.map = a;
            t.lang.ua.call(this, this.L);
            return n
        },
        gt: s("map"),
        draw: q(),
        remove: function() {
            this.map = n;
            t.lang.Co(this.L);
            Eb.prototype.remove.call(this)
        },
        H: function() {
            this.sb != o && (this.sb = o)
        },
        show: function() {
            this.sb != i && (this.sb = i)
        },
        ng: function() {
            return ! this.J ? o: !!this.sb
        },
        Ba: s("J"),
        hA: function(a) {
            var a = a || {},
            b;
            for (b in a) this.w[b] = a[b]
        },
        Fp: ba("zIndex"),
        Sg: function() {
            this.w.Sg = i
        },
        MF: function() {
            this.w.Sg = o
        },
        zj: ba("mj"),
        ck: function() {
            this.mj = n
        }
    });
    function Fb() {
        this.map = n;
        this.ea = {};
        this.Xc = []
    }
    B.md(function(a) {
        var b = new Fb;
        b.map = a;
        a.ea = b.ea;
        a.Xc = b.Xc;
        a.addEventListener("load",
        function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend",
        function(a) {
            b.draw(a)
        });
        t.M.S && 8 > t.M.S || "BackCompat" == document.compatMode ? a.addEventListener("zoomend",
        function(a) {
            setTimeout(function() {
                b.draw(a)
            },
            20)
        }) : a.addEventListener("zoomend",
        function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange",
        function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay",
        function(a) {
            a = a.target;
            if (a instanceof Q) b.ea[a.L] || (b.ea[a.L] = a);
            else {
                for (var d = o,
                e = 0,
                f = b.Xc.length; e < f; e++) if (b.Xc[e] === a) {
                    d = i;
                    break
                }
                d || b.Xc.push(a)
            }
        });
        a.addEventListener("removeoverlay",
        function(a) {
            a = a.target;
            if (a instanceof Q) delete b.ea[a.L];
            else for (var d = 0,
            e = b.Xc.length; d < e; d++) if (b.Xc[d] === a) {
                b.Xc.splice(d, 1);
                break
            }
        });
        a.addEventListener("clearoverlays",
        function() {
            this.Xb();
            for (var a in b.ea) b.ea[a].w.Sg && (b.ea[a].remove(), delete b.ea[a]);
            a = 0;
            for (var d = b.Xc.length; a < d; a++) b.Xc[a].Sg != o && (b.Xc[a].remove(), b.Xc[a] = n, b.Xc.splice(a, 1), a--, d--)
        });
        a.addEventListener("infowindowopen",
        function() {
            var a = this.ub;
            a && (t.z.H(a.Db), t.z.H(a.lb))
        });
        a.addEventListener("movestart",
        function() {
            this.Ke() && this.Ke().Sw()
        });
        a.addEventListener("moveend",
        function() {
            this.Ke() && this.Ke().Mw()
        })
    });
    Fb.prototype.draw = function() {
        for (var a in this.ea) this.ea[a].draw();
        t.hc.Td(this.Xc,
        function(a) {
            a.draw()
        });
        this.map.D.Ja && this.map.D.Ja.ga();
        B.Vm && B.Vm.Tl(this.map).wu()
    };
    function Gb(a) {
        Q.call(this);
        a = a || {};
        this.w = {
            strokeColor: a.strokeColor || "#3a6bdb",
            Ve: a.strokeWeight || 5,
            ue: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            Sg: a.enableMassClear === o ? o: i,
            Ug: n,
            zi: n,
            Ud: a.enableEditing === i ? i: o,
            Jz: 15,
            JJ: o,
            sd: a.enableClicking === o ? o: i
        };
        0 >= this.w.Ve && (this.w.Ve = 5);
        if (0 > this.w.ue || 1 < this.w.ue) this.w.ue = 0.65;
        if (0 > this.w.qi || 1 < this.w.qi) this.w.qi = 0.65;
        "solid" != this.w.strokeStyle && "dashed" != this.w.strokeStyle && (this.w.strokeStyle = "solid");
        this.J = n;
        this.gq = new Ia(0, 0);
        this.qd = [];
        this.mb = [];
        this.pa = {}
    }
    t.lang.ia(Gb, Q, "Graph");
    Gb.Po = function(a) {
        var b = [];
        if (!a) return b;
        Da(a) && t.hc.Td(a.split(";"),
        function(a) {
            a = a.split(",");
            b.push(new F(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    Gb.bu = [0.09, 0.005, 1.0E-4, 1.0E-5];
    t.extend(Gb.prototype, {
        initialize: function(a) {
            this.map = a;
            return n
        },
        draw: q(),
        pl: function(a) {
            this.qd.length = 0;
            this.W = Gb.Po(a).slice(0);
            this.Ze()
        },
        Sc: function(a) {
            this.pl(a)
        },
        Ze: function() {
            if (this.W) {
                var a = this;
                a.gq = new Ia;
                t.hc.Td(this.W,
                function(b) {
                    a.gq.extend(b)
                })
            }
        },
        Kc: s("W"),
        Vi: function(a, b) {
            b && this.W[a] && (this.qd.length = 0, this.W[a] = new F(b.lng, b.lat), this.Ze())
        },
        setStrokeColor: function(a) {
            this.w.strokeColor = a
        },
        WG: function() {
            return this.w.strokeColor
        },
        Cm: function(a) {
            0 < a && (this.w.Ve = a)
        },
        My: function() {
            return this.w.Ve
        },
        Am: function(a) {
            a == aa || (1 < a || 0 > a) || (this.w.ue = a)
        },
        XG: function() {
            return this.w.ue
        },
        Ap: function(a) {
            1 < a || 0 > a || (this.w.qi = a)
        },
        CG: function() {
            return this.w.qi
        },
        Bm: function(a) {
            "solid" != a && "dashed" != a || (this.w.strokeStyle = a)
        },
        Ly: function() {
            return this.w.strokeStyle
        },
        setFillColor: function(a) {
            this.w.fillColor = a || ""
        },
        BG: function() {
            return this.w.fillColor
        },
        ig: s("gq"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.yn);
            Q.prototype.remove.call(this);
            this.qd.length = 0
        },
        Ud: function() {
            if (! (2 > this.W.length)) {
                this.w.Ud = i;
                var a = this;
                G.load("poly",
                function() {
                    a.Xh()
                },
                i)
            }
        },
        LF: function() {
            this.w.Ud = o;
            var a = this;
            G.load("poly",
            function() {
                a.Lg()
            },
            i)
        }
    });
    function Hb(a) {
        Q.call(this);
        this.J = this.map = n;
        this.w = {
            width: 0,
            height: 0,
            fa: new K(0, 0),
            opacity: 1,
            background: "transparent",
            bp: 1,
            tz: "#000",
            RH: "solid",
            O: n
        };
        this.hA(a);
        this.O = this.w.O
    }
    t.lang.ia(Hb, Q, "Division");
    t.extend(Hb.prototype, {
        Bk: function() {
            var a = this.w,
            b = this.content,
            c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.bp + "px " + a.RH + " " + a.tz + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.J = bb(this.map.Me().Qt, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Bk();
            this.J && t.C(this.J, H() ? "touchstart": "mousedown",
            function(a) {
                A(a)
            });
            return this.J
        },
        draw: function() {
            var a = this.map.Re(this.w.O);
            this.w.fa = new K( - Math.round(this.w.width / 2) - Math.round(this.w.bp), -Math.round(this.w.height / 2) - Math.round(this.w.bp));
            this.J.style.left = a.x + this.w.fa.width + "px";
            this.J.style.top = a.y + this.w.fa.height + "px"
        },
        ba: function() {
            return this.w.O
        },
        jK: function() {
            return this.map.kb(this.ba())
        },
        ga: function(a) {
            this.w.O = a;
            this.draw()
        },
        OI: function(a, b) {
            this.w.width = Math.round(a);
            this.w.height = Math.round(b);
            this.J && (this.J.style.width = this.w.width + "px", this.J.style.height = this.w.height + "px", this.draw())
        }
    });
    function Ib(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new K(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {},
        a = c.anchor || a, b = c.imageOffset || new K(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
    }
    t.extend(Ib.prototype, {
        TI: function(a) {
            a && (this.imageUrl = a)
        },
        dJ: function(a) {
            a && (this.printImageUrl = a)
        },
        Cc: function(a) {
            a && (this.size = new K(a.width, a.height))
        },
        Pb: function(a) {
            a && (this.anchor = new K(a.width, a.height))
        },
        xm: function(a) {
            a && (this.imageOffset = new K(a.width, a.height))
        },
        VI: function(a) {
            a && (this.infoWindowAnchor = new K(a.width, a.height))
        },
        SI: function(a) {
            a && (this.imageSize = new K(a.width, a.height))
        },
        toString: da("Icon")
    });
    function Jb(a, b) {
        t.lang.ua.call(this);
        this.content = a;
        this.map = n;
        b = b || {};
        this.w = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 600,
            fa: b.offset || new K(0, 0),
            title: b.title || "",
            Rt: b.maxContent || "",
            He: b.enableMaximize || o,
            Nl: b.enableAutoPan === o ? o: i,
            Cs: b.enableCloseOnClick === o ? o: i,
            margin: [10, 10, 40, 10],
            uo: [[10, 10], [10, 10], [10, 10], [10, 10]],
            tH: o,
            uL: da(i),
            Fs: b.enableMessage === o ? o: i,
            message: b.message,
            Hs: b.enableSearchTool === i ? i: o
        };
        if (0 != this.w.width && (220 > this.w.width && (this.w.width = 220), 730 < this.w.width)) this.w.width = 730;
        if (0 != this.w.height && (60 > this.w.height && (this.w.height = 60), 650 < this.w.height)) this.w.height = 650;
        if (0 != this.w.maxWidth && (220 > this.w.maxWidth && (this.w.maxWidth = 220), 730 < this.w.maxWidth)) this.w.maxWidth = 730;
        this.wc = o;
        this.Kf = C.ca;
        this.Ka = n;
        var c = this;
        G.load("infowindow",
        function() {
            c.Tb()
        })
    }
    t.lang.ia(Jb, t.lang.ua, "InfoWindow");
    t.extend(Jb.prototype, {
        setWidth: function(a) { ! a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.w.width = a)
        },
        setHeight: function(a) { ! a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.w.height = a)
        },
        nA: function(a) { ! a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.w.maxWidth = a)
        },
        $b: function(a) {
            this.w.title = a
        },
        getTitle: function() {
            return this.w.title
        },
        Bc: ba("content"),
        yy: s("content"),
        ym: function(a) {
            this.w.Rt = a + ""
        },
        Ac: q(),
        Nl: function() {
            this.w.Nl = i
        },
        disableAutoPan: function() {
            this.w.Nl = o
        },
        enableCloseOnClick: function() {
            this.w.Cs = i
        },
        disableCloseOnClick: function() {
            this.w.Cs = o
        },
        He: function() {
            this.w.He = i
        },
        Eo: function() {
            this.w.He = o
        },
        show: function() {
            this.sb = i
        },
        H: function() {
            this.sb = o
        },
        close: function() {
            this.H()
        },
        gp: function() {
            this.wc = i
        },
        restore: function() {
            this.wc = o
        },
        ng: function() {
            return this.za()
        },
        za: da(o),
        ba: function() {
            if (this.Ka && this.Ka.ba) return this.Ka.ba()
        },
        Le: function() {
            return this.w.fa
        }
    });
    qa.prototype.Mb = function(a, b) {
        if (a instanceof Jb && b instanceof F) {
            var c = this.D;
            c.Ji ? c.Ji.ga(b) : (c.Ji = new S(b, {
                icon: new Ib(C.ca + "blank.gif", {
                    width: 1,
                    height: 1
                }),
                offset: new K(0, 0),
                clickable: o
            }), c.Ji.tC = 1);
            this.Ua(c.Ji);
            c.Ji.Mb(a)
        }
    };
    qa.prototype.Xb = function() {
        var a = this.D.Ja || this.D.Ch;
        a && a.Ka && a.Ka.Xb()
    };
    Q.prototype.Mb = function(a) {
        this.map && (this.map.Xb(), a.sb = i, this.map.D.Ch = a, a.Ka = this, t.lang.ua.call(a, a.L))
    };
    Q.prototype.Xb = function() {
        this.map && this.map.D.Ch && (this.map.D.Ch.sb = o, t.lang.Co(this.map.D.Ch.L), this.map.D.Ch = n)
    };
    function Kb(a, b) {
        Q.call(this);
        this.content = a;
        this.J = this.map = n;
        b = b || {};
        this.w = {
            width: 0,
            fa: b.offset || new K(0, 0),
            mk: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + C.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || n,
            Sg: b.enableMassClear === o ? o: i,
            sd: i
        };
        0 > this.w.width && (this.w.width = 0);
        hb(b.enableClicking) && (this.w.sd = b.enableClicking);
        this.O = this.w.position;
        var c = this;
        G.load("marker",
        function() {
            c.Tb()
        })
    }
    t.lang.ia(Kb, Q, "Label");
    t.extend(Kb.prototype, {
        ba: function() {
            return this.Jn ? this.Jn.ba() : this.O
        },
        ga: function(a) {
            a instanceof F && !this.So() && (this.O = this.w.position = new F(a.lng, a.lat))
        },
        Bc: ba("content"),
        YI: function(a) {
            0 <= a && 1 >= a && (this.w.opacity = a)
        },
        Rc: function(a) {
            a instanceof K && (this.w.fa = new K(a.width, a.height))
        },
        Le: function() {
            return this.w.fa
        },
        oc: function(a) {
            a = a || {};
            this.w.mk = t.extend(this.w.mk, a)
        },
        oh: function(a) {
            return this.oc(a)
        },
        $b: function(a) {
            this.w.title = a || ""
        },
        getTitle: function() {
            return this.w.title
        },
        mA: function(a) {
            this.O = (this.Jn = a) ? this.w.position = a.ba() : this.w.position = n
        },
        So: function() {
            return this.Jn || n
        }
    });
    var Lb = new Ib(C.ca + "marker_red_sprite.png", new K(19, 25), {
        anchor: new K(10, 25),
        infoWindowAnchor: new K(10, 0)
    }),
    Mb = new Ib(C.ca + "marker_red_sprite.png", new K(20, 11), {
        anchor: new K(6, 11),
        imageOffset: new K( - 19, -13)
    });
    function S(a, b) {
        Q.call(this);
        b = b || {};
        this.O = a;
        this.Dk = this.map = n;
        this.w = {
            fa: b.offset || new K(0, 0),
            Ne: b.icon || Lb,
            ph: Mb,
            title: b.title || "",
            label: n,
            Bx: b.baseZIndex || 0,
            sd: i,
            gM: o,
            Mt: o,
            Sg: b.enableMassClear === o ? o: i,
            Ab: o,
            aA: b.raiseOnDrag === i ? i: o,
            eA: o,
            kc: b.draggingCursor || C.kc
        };
        b.icon && !b.shadow && (this.w.ph = n);
        b.enableDragging && (this.w.Ab = b.enableDragging);
        hb(b.enableClicking) && (this.w.sd = b.enableClicking);
        var c = this;
        G.load("marker",
        function() {
            c.Tb()
        })
    }
    S.Zm = Eb.bm( - 90) + 1E6;
    S.$u = S.Zm + 1E6;
    t.lang.ia(S, Q, "Marker");
    t.extend(S.prototype, {
        Hf: function(a) {
            a instanceof Ib && (this.w.Ne = a)
        },
        Ey: function() {
            return this.w.Ne
        },
        Ep: function(a) {
            a instanceof Ib && (this.w.ph = a)
        },
        getShadow: function() {
            return this.w.ph
        },
        Ti: function(a) {
            this.w.label = a || n
        },
        Fy: function() {
            return this.w.label
        },
        Ab: function() {
            this.w.Ab = i
        },
        ns: function() {
            this.w.Ab = o
        },
        ba: s("O"),
        ga: function(a) {
            a instanceof F && (this.O = new F(a.lng, a.lat))
        },
        jk: function(a, b) {
            this.w.Mt = !!a;
            a && (this.ov = b || 0)
        },
        $b: function(a) {
            this.w.title = a + ""
        },
        getTitle: function() {
            return this.w.title
        },
        Rc: function(a) {
            a instanceof K && (this.w.fa = a)
        },
        Le: function() {
            return this.w.fa
        },
        Si: ba("Dk")
    });
    function Nb(a, b) {
        Gb.call(this, b);
        b = b || {};
        this.w.qi = b.fillOpacity ? b.fillOpacity: 0.65;
        this.w.fillColor = "" == b.fillColor ? "": b.fillColor ? b.fillColor: "#fff";
        this.Sc(a);
        var c = this;
        G.load("poly",
        function() {
            c.Tb()
        })
    }
    t.lang.ia(Nb, Gb, "Polygon");
    t.extend(Nb.prototype, {
        Sc: function(a, b) {
            this.wj = Gb.Po(a).slice(0);
            var c = Gb.Po(a).slice(0);
            1 < c.length && c.push(new F(c[0].lng, c[0].lat));
            Gb.prototype.Sc.call(this, c, b)
        },
        Vi: function(a, b) {
            this.wj[a] && (this.wj[a] = new F(b.lng, b.lat), this.W[a] = new F(b.lng, b.lat), 0 == a && !this.W[0].pb(this.W[this.W.length - 1]) && (this.W[this.W.length - 1] = new F(b.lng, b.lat)), this.Ze())
        },
        Kc: function() {
            var a = this.wj;
            0 == a.length && (a = this.W);
            return a
        }
    });
    function Ob(a, b) {
        Gb.call(this, b);
        this.pl(a);
        var c = this;
        G.load("poly",
        function() {
            c.Tb()
        })
    }
    t.lang.ia(Ob, Gb, "Polyline");
    function Pb(a, b, c) {
        this.O = a;
        this.Ca = Math.abs(b);
        Nb.call(this, [], c)
    }
    Pb.bu = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    t.lang.ia(Pb, Nb, "Circle");
    t.extend(Pb.prototype, {
        initialize: function(a) {
            this.map = a;
            this.W = this.wn(this.O, this.Ca);
            this.Ze();
            return n
        },
        Ga: s("O"),
        se: function(a) {
            a && (this.O = a)
        },
        PG: s("Ca"),
        Dp: function(a) {
            this.Ca = Math.abs(a)
        },
        wn: function(a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var j = Math.PI / 180 * g,
                k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(j)),
                j = new F(((f - Math.atan2(Math.sin(j) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(j)
            }
            d = c[0];
            c.push(new F(d.lng, d.lat));
            return c
        }
    });
    var Qb = {};
    function Sb(a) {
        this.map = a;
        this.Wj = [];
        this.Wd = [];
        this.we = [];
        this.dF = 300;
        this.iu = 0;
        this.oe = {};
        this.dg = {};
        this.gh = 0;
        this.Ht = i;
        this.Yx = {};
        this.In = this.Lk(1);
        this.ge = this.Lk(2);
        this.gl = this.Lk(3);
        a.platform.appendChild(this.In);
        a.platform.appendChild(this.ge);
        a.platform.appendChild(this.gl)
    }
    B.md(function(a) {
        var b = new Sb(a);
        b.sa();
        a.qb = b
    });
    t.extend(Sb.prototype, {
        sa: function() {
            var a = this,
            b = a.map;
            b.addEventListener("loadcode",
            function() {
                a.cp()
            });
            b.addEventListener("addtilelayer",
            function(b) {
                a.pf(b)
            });
            b.addEventListener("removetilelayer",
            function(b) {
                a.Gf(b)
            });
            b.addEventListener("setmaptype",
            function(b) {
                a.pg(b)
            });
            b.addEventListener("zoomstartcode",
            function(b) {
                a.he(b)
            });
            b.addEventListener("setcustomstyles",
            function() {
                a.Qe(i)
            })
        },
        cp: function() {
            var a = this;
            if (t.M.S) try {
                document.execCommand("BackgroundImageCache", o, i)
            } catch(b) {}
            this.loaded || a.Zo();
            a.Qe();
            this.loaded || (this.loaded = i, G.load("tile",
            function() {
                a.uB()
            }))
        },
        Zo: function() {
            for (var a = this.map.ha().cl, b = 0; b < a.length; b++) {
                var c = new T;
                t.extend(c, a[b]);
                this.Wj.push(c);
                c.sa(this.map, this.In)
            }
        },
        Lk: function(a) {
            var b = J("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        xe: function() {
            this.gh--;
            var a = this;
            this.Ht && (this.map.dispatchEvent(new L("onfirsttileloaded")), this.Ht = o);
            0 == this.gh && (this.Qf && (clearTimeout(this.Qf), this.Qf = n), this.Qf = setTimeout(function() {
                if (a.gh == 0) {
                    a.map.dispatchEvent(new L("ontilesloaded"));
                    a.Ht = i
                }
                a.Qf = n
            },
            80))
        },
        vt: function(a, b) {
            return "TILE-" + b.L + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Xo: function(a) {
            var b = a.Ta;
            b && ab(b) && b.parentNode.removeChild(b);
            delete this.oe[a.name];
            a.loaded || (Tb(a), a.Ta = n, a.Ki = n)
        },
        Oj: function(a, b, c) {
            var d = this.map,
            e = d.ha(),
            f = d.la,
            g = d.Lb,
            j = e.Gb(f),
            k = this.xG(),
            l = k[0],
            m = k[1],
            p = k[2],
            u = k[3],
            v = k[4],
            c = "undefined" != typeof c ? c: 0,
            e = e.m.Hb,
            k = d.L.replace(/^TANGRAM_/, "");
            for (this.Jf ? this.Jf.length = 0 : this.Jf = []; l < p; l++) for (var w = m; w < u; w++) {
                var y = l,
                E = w;
                this.Jf.push([y, E]);
                y = k + "_" + b + "_" + y + "_" + E + "_" + f;
                this.Yx[y] = y
            }
            this.Jf.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            } ([v[0] - 1, v[1] - 1]));
            g = [Math.round( - g.lng / j), Math.round(g.lat / j)];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.$h ? this.$h.length = 0 : this.$h = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++) w = a.childNodes[l],
            w.mw = o,
            this.$h.push(w);
            if (l = this.Wt) for (var x in l) delete l[x];
            else this.Wt = {};
            this.ai ? this.ai.length = 0 : this.ai = [];
            l = 0;
            for (d = this.Jf.length; l < d; l++) {
                x = this.Jf[l][0];
                j = this.Jf[l][1];
                w = 0;
                for (m = this.$h.length; w < m; w++) if (p = this.$h[w], p.id == k + "_" + b + "_" + x + "_" + j + "_" + f) {
                    p.mw = i;
                    this.Wt[p.id] = p;
                    break
                }
            }
            l = 0;
            for (d = this.$h.length; l < d; l++) p = this.$h[l],
            p.mw || this.ai.push(p);
            this.Iu = [];
            w = (e + c) * this.map.F.devicePixelRatio;
            l = 0;
            for (d = this.Jf.length; l < d; l++) x = this.Jf[l][0],
            j = this.Jf[l][1],
            u = x * e + g[0] - c / 2,
            v = ( - 1 - j) * e + g[1] - c / 2,
            y = k + "_" + b + "_" + x + "_" + j + "_" + f,
            m = this.Wt[y],
            p = n,
            m ? (p = m.style, p.left = u + "px", p.top = v + "px", m.ye || this.Iu.push([x, j, m])) : (0 < this.ai.length ? (m = this.ai.shift(), m.getContext("2d").clearRect( - c / 2, -c / 2, w, w), p = m.style) : (m = document.createElement("canvas"), p = m.style, p.position = "absolute", p.width = e + c + "px", p.height = e + c + "px", this.jz() && (p.WebkitTransform = "scale(1.001)"), m.setAttribute("width", w), m.setAttribute("height", w), a.appendChild(m)), m.id = y, p.left = u + "px", p.top = v + "px", -1 < y.indexOf("bg") && (u = "#F3F1EC", this.map.F.lc && this.map.F.lc.style && (u = this.map.F.rf[this.map.F.lc.style].backColor), p.background = u ? u: ""), this.Iu.push([x, j, m])),
            m.style.visibility = "";
            l = 0;
            for (d = this.ai.length; l < d; l++) this.ai[l].style.visibility = "hidden";
            return this.Iu
        },
        jz: function() {
            return /M040/i.test(navigator.userAgent)
        },
        xG: function() {
            var a = this.map,
            b = a.ha(),
            c = a.la;
            b.Gb(c);
            var c = b.Py(c),
            d = a.Lb,
            e = Math.ceil(d.lng / c),
            f = Math.ceil(d.lat / c),
            b = b.m.Hb,
            c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        iJ: function(a, b, c, d) {
            var e = this;
            e.EK = b;
            var f = this.map.ha(),
            g = e.vt(a, c),
            j = f.m.Hb,
            b = [a[0] * j + b[0], ( - 1 - a[1]) * j + b[1]],
            k = this.oe[g];
            k && k.Ta ? (Za(k.Ta, b), d && (d = new O(a[0], a[1]), f = this.map.F.lc ? this.map.F.lc.style: "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = o, Ub(k, d)), k.loaded ? this.xe() : Vb(k,
            function() {
                e.xe()
            })) : (k = this.dg[g]) && k.Ta ? (c.cb.insertBefore(k.Ta, c.cb.lastChild), this.oe[g] = k, Za(k.Ta, b), d && (d = new O(a[0], a[1]), f = this.map.F.lc ? this.map.F.lc.style: "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = o, Ub(k, d)), k.loaded ? this.xe() : Vb(k,
            function() {
                e.xe()
            })) : (k = j * Math.pow(2, f.xi() - a[2]), new F(a[0] * k, a[1] * k), d = new O(a[0], a[1]), f = this.map.F.lc ? this.map.F.lc.style: "normal", d = c.getTilesUrl(d, a[2], f), k = new Wb(this, d, b, a, c), Vb(k,
            function() {
                e.xe()
            }), Xb(k), this.oe[g] = k)
        },
        xe: function() {
            this.gh--;
            var a = this;
            0 == this.gh && (this.Qf && (clearTimeout(this.Qf), this.Qf = n), this.Qf = setTimeout(function() {
                if (a.gh == 0) {
                    a.map.dispatchEvent(new L("ontilesloaded"));
                    if (pa) {
                        if (ma && na && oa) {
                            var b = Ea(),
                            c = a.map.Bb();
                            setTimeout(function() {
                                va(5030, {
                                    load_script_time: na - ma,
                                    load_tiles_time: b - oa,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            },
                            1E4)
                        }
                        pa = o
                    }
                }
                a.Qf = n
            },
            80))
        },
        vt: function(a, b) {
            return this.map.ha() === ta ? "TILE-" + b.L + "-" + this.map.Zr + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.L + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Xo: function(a) {
            var b = a.Ta;
            b && (Yb(b), ab(b) && b.parentNode.removeChild(b));
            delete this.oe[a.name];
            a.loaded || (Yb(b), Tb(a), a.Ta = n, a.Ki = n)
        },
        Qe: function(a) {
            var b = this;
            if (b.map.ha() == ta) G.load("coordtrans",
            function() {
                b.uw()
            },
            i);
            else {
                if (a && a) for (var c in this.dg) delete this.dg[c];
                b.uw(a)
            }
        },
        uw: function(a) {
            for (var b = this.Wj.concat(this.Wd), c = b.length, d = 0; d < c; d++) {
                var e = b[d];
                if (e.mc && l.la < e.mc) break;
                if (e.po) {
                    var f = this.cb = e.cb;
                    if (a) {
                        var g = f;
                        if (g && g.childNodes) for (var j = g.childNodes.length,
                        k = j - 1; 0 <= k; k--) j = g.childNodes[k],
                        g.removeChild(j),
                        j = n
                    }
                    if (this.map.Dc()) {
                        this.ge.style.display = "block";
                        f.style.display = "none";
                        this.map.dispatchEvent(new L("vectorchanged"), {
                            isvector: i
                        });
                        continue
                    } else f.style.display = "block",
                    this.ge.style.display = "none",
                    this.map.dispatchEvent(new L("vectorchanged"), {
                        isvector: o
                    })
                }
                if (! (e.Uj && !this.map.Dc() || e.iz && this.map.Dc())) {
                    var l = this.map,
                    m = l.ha(),
                    f = m.Ai(),
                    j = l.la,
                    p = l.Lb;
                    m == ta && p.pb(new F(0, 0)) && (p = l.Lb = f.Ii(l.Ee, l.zb));
                    var u = m.Gb(j),
                    j = m.Py(j),
                    f = Math.ceil(p.lng / j),
                    g = Math.ceil(p.lat / j),
                    v = m.m.Hb,
                    j = [f, g, (p.lng - f * j) / j * v, (p.lat - g * j) / j * v],
                    k = j[0] - Math.ceil((l.width / 2 - j[2]) / v),
                    f = j[1] - Math.ceil((l.height / 2 - j[3]) / v),
                    g = j[0] + Math.ceil((l.width / 2 + j[2]) / v),
                    w = 0;
                    m === ta && 15 == l.U() && (w = 1);
                    m = j[1] + Math.ceil((l.height / 2 + j[3]) / v) + w;
                    this.yx = new F(p.lng, p.lat);
                    var y = this.oe,
                    v = -this.yx.lng / u,
                    w = this.yx.lat / u,
                    u = [Math.ceil(v), Math.ceil(w)],
                    p = l.U(),
                    E;
                    for (E in y) {
                        var x = y[E],
                        I = x.info; (I[2] != p || I[2] == p && (k > I[0] || g <= I[0] || f > I[1] || m <= I[1])) && this.Xo(x)
                    }
                    y = -l.offsetX + l.width / 2;
                    x = -l.offsetY + l.height / 2;
                    e.cb && (e.cb.style.left = Math.ceil(v + y) - u[0] + "px", e.cb.style.top = Math.ceil(w + x) - u[1] + "px");
                    v = [];
                    for (l.Or = []; k < g; k++) for (w = f; w < m; w++) v.push([k, w]),
                    l.Or.push({
                        x: k,
                        y: w
                    });
                    v.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    } ([j[0] - 1, j[1] - 1]));
                    this.gh += v.length;
                    k = 0;
                    for (j = v.length; k < j; k++) this.iJ([v[k][0], v[k][1], p], u, e, a)
                }
            }
        },
        pf: function(a) {
            var b = this,
            c = a.target;
            c.ve && this.map.pf(c.ve);
            if (c.Uj) {
                for (a = 0; a < b.we.length; a++) if (b.we[a] == c) return;
                G.load("vector",
                function() {
                    c.sa(b.map, b.ge);
                    b.we.push(c)
                },
                i)
            } else {
                for (a = 0; a < b.Wd.length; a++) if (b.Wd[a] == c) return;
                c.sa(this.map, this.gl);
                b.Wd.push(c)
            }
        },
        Gf: function(a) {
            a = a.target;
            a.ve && this.map.Gf(a.ve);
            if (a.Uj) for (var b = 0,
            c = this.we.length; b < c; b++) a == this.we[b] && this.we.splice(b, 1);
            else {
                b = 0;
                for (c = this.Wd.length; b < c; b++) a == this.Wd[b] && this.Wd.splice(b, 1)
            }
            a.remove()
        },
        pg: function() {
            for (var a = this.Wj,
            b = 0,
            c = a.length; b < c; b++) a[b].remove();
            delete this.cb;
            this.Wj = [];
            this.dg = this.oe = {};
            this.Zo();
            this.Qe()
        },
        he: function() {
            var a = this;
            a.cc && t.z.H(a.cc);
            setTimeout(function() {
                a.Qe();
                a.map.dispatchEvent(new L("onzoomend"))
            },
            10)
        },
        aM: q()
    });
    function Wb(a, b, c, d, e) {
        this.Ki = a;
        this.position = c;
        this.dn = [];
        this.name = a.vt(d, e);
        this.info = d;
        this.gx = e.jm();
        d = J("img");
        $a(d);
        d.wy = o;
        var f = d.style,
        a = a.map.ha();
        f.position = "absolute";
        f.border = "none";
        f.width = a.m.Hb + "px";
        f.height = a.m.Hb + "px";
        f.left = c[0] + "px";
        f.top = c[1] + "px";
        f.maxWidth = "none";
        this.Ta = d;
        this.src = b;
        Zb && (this.Ta.style.opacity = 0);
        var g = this;
        this.Ta.onload = function() {
            g.loaded = i;
            if (g.Ki) {
                var a = g.Ki,
                b = a.dg;
                if (!b[g.name]) {
                    a.iu++;
                    b[g.name] = g
                }
                if (g.Ta && !ab(g.Ta) && e.cb) {
                    e.cb.appendChild(g.Ta);
                    if (t.M.S <= 6 && t.M.S > 0 && g.gx) g.Ta.style.cssText = g.Ta.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                }
                var c = a.iu - a.dF,
                d;
                for (d in b) {
                    if (c <= 0) break;
                    if (!a.oe[d]) {
                        b[d].Ki = n;
                        var f = b[d].Ta;
                        if (f && f.parentNode) {
                            f.parentNode.removeChild(f);
                            Yb(f)
                        }
                        f = n;
                        b[d].Ta = n;
                        delete b[d];
                        a.iu--;
                        c--
                    }
                }
                Zb && new Va({
                    gd: 20,
                    duration: 200,
                    ta: function(a) {
                        if (g.Ta && g.Ta.style) g.Ta.style.opacity = a * 1
                    },
                    finish: function() {
                        g.Ta && g.Ta.style && delete g.Ta.style.opacity
                    }
                });
                Tb(g)
            }
        };
        this.Ta.onerror = function() {
            Tb(g);
            if (g.Ki) {
                var a = g.Ki.map.ha();
                if (a.m.Js) {
                    g.error = i;
                    g.Ta.src = a.m.Js;
                    g.Ta && !ab(g.Ta) && e.cb.appendChild(g.Ta)
                }
            }
        };
        d = n
    }
    function Vb(a, b) {
        a.dn.push(b)
    }
    function Xb(a) {
        a.Ta.src = 0 < t.M.S && 6 >= t.M.S && a.gx ? C.ca + "blank.gif": "" !== a.src && a.Ta.src == a.src ? a.src + "&t = " + Date.now() : a.src
    }
    function Tb(a) {
        for (var b = 0; b < a.dn.length; b++) a.dn[b]();
        a.dn.length = 0
    }
    function Yb(a) {
        if (a) {
            a.onload = a.onerror = n;
            var b = a.attributes,
            c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1) e = b[c].name,
                Ca(a[e]) && (a[e] = n)
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1) Yb(a.children[c])
            }
        }
    }
    function Ub(a, b) {
        a.src = b;
        Xb(a)
    }
    var Zb = !t.M.S || 8 < t.M.S;
    function T(a) {
        this.Yj = a || {};
        this.vF = this.Yj.copyright || n;
        this.HJ = this.Yj.transparentPng || o;
        this.po = this.Yj.baseLayer || o;
        this.zIndex = this.Yj.zIndex || 0;
        this.L = T.ZC++
    }
    T.ZC = 0;
    t.lang.ia(T, t.lang.ua, "TileLayer");
    t.extend(T.prototype, {
        sa: function(a, b) {
            this.po && (this.zIndex = -100);
            this.map = a;
            if (!this.cb) {
                var c = J("div"),
                d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil( - a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil( - a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.cb = c
            }
            c = a.ha();
            a.$g() && c == ra && (c.m.Hb = 128, d = function(a) {
                return Math.pow(2, 18 - a) * 2
            },
            c.Gb = d, c.m.Pc.Gb = d)
        },
        remove: function() {
            this.cb && this.cb.parentNode && (this.cb.innerHTML = "", this.cb.parentNode.removeChild(this.cb));
            delete this.cb
        },
        jm: s("HJ"),
        getTilesUrl: function(a, b) {
            var c = "";
            this.Yj.tileUrlTemplate && (c = this.Yj.tileUrlTemplate.replace(/\{X\}/, a.x), c = c.replace(/\{Y\}/, a.y), c = c.replace(/\{Z\}/, b));
            return c
        },
        ui: s("vF"),
        ha: function() {
            return this.vb || ra
        }
    });
    function $b(a, b) {
        jb(a) ? b = a || {}: (b = b || {},
        b.databoxId = a);
        this.m = {
            Zx: b.databoxId,
            Ie: b.geotableId,
            vp: b.q || "",
            Km: b.tags || "",
            filter: b.filter || "",
            oJ: b.styleId || "",
            Yh: b.ak || la,
            oo: b.age || 36E5,
            zIndex: 11,
            PH: "VectorCloudLayer",
            ah: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
            NE: "LBS\u4e91\u9ebb\u70b9\u5c42"
        };
        this.Uj = i;
        T.call(this, this.m);
        this.kH = "http://api.map.baidu.com/georender/gss/data?";
        this.GF = "http://api.map.baidu.com/geosearch/detail/";
        this.HF = "http://api.map.baidu.com/geosearch/v2/detail/";
        this.Qj = {}
    }
    t.ia($b, T, "VectorCloudLayer");
    function ac(a) {
        a = a || {};
        this.m = t.extend(a, {
            zIndex: 1,
            PH: "VectorTrafficLayer",
            NE: "\u77e2\u91cf\u8def\u51b5\u5c42"
        });
        this.Uj = i;
        T.call(this, this.m);
        this.FJ = "http://or.map.bdimg.com:8080/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.ed = {
            "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
            1 : [2, 1354709503, 3, 2, 0, [], 0, 0],
            10 : [2, -231722753, 2, 2, 0, [], 0, 0],
            11 : [2, -231722753, 3, 2, 0, [], 0, 0],
            12 : [2, -231722753, 4, 2, 0, [], 0, 0],
            13 : [2, -231722753, 5, 2, 0, [], 0, 0],
            14 : [2, -231722753, 6, 2, 0, [], 0, 0],
            15 : [2, -1, 4, 0, 0, [], 0, 0],
            16 : [2, -1, 5.5, 0, 0, [], 0, 0],
            17 : [2, -1, 7, 0, 0, [], 0, 0],
            18 : [2, -1, 8.5, 0, 0, [], 0, 0],
            19 : [2, -1, 10, 0, 0, [], 0, 0],
            2 : [2, 1354709503, 4, 2, 0, [], 0, 0],
            3 : [2, 1354709503, 5, 2, 0, [], 0, 0],
            4 : [2, 1354709503, 6, 2, 0, [], 0, 0],
            5 : [2, -6350337, 2, 2, 0, [], 0, 0],
            6 : [2, -6350337, 3, 2, 0, [], 0, 0],
            7 : [2, -6350337, 4, 2, 0, [], 0, 0],
            8 : [2, -6350337, 5, 2, 0, [], 0, 0],
            9 : [2, -6350337, 6, 2, 0, [], 0, 0]
        }
    }
    t.ia(ac, T, "VectorTrafficLayer");
    function bc(a) {
        T.call(this, a);
        this.m = a || {};
        this.iz = i;
        this.ve = new ac;
        this.ve.Hu = this;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0
        }
        this.yE = "http://its.map.baidu.com:8002/traffic/"
    }
    bc.prototype = new T;
    bc.prototype.sa = function(a, b) {
        T.prototype.sa.call(this, a, b);
        this.A = a
    };
    bc.prototype.jm = da(i);
    bc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&": (c = "TrafficTileService?time=" + (new Date).getTime() + "&", this.A.$g() || (c += "label=web2D&v=016&"));
        return (this.yE + c + "level=" + b + "&x=" + a.x + "&y=" + a.y).replace(/-(\d+)/gi, "M$1")
    };
    function Qa(a, b) {
        T.call(this);
        var c = this;
        this.iz = i;
        this.ve = new $b(a, b);
        this.ve.Hu = this;
        jb(a) ? b = a || {}: (c.Nk = a, b = b || {});
        b.geotableId && (c.ce = b.geotableId);
        b.databoxId && (c.Nk = b.databoxId);
        c.uc = {
            sH: "http://api.map.baidu.com/georender/gss/image",
            pH: "http://api.map.baidu.com/georender/gss/data",
            qH: "http://api.map.baidu.com/geosearch/detail/",
            rH: "http://api.map.baidu.com/geosearch/v2/detail/",
            oo: b.age || 36E5,
            vp: b.q || "",
            xJ: "png",
            kL: [5, 5, 5, 5],
            OH: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            Yh: b.ak || la,
            Km: b.tags || "",
            filter: b.filter || "",
            ah: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0)
        };
        G.load("clayer",
        function() {
            c.tc()
        })
    }
    Qa.prototype = new T;
    Qa.prototype.sa = function(a, b) {
        T.prototype.sa.call(this, a, b);
        this.A = a
    };
    Qa.prototype.getTilesUrl = function(a, b) {
        var c = this.uc,
        c = c.sH + "?grids=" + a.x + "_" + a.y + "_" + b + "&q=" + c.vp + "&tags=" + c.Km + "&filter=" + c.filter + "&ak=" + this.uc.Yh + "&age=" + c.oo + "&format=" + c.xJ;
        this.ce ? c += "&geotable_id=" + this.ce: this.Nk && (c += "&databox_id=" + this.Nk);
        return c
    };
    Qa.$D = /^point\(|\)$/ig;
    Qa.aE = /\s+/;
    Qa.cE = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function cc(a, b, c) {
        this.el = a;
        this.cl = b instanceof T ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            yJ: c.tips || "",
            Pt: "",
            mc: c.minZoom || 3,
            kd: c.maxZoom || 18,
            nH: c.minZoom || 3,
            mH: c.maxZoom || 18,
            Hb: 256,
            wJ: c.textColor || "black",
            Js: c.errorImageUrl || "",
            Pc: c.projection || new P
        };
        1 <= this.cl.length && (this.cl[0].po = i);
        t.extend(this.m, c)
    }
    t.extend(cc.prototype, {
        getName: s("el"),
        am: function() {
            return this.m.yJ
        },
        ZK: function() {
            return this.m.Pt
        },
        bH: function() {
            return this.cl[0]
        },
        iL: s("cl"),
        cH: function() {
            return this.m.Hb
        },
        Jj: function() {
            return this.m.mc
        },
        xi: function() {
            return this.m.kd
        },
        $l: function() {
            return this.m.wJ
        },
        Ai: function() {
            return this.m.Pc
        },
        XK: function() {
            return this.m.Js
        },
        cH: function() {
            return this.m.Hb
        },
        Gb: function(a) {
            return Math.pow(2, 18 - a)
        },
        Py: function(a) {
            return this.Gb(a) * this.m.Hb
        }
    });
    var dc = ["http://shangetu0.map.bdimg.com/it/", "http://shangetu1.map.bdimg.com/it/", "http://shangetu2.map.bdimg.com/it/", "http://shangetu3.map.bdimg.com/it/", "http://shangetu4.map.bdimg.com/it/"],
    ec = ["http://online0.map.bdimg.com/tile/", "http://online1.map.bdimg.com/tile/", "http://online2.map.bdimg.com/tile/", "http://online3.map.bdimg.com/tile/", "http://online4.map.bdimg.com/tile/"],
    ec = ["http://or.map.bdimg.com:8080/tile/", "http://or0.map.bdimg.com:8080/tile/", "http://or1.map.bdimg.com:8080/tile/", "http://or2.map.bdimg.com:8080/tile/", "http://or3.map.bdimg.com:8080/tile/"],
    fc = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    },
    gc = new T;
    gc.getTilesUrl = function(a, b, c) {
        var d = a.x,
        a = a.y,
        e = "pl";
        this.map.$g();
        e = fc[c];
        return (ec[Math.abs(d + a) % ec.length] + "?qt=tile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + e + (6 == t.M.S ? "&color_dep=32&colors=50": "") + "&udt=20130822").replace(/-(\d+)/gi, "M$1")
    };
    var ra = new cc("\u5730\u56fe", gc, {
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe"
    }),
    hc = new T;
    hc.BA = ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"];
    hc.getTilesUrl = function(a, b) {
        var c = a.x,
        d = a.y,
        e = 256 * Math.pow(2, 20 - b),
        d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.BA[Math.abs(c + d) % this.BA.length] + this.map.zb + "/" + this.map.Zr + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    };
    var ta = new cc("\u4e09\u7ef4", hc, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new Ja
    });
    ta.Gb = function(a) {
        return Math.pow(2, 20 - a)
    };
    ta.Hj = function(a) {
        if (!a) return "";
        var b = C.as,
        c;
        for (c in b) if ( - 1 < a.search(c)) return b[c].qp;
        return ""
    };
    ta.vG = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        } [a]
    };
    var ic = new T({
        po: i
    });
    ic.getTilesUrl = function(a, b) {
        var c = a.x,
        d = a.y;
        return (dc[Math.abs(c + d) % dc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46").replace(/-(\d+)/gi, "M$1")
    };
    var wa = new cc("\u536b\u661f", ic, {
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    }),
    jc = new T({
        transparentPng: i
    });
    jc.getTilesUrl = function(a, b) {
        var c = a.x,
        d = a.y;
        return (ec[Math.abs(c + d) % ec.length] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == t.M.S ? "&color_dep=32&colors=50": "") + "&udt=20130712").replace(/-(\d+)/gi, "M$1")
    };
    var xa = new cc("\u6df7\u5408", [ic, jc], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var kc = 1,
    U = {};
    window.UJ = U;
    function V(a, b) {
        t.lang.ua.call(this);
        this.fc = {};
        this.Ui(a);
        b = b || {};
        b.$ = b.renderOptions || {};
        this.m = {
            $: {
                wa: b.$.panel || n,
                map: b.$.map || n,
                De: b.$.autoViewport || i,
                vm: b.$.selectFirstResult,
                dm: b.$.highlightMode,
                Ab: b.$.enableDragging || o
            },
            mp: b.onSearchComplete || q(),
            Rz: b.onMarkersSet || q(),
            Qz: b.onInfoHtmlSet || q(),
            Sz: b.onResultsHtmlSet || q(),
            Pz: b.onGetBusListComplete || q(),
            Oz: b.onGetBusLineComplete || q(),
            Nz: b.onBusListHtmlSet || q(),
            Mz: b.onBusLineHtmlSet || q(),
            Xt: b.onPolylinesSet || q(),
            dk: b.reqFrom || ""
        };
        this.m.$.De = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport: i;
        this.m.$.wa = t.qc(this.m.$.wa)
    }
    t.ia(V, t.lang.ua);
    t.extend(V.prototype, {
        getResults: function() {
            return this.yb ? this.Of: this.P
        },
        enableAutoViewport: function() {
            this.m.$.De = i
        },
        disableAutoViewport: function() {
            this.m.$.De = o
        },
        Ui: function(a) {
            a && (this.fc.src = a)
        },
        xu: function(a) {
            this.m.mp = a || q()
        },
        setMarkersSetCallback: function(a) {
            this.m.Rz = a || q()
        },
        setPolylinesSetCallback: function(a) {
            this.m.Xt = a || q()
        },
        setInfoHtmlSetCallback: function(a) {
            this.m.Qz = a || q()
        },
        setResultsHtmlSetCallback: function(a) {
            this.m.Sz = a || q()
        },
        Bi: s("vc")
    });
    var lc = {
        fB: "",
        Pa: function(a, b, c, d, e) {
            var f = (1E5 * Math.random()).toFixed(0);
            B._rd["_cbk" + f] = function(b) {
                c = c || {};
                a && a(b, c);
                delete B._rd["_cbk" + f]
            };
            d = d || "";
            b = c && c.KA ? gb(b, encodeURI) : gb(b, encodeURIComponent);
            d = this.fB + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            e || (d += "&res=api");
            La("js/fromproduct_load.js")
        }
    };
    window.YJ = lc;
    B._rd = {};
    var N = {};
    window.XJ = N;
    N.cA = function(a) {
        return a.replace(/<\/?b>/g, "")
    };
    N.jI = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    N.kI = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var mc = 2,
    oc = 3,
    pc = 0,
    qc = "bt",
    rc = "nav",
    sc = "walk",
    tc = "bl",
    uc = "bsl",
    vc = 14,
    wc = 15,
    xc = 18,
    yc = 20,
    zc = 31;
    B.I = window.Instance = t.lang.Mc;
    function Fa(a, b) {
        V.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.ik(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.os() : this.Es();
        this.ea = [];
        this.Hd = [];
        this.Ha = -1;
        this.na = [];
        var c = this;
        G.load("local",
        function() {
            c.kq()
        },
        i)
    }
    t.ia(Fa, V, "LocalSearch");
    Fa.vk = 10;
    Fa.VJ = 1;
    Fa.aj = 100;
    Fa.Yu = 2E3;
    Fa.cv = 1E5;
    t.extend(Fa.prototype, {
        search: function(a, b) {
            this.na.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Ri: function(a, b, c) {
            this.na.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        gk: function(a, b, c, d) {
            this.na.push({
                method: "searchNearby",
                arguments: [a, b, c, d]
            })
        },
        fd: function() {
            delete this.ma;
            delete this.vc;
            delete this.P;
            delete this.V;
            this.Ha = -1;
            this.Qa();
            this.m.$.wa && (this.m.$.wa.innerHTML = "")
        },
        Di: q(),
        Es: function() {
            this.m.$.vm = i
        },
        os: function() {
            this.m.$.vm = o
        },
        ik: function(a) {
            this.m.hh = "number" == typeof a && !isNaN(a) ? 1 > a ? Fa.vk: a > Fa.aj ? Fa.vk: a: Fa.vk
        },
        zd: function() {
            return this.m.hh
        },
        toString: da("LocalSearch")
    });
    var Ac = Fa.prototype;
    W(Ac, {
        clearResults: Ac.fd,
        setPageCapacity: Ac.ik,
        getPageCapacity: Ac.zd,
        gotoPage: Ac.Di,
        searchNearby: Ac.gk,
        searchInBounds: Ac.Ri,
        search: Ac.search,
        enableFirstResultSelection: Ac.Es,
        disableFirstResultSelection: Ac.os
    });
    function Bc(a, b) {
        V.call(this, a, b)
    }
    t.ia(Bc, V, "BaseRoute");
    t.extend(Bc.prototype, {
        fd: q()
    });
    function Cc(a, b) {
        V.call(this, a, b);
        b = b || {};
        this.zm(b.policy);
        this.ik(b.pageCapacity);
        this.Lf = qc;
        this.Ym = vc;
        this.Yp = kc;
        this.ea = [];
        this.Ha = -1;
        this.na = [];
        var c = this;
        G.load("route",
        function() {
            c.tc()
        })
    }
    Cc.aj = 100;
    Cc.ZA = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    t.ia(Cc, Bc, "TransitRoute");
    t.extend(Cc.prototype, {
        zm: function(a) {
            this.m.Oc = 0 <= a && 4 >= a ? a: 0
        },
        fD: function(a, b) {
            this.na.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.na.push({
                method: "search",
                arguments: [a, b]
            })
        },
        ik: function(a) {
            if ("string" == typeof a && (a = parseInt(a), isNaN(a))) {
                this.m.hh = Cc.aj;
                return
            }
            this.m.hh = "number" != typeof a ? Cc.aj: 1 <= a && a <= Cc.aj ? Math.round(a) : Cc.aj
        },
        toString: da("TransitRoute"),
        mE: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    function Dc(a, b) {
        V.call(this, a, b);
        this.ea = [];
        this.Ha = -1;
        this.na = [];
        var c = this,
        d = this.m.$;
        1 != d.dm && 2 != d.dm && (d.dm = 1);
        this.Aq = this.m.$.Ab ? i: o;
        G.load("route",
        function() {
            c.tc()
        });
        this.Dt && this.Dt()
    }
    Dc.iB = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    t.ia(Dc, Bc, "DWRoute");
    t.extend(Dc.prototype, {
        search: function(a, b, c) {
            this.na.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function Ec(a, b) {
        Dc.call(this, a, b);
        b = b || {};
        this.zm(b.policy);
        this.Lf = rc;
        this.Ym = yc;
        this.Yp = oc
    }
    t.ia(Ec, Dc, "DrivingRoute");
    t.extend(Ec.prototype, {
        zm: function(a) {
            this.m.Oc = 0 <= a && 2 >= a ? a: 0
        }
    });
    function Fc(a, b) {
        Dc.call(this, a, b);
        this.Lf = sc;
        this.Ym = zc;
        this.Yp = mc;
        this.Aq = o
    }
    t.ia(Fc, Dc, "WalkingRoute");
    function Gc(a) {
        this.m = {};
        t.extend(this.m, a);
        this.na = [];
        var b = this;
        G.load("othersearch",
        function() {
            b.tc()
        })
    }
    t.ia(Gc, t.lang.ua, "Geocoder");
    t.extend(Gc.prototype, {
        kt: function(a, b, c) {
            this.na.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Ro: function(a, b, c) {
            this.na.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: da("Geocoder")
    });
    var Hc = Gc.prototype;
    W(Hc, {
        getPoint: Hc.kt,
        getLocation: Hc.Ro
    });
    function Geolocation(a) {
        this.m = {};
        t.extend(this.m, a);
        this.na = [];
        var b = this;
        G.load("othersearch",
        function() {
            b.tc()
        })
    }
    t.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.na.push({
                method: "getCurrentPosition",
                arguments: [a, b]
            })
        },
        Bi: s("vc")
    });
    var Ic = Geolocation.prototype;
    W(Ic, {
        getCurrentPosition: Ic.getCurrentPosition,
        getStatus: Ic.Bi
    });
    function Jc(a) {
        a = a || {};
        a.$ = a.renderOptions || {};
        this.m = {
            $: {
                map: a.$.map || n
            }
        };
        this.na = [];
        var b = this;
        G.load("othersearch",
        function() {
            b.tc()
        })
    }
    t.ia(Jc, t.lang.ua, "LocalCity");
    t.extend(Jc.prototype, {
        get: function(a) {
            this.na.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: da("LocalCity")
    });
    function Kc() {
        this.na = [];
        var a = this;
        G.load("othersearch",
        function() {
            a.tc()
        })
    }
    t.ia(Kc, t.lang.ua, "Boundary");
    t.extend(Kc.prototype, {
        get: function(a, b) {
            this.na.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: da("Boundary")
    });
    function Lc(a, b) {
        V.call(this, a, b);
        this.eB = tc;
        this.hB = wc;
        this.dB = uc;
        this.gB = xc;
        this.na = [];
        var c = this;
        G.load("buslinesearch",
        function() {
            c.tc()
        })
    }
    Lc.Bn = C.ca + "iw_plus.gif";
    Lc.bD = C.ca + "iw_minus.gif";
    Lc.uE = C.ca + "stop_icon.png";
    t.ia(Lc, V);
    t.extend(Lc.prototype, {
        getBusList: function(a) {
            this.na.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.na.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.m.Pz = a || q()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.m.Oz = a || q()
        },
        setBusListHtmlSetCallback: function(a) {
            this.m.Nz = a || q()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.m.Mz = a || q()
        },
        setPolylinesSetCallback: function(a) {
            this.m.Xt = a || q()
        }
    });
    function Mc(a) {
        V.call(this, a);
        a = a || {};
        this.uc = {
            input: a.input || n,
            Sr: a.baseDom || n,
            types: a.types || [],
            mp: a.onSearchComplete || q()
        };
        this.fc.src = a.location || "\u5168\u56fd";
        this.ag = "";
        this.fe = n;
        this.lw = "";
        this.Rf();
        va(5011);
        var b = this;
        G.load("autocomplete",
        function() {
            b.tc()
        })
    }
    t.ia(Mc, V, "Autocomplete");
    t.extend(Mc.prototype, {
        Rf: q(),
        show: q(),
        H: q(),
        yu: function(a) {
            this.uc.types = a
        },
        Ui: function(a) {
            this.fc.src = a
        },
        search: ba("ag"),
        Bp: ba("lw")
    });
    var ya;
    function sa(a, b) {
        this.B = "string" == typeof a ? t.R(a) : a;
        this.m = {
            linksControl: i,
            enableScrollWheelZoom: i,
            navigationControl: i,
            visible: i
        };
        var b = b || {},
        c;
        for (c in b) this.m[c] = b[c];
        this.Fb = {
            heading: 0,
            pitch: 0
        };
        this.qw = [];
        this.Ae = this.Ub = n;
        this.ml = this.Vk();
        this.ea = [];
        this.he = 1;
        this.oD = this.wg = "";
        var d = this;
        G.load("panorama",
        function() {
            d.Tb()
        },
        i);
        "api" == b.Fj ? va(5036) : va(5039)
    }
    var Nc = 4,
    Oc = 1;
    t.lang.ia(sa, t.lang.ua, "Panorama");
    t.extend(sa.prototype, {
        GG: s("qw"),
        ke: s("Ub"),
        dH: s("Yn"),
        pA: s("Yn"),
        ba: s("Ae"),
        Va: s("Fb"),
        U: s("he"),
        wi: s("wg"),
        dL: function() {
            return this.pK || []
        },
        aL: s("oD"),
        lh: function(a) {
            a != this.Ub && (this.Ub = a, this.Ae = n)
        },
        ga: function(a) {
            a.pb(this.Ae) || (this.Ae = a, this.Ub = n)
        },
        nh: function(a) {
            this.Fb = a;
            a = this.Fb.pitch;
            "cvsRender" == this.Vk() ? (90 < a && (a = 90), -90 > a && (a = -90)) : "cssRender" == this.Vk() && (45 < a && (a = 45), -45 > a && (a = -45));
            this.Fb.pitch = a
        },
        Fd: function(a) {
            a != this.he && (a > Nc && (a = Nc), a < Oc && (a = Oc), a != this.he && (this.he = a))
        },
        Cr: function() {
            if (this.A) for (var a = this.A.jt(), b = 0; b < a.length; b++)(a[b] instanceof S || a[b] instanceof Kb) && a[b].O && this.ea.push(a[b])
        },
        vu: ba("A"),
        Zg: function() {
            this.Eg.style.display = "none"
        },
        Gp: function() {
            this.Eg.style.display = "block"
        },
        hG: function() {
            this.m.enableScrollWheelZoom = i
        },
        NF: function() {
            this.m.enableScrollWheelZoom = o
        },
        show: function() {
            this.m.visible = i
        },
        H: function() {
            this.m.visible = o
        },
        Vk: function() {
            return ! H() && ob() ? "cvsRender": "cssRender"
        }
    });
    var Pc = sa.prototype;
    W(Pc, {
        setId: Pc.lh,
        setPosition: Pc.ga,
        setPov: Pc.nh,
        setZoom: Pc.Fd,
        getId: Pc.ke,
        getPosition: Pc.ba,
        getPov: Pc.Va,
        getZoom: Pc.U,
        getLinks: Pc.GG,
        enableDoubleClickZoom: Pc.OK,
        disableDoubleClickZoom: Pc.IK,
        enableScrollWheelZoom: Pc.hG,
        disableScrollWheelZoom: Pc.NF,
        show: Pc.show,
        hide: Pc.H
    });
    function zb(a, b) {
        this.Q = a || n;
        var c = this;
        c.Q && c.N();
        G.load("panorama",
        function() {
            c.GB()
        });
        "api" == (b || {}).Fj ? va(5037) : va(5040)
    }
    B.$t(function(a) {
        new zb(a, {
            Fj: "api"
        })
    });
    t.extend(zb.prototype, {
        N: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.Yn) {
                        b.pA(a.id);
                        var c = new L("ondataload");
                        c.data = a;
                        b.Ub = a.id;
                        b.Ae = a.position;
                        b.mK = a.gu;
                        b.nK = a.hu;
                        b.wg = a.description;
                        b.qw = a.links;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new L("onposition_changed"));
                        b.dispatchEvent(new L("onlinks_changed"))
                    }
                } else b.dispatchEvent(new L("onnoresult"))
            }
            var b = this.Q,
            c = this;
            b.addEventListener("id_changed",
            function() {
                c.Zl(b.ke(), a)
            });
            b.addEventListener("position_changed_inner",
            function() {
                c.yi(b.ba(), a)
            })
        },
        Zl: function(a, b) {
            this.Ub = a;
            this.$e = b;
            this.er = n
        },
        yi: function(a, b) {
            this.er = a;
            this.$e = b;
            this.Ub = n
        }
    });
    var Qc = zb.prototype;
    W(Qc, {
        getPanoramaById: Qc.Zl,
        getPanoramaByLocation: Qc.yi
    });
    function yb(a) {
        T.call(this);
        "api" == (a || {}).Fj ? va(5038) : va(5041)
    }
    yb.gv = ["http://pcsv0.map.bdimg.com/tile/", "http://pcsv1.map.bdimg.com/tile/"];
    yb.prototype = new T;
    yb.prototype.getTilesUrl = function(a, b) {
        return yb.gv[(a.x + a.y) % yb.gv.length] + "?udt=v&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b
    };
    yb.prototype.jm = da(i);
    B.Map = qa;
    B.Hotspot = Ka;
    B.MapType = cc;
    B.Point = F;
    B.Pixel = O;
    B.Size = K;
    B.Bounds = Ia;
    B.TileLayer = T;
    B.Projection = Cb;
    B.MercatorProjection = P;
    B.PerspectiveProjection = Ja;
    B.Copyright = function(a, b, c) {
        this.id = a;
        this.nb = b;
        this.content = c
    };
    B.Overlay = Eb;
    B.Label = Kb;
    B.Marker = S;
    B.Icon = Ib;
    B.Polyline = Ob;
    B.Polygon = Nb;
    B.InfoWindow = Jb;
    B.Circle = Pb;
    B.Control = R;
    B.NavigationControl = Ma;
    B.GeolocationControl = tb;
    B.OverviewMapControl = Oa;
    B.CopyrightControl = ub;
    B.ScaleControl = Na;
    B.MapTypeControl = Pa;
    B.PanoramaControl = xb;
    B.TrafficLayer = bc;
    B.CustomLayer = Qa;
    B.ContextMenu = Ab;
    B.MenuItem = Bb;
    B.LocalSearch = Fa;
    B.TransitRoute = Cc;
    B.DrivingRoute = Ec;
    B.WalkingRoute = Fc;
    B.Autocomplete = Mc;
    B.Geocoder = Gc;
    B.LocalCity = Jc;
    B.Geolocation = Geolocation;
    B.BusLineSearch = Lc;
    B.Boundary = Kc;
    B.VectorCloudLayer = $b;
    B.VectorTrafficLayer = ac;
    B.Panorama = sa;
    B.PanoramaService = zb;
    B.PanoramaCoverageLayer = yb;
    function W(a, b) {
        for (var c in b) a[c] = b[c]
    }
    W(window, {
        BMap: B,
        _jsload: function(a, b) {
            ha.Jp.IH && ha.Jp.set(a, b);
            G.gF(a, b)
        },
        BMAP_API_VERSION: "1.5"
    });
    var X = qa.prototype;
    W(X, {
        getBounds: X.ig,
        getCenter: X.Ga,
        getMapType: X.ha,
        getSize: X.Bb,
        setSize: X.Cc,
        getViewport: X.Wo,
        getZoom: X.U,
        centerAndZoom: X.Sd,
        panTo: X.re,
        panBy: X.qe,
        setCenter: X.se,
        setCurrentCity: X.uu,
        setMapType: X.pg,
        setViewport: X.kk,
        setZoom: X.Fd,
        highResolutionEnabled: X.$g,
        zoomTo: X.Xe,
        zoomIn: X.Qu,
        zoomOut: X.Ru,
        addHotspot: X.ko,
        removeHotspot: X.sI,
        clearHotspots: X.di,
        checkResize: X.iF,
        addControl: X.ho,
        removeControl: X.bA,
        getContainer: X.Ba,
        addContextMenu: X.zj,
        removeContextMenu: X.ck,
        addOverlay: X.Ua,
        removeOverlay: X.Qc,
        clearOverlays: X.Nx,
        openInfoWindow: X.Mb,
        closeInfoWindow: X.Xb,
        pointToOverlayPixel: X.Re,
        overlayPixelToPoint: X.Uz,
        getInfoWindow: X.Ke,
        getOverlays: X.jt,
        getPanes: function() {
            return {
                floatPane: this.Gc.Os,
                markerMouseTarget: this.Gc.Qt,
                floatShadow: this.Gc.uy,
                labelPane: this.Gc.qz,
                markerPane: this.Gc.Cz,
                markerShadow: this.Gc.Dz,
                mapPane: this.Gc.fp
            }
        },
        addTileLayer: X.pf,
        removeTileLayer: X.Gf,
        pixelToPoint: X.Sa,
        pointToPixel: X.kb,
        setFeatureStyle: X.iA,
        selectBaseElement: X.QL,
        setMapStyle: X.lA
    });
    var Rc = cc.prototype;
    W(Rc, {
        getTileLayer: Rc.bH,
        getMinZoom: Rc.Jj,
        getMaxZoom: Rc.xi,
        getProjection: Rc.Ai,
        getTextColor: Rc.$l,
        getTips: Rc.am
    });
    W(window, {
        BMAP_NORMAL_MAP: ra,
        BMAP_PERSPECTIVE_MAP: ta,
        BMAP_SATELLITE_MAP: wa,
        BMAP_HYBRID_MAP: xa
    });
    var Sc = P.prototype;
    W(Sc, {
        lngLatToPoint: Sc.mm,
        pointToLngLat: Sc.$j
    });
    var Tc = Ja.prototype;
    W(Tc, {
        lngLatToPoint: Tc.mm,
        pointToLngLat: Tc.$j
    });
    var Uc = Ia.prototype;
    W(Uc, {
        equals: Uc.pb,
        containsPoint: Uc.tF,
        containsBounds: Uc.sF,
        intersects: Uc.az,
        extend: Uc.extend,
        getCenter: Uc.Ga,
        isEmpty: Uc.mg,
        getSouthWest: Uc.me,
        getNorthEast: Uc.le,
        toSpan: Uc.Lu
    });
    var Vc = Eb.prototype;
    W(Vc, {
        isVisible: Vc.ng,
        show: Vc.show,
        hide: Vc.H
    });
    Eb.getZIndex = Eb.bm;
    var Wc = Q.prototype;
    W(Wc, {
        openInfoWindow: Wc.Mb,
        closeInfoWindow: Wc.Xb,
        enableMassClear: Wc.Sg,
        disableMassClear: Wc.MF,
        show: Wc.show,
        hide: Wc.H,
        getMap: Wc.gt,
        addContextMenu: Wc.zj,
        removeContextMenu: Wc.ck
    });
    var Xc = S.prototype;
    W(Xc, {
        setIcon: Xc.Hf,
        getIcon: Xc.Ey,
        setPosition: Xc.ga,
        getPosition: Xc.ba,
        setOffset: Xc.Rc,
        getOffset: Xc.Le,
        getLabel: Xc.Fy,
        setLabel: Xc.Ti,
        setTitle: Xc.$b,
        setTop: Xc.jk,
        enableDragging: Xc.Ab,
        disableDragging: Xc.ns,
        setZIndex: Xc.Fp,
        getMap: Xc.gt,
        setAnimation: Xc.Si,
        setShadow: Xc.Ep,
        hide: Xc.H
    });
    W(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Yc = Kb.prototype;
    W(Yc, {
        setStyle: Yc.oc,
        setStyles: Yc.oh,
        setContent: Yc.Bc,
        setPosition: Yc.ga,
        getPosition: Yc.ba,
        setOffset: Yc.Rc,
        getOffset: Yc.Le,
        setTitle: Yc.$b,
        setZIndex: Yc.Fp,
        getMap: Yc.gt
    });
    var Zc = Ib.prototype;
    W(Zc, {
        setImageUrl: Zc.TI,
        setSize: Zc.Cc,
        setAnchor: Zc.Pb,
        setImageOffset: Zc.xm,
        setImageSize: Zc.SI,
        setInfoWindowAnchor: Zc.VI,
        setPrintImageUrl: Zc.dJ
    });
    var $c = Jb.prototype;
    W($c, {
        redraw: $c.Ac,
        setTitle: $c.$b,
        setContent: $c.Bc,
        getContent: $c.yy,
        getPosition: $c.ba,
        enableMaximize: $c.He,
        disableMaximize: $c.Eo,
        isOpen: $c.za,
        setMaxContent: $c.ym,
        maximize: $c.gp,
        enableAutoPan: $c.Nl
    });
    var ad = Gb.prototype;
    W(ad, {
        getPath: ad.Kc,
        setPath: ad.Sc,
        setPositionAt: ad.Vi,
        getStrokeColor: ad.WG,
        setStrokeWeight: ad.Cm,
        getStrokeWeight: ad.My,
        setStrokeOpacity: ad.Am,
        getStrokeOpacity: ad.XG,
        setFillOpacity: ad.Ap,
        getFillOpacity: ad.CG,
        setStrokeStyle: ad.Bm,
        getStrokeStyle: ad.Ly,
        getFillColor: ad.BG,
        getBounds: ad.ig,
        enableEditing: ad.Ud,
        disableEditing: ad.LF
    });
    var bd = Pb.prototype;
    W(bd, {
        setCenter: bd.se,
        getCenter: bd.Ga,
        getRadius: bd.PG,
        setRadius: bd.Dp
    });
    var cd = Nb.prototype;
    W(cd, {
        getPath: cd.Kc,
        setPath: cd.Sc,
        setPositionAt: cd.Vi
    });
    var dd = Ka.prototype;
    W(dd, {
        getPosition: dd.ba,
        setPosition: dd.ga,
        getText: dd.ut,
        setText: dd.Dm
    });
    F.prototype.equals = F.prototype.pb;
    O.prototype.equals = O.prototype.pb;
    K.prototype.equals = K.prototype.pb;
    W(window, {
        BMAP_ANCHOR_TOP_LEFT: qb,
        BMAP_ANCHOR_TOP_RIGHT: rb,
        BMAP_ANCHOR_BOTTOM_LEFT: sb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var fd = R.prototype;
    W(fd, {
        setAnchor: fd.Pb,
        getAnchor: fd.Qs,
        setOffset: fd.Rc,
        getOffset: fd.Le,
        show: fd.show,
        hide: fd.H,
        isVisible: fd.ng,
        toString: fd.toString
    });
    var gd = Ma.prototype;
    W(gd, {
        getType: gd.Pj,
        setType: gd.Wi
    });
    W(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var hd = Oa.prototype;
    W(hd, {
        changeView: hd.Hc,
        setSize: hd.Cc,
        getSize: hd.Bb
    });
    var id = Na.prototype;
    W(id, {
        getUnit: id.fH,
        setUnit: id.zu
    });
    W(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var jd = ub.prototype;
    W(jd, {
        addCopyright: jd.io,
        removeCopyright: jd.ku,
        getCopyright: jd.ui,
        getCopyrightCollection: jd.Ws
    });
    W(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: wb,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1
    });
    var kd = T.prototype;
    W(kd, {
        getMapType: kd.ha,
        getCopyright: kd.ui,
        isTransparentPng: kd.jm
    });
    var ld = Ab.prototype;
    W(ld, {
        addItem: ld.lo,
        addSeparator: ld.Qr,
        removeSeparator: ld.lu
    });
    var md = Bb.prototype;
    W(md, {
        setText: md.Dm
    });
    var nd = V.prototype;
    W(nd, {
        getStatus: nd.Bi,
        setSearchCompleteCallback: nd.xu,
        getPageCapacity: nd.zd,
        setPageCapacity: nd.ik,
        setLocation: nd.Ui,
        disableFirstResultSelection: nd.os,
        enableFirstResultSelection: nd.Es,
        gotoPage: nd.Di,
        searchNearby: nd.gk,
        searchInBounds: nd.Ri,
        search: nd.search
    });
    W(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: 2,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: 8
    });
    W(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    W(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2
    });
    var od = Bc.prototype;
    W(od, {
        clearResults: od.fd
    });
    var pd = Cc.prototype;
    W(pd, {
        setPolicy: pd.zm,
        toString: pd.toString,
        setPageCapacity: pd.ik
    });
    W(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME: 0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    W(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    W(window, {
        BMAP_ROUTE_TYPE_DRIVING: oc,
        BMAP_ROUTE_TYPE_WALKING: mc
    });
    W(window, {
        BMAP_ROUTE_STATUS_NORMAL: pc,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var qd = Ec.prototype;
    W(qd, {
        setPolicy: qd.zm
    });
    var rd = Mc.prototype;
    W(rd, {
        show: rd.show,
        hide: rd.H,
        setTypes: rd.yu,
        setLocation: rd.Ui,
        search: rd.search,
        setInputValue: rd.Bp
    });
    W(Qa.prototype, {});
    var sd = Kc.prototype;
    W(sd, {
        get: sd.get
    });
    W(yb.prototype, {});
    B.OE();
})()