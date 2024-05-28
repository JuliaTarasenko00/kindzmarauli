import{g as n,c as h,u as x,a as m,n as l,A as u,z as f,I as w,j as t,C as b,s as v,p as k}from"./index-RaBAhGgm.js";import{P as a}from"./index-sbixjjSV.js";const P=n.div`
  width: ${({["$data_specificsPage"]:i})=>i==="true"?"333px":"100%"};
  margin: ${({["$data_specificsPage"]:i})=>i==="true"?"0 auto":"0"};

  @media screen and (min-width: 768px) {
    width: ${({["$data_specificsPage"]:i})=>i==="true"?"690px":"100%"};
  }

  @media screen and (min-width: 1400px) {
    width: ${({["$data_specificsPage"]:i})=>i==="true"?"980px":"100%"};
  }
`;n.h3`
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
`;const $=n.ul`
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
`,j=n.li`
  display: flex;
  flex-direction: column;
  width: 145px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,z=n.p`
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
`,_=n.div`
  flex-grow: 1;
`,D=n.img`
  border-radius: 5px;
  height: 95px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
`,y=n.h4`
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
`,B=n.p`
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
`,C=n.p`
  color: var(--main-color);
  font-size: 1.8vh;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`,S=n.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,W=n.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`,A=n.p`
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
`,I=n.button`
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
`;const G=i=>{const r=h(),o=x(m),c=x(l);return s=>{const g=i.find(d=>d._id===s),p=c.find(d=>d._id===s);if(!o)return r(u(g));if(o&&p)return r(f(p._id));if(o)return r(w(s))}},R=i=>{const{dishes:r,mainPage:o}=i,c=G(r);return t.jsx(b,{children:t.jsx(P,{$data_specificsPage:(!o).toString(),children:t.jsx($,{$data_specificsPage:(!o).toString(),children:r==null?void 0:r.map(e=>{const{finalPrice:s}=v(e);return t.jsxs(j,{children:[(e==null?void 0:e.discounted)!==0&&t.jsxs(z,{children:[e.discounted,"%"]}),t.jsxs(_,{children:[t.jsx(D,{src:e.image,alt:e.name,loading:"lazy",width:"245"}),t.jsx(y,{children:e.name}),t.jsxs(B,{children:[e.gram,"g"]}),t.jsx(C,{children:e.description})]}),t.jsxs(S,{children:[t.jsxs("div",{children:[e.discounted!==0&&t.jsxs(A,{children:[e.price,"$"]}),t.jsxs(W,{children:[s,"$"]})]}),t.jsx(I,{type:"button",onClick:()=>c(e._id),children:t.jsx(k,{})})]})]},e._id)})})})})};R.propTypes={mainPage:a.bool,dishes:a.arrayOf(a.shape({name:a.string,description:a.string,price:a.number,gram:a.number,specificsDish:a.object,image:a.string,_id:a.string})).isRequired};export{R as C,G as u};
