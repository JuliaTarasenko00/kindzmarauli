import{G as z,g as e,h as D,i as S,u as m,l as R,b as n,k as M,j as t,C as L,m as _,n as T,a as E,r as G,c as W,d as I,o as O,p as B,L as H,O as A}from"./index-WwQPHHvd.js";import{C as F}from"./index.esm-EBfumNif.js";import{P as $}from"./index-ZpUMourp.js";import{G as P,a as K}from"./index.esm-9_ChLFDP.js";import{s as U}from"./specifics_dish-9ytSTQnN.js";import{F as q}from"./FilterForm-s6NT7nTj.js";import{R as V}from"./rolesUser-HP9JZ5bM.js";import"./index.esm-Wx-wnola.js";import"./index.esm-CWyWeYVD.js";import"./Search.styled-EkI3nG5g.js";function J(i){return z({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function Q(i){return z({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const X=e.header`
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
`,Y=e.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,Z=e(D)`
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
`,tt=e.span``,et=e.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 420px;

  @media screen and (max-width: 767px) {
    position: fixed;
    visibility: ${({["data-visibility"]:i})=>i==="true"?"visible":"hidden"};
    opacity: ${({["data-visibility"]:i})=>i==="true"?"1":"0"};
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
`,it=e.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`,v=e.button`
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
`,ot=e.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,j=e.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,w=e(S)`
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
`,nt=e.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,st=e.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,rt=e.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,at=e.p`
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
`,ct=e.div`
  position: relative;
`,lt=e.p`
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
`,dt=e.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
  opacity: ${({["data-show"]:i})=>i==="true"?"1":"0"};
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
`,pt=e.li`
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
`,ht=e(S)`
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
`,{value:b}=U.HOTDISHES,y=[{name:"Main Dishes",to:`hot_dishes#${b.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${b.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${b.KHINKALI}`}],N=i=>{const{onClick:p}=i,u=m(R),[r,c]=n.useState(!1),[h,x]=n.useState("Hoot Dishes"),{pathname:l,hash:f}=M(),d=n.useRef(null),s=n.useRef();n.useEffect(()=>{y.every(({to:g})=>g!==l)&&x("Hot Dishes")},[l]);const a=o=>{window.location.hash===o&&!u&&(window.location.hash="#",d.current=setTimeout(()=>{window.location.hash=o},300))};return n.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]),t.jsxs(ct,{ref:s,children:[t.jsxs(lt,{onClick:()=>{c(!r)},children:[h,r?t.jsx(P,{}):t.jsx(K,{})]}),t.jsx(dt,{"data-show":r.toString(),className:r?"":"hidden",onClick:o=>{o.target!==o.currentTarget&&(x(o.target.textContent),c(!1),p())},children:y.map(({name:o,to:g})=>t.jsx(pt,{onClick:()=>a(f),children:t.jsx(ht,{to:g,children:o})},o))})]})};N.propTypes={onClick:$.func.isRequired};const xt=e.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,mt=e.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,ut=e.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;

  & svg {
    width: 24px;
    height: 24px;
  }
`,k=e.a`
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
`,ft=e.div`
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
`,gt=e.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,vt=e.div``,C=e.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,bt=()=>t.jsx(xt,{children:t.jsxs(L,{children:[t.jsxs(mt,{children:[t.jsxs(ut,{children:[t.jsx(_,{})," Kindzmarauli"]}),t.jsxs("div",{children:[t.jsx(k,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),t.jsx(k,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),t.jsxs(ft,{children:[t.jsx(gt,{children:"© 2023, official site"}),t.jsxs(vt,{children:[t.jsx(C,{href:"#",children:"Privacy Policy and Offer"}),t.jsx(C,{href:"#",children:"Terms of use"})]})]})]})}),Dt=()=>{const[i,p]=n.useState(!1),u=m(T),r=m(E),c=m(G),h=W(),x=I(),l=u.reduce((a,o)=>o.count+a,0),f=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],d=()=>{p(!0)},s=()=>{p(!1)};return n.useEffect(()=>(document.body.style.overflow=i?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[i]),n.useEffect(()=>{r&&c===V.USER&&h(O())},[r,h,c]),t.jsxs(t.Fragment,{children:[t.jsx(X,{children:t.jsx(L,{children:t.jsxs(Y,{children:[t.jsxs(Z,{to:"/",children:[t.jsx(tt,{children:t.jsx(_,{})}),"Kindzmarauli"]}),t.jsx(v,{type:"button",className:"open_mobil_menu",onClick:d,children:t.jsx(F,{})}),t.jsxs(et,{"data-visibility":i.toString(),children:[t.jsxs(it,{children:[t.jsx(v,{className:"close_mobil_menu",type:"button",onClick:s,children:t.jsx(Q,{})}),t.jsxs(ot,{children:[t.jsx(j,{children:t.jsx(N,{onClick:s})}),f.map(({name:a,to:o})=>t.jsx(j,{children:t.jsx(w,{activeclassname:"active",to:o,onClick:s,children:a})},a))]})]}),t.jsxs(nt,{children:[t.jsx(q,{onClick:s}),t.jsxs(st,{children:[t.jsx(v,{type:"button",className:"user_button",onClick:()=>{x("user_account"),s()},children:t.jsx(J,{})}),t.jsxs(rt,{children:[t.jsx(w,{to:"basket",onClick:s,children:t.jsx(B,{})}),l>0&&t.jsx(at,{children:l})]})]})]})]})]})})}),t.jsx("main",{style:{flexGrow:1},children:t.jsx(n.Suspense,{fallback:t.jsx(H,{}),children:t.jsx(A,{})})}),t.jsx(bt,{})]})};export{Dt as default};
