import{s as o,N as l,r,u as j,j as t,C as u,O as k}from"./index-r9eZEv_I.js";import{G as d,a as m,b,c as w}from"./index.esm-PXHefHbD.js";function y(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(e)}const z=o.header`
  padding-top: 50px;
`,L=o.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,S=o(l)`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,C=o.ul`
  display: flex;
  gap: 50px;
`,x=o.li``,c=o(l)`
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
`,G=o.div`
  display: flex;
  gap: 33px;
`,D=o.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover {
    color: var(--active-color);
  }
`;function M(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"}}]})(e)}function W(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"}}]})(e)}const _=o.div`
  position: relative;
`,B=o.p`
  cursor: pointer;

  color: ${({["data-active"]:e})=>e==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`,N=o.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
`,O=o.li`
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
`,T=o(l)`
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
`,f=[{name:"Main Dishes",to:"/hoot_dishes_main"},{name:"Grilled Dishes",to:"/hoot_dishes_grilled"},{name:"Khinkali",to:"/hoot_dishes_khinkali"}],F=()=>{const[e,n]=r.useState(!1),[a,h]=r.useState("Hoot Dishes"),{pathname:p}=j();return r.useEffect(()=>{f.every(({to:s})=>s!==p)&&h("Hoot Dishes")},[p]),t.jsxs(_,{children:[t.jsxs(B,{onClick:()=>{n(!e)},"data-active":e.toString(),children:[a," ",e?t.jsx(W,{}):t.jsx(M,{})]}),e&&t.jsx(N,{onClick:i=>{i.target!==i.currentTarget&&(h(i.target.textContent),n(!1))},children:f.map(({name:i,to:s})=>t.jsx(O,{children:t.jsx(T,{to:s,children:i})},i))})]})},H=o.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,I=o.div`
  display: flex;
  justify-content: space-between;
`,P=o.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,v=o.a`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &.email {
    font-size: 12px;
    text-decoration-line: underline;
  }

  &:not(:last-child) {
    margin-right: 29px;
  }

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,A=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 69px;

  &::before {
    content: '';
    background-color: #fff;
    width: 95%;
    height: 0.2px;
    position: absolute;
    bottom: 40%;
    opacity: 0.3;
  }
`,E=o.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,K=o.div``,g=o.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,R=()=>t.jsx(H,{children:t.jsxs(u,{children:[t.jsxs(I,{children:[t.jsxs(P,{children:[t.jsx(m,{})," Kindzmarauli"]}),t.jsxs("div",{children:[t.jsx(v,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),t.jsx(v,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),t.jsxs(A,{children:[t.jsx(E,{children:"© 2023, official site"}),t.jsxs(K,{children:[t.jsx(g,{href:"#",children:"Privacy Policy and Offer"}),t.jsx(g,{href:"#",children:"Terms of use"})]})]})]})}),$=()=>{const e=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}];return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(u,{children:t.jsxs(L,{children:[t.jsxs(S,{to:"/",children:[t.jsx(m,{})," Kindzmarauli"]}),t.jsxs(C,{children:[t.jsx(x,{children:t.jsx(F,{})}),e.map(({name:n,to:a})=>t.jsx(x,{children:t.jsx(c,{activeclassname:"active",to:a,children:n})},n))]}),t.jsxs(G,{children:[t.jsx(c,{activeclassname:"active",to:"favorite",children:t.jsx(b,{})}),t.jsx(D,{type:"button",children:t.jsx(y,{})}),t.jsx(c,{activeclassname:"active",to:"basket",children:t.jsx(w,{})})]})]})})}),t.jsx("main",{style:{flexGrow:1},children:t.jsx(r.Suspense,{fallback:t.jsx("p",{children:"Loading..."}),children:t.jsx(k,{})})}),t.jsx(R,{})]})};export{$ as default};
