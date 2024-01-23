import{G as g,s as t,L as G,b as L,u as b,l as I,r as a,c as _,j as e,C as N,d as D,e as F,f as M,g as R,h as A,i as P,a as O,k as H,m as q,n as K,O as V}from"./index--ZyevIiM.js";import{P as W}from"./index-U9gVDPGH.js";import{G as Z,a as U}from"./index.esm-Lgt9WT8w.js";import{s as v}from"./specifics_dish-m9aeWgjf.js";import{c as J,a as Q,F as X,b as Y}from"./index.esm-EHkf48fG.js";import{A as ee}from"./index.esm-sh6WCGfp.js";import{F as te,W as ie,I as ne,E as oe,a as ae,D as se,B as re}from"./FilterForm.styled-PA31-Bu6.js";function ce(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function le(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function de(i){return g({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const pe=t.header`
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
`,he=t.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,xe=t(G)`
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
`,me=t.span``,ue=t.div`
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
`,fe=t.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`,j=t.button`
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
`,ge=t.ul`
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
`,ve=t.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,je=t.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,be=t.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,we=t.p`
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
`,ye=t.div`
  position: relative;
`,ke=t.p`
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
`,Ce=t.ul`
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
`,Se=t.li`
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
`,ze=t(L)`
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
`,C=[{name:"Main Dishes",to:`hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${v.KHINKALI}`}],B=i=>{const{onClick:p}=i,m=b(I),[r,h]=a.useState(!1),[x,c]=a.useState("Hoot Dishes"),{pathname:d,hash:u}=_(),o=a.useRef(null),s=a.useRef();a.useEffect(()=>{C.every(({to:f})=>f!==d)&&c("Hot Dishes")},[d]);const l=n=>{window.location.hash===n&&!m&&(window.location.hash="#",o.current=setTimeout(()=>{window.location.hash=n},300))};return a.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]),e.jsxs(ye,{ref:s,children:[e.jsxs(ke,{onClick:()=>{h(!r)},children:[x,r?e.jsx(Z,{}):e.jsx(U,{})]}),e.jsx(Ce,{"data-show":r.toString(),className:r?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(c(n.target.textContent),h(!1),p())},children:C.map(({name:n,to:f})=>e.jsx(Se,{onClick:()=>l(u),children:e.jsx(ze,{to:f,children:n})},n))})]})};B.propTypes={onClick:W.func.isRequired};const Le=t.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,_e=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Ne=t.p`
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
`,De=t.div`
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
`,Fe=t.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,Me=t.div``,z=t.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,We=()=>e.jsx(Le,{children:e.jsxs(N,{children:[e.jsxs(_e,{children:[e.jsxs(Ne,{children:[e.jsx(D,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(S,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(S,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(De,{children:[e.jsx(Fe,{children:"© 2023, official site"}),e.jsxs(Me,{children:[e.jsx(z,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(z,{href:"#",children:"Terms of use"})]})]})]})});function Be(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const Te=J().shape({search:Q().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),T=({onClick:i})=>{const p=F(),m=M(),{pathname:r}=_(),[h,x]=R(),c=h.get("q"),[d,u]=a.useState(c||"");function o(s,{setSubmitting:l}){const n=s.search.trim();u(n),m("search"),l(!1),i()}return a.useEffect(()=>{r==="/search"&&(x({q:d}),p(A(c)))},[p,r,c,x,d]),e.jsx(te,{children:e.jsx(X,{initialValues:{search:d},onSubmit:o,validationSchema:Te,children:({values:s,handleChange:l,handleSubmit:n,resetForm:f,errors:w,touched:E,isSubmitting:$})=>e.jsx(Y,{onSubmit:n,children:e.jsxs(ie,{children:[e.jsx(ne,{type:"text",name:"search",placeholder:"Search...",onChange:l,value:s.search}),w.search&&E.search&&e.jsx(oe,{children:w.search}),e.jsxs(ae,{children:[s.search!==""&&e.jsx(se,{type:"button",onClick:()=>{f({values:{search:""}})},className:"delete",children:e.jsx(ee,{})}),e.jsx(re,{className:"search",type:"submit",disabled:$,children:e.jsx(Be,{})})]})]})})})})};T.propTypes={onClick:W.func.isRequired};const Oe=()=>{const[i,p]=a.useState(!1),m=b(P),r=b(O),h=F(),x=M(),c=m.reduce((s,l)=>l.count+s,0),d=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],u=()=>{p(!0)},o=()=>{p(!1)};return a.useEffect(()=>(document.body.style.overflow=i?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[i]),a.useEffect(()=>{r&&h(H())},[r,h]),e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsx(N,{children:e.jsxs(he,{children:[e.jsxs(xe,{to:"/",children:[e.jsx(me,{children:e.jsx(D,{})}),"Kindzmarauli"]}),e.jsx(j,{type:"button",className:"open_mobil_menu",onClick:u,children:e.jsx(le,{})}),e.jsxs(ue,{"data-visibility":i.toString(),children:[e.jsxs(fe,{children:[e.jsx(j,{className:"close_mobil_menu",type:"button",onClick:o,children:e.jsx(de,{})}),e.jsxs(ge,{children:[e.jsx(y,{children:e.jsx(B,{onClick:o})}),d.map(({name:s,to:l})=>e.jsx(y,{children:e.jsx(k,{activeclassname:"active",to:l,onClick:o,children:s})},s))]})]}),e.jsxs(ve,{children:[e.jsx(T,{onClick:o}),e.jsxs(je,{children:[e.jsx(j,{type:"button",className:"user_button",onClick:()=>{x("user_account"),o()},children:e.jsx(ce,{})}),e.jsxs(be,{children:[e.jsx(k,{to:"basket",onClick:o,children:e.jsx(q,{})}),c>0&&e.jsx(we,{children:c})]})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(V,{})})}),e.jsx(We,{})]})};export{Oe as default};
