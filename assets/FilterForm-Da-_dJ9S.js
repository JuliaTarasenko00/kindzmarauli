import{G as b,c as F,d as g,k as v,J as k,b as m,K as E,j as e}from"./index-SACi1fX3.js";import{P as y}from"./index-kwmW7uRs.js";import{c as B,a as D,F as L,b as P}from"./index.esm--hxwaIQ1.js";import{A as W}from"./index.esm-N1FmVpKH.js";import{a as C,W as T,I as q,E as I,b as N,D as V,B as A}from"./Search.styled-qOX9_Jk6.js";function G(a){return b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(a)}const $=B().shape({search:D().min(3,"Enter more than 3 characters").max(50,"Too Long!").required("Enter the name of the dish")}),w=({onClick:a})=>{const n=F(),u=g(),{pathname:i}=v(),[p,h]=k(),s=p.get("q"),[t,d]=m.useState(s??"");function x(r,{setSubmitting:c}){const o=r.search.trim();d(o),u("search"),c(!1),a!==void 0&&a()}return m.useEffect(()=>{i.includes("search")&&(h({q:t}),s&&n(E(s)))},[n,i,s,h,t]),e.jsx(C,{children:e.jsx(L,{initialValues:{search:t},onSubmit:x,validationSchema:$,children:({values:r,handleChange:c,handleSubmit:o,resetForm:f,errors:l,touched:j,isSubmitting:S})=>e.jsx(P,{onSubmit:o,children:e.jsxs(T,{children:[e.jsx(q,{type:"text",name:"search",placeholder:"Search...",onChange:c,value:r.search}),l.search&&j.search&&e.jsx(I,{children:l.search}),e.jsxs(N,{children:[r.search!==""&&e.jsx(V,{type:"button",onClick:()=>{f({values:{search:""}})},className:"delete",children:e.jsx(W,{})}),e.jsx(A,{className:"search",type:"submit",disabled:S,children:e.jsx(G,{})})]})]})})})})};w.propTypes={onClick:y.func};export{w as F};