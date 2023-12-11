import{s as t,i as I,L,N as R,r as s,u as _,j as e,C as M,a as A,b as P,g as O,f as N,c as k,O as H}from"./index-TmudzKTD.js";import{G as f}from"./iconBase-lH-4ai4s.js";import{P as D,G as W,a as q}from"./index-UfcYzeDs.js";import{G as K}from"./index.esm-CC8RyYT6.js";import{s as v}from"./specifics_dish-m9aeWgjf.js";import{c as V,a as Z,F as U,b as J,A as Q}from"./index.esm-LZbLwpDX.js";import{F as X,W as Y,I as ee,E as te,a as ie,D as ne,B as oe}from"./FilterForm.styled-A6TCYxWi.js";import{u as F,f as ae,d as se}from"./selector-pH0UbsYR.js";function re(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function ce(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function le(i){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const de=t.header`
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
`,pe=t.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,he=t(L)`
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
`,xe=t.span``,me=t.div`
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
`,ue=t.nav`
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
`,fe=t.ul`
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
`,ge=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
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
`,ke=t.p`
  cursor: pointer;

  color: ${({["data-active"]:i})=>i==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`,we=t.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;

  display: ${({["data-show"]:i})=>i==="true"?"block":"none"};
`,ye=t.li`
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
`,Ce=t(L)`
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
`,C=[{name:"Main Dishes",to:`/hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`/hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`/hot_dishes#${v.KHINKALI}`}],T=i=>{const{onClick:m}=i,[a,c]=s.useState(!1),[u,l]=s.useState("Hoot Dishes"),{pathname:d,hash:p}=_(),o=s.useRef(null),r=s.useRef();s.useEffect(()=>{C.every(({to:x})=>x!==d)&&l("Hot Dishes")},[d]);const h=n=>{window.location.hash===n&&(window.location.hash="#",o.current=setTimeout(()=>{window.location.hash=n},300))};return s.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]),e.jsxs(je,{ref:r,children:[e.jsxs(ke,{onClick:()=>{c(!a)},"data-active":a.toString(),children:[u,e.jsx("span",{children:e.jsx(K,{})})]}),e.jsx(we,{"data-show":a.toString(),onClick:n=>{n.target!==n.currentTarget&&(l(n.target.textContent),c(!1),m())},children:C.map(({name:n,to:x})=>e.jsx(ye,{onClick:()=>h(p),children:e.jsx(Ce,{to:x,children:n})},n))})]})};T.propTypes={onClick:D.func.isRequired};const Se=t.footer`
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
`,Me=t.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,Ne=t.div``,z=t.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,De=()=>e.jsx(Se,{children:e.jsxs(M,{children:[e.jsxs(ze,{children:[e.jsxs(Le,{children:[e.jsx(W,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(S,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(S,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(_e,{children:[e.jsx(Me,{children:"© 2023, official site"}),e.jsxs(Ne,{children:[e.jsx(z,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(z,{href:"#",children:"Terms of use"})]})]})]})});function We(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const Fe=V().shape({search:Z().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),B=i=>{const{onClick:m}=i,a=F(),c=A(),{pathname:u}=_(),[l,d]=P(),p=l.get("q"),[o,r]=s.useState(p||"");function h(n,{setSubmitting:x}){const g=n.search.trim();r(g),c("search"),x(!1),m()}return s.useEffect(()=>{u==="/search"&&(a(O()),d({q:o}),a(N(p)))},[a,u,p,d,o]),e.jsx(X,{children:e.jsx(U,{initialValues:{search:o},onSubmit:h,validationSchema:Fe,children:({values:n,handleChange:x,handleSubmit:g,resetForm:$,errors:j,touched:E,isSubmitting:G})=>e.jsx(J,{onSubmit:g,children:e.jsxs(Y,{children:[e.jsx(ee,{type:"text",name:"search",placeholder:"Search...",onChange:x,value:n.search}),j.search&&E.search?e.jsx(te,{children:j.search}):"",e.jsxs(ie,{children:[n.search!==""&&e.jsx(ne,{type:"button",onClick:()=>{$({values:{search:""}})},className:"delete",children:e.jsx(Q,{})}),e.jsx(oe,{className:"search",type:"submit",disabled:G,children:e.jsx(We,{})})]})]})})})})};B.propTypes={onClick:D.func.isRequired};const Pe=()=>{const i=k(ae),m=F(),[a,c]=s.useState(!1),l=k(se).reduce((r,h)=>h.count+r,0),d=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],p=()=>{if(c(!0),!a)return document.body.style.overflow="hidden"},o=()=>{if(c(!1),a)return document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsx(M,{children:e.jsxs(pe,{children:[e.jsxs(he,{to:"/",onClick:()=>{i&&m(N(""))},children:[e.jsx(xe,{children:e.jsx(W,{})}),"Kindzmarauli"]}),e.jsx(b,{type:"button",className:"open_mobil_menu",onClick:p,children:e.jsx(ce,{})}),e.jsxs(me,{"data-visibility":a.toString(),children:[e.jsxs(ue,{children:[e.jsx(b,{className:"close_mobil_menu",type:"button",onClick:o,children:e.jsx(le,{})}),e.jsxs(fe,{children:[e.jsx(w,{children:e.jsx(T,{onClick:o})}),d.map(({name:r,to:h})=>e.jsx(w,{children:e.jsx(y,{activeclassname:"active",to:h,onClick:o,children:r})},r))]})]}),e.jsxs(ge,{children:[e.jsx(B,{onClick:o}),e.jsx(b,{type:"button",className:"user_button",children:e.jsx(re,{})}),e.jsxs(ve,{children:[e.jsx(y,{to:"basket",onClick:o,children:e.jsx(q,{})}),l>0&&e.jsx(be,{children:l})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(s.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(H,{})})}),e.jsx(De,{})]})};export{Pe as default};
