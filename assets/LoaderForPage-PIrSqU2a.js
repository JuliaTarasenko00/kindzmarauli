import{g as o,a4 as l,j as a}from"./index-DfdUAF4G.js";const p="#4fa94d",b={"aria-busy":!0,role:"progressbar"},y=o.div`
  display: ${t=>t.$visible?"flex":"none"};
`,e=242.776657104492,v=1.6,g=l`
12.5% {
  stroke-dasharray: ${e*.14}px, ${e}px;
  stroke-dashoffset: -${e*.11}px;
}
43.75% {
  stroke-dasharray: ${e*.35}px, ${e}px;
  stroke-dashoffset: -${e*.35}px;
}
100% {
  stroke-dasharray: ${e*.01}px, ${e}px;
  stroke-dashoffset: -${e*.99}px;
}
`;o.path`
  stroke-dasharray: ${e*.01}px, ${e};
  stroke-dashoffset: 0;
  animation: ${g} ${v}s linear infinite;
`;const h=20,k=t=>["M"+t+" 0c0-9.94-8.06",t,t,t].join("-"),m=(t,c,r)=>{const s=Math.max(t,c),i=-r-s/2+1,n=r*2+s;return[i,i,n,n].join(" ")},w=({height:t=80,width:c=80,color:r=p,secondaryColor:s=p,ariaLabel:i="oval-loading",wrapperStyle:n,wrapperClass:f,visible:x=!0,strokeWidth:d=2,strokeWidthSecondary:$})=>a.jsx(y,{style:n,$visible:x,className:f,"data-testid":"oval-loading","aria-label":i,...b,children:a.jsx("svg",{width:c,height:t,viewBox:m(Number(d),Number($||d),h),xmlns:"http://www.w3.org/2000/svg",stroke:r,"data-testid":"oval-svg",children:a.jsx("g",{fill:"none",fillRule:"evenodd",children:a.jsxs("g",{transform:"translate(1 1)",strokeWidth:Number($||d),"data-testid":"oval-secondary-group",children:[a.jsx("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:h,stroke:s,strokeWidth:d}),a.jsx("path",{d:k(h),children:a.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})}),u=l`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${u} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;o.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const j=l`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${j} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const S=()=>a.jsx("div",{style:{position:"fixed",top:0,width:"150vh",zIndex:5e3,height:"100vh",overflow:"hidden",display:"grid",placeItems:"center center"},children:a.jsx(w,{visible:!0,height:"50",width:"50",color:"#fbd13e",secondaryColor:"orange",wrapperStyle:{width:50,height:50}})});export{S as L};
