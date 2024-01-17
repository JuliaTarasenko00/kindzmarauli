import{G as f,s as t,i as I,L,N as R,r as s,u as N,j as e,C as _,a as M,b as A,c as P,g as O,f as D,d as w,e as H,h as q,O as K}from"./index-LNaGYFSC.js";import{P as W}from"./index-B1QmkMhy.js";import{G as V,a as Z}from"./index.esm-QFv9Th-8.js";import{s as v}from"./specifics_dish-m9aeWgjf.js";import{c as U,a as J,F as Q,b as X,A as Y}from"./index.esm-3seuwZ1P.js";import{F as ee,W as te,I as ie,E as ne,a as oe,D as ae,B as se}from"./FilterForm.styled-483yzrt2.js";import{u as F,f as re,d as ce}from"./selector-8DzEcZ_M.js";function le(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function de(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function pe(i){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const he=t.header`
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
`,me=t(L)`
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
      url(${I});
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
`,ve=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,k=t.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,y=t(R)`
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
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,je=t.div`
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
`,ke=t.div`
  position: relative;
`,ye=t.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({["data-active"]:i})=>i==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
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
`,C=[{name:"Main Dishes",to:`hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${v.KHINKALI}`}],T=i=>{const{onClick:m}=i,[o,c]=s.useState(!1),[u,l]=s.useState("Hoot Dishes"),{pathname:d,hash:p}=N(),a=s.useRef(null),r=s.useRef();s.useEffect(()=>{C.every(({to:x})=>x!==d)&&l("Hot Dishes")},[d]);const h=n=>{window.location.hash===n&&(window.location.hash="#",a.current=setTimeout(()=>{window.location.hash=n},300))};return s.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),e.jsxs(ke,{ref:r,children:[e.jsxs(ye,{onClick:()=>{c(!o)},"data-active":o.toString(),children:[u,o?e.jsx(V,{}):e.jsx(Z,{})]}),e.jsx(Ce,{"data-show":o.toString(),className:o?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(l(n.target.textContent),c(!1),m())},children:C.map(({name:n,to:x})=>e.jsx(Se,{onClick:()=>h(p),children:e.jsx(ze,{to:x,children:n})},n))})]})};T.propTypes={onClick:W.func.isRequired};const Le=t.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,Ne=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,_e=t.p`
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
`,De=t.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,We=t.div``,z=t.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,Fe=()=>e.jsx(Le,{children:e.jsxs(_,{children:[e.jsxs(Ne,{children:[e.jsxs(_e,{children:[e.jsx(M,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(S,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(S,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(Me,{children:[e.jsx(De,{children:"© 2023, official site"}),e.jsxs(We,{children:[e.jsx(z,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(z,{href:"#",children:"Terms of use"})]})]})]})});function Te(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const Be=U().shape({search:J().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),B=i=>{const{onClick:m}=i,o=F(),c=A(),{pathname:u}=N(),[l,d]=P(),p=l.get("q"),[a,r]=s.useState(p||"");function h(n,{setSubmitting:x}){const g=n.search.trim();r(g),c("search"),x(!1),m()}return s.useEffect(()=>{u==="/search"&&(o(O()),d({q:a}),o(D(p)))},[o,u,p,d,a]),e.jsx(ee,{children:e.jsx(Q,{initialValues:{search:a},onSubmit:h,validationSchema:Be,children:({values:n,handleChange:x,handleSubmit:g,resetForm:$,errors:j,touched:E,isSubmitting:G})=>e.jsx(X,{onSubmit:g,children:e.jsxs(te,{children:[e.jsx(ie,{type:"text",name:"search",placeholder:"Search...",onChange:x,value:n.search}),j.search&&E.search?e.jsx(ne,{children:j.search}):"",e.jsxs(oe,{children:[n.search!==""&&e.jsx(ae,{type:"button",onClick:()=>{$({values:{search:""}})},className:"delete",children:e.jsx(Y,{})}),e.jsx(se,{className:"search",type:"submit",disabled:G,children:e.jsx(Te,{})})]})]})})})})};B.propTypes={onClick:W.func.isRequired};const Oe=()=>{const i=w(re),m=F(),[o,c]=s.useState(!1),l=w(ce).reduce((r,h)=>h.count+r,0),d=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],p=()=>{if(c(!0),!o)return document.body.style.overflow="hidden"},a=()=>{if(c(!1),o)return document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsx(_,{children:e.jsxs(xe,{children:[e.jsxs(me,{to:"/",onClick:()=>{i&&m(D(""))},children:[e.jsx(ue,{children:e.jsx(M,{})}),"Kindzmarauli"]}),e.jsx(b,{type:"button",className:"open_mobil_menu",onClick:p,children:e.jsx(de,{})}),e.jsxs(fe,{"data-visibility":o.toString(),children:[e.jsxs(ge,{children:[e.jsx(b,{className:"close_mobil_menu",type:"button",onClick:a,children:e.jsx(pe,{})}),e.jsxs(ve,{children:[e.jsx(k,{children:e.jsx(T,{onClick:a})}),d.map(({name:r,to:h})=>e.jsx(k,{children:e.jsx(y,{activeclassname:"active",to:h,onClick:a,children:r})},r))]})]}),e.jsxs(be,{children:[e.jsx(B,{onClick:a}),e.jsx(b,{type:"button",className:"user_button",children:e.jsx(le,{})}),e.jsxs(je,{children:[e.jsx(y,{to:"basket",onClick:a,children:e.jsx(H,{})}),l>0&&e.jsx(we,{children:l})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(s.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(K,{})})}),e.jsx(Fe,{})]})};export{Oe as default};
