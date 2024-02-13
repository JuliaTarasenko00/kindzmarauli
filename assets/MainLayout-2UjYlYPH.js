import{s,j as r,c as n,u as i,J as a,K as c,b as d,L as l,O as p}from"./index-1bHXgBHC.js";import{F as x}from"./FilterForm-K4a2cglr.js";import"./index-KkZWmbZ6.js";import"./index.esm-QnaHDf6K.js";import"./index.esm-PcmTQyvQ.js";import"./Search.styled-0fN9blL8.js";const u=s.aside`
  height: 100vh;
  width: 300px;
  background-color: rgb(240, 255, 255);
  padding: 50px;
  border-radius: 20px;
  box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`,h=()=>r.jsxs(u,{children:[r.jsx("p",{children:"Hot Dishes"}),r.jsx("p",{children:"Salads"}),r.jsx("p",{children:"Desserts"}),r.jsx("p",{children:"Drinks"})]}),j=s.div`
  display: flex;
`,m=s.main`
  flex: 1;
`,b=s.div`
  height: max-content;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,g=s.div`
  display: flex;
  align-items: center;
`,e=s.p`
  color: var(--main-color);
  margin-right: 15px;
`,f=s.button`
  cursor: pointer;
  border: none;
  background-color: var(--active-color);
  color: #000;
  padding: 10px 8px;
  border-radius: 15px;
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
    background-color: transparent;
  }
`,O=()=>{const t=n(),o=i(a);return r.jsxs(j,{children:[r.jsx(h,{}),r.jsxs(m,{children:[r.jsxs(b,{children:[r.jsx(x,{}),r.jsxs(g,{children:[r.jsx(e,{children:o==null?void 0:o.fullName}),r.jsx(e,{children:o==null?void 0:o.email}),r.jsx(f,{type:"button",onClick:()=>t(c()),children:"Log Out"})]})]}),r.jsx(d.Suspense,{fallback:r.jsx(l,{}),children:r.jsx(p,{})})]})]})};export{O as default};
