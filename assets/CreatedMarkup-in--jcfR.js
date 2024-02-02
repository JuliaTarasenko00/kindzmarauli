import{s as n,c as g,u as h,a as u,n as f,B as b,A as w,K as v,j as t,C as k,v as j,p as z}from"./index-KBG3bpWx.js";import{P as e}from"./index-Jia2ROkq.js";const m=n.h3`
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
`,D=n.ul`
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
`,B=n.li`
  display: flex;
  flex-direction: column;
  width: 145px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,P=n.p`
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
`,y=n.div`
  flex-grow: 1;
`,_=n.img`
  border-radius: 5px;
  height: 95px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
`,C=n.h4`
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
`,A=n.p`
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
`,T=n.p`
  color: var(--main-color);
  font-size: 1.8vh;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`,W=n.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,G=n.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,I=n.p`
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
`,N=n.button`
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
`;const R=d=>{const r=g(),a=h(u),s=h(f);return i=>{const o=d.find(c=>c._id===i),x=s.find(c=>c.idProduct===i),l={idProduct:o._id,image:o.image,name:o.name,price:o.price,discounted:o.discounted,gram:o.gram};if(!a)return r(b(o));if(a&&x)return r(w(x._id));if(a)return r(v(l))}},$=d=>{const{title:r,dishes:a,titleDishes:s}=d,p=R(a);return t.jsxs(k,{children:[r&&t.jsx(m,{children:r}),s&&t.jsx(m,{className:"hot_dishes",children:s}),t.jsx(D,{children:a==null?void 0:a.map(i=>{const{finalPrice:o}=j(i);return t.jsxs(B,{children:[(i==null?void 0:i.discounted)!==0&&t.jsxs(P,{children:[i.discounted,"%"]}),t.jsxs(y,{children:[t.jsx(_,{src:i.image,alt:i.name,loading:"lazy",width:"245"}),t.jsx(C,{children:i.name}),t.jsxs(A,{children:[i.gram,"g"]}),t.jsx(T,{children:i.description})]}),t.jsxs(W,{children:[t.jsxs("div",{children:[i.discounted!==0&&t.jsxs(I,{children:[i.price,"$"]}),t.jsxs(G,{children:[o,"$"]})]}),t.jsx(N,{type:"button",onClick:()=>p(i._id),children:t.jsx(z,{})})]})]},i._id)})})]})};$.propTypes={title:e.string,titleHotDishes:e.string,dishes:e.arrayOf(e.shape({name:e.string,description:e.string,price:e.number,gram:e.number,specificsDish:e.string,image:e.string,_id:e.string})).isRequired};export{$ as C,R as u};
