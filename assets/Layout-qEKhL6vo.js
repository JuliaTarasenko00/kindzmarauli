import{G as y,s as i,L as ne,b as D,u as f,l as L,r,c as I,j as e,C as O,d as G,e as E,f as z,g as oe,h as se,i as ae,k as M,a as re,m as ce,n as A,Q as le,o as de,p as pe,q as he,t as me,v as ue,O as xe}from"./index-IjBqPqZw.js";import{P as S}from"./index-vu-mQ0Ai.js";import{G as ge,a as fe}from"./index.esm-sHf-rfpd.js";import{s as N}from"./specifics_dish-m9aeWgjf.js";import{c as F,a as w,F as _,b as be,A as ve,d as je}from"./index.esm-42k8B9K4.js";import{F as we,W as ye,I as ke,E as Se,a as ze,D as Ce,B as Ne}from"./FilterForm.styled-X48JpoTe.js";function Re(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(t)}function Le(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"}},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"}},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"}}]}]})(t)}function Ee(t){return y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}const Me=i.header`
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
`,Fe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`,_e=i(ne)`
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
`,Te=i.span``,qe=i.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 420px;

  @media screen and (max-width: 767px) {
    position: fixed;
    visibility: ${({["data-visibility"]:t})=>t==="true"?"visible":"hidden"};
    opacity: ${({["data-visibility"]:t})=>t==="true"?"1":"0"};
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
`,Be=i.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`,R=i.button`
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
`,Pe=i.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,T=i.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`,q=i(D)`
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
`,We=i.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,$e=i.div`
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,De=i.div`
  position: relative;
  width: 24px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Ie=i.p`
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
`,Oe=i.div`
  position: relative;
`,Ge=i.p`
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
`,Ae=i.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
  opacity: ${({["data-show"]:t})=>t==="true"?"1":"0"};
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
`,Ve=i.li`
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
`,He=i(D)`
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
`,B=[{name:"Main Dishes",to:`hot_dishes#${N.MAIN}`},{name:"Grilled Dishes",to:`hot_dishes#${N.GRILLED}`},{name:"Khinkali",to:`hot_dishes#${N.KHINKALI}`}],V=t=>{const{onClick:o}=t,d=f(L),[s,x]=r.useState(!1),[g,m]=r.useState("Hoot Dishes"),{pathname:u,hash:p}=I(),a=r.useRef(null),c=r.useRef();r.useEffect(()=>{B.every(({to:h})=>h!==u)&&m("Hot Dishes")},[u]);const l=n=>{window.location.hash===n&&!d&&(window.location.hash="#",a.current=setTimeout(()=>{window.location.hash=n},300))};return r.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),e.jsxs(Oe,{ref:c,children:[e.jsxs(Ge,{onClick:()=>{x(!s)},children:[g,s?e.jsx(ge,{}):e.jsx(fe,{})]}),e.jsx(Ae,{"data-show":s.toString(),className:s?"":"hidden",onClick:n=>{n.target!==n.currentTarget&&(m(n.target.textContent),x(!1),o())},children:B.map(({name:n,to:h})=>e.jsx(Ve,{onClick:()=>l(p),children:e.jsx(He,{to:h,children:n})},n))})]})};V.propTypes={onClick:S.func.isRequired};const Ke=i.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,Ye=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Ze=i.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;

  & svg {
    width: 24px;
    height: 24px;
  }
`,P=i.a`
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
`,Ue=i.div`
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
`,Qe=i.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,Xe=i.div``,W=i.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,Je=()=>e.jsx(Ke,{children:e.jsxs(O,{children:[e.jsxs(Ye,{children:[e.jsxs(Ze,{children:[e.jsx(G,{})," Kindzmarauli"]}),e.jsxs("div",{children:[e.jsx(P,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),e.jsx(P,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),e.jsxs(Ue,{children:[e.jsx(Qe,{children:"© 2023, official site"}),e.jsxs(Xe,{children:[e.jsx(W,{href:"#",children:"Privacy Policy and Offer"}),e.jsx(W,{href:"#",children:"Terms of use"})]})]})]})});function et(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(t)}const tt=F().shape({search:w().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),H=({onClick:t})=>{const o=E(),d=z(),{pathname:s}=I(),[x,g]=oe(),m=x.get("q"),[u,p]=r.useState(m||"");function a(c,{setSubmitting:l}){const n=c.search.trim();p(n),d("search"),l(!1),t()}return r.useEffect(()=>{s==="/search"&&(g({q:u}),o(se(m)))},[o,s,m,g,u]),e.jsx(we,{children:e.jsx(_,{initialValues:{search:u},onSubmit:a,validationSchema:tt,children:({values:c,handleChange:l,handleSubmit:n,resetForm:h,errors:k,touched:C,isSubmitting:ie})=>e.jsx(be,{onSubmit:n,children:e.jsxs(ye,{children:[e.jsx(ke,{type:"text",name:"search",placeholder:"Search...",onChange:l,value:c.search}),k.search&&C.search&&e.jsx(Se,{children:k.search}),e.jsxs(ze,{children:[c.search!==""&&e.jsx(Ce,{type:"button",onClick:()=>{h({values:{search:""}})},className:"delete",children:e.jsx(ve,{})}),e.jsx(Ne,{className:"search",type:"submit",disabled:ie,children:e.jsx(et,{})})]})]})})})})};H.propTypes={onClick:S.func.isRequired};const it=()=>{const[t,o]=r.useState(!1),d=r.useCallback(()=>{o(!t)},[t]);return r.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[t]),{toggleModal:d,open:t}},nt=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgb(116 115 115) 0%,
    rgb(83 81 81 / 32%) 0%
  );
  backdrop-filter: blur(0.1rem);
  z-index: 1200;
`,ot=i.div`
  position: relative;
  background-color: #1f293a;
  border-radius: 30px;
  overflow: hidden;
  border: 2px solid #fbd13eb3;
  box-shadow: -1px 5px 65px 0px rgb(255 255 255 / 39%);
`,st=document.getElementById("modal"),at=({children:t,onClose:o})=>{const d=s=>{s.currentTarget===s.target&&o()};return r.useEffect(()=>{const s=x=>{x.code==="Escape"&&o()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[o]),ae.createPortal(e.jsx(nt,{onClick:d,children:e.jsx(ot,{children:t})}),st)};function K(t){return y({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM136.5 211c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17zM328 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4z"}}]})(t)}function Y(t){return y({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"}}]})(t)}const rt=i.div`
  padding: 40px;
  width: 700px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
`,ct=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 45%;
`,$=i.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;

  & p {
    color: var(--main-color);
  }

  & button {
    cursor: pointer;
    display: block;
    background-color: transparent;
    border: none;
    color: #fbd13e;
  }
`,lt=i.img`
  box-shadow: 0px 2px 10px 2px rgb(255 255 255 / 35%);
`,Z=i.form`
  display: block;
`,b=i.div`
  position: relative;

  &:not(:first-child) {
    margin-top: 20px;
  }
`,v=i.input`
  width: 100%;
  padding: 10px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff63;
  height: 44px;
  color: var(--main-color);
  outline-color: transparent;
`,j=i.p`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5;
  color: red;
`,U=i.div`
  position: relative;

  & button {
    display: flex;
    align-items: center;

    position: absolute;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    color: var(--main-color);
    transform: translateY(-50%);
    right: 8px;
    border: none;
    background-color: transparent;
    transition: color var(--transition);

    &:hover,
    :focus {
      color: var(--active-color);
    }
  }
`,Q=i.button`
  background-color: #fbd13e;
  box-shadow: 0px 10px 31px 0px rgba(15, 15, 17, 0.2);
  color: #000;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.69;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  padding: 10px;
  width: 187px;
  max-width: 100%;
  border: none;
  margin-top: 40px;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: #917206;
  }
`,X=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,dt=F().shape({email:w().matches(X,"This is an ERROR email").required("Email required"),password:w().min(8,"Password must contain at least 8 characters").required("Password required")}),J=({onClose:t})=>{const[o,d]=r.useState(!1),s=E(),x=z(),g=f(M),m=f(L),u=f(re),p=r.useCallback(async a=>{const c={email:a.email,password:a.password};try{s(ce(c)),u&&x("/user_account")}catch(l){console.log("error: ",l)}},[u,s,x]);return r.useEffect(()=>{g!==""&&!m&&(s(A()),t())},[s,m,t,g]),e.jsx(_,{initialValues:{email:"",password:""},onSubmit:p,validationSchema:dt,children:({values:a,handleChange:c,handleSubmit:l,handleBlur:n,errors:h,touched:k,isSubmitting:C})=>e.jsxs(Z,{onSubmit:l,children:[e.jsxs(b,{children:[e.jsx(v,{type:"email",name:"email",placeholder:"Email",autoComplete:"",value:a.email,onChange:c,onBlur:n}),h.email&&k.email&&e.jsx(j,{children:h.email})]}),e.jsxs(b,{children:[e.jsxs(U,{children:[e.jsx(v,{type:o?"text":"password",name:"password",placeholder:"Password",autoComplete:"",value:a.password,onChange:c,onBlur:n}),e.jsx("button",{type:"button",onClick:()=>d(!o),children:o?e.jsx(Y,{}):e.jsx(K,{})})]}),h.password&&k.password&&e.jsx(j,{children:h.password})]}),e.jsx(Q,{type:"submit",disabled:C,children:"Login Now"})]})})};J.propTypes={onClose:S.func.isRequired};const pt=F().shape({fullName:w().min(3,"Min length 3 symbol").max(30,"Max length 3 symbol").required("Your name and surname are required!"),email:w().matches(X,"This is an ERROR email").required("Email required"),password:w().min(8,"Password must contain at least 8 characters").required("Password required"),tel:je().min(10).required("Phone number required")}),ee=({onClose:t})=>{const[o,d]=r.useState(!1),s=E(),x=z(),g=f(M),m=f(L),u=p=>{const a={fullName:p.fullName,email:p.email,password:p.password,phoneNumber:p.tel};s(pe(a)),x("user_account")};return r.useEffect(()=>{g!==""&&!m&&(s(A()),t(),le.success("You have successfully registered",de))},[s,m,t,g]),e.jsx(_,{initialValues:{fullName:"",email:"",password:"",tel:""},onSubmit:u,validationSchema:pt,children:({values:p,handleChange:a,handleSubmit:c,handleBlur:l,errors:n,touched:h})=>e.jsxs(Z,{onSubmit:c,children:[e.jsxs(b,{children:[e.jsx(v,{type:"text",placeholder:"Full Name",name:"fullName",value:p.fullName,onChange:a,onBlur:l}),n.fullName&&h.fullName&&e.jsx(j,{children:n.fullName})]}),e.jsxs(b,{children:[e.jsx(v,{placeholder:"Phone Number",type:"tel",name:"tel",value:p.tel,onChange:a,onBlur:l}),n.tel&&h.tel&&e.jsx(j,{children:n.tel})]}),e.jsxs(b,{children:[e.jsx(v,{type:"email",placeholder:"Email",name:"email",value:p.email,onChange:a,onBlur:l,autoComplete:""}),n.email&&h.email&&e.jsx(j,{children:n.email})]}),e.jsxs(b,{children:[e.jsxs(U,{children:[e.jsx(v,{type:o?"text":"password",name:"password",placeholder:"Password",value:p.password,onChange:a,onBlur:l,autoComplete:""}),e.jsx("button",{type:"button",onClick:()=>d(!o),children:o?e.jsx(Y,{}):e.jsx(K,{})})]}),n.password&&h.password&&e.jsx(j,{children:n.password})]}),e.jsx(Q,{type:"submit",children:"Register Now"})]})})};ee.propTypes={onClose:S.func.isRequired};const ht="/kindzmarauli/assets/auth_form_img-XNevGHpP.jpg",te=({onClose:t})=>{const[o,d]=r.useState(!0);return e.jsxs(rt,{children:[e.jsxs(ct,{children:[o?e.jsx(J,{onClose:t}):e.jsx(ee,{onClose:t}),o?e.jsxs($,{children:[e.jsx("p",{children:"Don`t have an account?"}),e.jsx("button",{type:"button",onClick:()=>d(!o),children:"Signup now"})]}):e.jsxs($,{children:[e.jsx("p",{children:"Already have an account?"}),e.jsx("button",{type:"button",onClick:()=>d(!o),children:"Login now"})]})]}),e.jsx(lt,{src:ht,alt:"",height:"500",width:"300"})]})};te.propTypes={onClose:S.func.isRequired};const vt=()=>{const[t,o]=r.useState(!1),{toggleModal:d,open:s}=it(),x=f(he),g=f(M),m=z(),u=x.reduce((l,n)=>n.count+l,0),p=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}],a=()=>{if(o(!0),!t)return document.body.style.overflow="hidden"},c=()=>{if(o(!1),t)return document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:e.jsx(O,{children:e.jsxs(Fe,{children:[e.jsxs(_e,{to:"/",children:[e.jsx(Te,{children:e.jsx(G,{})}),"Kindzmarauli"]}),e.jsx(R,{type:"button",className:"open_mobil_menu",onClick:a,children:e.jsx(Le,{})}),e.jsxs(qe,{"data-visibility":t.toString(),children:[e.jsxs(Be,{children:[e.jsx(R,{className:"close_mobil_menu",type:"button",onClick:c,children:e.jsx(Ee,{})}),e.jsxs(Pe,{children:[e.jsx(T,{children:e.jsx(V,{onClick:c})}),p.map(({name:l,to:n})=>e.jsx(T,{children:e.jsx(q,{activeclassname:"active",to:n,onClick:c,children:l})},l))]})]}),e.jsxs(We,{children:[e.jsx(H,{onClick:c}),e.jsxs($e,{children:[e.jsx(R,{type:"button",className:"user_button",onClick:()=>g===""?d():m("user_account"),children:e.jsx(Re,{})}),e.jsxs(De,{children:[e.jsx(q,{to:"basket",onClick:c,children:e.jsx(me,{})}),u>0&&e.jsx(Ie,{children:u})]})]})]})]})]})})}),e.jsx("main",{style:{flexGrow:1},children:e.jsx(r.Suspense,{fallback:e.jsx(ue,{}),children:e.jsx(xe,{})})}),e.jsx(Je,{}),s&&e.jsx(at,{onClose:d,children:e.jsx(te,{onClose:d})})]})};export{vt as default};
