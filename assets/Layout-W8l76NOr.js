import{s as t,i as I,L,N as R,r as s,u as N,j as e,C as _,a as A,b as P,g as O,f as M,c as w,O as H}from"./index-kfm9YZ9o.js";import{G as f}from"./iconBase-rap44k2S.js";import{P as D,G as W,a as q}from"./index-sXRa0jEU.js";import{G as K,a as V}from"./index.esm-l8c9IzCn.js";import{s as v}from"./specifics_dish-m9aeWgjf.js";import{c as Z,a as U,F as J,b as Q,A as X}from"./index.esm-ElzGR4q9.js";import{F as Y,W as ee,I as te,E as ie,a as ne,D as oe,B as ae}from"./FilterForm.styled-QBbA83Wl.js";import{u as F,f as se,d as re}from"./selector-2_PSBcyn.js";function ce(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function le(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function de(i){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const pe=t.header`
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
`,xe=t(L)`
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
`,fe=t.nav`
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
`,ge=t.ul`
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
`,ve=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,be=t.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,je=t.p`
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
`,we=t.div`
  position: relative;
`,ke=t.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({["data-active"]:i})=>i==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
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
`,Ce=t.li`
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
`,Se=t(L)`
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
`,C=[{name:"Main Dishes",to:`/hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`/hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`/hot_dishes#${v.KHINKALI}`}],T=i=>{const{onClick:m}=i,[o,c]=s.useState(!1),[u,l]=s.useState("Hoot Dishes"),{pathname:d,hash:p}=N(),a=s.useRef(null),r=s.useRef();s.useEffect(()=>{C.every(({to:x})=>x!==d)&&l("Hot Dishes")},[d]);const h=n=>{window.location.hash===n&&(window.location.hash="#",a.current=setTimeout(()=>{window.location.hash=n},300))};return s.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),e.jsxs(we,{ref:r,children:[e.jsxs(ke,{onClick:()=>{c(!o)},"data-active":o.toString(),children:[u,o?e.jsx(K,{}):e.jsx(V,{})]}),e.jsx(ye,{"data-show":o.toString(),className:o?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(l(n.target.textContent),c(!1),m())},children:C.map(({name:n,to:x})=>e.jsx(Ce,{onClick:()=>h(p),children:e.jsx(Se,{to:x,children:n})},n))})]})};T.propTypes={onClick:D.func.isRequired};const ze=t.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,Le=t.div`
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
`,De=t.div``,z=t.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,We=()=>e.jsx(ze,{children:e.jsxs(_,{children:[e.jsxs(Le,{children:[e.jsxs(Ne,{children:[e.jsx(W,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(S,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(S,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(_e,{children:[e.jsx(Me,{children:"© 2023, official site"}),e.jsxs(De,{children:[e.jsx(z,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(z,{href:"#",children:"Terms of use"})]})]})]})});function Fe(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const Te=Z().shape({search:U().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),B=i=>{const{onClick:m}=i,o=F(),c=A(),{pathname:u}=N(),[l,d]=P(),p=l.get("q"),[a,r]=s.useState(p||"");function h(n,{setSubmitting:x}){const g=n.search.trim();r(g),c("search"),x(!1),m()}return s.useEffect(()=>{u==="/search"&&(o(O()),d({q:a}),o(M(p)))},[o,u,p,d,a]),e.jsx(Y,{children:e.jsx(J,{initialValues:{search:a},onSubmit:h,validationSchema:Te,children:({values:n,handleChange:x,handleSubmit:g,resetForm:$,errors:j,touched:G,isSubmitting:E})=>e.jsx(Q,{onSubmit:g,children:e.jsxs(ee,{children:[e.jsx(te,{type:"text",name:"search",placeholder:"Search...",onChange:x,value:n.search}),j.search&&G.search?e.jsx(ie,{children:j.search}):"",e.jsxs(ne,{children:[n.search!==""&&e.jsx(oe,{type:"button",onClick:()=>{$({values:{search:""}})},className:"delete",children:e.jsx(X,{})}),e.jsx(ae,{className:"search",type:"submit",disabled:E,children:e.jsx(Fe,{})})]})]})})})})};B.propTypes={onClick:D.func.isRequired};const Oe=()=>{const i=w(se),m=F(),[o,c]=s.useState(!1),l=w(re).reduce((r,h)=>h.count+r,0),d=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],p=()=>{if(c(!0),!o)return document.body.style.overflow="hidden"},a=()=>{if(c(!1),o)return document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsx(_,{children:e.jsxs(he,{children:[e.jsxs(xe,{to:"/",onClick:()=>{i&&m(M(""))},children:[e.jsx(me,{children:e.jsx(W,{})}),"Kindzmarauli"]}),e.jsx(b,{type:"button",className:"open_mobil_menu",onClick:p,children:e.jsx(le,{})}),e.jsxs(ue,{"data-visibility":o.toString(),children:[e.jsxs(fe,{children:[e.jsx(b,{className:"close_mobil_menu",type:"button",onClick:a,children:e.jsx(de,{})}),e.jsxs(ge,{children:[e.jsx(k,{children:e.jsx(T,{onClick:a})}),d.map(({name:r,to:h})=>e.jsx(k,{children:e.jsx(y,{activeclassname:"active",to:h,onClick:a,children:r})},r))]})]}),e.jsxs(ve,{children:[e.jsx(B,{onClick:a}),e.jsx(b,{type:"button",className:"user_button",children:e.jsx(ce,{})}),e.jsxs(be,{children:[e.jsx(y,{to:"basket",onClick:a,children:e.jsx(q,{})}),l>0&&e.jsx(je,{children:l})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(s.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(H,{})})}),e.jsx(We,{})]})};export{Oe as default};
