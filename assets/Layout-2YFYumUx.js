import{G as v,s as t,g as $,h as L,u as g,l as G,b as s,i as _,j as e,C as N,k as D,c as F,d as M,m as I,n as A,o as O,a as P,r as q,p as H,q as K,L as V,O as U}from"./index-iALe6Y_O.js";import{P as W}from"./index-YhtbvcJS.js";import{G as Z,a as J}from"./index.esm-KB8RjZxK.js";import{s as j}from"./specifics_dish-pOdDpUjH.js";import{c as Q,a as X,F as Y,b as ee}from"./index.esm-yHs5p-hy.js";import{A as te}from"./index.esm-8Tcv8rJ4.js";import{F as ie,W as ne,I as oe,E as se,a as ae,D as re,B as ce}from"./FilterForm.styled-VJQx8MQU.js";import{R as le}from"./rolesUser-HP9JZ5bM.js";function de(i){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function pe(i){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function he(i){return v({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const xe=t.header`
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
`,me=t.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,ue=t($)`
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
`,fe=t.span``,ge=t.div`
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
`,ve=t.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`,b=t.button`
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
`,je=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,y=t.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,k=t(L)`
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
`,be=t.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,we=t.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,ye=t.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,ke=t.p`
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
`,Ce=t.div`
  position: relative;
`,Se=t.p`
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
`,ze=t.ul`
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
`,Le=t.li`
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
`,_e=t(L)`
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
`,C=[{name:"Main Dishes",to:`hot_dishes#${j.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${j.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${j.KHINKALI}`}],B=i=>{const{onClick:d}=i,m=g(G),[a,p]=s.useState(!1),[h,c]=s.useState("Hoot Dishes"),{pathname:l,hash:u}=_(),x=s.useRef(null),o=s.useRef();s.useEffect(()=>{C.every(({to:f})=>f!==l)&&c("Hot Dishes")},[l]);const r=n=>{window.location.hash===n&&!m&&(window.location.hash="#",x.current=setTimeout(()=>{window.location.hash=n},300))};return s.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]),e.jsxs(Ce,{ref:o,children:[e.jsxs(Se,{onClick:()=>{p(!a)},children:[h,a?e.jsx(Z,{}):e.jsx(J,{})]}),e.jsx(ze,{"data-show":a.toString(),className:a?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(c(n.target.textContent),p(!1),d())},children:C.map(({name:n,to:f})=>e.jsx(Le,{onClick:()=>r(u),children:e.jsx(_e,{to:f,children:n})},n))})]})};B.propTypes={onClick:W.func.isRequired};const Ne=t.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,De=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Fe=t.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;

  & svg {
    width: 24px;
    height: 24px;
  }
`,S=t.a`
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
`,Me=t.div`
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
`,We=t.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,Be=t.div``,z=t.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,Ee=()=>e.jsx(Ne,{children:e.jsxs(N,{children:[e.jsxs(De,{children:[e.jsxs(Fe,{children:[e.jsx(D,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(S,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(S,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(Me,{children:[e.jsx(We,{children:"© 2023, official site"}),e.jsxs(Be,{children:[e.jsx(z,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(z,{href:"#",children:"Terms of use"})]})]})]})});function Re(i){return v({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const Te=Q().shape({search:X().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),E=({onClick:i})=>{const d=F(),m=M(),{pathname:a}=_(),[p,h]=I(),c=p.get("q"),[l,u]=s.useState(c||"");function x(o,{setSubmitting:r}){const n=o.search.trim();u(n),m("search"),r(!1),i()}return s.useEffect(()=>{a==="/search"&&(h({q:l}),c&&d(A(c)))},[d,a,c,h,l]),e.jsx(ie,{children:e.jsx(Y,{initialValues:{search:l},onSubmit:x,validationSchema:Te,children:({values:o,handleChange:r,handleSubmit:n,resetForm:f,errors:w,touched:R,isSubmitting:T})=>e.jsx(ee,{onSubmit:n,children:e.jsxs(ne,{children:[e.jsx(oe,{type:"text",name:"search",placeholder:"Search...",onChange:r,value:o.search}),w.search&&R.search&&e.jsx(se,{children:w.search}),e.jsxs(ae,{children:[o.search!==""&&e.jsx(re,{type:"button",onClick:()=>{f({values:{search:""}})},className:"delete",children:e.jsx(te,{})}),e.jsx(ce,{className:"search",type:"submit",disabled:T,children:e.jsx(Re,{})})]})]})})})})};E.propTypes={onClick:W.func.isRequired};const Ke=()=>{const[i,d]=s.useState(!1),m=g(O),a=g(P),p=g(q),h=F(),c=M(),l=m.reduce((r,n)=>n.count+r,0),u=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],x=()=>{d(!0)},o=()=>{d(!1)};return s.useEffect(()=>(document.body.style.overflow=i?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[i]),s.useEffect(()=>{a&&p===le.USER&&h(H())},[a,h,p]),e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:e.jsx(N,{children:e.jsxs(me,{children:[e.jsxs(ue,{to:"/",children:[e.jsx(fe,{children:e.jsx(D,{})}),"Kindzmarauli"]}),e.jsx(b,{type:"button",className:"open_mobil_menu",onClick:x,children:e.jsx(pe,{})}),e.jsxs(ge,{"data-visibility":i.toString(),children:[e.jsxs(ve,{children:[e.jsx(b,{className:"close_mobil_menu",type:"button",onClick:o,children:e.jsx(he,{})}),e.jsxs(je,{children:[e.jsx(y,{children:e.jsx(B,{onClick:o})}),u.map(({name:r,to:n})=>e.jsx(y,{children:e.jsx(k,{activeclassname:"active",to:n,onClick:o,children:r})},r))]})]}),e.jsxs(be,{children:[e.jsx(E,{onClick:o}),e.jsxs(we,{children:[e.jsx(b,{type:"button",className:"user_button",onClick:()=>{c("user_account"),o()},children:e.jsx(de,{})}),e.jsxs(ye,{children:[e.jsx(k,{to:"basket",onClick:o,children:e.jsx(K,{})}),l>0&&e.jsx(ke,{children:l})]})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(s.Suspense,{fallback:e.jsx(V,{}),children:e.jsx(U,{})})}),e.jsx(Ee,{})]})};export{Ke as default};
