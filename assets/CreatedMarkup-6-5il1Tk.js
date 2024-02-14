import{s as n,c as l,u as m,a as u,m as f,z as w,y as b,I as v,j as t,C as k,q as j,o as P}from"./index-OF7pzLKL.js";import{P as a}from"./index-_JRL6Qm-.js";const $=n.div`
  width: ${({["$data_specificsPage"]:i})=>i==="true"?"333px":"100%"};
  margin: ${({["$data_specificsPage"]:i})=>i==="true"?"0 auto":"0"};

  @media screen and (min-width: 768px) {
    width: ${({["$data_specificsPage"]:i})=>i==="true"?"690px":"100%"};
  }

  @media screen and (min-width: 1400px) {
    width: ${({["$data_specificsPage"]:i})=>i==="true"?"980px":"100%"};
  }
`,h=n.h3`
  color: var(--main-color);
  font-size: 30px;
  font-weight: 500;
  line-height: 1.12;
  margin: 20px auto 0;

  @media screen and (min-width: 768px) {
    width: 643px;
    font-size: 80px;
  }

  &.specifics {
    width: 100%;
    margin: 0;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
  }
`,z=n.ul`
  max-width: ${({["$data_specificsPage"]:i})=>i==="true"?"100%":"333px"};
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: ${({["$data_specificsPage"]:i})=>i==="true"?"28px 0":"28px auto 0"};

  justify-content: ${({["$data_specificsPage"]:i})=>i==="true"?"flex-start":"center"};

  @media screen and (min-width: 768px) {
    gap: 15px;
    max-width: ${({["$data_specificsPage"]:i})=>i==="true"?"100%":"690px"};
  }

  @media screen and (min-width: 1400px) {
    max-width: ${({["$data_specificsPage"]:i})=>i==="true"?"100%":"940px"};
    gap: 20px;
  }
`,D=n.li`
  display: flex;
  flex-direction: column;
  width: 145px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,_=n.p`
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
`,B=n.img`
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
`,S=n.p`
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
`,W=n.p`
  color: var(--main-color);
  font-size: 1.8vh;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`,I=n.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,T=n.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,q=n.p`
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
`,A=n.button`
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
`;const G=i=>{const s=l(),o=m(u),c=m(f);return e=>{const r=i.find(d=>d._id===e),x=c.find(d=>d.idProduct===e),g={idProduct:r._id,image:r.image,name:r.name,price:r.price,discounted:r.discounted,gram:r.gram};if(!o)return s(w(r));if(o&&x)return s(b(x._id));if(o)return s(v(g))}},N=i=>{const{title:s,dishes:o,titleDishes:c}=i,p=G(o);return t.jsx(k,{children:t.jsxs($,{$data_specificsPage:(!!c).toString(),children:[s&&t.jsx(h,{children:s}),c&&t.jsx(h,{className:"specifics",children:c}),t.jsx(z,{$data_specificsPage:(!!c).toString(),children:o==null?void 0:o.map(e=>{const{finalPrice:r}=j(e);return t.jsxs(D,{children:[(e==null?void 0:e.discounted)!==0&&t.jsxs(_,{children:[e.discounted,"%"]}),t.jsxs(y,{children:[t.jsx(B,{src:e.image,alt:e.name,loading:"lazy",width:"245"}),t.jsx(C,{children:e.name}),t.jsxs(S,{children:[e.gram,"g"]}),t.jsx(W,{children:e.description})]}),t.jsxs(I,{children:[t.jsxs("div",{children:[e.discounted!==0&&t.jsxs(q,{children:[e.price,"$"]}),t.jsxs(T,{children:[r,"$"]})]}),t.jsx(A,{type:"button",onClick:()=>p(e._id),children:t.jsx(P,{})})]})]},e._id)})})]})})};N.propTypes={title:a.string,titleHotDishes:a.string,dishes:a.arrayOf(a.shape({name:a.string,description:a.string,price:a.number,gram:a.number,specificsDish:a.object,image:a.string,_id:a.string})).isRequired};export{N as C,G as u};
