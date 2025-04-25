// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-dvariancepn@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";function d(s,t,d,n,i){return r(e(s,t,d,n,i)/s)}function n(s,e,r,n){return d(s,e,r,n,t(s,n))}s(n,"ndarray",d);export{n as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
