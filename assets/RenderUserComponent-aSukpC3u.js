import{g as n,j as r}from"./index-q9DV3WYH.js";import{P as e}from"./index-e2rbOEQ5.js";import{C as o}from"./CreatedMarkup-e2idYp5D.js";const i=n.p`
  color: var(--main-color);
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  text-transform: uppercase;

  &.empty {
    color: var(--active-color);
    text-transform: capitalize;
    margin-top: 20px;
    font-size: 20px;
  }
`,a=({specifics:t,title:s})=>r.jsxs(r.Fragment,{children:[r.jsx(i,{children:s}),t.length>0?r.jsx(o,{dishes:t}):r.jsx(i,{className:"empty",children:" The list is empty"})]});a.propTypes={specifics:e.arrayOf(e.shape({name:e.string,discounted:e.number,description:e.string,price:e.number,gram:e.number,specificsDish:e.object,image:e.string,_id:e.string})).isRequired,title:e.string};export{a as R};
