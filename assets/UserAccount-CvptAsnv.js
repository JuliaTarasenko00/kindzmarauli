import{G as N,s as n,c as z,d as C,u as M,P as $,b as v,j as e,C as F,Q as B,I as H}from"./index-KBG3bpWx.js";import{c as R,a as b,b as T,F as E}from"./index.esm-COxzOUbz.js";import{e as I,F as P,a as _}from"./emailRegexp-cL58pf41.js";function g(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z"}}]})(t)}function f(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z"}}]})(t)}const A=n.section`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`,O=n.h2`
  color: #fbd13e;
  font-weight: 500;
  line-height: 1.12;
  font-size: 30px;
  text-align: center;
`,U=n.form`
  display: block;
  display: block;
  max-width: 500px;
  margin: 30px auto 0;
`,d=n.div`
  position: relative;

  &:not(:first-child) {
    margin-top: 20px;
  }
`,p=n.input`
  width: 100%;
  padding: 10px;
  background-color: ${({["$data_disabled"]:t})=>t==="true"&&t!==void 0?"transparent":"#52525252"};
  border-radius: 10px;
  border: 2px solid
    ${({["$data_disabled"]:t})=>t==="true"&&t!==void 0?"#ffffff63":"#0000007d"};
  height: 44px;
  color: var(--main-color);
  outline-color: transparent;
`,m=n.p`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5;
  color: red;
`,u=n.div`
  position: relative;

  & button {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    color: var(--main-color);
    transform: translateY(-50%);
    right: 8px;
    border: none;
    background-color: transparent;
    transition: color var(--transition);

    &:hover,
    :focus {
      color: var(--active-color);
    }

    &.password {
      cursor: not-allowed;
      color: grey;
    }
  }
`,W=n.button`
  background-color: #fbd13e;
  box-shadow: 0px 10px 31px 0px rgba(15, 15, 17, 0.2);
  color: #000;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.69;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  padding: 10px;
  width: 187px;
  max-width: 100%;
  border: none;
  margin-top: 40px;
  border-radius: 16px;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: #917206;
  }
`;n.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  color: #fbd13e;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`;const D=n.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  text-align: center;
  margin: 0 0 0 auto;
  display: block;
  color: #fbd13e;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: #917206;
  }
`,V=R().shape({fullName:b().min(3,"Min length 3 symbol").max(30,"Max length 3 symbol"),email:b().matches(I,"This is an ERROR email"),password:b().min(8,"Password must contain at least 8 characters"),phoneNumber:T().min(10)}),q=()=>{const t=z(),w=C(),a=M($),[h,y]=v.useState(!1),[o,j]=v.useState({}),k={fullName:a==null?void 0:a.fullName,phoneNumber:a==null?void 0:a.phoneNumber,email:a==null?void 0:a.email,password:""},L=()=>{console.log("done")},x=l=>{j({...o,[l]:!o[l]})};return e.jsx(A,{children:e.jsxs(F,{children:[e.jsx(O,{children:"Your Profile"}),e.jsx("p",{style:{fontSize:"0.7rem",fontWeight:400,lineHeight:1.5,marginTop:"1rem",textAlign:"center",color:"#fff"},children:"Sorry, the data change functionality is not available at the moment. We will Fix everything soon 😉👩‍💻"}),e.jsx(E,{initialValues:k,onSubmit:L,validationSchema:V,children:({values:l,handleChange:s,handleSubmit:S,handleBlur:r,errors:i,touched:c})=>e.jsxs(U,{onSubmit:S,children:[e.jsxs(d,{children:[e.jsxs(u,{children:[e.jsx(p,{type:"text",placeholder:"Full Name",name:"fullName",disabled:!o.fullName,$data_disabled:(!!o.fullName).toString(),value:l.fullName,onChange:s,onBlur:r}),e.jsx("button",{type:"button",onClick:()=>x("fullName"),children:o.fullName?e.jsx(f,{}):e.jsx(g,{})})]}),i.fullName&&c.fullName&&e.jsx(m,{children:i.fullName})]}),e.jsxs(d,{children:[e.jsxs(u,{children:[e.jsx(p,{placeholder:"Phone Number",type:"phoneNumber",name:"phoneNumber",disabled:!o.phoneNumber,$data_disabled:(!!o.phoneNumber).toString(),value:l.phoneNumber,onChange:s,onBlur:r}),e.jsx("button",{type:"button",onClick:()=>x("phoneNumber"),children:o.phoneNumber?e.jsx(f,{}):e.jsx(g,{})})]}),i.phoneNumber&&c.phoneNumber&&e.jsx(m,{children:i.phoneNumber})]}),e.jsxs(d,{children:[e.jsxs(u,{children:[e.jsx(p,{type:"email",placeholder:"Email",name:"email",disabled:!o.email,$data_disabled:(!!o.email).toString(),value:l.email,onChange:s,onBlur:r,autoComplete:""}),e.jsx("button",{type:"button",onClick:()=>x("email"),children:o.email?e.jsx(f,{}):e.jsx(g,{})})]}),i.email&&c.email&&e.jsx(m,{children:i.email})]}),e.jsxs(d,{children:[e.jsxs(u,{children:[e.jsx(p,{type:h?"text":"password",name:"password",disabled:!0,placeholder:"Password",value:l.password,onChange:s,onBlur:r,autoComplete:""}),e.jsx("button",{className:"password",type:"button",onClick:()=>y(!h),children:h?e.jsx(_,{}):e.jsx(P,{})})]}),i.password&&c.password&&e.jsx(m,{children:i.password})]}),e.jsx(W,{type:"submit",onClick:()=>j({}),children:"Change the Data"})]})}),e.jsx(D,{type:"button",onClick:()=>{t(B()),t(H()),w("/")},children:"Log out"})]})})};export{q as default};
