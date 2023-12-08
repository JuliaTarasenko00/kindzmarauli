import{s as o}from"./index-v82_khNA.js";const t=o.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,n=o.div`
  position: relative;
  display: block;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;o.form``;const a=o.input`
  padding: 10px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff63;
  height: 44px;
  color: var(--main-color);
`,i=o.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  gap: 8px;
`,s=o.button`
  border: none;
  background-color: transparent;
  color: grey;

  & svg {
    width: 15px;
    height: 15px;
  }

  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`,e=o.section`
  padding-bottom: 40px;
`;export{t as B,s as D,n as F,a as I,i as W,e as a};
