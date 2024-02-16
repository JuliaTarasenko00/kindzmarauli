import{s as o,g as a,j as r,q as s}from"./index-iVvS-PYO.js";import{P as n}from"./index-oWf2afwM.js";const p=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`,d=o.li`
  max-width: 240px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240 255 255);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fbd13e;
`,l=o.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 150px);
`,x=o.div`
  flex-grow: 1;
`,g=o.img`
  object-fit: cover;
  height: 150px;
`,m=o.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--main-color-dark);
  margin-bottom: 5px;
  text-transform: uppercase;
`,h=o.p`
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  margin-bottom: 10px;
`,u=o.p`
  width: max-content;
  padding: 5px;
  background-color: gray;
  border-radius: 5px;
  color: var(--main-color);
  margin-bottom: 15px;
`,f=o.div`
  width: 100%;
`,b=o.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  color: var(--main-color-dark);
`,e=o.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  color: gray;

  &:not(:first-child) {
    margin-bottom: 10px;
  }
`,j=o(a)`
  cursor: pointer;
  margin-left: auto;
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
`,v=({list:t})=>r.jsx(p,{children:t.map(i=>{const{finalPrice:c}=s(i);return r.jsxs(d,{children:[r.jsx(g,{src:i.image,alt:i.name,loading:"lazy",width:"260"}),r.jsxs(l,{children:[r.jsxs(x,{children:[r.jsx(m,{children:i.name}),r.jsx(h,{children:i.description}),r.jsxs(u,{children:[i.gram,"g"]})]}),r.jsxs(f,{children:[r.jsxs("div",{children:[i.discounted!==0&&r.jsxs(r.Fragment,{children:[r.jsxs(e,{children:["Old price: ",i.price," "]}),r.jsxs(e,{children:["Discounted: ",i.discounted,"%"]})]}),r.jsxs(b,{children:["Price: ",c]})]}),r.jsx(j,{to:`/admin/change/${i._id}`,children:"Change"})]})]})]},i._id)})});v.propTypes={list:n.arrayOf(n.shape({name:n.string,discounted:n.number,description:n.string,price:n.number,gram:n.number,specificsDish:n.object,image:n.string,_id:n.string})).isRequired};export{v as M};
