import U from "react";
import he from "@mui/material/Divider";
import pe from "@mui/material/IconButton";
import ge from "@mui/material/InputAdornment";
import Ce from "@mui/material/Menu";
import be from "@mui/material/NativeSelect";
import ye from "@mui/material/TextField";
import * as de from "country-flag-icons/react/3x2";
import { some as te, startsWith as k, memoize as ne, find as R, trim as ve, reduce as ie, filter as $, findIndex as oe, debounce as Se, includes as Ee, tail as Te, head as ke, isString as Re, map as A } from "lodash";
import we from "@mui/material/MenuItem";
var j = { exports: {} }, _ = {};
var se;
function xe() {
  if (se) return _;
  se = 1;
  var S = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(n, i, t) {
    var o = null;
    if (t !== void 0 && (o = "" + t), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      t = {};
      for (var s in i)
        s !== "key" && (t[s] = i[s]);
    } else t = i;
    return i = t.ref, {
      $$typeof: S,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: t
    };
  }
  return _.Fragment = e, _.jsx = r, _.jsxs = r, _;
}
var N = {};
var le;
function _e() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function S(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === z ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case E:
          return "Fragment";
        case Y:
          return "Profiler";
        case V:
          return "StrictMode";
        case H:
          return "Suspense";
        case J:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case g:
            return "Portal";
          case K:
            return a.displayName || "Context";
          case q:
            return (a._context.displayName || "Context") + ".Consumer";
          case W:
            var c = a.render;
            return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case Z:
            return c = a.displayName || null, c !== null ? c : S(a.type) || "Memo";
          case w:
            c = a._payload, a = a._init;
            try {
              return S(a(c));
            } catch {
            }
        }
      return null;
    }
    function e(a) {
      return "" + a;
    }
    function r(a) {
      try {
        e(a);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var f = c.error, C = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return f.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), e(a);
      }
    }
    function n(a) {
      if (a === E) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === w)
        return "<...>";
      try {
        var c = S(a);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var a = x.A;
      return a === null ? null : a.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function o(a) {
      if (I.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function s(a, c) {
      function f() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: f,
        configurable: !0
      });
    }
    function u() {
      var a = S(this.type);
      return Q[a] || (Q[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function d(a, c, f, C, P, F) {
      var b = f.ref;
      return a = {
        $$typeof: h,
        type: a,
        key: c,
        props: f,
        _owner: C
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, c, f, C, P, F) {
      var b = c.children;
      if (b !== void 0)
        if (C)
          if (me(b)) {
            for (C = 0; C < b.length; C++)
              p(b[C]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(b);
      if (I.call(c, "key")) {
        b = S(a);
        var T = Object.keys(c).filter(function(fe) {
          return fe !== "key";
        });
        C = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", re[b + C] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          b,
          T,
          b
        ), re[b + C] = !0);
      }
      if (b = null, f !== void 0 && (r(f), b = "" + f), o(c) && (r(c.key), b = "" + c.key), "key" in c) {
        f = {};
        for (var B in c)
          B !== "key" && (f[B] = c[B]);
      } else f = c;
      return b && s(
        f,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), d(
        a,
        b,
        f,
        i(),
        P,
        F
      );
    }
    function p(a) {
      v(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === w && (a._payload.status === "fulfilled" ? v(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function v(a) {
      return typeof a == "object" && a !== null && a.$$typeof === h;
    }
    var l = U, h = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), K = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.activity"), z = /* @__PURE__ */ Symbol.for("react.client.reference"), x = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, me = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var X, Q = {}, ee = l.react_stack_bottom_frame.bind(
      l,
      t
    )(), ae = M(n(t)), re = {};
    N.Fragment = E, N.jsx = function(a, c, f) {
      var C = 1e4 > x.recentlyCreatedOwnerStacks++;
      return m(
        a,
        c,
        f,
        !1,
        C ? Error("react-stack-top-frame") : ee,
        C ? M(n(a)) : ae
      );
    }, N.jsxs = function(a, c, f) {
      var C = 1e4 > x.recentlyCreatedOwnerStacks++;
      return m(
        a,
        c,
        f,
        !0,
        C ? Error("react-stack-top-frame") : ee,
        C ? M(n(a)) : ae
      );
    };
  })()), N;
}
var ue;
function Ne() {
  return ue || (ue = 1, process.env.NODE_ENV === "production" ? j.exports = xe() : j.exports = _e()), j.exports;
}
var y = Ne();
const Ie = [
  ["Afghanistan", ["asia"], "af", "93"],
  ["Albania", ["europe"], "al", "355"],
  ["Algeria", ["africa", "north-africa"], "dz", "213"],
  ["American Samoa", ["oceania"], "as", "1684"],
  ["Andorra", ["europe"], "ad", "376"],
  ["Angola", ["africa"], "ao", "244"],
  ["Anguilla", ["america", "carribean"], "ai", "1264"],
  ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"],
  ["Argentina", ["america", "south-america"], "ar", "54", "+.. (..) ........"],
  ["Armenia", ["asia", "ex-ussr"], "am", "374"],
  ["Aruba", ["america", "carribean"], "aw", "297"],
  ["Australia", ["oceania"], "au", "61", "+.. ... ... ..."],
  ["Austria", ["europe", "european-union"], "at", "43"],
  ["Azerbaijan", ["asia", "ex-ussr"], "az", "994"],
  ["Bahamas", ["america", "carribean"], "bs", "1242"],
  ["Bahrain", ["middle-east"], "bh", "973"],
  ["Bangladesh", ["asia"], "bd", "880"],
  ["Barbados", ["america", "carribean"], "bb", "1246"],
  ["Belarus", ["europe", "ex-ussr"], "by", "375", "+... (..) ... .. .."],
  ["Belgium", ["europe", "european-union"], "be", "32", "+.. ... .. .. .."],
  ["Belize", ["america", "central-america"], "bz", "501"],
  ["Benin", ["africa"], "bj", "229", "+... .... ...."],
  ["Bermuda", ["america", "north-america"], "bm", "1441"],
  ["Bhutan", ["asia"], "bt", "975"],
  ["Bolivia", ["america", "south-america"], "bo", "591"],
  ["Bosnia and Herzegovina", ["europe"], "ba", "387"],
  ["Botswana", ["africa"], "bw", "267"],
  ["Brazil", ["america", "south-america"], "br", "55", "+.. (..) ........."],
  ["British Indian Ocean Territory", ["asia"], "io", "246"],
  ["British Virgin Islands", ["america", "carribean"], "vg", "1284"],
  ["Brunei", ["asia"], "bn", "673"],
  ["Bulgaria", ["europe", "european-union"], "bg", "359"],
  ["Burkina Faso", ["africa"], "bf", "226", "+... .. .. .. .."],
  ["Burundi", ["africa"], "bi", "257", "+... .. .. .. .."],
  ["Cambodia", ["asia"], "kh", "855"],
  ["Cameroon", ["africa"], "cm", "237"],
  [
    "Canada",
    ["america", "north-america"],
    "ca",
    "1",
    "+. (...) ...-....",
    1,
    [
      "204",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ]
  ],
  ["Cape Verde", ["africa"], "cv", "238", "+... ... .. .."],
  ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1],
  ["Cayman Islands", ["america", "carribean"], "ky", "1345"],
  ["Central African Republic", ["africa"], "cf", "236", "+... .... ...."],
  ["Chad", ["africa"], "td", "235", "+... .. .. .. .."],
  ["Chile", ["america", "south-america"], "cl", "56"],
  ["China", ["asia"], "cn", "86", "+.. ..-........."],
  ["Colombia", ["america", "south-america"], "co", "57"],
  ["Comoros", ["africa"], "km", "269", "+... ... ...."],
  ["Congo", ["africa"], "cd", "243"],
  ["Congo", ["africa"], "cg", "242", "+... .. .. ....."],
  ["Cook Islands", ["oceania"], "ck", "682"],
  ["Costa Rica", ["america", "central-america"], "cr", "506", "+... ....-...."],
  ["Côte d’Ivoire", ["africa"], "ci", "225", "+... .. .. .. .."],
  ["Croatia", ["europe", "european-union"], "hr", "385"],
  ["Cuba", ["america", "carribean"], "cu", "53"],
  ["Curaçao", ["america", "carribean"], "cw", "599", "", 0],
  ["Cyprus", ["europe", "european-union"], "cy", "357", "+... .. ......"],
  ["Czech Republic", ["europe", "european-union"], "cz", "420"],
  ["Denmark", ["europe", "european-union"], "dk", "45", "+.. .. .. .. .."],
  ["Djibouti", ["africa"], "dj", "253"],
  ["Dominica", ["america", "carribean"], "dm", "1767"],
  [
    "Dominican Republic",
    ["america", "carribean"],
    "do",
    "1",
    "",
    2,
    ["809", "829", "849"]
  ],
  ["Ecuador", ["america", "south-america"], "ec", "593"],
  ["Egypt", ["africa", "north-africa"], "eg", "20"],
  [
    "El Salvador",
    ["america", "central-america"],
    "sv",
    "503",
    "+... ....-...."
  ],
  ["Equatorial Guinea", ["africa"], "gq", "240", "+... .. ... ...."],
  ["Eritrea", ["africa"], "er", "291"],
  [
    "Estonia",
    ["europe", "european-union", "ex-ussr"],
    "ee",
    "372",
    "+... .... ......"
  ],
  ["Ethiopia", ["africa"], "et", "251"],
  ["Falkland Islands", ["america", "south-america"], "fk", "500"],
  ["Faroe Islands", ["europe"], "fo", "298"],
  ["Fiji", ["oceania"], "fj", "679"],
  ["Finland", ["europe", "european-union"], "fi", "358", "+... .. ... .. .."],
  ["France", ["europe", "european-union"], "fr", "33", "+.. . .. .. .. .."],
  ["French Guiana", ["america", "south-america"], "gf", "594"],
  ["French Polynesia", ["oceania"], "pf", "689"],
  ["Gabon", ["africa"], "ga", "241", "+... .. .. .. .."],
  ["Gambia", ["africa"], "gm", "220"],
  ["Georgia", ["asia", "ex-ussr"], "ge", "995"],
  ["Germany", ["europe", "european-union"], "de", "49", "+.. .... ........"],
  ["Ghana", ["africa"], "gh", "233"],
  ["Gibraltar", ["europe"], "gi", "350"],
  ["Greece", ["europe", "european-union"], "gr", "30"],
  ["Greenland", ["america"], "gl", "299"],
  ["Grenada", ["america", "carribean"], "gd", "1473"],
  ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0],
  ["Guam", ["oceania"], "gu", "1671"],
  ["Guatemala", ["america", "central-america"], "gt", "502", "+... ....-...."],
  ["Guinea", ["africa"], "gn", "224", "+... . ... ...."],
  ["Guinea-Bissau", ["africa"], "gw", "245"],
  ["Guyana", ["america", "south-america"], "gy", "592"],
  ["Haiti", ["america", "carribean"], "ht", "509", "+... ....-...."],
  ["Honduras", ["america", "central-america"], "hn", "504"],
  ["Hong Kong", ["asia"], "hk", "852", "+... .... ...."],
  ["Hungary", ["europe", "european-union"], "hu", "36"],
  ["Iceland", ["europe"], "is", "354", "+... ... ...."],
  ["India", ["asia"], "in", "91", "+.. .....-....."],
  ["Indonesia", ["asia"], "id", "62"],
  ["Iran", ["middle-east"], "ir", "98"],
  ["Iraq", ["middle-east"], "iq", "964"],
  ["Ireland", ["europe", "european-union"], "ie", "353", "+... .. ......."],
  ["Israel", ["middle-east"], "il", "972", "+... ... ... ...."],
  ["Italy", ["europe", "european-union"], "it", "39", "+.. ... .......", 0],
  ["Jamaica", ["america", "carribean"], "jm", "1876"],
  ["Japan", ["asia"], "jp", "81", "+.. .. .... ...."],
  ["Jordan", ["middle-east"], "jo", "962"],
  [
    "Kazakhstan",
    ["asia", "ex-ussr"],
    "kz",
    "7",
    "+. ... ...-..-..",
    1,
    [
      "313",
      "327",
      "7172",
      "312",
      "73622",
      "321",
      "324",
      "336",
      "318",
      "315",
      "325",
      "311",
      "326",
      "310"
    ]
  ],
  ["Kenya", ["africa"], "ke", "254"],
  ["Kiribati", ["oceania"], "ki", "686"],
  ["Kosovo", ["europe"], "xk", "383"],
  ["Kuwait", ["middle-east"], "kw", "965"],
  ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996"],
  ["Laos", ["asia"], "la", "856"],
  ["Latvia", ["europe", "european-union", "ex-ussr"], "lv", "371"],
  ["Lebanon", ["middle-east"], "lb", "961"],
  ["Lesotho", ["africa"], "ls", "266"],
  ["Liberia", ["africa"], "lr", "231"],
  ["Libya", ["africa", "north-africa"], "ly", "218"],
  ["Liechtenstein", ["europe"], "li", "423"],
  ["Lithuania", ["europe", "european-union", "ex-ussr"], "lt", "370"],
  [
    "Luxembourg",
    ["europe", "european-union"],
    "lu",
    "352",
    "+.. . ... ... ..."
  ],
  ["Macau", ["asia"], "mo", "853"],
  ["Macedonia", ["europe"], "mk", "389"],
  ["Madagascar", ["africa"], "mg", "261", "+... .. . ......"],
  ["Malawi", ["africa"], "mw", "265"],
  ["Malaysia", ["asia"], "my", "60", "+.. ..-....-...."],
  ["Maldives", ["asia"], "mv", "960"],
  ["Mali", ["africa"], "ml", "223", "+... .... ...."],
  ["Malta", ["europe", "european-union"], "mt", "356"],
  ["Marshall Islands", ["oceania"], "mh", "692"],
  ["Martinique", ["america", "carribean"], "mq", "596"],
  ["Mauritania", ["africa"], "mr", "222", "+... .... ...."],
  ["Mauritius", ["africa"], "mu", "230", "+... . ... ...."],
  ["Mexico", ["america", "central-america"], "mx", "52"],
  ["Micronesia", ["oceania"], "fm", "691"],
  ["Moldova", ["europe"], "md", "373", "+... (..) ..-..-.."],
  ["Monaco", ["europe"], "mc", "377"],
  ["Mongolia", ["asia"], "mn", "976"],
  ["Montenegro", ["europe"], "me", "382"],
  ["Montserrat", ["america", "carribean"], "ms", "1664"],
  ["Morocco", ["africa", "north-africa"], "ma", "212", "+212-........."],
  ["Mozambique", ["africa"], "mz", "258", "+... ... ......"],
  ["Myanmar", ["asia"], "mm", "95"],
  ["Namibia", ["africa"], "na", "264"],
  ["Nauru", ["africa"], "nr", "674"],
  ["Nepal", ["asia"], "np", "977"],
  ["Netherlands", ["europe", "european-union"], "nl", "31", "+.. .. ........"],
  ["New Caledonia", ["oceania"], "nc", "687"],
  ["New Zealand", ["oceania"], "nz", "64", "+.. ...-...-...."],
  ["Nicaragua", ["america", "central-america"], "ni", "505"],
  ["Niger", ["africa"], "ne", "227", "+... .. .. .. .."],
  ["Nigeria", ["africa"], "ng", "234"],
  ["Niue", ["asia"], "nu", "683"],
  ["Norfolk Island", ["oceania"], "nf", "672"],
  ["North Korea", ["asia"], "kp", "850"],
  ["Northern Mariana Islands", ["oceania"], "mp", "1670"],
  ["Norway", ["europe"], "no", "47", "+.. ... .. ..."],
  ["Oman", ["middle-east"], "om", "968"],
  ["Pakistan", ["asia"], "pk", "92", "+.. ...-......."],
  ["Palau", ["oceania"], "pw", "680"],
  ["Palestine", ["middle-east"], "ps", "970"],
  ["Panama", ["america", "central-america"], "pa", "507"],
  ["Papua New Guinea", ["oceania"], "pg", "675"],
  ["Paraguay", ["america", "south-america"], "py", "595"],
  ["Peru", ["america", "south-america"], "pe", "51"],
  ["Philippines", ["asia"], "ph", "63", "+.. .... ......."],
  ["Poland", ["europe", "european-union"], "pl", "48", "+.. ...-...-..."],
  ["Portugal", ["europe", "european-union"], "pt", "351"],
  ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]],
  ["Qatar", ["middle-east"], "qa", "974"],
  ["Réunion", ["africa"], "re", "262", "+.. . .. .. .. .."],
  ["Romania", ["europe", "european-union"], "ro", "40"],
  ["Russia", ["europe", "asia", "ex-ussr"], "ru", "7", "+. (...) ...-..-..", 0],
  ["Rwanda", ["africa"], "rw", "250", "+... ... ... ..."],
  ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1],
  ["Saint Helena", ["africa"], "sh", "290"],
  ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"],
  ["Saint Lucia", ["america", "carribean"], "lc", "1758"],
  ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2],
  ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"],
  ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"],
  ["Samoa", ["oceania"], "ws", "685"],
  ["San Marino", ["europe"], "sm", "378"],
  ["São Tomé and Príncipe", ["africa"], "st", "239", "+... ... ...."],
  ["Saudi Arabia", ["middle-east"], "sa", "966"],
  ["Senegal", ["africa"], "sn", "221", "+... .. ... .. .."],
  ["Serbia", ["europe"], "rs", "381"],
  [
    "Seychelles",
    ["africa"],
    "sc",
    "248",
    "+... ... ...."
    // from https://en.wikipedia.org/wiki/Telephone_numbers_in_Seychelles
  ],
  ["Sierra Leone", ["africa"], "sl", "232"],
  ["Singapore", ["asia"], "sg", "65", "+.. ....-...."],
  ["Sint Maarten", ["america", "carribean"], "sx", "1721"],
  ["Slovakia", ["europe", "european-union"], "sk", "421"],
  ["Slovenia", ["europe", "european-union"], "si", "386"],
  ["Solomon Islands", ["oceania"], "sb", "677"],
  ["Somalia", ["africa"], "so", "252"],
  ["South Africa", ["africa"], "za", "27", "+.. .. ... ...."],
  ["South Korea", ["asia"], "kr", "82", "+.. ... .... ...."],
  ["South Sudan", ["africa", "north-africa"], "ss", "211"],
  ["Spain", ["europe", "european-union"], "es", "34", "+.. ... ... ..."],
  ["Sri Lanka", ["asia"], "lk", "94"],
  ["Sudan", ["africa"], "sd", "249"],
  ["Suriname", ["america", "south-america"], "sr", "597"],
  ["Swaziland", ["africa"], "sz", "268"],
  ["Sweden", ["europe", "european-union"], "se", "46", "+.. (..) ...-..-.."],
  ["Switzerland", ["europe"], "ch", "41", "+.. .. ... .. .."],
  ["Syria", ["middle-east"], "sy", "963"],
  ["Taiwan", ["asia"], "tw", "886"],
  ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"],
  ["Tanzania", ["africa"], "tz", "255"],
  ["Thailand", ["asia"], "th", "66"],
  ["Timor-Leste", ["asia"], "tl", "670"],
  ["Togo", ["africa"], "tg", "228", "+... ... ....."],
  ["Tokelau", ["oceania"], "tk", "690"],
  ["Tonga", ["oceania"], "to", "676"],
  ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"],
  ["Tunisia", ["africa", "north-africa"], "tn", "216", "+... .. ... ..."],
  ["Turkey", ["europe"], "tr", "90", "+.. ... ... .. .."],
  ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"],
  ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"],
  ["Tuvalu", ["asia"], "tv", "688"],
  ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"],
  ["Uganda", ["africa"], "ug", "256"],
  ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "+... (..) ... .. .."],
  ["United Arab Emirates", ["middle-east"], "ae", "971"],
  [
    "United Kingdom",
    ["europe", "european-union"],
    "gb",
    "44",
    "+.. .... ......"
  ],
  [
    "United States",
    ["america", "north-america"],
    "us",
    "1",
    "+. (...) ...-....",
    0,
    [
      "907",
      "205",
      "251",
      "256",
      "334",
      "479",
      "501",
      "870",
      "480",
      "520",
      "602",
      "623",
      "928",
      "209",
      "213",
      "310",
      "323",
      "408",
      "415",
      "510",
      "530",
      "559",
      "562",
      "619",
      "626",
      "650",
      "661",
      "707",
      "714",
      "760",
      "805",
      "818",
      "831",
      "858",
      "909",
      "916",
      "925",
      "949",
      "951",
      "303",
      "719",
      "970",
      "203",
      "860",
      "202",
      "302",
      "239",
      "305",
      "321",
      "352",
      "386",
      "407",
      "561",
      "727",
      "772",
      "813",
      "850",
      "863",
      "904",
      "941",
      "954",
      "229",
      "404",
      "478",
      "706",
      "770",
      "912",
      "808",
      "319",
      "515",
      "563",
      "641",
      "712",
      "208",
      "217",
      "309",
      "312",
      "618",
      "630",
      "708",
      "773",
      "815",
      "847",
      "219",
      "260",
      "317",
      "574",
      "765",
      "812",
      "316",
      "620",
      "785",
      "913",
      "270",
      "502",
      "606",
      "859",
      "225",
      "318",
      "337",
      "504",
      "985",
      "413",
      "508",
      "617",
      "781",
      "978",
      "301",
      "410",
      "207",
      "231",
      "248",
      "269",
      "313",
      "517",
      "586",
      "616",
      "734",
      "810",
      "906",
      "989",
      "218",
      "320",
      "507",
      "612",
      "651",
      "763",
      "952",
      "314",
      "417",
      "573",
      "636",
      "660",
      "816",
      "228",
      "601",
      "662",
      "406",
      "252",
      "336",
      "704",
      "828",
      "910",
      "919",
      "701",
      "308",
      "402",
      "603",
      "201",
      "609",
      "732",
      "856",
      "908",
      "973",
      "505",
      "575",
      "702",
      "775",
      "212",
      "315",
      "516",
      "518",
      "585",
      "607",
      "631",
      "716",
      "718",
      "845",
      "914",
      "216",
      "330",
      "419",
      "440",
      "513",
      "614",
      "740",
      "937",
      "405",
      "580",
      "918",
      "503",
      "541",
      "215",
      "412",
      "570",
      "610",
      "717",
      "724",
      "814",
      "401",
      "803",
      "843",
      "864",
      "605",
      "423",
      "615",
      "731",
      "865",
      "901",
      "931",
      "210",
      "214",
      "254",
      "281",
      "325",
      "361",
      "409",
      "432",
      "512",
      "713",
      "806",
      "817",
      "830",
      "903",
      "915",
      "936",
      "940",
      "956",
      "972",
      "979",
      "435",
      "801",
      "276",
      "434",
      "540",
      "703",
      "757",
      "804",
      "802",
      "206",
      "253",
      "360",
      "425",
      "509",
      "262",
      "414",
      "608",
      "715",
      "920",
      "304",
      "307"
    ]
  ],
  ["Uruguay", ["america", "south-america"], "uy", "598"],
  ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998"],
  ["Vanuatu", ["oceania"], "vu", "678"],
  ["Vatican City", ["europe"], "va", "39", "+.. .. .... ....", 1],
  ["Venezuela", ["america", "south-america"], "ve", "58"],
  ["Vietnam", ["asia"], "vn", "84"],
  ["Wallis and Futuna", ["oceania"], "wf", "681"],
  ["Yemen", ["middle-east"], "ye", "967"],
  ["Zambia", ["africa"], "zm", "260"],
  ["Zimbabwe", ["africa"], "zw", "263"]
], L = {};
function ce(S, e, r) {
  e in L || (L[e] = []);
  const n = r || 0;
  L[e][n] = S;
}
const Pe = [].concat(
  ...Ie.map((S) => {
    const [e, r, n, i, t, o, s] = S, u = {
      name: e,
      regions: r,
      iso2: n,
      dialCode: i,
      priority: o || 0,
      format: t || void 0,
      hasAreaCodes: !!s
    }, d = [];
    return u.hasAreaCodes && s && s.forEach((m) => {
      const p = {
        ...u,
        regions: r,
        dialCode: `${i}${m}`,
        isAreaCode: !0
      };
      d.push(p), ce(n, p.dialCode);
    }), ce(
      u.iso2,
      u.dialCode,
      u.hasAreaCodes ? 1 : 0
    ), d.length > 0 ? [u, ...d] : [u];
  })
), G = {
  allCountries: Pe
};
class D extends U.PureComponent {
  static defaultProps = {
    localization: null,
    native: !1
  };
  render() {
    const {
      name: e,
      iso2: r,
      dialCode: n,
      localization: i,
      itemRef: t,
      native: o,
      ...s
    } = this.props;
    if (o)
      return /* @__PURE__ */ y.jsxs(
        "option",
        {
          className: "country",
          "data-dial-code": "1",
          "data-country-code": r,
          value: r,
          ...s,
          onClick: s.onClick,
          children: [
            i || e,
            " ",
            `+${n}`
          ]
        }
      );
    const u = de[r.toUpperCase()];
    return /* @__PURE__ */ y.jsxs(
      we,
      {
        ref: t,
        className: "country",
        "data-dial-code": "1",
        "data-country-code": r,
        ...s,
        children: [
          !!u && /* @__PURE__ */ y.jsx(
            "div",
            {
              className: s.className,
              style: { width: 30, height: 24, paddingRight: 8 },
              children: /* @__PURE__ */ y.jsx(u, {})
            }
          ),
          /* @__PURE__ */ y.jsx("span", { className: "country-name", children: i || e }),
          /* @__PURE__ */ y.jsx("span", { className: "dial-code", children: `+${n}` })
        ]
      }
    );
  }
}
class Le extends U.Component {
  static defaultProps = {
    excludeCountries: [],
    onlyCountries: [],
    preferredCountries: [],
    defaultCountry: "",
    placeholder: "+1 (702) 123-4567",
    disabled: !1,
    error: !1,
    variant: "standard",
    native: !1,
    inputClass: "",
    dropdownClass: "",
    autoFormat: !0,
    disableAreaCodes: !1,
    isValid: (e) => te(
      G.allCountries,
      (r) => k(e, r.dialCode) || k(r.dialCode, e)
    ),
    disableCountryCode: !1,
    disableDropdown: !1,
    enableLongNumbers: !1,
    countryCodeEditable: !0,
    regions: "",
    localization: {},
    onEnterKeyPress: () => {
    },
    onChange: () => {
    },
    isModernBrowser: () => document.createElement ? !!document.createElement("input").setSelectionRange : !1,
    keys: {
      UP: 38,
      DOWN: 40,
      RIGHT: 39,
      LEFT: 37,
      ENTER: 13,
      ESC: 27,
      PLUS: 43,
      A: 65,
      Z: 90,
      SPACE: 32
    }
  };
  static displayName = "MuiPhoneNumber";
  flags = {};
  inputRef = null;
  dropdownContainerRef = null;
  guessSelectedCountry = ne(
    (e, r, n) => {
      const i = R(r, { iso2: n }) || {};
      if (ve(e) === "") return i;
      const t = ie(
        r,
        (o, s) => k(e, s.dialCode) && (s.dialCode.length > o.dialCode.length || s.dialCode.length === o.dialCode.length && s.priority < o.priority) ? s : o,
        { dialCode: "", priority: 10001 }
      );
      return t.name ? t : i;
    }
  );
  constructor(e) {
    super(e);
    let r = G.allCountries;
    e.disableAreaCodes && (r = this.deleteAreaCodes(r)), e.regions && (r = this.filterRegions(e.regions, r));
    const n = this.excludeCountries(
      this.getOnlyCountries(e.onlyCountries || [], r),
      e.excludeCountries || []
    ), i = $(
      r,
      (m) => te(
        e.preferredCountries,
        (p) => p === m.iso2
      )
    ), t = e.value || "";
    let o;
    t.length > 1 ? o = this.guessSelectedCountry(
      t.replace(/\D/g, "").substring(0, 6),
      n,
      e.defaultCountry || ""
    ) || {} : e.defaultCountry && (o = R(n, { iso2: e.defaultCountry })), (!o || !o.dialCode) && (o = { dialCode: "", priority: 10001 });
    const s = oe(G.allCountries, o), u = t.length < 2 && o && o.dialCode && !k(t.replace(/\D/g, ""), o.dialCode) ? o.dialCode : "", d = t === "" && (!o || !o.name) ? "" : this.formatNumber(
      (e.disableCountryCode ? "" : u) + t.replace(/\D/g, ""),
      o.name ? o.format : void 0
    );
    this.state = {
      formattedNumber: d,
      placeholder: e.placeholder || "",
      onlyCountries: n,
      preferredCountries: i,
      defaultCountry: e.defaultCountry || "",
      selectedCountry: o,
      highlightCountryIndex: s,
      queryString: "",
      freezeSelection: !1,
      debouncedQueryStingSearcher: Se(this.searchCountry, 100),
      anchorEl: null
    };
  }
  componentDidMount() {
    document.addEventListener && document.addEventListener("keydown", this.handleKeydown);
  }
  componentDidUpdate(e) {
    const { defaultCountry: r, formattedNumber: n } = this.state, { defaultCountry: i, value: t } = this.props;
    i && i !== r && this.updateDefaultCountry(i), typeof t == "string" && t !== e.value && t !== n && this.updateFormattedNumber(t);
  }
  componentWillUnmount() {
    document.removeEventListener && document.removeEventListener("keydown", this.handleKeydown);
  }
  getProbableCandidate = ne((e) => {
    if (!e || e.length === 0)
      return null;
    const { onlyCountries: r } = this.state;
    return $(
      r,
      (i) => k(i.name.toLowerCase(), e.toLowerCase())
    )[0];
  });
  getOnlyCountries = (e, r) => e.length === 0 ? r : r.filter(
    (n) => e.some((i) => i === n.iso2)
  );
  excludeCountries = (e, r) => r.length === 0 ? e : $(
    e,
    (n) => !Ee(r, n.iso2)
  );
  filterRegions = (e, r) => {
    if (typeof e == "string") {
      const n = e;
      return r.filter(
        (i) => i.regions.some((t) => t === n)
      );
    }
    return r.filter((n) => e.map(
      (t) => n.regions.some((o) => o === t)
    ).some((t) => t));
  };
  // Countries array methods
  deleteAreaCodes = (e) => e.filter((r) => r.isAreaCode !== !0);
  // Hooks for updated props
  updateDefaultCountry = (e) => {
    const { onlyCountries: r } = this.state, { disableCountryCode: n } = this.props, i = R(r, { iso2: e }) || {};
    this.setState({
      defaultCountry: e,
      selectedCountry: i,
      formattedNumber: n ? "" : `+${i.dialCode}`
    });
  };
  // View methods
  scrollTo = (e) => {
    if (!e)
      return;
    const r = e.parentElement;
    !r || !document.body || (r.scrollTop = e.offsetTop);
  };
  formatNumber = (e, r) => {
    const { disableCountryCode: n, enableLongNumbers: i, autoFormat: t } = this.props;
    let o = "";
    if (n && r ? o = r.split(" ").slice(1).join(" ") : o = r, !e || e.length === 0)
      return n ? "" : "+";
    if (e && e.length < 2 || !o || !t)
      return n ? e : `+${e}`;
    const s = ie(
      o,
      (d, m) => d.remainingText.length === 0 ? d : m !== "." ? {
        formattedText: d.formattedText + m,
        remainingText: d.remainingText
      } : {
        formattedText: d.formattedText + ke(d.remainingText),
        remainingText: Te(d.remainingText)
      },
      {
        formattedText: "",
        remainingText: e.split("")
      }
    );
    let u = "";
    return i ? u = s.formattedText + s.remainingText.join("") : u = s.formattedText, u.includes("(") && !u.includes(")") && (u += ")"), u;
  };
  // Put the cursor to the end of the input (usually after a focus event)
  cursorToEnd = () => {
    const { isModernBrowser: e } = this.props, r = this.inputRef;
    if (r && (r.focus(), e && e())) {
      const n = r.value.length;
      r.setSelectionRange(n, n);
    }
  };
  getElement = (e) => this.flags[`flag_no_${e}`];
  // return country data from state
  getCountryData = () => {
    const { selectedCountry: e } = this.state;
    return e ? {
      name: e.name || "",
      dialCode: e.dialCode || "",
      countryCode: e.iso2 || ""
    } : {};
  };
  handleInput = (e) => {
    let { selectedCountry: r, freezeSelection: n } = this.state;
    const {
      selectedCountry: i,
      formattedNumber: t,
      onlyCountries: o,
      defaultCountry: s
    } = this.state, {
      disableCountryCode: u,
      countryCodeEditable: d,
      isModernBrowser: m,
      onChange: p
    } = this.props;
    let v = u ? "" : "+";
    if (!d) {
      const g = `+${r.dialCode}`;
      if (e.target.value.length < g.length)
        return;
    }
    if (e.target.value.replace(/\D/g, "").length > 15 || e.target.value === t)
      return;
    if (e.target.value.length > 0) {
      const g = e.target.value.replace(/\D/g, "");
      (!n || i.dialCode.length > g.length) && (r = this.guessSelectedCountry(
        g.substring(0, 6),
        o,
        s
      ), n = !1), v = this.formatNumber(
        g,
        r.format
      );
    }
    let l = e.target.selectionStart || 0;
    const h = v.length - t.length;
    this.setState(
      {
        formattedNumber: v,
        freezeSelection: n,
        selectedCountry: r.dialCode ? r : i
      },
      () => {
        m && m() && (h > 0 && (l -= h), v.charAt(v.length - 1) === ")" ? this.inputRef?.setSelectionRange(
          v.length - 1,
          v.length - 1
        ) : l > 0 && t.length >= v.length && this.inputRef?.setSelectionRange(l, l)), p && p(v, this.getCountryData());
      }
    );
  };
  handleRefInput = (e) => {
    const { inputRef: r, InputProps: n } = this.props;
    this.inputRef = e;
    let i;
    r ? i = r : n?.ref && (i = n.ref), i && (typeof i == "function" ? i(e) : i.current = e);
  };
  handleInputClick = (e) => {
    const { onClick: r } = this.props;
    r && r(e, this.getCountryData());
  };
  handleFlagItemClick = (e) => {
    const { formattedNumber: r, selectedCountry: n, onlyCountries: i } = this.state, { onChange: t } = this.props, o = n, s = Re(e) ? R(i, (p) => p.iso2 === e) : R(i, e);
    if (!s) return;
    const u = r.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), d = u.length > 1 ? u.replace(
      o.dialCode,
      s.dialCode
    ) : s.dialCode, m = this.formatNumber(
      d.replace(/\D/g, ""),
      s.format
    );
    this.setState(
      {
        anchorEl: null,
        selectedCountry: s,
        freezeSelection: !0,
        formattedNumber: m
      },
      () => {
        this.cursorToEnd(), t && t(m, this.getCountryData());
      }
    );
  };
  handleInputFocus = (e) => {
    const { selectedCountry: r } = this.state, { disableCountryCode: n, onFocus: i } = this.props;
    this.inputRef && this.inputRef.value === "+" && r && !n && this.setState(
      {
        formattedNumber: `+${r.dialCode}`
      },
      () => setTimeout(this.cursorToEnd, 10)
    ), this.setState({ placeholder: "" }), i && i(e, this.getCountryData()), setTimeout(this.cursorToEnd, 10);
  };
  handleInputBlur = (e) => {
    const { placeholder: r, onBlur: n } = this.props;
    e.target.value || this.setState({ placeholder: r || "" }), n && n(e, this.getCountryData());
  };
  getHighlightCountryIndex = (e) => {
    const {
      highlightCountryIndex: r,
      onlyCountries: n,
      preferredCountries: i
    } = this.state, t = r + e;
    return t < 0 || t >= n.length + i.length ? t - e : t;
  };
  searchCountry = () => {
    const { queryString: e, onlyCountries: r, preferredCountries: n } = this.state, i = this.getProbableCandidate(e) || r[0], t = oe(r, i) + n.length;
    this.scrollTo(this.getElement(t)), this.setState({
      queryString: "",
      highlightCountryIndex: t
    });
  };
  handleKeydown = (e) => {
    const {
      anchorEl: r,
      highlightCountryIndex: n,
      preferredCountries: i,
      onlyCountries: t,
      queryString: o,
      debouncedQueryStingSearcher: s
    } = this.state, { keys: u, disabled: d } = this.props;
    if (!r || d || !u) return;
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    const m = (p) => {
      this.setState(
        {
          highlightCountryIndex: this.getHighlightCountryIndex(p)
        },
        () => {
          this.scrollTo(
            this.getElement(n + i.length)
          );
        }
      );
    };
    switch (e.which) {
      case u.DOWN:
        m(1);
        break;
      case u.UP:
        m(-1);
        break;
      case u.ENTER:
        this.handleFlagItemClick(t[n]);
        break;
      case u.ESC:
        this.setState(
          {
            anchorEl: null
          },
          this.cursorToEnd
        );
        break;
      default:
        (e.which >= u.A && e.which <= u.Z || e.which === u.SPACE) && this.setState(
          {
            queryString: o + String.fromCharCode(e.which)
          },
          s
        );
    }
  };
  handleInputKeyDown = (e) => {
    const { keys: r, onEnterKeyPress: n, onKeyDown: i } = this.props;
    r && e.which === r.ENTER && n && n(e), i && i(e);
  };
  checkIfValid = () => {
    const { formattedNumber: e } = this.state, { isValid: r } = this.props;
    return r ? r(e.replace(/\D/g, "")) : !0;
  };
  updateFormattedNumber = (e) => {
    const { onlyCountries: r, defaultCountry: n } = this.state, { disableCountryCode: i } = this.props;
    let t, o = e, s = e;
    if (o.startsWith("+"))
      o = o.replace(/\D/g, ""), t = this.guessSelectedCountry(
        o.substring(0, 6),
        r,
        n
      ), s = this.formatNumber(o, t.format);
    else {
      t = R(r, { iso2: n });
      const u = t && !k(o.replace(/\D/g, ""), t.dialCode) ? t.dialCode : "";
      s = this.formatNumber(
        (i ? "" : u) + o.replace(/\D/g, ""),
        t ? t.format : void 0
      );
    }
    t && this.setState({ selectedCountry: t, formattedNumber: s });
  };
  getDropdownProps = () => {
    const { selectedCountry: e, anchorEl: r, preferredCountries: n, onlyCountries: i } = this.state, t = {
      flagButton: {
        minWidth: 30,
        padding: 0,
        height: 30
      },
      native: {
        width: 30,
        height: 30,
        padding: 8
      },
      nativeRoot: {
        padding: 0,
        "& + svg": {
          display: "none"
        }
      },
      nativeSelect: {
        padding: 0,
        lineHeight: 0,
        height: 11
      },
      positionStart: {
        position: "relative"
      },
      flagIcon: {
        width: 30,
        height: 24,
        paddingRight: 8
      }
    }, { dropdownClass: o, localization: s, disableDropdown: u, native: d } = this.props;
    i.sort((l, h) => {
      const g = s?.[l.name] || l.name, E = s?.[h.name] || h.name;
      return g.localeCompare(E);
    });
    const m = (l) => !!(e && e.dialCode === l.dialCode), p = de[e.iso2.toUpperCase()];
    return u ? {} : {
      startAdornment: /* @__PURE__ */ y.jsx(ge, { style: t.positionStart, position: "start", children: d ? /* @__PURE__ */ y.jsxs(
        be,
        {
          id: "country-menu",
          style: t.native,
          sx: {
            root: t.nativeRoot,
            // clsx(classes.nativeRoot, 'native'),
            select: t.nativeSelect
          },
          onChange: (l) => this.handleFlagItemClick(l.target.value),
          IconComponent: !!p && p,
          disableUnderline: !0,
          children: [
            !!n.length && A(n, (l, h) => /* @__PURE__ */ y.jsx(
              D,
              {
                itemRef: (g) => {
                  this.flags[`flag_no_${h}`] = g;
                },
                name: l.name,
                iso2: l.iso2,
                dialCode: l.dialCode,
                localization: s?.[l.name],
                native: !0
              },
              `preferred_${l.iso2}_${h}`
            )),
            A(i, (l, h) => /* @__PURE__ */ y.jsx(
              D,
              {
                itemRef: (g) => {
                  this.flags[`flag_no_${h}`] = g;
                },
                name: l.name,
                iso2: l.iso2,
                dialCode: l.dialCode,
                localization: s?.[l.name],
                native: !0
              },
              `preferred_${l.iso2}_${h}`
            ))
          ]
        }
      ) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          pe,
          {
            style: t.flagButton,
            "aria-owns": r ? "country-menu" : void 0,
            "aria-label": "Select country",
            onClick: (l) => this.setState({ anchorEl: l.currentTarget }),
            "aria-haspopup": !0,
            children: !!p && /* @__PURE__ */ y.jsx(p, { className: "margin" })
          }
        ),
        /* @__PURE__ */ y.jsxs(
          Ce,
          {
            className: o,
            id: "country-menu",
            anchorEl: r,
            open: !!r,
            onClose: () => this.setState({ anchorEl: null }),
            children: [
              !!n.length && A(n, (l, h) => /* @__PURE__ */ y.jsx(
                D,
                {
                  itemRef: (g) => {
                    this.flags[`flag_no_${h}`] = g;
                  },
                  selected: m(l),
                  onClick: () => this.handleFlagItemClick(l),
                  name: l.name,
                  iso2: l.iso2,
                  dialCode: l.dialCode,
                  localization: s?.[l.name],
                  style: t.flagIcon
                },
                `preferred_${l.iso2}_${h}`
              )),
              !!n.length && /* @__PURE__ */ y.jsx(he, {}),
              A(i, (l, h) => /* @__PURE__ */ y.jsx(
                D,
                {
                  itemRef: (g) => {
                    this.flags[`flag_no_${h}`] = g;
                  },
                  selected: m(l),
                  onClick: () => this.handleFlagItemClick(l),
                  name: l.name,
                  iso2: l.iso2,
                  dialCode: l.dialCode,
                  localization: s?.[l.name],
                  style: t.flagIcon
                },
                `preferred_${l.iso2}_${h}`
              ))
            ]
          }
        )
      ] }) })
    };
  };
  render() {
    const { formattedNumber: e, placeholder: r } = this.state, {
      // start placeholder props
      native: n,
      defaultCountry: i,
      excludeCountries: t,
      onlyCountries: o,
      preferredCountries: s,
      dropdownClass: u,
      autoFormat: d,
      disableAreaCodes: m,
      isValid: p,
      disableCountryCode: v,
      disableDropdown: l,
      enableLongNumbers: h,
      countryCodeEditable: g,
      onEnterKeyPress: E,
      isModernBrowser: V,
      classes: Y,
      keys: q,
      localization: K,
      placeholder: W,
      regions: H,
      onChange: J,
      value: Z,
      // end placeholder props
      inputClass: w,
      error: O,
      InputProps: z,
      ...x
    } = this.props, I = this.getDropdownProps();
    return /* @__PURE__ */ y.jsx(
      ye,
      {
        placeholder: r,
        value: e,
        className: w,
        inputRef: this.handleRefInput,
        error: O || !this.checkIfValid(),
        onChange: this.handleInput,
        onClick: this.handleInputClick,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        type: "tel",
        InputProps: {
          ...I,
          ...z
        },
        ...x
      }
    );
  }
}
export {
  Le as default
};
