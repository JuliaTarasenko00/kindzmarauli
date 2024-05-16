import{g as n,u as e,F as i,d as s,j as t,C as a}from"./index-Y6wEfcXi.js";import{M as c}from"./MarkupComponent-Hpg2SMWq.js";import"./index-iTD9QEn1.js";import"./index.esm-xP3gH4FX.js";import"./MarkupComponent.styled-k7prUK9F.js";const u=n.button`
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
`,g=()=>{const o=e(i),r=s();return t.jsx("section",{style:{padding:"30px 0"},children:t.jsxs(a,{children:[t.jsx(u,{type:"button",onClick:()=>r("/admin"),children:"Return to thr entire menu"}),o.length===0?t.jsx("p",{children:"Not Found"}):t.jsx(c,{list:o})]})})};export{g as default};
