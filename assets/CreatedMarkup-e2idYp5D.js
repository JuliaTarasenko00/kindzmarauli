import{g as a,c as h,u as m,a as l,n as u,z as f,y as w,H as b,j as e,C as v,s as k,p as P}from"./index-q9DV3WYH.js";import{P as n}from"./index-e2rbOEQ5.js";const $=a.div`
  width: ${({["$data_specificsPage"]:i})=>i==="true"?"333px":"100%"};
  margin: ${({["$data_specificsPage"]:i})=>i==="true"?"0 auto":"0"};

  @media screen and (min-width: 768px) {
    width: ${({["$data_specificsPage"]:i})=>i==="true"?"690px":"100%"};
  }

  @media screen and (min-width: 1400px) {
    width: ${({["$data_specificsPage"]:i})=>i==="true"?"980px":"100%"};
  }
`;a.h3`
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
`;const j=a.ul`
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
`,z=a.li`
  display: flex;
  flex-direction: column;
  width: 145px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,_=a.p`
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
`,D=a.div`
  flex-grow: 1;
`,y=a.img`
  border-radius: 5px;
  height: 95px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
`,B=a.h4`
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
`,C=a.p`
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
`,S=a.p`
  color: var(--main-color);
  font-size: 1.8vh;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`,W=a.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,A=a.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,G=a.p`
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
`,I=a.button`
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
`;a.p`
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
`;const R=i=>{const r=h(),s=m(l),d=m(u);return c=>{const o=i.find(p=>p._id===c),x=d.find(p=>p.idProduct===c),g={idProduct:o._id,image:o.image,name:o.name,price:o.price,discounted:o.discounted,gram:o.gram};if(!s)return r(f(o));if(s&&x)return r(w(x._id));if(s)return r(b(g))}},T=i=>{const{dishes:r,mainPage:s}=i,d=R(r);return e.jsx(v,{children:e.jsx($,{$data_specificsPage:(!s).toString(),children:e.jsx(j,{$data_specificsPage:(!s).toString(),children:r==null?void 0:r.map(t=>{const{finalPrice:c}=k(t);return e.jsxs(z,{children:[(t==null?void 0:t.discounted)!==0&&e.jsxs(_,{children:[t.discounted,"%"]}),e.jsxs(D,{children:[e.jsx(y,{src:t.image,alt:t.name,loading:"lazy",width:"245"}),e.jsx(B,{children:t.name}),e.jsxs(C,{children:[t.gram,"g"]}),e.jsx(S,{children:t.description})]}),e.jsxs(W,{children:[e.jsxs("div",{children:[t.discounted!==0&&e.jsxs(G,{children:[t.price,"$"]}),e.jsxs(A,{children:[c,"$"]})]}),e.jsx(I,{type:"button",onClick:()=>d(t._id),children:e.jsx(P,{})})]})]},t._id)})})})})};T.propTypes={mainPage:n.bool,dishes:n.arrayOf(n.shape({name:n.string,description:n.string,price:n.number,gram:n.number,specificsDish:n.object,image:n.string,_id:n.string})).isRequired};export{T as C,R as u};
