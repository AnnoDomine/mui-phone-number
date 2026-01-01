import Ne, { useRef as Te, useMemo as ce, useCallback as y, useState as ue, useEffect as Fe } from "react";
import Me from "@mui/material/Divider";
import Be from "@mui/material/IconButton";
import ze from "@mui/material/InputAdornment";
import De from "@mui/material/Menu";
import $e from "@mui/material/NativeSelect";
import Le from "@mui/material/TextField";
import * as Pe from "country-flag-icons/react/3x2";
import { some as Se, startsWith as fe, filter as Ee, reduce as Ae, tail as Ge, head as Ue, find as ve, isString as Ve, findIndex as Ye, debounce as qe, includes as Ke, trim as We, map as ge } from "lodash";
import He from "@mui/material/MenuItem";
var be = { exports: {} }, de = {};
var ye;
function Je() {
  if (ye) return de;
  ye = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.fragment");
  function C(d, f, c) {
    var p = null;
    if (c !== void 0 && (p = "" + c), f.key !== void 0 && (p = "" + f.key), "key" in f) {
      c = {};
      for (var T in f)
        T !== "key" && (c[T] = f[T]);
    } else c = f;
    return f = c.ref, {
      $$typeof: l,
      type: d,
      key: p,
      ref: f !== void 0 ? f : null,
      props: c
    };
  }
  return de.Fragment = h, de.jsx = C, de.jsxs = C, de;
}
var me = {};
var _e;
function Ze() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case G:
          return "Fragment";
        case se:
          return "Profiler";
        case ie:
          return "StrictMode";
        case Z:
          return "Suspense";
        case V:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case A:
            return "Portal";
          case te:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case g:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case I:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function h(e) {
      return "" + e;
    }
    function C(e) {
      try {
        h(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), h(e);
      }
    }
    function d(e) {
      if (e === G) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function T(e, r) {
      function t() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function R() {
      var e = l(this.type);
      return F[e] || (F[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function v(e, r, t, u, K, P) {
      var m = t.ref;
      return e = {
        $$typeof: H,
        type: e,
        key: r,
        props: t,
        _owner: u
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
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
        value: K
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function L(e, r, t, u, K, P) {
      var m = r.children;
      if (m !== void 0)
        if (u)
          if (X(m)) {
            for (u = 0; u < m.length; u++)
              _(m[u]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(m);
      if (j.call(r, "key")) {
        m = l(e);
        var w = Object.keys(r).filter(function(D) {
          return D !== "key";
        });
        u = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", q[m + u] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          m,
          w,
          m
        ), q[m + u] = !0);
      }
      if (m = null, t !== void 0 && (C(t), m = "" + t), p(r) && (C(r.key), m = "" + r.key), "key" in r) {
        t = {};
        for (var ee in r)
          ee !== "key" && (t[ee] = r[ee]);
      } else t = r;
      return m && T(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), v(
        e,
        m,
        t,
        f(),
        K,
        P
      );
    }
    function _(e) {
      W(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === I && (e._payload.status === "fulfilled" ? W(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function W(e) {
      return typeof e == "object" && e !== null && e.$$typeof === H;
    }
    var M = Ne, H = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), G = /* @__PURE__ */ Symbol.for("react.fragment"), ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), te = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), g = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), oe = /* @__PURE__ */ Symbol.for("react.client.reference"), Y = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, X = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var O, F = {}, N = M.react_stack_bottom_frame.bind(
      M,
      c
    )(), Q = z(d(c)), q = {};
    me.Fragment = G, me.jsx = function(e, r, t) {
      var u = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return L(
        e,
        r,
        t,
        !1,
        u ? Error("react-stack-top-frame") : N,
        u ? z(d(e)) : Q
      );
    }, me.jsxs = function(e, r, t) {
      var u = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return L(
        e,
        r,
        t,
        !0,
        u ? Error("react-stack-top-frame") : N,
        u ? z(d(e)) : Q
      );
    };
  })()), me;
}
var we;
function Xe() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? be.exports = Je() : be.exports = Ze()), be.exports;
}
var k = Xe();
const Qe = ({
  name: l,
  iso2: h,
  dialCode: C,
  localization: d,
  itemRef: f,
  native: c = !1,
  ...p
}) => {
  if (c)
    return /* @__PURE__ */ k.jsxs(
      "option",
      {
        className: "country",
        "data-dial-code": "1",
        "data-country-code": h,
        value: h,
        ...p,
        onClick: p.onClick,
        children: [
          d || l,
          " ",
          `+${C}`
        ]
      }
    );
  const T = Pe[h.toUpperCase()];
  return /* @__PURE__ */ k.jsxs(
    He,
    {
      ref: f,
      className: "country",
      "data-dial-code": "1",
      "data-country-code": h,
      ...p,
      children: [
        !!T && /* @__PURE__ */ k.jsx(
          "div",
          {
            className: p.className,
            style: { width: 30, height: 24, paddingRight: 8 },
            children: /* @__PURE__ */ k.jsx(T, {})
          }
        ),
        /* @__PURE__ */ k.jsx("span", { className: "country-name", children: d || l }),
        /* @__PURE__ */ k.jsx("span", { className: "dial-code", children: `+${C}` })
      ]
    }
  );
}, Ce = Ne.memo(Qe), ea = [
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
], ke = {};
function xe(l, h, C) {
  h in ke || (ke[h] = []);
  const d = C || 0;
  ke[h][d] = l;
}
const aa = [].concat(
  ...ea.map((l) => {
    const [h, C, d, f, c, p, T] = l, R = {
      name: h,
      regions: C,
      iso2: d,
      dialCode: f,
      priority: p || 0,
      format: c || void 0,
      hasAreaCodes: !!T
    }, v = [];
    return R.hasAreaCodes && T && T.forEach((L) => {
      const _ = {
        ...R,
        regions: C,
        dialCode: `${f}${L}`,
        isAreaCode: !0
      };
      v.push(_), xe(d, _.dialCode);
    }), xe(
      R.iso2,
      R.dialCode,
      R.hasAreaCodes ? 1 : 0
    ), v.length > 0 ? [R, ...v] : [R];
  })
), Re = {
  allCountries: aa
}, Ie = (l, h, C) => {
  const d = ve(h, { iso2: C }) || {};
  if (We(l) === "") return d;
  const f = Ae(
    h,
    (c, p) => fe(l, p.dialCode) && (p.dialCode.length > c.dialCode.length || p.dialCode.length === c.dialCode.length && p.priority < c.priority) ? p : c,
    { dialCode: "", priority: 10001 }
  );
  return f.name ? f : d;
}, ra = (l) => {
  const {
    autoFormat: h = !0,
    countryCodeEditable: C = !0,
    defaultCountry: d = "",
    disableAreaCodes: f = !1,
    disableCountryCode: c = !1,
    enableLongNumbers: p = !1,
    excludeCountries: T = [],
    isModernBrowser: R = () => document.createElement ? !!document.createElement("input").setSelectionRange : !1,
    keys: v = {
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
    onlyCountries: L = [],
    onChange: _,
    onEnterKeyPress: W,
    onKeyDown: M,
    onBlur: H,
    onFocus: A,
    onClick: G,
    placeholder: ie = "+1 (702) 123-4567",
    preferredCountries: se = [],
    regions: J = "",
    isValid: te = (a) => Se(
      Re.allCountries,
      (n) => fe(a, n.dialCode) || fe(n.dialCode, a)
    ),
    value: U = ""
  } = l, Z = Te({}), V = Te(null), g = ce(() => {
    let a = Re.allCountries;
    const n = (o) => o.filter((x) => x.isAreaCode !== !0), s = (o, x) => {
      if (typeof o == "string") {
        const ne = o;
        return x.filter(
          (he) => he.regions.some((le) => le === ne)
        );
      }
      return x.filter((ne) => o.map(
        (le) => ne.regions.some((Oe) => Oe === le)
      ).some((le) => le));
    }, b = (o, x) => o.length === 0 ? x : x.filter(
      (ne) => o.some((he) => he === ne.iso2)
    ), E = (o, x) => x.length === 0 ? o : Ee(
      o,
      (ne) => !Ke(x, ne.iso2)
    );
    return f && (a = n(a)), J && (a = s(J, a)), E(
      b(L, a),
      T
    );
  }, [f, J, L, T]), I = ce(() => Ee(
    Re.allCountries,
    (a) => Se(
      se,
      (n) => n === a.iso2
    )
  ), [se]), B = y(
    (a, n) => {
      let s = "";
      if (c && n ? s = n.split(" ").slice(1).join(" ") : s = n, !a || a.length === 0)
        return c ? "" : "+";
      if (a && a.length < 2 || !s || !h)
        return c ? a : `+${a}`;
      const b = Ae(
        s,
        (o, x) => o.remainingText.length === 0 ? o : x !== "." ? {
          formattedText: o.formattedText + x,
          remainingText: o.remainingText
        } : {
          formattedText: o.formattedText + Ue(o.remainingText),
          remainingText: Ge(o.remainingText)
        },
        {
          formattedText: "",
          remainingText: a.split("")
        }
      );
      let E = "";
      return p ? E = b.formattedText + b.remainingText.join("") : E = b.formattedText, E.includes("(") && !E.includes(")") && (E += ")"), E;
    },
    [c, h, p]
  ), [oe, Y] = ue(null), [j, X] = ue(0), [z, O] = ue(""), [F, N] = ue(!1), [Q, q] = ue(ie), e = ce(() => {
    const a = U || "";
    let n;
    return a.length > 1 ? n = Ie(
      a.replace(/\D/g, "").substring(0, 6),
      g,
      d
    ) || {} : d && (n = ve(g, { iso2: d })), (!n || !n.dialCode) && (n = { dialCode: "", priority: 10001 }), n;
  }, [U, g, d]), r = ce(() => {
    const a = U || "", n = a.length < 2 && e && e.dialCode && !fe(a.replace(/\D/g, ""), e.dialCode) ? e.dialCode : "";
    return a === "" && (!e || !e.name) ? "" : B(
      (c ? "" : n) + a.replace(/\D/g, ""),
      e.name ? e.format : void 0
    );
  }, [U, e, c, B]), t = y(
    (a) => a ? {
      name: a.name || "",
      dialCode: a.dialCode || "",
      countryCode: a.iso2 || ""
    } : {},
    []
  ), u = y(() => {
    const a = V.current;
    if (a && (a.focus(), R && R())) {
      const n = a.value.length;
      a.setSelectionRange(n, n);
    }
  }, [R]), K = y(
    (a) => {
      let n = e, s = c ? "" : "+";
      if (!C) {
        const o = `+${n.dialCode}`;
        if (a.target.value.length < o.length)
          return;
      }
      if (a.target.value.replace(/\D/g, "").length > 15 || a.target.value === r)
        return;
      if (a.target.value.length > 0) {
        const o = a.target.value.replace(/\D/g, "");
        (!F || e.dialCode.length > o.length) && (n = Ie(
          o.substring(0, 6),
          g,
          d
        ), N(!1)), s = B(o, n.format);
      }
      let b = a.target.selectionStart || 0;
      const E = s.length - r.length;
      R && R() && requestAnimationFrame(() => {
        const o = V.current;
        if (!o) return;
        E > 0 && (b -= E), s.charAt(s.length - 1) === ")" ? o.setSelectionRange(
          s.length - 1,
          s.length - 1
        ) : b > 0 && r.length >= s.length && o.setSelectionRange(b, b);
      }), _ && _(s, t(n));
    },
    [
      e,
      F,
      C,
      c,
      r,
      g,
      d,
      B,
      R,
      _,
      t
    ]
  ), P = y(
    (a) => {
      const n = Ve(a) ? ve(g, (o) => o.iso2 === a) : ve(g, a);
      if (!n) return;
      const s = r.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), b = s.length > 1 ? s.replace(
        e.dialCode,
        n.dialCode
      ) : n.dialCode, E = B(
        b.replace(/\D/g, ""),
        n.format
      );
      _ && _(E, t(n)), Y(null), N(!0), setTimeout(() => u(), 0);
    },
    [
      r,
      e,
      g,
      B,
      _,
      u,
      t
    ]
  ), m = y(
    (a) => {
      q(""), A && A(a, t(e)), setTimeout(() => u(), 10);
    },
    [A, u, t, e]
  ), w = y(
    (a) => {
      a.target.value || q(ie || ""), H && H(a, t(e));
    },
    [ie, H, t, e]
  ), ee = y(
    (a) => {
      G && G(a, t(e));
    },
    [G, t, e]
  ), D = y(
    (a) => {
      v && a.which === v.ENTER && W && W(a), M && M(a);
    },
    [v, W, M]
  ), ae = y((a) => {
    !a || !a.parentElement || (a.parentElement.scrollTop = a.offsetTop);
  }, []), re = y((a) => {
    const n = g.length + I.length;
    let s = j + a;
    return (s < 0 || s >= n) && (s -= a), s;
  }, [j, g, I]), pe = y(() => {
    const n = ((E) => !E || E.length === 0 ? null : Ee(
      g,
      (o) => fe(o.name.toLowerCase(), E.toLowerCase())
    )[0])(z) || g[0], s = Ye(g, n) + I.length, b = Z.current[`flag_no_${s}`];
    ae(b), O(""), X(s);
  }, [z, g, I, ae]), i = ce(
    () => qe(pe, 100),
    [pe]
  ), S = y(
    (a) => {
      if (!oe || l.disabled || !v) return;
      a.preventDefault && a.preventDefault();
      const n = (s) => {
        const b = re(s);
        X(b);
        const E = Z.current[`flag_no_${b}`];
        ae(E);
      };
      switch (a.which) {
        case v.DOWN:
          n(1);
          break;
        case v.UP:
          n(-1);
          break;
        case v.ENTER: {
          const b = [
            ...I,
            ...g
          ][j];
          b && P(b);
          break;
        }
        case v.ESC:
          Y(null), u();
          break;
        default:
          (a.which >= v.A && a.which <= v.Z || a.which === v.SPACE) && (O((s) => s + String.fromCharCode(a.which)), i());
      }
    },
    [
      oe,
      j,
      l.disabled,
      v,
      g,
      I,
      P,
      u,
      i,
      ae,
      re
    ]
  );
  Fe(() => (document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S)), [S]);
  const $ = y(
    (a) => {
      V.current = a, l.inputRef && (typeof l.inputRef == "function" ? l.inputRef(a) : l.inputRef.current = a);
    },
    [l.inputRef]
  ), je = y(() => te ? te(r.replace(/\D/g, "")) : !0, [te, r]);
  return {
    formattedNumber: r,
    selectedCountry: e,
    highlightCountryIndex: j,
    queryString: z,
    freezeSelection: F,
    anchorEl: oe,
    placeholder: Q,
    computedOnlyCountries: g,
    computedPreferredCountries: I,
    flagsRef: Z,
    inputRef: V,
    setAnchorEl: Y,
    setHighlightCountryIndex: X,
    setQueryString: O,
    setFreezeSelection: N,
    setCurrentPlaceholder: q,
    handleInput: K,
    handleInputClick: ee,
    handleInputFocus: m,
    handleInputBlur: w,
    handleKeydown: S,
    handleInputKeyDown: D,
    handleRefInput: $,
    handleFlagItemClick: P,
    isValid: je
  };
}, ma = (l) => {
  const {
    autoFormat: h,
    classes: C,
    countryCodeEditable: d,
    defaultCountry: f,
    disableAreaCodes: c,
    disableCountryCode: p,
    disableDropdown: T,
    dropdownClass: R,
    enableLongNumbers: v,
    excludeCountries: L,
    inputClass: _,
    onlyCountries: W,
    preferredCountries: M,
    regions: H,
    localization: A,
    isValid: G,
    isModernBrowser: ie,
    keys: se,
    native: J,
    onEnterKeyPress: te,
    error: U,
    InputProps: Z,
    variant: V = "standard",
    onChange: g,
    onFocus: I,
    onBlur: B,
    onClick: oe,
    onKeyDown: Y,
    ...j
  } = l, {
    formattedNumber: X,
    placeholder: z,
    selectedCountry: O,
    anchorEl: F,
    flagsRef: N,
    // biome-ignore lint/correctness/noUnusedVariables: inputRef from hook is passed correctly to TextField as handleRefInput
    setAnchorEl: Q,
    handleInput: q,
    handleInputClick: e,
    handleInputFocus: r,
    handleInputBlur: t,
    handleInputKeyDown: u,
    handleRefInput: K,
    handleFlagItemClick: P,
    computedOnlyCountries: m,
    computedPreferredCountries: w,
    isValid: ee
  } = ra(l), D = {
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
    positionStart: {
      position: "relative"
    },
    flagIcon: {
      width: 30,
      height: 24,
      paddingRight: 8
    }
  }, ae = (i) => !!(O && O.dialCode === i.dialCode), re = Pe[O.iso2.toUpperCase()], pe = T ? {} : {
    startAdornment: /* @__PURE__ */ k.jsx(ze, { style: D.positionStart, position: "start", children: J ? /* @__PURE__ */ k.jsxs(
      $e,
      {
        id: "country-menu",
        style: D.native,
        onChange: (i) => P(i.target.value),
        IconComponent: !!re && re,
        disableUnderline: !0,
        children: [
          !!w.length && ge(
            w,
            (i, S) => /* @__PURE__ */ k.jsx(
              Ce,
              {
                itemRef: ($) => {
                  N.current[`flag_no_${S}`] = $;
                },
                name: i.name,
                iso2: i.iso2,
                dialCode: i.dialCode,
                localization: A?.[i.name],
                native: !0
              },
              `preferred_${i.iso2}_${S}`
            )
          ),
          ge(
            m,
            (i, S) => /* @__PURE__ */ k.jsx(
              Ce,
              {
                itemRef: ($) => {
                  N.current[`flag_no_${S}`] = $;
                },
                name: i.name,
                iso2: i.iso2,
                dialCode: i.dialCode,
                localization: A?.[i.name],
                native: !0
              },
              `preferred_${i.iso2}_${S}`
            )
          )
        ]
      }
    ) : /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsx(
        Be,
        {
          style: D.flagButton,
          "aria-owns": F ? "country-menu" : void 0,
          "aria-label": "Select country",
          onClick: (i) => Q(i.currentTarget),
          "aria-haspopup": !0,
          children: !!re && /* @__PURE__ */ k.jsx(re, { className: "margin" })
        }
      ),
      /* @__PURE__ */ k.jsxs(
        De,
        {
          className: R,
          id: "country-menu",
          anchorEl: F,
          open: !!F,
          onClose: () => Q(null),
          children: [
            !!w.length && ge(
              w,
              (i, S) => /* @__PURE__ */ k.jsx(
                Ce,
                {
                  itemRef: ($) => {
                    N.current[`flag_no_${S}`] = $;
                  },
                  selected: ae(i),
                  onClick: () => P(i),
                  name: i.name,
                  iso2: i.iso2,
                  dialCode: i.dialCode,
                  localization: A?.[i.name],
                  style: D.flagIcon
                },
                `preferred_${i.iso2}_${S}`
              )
            ),
            !!w.length && /* @__PURE__ */ k.jsx(Me, {}),
            ge(
              m,
              (i, S) => /* @__PURE__ */ k.jsx(
                Ce,
                {
                  itemRef: ($) => {
                    N.current[`flag_no_${S}`] = $;
                  },
                  selected: ae(i),
                  onClick: () => P(i),
                  name: i.name,
                  iso2: i.iso2,
                  dialCode: i.dialCode,
                  localization: A?.[i.name],
                  style: D.flagIcon
                },
                `preferred_${i.iso2}_${S}`
              )
            )
          ]
        }
      )
    ] }) })
  };
  return /* @__PURE__ */ k.jsx(
    Le,
    {
      variant: V,
      placeholder: z,
      value: X,
      className: _,
      inputRef: K,
      error: U || !ee(),
      onChange: q,
      onClick: e,
      onFocus: r,
      onBlur: t,
      onKeyDown: u,
      type: "tel",
      InputProps: {
        ...pe,
        ...Z
      },
      ...j
    }
  );
};
export {
  ma as default
};
