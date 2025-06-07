"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(w,u){
var y=require('@stdlib/stats-strided-dvariancepn/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,i,a,m){return f(y(e,r,i,a,m)/e)}u.exports=x
});var q=n(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),l=s();function R(e,r,i,a){return l(e,r,i,a,j(e,a))}v.exports=R
});var p=n(function(A,o){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),E=s();_(d,"ndarray",E);o.exports=d
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),t,c=b(O(__dirname,"./native.js"));g(c)?t=h:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
