import{s as e,N as l,r as s,u as f,j as t,C as u,O as g}from"./index-EZRqjF_E.js";import{G as d,a as j,b as m,c as k}from"./index.esm-zSNrjYmC.js";function b(o){return d({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(o)}const L=e.header`
  padding-top: 50px;
`,w=e.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,z=e(l)`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,S=e.ul`
  display: flex;
  gap: 50px;
`,x=e.li``,c=e(l)`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }
`,y=e.div`
  display: flex;
  gap: 33px;
`,C=e.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover {
    color: var(--active-color);
  }
`;function G(o){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"}}]})(o)}function D(o){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"}}]})(o)}const M=e.div`
  position: relative;
`,_=e.p`
  cursor: pointer;

  color: ${({["data-active"]:o})=>o==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`,B=e.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
`,H=e.li`
  padding: 5px;
  border-radius: 5px;
  transition: background-color var(--transition);

  &:not(:last-child) {
    margin-bottom: 17px;
  }

  &:hover,
  :focus {
    background-color: #80808075;
  }
`,I=e(l)`
  display: block;
  color: #fff;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,v=[{name:"Main Dishes",to:"/hoot_dishes_main"},{name:"Grilled Dishes",to:"/hoot_dishes_grilled"},{name:"Khinkali",to:"/hoot_dishes_khinkali"}],A=()=>{const[o,a]=s.useState(!1),[i,h]=s.useState("Hoot Dishes"),{pathname:p}=f();return s.useEffect(()=>{v.every(({to:r})=>r!==p)&&h("Hoot Dishes")},[p]),t.jsxs(M,{children:[t.jsxs(_,{onClick:()=>{a(!o)},"data-active":o.toString(),children:[i," ",o?t.jsx(D,{}):t.jsx(G,{})]}),o&&t.jsx(B,{onClick:n=>{n.target!==n.currentTarget&&(h(n.target.textContent),a(!1))},children:v.map(({name:n,to:r})=>t.jsx(H,{children:t.jsx(I,{to:r,children:n})},n))})]})},T=()=>{const o=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}];return t.jsxs(t.Fragment,{children:[t.jsx(L,{children:t.jsx(u,{children:t.jsxs(w,{children:[t.jsxs(z,{to:"/",children:[t.jsx(j,{})," Kindzmarauli"]}),t.jsxs(S,{children:[t.jsx(x,{children:t.jsx(A,{})}),o.map(({name:a,to:i})=>t.jsx(x,{children:t.jsx(c,{activeclassname:"active",to:i,children:a})},a))]}),t.jsxs(y,{children:[t.jsx(c,{activeclassname:"active",to:"favorite",children:t.jsx(m,{})}),t.jsx(C,{type:"button",children:t.jsx(b,{})}),t.jsx(c,{activeclassname:"active",to:"basket",children:t.jsx(k,{})})]})]})})}),t.jsx("main",{children:t.jsx(s.Suspense,{fallback:t.jsx("p",{children:"Loading..."}),children:t.jsx(g,{})})})]})};export{T as default};
