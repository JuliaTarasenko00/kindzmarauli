import{h as x,s as t,j as n,C as m,d as l}from"./index-RSaVuNYO.js";import{P as e,a as h}from"./index-YRwzIxzu.js";import{u as g}from"./selector-8zvn1Lij.js";const u=s=>{const r=g();return a=>{const d=s.find(i=>i.id===a);r(x(d))}},p=t.h3`
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
`,f=t.ul`
  max-width: 333px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 28px auto 0;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 15px;
    max-width: 690px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 940px;
    gap: 20px;
  }
`,w=t.li`
  display: flex;
  flex-direction: column;
  width: 145px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,b=t.p`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 3vh;
  font-weight: 500;
  line-height: 1.2;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: var(--main-color);

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,v=t.div`
  flex-grow: 1;
`,j=t.img`
  border-radius: 5px;
  height: 95px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
`,k=t.h4`
  color: var(--main-color);
  font-size: 2.5vh;
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
`,z=t.p`
  width: 7vh;
  padding: 2px 5px;
  text-align: center;
  border-radius: 2px;
  background-color: var(--gram-background);
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 47px;
    font-size: 13px;
  }
`,D=t.p`
  color: var(--main-color);
  font-size: 1.8vh;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`,y=t.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,P=t.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,B=t.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`,C=t.button`
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
`;t.p`
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
`;const T=s=>{const{title:r,dishes:o,titleDishes:a}=s,d=u(o);return n.jsxs(m,{children:[r&&n.jsx(p,{children:r}),a&&n.jsx(p,{className:"hot_dishes",children:a}),n.jsx(f,{children:o==null?void 0:o.map(i=>{const{finalPrice:c}=l(i);return n.jsxs(w,{children:[(i==null?void 0:i.discounted)!==0&&n.jsxs(b,{children:[i.discounted,"%"]}),n.jsxs(v,{children:[n.jsx(j,{src:i.image,alt:i.name,loading:"lazy",width:"245"}),n.jsx(k,{children:i.name}),n.jsxs(z,{children:[i.gram,"g"]}),n.jsx(D,{children:i.description})]}),n.jsxs(y,{children:[n.jsxs("div",{children:[(i==null?void 0:i.discounted)!==0&&n.jsxs(B,{children:[i.price,"$"]}),n.jsxs(P,{children:[c,"$"]})]}),n.jsx(C,{type:"button",onClick:()=>d(i.id),children:n.jsx(h,{})})]})]},i.id)})})]})};T.propTypes={title:e.string,titleHotDishes:e.string,dishes:e.arrayOf(e.shape({name:e.string,description:e.string,price:e.number,gram:e.number,specificsDish:e.string,image:e.string,id:e.string})).isRequired};export{T as C,u};
