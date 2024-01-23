import{e as x,y as h,s as n,j as i,C as l,q as m,k as g}from"./index-g-uMoczh.js";import{P as e}from"./index-n0OxSdNk.js";const u=s=>{const r=x();return a=>{const d=s.find(t=>t._id===a);r(h(d))}},c=n.h3`
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
`,f=n.ul`
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
`,b=n.li`
  display: flex;
  flex-direction: column;
  width: 145px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,w=n.p`
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
`,v=n.div`
  flex-grow: 1;
`,k=n.img`
  border-radius: 5px;
  height: 95px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
`,j=n.h4`
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
`,z=n.p`
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
`,D=n.p`
  color: var(--main-color);
  font-size: 1.8vh;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`,y=n.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,P=n.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,B=n.p`
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
`,_=n.button`
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

  &:active {
    color: var(--button-basket-background-active);
    background-color: #000;
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
`;const C=s=>{const{title:r,dishes:o,titleDishes:a}=s,d=u(o);return i.jsxs(l,{children:[r&&i.jsx(c,{children:r}),a&&i.jsx(c,{className:"hot_dishes",children:a}),i.jsx(f,{children:o==null?void 0:o.map(t=>{const{finalPrice:p}=m(t);return i.jsxs(b,{children:[(t==null?void 0:t.discounted)!==0&&i.jsxs(w,{children:[t.discounted,"%"]}),i.jsxs(v,{children:[i.jsx(k,{src:t.image,alt:t.name,loading:"lazy",width:"245"}),i.jsx(j,{children:t.name}),i.jsxs(z,{children:[t.gram,"g"]}),i.jsx(D,{children:t.description})]}),i.jsxs(y,{children:[i.jsxs("div",{children:[t.discounted!==0&&i.jsxs(B,{children:[t.price,"$"]}),i.jsxs(P,{children:[p,"$"]})]}),i.jsx(_,{type:"button",onClick:()=>d(t._id),children:i.jsx(g,{})})]})]},t._id)})})]})};C.propTypes={title:e.string,titleHotDishes:e.string,dishes:e.arrayOf(e.shape({name:e.string,description:e.string,price:e.number,gram:e.number,specificsDish:e.string,image:e.string,_id:e.string})).isRequired};export{C,u};
