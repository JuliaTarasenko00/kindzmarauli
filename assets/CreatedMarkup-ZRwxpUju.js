import{m as x,s as t,j as i,C as m,k as h,e as l}from"./index-LNaGYFSC.js";import{P as e}from"./index-B1QmkMhy.js";import{u as g}from"./selector-8DzEcZ_M.js";const u=s=>{const r=g();return a=>{const d=s.find(n=>n._id===a);r(x(d))}},p=t.h3`
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
`,k=t.img`
  border-radius: 5px;
  height: 95px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
`,j=t.h4`
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
`,_=t.button`
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
`;const C=s=>{const{title:r,dishes:o,titleDishes:a}=s,d=u(o);return i.jsxs(m,{children:[r&&i.jsx(p,{children:r}),a&&i.jsx(p,{className:"hot_dishes",children:a}),i.jsx(f,{children:o==null?void 0:o.map(n=>{const{finalPrice:c}=h(n);return i.jsxs(w,{children:[(n==null?void 0:n.discounted)!==0&&i.jsxs(b,{children:[n.discounted,"%"]}),i.jsxs(v,{children:[i.jsx(k,{src:n.image,alt:n.name,loading:"lazy",width:"245"}),i.jsx(j,{children:n.name}),i.jsxs(z,{children:[n.gram,"g"]}),i.jsx(D,{children:n.description})]}),i.jsxs(y,{children:[i.jsxs("div",{children:[n.discounted!==0&&i.jsxs(B,{children:[n.price,"$"]}),i.jsxs(P,{children:[c,"$"]})]}),i.jsx(_,{type:"button",onClick:()=>d(n._id),children:i.jsx(l,{})})]})]},n._id)})})]})};C.propTypes={title:e.string,titleHotDishes:e.string,dishes:e.arrayOf(e.shape({name:e.string,description:e.string,price:e.number,gram:e.number,specificsDish:e.string,image:e.string,_id:e.string})).isRequired};export{C,u};