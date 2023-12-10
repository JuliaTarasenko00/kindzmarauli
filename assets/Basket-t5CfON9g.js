import{s as o,d as r,j as t,C as c}from"./index-9Zlf0_0l.js";import{a,b as l,A as p}from"./index.esm-yf6ZILz4.js";import{d as x,b as m}from"./selector-LHkPpK8A.js";import"./iconBase-iudSeguC.js";const d=o.section``,h=o.h3`
  margin-bottom: 100px;
  color: var(--main-color);
  font-size: 80px;
  font-weight: 500;
  line-height: 1.12;
`,u=o.ul``,g=o.li`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,j=o.img`
  height: 180px;
  max-height: 100%;
  object-fit: cover;
`,f=o.div`
  width: 240px;
`,b=o.p`
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 7px;
`,v=o.p`
  color: var(--main-color);
  padding: 2px 4px;
  background-color: gray;
  text-align: center;
  display: inline;
  border-radius: 2px;
`,k=o.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
  line-height: normal;
`,y=o.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,e=o.button`
  cursor: pointer;
  color: var(--main-color);
  background-color: transparent;
  border: none;
`,w=o.p`
  color: var(--main-color);
`,B=o.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
  line-height: normal;
`,C=o.button`
  cursor: pointer;
  color: #ff0000;
  background-color: transparent;
  border: 1px solid #ff0000;
  margin-right: 35px;
  padding: 4px;
  padding-bottom: 0;
`,z=o.h4`
  color: var(--main-color);
`,A=()=>{const i=r(x),s=r(m);return t.jsx(d,{children:t.jsxs(c,{children:[t.jsx(h,{children:"Basket"}),t.jsx(u,{children:i.map(n=>t.jsxs(g,{children:[t.jsx(j,{src:n.image,alt:n.name,width:"195"}),t.jsxs(f,{children:[t.jsx(b,{children:n.name}),t.jsxs(v,{children:[n.gram,"g"]})]}),t.jsxs(k,{children:[n.price,"$"]}),t.jsxs(y,{children:[t.jsx(e,{type:"button",children:t.jsx(a,{})}),t.jsx(w,{children:n.count}),t.jsx(e,{type:"button",children:t.jsx(l,{})})]}),t.jsxs(B,{children:[n.price*n.count,"$"]}),t.jsx(C,{type:"button",children:t.jsx(p,{})})]},n.id))}),t.jsx(z,{children:s})]})})},D=()=>t.jsx(A,{});export{D as default};
