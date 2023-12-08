import{s as n,j as i,C as m}from"./index-7dBNNnUw.js";import{P as t,a as l}from"./selector-ePtVKtMq.js";const a=n.h3`
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
  gap: 20px;
  margin: 28px auto 0;
  justify-content: center;

  @media screen and (min-width: 768px) {
    column-gap: 15px;
    max-width: 960px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
  }
`,h=n.li`
  display: flex;
  flex-direction: column;
  width: 110px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,u=n.p`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: var(--main-color);

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,f=n.div`
  flex-grow: 1;
`,w=n.img`
  border-radius: 5px;
  height: 95px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
`,b=n.h4`
  color: var(--main-color);
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1400px) {
    font-size: 20px;
    margin-top: 15px;
  }
`,v=n.p`
  width: 37px;
  padding: 2px 5px;
  text-align: center;
  border-radius: 2px;
  background-color: var(--gram-background);
  color: var(--main-color);
  font-size: 9px;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 47px;
    font-size: 13px;
  }
`,j=n.p`
  color: var(--main-color);
  font-size: 8px;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`,z=n.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,k=n.p`
  color: var(--main-color);
  font-size: 10px;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,y=n.p`
  color: var(--main-color);
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`,D=n.button`
  cursor: pointer;
  border: none;
  color: #000;
  padding: 3px;
  padding-bottom: 1px;
  text-align: center;
  background-color: var(--button-basket-background);
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--button-basket-background-active);
    color: var(--button-basket-color-active);
  }

  & svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 5px;
    padding-bottom: 3px;
  }
`;n.p`
  color: var(--main-color);
  font-size: 9px;
  font-weight: 500;
  line-height: 1;
  width: 37px;
  background-color: var(----gram-background);
  text-align: center;
  border-radius: 2px;
  padding: 2px 0;
  margin-bottom: 23px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
    width: 47px;
  }
`;const P=s=>{const{title:o,dishes:p,titleHotDishes:r}=s;return i.jsxs(m,{children:[o&&i.jsx(a,{children:o}),r&&i.jsx(a,{className:"hot_dishes",children:r}),i.jsx(g,{children:p.map(e=>{const c=e.discounted?Number(e.discounted):0,d=e.price*c/100,x=Math.floor(e.price-d);return i.jsxs(h,{children:[e.discounted&&i.jsxs(u,{children:[e.discounted,"%"]}),i.jsxs(f,{children:[i.jsx(w,{src:e.image,alt:e.name,loading:"lazy",width:"245"}),i.jsx(b,{children:e.name}),i.jsxs(v,{children:[e.gram,"g"]}),i.jsx(j,{children:e.description})]}),i.jsxs(z,{children:[i.jsxs("div",{children:[(e==null?void 0:e.discounted)&&i.jsxs(y,{children:[e.price,"$"]}),i.jsxs(k,{children:[x,"$"]})]}),i.jsx(D,{type:"button",children:i.jsx(l,{})})]})]},e.id)})})]})};P.propTypes={title:t.string,titleHotDishes:t.string,dishes:t.arrayOf(t.shape({name:t.string.isRequired,description:t.string.isRequired,price:t.number.isRequired,gram:t.number.isRequired,specificsDish:t.string,image:t.string.isRequired,id:t.string.isRequired})).isRequired};export{P as C};
