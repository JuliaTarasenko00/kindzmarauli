import{g as e,i as a,j as o,c,u as l,H as p,I as d,b as x,O as m}from"./index-DfdUAF4G.js";import{F as h}from"./FilterForm--TMZLPBQ.js";import{L as u}from"./LoaderForPage-PIrSqU2a.js";import"./index-y0w8uGOl.js";import"./index.esm-QOba4426.js";import"./index.esm-b00E5xvl.js";import"./Search.styled-OYaMw3dH.js";const g=e.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  width: 300px;
  background-color: rgb(240, 255, 255);
  padding: 50px;
  border-radius: 20px;
  box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`,v=e(a)`
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }

  &.logo {
    color: #0e1b95;
    font-weight: 700;
    text-transform: uppercase;
  }
`,f=()=>{const t=[{to:"/admin",name:"Kindzmarauli",classLogo:"logo"},{to:"add_newDish",name:"Add a new dish"},{to:"hot_dishes",name:"Hot Dishes"},{to:"appetizer",name:"Appetizer"},{to:"desserts",name:"Desserts"},{to:"drinks",name:"Drinks"}];return o.jsx(g,{children:t.map(({to:r,name:s,classLogo:n})=>o.jsx(v,{to:r,className:n,activeclassname:"active",children:s},r))})},b=e.div`
  display: flex;
`,j=e.main`
  flex: 1;
`,k=e.div`
  height: max-content;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,w=e.div`
  display: flex;
  align-items: center;
`,i=e.p`
  color: var(--main-color);
  margin-right: 15px;
`,L=e.button`
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
`,S=()=>{const t=c(),r=l(p);return o.jsxs(b,{children:[o.jsx(f,{}),o.jsxs(j,{children:[o.jsxs(k,{children:[o.jsx(h,{}),o.jsxs(w,{children:[o.jsx(i,{children:r==null?void 0:r.fullName}),o.jsx(i,{children:r==null?void 0:r.email}),o.jsx(L,{type:"button",onClick:()=>t(d()),children:"Log Out"})]})]}),o.jsx(x.Suspense,{fallback:o.jsx(u,{}),children:o.jsx(m,{})})]})]})};export{S as default};
