import{g as o,h as r}from"./index-SACi1fX3.js";const n=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({["$positionContent"]:t})=>t==="true"?"start":"center"};
  gap: 20px;
`,a=o.li`
  max-width: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(240 255 255);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fbd13e;
`,e=o.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 150px);
`,c=o.div`
  flex-grow: 1;
`,s=o.img`
  object-fit: cover;
  height: 150px;
`,p=o.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--main-color-dark);
  margin-bottom: 5px;
  text-transform: uppercase;
`,l=o.p`
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  margin-bottom: 10px;
`,d=o.p`
  width: max-content;
  padding: 5px;
  background-color: gray;
  border-radius: 5px;
  color: var(--main-color);
  margin-bottom: 15px;
`,g=o.div`
  width: 100%;
`,x=o.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  color: var(--main-color-dark);
`,h=o.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  color: gray;

  &:not(:first-child) {
    margin-bottom: 10px;
  }
`,f=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`,m=o(r)`
  cursor: pointer;
  display: block;
  background-color: var(--active-color);
  border: none;
  color: var(--main-color-dark);
  max-width: 84px;
  padding: 10px;
  border-radius: 41px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
    background-color: #000;
  }
`,b=o.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  color: red;
  max-width: 84px;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: #4f0f0f;
  }

  & svg {
    width: 30px;
    height: 30px;
  }
`;export{m as B,b as D,d as G,a as I,n as L,p as N,h as O,x as P,e as W,s as a,c as b,l as c,g as d,f as e};
