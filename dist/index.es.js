import ve, { useRef as fe, useMemo as se, useCallback as O, useState as Re, useEffect as le } from "react";
import Te from "@mui/material/Divider";
import ke from "@mui/material/IconButton";
import _e from "@mui/material/InputAdornment";
import we from "@mui/material/Menu";
import xe from "@mui/material/NativeSelect";
import Ne from "@mui/material/TextField";
import * as ye from "country-flag-icons/react/3x2";
import { some as pe, startsWith as Z, filter as ce, reduce as Ee, tail as Ie, head as Ae, find as X, isString as Pe, findIndex as je, debounce as Oe, includes as Me, trim as Fe, map as te } from "lodash";
import ze from "@mui/material/MenuItem";
var ie = { exports: {} }, ae = {};
var he;
function Be() {
  if (he) return ae;
  he = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), C = /* @__PURE__ */ Symbol.for("react.fragment");
  function E(u, p, o) {
    var h = null;
    if (o !== void 0 && (h = "" + o), p.key !== void 0 && (h = "" + p.key), "key" in p) {
      o = {};
      for (var w in p)
        w !== "key" && (o[w] = p[w]);
    } else o = p;
    return p = o.ref, {
      $$typeof: m,
      type: u,
      key: h,
      ref: p !== void 0 ? p : null,
      props: o
    };
  }
  return ae.Fragment = C, ae.jsx = E, ae.jsxs = E, ae;
}
var re = {};
var ge;
function $e() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && (function() {
    function m(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === s ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case D:
          return "Fragment";
        case H:
          return "Profiler";
        case q:
          return "StrictMode";
        case M:
          return "Suspense";
        case z:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case Y:
            return (e._context.displayName || "Context") + ".Consumer";
          case L:
            var i = e.render;
            return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case g:
            return i = e.displayName || null, i !== null ? i : m(e.type) || "Memo";
          case P:
            i = e._payload, e = e._init;
            try {
              return m(e(i));
            } catch {
            }
        }
      return null;
    }
    function C(e) {
      return "" + e;
    }
    function E(e) {
      try {
        C(e);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var f = i.error, y = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return f.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), C(e);
      }
    }
    function u(e) {
      if (e === D) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var i = m(e);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var e = b.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (F.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function w(e, i) {
      function f() {
        t || (t = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: f,
        configurable: !0
      });
    }
    function k() {
      var e = m(this.type);
      return _[e] || (_[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, i, f, y, J, a) {
      var r = f.ref;
      return e = {
        $$typeof: G,
        type: e,
        key: i,
        props: f,
        _owner: y
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: k
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: a
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function B(e, i, f, y, J, a) {
      var r = i.children;
      if (r !== void 0)
        if (y)
          if (I(r)) {
            for (y = 0; y < r.length; y++)
              x(r[y]);
            Object.freeze && Object.freeze(r);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(r);
      if (F.call(i, "key")) {
        r = m(e);
        var n = Object.keys(i).filter(function(c) {
          return c !== "key";
        });
        y = 0 < n.length ? "{key: someKey, " + n.join(": ..., ") + ": ...}" : "{key: someKey}", K[r + y] || (n = 0 < n.length ? "{" + n.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          r,
          n,
          r
        ), K[r + y] = !0);
      }
      if (r = null, f !== void 0 && (E(f), r = "" + f), h(i) && (E(i.key), r = "" + i.key), "key" in i) {
        f = {};
        for (var l in i)
          l !== "key" && (f[l] = i[l]);
      } else f = i;
      return r && w(
        f,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        r,
        f,
        p(),
        J,
        a
      );
    }
    function x(e) {
      $(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === P && (e._payload.status === "fulfilled" ? $(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function $(e) {
      return typeof e == "object" && e !== null && e.$$typeof === G;
    }
    var A = ve, G = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), H = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.suspense_list"), g = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), s = /* @__PURE__ */ Symbol.for("react.client.reference"), b = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, I = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var t, _ = {}, j = A.react_stack_bottom_frame.bind(
      A,
      o
    )(), ne = W(u(o)), K = {};
    re.Fragment = D, re.jsx = function(e, i, f) {
      var y = 1e4 > b.recentlyCreatedOwnerStacks++;
      return B(
        e,
        i,
        f,
        !1,
        y ? Error("react-stack-top-frame") : j,
        y ? W(u(e)) : ne
      );
    }, re.jsxs = function(e, i, f) {
      var y = 1e4 > b.recentlyCreatedOwnerStacks++;
      return B(
        e,
        i,
        f,
        !0,
        y ? Error("react-stack-top-frame") : j,
        y ? W(u(e)) : ne
      );
    };
  })()), re;
}
var be;
function De() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ie.exports = Be() : ie.exports = $e()), ie.exports;
}
var T = De();
const Le = ({
  name: m,
  iso2: C,
  dialCode: E,
  localization: u,
  itemRef: p,
  native: o = !1,
  ...h
}) => {
  if (o)
    return /* @__PURE__ */ T.jsxs(
      "option",
      {
        className: "country",
        "data-dial-code": "1",
        "data-country-code": C,
        value: C,
        ...h,
        onClick: h.onClick,
        children: [
          u || m,
          " ",
          `+${E}`
        ]
      }
    );
  const w = ye[C.toUpperCase()];
  return /* @__PURE__ */ T.jsxs(
    ze,
    {
      ref: p,
      className: "country",
      "data-dial-code": "1",
      "data-country-code": C,
      ...h,
      children: [
        !!w && /* @__PURE__ */ T.jsx(
          "div",
          {
            className: h.className,
            style: { width: 30, height: 24, paddingRight: 8 },
            children: /* @__PURE__ */ T.jsx(w, {})
          }
        ),
        /* @__PURE__ */ T.jsx("span", { className: "country-name", children: u || m }),
        /* @__PURE__ */ T.jsx("span", { className: "dial-code", children: `+${E}` })
      ]
    }
  );
}, oe = ve.memo(Le), Ge = [
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
], ue = {};
function Ce(m, C, E) {
  C in ue || (ue[C] = []);
  const u = E || 0;
  ue[C][u] = m;
}
const Ue = [].concat(
  ...Ge.map((m) => {
    const [C, E, u, p, o, h, w] = m, k = {
      name: C,
      regions: E,
      iso2: u,
      dialCode: p,
      priority: h || 0,
      format: o || void 0,
      hasAreaCodes: !!w
    }, S = [];
    return k.hasAreaCodes && w && w.forEach((B) => {
      const x = {
        ...k,
        regions: E,
        dialCode: `${p}${B}`,
        isAreaCode: !0
      };
      S.push(x), Ce(u, x.dialCode);
    }), Ce(
      k.iso2,
      k.dialCode,
      k.hasAreaCodes ? 1 : 0
    ), S.length > 0 ? [k, ...S] : [k];
  })
), de = {
  allCountries: Ue
}, me = (m, C, E) => {
  const u = X(C, { iso2: E }) || {};
  if (Fe(m) === "") return u;
  const p = Ee(
    C,
    (o, h) => Z(m, h.dialCode) && (h.dialCode.length > o.dialCode.length || h.dialCode.length === o.dialCode.length && h.priority < o.priority) ? h : o,
    { dialCode: "", priority: 10001 }
  );
  return p.name ? p : u;
}, qe = (m) => {
  const {
    autoFormat: C = !0,
    countryCodeEditable: E = !0,
    defaultCountry: u = "",
    disableAreaCodes: p = !1,
    disableCountryCode: o = !1,
    enableLongNumbers: h = !1,
    excludeCountries: w = [],
    isModernBrowser: k = () => document.createElement ? !!document.createElement("input").setSelectionRange : !1,
    keys: S = {
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
    },
    onlyCountries: B = [],
    onChange: x,
    onEnterKeyPress: $,
    onKeyDown: A,
    onBlur: G,
    onFocus: U,
    onClick: D,
    placeholder: q = "+1 (702) 123-4567",
    preferredCountries: H = [],
    regions: Y = "",
    isValid: V = (a) => pe(
      de.allCountries,
      (r) => Z(a, r.dialCode) || Z(r.dialCode, a)
    ),
    value: L = ""
  } = m, M = fe({}), z = fe(null), g = se(() => {
    let a = de.allCountries;
    const r = (d) => d.filter((v) => v.isAreaCode !== !0), n = (d, v) => {
      if (typeof d == "string") {
        const R = d;
        return v.filter(
          (Q) => Q.regions.some((ee) => ee === R)
        );
      }
      return v.filter((R) => d.map(
        (ee) => R.regions.some((Se) => Se === ee)
      ).some((ee) => ee));
    }, l = (d, v) => d.length === 0 ? v : v.filter(
      (R) => d.some((Q) => Q === R.iso2)
    ), c = (d, v) => v.length === 0 ? d : ce(
      d,
      (R) => !Me(v, R.iso2)
    );
    return p && (a = r(a)), Y && (a = n(Y, a)), c(
      l(B, a),
      w
    );
  }, [p, Y, B, w]), P = se(() => ce(
    de.allCountries,
    (a) => pe(
      H,
      (r) => r === a.iso2
    )
  ), [H]), N = O(
    (a, r) => {
      let n = "";
      if (o && r ? n = r.split(" ").slice(1).join(" ") : n = r, !a || a.length === 0)
        return o ? "" : "+";
      if (a && a.length < 2 || !n || !C)
        return o ? a : `+${a}`;
      const l = Ee(
        n,
        (d, v) => d.remainingText.length === 0 ? d : v !== "." ? {
          formattedText: d.formattedText + v,
          remainingText: d.remainingText
        } : {
          formattedText: d.formattedText + Ae(d.remainingText),
          remainingText: Ie(d.remainingText)
        },
        {
          formattedText: "",
          remainingText: a.split("")
        }
      );
      let c = "";
      return h ? c = l.formattedText + l.remainingText.join("") : c = l.formattedText, c.includes("(") && !c.includes(")") && (c += ")"), c;
    },
    [o, C, h]
  ), [s, b] = Re(() => {
    const a = L || "";
    let r;
    a.length > 1 ? r = me(
      a.replace(/\D/g, "").substring(0, 6),
      g,
      u
    ) || {} : u && (r = X(g, { iso2: u })), (!r || !r.dialCode) && (r = { dialCode: "", priority: 10001 });
    const n = a.length < 2 && r && r.dialCode && !Z(a.replace(/\D/g, ""), r.dialCode) ? r.dialCode : "";
    return {
      formattedNumber: a === "" && (!r || !r.name) ? "" : N(
        (o ? "" : n) + a.replace(/\D/g, ""),
        r.name ? r.format : void 0
      ),
      placeholder: q || "",
      selectedCountry: r,
      highlightCountryIndex: 0,
      queryString: "",
      freezeSelection: !1,
      anchorEl: null
    };
  });
  le(() => {
    if (u && u !== s.selectedCountry.iso2) {
      const a = X(g, { iso2: u }) || {};
      b((r) => ({
        ...r,
        selectedCountry: a,
        formattedNumber: o ? "" : `+${a.dialCode}`
      }));
    }
  }, [u, g, o, s.selectedCountry.iso2]), le(() => {
    if (L !== s.formattedNumber) {
      const a = L || "";
      let r, n = a;
      if (a.startsWith("+")) {
        const l = a.replace(/\D/g, "");
        r = me(
          l.substring(0, 6),
          g,
          u
        ), n = N(l, r.format);
      } else {
        r = X(g, { iso2: u });
        const l = r && !Z(a.replace(/\D/g, ""), r.dialCode) ? r.dialCode : "";
        n = N(
          (o ? "" : l) + a.replace(/\D/g, ""),
          r ? r.format : void 0
        );
      }
      r && b((l) => ({
        ...l,
        selectedCountry: r,
        formattedNumber: n
      }));
    }
  }, [L, u, g, o, N, s.formattedNumber]);
  const F = (a) => a ? {
    name: a.name || "",
    dialCode: a.dialCode || "",
    countryCode: a.iso2 || ""
  } : {}, I = O(() => {
    const a = z.current;
    if (a && (a.focus(), k && k())) {
      const r = a.value.length;
      a.setSelectionRange(r, r);
    }
  }, [k]), W = O(
    (a) => {
      let { selectedCountry: r, freezeSelection: n } = s, l = r, c = o ? "" : "+";
      if (!E) {
        const R = `+${l.dialCode}`;
        if (a.target.value.length < R.length)
          return;
      }
      if (a.target.value.replace(/\D/g, "").length > 15 || a.target.value === s.formattedNumber)
        return;
      if (a.target.value.length > 0) {
        const R = a.target.value.replace(/\D/g, "");
        (!n || r.dialCode.length > R.length) && (l = me(
          R.substring(0, 6),
          g,
          u
        ), n = !1), c = N(R, l.format);
      }
      let d = a.target.selectionStart || 0;
      const v = c.length - s.formattedNumber.length;
      b((R) => ({
        ...R,
        formattedNumber: c,
        freezeSelection: n,
        selectedCountry: l.dialCode ? l : r
      })), k && k() && requestAnimationFrame(() => {
        const R = z.current;
        if (!R) return;
        v > 0 && (d -= v), c.charAt(c.length - 1) === ")" ? R.setSelectionRange(
          c.length - 1,
          c.length - 1
        ) : d > 0 && s.formattedNumber.length >= c.length && R.setSelectionRange(d, d);
      }), x && x(c, F(l));
    },
    [
      s,
      E,
      o,
      g,
      u,
      N,
      k,
      x
    ]
  ), t = O(
    (a) => {
      const r = s.selectedCountry, n = Pe(a) ? X(g, (v) => v.iso2 === a) : X(g, a);
      if (!n) return;
      const l = s.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), c = l.length > 1 ? l.replace(
        r.dialCode,
        n.dialCode
      ) : n.dialCode, d = N(
        c.replace(/\D/g, ""),
        n.format
      );
      b((v) => ({
        ...v,
        anchorEl: null,
        selectedCountry: n,
        freezeSelection: !0,
        formattedNumber: d
      })), setTimeout(() => I(), 0), x && x(d, F(n));
    },
    [
      s.selectedCountry,
      s.formattedNumber,
      g,
      N,
      x,
      I
    ]
  ), _ = O(
    (a) => {
      if (z.current && z.current.value === "+" && s.selectedCountry && !o) {
        const r = `+${s.selectedCountry.dialCode}`;
        b((n) => ({ ...n, formattedNumber: r })), setTimeout(() => I(), 10);
      }
      b((r) => ({ ...r, placeholder: "" })), U && U(a, F(s.selectedCountry)), setTimeout(() => I(), 10);
    },
    [
      s.selectedCountry,
      o,
      U,
      I
    ]
  ), j = O(
    (a) => {
      a.target.value || b((r) => ({ ...r, placeholder: q || "" })), G && G(a, F(s.selectedCountry));
    },
    [q, G, s.selectedCountry]
  ), ne = O(
    (a) => {
      D && D(a, F(s.selectedCountry));
    },
    [D, s.selectedCountry]
  ), K = O((a) => {
    !a || !a.parentElement || (a.parentElement.scrollTop = a.offsetTop);
  }, []), e = O(() => {
    const r = ((c) => !c || c.length === 0 ? null : ce(
      g,
      (d) => Z(d.name.toLowerCase(), c.toLowerCase())
    )[0])(s.queryString) || g[0], n = je(g, r) + P.length, l = M.current[`flag_no_${n}`];
    K(l), b((c) => ({
      ...c,
      queryString: "",
      highlightCountryIndex: n
    }));
  }, [s.queryString, g, P, K]), i = se(
    () => Oe(e, 100),
    [e]
  ), f = O(
    (a) => {
      if (!s.anchorEl || m.disabled || !S) return;
      a.preventDefault && a.preventDefault();
      const r = (n) => {
        const l = g.length + P.length;
        let c = s.highlightCountryIndex + n;
        (c < 0 || c >= l) && (c -= n), b((v) => ({ ...v, highlightCountryIndex: c }));
        const d = M.current[`flag_no_${c}`];
        K(d);
      };
      switch (a.which) {
        case S.DOWN:
          r(1);
          break;
        case S.UP:
          r(-1);
          break;
        case S.ENTER: {
          const l = [
            ...P,
            ...g
          ][s.highlightCountryIndex];
          l && t(l);
          break;
        }
        case S.ESC:
          b((n) => ({ ...n, anchorEl: null })), I();
          break;
        default:
          (a.which >= S.A && a.which <= S.Z || a.which === S.SPACE) && (b((n) => ({
            ...n,
            queryString: n.queryString + String.fromCharCode(a.which)
          })), i());
      }
    },
    [
      s.anchorEl,
      s.highlightCountryIndex,
      m.disabled,
      S,
      g,
      P,
      t,
      I,
      i,
      K
    ]
  );
  le(() => (document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f)), [f]);
  const y = O(
    (a) => {
      z.current = a, m.inputRef && (typeof m.inputRef == "function" ? m.inputRef(a) : m.inputRef.current = a);
    },
    [m.inputRef]
  ), J = O(
    (a) => {
      S && a.which === S.ENTER && $ && $(a), A && A(a);
    },
    [S, $, A]
  );
  return {
    state: s,
    setState: b,
    flagsRef: M,
    inputRef: z,
    handleInput: W,
    handleInputClick: ne,
    handleInputFocus: _,
    handleInputBlur: j,
    handleKeydown: f,
    handleInputKeyDown: J,
    handleRefInput: y,
    handleFlagItemClick: t,
    computedOnlyCountries: g,
    computedPreferredCountries: P,
    isValid: () => V(s.formattedNumber.replace(/\D/g, ""))
  };
}, ea = (m) => {
  const {
    classes: C,
    dropdownClass: E,
    disableDropdown: u,
    native: p,
    localization: o,
    inputClass: h,
    error: w,
    InputProps: k,
    variant: S = "standard",
    ...B
  } = m, {
    state: x,
    setState: $,
    flagsRef: A,
    handleInput: G,
    handleInputClick: U,
    handleInputFocus: D,
    handleInputBlur: q,
    handleKeydown: H,
    handleRefInput: Y,
    handleFlagItemClick: V,
    computedOnlyCountries: L,
    computedPreferredCountries: M,
    isValid: z
  } = qe(m), {
    formattedNumber: g,
    placeholder: P,
    selectedCountry: N,
    anchorEl: s
  } = x, b = {
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
  }, F = (t) => !!(N && N.dialCode === t.dialCode), I = ye[N.iso2.toUpperCase()], W = u ? {} : {
    startAdornment: /* @__PURE__ */ T.jsx(_e, { style: b.positionStart, position: "start", children: p ? /* @__PURE__ */ T.jsxs(
      xe,
      {
        id: "country-menu",
        style: b.native,
        sx: {
          root: b.nativeRoot,
          select: b.nativeSelect
        },
        onChange: (t) => V(t.target.value),
        IconComponent: !!I && I,
        disableUnderline: !0,
        children: [
          !!M.length && te(
            M,
            (t, _) => /* @__PURE__ */ T.jsx(
              oe,
              {
                itemRef: (j) => {
                  A.current[`flag_no_${_}`] = j;
                },
                name: t.name,
                iso2: t.iso2,
                dialCode: t.dialCode,
                localization: o?.[t.name],
                native: !0
              },
              `preferred_${t.iso2}_${_}`
            )
          ),
          te(
            L,
            (t, _) => /* @__PURE__ */ T.jsx(
              oe,
              {
                itemRef: (j) => {
                  A.current[`flag_no_${_}`] = j;
                },
                name: t.name,
                iso2: t.iso2,
                dialCode: t.dialCode,
                localization: o?.[t.name],
                native: !0
              },
              `preferred_${t.iso2}_${_}`
            )
          )
        ]
      }
    ) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
      /* @__PURE__ */ T.jsx(
        ke,
        {
          style: b.flagButton,
          "aria-owns": s ? "country-menu" : void 0,
          "aria-label": "Select country",
          onClick: (t) => $((_) => ({ ..._, anchorEl: t.currentTarget })),
          "aria-haspopup": !0,
          children: !!I && /* @__PURE__ */ T.jsx(I, { className: "margin" })
        }
      ),
      /* @__PURE__ */ T.jsxs(
        we,
        {
          className: E,
          id: "country-menu",
          anchorEl: s,
          open: !!s,
          onClose: () => $((t) => ({ ...t, anchorEl: null })),
          children: [
            !!M.length && te(
              M,
              (t, _) => /* @__PURE__ */ T.jsx(
                oe,
                {
                  itemRef: (j) => {
                    A.current[`flag_no_${_}`] = j;
                  },
                  selected: F(t),
                  onClick: () => V(t),
                  name: t.name,
                  iso2: t.iso2,
                  dialCode: t.dialCode,
                  localization: o?.[t.name],
                  style: b.flagIcon
                },
                `preferred_${t.iso2}_${_}`
              )
            ),
            !!M.length && /* @__PURE__ */ T.jsx(Te, {}),
            te(
              L,
              (t, _) => /* @__PURE__ */ T.jsx(
                oe,
                {
                  itemRef: (j) => {
                    A.current[`flag_no_${_}`] = j;
                  },
                  selected: F(t),
                  onClick: () => V(t),
                  name: t.name,
                  iso2: t.iso2,
                  dialCode: t.dialCode,
                  localization: o?.[t.name],
                  style: b.flagIcon
                },
                `preferred_${t.iso2}_${_}`
              )
            )
          ]
        }
      )
    ] }) })
  };
  return /* @__PURE__ */ T.jsx(
    Ne,
    {
      variant: S,
      placeholder: P,
      value: g,
      className: h,
      inputRef: Y,
      error: w || !z(),
      onChange: G,
      onClick: U,
      onFocus: D,
      onBlur: q,
      onKeyDown: H,
      type: "tel",
      InputProps: {
        ...W,
        ...k
      },
      ...B
    }
  );
};
export {
  ea as default
};
