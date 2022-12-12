!function() {
    var e = {
        2786: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("af", {
                    months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                    weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                    weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                    meridiemParse: /vm|nm/i,
                    isPM: function(e) {
                        return /^nm$/i.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Vandag om] LT",
                        nextDay: "[Môre om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[Gister om] LT",
                        lastWeek: "[Laas] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oor %s",
                        past: "%s gelede",
                        s: "'n paar sekondes",
                        ss: "%d sekondes",
                        m: "'n minuut",
                        mm: "%d minute",
                        h: "'n uur",
                        hh: "%d ure",
                        d: "'n dag",
                        dd: "%d dae",
                        M: "'n maand",
                        MM: "%d maande",
                        y: "'n jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        4130: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                }
                  , t = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }
                  , s = function(e) {
                    return function(s, n, r, i) {
                        var d = a(s)
                          , _ = t[e][a(s)];
                        return 2 === d && (_ = _[n ? 0 : 1]),
                        _.replace(/%d/i, s)
                    }
                }
                  , n = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar-dz", {
                    months: n,
                    monthsShort: n,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: s("s"),
                        ss: s("s"),
                        m: s("m"),
                        mm: s("m"),
                        h: s("h"),
                        hh: s("h"),
                        d: s("d"),
                        dd: s("d"),
                        M: s("M"),
                        MM: s("M"),
                        y: s("y"),
                        yy: s("y")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 0,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6135: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ar-kw", {
                    months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        ss: "%d ثانية",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    week: {
                        dow: 0,
                        doy: 12
                    }
                })
            }(t(381))
        },
        6440: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    0: "0"
                }
                  , t = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                }
                  , s = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }
                  , n = function(e) {
                    return function(a, n, r, i) {
                        var d = t(a)
                          , _ = s[e][t(a)];
                        return 2 === d && (_ = _[n ? 0 : 1]),
                        _.replace(/%d/i, a)
                    }
                }
                  , r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar-ly", {
                    months: r,
                    monthsShort: r,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: n("s"),
                        ss: n("s"),
                        m: n("m"),
                        mm: n("m"),
                        h: n("h"),
                        hh: n("h"),
                        d: n("d"),
                        dd: n("d"),
                        M: n("M"),
                        MM: n("M"),
                        y: n("y"),
                        yy: n("y")
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        )).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(t(381))
        },
        7702: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ar-ma", {
                    months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        ss: "%d ثانية",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6040: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                }
                  , t = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                };
                e.defineLocale("ar-sa", {
                    months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        ss: "%d ثانية",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                            return t[e]
                        }
                        )).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        )).replace(/,/g, "،")
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        7100: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ar-tn", {
                    months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        ss: "%d ثانية",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        867: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                }
                  , t = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                }
                  , s = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                }
                  , n = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }
                  , r = function(e) {
                    return function(a, t, r, i) {
                        var d = s(a)
                          , _ = n[e][s(a)];
                        return 2 === d && (_ = _[t ? 0 : 1]),
                        _.replace(/%d/i, a)
                    }
                }
                  , i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar", {
                    months: i,
                    monthsShort: i,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: r("s"),
                        ss: r("s"),
                        m: r("m"),
                        mm: r("m"),
                        h: r("h"),
                        hh: r("h"),
                        d: r("d"),
                        dd: r("d"),
                        M: r("M"),
                        MM: r("M"),
                        y: r("y"),
                        yy: r("y")
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                            return t[e]
                        }
                        )).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        )).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(t(381))
        },
        1083: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "-inci",
                    5: "-inci",
                    8: "-inci",
                    70: "-inci",
                    80: "-inci",
                    2: "-nci",
                    7: "-nci",
                    20: "-nci",
                    50: "-nci",
                    3: "-üncü",
                    4: "-üncü",
                    100: "-üncü",
                    6: "-ncı",
                    9: "-uncu",
                    10: "-uncu",
                    30: "-uncu",
                    60: "-ıncı",
                    90: "-ıncı"
                };
                e.defineLocale("az", {
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                    weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                    weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[sabah saat] LT",
                        nextWeek: "[gələn həftə] dddd [saat] LT",
                        lastDay: "[dünən] LT",
                        lastWeek: "[keçən həftə] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s əvvəl",
                        s: "bir neçə saniyə",
                        ss: "%d saniyə",
                        m: "bir dəqiqə",
                        mm: "%d dəqiqə",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    meridiemParse: /gecə|səhər|gündüz|axşam/,
                    isPM: function(e) {
                        return /^(gündüz|axşam)$/.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                    ordinal: function(e) {
                        if (0 === e)
                            return e + "-ıncı";
                        var t = e % 10;
                        return e + (a[t] || a[e % 100 - t] || a[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        9808: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t) {
                    return "m" === t ? a ? "хвіліна" : "хвіліну" : "h" === t ? a ? "гадзіна" : "гадзіну" : e + " " + (s = +e,
                    n = {
                        ss: a ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                        mm: a ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                        hh: a ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                        dd: "дзень_дні_дзён",
                        MM: "месяц_месяцы_месяцаў",
                        yy: "год_гады_гадоў"
                    }[t].split("_"),
                    s % 10 == 1 && s % 100 != 11 ? n[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? n[1] : n[2]);
                    var s, n
                }
                e.defineLocale("be", {
                    months: {
                        format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                        standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                    },
                    monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                    weekdays: {
                        format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                        standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
                    },
                    weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., HH:mm",
                        LLLL: "dddd, D MMMM YYYY г., HH:mm"
                    },
                    calendar: {
                        sameDay: "[Сёння ў] LT",
                        nextDay: "[Заўтра ў] LT",
                        lastDay: "[Учора ў] LT",
                        nextWeek: function() {
                            return "[У] dddd [ў] LT"
                        },
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "праз %s",
                        past: "%s таму",
                        s: "некалькі секунд",
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: "дзень",
                        dd: a,
                        M: "месяц",
                        MM: a,
                        y: "год",
                        yy: a
                    },
                    meridiemParse: /ночы|раніцы|дня|вечара/,
                    isPM: function(e) {
                        return /^(дня|вечара)$/.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        8338: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("bg", {
                    months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                    weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[Днес в] LT",
                        nextDay: "[Утре в] LT",
                        nextWeek: "dddd [в] LT",
                        lastDay: "[Вчера в] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Миналата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Миналия] dddd [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "след %s",
                        past: "преди %s",
                        s: "няколко секунди",
                        ss: "%d секунди",
                        m: "минута",
                        mm: "%d минути",
                        h: "час",
                        hh: "%d часа",
                        d: "ден",
                        dd: "%d дена",
                        w: "седмица",
                        ww: "%d седмици",
                        M: "месец",
                        MM: "%d месеца",
                        y: "година",
                        yy: "%d години"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                    ordinal: function(e) {
                        var a = e % 10
                          , t = e % 100;
                        return 0 === e ? e + "-ев" : 0 === t ? e + "-ен" : t > 10 && t < 20 ? e + "-ти" : 1 === a ? e + "-ви" : 2 === a ? e + "-ри" : 7 === a || 8 === a ? e + "-ми" : e + "-ти"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        7438: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("bm", {
                    months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
                    monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
                    weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                    weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
                    weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "MMMM [tile] D [san] YYYY",
                        LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                        LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
                    },
                    calendar: {
                        sameDay: "[Bi lɛrɛ] LT",
                        nextDay: "[Sini lɛrɛ] LT",
                        nextWeek: "dddd [don lɛrɛ] LT",
                        lastDay: "[Kunu lɛrɛ] LT",
                        lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s kɔnɔ",
                        past: "a bɛ %s bɔ",
                        s: "sanga dama dama",
                        ss: "sekondi %d",
                        m: "miniti kelen",
                        mm: "miniti %d",
                        h: "lɛrɛ kelen",
                        hh: "lɛrɛ %d",
                        d: "tile kelen",
                        dd: "tile %d",
                        M: "kalo kelen",
                        MM: "kalo %d",
                        y: "san kelen",
                        yy: "san %d"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6225: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "১",
                    2: "২",
                    3: "৩",
                    4: "৪",
                    5: "৫",
                    6: "৬",
                    7: "৭",
                    8: "৮",
                    9: "৯",
                    0: "০"
                }
                  , t = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
                e.defineLocale("bn-bd", {
                    months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                    monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                    weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                    longDateFormat: {
                        LT: "A h:mm সময়",
                        LTS: "A h:mm:ss সময়",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm সময়",
                        LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                    },
                    calendar: {
                        sameDay: "[আজ] LT",
                        nextDay: "[আগামীকাল] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[গতকাল] LT",
                        lastWeek: "[গত] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s পরে",
                        past: "%s আগে",
                        s: "কয়েক সেকেন্ড",
                        ss: "%d সেকেন্ড",
                        m: "এক মিনিট",
                        mm: "%d মিনিট",
                        h: "এক ঘন্টা",
                        hh: "%d ঘন্টা",
                        d: "এক দিন",
                        dd: "%d দিন",
                        M: "এক মাস",
                        MM: "%d মাস",
                        y: "এক বছর",
                        yy: "%d বছর"
                    },
                    preparse: function(e) {
                        return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "রাত" === a ? e < 4 ? e : e + 12 : "ভোর" === a || "সকাল" === a ? e : "দুপুর" === a ? e >= 3 ? e : e + 12 : "বিকাল" === a || "সন্ধ্যা" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "রাত" : e < 6 ? "ভোর" : e < 12 ? "সকাল" : e < 15 ? "দুপুর" : e < 18 ? "বিকাল" : e < 20 ? "সন্ধ্যা" : "রাত"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        8905: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "১",
                    2: "২",
                    3: "৩",
                    4: "৪",
                    5: "৫",
                    6: "৬",
                    7: "৭",
                    8: "৮",
                    9: "৯",
                    0: "০"
                }
                  , t = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
                e.defineLocale("bn", {
                    months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                    monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                    weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                    longDateFormat: {
                        LT: "A h:mm সময়",
                        LTS: "A h:mm:ss সময়",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm সময়",
                        LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                    },
                    calendar: {
                        sameDay: "[আজ] LT",
                        nextDay: "[আগামীকাল] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[গতকাল] LT",
                        lastWeek: "[গত] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s পরে",
                        past: "%s আগে",
                        s: "কয়েক সেকেন্ড",
                        ss: "%d সেকেন্ড",
                        m: "এক মিনিট",
                        mm: "%d মিনিট",
                        h: "এক ঘন্টা",
                        hh: "%d ঘন্টা",
                        d: "এক দিন",
                        dd: "%d দিন",
                        M: "এক মাস",
                        MM: "%d মাস",
                        y: "এক বছর",
                        yy: "%d বছর"
                    },
                    preparse: function(e) {
                        return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "রাত" === a && e >= 4 || "দুপুর" === a && e < 5 || "বিকাল" === a ? e + 12 : e
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        1560: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "༡",
                    2: "༢",
                    3: "༣",
                    4: "༤",
                    5: "༥",
                    6: "༦",
                    7: "༧",
                    8: "༨",
                    9: "༩",
                    0: "༠"
                }
                  , t = {
                    "༡": "1",
                    "༢": "2",
                    "༣": "3",
                    "༤": "4",
                    "༥": "5",
                    "༦": "6",
                    "༧": "7",
                    "༨": "8",
                    "༩": "9",
                    "༠": "0"
                };
                e.defineLocale("bo", {
                    months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                    monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
                    monthsShortRegex: /^(ཟླ་\d{1,2})/,
                    monthsParseExact: !0,
                    weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                    weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                    weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[དི་རིང] LT",
                        nextDay: "[སང་ཉིན] LT",
                        nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                        lastDay: "[ཁ་སང] LT",
                        lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ལ་",
                        past: "%s སྔན་ལ",
                        s: "ལམ་སང",
                        ss: "%d སྐར་ཆ།",
                        m: "སྐར་མ་གཅིག",
                        mm: "%d སྐར་མ",
                        h: "ཆུ་ཚོད་གཅིག",
                        hh: "%d ཆུ་ཚོད",
                        d: "ཉིན་གཅིག",
                        dd: "%d ཉིན་",
                        M: "ཟླ་བ་གཅིག",
                        MM: "%d ཟླ་བ",
                        y: "ལོ་གཅིག",
                        yy: "%d ལོ"
                    },
                    preparse: function(e) {
                        return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "མཚན་མོ" === a && e >= 4 || "ཉིན་གུང" === a && e < 5 || "དགོང་དག" === a ? e + 12 : e
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        1278: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t) {
                    return e + " " + function(e, a) {
                        return 2 === a ? function(e) {
                            var a = {
                                m: "v",
                                b: "v",
                                d: "z"
                            };
                            return void 0 === a[e.charAt(0)] ? e : a[e.charAt(0)] + e.substring(1)
                        }(e) : e
                    }({
                        mm: "munutenn",
                        MM: "miz",
                        dd: "devezh"
                    }[t], e)
                }
                function t(e) {
                    return e > 9 ? t(e % 10) : e
                }
                var s = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i]
                  , n = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
                  , r = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
                e.defineLocale("br", {
                    months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                    monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                    weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
                    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                    weekdaysParse: r,
                    fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
                    shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
                    minWeekdaysParse: r,
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
                    monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [a viz] MMMM YYYY",
                        LLL: "D [a viz] MMMM YYYY HH:mm",
                        LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hiziv da] LT",
                        nextDay: "[Warcʼhoazh da] LT",
                        nextWeek: "dddd [da] LT",
                        lastDay: "[Decʼh da] LT",
                        lastWeek: "dddd [paset da] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "a-benn %s",
                        past: "%s ʼzo",
                        s: "un nebeud segondennoù",
                        ss: "%d eilenn",
                        m: "ur vunutenn",
                        mm: a,
                        h: "un eur",
                        hh: "%d eur",
                        d: "un devezh",
                        dd: a,
                        M: "ur miz",
                        MM: a,
                        y: "ur bloaz",
                        yy: function(e) {
                            switch (t(e)) {
                            case 1:
                            case 3:
                            case 4:
                            case 5:
                            case 9:
                                return e + " bloaz";
                            default:
                                return e + " vloaz"
                            }
                        }
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "añ" : "vet")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    },
                    meridiemParse: /a.m.|g.m./,
                    isPM: function(e) {
                        return "g.m." === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "a.m." : "g.m."
                    }
                })
            }(t(381))
        },
        622: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t) {
                    var s = e + " ";
                    switch (t) {
                    case "ss":
                        return s + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                    case "m":
                        return a ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return s + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                    case "h":
                        return a ? "jedan sat" : "jednog sata";
                    case "hh":
                        return s + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                    case "dd":
                        return s + (1 === e ? "dan" : "dana");
                    case "MM":
                        return s + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                    case "yy":
                        return s + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
                    }
                }
                e.defineLocale("bs", {
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: "dan",
                        dd: a,
                        M: "mjesec",
                        MM: a,
                        y: "godinu",
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        2468: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ca", {
                    months: {
                        standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                        format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                        isFormat: /D[oD]?(\s)+MMMM/
                    },
                    monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                    weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                    weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [de] YYYY",
                        ll: "D MMM YYYY",
                        LLL: "D MMMM [de] YYYY [a les] H:mm",
                        lll: "D MMM YYYY, H:mm",
                        LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                        llll: "ddd D MMM YYYY, H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextDay: function() {
                            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastDay: function() {
                            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "d'aquí %s",
                        past: "fa %s",
                        s: "uns segons",
                        ss: "%d segons",
                        m: "un minut",
                        mm: "%d minuts",
                        h: "una hora",
                        hh: "%d hores",
                        d: "un dia",
                        dd: "%d dies",
                        M: "un mes",
                        MM: "%d mesos",
                        y: "un any",
                        yy: "%d anys"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                    ordinal: function(e, a) {
                        var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                        return "w" !== a && "W" !== a || (t = "a"),
                        e + t
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5822: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    format: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                    standalone: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_")
                }
                  , t = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
                  , s = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]
                  , n = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
                function r(e) {
                    return e > 1 && e < 5 && 1 != ~~(e / 10)
                }
                function i(e, a, t, s) {
                    var n = e + " ";
                    switch (t) {
                    case "s":
                        return a || s ? "pár sekund" : "pár sekundami";
                    case "ss":
                        return a || s ? n + (r(e) ? "sekundy" : "sekund") : n + "sekundami";
                    case "m":
                        return a ? "minuta" : s ? "minutu" : "minutou";
                    case "mm":
                        return a || s ? n + (r(e) ? "minuty" : "minut") : n + "minutami";
                    case "h":
                        return a ? "hodina" : s ? "hodinu" : "hodinou";
                    case "hh":
                        return a || s ? n + (r(e) ? "hodiny" : "hodin") : n + "hodinami";
                    case "d":
                        return a || s ? "den" : "dnem";
                    case "dd":
                        return a || s ? n + (r(e) ? "dny" : "dní") : n + "dny";
                    case "M":
                        return a || s ? "měsíc" : "měsícem";
                    case "MM":
                        return a || s ? n + (r(e) ? "měsíce" : "měsíců") : n + "měsíci";
                    case "y":
                        return a || s ? "rok" : "rokem";
                    case "yy":
                        return a || s ? n + (r(e) ? "roky" : "let") : n + "lety"
                    }
                }
                e.defineLocale("cs", {
                    months: a,
                    monthsShort: t,
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                    monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm",
                        l: "D. M. YYYY"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[zítra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[včera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "před %s",
                        s: i,
                        ss: i,
                        m: i,
                        mm: i,
                        h: i,
                        hh: i,
                        d: i,
                        dd: i,
                        M: i,
                        MM: i,
                        y: i,
                        yy: i
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        877: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("cv", {
                    months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                    monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                    weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                    weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                    weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                        LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                        LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                    },
                    calendar: {
                        sameDay: "[Паян] LT [сехетре]",
                        nextDay: "[Ыран] LT [сехетре]",
                        lastDay: "[Ӗнер] LT [сехетре]",
                        nextWeek: "[Ҫитес] dddd LT [сехетре]",
                        lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                        },
                        past: "%s каялла",
                        s: "пӗр-ик ҫеккунт",
                        ss: "%d ҫеккунт",
                        m: "пӗр минут",
                        mm: "%d минут",
                        h: "пӗр сехет",
                        hh: "%d сехет",
                        d: "пӗр кун",
                        dd: "%d кун",
                        M: "пӗр уйӑх",
                        MM: "%d уйӑх",
                        y: "пӗр ҫул",
                        yy: "%d ҫул"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                    ordinal: "%d-мӗш",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        7373: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("cy", {
                    months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                    monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                    weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                    weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Heddiw am] LT",
                        nextDay: "[Yfory am] LT",
                        nextWeek: "dddd [am] LT",
                        lastDay: "[Ddoe am] LT",
                        lastWeek: "dddd [diwethaf am] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "mewn %s",
                        past: "%s yn ôl",
                        s: "ychydig eiliadau",
                        ss: "%d eiliad",
                        m: "munud",
                        mm: "%d munud",
                        h: "awr",
                        hh: "%d awr",
                        d: "diwrnod",
                        dd: "%d diwrnod",
                        M: "mis",
                        MM: "%d mis",
                        y: "blwyddyn",
                        yy: "%d flynedd"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                    ordinal: function(e) {
                        var a = "";
                        return e > 20 ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
                        e + a
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        4780: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("da", {
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "på dddd [kl.] LT",
                        lastDay: "[i går kl.] LT",
                        lastWeek: "[i] dddd[s kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "få sekunder",
                        ss: "%d sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "et år",
                        yy: "%d år"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        217: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        w: ["eine Woche", "einer Woche"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return a ? n[t][0] : n[t][1]
                }
                e.defineLocale("de-at", {
                    months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: a,
                        mm: "%d Minuten",
                        h: a,
                        hh: "%d Stunden",
                        d: a,
                        dd: a,
                        w: a,
                        ww: "%d Wochen",
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        894: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        w: ["eine Woche", "einer Woche"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return a ? n[t][0] : n[t][1]
                }
                e.defineLocale("de-ch", {
                    months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: a,
                        mm: "%d Minuten",
                        h: a,
                        hh: "%d Stunden",
                        d: a,
                        dd: a,
                        w: a,
                        ww: "%d Wochen",
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        9740: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        w: ["eine Woche", "einer Woche"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return a ? n[t][0] : n[t][1]
                }
                e.defineLocale("de", {
                    months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: a,
                        mm: "%d Minuten",
                        h: a,
                        hh: "%d Stunden",
                        d: a,
                        dd: a,
                        w: a,
                        ww: "%d Wochen",
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5300: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
                  , t = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
                e.defineLocale("dv", {
                    months: a,
                    monthsShort: a,
                    weekdays: t,
                    weekdaysShort: t,
                    weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/M/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /މކ|މފ/,
                    isPM: function(e) {
                        return "މފ" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "މކ" : "މފ"
                    },
                    calendar: {
                        sameDay: "[މިއަދު] LT",
                        nextDay: "[މާދަމާ] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[އިއްޔެ] LT",
                        lastWeek: "[ފާއިތުވި] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ތެރޭގައި %s",
                        past: "ކުރިން %s",
                        s: "ސިކުންތުކޮޅެއް",
                        ss: "d% ސިކުންތު",
                        m: "މިނިޓެއް",
                        mm: "މިނިޓު %d",
                        h: "ގަޑިއިރެއް",
                        hh: "ގަޑިއިރު %d",
                        d: "ދުވަހެއް",
                        dd: "ދުވަސް %d",
                        M: "މަހެއް",
                        MM: "މަސް %d",
                        y: "އަހަރެއް",
                        yy: "އަހަރު %d"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 7,
                        doy: 12
                    }
                })
            }(t(381))
        },
        837: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("el", {
                    monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                    monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                    months: function(e, a) {
                        return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                    },
                    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                    meridiem: function(e, a, t) {
                        return e > 11 ? t ? "μμ" : "ΜΜ" : t ? "πμ" : "ΠΜ"
                    },
                    isPM: function(e) {
                        return "μ" === (e + "").toLowerCase()[0]
                    },
                    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendarEl: {
                        sameDay: "[Σήμερα {}] LT",
                        nextDay: "[Αύριο {}] LT",
                        nextWeek: "dddd [{}] LT",
                        lastDay: "[Χθες {}] LT",
                        lastWeek: function() {
                            return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT"
                        },
                        sameElse: "L"
                    },
                    calendar: function(e, a) {
                        var t, s = this._calendarEl[e], n = a && a.hours();
                        return t = s,
                        ("undefined" != typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)) && (s = s.apply(a)),
                        s.replace("{}", n % 12 == 1 ? "στη" : "στις")
                    },
                    relativeTime: {
                        future: "σε %s",
                        past: "%s πριν",
                        s: "λίγα δευτερόλεπτα",
                        ss: "%d δευτερόλεπτα",
                        m: "ένα λεπτό",
                        mm: "%d λεπτά",
                        h: "μία ώρα",
                        hh: "%d ώρες",
                        d: "μία μέρα",
                        dd: "%d μέρες",
                        M: "ένας μήνας",
                        MM: "%d μήνες",
                        y: "ένας χρόνος",
                        yy: "%d χρόνια"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}η/,
                    ordinal: "%dη",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        8348: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-au", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 0,
                        doy: 4
                    }
                })
            }(t(381))
        },
        7925: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-ca", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "YYYY-MM-DD",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    }
                })
            }(t(381))
        },
        2243: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-gb", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6436: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-ie", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        7207: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-il", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    }
                })
            }(t(381))
        },
        4175: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-in", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        6319: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-nz", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        1662: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("en-sg", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        2915: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("eo", {
                    months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                    monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
                    weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                    weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                    weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "[la] D[-an de] MMMM, YYYY",
                        LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                        LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                        llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
                    },
                    meridiemParse: /[ap]\.t\.m/i,
                    isPM: function(e) {
                        return "p" === e.charAt(0).toLowerCase()
                    },
                    meridiem: function(e, a, t) {
                        return e > 11 ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M."
                    },
                    calendar: {
                        sameDay: "[Hodiaŭ je] LT",
                        nextDay: "[Morgaŭ je] LT",
                        nextWeek: "dddd[n je] LT",
                        lastDay: "[Hieraŭ je] LT",
                        lastWeek: "[pasintan] dddd[n je] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "post %s",
                        past: "antaŭ %s",
                        s: "kelkaj sekundoj",
                        ss: "%d sekundoj",
                        m: "unu minuto",
                        mm: "%d minutoj",
                        h: "unu horo",
                        hh: "%d horoj",
                        d: "unu tago",
                        dd: "%d tagoj",
                        M: "unu monato",
                        MM: "%d monatoj",
                        y: "unu jaro",
                        yy: "%d jaroj"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}a/,
                    ordinal: "%da",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        5251: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                  , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                  , s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                  , n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-do", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, s) {
                        return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY h:mm A",
                        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6112: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                  , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                  , s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                  , n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-mx", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, s) {
                        return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 0,
                        doy: 4
                    },
                    invalidDate: "Fecha inválida"
                })
            }(t(381))
        },
        1146: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                  , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                  , s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                  , n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-us", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, s) {
                        return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "MM/DD/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY h:mm A",
                        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        5655: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                  , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                  , s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                  , n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, s) {
                        return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    },
                    invalidDate: "Fecha inválida"
                })
            }(t(381))
        },
        5603: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                        ss: [e + "sekundi", e + "sekundit"],
                        m: ["ühe minuti", "üks minut"],
                        mm: [e + " minuti", e + " minutit"],
                        h: ["ühe tunni", "tund aega", "üks tund"],
                        hh: [e + " tunni", e + " tundi"],
                        d: ["ühe päeva", "üks päev"],
                        M: ["kuu aja", "kuu aega", "üks kuu"],
                        MM: [e + " kuu", e + " kuud"],
                        y: ["ühe aasta", "aasta", "üks aasta"],
                        yy: [e + " aasta", e + " aastat"]
                    };
                    return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1]
                }
                e.defineLocale("et", {
                    months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                    monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                    weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[Täna,] LT",
                        nextDay: "[Homme,] LT",
                        nextWeek: "[Järgmine] dddd LT",
                        lastDay: "[Eile,] LT",
                        lastWeek: "[Eelmine] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s pärast",
                        past: "%s tagasi",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: "%d päeva",
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        7763: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("eu", {
                    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY[ko] MMMM[ren] D[a]",
                        LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                        l: "YYYY-M-D",
                        ll: "YYYY[ko] MMM D[a]",
                        lll: "YYYY[ko] MMM D[a] HH:mm",
                        llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                    },
                    calendar: {
                        sameDay: "[gaur] LT[etan]",
                        nextDay: "[bihar] LT[etan]",
                        nextWeek: "dddd LT[etan]",
                        lastDay: "[atzo] LT[etan]",
                        lastWeek: "[aurreko] dddd LT[etan]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s barru",
                        past: "duela %s",
                        s: "segundo batzuk",
                        ss: "%d segundo",
                        m: "minutu bat",
                        mm: "%d minutu",
                        h: "ordu bat",
                        hh: "%d ordu",
                        d: "egun bat",
                        dd: "%d egun",
                        M: "hilabete bat",
                        MM: "%d hilabete",
                        y: "urte bat",
                        yy: "%d urte"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        6959: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "۱",
                    2: "۲",
                    3: "۳",
                    4: "۴",
                    5: "۵",
                    6: "۶",
                    7: "۷",
                    8: "۸",
                    9: "۹",
                    0: "۰"
                }
                  , t = {
                    "۱": "1",
                    "۲": "2",
                    "۳": "3",
                    "۴": "4",
                    "۵": "5",
                    "۶": "6",
                    "۷": "7",
                    "۸": "8",
                    "۹": "9",
                    "۰": "0"
                };
                e.defineLocale("fa", {
                    months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /قبل از ظهر|بعد از ظهر/,
                    isPM: function(e) {
                        return /بعد از ظهر/.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                    },
                    calendar: {
                        sameDay: "[امروز ساعت] LT",
                        nextDay: "[فردا ساعت] LT",
                        nextWeek: "dddd [ساعت] LT",
                        lastDay: "[دیروز ساعت] LT",
                        lastWeek: "dddd [پیش] [ساعت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "در %s",
                        past: "%s پیش",
                        s: "چند ثانیه",
                        ss: "%d ثانیه",
                        m: "یک دقیقه",
                        mm: "%d دقیقه",
                        h: "یک ساعت",
                        hh: "%d ساعت",
                        d: "یک روز",
                        dd: "%d روز",
                        M: "یک ماه",
                        MM: "%d ماه",
                        y: "یک سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/[۰-۹]/g, (function(e) {
                            return t[e]
                        }
                        )).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        )).replace(/,/g, "،")
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}م/,
                    ordinal: "%dم",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(t(381))
        },
        1897: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
                  , t = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
                function s(e, s, n, r) {
                    var i = "";
                    switch (n) {
                    case "s":
                        return r ? "muutaman sekunnin" : "muutama sekunti";
                    case "ss":
                        i = r ? "sekunnin" : "sekuntia";
                        break;
                    case "m":
                        return r ? "minuutin" : "minuutti";
                    case "mm":
                        i = r ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return r ? "tunnin" : "tunti";
                    case "hh":
                        i = r ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return r ? "päivän" : "päivä";
                    case "dd":
                        i = r ? "päivän" : "päivää";
                        break;
                    case "M":
                        return r ? "kuukauden" : "kuukausi";
                    case "MM":
                        i = r ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return r ? "vuoden" : "vuosi";
                    case "yy":
                        i = r ? "vuoden" : "vuotta"
                    }
                    return function(e, s) {
                        return e < 10 ? s ? t[e] : a[e] : e
                    }(e, r) + " " + i
                }
                e.defineLocale("fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] HH.mm",
                        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                    },
                    calendar: {
                        sameDay: "[tänään] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s päästä",
                        past: "%s sitten",
                        s: s,
                        ss: s,
                        m: s,
                        mm: s,
                        h: s,
                        hh: s,
                        d: s,
                        dd: s,
                        M: s,
                        MM: s,
                        y: s,
                        yy: s
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        2549: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("fil", {
                    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "MM/D/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY HH:mm",
                        LLLL: "dddd, MMMM DD, YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "LT [ngayong araw]",
                        nextDay: "[Bukas ng] LT",
                        nextWeek: "LT [sa susunod na] dddd",
                        lastDay: "LT [kahapon]",
                        lastWeek: "LT [noong nakaraang] dddd",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "sa loob ng %s",
                        past: "%s ang nakalipas",
                        s: "ilang segundo",
                        ss: "%d segundo",
                        m: "isang minuto",
                        mm: "%d minuto",
                        h: "isang oras",
                        hh: "%d oras",
                        d: "isang araw",
                        dd: "%d araw",
                        M: "isang buwan",
                        MM: "%d buwan",
                        y: "isang taon",
                        yy: "%d taon"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        4694: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("fo", {
                    months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                    weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                    weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D. MMMM, YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Í dag kl.] LT",
                        nextDay: "[Í morgin kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[Í gjár kl.] LT",
                        lastWeek: "[síðstu] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "um %s",
                        past: "%s síðani",
                        s: "fá sekund",
                        ss: "%d sekundir",
                        m: "ein minuttur",
                        mm: "%d minuttir",
                        h: "ein tími",
                        hh: "%d tímar",
                        d: "ein dagur",
                        dd: "%d dagar",
                        M: "ein mánaður",
                        MM: "%d mánaðir",
                        y: "eitt ár",
                        yy: "%d ár"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        3049: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("fr-ca", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Aujourd’hui à] LT",
                        nextDay: "[Demain à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[Hier à] LT",
                        lastWeek: "dddd [dernier à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        ss: "%d secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                        }
                    }
                })
            }(t(381))
        },
        2330: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("fr-ch", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Aujourd’hui à] LT",
                        nextDay: "[Demain à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[Hier à] LT",
                        lastWeek: "dddd [dernier à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        ss: "%d secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        4470: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
                  , t = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
                e.defineLocale("fr", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    monthsRegex: a,
                    monthsShortRegex: a,
                    monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
                    monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
                    monthsParse: t,
                    longMonthsParse: t,
                    shortMonthsParse: t,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Aujourd’hui à] LT",
                        nextDay: "[Demain à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[Hier à] LT",
                        lastWeek: "dddd [dernier à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        ss: "%d secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        w: "une semaine",
                        ww: "%d semaines",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "D":
                            return e + (1 === e ? "er" : "");
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5044: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
                  , t = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                e.defineLocale("fy", {
                    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                    monthsShort: function(e, s) {
                        return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsParseExact: !0,
                    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[hjoed om] LT",
                        nextDay: "[moarn om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[juster om] LT",
                        lastWeek: "[ôfrûne] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oer %s",
                        past: "%s lyn",
                        s: "in pear sekonden",
                        ss: "%d sekonden",
                        m: "ien minút",
                        mm: "%d minuten",
                        h: "ien oere",
                        hh: "%d oeren",
                        d: "ien dei",
                        dd: "%d dagen",
                        M: "ien moanne",
                        MM: "%d moannen",
                        y: "ien jier",
                        yy: "%d jierren"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        9295: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ga", {
                    months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
                    monthsShort: ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
                    monthsParseExact: !0,
                    weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
                    weekdaysShort: ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
                    weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Inniu ag] LT",
                        nextDay: "[Amárach ag] LT",
                        nextWeek: "dddd [ag] LT",
                        lastDay: "[Inné ag] LT",
                        lastWeek: "dddd [seo caite] [ag] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "i %s",
                        past: "%s ó shin",
                        s: "cúpla soicind",
                        ss: "%d soicind",
                        m: "nóiméad",
                        mm: "%d nóiméad",
                        h: "uair an chloig",
                        hh: "%d uair an chloig",
                        d: "lá",
                        dd: "%d lá",
                        M: "mí",
                        MM: "%d míonna",
                        y: "bliain",
                        yy: "%d bliain"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        2101: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("gd", {
                    months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
                    monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
                    monthsParseExact: !0,
                    weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                    weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                    weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[An-diugh aig] LT",
                        nextDay: "[A-màireach aig] LT",
                        nextWeek: "dddd [aig] LT",
                        lastDay: "[An-dè aig] LT",
                        lastWeek: "dddd [seo chaidh] [aig] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ann an %s",
                        past: "bho chionn %s",
                        s: "beagan diogan",
                        ss: "%d diogan",
                        m: "mionaid",
                        mm: "%d mionaidean",
                        h: "uair",
                        hh: "%d uairean",
                        d: "latha",
                        dd: "%d latha",
                        M: "mìos",
                        MM: "%d mìosan",
                        y: "bliadhna",
                        yy: "%d bliadhna"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        8886: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("gl", {
                    months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                    monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                        },
                        lastDay: function() {
                            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                        },
                        lastWeek: function() {
                            return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return 0 === e.indexOf("un") ? "n" + e : "en " + e
                        },
                        past: "hai %s",
                        s: "uns segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "unha hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un ano",
                        yy: "%d anos"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        7884: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                        ss: [e + " सॅकंडांनी", e + " सॅकंड"],
                        m: ["एका मिणटान", "एक मिनूट"],
                        mm: [e + " मिणटांनी", e + " मिणटां"],
                        h: ["एका वरान", "एक वर"],
                        hh: [e + " वरांनी", e + " वरां"],
                        d: ["एका दिसान", "एक दीस"],
                        dd: [e + " दिसांनी", e + " दीस"],
                        M: ["एका म्हयन्यान", "एक म्हयनो"],
                        MM: [e + " म्हयन्यानी", e + " म्हयने"],
                        y: ["एका वर्सान", "एक वर्स"],
                        yy: [e + " वर्सांनी", e + " वर्सां"]
                    };
                    return s ? n[t][0] : n[t][1]
                }
                e.defineLocale("gom-deva", {
                    months: {
                        standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                        format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
                        isFormat: /MMMM(\s)+D[oD]?/
                    },
                    monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
                    weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
                    weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "A h:mm [वाजतां]",
                        LTS: "A h:mm:ss [वाजतां]",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY A h:mm [वाजतां]",
                        LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                        llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
                    },
                    calendar: {
                        sameDay: "[आयज] LT",
                        nextDay: "[फाल्यां] LT",
                        nextWeek: "[फुडलो] dddd[,] LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[फाटलो] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s",
                        past: "%s आदीं",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
                    ordinal: function(e, a) {
                        return "D" === a ? e + "वेर" : e
                    },
                    week: {
                        dow: 0,
                        doy: 3
                    },
                    meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "राती" === a ? e < 4 ? e : e + 12 : "सकाळीं" === a ? e : "दनपारां" === a ? e > 12 ? e : e + 12 : "सांजे" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
                    }
                })
            }(t(381))
        },
        3168: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        s: ["thoddea sekondamni", "thodde sekond"],
                        ss: [e + " sekondamni", e + " sekond"],
                        m: ["eka mintan", "ek minut"],
                        mm: [e + " mintamni", e + " mintam"],
                        h: ["eka voran", "ek vor"],
                        hh: [e + " voramni", e + " voram"],
                        d: ["eka disan", "ek dis"],
                        dd: [e + " disamni", e + " dis"],
                        M: ["eka mhoinean", "ek mhoino"],
                        MM: [e + " mhoineamni", e + " mhoine"],
                        y: ["eka vorsan", "ek voros"],
                        yy: [e + " vorsamni", e + " vorsam"]
                    };
                    return s ? n[t][0] : n[t][1]
                }
                e.defineLocale("gom-latn", {
                    months: {
                        standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                        format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                        isFormat: /MMMM(\s)+D[oD]?/
                    },
                    monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
                    weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                    weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "A h:mm [vazta]",
                        LTS: "A h:mm:ss [vazta]",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY A h:mm [vazta]",
                        LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                    },
                    calendar: {
                        sameDay: "[Aiz] LT",
                        nextDay: "[Faleam] LT",
                        nextWeek: "[Fuddlo] dddd[,] LT",
                        lastDay: "[Kal] LT",
                        lastWeek: "[Fattlo] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s",
                        past: "%s adim",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                    ordinal: function(e, a) {
                        return "D" === a ? e + "er" : e
                    },
                    week: {
                        dow: 0,
                        doy: 3
                    },
                    meridiemParse: /rati|sokallim|donparam|sanje/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "rati" === a ? e < 4 ? e : e + 12 : "sokallim" === a ? e : "donparam" === a ? e > 12 ? e : e + 12 : "sanje" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                    }
                })
            }(t(381))
        },
        5349: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "૧",
                    2: "૨",
                    3: "૩",
                    4: "૪",
                    5: "૫",
                    6: "૬",
                    7: "૭",
                    8: "૮",
                    9: "૯",
                    0: "૦"
                }
                  , t = {
                    "૧": "1",
                    "૨": "2",
                    "૩": "3",
                    "૪": "4",
                    "૫": "5",
                    "૬": "6",
                    "૭": "7",
                    "૮": "8",
                    "૯": "9",
                    "૦": "0"
                };
                e.defineLocale("gu", {
                    months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
                    monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
                    weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
                    weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm વાગ્યે",
                        LTS: "A h:mm:ss વાગ્યે",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                        LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
                    },
                    calendar: {
                        sameDay: "[આજ] LT",
                        nextDay: "[કાલે] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ગઇકાલે] LT",
                        lastWeek: "[પાછલા] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s મા",
                        past: "%s પહેલા",
                        s: "અમુક પળો",
                        ss: "%d સેકંડ",
                        m: "એક મિનિટ",
                        mm: "%d મિનિટ",
                        h: "એક કલાક",
                        hh: "%d કલાક",
                        d: "એક દિવસ",
                        dd: "%d દિવસ",
                        M: "એક મહિનો",
                        MM: "%d મહિનો",
                        y: "એક વર્ષ",
                        yy: "%d વર્ષ"
                    },
                    preparse: function(e) {
                        return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "રાત" === a ? e < 4 ? e : e + 12 : "સવાર" === a ? e : "બપોર" === a ? e >= 10 ? e : e + 12 : "સાંજ" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        4206: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("he", {
                    months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                    monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                    weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                    weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                    weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [ב]MMMM YYYY",
                        LLL: "D [ב]MMMM YYYY HH:mm",
                        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[היום ב־]LT",
                        nextDay: "[מחר ב־]LT",
                        nextWeek: "dddd [בשעה] LT",
                        lastDay: "[אתמול ב־]LT",
                        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "בעוד %s",
                        past: "לפני %s",
                        s: "מספר שניות",
                        ss: "%d שניות",
                        m: "דקה",
                        mm: "%d דקות",
                        h: "שעה",
                        hh: function(e) {
                            return 2 === e ? "שעתיים" : e + " שעות"
                        },
                        d: "יום",
                        dd: function(e) {
                            return 2 === e ? "יומיים" : e + " ימים"
                        },
                        M: "חודש",
                        MM: function(e) {
                            return 2 === e ? "חודשיים" : e + " חודשים"
                        },
                        y: "שנה",
                        yy: function(e) {
                            return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                        }
                    },
                    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                    isPM: function(e) {
                        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? t ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? t ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                    }
                })
            }(t(381))
        },
        94: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                }
                  , t = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                }
                  , s = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i];
                e.defineLocale("hi", {
                    months: {
                        format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                        standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
                    },
                    monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                    weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm बजे",
                        LTS: "A h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                    },
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i],
                    monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                    monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                    monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
                    monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[कल] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[कल] LT",
                        lastWeek: "[पिछले] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s में",
                        past: "%s पहले",
                        s: "कुछ ही क्षण",
                        ss: "%d सेकंड",
                        m: "एक मिनट",
                        mm: "%d मिनट",
                        h: "एक घंटा",
                        hh: "%d घंटे",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महीने",
                        MM: "%d महीने",
                        y: "एक वर्ष",
                        yy: "%d वर्ष"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /रात|सुबह|दोपहर|शाम/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "रात" === a ? e < 4 ? e : e + 12 : "सुबह" === a ? e : "दोपहर" === a ? e >= 10 ? e : e + 12 : "शाम" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        316: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t) {
                    var s = e + " ";
                    switch (t) {
                    case "ss":
                        return s + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                    case "m":
                        return a ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return s + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                    case "h":
                        return a ? "jedan sat" : "jednog sata";
                    case "hh":
                        return s + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                    case "dd":
                        return s + (1 === e ? "dan" : "dana");
                    case "MM":
                        return s + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                    case "yy":
                        return s + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
                    }
                }
                e.defineLocale("hr", {
                    months: {
                        format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                        standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                    },
                    monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM YYYY",
                        LLL: "Do MMMM YYYY H:mm",
                        LLLL: "dddd, Do MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[prošlu] [nedjelju] [u] LT";
                            case 3:
                                return "[prošlu] [srijedu] [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: "dan",
                        dd: a,
                        M: "mjesec",
                        MM: a,
                        y: "godinu",
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        2138: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
                function t(e, a, t, s) {
                    var n = e;
                    switch (t) {
                    case "s":
                        return s || a ? "néhány másodperc" : "néhány másodperce";
                    case "ss":
                        return n + (s || a) ? " másodperc" : " másodperce";
                    case "m":
                        return "egy" + (s || a ? " perc" : " perce");
                    case "mm":
                        return n + (s || a ? " perc" : " perce");
                    case "h":
                        return "egy" + (s || a ? " óra" : " órája");
                    case "hh":
                        return n + (s || a ? " óra" : " órája");
                    case "d":
                        return "egy" + (s || a ? " nap" : " napja");
                    case "dd":
                        return n + (s || a ? " nap" : " napja");
                    case "M":
                        return "egy" + (s || a ? " hónap" : " hónapja");
                    case "MM":
                        return n + (s || a ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (s || a ? " év" : " éve");
                    case "yy":
                        return n + (s || a ? " év" : " éve")
                    }
                    return ""
                }
                function s(e) {
                    return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
                }
                e.defineLocale("hu", {
                    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                    monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(e) {
                        return "u" === e.charAt(1).toLowerCase()
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return s.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return s.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s múlva",
                        past: "%s",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        1423: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("hy-am", {
                    months: {
                        format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                        standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                    },
                    monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                    weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                    weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY թ.",
                        LLL: "D MMMM YYYY թ., HH:mm",
                        LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                    },
                    calendar: {
                        sameDay: "[այսօր] LT",
                        nextDay: "[վաղը] LT",
                        lastDay: "[երեկ] LT",
                        nextWeek: function() {
                            return "dddd [օրը ժամը] LT"
                        },
                        lastWeek: function() {
                            return "[անցած] dddd [օրը ժամը] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s հետո",
                        past: "%s առաջ",
                        s: "մի քանի վայրկյան",
                        ss: "%d վայրկյան",
                        m: "րոպե",
                        mm: "%d րոպե",
                        h: "ժամ",
                        hh: "%d ժամ",
                        d: "օր",
                        dd: "%d օր",
                        M: "ամիս",
                        MM: "%d ամիս",
                        y: "տարի",
                        yy: "%d տարի"
                    },
                    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                    isPM: function(e) {
                        return /^(ցերեկվա|երեկոյան)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        9218: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("id", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|siang|sore|malam/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "pagi" === a ? e : "siang" === a ? e >= 11 ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Besok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kemarin pukul] LT",
                        lastWeek: "dddd [lalu pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        ss: "%d detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        135: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e) {
                    return e % 100 == 11 || e % 10 != 1
                }
                function t(e, t, s, n) {
                    var r = e + " ";
                    switch (s) {
                    case "s":
                        return t || n ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "ss":
                        return a(e) ? r + (t || n ? "sekúndur" : "sekúndum") : r + "sekúnda";
                    case "m":
                        return t ? "mínúta" : "mínútu";
                    case "mm":
                        return a(e) ? r + (t || n ? "mínútur" : "mínútum") : t ? r + "mínúta" : r + "mínútu";
                    case "hh":
                        return a(e) ? r + (t || n ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                    case "d":
                        return t ? "dagur" : n ? "dag" : "degi";
                    case "dd":
                        return a(e) ? t ? r + "dagar" : r + (n ? "daga" : "dögum") : t ? r + "dagur" : r + (n ? "dag" : "degi");
                    case "M":
                        return t ? "mánuður" : n ? "mánuð" : "mánuði";
                    case "MM":
                        return a(e) ? t ? r + "mánuðir" : r + (n ? "mánuði" : "mánuðum") : t ? r + "mánuður" : r + (n ? "mánuð" : "mánuði");
                    case "y":
                        return t || n ? "ár" : "ári";
                    case "yy":
                        return a(e) ? r + (t || n ? "ár" : "árum") : r + (t || n ? "ár" : "ári")
                    }
                }
                e.defineLocale("is", {
                    months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                    weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                    weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                    weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                    },
                    calendar: {
                        sameDay: "[í dag kl.] LT",
                        nextDay: "[á morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[í gær kl.] LT",
                        lastWeek: "[síðasta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s síðan",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: "klukkustund",
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        150: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("it-ch", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: function() {
                            return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                        },
                        past: "%s fa",
                        s: "alcuni secondi",
                        ss: "%d secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        626: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("it", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        nextDay: function() {
                            return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        nextWeek: function() {
                            return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        lastDay: function() {
                            return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        lastWeek: function() {
                            return 0 === this.day() ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "tra %s",
                        past: "%s fa",
                        s: "alcuni secondi",
                        ss: "%d secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        w: "una settimana",
                        ww: "%d settimane",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        9183: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ja", {
                    eras: [{
                        since: "2019-05-01",
                        offset: 1,
                        name: "令和",
                        narrow: "㋿",
                        abbr: "R"
                    }, {
                        since: "1989-01-08",
                        until: "2019-04-30",
                        offset: 1,
                        name: "平成",
                        narrow: "㍻",
                        abbr: "H"
                    }, {
                        since: "1926-12-25",
                        until: "1989-01-07",
                        offset: 1,
                        name: "昭和",
                        narrow: "㍼",
                        abbr: "S"
                    }, {
                        since: "1912-07-30",
                        until: "1926-12-24",
                        offset: 1,
                        name: "大正",
                        narrow: "㍽",
                        abbr: "T"
                    }, {
                        since: "1873-01-01",
                        until: "1912-07-29",
                        offset: 6,
                        name: "明治",
                        narrow: "㍾",
                        abbr: "M"
                    }, {
                        since: "0001-01-01",
                        until: "1873-12-31",
                        offset: 1,
                        name: "西暦",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -1 / 0,
                        offset: 1,
                        name: "紀元前",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    eraYearOrdinalRegex: /(元|\d+)年/,
                    eraYearOrdinalParse: function(e, a) {
                        return "元" === a[1] ? 1 : parseInt(a[1] || e, 10)
                    },
                    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日 dddd HH:mm",
                        l: "YYYY/MM/DD",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日(ddd) HH:mm"
                    },
                    meridiemParse: /午前|午後/i,
                    isPM: function(e) {
                        return "午後" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "午前" : "午後"
                    },
                    calendar: {
                        sameDay: "[今日] LT",
                        nextDay: "[明日] LT",
                        nextWeek: function(e) {
                            return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                        },
                        lastDay: "[昨日] LT",
                        lastWeek: function(e) {
                            return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
                        },
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}日/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "y":
                            return 1 === e ? "元年" : e + "年";
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        default:
                            return e
                        }
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "数秒",
                        ss: "%d秒",
                        m: "1分",
                        mm: "%d分",
                        h: "1時間",
                        hh: "%d時間",
                        d: "1日",
                        dd: "%d日",
                        M: "1ヶ月",
                        MM: "%dヶ月",
                        y: "1年",
                        yy: "%d年"
                    }
                })
            }(t(381))
        },
        4286: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("jv", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                    weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /enjing|siyang|sonten|ndalu/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "enjing" === a ? e : "siyang" === a ? e >= 11 ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                    },
                    calendar: {
                        sameDay: "[Dinten puniko pukul] LT",
                        nextDay: "[Mbenjang pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kala wingi pukul] LT",
                        lastWeek: "dddd [kepengker pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "wonten ing %s",
                        past: "%s ingkang kepengker",
                        s: "sawetawis detik",
                        ss: "%d detik",
                        m: "setunggal menit",
                        mm: "%d menit",
                        h: "setunggal jam",
                        hh: "%d jam",
                        d: "sedinten",
                        dd: "%d dinten",
                        M: "sewulan",
                        MM: "%d wulan",
                        y: "setaun",
                        yy: "%d taun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        2105: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ka", {
                    months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                    weekdays: {
                        standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                        format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                        isFormat: /(წინა|შემდეგ)/
                    },
                    weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                    weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[დღეს] LT[-ზე]",
                        nextDay: "[ხვალ] LT[-ზე]",
                        lastDay: "[გუშინ] LT[-ზე]",
                        nextWeek: "[შემდეგ] dddd LT[-ზე]",
                        lastWeek: "[წინა] dddd LT-ზე",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function(e, a, t) {
                                return "ი" === t ? a + "ში" : a + t + "ში"
                            }
                            ))
                        },
                        past: function(e) {
                            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : e
                        },
                        s: "რამდენიმე წამი",
                        ss: "%d წამი",
                        m: "წუთი",
                        mm: "%d წუთი",
                        h: "საათი",
                        hh: "%d საათი",
                        d: "დღე",
                        dd: "%d დღე",
                        M: "თვე",
                        MM: "%d თვე",
                        y: "წელი",
                        yy: "%d წელი"
                    },
                    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                    ordinal: function(e) {
                        return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        7772: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    0: "-ші",
                    1: "-ші",
                    2: "-ші",
                    3: "-ші",
                    4: "-ші",
                    5: "-ші",
                    6: "-шы",
                    7: "-ші",
                    8: "-ші",
                    9: "-шы",
                    10: "-шы",
                    20: "-шы",
                    30: "-шы",
                    40: "-шы",
                    50: "-ші",
                    60: "-шы",
                    70: "-ші",
                    80: "-ші",
                    90: "-шы",
                    100: "-ші"
                };
                e.defineLocale("kk", {
                    months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                    monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                    weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                    weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                    weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгін сағат] LT",
                        nextDay: "[Ертең сағат] LT",
                        nextWeek: "dddd [сағат] LT",
                        lastDay: "[Кеше сағат] LT",
                        lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ішінде",
                        past: "%s бұрын",
                        s: "бірнеше секунд",
                        ss: "%d секунд",
                        m: "бір минут",
                        mm: "%d минут",
                        h: "бір сағат",
                        hh: "%d сағат",
                        d: "бір күн",
                        dd: "%d күн",
                        M: "бір ай",
                        MM: "%d ай",
                        y: "бір жыл",
                        yy: "%d жыл"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                    ordinal: function(e) {
                        return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        8758: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "១",
                    2: "២",
                    3: "៣",
                    4: "៤",
                    5: "៥",
                    6: "៦",
                    7: "៧",
                    8: "៨",
                    9: "៩",
                    0: "០"
                }
                  , t = {
                    "១": "1",
                    "២": "2",
                    "៣": "3",
                    "៤": "4",
                    "៥": "5",
                    "៦": "6",
                    "៧": "7",
                    "៨": "8",
                    "៩": "9",
                    "០": "0"
                };
                e.defineLocale("km", {
                    months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                    weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                    weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ព្រឹក|ល្ងាច/,
                    isPM: function(e) {
                        return "ល្ងាច" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ព្រឹក" : "ល្ងាច"
                    },
                    calendar: {
                        sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                        nextDay: "[ស្អែក ម៉ោង] LT",
                        nextWeek: "dddd [ម៉ោង] LT",
                        lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                        lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sទៀត",
                        past: "%sមុន",
                        s: "ប៉ុន្មានវិនាទី",
                        ss: "%d វិនាទី",
                        m: "មួយនាទី",
                        mm: "%d នាទី",
                        h: "មួយម៉ោង",
                        hh: "%d ម៉ោង",
                        d: "មួយថ្ងៃ",
                        dd: "%d ថ្ងៃ",
                        M: "មួយខែ",
                        MM: "%d ខែ",
                        y: "មួយឆ្នាំ",
                        yy: "%d ឆ្នាំ"
                    },
                    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
                    ordinal: "ទី%d",
                    preparse: function(e) {
                        return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        9282: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "೧",
                    2: "೨",
                    3: "೩",
                    4: "೪",
                    5: "೫",
                    6: "೬",
                    7: "೭",
                    8: "೮",
                    9: "೯",
                    0: "೦"
                }
                  , t = {
                    "೧": "1",
                    "೨": "2",
                    "೩": "3",
                    "೪": "4",
                    "೫": "5",
                    "೬": "6",
                    "೭": "7",
                    "೮": "8",
                    "೯": "9",
                    "೦": "0"
                };
                e.defineLocale("kn", {
                    months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                    monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                    weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                    weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[ಇಂದು] LT",
                        nextDay: "[ನಾಳೆ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ನಿನ್ನೆ] LT",
                        lastWeek: "[ಕೊನೆಯ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ನಂತರ",
                        past: "%s ಹಿಂದೆ",
                        s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                        ss: "%d ಸೆಕೆಂಡುಗಳು",
                        m: "ಒಂದು ನಿಮಿಷ",
                        mm: "%d ನಿಮಿಷ",
                        h: "ಒಂದು ಗಂಟೆ",
                        hh: "%d ಗಂಟೆ",
                        d: "ಒಂದು ದಿನ",
                        dd: "%d ದಿನ",
                        M: "ಒಂದು ತಿಂಗಳು",
                        MM: "%d ತಿಂಗಳು",
                        y: "ಒಂದು ವರ್ಷ",
                        yy: "%d ವರ್ಷ"
                    },
                    preparse: function(e) {
                        return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "ರಾತ್ರಿ" === a ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === a ? e : "ಮಧ್ಯಾಹ್ನ" === a ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                    ordinal: function(e) {
                        return e + "ನೇ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        3730: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ko", {
                    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY년 MMMM D일",
                        LLL: "YYYY년 MMMM D일 A h:mm",
                        LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                        l: "YYYY.MM.DD.",
                        ll: "YYYY년 MMMM D일",
                        lll: "YYYY년 MMMM D일 A h:mm",
                        llll: "YYYY년 MMMM D일 dddd A h:mm"
                    },
                    calendar: {
                        sameDay: "오늘 LT",
                        nextDay: "내일 LT",
                        nextWeek: "dddd LT",
                        lastDay: "어제 LT",
                        lastWeek: "지난주 dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s 후",
                        past: "%s 전",
                        s: "몇 초",
                        ss: "%d초",
                        m: "1분",
                        mm: "%d분",
                        h: "한 시간",
                        hh: "%d시간",
                        d: "하루",
                        dd: "%d일",
                        M: "한 달",
                        MM: "%d달",
                        y: "일 년",
                        yy: "%d년"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "일";
                        case "M":
                            return e + "월";
                        case "w":
                        case "W":
                            return e + "주";
                        default:
                            return e
                        }
                    },
                    meridiemParse: /오전|오후/,
                    isPM: function(e) {
                        return "오후" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "오전" : "오후"
                    }
                })
            }(t(381))
        },
        1408: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                }
                  , t = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                }
                  , s = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
                e.defineLocale("ku", {
                    months: s,
                    monthsShort: s,
                    weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
                    weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ئێواره‌|به‌یانی/,
                    isPM: function(e) {
                        return /ئێواره‌/.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "به‌یانی" : "ئێواره‌"
                    },
                    calendar: {
                        sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                        nextDay: "[به‌یانی كاتژمێر] LT",
                        nextWeek: "dddd [كاتژمێر] LT",
                        lastDay: "[دوێنێ كاتژمێر] LT",
                        lastWeek: "dddd [كاتژمێر] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "له‌ %s",
                        past: "%s",
                        s: "چه‌ند چركه‌یه‌ك",
                        ss: "چركه‌ %d",
                        m: "یه‌ك خوله‌ك",
                        mm: "%d خوله‌ك",
                        h: "یه‌ك كاتژمێر",
                        hh: "%d كاتژمێر",
                        d: "یه‌ك ڕۆژ",
                        dd: "%d ڕۆژ",
                        M: "یه‌ك مانگ",
                        MM: "%d مانگ",
                        y: "یه‌ك ساڵ",
                        yy: "%d ساڵ"
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                            return t[e]
                        }
                        )).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        )).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(t(381))
        },
        3291: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    0: "-чү",
                    1: "-чи",
                    2: "-чи",
                    3: "-чү",
                    4: "-чү",
                    5: "-чи",
                    6: "-чы",
                    7: "-чи",
                    8: "-чи",
                    9: "-чу",
                    10: "-чу",
                    20: "-чы",
                    30: "-чу",
                    40: "-чы",
                    50: "-чү",
                    60: "-чы",
                    70: "-чи",
                    80: "-чи",
                    90: "-чу",
                    100: "-чү"
                };
                e.defineLocale("ky", {
                    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                    weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                    weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгүн саат] LT",
                        nextDay: "[Эртең саат] LT",
                        nextWeek: "dddd [саат] LT",
                        lastDay: "[Кечээ саат] LT",
                        lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ичинде",
                        past: "%s мурун",
                        s: "бирнече секунд",
                        ss: "%d секунд",
                        m: "бир мүнөт",
                        mm: "%d мүнөт",
                        h: "бир саат",
                        hh: "%d саат",
                        d: "бир күн",
                        dd: "%d күн",
                        M: "бир ай",
                        MM: "%d ай",
                        y: "бир жыл",
                        yy: "%d жыл"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                    ordinal: function(e) {
                        return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        6841: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        m: ["eng Minutt", "enger Minutt"],
                        h: ["eng Stonn", "enger Stonn"],
                        d: ["een Dag", "engem Dag"],
                        M: ["ee Mount", "engem Mount"],
                        y: ["ee Joer", "engem Joer"]
                    };
                    return a ? n[t][0] : n[t][1]
                }
                function t(e) {
                    if (e = parseInt(e, 10),
                    isNaN(e))
                        return !1;
                    if (e < 0)
                        return !0;
                    if (e < 10)
                        return 4 <= e && e <= 7;
                    if (e < 100) {
                        var a = e % 10;
                        return t(0 === a ? e / 10 : a)
                    }
                    if (e < 1e4) {
                        for (; e >= 10; )
                            e /= 10;
                        return t(e)
                    }
                    return t(e /= 1e3)
                }
                e.defineLocale("lb", {
                    months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm [Auer]",
                        LTS: "H:mm:ss [Auer]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm [Auer]",
                        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                    },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[Gëschter um] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                            }
                        }
                    },
                    relativeTime: {
                        future: function(e) {
                            return t(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                        },
                        past: function(e) {
                            return t(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                        },
                        s: "e puer Sekonnen",
                        ss: "%d Sekonnen",
                        m: a,
                        mm: "%d Minutten",
                        h: a,
                        hh: "%d Stonnen",
                        d: a,
                        dd: "%d Deeg",
                        M: a,
                        MM: "%d Méint",
                        y: a,
                        yy: "%d Joer"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5466: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("lo", {
                    months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                    monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                    weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                    weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                    weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                    isPM: function(e) {
                        return "ຕອນແລງ" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                    },
                    calendar: {
                        sameDay: "[ມື້ນີ້ເວລາ] LT",
                        nextDay: "[ມື້ອື່ນເວລາ] LT",
                        nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                        lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                        lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ອີກ %s",
                        past: "%sຜ່ານມາ",
                        s: "ບໍ່ເທົ່າໃດວິນາທີ",
                        ss: "%d ວິນາທີ",
                        m: "1 ນາທີ",
                        mm: "%d ນາທີ",
                        h: "1 ຊົ່ວໂມງ",
                        hh: "%d ຊົ່ວໂມງ",
                        d: "1 ມື້",
                        dd: "%d ມື້",
                        M: "1 ເດືອນ",
                        MM: "%d ເດືອນ",
                        y: "1 ປີ",
                        yy: "%d ປີ"
                    },
                    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                    ordinal: function(e) {
                        return "ທີ່" + e
                    }
                })
            }(t(381))
        },
        7010: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    ss: "sekundė_sekundžių_sekundes",
                    m: "minutė_minutės_minutę",
                    mm: "minutės_minučių_minutes",
                    h: "valanda_valandos_valandą",
                    hh: "valandos_valandų_valandas",
                    d: "diena_dienos_dieną",
                    dd: "dienos_dienų_dienas",
                    M: "mėnuo_mėnesio_mėnesį",
                    MM: "mėnesiai_mėnesių_mėnesius",
                    y: "metai_metų_metus",
                    yy: "metai_metų_metus"
                };
                function t(e, a, t, s) {
                    return a ? n(t)[0] : s ? n(t)[1] : n(t)[2]
                }
                function s(e) {
                    return e % 10 == 0 || e > 10 && e < 20
                }
                function n(e) {
                    return a[e].split("_")
                }
                function r(e, a, r, i) {
                    var d = e + " ";
                    return 1 === e ? d + t(0, a, r[0], i) : a ? d + (s(e) ? n(r)[1] : n(r)[0]) : i ? d + n(r)[1] : d + (s(e) ? n(r)[1] : n(r)[2])
                }
                e.defineLocale("lt", {
                    months: {
                        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                    },
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: {
                        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                        isFormat: /dddd HH:mm/
                    },
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                    },
                    calendar: {
                        sameDay: "[Šiandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Praėjusį] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieš %s",
                        s: function(e, a, t, s) {
                            return a ? "kelios sekundės" : s ? "kelių sekundžių" : "kelias sekundes"
                        },
                        ss: r,
                        m: t,
                        mm: r,
                        h: t,
                        hh: r,
                        d: t,
                        dd: r,
                        M: t,
                        MM: r,
                        y: t,
                        yy: r
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                    ordinal: function(e) {
                        return e + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        7595: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                    m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    h: "stundas_stundām_stunda_stundas".split("_"),
                    hh: "stundas_stundām_stunda_stundas".split("_"),
                    d: "dienas_dienām_diena_dienas".split("_"),
                    dd: "dienas_dienām_diena_dienas".split("_"),
                    M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                };
                function t(e, a, t) {
                    return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1]
                }
                function s(e, s, n) {
                    return e + " " + t(a[n], e, s)
                }
                function n(e, s, n) {
                    return t(a[n], e, s)
                }
                e.defineLocale("lv", {
                    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                    },
                    calendar: {
                        sameDay: "[Šodien pulksten] LT",
                        nextDay: "[Rīt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pagājušā] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "pēc %s",
                        past: "pirms %s",
                        s: function(e, a) {
                            return a ? "dažas sekundes" : "dažām sekundēm"
                        },
                        ss: s,
                        m: n,
                        mm: s,
                        h: n,
                        hh: s,
                        d: n,
                        dd: s,
                        M: n,
                        MM: s,
                        y: n,
                        yy: s
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        9861: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    words: {
                        ss: ["sekund", "sekunda", "sekundi"],
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["minut", "minuta", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mjesec", "mjeseca", "mjeseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, a) {
                        return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
                    },
                    translate: function(e, t, s) {
                        var n = a.words[s];
                        return 1 === s.length ? t ? n[0] : n[1] : e + " " + a.correctGrammaticalCase(e, n)
                    }
                };
                e.defineLocale("me", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sjutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "nekoliko sekundi",
                        ss: a.translate,
                        m: a.translate,
                        mm: a.translate,
                        h: a.translate,
                        hh: a.translate,
                        d: "dan",
                        dd: a.translate,
                        M: "mjesec",
                        MM: a.translate,
                        y: "godinu",
                        yy: a.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        5493: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("mi", {
                    months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                    monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                    weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                    weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                    weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [i] HH:mm",
                        LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i teie mahana, i] LT",
                        nextDay: "[apopo i] LT",
                        nextWeek: "dddd [i] LT",
                        lastDay: "[inanahi i] LT",
                        lastWeek: "dddd [whakamutunga i] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "i roto i %s",
                        past: "%s i mua",
                        s: "te hēkona ruarua",
                        ss: "%d hēkona",
                        m: "he meneti",
                        mm: "%d meneti",
                        h: "te haora",
                        hh: "%d haora",
                        d: "he ra",
                        dd: "%d ra",
                        M: "he marama",
                        MM: "%d marama",
                        y: "he tau",
                        yy: "%d tau"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5966: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("mk", {
                    months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                    weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                    weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[Денес во] LT",
                        nextDay: "[Утре во] LT",
                        nextWeek: "[Во] dddd [во] LT",
                        lastDay: "[Вчера во] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "пред %s",
                        s: "неколку секунди",
                        ss: "%d секунди",
                        m: "една минута",
                        mm: "%d минути",
                        h: "еден час",
                        hh: "%d часа",
                        d: "еден ден",
                        dd: "%d дена",
                        M: "еден месец",
                        MM: "%d месеци",
                        y: "една година",
                        yy: "%d години"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                    ordinal: function(e) {
                        var a = e % 10
                          , t = e % 100;
                        return 0 === e ? e + "-ев" : 0 === t ? e + "-ен" : t > 10 && t < 20 ? e + "-ти" : 1 === a ? e + "-ви" : 2 === a ? e + "-ри" : 7 === a || 8 === a ? e + "-ми" : e + "-ти"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        7341: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ml", {
                    months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                    monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                    weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                    weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm -നു",
                        LTS: "A h:mm:ss -നു",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm -നു",
                        LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                    },
                    calendar: {
                        sameDay: "[ഇന്ന്] LT",
                        nextDay: "[നാളെ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ഇന്നലെ] LT",
                        lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s കഴിഞ്ഞ്",
                        past: "%s മുൻപ്",
                        s: "അൽപ നിമിഷങ്ങൾ",
                        ss: "%d സെക്കൻഡ്",
                        m: "ഒരു മിനിറ്റ്",
                        mm: "%d മിനിറ്റ്",
                        h: "ഒരു മണിക്കൂർ",
                        hh: "%d മണിക്കൂർ",
                        d: "ഒരു ദിവസം",
                        dd: "%d ദിവസം",
                        M: "ഒരു മാസം",
                        MM: "%d മാസം",
                        y: "ഒരു വർഷം",
                        yy: "%d വർഷം"
                    },
                    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "രാത്രി" === a && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === a || "വൈകുന്നേരം" === a ? e + 12 : e
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                    }
                })
            }(t(381))
        },
        5115: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    switch (t) {
                    case "s":
                        return a ? "хэдхэн секунд" : "хэдхэн секундын";
                    case "ss":
                        return e + (a ? " секунд" : " секундын");
                    case "m":
                    case "mm":
                        return e + (a ? " минут" : " минутын");
                    case "h":
                    case "hh":
                        return e + (a ? " цаг" : " цагийн");
                    case "d":
                    case "dd":
                        return e + (a ? " өдөр" : " өдрийн");
                    case "M":
                    case "MM":
                        return e + (a ? " сар" : " сарын");
                    case "y":
                    case "yy":
                        return e + (a ? " жил" : " жилийн");
                    default:
                        return e
                    }
                }
                e.defineLocale("mn", {
                    months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                    monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                    weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                    weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY оны MMMMын D",
                        LLL: "YYYY оны MMMMын D HH:mm",
                        LLLL: "dddd, YYYY оны MMMMын D HH:mm"
                    },
                    meridiemParse: /ҮӨ|ҮХ/i,
                    isPM: function(e) {
                        return "ҮХ" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ҮӨ" : "ҮХ"
                    },
                    calendar: {
                        sameDay: "[Өнөөдөр] LT",
                        nextDay: "[Маргааш] LT",
                        nextWeek: "[Ирэх] dddd LT",
                        lastDay: "[Өчигдөр] LT",
                        lastWeek: "[Өнгөрсөн] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s дараа",
                        past: "%s өмнө",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + " өдөр";
                        default:
                            return e
                        }
                    }
                })
            }(t(381))
        },
        370: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                }
                  , t = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
                function s(e, a, t, s) {
                    var n = "";
                    if (a)
                        switch (t) {
                        case "s":
                            n = "काही सेकंद";
                            break;
                        case "ss":
                            n = "%d सेकंद";
                            break;
                        case "m":
                            n = "एक मिनिट";
                            break;
                        case "mm":
                            n = "%d मिनिटे";
                            break;
                        case "h":
                            n = "एक तास";
                            break;
                        case "hh":
                            n = "%d तास";
                            break;
                        case "d":
                            n = "एक दिवस";
                            break;
                        case "dd":
                            n = "%d दिवस";
                            break;
                        case "M":
                            n = "एक महिना";
                            break;
                        case "MM":
                            n = "%d महिने";
                            break;
                        case "y":
                            n = "एक वर्ष";
                            break;
                        case "yy":
                            n = "%d वर्षे"
                        }
                    else
                        switch (t) {
                        case "s":
                            n = "काही सेकंदां";
                            break;
                        case "ss":
                            n = "%d सेकंदां";
                            break;
                        case "m":
                            n = "एका मिनिटा";
                            break;
                        case "mm":
                            n = "%d मिनिटां";
                            break;
                        case "h":
                            n = "एका तासा";
                            break;
                        case "hh":
                            n = "%d तासां";
                            break;
                        case "d":
                            n = "एका दिवसा";
                            break;
                        case "dd":
                            n = "%d दिवसां";
                            break;
                        case "M":
                            n = "एका महिन्या";
                            break;
                        case "MM":
                            n = "%d महिन्यां";
                            break;
                        case "y":
                            n = "एका वर्षा";
                            break;
                        case "yy":
                            n = "%d वर्षां"
                        }
                    return n.replace(/%d/i, e)
                }
                e.defineLocale("mr", {
                    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm वाजता",
                        LTS: "A h:mm:ss वाजता",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm वाजता",
                        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[उद्या] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[मागील] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमध्ये",
                        past: "%sपूर्वी",
                        s: s,
                        ss: s,
                        m: s,
                        mm: s,
                        h: s,
                        hh: s,
                        d: s,
                        dd: s,
                        M: s,
                        MM: s,
                        y: s,
                        yy: s
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "पहाटे" === a || "सकाळी" === a ? e : "दुपारी" === a || "सायंकाळी" === a || "रात्री" === a ? e >= 12 ? e : e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        1237: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ms-my", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        ss: "%d saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        9847: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ms", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        ss: "%d saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        2126: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("mt", {
                    months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
                    monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
                    weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
                    weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
                    weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Illum fil-]LT",
                        nextDay: "[Għada fil-]LT",
                        nextWeek: "dddd [fil-]LT",
                        lastDay: "[Il-bieraħ fil-]LT",
                        lastWeek: "dddd [li għadda] [fil-]LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "f’ %s",
                        past: "%s ilu",
                        s: "ftit sekondi",
                        ss: "%d sekondi",
                        m: "minuta",
                        mm: "%d minuti",
                        h: "siegħa",
                        hh: "%d siegħat",
                        d: "ġurnata",
                        dd: "%d ġranet",
                        M: "xahar",
                        MM: "%d xhur",
                        y: "sena",
                        yy: "%d sni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6165: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "၁",
                    2: "၂",
                    3: "၃",
                    4: "၄",
                    5: "၅",
                    6: "၆",
                    7: "၇",
                    8: "၈",
                    9: "၉",
                    0: "၀"
                }
                  , t = {
                    "၁": "1",
                    "၂": "2",
                    "၃": "3",
                    "၄": "4",
                    "၅": "5",
                    "၆": "6",
                    "၇": "7",
                    "၈": "8",
                    "၉": "9",
                    "၀": "0"
                };
                e.defineLocale("my", {
                    months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                    monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                    weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                    weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[ယနေ.] LT [မှာ]",
                        nextDay: "[မနက်ဖြန်] LT [မှာ]",
                        nextWeek: "dddd LT [မှာ]",
                        lastDay: "[မနေ.က] LT [မှာ]",
                        lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "လာမည့် %s မှာ",
                        past: "လွန်ခဲ့သော %s က",
                        s: "စက္ကန်.အနည်းငယ်",
                        ss: "%d စက္ကန့်",
                        m: "တစ်မိနစ်",
                        mm: "%d မိနစ်",
                        h: "တစ်နာရီ",
                        hh: "%d နာရီ",
                        d: "တစ်ရက်",
                        dd: "%d ရက်",
                        M: "တစ်လ",
                        MM: "%d လ",
                        y: "တစ်နှစ်",
                        yy: "%d နှစ်"
                    },
                    preparse: function(e) {
                        return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        4924: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("nb", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[i går kl.] LT",
                        lastWeek: "[forrige] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "noen sekunder",
                        ss: "%d sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        w: "en uke",
                        ww: "%d uker",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "ett år",
                        yy: "%d år"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6744: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                }
                  , t = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
                e.defineLocale("ne", {
                    months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                    monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                    weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                    weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "Aको h:mm बजे",
                        LTS: "Aको h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, Aको h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "राति" === a ? e < 4 ? e : e + 12 : "बिहान" === a ? e : "दिउँसो" === a ? e >= 10 ? e : e + 12 : "साँझ" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[भोलि] LT",
                        nextWeek: "[आउँदो] dddd[,] LT",
                        lastDay: "[हिजो] LT",
                        lastWeek: "[गएको] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमा",
                        past: "%s अगाडि",
                        s: "केही क्षण",
                        ss: "%d सेकेण्ड",
                        m: "एक मिनेट",
                        mm: "%d मिनेट",
                        h: "एक घण्टा",
                        hh: "%d घण्टा",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महिना",
                        MM: "%d महिना",
                        y: "एक बर्ष",
                        yy: "%d बर्ष"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        6666: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
                  , t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
                  , s = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
                  , n = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl-be", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, s) {
                        return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "één minuut",
                        mm: "%d minuten",
                        h: "één uur",
                        hh: "%d uur",
                        d: "één dag",
                        dd: "%d dagen",
                        M: "één maand",
                        MM: "%d maanden",
                        y: "één jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        3901: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
                  , t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
                  , s = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
                  , n = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, s) {
                        return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "één minuut",
                        mm: "%d minuten",
                        h: "één uur",
                        hh: "%d uur",
                        d: "één dag",
                        dd: "%d dagen",
                        w: "één week",
                        ww: "%d weken",
                        M: "één maand",
                        MM: "%d maanden",
                        y: "één jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        3877: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("nn", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                    weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
                    weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[I dag klokka] LT",
                        nextDay: "[I morgon klokka] LT",
                        nextWeek: "dddd [klokka] LT",
                        lastDay: "[I går klokka] LT",
                        lastWeek: "[Føregåande] dddd [klokka] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s sidan",
                        s: "nokre sekund",
                        ss: "%d sekund",
                        m: "eit minutt",
                        mm: "%d minutt",
                        h: "ein time",
                        hh: "%d timar",
                        d: "ein dag",
                        dd: "%d dagar",
                        w: "ei veke",
                        ww: "%d veker",
                        M: "ein månad",
                        MM: "%d månader",
                        y: "eit år",
                        yy: "%d år"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        2135: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("oc-lnc", {
                    months: {
                        standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
                        format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
                        isFormat: /D[oD]?(\s)+MMMM/
                    },
                    monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
                    weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
                    weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [de] YYYY",
                        ll: "D MMM YYYY",
                        LLL: "D MMMM [de] YYYY [a] H:mm",
                        lll: "D MMM YYYY, H:mm",
                        LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                        llll: "ddd D MMM YYYY, H:mm"
                    },
                    calendar: {
                        sameDay: "[uèi a] LT",
                        nextDay: "[deman a] LT",
                        nextWeek: "dddd [a] LT",
                        lastDay: "[ièr a] LT",
                        lastWeek: "dddd [passat a] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "d'aquí %s",
                        past: "fa %s",
                        s: "unas segondas",
                        ss: "%d segondas",
                        m: "una minuta",
                        mm: "%d minutas",
                        h: "una ora",
                        hh: "%d oras",
                        d: "un jorn",
                        dd: "%d jorns",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                    ordinal: function(e, a) {
                        var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                        return "w" !== a && "W" !== a || (t = "a"),
                        e + t
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5858: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "੧",
                    2: "੨",
                    3: "੩",
                    4: "੪",
                    5: "੫",
                    6: "੬",
                    7: "੭",
                    8: "੮",
                    9: "੯",
                    0: "੦"
                }
                  , t = {
                    "੧": "1",
                    "੨": "2",
                    "੩": "3",
                    "੪": "4",
                    "੫": "5",
                    "੬": "6",
                    "੭": "7",
                    "੮": "8",
                    "੯": "9",
                    "੦": "0"
                };
                e.defineLocale("pa-in", {
                    months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                    weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm ਵਜੇ",
                        LTS: "A h:mm:ss ਵਜੇ",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                        LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                    },
                    calendar: {
                        sameDay: "[ਅਜ] LT",
                        nextDay: "[ਕਲ] LT",
                        nextWeek: "[ਅਗਲਾ] dddd, LT",
                        lastDay: "[ਕਲ] LT",
                        lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ਵਿੱਚ",
                        past: "%s ਪਿਛਲੇ",
                        s: "ਕੁਝ ਸਕਿੰਟ",
                        ss: "%d ਸਕਿੰਟ",
                        m: "ਇਕ ਮਿੰਟ",
                        mm: "%d ਮਿੰਟ",
                        h: "ਇੱਕ ਘੰਟਾ",
                        hh: "%d ਘੰਟੇ",
                        d: "ਇੱਕ ਦਿਨ",
                        dd: "%d ਦਿਨ",
                        M: "ਇੱਕ ਮਹੀਨਾ",
                        MM: "%d ਮਹੀਨੇ",
                        y: "ਇੱਕ ਸਾਲ",
                        yy: "%d ਸਾਲ"
                    },
                    preparse: function(e) {
                        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "ਰਾਤ" === a ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === a ? e : "ਦੁਪਹਿਰ" === a ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        4495: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
                  , t = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
                  , s = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
                function n(e) {
                    return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
                }
                function r(e, a, t) {
                    var s = e + " ";
                    switch (t) {
                    case "ss":
                        return s + (n(e) ? "sekundy" : "sekund");
                    case "m":
                        return a ? "minuta" : "minutę";
                    case "mm":
                        return s + (n(e) ? "minuty" : "minut");
                    case "h":
                        return a ? "godzina" : "godzinę";
                    case "hh":
                        return s + (n(e) ? "godziny" : "godzin");
                    case "ww":
                        return s + (n(e) ? "tygodnie" : "tygodni");
                    case "MM":
                        return s + (n(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return s + (n(e) ? "lata" : "lat")
                    }
                }
                e.defineLocale("pl", {
                    months: function(e, s) {
                        return e ? /D MMMM/.test(s) ? t[e.month()] : a[e.month()] : a
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                    monthsParse: s,
                    longMonthsParse: s,
                    shortMonthsParse: s,
                    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                    weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                    weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Dziś o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[W niedzielę o] LT";
                            case 2:
                                return "[We wtorek o] LT";
                            case 3:
                                return "[W środę o] LT";
                            case 6:
                                return "[W sobotę o] LT";
                            default:
                                return "[W] dddd [o] LT"
                            }
                        },
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        ss: r,
                        m: r,
                        mm: r,
                        h: r,
                        hh: r,
                        d: "1 dzień",
                        dd: "%d dni",
                        w: "tydzień",
                        ww: r,
                        M: "miesiąc",
                        MM: r,
                        y: "rok",
                        yy: r
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        7971: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("pt-br", {
                    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                    weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hoje às] LT",
                        nextDay: "[Amanhã às] LT",
                        nextWeek: "dddd [às] LT",
                        lastDay: "[Ontem às] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "há %s",
                        s: "poucos segundos",
                        ss: "%d segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    invalidDate: "Data inválida"
                })
            }(t(381))
        },
        9520: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("pt", {
                    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                    weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hoje às] LT",
                        nextDay: "[Amanhã às] LT",
                        nextWeek: "dddd [às] LT",
                        lastDay: "[Ontem às] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "há %s",
                        s: "segundos",
                        ss: "%d segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        w: "uma semana",
                        ww: "%d semanas",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        6459: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t) {
                    var s = " ";
                    return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (s = " de "),
                    e + s + {
                        ss: "secunde",
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        ww: "săptămâni",
                        MM: "luni",
                        yy: "ani"
                    }[t]
                }
                e.defineLocale("ro", {
                    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                    monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[azi la] LT",
                        nextDay: "[mâine la] LT",
                        nextWeek: "dddd [la] LT",
                        lastDay: "[ieri la] LT",
                        lastWeek: "[fosta] dddd [la] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "%s în urmă",
                        s: "câteva secunde",
                        ss: a,
                        m: "un minut",
                        mm: a,
                        h: "o oră",
                        hh: a,
                        d: "o zi",
                        dd: a,
                        w: "o săptămână",
                        ww: a,
                        M: "o lună",
                        MM: a,
                        y: "un an",
                        yy: a
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        1793: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t) {
                    return "m" === t ? a ? "минута" : "минуту" : e + " " + (s = +e,
                    n = {
                        ss: a ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                        mm: a ? "минута_минуты_минут" : "минуту_минуты_минут",
                        hh: "час_часа_часов",
                        dd: "день_дня_дней",
                        ww: "неделя_недели_недель",
                        MM: "месяц_месяца_месяцев",
                        yy: "год_года_лет"
                    }[t].split("_"),
                    s % 10 == 1 && s % 100 != 11 ? n[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? n[1] : n[2]);
                    var s, n
                }
                var t = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
                e.defineLocale("ru", {
                    months: {
                        format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                        standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                    },
                    monthsShort: {
                        format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                        standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                    },
                    weekdays: {
                        standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                        format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
                    },
                    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    monthsParse: t,
                    longMonthsParse: t,
                    shortMonthsParse: t,
                    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., H:mm",
                        LLLL: "dddd, D MMMM YYYY г., H:mm"
                    },
                    calendar: {
                        sameDay: "[Сегодня, в] LT",
                        nextDay: "[Завтра, в] LT",
                        lastDay: "[Вчера, в] LT",
                        nextWeek: function(e) {
                            if (e.week() === this.week())
                                return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                            switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd, [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd, [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd, [в] LT"
                            }
                        },
                        lastWeek: function(e) {
                            if (e.week() === this.week())
                                return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                            switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd, [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd, [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd, [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "через %s",
                        past: "%s назад",
                        s: "несколько секунд",
                        ss: a,
                        m: a,
                        mm: a,
                        h: "час",
                        hh: a,
                        d: "день",
                        dd: a,
                        w: "неделя",
                        ww: a,
                        M: "месяц",
                        MM: a,
                        y: "год",
                        yy: a
                    },
                    meridiemParse: /ночи|утра|дня|вечера/i,
                    isPM: function(e) {
                        return /^(дня|вечера)$/.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        950: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
                  , t = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
                e.defineLocale("sd", {
                    months: a,
                    monthsShort: a,
                    weekdays: t,
                    weekdaysShort: t,
                    weekdaysMin: t,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd، D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /صبح|شام/,
                    isPM: function(e) {
                        return "شام" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "صبح" : "شام"
                    },
                    calendar: {
                        sameDay: "[اڄ] LT",
                        nextDay: "[سڀاڻي] LT",
                        nextWeek: "dddd [اڳين هفتي تي] LT",
                        lastDay: "[ڪالهه] LT",
                        lastWeek: "[گزريل هفتي] dddd [تي] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s پوء",
                        past: "%s اڳ",
                        s: "چند سيڪنڊ",
                        ss: "%d سيڪنڊ",
                        m: "هڪ منٽ",
                        mm: "%d منٽ",
                        h: "هڪ ڪلاڪ",
                        hh: "%d ڪلاڪ",
                        d: "هڪ ڏينهن",
                        dd: "%d ڏينهن",
                        M: "هڪ مهينو",
                        MM: "%d مهينا",
                        y: "هڪ سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        490: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("se", {
                    months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                    monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                    weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                    weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                    weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "MMMM D. [b.] YYYY",
                        LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                        LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[otne ti] LT",
                        nextDay: "[ihttin ti] LT",
                        nextWeek: "dddd [ti] LT",
                        lastDay: "[ikte ti] LT",
                        lastWeek: "[ovddit] dddd [ti] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s geažes",
                        past: "maŋit %s",
                        s: "moadde sekunddat",
                        ss: "%d sekunddat",
                        m: "okta minuhta",
                        mm: "%d minuhtat",
                        h: "okta diimmu",
                        hh: "%d diimmut",
                        d: "okta beaivi",
                        dd: "%d beaivvit",
                        M: "okta mánnu",
                        MM: "%d mánut",
                        y: "okta jahki",
                        yy: "%d jagit"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        124: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("si", {
                    months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                    monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                    weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                    weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                    weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "a h:mm",
                        LTS: "a h:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY MMMM D",
                        LLL: "YYYY MMMM D, a h:mm",
                        LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                    },
                    calendar: {
                        sameDay: "[අද] LT[ට]",
                        nextDay: "[හෙට] LT[ට]",
                        nextWeek: "dddd LT[ට]",
                        lastDay: "[ඊයේ] LT[ට]",
                        lastWeek: "[පසුගිය] dddd LT[ට]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sකින්",
                        past: "%sකට පෙර",
                        s: "තත්පර කිහිපය",
                        ss: "තත්පර %d",
                        m: "මිනිත්තුව",
                        mm: "මිනිත්තු %d",
                        h: "පැය",
                        hh: "පැය %d",
                        d: "දිනය",
                        dd: "දින %d",
                        M: "මාසය",
                        MM: "මාස %d",
                        y: "වසර",
                        yy: "වසර %d"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                    ordinal: function(e) {
                        return e + " වැනි"
                    },
                    meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                    isPM: function(e) {
                        return "ප.ව." === e || "පස් වරු" === e
                    },
                    meridiem: function(e, a, t) {
                        return e > 11 ? t ? "ප.ව." : "පස් වරු" : t ? "පෙ.ව." : "පෙර වරු"
                    }
                })
            }(t(381))
        },
        4249: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
                  , t = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
                function s(e) {
                    return e > 1 && e < 5
                }
                function n(e, a, t, n) {
                    var r = e + " ";
                    switch (t) {
                    case "s":
                        return a || n ? "pár sekúnd" : "pár sekundami";
                    case "ss":
                        return a || n ? r + (s(e) ? "sekundy" : "sekúnd") : r + "sekundami";
                    case "m":
                        return a ? "minúta" : n ? "minútu" : "minútou";
                    case "mm":
                        return a || n ? r + (s(e) ? "minúty" : "minút") : r + "minútami";
                    case "h":
                        return a ? "hodina" : n ? "hodinu" : "hodinou";
                    case "hh":
                        return a || n ? r + (s(e) ? "hodiny" : "hodín") : r + "hodinami";
                    case "d":
                        return a || n ? "deň" : "dňom";
                    case "dd":
                        return a || n ? r + (s(e) ? "dni" : "dní") : r + "dňami";
                    case "M":
                        return a || n ? "mesiac" : "mesiacom";
                    case "MM":
                        return a || n ? r + (s(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                    case "y":
                        return a || n ? "rok" : "rokom";
                    case "yy":
                        return a || n ? r + (s(e) ? "roky" : "rokov") : r + "rokmi"
                    }
                }
                e.defineLocale("sk", {
                    months: a,
                    monthsShort: t,
                    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[včera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: n,
                        ss: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        4985: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = e + " ";
                    switch (t) {
                    case "s":
                        return a || s ? "nekaj sekund" : "nekaj sekundami";
                    case "ss":
                        return n + (1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || s ? "sekundi" : "sekundah" : e < 5 ? a || s ? "sekunde" : "sekundah" : "sekund");
                    case "m":
                        return a ? "ena minuta" : "eno minuto";
                    case "mm":
                        return n + (1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami");
                    case "h":
                        return a ? "ena ura" : "eno uro";
                    case "hh":
                        return n + (1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami");
                    case "d":
                        return a || s ? "en dan" : "enim dnem";
                    case "dd":
                        return n + (1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi");
                    case "M":
                        return a || s ? "en mesec" : "enim mesecem";
                    case "MM":
                        return n + (1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci");
                    case "y":
                        return a || s ? "eno leto" : "enim letom";
                    case "yy":
                        return n + (1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti")
                    }
                }
                e.defineLocale("sl", {
                    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danes ob] LT",
                        nextDay: "[jutri ob] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                            }
                        },
                        lastDay: "[včeraj ob] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "čez %s",
                        past: "pred %s",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        1104: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("sq", {
                    months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                    monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                    weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                    weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                    weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                    weekdaysParseExact: !0,
                    meridiemParse: /PD|MD/,
                    isPM: function(e) {
                        return "M" === e.charAt(0)
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "PD" : "MD"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Sot në] LT",
                        nextDay: "[Nesër në] LT",
                        nextWeek: "dddd [në] LT",
                        lastDay: "[Dje në] LT",
                        lastWeek: "dddd [e kaluar në] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "në %s",
                        past: "%s më parë",
                        s: "disa sekonda",
                        ss: "%d sekonda",
                        m: "një minutë",
                        mm: "%d minuta",
                        h: "një orë",
                        hh: "%d orë",
                        d: "një ditë",
                        dd: "%d ditë",
                        M: "një muaj",
                        MM: "%d muaj",
                        y: "një vit",
                        yy: "%d vite"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        9915: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    words: {
                        ss: ["секунда", "секунде", "секунди"],
                        m: ["један минут", "једног минута"],
                        mm: ["минут", "минута", "минута"],
                        h: ["један сат", "једног сата"],
                        hh: ["сат", "сата", "сати"],
                        d: ["један дан", "једног дана"],
                        dd: ["дан", "дана", "дана"],
                        M: ["један месец", "једног месеца"],
                        MM: ["месец", "месеца", "месеци"],
                        y: ["једну годину", "једне године"],
                        yy: ["годину", "године", "година"]
                    },
                    correctGrammaticalCase: function(e, a) {
                        return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? a[0] : a[1] : a[2]
                    },
                    translate: function(e, t, s, n) {
                        var r, i = a.words[s];
                        return 1 === s.length ? "y" === s && t ? "једна година" : n || t ? i[0] : i[1] : (r = a.correctGrammaticalCase(e, i),
                        "yy" === s && t && "годину" === r ? e + " година" : e + " " + r)
                    }
                };
                e.defineLocale("sr-cyrl", {
                    months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                    monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                    weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                    weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D. M. YYYY.",
                        LL: "D. MMMM YYYY.",
                        LLL: "D. MMMM YYYY. H:mm",
                        LLLL: "dddd, D. MMMM YYYY. H:mm"
                    },
                    calendar: {
                        sameDay: "[данас у] LT",
                        nextDay: "[сутра у] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                            }
                        },
                        lastDay: "[јуче у] LT",
                        lastWeek: function() {
                            return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "пре %s",
                        s: "неколико секунди",
                        ss: a.translate,
                        m: a.translate,
                        mm: a.translate,
                        h: a.translate,
                        hh: a.translate,
                        d: a.translate,
                        dd: a.translate,
                        M: a.translate,
                        MM: a.translate,
                        y: a.translate,
                        yy: a.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        9131: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    words: {
                        ss: ["sekunda", "sekunde", "sekundi"],
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["minut", "minuta", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        d: ["jedan dan", "jednog dana"],
                        dd: ["dan", "dana", "dana"],
                        M: ["jedan mesec", "jednog meseca"],
                        MM: ["mesec", "meseca", "meseci"],
                        y: ["jednu godinu", "jedne godine"],
                        yy: ["godinu", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, a) {
                        return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? a[0] : a[1] : a[2]
                    },
                    translate: function(e, t, s, n) {
                        var r, i = a.words[s];
                        return 1 === s.length ? "y" === s && t ? "jedna godina" : n || t ? i[0] : i[1] : (r = a.correctGrammaticalCase(e, i),
                        "yy" === s && t && "godinu" === r ? e + " godina" : e + " " + r)
                    }
                };
                e.defineLocale("sr", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D. M. YYYY.",
                        LL: "D. MMMM YYYY.",
                        LLL: "D. MMMM YYYY. H:mm",
                        LLLL: "dddd, D. MMMM YYYY. H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        ss: a.translate,
                        m: a.translate,
                        mm: a.translate,
                        h: a.translate,
                        hh: a.translate,
                        d: a.translate,
                        dd: a.translate,
                        M: a.translate,
                        MM: a.translate,
                        y: a.translate,
                        yy: a.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        5893: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ss", {
                    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                    monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                    weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                    weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                    weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Namuhla nga] LT",
                        nextDay: "[Kusasa nga] LT",
                        nextWeek: "dddd [nga] LT",
                        lastDay: "[Itolo nga] LT",
                        lastWeek: "dddd [leliphelile] [nga] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "nga %s",
                        past: "wenteka nga %s",
                        s: "emizuzwana lomcane",
                        ss: "%d mzuzwana",
                        m: "umzuzu",
                        mm: "%d emizuzu",
                        h: "lihora",
                        hh: "%d emahora",
                        d: "lilanga",
                        dd: "%d emalanga",
                        M: "inyanga",
                        MM: "%d tinyanga",
                        y: "umnyaka",
                        yy: "%d iminyaka"
                    },
                    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                    meridiem: function(e, a, t) {
                        return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                    },
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "ekuseni" === a ? e : "emini" === a ? e >= 11 ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: "%d",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        8760: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("sv", {
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                    weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                    weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Idag] LT",
                        nextDay: "[Imorgon] LT",
                        lastDay: "[Igår] LT",
                        nextWeek: "[På] dddd LT",
                        lastWeek: "[I] dddd[s] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "för %s sedan",
                        s: "några sekunder",
                        ss: "%d sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en månad",
                        MM: "%d månader",
                        y: "ett år",
                        yy: "%d år"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === a || 2 === a ? ":a" : ":e")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        1172: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("sw", {
                    months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                    weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                    weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "hh:mm A",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[leo saa] LT",
                        nextDay: "[kesho saa] LT",
                        nextWeek: "[wiki ijayo] dddd [saat] LT",
                        lastDay: "[jana] LT",
                        lastWeek: "[wiki iliyopita] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s baadaye",
                        past: "tokea %s",
                        s: "hivi punde",
                        ss: "sekunde %d",
                        m: "dakika moja",
                        mm: "dakika %d",
                        h: "saa limoja",
                        hh: "masaa %d",
                        d: "siku moja",
                        dd: "siku %d",
                        M: "mwezi mmoja",
                        MM: "miezi %d",
                        y: "mwaka mmoja",
                        yy: "miaka %d"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        7333: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "௧",
                    2: "௨",
                    3: "௩",
                    4: "௪",
                    5: "௫",
                    6: "௬",
                    7: "௭",
                    8: "௮",
                    9: "௯",
                    0: "௦"
                }
                  , t = {
                    "௧": "1",
                    "௨": "2",
                    "௩": "3",
                    "௪": "4",
                    "௫": "5",
                    "௬": "6",
                    "௭": "7",
                    "௮": "8",
                    "௯": "9",
                    "௦": "0"
                };
                e.defineLocale("ta", {
                    months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                    weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                    weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, HH:mm",
                        LLLL: "dddd, D MMMM YYYY, HH:mm"
                    },
                    calendar: {
                        sameDay: "[இன்று] LT",
                        nextDay: "[நாளை] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[நேற்று] LT",
                        lastWeek: "[கடந்த வாரம்] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s இல்",
                        past: "%s முன்",
                        s: "ஒரு சில விநாடிகள்",
                        ss: "%d விநாடிகள்",
                        m: "ஒரு நிமிடம்",
                        mm: "%d நிமிடங்கள்",
                        h: "ஒரு மணி நேரம்",
                        hh: "%d மணி நேரம்",
                        d: "ஒரு நாள்",
                        dd: "%d நாட்கள்",
                        M: "ஒரு மாதம்",
                        MM: "%d மாதங்கள்",
                        y: "ஒரு வருடம்",
                        yy: "%d ஆண்டுகள்"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}வது/,
                    ordinal: function(e) {
                        return e + "வது"
                    },
                    preparse: function(e) {
                        return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) {
                            return t[e]
                        }
                        ))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return a[e]
                        }
                        ))
                    },
                    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                    meridiem: function(e, a, t) {
                        return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                    },
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "யாமம்" === a ? e < 2 ? e : e + 12 : "வைகறை" === a || "காலை" === a || "நண்பகல்" === a && e >= 10 ? e : e + 12
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        3110: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("te", {
                    months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                    monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                    weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                    weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[నేడు] LT",
                        nextDay: "[రేపు] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[నిన్న] LT",
                        lastWeek: "[గత] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s లో",
                        past: "%s క్రితం",
                        s: "కొన్ని క్షణాలు",
                        ss: "%d సెకన్లు",
                        m: "ఒక నిమిషం",
                        mm: "%d నిమిషాలు",
                        h: "ఒక గంట",
                        hh: "%d గంటలు",
                        d: "ఒక రోజు",
                        dd: "%d రోజులు",
                        M: "ఒక నెల",
                        MM: "%d నెలలు",
                        y: "ఒక సంవత్సరం",
                        yy: "%d సంవత్సరాలు"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}వ/,
                    ordinal: "%dవ",
                    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "రాత్రి" === a ? e < 4 ? e : e + 12 : "ఉదయం" === a ? e : "మధ్యాహ్నం" === a ? e >= 10 ? e : e + 12 : "సాయంత్రం" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(t(381))
        },
        2095: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("tet", {
                    months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                    monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                    weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                    weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                    weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Ohin iha] LT",
                        nextDay: "[Aban iha] LT",
                        nextWeek: "dddd [iha] LT",
                        lastDay: "[Horiseik iha] LT",
                        lastWeek: "dddd [semana kotuk] [iha] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "iha %s",
                        past: "%s liuba",
                        s: "segundu balun",
                        ss: "segundu %d",
                        m: "minutu ida",
                        mm: "minutu %d",
                        h: "oras ida",
                        hh: "oras %d",
                        d: "loron ida",
                        dd: "loron %d",
                        M: "fulan ida",
                        MM: "fulan %d",
                        y: "tinan ida",
                        yy: "tinan %d"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        7321: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    0: "-ум",
                    1: "-ум",
                    2: "-юм",
                    3: "-юм",
                    4: "-ум",
                    5: "-ум",
                    6: "-ум",
                    7: "-ум",
                    8: "-ум",
                    9: "-ум",
                    10: "-ум",
                    12: "-ум",
                    13: "-ум",
                    20: "-ум",
                    30: "-юм",
                    40: "-ум",
                    50: "-ум",
                    60: "-ум",
                    70: "-ум",
                    80: "-ум",
                    90: "-ум",
                    100: "-ум"
                };
                e.defineLocale("tg", {
                    months: {
                        format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
                        standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
                    },
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                    weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                    weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Имрӯз соати] LT",
                        nextDay: "[Фардо соати] LT",
                        lastDay: "[Дирӯз соати] LT",
                        nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                        lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "баъди %s",
                        past: "%s пеш",
                        s: "якчанд сония",
                        m: "як дақиқа",
                        mm: "%d дақиқа",
                        h: "як соат",
                        hh: "%d соат",
                        d: "як рӯз",
                        dd: "%d рӯз",
                        M: "як моҳ",
                        MM: "%d моҳ",
                        y: "як сол",
                        yy: "%d сол"
                    },
                    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "шаб" === a ? e < 4 ? e : e + 12 : "субҳ" === a ? e : "рӯз" === a ? e >= 11 ? e : e + 12 : "бегоҳ" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                    ordinal: function(e) {
                        return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        9041: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("th", {
                    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                    monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY เวลา H:mm",
                        LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                    },
                    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                    isPM: function(e) {
                        return "หลังเที่ยง" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                    },
                    calendar: {
                        sameDay: "[วันนี้ เวลา] LT",
                        nextDay: "[พรุ่งนี้ เวลา] LT",
                        nextWeek: "dddd[หน้า เวลา] LT",
                        lastDay: "[เมื่อวานนี้ เวลา] LT",
                        lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "อีก %s",
                        past: "%sที่แล้ว",
                        s: "ไม่กี่วินาที",
                        ss: "%d วินาที",
                        m: "1 นาที",
                        mm: "%d นาที",
                        h: "1 ชั่วโมง",
                        hh: "%d ชั่วโมง",
                        d: "1 วัน",
                        dd: "%d วัน",
                        w: "1 สัปดาห์",
                        ww: "%d สัปดาห์",
                        M: "1 เดือน",
                        MM: "%d เดือน",
                        y: "1 ปี",
                        yy: "%d ปี"
                    }
                })
            }(t(381))
        },
        9005: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "'inji",
                    5: "'inji",
                    8: "'inji",
                    70: "'inji",
                    80: "'inji",
                    2: "'nji",
                    7: "'nji",
                    20: "'nji",
                    50: "'nji",
                    3: "'ünji",
                    4: "'ünji",
                    100: "'ünji",
                    6: "'njy",
                    9: "'unjy",
                    10: "'unjy",
                    30: "'unjy",
                    60: "'ynjy",
                    90: "'ynjy"
                };
                e.defineLocale("tk", {
                    months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
                    monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
                    weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
                    weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
                    weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugün sagat] LT",
                        nextDay: "[ertir sagat] LT",
                        nextWeek: "[indiki] dddd [sagat] LT",
                        lastDay: "[düýn] LT",
                        lastWeek: "[geçen] dddd [sagat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s soň",
                        past: "%s öň",
                        s: "birnäçe sekunt",
                        m: "bir minut",
                        mm: "%d minut",
                        h: "bir sagat",
                        hh: "%d sagat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir aý",
                        MM: "%d aý",
                        y: "bir ýyl",
                        yy: "%d ýyl"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                        case "d":
                        case "D":
                        case "Do":
                        case "DD":
                            return e;
                        default:
                            if (0 === e)
                                return e + "'unjy";
                            var s = e % 10;
                            return e + (a[s] || a[e % 100 - s] || a[e >= 100 ? 100 : null])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        5768: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("tl-ph", {
                    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "MM/D/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY HH:mm",
                        LLLL: "dddd, MMMM DD, YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "LT [ngayong araw]",
                        nextDay: "[Bukas ng] LT",
                        nextWeek: "LT [sa susunod na] dddd",
                        lastDay: "LT [kahapon]",
                        lastWeek: "LT [noong nakaraang] dddd",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "sa loob ng %s",
                        past: "%s ang nakalipas",
                        s: "ilang segundo",
                        ss: "%d segundo",
                        m: "isang minuto",
                        mm: "%d minuto",
                        h: "isang oras",
                        hh: "%d oras",
                        d: "isang araw",
                        dd: "%d araw",
                        M: "isang buwan",
                        MM: "%d buwan",
                        y: "isang taon",
                        yy: "%d taon"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        9444: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
                function t(e, t, s, n) {
                    var r = function(e) {
                        var t = Math.floor(e % 1e3 / 100)
                          , s = Math.floor(e % 100 / 10)
                          , n = e % 10
                          , r = "";
                        return t > 0 && (r += a[t] + "vatlh"),
                        s > 0 && (r += ("" !== r ? " " : "") + a[s] + "maH"),
                        n > 0 && (r += ("" !== r ? " " : "") + a[n]),
                        "" === r ? "pagh" : r
                    }(e);
                    switch (s) {
                    case "ss":
                        return r + " lup";
                    case "mm":
                        return r + " tup";
                    case "hh":
                        return r + " rep";
                    case "dd":
                        return r + " jaj";
                    case "MM":
                        return r + " jar";
                    case "yy":
                        return r + " DIS"
                    }
                }
                e.defineLocale("tlh", {
                    months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                    monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                    monthsParseExact: !0,
                    weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[DaHjaj] LT",
                        nextDay: "[wa’leS] LT",
                        nextWeek: "LLL",
                        lastDay: "[wa’Hu’] LT",
                        lastWeek: "LLL",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            var a = e;
                            return -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq"
                        },
                        past: function(e) {
                            var a = e;
                            return -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret"
                        },
                        s: "puS lup",
                        ss: t,
                        m: "wa’ tup",
                        mm: t,
                        h: "wa’ rep",
                        hh: t,
                        d: "wa’ jaj",
                        dd: t,
                        M: "wa’ jar",
                        MM: t,
                        y: "wa’ DIS",
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        2397: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'üncü",
                    4: "'üncü",
                    100: "'üncü",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                };
                e.defineLocale("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    meridiem: function(e, a, t) {
                        return e < 12 ? t ? "öö" : "ÖÖ" : t ? "ös" : "ÖS"
                    },
                    meridiemParse: /öö|ÖÖ|ös|ÖS/,
                    isPM: function(e) {
                        return "ös" === e || "ÖS" === e
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[yarın saat] LT",
                        nextWeek: "[gelecek] dddd [saat] LT",
                        lastDay: "[dün] LT",
                        lastWeek: "[geçen] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s önce",
                        s: "birkaç saniye",
                        ss: "%d saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        w: "bir hafta",
                        ww: "%d hafta",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                        case "d":
                        case "D":
                        case "Do":
                        case "DD":
                            return e;
                        default:
                            if (0 === e)
                                return e + "'ıncı";
                            var s = e % 10;
                            return e + (a[s] || a[e % 100 - s] || a[e >= 100 ? 100 : null])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        8254: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t, s) {
                    var n = {
                        s: ["viensas secunds", "'iensas secunds"],
                        ss: [e + " secunds", e + " secunds"],
                        m: ["'n míut", "'iens míut"],
                        mm: [e + " míuts", e + " míuts"],
                        h: ["'n þora", "'iensa þora"],
                        hh: [e + " þoras", e + " þoras"],
                        d: ["'n ziua", "'iensa ziua"],
                        dd: [e + " ziuas", e + " ziuas"],
                        M: ["'n mes", "'iens mes"],
                        MM: [e + " mesen", e + " mesen"],
                        y: ["'n ar", "'iens ar"],
                        yy: [e + " ars", e + " ars"]
                    };
                    return s || a ? n[t][0] : n[t][1]
                }
                e.defineLocale("tzl", {
                    months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                    monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                    weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                    weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                    weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM [dallas] YYYY",
                        LLL: "D. MMMM [dallas] YYYY HH.mm",
                        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                    },
                    meridiemParse: /d\'o|d\'a/i,
                    isPM: function(e) {
                        return "d'o" === e.toLowerCase()
                    },
                    meridiem: function(e, a, t) {
                        return e > 11 ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A"
                    },
                    calendar: {
                        sameDay: "[oxhi à] LT",
                        nextDay: "[demà à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[ieiri à] LT",
                        lastWeek: "[sür el] dddd [lasteu à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "osprei %s",
                        past: "ja%s",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        699: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("tzm-latn", {
                    months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[asdkh g] LT",
                        nextDay: "[aska g] LT",
                        nextWeek: "dddd [g] LT",
                        lastDay: "[assant g] LT",
                        lastWeek: "dddd [g] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dadkh s yan %s",
                        past: "yan %s",
                        s: "imik",
                        ss: "%d imik",
                        m: "minuḍ",
                        mm: "%d minuḍ",
                        h: "saɛa",
                        hh: "%d tassaɛin",
                        d: "ass",
                        dd: "%d ossan",
                        M: "ayowr",
                        MM: "%d iyyirn",
                        y: "asgas",
                        yy: "%d isgasn"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(t(381))
        },
        1106: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("tzm", {
                    months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                        nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                        nextWeek: "dddd [ⴴ] LT",
                        lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                        lastWeek: "dddd [ⴴ] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                        past: "ⵢⴰⵏ %s",
                        s: "ⵉⵎⵉⴽ",
                        ss: "%d ⵉⵎⵉⴽ",
                        m: "ⵎⵉⵏⵓⴺ",
                        mm: "%d ⵎⵉⵏⵓⴺ",
                        h: "ⵙⴰⵄⴰ",
                        hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                        d: "ⴰⵙⵙ",
                        dd: "%d oⵙⵙⴰⵏ",
                        M: "ⴰⵢoⵓⵔ",
                        MM: "%d ⵉⵢⵢⵉⵔⵏ",
                        y: "ⴰⵙⴳⴰⵙ",
                        yy: "%d ⵉⵙⴳⴰⵙⵏ"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(t(381))
        },
        9288: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("ug-cn", {
                    months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                    weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                        LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                        LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                    },
                    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "يېرىم كېچە" === a || "سەھەر" === a || "چۈشتىن بۇرۇن" === a ? e : "چۈشتىن كېيىن" === a || "كەچ" === a ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, a, t) {
                        var s = 100 * e + a;
                        return s < 600 ? "يېرىم كېچە" : s < 900 ? "سەھەر" : s < 1130 ? "چۈشتىن بۇرۇن" : s < 1230 ? "چۈش" : s < 1800 ? "چۈشتىن كېيىن" : "كەچ"
                    },
                    calendar: {
                        sameDay: "[بۈگۈن سائەت] LT",
                        nextDay: "[ئەتە سائەت] LT",
                        nextWeek: "[كېلەركى] dddd [سائەت] LT",
                        lastDay: "[تۆنۈگۈن] LT",
                        lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s كېيىن",
                        past: "%s بۇرۇن",
                        s: "نەچچە سېكونت",
                        ss: "%d سېكونت",
                        m: "بىر مىنۇت",
                        mm: "%d مىنۇت",
                        h: "بىر سائەت",
                        hh: "%d سائەت",
                        d: "بىر كۈن",
                        dd: "%d كۈن",
                        M: "بىر ئاي",
                        MM: "%d ئاي",
                        y: "بىر يىل",
                        yy: "%d يىل"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "-كۈنى";
                        case "w":
                        case "W":
                            return e + "-ھەپتە";
                        default:
                            return e
                        }
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        7691: function(e, a, t) {
            !function(e) {
                "use strict";
                function a(e, a, t) {
                    return "m" === t ? a ? "хвилина" : "хвилину" : "h" === t ? a ? "година" : "годину" : e + " " + (s = +e,
                    n = {
                        ss: a ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                        mm: a ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                        hh: a ? "година_години_годин" : "годину_години_годин",
                        dd: "день_дні_днів",
                        MM: "місяць_місяці_місяців",
                        yy: "рік_роки_років"
                    }[t].split("_"),
                    s % 10 == 1 && s % 100 != 11 ? n[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? n[1] : n[2]);
                    var s, n
                }
                function t(e) {
                    return function() {
                        return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                    }
                }
                e.defineLocale("uk", {
                    months: {
                        format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                        standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                    },
                    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                    weekdays: function(e, a) {
                        var t = {
                            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                        };
                        return !0 === e ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1)) : e ? t[/(\[[ВвУу]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative
                    },
                    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY р.",
                        LLL: "D MMMM YYYY р., HH:mm",
                        LLLL: "dddd, D MMMM YYYY р., HH:mm"
                    },
                    calendar: {
                        sameDay: t("[Сьогодні "),
                        nextDay: t("[Завтра "),
                        lastDay: t("[Вчора "),
                        nextWeek: t("[У] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return t("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return t("[Минулого] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "%s тому",
                        s: "декілька секунд",
                        ss: a,
                        m: a,
                        mm: a,
                        h: "годину",
                        hh: a,
                        d: "день",
                        dd: a,
                        M: "місяць",
                        MM: a,
                        y: "рік",
                        yy: a
                    },
                    meridiemParse: /ночі|ранку|дня|вечора/,
                    isPM: function(e) {
                        return /^(дня|вечора)$/.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        3795: function(e, a, t) {
            !function(e) {
                "use strict";
                var a = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
                  , t = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
                e.defineLocale("ur", {
                    months: a,
                    monthsShort: a,
                    weekdays: t,
                    weekdaysShort: t,
                    weekdaysMin: t,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd، D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /صبح|شام/,
                    isPM: function(e) {
                        return "شام" === e
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? "صبح" : "شام"
                    },
                    calendar: {
                        sameDay: "[آج بوقت] LT",
                        nextDay: "[کل بوقت] LT",
                        nextWeek: "dddd [بوقت] LT",
                        lastDay: "[گذشتہ روز بوقت] LT",
                        lastWeek: "[گذشتہ] dddd [بوقت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s بعد",
                        past: "%s قبل",
                        s: "چند سیکنڈ",
                        ss: "%d سیکنڈ",
                        m: "ایک منٹ",
                        mm: "%d منٹ",
                        h: "ایک گھنٹہ",
                        hh: "%d گھنٹے",
                        d: "ایک دن",
                        dd: "%d دن",
                        M: "ایک ماہ",
                        MM: "%d ماہ",
                        y: "ایک سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        588: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("uz-latn", {
                    months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                    monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                    weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                    weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                    weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "D MMMM YYYY, dddd HH:mm"
                    },
                    calendar: {
                        sameDay: "[Bugun soat] LT [da]",
                        nextDay: "[Ertaga] LT [da]",
                        nextWeek: "dddd [kuni soat] LT [da]",
                        lastDay: "[Kecha soat] LT [da]",
                        lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Yaqin %s ichida",
                        past: "Bir necha %s oldin",
                        s: "soniya",
                        ss: "%d soniya",
                        m: "bir daqiqa",
                        mm: "%d daqiqa",
                        h: "bir soat",
                        hh: "%d soat",
                        d: "bir kun",
                        dd: "%d kun",
                        M: "bir oy",
                        MM: "%d oy",
                        y: "bir yil",
                        yy: "%d yil"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        6791: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("uz", {
                    months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                    weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                    weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "D MMMM YYYY, dddd HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бугун соат] LT [да]",
                        nextDay: "[Эртага] LT [да]",
                        nextWeek: "dddd [куни соат] LT [да]",
                        lastDay: "[Кеча соат] LT [да]",
                        lastWeek: "[Утган] dddd [куни соат] LT [да]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Якин %s ичида",
                        past: "Бир неча %s олдин",
                        s: "фурсат",
                        ss: "%d фурсат",
                        m: "бир дакика",
                        mm: "%d дакика",
                        h: "бир соат",
                        hh: "%d соат",
                        d: "бир кун",
                        dd: "%d кун",
                        M: "бир ой",
                        MM: "%d ой",
                        y: "бир йил",
                        yy: "%d йил"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(381))
        },
        5666: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("vi", {
                    months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                    monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
                    monthsParseExact: !0,
                    weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysParseExact: !0,
                    meridiemParse: /sa|ch/i,
                    isPM: function(e) {
                        return /^ch$/i.test(e)
                    },
                    meridiem: function(e, a, t) {
                        return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [năm] YYYY",
                        LLL: "D MMMM [năm] YYYY HH:mm",
                        LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hôm nay lúc] LT",
                        nextDay: "[Ngày mai lúc] LT",
                        nextWeek: "dddd [tuần tới lúc] LT",
                        lastDay: "[Hôm qua lúc] LT",
                        lastWeek: "dddd [tuần trước lúc] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s tới",
                        past: "%s trước",
                        s: "vài giây",
                        ss: "%d giây",
                        m: "một phút",
                        mm: "%d phút",
                        h: "một giờ",
                        hh: "%d giờ",
                        d: "một ngày",
                        dd: "%d ngày",
                        w: "một tuần",
                        ww: "%d tuần",
                        M: "một tháng",
                        MM: "%d tháng",
                        y: "một năm",
                        yy: "%d năm"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        4378: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("x-pseudo", {
                    months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                    monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                    monthsParseExact: !0,
                    weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                    weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                    weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[T~ódá~ý át] LT",
                        nextDay: "[T~ómó~rró~w át] LT",
                        nextWeek: "dddd [át] LT",
                        lastDay: "[Ý~ést~érdá~ý át] LT",
                        lastWeek: "[L~ást] dddd [át] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "í~ñ %s",
                        past: "%s á~gó",
                        s: "á ~féw ~sécó~ñds",
                        ss: "%d s~écóñ~ds",
                        m: "á ~míñ~úté",
                        mm: "%d m~íñú~tés",
                        h: "á~ñ hó~úr",
                        hh: "%d h~óúrs",
                        d: "á ~dáý",
                        dd: "%d d~áýs",
                        M: "á ~móñ~th",
                        MM: "%d m~óñt~hs",
                        y: "á ~ýéár",
                        yy: "%d ý~éárs"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5805: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("yo", {
                    months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                    monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                    weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                    weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                    weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Ònì ni] LT",
                        nextDay: "[Ọ̀la ni] LT",
                        nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                        lastDay: "[Àna ni] LT",
                        lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ní %s",
                        past: "%s kọjá",
                        s: "ìsẹjú aayá die",
                        ss: "aayá %d",
                        m: "ìsẹjú kan",
                        mm: "ìsẹjú %d",
                        h: "wákati kan",
                        hh: "wákati %d",
                        d: "ọjọ́ kan",
                        dd: "ọjọ́ %d",
                        M: "osù kan",
                        MM: "osù %d",
                        y: "ọdún kan",
                        yy: "ọdún %d"
                    },
                    dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                    ordinal: "ọjọ́ %d",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        3839: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("zh-cn", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日Ah点mm分",
                        LLLL: "YYYY年M月D日ddddAh点mm分",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "凌晨" === a || "早上" === a || "上午" === a ? e : "下午" === a || "晚上" === a ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, a, t) {
                        var s = 100 * e + a;
                        return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1130 ? "上午" : s < 1230 ? "中午" : s < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天]LT",
                        nextDay: "[明天]LT",
                        nextWeek: function(e) {
                            return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                        },
                        lastDay: "[昨天]LT",
                        lastWeek: function(e) {
                            return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
                        },
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                        }
                    },
                    relativeTime: {
                        future: "%s后",
                        past: "%s前",
                        s: "几秒",
                        ss: "%d 秒",
                        m: "1 分钟",
                        mm: "%d 分钟",
                        h: "1 小时",
                        hh: "%d 小时",
                        d: "1 天",
                        dd: "%d 天",
                        w: "1 周",
                        ww: "%d 周",
                        M: "1 个月",
                        MM: "%d 个月",
                        y: "1 年",
                        yy: "%d 年"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(381))
        },
        5726: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("zh-hk", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "凌晨" === a || "早上" === a || "上午" === a ? e : "中午" === a ? e >= 11 ? e : e + 12 : "下午" === a || "晚上" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        var s = 100 * e + a;
                        return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1200 ? "上午" : 1200 === s ? "中午" : s < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天]LT",
                        nextDay: "[明天]LT",
                        nextWeek: "[下]ddddLT",
                        lastDay: "[昨天]LT",
                        lastWeek: "[上]ddddLT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                        }
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "幾秒",
                        ss: "%d 秒",
                        m: "1 分鐘",
                        mm: "%d 分鐘",
                        h: "1 小時",
                        hh: "%d 小時",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 個月",
                        MM: "%d 個月",
                        y: "1 年",
                        yy: "%d 年"
                    }
                })
            }(t(381))
        },
        9807: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("zh-mo", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日dddd HH:mm",
                        l: "D/M/YYYY",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "凌晨" === a || "早上" === a || "上午" === a ? e : "中午" === a ? e >= 11 ? e : e + 12 : "下午" === a || "晚上" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        var s = 100 * e + a;
                        return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1130 ? "上午" : s < 1230 ? "中午" : s < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天] LT",
                        nextDay: "[明天] LT",
                        nextWeek: "[下]dddd LT",
                        lastDay: "[昨天] LT",
                        lastWeek: "[上]dddd LT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                        }
                    },
                    relativeTime: {
                        future: "%s內",
                        past: "%s前",
                        s: "幾秒",
                        ss: "%d 秒",
                        m: "1 分鐘",
                        mm: "%d 分鐘",
                        h: "1 小時",
                        hh: "%d 小時",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 個月",
                        MM: "%d 個月",
                        y: "1 年",
                        yy: "%d 年"
                    }
                })
            }(t(381))
        },
        4152: function(e, a, t) {
            !function(e) {
                "use strict";
                e.defineLocale("zh-tw", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, a) {
                        return 12 === e && (e = 0),
                        "凌晨" === a || "早上" === a || "上午" === a ? e : "中午" === a ? e >= 11 ? e : e + 12 : "下午" === a || "晚上" === a ? e + 12 : void 0
                    },
                    meridiem: function(e, a, t) {
                        var s = 100 * e + a;
                        return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1130 ? "上午" : s < 1230 ? "中午" : s < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天] LT",
                        nextDay: "[明天] LT",
                        nextWeek: "[下]dddd LT",
                        lastDay: "[昨天] LT",
                        lastWeek: "[上]dddd LT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, a) {
                        switch (a) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                        }
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "幾秒",
                        ss: "%d 秒",
                        m: "1 分鐘",
                        mm: "%d 分鐘",
                        h: "1 小時",
                        hh: "%d 小時",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 個月",
                        MM: "%d 個月",
                        y: "1 年",
                        yy: "%d 年"
                    }
                })
            }(t(381))
        },
        6700: function(e, a, t) {
            var s = {
                "./af": 2786,
                "./af.js": 2786,
                "./ar": 867,
                "./ar-dz": 4130,
                "./ar-dz.js": 4130,
                "./ar-kw": 6135,
                "./ar-kw.js": 6135,
                "./ar-ly": 6440,
                "./ar-ly.js": 6440,
                "./ar-ma": 7702,
                "./ar-ma.js": 7702,
                "./ar-sa": 6040,
                "./ar-sa.js": 6040,
                "./ar-tn": 7100,
                "./ar-tn.js": 7100,
                "./ar.js": 867,
                "./az": 1083,
                "./az.js": 1083,
                "./be": 9808,
                "./be.js": 9808,
                "./bg": 8338,
                "./bg.js": 8338,
                "./bm": 7438,
                "./bm.js": 7438,
                "./bn": 8905,
                "./bn-bd": 6225,
                "./bn-bd.js": 6225,
                "./bn.js": 8905,
                "./bo": 1560,
                "./bo.js": 1560,
                "./br": 1278,
                "./br.js": 1278,
                "./bs": 622,
                "./bs.js": 622,
                "./ca": 2468,
                "./ca.js": 2468,
                "./cs": 5822,
                "./cs.js": 5822,
                "./cv": 877,
                "./cv.js": 877,
                "./cy": 7373,
                "./cy.js": 7373,
                "./da": 4780,
                "./da.js": 4780,
                "./de": 9740,
                "./de-at": 217,
                "./de-at.js": 217,
                "./de-ch": 894,
                "./de-ch.js": 894,
                "./de.js": 9740,
                "./dv": 5300,
                "./dv.js": 5300,
                "./el": 837,
                "./el.js": 837,
                "./en-au": 8348,
                "./en-au.js": 8348,
                "./en-ca": 7925,
                "./en-ca.js": 7925,
                "./en-gb": 2243,
                "./en-gb.js": 2243,
                "./en-ie": 6436,
                "./en-ie.js": 6436,
                "./en-il": 7207,
                "./en-il.js": 7207,
                "./en-in": 4175,
                "./en-in.js": 4175,
                "./en-nz": 6319,
                "./en-nz.js": 6319,
                "./en-sg": 1662,
                "./en-sg.js": 1662,
                "./eo": 2915,
                "./eo.js": 2915,
                "./es": 5655,
                "./es-do": 5251,
                "./es-do.js": 5251,
                "./es-mx": 6112,
                "./es-mx.js": 6112,
                "./es-us": 1146,
                "./es-us.js": 1146,
                "./es.js": 5655,
                "./et": 5603,
                "./et.js": 5603,
                "./eu": 7763,
                "./eu.js": 7763,
                "./fa": 6959,
                "./fa.js": 6959,
                "./fi": 1897,
                "./fi.js": 1897,
                "./fil": 2549,
                "./fil.js": 2549,
                "./fo": 4694,
                "./fo.js": 4694,
                "./fr": 4470,
                "./fr-ca": 3049,
                "./fr-ca.js": 3049,
                "./fr-ch": 2330,
                "./fr-ch.js": 2330,
                "./fr.js": 4470,
                "./fy": 5044,
                "./fy.js": 5044,
                "./ga": 9295,
                "./ga.js": 9295,
                "./gd": 2101,
                "./gd.js": 2101,
                "./gl": 8886,
                "./gl.js": 8886,
                "./gom-deva": 7884,
                "./gom-deva.js": 7884,
                "./gom-latn": 3168,
                "./gom-latn.js": 3168,
                "./gu": 5349,
                "./gu.js": 5349,
                "./he": 4206,
                "./he.js": 4206,
                "./hi": 94,
                "./hi.js": 94,
                "./hr": 316,
                "./hr.js": 316,
                "./hu": 2138,
                "./hu.js": 2138,
                "./hy-am": 1423,
                "./hy-am.js": 1423,
                "./id": 9218,
                "./id.js": 9218,
                "./is": 135,
                "./is.js": 135,
                "./it": 626,
                "./it-ch": 150,
                "./it-ch.js": 150,
                "./it.js": 626,
                "./ja": 9183,
                "./ja.js": 9183,
                "./jv": 4286,
                "./jv.js": 4286,
                "./ka": 2105,
                "./ka.js": 2105,
                "./kk": 7772,
                "./kk.js": 7772,
                "./km": 8758,
                "./km.js": 8758,
                "./kn": 9282,
                "./kn.js": 9282,
                "./ko": 3730,
                "./ko.js": 3730,
                "./ku": 1408,
                "./ku.js": 1408,
                "./ky": 3291,
                "./ky.js": 3291,
                "./lb": 6841,
                "./lb.js": 6841,
                "./lo": 5466,
                "./lo.js": 5466,
                "./lt": 7010,
                "./lt.js": 7010,
                "./lv": 7595,
                "./lv.js": 7595,
                "./me": 9861,
                "./me.js": 9861,
                "./mi": 5493,
                "./mi.js": 5493,
                "./mk": 5966,
                "./mk.js": 5966,
                "./ml": 7341,
                "./ml.js": 7341,
                "./mn": 5115,
                "./mn.js": 5115,
                "./mr": 370,
                "./mr.js": 370,
                "./ms": 9847,
                "./ms-my": 1237,
                "./ms-my.js": 1237,
                "./ms.js": 9847,
                "./mt": 2126,
                "./mt.js": 2126,
                "./my": 6165,
                "./my.js": 6165,
                "./nb": 4924,
                "./nb.js": 4924,
                "./ne": 6744,
                "./ne.js": 6744,
                "./nl": 3901,
                "./nl-be": 6666,
                "./nl-be.js": 6666,
                "./nl.js": 3901,
                "./nn": 3877,
                "./nn.js": 3877,
                "./oc-lnc": 2135,
                "./oc-lnc.js": 2135,
                "./pa-in": 5858,
                "./pa-in.js": 5858,
                "./pl": 4495,
                "./pl.js": 4495,
                "./pt": 9520,
                "./pt-br": 7971,
                "./pt-br.js": 7971,
                "./pt.js": 9520,
                "./ro": 6459,
                "./ro.js": 6459,
                "./ru": 1793,
                "./ru.js": 1793,
                "./sd": 950,
                "./sd.js": 950,
                "./se": 490,
                "./se.js": 490,
                "./si": 124,
                "./si.js": 124,
                "./sk": 4249,
                "./sk.js": 4249,
                "./sl": 4985,
                "./sl.js": 4985,
                "./sq": 1104,
                "./sq.js": 1104,
                "./sr": 9131,
                "./sr-cyrl": 9915,
                "./sr-cyrl.js": 9915,
                "./sr.js": 9131,
                "./ss": 5893,
                "./ss.js": 5893,
                "./sv": 8760,
                "./sv.js": 8760,
                "./sw": 1172,
                "./sw.js": 1172,
                "./ta": 7333,
                "./ta.js": 7333,
                "./te": 3110,
                "./te.js": 3110,
                "./tet": 2095,
                "./tet.js": 2095,
                "./tg": 7321,
                "./tg.js": 7321,
                "./th": 9041,
                "./th.js": 9041,
                "./tk": 9005,
                "./tk.js": 9005,
                "./tl-ph": 5768,
                "./tl-ph.js": 5768,
                "./tlh": 9444,
                "./tlh.js": 9444,
                "./tr": 2397,
                "./tr.js": 2397,
                "./tzl": 8254,
                "./tzl.js": 8254,
                "./tzm": 1106,
                "./tzm-latn": 699,
                "./tzm-latn.js": 699,
                "./tzm.js": 1106,
                "./ug-cn": 9288,
                "./ug-cn.js": 9288,
                "./uk": 7691,
                "./uk.js": 7691,
                "./ur": 3795,
                "./ur.js": 3795,
                "./uz": 6791,
                "./uz-latn": 588,
                "./uz-latn.js": 588,
                "./uz.js": 6791,
                "./vi": 5666,
                "./vi.js": 5666,
                "./x-pseudo": 4378,
                "./x-pseudo.js": 4378,
                "./yo": 5805,
                "./yo.js": 5805,
                "./zh-cn": 3839,
                "./zh-cn.js": 3839,
                "./zh-hk": 5726,
                "./zh-hk.js": 5726,
                "./zh-mo": 9807,
                "./zh-mo.js": 9807,
                "./zh-tw": 4152,
                "./zh-tw.js": 4152
            };
            function n(e) {
                var a = r(e);
                return t(a)
            }
            function r(e) {
                if (!t.o(s, e)) {
                    var a = new Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND",
                    a
                }
                return s[e]
            }
            n.keys = function() {
                return Object.keys(s)
            }
            ,
            n.resolve = r,
            e.exports = n,
            n.id = 6700
        },
        381: function(e, a, t) {
            (e = t.nmd(e)).exports = function() {
                "use strict";
                var a, s;
                function n() {
                    return a.apply(null, arguments)
                }
                function r(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }
                function i(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }
                function d(e, a) {
                    return Object.prototype.hasOwnProperty.call(e, a)
                }
                function _(e) {
                    if (Object.getOwnPropertyNames)
                        return 0 === Object.getOwnPropertyNames(e).length;
                    var a;
                    for (a in e)
                        if (d(e, a))
                            return !1;
                    return !0
                }
                function o(e) {
                    return void 0 === e
                }
                function u(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }
                function m(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }
                function l(e, a) {
                    var t, s = [], n = e.length;
                    for (t = 0; t < n; ++t)
                        s.push(a(e[t], t));
                    return s
                }
                function M(e, a) {
                    for (var t in a)
                        d(a, t) && (e[t] = a[t]);
                    return d(a, "toString") && (e.toString = a.toString),
                    d(a, "valueOf") && (e.valueOf = a.valueOf),
                    e
                }
                function h(e, a, t, s) {
                    return wa(e, a, t, s, !0).utc()
                }
                function c(e) {
                    return null == e._pf && (e._pf = {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidEra: null,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        era: null,
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }),
                    e._pf
                }
                function L(e) {
                    if (null == e._isValid) {
                        var a = c(e)
                          , t = s.call(a.parsedDateParts, (function(e) {
                            return null != e
                        }
                        ))
                          , n = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidEra && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
                        if (e._strict && (n = n && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour),
                        null != Object.isFrozen && Object.isFrozen(e))
                            return n;
                        e._isValid = n
                    }
                    return e._isValid
                }
                function Y(e) {
                    var a = h(NaN);
                    return null != e ? M(c(a), e) : c(a).userInvalidated = !0,
                    a
                }
                s = Array.prototype.some ? Array.prototype.some : function(e) {
                    var a, t = Object(this), s = t.length >>> 0;
                    for (a = 0; a < s; a++)
                        if (a in t && e.call(this, t[a], a, t))
                            return !0;
                    return !1
                }
                ;
                var y = n.momentProperties = []
                  , f = !1;
                function p(e, a) {
                    var t, s, n, r = y.length;
                    if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject),
                    o(a._i) || (e._i = a._i),
                    o(a._f) || (e._f = a._f),
                    o(a._l) || (e._l = a._l),
                    o(a._strict) || (e._strict = a._strict),
                    o(a._tzm) || (e._tzm = a._tzm),
                    o(a._isUTC) || (e._isUTC = a._isUTC),
                    o(a._offset) || (e._offset = a._offset),
                    o(a._pf) || (e._pf = c(a)),
                    o(a._locale) || (e._locale = a._locale),
                    r > 0)
                        for (t = 0; t < r; t++)
                            o(n = a[s = y[t]]) || (e[s] = n);
                    return e
                }
                function k(e) {
                    p(this, e),
                    this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                    this.isValid() || (this._d = new Date(NaN)),
                    !1 === f && (f = !0,
                    n.updateOffset(this),
                    f = !1)
                }
                function D(e) {
                    return e instanceof k || null != e && null != e._isAMomentObject
                }
                function g(e) {
                    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }
                function T(e, a) {
                    var t = !0;
                    return M((function() {
                        if (null != n.deprecationHandler && n.deprecationHandler(null, e),
                        t) {
                            var s, r, i, _ = [], o = arguments.length;
                            for (r = 0; r < o; r++) {
                                if (s = "",
                                "object" == typeof arguments[r]) {
                                    for (i in s += "\n[" + r + "] ",
                                    arguments[0])
                                        d(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
                                    s = s.slice(0, -2)
                                } else
                                    s = arguments[r];
                                _.push(s)
                            }
                            g(e + "\nArguments: " + Array.prototype.slice.call(_).join("") + "\n" + (new Error).stack),
                            t = !1
                        }
                        return a.apply(this, arguments)
                    }
                    ), a)
                }
                var w, v = {};
                function b(e, a) {
                    null != n.deprecationHandler && n.deprecationHandler(e, a),
                    v[e] || (g(a),
                    v[e] = !0)
                }
                function S(e) {
                    return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }
                function H(e, a) {
                    var t, s = M({}, e);
                    for (t in a)
                        d(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {},
                        M(s[t], e[t]),
                        M(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]);
                    for (t in e)
                        d(e, t) && !d(a, t) && i(e[t]) && (s[t] = M({}, s[t]));
                    return s
                }
                function j(e) {
                    null != e && this.set(e)
                }
                n.suppressDeprecationWarnings = !1,
                n.deprecationHandler = null,
                w = Object.keys ? Object.keys : function(e) {
                    var a, t = [];
                    for (a in e)
                        d(e, a) && t.push(a);
                    return t
                }
                ;
                function x(e, a, t) {
                    var s = "" + Math.abs(e)
                      , n = a - s.length;
                    return (e >= 0 ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s
                }
                var P = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
                  , O = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
                  , W = {}
                  , A = {};
                function E(e, a, t, s) {
                    var n = s;
                    "string" == typeof s && (n = function() {
                        return this[s]()
                    }
                    ),
                    e && (A[e] = n),
                    a && (A[a[0]] = function() {
                        return x(n.apply(this, arguments), a[1], a[2])
                    }
                    ),
                    t && (A[t] = function() {
                        return this.localeData().ordinal(n.apply(this, arguments), e)
                    }
                    )
                }
                function F(e, a) {
                    return e.isValid() ? (a = z(a, e.localeData()),
                    W[a] = W[a] || function(e) {
                        var a, t, s, n = e.match(P);
                        for (a = 0,
                        t = n.length; a < t; a++)
                            A[n[a]] ? n[a] = A[n[a]] : n[a] = (s = n[a]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
                        return function(a) {
                            var s, r = "";
                            for (s = 0; s < t; s++)
                                r += S(n[s]) ? n[s].call(a, e) : n[s];
                            return r
                        }
                    }(a),
                    W[a](e)) : e.localeData().invalidDate()
                }
                function z(e, a) {
                    var t = 5;
                    function s(e) {
                        return a.longDateFormat(e) || e
                    }
                    for (O.lastIndex = 0; t >= 0 && O.test(e); )
                        e = e.replace(O, s),
                        O.lastIndex = 0,
                        t -= 1;
                    return e
                }
                var N = {};
                function J(e, a) {
                    var t = e.toLowerCase();
                    N[t] = N[t + "s"] = N[a] = e
                }
                function R(e) {
                    return "string" == typeof e ? N[e] || N[e.toLowerCase()] : void 0
                }
                function C(e) {
                    var a, t, s = {};
                    for (t in e)
                        d(e, t) && (a = R(t)) && (s[a] = e[t]);
                    return s
                }
                var I = {};
                function U(e, a) {
                    I[e] = a
                }
                function G(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }
                function V(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }
                function B(e) {
                    var a = +e
                      , t = 0;
                    return 0 !== a && isFinite(a) && (t = V(a)),
                    t
                }
                function K(e, a) {
                    return function(t) {
                        return null != t ? (Z(this, e, t),
                        n.updateOffset(this, a),
                        this) : q(this, e)
                    }
                }
                function q(e, a) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN
                }
                function Z(e, a, t) {
                    e.isValid() && !isNaN(t) && ("FullYear" === a && G(e.year()) && 1 === e.month() && 29 === e.date() ? (t = B(t),
                    e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), De(t, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t))
                }
                var $, Q = /\d/, X = /\d\d/, ee = /\d{3}/, ae = /\d{4}/, te = /[+-]?\d{6}/, se = /\d\d?/, ne = /\d\d\d\d?/, re = /\d\d\d\d\d\d?/, ie = /\d{1,3}/, de = /\d{1,4}/, _e = /[+-]?\d{1,6}/, oe = /\d+/, ue = /[+-]?\d+/, me = /Z|[+-]\d\d:?\d\d/gi, le = /Z|[+-]\d\d(?::?\d\d)?/gi, Me = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
                function he(e, a, t) {
                    $[e] = S(a) ? a : function(e, s) {
                        return e && t ? t : a
                    }
                }
                function ce(e, a) {
                    return d($, e) ? $[e](a._strict, a._locale) : new RegExp(Le(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, a, t, s, n) {
                        return a || t || s || n
                    }
                    ))))
                }
                function Le(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                $ = {};
                var Ye = {};
                function ye(e, a) {
                    var t, s, n = a;
                    for ("string" == typeof e && (e = [e]),
                    u(a) && (n = function(e, t) {
                        t[a] = B(e)
                    }
                    ),
                    s = e.length,
                    t = 0; t < s; t++)
                        Ye[e[t]] = n
                }
                function fe(e, a) {
                    ye(e, (function(e, t, s, n) {
                        s._w = s._w || {},
                        a(e, s._w, s, n)
                    }
                    ))
                }
                function pe(e, a, t) {
                    null != a && d(Ye, e) && Ye[e](a, t._a, t, e)
                }
                var ke;
                function De(e, a) {
                    if (isNaN(e) || isNaN(a))
                        return NaN;
                    var t, s = (a % (t = 12) + t) % t;
                    return e += (a - s) / 12,
                    1 === s ? G(e) ? 29 : 28 : 31 - s % 7 % 2
                }
                ke = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                    var a;
                    for (a = 0; a < this.length; ++a)
                        if (this[a] === e)
                            return a;
                    return -1
                }
                ,
                E("M", ["MM", 2], "Mo", (function() {
                    return this.month() + 1
                }
                )),
                E("MMM", 0, 0, (function(e) {
                    return this.localeData().monthsShort(this, e)
                }
                )),
                E("MMMM", 0, 0, (function(e) {
                    return this.localeData().months(this, e)
                }
                )),
                J("month", "M"),
                U("month", 8),
                he("M", se),
                he("MM", se, X),
                he("MMM", (function(e, a) {
                    return a.monthsShortRegex(e)
                }
                )),
                he("MMMM", (function(e, a) {
                    return a.monthsRegex(e)
                }
                )),
                ye(["M", "MM"], (function(e, a) {
                    a[1] = B(e) - 1
                }
                )),
                ye(["MMM", "MMMM"], (function(e, a, t, s) {
                    var n = t._locale.monthsParse(e, s, t._strict);
                    null != n ? a[1] = n : c(t).invalidMonth = e
                }
                ));
                var ge = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                  , Te = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
                  , we = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
                  , ve = Me
                  , be = Me;
                function Se(e, a, t) {
                    var s, n, r, i = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [],
                        this._longMonthsParse = [],
                        this._shortMonthsParse = [],
                        s = 0; s < 12; ++s)
                            r = h([2e3, s]),
                            this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
                            this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
                    return t ? "MMM" === a ? -1 !== (n = ke.call(this._shortMonthsParse, i)) ? n : null : -1 !== (n = ke.call(this._longMonthsParse, i)) ? n : null : "MMM" === a ? -1 !== (n = ke.call(this._shortMonthsParse, i)) || -1 !== (n = ke.call(this._longMonthsParse, i)) ? n : null : -1 !== (n = ke.call(this._longMonthsParse, i)) || -1 !== (n = ke.call(this._shortMonthsParse, i)) ? n : null
                }
                function He(e, a) {
                    var t;
                    if (!e.isValid())
                        return e;
                    if ("string" == typeof a)
                        if (/^\d+$/.test(a))
                            a = B(a);
                        else if (!u(a = e.localeData().monthsParse(a)))
                            return e;
                    return t = Math.min(e.date(), De(e.year(), a)),
                    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t),
                    e
                }
                function je(e) {
                    return null != e ? (He(this, e),
                    n.updateOffset(this, !0),
                    this) : q(this, "Month")
                }
                function xe() {
                    function e(e, a) {
                        return a.length - e.length
                    }
                    var a, t, s = [], n = [], r = [];
                    for (a = 0; a < 12; a++)
                        t = h([2e3, a]),
                        s.push(this.monthsShort(t, "")),
                        n.push(this.months(t, "")),
                        r.push(this.months(t, "")),
                        r.push(this.monthsShort(t, ""));
                    for (s.sort(e),
                    n.sort(e),
                    r.sort(e),
                    a = 0; a < 12; a++)
                        s[a] = Le(s[a]),
                        n[a] = Le(n[a]);
                    for (a = 0; a < 24; a++)
                        r[a] = Le(r[a]);
                    this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
                    this._monthsShortRegex = this._monthsRegex,
                    this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")","i"),
                    this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
                }
                function Pe(e) {
                    return G(e) ? 366 : 365
                }
                E("Y", 0, 0, (function() {
                    var e = this.year();
                    return e <= 9999 ? x(e, 4) : "+" + e
                }
                )),
                E(0, ["YY", 2], 0, (function() {
                    return this.year() % 100
                }
                )),
                E(0, ["YYYY", 4], 0, "year"),
                E(0, ["YYYYY", 5], 0, "year"),
                E(0, ["YYYYYY", 6, !0], 0, "year"),
                J("year", "y"),
                U("year", 1),
                he("Y", ue),
                he("YY", se, X),
                he("YYYY", de, ae),
                he("YYYYY", _e, te),
                he("YYYYYY", _e, te),
                ye(["YYYYY", "YYYYYY"], 0),
                ye("YYYY", (function(e, a) {
                    a[0] = 2 === e.length ? n.parseTwoDigitYear(e) : B(e)
                }
                )),
                ye("YY", (function(e, a) {
                    a[0] = n.parseTwoDigitYear(e)
                }
                )),
                ye("Y", (function(e, a) {
                    a[0] = parseInt(e, 10)
                }
                )),
                n.parseTwoDigitYear = function(e) {
                    return B(e) + (B(e) > 68 ? 1900 : 2e3)
                }
                ;
                var Oe = K("FullYear", !0);
                function We(e, a, t, s, n, r, i) {
                    var d;
                    return e < 100 && e >= 0 ? (d = new Date(e + 400,a,t,s,n,r,i),
                    isFinite(d.getFullYear()) && d.setFullYear(e)) : d = new Date(e,a,t,s,n,r,i),
                    d
                }
                function Ae(e) {
                    var a, t;
                    return e < 100 && e >= 0 ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400,
                    a = new Date(Date.UTC.apply(null, t)),
                    isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e)) : a = new Date(Date.UTC.apply(null, arguments)),
                    a
                }
                function Ee(e, a, t) {
                    var s = 7 + a - t;
                    return -(7 + Ae(e, 0, s).getUTCDay() - a) % 7 + s - 1
                }
                function Fe(e, a, t, s, n) {
                    var r, i, d = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ee(e, s, n);
                    return d <= 0 ? i = Pe(r = e - 1) + d : d > Pe(e) ? (r = e + 1,
                    i = d - Pe(e)) : (r = e,
                    i = d),
                    {
                        year: r,
                        dayOfYear: i
                    }
                }
                function ze(e, a, t) {
                    var s, n, r = Ee(e.year(), a, t), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                    return i < 1 ? s = i + Ne(n = e.year() - 1, a, t) : i > Ne(e.year(), a, t) ? (s = i - Ne(e.year(), a, t),
                    n = e.year() + 1) : (n = e.year(),
                    s = i),
                    {
                        week: s,
                        year: n
                    }
                }
                function Ne(e, a, t) {
                    var s = Ee(e, a, t)
                      , n = Ee(e + 1, a, t);
                    return (Pe(e) - s + n) / 7
                }
                E("w", ["ww", 2], "wo", "week"),
                E("W", ["WW", 2], "Wo", "isoWeek"),
                J("week", "w"),
                J("isoWeek", "W"),
                U("week", 5),
                U("isoWeek", 5),
                he("w", se),
                he("ww", se, X),
                he("W", se),
                he("WW", se, X),
                fe(["w", "ww", "W", "WW"], (function(e, a, t, s) {
                    a[s.substr(0, 1)] = B(e)
                }
                ));
                function Je(e, a) {
                    return e.slice(a, 7).concat(e.slice(0, a))
                }
                E("d", 0, "do", "day"),
                E("dd", 0, 0, (function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }
                )),
                E("ddd", 0, 0, (function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }
                )),
                E("dddd", 0, 0, (function(e) {
                    return this.localeData().weekdays(this, e)
                }
                )),
                E("e", 0, 0, "weekday"),
                E("E", 0, 0, "isoWeekday"),
                J("day", "d"),
                J("weekday", "e"),
                J("isoWeekday", "E"),
                U("day", 11),
                U("weekday", 11),
                U("isoWeekday", 11),
                he("d", se),
                he("e", se),
                he("E", se),
                he("dd", (function(e, a) {
                    return a.weekdaysMinRegex(e)
                }
                )),
                he("ddd", (function(e, a) {
                    return a.weekdaysShortRegex(e)
                }
                )),
                he("dddd", (function(e, a) {
                    return a.weekdaysRegex(e)
                }
                )),
                fe(["dd", "ddd", "dddd"], (function(e, a, t, s) {
                    var n = t._locale.weekdaysParse(e, s, t._strict);
                    null != n ? a.d = n : c(t).invalidWeekday = e
                }
                )),
                fe(["d", "e", "E"], (function(e, a, t, s) {
                    a[s] = B(e)
                }
                ));
                var Re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
                  , Ce = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
                  , Ie = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
                  , Ue = Me
                  , Ge = Me
                  , Ve = Me;
                function Be(e, a, t) {
                    var s, n, r, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [],
                        this._shortWeekdaysParse = [],
                        this._minWeekdaysParse = [],
                        s = 0; s < 7; ++s)
                            r = h([2e3, 1]).day(s),
                            this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                            this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                            this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
                    return t ? "dddd" === a ? -1 !== (n = ke.call(this._weekdaysParse, i)) ? n : null : "ddd" === a ? -1 !== (n = ke.call(this._shortWeekdaysParse, i)) ? n : null : -1 !== (n = ke.call(this._minWeekdaysParse, i)) ? n : null : "dddd" === a ? -1 !== (n = ke.call(this._weekdaysParse, i)) || -1 !== (n = ke.call(this._shortWeekdaysParse, i)) || -1 !== (n = ke.call(this._minWeekdaysParse, i)) ? n : null : "ddd" === a ? -1 !== (n = ke.call(this._shortWeekdaysParse, i)) || -1 !== (n = ke.call(this._weekdaysParse, i)) || -1 !== (n = ke.call(this._minWeekdaysParse, i)) ? n : null : -1 !== (n = ke.call(this._minWeekdaysParse, i)) || -1 !== (n = ke.call(this._weekdaysParse, i)) || -1 !== (n = ke.call(this._shortWeekdaysParse, i)) ? n : null
                }
                function Ke() {
                    function e(e, a) {
                        return a.length - e.length
                    }
                    var a, t, s, n, r, i = [], d = [], _ = [], o = [];
                    for (a = 0; a < 7; a++)
                        t = h([2e3, 1]).day(a),
                        s = Le(this.weekdaysMin(t, "")),
                        n = Le(this.weekdaysShort(t, "")),
                        r = Le(this.weekdays(t, "")),
                        i.push(s),
                        d.push(n),
                        _.push(r),
                        o.push(s),
                        o.push(n),
                        o.push(r);
                    i.sort(e),
                    d.sort(e),
                    _.sort(e),
                    o.sort(e),
                    this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")","i"),
                    this._weekdaysShortRegex = this._weekdaysRegex,
                    this._weekdaysMinRegex = this._weekdaysRegex,
                    this._weekdaysStrictRegex = new RegExp("^(" + _.join("|") + ")","i"),
                    this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")","i"),
                    this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")","i")
                }
                function qe() {
                    return this.hours() % 12 || 12
                }
                function Ze(e, a) {
                    E(e, 0, 0, (function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), a)
                    }
                    ))
                }
                function $e(e, a) {
                    return a._meridiemParse
                }
                E("H", ["HH", 2], 0, "hour"),
                E("h", ["hh", 2], 0, qe),
                E("k", ["kk", 2], 0, (function() {
                    return this.hours() || 24
                }
                )),
                E("hmm", 0, 0, (function() {
                    return "" + qe.apply(this) + x(this.minutes(), 2)
                }
                )),
                E("hmmss", 0, 0, (function() {
                    return "" + qe.apply(this) + x(this.minutes(), 2) + x(this.seconds(), 2)
                }
                )),
                E("Hmm", 0, 0, (function() {
                    return "" + this.hours() + x(this.minutes(), 2)
                }
                )),
                E("Hmmss", 0, 0, (function() {
                    return "" + this.hours() + x(this.minutes(), 2) + x(this.seconds(), 2)
                }
                )),
                Ze("a", !0),
                Ze("A", !1),
                J("hour", "h"),
                U("hour", 13),
                he("a", $e),
                he("A", $e),
                he("H", se),
                he("h", se),
                he("k", se),
                he("HH", se, X),
                he("hh", se, X),
                he("kk", se, X),
                he("hmm", ne),
                he("hmmss", re),
                he("Hmm", ne),
                he("Hmmss", re),
                ye(["H", "HH"], 3),
                ye(["k", "kk"], (function(e, a, t) {
                    var s = B(e);
                    a[3] = 24 === s ? 0 : s
                }
                )),
                ye(["a", "A"], (function(e, a, t) {
                    t._isPm = t._locale.isPM(e),
                    t._meridiem = e
                }
                )),
                ye(["h", "hh"], (function(e, a, t) {
                    a[3] = B(e),
                    c(t).bigHour = !0
                }
                )),
                ye("hmm", (function(e, a, t) {
                    var s = e.length - 2;
                    a[3] = B(e.substr(0, s)),
                    a[4] = B(e.substr(s)),
                    c(t).bigHour = !0
                }
                )),
                ye("hmmss", (function(e, a, t) {
                    var s = e.length - 4
                      , n = e.length - 2;
                    a[3] = B(e.substr(0, s)),
                    a[4] = B(e.substr(s, 2)),
                    a[5] = B(e.substr(n)),
                    c(t).bigHour = !0
                }
                )),
                ye("Hmm", (function(e, a, t) {
                    var s = e.length - 2;
                    a[3] = B(e.substr(0, s)),
                    a[4] = B(e.substr(s))
                }
                )),
                ye("Hmmss", (function(e, a, t) {
                    var s = e.length - 4
                      , n = e.length - 2;
                    a[3] = B(e.substr(0, s)),
                    a[4] = B(e.substr(s, 2)),
                    a[5] = B(e.substr(n))
                }
                ));
                var Qe = K("Hours", !0);
                var Xe, ea = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        w: "a week",
                        ww: "%d weeks",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: ge,
                    monthsShort: Te,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Re,
                    weekdaysMin: Ie,
                    weekdaysShort: Ce,
                    meridiemParse: /[ap]\.?m?\.?/i
                }, aa = {}, ta = {};
                function sa(e, a) {
                    var t, s = Math.min(e.length, a.length);
                    for (t = 0; t < s; t += 1)
                        if (e[t] !== a[t])
                            return t;
                    return s
                }
                function na(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }
                function ra(a) {
                    var s = null;
                    if (void 0 === aa[a] && e && e.exports && function(e) {
                        return null != e.match("^[^/\\\\]*$")
                    }(a))
                        try {
                            s = Xe._abbr,
                            t(6700)("./" + a),
                            ia(s)
                        } catch (e) {
                            aa[a] = null
                        }
                    return aa[a]
                }
                function ia(e, a) {
                    var t;
                    return e && ((t = o(a) ? _a(e) : da(e, a)) ? Xe = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
                    Xe._abbr
                }
                function da(e, a) {
                    if (null !== a) {
                        var t, s = ea;
                        if (a.abbr = e,
                        null != aa[e])
                            b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                            s = aa[e]._config;
                        else if (null != a.parentLocale)
                            if (null != aa[a.parentLocale])
                                s = aa[a.parentLocale]._config;
                            else {
                                if (null == (t = ra(a.parentLocale)))
                                    return ta[a.parentLocale] || (ta[a.parentLocale] = []),
                                    ta[a.parentLocale].push({
                                        name: e,
                                        config: a
                                    }),
                                    null;
                                s = t._config
                            }
                        return aa[e] = new j(H(s, a)),
                        ta[e] && ta[e].forEach((function(e) {
                            da(e.name, e.config)
                        }
                        )),
                        ia(e),
                        aa[e]
                    }
                    return delete aa[e],
                    null
                }
                function _a(e) {
                    var a;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                    !e)
                        return Xe;
                    if (!r(e)) {
                        if (a = ra(e))
                            return a;
                        e = [e]
                    }
                    return function(e) {
                        for (var a, t, s, n, r = 0; r < e.length; ) {
                            for (a = (n = na(e[r]).split("-")).length,
                            t = (t = na(e[r + 1])) ? t.split("-") : null; a > 0; ) {
                                if (s = ra(n.slice(0, a).join("-")))
                                    return s;
                                if (t && t.length >= a && sa(n, t) >= a - 1)
                                    break;
                                a--
                            }
                            r++
                        }
                        return Xe
                    }(e)
                }
                function oa(e) {
                    var a, t = e._a;
                    return t && -2 === c(e).overflow && (a = t[1] < 0 || t[1] > 11 ? 1 : t[2] < 1 || t[2] > De(t[0], t[1]) ? 2 : t[3] < 0 || t[3] > 24 || 24 === t[3] && (0 !== t[4] || 0 !== t[5] || 0 !== t[6]) ? 3 : t[4] < 0 || t[4] > 59 ? 4 : t[5] < 0 || t[5] > 59 ? 5 : t[6] < 0 || t[6] > 999 ? 6 : -1,
                    c(e)._overflowDayOfYear && (a < 0 || a > 2) && (a = 2),
                    c(e)._overflowWeeks && -1 === a && (a = 7),
                    c(e)._overflowWeekday && -1 === a && (a = 8),
                    c(e).overflow = a),
                    e
                }
                var ua = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
                  , ma = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
                  , la = /Z|[+-]\d\d(?::?\d\d)?/
                  , Ma = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
                  , ha = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
                  , ca = /^\/?Date\((-?\d+)/i
                  , La = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
                  , Ya = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
                function ya(e) {
                    var a, t, s, n, r, i, d = e._i, _ = ua.exec(d) || ma.exec(d), o = Ma.length, u = ha.length;
                    if (_) {
                        for (c(e).iso = !0,
                        a = 0,
                        t = o; a < t; a++)
                            if (Ma[a][1].exec(_[1])) {
                                n = Ma[a][0],
                                s = !1 !== Ma[a][2];
                                break
                            }
                        if (null == n)
                            return void (e._isValid = !1);
                        if (_[3]) {
                            for (a = 0,
                            t = u; a < t; a++)
                                if (ha[a][1].exec(_[3])) {
                                    r = (_[2] || " ") + ha[a][0];
                                    break
                                }
                            if (null == r)
                                return void (e._isValid = !1)
                        }
                        if (!s && null != r)
                            return void (e._isValid = !1);
                        if (_[4]) {
                            if (!la.exec(_[4]))
                                return void (e._isValid = !1);
                            i = "Z"
                        }
                        e._f = n + (r || "") + (i || ""),
                        ga(e)
                    } else
                        e._isValid = !1
                }
                function fa(e) {
                    var a = parseInt(e, 10);
                    return a <= 49 ? 2e3 + a : a <= 999 ? 1900 + a : a
                }
                function pa(e) {
                    var a, t, s, n, r, i, d, _, o = La.exec(e._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                    if (o) {
                        if (t = o[4],
                        s = o[3],
                        n = o[2],
                        r = o[5],
                        i = o[6],
                        d = o[7],
                        _ = [fa(t), Te.indexOf(s), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)],
                        d && _.push(parseInt(d, 10)),
                        a = _,
                        !function(e, a, t) {
                            return !e || Ce.indexOf(e) === new Date(a[0],a[1],a[2]).getDay() || (c(t).weekdayMismatch = !0,
                            t._isValid = !1,
                            !1)
                        }(o[1], a, e))
                            return;
                        e._a = a,
                        e._tzm = function(e, a, t) {
                            if (e)
                                return Ya[e];
                            if (a)
                                return 0;
                            var s = parseInt(t, 10)
                              , n = s % 100;
                            return (s - n) / 100 * 60 + n
                        }(o[8], o[9], o[10]),
                        e._d = Ae.apply(null, e._a),
                        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                        c(e).rfc2822 = !0
                    } else
                        e._isValid = !1
                }
                function ka(e, a, t) {
                    return null != e ? e : null != a ? a : t
                }
                function Da(e) {
                    var a, t, s, r, i, d = [];
                    if (!e._d) {
                        for (s = function(e) {
                            var a = new Date(n.now());
                            return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
                        }(e),
                        e._w && null == e._a[2] && null == e._a[1] && function(e) {
                            var a, t, s, n, r, i, d, _, o;
                            null != (a = e._w).GG || null != a.W || null != a.E ? (r = 1,
                            i = 4,
                            t = ka(a.GG, e._a[0], ze(va(), 1, 4).year),
                            s = ka(a.W, 1),
                            ((n = ka(a.E, 1)) < 1 || n > 7) && (_ = !0)) : (r = e._locale._week.dow,
                            i = e._locale._week.doy,
                            o = ze(va(), r, i),
                            t = ka(a.gg, e._a[0], o.year),
                            s = ka(a.w, o.week),
                            null != a.d ? ((n = a.d) < 0 || n > 6) && (_ = !0) : null != a.e ? (n = a.e + r,
                            (a.e < 0 || a.e > 6) && (_ = !0)) : n = r),
                            s < 1 || s > Ne(t, r, i) ? c(e)._overflowWeeks = !0 : null != _ ? c(e)._overflowWeekday = !0 : (d = Fe(t, s, n, r, i),
                            e._a[0] = d.year,
                            e._dayOfYear = d.dayOfYear)
                        }(e),
                        null != e._dayOfYear && (i = ka(e._a[0], s[0]),
                        (e._dayOfYear > Pe(i) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0),
                        t = Ae(i, 0, e._dayOfYear),
                        e._a[1] = t.getUTCMonth(),
                        e._a[2] = t.getUTCDate()),
                        a = 0; a < 3 && null == e._a[a]; ++a)
                            e._a[a] = d[a] = s[a];
                        for (; a < 7; a++)
                            e._a[a] = d[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
                        24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0,
                        e._a[3] = 0),
                        e._d = (e._useUTC ? Ae : We).apply(null, d),
                        r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
                        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                        e._nextDay && (e._a[3] = 24),
                        e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0)
                    }
                }
                function ga(e) {
                    if (e._f !== n.ISO_8601)
                        if (e._f !== n.RFC_2822) {
                            e._a = [],
                            c(e).empty = !0;
                            var a, t, s, r, i, d, _, o = "" + e._i, u = o.length, m = 0;
                            for (_ = (s = z(e._f, e._locale).match(P) || []).length,
                            a = 0; a < _; a++)
                                r = s[a],
                                (t = (o.match(ce(r, e)) || [])[0]) && ((i = o.substr(0, o.indexOf(t))).length > 0 && c(e).unusedInput.push(i),
                                o = o.slice(o.indexOf(t) + t.length),
                                m += t.length),
                                A[r] ? (t ? c(e).empty = !1 : c(e).unusedTokens.push(r),
                                pe(r, t, e)) : e._strict && !t && c(e).unusedTokens.push(r);
                            c(e).charsLeftOver = u - m,
                            o.length > 0 && c(e).unusedInput.push(o),
                            e._a[3] <= 12 && !0 === c(e).bigHour && e._a[3] > 0 && (c(e).bigHour = void 0),
                            c(e).parsedDateParts = e._a.slice(0),
                            c(e).meridiem = e._meridiem,
                            e._a[3] = function(e, a, t) {
                                var s;
                                return null == t ? a : null != e.meridiemHour ? e.meridiemHour(a, t) : null != e.isPM ? ((s = e.isPM(t)) && a < 12 && (a += 12),
                                s || 12 !== a || (a = 0),
                                a) : a
                            }(e._locale, e._a[3], e._meridiem),
                            null !== (d = c(e).era) && (e._a[0] = e._locale.erasConvertYear(d, e._a[0])),
                            Da(e),
                            oa(e)
                        } else
                            pa(e);
                    else
                        ya(e)
                }
                function Ta(e) {
                    var a = e._i
                      , t = e._f;
                    return e._locale = e._locale || _a(e._l),
                    null === a || void 0 === t && "" === a ? Y({
                        nullInput: !0
                    }) : ("string" == typeof a && (e._i = a = e._locale.preparse(a)),
                    D(a) ? new k(oa(a)) : (m(a) ? e._d = a : r(t) ? function(e) {
                        var a, t, s, n, r, i, d = !1, _ = e._f.length;
                        if (0 === _)
                            return c(e).invalidFormat = !0,
                            void (e._d = new Date(NaN));
                        for (n = 0; n < _; n++)
                            r = 0,
                            i = !1,
                            a = p({}, e),
                            null != e._useUTC && (a._useUTC = e._useUTC),
                            a._f = e._f[n],
                            ga(a),
                            L(a) && (i = !0),
                            r += c(a).charsLeftOver,
                            r += 10 * c(a).unusedTokens.length,
                            c(a).score = r,
                            d ? r < s && (s = r,
                            t = a) : (null == s || r < s || i) && (s = r,
                            t = a,
                            i && (d = !0));
                        M(e, t || a)
                    }(e) : t ? ga(e) : function(e) {
                        var a = e._i;
                        o(a) ? e._d = new Date(n.now()) : m(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? function(e) {
                            var a = ca.exec(e._i);
                            null === a ? (ya(e),
                            !1 === e._isValid && (delete e._isValid,
                            pa(e),
                            !1 === e._isValid && (delete e._isValid,
                            e._strict ? e._isValid = !1 : n.createFromInputFallback(e)))) : e._d = new Date(+a[1])
                        }(e) : r(a) ? (e._a = l(a.slice(0), (function(e) {
                            return parseInt(e, 10)
                        }
                        )),
                        Da(e)) : i(a) ? function(e) {
                            if (!e._d) {
                                var a = C(e._i)
                                  , t = void 0 === a.day ? a.date : a.day;
                                e._a = l([a.year, a.month, t, a.hour, a.minute, a.second, a.millisecond], (function(e) {
                                    return e && parseInt(e, 10)
                                }
                                )),
                                Da(e)
                            }
                        }(e) : u(a) ? e._d = new Date(a) : n.createFromInputFallback(e)
                    }(e),
                    L(e) || (e._d = null),
                    e))
                }
                function wa(e, a, t, s, n) {
                    var d, o = {};
                    return !0 !== a && !1 !== a || (s = a,
                    a = void 0),
                    !0 !== t && !1 !== t || (s = t,
                    t = void 0),
                    (i(e) && _(e) || r(e) && 0 === e.length) && (e = void 0),
                    o._isAMomentObject = !0,
                    o._useUTC = o._isUTC = n,
                    o._l = t,
                    o._i = e,
                    o._f = a,
                    o._strict = s,
                    (d = new k(oa(Ta(o))))._nextDay && (d.add(1, "d"),
                    d._nextDay = void 0),
                    d
                }
                function va(e, a, t, s) {
                    return wa(e, a, t, s, !1)
                }
                n.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }
                )),
                n.ISO_8601 = function() {}
                ,
                n.RFC_2822 = function() {}
                ;
                var ba = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = va.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : Y()
                }
                ))
                  , Sa = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = va.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : Y()
                }
                ));
                function Ha(e, a) {
                    var t, s;
                    if (1 === a.length && r(a[0]) && (a = a[0]),
                    !a.length)
                        return va();
                    for (t = a[0],
                    s = 1; s < a.length; ++s)
                        a[s].isValid() && !a[s][e](t) || (t = a[s]);
                    return t
                }
                var ja = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                function xa(e) {
                    var a = C(e)
                      , t = a.year || 0
                      , s = a.quarter || 0
                      , n = a.month || 0
                      , r = a.week || a.isoWeek || 0
                      , i = a.day || 0
                      , _ = a.hour || 0
                      , o = a.minute || 0
                      , u = a.second || 0
                      , m = a.millisecond || 0;
                    this._isValid = function(e) {
                        var a, t, s = !1, n = ja.length;
                        for (a in e)
                            if (d(e, a) && (-1 === ke.call(ja, a) || null != e[a] && isNaN(e[a])))
                                return !1;
                        for (t = 0; t < n; ++t)
                            if (e[ja[t]]) {
                                if (s)
                                    return !1;
                                parseFloat(e[ja[t]]) !== B(e[ja[t]]) && (s = !0)
                            }
                        return !0
                    }(a),
                    this._milliseconds = +m + 1e3 * u + 6e4 * o + 1e3 * _ * 60 * 60,
                    this._days = +i + 7 * r,
                    this._months = +n + 3 * s + 12 * t,
                    this._data = {},
                    this._locale = _a(),
                    this._bubble()
                }
                function Pa(e) {
                    return e instanceof xa
                }
                function Oa(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }
                function Wa(e, a) {
                    E(e, 0, 0, (function() {
                        var e = this.utcOffset()
                          , t = "+";
                        return e < 0 && (e = -e,
                        t = "-"),
                        t + x(~~(e / 60), 2) + a + x(~~e % 60, 2)
                    }
                    ))
                }
                Wa("Z", ":"),
                Wa("ZZ", ""),
                he("Z", le),
                he("ZZ", le),
                ye(["Z", "ZZ"], (function(e, a, t) {
                    t._useUTC = !0,
                    t._tzm = Ea(le, e)
                }
                ));
                var Aa = /([\+\-]|\d\d)/gi;
                function Ea(e, a) {
                    var t, s, n = (a || "").match(e);
                    return null === n ? null : 0 === (s = 60 * (t = ((n[n.length - 1] || []) + "").match(Aa) || ["-", 0, 0])[1] + B(t[2])) ? 0 : "+" === t[0] ? s : -s
                }
                function Fa(e, a) {
                    var t, s;
                    return a._isUTC ? (t = a.clone(),
                    s = (D(e) || m(e) ? e.valueOf() : va(e).valueOf()) - t.valueOf(),
                    t._d.setTime(t._d.valueOf() + s),
                    n.updateOffset(t, !1),
                    t) : va(e).local()
                }
                function za(e) {
                    return -Math.round(e._d.getTimezoneOffset())
                }
                function Na() {
                    return !!this.isValid() && this._isUTC && 0 === this._offset
                }
                n.updateOffset = function() {}
                ;
                var Ja = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
                  , Ra = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                function Ca(e, a) {
                    var t, s, n, r, i, _, o = e, m = null;
                    return Pa(e) ? o = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : u(e) || !isNaN(+e) ? (o = {},
                    a ? o[a] = +e : o.milliseconds = +e) : (m = Ja.exec(e)) ? (t = "-" === m[1] ? -1 : 1,
                    o = {
                        y: 0,
                        d: B(m[2]) * t,
                        h: B(m[3]) * t,
                        m: B(m[4]) * t,
                        s: B(m[5]) * t,
                        ms: B(Oa(1e3 * m[6])) * t
                    }) : (m = Ra.exec(e)) ? (t = "-" === m[1] ? -1 : 1,
                    o = {
                        y: Ia(m[2], t),
                        M: Ia(m[3], t),
                        w: Ia(m[4], t),
                        d: Ia(m[5], t),
                        h: Ia(m[6], t),
                        m: Ia(m[7], t),
                        s: Ia(m[8], t)
                    }) : null == o ? o = {} : "object" == typeof o && ("from"in o || "to"in o) && (r = va(o.from),
                    i = va(o.to),
                    n = r.isValid() && i.isValid() ? (i = Fa(i, r),
                    r.isBefore(i) ? _ = Ua(r, i) : ((_ = Ua(i, r)).milliseconds = -_.milliseconds,
                    _.months = -_.months),
                    _) : {
                        milliseconds: 0,
                        months: 0
                    },
                    (o = {}).ms = n.milliseconds,
                    o.M = n.months),
                    s = new xa(o),
                    Pa(e) && d(e, "_locale") && (s._locale = e._locale),
                    Pa(e) && d(e, "_isValid") && (s._isValid = e._isValid),
                    s
                }
                function Ia(e, a) {
                    var t = e && parseFloat(e.replace(",", "."));
                    return (isNaN(t) ? 0 : t) * a
                }
                function Ua(e, a) {
                    var t = {};
                    return t.months = a.month() - e.month() + 12 * (a.year() - e.year()),
                    e.clone().add(t.months, "M").isAfter(a) && --t.months,
                    t.milliseconds = +a - +e.clone().add(t.months, "M"),
                    t
                }
                function Ga(e, a) {
                    return function(t, s) {
                        var n;
                        return null === s || isNaN(+s) || (b(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                        n = t,
                        t = s,
                        s = n),
                        Va(this, Ca(t, s), e),
                        this
                    }
                }
                function Va(e, a, t, s) {
                    var r = a._milliseconds
                      , i = Oa(a._days)
                      , d = Oa(a._months);
                    e.isValid() && (s = null == s || s,
                    d && He(e, q(e, "Month") + d * t),
                    i && Z(e, "Date", q(e, "Date") + i * t),
                    r && e._d.setTime(e._d.valueOf() + r * t),
                    s && n.updateOffset(e, i || d))
                }
                Ca.fn = xa.prototype,
                Ca.invalid = function() {
                    return Ca(NaN)
                }
                ;
                var Ba = Ga(1, "add")
                  , Ka = Ga(-1, "subtract");
                function qa(e) {
                    return "string" == typeof e || e instanceof String
                }
                function Za(e) {
                    return D(e) || m(e) || qa(e) || u(e) || function(e) {
                        var a = r(e)
                          , t = !1;
                        return a && (t = 0 === e.filter((function(a) {
                            return !u(a) && qa(e)
                        }
                        )).length),
                        a && t
                    }(e) || function(e) {
                        var a, t, s = i(e) && !_(e), n = !1, r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], o = r.length;
                        for (a = 0; a < o; a += 1)
                            t = r[a],
                            n = n || d(e, t);
                        return s && n
                    }(e) || null == e
                }
                function $a(e) {
                    var a, t = i(e) && !_(e), s = !1, n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                    for (a = 0; a < n.length; a += 1)
                        s = s || d(e, n[a]);
                    return t && s
                }
                function Qa(e, a) {
                    if (e.date() < a.date())
                        return -Qa(a, e);
                    var t = 12 * (a.year() - e.year()) + (a.month() - e.month())
                      , s = e.clone().add(t, "months");
                    return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, "months")) : (a - s) / (e.clone().add(t + 1, "months") - s))) || 0
                }
                function Xa(e) {
                    var a;
                    return void 0 === e ? this._locale._abbr : (null != (a = _a(e)) && (this._locale = a),
                    this)
                }
                n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
                n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var et = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                }
                ));
                function at() {
                    return this._locale
                }
                var tt = 1e3
                  , st = 6e4
                  , nt = 36e5
                  , rt = 126227808e5;
                function it(e, a) {
                    return (e % a + a) % a
                }
                function dt(e, a, t) {
                    return e < 100 && e >= 0 ? new Date(e + 400,a,t) - rt : new Date(e,a,t).valueOf()
                }
                function _t(e, a, t) {
                    return e < 100 && e >= 0 ? Date.UTC(e + 400, a, t) - rt : Date.UTC(e, a, t)
                }
                function ot(e, a) {
                    return a.erasAbbrRegex(e)
                }
                function ut() {
                    var e, a, t = [], s = [], n = [], r = [], i = this.eras();
                    for (e = 0,
                    a = i.length; e < a; ++e)
                        s.push(Le(i[e].name)),
                        t.push(Le(i[e].abbr)),
                        n.push(Le(i[e].narrow)),
                        r.push(Le(i[e].name)),
                        r.push(Le(i[e].abbr)),
                        r.push(Le(i[e].narrow));
                    this._erasRegex = new RegExp("^(" + r.join("|") + ")","i"),
                    this._erasNameRegex = new RegExp("^(" + s.join("|") + ")","i"),
                    this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")","i"),
                    this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")","i")
                }
                function mt(e, a) {
                    E(0, [e, e.length], 0, a)
                }
                function lt(e, a, t, s, n) {
                    var r;
                    return null == e ? ze(this, s, n).year : (a > (r = Ne(e, s, n)) && (a = r),
                    Mt.call(this, e, a, t, s, n))
                }
                function Mt(e, a, t, s, n) {
                    var r = Fe(e, a, t, s, n)
                      , i = Ae(r.year, 0, r.dayOfYear);
                    return this.year(i.getUTCFullYear()),
                    this.month(i.getUTCMonth()),
                    this.date(i.getUTCDate()),
                    this
                }
                E("N", 0, 0, "eraAbbr"),
                E("NN", 0, 0, "eraAbbr"),
                E("NNN", 0, 0, "eraAbbr"),
                E("NNNN", 0, 0, "eraName"),
                E("NNNNN", 0, 0, "eraNarrow"),
                E("y", ["y", 1], "yo", "eraYear"),
                E("y", ["yy", 2], 0, "eraYear"),
                E("y", ["yyy", 3], 0, "eraYear"),
                E("y", ["yyyy", 4], 0, "eraYear"),
                he("N", ot),
                he("NN", ot),
                he("NNN", ot),
                he("NNNN", (function(e, a) {
                    return a.erasNameRegex(e)
                }
                )),
                he("NNNNN", (function(e, a) {
                    return a.erasNarrowRegex(e)
                }
                )),
                ye(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, a, t, s) {
                    var n = t._locale.erasParse(e, s, t._strict);
                    n ? c(t).era = n : c(t).invalidEra = e
                }
                )),
                he("y", oe),
                he("yy", oe),
                he("yyy", oe),
                he("yyyy", oe),
                he("yo", (function(e, a) {
                    return a._eraYearOrdinalRegex || oe
                }
                )),
                ye(["y", "yy", "yyy", "yyyy"], 0),
                ye(["yo"], (function(e, a, t, s) {
                    var n;
                    t._locale._eraYearOrdinalRegex && (n = e.match(t._locale._eraYearOrdinalRegex)),
                    t._locale.eraYearOrdinalParse ? a[0] = t._locale.eraYearOrdinalParse(e, n) : a[0] = parseInt(e, 10)
                }
                )),
                E(0, ["gg", 2], 0, (function() {
                    return this.weekYear() % 100
                }
                )),
                E(0, ["GG", 2], 0, (function() {
                    return this.isoWeekYear() % 100
                }
                )),
                mt("gggg", "weekYear"),
                mt("ggggg", "weekYear"),
                mt("GGGG", "isoWeekYear"),
                mt("GGGGG", "isoWeekYear"),
                J("weekYear", "gg"),
                J("isoWeekYear", "GG"),
                U("weekYear", 1),
                U("isoWeekYear", 1),
                he("G", ue),
                he("g", ue),
                he("GG", se, X),
                he("gg", se, X),
                he("GGGG", de, ae),
                he("gggg", de, ae),
                he("GGGGG", _e, te),
                he("ggggg", _e, te),
                fe(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, a, t, s) {
                    a[s.substr(0, 2)] = B(e)
                }
                )),
                fe(["gg", "GG"], (function(e, a, t, s) {
                    a[s] = n.parseTwoDigitYear(e)
                }
                )),
                E("Q", 0, "Qo", "quarter"),
                J("quarter", "Q"),
                U("quarter", 7),
                he("Q", Q),
                ye("Q", (function(e, a) {
                    a[1] = 3 * (B(e) - 1)
                }
                )),
                E("D", ["DD", 2], "Do", "date"),
                J("date", "D"),
                U("date", 9),
                he("D", se),
                he("DD", se, X),
                he("Do", (function(e, a) {
                    return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient
                }
                )),
                ye(["D", "DD"], 2),
                ye("Do", (function(e, a) {
                    a[2] = B(e.match(se)[0])
                }
                ));
                var ht = K("Date", !0);
                E("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
                J("dayOfYear", "DDD"),
                U("dayOfYear", 4),
                he("DDD", ie),
                he("DDDD", ee),
                ye(["DDD", "DDDD"], (function(e, a, t) {
                    t._dayOfYear = B(e)
                }
                )),
                E("m", ["mm", 2], 0, "minute"),
                J("minute", "m"),
                U("minute", 14),
                he("m", se),
                he("mm", se, X),
                ye(["m", "mm"], 4);
                var ct = K("Minutes", !1);
                E("s", ["ss", 2], 0, "second"),
                J("second", "s"),
                U("second", 15),
                he("s", se),
                he("ss", se, X),
                ye(["s", "ss"], 5);
                var Lt, Yt, yt = K("Seconds", !1);
                for (E("S", 0, 0, (function() {
                    return ~~(this.millisecond() / 100)
                }
                )),
                E(0, ["SS", 2], 0, (function() {
                    return ~~(this.millisecond() / 10)
                }
                )),
                E(0, ["SSS", 3], 0, "millisecond"),
                E(0, ["SSSS", 4], 0, (function() {
                    return 10 * this.millisecond()
                }
                )),
                E(0, ["SSSSS", 5], 0, (function() {
                    return 100 * this.millisecond()
                }
                )),
                E(0, ["SSSSSS", 6], 0, (function() {
                    return 1e3 * this.millisecond()
                }
                )),
                E(0, ["SSSSSSS", 7], 0, (function() {
                    return 1e4 * this.millisecond()
                }
                )),
                E(0, ["SSSSSSSS", 8], 0, (function() {
                    return 1e5 * this.millisecond()
                }
                )),
                E(0, ["SSSSSSSSS", 9], 0, (function() {
                    return 1e6 * this.millisecond()
                }
                )),
                J("millisecond", "ms"),
                U("millisecond", 16),
                he("S", ie, Q),
                he("SS", ie, X),
                he("SSS", ie, ee),
                Lt = "SSSS"; Lt.length <= 9; Lt += "S")
                    he(Lt, oe);
                function ft(e, a) {
                    a[6] = B(1e3 * ("0." + e))
                }
                for (Lt = "S"; Lt.length <= 9; Lt += "S")
                    ye(Lt, ft);
                Yt = K("Milliseconds", !1),
                E("z", 0, 0, "zoneAbbr"),
                E("zz", 0, 0, "zoneName");
                var pt = k.prototype;
                function kt(e) {
                    return e
                }
                pt.add = Ba,
                pt.calendar = function(e, a) {
                    1 === arguments.length && (arguments[0] ? Za(arguments[0]) ? (e = arguments[0],
                    a = void 0) : $a(arguments[0]) && (a = arguments[0],
                    e = void 0) : (e = void 0,
                    a = void 0));
                    var t = e || va()
                      , s = Fa(t, this).startOf("day")
                      , r = n.calendarFormat(this, s) || "sameElse"
                      , i = a && (S(a[r]) ? a[r].call(this, t) : a[r]);
                    return this.format(i || this.localeData().calendar(r, this, va(t)))
                }
                ,
                pt.clone = function() {
                    return new k(this)
                }
                ,
                pt.diff = function(e, a, t) {
                    var s, n, r;
                    if (!this.isValid())
                        return NaN;
                    if (!(s = Fa(e, this)).isValid())
                        return NaN;
                    switch (n = 6e4 * (s.utcOffset() - this.utcOffset()),
                    a = R(a)) {
                    case "year":
                        r = Qa(this, s) / 12;
                        break;
                    case "month":
                        r = Qa(this, s);
                        break;
                    case "quarter":
                        r = Qa(this, s) / 3;
                        break;
                    case "second":
                        r = (this - s) / 1e3;
                        break;
                    case "minute":
                        r = (this - s) / 6e4;
                        break;
                    case "hour":
                        r = (this - s) / 36e5;
                        break;
                    case "day":
                        r = (this - s - n) / 864e5;
                        break;
                    case "week":
                        r = (this - s - n) / 6048e5;
                        break;
                    default:
                        r = this - s
                    }
                    return t ? r : V(r)
                }
                ,
                pt.endOf = function(e) {
                    var a, t;
                    if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid())
                        return this;
                    switch (t = this._isUTC ? _t : dt,
                    e) {
                    case "year":
                        a = t(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        a = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        a = t(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        a = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        a = t(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        a = this._d.valueOf(),
                        a += nt - it(a + (this._isUTC ? 0 : this.utcOffset() * st), nt) - 1;
                        break;
                    case "minute":
                        a = this._d.valueOf(),
                        a += st - it(a, st) - 1;
                        break;
                    case "second":
                        a = this._d.valueOf(),
                        a += tt - it(a, tt) - 1
                    }
                    return this._d.setTime(a),
                    n.updateOffset(this, !0),
                    this
                }
                ,
                pt.format = function(e) {
                    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                    var a = F(this, e);
                    return this.localeData().postformat(a)
                }
                ,
                pt.from = function(e, a) {
                    return this.isValid() && (D(e) && e.isValid() || va(e).isValid()) ? Ca({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
                }
                ,
                pt.fromNow = function(e) {
                    return this.from(va(), e)
                }
                ,
                pt.to = function(e, a) {
                    return this.isValid() && (D(e) && e.isValid() || va(e).isValid()) ? Ca({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
                }
                ,
                pt.toNow = function(e) {
                    return this.to(va(), e)
                }
                ,
                pt.get = function(e) {
                    return S(this[e = R(e)]) ? this[e]() : this
                }
                ,
                pt.invalidAt = function() {
                    return c(this).overflow
                }
                ,
                pt.isAfter = function(e, a) {
                    var t = D(e) ? e : va(e);
                    return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = R(a) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf())
                }
                ,
                pt.isBefore = function(e, a) {
                    var t = D(e) ? e : va(e);
                    return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = R(a) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf())
                }
                ,
                pt.isBetween = function(e, a, t, s) {
                    var n = D(e) ? e : va(e)
                      , r = D(a) ? a : va(a);
                    return !!(this.isValid() && n.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(n, t) : !this.isBefore(n, t)) && (")" === s[1] ? this.isBefore(r, t) : !this.isAfter(r, t))
                }
                ,
                pt.isSame = function(e, a) {
                    var t, s = D(e) ? e : va(e);
                    return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = R(a) || "millisecond") ? this.valueOf() === s.valueOf() : (t = s.valueOf(),
                    this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()))
                }
                ,
                pt.isSameOrAfter = function(e, a) {
                    return this.isSame(e, a) || this.isAfter(e, a)
                }
                ,
                pt.isSameOrBefore = function(e, a) {
                    return this.isSame(e, a) || this.isBefore(e, a)
                }
                ,
                pt.isValid = function() {
                    return L(this)
                }
                ,
                pt.lang = et,
                pt.locale = Xa,
                pt.localeData = at,
                pt.max = Sa,
                pt.min = ba,
                pt.parsingFlags = function() {
                    return M({}, c(this))
                }
                ,
                pt.set = function(e, a) {
                    if ("object" == typeof e) {
                        var t, s = function(e) {
                            var a, t = [];
                            for (a in e)
                                d(e, a) && t.push({
                                    unit: a,
                                    priority: I[a]
                                });
                            return t.sort((function(e, a) {
                                return e.priority - a.priority
                            }
                            )),
                            t
                        }(e = C(e)), n = s.length;
                        for (t = 0; t < n; t++)
                            this[s[t].unit](e[s[t].unit])
                    } else if (S(this[e = R(e)]))
                        return this[e](a);
                    return this
                }
                ,
                pt.startOf = function(e) {
                    var a, t;
                    if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid())
                        return this;
                    switch (t = this._isUTC ? _t : dt,
                    e) {
                    case "year":
                        a = t(this.year(), 0, 1);
                        break;
                    case "quarter":
                        a = t(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        a = t(this.year(), this.month(), 1);
                        break;
                    case "week":
                        a = t(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        a = t(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        a = this._d.valueOf(),
                        a -= it(a + (this._isUTC ? 0 : this.utcOffset() * st), nt);
                        break;
                    case "minute":
                        a = this._d.valueOf(),
                        a -= it(a, st);
                        break;
                    case "second":
                        a = this._d.valueOf(),
                        a -= it(a, tt)
                    }
                    return this._d.setTime(a),
                    n.updateOffset(this, !0),
                    this
                }
                ,
                pt.subtract = Ka,
                pt.toArray = function() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }
                ,
                pt.toObject = function() {
                    var e = this;
                    return {
                        years: e.year(),
                        months: e.month(),
                        date: e.date(),
                        hours: e.hours(),
                        minutes: e.minutes(),
                        seconds: e.seconds(),
                        milliseconds: e.milliseconds()
                    }
                }
                ,
                pt.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                pt.toISOString = function(e) {
                    if (!this.isValid())
                        return null;
                    var a = !0 !== e
                      , t = a ? this.clone().utc() : this;
                    return t.year() < 0 || t.year() > 9999 ? F(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", F(t, "Z")) : F(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }
                ,
                pt.inspect = function() {
                    if (!this.isValid())
                        return "moment.invalid(/* " + this._i + " */)";
                    var e, a, t, s = "moment", n = "";
                    return this.isLocal() || (s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                    n = "Z"),
                    e = "[" + s + '("]',
                    a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    "-MM-DD[T]HH:mm:ss.SSS",
                    t = n + '[")]',
                    this.format(e + a + "-MM-DD[T]HH:mm:ss.SSS" + t)
                }
                ,
                "undefined" != typeof Symbol && null != Symbol.for && (pt[Symbol.for("nodejs.util.inspect.custom")] = function() {
                    return "Moment<" + this.format() + ">"
                }
                ),
                pt.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                pt.toString = function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }
                ,
                pt.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                pt.valueOf = function() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }
                ,
                pt.creationData = function() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }
                ,
                pt.eraName = function() {
                    var e, a, t, s = this.localeData().eras();
                    for (e = 0,
                    a = s.length; e < a; ++e) {
                        if (t = this.clone().startOf("day").valueOf(),
                        s[e].since <= t && t <= s[e].until)
                            return s[e].name;
                        if (s[e].until <= t && t <= s[e].since)
                            return s[e].name
                    }
                    return ""
                }
                ,
                pt.eraNarrow = function() {
                    var e, a, t, s = this.localeData().eras();
                    for (e = 0,
                    a = s.length; e < a; ++e) {
                        if (t = this.clone().startOf("day").valueOf(),
                        s[e].since <= t && t <= s[e].until)
                            return s[e].narrow;
                        if (s[e].until <= t && t <= s[e].since)
                            return s[e].narrow
                    }
                    return ""
                }
                ,
                pt.eraAbbr = function() {
                    var e, a, t, s = this.localeData().eras();
                    for (e = 0,
                    a = s.length; e < a; ++e) {
                        if (t = this.clone().startOf("day").valueOf(),
                        s[e].since <= t && t <= s[e].until)
                            return s[e].abbr;
                        if (s[e].until <= t && t <= s[e].since)
                            return s[e].abbr
                    }
                    return ""
                }
                ,
                pt.eraYear = function() {
                    var e, a, t, s, r = this.localeData().eras();
                    for (e = 0,
                    a = r.length; e < a; ++e)
                        if (t = r[e].since <= r[e].until ? 1 : -1,
                        s = this.clone().startOf("day").valueOf(),
                        r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
                            return (this.year() - n(r[e].since).year()) * t + r[e].offset;
                    return this.year()
                }
                ,
                pt.year = Oe,
                pt.isLeapYear = function() {
                    return G(this.year())
                }
                ,
                pt.weekYear = function(e) {
                    return lt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }
                ,
                pt.isoWeekYear = function(e) {
                    return lt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }
                ,
                pt.quarter = pt.quarters = function(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }
                ,
                pt.month = je,
                pt.daysInMonth = function() {
                    return De(this.year(), this.month())
                }
                ,
                pt.week = pt.weeks = function(e) {
                    var a = this.localeData().week(this);
                    return null == e ? a : this.add(7 * (e - a), "d")
                }
                ,
                pt.isoWeek = pt.isoWeeks = function(e) {
                    var a = ze(this, 1, 4).week;
                    return null == e ? a : this.add(7 * (e - a), "d")
                }
                ,
                pt.weeksInYear = function() {
                    var e = this.localeData()._week;
                    return Ne(this.year(), e.dow, e.doy)
                }
                ,
                pt.weeksInWeekYear = function() {
                    var e = this.localeData()._week;
                    return Ne(this.weekYear(), e.dow, e.doy)
                }
                ,
                pt.isoWeeksInYear = function() {
                    return Ne(this.year(), 1, 4)
                }
                ,
                pt.isoWeeksInISOWeekYear = function() {
                    return Ne(this.isoWeekYear(), 1, 4)
                }
                ,
                pt.date = ht,
                pt.day = pt.days = function(e) {
                    if (!this.isValid())
                        return null != e ? this : NaN;
                    var a = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = function(e, a) {
                        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = a.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                    }(e, this.localeData()),
                    this.add(e - a, "d")) : a
                }
                ,
                pt.weekday = function(e) {
                    if (!this.isValid())
                        return null != e ? this : NaN;
                    var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? a : this.add(e - a, "d")
                }
                ,
                pt.isoWeekday = function(e) {
                    if (!this.isValid())
                        return null != e ? this : NaN;
                    if (null != e) {
                        var a = function(e, a) {
                            return "string" == typeof e ? a.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                        }(e, this.localeData());
                        return this.day(this.day() % 7 ? a : a - 7)
                    }
                    return this.day() || 7
                }
                ,
                pt.dayOfYear = function(e) {
                    var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? a : this.add(e - a, "d")
                }
                ,
                pt.hour = pt.hours = Qe,
                pt.minute = pt.minutes = ct,
                pt.second = pt.seconds = yt,
                pt.millisecond = pt.milliseconds = Yt,
                pt.utcOffset = function(e, a, t) {
                    var s, r = this._offset || 0;
                    if (!this.isValid())
                        return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Ea(le, e)))
                                return this
                        } else
                            Math.abs(e) < 16 && !t && (e *= 60);
                        return !this._isUTC && a && (s = za(this)),
                        this._offset = e,
                        this._isUTC = !0,
                        null != s && this.add(s, "m"),
                        r !== e && (!a || this._changeInProgress ? Va(this, Ca(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                        n.updateOffset(this, !0),
                        this._changeInProgress = null)),
                        this
                    }
                    return this._isUTC ? r : za(this)
                }
                ,
                pt.utc = function(e) {
                    return this.utcOffset(0, e)
                }
                ,
                pt.local = function(e) {
                    return this._isUTC && (this.utcOffset(0, e),
                    this._isUTC = !1,
                    e && this.subtract(za(this), "m")),
                    this
                }
                ,
                pt.parseZone = function() {
                    if (null != this._tzm)
                        this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = Ea(me, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }
                ,
                pt.hasAlignedHourOffset = function(e) {
                    return !!this.isValid() && (e = e ? va(e).utcOffset() : 0,
                    (this.utcOffset() - e) % 60 == 0)
                }
                ,
                pt.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }
                ,
                pt.isLocal = function() {
                    return !!this.isValid() && !this._isUTC
                }
                ,
                pt.isUtcOffset = function() {
                    return !!this.isValid() && this._isUTC
                }
                ,
                pt.isUtc = Na,
                pt.isUTC = Na,
                pt.zoneAbbr = function() {
                    return this._isUTC ? "UTC" : ""
                }
                ,
                pt.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }
                ,
                pt.dates = T("dates accessor is deprecated. Use date instead.", ht),
                pt.months = T("months accessor is deprecated. Use month instead", je),
                pt.years = T("years accessor is deprecated. Use year instead", Oe),
                pt.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, a) {
                    return null != e ? ("string" != typeof e && (e = -e),
                    this.utcOffset(e, a),
                    this) : -this.utcOffset()
                }
                )),
                pt.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                    if (!o(this._isDSTShifted))
                        return this._isDSTShifted;
                    var e, a = {};
                    return p(a, this),
                    (a = Ta(a))._a ? (e = a._isUTC ? h(a._a) : va(a._a),
                    this._isDSTShifted = this.isValid() && function(e, a, t) {
                        var s, n = Math.min(e.length, a.length), r = Math.abs(e.length - a.length), i = 0;
                        for (s = 0; s < n; s++)
                            (t && e[s] !== a[s] || !t && B(e[s]) !== B(a[s])) && i++;
                        return i + r
                    }(a._a, e.toArray()) > 0) : this._isDSTShifted = !1,
                    this._isDSTShifted
                }
                ));
                var Dt = j.prototype;
                function gt(e, a, t, s) {
                    var n = _a()
                      , r = h().set(s, a);
                    return n[t](r, e)
                }
                function Tt(e, a, t) {
                    if (u(e) && (a = e,
                    e = void 0),
                    e = e || "",
                    null != a)
                        return gt(e, a, t, "month");
                    var s, n = [];
                    for (s = 0; s < 12; s++)
                        n[s] = gt(e, s, t, "month");
                    return n
                }
                function wt(e, a, t, s) {
                    "boolean" == typeof e ? (u(a) && (t = a,
                    a = void 0),
                    a = a || "") : (t = a = e,
                    e = !1,
                    u(a) && (t = a,
                    a = void 0),
                    a = a || "");
                    var n, r = _a(), i = e ? r._week.dow : 0, d = [];
                    if (null != t)
                        return gt(a, (t + i) % 7, s, "day");
                    for (n = 0; n < 7; n++)
                        d[n] = gt(a, (n + i) % 7, s, "day");
                    return d
                }
                Dt.calendar = function(e, a, t) {
                    var s = this._calendar[e] || this._calendar.sameElse;
                    return S(s) ? s.call(a, t) : s
                }
                ,
                Dt.longDateFormat = function(e) {
                    var a = this._longDateFormat[e]
                      , t = this._longDateFormat[e.toUpperCase()];
                    return a || !t ? a : (this._longDateFormat[e] = t.match(P).map((function(e) {
                        return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                    }
                    )).join(""),
                    this._longDateFormat[e])
                }
                ,
                Dt.invalidDate = function() {
                    return this._invalidDate
                }
                ,
                Dt.ordinal = function(e) {
                    return this._ordinal.replace("%d", e)
                }
                ,
                Dt.preparse = kt,
                Dt.postformat = kt,
                Dt.relativeTime = function(e, a, t, s) {
                    var n = this._relativeTime[t];
                    return S(n) ? n(e, a, t, s) : n.replace(/%d/i, e)
                }
                ,
                Dt.pastFuture = function(e, a) {
                    var t = this._relativeTime[e > 0 ? "future" : "past"];
                    return S(t) ? t(a) : t.replace(/%s/i, a)
                }
                ,
                Dt.set = function(e) {
                    var a, t;
                    for (t in e)
                        d(e, t) && (S(a = e[t]) ? this[t] = a : this["_" + t] = a);
                    this._config = e,
                    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }
                ,
                Dt.eras = function(e, a) {
                    var t, s, r, i = this._eras || _a("en")._eras;
                    for (t = 0,
                    s = i.length; t < s; ++t)
                        switch ("string" == typeof i[t].since && (r = n(i[t].since).startOf("day"),
                        i[t].since = r.valueOf()),
                        typeof i[t].until) {
                        case "undefined":
                            i[t].until = 1 / 0;
                            break;
                        case "string":
                            r = n(i[t].until).startOf("day").valueOf(),
                            i[t].until = r.valueOf()
                        }
                    return i
                }
                ,
                Dt.erasParse = function(e, a, t) {
                    var s, n, r, i, d, _ = this.eras();
                    for (e = e.toUpperCase(),
                    s = 0,
                    n = _.length; s < n; ++s)
                        if (r = _[s].name.toUpperCase(),
                        i = _[s].abbr.toUpperCase(),
                        d = _[s].narrow.toUpperCase(),
                        t)
                            switch (a) {
                            case "N":
                            case "NN":
                            case "NNN":
                                if (i === e)
                                    return _[s];
                                break;
                            case "NNNN":
                                if (r === e)
                                    return _[s];
                                break;
                            case "NNNNN":
                                if (d === e)
                                    return _[s]
                            }
                        else if ([r, i, d].indexOf(e) >= 0)
                            return _[s]
                }
                ,
                Dt.erasConvertYear = function(e, a) {
                    var t = e.since <= e.until ? 1 : -1;
                    return void 0 === a ? n(e.since).year() : n(e.since).year() + (a - e.offset) * t
                }
                ,
                Dt.erasAbbrRegex = function(e) {
                    return d(this, "_erasAbbrRegex") || ut.call(this),
                    e ? this._erasAbbrRegex : this._erasRegex
                }
                ,
                Dt.erasNameRegex = function(e) {
                    return d(this, "_erasNameRegex") || ut.call(this),
                    e ? this._erasNameRegex : this._erasRegex
                }
                ,
                Dt.erasNarrowRegex = function(e) {
                    return d(this, "_erasNarrowRegex") || ut.call(this),
                    e ? this._erasNarrowRegex : this._erasRegex
                }
                ,
                Dt.months = function(e, a) {
                    return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || we).test(a) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
                }
                ,
                Dt.monthsShort = function(e, a) {
                    return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[we.test(a) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }
                ,
                Dt.monthsParse = function(e, a, t) {
                    var s, n, r;
                    if (this._monthsParseExact)
                        return Se.call(this, e, a, t);
                    for (this._monthsParse || (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = []),
                    s = 0; s < 12; s++) {
                        if (n = h([2e3, s]),
                        t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$","i"),
                        this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$","i")),
                        t || this._monthsParse[s] || (r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""),
                        this._monthsParse[s] = new RegExp(r.replace(".", ""),"i")),
                        t && "MMMM" === a && this._longMonthsParse[s].test(e))
                            return s;
                        if (t && "MMM" === a && this._shortMonthsParse[s].test(e))
                            return s;
                        if (!t && this._monthsParse[s].test(e))
                            return s
                    }
                }
                ,
                Dt.monthsRegex = function(e) {
                    return this._monthsParseExact ? (d(this, "_monthsRegex") || xe.call(this),
                    e ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = be),
                    this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }
                ,
                Dt.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (d(this, "_monthsRegex") || xe.call(this),
                    e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = ve),
                    this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }
                ,
                Dt.week = function(e) {
                    return ze(e, this._week.dow, this._week.doy).week
                }
                ,
                Dt.firstDayOfYear = function() {
                    return this._week.doy
                }
                ,
                Dt.firstDayOfWeek = function() {
                    return this._week.dow
                }
                ,
                Dt.weekdays = function(e, a) {
                    var t = r(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(a) ? "format" : "standalone"];
                    return !0 === e ? Je(t, this._week.dow) : e ? t[e.day()] : t
                }
                ,
                Dt.weekdaysMin = function(e) {
                    return !0 === e ? Je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }
                ,
                Dt.weekdaysShort = function(e) {
                    return !0 === e ? Je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }
                ,
                Dt.weekdaysParse = function(e, a, t) {
                    var s, n, r;
                    if (this._weekdaysParseExact)
                        return Be.call(this, e, a, t);
                    for (this._weekdaysParse || (this._weekdaysParse = [],
                    this._minWeekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._fullWeekdaysParse = []),
                    s = 0; s < 7; s++) {
                        if (n = h([2e3, 1]).day(s),
                        t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$","i"),
                        this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$","i"),
                        this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$","i")),
                        this._weekdaysParse[s] || (r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""),
                        this._weekdaysParse[s] = new RegExp(r.replace(".", ""),"i")),
                        t && "dddd" === a && this._fullWeekdaysParse[s].test(e))
                            return s;
                        if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e))
                            return s;
                        if (t && "dd" === a && this._minWeekdaysParse[s].test(e))
                            return s;
                        if (!t && this._weekdaysParse[s].test(e))
                            return s
                    }
                }
                ,
                Dt.weekdaysRegex = function(e) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ke.call(this),
                    e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Ue),
                    this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }
                ,
                Dt.weekdaysShortRegex = function(e) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ke.call(this),
                    e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ge),
                    this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }
                ,
                Dt.weekdaysMinRegex = function(e) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ke.call(this),
                    e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ve),
                    this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }
                ,
                Dt.isPM = function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }
                ,
                Dt.meridiem = function(e, a, t) {
                    return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM"
                }
                ,
                ia("en", {
                    eras: [{
                        since: "0001-01-01",
                        until: 1 / 0,
                        offset: 1,
                        name: "Anno Domini",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -1 / 0,
                        offset: 1,
                        name: "Before Christ",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var a = e % 10;
                        return e + (1 === B(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                    }
                }),
                n.lang = T("moment.lang is deprecated. Use moment.locale instead.", ia),
                n.langData = T("moment.langData is deprecated. Use moment.localeData instead.", _a);
                var vt = Math.abs;
                function bt(e, a, t, s) {
                    var n = Ca(a, t);
                    return e._milliseconds += s * n._milliseconds,
                    e._days += s * n._days,
                    e._months += s * n._months,
                    e._bubble()
                }
                function St(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }
                function Ht(e) {
                    return 4800 * e / 146097
                }
                function jt(e) {
                    return 146097 * e / 4800
                }
                function xt(e) {
                    return function() {
                        return this.as(e)
                    }
                }
                var Pt = xt("ms")
                  , Ot = xt("s")
                  , Wt = xt("m")
                  , At = xt("h")
                  , Et = xt("d")
                  , Ft = xt("w")
                  , zt = xt("M")
                  , Nt = xt("Q")
                  , Jt = xt("y");
                function Rt(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }
                var Ct = Rt("milliseconds")
                  , It = Rt("seconds")
                  , Ut = Rt("minutes")
                  , Gt = Rt("hours")
                  , Vt = Rt("days")
                  , Bt = Rt("months")
                  , Kt = Rt("years");
                var qt = Math.round
                  , Zt = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    w: null,
                    M: 11
                };
                function $t(e, a, t, s, n) {
                    return n.relativeTime(a || 1, !!t, e, s)
                }
                var Qt = Math.abs;
                function Xt(e) {
                    return (e > 0) - (e < 0) || +e
                }
                function es() {
                    if (!this.isValid())
                        return this.localeData().invalidDate();
                    var e, a, t, s, n, r, i, d, _ = Qt(this._milliseconds) / 1e3, o = Qt(this._days), u = Qt(this._months), m = this.asSeconds();
                    return m ? (e = V(_ / 60),
                    a = V(e / 60),
                    _ %= 60,
                    e %= 60,
                    t = V(u / 12),
                    u %= 12,
                    s = _ ? _.toFixed(3).replace(/\.?0+$/, "") : "",
                    n = m < 0 ? "-" : "",
                    r = Xt(this._months) !== Xt(m) ? "-" : "",
                    i = Xt(this._days) !== Xt(m) ? "-" : "",
                    d = Xt(this._milliseconds) !== Xt(m) ? "-" : "",
                    n + "P" + (t ? r + t + "Y" : "") + (u ? r + u + "M" : "") + (o ? i + o + "D" : "") + (a || e || _ ? "T" : "") + (a ? d + a + "H" : "") + (e ? d + e + "M" : "") + (_ ? d + s + "S" : "")) : "P0D"
                }
                var as = xa.prototype;
                return as.isValid = function() {
                    return this._isValid
                }
                ,
                as.abs = function() {
                    var e = this._data;
                    return this._milliseconds = vt(this._milliseconds),
                    this._days = vt(this._days),
                    this._months = vt(this._months),
                    e.milliseconds = vt(e.milliseconds),
                    e.seconds = vt(e.seconds),
                    e.minutes = vt(e.minutes),
                    e.hours = vt(e.hours),
                    e.months = vt(e.months),
                    e.years = vt(e.years),
                    this
                }
                ,
                as.add = function(e, a) {
                    return bt(this, e, a, 1)
                }
                ,
                as.subtract = function(e, a) {
                    return bt(this, e, a, -1)
                }
                ,
                as.as = function(e) {
                    if (!this.isValid())
                        return NaN;
                    var a, t, s = this._milliseconds;
                    if ("month" === (e = R(e)) || "quarter" === e || "year" === e)
                        switch (a = this._days + s / 864e5,
                        t = this._months + Ht(a),
                        e) {
                        case "month":
                            return t;
                        case "quarter":
                            return t / 3;
                        case "year":
                            return t / 12
                        }
                    else
                        switch (a = this._days + Math.round(jt(this._months)),
                        e) {
                        case "week":
                            return a / 7 + s / 6048e5;
                        case "day":
                            return a + s / 864e5;
                        case "hour":
                            return 24 * a + s / 36e5;
                        case "minute":
                            return 1440 * a + s / 6e4;
                        case "second":
                            return 86400 * a + s / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * a) + s;
                        default:
                            throw new Error("Unknown unit " + e)
                        }
                }
                ,
                as.asMilliseconds = Pt,
                as.asSeconds = Ot,
                as.asMinutes = Wt,
                as.asHours = At,
                as.asDays = Et,
                as.asWeeks = Ft,
                as.asMonths = zt,
                as.asQuarters = Nt,
                as.asYears = Jt,
                as.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * B(this._months / 12) : NaN
                }
                ,
                as._bubble = function() {
                    var e, a, t, s, n, r = this._milliseconds, i = this._days, d = this._months, _ = this._data;
                    return r >= 0 && i >= 0 && d >= 0 || r <= 0 && i <= 0 && d <= 0 || (r += 864e5 * St(jt(d) + i),
                    i = 0,
                    d = 0),
                    _.milliseconds = r % 1e3,
                    e = V(r / 1e3),
                    _.seconds = e % 60,
                    a = V(e / 60),
                    _.minutes = a % 60,
                    t = V(a / 60),
                    _.hours = t % 24,
                    i += V(t / 24),
                    d += n = V(Ht(i)),
                    i -= St(jt(n)),
                    s = V(d / 12),
                    d %= 12,
                    _.days = i,
                    _.months = d,
                    _.years = s,
                    this
                }
                ,
                as.clone = function() {
                    return Ca(this)
                }
                ,
                as.get = function(e) {
                    return e = R(e),
                    this.isValid() ? this[e + "s"]() : NaN
                }
                ,
                as.milliseconds = Ct,
                as.seconds = It,
                as.minutes = Ut,
                as.hours = Gt,
                as.days = Vt,
                as.weeks = function() {
                    return V(this.days() / 7)
                }
                ,
                as.months = Bt,
                as.years = Kt,
                as.humanize = function(e, a) {
                    if (!this.isValid())
                        return this.localeData().invalidDate();
                    var t, s, n = !1, r = Zt;
                    return "object" == typeof e && (a = e,
                    e = !1),
                    "boolean" == typeof e && (n = e),
                    "object" == typeof a && (r = Object.assign({}, Zt, a),
                    null != a.s && null == a.ss && (r.ss = a.s - 1)),
                    s = function(e, a, t, s) {
                        var n = Ca(e).abs()
                          , r = qt(n.as("s"))
                          , i = qt(n.as("m"))
                          , d = qt(n.as("h"))
                          , _ = qt(n.as("d"))
                          , o = qt(n.as("M"))
                          , u = qt(n.as("w"))
                          , m = qt(n.as("y"))
                          , l = r <= t.ss && ["s", r] || r < t.s && ["ss", r] || i <= 1 && ["m"] || i < t.m && ["mm", i] || d <= 1 && ["h"] || d < t.h && ["hh", d] || _ <= 1 && ["d"] || _ < t.d && ["dd", _];
                        return null != t.w && (l = l || u <= 1 && ["w"] || u < t.w && ["ww", u]),
                        (l = l || o <= 1 && ["M"] || o < t.M && ["MM", o] || m <= 1 && ["y"] || ["yy", m])[2] = a,
                        l[3] = +e > 0,
                        l[4] = s,
                        $t.apply(null, l)
                    }(this, !n, r, t = this.localeData()),
                    n && (s = t.pastFuture(+this, s)),
                    t.postformat(s)
                }
                ,
                as.toISOString = es,
                as.toString = es,
                as.toJSON = es,
                as.locale = Xa,
                as.localeData = at,
                as.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", es),
                as.lang = et,
                E("X", 0, 0, "unix"),
                E("x", 0, 0, "valueOf"),
                he("x", ue),
                he("X", /[+-]?\d+(\.\d{1,3})?/),
                ye("X", (function(e, a, t) {
                    t._d = new Date(1e3 * parseFloat(e))
                }
                )),
                ye("x", (function(e, a, t) {
                    t._d = new Date(B(e))
                }
                )),
                n.version = "2.29.4",
                a = va,
                n.fn = pt,
                n.min = function() {
                    return Ha("isBefore", [].slice.call(arguments, 0))
                }
                ,
                n.max = function() {
                    return Ha("isAfter", [].slice.call(arguments, 0))
                }
                ,
                n.now = function() {
                    return Date.now ? Date.now() : +new Date
                }
                ,
                n.utc = h,
                n.unix = function(e) {
                    return va(1e3 * e)
                }
                ,
                n.months = function(e, a) {
                    return Tt(e, a, "months")
                }
                ,
                n.isDate = m,
                n.locale = ia,
                n.invalid = Y,
                n.duration = Ca,
                n.isMoment = D,
                n.weekdays = function(e, a, t) {
                    return wt(e, a, t, "weekdays")
                }
                ,
                n.parseZone = function() {
                    return va.apply(null, arguments).parseZone()
                }
                ,
                n.localeData = _a,
                n.isDuration = Pa,
                n.monthsShort = function(e, a) {
                    return Tt(e, a, "monthsShort")
                }
                ,
                n.weekdaysMin = function(e, a, t) {
                    return wt(e, a, t, "weekdaysMin")
                }
                ,
                n.defineLocale = da,
                n.updateLocale = function(e, a) {
                    if (null != a) {
                        var t, s, n = ea;
                        null != aa[e] && null != aa[e].parentLocale ? aa[e].set(H(aa[e]._config, a)) : (null != (s = ra(e)) && (n = s._config),
                        a = H(n, a),
                        null == s && (a.abbr = e),
                        (t = new j(a)).parentLocale = aa[e],
                        aa[e] = t),
                        ia(e)
                    } else
                        null != aa[e] && (null != aa[e].parentLocale ? (aa[e] = aa[e].parentLocale,
                        e === ia() && ia(e)) : null != aa[e] && delete aa[e]);
                    return aa[e]
                }
                ,
                n.locales = function() {
                    return w(aa)
                }
                ,
                n.weekdaysShort = function(e, a, t) {
                    return wt(e, a, t, "weekdaysShort")
                }
                ,
                n.normalizeUnits = R,
                n.relativeTimeRounding = function(e) {
                    return void 0 === e ? qt : "function" == typeof e && (qt = e,
                    !0)
                }
                ,
                n.relativeTimeThreshold = function(e, a) {
                    return void 0 !== Zt[e] && (void 0 === a ? Zt[e] : (Zt[e] = a,
                    "s" === e && (Zt.ss = a - 1),
                    !0))
                }
                ,
                n.calendarFormat = function(e, a) {
                    var t = e.diff(a, "days", !0);
                    return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
                }
                ,
                n.prototype = pt,
                n.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                },
                n
            }()
        }
    }
      , a = {};
    function t(s) {
        var n = a[s];
        if (void 0 !== n)
            return n.exports;
        var r = a[s] = {
            id: s,
            loaded: !1,
            exports: {}
        };
        return e[s].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(a, {
            a: a
        }),
        a
    }
    ,
    t.d = function(e, a) {
        for (var s in a)
            t.o(a, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: a[s]
            })
    }
    ,
    t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ;
    var s = {};
    !function() {
        "use strict";
        t.r(s),
        t.d(s, {
            moment: function() {
                return e
            }
        });
        var e = t(381)
    }();
    var n = window;
    for (var r in s)
        n[r] = s[r];
    s.__esModule && Object.defineProperty(n, "__esModule", {
        value: !0
    })
}();
