// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,S=isNaN,O=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,s,l,f,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if(c(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function F(r){var e,t;if(!V(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var $,C=Object.prototype,I=C.toString,R=C.__defineGetter__,M=C.__defineSetter__,N=C.__lookupGetter__,B=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var L=$;function q(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function Z(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var z=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,W=function(r){return z.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=Z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=D(r),t="/"===tr(r,-1);return(r=Z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function J(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function H(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(i.slice(a))).join("/")}function K(r){var e=W(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=W(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return W(r)[3]}var rr={extname:Y,basename:Q,dirname:K,sep:"/",delimiter:":",relative:H,join:J,isAbsolute:D,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=G(Object.freeze({__proto__:null,basename:Q,default:rr,delimiter:":",dirname:K,extname:Y,isAbsolute:D,join:J,normalize:X,relative:H,resolve:U,sep:"/"}));var ir=Object,or=/./;function ar(r){return"boolean"==typeof r}function ur(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var cr=ur();var sr=ur();var lr=Object.prototype.toString;var fr=Object.prototype.hasOwnProperty;var pr,gr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof gr?gr.toStringTag:"";pr=sr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,o;if(null==r)return lr.call(r);t=r[dr],o=dr,e=null!=(i=r)&&fr.call(i,o);try{r[dr]=void 0}catch(e){return lr.call(r)}return n=lr.call(r),e?r[dr]=t:delete r[dr],n}:function(r){return lr.call(r)};var br=pr,yr=Boolean,hr=Boolean.prototype.toString;var vr=cr&&"symbol"==typeof Symbol.toStringTag;function wr(r){return"object"==typeof r&&(r instanceof yr||(vr?function(r){try{return hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===br(r)))}function mr(r){return ar(r)||wr(r)}function jr(){return new Function("return this;")()}q(mr,"isPrimitive",ar),q(mr,"isObject",wr);var _r="object"==typeof self?self:null,Er="object"==typeof window?window:null,Sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Or="object"==typeof Sr?Sr:null,kr="object"==typeof globalThis?globalThis:null;var xr=function(r){if(arguments.length){if(!ar(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jr()}if(kr)return kr;if(_r)return _r;if(Er)return Er;if(Or)return Or;throw new Error("unexpected error. Unable to resolve global object.")}(),Ar=xr.document&&xr.document.childNodes,Tr=Int8Array;function Pr(){return/^\s*function\s*([^(]*)/i}var Vr,Fr=/^\s*function\s*([^(]*)/i;q(Pr,"REGEXP",Fr),Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===br(r)};var $r=Vr;function Cr(r){return null!==r&&"object"==typeof r}var Ir=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr);function Rr(r){var e,t,n,i;if(("Object"===(t=br(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Fr.exec(n.toString()))return e[1]}return Cr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(Cr,"isObjectLikeArray",Ir);var Mr="function"==typeof or||"object"==typeof Tr||"function"==typeof Ar?function(r){return Rr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Rr(r).toLowerCase():e};var Nr,Br,Lr=Object.getPrototypeOf;Br=Object.getPrototypeOf,Nr="function"===Mr(Br)?Lr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===br(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var qr=Nr;function Gr(r){return null==r?null:(r=ir(r),qr(r))}function Zr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===br(r))return!0;r=Gr(r)}return!1}function zr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Zr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Wr=Math.floor;function Ur(r,e,t,n){var i,o,a,u,c,s,l,f,p,g,d,b,y;if(r<=0)return 0;if(1===r||0===t)return e[n];if(i=n,r<8){for(d=0,y=0;y<r;y++)d+=e[i],i+=t;return d}if(r<=128){for(o=e[i],a=e[i+t],u=e[i+2*t],c=e[i+3*t],s=e[i+4*t],l=e[i+5*t],f=e[i+6*t],p=e[i+7*t],i+=8*t,g=r%8,y=8;y<r-g;y+=8)o+=e[i],a+=e[i+t],u+=e[i+2*t],c+=e[i+3*t],s+=e[i+4*t],l+=e[i+5*t],f+=e[i+6*t],p+=e[i+7*t],i+=8*t;for(d=o+a+(u+c)+(s+l+(f+p));y<r;y++)d+=e[i],i+=t;return d}return b=Wr(r/2),Ur(b-=b%8,e,t,i)+Ur(r-b,e,t,i+b*t)}function Xr(r,e,t){var n,i,o;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,o=0;o<r;o++)i+=e[n],n+=t;return i}return Ur(r,e,t,n)}q(Xr,"ndarray",Ur);var Dr,Jr=zr((0,nr.join)("/home/runner/work/stats-base-dsempn/stats-base-dsempn/node_modules/@stdlib/blas-ext-base-dsumpw/lib","./native.js")),Hr=Dr=Zr(Jr)?Xr:Jr;const{ndarray:Kr}=Dr;function Qr(r,e,t,n){var i,o,a,u,c,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===n)return 0;for(i=Hr(r,t,n)/r,o=n<0?(1-r)*n:0,a=0,u=0,l=0;l<r;l++)a+=(c=t[o]-i)*c,u+=c,o+=n;return a/s-u/r*(u/s)}q(Qr,"ndarray",(function(r,e,t,n,i){var o,a,u,c,s,l,f;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=Kr(r,t,n,i)/r,a=i,u=0,c=0,f=0;f<r;f++)u+=(s=t[a]-o)*s,c+=s,a+=n;return u/l-c/r*(c/l)}));var Yr,re=zr((0,nr.join)("/home/runner/work/stats-base-dsempn/stats-base-dsempn/node_modules/@stdlib/stats-base-dvariancepn/lib","./native.js")),ee=Yr=Zr(re)?Qr:re;const{ndarray:te}=Yr;var ne=Math.sqrt;function ie(r,e,t,n){return ne(ee(r,e,t,n)/r)}function oe(r,e,t,n,i){return ne(te(r,e,t,n,i)/r)}q(ie,"ndarray",oe);export{ie as default,oe as ndarray};
//# sourceMappingURL=mod.js.map
