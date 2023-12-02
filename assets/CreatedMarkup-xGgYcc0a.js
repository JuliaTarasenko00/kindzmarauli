import{s as r,j as o,C as x}from"./index-47n2C3uy.js";import{a as d}from"./selector-FzZYIeaJ.js";r.section``;const e=r.h3`
  width: 643px;
  color: var(--main-color);
  font-size: 80px;
  font-weight: 500;
  line-height: 1.12;

  margin: 0 auto;

  &.hot_dishes {
    margin: 0;
  }
`,g=r.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 20px;
  max-width: 1440px;
  margin: 28px auto 0;
  justify-content: center;
`,m=r.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  position: relative;
`,u=r.p`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: white;
`,h=r.div`
  flex-grow: 1;
`,f=r.img`
  border-radius: 5px;
  height: 245px;
  object-fit: cover;
`,b=r.h4`
  color: var(--main-color);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 15px;
`,v=r.p`
  width: 47px;
  padding: 2px 5px;
  text-align: center;
  border-radius: 2px;
  background-color: var(--gram-background);
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 10px;
`,j=r.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;
`,w=r.div`
  display: flex;
  align-items: center;
  gap: 18px;
`,k=r.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
`,y=r.p`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 10px;
`,z=r.button`
  cursor: pointer;
  border: none;
  font-size: 25px;
  padding: 5px;
  padding-bottom: 0;
  text-align: center;
  background-color: var(--button-basket-background);
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--button-basket-background-active);
    color: var(--button-basket-color-active);
  }
`;r.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  width: 47px;
  background-color: var(----gram-background);
  text-align: center;
  border-radius: 2px;
  padding: 2px 0;
  margin-bottom: 23px;
`;const C=a=>{const{title:n,dishes:c,titleHotDishes:i}=a;return o.jsxs(x,{children:[n&&o.jsx(e,{children:n}),i&&o.jsx(e,{className:"hot_dishes",children:i}),o.jsx(g,{children:c.map(t=>{const s=t.discounted?Number(t.discounted):0,l=t.price*s/100,p=Math.floor(t.price-l);return o.jsxs(m,{children:[t.discounted&&o.jsxs(u,{children:[t.discounted,"%"]}),o.jsxs(h,{children:[o.jsx(f,{src:t.image,alt:t.name,loading:"lazy",width:"245"}),o.jsx(b,{children:t.name}),o.jsxs(v,{children:[t.gram,"g"]}),o.jsx(j,{children:t.description})]}),o.jsxs(w,{children:[o.jsxs("div",{children:[(t==null?void 0:t.discounted)&&o.jsxs(y,{children:[t.price,"$"]}),o.jsxs(k,{children:[p,"$"]})]}),o.jsx(z,{type:"button",children:o.jsx(d,{})})]})]},t.id)})})]})};export{C};
