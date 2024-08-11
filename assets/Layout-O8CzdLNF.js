import{G as M,g as r,h as st,i as B,u as k,l as at,b as l,k as ct,j as t,C as G,m as F,n as lt,a as dt,r as pt,c as ft,d as ut,o as ht,p as xt,L as mt,O as gt}from"./index-bcBMVgA9.js";import{C as vt}from"./index.esm-DKxMFapW.js";import{P as z}from"./index-snWXqJox.js";import{G as wt,a as bt}from"./index.esm-FnI5sxXk.js";import{s as yt}from"./specifics_dish-wj0nZKOz.js";import{F as jt}from"./FilterForm-TlR-mBOs.js";import{R as kt}from"./rolesUser-HP9JZ5bM.js";import{_ as A,a as y}from"./defaultTheme-ZRyStqT3.js";import{u as Et,a as Tt}from"./TransitionGroupContext-RMZt82C4.js";import{o as Y,T as Ct,d as St,r as zt,g as W}from"./utils-vwdtkp0m.js";import"./index.esm-c7reRWkM.js";import"./index.esm-V3ZhsftV.js";import"./Search.styled-N499SJ2I.js";function Lt(n){return M({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(n)}function Rt(n){return M({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(n)}const _t=r.header`
  position: sticky;
  top: 0;
  padding-bottom: 44px;
  padding-top: 50px;
  z-index: 20;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.6195728291316527) 48%
  );
`,$t=r.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,Nt=r(st)`
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
`,Wt=r.span``,Ot=r.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 420px;

  @media screen and (max-width: 767px) {
    position: fixed;
    visibility: ${({["data-visibility"]:n})=>n==="true"?"visible":"hidden"};
    opacity: ${({["data-visibility"]:n})=>n==="true"?"1":"0"};
    background-color: rgb(14 17 21);
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    padding: 50px;
    transition: visibility 350ms ease-in-out, opacity 350ms ease-in-out;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    align-content: center;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1400px) {
    max-width: 100%;
    justify-content: space-between;
  }
`,Dt=r.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`,C=r.button`
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
    top: 20px;
    right: 30px;
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
`,Pt=r.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,O=r.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,D=r(B)`
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
`,Ht=r.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,It=r.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,Mt=r.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Bt=r.p`
  position: absolute;
  top: -13px;
  right: -10px;
  color: #000;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  background-color: #9d4805;
  padding: 2px 7px;
  border-radius: 4px;
  border: 1px solid;
`,Gt=r.div`
  position: relative;
`,Ft=r.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`,At=r.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
  opacity: ${({["data-show"]:n})=>n==="true"?"1":"0"};
  transition: opacity var(--transition);

  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`,Yt=r.li`
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
`,Vt=r(B)`
  display: block;
  color: var(--main-color);
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,{value:S}=yt.HOTDISHES,P=[{name:"Main Dishes",to:`hot_dishes#${S.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${S.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${S.KHINKALI}`}],V=n=>{const{onClick:s}=n,a=k(at),[e,o]=l.useState(!1),[h,u]=l.useState("Hoot Dishes"),{pathname:p,hash:m}=ct(),d=l.useRef(null),f=l.useRef();l.useEffect(()=>{P.every(({to:w})=>w!==p)&&u("Hot Dishes")},[p]);const v=c=>{window.location.hash===c&&!a&&(window.location.hash="#",d.current=setTimeout(()=>{window.location.hash=c},300))};return l.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]),t.jsxs(Gt,{ref:f,children:[t.jsxs(Ft,{onClick:()=>{o(!e)},children:[h,e?t.jsx(wt,{}):t.jsx(bt,{})]}),t.jsx(At,{"data-show":e.toString(),className:e?"":"hidden",onClick:c=>{c.target!==c.currentTarget&&(u(c.target.textContent),o(!1),s())},children:P.map(({name:c,to:w})=>t.jsx(Yt,{onClick:()=>v(m),children:t.jsx(Vt,{to:w,children:c})},c))})]})};V.propTypes={onClick:z.func.isRequired};const Kt=r.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,Xt=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Ut=r.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;

  & svg {
    width: 24px;
    height: 24px;
  }
`,H=r.a`
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
`,qt=r.div`
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
`,Jt=r.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,Qt=r.div``,I=r.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,Zt=()=>t.jsx(Kt,{children:t.jsxs(G,{children:[t.jsxs(Xt,{children:[t.jsxs(Ut,{children:[t.jsx(F,{})," Kindzmarauli"]}),t.jsxs("div",{children:[t.jsx(H,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),t.jsx(H,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),t.jsxs(qt,{children:[t.jsx(Jt,{children:"© 2023, official site"}),t.jsxs(Qt,{children:[t.jsx(I,{href:"#",children:"Privacy Policy and Offer"}),t.jsx(I,{href:"#",children:"Terms of use"})]})]})]})}),te=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ee(n,s,a){const e=s.getBoundingClientRect(),o=a&&a.getBoundingClientRect(),h=Y(s);let u;if(s.fakeTransform)u=s.fakeTransform;else{const d=h.getComputedStyle(s);u=d.getPropertyValue("-webkit-transform")||d.getPropertyValue("transform")}let p=0,m=0;if(u&&u!=="none"&&typeof u=="string"){const d=u.split("(")[1].split(")")[0].split(",");p=parseInt(d[4],10),m=parseInt(d[5],10)}return n==="left"?o?`translateX(${o.right+p-e.left}px)`:`translateX(${h.innerWidth+p-e.left}px)`:n==="right"?o?`translateX(-${e.right-o.left-p}px)`:`translateX(-${e.left+e.width-p}px)`:n==="up"?o?`translateY(${o.bottom+m-e.top}px)`:`translateY(${h.innerHeight+m-e.top}px)`:o?`translateY(-${e.top-o.top+e.height-m}px)`:`translateY(-${e.top+e.height-m}px)`}function ne(n){return typeof n=="function"?n():n}function j(n,s,a){const e=ne(a),o=ee(n,s,e);o&&(s.style.webkitTransform=o,s.style.transform=o)}const ie=l.forwardRef(function(s,a){const e=Et(),o={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},h={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:u,appear:p=!0,children:m,container:d,direction:f="down",easing:v=o,in:c,onEnter:w,onEntered:X,onEntering:L,onExit:R,onExited:_,onExiting:U,style:E,timeout:T=h,TransitionComponent:q=Ct}=s,J=A(s,te),g=l.useRef(null),Q=Tt(m.ref,g,a),b=i=>x=>{i&&(x===void 0?i(g.current):i(g.current,x))},Z=b((i,x)=>{j(f,i,d),zt(i),w&&w(i,x)}),tt=b((i,x)=>{const N=W({timeout:T,style:E,easing:v},{mode:"enter"});i.style.webkitTransition=e.transitions.create("-webkit-transform",y({},N)),i.style.transition=e.transitions.create("transform",y({},N)),i.style.webkitTransform="none",i.style.transform="none",L&&L(i,x)}),et=b(X),nt=b(U),it=b(i=>{const x=W({timeout:T,style:E,easing:v},{mode:"exit"});i.style.webkitTransition=e.transitions.create("-webkit-transform",x),i.style.transition=e.transitions.create("transform",x),j(f,i,d),R&&R(i)}),ot=b(i=>{i.style.webkitTransition="",i.style.transition="",_&&_(i)}),rt=i=>{u&&u(g.current,i)},$=l.useCallback(()=>{g.current&&j(f,g.current,d)},[f,d]);return l.useEffect(()=>{if(c||f==="down"||f==="right")return;const i=St(()=>{g.current&&j(f,g.current,d)}),x=Y(g.current);return x.addEventListener("resize",i),()=>{i.clear(),x.removeEventListener("resize",i)}},[f,c,d]),l.useEffect(()=>{c||$()},[c,$]),t.jsx(q,y({nodeRef:g,onEnter:Z,onEntered:et,onEntering:tt,onExit:it,onExited:ot,onExiting:nt,addEndListener:rt,appear:p,in:c,timeout:T},J,{children:(i,x)=>l.cloneElement(m,y({ref:Q,style:y({visibility:i==="exited"&&!c?"hidden":void 0},E,m.props.style)},x))}))}),oe=ie,re=["getTrigger","target"];function se(n,s){const{disableHysteresis:a=!1,threshold:e=100,target:o}=s,h=n.current;return o&&(n.current=o.pageYOffset!==void 0?o.pageYOffset:o.scrollTop),!a&&h!==void 0&&n.current<h?!1:n.current>e}const ae=typeof window<"u"?window:null;function ce(n={}){const{getTrigger:s=se,target:a=ae}=n,e=A(n,re),o=l.useRef(),[h,u]=l.useState(()=>s(o,e));return l.useEffect(()=>{const p=()=>{u(s(o,y({target:a},e)))};return p(),a.addEventListener("scroll",p,{passive:!0}),()=>{a.removeEventListener("scroll",p,{passive:!0})}},[a,s,JSON.stringify(e)]),h}function K(n){const{children:s,window:a}=n,e=ce({target:a?a():void 0});return t.jsx(oe,{appear:!1,direction:"down",in:!e,children:s})}K.propTypes={children:z.element.isRequired,window:z.func};const je=()=>{const[n,s]=l.useState(!1),a=k(lt),e=k(dt),o=k(pt),h=ft(),u=ut(),p=a==null?void 0:a.reduce((v,c)=>c.count+v,0),m=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],d=()=>{s(!0)},f=()=>{s(!1)};return l.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]),l.useEffect(()=>{e&&o===kt.USER&&h(ht())},[e,h,o]),t.jsxs(t.Fragment,{children:[t.jsx(K,{children:t.jsx(_t,{children:t.jsx(G,{children:t.jsxs($t,{children:[t.jsxs(Nt,{to:"/",children:[t.jsx(Wt,{children:t.jsx(F,{})}),"Kindzmarauli"]}),t.jsx(C,{type:"button",className:"open_mobil_menu",onClick:d,children:t.jsx(vt,{})}),t.jsxs(Ot,{"data-visibility":n.toString(),children:[t.jsxs(Dt,{children:[t.jsx(C,{className:"close_mobil_menu",type:"button",onClick:f,children:t.jsx(Rt,{})}),t.jsxs(Pt,{children:[t.jsx(O,{children:t.jsx(V,{onClick:f})}),m.map(({name:v,to:c})=>t.jsx(O,{children:t.jsx(D,{activeclassname:"active",to:c,onClick:f,children:v})},v))]})]}),t.jsxs(Ht,{children:[t.jsx(jt,{onClick:f}),t.jsxs(It,{children:[t.jsx(C,{type:"button",className:"user_button",onClick:()=>{u("user_account"),f()},children:t.jsx(Lt,{})}),t.jsxs(Mt,{children:[t.jsx(D,{to:"basket",onClick:f,children:t.jsx(xt,{})}),p>0&&t.jsx(Bt,{children:p})]})]})]})]})]})})})}),t.jsx("main",{style:{flexGrow:1},children:t.jsx(l.Suspense,{fallback:t.jsx(mt,{}),children:t.jsx(gt,{})})}),t.jsx(Zt,{})]})};export{je as default};
