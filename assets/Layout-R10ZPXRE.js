import{s as o,N as m,L as y,r as n,u as z,j as t,C as j,O as L}from"./index-wv0GVt9Y.js";import{G as h,a as k,b as C,c as S}from"./index.esm-Hj-vP__V.js";import{s as l}from"./specifics_dish-m9aeWgjf.js";function G(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(e)}const D=o.header`
  position: sticky;
  top: 0;
  left: 0;
  padding-bottom: 44px;
  padding-top: 50px;
  z-index: 20;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.6195728291316527) 48%
  );
`,I=o.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,M=o(m)`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,N=o.ul`
  display: flex;
  gap: 50px;
`,f=o.li``,d=o(m)`
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
`,T=o.div`
  display: flex;
  gap: 33px;
`,R=o.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover {
    color: var(--active-color);
  }
`;function W(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"}}]})(e)}function $(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"}}]})(e)}const A=o.div`
  position: relative;
`,B=o.p`
  cursor: pointer;

  color: ${({["data-active"]:e})=>e==="false"?"#fff":"var(--active-color)"};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`,E=o.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
`,H=o.li`
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
`,K=o(y)`
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
`,g=[{name:"Main Dishes",to:`/hot_dishes#${l.MAIN}`},{name:"Grilled Dishes",to:`/hot_dishes#${l.GRILLED}`},{name:"Khinkali",to:`/hot_dishes#${l.KHINKALI}`}],O=()=>{const[e,r]=n.useState(!1),[a,p]=n.useState("Hoot Dishes"),{pathname:x,hash:b}=z(),s=n.useRef(null);n.useEffect(()=>{g.every(({to:c})=>c!==x)&&p("Hot Dishes")},[x]);const w=i=>{window.location.hash===i&&(window.location.hash="#",s.current=setTimeout(()=>{window.location.hash=i},300))};return n.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),t.jsxs(A,{children:[t.jsxs(B,{onClick:()=>{r(!e)},"data-active":e.toString(),children:[a," ",e?t.jsx($,{}):t.jsx(W,{})]}),e&&t.jsx(E,{onClick:i=>{i.target!==i.currentTarget&&(p(i.target.textContent),r(!1))},children:g.map(({name:i,to:c})=>t.jsx(H,{onClick:()=>w(b),children:t.jsx(K,{to:c,children:i})},i))})]})},F=o.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`,P=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`,_=o.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,u=o.a`
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
`,U=o.div`
  display: flex;
  justify-content: space-between;

  border-top: 0.5px solid grey;
  padding-top: 28px;
`,Z=o.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`,q=o.div``,v=o.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`,J=()=>t.jsx(F,{children:t.jsxs(j,{children:[t.jsxs(P,{children:[t.jsxs(_,{children:[t.jsx(k,{})," Kindzmarauli"]}),t.jsxs("div",{children:[t.jsx(u,{href:"tel:+38(099)900-00-00",children:"+38(099)900-00-00"}),t.jsx(u,{className:"email",href:"mailto:kindzmarauli@gmail.com",children:"kindzmarauli@gmail.com"})]})]}),t.jsxs(U,{children:[t.jsx(Z,{children:"© 2023, official site"}),t.jsxs(q,{children:[t.jsx(v,{href:"#",children:"Privacy Policy and Offer"}),t.jsx(v,{href:"#",children:"Terms of use"})]})]})]})}),Y=()=>{const e=[{name:"Appetizer",to:"appetizer"},{name:"Desserts",to:"desserts"},{name:"Drinks",to:"drinks"}];return t.jsxs(t.Fragment,{children:[t.jsx(D,{children:t.jsx(j,{children:t.jsxs(I,{children:[t.jsxs(M,{to:"/",children:[t.jsx(k,{})," Kindzmarauli"]}),t.jsxs(N,{children:[t.jsx(f,{children:t.jsx(O,{})}),e.map(({name:r,to:a})=>t.jsx(f,{children:t.jsx(d,{activeclassname:"active",to:a,children:r})},r))]}),t.jsxs(T,{children:[t.jsx(d,{activeclassname:"active",to:"favorite",children:t.jsx(C,{})}),t.jsx(R,{type:"button",children:t.jsx(G,{})}),t.jsx(d,{activeclassname:"active",to:"basket",children:t.jsx(S,{})})]})]})})}),t.jsx("main",{style:{flexGrow:1},children:t.jsx(n.Suspense,{fallback:t.jsx("p",{children:"Loading..."}),children:t.jsx(L,{})})}),t.jsx(J,{})]})};export{Y as default};
