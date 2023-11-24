import{R as c,s as i,N as m,j as e,C as L,r as y,O as b}from"./index-ESOleicM.js";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=c.createContext&&c.createContext(p),s=function(){return s=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s.apply(this,arguments)},k=function(t,n){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(r[a[o]]=t[a[o]]);return r};function j(t){return t&&t.map(function(n,r){return c.createElement(n.tag,s({key:r},n.attr),j(n.child))})}function u(t){return function(n){return c.createElement(z,s({attr:s({},t.attr)},n),j(t.child))}}function z(t){var n=function(r){var a=t.attr,o=t.size,f=t.title,C=k(t,["attr","size","title"]),x=o||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),c.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,C,{className:l,style:s(s({color:t.color||r.color},r.style),t.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),f&&c.createElement("title",null,f),t.children)};return g!==void 0?c.createElement(g.Consumer,null,function(r){return n(r)}):n(p)}function w(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}}]})(t)}function O(t){return u({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"}}]})(t)}function M(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,8.4 C1,4 4.5,3 6.5,3 C9,3 11,5 12,6.5 C13,5 15,3 17.5,3 C19.5,3 23,4 23,8.4 C23,15 12,21 12,21 C12,21 1,15 1,8.4 Z"}}]})(t)}function N(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M19,18 L5,18 L19,18 Z M12,18 L12,12 L12,18 Z M15,18 L15,14 L15,18 Z M9,18 L9,14 L9,18 Z M19,22 L19,11.3292943 C20.1651924,10.9174579 21,9.80621883 21,8.5 C21,6.84314575 19.6568542,5.5 18,5.5 C17.6192862,5.5 17.2551359,5.57091725 16.9200387,5.7002623 C16.5495238,3.87433936 14.4600194,2 12,2 C9.53998063,2 7.45047616,3.87433936 7.07996126,5.7002623 C6.74486408,5.57091725 6.38071384,5.5 6,5.5 C4.34314575,5.5 3,6.84314575 3,8.5 C3,9.80621883 3.83480763,10.9174579 5,11.3292943 L5,22 L19,22 Z"}}]})(t)}const E=i.header`
  padding-top: 50px;
`,_=i.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,B=i(m)`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`,H=i.ul`
  display: flex;
  gap: 50px;
`,d=i.li``;i.select`
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: var(--main-color);
  border: none;
  transition: color var(--transition);

  &:focus {
    color: var(--active-color);
  }
`;i.option`
  padding: 21px 81px 23px 20px;

  margin-bottom: 20px;
  background-color: #000;
  color: var(--main-color);
`;const h=i(m)`
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
`,Z=i.div`
  display: flex;
  gap: 33px;
`,v=i.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover {
    color: var(--active-color);
  }
`,P=()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(L,{children:e.jsxs(_,{children:[e.jsxs(B,{to:"/",children:[e.jsx(N,{})," Kindzmarauli"]}),e.jsxs(H,{children:[e.jsx(d,{}),e.jsx(d,{children:e.jsx(h,{activeclassname:"active",to:"appetizer",children:"Appetizer"})}),e.jsx(d,{children:e.jsx(h,{activeclassname:"active",to:"desserts",children:"Desserts"})}),e.jsx(d,{children:e.jsx(h,{activeclassname:"active",to:"drinks",children:"Drinks"})})]}),e.jsxs(Z,{children:[e.jsx(v,{children:e.jsx(M,{})}),e.jsx(v,{children:e.jsx(w,{})}),e.jsx(v,{children:e.jsx(O,{})})]})]})})}),e.jsx("main",{children:e.jsx(y.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(b,{})})})]});export{P as default};
