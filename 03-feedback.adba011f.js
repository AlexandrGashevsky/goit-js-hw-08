parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u9vI":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"j3D9":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"MIhM":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"j3D9"}],"pJf5":[function(require,module,exports) {
var r=require("./_root"),e=function(){return r.Date.now()};module.exports=e;
},{"./_root":"MIhM"}],"x2wq":[function(require,module,exports) {
var r=/\s/;function t(t){for(var e=t.length;e--&&r.test(t.charAt(e)););return e}module.exports=t;
},{}],"SK01":[function(require,module,exports) {
var e=require("./_trimmedEndIndex"),r=/^\s+/;function n(n){return n?n.slice(0,e(n)+1).replace(r,""):n}module.exports=n;
},{"./_trimmedEndIndex":"x2wq"}],"wppe":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"MIhM"}],"uiOY":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"wppe"}],"lPmd":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"e5TX":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"wppe","./_getRawTag":"uiOY","./_objectToString":"lPmd"}],"OuyB":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"bgO7":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"e5TX","./isObjectLike":"OuyB"}],"iS0Z":[function(require,module,exports) {
var e=require("./_baseTrim"),r=require("./isObject"),t=require("./isSymbol"),i=NaN,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,n=/^0o[0-7]+$/i,s=parseInt;function a(a){if("number"==typeof a)return a;if(t(a))return i;if(r(a)){var o="function"==typeof a.valueOf?a.valueOf():a;a=r(o)?o+"":o}if("string"!=typeof a)return 0===a?a:+a;a=e(a);var b=f.test(a);return b||n.test(a)?s(a.slice(2),b?2:8):u.test(a)?i:+a}module.exports=a;
},{"./_baseTrim":"SK01","./isObject":"u9vI","./isSymbol":"bgO7"}],"CXfR":[function(require,module,exports) {
var i=require("./isObject"),t=require("./now"),r=require("./toNumber"),n="Expected a function",e=Math.max,u=Math.min;function o(o,a,f){var c,v,d,m,l,s,T=0,p=!1,h=!1,x=!0;if("function"!=typeof o)throw new TypeError(n);function g(i){var t=c,r=v;return c=v=void 0,T=i,m=o.apply(r,t)}function q(i){var t=i-s;return void 0===s||t>=a||t<0||h&&i-T>=d}function w(){var i=t();if(q(i))return y(i);l=setTimeout(w,function(i){var t=a-(i-s);return h?u(t,d-(i-T)):t}(i))}function y(i){return l=void 0,x&&c?g(i):(c=v=void 0,m)}function b(){var i=t(),r=q(i);if(c=arguments,v=this,s=i,r){if(void 0===l)return function(i){return T=i,l=setTimeout(w,a),p?g(i):m}(s);if(h)return clearTimeout(l),l=setTimeout(w,a),g(s)}return void 0===l&&(l=setTimeout(w,a)),m}return a=r(a)||0,i(f)&&(p=!!f.leading,d=(h="maxWait"in f)?e(r(f.maxWait)||0,a):d,x="trailing"in f?!!f.trailing:x),b.cancel=function(){void 0!==l&&clearTimeout(l),T=0,c=s=v=l=void 0},b.flush=function(){return void 0===l?m:y(t())},b}module.exports=o;
},{"./isObject":"u9vI","./now":"pJf5","./toNumber":"iS0Z"}],"TTyb":[function(require,module,exports) {
"use strict";var e=t(require("lodash/debounce"));function t(e){return e&&e.__esModule?e:{default:e}}const a={},r=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form input"),o=document.querySelector(".feedback-form textarea");let u;r.addEventListener("submit",e=>{e.preventDefault();const t={email:l.value,message:o.value};console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}),r.addEventListener("input",(0,e.default)(e=>{a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))},500)),null!==localStorage.getItem("feedback-form-state")&&(null!=(u=JSON.parse(localStorage.getItem("feedback-form-state"))).email&&(l.value=u.email),null!=u.message&&(o.value=u.message));
},{"lodash/debounce":"CXfR"}]},{},["TTyb"], null)
//# sourceMappingURL=/goit-js-hw-08/03-feedback.adba011f.js.map