"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(w,t){
var y=require('@stdlib/stats-strided-dvariancepn/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,i){return x(y(e,r,a,i)/e)}t.exports=f
});var q=n(function(z,v){
var j=require('@stdlib/stats-strided-dvariancepn/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,i,m){return l(j(e,r,a,i,m)/e)}v.exports=R
});var o=n(function(A,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=u(),E=q();_(d,"ndarray",E);p.exports=d
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=o(),s,c=b(O(__dirname,"./native.js"));g(c)?s=h:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
