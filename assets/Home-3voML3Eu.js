import{b as O,j as r,c as Q,u as A,q as X,P as Y,l as Z,t as w,C as aa}from"./index-q9DV3WYH.js";import{M as ta}from"./MarkupComponent-VdIEXGTp.js";import{L as oa}from"./LoaderForPage-vH4x4kOa.js";import{s as sa,c as T,C as ea,g as V,a as B,u as G,b as H}from"./styled-yC1rf89I.js";import{_,a as d,d as na,i as ia,s as ra,u as la,c as ca,T as da,b as z,e as M}from"./defaultTheme-4AC9Krie.js";import{g as E,u as pa,c as F,B as ua}from"./ButtonBase-mUwP7AFQ.js";import{u as ga}from"./TransitionGroupContext-IQ8v4j2H.js";import"./index-e2rbOEQ5.js";import"./index.esm-cIpwJcdA.js";import"./MarkupComponent.styled-QnL2h6Fz.js";const fa=["sx"],xa=a=>{var t,o;const s={systemProps:{},otherProps:{}},l=(t=a==null||(o=a.theme)==null?void 0:o.unstable_sxConfig)!=null?t:na;return Object.keys(a).forEach(n=>{l[n]?s.systemProps[n]=a[n]:s.otherProps[n]=a[n]}),s};function va(a){const{sx:t}=a,o=_(a,fa),{systemProps:s,otherProps:l}=xa(o);let n;return Array.isArray(t)?n=[s,...t]:typeof t=="function"?n=(...u)=>{const e=t(...u);return ia(e)?d({},s,e):s}:n=d({},s,t),d({},l,{sx:n})}const ba=["className","component"];function ya(a={}){const{themeId:t,defaultTheme:o,defaultClassName:s="MuiBox-root",generateClassName:l}=a,n=sa("div",{shouldForwardProp:e=>e!=="theme"&&e!=="sx"&&e!=="as"})(ra);return O.forwardRef(function(g,x){const v=la(o),m=va(g),{className:b,component:p="div"}=m,c=_(m,ba);return r.jsx(n,d({as:p,ref:x,className:T(b,l?l(s):s),theme:t&&v[t]||v},c))})}const Pa=E("MuiBox",["root"]),ma=Pa,Ca=ca(),$a=ya({themeId:da,defaultTheme:Ca,defaultClassName:ma.root,generateClassName:ea.generate}),ha=$a;function Ia(a){return V("MuiPagination",a)}E("MuiPagination",["root","ul","outlined","text"]);const Na=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function za(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:l=1,disabled:n=!1,hideNextButton:u=!1,hidePrevButton:e=!1,onChange:g,page:x,showFirstButton:v=!1,showLastButton:m=!1,siblingCount:b=1}=a,p=_(a,Na),[c,k]=pa({controlled:x,default:l,name:o,state:"page"}),I=(i,$)=>{x||k($),g&&g(i,$)},y=(i,$)=>{const J=$-i+1;return Array.from({length:J},(Ga,K)=>i+K)},N=y(1,Math.min(t,s)),P=y(Math.max(s-t+1,t+1),s),L=Math.max(Math.min(c-b,s-t-b*2-1),t+2),h=Math.min(Math.max(c+b,t+b*2+2),P.length>0?P[0]-2:s-1),R=[...v?["first"]:[],...e?[]:["previous"],...N,...L>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...y(L,h),...h<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...P,...u?[]:["next"],...m?["last"]:[]],j=i=>{switch(i){case"first":return 1;case"previous":return c-1;case"next":return c+1;case"last":return s;default:return null}},C=R.map(i=>typeof i=="number"?{onClick:$=>{I($,i)},type:"page",page:i,selected:i===c,disabled:n,"aria-current":i===c?"true":void 0}:{onClick:$=>{I($,j(i))},type:i,page:j(i),selected:!1,disabled:n||i.indexOf("ellipsis")===-1&&(i==="next"||i==="last"?c>=s:c<=1)});return d({items:C},p)}function Ma(a){return V("MuiPaginationItem",a)}const Ba=E("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),f=Ba,U=F(r.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),W=F(r.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),S=F(r.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),D=F(r.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ka=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],q=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${M(o.size)}`],o.variant==="text"&&t[`text${M(o.color)}`],o.variant==="outlined"&&t[`outlined${M(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},La=a=>{const{classes:t,color:o,disabled:s,selected:l,size:n,shape:u,type:e,variant:g}=a,x={root:["root",`size${M(n)}`,g,u,o!=="standard"&&`color${M(o)}`,o!=="standard"&&`${g}${M(o)}`,s&&"disabled",l&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[e]],icon:["icon"]};return H(x,Ma,t)},Ra=B("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:a,ownerState:t})=>d({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${f.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ja=B(ua,{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:a,ownerState:t})=>d({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${f.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${f.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${f.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${f.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>d({},t.variant==="text"&&{[`&.${f.selected}`]:d({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${f.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${f.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${f.selected}`]:d({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:z(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:z(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${f.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),Oa=B("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>d({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),_a=O.forwardRef(function(t,o){const s=G({props:t,name:"MuiPaginationItem"}),{className:l,color:n="standard",component:u,components:e={},disabled:g=!1,page:x,selected:v=!1,shape:m="circular",size:b="medium",slots:p={},type:c="page",variant:k="text"}=s,I=_(s,ka),y=d({},s,{color:n,disabled:g,selected:v,shape:m,size:b,type:c,variant:k}),N=ga(),P=La(y),h=(N.direction==="rtl"?{previous:p.next||e.next||D,next:p.previous||e.previous||S,last:p.first||e.first||U,first:p.last||e.last||W}:{previous:p.previous||e.previous||S,next:p.next||e.next||D,first:p.first||e.first||U,last:p.last||e.last||W})[c];return c==="start-ellipsis"||c==="end-ellipsis"?r.jsx(Ra,{ref:o,ownerState:y,className:T(P.root,l),children:"…"}):r.jsxs(ja,d({ref:o,ownerState:y,component:u,disabled:g,className:T(P.root,l)},I,{children:[c==="page"&&x,h?r.jsx(Oa,{as:h,ownerState:y,className:P.icon}):null]}))}),Ta=_a,Fa=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Aa=a=>{const{classes:t,variant:o}=a;return H({root:["root",o],ul:["ul"]},Ia,t)},Ea=B("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),Ua=B("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Wa(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const Sa=O.forwardRef(function(t,o){const s=G({props:t,name:"MuiPagination"}),{boundaryCount:l=1,className:n,color:u="standard",count:e=1,defaultPage:g=1,disabled:x=!1,getItemAriaLabel:v=Wa,hideNextButton:m=!1,hidePrevButton:b=!1,renderItem:p=C=>r.jsx(Ta,d({},C)),shape:c="circular",showFirstButton:k=!1,showLastButton:I=!1,siblingCount:y=1,size:N="medium",variant:P="text"}=s,L=_(s,Fa),{items:h}=za(d({},s,{componentName:"Pagination"})),R=d({},s,{boundaryCount:l,color:u,count:e,defaultPage:g,disabled:x,getItemAriaLabel:v,hideNextButton:m,hidePrevButton:b,renderItem:p,shape:c,showFirstButton:k,showLastButton:I,siblingCount:y,size:N,variant:P}),j=Aa(R);return r.jsx(Ea,d({"aria-label":"pagination navigation",className:T(j.root,n),ownerState:R,ref:o},L,{children:r.jsx(Ua,{className:j.ul,ownerState:R,children:h.map((C,i)=>r.jsx("li",{children:p(d({},C,{color:u,"aria-label":v(C.type,C.page,C.selected),shape:c,size:N,variant:P}))},i))})}))}),Da=Sa,Va=B(Da)(()=>({"& .MuiPaginationItem-root":{color:"#ffffff",borderColor:"#ffffff"},"& .MuiPaginationItem-page.Mui-selected":{backgroundColor:"#0000ff2e"},"& .MuiPaginationItem-page:hover":{backgroundColor:"#0000ff2e"}})),tt=()=>{const a=Q(),t=A(X),o=A(Y),s=A(Z),[l,n]=O.useState(1);return O.useEffect(()=>{a(w({page:l,limit:8}))},[a,l]),r.jsx("section",{style:{padding:"40px 0"},children:r.jsxs(aa,{children:[s&&r.jsx(oa,{}),!s&&r.jsxs(r.Fragment,{children:[r.jsx(ta,{list:t,mainPage:!0}),r.jsx(ha,{sx:{display:"flex",justifyContent:"center",mt:"30px"},children:r.jsx(Va,{count:o,size:"large",page:l,onChange:(u,e)=>n(e)})})]})]})})};export{tt as default};
