import{G as g,s as t,L as $,b as z,u as L,l as G,r as s,c as _,j as e,C as N,d as F,e as I,f as W,g as R,h as P,i as A,k as O,m as H,O as q}from"./index-_4EtVwOv.js";import{P as D}from"./index-Nl5CVoNh.js";import{G as K,a as V}from"./index.esm-nh2eQxPy.js";import{s as v}from"./specifics_dish-m9aeWgjf.js";import{c as Z,a as U,F as J,b as Q}from"./index.esm-zkhdpBuC.js";import{A as X}from"./index.esm-DF-nFyxT.js";import{F as Y,W as ee,I as te,E as ie,a as ne,D as oe,B as ae}from"./FilterForm.styled-aN3BiZRT.js";function se(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function re(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function ce(i){return g({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const le=t.header`
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
`,de=t.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,pe=t($)`
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
`,he=t.span``,xe=t.div`
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
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(25px);
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
`,me=t.nav`
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
`,ue=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,w=t.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,y=t(z)`
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
`,fe=t.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,ge=t.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,ve=t.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,be=t.p`
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
`,je=t.div`
  position: relative;
`,we=t.p`
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
`,ye=t.ul`
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
`,ke=t.li`
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
`,Ce=t(z)`
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
`,k=[{name:"Main Dishes",to:`hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${v.KHINKALI}`}],M=i=>{const{onClick:d}=i,x=L(G),[r,c]=s.useState(!1),[p,o]=s.useState("Hoot Dishes"),{pathname:a,hash:l}=_(),m=s.useRef(null),h=s.useRef();s.useEffect(()=>{k.every(({to:f})=>f!==a)&&o("Hot Dishes")},[a]);const u=n=>{window.location.hash===n&&!x&&(window.location.hash="#",m.current=setTimeout(()=>{window.location.hash=n},300))};return s.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]),e.jsxs(je,{ref:h,children:[e.jsxs(we,{onClick:()=>{c(!r)},children:[p,r?e.jsx(K,{}):e.jsx(V,{})]}),e.jsx(ye,{"data-show":r.toString(),className:r?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(o(n.target.textContent),c(!1),d())},children:k.map(({name:n,to:f})=>e.jsx(ke,{onClick:()=>u(l),children:e.jsx(Ce,{to:f,children:n})},n))})]})};M.propTypes={onClick:D.func.isRequired};const Se=t.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,ze=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Le=t.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;

  & svg {
    width: 24px;
    height: 24px;
  }
`,C=t.a`
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
`,_e=t.div`
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
`,Ne=t.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,Fe=t.div``,S=t.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,We=()=>e.jsx(Se,{children:e.jsxs(N,{children:[e.jsxs(ze,{children:[e.jsxs(Le,{children:[e.jsx(F,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(C,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(C,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(_e,{children:[e.jsx(Ne,{children:"© 2023, official site"}),e.jsxs(Fe,{children:[e.jsx(S,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(S,{href:"#",children:"Terms of use"})]})]})]})});function De(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const Me=Z().shape({search:U().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),B=({onClick:i})=>{const d=I(),x=W(),{pathname:r}=_(),[c,p]=R(),o=c.get("q"),[a,l]=s.useState(o||"");function m(h,{setSubmitting:u}){const n=h.search.trim();l(n),x("search"),u(!1),i()}return s.useEffect(()=>{r==="/search"&&(p({q:a}),d(P(o)))},[d,r,o,p,a]),e.jsx(Y,{children:e.jsx(J,{initialValues:{search:a},onSubmit:m,validationSchema:Me,children:({values:h,handleChange:u,handleSubmit:n,resetForm:f,errors:j,touched:T,isSubmitting:E})=>e.jsx(Q,{onSubmit:n,children:e.jsxs(ee,{children:[e.jsx(te,{type:"text",name:"search",placeholder:"Search...",onChange:u,value:h.search}),j.search&&T.search&&e.jsx(ie,{children:j.search}),e.jsxs(ne,{children:[h.search!==""&&e.jsx(oe,{type:"button",onClick:()=>{f({values:{search:""}})},className:"delete",children:e.jsx(X,{})}),e.jsx(ae,{className:"search",type:"submit",disabled:E,children:e.jsx(De,{})})]})]})})})})};B.propTypes={onClick:D.func.isRequired};const Pe=()=>{const[i,d]=s.useState(!1),x=L(A),r=W(),c=x.reduce((a,l)=>l.count+a,0),p=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],o=()=>{d(!i)};return s.useEffect(()=>(document.body.style.overflow=i?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[i]),e.jsxs(e.Fragment,{children:[e.jsx(le,{children:e.jsx(N,{children:e.jsxs(de,{children:[e.jsxs(pe,{to:"/",children:[e.jsx(he,{children:e.jsx(F,{})}),"Kindzmarauli"]}),e.jsx(b,{type:"button",className:"open_mobil_menu",onClick:o,children:e.jsx(re,{})}),e.jsxs(xe,{"data-visibility":i.toString(),children:[e.jsxs(me,{children:[e.jsx(b,{className:"close_mobil_menu",type:"button",onClick:o,children:e.jsx(ce,{})}),e.jsxs(ue,{children:[e.jsx(w,{children:e.jsx(M,{onClick:o})}),p.map(({name:a,to:l})=>e.jsx(w,{children:e.jsx(y,{activeclassname:"active",to:l,onClick:o,children:a})},a))]})]}),e.jsxs(fe,{children:[e.jsx(B,{onClick:o}),e.jsxs(ge,{children:[e.jsx(b,{type:"button",className:"user_button",onClick:()=>r("user_account"),children:e.jsx(se,{})}),e.jsxs(ve,{children:[e.jsx(y,{to:"basket",onClick:o,children:e.jsx(O,{})}),c>0&&e.jsx(be,{children:c})]})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(s.Suspense,{fallback:e.jsx(H,{}),children:e.jsx(q,{})})}),e.jsx(We,{})]})};export{Pe as default};
