import{s as x,i as Vr,L as Vt,N as Br,r as f,u as Ge,j as u,C as He,g as zr,a as Gr,b as Hr,c as Wr,f as We,Q as Kr,d as qr,e as Yr,O as Zr}from"./index-lYmy7WKL.js";import{G as ct}from"./iconBase-F2zskg0O.js";import{P as Xr,G as Ke,f as Jr,a as Qr}from"./selector-YPcMvgxH.js";import{G as tn}from"./index.esm-J2xBe3ki.js";import{s as $t}from"./specifics_dish-m9aeWgjf.js";import{F as en,I as rn,W as nn,D as an,B as on}from"./FilterForm.styled-nUo5M-7I.js";import{u as qe}from"./useDispatch-PD-F7P4N.js";function sn(t){return ct({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(t)}function cn(t){return ct({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(t)}function un(t){return ct({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}const ln=x.header`
  position: static;
  top: 0;
  padding-bottom: 44px;
  padding-top: 50px;
  z-index: 20;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.6195728291316527) 48%
  );
`,fn=x.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,dn=x(Vt)`
  color: var(--main-color);
  font-size: 26px;
  line-height: 1;
  font-weight: 900;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`,pn=x.span``,hn=x.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 420px;

  @media screen and (max-width: 767px) {
    position: fixed;
    visibility: ${({["data-visibility"]:t})=>t==="true"?"visible":"hidden"};
    opacity: ${({["data-visibility"]:t})=>t==="true"?"1":"0"};
    background-color: #000;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    padding: 50px;
    transition: visibility 350ms ease-in-out, opacity 350ms ease-in-out;
    background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.6195728291316527) 48%
      ),
      url(${Vr});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
  }

  @media screen and (min-width: 1400px) {
    max-width: 100%;
    justify-content: space-between;
  }
`,gn=x.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`,Ct=x.button`
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

  &.user_button {
    margin-right: 20px;
  }
  &.close_mobil_menu {
    position: absolute;
    top: 40px;
    right: 50px;
  }

  @media screen and (min-width: 768px) {
    &.open_mobil_menu,
    &.close_mobil_menu {
      display: none;
    }

    &.user_button {
      margin-right: 0;
    }
  }
`,vn=x.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,de=x.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,yn=x(Br)`
  color: var(--main-color);
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
`,mn=x.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,bn=x(Vt)`
  color: var(--main-color);
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
`,Tn=x.div`
  position: relative;
`,Sn=x.p`
  cursor: pointer;

  color: ${({["data-active"]:t})=>t==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`,jn=x.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;

  display: ${({["data-show"]:t})=>t==="true"?"block":"none"};
`,xn=x.li`
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
`,_n=x(Vt)`
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
`,pe=[{name:"Main Dishes",to:`/hot_dishes#${$t.MAIN}`},{name:"Grilled Dishes",to:`/hot_dishes#${$t.GRILLED}`},{name:"Khinkali",to:`/hot_dishes#${$t.KHINKALI}`}],Ye=t=>{const{onClick:e}=t,[r,n]=f.useState(!1),[i,o]=f.useState("Hoot Dishes"),{pathname:s,hash:h}=Ge(),y=f.useRef(null);f.useEffect(()=>{pe.every(({to:E})=>E!==s)&&o("Hot Dishes")},[s]);const v=_=>{window.location.hash===_&&(window.location.hash="#",y.current=setTimeout(()=>{window.location.hash=_},300))};return f.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]),u.jsxs(Tn,{children:[u.jsxs(Sn,{onClick:()=>{n(!r)},"data-active":r.toString(),children:[i,u.jsx("span",{children:u.jsx(tn,{})})]}),u.jsx(jn,{"data-show":r.toString(),onClick:_=>{_.target!==_.currentTarget&&(o(_.target.textContent),n(!1),e())},children:pe.map(({name:_,to:E})=>u.jsx(xn,{onClick:()=>v(h),children:u.jsx(_n,{to:E,children:_})},_))})]})};Ye.propTypes={onClick:Xr.func.isRequired};const En=x.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,wn=x.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,An=x.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,he=x.a`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
  display: block;

  &.email {
    font-size: 12px;
    text-decoration-line: underline;
  }

  &:not(:last-child) {
    margin-bottom: 19px;
  }

  &:hover,
  :focus {
    color: var(--active-color);
  }

  @media screen and (min-width: 768px) {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 29px;
      margin-bottom: 0;
    }
  }
`,$n=x.div`
  display: flex;
  justify-content: space-between;

  border-top: 0.5px solid grey;
  padding-top: 28px;

  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Cn=x.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,On=x.div``,ge=x.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,In=()=>u.jsx(En,{children:u.jsxs(He,{children:[u.jsxs(wn,{children:[u.jsxs(An,{children:[u.jsx(Ke,{})," Kindzmarauli"]}),u.jsxs("div",{children:[u.jsx(he,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),u.jsx(he,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),u.jsxs($n,{children:[u.jsx(Cn,{children:"© 2023, official site"}),u.jsxs(On,{children:[u.jsx(ge,{href:"#",children:"Privacy Policy and Offer"}),u.jsx(ge,{href:"#",children:"Terms of use"})]})]})]})});var Mn=function(e){return Fn(e)&&!Rn(e)};function Fn(t){return!!t&&typeof t=="object"}function Rn(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Dn(t)}var Pn=typeof Symbol=="function"&&Symbol.for,Ln=Pn?Symbol.for("react.element"):60103;function Dn(t){return t.$$typeof===Ln}function Nn(t){return Array.isArray(t)?[]:{}}function gt(t,e){return e.clone!==!1&&e.isMergeableObject(t)?it(Nn(t),t,e):t}function kn(t,e,r){return t.concat(e).map(function(n){return gt(n,r)})}function Un(t,e,r){var n={};return r.isMergeableObject(t)&&Object.keys(t).forEach(function(i){n[i]=gt(t[i],r)}),Object.keys(e).forEach(function(i){!r.isMergeableObject(e[i])||!t[i]?n[i]=gt(e[i],r):n[i]=it(t[i],e[i],r)}),n}function it(t,e,r){r=r||{},r.arrayMerge=r.arrayMerge||kn,r.isMergeableObject=r.isMergeableObject||Mn;var n=Array.isArray(e),i=Array.isArray(t),o=n===i;return o?n?r.arrayMerge(t,e,r):Un(t,e,r):gt(e,r)}it.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return it(n,i,r)},{})};var Rt=it,Vn=typeof global=="object"&&global&&global.Object===Object&&global;const Ze=Vn;var Bn=typeof self=="object"&&self&&self.Object===Object&&self,zn=Ze||Bn||Function("return this")();const D=zn;var Gn=D.Symbol;const V=Gn;var Xe=Object.prototype,Hn=Xe.hasOwnProperty,Wn=Xe.toString,nt=V?V.toStringTag:void 0;function Kn(t){var e=Hn.call(t,nt),r=t[nt];try{t[nt]=void 0;var n=!0}catch{}var i=Wn.call(t);return n&&(e?t[nt]=r:delete t[nt]),i}var qn=Object.prototype,Yn=qn.toString;function Zn(t){return Yn.call(t)}var Xn="[object Null]",Jn="[object Undefined]",ve=V?V.toStringTag:void 0;function q(t){return t==null?t===void 0?Jn:Xn:ve&&ve in Object(t)?Kn(t):Zn(t)}function Je(t,e){return function(r){return t(e(r))}}var Qn=Je(Object.getPrototypeOf,Object);const Bt=Qn;function Y(t){return t!=null&&typeof t=="object"}var ta="[object Object]",ea=Function.prototype,ra=Object.prototype,Qe=ea.toString,na=ra.hasOwnProperty,aa=Qe.call(Object);function ye(t){if(!Y(t)||q(t)!=ta)return!1;var e=Bt(t);if(e===null)return!0;var r=na.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&Qe.call(r)==aa}var me=Array.isArray,be=Object.keys,ia=Object.prototype.hasOwnProperty,oa=typeof Element<"u";function Pt(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var r=me(t),n=me(e),i,o,s;if(r&&n){if(o=t.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!Pt(t[i],e[i]))return!1;return!0}if(r!=n)return!1;var h=t instanceof Date,y=e instanceof Date;if(h!=y)return!1;if(h&&y)return t.getTime()==e.getTime();var v=t instanceof RegExp,_=e instanceof RegExp;if(v!=_)return!1;if(v&&_)return t.toString()==e.toString();var E=be(t);if(o=E.length,o!==be(e).length)return!1;for(i=o;i--!==0;)if(!ia.call(e,E[i]))return!1;if(oa&&t instanceof Element&&e instanceof Element)return t===e;for(i=o;i--!==0;)if(s=E[i],!(s==="_owner"&&t.$$typeof)&&!Pt(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}var sa=function(e,r){try{return Pt(e,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=zr(sa);var ca=!0;function ua(t,e){if(!ca){if(t)return;var r="Warning: "+e;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function la(){this.__data__=[],this.size=0}function tr(t,e){return t===e||t!==t&&e!==e}function vt(t,e){for(var r=t.length;r--;)if(tr(t[r][0],e))return r;return-1}var fa=Array.prototype,da=fa.splice;function pa(t){var e=this.__data__,r=vt(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():da.call(e,r,1),--this.size,!0}function ha(t){var e=this.__data__,r=vt(e,t);return r<0?void 0:e[r][1]}function ga(t){return vt(this.__data__,t)>-1}function va(t,e){var r=this.__data__,n=vt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function k(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}k.prototype.clear=la;k.prototype.delete=pa;k.prototype.get=ha;k.prototype.has=ga;k.prototype.set=va;function ya(){this.__data__=new k,this.size=0}function ma(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function ba(t){return this.__data__.get(t)}function Ta(t){return this.__data__.has(t)}function ut(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Sa="[object AsyncFunction]",ja="[object Function]",xa="[object GeneratorFunction]",_a="[object Proxy]";function er(t){if(!ut(t))return!1;var e=q(t);return e==ja||e==xa||e==Sa||e==_a}var Ea=D["__core-js_shared__"];const Ot=Ea;var Te=function(){var t=/[^.]+$/.exec(Ot&&Ot.keys&&Ot.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function wa(t){return!!Te&&Te in t}var Aa=Function.prototype,$a=Aa.toString;function Z(t){if(t!=null){try{return $a.call(t)}catch{}try{return t+""}catch{}}return""}var Ca=/[\\^$.*+?()[\]{}|]/g,Oa=/^\[object .+?Constructor\]$/,Ia=Function.prototype,Ma=Object.prototype,Fa=Ia.toString,Ra=Ma.hasOwnProperty,Pa=RegExp("^"+Fa.call(Ra).replace(Ca,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function La(t){if(!ut(t)||wa(t))return!1;var e=er(t)?Pa:Oa;return e.test(Z(t))}function Da(t,e){return t==null?void 0:t[e]}function X(t,e){var r=Da(t,e);return La(r)?r:void 0}var Na=X(D,"Map");const ot=Na;var ka=X(Object,"create");const st=ka;function Ua(){this.__data__=st?st(null):{},this.size=0}function Va(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Ba="__lodash_hash_undefined__",za=Object.prototype,Ga=za.hasOwnProperty;function Ha(t){var e=this.__data__;if(st){var r=e[t];return r===Ba?void 0:r}return Ga.call(e,t)?e[t]:void 0}var Wa=Object.prototype,Ka=Wa.hasOwnProperty;function qa(t){var e=this.__data__;return st?e[t]!==void 0:Ka.call(e,t)}var Ya="__lodash_hash_undefined__";function Za(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=st&&e===void 0?Ya:e,this}function K(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}K.prototype.clear=Ua;K.prototype.delete=Va;K.prototype.get=Ha;K.prototype.has=qa;K.prototype.set=Za;function Xa(){this.size=0,this.__data__={hash:new K,map:new(ot||k),string:new K}}function Ja(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function yt(t,e){var r=t.__data__;return Ja(e)?r[typeof e=="string"?"string":"hash"]:r.map}function Qa(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e}function ti(t){return yt(this,t).get(t)}function ei(t){return yt(this,t).has(t)}function ri(t,e){var r=yt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function B(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}B.prototype.clear=Xa;B.prototype.delete=Qa;B.prototype.get=ti;B.prototype.has=ei;B.prototype.set=ri;var ni=200;function ai(t,e){var r=this.__data__;if(r instanceof k){var n=r.__data__;if(!ot||n.length<ni-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new B(n)}return r.set(t,e),this.size=r.size,this}function et(t){var e=this.__data__=new k(t);this.size=e.size}et.prototype.clear=ya;et.prototype.delete=ma;et.prototype.get=ba;et.prototype.has=Ta;et.prototype.set=ai;function ii(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var oi=function(){try{var t=X(Object,"defineProperty");return t({},"",{}),t}catch{}}();const Se=oi;function rr(t,e,r){e=="__proto__"&&Se?Se(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var si=Object.prototype,ci=si.hasOwnProperty;function nr(t,e,r){var n=t[e];(!(ci.call(t,e)&&tr(n,r))||r===void 0&&!(e in t))&&rr(t,e,r)}function mt(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var h=e[o],y=n?n(r[h],t[h],h,r,t):void 0;y===void 0&&(y=t[h]),i?rr(r,h,y):nr(r,h,y)}return r}function ui(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var li="[object Arguments]";function je(t){return Y(t)&&q(t)==li}var ar=Object.prototype,fi=ar.hasOwnProperty,di=ar.propertyIsEnumerable,pi=je(function(){return arguments}())?je:function(t){return Y(t)&&fi.call(t,"callee")&&!di.call(t,"callee")};const hi=pi;var gi=Array.isArray;const lt=gi;function vi(){return!1}var ir=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xe=ir&&typeof module=="object"&&module&&!module.nodeType&&module,yi=xe&&xe.exports===ir,_e=yi?D.Buffer:void 0,mi=_e?_e.isBuffer:void 0,bi=mi||vi;const or=bi;var Ti=9007199254740991,Si=/^(?:0|[1-9]\d*)$/;function ji(t,e){var r=typeof t;return e=e??Ti,!!e&&(r=="number"||r!="symbol"&&Si.test(t))&&t>-1&&t%1==0&&t<e}var xi=9007199254740991;function sr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=xi}var _i="[object Arguments]",Ei="[object Array]",wi="[object Boolean]",Ai="[object Date]",$i="[object Error]",Ci="[object Function]",Oi="[object Map]",Ii="[object Number]",Mi="[object Object]",Fi="[object RegExp]",Ri="[object Set]",Pi="[object String]",Li="[object WeakMap]",Di="[object ArrayBuffer]",Ni="[object DataView]",ki="[object Float32Array]",Ui="[object Float64Array]",Vi="[object Int8Array]",Bi="[object Int16Array]",zi="[object Int32Array]",Gi="[object Uint8Array]",Hi="[object Uint8ClampedArray]",Wi="[object Uint16Array]",Ki="[object Uint32Array]",j={};j[ki]=j[Ui]=j[Vi]=j[Bi]=j[zi]=j[Gi]=j[Hi]=j[Wi]=j[Ki]=!0;j[_i]=j[Ei]=j[Di]=j[wi]=j[Ni]=j[Ai]=j[$i]=j[Ci]=j[Oi]=j[Ii]=j[Mi]=j[Fi]=j[Ri]=j[Pi]=j[Li]=!1;function qi(t){return Y(t)&&sr(t.length)&&!!j[q(t)]}function zt(t){return function(e){return t(e)}}var cr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,at=cr&&typeof module=="object"&&module&&!module.nodeType&&module,Yi=at&&at.exports===cr,It=Yi&&Ze.process,Zi=function(){try{var t=at&&at.require&&at.require("util").types;return t||It&&It.binding&&It.binding("util")}catch{}}();const tt=Zi;var Ee=tt&&tt.isTypedArray,Xi=Ee?zt(Ee):qi;const Ji=Xi;var Qi=Object.prototype,to=Qi.hasOwnProperty;function ur(t,e){var r=lt(t),n=!r&&hi(t),i=!r&&!n&&or(t),o=!r&&!n&&!i&&Ji(t),s=r||n||i||o,h=s?ui(t.length,String):[],y=h.length;for(var v in t)(e||to.call(t,v))&&!(s&&(v=="length"||i&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||ji(v,y)))&&h.push(v);return h}var eo=Object.prototype;function Gt(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||eo;return t===r}var ro=Je(Object.keys,Object);const no=ro;var ao=Object.prototype,io=ao.hasOwnProperty;function oo(t){if(!Gt(t))return no(t);var e=[];for(var r in Object(t))io.call(t,r)&&r!="constructor"&&e.push(r);return e}function lr(t){return t!=null&&sr(t.length)&&!er(t)}function Ht(t){return lr(t)?ur(t):oo(t)}function so(t,e){return t&&mt(e,Ht(e),t)}function co(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var uo=Object.prototype,lo=uo.hasOwnProperty;function fo(t){if(!ut(t))return co(t);var e=Gt(t),r=[];for(var n in t)n=="constructor"&&(e||!lo.call(t,n))||r.push(n);return r}function Wt(t){return lr(t)?ur(t,!0):fo(t)}function po(t,e){return t&&mt(e,Wt(e),t)}var fr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,we=fr&&typeof module=="object"&&module&&!module.nodeType&&module,ho=we&&we.exports===fr,Ae=ho?D.Buffer:void 0,$e=Ae?Ae.allocUnsafe:void 0;function go(t,e){if(e)return t.slice();var r=t.length,n=$e?$e(r):new t.constructor(r);return t.copy(n),n}function dr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function vo(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o}function pr(){return[]}var yo=Object.prototype,mo=yo.propertyIsEnumerable,Ce=Object.getOwnPropertySymbols,bo=Ce?function(t){return t==null?[]:(t=Object(t),vo(Ce(t),function(e){return mo.call(t,e)}))}:pr;const Kt=bo;function To(t,e){return mt(t,Kt(t),e)}function hr(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var So=Object.getOwnPropertySymbols,jo=So?function(t){for(var e=[];t;)hr(e,Kt(t)),t=Bt(t);return e}:pr;const gr=jo;function xo(t,e){return mt(t,gr(t),e)}function vr(t,e,r){var n=e(t);return lt(t)?n:hr(n,r(t))}function _o(t){return vr(t,Ht,Kt)}function Eo(t){return vr(t,Wt,gr)}var wo=X(D,"DataView");const Lt=wo;var Ao=X(D,"Promise");const Dt=Ao;var $o=X(D,"Set");const Nt=$o;var Co=X(D,"WeakMap");const kt=Co;var Oe="[object Map]",Oo="[object Object]",Ie="[object Promise]",Me="[object Set]",Fe="[object WeakMap]",Re="[object DataView]",Io=Z(Lt),Mo=Z(ot),Fo=Z(Dt),Ro=Z(Nt),Po=Z(kt),H=q;(Lt&&H(new Lt(new ArrayBuffer(1)))!=Re||ot&&H(new ot)!=Oe||Dt&&H(Dt.resolve())!=Ie||Nt&&H(new Nt)!=Me||kt&&H(new kt)!=Fe)&&(H=function(t){var e=q(t),r=e==Oo?t.constructor:void 0,n=r?Z(r):"";if(n)switch(n){case Io:return Re;case Mo:return Oe;case Fo:return Ie;case Ro:return Me;case Po:return Fe}return e});const qt=H;var Lo=Object.prototype,Do=Lo.hasOwnProperty;function No(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Do.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var ko=D.Uint8Array;const Pe=ko;function Yt(t){var e=new t.constructor(t.byteLength);return new Pe(e).set(new Pe(t)),e}function Uo(t,e){var r=e?Yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Vo=/\w*$/;function Bo(t){var e=new t.constructor(t.source,Vo.exec(t));return e.lastIndex=t.lastIndex,e}var Le=V?V.prototype:void 0,De=Le?Le.valueOf:void 0;function zo(t){return De?Object(De.call(t)):{}}function Go(t,e){var r=e?Yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Ho="[object Boolean]",Wo="[object Date]",Ko="[object Map]",qo="[object Number]",Yo="[object RegExp]",Zo="[object Set]",Xo="[object String]",Jo="[object Symbol]",Qo="[object ArrayBuffer]",ts="[object DataView]",es="[object Float32Array]",rs="[object Float64Array]",ns="[object Int8Array]",as="[object Int16Array]",is="[object Int32Array]",os="[object Uint8Array]",ss="[object Uint8ClampedArray]",cs="[object Uint16Array]",us="[object Uint32Array]";function ls(t,e,r){var n=t.constructor;switch(e){case Qo:return Yt(t);case Ho:case Wo:return new n(+t);case ts:return Uo(t,r);case es:case rs:case ns:case as:case is:case os:case ss:case cs:case us:return Go(t,r);case Ko:return new n;case qo:case Xo:return new n(t);case Yo:return Bo(t);case Zo:return new n;case Jo:return zo(t)}}var Ne=Object.create,fs=function(){function t(){}return function(e){if(!ut(e))return{};if(Ne)return Ne(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const ds=fs;function ps(t){return typeof t.constructor=="function"&&!Gt(t)?ds(Bt(t)):{}}var hs="[object Map]";function gs(t){return Y(t)&&qt(t)==hs}var ke=tt&&tt.isMap,vs=ke?zt(ke):gs;const ys=vs;var ms="[object Set]";function bs(t){return Y(t)&&qt(t)==ms}var Ue=tt&&tt.isSet,Ts=Ue?zt(Ue):bs;const Ss=Ts;var js=1,xs=2,_s=4,yr="[object Arguments]",Es="[object Array]",ws="[object Boolean]",As="[object Date]",$s="[object Error]",mr="[object Function]",Cs="[object GeneratorFunction]",Os="[object Map]",Is="[object Number]",br="[object Object]",Ms="[object RegExp]",Fs="[object Set]",Rs="[object String]",Ps="[object Symbol]",Ls="[object WeakMap]",Ds="[object ArrayBuffer]",Ns="[object DataView]",ks="[object Float32Array]",Us="[object Float64Array]",Vs="[object Int8Array]",Bs="[object Int16Array]",zs="[object Int32Array]",Gs="[object Uint8Array]",Hs="[object Uint8ClampedArray]",Ws="[object Uint16Array]",Ks="[object Uint32Array]",S={};S[yr]=S[Es]=S[Ds]=S[Ns]=S[ws]=S[As]=S[ks]=S[Us]=S[Vs]=S[Bs]=S[zs]=S[Os]=S[Is]=S[br]=S[Ms]=S[Fs]=S[Rs]=S[Ps]=S[Gs]=S[Hs]=S[Ws]=S[Ks]=!0;S[$s]=S[mr]=S[Ls]=!1;function ht(t,e,r,n,i,o){var s,h=e&js,y=e&xs,v=e&_s;if(r&&(s=i?r(t,n,i,o):r(t)),s!==void 0)return s;if(!ut(t))return t;var _=lt(t);if(_){if(s=No(t),!h)return dr(t,s)}else{var E=qt(t),p=E==mr||E==Cs;if(or(t))return go(t,h);if(E==br||E==yr||p&&!i){if(s=y||p?{}:ps(t),!h)return y?xo(t,po(s,t)):To(t,so(s,t))}else{if(!S[E])return i?t:{};s=ls(t,E,h)}}o||(o=new et);var C=o.get(t);if(C)return C;o.set(t,s),Ss(t)?t.forEach(function(O){s.add(ht(O,e,r,O,t,o))}):ys(t)&&t.forEach(function(O,w){s.set(w,ht(O,e,r,w,t,o))});var R=v?y?Eo:_o:y?Wt:Ht,L=_?void 0:R(t);return ii(L||t,function(O,w){L&&(w=O,O=t[w]),nr(s,w,ht(O,e,r,w,t,o))}),s}var qs=4;function Ve(t){return ht(t,qs)}function Tr(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var Ys="[object Symbol]";function Zt(t){return typeof t=="symbol"||Y(t)&&q(t)==Ys}var Zs="Expected a function";function Xt(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Zs);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Xt.Cache||B),r}Xt.Cache=B;var Xs=500;function Js(t){var e=Xt(t,function(n){return r.size===Xs&&r.clear(),n}),r=e.cache;return e}var Qs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tc=/\\(\\)?/g,ec=Js(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Qs,function(r,n,i,o){e.push(i?o.replace(tc,"$1"):n||r)}),e});const rc=ec;var nc=1/0;function ac(t){if(typeof t=="string"||Zt(t))return t;var e=t+"";return e=="0"&&1/t==-nc?"-0":e}var ic=1/0,Be=V?V.prototype:void 0,ze=Be?Be.toString:void 0;function Sr(t){if(typeof t=="string")return t;if(lt(t))return Tr(t,Sr)+"";if(Zt(t))return ze?ze.call(t):"";var e=t+"";return e=="0"&&1/t==-ic?"-0":e}function oc(t){return t==null?"":Sr(t)}function jr(t){return lt(t)?Tr(t,ac):Zt(t)?[t]:dr(rc(oc(t)))}function $(){return $=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},$.apply(this,arguments)}function xr(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}var bt=f.createContext(void 0);bt.displayName="FormikContext";var sc=bt.Provider;bt.Consumer;function cc(){var t=f.useContext(bt);return t||ua(!1),t}var F=function(e){return typeof e=="function"},Tt=function(e){return e!==null&&typeof e=="object"},uc=function(e){return String(Math.floor(Number(e)))===e},Mt=function(e){return Object.prototype.toString.call(e)==="[object String]"},lc=function(e){return f.Children.count(e)===0},Ft=function(e){return Tt(e)&&F(e.then)};function I(t,e,r,n){n===void 0&&(n=0);for(var i=jr(e);t&&n<i.length;)t=t[i[n++]];return n!==i.length&&!t||t===void 0?r:t}function W(t,e,r){for(var n=Ve(t),i=n,o=0,s=jr(e);o<s.length-1;o++){var h=s[o],y=I(t,s.slice(0,o+1));if(y&&(Tt(y)||Array.isArray(y)))i=i[h]=Ve(y);else{var v=s[o+1];i=i[h]=uc(v)&&Number(v)>=0?[]:{}}}return(o===0?t:i)[s[o]]===r?t:(r===void 0?delete i[s[o]]:i[s[o]]=r,o===0&&r===void 0&&delete n[s[o]],n)}function _r(t,e,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(t);i<o.length;i++){var s=o[i],h=t[s];Tt(h)?r.get(h)||(r.set(h,!0),n[s]=Array.isArray(h)?[]:{},_r(h,e,r,n[s])):n[s]=e}return n}function fc(t,e){switch(e.type){case"SET_VALUES":return $({},t,{values:e.payload});case"SET_TOUCHED":return $({},t,{touched:e.payload});case"SET_ERRORS":return G(t.errors,e.payload)?t:$({},t,{errors:e.payload});case"SET_STATUS":return $({},t,{status:e.payload});case"SET_ISSUBMITTING":return $({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return $({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return $({},t,{values:W(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return $({},t,{touched:W(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return $({},t,{errors:W(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return $({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return $({},t,{touched:_r(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return $({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $({},t,{isSubmitting:!1});default:return t}}var z={},pt={};function dc(t){var e=t.validateOnChange,r=e===void 0?!0:e,n=t.validateOnBlur,i=n===void 0?!0:n,o=t.validateOnMount,s=o===void 0?!1:o,h=t.isInitialValid,y=t.enableReinitialize,v=y===void 0?!1:y,_=t.onSubmit,E=xr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=$({validateOnChange:r,validateOnBlur:i,validateOnMount:s,onSubmit:_},E),C=f.useRef(p.initialValues),R=f.useRef(p.initialErrors||z),L=f.useRef(p.initialTouched||pt),O=f.useRef(p.initialStatus),w=f.useRef(!1),U=f.useRef({});f.useEffect(function(){return w.current=!0,function(){w.current=!1}},[]);var wr=f.useState(0),Ar=wr[1],ft=f.useRef({values:p.initialValues,errors:p.initialErrors||z,touched:p.initialTouched||pt,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=ft.current,b=f.useCallback(function(a){var c=ft.current;ft.current=fc(c,a),c!==ft.current&&Ar(function(l){return l+1})},[]),Jt=f.useCallback(function(a,c){return new Promise(function(l,d){var g=p.validate(a,c);g==null?l(z):Ft(g)?g.then(function(m){l(m||z)},function(m){d(m)}):l(g)})},[p.validate]),St=f.useCallback(function(a,c){var l=p.validationSchema,d=F(l)?l(c):l,g=c&&d.validateAt?d.validateAt(c,a):gc(a,d);return new Promise(function(m,A){g.then(function(){m(z)},function(N){N.name==="ValidationError"?m(hc(N)):A(N)})})},[p.validationSchema]),Qt=f.useCallback(function(a,c){return new Promise(function(l){return l(U.current[a].validate(c))})},[]),te=f.useCallback(function(a){var c=Object.keys(U.current).filter(function(d){return F(U.current[d].validate)}),l=c.length>0?c.map(function(d){return Qt(d,I(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(g,m,A){return m==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||m&&(g=W(g,c[A],m)),g},{})})},[Qt]),$r=f.useCallback(function(a){return Promise.all([te(a),p.validationSchema?St(a):{},p.validate?Jt(a):{}]).then(function(c){var l=c[0],d=c[1],g=c[2],m=Rt.all([l,d,g],{arrayMerge:vc});return m})},[p.validate,p.validationSchema,te,Jt,St]),P=M(function(a){return a===void 0&&(a=T.values),b({type:"SET_ISVALIDATING",payload:!0}),$r(a).then(function(c){return w.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:c})),c})});f.useEffect(function(){s&&w.current===!0&&G(C.current,p.initialValues)&&P(C.current)},[s,P]);var rt=f.useCallback(function(a){var c=a&&a.values?a.values:C.current,l=a&&a.errors?a.errors:R.current?R.current:p.initialErrors||{},d=a&&a.touched?a.touched:L.current?L.current:p.initialTouched||{},g=a&&a.status?a.status:O.current?O.current:p.initialStatus;C.current=c,R.current=l,L.current=d,O.current=g;var m=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(p.onReset){var A=p.onReset(T.values,le);Ft(A)?A.then(m):m()}else m()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]);f.useEffect(function(){w.current===!0&&!G(C.current,p.initialValues)&&v&&(C.current=p.initialValues,rt(),s&&P(C.current))},[v,p.initialValues,rt,s,P]),f.useEffect(function(){v&&w.current===!0&&!G(R.current,p.initialErrors)&&(R.current=p.initialErrors||z,b({type:"SET_ERRORS",payload:p.initialErrors||z}))},[v,p.initialErrors]),f.useEffect(function(){v&&w.current===!0&&!G(L.current,p.initialTouched)&&(L.current=p.initialTouched||pt,b({type:"SET_TOUCHED",payload:p.initialTouched||pt}))},[v,p.initialTouched]),f.useEffect(function(){v&&w.current===!0&&!G(O.current,p.initialStatus)&&(O.current=p.initialStatus,b({type:"SET_STATUS",payload:p.initialStatus}))},[v,p.initialStatus,p.initialTouched]);var ee=M(function(a){if(U.current[a]&&F(U.current[a].validate)){var c=I(T.values,a),l=U.current[a].validate(c);return Ft(l)?(b({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){b({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(p.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),St(T.values,a).then(function(d){return d}).then(function(d){b({type:"SET_FIELD_ERROR",payload:{field:a,value:I(d,a)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Cr=f.useCallback(function(a,c){var l=c.validate;U.current[a]={validate:l}},[]),Or=f.useCallback(function(a){delete U.current[a]},[]),re=M(function(a,c){b({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?P(T.values):Promise.resolve()}),ne=f.useCallback(function(a){b({type:"SET_ERRORS",payload:a})},[]),ae=M(function(a,c){var l=F(a)?a(T.values):a;b({type:"SET_VALUES",payload:l});var d=c===void 0?r:c;return d?P(l):Promise.resolve()}),dt=f.useCallback(function(a,c){b({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=M(function(a,c,l){b({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?r:l;return d?P(W(T.values,a,c)):Promise.resolve()}),ie=f.useCallback(function(a,c){var l=c,d=a,g;if(!Mt(a)){a.persist&&a.persist();var m=a.target?a.target:a.currentTarget,A=m.type,N=m.name,wt=m.id,At=m.value,kr=m.checked,xc=m.outerHTML,fe=m.options,Ur=m.multiple;l=c||N||wt,d=/number|range/.test(A)?(g=parseFloat(At),isNaN(g)?"":g):/checkbox/.test(A)?mc(I(T.values,l),kr,At):fe&&Ur?yc(fe):At}l&&J(l,d)},[J,T.values]),jt=M(function(a){if(Mt(a))return function(c){return ie(c,a)};ie(a)}),Q=M(function(a,c,l){c===void 0&&(c=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?P(T.values):Promise.resolve()}),oe=f.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,g=l.id,m=l.outerHTML,A=c||d||g;Q(A,!0)},[Q]),xt=M(function(a){if(Mt(a))return function(c){return oe(c,a)};oe(a)}),se=f.useCallback(function(a){F(a)?b({type:"SET_FORMIK_STATE",payload:a}):b({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),ce=f.useCallback(function(a){b({type:"SET_STATUS",payload:a})},[]),ue=f.useCallback(function(a){b({type:"SET_ISSUBMITTING",payload:a})},[]),_t=M(function(){return b({type:"SUBMIT_ATTEMPT"}),P().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=Mr(),d===void 0)return}catch(g){throw g}return Promise.resolve(d).then(function(g){return w.current&&b({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(w.current)throw b({type:"SUBMIT_FAILURE"}),g})}else if(w.current&&(b({type:"SUBMIT_FAILURE"}),c))throw a})}),Ir=M(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),_t().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),le={resetForm:rt,validateForm:P,validateField:ee,setErrors:ne,setFieldError:dt,setFieldTouched:Q,setFieldValue:J,setStatus:ce,setSubmitting:ue,setTouched:re,setValues:ae,setFormikState:se,submitForm:_t},Mr=M(function(){return _(T.values,le)}),Fr=M(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),rt()}),Rr=f.useCallback(function(a){return{value:I(T.values,a),error:I(T.errors,a),touched:!!I(T.touched,a),initialValue:I(C.current,a),initialTouched:!!I(L.current,a),initialError:I(R.current,a)}},[T.errors,T.touched,T.values]),Pr=f.useCallback(function(a){return{setValue:function(l,d){return J(a,l,d)},setTouched:function(l,d){return Q(a,l,d)},setError:function(l){return dt(a,l)}}},[J,Q,dt]),Lr=f.useCallback(function(a){var c=Tt(a),l=c?a.name:a,d=I(T.values,l),g={name:l,value:d,onChange:jt,onBlur:xt};if(c){var m=a.type,A=a.value,N=a.as,wt=a.multiple;m==="checkbox"?A===void 0?g.checked=!!d:(g.checked=!!(Array.isArray(d)&&~d.indexOf(A)),g.value=A):m==="radio"?(g.checked=d===A,g.value=A):N==="select"&&wt&&(g.value=g.value||[],g.multiple=!0)}return g},[xt,jt,T.values]),Et=f.useMemo(function(){return!G(C.current,T.values)},[C.current,T.values]),Dr=f.useMemo(function(){return typeof h<"u"?Et?T.errors&&Object.keys(T.errors).length===0:h!==!1&&F(h)?h(p):h:T.errors&&Object.keys(T.errors).length===0},[h,Et,T.errors,p]),Nr=$({},T,{initialValues:C.current,initialErrors:R.current,initialTouched:L.current,initialStatus:O.current,handleBlur:xt,handleChange:jt,handleReset:Fr,handleSubmit:Ir,resetForm:rt,setErrors:ne,setFormikState:se,setFieldTouched:Q,setFieldValue:J,setFieldError:dt,setStatus:ce,setSubmitting:ue,setTouched:re,setValues:ae,submitForm:_t,validateForm:P,validateField:ee,isValid:Dr,dirty:Et,unregisterField:Or,registerField:Cr,getFieldProps:Lr,getFieldMeta:Rr,getFieldHelpers:Pr,validateOnBlur:i,validateOnChange:r,validateOnMount:s});return Nr}function pc(t){var e=dc(t),r=t.component,n=t.children,i=t.render,o=t.innerRef;return f.useImperativeHandle(o,function(){return e}),f.createElement(sc,{value:e},r?f.createElement(r,e):i?i(e):n?F(n)?n(e):lc(n)?null:f.Children.only(n):null)}function hc(t){var e={};if(t.inner){if(t.inner.length===0)return W(e,t.path,t.message);for(var i=t.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var o;if(r){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;I(e,s.path)||(e=W(e,s.path,s.message))}}return e}function gc(t,e,r,n){r===void 0&&(r=!1);var i=Ut(t);return e[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ut(t){var e=Array.isArray(t)?[]:{};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=String(r);Array.isArray(t[n])===!0?e[n]=t[n].map(function(i){return Array.isArray(i)===!0||ye(i)?Ut(i):i!==""?i:void 0}):ye(t[n])?e[n]=Ut(t[n]):e[n]=t[n]!==""?t[n]:void 0}return e}function vc(t,e,r){var n=t.slice();return e.forEach(function(o,s){if(typeof n[s]>"u"){var h=r.clone!==!1,y=h&&r.isMergeableObject(o);n[s]=y?Rt(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[s]=Rt(t[s],o,r):t.indexOf(o)===-1&&n.push(o)}),n}function yc(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function mc(t,e,r){if(typeof t=="boolean")return!!e;var n=[],i=!1,o=-1;if(Array.isArray(t))n=t,o=t.indexOf(r),i=o>=0;else if(!r||r=="true"||r=="false")return!!e;return e&&r&&!i?n.concat(r):i?n.slice(0,o).concat(n.slice(o+1)):n}var bc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function M(t){var e=f.useRef(t);return bc(function(){e.current=t}),f.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}var Er=f.forwardRef(function(t,e){var r=t.action,n=xr(t,["action"]),i=r??"#",o=cc(),s=o.handleReset,h=o.handleSubmit;return f.createElement("form",$({onSubmit:h,ref:e,onReset:s,action:i},n))});Er.displayName="Form";function Tc(t){return ct({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(t)}function Sc(t){return ct({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(t)}const jc=()=>{const t=qe(),e=Gr(),{pathname:r}=Ge(),[n,i]=Hr(),o=n.get("q"),[s,h]=f.useState(o||"");function y(v,{setSubmitting:_}){const E=v.search.trim();h(E),E===""&&Kr.error("Enter the name of the dish",qr),e("search"),_(!1)}return f.useEffect(()=>{r==="/search"&&(t(Wr()),i({q:s}),t(We(o)))},[t,r,o,i,s]),u.jsx(en,{children:u.jsx(pc,{initialValues:{search:s},onSubmit:y,children:({values:v,handleChange:_,handleSubmit:E,resetForm:p,errors:C,isSubmitting:R})=>u.jsxs(Er,{onSubmit:E,children:[u.jsx(rn,{error:C.search,type:"text",name:"search",placeholder:"Search...",onChange:_,value:v.search}),u.jsxs(nn,{children:[v.search!==""&&u.jsx(an,{type:"button",onClick:()=>{p({values:{search:""}})},className:"delete",children:u.jsx(Tc,{})}),u.jsx(on,{className:"search",type:"submit",disabled:R,children:u.jsx(Sc,{})})]})]})})})},Ic=()=>{const t=Yr(Jr),e=qe(),[r,n]=f.useState(!1),i=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],o=()=>{n(!r),r?document.body.style.overflow="auto":document.body.style.overflow="hidden"};return u.jsxs(u.Fragment,{children:[u.jsx(ln,{children:u.jsx(He,{children:u.jsxs(fn,{children:[u.jsxs(dn,{to:"/",onClick:()=>{t&&e(We(""))},children:[u.jsx(pn,{children:u.jsx(Ke,{})}),"Kindzmarauli"]}),u.jsx(Ct,{type:"button",className:"open_mobil_menu",onClick:o,children:u.jsx(cn,{})}),u.jsxs(hn,{"data-visibility":r.toString(),children:[u.jsxs(gn,{children:[u.jsx(Ct,{className:"close_mobil_menu",type:"button",onClick:o,children:u.jsx(un,{})}),u.jsxs(vn,{children:[u.jsx(de,{children:u.jsx(Ye,{onClick:o})}),i.map(({name:s,to:h})=>u.jsx(de,{children:u.jsx(yn,{activeclassname:"active",to:h,onClick:o,children:s})},s))]})]}),u.jsxs(mn,{children:[u.jsx(jc,{}),u.jsx(Ct,{type:"button",className:"user_button",children:u.jsx(sn,{})}),u.jsx(bn,{to:"basket",preventScrollReset:!0,className:({isActive:s})=>s?"active":"",children:u.jsx(Qr,{})})]})]})]})})}),u.jsx("main",{style:{flexGrow:1},children:u.jsx(f.Suspense,{fallback:u.jsx("p",{children:"Loading..."}),children:u.jsx(Zr,{})})}),u.jsx(In,{})]})};export{Ic as default};
