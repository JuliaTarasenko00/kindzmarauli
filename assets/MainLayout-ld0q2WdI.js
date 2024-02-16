import{s,j as r,c as i,u as n,J as a,K as c,b as l,L as p,O as d}from"./index-iVvS-PYO.js";import{F as x}from"./FilterForm-3cYj8GJ1.js";import"./index-oWf2afwM.js";import"./index.esm-MbdyQBmQ.js";import"./index.esm-5XpktMu4.js";import"./Search.styled-A2A5agli.js";const u=s.aside`
  height: 100vh;
  width: 300px;
  background-color: rgb(240, 255, 255);
  padding: 50px;
  border-radius: 20px;
  box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`,h=()=>r.jsxs(u,{children:[r.jsx("p",{children:"Hot Dishes"}),r.jsx("p",{children:"Salads"}),r.jsx("p",{children:"Desserts"}),r.jsx("p",{children:"Drinks"})]}),g=s.div`
  display: flex;
`,j=s.main`
  flex: 1;
`,m=s.div`
  height: max-content;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,b=s.div`
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
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  border-radius: 15px;
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
    background-color: transparent;
  }
`,O=()=>{const t=i(),o=n(a);return r.jsxs(g,{children:[r.jsx(h,{}),r.jsxs(j,{children:[r.jsxs(m,{children:[r.jsx(x,{}),r.jsxs(b,{children:[r.jsx(e,{children:o==null?void 0:o.fullName}),r.jsx(e,{children:o==null?void 0:o.email}),r.jsx(f,{type:"button",onClick:()=>t(c()),children:"Log Out"})]})]}),r.jsx(l.Suspense,{fallback:r.jsx(p,{}),children:r.jsx(d,{})})]})]})};export{O as default};
