import z from "react";
import u from "prop-types";
import de from "country-flag-icons/react/3x2";
import ge from "@mui/material/TextField";
import Ce from "@mui/material/InputAdornment";
import be from "@mui/material/IconButton";
import ye from "@mui/material/Menu";
import ve from "@mui/material/Divider";
import Se from "@mui/material/NativeSelect";
import { memoize as ne, find as k, trim as Ee, reduce as ie, startsWith as w, filter as G, some as me, findIndex as oe, debounce as Te, includes as Re, tail as ke, head as we, isString as xe, map as D } from "lodash";
import _e from "@mui/material/MenuItem";
var O = { exports: {} }, P = {};
var se;
function Ne() {
  if (se) return P;
  se = 1;
  var S = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(t, i, n) {
    var o = null;
    if (n !== void 0 && (o = "" + n), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      n = {};
      for (var s in i)
        s !== "key" && (n[s] = i[s]);
    } else n = i;
    return i = n.ref, {
      $$typeof: S,
      type: t,
      key: o,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return P.Fragment = e, P.jsx = r, P.jsxs = r, P;
}
var I = {};
var le;
function Pe() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function S(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === B ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case T:
          return "Fragment";
        case K:
          return "Profiler";
        case V:
          return "StrictMode";
        case J:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case C:
            return "Portal";
          case W:
            return a.displayName || "Context";
          case Y:
            return (a._context.displayName || "Context") + ".Consumer";
          case H:
            var d = a.render;
            return a = a.displayName, a || (a = d.displayName || d.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case X:
            return d = a.displayName || null, d !== null ? d : S(a.type) || "Memo";
          case _:
            d = a._payload, a = a._init;
            try {
              return S(a(d));
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
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var f = d.error, b = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return f.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), e(a);
      }
    }
    function t(a) {
      if (a === T) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === _)
        return "<...>";
      try {
        var d = S(a);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var a = N.A;
      return a === null ? null : a.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function o(a) {
      if (A.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function s(a, d) {
      function f() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: f,
        configurable: !0
      });
    }
    function c() {
      var a = S(this.type);
      return ee[a] || (ee[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function m(a, d, f, b, j, $) {
      var y = f.ref;
      return a = {
        $$typeof: p,
        type: a,
        key: d,
        props: f,
        _owner: b
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: c
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
        value: j
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function h(a, d, f, b, j, $) {
      var y = d.children;
      if (y !== void 0)
        if (b)
          if (he(y)) {
            for (b = 0; b < y.length; b++)
              g(y[b]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(y);
      if (A.call(d, "key")) {
        y = S(a);
        var R = Object.keys(d).filter(function(pe) {
          return pe !== "key";
        });
        b = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", te[y + b] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          y,
          R,
          y
        ), te[y + b] = !0);
      }
      if (y = null, f !== void 0 && (r(f), y = "" + f), o(d) && (r(d.key), y = "" + d.key), "key" in d) {
        f = {};
        for (var L in d)
          L !== "key" && (f[L] = d[L]);
      } else f = d;
      return y && s(
        f,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), m(
        a,
        y,
        f,
        i(),
        j,
        $
      );
    }
    function g(a) {
      E(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === _ && (a._payload.status === "fulfilled" ? E(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function E(a) {
      return typeof a == "object" && a !== null && a.$$typeof === p;
    }
    var l = z, p = /* @__PURE__ */ Symbol.for("react.transitional.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), M = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, he = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var Q, ee = {}, ae = l.react_stack_bottom_frame.bind(
      l,
      n
    )(), re = F(t(n)), te = {};
    I.Fragment = T, I.jsx = function(a, d, f) {
      var b = 1e4 > N.recentlyCreatedOwnerStacks++;
      return h(
        a,
        d,
        f,
        !1,
        b ? Error("react-stack-top-frame") : ae,
        b ? F(t(a)) : re
      );
    }, I.jsxs = function(a, d, f) {
      var b = 1e4 > N.recentlyCreatedOwnerStacks++;
      return h(
        a,
        d,
        f,
        !0,
        b ? Error("react-stack-top-frame") : ae,
        b ? F(t(a)) : re
      );
    };
  })()), I;
}
var ue;
function Ie() {
  return ue || (ue = 1, process.env.NODE_ENV === "production" ? O.exports = Ne() : O.exports = Pe()), O.exports;
}
var v = Ie();
const Ae = [
  [
    "Afghanistan",
    ["asia"],
    "af",
    "93"
  ],
  [
    "Albania",
    ["europe"],
    "al",
    "355"
  ],
  [
    "Algeria",
    ["africa", "north-africa"],
    "dz",
    "213"
  ],
  [
    "American Samoa",
    ["oceania"],
    "as",
    "1684"
  ],
  [
    "Andorra",
    ["europe"],
    "ad",
    "376"
  ],
  [
    "Angola",
    ["africa"],
    "ao",
    "244"
  ],
  [
    "Anguilla",
    ["america", "carribean"],
    "ai",
    "1264"
  ],
  [
    "Antigua and Barbuda",
    ["america", "carribean"],
    "ag",
    "1268"
  ],
  [
    "Argentina",
    ["america", "south-america"],
    "ar",
    "54",
    "+.. (..) ........"
  ],
  [
    "Armenia",
    ["asia", "ex-ussr"],
    "am",
    "374"
  ],
  [
    "Aruba",
    ["america", "carribean"],
    "aw",
    "297"
  ],
  [
    "Australia",
    ["oceania"],
    "au",
    "61",
    "+.. ... ... ..."
  ],
  [
    "Austria",
    ["europe", "european-union"],
    "at",
    "43"
  ],
  [
    "Azerbaijan",
    ["asia", "ex-ussr"],
    "az",
    "994"
  ],
  [
    "Bahamas",
    ["america", "carribean"],
    "bs",
    "1242"
  ],
  [
    "Bahrain",
    ["middle-east"],
    "bh",
    "973"
  ],
  [
    "Bangladesh",
    ["asia"],
    "bd",
    "880"
  ],
  [
    "Barbados",
    ["america", "carribean"],
    "bb",
    "1246"
  ],
  [
    "Belarus",
    ["europe", "ex-ussr"],
    "by",
    "375",
    "+... (..) ... .. .."
  ],
  [
    "Belgium",
    ["europe", "european-union"],
    "be",
    "32",
    "+.. ... .. .. .."
  ],
  [
    "Belize",
    ["america", "central-america"],
    "bz",
    "501"
  ],
  [
    "Benin",
    ["africa"],
    "bj",
    "229",
    "+... .... ...."
  ],
  [
    "Bermuda",
    ["america", "north-america"],
    "bm",
    "1441"
  ],
  [
    "Bhutan",
    ["asia"],
    "bt",
    "975"
  ],
  [
    "Bolivia",
    ["america", "south-america"],
    "bo",
    "591"
  ],
  [
    "Bosnia and Herzegovina",
    ["europe"],
    "ba",
    "387"
  ],
  [
    "Botswana",
    ["africa"],
    "bw",
    "267"
  ],
  [
    "Brazil",
    ["america", "south-america"],
    "br",
    "55",
    "+.. (..) ........."
  ],
  [
    "British Indian Ocean Territory",
    ["asia"],
    "io",
    "246"
  ],
  [
    "British Virgin Islands",
    ["america", "carribean"],
    "vg",
    "1284"
  ],
  [
    "Brunei",
    ["asia"],
    "bn",
    "673"
  ],
  [
    "Bulgaria",
    ["europe", "european-union"],
    "bg",
    "359"
  ],
  [
    "Burkina Faso",
    ["africa"],
    "bf",
    "226",
    "+... .. .. .. .."
  ],
  [
    "Burundi",
    ["africa"],
    "bi",
    "257",
    "+... .. .. .. .."
  ],
  [
    "Cambodia",
    ["asia"],
    "kh",
    "855"
  ],
  [
    "Cameroon",
    ["africa"],
    "cm",
    "237"
  ],
  [
    "Canada",
    ["america", "north-america"],
    "ca",
    "1",
    "+. (...) ...-....",
    1,
    ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
  ],
  [
    "Cape Verde",
    ["africa"],
    "cv",
    "238",
    "+... ... .. .."
  ],
  [
    "Caribbean Netherlands",
    ["america", "carribean"],
    "bq",
    "599",
    "",
    1
  ],
  [
    "Cayman Islands",
    ["america", "carribean"],
    "ky",
    "1345"
  ],
  [
    "Central African Republic",
    ["africa"],
    "cf",
    "236",
    "+... .... ...."
  ],
  [
    "Chad",
    ["africa"],
    "td",
    "235",
    "+... .. .. .. .."
  ],
  [
    "Chile",
    ["america", "south-america"],
    "cl",
    "56"
  ],
  [
    "China",
    ["asia"],
    "cn",
    "86",
    "+.. ..-........."
  ],
  [
    "Colombia",
    ["america", "south-america"],
    "co",
    "57"
  ],
  [
    "Comoros",
    ["africa"],
    "km",
    "269",
    "+... ... ...."
  ],
  [
    "Congo",
    ["africa"],
    "cd",
    "243"
  ],
  [
    "Congo",
    ["africa"],
    "cg",
    "242",
    "+... .. .. ....."
  ],
  [
    "Cook Islands",
    ["oceania"],
    "ck",
    "682"
  ],
  [
    "Costa Rica",
    ["america", "central-america"],
    "cr",
    "506",
    "+... ....-...."
  ],
  [
    "Côte d’Ivoire",
    ["africa"],
    "ci",
    "225",
    "+... .. .. .. .."
  ],
  [
    "Croatia",
    ["europe", "european-union"],
    "hr",
    "385"
  ],
  [
    "Cuba",
    ["america", "carribean"],
    "cu",
    "53"
  ],
  [
    "Curaçao",
    ["america", "carribean"],
    "cw",
    "599",
    "",
    0
  ],
  [
    "Cyprus",
    ["europe", "european-union"],
    "cy",
    "357",
    "+... .. ......"
  ],
  [
    "Czech Republic",
    ["europe", "european-union"],
    "cz",
    "420"
  ],
  [
    "Denmark",
    ["europe", "european-union"],
    "dk",
    "45",
    "+.. .. .. .. .."
  ],
  [
    "Djibouti",
    ["africa"],
    "dj",
    "253"
  ],
  [
    "Dominica",
    ["america", "carribean"],
    "dm",
    "1767"
  ],
  [
    "Dominican Republic",
    ["america", "carribean"],
    "do",
    "1",
    "",
    2,
    ["809", "829", "849"]
  ],
  [
    "Ecuador",
    ["america", "south-america"],
    "ec",
    "593"
  ],
  [
    "Egypt",
    ["africa", "north-africa"],
    "eg",
    "20"
  ],
  [
    "El Salvador",
    ["america", "central-america"],
    "sv",
    "503",
    "+... ....-...."
  ],
  [
    "Equatorial Guinea",
    ["africa"],
    "gq",
    "240",
    "+... .. ... ...."
  ],
  [
    "Eritrea",
    ["africa"],
    "er",
    "291"
  ],
  [
    "Estonia",
    ["europe", "european-union", "ex-ussr"],
    "ee",
    "372",
    "+... .... ......"
  ],
  [
    "Ethiopia",
    ["africa"],
    "et",
    "251"
  ],
  [
    "Falkland Islands",
    ["america", "south-america"],
    "fk",
    "500"
  ],
  [
    "Faroe Islands",
    ["europe"],
    "fo",
    "298"
  ],
  [
    "Fiji",
    ["oceania"],
    "fj",
    "679"
  ],
  [
    "Finland",
    ["europe", "european-union"],
    "fi",
    "358",
    "+... .. ... .. .."
  ],
  [
    "France",
    ["europe", "european-union"],
    "fr",
    "33",
    "+.. . .. .. .. .."
  ],
  [
    "French Guiana",
    ["america", "south-america"],
    "gf",
    "594"
  ],
  [
    "French Polynesia",
    ["oceania"],
    "pf",
    "689"
  ],
  [
    "Gabon",
    ["africa"],
    "ga",
    "241",
    "+... .. .. .. .."
  ],
  [
    "Gambia",
    ["africa"],
    "gm",
    "220"
  ],
  [
    "Georgia",
    ["asia", "ex-ussr"],
    "ge",
    "995"
  ],
  [
    "Germany",
    ["europe", "european-union"],
    "de",
    "49",
    "+.. .... ........"
  ],
  [
    "Ghana",
    ["africa"],
    "gh",
    "233"
  ],
  [
    "Gibraltar",
    ["europe"],
    "gi",
    "350"
  ],
  [
    "Greece",
    ["europe", "european-union"],
    "gr",
    "30"
  ],
  [
    "Greenland",
    ["america"],
    "gl",
    "299"
  ],
  [
    "Grenada",
    ["america", "carribean"],
    "gd",
    "1473"
  ],
  [
    "Guadeloupe",
    ["america", "carribean"],
    "gp",
    "590",
    "",
    0
  ],
  [
    "Guam",
    ["oceania"],
    "gu",
    "1671"
  ],
  [
    "Guatemala",
    ["america", "central-america"],
    "gt",
    "502",
    "+... ....-...."
  ],
  [
    "Guinea",
    ["africa"],
    "gn",
    "224",
    "+... . ... ...."
  ],
  [
    "Guinea-Bissau",
    ["africa"],
    "gw",
    "245"
  ],
  [
    "Guyana",
    ["america", "south-america"],
    "gy",
    "592"
  ],
  [
    "Haiti",
    ["america", "carribean"],
    "ht",
    "509",
    "+... ....-...."
  ],
  [
    "Honduras",
    ["america", "central-america"],
    "hn",
    "504"
  ],
  [
    "Hong Kong",
    ["asia"],
    "hk",
    "852",
    "+... .... ...."
  ],
  [
    "Hungary",
    ["europe", "european-union"],
    "hu",
    "36"
  ],
  [
    "Iceland",
    ["europe"],
    "is",
    "354",
    "+... ... ...."
  ],
  [
    "India",
    ["asia"],
    "in",
    "91",
    "+.. .....-....."
  ],
  [
    "Indonesia",
    ["asia"],
    "id",
    "62"
  ],
  [
    "Iran",
    ["middle-east"],
    "ir",
    "98"
  ],
  [
    "Iraq",
    ["middle-east"],
    "iq",
    "964"
  ],
  [
    "Ireland",
    ["europe", "european-union"],
    "ie",
    "353",
    "+... .. ......."
  ],
  [
    "Israel",
    ["middle-east"],
    "il",
    "972",
    "+... ... ... ...."
  ],
  [
    "Italy",
    ["europe", "european-union"],
    "it",
    "39",
    "+.. ... .......",
    0
  ],
  [
    "Jamaica",
    ["america", "carribean"],
    "jm",
    "1876"
  ],
  [
    "Japan",
    ["asia"],
    "jp",
    "81",
    "+.. .. .... ...."
  ],
  [
    "Jordan",
    ["middle-east"],
    "jo",
    "962"
  ],
  [
    "Kazakhstan",
    ["asia", "ex-ussr"],
    "kz",
    "7",
    "+. ... ...-..-..",
    1,
    ["313", "327", "7172", "312", "73622", "321", "324", "336", "318", "315", "325", "311", "326", "310"]
  ],
  [
    "Kenya",
    ["africa"],
    "ke",
    "254"
  ],
  [
    "Kiribati",
    ["oceania"],
    "ki",
    "686"
  ],
  [
    "Kosovo",
    ["europe"],
    "xk",
    "383"
  ],
  [
    "Kuwait",
    ["middle-east"],
    "kw",
    "965"
  ],
  [
    "Kyrgyzstan",
    ["asia", "ex-ussr"],
    "kg",
    "996"
  ],
  [
    "Laos",
    ["asia"],
    "la",
    "856"
  ],
  [
    "Latvia",
    ["europe", "european-union", "ex-ussr"],
    "lv",
    "371"
  ],
  [
    "Lebanon",
    ["middle-east"],
    "lb",
    "961"
  ],
  [
    "Lesotho",
    ["africa"],
    "ls",
    "266"
  ],
  [
    "Liberia",
    ["africa"],
    "lr",
    "231"
  ],
  [
    "Libya",
    ["africa", "north-africa"],
    "ly",
    "218"
  ],
  [
    "Liechtenstein",
    ["europe"],
    "li",
    "423"
  ],
  [
    "Lithuania",
    ["europe", "european-union", "ex-ussr"],
    "lt",
    "370"
  ],
  [
    "Luxembourg",
    ["europe", "european-union"],
    "lu",
    "352",
    "+.. . ... ... ..."
  ],
  [
    "Macau",
    ["asia"],
    "mo",
    "853"
  ],
  [
    "Macedonia",
    ["europe"],
    "mk",
    "389"
  ],
  [
    "Madagascar",
    ["africa"],
    "mg",
    "261",
    "+... .. . ......"
  ],
  [
    "Malawi",
    ["africa"],
    "mw",
    "265"
  ],
  [
    "Malaysia",
    ["asia"],
    "my",
    "60",
    "+.. ..-....-...."
  ],
  [
    "Maldives",
    ["asia"],
    "mv",
    "960"
  ],
  [
    "Mali",
    ["africa"],
    "ml",
    "223",
    "+... .... ...."
  ],
  [
    "Malta",
    ["europe", "european-union"],
    "mt",
    "356"
  ],
  [
    "Marshall Islands",
    ["oceania"],
    "mh",
    "692"
  ],
  [
    "Martinique",
    ["america", "carribean"],
    "mq",
    "596"
  ],
  [
    "Mauritania",
    ["africa"],
    "mr",
    "222",
    "+... .... ...."
  ],
  [
    "Mauritius",
    ["africa"],
    "mu",
    "230",
    "+... . ... ...."
  ],
  [
    "Mexico",
    ["america", "central-america"],
    "mx",
    "52"
  ],
  [
    "Micronesia",
    ["oceania"],
    "fm",
    "691"
  ],
  [
    "Moldova",
    ["europe"],
    "md",
    "373",
    "+... (..) ..-..-.."
  ],
  [
    "Monaco",
    ["europe"],
    "mc",
    "377"
  ],
  [
    "Mongolia",
    ["asia"],
    "mn",
    "976"
  ],
  [
    "Montenegro",
    ["europe"],
    "me",
    "382"
  ],
  [
    "Montserrat",
    ["america", "carribean"],
    "ms",
    "1664"
  ],
  [
    "Morocco",
    ["africa", "north-africa"],
    "ma",
    "212",
    "+212-........."
  ],
  [
    "Mozambique",
    ["africa"],
    "mz",
    "258",
    "+... ... ......"
  ],
  [
    "Myanmar",
    ["asia"],
    "mm",
    "95"
  ],
  [
    "Namibia",
    ["africa"],
    "na",
    "264"
  ],
  [
    "Nauru",
    ["africa"],
    "nr",
    "674"
  ],
  [
    "Nepal",
    ["asia"],
    "np",
    "977"
  ],
  [
    "Netherlands",
    ["europe", "european-union"],
    "nl",
    "31",
    "+.. .. ........"
  ],
  [
    "New Caledonia",
    ["oceania"],
    "nc",
    "687"
  ],
  [
    "New Zealand",
    ["oceania"],
    "nz",
    "64",
    "+.. ...-...-...."
  ],
  [
    "Nicaragua",
    ["america", "central-america"],
    "ni",
    "505"
  ],
  [
    "Niger",
    ["africa"],
    "ne",
    "227",
    "+... .. .. .. .."
  ],
  [
    "Nigeria",
    ["africa"],
    "ng",
    "234"
  ],
  [
    "Niue",
    ["asia"],
    "nu",
    "683"
  ],
  [
    "Norfolk Island",
    ["oceania"],
    "nf",
    "672"
  ],
  [
    "North Korea",
    ["asia"],
    "kp",
    "850"
  ],
  [
    "Northern Mariana Islands",
    ["oceania"],
    "mp",
    "1670"
  ],
  [
    "Norway",
    ["europe"],
    "no",
    "47",
    "+.. ... .. ..."
  ],
  [
    "Oman",
    ["middle-east"],
    "om",
    "968"
  ],
  [
    "Pakistan",
    ["asia"],
    "pk",
    "92",
    "+.. ...-......."
  ],
  [
    "Palau",
    ["oceania"],
    "pw",
    "680"
  ],
  [
    "Palestine",
    ["middle-east"],
    "ps",
    "970"
  ],
  [
    "Panama",
    ["america", "central-america"],
    "pa",
    "507"
  ],
  [
    "Papua New Guinea",
    ["oceania"],
    "pg",
    "675"
  ],
  [
    "Paraguay",
    ["america", "south-america"],
    "py",
    "595"
  ],
  [
    "Peru",
    ["america", "south-america"],
    "pe",
    "51"
  ],
  [
    "Philippines",
    ["asia"],
    "ph",
    "63",
    "+.. .... ......."
  ],
  [
    "Poland",
    ["europe", "european-union"],
    "pl",
    "48",
    "+.. ...-...-..."
  ],
  [
    "Portugal",
    ["europe", "european-union"],
    "pt",
    "351"
  ],
  [
    "Puerto Rico",
    ["america", "carribean"],
    "pr",
    "1",
    "",
    3,
    ["787", "939"]
  ],
  [
    "Qatar",
    ["middle-east"],
    "qa",
    "974"
  ],
  [
    "Réunion",
    ["africa"],
    "re",
    "262",
    "+.. . .. .. .. .."
  ],
  [
    "Romania",
    ["europe", "european-union"],
    "ro",
    "40"
  ],
  [
    "Russia",
    ["europe", "asia", "ex-ussr"],
    "ru",
    "7",
    "+. (...) ...-..-..",
    0
  ],
  [
    "Rwanda",
    ["africa"],
    "rw",
    "250",
    "+... ... ... ..."
  ],
  [
    "Saint Barthélemy",
    ["america", "carribean"],
    "bl",
    "590",
    "",
    1
  ],
  [
    "Saint Helena",
    ["africa"],
    "sh",
    "290"
  ],
  [
    "Saint Kitts and Nevis",
    ["america", "carribean"],
    "kn",
    "1869"
  ],
  [
    "Saint Lucia",
    ["america", "carribean"],
    "lc",
    "1758"
  ],
  [
    "Saint Martin",
    ["america", "carribean"],
    "mf",
    "590",
    "",
    2
  ],
  [
    "Saint Pierre and Miquelon",
    ["america", "north-america"],
    "pm",
    "508"
  ],
  [
    "Saint Vincent and the Grenadines",
    ["america", "carribean"],
    "vc",
    "1784"
  ],
  [
    "Samoa",
    ["oceania"],
    "ws",
    "685"
  ],
  [
    "San Marino",
    ["europe"],
    "sm",
    "378"
  ],
  [
    "São Tomé and Príncipe",
    ["africa"],
    "st",
    "239",
    "+... ... ...."
  ],
  [
    "Saudi Arabia",
    ["middle-east"],
    "sa",
    "966"
  ],
  [
    "Senegal",
    ["africa"],
    "sn",
    "221",
    "+... .. ... .. .."
  ],
  [
    "Serbia",
    ["europe"],
    "rs",
    "381"
  ],
  [
    "Seychelles",
    ["africa"],
    "sc",
    "248",
    "+... ... ...."
    // from https://en.wikipedia.org/wiki/Telephone_numbers_in_Seychelles
  ],
  [
    "Sierra Leone",
    ["africa"],
    "sl",
    "232"
  ],
  [
    "Singapore",
    ["asia"],
    "sg",
    "65",
    "+.. ....-...."
  ],
  [
    "Sint Maarten",
    ["america", "carribean"],
    "sx",
    "1721"
  ],
  [
    "Slovakia",
    ["europe", "european-union"],
    "sk",
    "421"
  ],
  [
    "Slovenia",
    ["europe", "european-union"],
    "si",
    "386"
  ],
  [
    "Solomon Islands",
    ["oceania"],
    "sb",
    "677"
  ],
  [
    "Somalia",
    ["africa"],
    "so",
    "252"
  ],
  [
    "South Africa",
    ["africa"],
    "za",
    "27",
    "+.. .. ... ...."
  ],
  [
    "South Korea",
    ["asia"],
    "kr",
    "82",
    "+.. ... .... ...."
  ],
  [
    "South Sudan",
    ["africa", "north-africa"],
    "ss",
    "211"
  ],
  [
    "Spain",
    ["europe", "european-union"],
    "es",
    "34",
    "+.. ... ... ..."
  ],
  [
    "Sri Lanka",
    ["asia"],
    "lk",
    "94"
  ],
  [
    "Sudan",
    ["africa"],
    "sd",
    "249"
  ],
  [
    "Suriname",
    ["america", "south-america"],
    "sr",
    "597"
  ],
  [
    "Swaziland",
    ["africa"],
    "sz",
    "268"
  ],
  [
    "Sweden",
    ["europe", "european-union"],
    "se",
    "46",
    "+.. (..) ...-..-.."
  ],
  [
    "Switzerland",
    ["europe"],
    "ch",
    "41",
    "+.. .. ... .. .."
  ],
  [
    "Syria",
    ["middle-east"],
    "sy",
    "963"
  ],
  [
    "Taiwan",
    ["asia"],
    "tw",
    "886"
  ],
  [
    "Tajikistan",
    ["asia", "ex-ussr"],
    "tj",
    "992"
  ],
  [
    "Tanzania",
    ["africa"],
    "tz",
    "255"
  ],
  [
    "Thailand",
    ["asia"],
    "th",
    "66"
  ],
  [
    "Timor-Leste",
    ["asia"],
    "tl",
    "670"
  ],
  [
    "Togo",
    ["africa"],
    "tg",
    "228",
    "+... ... ....."
  ],
  [
    "Tokelau",
    ["oceania"],
    "tk",
    "690"
  ],
  [
    "Tonga",
    ["oceania"],
    "to",
    "676"
  ],
  [
    "Trinidad and Tobago",
    ["america", "carribean"],
    "tt",
    "1868"
  ],
  [
    "Tunisia",
    ["africa", "north-africa"],
    "tn",
    "216",
    "+... .. ... ..."
  ],
  [
    "Turkey",
    ["europe"],
    "tr",
    "90",
    "+.. ... ... .. .."
  ],
  [
    "Turkmenistan",
    ["asia", "ex-ussr"],
    "tm",
    "993"
  ],
  [
    "Turks and Caicos Islands",
    ["america", "carribean"],
    "tc",
    "1649"
  ],
  [
    "Tuvalu",
    ["asia"],
    "tv",
    "688"
  ],
  [
    "U.S. Virgin Islands",
    ["america", "carribean"],
    "vi",
    "1340"
  ],
  [
    "Uganda",
    ["africa"],
    "ug",
    "256"
  ],
  [
    "Ukraine",
    ["europe", "ex-ussr"],
    "ua",
    "380",
    "+... (..) ... .. .."
  ],
  [
    "United Arab Emirates",
    ["middle-east"],
    "ae",
    "971"
  ],
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
    ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]
  ],
  [
    "Uruguay",
    ["america", "south-america"],
    "uy",
    "598"
  ],
  [
    "Uzbekistan",
    ["asia", "ex-ussr"],
    "uz",
    "998"
  ],
  [
    "Vanuatu",
    ["oceania"],
    "vu",
    "678"
  ],
  [
    "Vatican City",
    ["europe"],
    "va",
    "39",
    "+.. .. .... ....",
    1
  ],
  [
    "Venezuela",
    ["america", "south-america"],
    "ve",
    "58"
  ],
  [
    "Vietnam",
    ["asia"],
    "vn",
    "84"
  ],
  [
    "Wallis and Futuna",
    ["oceania"],
    "wf",
    "681"
  ],
  [
    "Yemen",
    ["middle-east"],
    "ye",
    "967"
  ],
  [
    "Zambia",
    ["africa"],
    "zm",
    "260"
  ],
  [
    "Zimbabwe",
    ["africa"],
    "zw",
    "263"
  ]
], U = {};
function ce(S, e, r) {
  e in U || (U[e] = []);
  const t = r || 0;
  U[e][t] = S;
}
const je = [].concat(...Ae.map((S) => {
  const [e, r, t, i, n, o, s] = S, c = {
    name: e,
    regions: r,
    iso2: t,
    dialCode: i,
    priority: o,
    format: n || void 0,
    hasAreaCodes: s
  }, m = [];
  return c.hasAreaCodes && s.forEach((h) => {
    const g = {
      ...c,
      regions: r,
      dialCode: `${i}${h}`,
      isAreaCode: !0
    };
    m.push(g), ce(t, g.dialCode);
  }), ce(
    c.iso2,
    c.dialCode,
    c.hasAreaCodes
  ), m.length > 0 ? [c, ...m] : [c];
})), fe = {
  allCountries: je
};
class x extends z.PureComponent {
  render() {
    const e = z.createRef(), {
      name: r,
      iso2: t,
      dialCode: i,
      localization: n,
      itemRef: o,
      native: s,
      ...c
    } = this.props;
    if (s)
      return /* @__PURE__ */ v.jsxs(
        "option",
        {
          className: "country",
          "data-dial-code": "1",
          "data-country-code": t,
          value: t,
          ...c,
          children: [
            n || r,
            " ",
            `+${i}`
          ]
        }
      );
    const m = de[t.toUpperCase()];
    return /* @__PURE__ */ v.jsxs(
      _e,
      {
        ref: e,
        className: "country",
        "data-dial-code": "1",
        "data-country-code": t,
        ...c,
        children: [
          !!m && /* @__PURE__ */ v.jsx(
            "div",
            {
              className: c.className,
              style: { width: 30, height: 24, paddingRight: 8 },
              children: /* @__PURE__ */ v.jsx(m, {})
            }
          ),
          /* @__PURE__ */ v.jsx("span", { className: "country-name", children: n || r }),
          /* @__PURE__ */ v.jsx("span", { className: "dial-code", children: `+${i}` })
        ]
      }
    );
  }
}
x.propTypes = {
  name: u.string.isRequired,
  iso2: u.string.isRequired,
  dialCode: u.string.isRequired,
  itemRef: u.func.isRequired,
  localization: u.string,
  native: u.bool
};
x.defaultProps = {
  localization: null,
  native: !1
};
class q extends z.Component {
  flags = {};
  guessSelectedCountry = ne((e, r, t) => {
    const i = k(r, { iso2: t }) || {};
    if (Ee(e) === "") return i;
    const n = ie(r, (o, s) => w(e, s.dialCode) && (s.dialCode.length > o.dialCode.length || s.dialCode.length === o.dialCode.length && s.priority < o.priority) ? s : o, { dialCode: "", priority: 10001 }, this);
    return n.name ? n : i;
  });
  constructor(e) {
    super(e);
    let r = fe.allCountries;
    e.disableAreaCodes && (r = this.deleteAreaCodes(r)), e.regions && (r = this.filterRegions(e.regions, r));
    const t = this.excludeCountries(this.getOnlyCountries(e.onlyCountries, r), e.excludeCountries), i = G(r, (h) => me(e.preferredCountries, (g) => g === h.iso2)), n = e.value || "";
    let o;
    n.length > 1 ? o = this.guessSelectedCountry(n.replace(/\D/g, "").substring(0, 6), t, e.defaultCountry) || 0 : e.defaultCountry ? o = k(t, { iso2: e.defaultCountry }) || 0 : o = 0;
    const s = oe(this.allCountries, o), c = n.length < 2 && o && !w(n.replace(/\D/g, ""), o.dialCode) ? o.dialCode : "", m = n === "" && o === 0 ? "" : this.formatNumber(
      (e.disableCountryCode ? "" : c) + n.replace(/\D/g, ""),
      o.name ? o.format : void 0
    );
    this.state = {
      formattedNumber: m,
      placeholder: e.placeholder,
      onlyCountries: t,
      preferredCountries: i,
      defaultCountry: e.defaultCountry,
      selectedCountry: o,
      highlightCountryIndex: s,
      queryString: "",
      freezeSelection: !1,
      debouncedQueryStingSearcher: Te(this.searchCountry, 100),
      anchorEl: null
    };
  }
  componentDidMount() {
    document.addEventListener && document.addEventListener("keydown", this.handleKeydown);
  }
  componentDidUpdate({ value: e }) {
    const { defaultCountry: r, formattedNumber: t } = this.state, { defaultCountry: i, value: n } = this.props;
    i && i !== r && this.updateDefaultCountry(i), typeof n == "string" && n !== e && n !== t && this.updateFormattedNumber(n);
  }
  componentWillUnmount() {
    document.removeEventListener && document.removeEventListener("keydown", this.handleKeydown);
  }
  getProbableCandidate = ne((e) => {
    if (!e || e.length === 0)
      return null;
    const { onlyCountries: r } = this.state;
    return G(r, (i) => w(i.name.toLowerCase(), e.toLowerCase()), this)[0];
  });
  getOnlyCountries = (e, r) => e.length === 0 ? r : r.filter((t) => e.some((i) => i === t.iso2));
  excludeCountries = (e, r) => r.length === 0 ? e : G(e, (t) => !Re(r, t.iso2));
  filterRegions = (e, r) => {
    if (typeof e == "string") {
      const t = e;
      return r.filter((i) => i.regions.some((n) => n === t));
    }
    return r.filter((t) => e.map((n) => t.regions.some((o) => o === n)).some((n) => n));
  };
  // Countries array methods
  deleteAreaCodes = (e) => e.filter((r) => r.isAreaCode !== !0);
  // Hooks for updated props
  updateDefaultCountry = (e) => {
    const { onlyCountries: r } = this.state, { disableCountryCode: t } = this.props, i = k(r, { iso2: e });
    this.setState({
      defaultCountry: e,
      selectedCountry: i,
      formattedNumber: t ? "" : `+${i.dialCode}`
    });
  };
  // View methods
  scrollTo = (e) => {
    if (!e)
      return;
    const r = this.dropdownContainerRef;
    !r || !document.body || (r.scrollTop = e.offsetTop);
  };
  formatNumber = (e, r) => {
    const { disableCountryCode: t, enableLongNumbers: i, autoFormat: n } = this.props;
    let o;
    if (t && r ? (o = r.split(" "), o.shift(), o = o.join(" ")) : o = r, !e || e.length === 0)
      return t ? "" : "+";
    if (e && e.length < 2 || !o || !n)
      return t ? e : `+${e}`;
    const s = ie(o, (m, h) => m.remainingText.length === 0 ? m : h !== "." ? {
      formattedText: m.formattedText + h,
      remainingText: m.remainingText
    } : {
      formattedText: m.formattedText + we(m.remainingText),
      remainingText: ke(m.remainingText)
    }, {
      formattedText: "",
      remainingText: e.split("")
    });
    let c;
    return i ? c = s.formattedText + s.remainingText.join("") : c = s.formattedText, c.includes("(") && !c.includes(")") && (c += ")"), c;
  };
  // Put the cursor to the end of the input (usually after a focus event)
  cursorToEnd = () => {
    const { isModernBrowser: e } = this.props, r = this.inputRef;
    if (r && (r.focus(), e)) {
      const t = r.value.length;
      r.setSelectionRange(t, t);
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
    let { selectedCountry: r, freezeSelection: t } = this.state;
    const {
      selectedCountry: i,
      formattedNumber: n,
      onlyCountries: o,
      defaultCountry: s
    } = this.state, {
      disableCountryCode: c,
      countryCodeEditable: m,
      isModernBrowser: h,
      onChange: g
    } = this.props;
    let E = c ? "" : "+";
    if (!m) {
      const C = `+${r.dialCode}`;
      if (e.target.value.length < C.length)
        return;
    }
    if (e.target.value.replace(/\D/g, "").length > 15 || e.target.value === n)
      return;
    if (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.target.value.length > 0) {
      const C = e.target.value.replace(/\D/g, "");
      (!t || i.dialCode.length > C.length) && (r = this.guessSelectedCountry(C.substring(0, 6), o, s), t = !1), E = this.formatNumber(C, r.format);
    }
    let l = e.target.selectionStart;
    const p = E.length - n.length;
    this.setState({
      formattedNumber: E,
      freezeSelection: t,
      selectedCountry: r.dialCode ? r : i
    }, () => {
      h && (p > 0 && (l -= p), E.charAt(E.length - 1) === ")" ? this.inputRef.setSelectionRange(E.length - 1, E.length - 1) : l > 0 && n.length >= E.length && this.inputRef.setSelectionRange(l, l)), g && g(E, this.getCountryData());
    });
  };
  handleRefInput = (e) => {
    const { inputRef: r, InputProps: t } = this.props;
    this.inputRef = e;
    let i;
    r ? i = r : t && t.ref && (i = t.ref), i && (typeof i == "function" ? i(e) : i.current = e);
  };
  handleInputClick = (e) => {
    const { onClick: r } = this.props;
    r && r(e, this.getCountryData());
  };
  handleFlagItemClick = (e) => {
    const { formattedNumber: r, selectedCountry: t, onlyCountries: i } = this.state, { onChange: n } = this.props, o = t, s = xe(e) ? k(i, (g) => g.iso2 === e) : k(i, e), c = r.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), m = c.length > 1 ? c.replace(o.dialCode, s.dialCode) : s.dialCode, h = this.formatNumber(m.replace(/\D/g, ""), s.format);
    this.setState({
      anchorEl: null,
      selectedCountry: s,
      freezeSelection: !0,
      formattedNumber: h
    }, () => {
      this.cursorToEnd(), n && n(h, this.getCountryData());
    });
  };
  handleInputFocus = (e) => {
    const { selectedCountry: r } = this.state, { disableCountryCode: t, onFocus: i } = this.props;
    this.inputRef && this.inputRef.value === "+" && r && !t && this.setState({
      formattedNumber: `+${r.dialCode}`
    }, () => setTimeout(this.cursorToEnd, 10)), this.setState({ placeholder: "" }), i && i(e, this.getCountryData()), setTimeout(this.cursorToEnd, 10);
  };
  handleInputBlur = (e) => {
    const { placeholder: r, onBlur: t } = this.props;
    e.target.value || this.setState({ placeholder: r }), t && t(e, this.getCountryData());
  };
  getHighlightCountryIndex = (e) => {
    const { highlightCountryIndex: r, onlyCountries: t, preferredCountries: i } = this.state, n = r + e;
    return n < 0 || n >= t.length + i.length ? n - e : n;
  };
  searchCountry = () => {
    const { queryString: e, onlyCountries: r, preferredCountries: t } = this.state, i = this.getProbableCandidate(e) || r[0], n = oe(r, i) + t.length;
    this.scrollTo(this.getElement(n), !0), this.setState({ queryString: "", highlightCountryIndex: n });
  };
  handleKeydown = (e) => {
    const {
      anchorEl: r,
      highlightCountryIndex: t,
      preferredCountries: i,
      onlyCountries: n,
      queryString: o,
      debouncedQueryStingSearcher: s
    } = this.state, { keys: c, disabled: m } = this.props;
    if (!r || m) return;
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    const h = (g) => {
      this.setState({
        highlightCountryIndex: this.getHighlightCountryIndex(g)
      }, () => {
        this.scrollTo(this.getElement(
          t + i.length
        ), !0);
      });
    };
    switch (e.which) {
      case c.DOWN:
        h(1);
        break;
      case c.UP:
        h(-1);
        break;
      case c.ENTER:
        this.handleFlagItemClick(n[t], e);
        break;
      case c.ESC:
        this.setState({
          anchorEl: null
        }, this.cursorToEnd);
        break;
      default:
        (e.which >= c.A && e.which <= c.Z || e.which === c.SPACE) && this.setState({
          queryString: o + String.fromCharCode(e.which)
        }, s);
    }
  };
  handleInputKeyDown = (e) => {
    const { keys: r, onEnterKeyPress: t, onKeyDown: i } = this.props;
    e.which === r.ENTER && t && t(e), i && i(e);
  };
  checkIfValid = () => {
    const { formattedNumber: e } = this.state, { isValid: r } = this.props;
    return r(e.replace(/\D/g, ""));
  };
  updateFormattedNumber = (e) => {
    const { onlyCountries: r, defaultCountry: t } = this.state, { disableCountryCode: i } = this.props;
    let n, o = e, s = e;
    if (o.startsWith("+"))
      o = o.replace(/\D/g, ""), n = this.guessSelectedCountry(o.substring(0, 6), r, t), s = this.formatNumber(o, n.format);
    else {
      n = k(r, { iso2: t });
      const c = n && !w(o.replace(/\D/g, ""), n.dialCode) ? n.dialCode : "";
      s = this.formatNumber(
        (i ? "" : c) + o.replace(/\D/g, ""),
        n ? n.format : void 0
      );
    }
    this.setState({ selectedCountry: n, formattedNumber: s });
  };
  getDropdownProps = () => {
    const {
      selectedCountry: e,
      anchorEl: r,
      preferredCountries: t,
      onlyCountries: i
    } = this.state, n = {
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
      }
    }, {
      dropdownClass: o,
      localization: s,
      disableDropdown: c,
      native: m
    } = this.props;
    i.sort((l, p) => {
      const C = s[l.name] || l.name, T = s[p.name] || p.name;
      return C.localeCompare(T);
    });
    const h = (l) => !!(e && e.dialCode === l.dialCode), g = de[e.iso2.toUpperCase()];
    return c ? {} : {
      startAdornment: /* @__PURE__ */ v.jsx(
        Ce,
        {
          style: n.positionStart,
          position: "start",
          children: m ? /* @__PURE__ */ v.jsxs(
            Se,
            {
              id: "country-menu",
              open: !!r,
              onClose: () => this.setState({ anchorEl: null }),
              style: n.native,
              sx: {
                root: n.nativeRoot,
                // clsx(classes.nativeRoot, 'native'),
                select: n.nativeSelect
              },
              onChange: (l) => this.handleFlagItemClick(l.target.value),
              IconComponent: !!g && g,
              disableUnderline: !0,
              children: [
                !!t.length && D(t, (l, p) => /* @__PURE__ */ v.jsx(
                  x,
                  {
                    itemRef: (C) => {
                      this.flags[`flag_no_${p}`] = C;
                    },
                    name: l.name,
                    iso2: l.iso2,
                    dialCode: l.dialCode,
                    localization: s && s[l.name],
                    native: !0
                  },
                  `preferred_${l.iso2}_${p}`
                )),
                D(i, (l, p) => /* @__PURE__ */ v.jsx(
                  x,
                  {
                    itemRef: (C) => {
                      this.flags[`flag_no_${p}`] = C;
                    },
                    name: l.name,
                    iso2: l.iso2,
                    dialCode: l.dialCode,
                    localization: s && s[l.name],
                    native: !0
                  },
                  `preferred_${l.iso2}_${p}`
                ))
              ]
            }
          ) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(
              be,
              {
                style: n.flagButton,
                "aria-owns": r ? "country-menu" : null,
                "aria-label": "Select country",
                onClick: (l) => this.setState({ anchorEl: l.currentTarget }),
                "aria-haspopup": !0,
                children: !!g && /* @__PURE__ */ v.jsx(g, { className: "margin" })
              }
            ),
            /* @__PURE__ */ v.jsxs(
              ye,
              {
                className: o,
                id: "country-menu",
                anchorEl: r,
                open: !!r,
                onClose: () => this.setState({ anchorEl: null }),
                children: [
                  !!t.length && D(t, (l, p) => /* @__PURE__ */ v.jsx(
                    x,
                    {
                      itemRef: (C) => {
                        this.flags[`flag_no_${p}`] = C;
                      },
                      selected: h(l),
                      onClick: () => this.handleFlagItemClick(l),
                      name: l.name,
                      iso2: l.iso2,
                      dialCode: l.dialCode,
                      localization: s && s[l.name],
                      style: n.flagIcon
                    },
                    `preferred_${l.iso2}_${p}`
                  )),
                  !!t.length && /* @__PURE__ */ v.jsx(ve, {}),
                  D(i, (l, p) => /* @__PURE__ */ v.jsx(
                    x,
                    {
                      itemRef: (C) => {
                        this.flags[`flag_no_${p}`] = C;
                      },
                      selected: h(l),
                      onClick: () => this.handleFlagItemClick(l),
                      name: l.name,
                      iso2: l.iso2,
                      dialCode: l.dialCode,
                      localization: s && s[l.name],
                      style: n.flagIcon
                    },
                    `preferred_${l.iso2}_${p}`
                  ))
                ]
              }
            )
          ] })
        }
      )
    };
  };
  render() {
    const {
      formattedNumber: e,
      placeholder: r
    } = this.state, {
      // start placeholder props
      native: t,
      defaultCountry: i,
      excludeCountries: n,
      onlyCountries: o,
      preferredCountries: s,
      dropdownClass: c,
      autoFormat: m,
      disableAreaCodes: h,
      isValid: g,
      disableCountryCode: E,
      disableDropdown: l,
      enableLongNumbers: p,
      countryCodeEditable: C,
      onEnterKeyPress: T,
      isModernBrowser: V,
      classes: K,
      keys: Y,
      localization: W,
      placeholder: H,
      regions: J,
      onChange: Z,
      value: X,
      // end placeholder props
      inputClass: _,
      error: M,
      InputProps: B,
      ...N
    } = this.props, A = this.getDropdownProps();
    return /* @__PURE__ */ v.jsx(
      ge,
      {
        placeholder: r,
        value: e,
        className: _,
        inputRef: this.handleRefInput,
        error: M || !this.checkIfValid(),
        onChange: this.handleInput,
        onClick: this.handleInputClick,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        type: "tel",
        InputProps: {
          ...A,
          ...B
        },
        ...N
      }
    );
  }
}
q.propTypes = {
  classes: u.object,
  excludeCountries: u.arrayOf(u.string),
  onlyCountries: u.arrayOf(u.string),
  preferredCountries: u.arrayOf(u.string),
  defaultCountry: u.string,
  value: u.string,
  placeholder: u.string,
  disabled: u.bool,
  error: u.bool,
  variant: u.string,
  native: u.bool,
  inputClass: u.string,
  dropdownClass: u.string,
  InputProps: u.object,
  inputProps: u.object,
  inputRef: u.func,
  autoFormat: u.bool,
  disableAreaCodes: u.bool,
  disableCountryCode: u.bool,
  disableDropdown: u.bool,
  enableLongNumbers: u.bool,
  countryCodeEditable: u.bool,
  regions: u.oneOfType([
    u.string,
    u.arrayOf(u.string)
  ]),
  localization: u.object,
  onChange: u.func,
  onFocus: u.func,
  onBlur: u.func,
  onClick: u.func,
  onKeyDown: u.func,
  isValid: u.func,
  isModernBrowser: u.func,
  onEnterKeyPress: u.func,
  keys: u.object
};
q.defaultProps = {
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
  isValid: (S) => me(fe.allCountries, (e) => w(S, e.dialCode) || w(e.dialCode, S)),
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
q.displayName = "MuiPhoneNumber";
export {
  q as default
};
