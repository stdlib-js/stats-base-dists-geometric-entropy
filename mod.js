// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var a=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,a,i,f,u;if(null==r)return t.call(r);a=r[e],u=e,n=null!=(f=r)&&o.call(f,u);try{r[e]=void 0}catch(n){return t.call(r)}return i=t.call(r),n?r[e]=a:delete r[e],i}:function(r){return t.call(r)},i="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var u,y="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,n,t;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var c=u,l="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var p,A="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var U=p,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,d="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=m,N="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var F,S="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,65536,65537]),t=n,r=(N&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var j,E={uint16:F,uint8:h};(j=new E.uint16(1))[0]=4660;var g=52===new E.uint8(j.buffer)[0],I=!0===g?1:0,T=new U(1),O=new c(T.buffer);function x(r){return T[0]=r,O[I]}var G=!0===g?1:0,P=new U(1),V=new c(P.buffer);var Y=Number.NEGATIVE_INFINITY;var _=.6931471803691238,k=1.9082149292705877e-10;function q(n){var t,o,e,a,i,f,u,y,c,l,v,p;return 0===n?Y:r(n)||n<0?NaN:(i=0,(o=x(n))<1048576&&(i-=54,o=x(n*=0x40000000000000)),o>=2146435072?n+n:(i+=(o>>20)-1023|0,i+=(y=(o&=1048575)+614244&1048576|0)>>20|0,u=(n=function(r,n){return P[0]=r,V[G]=n>>>0,P[0]}(n,o|1072693248^y))-1,(1048575&2+o)<3?0===u?0===i?0:i*_+i*k:(f=u*u*(.5-.3333333333333333*u),0===i?u-f:i*_-(f-i*k-u)):(y=o-398458|0,c=440401-o|0,a=(v=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+a,(y|=c)>0?(t=.5*u*u,0===i?u-(t-l*(t+f)):i*_-(t-(l*(t+f)+i*k)-u)):0===i?u-l*(u-f):i*_-(l*(u-f)-i*k-u))))}function z(n){var t;return r(n)||n<=0||n>=1?NaN:(t=1-n,(-n*q(n)-t*q(t))/n)}export{z as default};
//# sourceMappingURL=mod.js.map
