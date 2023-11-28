import{R as s,c as l,d as x,s as t,j as o,C as d}from"./index-MvNcwale.js";import{c as u}from"./index.esm-b37Nqo_s.js";function p(e=s){const n=e===s?l:x(e);return function(){const{store:i}=n();return i}}const h=p();function g(e=s){const n=e===s?h:p(e);return function(){return n().dispatch}}const H=g();t.section``;const c=t.h3`
  width: 643px;
  color: var(--main-color);
  font-size: 80px;
  font-weight: 500;
  line-height: 1.12;

  margin: 0 auto;

  &.hot_dishes {
    margin: 0;
  }
`,m=t.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 20px;
  max-width: 1440px;
  margin: 28px auto 0;
  justify-content: center;
`,f=t.li`
  display: flex;
  flex-direction: column;
  width: 220px;
`,b=t.div`
  flex-grow: 1;
`,v=t.img`
  border-radius: 5px;
  height: 245px;
  object-fit: cover;
`,j=t.h4`
  color: var(--main-color);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 15px;
`,k=t.p`
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
`,w=t.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;
`,D=t.div`
  display: flex;
  align-items: center;
  gap: 18px;
`,y=t.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
`,z=t.p`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
`,C=t.button`
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
`;t.p`
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
`;const S=e=>{const{title:n,dishes:a,titleHotDishes:i}=e;return o.jsxs(d,{children:[n&&o.jsx(c,{children:n}),i&&o.jsx(c,{className:"hot_dishes",children:i}),o.jsx(m,{children:a.map(r=>o.jsxs(f,{children:[o.jsxs(b,{children:[o.jsx(v,{src:r.image,alt:r.name,loading:"lazy",width:"245"}),o.jsx(j,{children:r.name}),o.jsxs(k,{children:[r.gram,"g"]}),o.jsx(w,{children:r.description}),(r==null?void 0:r.discountedPrice)&&o.jsxs(z,{children:[r.discountedPrice,"$"]})]}),o.jsxs(D,{children:[o.jsxs(y,{children:[r.price,"$"]}),o.jsx(C,{type:"button",children:o.jsx(u,{})})]})]},r.id))})]})},$=e=>e.dishes.popularDishes,B=e=>e.dishes.hotDishes,G=e=>e.dishes.isLoading;export{S as C,B as h,G as l,$ as p,H as u};
