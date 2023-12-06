import{s as n,j as o,C as x}from"./index-_AmBHhSq.js";import{a as d}from"./selector-MLK-iq7r.js";const e=n.h3`
  color: var(--main-color);
  font-size: 30px;
  font-weight: 500;
  line-height: 1.12;
  margin: 20px auto 0;

  @media screen and (min-width: 768px) {
    width: 643px;
    font-size: 80px;
  }

  &.hot_dishes {
    margin: 0;
  }
`,g=n.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  margin: 28px auto 0;
  justify-content: center;

  @media screen and (min-width: 768px) {
    column-gap: 15px;
    max-width: 960px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
  }
`,m=n.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  position: relative;
`,u=n.p`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: white;
`,h=n.div`
  flex-grow: 1;
`,f=n.img`
  border-radius: 5px;
  height: 245px;
  object-fit: cover;
`,b=n.h4`
  color: var(--main-color);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 15px;
`,v=n.p`
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
`,w=n.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;
`,j=n.div`
  display: flex;
  align-items: center;
  gap: 18px;
`,k=n.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
`,z=n.p`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 10px;
`,y=n.button`
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
`;n.p`
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
`;const C=a=>{const{title:r,dishes:c,titleHotDishes:i}=a;return o.jsxs(x,{children:[r&&o.jsx(e,{children:r}),i&&o.jsx(e,{className:"hot_dishes",children:i}),o.jsx(g,{children:c.map(t=>{const s=t.discounted?Number(t.discounted):0,p=t.price*s/100,l=Math.floor(t.price-p);return o.jsxs(m,{children:[t.discounted&&o.jsxs(u,{children:[t.discounted,"%"]}),o.jsxs(h,{children:[o.jsx(f,{src:t.image,alt:t.name,loading:"lazy",width:"245"}),o.jsx(b,{children:t.name}),o.jsxs(v,{children:[t.gram,"g"]}),o.jsx(w,{children:t.description})]}),o.jsxs(j,{children:[o.jsxs("div",{children:[(t==null?void 0:t.discounted)&&o.jsxs(z,{children:[t.price,"$"]}),o.jsxs(k,{children:[l,"$"]})]}),o.jsx(y,{type:"button",children:o.jsx(d,{})})]})]},t.id)})})]})};export{C};
