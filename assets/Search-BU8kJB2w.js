import{s as r,u as e,H as s,d as a,j as t,C as i}from"./index-1bHXgBHC.js";import{M as c}from"./MarkupComponent-UsIuKk9h.js";import"./index-KkZWmbZ6.js";const u=r.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: var(--active-color);
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
  }
`,d=()=>{const o=e(s),n=a();return t.jsx("section",{children:t.jsxs(i,{children:[t.jsx(u,{type:"button",onClick:()=>n("/admin"),children:"Return to thr entire menu"}),o.length===0?t.jsx("p",{children:"Not Found"}):t.jsx(c,{list:o})]})})};export{d as default};
