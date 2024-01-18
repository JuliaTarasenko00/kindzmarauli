import{G as g,s as t,L as I,N as L,u as j,r as s,a as N,j as e,C as _,b as M,c as R,d as A,g as P,f as D,e as O,h as H,O as q}from"./index-n1GEpy4V.js";import{P as W}from"./index-MOZbIzeP.js";import{G as K,a as V}from"./index.esm-QMEAILtD.js";import{s as v}from"./specifics_dish-m9aeWgjf.js";import{l as Z,u as B,f as U,d as J}from"./selector-B6Og_3Xx.js";import{c as Q,a as X,F as Y,b as ee,A as te}from"./index.esm-6xsl0ouB.js";import{F as ie,W as ne,I as oe,E as ae,a as se,D as re,B as ce}from"./FilterForm.styled-KthXIimh.js";function le(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function de(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function pe(i){return g({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const he=t.header`
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
`,xe=t.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,me=t(I)`
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
`,ue=t.span``,fe=t.div`
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
`,ge=t.nav`
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
`,ve=t.ul`
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
`,je=t.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,we=t.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,ye=t.p`
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
`,ke=t.div`
  position: relative;
`,Ce=t.p`
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
`,Se=t.ul`
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
`,ze=t.li`
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
`,Le=t(L)`
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
`,C=[{name:"Main Dishes",to:`hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${v.KHINKALI}`}],F=i=>{const{onClick:f}=i,r=j(Z),[c,x]=s.useState(!1),[m,d]=s.useState("Hoot Dishes"),{pathname:l,hash:o}=N(),a=s.useRef(null),p=s.useRef();s.useEffect(()=>{C.every(({to:h})=>h!==l)&&d("Hot Dishes")},[l]);const u=n=>{window.location.hash===n&&!r&&(window.location.hash="#",a.current=setTimeout(()=>{window.location.hash=n},300))};return s.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),e.jsxs(ke,{ref:p,children:[e.jsxs(Ce,{onClick:()=>{x(!c)},children:[m,c?e.jsx(K,{}):e.jsx(V,{})]}),e.jsx(Se,{"data-show":c.toString(),className:c?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(d(n.target.textContent),x(!1),f())},children:C.map(({name:n,to:h})=>e.jsx(ze,{onClick:()=>u(o),children:e.jsx(Le,{to:h,children:n})},n))})]})};F.propTypes={onClick:W.func.isRequired};const Ne=t.footer`
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
`,Me=t.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
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
`,Fe=()=>e.jsx(Ne,{children:e.jsxs(_,{children:[e.jsxs(_e,{children:[e.jsxs(Me,{children:[e.jsx(M,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(S,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(S,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(De,{children:[e.jsx(We,{children:"© 2023, official site"}),e.jsxs(Be,{children:[e.jsx(z,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(z,{href:"#",children:"Terms of use"})]})]})]})});function Te(i){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const $e=Q().shape({search:X().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),T=i=>{const{onClick:f}=i,r=B(),c=R(),{pathname:x}=N(),[m,d]=A(),l=m.get("q"),[o,a]=s.useState(l||"");function p(u,{setSubmitting:n}){const h=u.search.trim();a(h),c("search"),n(!1),f()}return s.useEffect(()=>{x==="/search"&&(r(P()),d({q:o}),r(D(l)))},[r,x,l,d,o]),e.jsx(ie,{children:e.jsx(Y,{initialValues:{search:o},onSubmit:p,validationSchema:$e,children:({values:u,handleChange:n,handleSubmit:h,resetForm:$,errors:w,touched:E,isSubmitting:G})=>e.jsx(ee,{onSubmit:h,children:e.jsxs(ne,{children:[e.jsx(oe,{type:"text",name:"search",placeholder:"Search...",onChange:n,value:u.search}),w.search&&E.search?e.jsx(ae,{children:w.search}):"",e.jsxs(se,{children:[u.search!==""&&e.jsx(re,{type:"button",onClick:()=>{$({values:{search:""}})},className:"delete",children:e.jsx(te,{})}),e.jsx(ce,{className:"search",type:"submit",disabled:G,children:e.jsx(Te,{})})]})]})})})})};T.propTypes={onClick:W.func.isRequired};const He=()=>{const i=j(U),f=B(),[r,c]=s.useState(!1),m=j(J).reduce((a,p)=>p.count+a,0),d=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],l=()=>{if(c(!0),!r)return document.body.style.overflow="hidden"},o=()=>{if(c(!1),r)return document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsx(_,{children:e.jsxs(xe,{children:[e.jsxs(me,{to:"/",onClick:()=>{i&&f(D(""))},children:[e.jsx(ue,{children:e.jsx(M,{})}),"Kindzmarauli"]}),e.jsx(b,{type:"button",className:"open_mobil_menu",onClick:l,children:e.jsx(de,{})}),e.jsxs(fe,{"data-visibility":r.toString(),children:[e.jsxs(ge,{children:[e.jsx(b,{className:"close_mobil_menu",type:"button",onClick:o,children:e.jsx(pe,{})}),e.jsxs(ve,{children:[e.jsx(y,{children:e.jsx(F,{onClick:o})}),d.map(({name:a,to:p})=>e.jsx(y,{children:e.jsx(k,{activeclassname:"active",to:p,onClick:o,children:a})},a))]})]}),e.jsxs(be,{children:[e.jsx(T,{onClick:o}),e.jsxs(je,{children:[e.jsx(b,{type:"button",className:"user_button",children:e.jsx(le,{})}),e.jsxs(we,{children:[e.jsx(k,{to:"basket",onClick:o,children:e.jsx(O,{})}),m>0&&e.jsx(ye,{children:m})]})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(s.Suspense,{fallback:e.jsx(H,{}),children:e.jsx(q,{})})}),e.jsx(Fe,{})]})};export{He as default};
