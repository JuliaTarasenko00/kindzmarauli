import{u as l,v as c,j as s,s as x,l as p,r as n,c as j,e as I,w as L,m as R}from"./index-_4EtVwOv.js";import{s as r}from"./specifics_dish-m9aeWgjf.js";import{C as a}from"./CreatedMarkup-l-C6JTqm.js";import"./index-Nl5CVoNh.js";const g=()=>{const e=l(c).filter(i=>i.specificsDish===r.GRILLED);return s.jsx(a,{titleDishes:"Grilled Dishes",dishes:e})},k=()=>{const e=l(c).filter(i=>i.specificsDish===r.KHINKALI);return s.jsx(a,{titleDishes:"Khinkali",dishes:e})},E=()=>{const e=l(c).filter(i=>i.specificsDish===r.MAIN);return s.jsx(a,{titleDishes:"Main Dishes",dishes:e})},o=x.section`
  padding-bottom: 60px;
`,S=()=>{const t=l(p),e=n.useRef(null),i=n.useRef(null),h=n.useRef(null),{hash:u}=j(),f=I();return n.useEffect(()=>{var D,d,m;if(!t)switch(u){case`#${r.MAIN}`:return(D=e.current)==null?void 0:D.scrollIntoView({behavior:"smooth"});case`#${r.GRILLED}`:return(d=i.current)==null?void 0:d.scrollIntoView({behavior:"smooth"});case`#${r.KHINKALI}`:return(m=h.current)==null?void 0:m.scrollIntoView({behavior:"smooth"});default:return}},[u,t]),n.useEffect(()=>{f(L())},[f]),s.jsxs(s.Fragment,{children:[t&&s.jsx(R,{}),!t&&s.jsxs(s.Fragment,{children:[s.jsx(o,{ref:e,children:s.jsx(E,{})}),s.jsx(o,{ref:i,children:s.jsx(g,{})}),s.jsx(o,{ref:h,children:s.jsx(k,{})})]})]})};export{S as default};
