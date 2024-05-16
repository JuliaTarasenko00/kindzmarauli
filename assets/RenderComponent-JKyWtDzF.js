import{g as o,k as p,j as r,h as c}from"./index-Y6wEfcXi.js";import{P as i}from"./index-iTD9QEn1.js";import{a as d}from"./index.esm-bmORkoJ8.js";import{M as l}from"./MarkupComponent-Hpg2SMWq.js";const t=o.p`
  color: var(--main-color);
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 20px;

  &.empty {
    color: var(--active-color);
    font-weight: 400;
  }
`,m=o.div`
  max-width: 240px;
  width: 100%;
  height: 240px;
  background-color: rgb(240 255 255);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fbd13e;
  margin-top: 20px;

  & p {
    color: #000;
    text-align: center;
    padding-top: 20px;
    font-weight: 500;
    font-size: 17px;
    line-height: 1;
  }

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transition: transform var(--transition);

    & svg {
      display: block;
      color: #0ada0a;
      width: 80px;
      height: 80px;
      transition: color var(--transition);

      &:hover,
      :focus {
        color: green;
      }
    }

    &:hover,
    :focus {
      transform: scale(1.03) translateZ(10px);
    }
  }
`,h=({specifics:e,title:n,value:s})=>{const a=p();return r.jsxs(r.Fragment,{children:[r.jsx(t,{children:n}),e.length>0?r.jsx(l,{list:e}):r.jsx(t,{className:"empty",children:" The list is empty"}),r.jsx(m,{children:r.jsxs(c,{to:"/admin/add_newDish",state:{from:a,value:s},children:[r.jsx("p",{children:"Add new dish"}),r.jsx(d,{})]})})]})};h.propTypes={specifics:i.arrayOf(i.shape({name:i.string,discounted:i.number,description:i.string,price:i.number,gram:i.number,specificsDish:i.object,image:i.string,_id:i.string})).isRequired,title:i.string.isRequired,value:i.string.isRequired};export{h as R};
