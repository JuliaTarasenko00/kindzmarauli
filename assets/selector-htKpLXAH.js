import{R as s,e as u,f as g,s as e,j as o,C as h}from"./index-y_V6WPh4.js";import{b as m}from"./index.esm-Y0APe1V2.js";function p(n=s){const r=n===s?u:g(n);return function(){const{store:i}=r();return i}}const f=p();function b(n=s){const r=n===s?f:p(n);return function(){return r().dispatch}}const N=b();e.section``;const c=e.h3`
  width: 643px;
  color: var(--main-color);
  font-size: 80px;
  font-weight: 500;
  line-height: 1.12;

  margin: 0 auto;

  &.hot_dishes {
    margin: 0;
  }
`,v=e.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 20px;
  max-width: 1440px;
  margin: 28px auto 0;
  justify-content: center;
`,j=e.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  position: relative;
`,k=e.p`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: white;
`,w=e.div`
  flex-grow: 1;
`,D=e.img`
  border-radius: 5px;
  height: 245px;
  object-fit: cover;
`,y=e.h4`
  color: var(--main-color);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 15px;
`,z=e.p`
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
`,C=e.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;
`,P=e.div`
  display: flex;
  align-items: center;
  gap: 18px;
`,R=e.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
`,H=e.p`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 10px;
`,S=e.button`
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
`;e.p`
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
`;const B=n=>{const{title:r,dishes:a,titleHotDishes:i}=n;return o.jsxs(h,{children:[r&&o.jsx(c,{children:r}),i&&o.jsx(c,{className:"hot_dishes",children:i}),o.jsx(v,{children:a.map(t=>{const l=t.discounted?Number(t.discounted):0,x=t.price*l/100,d=Math.floor(t.price-x);return o.jsxs(j,{children:[t.discounted&&o.jsxs(k,{children:[t.discounted,"%"]}),o.jsxs(w,{children:[o.jsx(D,{src:t.image,alt:t.name,loading:"lazy",width:"245"}),o.jsx(y,{children:t.name}),o.jsxs(z,{children:[t.gram,"g"]}),o.jsx(C,{children:t.description})]}),o.jsxs(P,{children:[o.jsxs("div",{children:[(t==null?void 0:t.discounted)&&o.jsxs(H,{children:[t.price,"$"]}),o.jsxs(R,{children:[d,"$"]})]}),o.jsx(S,{type:"button",children:o.jsx(m,{})})]})]},t.id)})})]})},G=n=>n.dishes.popularDishes,I=n=>n.dishes.hotDishes,L=n=>n.dishes.isLoading;export{B as C,I as h,L as l,G as p,N as u};
