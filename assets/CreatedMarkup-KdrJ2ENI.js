import{g as f,s as o,j as t,C as b}from"./index-2FRWfh_V.js";import{a as y}from"./selector-bQwE5Kaj.js";var m={exports:{}},v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w=v,j=w;function g(){}function u(){}u.resetWarningCache=g;var T=function(){function e(s,r,c,p,l,h){if(h!==j){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function i(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:i,element:e,elementType:e,instanceOf:i,node:e,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:u,resetWarningCache:g};return a.PropTypes=a,a};m.exports=T();var k=m.exports;const n=f(k),x=o.h3`
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
`,P=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  margin: 28px auto 0;
  justify-content: center;

  @media screen and (min-width: 768px) {
    column-gap: 15px;
    max-width: 960px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
  }
`,R=o.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  position: relative;
`,D=o.p`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: white;
`,_=o.div`
  flex-grow: 1;
`,z=o.img`
  border-radius: 5px;
  height: 245px;
  object-fit: cover;
`,O=o.h4`
  color: var(--main-color);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 15px;
`,C=o.p`
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
`,S=o.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;
`,q=o.div`
  display: flex;
  align-items: center;
  gap: 18px;
`,E=o.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
`,N=o.p`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 10px;
`,W=o.button`
  cursor: pointer;
  border: none;
  color: #000;
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
`;o.p`
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
`;const I=e=>{const{title:i,dishes:a,titleHotDishes:s}=e;return t.jsxs(b,{children:[i&&t.jsx(x,{children:i}),s&&t.jsx(x,{className:"hot_dishes",children:s}),t.jsx(P,{children:a.map(r=>{const c=r.discounted?Number(r.discounted):0,p=r.price*c/100,l=Math.floor(r.price-p);return t.jsxs(R,{children:[r.discounted&&t.jsxs(D,{children:[r.discounted,"%"]}),t.jsxs(_,{children:[t.jsx(z,{src:r.image,alt:r.name,loading:"lazy",width:"245"}),t.jsx(O,{children:r.name}),t.jsxs(C,{children:[r.gram,"g"]}),t.jsx(S,{children:r.description})]}),t.jsxs(q,{children:[t.jsxs("div",{children:[(r==null?void 0:r.discounted)&&t.jsxs(N,{children:[r.price,"$"]}),t.jsxs(E,{children:[l,"$"]})]}),t.jsx(W,{type:"button",children:t.jsx(y,{})})]})]},r.id)})})]})};I.propTypes={title:n.string,titleHotDishes:n.string,dishes:n.arrayOf(n.shape({name:n.string.isRequired,description:n.string.isRequired,price:n.number.isRequired,gram:n.number.isRequired,specificsDish:n.string,image:n.string.isRequired,id:n.string.isRequired})).isRequired};export{I as C,n as P};
