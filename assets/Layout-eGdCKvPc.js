import{s as e,i as I,L,N as R,r as s,u as _,j as t,C as M,a as A,b as P,g as O,f as N,c as k,O as H}from"./index-Mz9nrpqA.js";import{G as f}from"./iconBase-YBSqRQ7H.js";import{P as D,G as W,a as q}from"./index-gARlvmiq.js";import{G as K,a as V}from"./index.esm-rOow-v8U.js";import{s as v}from"./specifics_dish-m9aeWgjf.js";import{c as Z,a as U,F as J,b as Q,A as X}from"./index.esm-1AihhtEV.js";import{F as Y,W as tt,I as et,E as it,a as nt,D as ot,B as at}from"./FilterForm.styled-Cxu4EQNs.js";import{u as F,f as st,d as rt}from"./selector-iiw-Pbxi.js";function ct(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(i)}function lt(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(i)}function dt(i){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(i)}const pt=e.header`
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
`,ht=e.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,xt=e(L)`
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
`,mt=e.span``,ut=e.div`
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
`,ft=e.nav`
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
`,gt=e.ul`
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
`,y=e(R)`
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
`,vt=e.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,bt=e.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,jt=e.p`
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
`,kt=e.div`
  position: relative;
`,wt=e.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({["data-active"]:i})=>i==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`,yt=e.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
  opacity: ${({["data-show"]:i})=>i==="true"?"1":"0"};
  transition: opacity var(--transition);
`,Ct=e.li`
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
`,St=e(L)`
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
`,C=[{name:"Main Dishes",to:`/hot_dishes#${v.MAIN}`},{name:"Grilled Dishes",to:`/hot_dishes#${v.GRILLED}`},{name:"Khinkali",to:`/hot_dishes#${v.KHINKALI}`}],T=i=>{const{onClick:m}=i,[a,c]=s.useState(!1),[u,l]=s.useState("Hoot Dishes"),{pathname:d,hash:p}=_(),o=s.useRef(null),r=s.useRef();s.useEffect(()=>{C.every(({to:x})=>x!==d)&&l("Hot Dishes")},[d]);const h=n=>{window.location.hash===n&&(window.location.hash="#",o.current=setTimeout(()=>{window.location.hash=n},300))};return s.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]),t.jsxs(kt,{ref:r,children:[t.jsxs(wt,{onClick:()=>{c(!a)},"data-active":a.toString(),children:[u,a?t.jsx(K,{}):t.jsx(V,{})]}),t.jsx(yt,{"data-show":a.toString(),onClick:n=>{n.target!==n.currentTarget&&(l(n.target.textContent),c(!1),m())},children:C.map(({name:n,to:x})=>t.jsx(Ct,{onClick:()=>h(p),children:t.jsx(St,{to:x,children:n})},n))})]})};T.propTypes={onClick:D.func.isRequired};const zt=e.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,Lt=e.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,_t=e.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,S=e.a`
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
`,Mt=e.div`
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
`,Nt=e.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,Dt=e.div``,z=e.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,Wt=()=>t.jsx(zt,{children:t.jsxs(M,{children:[t.jsxs(Lt,{children:[t.jsxs(_t,{children:[t.jsx(W,{})," Kindzmarauli"]}),t.jsxs("div",{children:[t.jsx(S,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),t.jsx(S,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),t.jsxs(Mt,{children:[t.jsx(Nt,{children:"© 2023, official site"}),t.jsxs(Dt,{children:[t.jsx(z,{href:"#",children:"Privacy Policy and Offer"}),t.jsx(z,{href:"#",children:"Terms of use"})]})]})]})});function Ft(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const Tt=Z().shape({search:U().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),B=i=>{const{onClick:m}=i,a=F(),c=A(),{pathname:u}=_(),[l,d]=P(),p=l.get("q"),[o,r]=s.useState(p||"");function h(n,{setSubmitting:x}){const g=n.search.trim();r(g),c("search"),x(!1),m()}return s.useEffect(()=>{u==="/search"&&(a(O()),d({q:o}),a(N(p)))},[a,u,p,d,o]),t.jsx(Y,{children:t.jsx(J,{initialValues:{search:o},onSubmit:h,validationSchema:Tt,children:({values:n,handleChange:x,handleSubmit:g,resetForm:$,errors:j,touched:G,isSubmitting:E})=>t.jsx(Q,{onSubmit:g,children:t.jsxs(tt,{children:[t.jsx(et,{type:"text",name:"search",placeholder:"Search...",onChange:x,value:n.search}),j.search&&G.search?t.jsx(it,{children:j.search}):"",t.jsxs(nt,{children:[n.search!==""&&t.jsx(ot,{type:"button",onClick:()=>{$({values:{search:""}})},className:"delete",children:t.jsx(X,{})}),t.jsx(at,{className:"search",type:"submit",disabled:E,children:t.jsx(Ft,{})})]})]})})})})};B.propTypes={onClick:D.func.isRequired};const Ot=()=>{const i=k(st),m=F(),[a,c]=s.useState(!1),l=k(rt).reduce((r,h)=>h.count+r,0),d=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],p=()=>{if(c(!0),!a)return document.body.style.overflow="hidden"},o=()=>{if(c(!1),a)return document.body.style.overflow="auto"};return t.jsxs(t.Fragment,{children:[t.jsx(pt,{children:t.jsx(M,{children:t.jsxs(ht,{children:[t.jsxs(xt,{to:"/",onClick:()=>{i&&m(N(""))},children:[t.jsx(mt,{children:t.jsx(W,{})}),"Kindzmarauli"]}),t.jsx(b,{type:"button",className:"open_mobil_menu",onClick:p,children:t.jsx(lt,{})}),t.jsxs(ut,{"data-visibility":a.toString(),children:[t.jsxs(ft,{children:[t.jsx(b,{className:"close_mobil_menu",type:"button",onClick:o,children:t.jsx(dt,{})}),t.jsxs(gt,{children:[t.jsx(w,{children:t.jsx(T,{onClick:o})}),d.map(({name:r,to:h})=>t.jsx(w,{children:t.jsx(y,{activeclassname:"active",to:h,onClick:o,children:r})},r))]})]}),t.jsxs(vt,{children:[t.jsx(B,{onClick:o}),t.jsx(b,{type:"button",className:"user_button",children:t.jsx(ct,{})}),t.jsxs(bt,{children:[t.jsx(y,{to:"basket",onClick:o,children:t.jsx(q,{})}),l>0&&t.jsx(jt,{children:l})]})]})]})]})})}),t.jsx("main",{style:{flexGrow:1},children:t.jsx(s.Suspense,{fallback:t.jsx("p",{children:"Loading..."}),children:t.jsx(H,{})})}),t.jsx(Wt,{})]})};export{Ot as default};
