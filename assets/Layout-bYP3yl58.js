import{s as S,N as zr,L as De,r as l,u as Ne,j as d,C as Gr,g as Ue,Q as Ve,a as ke,O as Be}from"./index-y_V6WPh4.js";import{G as vt,a as Hr,b as ze}from"./index.esm-Y0APe1V2.js";import{s as wt}from"./specifics_dish-m9aeWgjf.js";function Ge(t){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(t)}const He=S.header`
  position: sticky;
  top: 0;
  left: 0;
  padding-bottom: 44px;
  padding-top: 50px;
  z-index: 20;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.6195728291316527) 48%
  );
`,We=S.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ke=S(zr)`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,Ye=S.ul`
  display: flex;
  gap: 50px;
`,lr=S.li``,fr=S(zr)`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }
`,qe=S.div`
  display: flex;
  align-items: center;
  gap: 33px;
`,Ze=S.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;function Xe(t){return vt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"}}]})(t)}const Je=S.div`
  position: relative;
`,Qe=S.p`
  cursor: pointer;

  color: ${({["data-active"]:t})=>t==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`,tn=S.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;

  display: ${({["data-show"]:t})=>t==="true"?"block":"none"};
`,rn=S.li`
  padding: 5px;
  border-radius: 5px;
  transition: background-color var(--transition);

  &:not(:last-child) {
    margin-bottom: 17px;
  }

  &:hover,
  :focus {
    background-color: #80808075;
  }
`,en=S(De)`
  display: block;
  color: #fff;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,dr=[{name:"Main Dishes",to:`/hot_dishes#${wt.MAIN}`},{name:"Grilled Dishes",to:`/hot_dishes#${wt.GRILLED}`},{name:"Khinkali",to:`/hot_dishes#${wt.KHINKALI}`}],nn=()=>{const[t,r]=l.useState(!1),[e,n]=l.useState("Hoot Dishes"),{pathname:i,hash:o}=Ne(),c=l.useRef(null);l.useEffect(()=>{dr.every(({to:y})=>y!==i)&&n("Hot Dishes")},[i]);const h=g=>{window.location.hash===g&&(window.location.hash="#",c.current=setTimeout(()=>{window.location.hash=g},300))};return l.useEffect(()=>()=>{c.current&&clearTimeout(c.current)},[]),d.jsxs(Je,{children:[d.jsxs(Qe,{onClick:()=>{r(!t)},"data-active":t.toString(),children:[e,d.jsx(Xe,{})]}),d.jsx(tn,{"data-show":t.toString(),onClick:g=>{g.target!==g.currentTarget&&(n(g.target.textContent),r(!1))},children:dr.map(({name:g,to:y})=>d.jsx(rn,{onClick:()=>h(o),children:d.jsx(en,{to:y,children:g})},g))})]})},an=S.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,on=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`,cn=S.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,pr=S.a`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &.email {
    font-size: 12px;
    text-decoration-line: underline;
  }

  &:not(:last-child) {
    margin-right: 29px;
  }

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,sn=S.div`
  display: flex;
  justify-content: space-between;

  border-top: 0.5px solid grey;
  padding-top: 28px;
`,un=S.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,ln=S.div``,hr=S.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,fn=()=>d.jsx(an,{children:d.jsxs(Gr,{children:[d.jsxs(on,{children:[d.jsxs(cn,{children:[d.jsx(Hr,{})," Kindzmarauli"]}),d.jsxs("div",{children:[d.jsx(pr,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),d.jsx(pr,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),d.jsxs(sn,{children:[d.jsx(un,{children:"© 2023, official site"}),d.jsxs(ln,{children:[d.jsx(hr,{href:"#",children:"Privacy Policy and Offer"}),d.jsx(hr,{href:"#",children:"Terms of use"})]})]})]})});var dn=function(r){return pn(r)&&!hn(r)};function pn(t){return!!t&&typeof t=="object"}function hn(t){var r=Object.prototype.toString.call(t);return r==="[object RegExp]"||r==="[object Date]"||yn(t)}var vn=typeof Symbol=="function"&&Symbol.for,gn=vn?Symbol.for("react.element"):60103;function yn(t){return t.$$typeof===gn}function bn(t){return Array.isArray(t)?[]:{}}function ht(t,r){return r.clone!==!1&&r.isMergeableObject(t)?it(bn(t),t,r):t}function mn(t,r,e){return t.concat(r).map(function(n){return ht(n,e)})}function Tn(t,r,e){var n={};return e.isMergeableObject(t)&&Object.keys(t).forEach(function(i){n[i]=ht(t[i],e)}),Object.keys(r).forEach(function(i){!e.isMergeableObject(r[i])||!t[i]?n[i]=ht(r[i],e):n[i]=it(t[i],r[i],e)}),n}function it(t,r,e){e=e||{},e.arrayMerge=e.arrayMerge||mn,e.isMergeableObject=e.isMergeableObject||dn;var n=Array.isArray(r),i=Array.isArray(t),o=n===i;return o?n?e.arrayMerge(t,r,e):Tn(t,r,e):ht(r,e)}it.all=function(r,e){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return it(n,i,e)},{})};var Mt=it,Sn=typeof global=="object"&&global&&global.Object===Object&&global;const Wr=Sn;var jn=typeof self=="object"&&self&&self.Object===Object&&self,En=Wr||jn||Function("return this")();const L=En;var _n=L.Symbol;const k=_n;var Kr=Object.prototype,An=Kr.hasOwnProperty,xn=Kr.toString,nt=k?k.toStringTag:void 0;function $n(t){var r=An.call(t,nt),e=t[nt];try{t[nt]=void 0;var n=!0}catch{}var i=xn.call(t);return n&&(r?t[nt]=e:delete t[nt]),i}var wn=Object.prototype,On=wn.toString;function In(t){return On.call(t)}var Cn="[object Null]",Fn="[object Undefined]",vr=k?k.toStringTag:void 0;function Y(t){return t==null?t===void 0?Fn:Cn:vr&&vr in Object(t)?$n(t):In(t)}function Yr(t,r){return function(e){return t(r(e))}}var Mn=Yr(Object.getPrototypeOf,Object);const Vt=Mn;function q(t){return t!=null&&typeof t=="object"}var Rn="[object Object]",Ln=Function.prototype,Pn=Object.prototype,qr=Ln.toString,Dn=Pn.hasOwnProperty,Nn=qr.call(Object);function gr(t){if(!q(t)||Y(t)!=Rn)return!1;var r=Vt(t);if(r===null)return!0;var e=Dn.call(r,"constructor")&&r.constructor;return typeof e=="function"&&e instanceof e&&qr.call(e)==Nn}var yr=Array.isArray,br=Object.keys,Un=Object.prototype.hasOwnProperty,Vn=typeof Element<"u";function Rt(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){var e=yr(t),n=yr(r),i,o,c;if(e&&n){if(o=t.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Rt(t[i],r[i]))return!1;return!0}if(e!=n)return!1;var h=t instanceof Date,g=r instanceof Date;if(h!=g)return!1;if(h&&g)return t.getTime()==r.getTime();var y=t instanceof RegExp,U=r instanceof RegExp;if(y!=U)return!1;if(y&&U)return t.toString()==r.toString();var I=br(t);if(o=I.length,o!==br(r).length)return!1;for(i=o;i--!==0;)if(!Un.call(r,I[i]))return!1;if(Vn&&t instanceof Element&&r instanceof Element)return t===r;for(i=o;i--!==0;)if(c=I[i],!(c==="_owner"&&t.$$typeof)&&!Rt(t[c],r[c]))return!1;return!0}return t!==t&&r!==r}var kn=function(r,e){try{return Rt(r,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=Ue(kn);var Bn=!0;function zn(t,r){if(!Bn){if(t)return;var e="Warning: "+r;typeof console<"u"&&console.warn(e);try{throw Error(e)}catch{}}}function Gn(){this.__data__=[],this.size=0}function Zr(t,r){return t===r||t!==t&&r!==r}function gt(t,r){for(var e=t.length;e--;)if(Zr(t[e][0],r))return e;return-1}var Hn=Array.prototype,Wn=Hn.splice;function Kn(t){var r=this.__data__,e=gt(r,t);if(e<0)return!1;var n=r.length-1;return e==n?r.pop():Wn.call(r,e,1),--this.size,!0}function Yn(t){var r=this.__data__,e=gt(r,t);return e<0?void 0:r[e][1]}function qn(t){return gt(this.__data__,t)>-1}function Zn(t,r){var e=this.__data__,n=gt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}function N(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}N.prototype.clear=Gn;N.prototype.delete=Kn;N.prototype.get=Yn;N.prototype.has=qn;N.prototype.set=Zn;function Xn(){this.__data__=new N,this.size=0}function Jn(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function Qn(t){return this.__data__.get(t)}function ta(t){return this.__data__.has(t)}function st(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var ra="[object AsyncFunction]",ea="[object Function]",na="[object GeneratorFunction]",aa="[object Proxy]";function Xr(t){if(!st(t))return!1;var r=Y(t);return r==ea||r==na||r==ra||r==aa}var ia=L["__core-js_shared__"];const Ot=ia;var mr=function(){var t=/[^.]+$/.exec(Ot&&Ot.keys&&Ot.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function oa(t){return!!mr&&mr in t}var ca=Function.prototype,sa=ca.toString;function Z(t){if(t!=null){try{return sa.call(t)}catch{}try{return t+""}catch{}}return""}var ua=/[\\^$.*+?()[\]{}|]/g,la=/^\[object .+?Constructor\]$/,fa=Function.prototype,da=Object.prototype,pa=fa.toString,ha=da.hasOwnProperty,va=RegExp("^"+pa.call(ha).replace(ua,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ga(t){if(!st(t)||oa(t))return!1;var r=Xr(t)?va:la;return r.test(Z(t))}function ya(t,r){return t==null?void 0:t[r]}function X(t,r){var e=ya(t,r);return ga(e)?e:void 0}var ba=X(L,"Map");const ot=ba;var ma=X(Object,"create");const ct=ma;function Ta(){this.__data__=ct?ct(null):{},this.size=0}function Sa(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}var ja="__lodash_hash_undefined__",Ea=Object.prototype,_a=Ea.hasOwnProperty;function Aa(t){var r=this.__data__;if(ct){var e=r[t];return e===ja?void 0:e}return _a.call(r,t)?r[t]:void 0}var xa=Object.prototype,$a=xa.hasOwnProperty;function wa(t){var r=this.__data__;return ct?r[t]!==void 0:$a.call(r,t)}var Oa="__lodash_hash_undefined__";function Ia(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=ct&&r===void 0?Oa:r,this}function K(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}K.prototype.clear=Ta;K.prototype.delete=Sa;K.prototype.get=Aa;K.prototype.has=wa;K.prototype.set=Ia;function Ca(){this.size=0,this.__data__={hash:new K,map:new(ot||N),string:new K}}function Fa(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function yt(t,r){var e=t.__data__;return Fa(r)?e[typeof r=="string"?"string":"hash"]:e.map}function Ma(t){var r=yt(this,t).delete(t);return this.size-=r?1:0,r}function Ra(t){return yt(this,t).get(t)}function La(t){return yt(this,t).has(t)}function Pa(t,r){var e=yt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}function B(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}B.prototype.clear=Ca;B.prototype.delete=Ma;B.prototype.get=Ra;B.prototype.has=La;B.prototype.set=Pa;var Da=200;function Na(t,r){var e=this.__data__;if(e instanceof N){var n=e.__data__;if(!ot||n.length<Da-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new B(n)}return e.set(t,r),this.size=e.size,this}function rt(t){var r=this.__data__=new N(t);this.size=r.size}rt.prototype.clear=Xn;rt.prototype.delete=Jn;rt.prototype.get=Qn;rt.prototype.has=ta;rt.prototype.set=Na;function Ua(t,r){for(var e=-1,n=t==null?0:t.length;++e<n&&r(t[e],e,t)!==!1;);return t}var Va=function(){try{var t=X(Object,"defineProperty");return t({},"",{}),t}catch{}}();const Tr=Va;function Jr(t,r,e){r=="__proto__"&&Tr?Tr(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}var ka=Object.prototype,Ba=ka.hasOwnProperty;function Qr(t,r,e){var n=t[r];(!(Ba.call(t,r)&&Zr(n,e))||e===void 0&&!(r in t))&&Jr(t,r,e)}function bt(t,r,e,n){var i=!e;e||(e={});for(var o=-1,c=r.length;++o<c;){var h=r[o],g=n?n(e[h],t[h],h,e,t):void 0;g===void 0&&(g=t[h]),i?Jr(e,h,g):Qr(e,h,g)}return e}function za(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}var Ga="[object Arguments]";function Sr(t){return q(t)&&Y(t)==Ga}var te=Object.prototype,Ha=te.hasOwnProperty,Wa=te.propertyIsEnumerable,Ka=Sr(function(){return arguments}())?Sr:function(t){return q(t)&&Ha.call(t,"callee")&&!Wa.call(t,"callee")};const Ya=Ka;var qa=Array.isArray;const ut=qa;function Za(){return!1}var re=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jr=re&&typeof module=="object"&&module&&!module.nodeType&&module,Xa=jr&&jr.exports===re,Er=Xa?L.Buffer:void 0,Ja=Er?Er.isBuffer:void 0,Qa=Ja||Za;const ee=Qa;var ti=9007199254740991,ri=/^(?:0|[1-9]\d*)$/;function ei(t,r){var e=typeof t;return r=r??ti,!!r&&(e=="number"||e!="symbol"&&ri.test(t))&&t>-1&&t%1==0&&t<r}var ni=9007199254740991;function ne(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ni}var ai="[object Arguments]",ii="[object Array]",oi="[object Boolean]",ci="[object Date]",si="[object Error]",ui="[object Function]",li="[object Map]",fi="[object Number]",di="[object Object]",pi="[object RegExp]",hi="[object Set]",vi="[object String]",gi="[object WeakMap]",yi="[object ArrayBuffer]",bi="[object DataView]",mi="[object Float32Array]",Ti="[object Float64Array]",Si="[object Int8Array]",ji="[object Int16Array]",Ei="[object Int32Array]",_i="[object Uint8Array]",Ai="[object Uint8ClampedArray]",xi="[object Uint16Array]",$i="[object Uint32Array]",E={};E[mi]=E[Ti]=E[Si]=E[ji]=E[Ei]=E[_i]=E[Ai]=E[xi]=E[$i]=!0;E[ai]=E[ii]=E[yi]=E[oi]=E[bi]=E[ci]=E[si]=E[ui]=E[li]=E[fi]=E[di]=E[pi]=E[hi]=E[vi]=E[gi]=!1;function wi(t){return q(t)&&ne(t.length)&&!!E[Y(t)]}function kt(t){return function(r){return t(r)}}var ae=typeof exports=="object"&&exports&&!exports.nodeType&&exports,at=ae&&typeof module=="object"&&module&&!module.nodeType&&module,Oi=at&&at.exports===ae,It=Oi&&Wr.process,Ii=function(){try{var t=at&&at.require&&at.require("util").types;return t||It&&It.binding&&It.binding("util")}catch{}}();const tt=Ii;var _r=tt&&tt.isTypedArray,Ci=_r?kt(_r):wi;const Fi=Ci;var Mi=Object.prototype,Ri=Mi.hasOwnProperty;function ie(t,r){var e=ut(t),n=!e&&Ya(t),i=!e&&!n&&ee(t),o=!e&&!n&&!i&&Fi(t),c=e||n||i||o,h=c?za(t.length,String):[],g=h.length;for(var y in t)(r||Ri.call(t,y))&&!(c&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||ei(y,g)))&&h.push(y);return h}var Li=Object.prototype;function Bt(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||Li;return t===e}var Pi=Yr(Object.keys,Object);const Di=Pi;var Ni=Object.prototype,Ui=Ni.hasOwnProperty;function Vi(t){if(!Bt(t))return Di(t);var r=[];for(var e in Object(t))Ui.call(t,e)&&e!="constructor"&&r.push(e);return r}function oe(t){return t!=null&&ne(t.length)&&!Xr(t)}function zt(t){return oe(t)?ie(t):Vi(t)}function ki(t,r){return t&&bt(r,zt(r),t)}function Bi(t){var r=[];if(t!=null)for(var e in Object(t))r.push(e);return r}var zi=Object.prototype,Gi=zi.hasOwnProperty;function Hi(t){if(!st(t))return Bi(t);var r=Bt(t),e=[];for(var n in t)n=="constructor"&&(r||!Gi.call(t,n))||e.push(n);return e}function Gt(t){return oe(t)?ie(t,!0):Hi(t)}function Wi(t,r){return t&&bt(r,Gt(r),t)}var ce=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ar=ce&&typeof module=="object"&&module&&!module.nodeType&&module,Ki=Ar&&Ar.exports===ce,xr=Ki?L.Buffer:void 0,$r=xr?xr.allocUnsafe:void 0;function Yi(t,r){if(r)return t.slice();var e=t.length,n=$r?$r(e):new t.constructor(e);return t.copy(n),n}function se(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r}function qi(t,r){for(var e=-1,n=t==null?0:t.length,i=0,o=[];++e<n;){var c=t[e];r(c,e,t)&&(o[i++]=c)}return o}function ue(){return[]}var Zi=Object.prototype,Xi=Zi.propertyIsEnumerable,wr=Object.getOwnPropertySymbols,Ji=wr?function(t){return t==null?[]:(t=Object(t),qi(wr(t),function(r){return Xi.call(t,r)}))}:ue;const Ht=Ji;function Qi(t,r){return bt(t,Ht(t),r)}function le(t,r){for(var e=-1,n=r.length,i=t.length;++e<n;)t[i+e]=r[e];return t}var to=Object.getOwnPropertySymbols,ro=to?function(t){for(var r=[];t;)le(r,Ht(t)),t=Vt(t);return r}:ue;const fe=ro;function eo(t,r){return bt(t,fe(t),r)}function de(t,r,e){var n=r(t);return ut(t)?n:le(n,e(t))}function no(t){return de(t,zt,Ht)}function ao(t){return de(t,Gt,fe)}var io=X(L,"DataView");const Lt=io;var oo=X(L,"Promise");const Pt=oo;var co=X(L,"Set");const Dt=co;var so=X(L,"WeakMap");const Nt=so;var Or="[object Map]",uo="[object Object]",Ir="[object Promise]",Cr="[object Set]",Fr="[object WeakMap]",Mr="[object DataView]",lo=Z(Lt),fo=Z(ot),po=Z(Pt),ho=Z(Dt),vo=Z(Nt),H=Y;(Lt&&H(new Lt(new ArrayBuffer(1)))!=Mr||ot&&H(new ot)!=Or||Pt&&H(Pt.resolve())!=Ir||Dt&&H(new Dt)!=Cr||Nt&&H(new Nt)!=Fr)&&(H=function(t){var r=Y(t),e=r==uo?t.constructor:void 0,n=e?Z(e):"";if(n)switch(n){case lo:return Mr;case fo:return Or;case po:return Ir;case ho:return Cr;case vo:return Fr}return r});const Wt=H;var go=Object.prototype,yo=go.hasOwnProperty;function bo(t){var r=t.length,e=new t.constructor(r);return r&&typeof t[0]=="string"&&yo.call(t,"index")&&(e.index=t.index,e.input=t.input),e}var mo=L.Uint8Array;const Rr=mo;function Kt(t){var r=new t.constructor(t.byteLength);return new Rr(r).set(new Rr(t)),r}function To(t,r){var e=r?Kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}var So=/\w*$/;function jo(t){var r=new t.constructor(t.source,So.exec(t));return r.lastIndex=t.lastIndex,r}var Lr=k?k.prototype:void 0,Pr=Lr?Lr.valueOf:void 0;function Eo(t){return Pr?Object(Pr.call(t)):{}}function _o(t,r){var e=r?Kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}var Ao="[object Boolean]",xo="[object Date]",$o="[object Map]",wo="[object Number]",Oo="[object RegExp]",Io="[object Set]",Co="[object String]",Fo="[object Symbol]",Mo="[object ArrayBuffer]",Ro="[object DataView]",Lo="[object Float32Array]",Po="[object Float64Array]",Do="[object Int8Array]",No="[object Int16Array]",Uo="[object Int32Array]",Vo="[object Uint8Array]",ko="[object Uint8ClampedArray]",Bo="[object Uint16Array]",zo="[object Uint32Array]";function Go(t,r,e){var n=t.constructor;switch(r){case Mo:return Kt(t);case Ao:case xo:return new n(+t);case Ro:return To(t,e);case Lo:case Po:case Do:case No:case Uo:case Vo:case ko:case Bo:case zo:return _o(t,e);case $o:return new n;case wo:case Co:return new n(t);case Oo:return jo(t);case Io:return new n;case Fo:return Eo(t)}}var Dr=Object.create,Ho=function(){function t(){}return function(r){if(!st(r))return{};if(Dr)return Dr(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();const Wo=Ho;function Ko(t){return typeof t.constructor=="function"&&!Bt(t)?Wo(Vt(t)):{}}var Yo="[object Map]";function qo(t){return q(t)&&Wt(t)==Yo}var Nr=tt&&tt.isMap,Zo=Nr?kt(Nr):qo;const Xo=Zo;var Jo="[object Set]";function Qo(t){return q(t)&&Wt(t)==Jo}var Ur=tt&&tt.isSet,tc=Ur?kt(Ur):Qo;const rc=tc;var ec=1,nc=2,ac=4,pe="[object Arguments]",ic="[object Array]",oc="[object Boolean]",cc="[object Date]",sc="[object Error]",he="[object Function]",uc="[object GeneratorFunction]",lc="[object Map]",fc="[object Number]",ve="[object Object]",dc="[object RegExp]",pc="[object Set]",hc="[object String]",vc="[object Symbol]",gc="[object WeakMap]",yc="[object ArrayBuffer]",bc="[object DataView]",mc="[object Float32Array]",Tc="[object Float64Array]",Sc="[object Int8Array]",jc="[object Int16Array]",Ec="[object Int32Array]",_c="[object Uint8Array]",Ac="[object Uint8ClampedArray]",xc="[object Uint16Array]",$c="[object Uint32Array]",j={};j[pe]=j[ic]=j[yc]=j[bc]=j[oc]=j[cc]=j[mc]=j[Tc]=j[Sc]=j[jc]=j[Ec]=j[lc]=j[fc]=j[ve]=j[dc]=j[pc]=j[hc]=j[vc]=j[_c]=j[Ac]=j[xc]=j[$c]=!0;j[sc]=j[he]=j[gc]=!1;function pt(t,r,e,n,i,o){var c,h=r&ec,g=r&nc,y=r&ac;if(e&&(c=i?e(t,n,i,o):e(t)),c!==void 0)return c;if(!st(t))return t;var U=ut(t);if(U){if(c=bo(t),!h)return se(t,c)}else{var I=Wt(t),p=I==he||I==uc;if(ee(t))return Yi(t,h);if(I==ve||I==pe||p&&!i){if(c=g||p?{}:Ko(t),!h)return g?eo(t,Wi(c,t)):Qi(t,ki(c,t))}else{if(!j[I])return i?t:{};c=Go(t,I,h)}}o||(o=new rt);var w=o.get(t);if(w)return w;o.set(t,c),rc(t)?t.forEach(function($){c.add(pt($,r,e,$,t,o))}):Xo(t)&&t.forEach(function($,_){c.set(_,pt($,r,e,_,t,o))});var P=y?g?ao:no:g?Gt:zt,R=U?void 0:P(t);return Ua(R||t,function($,_){R&&(_=$,$=t[_]),Qr(c,_,pt($,r,e,_,t,o))}),c}var wc=4;function Vr(t){return pt(t,wc)}function ge(t,r){for(var e=-1,n=t==null?0:t.length,i=Array(n);++e<n;)i[e]=r(t[e],e,t);return i}var Oc="[object Symbol]";function Yt(t){return typeof t=="symbol"||q(t)&&Y(t)==Oc}var Ic="Expected a function";function qt(t,r){if(typeof t!="function"||r!=null&&typeof r!="function")throw new TypeError(Ic);var e=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=e.cache;if(o.has(i))return o.get(i);var c=t.apply(this,n);return e.cache=o.set(i,c)||o,c};return e.cache=new(qt.Cache||B),e}qt.Cache=B;var Cc=500;function Fc(t){var r=qt(t,function(n){return e.size===Cc&&e.clear(),n}),e=r.cache;return r}var Mc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rc=/\\(\\)?/g,Lc=Fc(function(t){var r=[];return t.charCodeAt(0)===46&&r.push(""),t.replace(Mc,function(e,n,i,o){r.push(i?o.replace(Rc,"$1"):n||e)}),r});const Pc=Lc;var Dc=1/0;function Nc(t){if(typeof t=="string"||Yt(t))return t;var r=t+"";return r=="0"&&1/t==-Dc?"-0":r}var Uc=1/0,kr=k?k.prototype:void 0,Br=kr?kr.toString:void 0;function ye(t){if(typeof t=="string")return t;if(ut(t))return ge(t,ye)+"";if(Yt(t))return Br?Br.call(t):"";var r=t+"";return r=="0"&&1/t==-Uc?"-0":r}function Vc(t){return t==null?"":ye(t)}function be(t){return ut(t)?ge(t,Nc):Yt(t)?[t]:se(Pc(Vc(t)))}function x(){return x=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},x.apply(this,arguments)}function me(t,r){if(t==null)return{};var e={},n=Object.keys(t),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(e[i]=t[i]);return e}var mt=l.createContext(void 0);mt.displayName="FormikContext";var kc=mt.Provider;mt.Consumer;function Bc(){var t=l.useContext(mt);return t||zn(!1),t}var F=function(r){return typeof r=="function"},Tt=function(r){return r!==null&&typeof r=="object"},zc=function(r){return String(Math.floor(Number(r)))===r},Ct=function(r){return Object.prototype.toString.call(r)==="[object String]"},Gc=function(r){return l.Children.count(r)===0},Ft=function(r){return Tt(r)&&F(r.then)};function O(t,r,e,n){n===void 0&&(n=0);for(var i=be(r);t&&n<i.length;)t=t[i[n++]];return n!==i.length&&!t||t===void 0?e:t}function W(t,r,e){for(var n=Vr(t),i=n,o=0,c=be(r);o<c.length-1;o++){var h=c[o],g=O(t,c.slice(0,o+1));if(g&&(Tt(g)||Array.isArray(g)))i=i[h]=Vr(g);else{var y=c[o+1];i=i[h]=zc(y)&&Number(y)>=0?[]:{}}}return(o===0?t:i)[c[o]]===e?t:(e===void 0?delete i[c[o]]:i[c[o]]=e,o===0&&e===void 0&&delete n[c[o]],n)}function Te(t,r,e,n){e===void 0&&(e=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(t);i<o.length;i++){var c=o[i],h=t[c];Tt(h)?e.get(h)||(e.set(h,!0),n[c]=Array.isArray(h)?[]:{},Te(h,r,e,n[c])):n[c]=r}return n}function Hc(t,r){switch(r.type){case"SET_VALUES":return x({},t,{values:r.payload});case"SET_TOUCHED":return x({},t,{touched:r.payload});case"SET_ERRORS":return G(t.errors,r.payload)?t:x({},t,{errors:r.payload});case"SET_STATUS":return x({},t,{status:r.payload});case"SET_ISSUBMITTING":return x({},t,{isSubmitting:r.payload});case"SET_ISVALIDATING":return x({},t,{isValidating:r.payload});case"SET_FIELD_VALUE":return x({},t,{values:W(t.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return x({},t,{touched:W(t.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return x({},t,{errors:W(t.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return x({},t,r.payload);case"SET_FORMIK_STATE":return r.payload(t);case"SUBMIT_ATTEMPT":return x({},t,{touched:Te(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return x({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return x({},t,{isSubmitting:!1});default:return t}}var z={},dt={};function Wc(t){var r=t.validateOnChange,e=r===void 0?!0:r,n=t.validateOnBlur,i=n===void 0?!0:n,o=t.validateOnMount,c=o===void 0?!1:o,h=t.isInitialValid,g=t.enableReinitialize,y=g===void 0?!1:g,U=t.onSubmit,I=me(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=x({validateOnChange:e,validateOnBlur:i,validateOnMount:c,onSubmit:U},I),w=l.useRef(p.initialValues),P=l.useRef(p.initialErrors||z),R=l.useRef(p.initialTouched||dt),$=l.useRef(p.initialStatus),_=l.useRef(!1),V=l.useRef({});l.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var je=l.useState(0),Ee=je[1],lt=l.useRef({values:p.initialValues,errors:p.initialErrors||z,touched:p.initialTouched||dt,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=lt.current,m=l.useCallback(function(a){var s=lt.current;lt.current=Hc(s,a),s!==lt.current&&Ee(function(u){return u+1})},[]),Zt=l.useCallback(function(a,s){return new Promise(function(u,f){var v=p.validate(a,s);v==null?u(z):Ft(v)?v.then(function(b){u(b||z)},function(b){f(b)}):u(v)})},[p.validate]),St=l.useCallback(function(a,s){var u=p.validationSchema,f=F(u)?u(s):u,v=s&&f.validateAt?f.validateAt(s,a):qc(a,f);return new Promise(function(b,A){v.then(function(){b(z)},function(D){D.name==="ValidationError"?b(Yc(D)):A(D)})})},[p.validationSchema]),Xt=l.useCallback(function(a,s){return new Promise(function(u){return u(V.current[a].validate(s))})},[]),Jt=l.useCallback(function(a){var s=Object.keys(V.current).filter(function(f){return F(V.current[f].validate)}),u=s.length>0?s.map(function(f){return Xt(f,O(a,f))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(f){return f.reduce(function(v,b,A){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(v=W(v,s[A],b)),v},{})})},[Xt]),_e=l.useCallback(function(a){return Promise.all([Jt(a),p.validationSchema?St(a):{},p.validate?Zt(a):{}]).then(function(s){var u=s[0],f=s[1],v=s[2],b=Mt.all([u,f,v],{arrayMerge:Zc});return b})},[p.validate,p.validationSchema,Jt,Zt,St]),M=C(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),_e(a).then(function(s){return _.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:s})),s})});l.useEffect(function(){c&&_.current===!0&&G(w.current,p.initialValues)&&M(w.current)},[c,M]);var et=l.useCallback(function(a){var s=a&&a.values?a.values:w.current,u=a&&a.errors?a.errors:P.current?P.current:p.initialErrors||{},f=a&&a.touched?a.touched:R.current?R.current:p.initialTouched||{},v=a&&a.status?a.status:$.current?$.current:p.initialStatus;w.current=s,P.current=u,R.current=f,$.current=v;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:u,touched:f,status:v,values:s,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(p.onReset){var A=p.onReset(T.values,sr);Ft(A)?A.then(b):b()}else b()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]);l.useEffect(function(){_.current===!0&&!G(w.current,p.initialValues)&&y&&(w.current=p.initialValues,et(),c&&M(w.current))},[y,p.initialValues,et,c,M]),l.useEffect(function(){y&&_.current===!0&&!G(P.current,p.initialErrors)&&(P.current=p.initialErrors||z,m({type:"SET_ERRORS",payload:p.initialErrors||z}))},[y,p.initialErrors]),l.useEffect(function(){y&&_.current===!0&&!G(R.current,p.initialTouched)&&(R.current=p.initialTouched||dt,m({type:"SET_TOUCHED",payload:p.initialTouched||dt}))},[y,p.initialTouched]),l.useEffect(function(){y&&_.current===!0&&!G($.current,p.initialStatus)&&($.current=p.initialStatus,m({type:"SET_STATUS",payload:p.initialStatus}))},[y,p.initialStatus,p.initialTouched]);var Qt=C(function(a){if(V.current[a]&&F(V.current[a].validate)){var s=O(T.values,a),u=V.current[a].validate(s);return Ft(u)?(m({type:"SET_ISVALIDATING",payload:!0}),u.then(function(f){return f}).then(function(f){m({type:"SET_FIELD_ERROR",payload:{field:a,value:f}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:u}}),Promise.resolve(u))}else if(p.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),St(T.values,a).then(function(f){return f}).then(function(f){m({type:"SET_FIELD_ERROR",payload:{field:a,value:O(f,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ae=l.useCallback(function(a,s){var u=s.validate;V.current[a]={validate:u}},[]),xe=l.useCallback(function(a){delete V.current[a]},[]),tr=C(function(a,s){m({type:"SET_TOUCHED",payload:a});var u=s===void 0?i:s;return u?M(T.values):Promise.resolve()}),rr=l.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),er=C(function(a,s){var u=F(a)?a(T.values):a;m({type:"SET_VALUES",payload:u});var f=s===void 0?e:s;return f?M(u):Promise.resolve()}),ft=l.useCallback(function(a,s){m({type:"SET_FIELD_ERROR",payload:{field:a,value:s}})},[]),J=C(function(a,s,u){m({type:"SET_FIELD_VALUE",payload:{field:a,value:s}});var f=u===void 0?e:u;return f?M(W(T.values,a,s)):Promise.resolve()}),nr=l.useCallback(function(a,s){var u=s,f=a,v;if(!Ct(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,A=b.type,D=b.name,xt=b.id,$t=b.value,Le=b.checked,ss=b.outerHTML,ur=b.options,Pe=b.multiple;u=s||D||xt,f=/number|range/.test(A)?(v=parseFloat($t),isNaN(v)?"":v):/checkbox/.test(A)?Jc(O(T.values,u),Le,$t):ur&&Pe?Xc(ur):$t}u&&J(u,f)},[J,T.values]),jt=C(function(a){if(Ct(a))return function(s){return nr(s,a)};nr(a)}),Q=C(function(a,s,u){s===void 0&&(s=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:s}});var f=u===void 0?i:u;return f?M(T.values):Promise.resolve()}),ar=l.useCallback(function(a,s){a.persist&&a.persist();var u=a.target,f=u.name,v=u.id,b=u.outerHTML,A=s||f||v;Q(A,!0)},[Q]),Et=C(function(a){if(Ct(a))return function(s){return ar(s,a)};ar(a)}),ir=l.useCallback(function(a){F(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),or=l.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),cr=l.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),_t=C(function(){return m({type:"SUBMIT_ATTEMPT"}),M().then(function(a){var s=a instanceof Error,u=!s&&Object.keys(a).length===0;if(u){var f;try{if(f=we(),f===void 0)return}catch(v){throw v}return Promise.resolve(f).then(function(v){return _.current&&m({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(_.current)throw m({type:"SUBMIT_FAILURE"}),v})}else if(_.current&&(m({type:"SUBMIT_FAILURE"}),s))throw a})}),$e=C(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),_t().catch(function(s){console.warn("Warning: An unhandled error was caught from submitForm()",s)})}),sr={resetForm:et,validateForm:M,validateField:Qt,setErrors:rr,setFieldError:ft,setFieldTouched:Q,setFieldValue:J,setStatus:or,setSubmitting:cr,setTouched:tr,setValues:er,setFormikState:ir,submitForm:_t},we=C(function(){return U(T.values,sr)}),Oe=C(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),et()}),Ie=l.useCallback(function(a){return{value:O(T.values,a),error:O(T.errors,a),touched:!!O(T.touched,a),initialValue:O(w.current,a),initialTouched:!!O(R.current,a),initialError:O(P.current,a)}},[T.errors,T.touched,T.values]),Ce=l.useCallback(function(a){return{setValue:function(u,f){return J(a,u,f)},setTouched:function(u,f){return Q(a,u,f)},setError:function(u){return ft(a,u)}}},[J,Q,ft]),Fe=l.useCallback(function(a){var s=Tt(a),u=s?a.name:a,f=O(T.values,u),v={name:u,value:f,onChange:jt,onBlur:Et};if(s){var b=a.type,A=a.value,D=a.as,xt=a.multiple;b==="checkbox"?A===void 0?v.checked=!!f:(v.checked=!!(Array.isArray(f)&&~f.indexOf(A)),v.value=A):b==="radio"?(v.checked=f===A,v.value=A):D==="select"&&xt&&(v.value=v.value||[],v.multiple=!0)}return v},[Et,jt,T.values]),At=l.useMemo(function(){return!G(w.current,T.values)},[w.current,T.values]),Me=l.useMemo(function(){return typeof h<"u"?At?T.errors&&Object.keys(T.errors).length===0:h!==!1&&F(h)?h(p):h:T.errors&&Object.keys(T.errors).length===0},[h,At,T.errors,p]),Re=x({},T,{initialValues:w.current,initialErrors:P.current,initialTouched:R.current,initialStatus:$.current,handleBlur:Et,handleChange:jt,handleReset:Oe,handleSubmit:$e,resetForm:et,setErrors:rr,setFormikState:ir,setFieldTouched:Q,setFieldValue:J,setFieldError:ft,setStatus:or,setSubmitting:cr,setTouched:tr,setValues:er,submitForm:_t,validateForm:M,validateField:Qt,isValid:Me,dirty:At,unregisterField:xe,registerField:Ae,getFieldProps:Fe,getFieldMeta:Ie,getFieldHelpers:Ce,validateOnBlur:i,validateOnChange:e,validateOnMount:c});return Re}function Kc(t){var r=Wc(t),e=t.component,n=t.children,i=t.render,o=t.innerRef;return l.useImperativeHandle(o,function(){return r}),l.createElement(kc,{value:r},e?l.createElement(e,r):i?i(r):n?F(n)?n(r):Gc(n)?null:l.Children.only(n):null)}function Yc(t){var r={};if(t.inner){if(t.inner.length===0)return W(r,t.path,t.message);for(var i=t.inner,e=Array.isArray(i),n=0,i=e?i:i[Symbol.iterator]();;){var o;if(e){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;O(r,c.path)||(r=W(r,c.path,c.message))}}return r}function qc(t,r,e,n){e===void 0&&(e=!1);var i=Ut(t);return r[e?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ut(t){var r=Array.isArray(t)?[]:{};for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var n=String(e);Array.isArray(t[n])===!0?r[n]=t[n].map(function(i){return Array.isArray(i)===!0||gr(i)?Ut(i):i!==""?i:void 0}):gr(t[n])?r[n]=Ut(t[n]):r[n]=t[n]!==""?t[n]:void 0}return r}function Zc(t,r,e){var n=t.slice();return r.forEach(function(o,c){if(typeof n[c]>"u"){var h=e.clone!==!1,g=h&&e.isMergeableObject(o);n[c]=g?Mt(Array.isArray(o)?[]:{},o,e):o}else e.isMergeableObject(o)?n[c]=Mt(t[c],o,e):t.indexOf(o)===-1&&n.push(o)}),n}function Xc(t){return Array.from(t).filter(function(r){return r.selected}).map(function(r){return r.value})}function Jc(t,r,e){if(typeof t=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(t))n=t,o=t.indexOf(e),i=o>=0;else if(!e||e=="true"||e=="false")return!!r;return r&&e&&!i?n.concat(e):i?n.slice(0,o).concat(n.slice(o+1)):n}var Qc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function C(t){var r=l.useRef(t);return Qc(function(){r.current=t}),l.useCallback(function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var Se=l.forwardRef(function(t,r){var e=t.action,n=me(t,["action"]),i=e??"#",o=Bc(),c=o.handleReset,h=o.handleSubmit;return l.createElement("form",x({onSubmit:h,ref:r,onReset:c,action:i},n))});Se.displayName="Form";function ts(t){return vt({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(t)}function rs(t){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(t)}const es=S.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,ns=S.div`
  position: relative;
`;S.form``;const as=S.input`
  padding: 10px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff63;
  height: 44px;
  color: var(--main-color);
`,is=S.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  gap: 8px;
`,os=S.button`
  border: none;
  background-color: transparent;
  color: grey;

  & svg {
    width: 15px;
    height: 15px;
  }

  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,cs=()=>d.jsx(ns,{children:d.jsx(Kc,{initialValues:{search:""},onSubmit:(t,{setSubmitting:r})=>{if(t.search!=="")console.log(t),r(!1);else return Ve.error("Enter the name of the dish",ke)},children:({values:t,handleChange:r,handleSubmit:e,resetForm:n,errors:i})=>d.jsxs(Se,{onSubmit:e,children:[d.jsx(as,{error:i.search,type:"text",name:"search",placeholder:"Search...",onChange:r,value:t.search}),d.jsxs(is,{children:[t.search!==""&&d.jsx(os,{type:"button",onClick:()=>n(),className:"delete",children:d.jsx(ts,{})}),d.jsx(es,{className:"search",type:"submit",children:d.jsx(rs,{})})]})]})})}),ds=()=>{const t=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}];return d.jsxs(d.Fragment,{children:[d.jsx(He,{children:d.jsx(Gr,{children:d.jsxs(We,{children:[d.jsxs(Ke,{to:"/",children:[d.jsx(Hr,{})," Kindzmarauli"]}),d.jsxs(Ye,{children:[d.jsx(lr,{children:d.jsx(nn,{})}),t.map(({name:r,to:e})=>d.jsx(lr,{children:d.jsx(fr,{activeclassname:"active",to:e,children:r})},r))]}),d.jsxs(qe,{children:[d.jsx(cs,{}),d.jsx(Ze,{type:"button",children:d.jsx(Ge,{})}),d.jsx(fr,{activeclassname:"active",to:"basket",children:d.jsx(ze,{})})]})]})})}),d.jsx("main",{style:{flexGrow:1},children:d.jsx(l.Suspense,{fallback:d.jsx("p",{children:"Loading..."}),children:d.jsx(Be,{})})}),d.jsx(fn,{})]})};export{ds as default};
