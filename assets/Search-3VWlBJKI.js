import{s as r,u as e,H as s,d as a,j as t,C as i}from"./index-OF7pzLKL.js";import{M as c}from"./MarkupComponent-mmAecPt3.js";import"./index-_JRL6Qm-.js";const u=r.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: var(--active-color);
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  transition: color var(--transition);
  margin-bottom: 15px;

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
  }
`,h=()=>{const o=e(s),n=a();return t.jsx("section",{style:{padding:"30px 0"},children:t.jsxs(i,{children:[t.jsx(u,{type:"button",onClick:()=>n("/admin"),children:"Return to thr entire menu"}),o.length===0?t.jsx("p",{children:"Not Found"}):t.jsx(c,{list:o})]})})};export{h as default};
