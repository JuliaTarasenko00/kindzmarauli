import{s as o,g as a,c as p,j as r,q as l,S as d}from"./index-Q_hm5tJF.js";import{P as e}from"./index-b-5InDKJ.js";import{b as x}from"./index.esm-TE2jcJvv.js";const g=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`,m=o.li`
  max-width: 240px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240 255 255);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fbd13e;
`,h=o.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 150px);
`,u=o.div`
  flex-grow: 1;
`,f=o.img`
  object-fit: cover;
  height: 150px;
`,b=o.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--main-color-dark);
  margin-bottom: 5px;
  text-transform: uppercase;
`,j=o.p`
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  margin-bottom: 10px;
`,v=o.p`
  width: max-content;
  padding: 5px;
  background-color: gray;
  border-radius: 5px;
  color: var(--main-color);
  margin-bottom: 15px;
`,k=o.div`
  width: 100%;
`,w=o.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  color: var(--main-color-dark);
`,t=o.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  color: gray;

  &:not(:first-child) {
    margin-bottom: 10px;
  }
`,y=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`,D=o(a)`
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
`,P=o.button`
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
`,z=({list:n})=>{const c=p();return r.jsx(g,{children:n.map(i=>{const{finalPrice:s}=l(i);return r.jsxs(m,{children:[r.jsx(f,{src:i.image,alt:i.name,loading:"lazy",width:"260"}),r.jsxs(h,{children:[r.jsxs(u,{children:[r.jsx(b,{children:i.name}),r.jsx(j,{children:i.description}),r.jsxs(v,{children:[i.gram,"g"]})]}),r.jsxs(k,{children:[r.jsxs("div",{children:[i.discounted!==0&&r.jsxs(r.Fragment,{children:[r.jsxs(t,{children:["Old price: ",i.price," "]}),r.jsxs(t,{children:["Discounted: ",i.discounted,"%"]})]}),r.jsxs(w,{children:["Price: ",s]})]}),r.jsxs(y,{children:[r.jsx(P,{type:"button",onClick:()=>c(d(i._id)),children:r.jsx(x,{})}),r.jsx(D,{to:`/admin/change/${i._id}`,children:"Change"})]})]})]})]},i._id)})})};z.propTypes={list:e.arrayOf(e.shape({name:e.string,discounted:e.number,description:e.string,price:e.number,gram:e.number,specificsDish:e.object,image:e.string,_id:e.string})).isRequired};export{z as M};
