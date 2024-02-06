import{s as n,c as l,u as g,a as u,o as f,B as w,A as b,K as v,j as t,C as k,v as j,q as P}from"./index-e3Slfalr.js";import{P as a}from"./index-I9-q9K3Z.js";const $=n.div`
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
`,B=n.div`
  flex-grow: 1;
`,y=n.img`
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
`,A=n.div`
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
`,G=n.button`
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
`;const I=i=>{const c=l(),o=g(u),s=g(f);return e=>{const r=i.find(d=>d._id===e),x=s.find(d=>d.idProduct===e),m={idProduct:r._id,image:r.image,name:r.name,price:r.price,discounted:r.discounted,gram:r.gram};if(!o)return c(w(r));if(o&&x)return c(b(x._id));if(o)return c(v(m))}},N=i=>{const{title:c,dishes:o,titleDishes:s}=i,p=I(o);return console.log("(!!titleDishes).toString(): ",(!!s).toString()),t.jsx(k,{children:t.jsxs($,{$data_specificsPage:(!!s).toString(),children:[c&&t.jsx(h,{children:c}),s&&t.jsx(h,{className:"specifics",children:s}),t.jsx(z,{$data_specificsPage:(!!s).toString(),children:o==null?void 0:o.map(e=>{const{finalPrice:r}=j(e);return t.jsxs(D,{children:[(e==null?void 0:e.discounted)!==0&&t.jsxs(_,{children:[e.discounted,"%"]}),t.jsxs(B,{children:[t.jsx(y,{src:e.image,alt:e.name,loading:"lazy",width:"245"}),t.jsx(C,{children:e.name}),t.jsxs(S,{children:[e.gram,"g"]}),t.jsx(W,{children:e.description})]}),t.jsxs(A,{children:[t.jsxs("div",{children:[e.discounted!==0&&t.jsxs(q,{children:[e.price,"$"]}),t.jsxs(T,{children:[r,"$"]})]}),t.jsx(G,{type:"button",onClick:()=>p(e._id),children:t.jsx(P,{})})]})]},e._id)})})]})})};N.propTypes={title:a.string,titleHotDishes:a.string,dishes:a.arrayOf(a.shape({name:a.string,description:a.string,price:a.number,gram:a.number,specificsDish:a.object,image:a.string,_id:a.string})).isRequired};export{N as C,I as u};
