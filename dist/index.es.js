import je, { useRef as ye, useState as oe, useEffect as we, useMemo as se, useCallback as x, useDebugValue as De } from "react";
import $e from "@mui/material/Divider";
import Le from "@mui/material/IconButton";
import Ge from "@mui/material/InputAdornment";
import Ve from "@mui/material/Menu";
import Ue from "@mui/material/NativeSelect";
import Ye from "@mui/material/TextField";
import * as Oe from "country-flag-icons/react/3x2";
import ve from "lodash/map";
import qe from "@mui/material/MenuItem";
import Ke from "lodash/debounce";
import _e from "lodash/filter";
import fe from "lodash/find";
import We from "lodash/findIndex";
import He from "lodash/head";
import Je from "lodash/includes";
import Ze from "lodash/isString";
import Fe from "lodash/reduce";
import Xe from "lodash/some";
import pe from "lodash/startsWith";
import Qe from "lodash/tail";
import ea from "lodash/trim";
var Ee = { exports: {} }, de = {};
var xe;
function aa() {
  if (xe) return de;
  xe = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(m, f, l) {
    var p = null;
    if (l !== void 0 && (p = "" + l), f.key !== void 0 && (p = "" + f.key), "key" in f) {
      l = {};
      for (var S in f)
        S !== "key" && (l[S] = f[S]);
    } else l = f;
    return f = l.ref, {
      $$typeof: s,
      type: m,
      key: p,
      ref: f !== void 0 ? f : null,
      props: l
    };
  }
  return de.Fragment = g, de.jsx = h, de.jsxs = h, de;
}
var me = {};
var Ie;
function ra() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === b ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case H:
          return "Fragment";
        case ee:
          return "Profiler";
        case te:
          return "StrictMode";
        case G:
          return "Suspense";
        case V:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case ie:
            return e.displayName || "Context";
          case ae:
            return (e._context.displayName || "Context") + ".Consumer";
          case O:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case le:
            return n = e.displayName || null, n !== null ? n : s(e.type) || "Memo";
          case J:
            n = e._payload, e = e._init;
            try {
              return s(e(n));
            } catch {
            }
        }
      return null;
    }
    function g(e) {
      return "" + e;
    }
    function h(e) {
      try {
        g(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var u = n.error, r = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          r
        ), g(e);
      }
    }
    function m(e) {
      if (e === H) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === J)
        return "<...>";
      try {
        var n = s(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (F.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function S(e, n) {
      function u() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function y() {
      var e = s(this.type);
      return B[e] || (B[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, n, u, r, R, T) {
      var c = u.ref;
      return e = {
        $$typeof: Q,
        type: e,
        key: n,
        props: u,
        _owner: r
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: y
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
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function W(e, n, u, r, R, T) {
      var c = n.children;
      if (c !== void 0)
        if (r)
          if (Z(c)) {
            for (r = 0; r < c.length; r++)
              I(c[r]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I(c);
      if (F.call(n, "key")) {
        c = s(e);
        var w = Object.keys(n).filter(function(K) {
          return K !== "key";
        });
        r = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", z[c + r] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          r,
          c,
          w,
          c
        ), z[c + r] = !0);
      }
      if (c = null, u !== void 0 && (h(u), c = "" + u), p(n) && (h(n.key), c = "" + n.key), "key" in n) {
        u = {};
        for (var q in n)
          q !== "key" && (u[q] = n[q]);
      } else u = n;
      return c && S(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        c,
        u,
        f(),
        R,
        T
      );
    }
    function I(e) {
      X(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === J && (e._payload.status === "fulfilled" ? X(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Q;
    }
    var L = je, Q = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), H = /* @__PURE__ */ Symbol.for("react.fragment"), te = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), ie = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), le = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), b = /* @__PURE__ */ Symbol.for("react.client.reference"), A = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, Z = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    L = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, B = {}, j = L.react_stack_bottom_frame.bind(
      L,
      l
    )(), Y = U(m(l)), z = {};
    me.Fragment = H, me.jsx = function(e, n, u) {
      var r = 1e4 > A.recentlyCreatedOwnerStacks++;
      return W(
        e,
        n,
        u,
        !1,
        r ? Error("react-stack-top-frame") : j,
        r ? U(m(e)) : Y
      );
    }, me.jsxs = function(e, n, u) {
      var r = 1e4 > A.recentlyCreatedOwnerStacks++;
      return W(
        e,
        n,
        u,
        !0,
        r ? Error("react-stack-top-frame") : j,
        r ? U(m(e)) : Y
      );
    };
  })()), me;
}
var Ne;
function na() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? Ee.exports = aa() : Ee.exports = ra()), Ee.exports;
}
var k = na();
const ta = ({
  name: s,
  iso2: g,
  dialCode: h,
  localization: m,
  itemRef: f,
  native: l = !1,
  ...p
}) => {
  if (l)
    return /* @__PURE__ */ k.jsxs(
      "option",
      {
        className: "country",
        "data-dial-code": h,
        "data-country-code": g,
        value: g,
        ...p,
        onClick: p.onClick,
        children: [
          m || s,
          " ",
          `+${h}`
        ]
      }
    );
  const S = Oe[g.toUpperCase()];
  return /* @__PURE__ */ k.jsxs(
    qe,
    {
      ref: f,
      className: "country",
      "data-dial-code": h,
      "data-country-code": g,
      ...p,
      children: [
        !!S && /* @__PURE__ */ k.jsx(
          "div",
          {
            className: p.className,
            style: { width: 30, height: 24, paddingRight: 8 },
            children: /* @__PURE__ */ k.jsx(S, {})
          }
        ),
        /* @__PURE__ */ k.jsx("span", { className: "country-name", children: m || s }),
        " ",
        /* @__PURE__ */ k.jsx("span", { className: "dial-code", children: `+${h}` })
      ]
    }
  );
}, ke = je.memo(ta), ia = [
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
], Re = {};
function Pe(s, g, h) {
  g in Re || (Re[g] = []);
  const m = h || 0;
  Re[g][m] = s;
}
const oa = [].concat(
  ...ia.map((s) => {
    const [g, h, m, f, l, p, S] = s, y = {
      name: g,
      regions: h,
      iso2: m,
      dialCode: f,
      priority: p || 0,
      format: l || void 0,
      hasAreaCodes: !!S
    }, E = [];
    return y.hasAreaCodes && S && S.forEach((W) => {
      const I = {
        ...y,
        regions: h,
        dialCode: `${f}${W}`,
        isAreaCode: !0
      };
      E.push(I), Pe(m, I.dialCode);
    }), Pe(
      y.iso2,
      y.dialCode,
      y.hasAreaCodes ? 1 : 0
    ), E.length > 0 ? [y, ...E] : [y];
  })
), Te = {
  allCountries: oa
}, Ae = (s, g, h) => {
  const m = fe(g, { iso2: h }) || {};
  if (ea(s) === "") return m;
  const f = Fe(
    g,
    (l, p) => pe(s, p.dialCode) && (p.dialCode.length > l.dialCode.length || p.dialCode.length === l.dialCode.length && p.priority < l.priority) ? p : l,
    { dialCode: "", priority: 10001 }
  );
  return f.name ? f : m;
}, sa = (s) => {
  const {
    autoFormat: g = !0,
    countryCodeEditable: h = !0,
    defaultCountry: m = "",
    disableAreaCodes: f = !1,
    disableCountryCode: l = !1,
    enableLongNumbers: p = !1,
    excludeCountries: S = [],
    isModernBrowser: y = () => document.createElement ? !!document.createElement("input").setSelectionRange : !1,
    keys: E = {
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
    onlyCountries: W = [],
    onChange: I,
    onEnterKeyPress: X,
    onKeyDown: L,
    onBlur: Q,
    onFocus: M,
    onClick: H,
    placeholder: te = "+1 (702) 123-4567",
    preferredCountries: ee = [],
    regions: ae = "",
    isValid: ie = (a) => Xe(
      Te.allCountries,
      (i) => pe(a, i.dialCode) || pe(i.dialCode, a)
    ),
    value: O
  } = s, G = ye({}), V = ye(null), [le, J] = oe(O || "");
  we(() => {
    O !== void 0 && J(O);
  }, [O]);
  const re = se(
    () => O !== void 0 ? O : le,
    [O, le]
  ), b = se(() => {
    let a = Te.allCountries;
    const i = (_) => _.filter(($) => $.isAreaCode !== !0), o = (_, $) => {
      if (typeof _ == "string") {
        const ne = _;
        return $.filter(
          (Ce) => Ce.regions.some((ue) => ue === ne)
        );
      }
      return $.filter((ne) => _.map(
        (ue) => ne.regions.some((ze) => ze === ue)
      ).some((ue) => ue));
    }, C = (_, $) => _.length === 0 ? $ : $.filter(
      (ne) => _.some((Ce) => Ce === ne.iso2)
    ), v = (_, $) => $.length === 0 ? _ : _e(
      _,
      (ne) => !Je($, ne.iso2)
    );
    f && (a = i(a)), ae && (a = o(ae, a));
    const d = C(
      W,
      a
    );
    return v(d, [
      ...S,
      ...ee
    ]);
  }, [
    f,
    ae,
    W,
    S,
    ee
  ]), A = se(() => ee.map((a) => fe(Te.allCountries, { iso2: a })).filter(Boolean), [ee]), F = x(
    (a, i) => {
      let o = "";
      if (l && i ? o = i.split(" ").slice(1).join(" ") : o = i, !a || a.length === 0)
        return l ? "" : "+";
      if (a && a.length < 2 || !o || !g)
        return l ? a : `+${a}`;
      const C = Fe(
        o,
        (d, _) => d.remainingText.length === 0 ? d : _ !== "." ? {
          formattedText: d.formattedText + _,
          remainingText: d.remainingText
        } : {
          formattedText: d.formattedText + He(d.remainingText),
          remainingText: Qe(d.remainingText)
        },
        {
          formattedText: "",
          remainingText: a.split("")
        }
      );
      let v = "";
      return p ? v = C.formattedText + C.remainingText.join("") : v = C.formattedText, v.includes("(") && !v.includes(")") && (v += ")"), v;
    },
    [l, g, p]
  ), [Z, U] = oe(null), [N, B] = oe(0), [j, Y] = oe(""), [z, e] = oe(!1), [n, u] = oe(te), r = se(() => {
    const a = re || "";
    let i;
    return a.length > 1 ? i = Ae(
      a.replace(/\D/g, "").substring(0, 6),
      b,
      m
    ) || {} : m && (i = fe(b, { iso2: m })), (!i || !i.dialCode) && (i = {
      dialCode: "",
      priority: 10001,
      iso2: "",
      name: "",
      regions: []
    }), i;
  }, [re, b, m]), R = se(() => {
    const a = re || "", i = a.length < 2 && r && r.dialCode && !pe(a.replace(/\D/g, ""), r.dialCode) ? r.dialCode : "";
    return a === "" && (!r || !r.name) ? "" : F(
      (l ? "" : i) + a.replace(/\D/g, ""),
      r.name ? r.format : void 0
    );
  }, [
    re,
    r,
    l,
    F
  ]), T = x((a) => a ? {
    name: a.name || "",
    dialCode: a.dialCode || "",
    countryCode: a.iso2 || ""
  } : {}, []), c = x(() => {
    const a = V.current;
    if (a && (a.focus(), y?.())) {
      const i = a.value.length;
      a.setSelectionRange(i, i);
    }
  }, [y]), w = x(
    (a) => {
      let i = r, o = l ? "" : "+";
      if (console.log(
        "handleInput called with value:",
        a.target.value,
        `
Country Code Editable:`,
        h
      ), !h) {
        const d = `+${i.dialCode}`;
        if (a.target.value.length < d.length)
          return;
      }
      if (a.target.value.replace(/\D/g, "").length > 15 || a.target.value === R)
        return;
      if (a.target.value.length > 0) {
        const d = a.target.value.replace(/\D/g, "");
        console.log("Processed input number:", d), console.log(
          "Guess?: ",
          !z,
          r.dialCode.length > d.length
        ), (!z || r.dialCode.length > d.length) && (i = Ae(
          d.substring(0, 6),
          b,
          m
        ), e(!1)), o = F(
          d,
          i.format
        );
      }
      let C = a.target.selectionStart || 0;
      const v = o.length - R.length;
      console.log("Is modern browser:", y?.()), console.log("Caret position before adjustment:", C), console.log("Formatted number:", R), console.log("New formatted number:", o), y?.() && requestAnimationFrame(() => {
        const d = V.current;
        if (console.log("Input ref in animation frame:", d), !d) return;
        v > 0 && (C -= v), o.charAt(
          o.length - 1
        ) === ")" ? d.setSelectionRange(
          o.length - 1,
          o.length - 1
        ) : C > 0 && R.length >= o.length && d.setSelectionRange(C, C);
      }), J(o), I && I(o, T(i));
    },
    [
      r,
      z,
      h,
      l,
      R,
      b,
      m,
      F,
      y,
      I,
      T
    ]
  ), q = x(
    (a) => {
      const i = Ze(a) ? fe(
        b,
        (d) => d.iso2 === a
      ) : fe(b, a);
      if (!i) return;
      const o = R.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), C = o.length > 1 ? o.replace(
        r.dialCode,
        i.dialCode
      ) : i.dialCode, v = F(
        C.replace(/\D/g, ""),
        i.format
      );
      J(v), I && I(v, T(i)), U(null), e(!0), setTimeout(() => c(), 0);
    },
    [
      R,
      r,
      b,
      F,
      I,
      c,
      T
    ]
  ), K = x(
    (a) => {
      u(""), M && M(a, T(r)), setTimeout(() => c(), 10);
    },
    [M, c, T, r]
  ), ge = x(
    (a) => {
      a.target.value || u(te || ""), Q && Q(a, T(r));
    },
    [te, Q, T, r]
  ), ce = x(
    (a) => {
      H && H(a, T(r));
    },
    [H, T, r]
  ), he = x(
    (a) => {
      E && a.which === E.ENTER && X && X(a), L && L(a);
    },
    [E, X, L]
  ), t = x((a) => {
    !a || !a.parentElement || (a.parentElement.scrollTop = a.offsetTop);
  }, []), P = x(
    (a) => {
      const i = b.length + A.length;
      let o = N + a;
      return (o < 0 || o >= i) && (o -= a), o;
    },
    [N, b, A]
  ), D = x(() => {
    const i = ((v) => !v || v.length === 0 ? null : _e(
      b,
      (d) => pe(d.name.toLowerCase(), v.toLowerCase())
    )[0])(j) || b[0], o = We(b, i) + A.length, C = G.current[`flag_no_${o}`];
    t(C), Y(""), B(o);
  }, [
    j,
    b,
    A,
    t
  ]), Se = se(
    () => Ke(D, 100),
    [D]
  ), be = x(
    // biome-ignore lint/suspicious/noExplicitAny: event type --- IGNORE ---
    (a) => {
      if (!Z || s.disabled || !E) return;
      a.preventDefault && a.preventDefault();
      const i = (o) => {
        const C = P(o);
        B(C);
        const v = G.current[`flag_no_${C}`];
        t(v);
      };
      switch (a.which) {
        case E.DOWN:
          i(1);
          break;
        case E.UP:
          i(-1);
          break;
        case E.ENTER: {
          const C = [
            ...A,
            ...b
          ][N];
          C && q(C);
          break;
        }
        case E.ESC:
          U(null), c();
          break;
        default:
          (a.which >= E.A && a.which <= E.Z || a.which === E.SPACE) && (Y((o) => o + String.fromCharCode(a.which)), Se());
      }
    },
    [
      Z,
      N,
      s.disabled,
      E,
      b,
      A,
      q,
      c,
      Se,
      t,
      P
    ]
  );
  we(() => (document.addEventListener("keydown", be), () => document.removeEventListener("keydown", be)), [be]);
  const Me = x(
    (a) => {
      V.current = a, s.inputRef && (typeof s.inputRef == "function" ? s.inputRef(a) : s.inputRef.current = a);
    },
    [s.inputRef]
  ), Be = x(() => ie ? ie(R.replace(/\D/g, "")) : !0, [ie, R]);
  return De({
    formattedNumber: R,
    selectedCountry: r,
    highlightCountryIndex: N,
    queryString: j,
    freezeSelection: z,
    anchorEl: Z,
    currentPlaceholder: n,
    computedOnlyCountries: b,
    computedPreferredCountries: A,
    flagsRef: G,
    inputRef: V
  }), {
    formattedNumber: R,
    selectedCountry: r,
    highlightCountryIndex: N,
    queryString: j,
    freezeSelection: z,
    anchorEl: Z,
    placeholder: n,
    computedOnlyCountries: b,
    computedPreferredCountries: A,
    flagsRef: G,
    inputRef: V,
    setAnchorEl: U,
    setHighlightCountryIndex: B,
    setQueryString: Y,
    setFreezeSelection: e,
    setCurrentPlaceholder: u,
    handleInput: w,
    handleInputClick: ce,
    handleInputFocus: K,
    handleInputBlur: ge,
    handleKeydown: be,
    handleInputKeyDown: he,
    handleRefInput: Me,
    handleFlagItemClick: q,
    isValid: Be
  };
}, Ia = (s) => {
  const {
    autoFormat: g,
    classes: h,
    countryCodeEditable: m,
    defaultCountry: f,
    disableAreaCodes: l,
    disableCountryCode: p,
    disableDropdown: S,
    dropdownClass: y,
    enableLongNumbers: E,
    excludeCountries: W,
    inputClass: I,
    onlyCountries: X,
    preferredCountries: L,
    regions: Q,
    localization: M,
    isValid: H,
    isModernBrowser: te,
    keys: ee,
    native: ae,
    onEnterKeyPress: ie,
    error: O,
    InputProps: G,
    variant: V = "standard",
    onChange: le,
    onFocus: J,
    onBlur: re,
    onClick: b,
    onKeyDown: A,
    ...F
  } = s, {
    formattedNumber: Z,
    placeholder: U,
    selectedCountry: N,
    anchorEl: B,
    flagsRef: j,
    setAnchorEl: Y,
    handleInput: z,
    handleInputClick: e,
    handleInputFocus: n,
    handleInputBlur: u,
    handleInputKeyDown: r,
    handleRefInput: R,
    handleFlagItemClick: T,
    computedOnlyCountries: c,
    computedPreferredCountries: w,
    isValid: q
  } = sa(s), K = {
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
  }, ge = (t) => !!(N && N.dialCode === t.dialCode), ce = N.iso2 ? Oe[N.iso2.toUpperCase()] : void 0, he = S ? {} : {
    startAdornment: /* @__PURE__ */ k.jsx(Ge, { style: K.positionStart, position: "start", children: ae ? /* @__PURE__ */ k.jsxs(
      Ue,
      {
        id: "country-menu",
        style: K.native,
        onChange: (t) => T(t.target.value),
        IconComponent: ce,
        disableUnderline: !0,
        children: [
          !!w.length && ve(
            w,
            (t, P) => /* @__PURE__ */ k.jsx(
              ke,
              {
                itemRef: (D) => {
                  j.current[`flag_no_${P}`] = D;
                },
                name: t.name,
                iso2: t.iso2,
                dialCode: t.dialCode,
                localization: M?.[t.name],
                native: !0
              },
              `preferred_${t.iso2}_${P}`
            )
          ),
          ve(
            c,
            (t, P) => /* @__PURE__ */ k.jsx(
              ke,
              {
                itemRef: (D) => {
                  j.current[`flag_no_${P + w.length}`] = D;
                },
                name: t.name,
                iso2: t.iso2,
                dialCode: t.dialCode,
                localization: M?.[t.name],
                native: !0
              },
              `country_${t.iso2}_${P}`
            )
          )
        ]
      }
    ) : /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsx(
        Le,
        {
          style: K.flagButton,
          "aria-owns": B ? "country-menu" : void 0,
          "aria-label": "Select country",
          onClick: (t) => Y(t.currentTarget),
          "aria-haspopup": !0,
          children: !!ce && /* @__PURE__ */ k.jsx(ce, { className: "margin" })
        }
      ),
      /* @__PURE__ */ k.jsxs(
        Ve,
        {
          className: y,
          id: "country-menu",
          anchorEl: B,
          open: !!B,
          onClose: () => Y(null),
          children: [
            !!w.length && ve(
              w,
              (t, P) => /* @__PURE__ */ k.jsx(
                ke,
                {
                  itemRef: (D) => {
                    j.current[`flag_no_${P}`] = D;
                  },
                  selected: ge(t),
                  onClick: () => T(t),
                  name: t.name,
                  iso2: t.iso2,
                  dialCode: t.dialCode,
                  localization: M?.[t.name],
                  style: K.flagIcon
                },
                `preferred_${t.iso2}_${P}`
              )
            ),
            !!w.length && /* @__PURE__ */ k.jsx($e, {}),
            ve(
              c,
              (t, P) => /* @__PURE__ */ k.jsx(
                ke,
                {
                  itemRef: (D) => {
                    j.current[`flag_no_${P + w.length}`] = D;
                  },
                  selected: ge(t),
                  onClick: () => T(t),
                  name: t.name,
                  iso2: t.iso2,
                  dialCode: t.dialCode,
                  localization: M?.[t.name],
                  style: K.flagIcon
                },
                `country_${t.iso2}_${P}`
              )
            )
          ]
        }
      )
    ] }) })
  };
  return /* @__PURE__ */ k.jsx(
    Ye,
    {
      variant: V,
      placeholder: U,
      value: Z,
      className: I,
      inputRef: R,
      error: O || !q(),
      onChange: z,
      onClick: e,
      onFocus: n,
      onBlur: u,
      onKeyDown: r,
      type: "tel",
      InputProps: {
        ...he,
        ...G
      },
      slotProps: {
        input: {
          ...he,
          ...G
        }
      },
      ...F
    }
  );
};
export {
  Ia as default
};
