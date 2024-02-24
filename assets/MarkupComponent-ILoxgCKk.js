import{g as r,h as l,c as d,k as x,j as o,s as g,a1 as h}from"./index-dEfuOcOi.js";import{P as t}from"./index-49JrwbJf.js";import{b as m}from"./index.esm-bib8qEkM.js";const u=r.h2`
  color: var(--main-color);
  font-size: 20px;
  line-height: 1;
  margin-bottom: 20px;
`,f=r.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({["$positionContent"]:i})=>i==="true"?"start":"center"};
  gap: 20px;
`,b=r.li`
  max-width: 240px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240 255 255);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fbd13e;
`,j=r.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 150px);
`,v=r.div`
  flex-grow: 1;
`,k=r.img`
  object-fit: cover;
  height: 150px;
`,w=r.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--main-color-dark);
  margin-bottom: 5px;
  text-transform: uppercase;
`,y=r.p`
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  margin-bottom: 10px;
`,D=r.p`
  width: max-content;
  padding: 5px;
  background-color: gray;
  border-radius: 5px;
  color: var(--main-color);
  margin-bottom: 15px;
`,P=r.div`
  width: 100%;
`,z=r.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  color: var(--main-color-dark);
`,c=r.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  color: gray;

  &:not(:first-child) {
    margin-bottom: 10px;
  }
`,C=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`,O=r(l)`
  cursor: pointer;
  display: block;
  background-color: var(--active-color);
  border: none;
  color: var(--main-color-dark);
  max-width: 84px;
  padding: 10px;
  border-radius: 41px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
    background-color: #000;
  }
`,W=r.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  color: red;
  max-width: 84px;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: #4f0f0f;
  }

  & svg {
    width: 30px;
    height: 30px;
  }
`,_=({list:i,title:e})=>{const s=d(),a=x();return o.jsxs(o.Fragment,{children:[e&&o.jsx(u,{children:e}),o.jsx(f,{$positionContent:(!!e).toString(),children:i==null?void 0:i.map(n=>{const{finalPrice:p}=g(n);return o.jsxs(b,{children:[o.jsx(k,{src:n.image,alt:n.name,loading:"lazy",width:"260"}),o.jsxs(j,{children:[o.jsxs(v,{children:[o.jsx(w,{children:n.name}),o.jsx(y,{children:n.description}),o.jsxs(D,{children:[n.gram,"g"]})]}),o.jsxs(P,{children:[o.jsxs("div",{children:[n.discounted!==0&&o.jsxs(o.Fragment,{children:[o.jsxs(c,{children:["Old price: ",n.price," "]}),o.jsxs(c,{children:["Discounted: ",n.discounted,"%"]})]}),o.jsxs(z,{children:["Price: ",p]})]}),o.jsxs(C,{children:[o.jsx(W,{type:"button",onClick:()=>s(h(n._id)),children:o.jsx(m,{})}),o.jsx(O,{to:`/admin/change/${n._id}`,state:{from:a},children:"Change"})]})]})]})]},n._id)})})]})};_.propTypes={list:t.arrayOf(t.shape({name:t.string,discounted:t.number,description:t.string,price:t.number,gram:t.number,specificsDish:t.object,image:t.string,_id:t.string})).isRequired,title:t.string};export{_ as M};
