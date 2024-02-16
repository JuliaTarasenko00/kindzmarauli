import{G as j,s as e,g as N,h as L,u as m,l as R,b as o,i as D,j as t,C as _,k as S,m as G,a as T,r as W,c as B,d as E,n as F,o as I,L as O,O as A}from"./index-iVvS-PYO.js";import{P as $}from"./index-oWf2afwM.js";import{G as H,a as P}from"./index.esm-h59IM9Lp.js";import{s as v}from"./specifics_dish-pOdDpUjH.js";import{F as K}from"./FilterForm-3cYj8GJ1.js";import{R as U}from"./rolesUser-HP9JZ5bM.js";import"./index.esm-MbdyQBmQ.js";import"./index.esm-5XpktMu4.js";import"./Search.styled-A2A5agli.js";function Z(i){return j({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function q(i){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function V(i){return j({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const J=e.header`
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
`,Q=e.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,X=e(N)`
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
`,Y=e.span``,tt=e.div`
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
`,et=e.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`,b=e.button`
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
`,it=e.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,w=e.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,y=e(L)`
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
`,ot=e.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,st=e.div`
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
`,rt=e.div`
  position: relative;
`,ct=e.p`
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
`,lt=e.ul`
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
`,dt=e.li`
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
`,pt=e(L)`
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
`,k=[{name:"Main Dishes",to:`hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${v.KHINKALI}`}],M=i=>{const{onClick:p}=i,u=m(R),[a,c]=o.useState(!1),[h,x]=o.useState("Hoot Dishes"),{pathname:l,hash:f}=D(),d=o.useRef(null),s=o.useRef();o.useEffect(()=>{k.every(({to:g})=>g!==l)&&x("Hot Dishes")},[l]);const r=n=>{window.location.hash===n&&!u&&(window.location.hash="#",d.current=setTimeout(()=>{window.location.hash=n},300))};return o.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]),t.jsxs(rt,{ref:s,children:[t.jsxs(ct,{onClick:()=>{c(!a)},children:[h,a?t.jsx(H,{}):t.jsx(P,{})]}),t.jsx(lt,{"data-show":a.toString(),className:a?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(x(n.target.textContent),c(!1),p())},children:k.map(({name:n,to:g})=>t.jsx(dt,{onClick:()=>r(f),children:t.jsx(pt,{to:g,children:n})},n))})]})};M.propTypes={onClick:$.func.isRequired};const ht=e.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,xt=e.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,mt=e.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;

  & svg {
    width: 24px;
    height: 24px;
  }
`,z=e.a`
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
`,ut=e.div`
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
`,ft=e.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,gt=e.div``,C=e.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,vt=()=>t.jsx(ht,{children:t.jsxs(_,{children:[t.jsxs(xt,{children:[t.jsxs(mt,{children:[t.jsx(S,{})," Kindzmarauli"]}),t.jsxs("div",{children:[t.jsx(z,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),t.jsx(z,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),t.jsxs(ut,{children:[t.jsx(ft,{children:"© 2023, official site"}),t.jsxs(gt,{children:[t.jsx(C,{href:"#",children:"Privacy Policy and Offer"}),t.jsx(C,{href:"#",children:"Terms of use"})]})]})]})}),St=()=>{const[i,p]=o.useState(!1),u=m(G),a=m(T),c=m(W),h=B(),x=E(),l=u.reduce((r,n)=>n.count+r,0),f=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],d=()=>{p(!0)},s=()=>{p(!1)};return o.useEffect(()=>(document.body.style.overflow=i?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[i]),o.useEffect(()=>{a&&c===U.USER&&h(F())},[a,h,c]),t.jsxs(t.Fragment,{children:[t.jsx(J,{children:t.jsx(_,{children:t.jsxs(Q,{children:[t.jsxs(X,{to:"/",children:[t.jsx(Y,{children:t.jsx(S,{})}),"Kindzmarauli"]}),t.jsx(b,{type:"button",className:"open_mobil_menu",onClick:d,children:t.jsx(q,{})}),t.jsxs(tt,{"data-visibility":i.toString(),children:[t.jsxs(et,{children:[t.jsx(b,{className:"close_mobil_menu",type:"button",onClick:s,children:t.jsx(V,{})}),t.jsxs(it,{children:[t.jsx(w,{children:t.jsx(M,{onClick:s})}),f.map(({name:r,to:n})=>t.jsx(w,{children:t.jsx(y,{activeclassname:"active",to:n,onClick:s,children:r})},r))]})]}),t.jsxs(nt,{children:[t.jsx(K,{onClick:s}),t.jsxs(ot,{children:[t.jsx(b,{type:"button",className:"user_button",onClick:()=>{x("user_account"),s()},children:t.jsx(Z,{})}),t.jsxs(st,{children:[t.jsx(y,{to:"basket",onClick:s,children:t.jsx(I,{})}),l>0&&t.jsx(at,{children:l})]})]})]})]})]})})}),t.jsx("main",{style:{flexGrow:1},children:t.jsx(o.Suspense,{fallback:t.jsx(O,{}),children:t.jsx(A,{})})}),t.jsx(vt,{})]})};export{St as default};
