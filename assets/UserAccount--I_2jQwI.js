import{g as t,c as F,d as $,u as R,J as M,b as f,j as e,C as T,K as z,x as B}from"./index-bcBMVgA9.js";import{c as E,a as d,F as _}from"./index.esm-c7reRWkM.js";import{e as A,F as I,a as O}from"./emailRegexp-B0w401Rz.js";import{M as g,a as j}from"./index.esm-4ferryu_.js";import{M as P}from"./MaskPhoneNumber-6TcvbEwE.js";import"./index-snWXqJox.js";import"./RenderForm.styled-hh75f4fg.js";const U=t.section`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`,W=t.h2`
  color: #fbd13e;
  font-weight: 500;
  line-height: 1.12;
  font-size: 30px;
  text-align: center;
`,D=t.form`
  display: block;
  display: block;
  max-width: 500px;
  margin: 30px auto 0;
`,p=t.div`
  position: relative;

  &:not(:first-child) {
    margin-top: 20px;
  }
`,m=t.input`
  width: 100%;
  padding: 10px;
  background-color: ${({["$data_disabled"]:a})=>a==="true"&&a!==void 0?"transparent":"#52525252"};
  border-radius: 10px;
  border: 2px solid
    ${({["$data_disabled"]:a})=>a==="true"&&a!==void 0?"#ffffff63":"#0000007d"};
  height: 44px;
  color: var(--main-color);
  outline-color: transparent;
`,u=t.p`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5;
  color: red;
`,h=t.div`
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
`,L=t.button`
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
`;t.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  color: #fbd13e;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`;const V=t.button`
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
`,Y=E().shape({fullName:d().min(3,"Min length 3 symbol").max(30,"Max length 3 symbol"),email:d().matches(A,"This is an ERROR email"),password:d().min(8,"Password must contain at least 8 characters"),phoneNumber:d().min(10)}),Z=()=>{const a=F(),w=$(),n=R(M),[x,y]=f.useState(!1),[o,N]=f.useState({}),k=f.useRef(null),v={fullName:n==null?void 0:n.fullName,phoneNumber:n==null?void 0:n.phoneNumber,email:n==null?void 0:n.email,password:""},S=()=>{console.log("done")},b=s=>{N({...o,[s]:!o[s]})};return e.jsx(U,{children:e.jsxs(T,{children:[e.jsx(W,{children:"Your Profile"}),e.jsx("p",{style:{fontSize:"0.7rem",fontWeight:400,lineHeight:1.5,marginTop:"1rem",textAlign:"center",color:"#fff"},children:"Sorry, the data change functionality is not available at the moment. We will Fix everything soon 😉👩‍💻"}),e.jsx(_,{initialValues:v,onSubmit:S,validationSchema:Y,children:({values:s,handleChange:r,handleSubmit:C,handleBlur:l,errors:i,touched:c})=>e.jsxs(D,{onSubmit:C,children:[e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(m,{type:"text",placeholder:"Full Name",name:"fullName",disabled:!o.fullName,$data_disabled:(!!o.fullName).toString(),value:s.fullName,onChange:r,onBlur:l}),e.jsx("button",{type:"button",onClick:()=>b("fullName"),children:o.fullName?e.jsx(j,{}):e.jsx(g,{})})]}),i.fullName&&c.fullName&&e.jsx(u,{children:i.fullName})]}),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(P,{CustomComponent:m,ref:k,placeholder:"Phone Number",type:"phoneNumber",name:"phoneNumber",disabled:!o.phoneNumber,$data_disabled:(!!o.phoneNumber).toString(),value:s.phoneNumber,onChange:r,onBlur:l}),e.jsx("button",{type:"button",onClick:()=>b("phoneNumber"),children:o.phoneNumber?e.jsx(j,{}):e.jsx(g,{})})]}),i.phoneNumber&&c.phoneNumber&&e.jsx(u,{children:i.phoneNumber})]}),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(m,{type:"email",placeholder:"Email",name:"email",disabled:!o.email,$data_disabled:(!!o.email).toString(),value:s.email,onChange:r,onBlur:l,autoComplete:""}),e.jsx("button",{type:"button",onClick:()=>b("email"),children:o.email?e.jsx(j,{}):e.jsx(g,{})})]}),i.email&&c.email&&e.jsx(u,{children:i.email})]}),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(m,{type:x?"text":"password",name:"password",disabled:!0,placeholder:"Password",value:s.password,onChange:r,onBlur:l,autoComplete:""}),e.jsx("button",{className:"password",type:"button",onClick:()=>y(!x),children:x?e.jsx(O,{}):e.jsx(I,{})})]}),i.password&&c.password&&e.jsx(u,{children:i.password})]}),e.jsx(L,{type:"submit",onClick:()=>N({}),children:"Change the Data"})]})}),e.jsx(V,{type:"button",onClick:()=>{a(z()),a(B()),w("/")},children:"Log out"})]})})};export{Z as default};