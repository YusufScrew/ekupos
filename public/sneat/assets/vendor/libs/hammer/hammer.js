/*! For license information please see hammer.js.LICENSE.txt */
!function() {
    var t = {
        840: function(t, e, n) {
            var i;
            !function(r, s, o, a) {
                "use strict";
                var u, h = ["", "webkit", "Moz", "MS", "ms", "o"], c = s.createElement("div"), l = Math.round, p = Math.abs, f = Date.now;
                function v(t, e, n) {
                    return setTimeout(I(t, n), e)
                }
                function d(t, e, n) {
                    return !!Array.isArray(t) && (m(t, n[e], n),
                    !0)
                }
                function m(t, e, n) {
                    var i;
                    if (t)
                        if (t.forEach)
                            t.forEach(e, n);
                        else if (t.length !== a)
                            for (i = 0; i < t.length; )
                                e.call(n, t[i], i, t),
                                i++;
                        else
                            for (i in t)
                                t.hasOwnProperty(i) && e.call(n, t[i], i, t)
                }
                function g(t, e, n) {
                    var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
                    return function() {
                        var e = new Error("get-stack-trace")
                          , n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
                          , s = r.console && (r.console.warn || r.console.log);
                        return s && s.call(r.console, i, n),
                        t.apply(this, arguments)
                    }
                }
                u = "function" != typeof Object.assign ? function(t) {
                    if (t === a || null === t)
                        throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (i !== a && null !== i)
                            for (var r in i)
                                i.hasOwnProperty(r) && (e[r] = i[r])
                    }
                    return e
                }
                : Object.assign;
                var y = g((function(t, e, n) {
                    for (var i = Object.keys(e), r = 0; r < i.length; )
                        (!n || n && t[i[r]] === a) && (t[i[r]] = e[i[r]]),
                        r++;
                    return t
                }
                ), "extend", "Use `assign`.")
                  , T = g((function(t, e) {
                    return y(t, e, !0)
                }
                ), "merge", "Use `assign`.");
                function E(t, e, n) {
                    var i, r = e.prototype;
                    (i = t.prototype = Object.create(r)).constructor = t,
                    i._super = r,
                    n && u(i, n)
                }
                function I(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function _(t, e) {
                    return "function" == typeof t ? t.apply(e && e[0] || a, e) : t
                }
                function b(t, e) {
                    return t === a ? e : t
                }
                function A(t, e, n) {
                    m(x(e), (function(e) {
                        t.addEventListener(e, n, !1)
                    }
                    ))
                }
                function S(t, e, n) {
                    m(x(e), (function(e) {
                        t.removeEventListener(e, n, !1)
                    }
                    ))
                }
                function P(t, e) {
                    for (; t; ) {
                        if (t == e)
                            return !0;
                        t = t.parentNode
                    }
                    return !1
                }
                function C(t, e) {
                    return t.indexOf(e) > -1
                }
                function x(t) {
                    return t.trim().split(/\s+/g)
                }
                function D(t, e, n) {
                    if (t.indexOf && !n)
                        return t.indexOf(e);
                    for (var i = 0; i < t.length; ) {
                        if (n && t[i][n] == e || !n && t[i] === e)
                            return i;
                        i++
                    }
                    return -1
                }
                function w(t) {
                    return Array.prototype.slice.call(t, 0)
                }
                function O(t, e, n) {
                    for (var i = [], r = [], s = 0; s < t.length; ) {
                        var o = e ? t[s][e] : t[s];
                        D(r, o) < 0 && i.push(t[s]),
                        r[s] = o,
                        s++
                    }
                    return n && (i = e ? i.sort((function(t, n) {
                        return t[e] > n[e]
                    }
                    )) : i.sort()),
                    i
                }
                function M(t, e) {
                    for (var n, i, r = e[0].toUpperCase() + e.slice(1), s = 0; s < h.length; ) {
                        if ((i = (n = h[s]) ? n + r : e)in t)
                            return i;
                        s++
                    }
                    return a
                }
                var R = 1;
                function z(t) {
                    var e = t.ownerDocument || t;
                    return e.defaultView || e.parentWindow || r
                }
                var N = "ontouchstart"in r
                  , X = M(r, "PointerEvent") !== a
                  , Y = N && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
                  , F = "touch"
                  , W = "mouse"
                  , q = ["x", "y"]
                  , k = ["clientX", "clientY"];
                function L(t, e) {
                    var n = this;
                    this.manager = t,
                    this.callback = e,
                    this.element = t.element,
                    this.target = t.options.inputTarget,
                    this.domHandler = function(e) {
                        _(t.options.enable, [t]) && n.handler(e)
                    }
                    ,
                    this.init()
                }
                function j(t, e, n) {
                    var i = n.pointers.length
                      , r = n.changedPointers.length
                      , s = 1 & e && i - r == 0
                      , o = 12 & e && i - r == 0;
                    n.isFirst = !!s,
                    n.isFinal = !!o,
                    s && (t.session = {}),
                    n.eventType = e,
                    function(t, e) {
                        var n = t.session
                          , i = e.pointers
                          , r = i.length;
                        n.firstInput || (n.firstInput = H(e)),
                        r > 1 && !n.firstMultiple ? n.firstMultiple = H(e) : 1 === r && (n.firstMultiple = !1);
                        var s = n.firstInput
                          , o = n.firstMultiple
                          , u = o ? o.center : s.center
                          , h = e.center = U(i);
                        e.timeStamp = f(),
                        e.deltaTime = e.timeStamp - s.timeStamp,
                        e.angle = B(u, h),
                        e.distance = Z(u, h),
                        function(t, e) {
                            var n = e.center
                              , i = t.offsetDelta || {}
                              , r = t.prevDelta || {}
                              , s = t.prevInput || {};
                            1 !== e.eventType && 4 !== s.eventType || (r = t.prevDelta = {
                                x: s.deltaX || 0,
                                y: s.deltaY || 0
                            },
                            i = t.offsetDelta = {
                                x: n.x,
                                y: n.y
                            }),
                            e.deltaX = r.x + (n.x - i.x),
                            e.deltaY = r.y + (n.y - i.y)
                        }(n, e),
                        e.offsetDirection = G(e.deltaX, e.deltaY);
                        var c, l, v = V(e.deltaTime, e.deltaX, e.deltaY);
                        e.overallVelocityX = v.x,
                        e.overallVelocityY = v.y,
                        e.overallVelocity = p(v.x) > p(v.y) ? v.x : v.y,
                        e.scale = o ? (c = o.pointers,
                        Z((l = i)[0], l[1], k) / Z(c[0], c[1], k)) : 1,
                        e.rotation = o ? function(t, e) {
                            return B(e[1], e[0], k) + B(t[1], t[0], k)
                        }(o.pointers, i) : 0,
                        e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                        function(t, e) {
                            var n, i, r, s, o = t.lastInterval || e, u = e.timeStamp - o.timeStamp;
                            if (8 != e.eventType && (u > 25 || o.velocity === a)) {
                                var h = e.deltaX - o.deltaX
                                  , c = e.deltaY - o.deltaY
                                  , l = V(u, h, c);
                                i = l.x,
                                r = l.y,
                                n = p(l.x) > p(l.y) ? l.x : l.y,
                                s = G(h, c),
                                t.lastInterval = e
                            } else
                                n = o.velocity,
                                i = o.velocityX,
                                r = o.velocityY,
                                s = o.direction;
                            e.velocity = n,
                            e.velocityX = i,
                            e.velocityY = r,
                            e.direction = s
                        }(n, e);
                        var d = t.element;
                        P(e.srcEvent.target, d) && (d = e.srcEvent.target),
                        e.target = d
                    }(t, n),
                    t.emit("hammer.input", n),
                    t.recognize(n),
                    t.session.prevInput = n
                }
                function H(t) {
                    for (var e = [], n = 0; n < t.pointers.length; )
                        e[n] = {
                            clientX: l(t.pointers[n].clientX),
                            clientY: l(t.pointers[n].clientY)
                        },
                        n++;
                    return {
                        timeStamp: f(),
                        pointers: e,
                        center: U(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }
                function U(t) {
                    var e = t.length;
                    if (1 === e)
                        return {
                            x: l(t[0].clientX),
                            y: l(t[0].clientY)
                        };
                    for (var n = 0, i = 0, r = 0; r < e; )
                        n += t[r].clientX,
                        i += t[r].clientY,
                        r++;
                    return {
                        x: l(n / e),
                        y: l(i / e)
                    }
                }
                function V(t, e, n) {
                    return {
                        x: e / t || 0,
                        y: n / t || 0
                    }
                }
                function G(t, e) {
                    return t === e ? 1 : p(t) >= p(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : 16
                }
                function Z(t, e, n) {
                    n || (n = q);
                    var i = e[n[0]] - t[n[0]]
                      , r = e[n[1]] - t[n[1]];
                    return Math.sqrt(i * i + r * r)
                }
                function B(t, e, n) {
                    n || (n = q);
                    var i = e[n[0]] - t[n[0]]
                      , r = e[n[1]] - t[n[1]];
                    return 180 * Math.atan2(r, i) / Math.PI
                }
                L.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && A(this.element, this.evEl, this.domHandler),
                        this.evTarget && A(this.target, this.evTarget, this.domHandler),
                        this.evWin && A(z(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && S(this.element, this.evEl, this.domHandler),
                        this.evTarget && S(this.target, this.evTarget, this.domHandler),
                        this.evWin && S(z(this.element), this.evWin, this.domHandler)
                    }
                };
                var $ = {
                    mousedown: 1,
                    mousemove: 2,
                    mouseup: 4
                }
                  , J = "mousedown"
                  , K = "mousemove mouseup";
                function Q() {
                    this.evEl = J,
                    this.evWin = K,
                    this.pressed = !1,
                    L.apply(this, arguments)
                }
                E(Q, L, {
                    handler: function(t) {
                        var e = $[t.type];
                        1 & e && 0 === t.button && (this.pressed = !0),
                        2 & e && 1 !== t.which && (e = 4),
                        this.pressed && (4 & e && (this.pressed = !1),
                        this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: W,
                            srcEvent: t
                        }))
                    }
                });
                var tt = {
                    pointerdown: 1,
                    pointermove: 2,
                    pointerup: 4,
                    pointercancel: 8,
                    pointerout: 8
                }
                  , et = {
                    2: F,
                    3: "pen",
                    4: W,
                    5: "kinect"
                }
                  , nt = "pointerdown"
                  , it = "pointermove pointerup pointercancel";
                function rt() {
                    this.evEl = nt,
                    this.evWin = it,
                    L.apply(this, arguments),
                    this.store = this.manager.session.pointerEvents = []
                }
                r.MSPointerEvent && !r.PointerEvent && (nt = "MSPointerDown",
                it = "MSPointerMove MSPointerUp MSPointerCancel"),
                E(rt, L, {
                    handler: function(t) {
                        var e = this.store
                          , n = !1
                          , i = t.type.toLowerCase().replace("ms", "")
                          , r = tt[i]
                          , s = et[t.pointerType] || t.pointerType
                          , o = s == F
                          , a = D(e, t.pointerId, "pointerId");
                        1 & r && (0 === t.button || o) ? a < 0 && (e.push(t),
                        a = e.length - 1) : 12 & r && (n = !0),
                        a < 0 || (e[a] = t,
                        this.callback(this.manager, r, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: s,
                            srcEvent: t
                        }),
                        n && e.splice(a, 1))
                    }
                });
                var st = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                }
                  , ot = "touchstart"
                  , at = "touchstart touchmove touchend touchcancel";
                function ut() {
                    this.evTarget = ot,
                    this.evWin = at,
                    this.started = !1,
                    L.apply(this, arguments)
                }
                function ht(t, e) {
                    var n = w(t.touches)
                      , i = w(t.changedTouches);
                    return 12 & e && (n = O(n.concat(i), "identifier", !0)),
                    [n, i]
                }
                E(ut, L, {
                    handler: function(t) {
                        var e = st[t.type];
                        if (1 === e && (this.started = !0),
                        this.started) {
                            var n = ht.call(this, t, e);
                            12 & e && n[0].length - n[1].length == 0 && (this.started = !1),
                            this.callback(this.manager, e, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: F,
                                srcEvent: t
                            })
                        }
                    }
                });
                var ct = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                }
                  , lt = "touchstart touchmove touchend touchcancel";
                function pt() {
                    this.evTarget = lt,
                    this.targetIds = {},
                    L.apply(this, arguments)
                }
                function ft(t, e) {
                    var n = w(t.touches)
                      , i = this.targetIds;
                    if (3 & e && 1 === n.length)
                        return i[n[0].identifier] = !0,
                        [n, n];
                    var r, s, o = w(t.changedTouches), a = [], u = this.target;
                    if (s = n.filter((function(t) {
                        return P(t.target, u)
                    }
                    )),
                    1 === e)
                        for (r = 0; r < s.length; )
                            i[s[r].identifier] = !0,
                            r++;
                    for (r = 0; r < o.length; )
                        i[o[r].identifier] && a.push(o[r]),
                        12 & e && delete i[o[r].identifier],
                        r++;
                    return a.length ? [O(s.concat(a), "identifier", !0), a] : void 0
                }
                function vt() {
                    L.apply(this, arguments);
                    var t = I(this.handler, this);
                    this.touch = new pt(this.manager,t),
                    this.mouse = new Q(this.manager,t),
                    this.primaryTouch = null,
                    this.lastTouches = []
                }
                function dt(t, e) {
                    1 & t ? (this.primaryTouch = e.changedPointers[0].identifier,
                    mt.call(this, e)) : 12 & t && mt.call(this, e)
                }
                function mt(t) {
                    var e = t.changedPointers[0];
                    if (e.identifier === this.primaryTouch) {
                        var n = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        this.lastTouches.push(n);
                        var i = this.lastTouches;
                        setTimeout((function() {
                            var t = i.indexOf(n);
                            t > -1 && i.splice(t, 1)
                        }
                        ), 2500)
                    }
                }
                function gt(t) {
                    for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var r = this.lastTouches[i]
                          , s = Math.abs(e - r.x)
                          , o = Math.abs(n - r.y);
                        if (s <= 25 && o <= 25)
                            return !0
                    }
                    return !1
                }
                E(pt, L, {
                    handler: function(t) {
                        var e = ct[t.type]
                          , n = ft.call(this, t, e);
                        n && this.callback(this.manager, e, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: F,
                            srcEvent: t
                        })
                    }
                }),
                E(vt, L, {
                    handler: function(t, e, n) {
                        var i = n.pointerType == F
                          , r = n.pointerType == W;
                        if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if (i)
                                dt.call(this, e, n);
                            else if (r && gt.call(this, n))
                                return;
                            this.callback(t, e, n)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(),
                        this.mouse.destroy()
                    }
                });
                var yt = M(c.style, "touchAction")
                  , Tt = yt !== a
                  , Et = "compute"
                  , It = "auto"
                  , _t = "manipulation"
                  , bt = "none"
                  , At = "pan-x"
                  , St = "pan-y"
                  , Pt = function() {
                    if (!Tt)
                        return !1;
                    var t = {}
                      , e = r.CSS && r.CSS.supports;
                    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
                        t[n] = !e || r.CSS.supports("touch-action", n)
                    }
                    )),
                    t
                }();
                function Ct(t, e) {
                    this.manager = t,
                    this.set(e)
                }
                Ct.prototype = {
                    set: function(t) {
                        t == Et && (t = this.compute()),
                        Tt && this.manager.element.style && Pt[t] && (this.manager.element.style[yt] = t),
                        this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return m(this.manager.recognizers, (function(e) {
                            _(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }
                        )),
                        function(t) {
                            if (C(t, bt))
                                return bt;
                            var e = C(t, At)
                              , n = C(t, St);
                            return e && n ? bt : e || n ? e ? At : St : C(t, _t) ? _t : It
                        }(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        var e = t.srcEvent
                          , n = t.offsetDirection;
                        if (this.manager.session.prevented)
                            e.preventDefault();
                        else {
                            var i = this.actions
                              , r = C(i, bt) && !Pt.none
                              , s = C(i, St) && !Pt["pan-y"]
                              , o = C(i, At) && !Pt["pan-x"];
                            if (r) {
                                var a = 1 === t.pointers.length
                                  , u = t.distance < 2
                                  , h = t.deltaTime < 250;
                                if (a && u && h)
                                    return
                            }
                            if (!o || !s)
                                return r || s && 6 & n || o && 24 & n ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0,
                        t.preventDefault()
                    }
                };
                var xt = 32;
                function Dt(t) {
                    this.options = u({}, this.defaults, t || {}),
                    this.id = R++,
                    this.manager = null,
                    this.options.enable = b(this.options.enable, !0),
                    this.state = 1,
                    this.simultaneous = {},
                    this.requireFail = []
                }
                function wt(t) {
                    return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
                }
                function Ot(t) {
                    return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : ""
                }
                function Mt(t, e) {
                    var n = e.manager;
                    return n ? n.get(t) : t
                }
                function Rt() {
                    Dt.apply(this, arguments)
                }
                function zt() {
                    Rt.apply(this, arguments),
                    this.pX = null,
                    this.pY = null
                }
                function Nt() {
                    Rt.apply(this, arguments)
                }
                function Xt() {
                    Dt.apply(this, arguments),
                    this._timer = null,
                    this._input = null
                }
                function Yt() {
                    Rt.apply(this, arguments)
                }
                function Ft() {
                    Rt.apply(this, arguments)
                }
                function Wt() {
                    Dt.apply(this, arguments),
                    this.pTime = !1,
                    this.pCenter = !1,
                    this._timer = null,
                    this._input = null,
                    this.count = 0
                }
                function qt(t, e) {
                    return (e = e || {}).recognizers = b(e.recognizers, qt.defaults.preset),
                    new kt(t,e)
                }
                function kt(t, e) {
                    this.options = u({}, qt.defaults, e || {}),
                    this.options.inputTarget = this.options.inputTarget || t,
                    this.handlers = {},
                    this.session = {},
                    this.recognizers = [],
                    this.oldCssProps = {},
                    this.element = t,
                    this.input = new (this.options.inputClass || (X ? rt : Y ? pt : N ? vt : Q))(this,j),
                    this.touchAction = new Ct(this,this.options.touchAction),
                    Lt(this, !0),
                    m(this.options.recognizers, (function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]),
                        t[3] && e.requireFailure(t[3])
                    }
                    ), this)
                }
                function Lt(t, e) {
                    var n, i = t.element;
                    i.style && (m(t.options.cssProps, (function(r, s) {
                        n = M(i.style, s),
                        e ? (t.oldCssProps[n] = i.style[n],
                        i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
                    }
                    )),
                    e || (t.oldCssProps = {}))
                }
                Dt.prototype = {
                    defaults: {},
                    set: function(t) {
                        return u(this.options, t),
                        this.manager && this.manager.touchAction.update(),
                        this
                    },
                    recognizeWith: function(t) {
                        if (d(t, "recognizeWith", this))
                            return this;
                        var e = this.simultaneous;
                        return e[(t = Mt(t, this)).id] || (e[t.id] = t,
                        t.recognizeWith(this)),
                        this
                    },
                    dropRecognizeWith: function(t) {
                        return d(t, "dropRecognizeWith", this) || (t = Mt(t, this),
                        delete this.simultaneous[t.id]),
                        this
                    },
                    requireFailure: function(t) {
                        if (d(t, "requireFailure", this))
                            return this;
                        var e = this.requireFail;
                        return -1 === D(e, t = Mt(t, this)) && (e.push(t),
                        t.requireFailure(this)),
                        this
                    },
                    dropRequireFailure: function(t) {
                        if (d(t, "dropRequireFailure", this))
                            return this;
                        t = Mt(t, this);
                        var e = D(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1),
                        this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        var e = this
                          , n = this.state;
                        function i(n) {
                            e.manager.emit(n, t)
                        }
                        n < 8 && i(e.options.event + wt(n)),
                        i(e.options.event),
                        t.additionalEvent && i(t.additionalEvent),
                        n >= 8 && i(e.options.event + wt(n))
                    },
                    tryEmit: function(t) {
                        if (this.canEmit())
                            return this.emit(t);
                        this.state = xt
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length; ) {
                            if (!(33 & this.requireFail[t].state))
                                return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = u({}, t);
                        if (!_(this.options.enable, [this, e]))
                            return this.reset(),
                            void (this.state = xt);
                        56 & this.state && (this.state = 1),
                        this.state = this.process(e),
                        30 & this.state && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {}
                },
                E(Rt, Dt, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state
                          , n = t.eventType
                          , i = 6 & e
                          , r = this.attrTest(t);
                        return i && (8 & n || !r) ? 16 | e : i || r ? 4 & n ? 8 | e : 2 & e ? 4 | e : 2 : xt
                    }
                }),
                E(zt, Rt, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var t = this.options.direction
                          , e = [];
                        return 6 & t && e.push(St),
                        24 & t && e.push(At),
                        e
                    },
                    directionTest: function(t) {
                        var e = this.options
                          , n = !0
                          , i = t.distance
                          , r = t.direction
                          , s = t.deltaX
                          , o = t.deltaY;
                        return r & e.direction || (6 & e.direction ? (r = 0 === s ? 1 : s < 0 ? 2 : 4,
                        n = s != this.pX,
                        i = Math.abs(t.deltaX)) : (r = 0 === o ? 1 : o < 0 ? 8 : 16,
                        n = o != this.pY,
                        i = Math.abs(t.deltaY))),
                        t.direction = r,
                        n && i > e.threshold && r & e.direction
                    },
                    attrTest: function(t) {
                        return Rt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX,
                        this.pY = t.deltaY;
                        var e = Ot(t.direction);
                        e && (t.additionalEvent = this.options.event + e),
                        this._super.emit.call(this, t)
                    }
                }),
                E(Nt, Rt, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [bt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(t) {
                        if (1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            t.additionalEvent = this.options.event + e
                        }
                        this._super.emit.call(this, t)
                    }
                }),
                E(Xt, Dt, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return [It]
                    },
                    process: function(t) {
                        var e = this.options
                          , n = t.pointers.length === e.pointers
                          , i = t.distance < e.threshold
                          , r = t.deltaTime > e.time;
                        if (this._input = t,
                        !i || !n || 12 & t.eventType && !r)
                            this.reset();
                        else if (1 & t.eventType)
                            this.reset(),
                            this._timer = v((function() {
                                this.state = 8,
                                this.tryEmit()
                            }
                            ), e.time, this);
                        else if (4 & t.eventType)
                            return 8;
                        return xt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = f(),
                        this.manager.emit(this.options.event, this._input)))
                    }
                }),
                E(Yt, Rt, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [bt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                    }
                }),
                E(Ft, Rt, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return zt.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, n = this.options.direction;
                        return 30 & n ? e = t.overallVelocity : 6 & n ? e = t.overallVelocityX : 24 & n && (e = t.overallVelocityY),
                        this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && p(e) > this.options.velocity && 4 & t.eventType
                    },
                    emit: function(t) {
                        var e = Ot(t.offsetDirection);
                        e && this.manager.emit(this.options.event + e, t),
                        this.manager.emit(this.options.event, t)
                    }
                }),
                E(Wt, Dt, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [_t]
                    },
                    process: function(t) {
                        var e = this.options
                          , n = t.pointers.length === e.pointers
                          , i = t.distance < e.threshold
                          , r = t.deltaTime < e.time;
                        if (this.reset(),
                        1 & t.eventType && 0 === this.count)
                            return this.failTimeout();
                        if (i && r && n) {
                            if (4 != t.eventType)
                                return this.failTimeout();
                            var s = !this.pTime || t.timeStamp - this.pTime < e.interval
                              , o = !this.pCenter || Z(this.pCenter, t.center) < e.posThreshold;
                            if (this.pTime = t.timeStamp,
                            this.pCenter = t.center,
                            o && s ? this.count += 1 : this.count = 1,
                            this._input = t,
                            0 == this.count % e.taps)
                                return this.hasRequireFailures() ? (this._timer = v((function() {
                                    this.state = 8,
                                    this.tryEmit()
                                }
                                ), e.interval, this),
                                2) : 8
                        }
                        return xt
                    },
                    failTimeout: function() {
                        return this._timer = v((function() {
                            this.state = xt
                        }
                        ), this.options.interval, this),
                        xt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count,
                        this.manager.emit(this.options.event, this._input))
                    }
                }),
                qt.VERSION = "2.0.7",
                qt.defaults = {
                    domEvents: !1,
                    touchAction: Et,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [[Yt, {
                        enable: !1
                    }], [Nt, {
                        enable: !1
                    }, ["rotate"]], [Ft, {
                        direction: 6
                    }], [zt, {
                        direction: 6
                    }, ["swipe"]], [Wt], [Wt, {
                        event: "doubletap",
                        taps: 2
                    }, ["tap"]], [Xt]],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                },
                kt.prototype = {
                    set: function(t) {
                        return u(this.options, t),
                        t.touchAction && this.touchAction.update(),
                        t.inputTarget && (this.input.destroy(),
                        this.input.target = t.inputTarget,
                        this.input.init()),
                        this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            var n;
                            this.touchAction.preventDefaults(t);
                            var i = this.recognizers
                              , r = e.curRecognizer;
                            (!r || r && 8 & r.state) && (r = e.curRecognizer = null);
                            for (var s = 0; s < i.length; )
                                n = i[s],
                                2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t),
                                !r && 14 & n.state && (r = e.curRecognizer = n),
                                s++
                        }
                    },
                    get: function(t) {
                        if (t instanceof Dt)
                            return t;
                        for (var e = this.recognizers, n = 0; n < e.length; n++)
                            if (e[n].options.event == t)
                                return e[n];
                        return null
                    },
                    add: function(t) {
                        if (d(t, "add", this))
                            return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e),
                        this.recognizers.push(t),
                        t.manager = this,
                        this.touchAction.update(),
                        t
                    },
                    remove: function(t) {
                        if (d(t, "remove", this))
                            return this;
                        if (t = this.get(t)) {
                            var e = this.recognizers
                              , n = D(e, t);
                            -1 !== n && (e.splice(n, 1),
                            this.touchAction.update())
                        }
                        return this
                    },
                    on: function(t, e) {
                        if (t !== a && e !== a) {
                            var n = this.handlers;
                            return m(x(t), (function(t) {
                                n[t] = n[t] || [],
                                n[t].push(e)
                            }
                            )),
                            this
                        }
                    },
                    off: function(t, e) {
                        if (t !== a) {
                            var n = this.handlers;
                            return m(x(t), (function(t) {
                                e ? n[t] && n[t].splice(D(n[t], e), 1) : delete n[t]
                            }
                            )),
                            this
                        }
                    },
                    emit: function(t, e) {
                        this.options.domEvents && function(t, e) {
                            var n = s.createEvent("Event");
                            n.initEvent(t, !0, !0),
                            n.gesture = e,
                            e.target.dispatchEvent(n)
                        }(t, e);
                        var n = this.handlers[t] && this.handlers[t].slice();
                        if (n && n.length) {
                            e.type = t,
                            e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            }
                            ;
                            for (var i = 0; i < n.length; )
                                n[i](e),
                                i++
                        }
                    },
                    destroy: function() {
                        this.element && Lt(this, !1),
                        this.handlers = {},
                        this.session = {},
                        this.input.destroy(),
                        this.element = null
                    }
                },
                u(qt, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: xt,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: 24,
                    DIRECTION_ALL: 30,
                    Manager: kt,
                    Input: L,
                    TouchAction: Ct,
                    TouchInput: pt,
                    MouseInput: Q,
                    PointerEventInput: rt,
                    TouchMouseInput: vt,
                    SingleTouchInput: ut,
                    Recognizer: Dt,
                    AttrRecognizer: Rt,
                    Tap: Wt,
                    Pan: zt,
                    Swipe: Ft,
                    Pinch: Nt,
                    Rotate: Yt,
                    Press: Xt,
                    on: A,
                    off: S,
                    each: m,
                    merge: T,
                    extend: y,
                    assign: u,
                    inherit: E,
                    bindFn: I,
                    prefixed: M
                }),
                (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = qt,
                (i = function() {
                    return qt
                }
                .call(e, n, e, t)) === a || (t.exports = i)
            }(window, document)
        }
    }
      , e = {};
    function n(i) {
        var r = e[i];
        if (void 0 !== r)
            return r.exports;
        var s = e[i] = {
            exports: {}
        };
        return t[i](s, s.exports, n),
        s.exports
    }
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    n.d = function(t, e) {
        for (var i in e)
            n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ;
    var i = {};
    !function() {
        "use strict";
        n.r(i),
        n(840)
    }();
    var r = window;
    for (var s in i)
        r[s] = i[s];
    i.__esModule && Object.defineProperty(r, "__esModule", {
        value: !0
    })
}();
