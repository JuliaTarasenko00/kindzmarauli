import{g as o,j as r}from"./index-XNqRytVN.js";import{P as e}from"./index-SQjR-kRl.js";import{M as n}from"./MarkupComponent-l9qLE5Mr.js";const i=o.p`
  color: var(--main-color);
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 20px;

  &.empty {
    color: var(--active-color);
    font-weight: 400;
  }
`,m=({specifics:t,title:s})=>r.jsxs(r.Fragment,{children:[r.jsx(i,{children:s}),t.length>0?r.jsx(n,{list:t}):r.jsx(i,{className:"empty",children:" The list is empty"})]});m.propTypes={specifics:e.arrayOf(e.shape({name:e.string,discounted:e.number,description:e.string,price:e.number,gram:e.number,specificsDish:e.object,image:e.string,_id:e.string})).isRequired,title:e.string};export{m as R};
