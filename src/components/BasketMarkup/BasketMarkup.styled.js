import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 42px;

  @media screen and (min-width: 768px) {
    padding-bottom: 142px;
  }
`;

export const WrapperName = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  color: var(--main-color);
  font-size: 60px;
  font-weight: 500;
  line-height: 1.12;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
`;

export const ButtonRemoveBasket = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #acacacba;
  text-align: center;
  transition: color var(--transition);
  text-transform: uppercase;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid;
  padding-bottom: 2px;
  font-size: 13px;
  margin-top: 5px;

  &:hover,
  :focus {
    color: var(--active-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 0;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  background-color: #000;
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const WrapperInformation = styled.div`
  margin: 10px 10px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: space-between;
    width: 100%;

    margin: 0;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 110px;
  max-height: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 180px;
    width: 195px;
  }
`;

export const WrapperDish = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 7px;

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 0;
    width: 240px;
  }
`;

export const Name = styled.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
    margin-bottom: 7px;
    font-size: 20px;
  }
`;

export const Gram = styled.p`
  color: var(--main-color);
  padding: 2px 4px;
  background-color: gray;
  text-align: center;
  display: inline;
  border-radius: 2px;
`;

export const Price = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    color: var(--main-color);
    font-size: 23px;
    font-weight: 800;
    line-height: normal;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonCount = styled.button`
  cursor: pointer;
  color: var(--main-color);
  background-color: transparent;
  border: none;
`;

export const Count = styled.p`
  color: var(--main-color);
`;

export const Sum = styled.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
  line-height: normal;
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #ff0000;
  background-color: transparent;
  border: 1px solid #ff0000;
  padding: 4px;
  padding-bottom: 0;
  transition: color var(--transition), border var(--transition);

  @media screen and (min-width: 768px) {
    position: relative;
    margin-right: 35px;
  }

  &:hover,
  :focus {
    color: #4d0000;
    border: 1px solid #4d0000;
  }
`;

export const Total = styled.h4`
  color: var(--main-color);
  margin-top: 24px;
`;

export const Span = styled.span`
  color: #9ea2aa;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.65px;
  text-transform: uppercase;
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 44px;
`;

export const Form = styled.form`
  width: max-content;
`;

export const Label = styled.label`
  color: #9ea2aa;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.65px;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: block;
`;

export const WrapperPromo = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    gap: 0;
  }
`;

export const Input = styled.input`
  margin-right: 19px;
  width: 234px;
  max-width: 100%;
  padding: 8px;
  font-size: 19px;
  font-weight: 500;
  outline: transparent;
`;

export const ButtonPromo = styled.button`
  color: #fbd13e;
  background-color: transparent;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.69;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  border: 1px solid #fbd13e;
  padding: 10px 20px;
  max-width: 150px;
  transition: color var(--transition), border var(--transition);

  &:hover,
  :focus {
    color: #917206;
    border: 1px solid #917206;
  }
`;

export const ErrorTitle = styled.p`
  color: #ff000091;
  width: max-content;
  position: absolute;
  bottom: -20px;
  left: 0;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const DeleteButton = styled.button`
  position: absolute;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
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
`;

export const ButtonOrder = styled.button`
  margin-top: 30px;
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

  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: #917206;
  }
`;

export const NoOrdersTitle = styled.h3`
  color: var(--active-color);
  font-size: 22px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.32px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 17px;
  }
`;

export const NoOrdersDescription = styled.p`
  color: #777;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.18px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const NoOrdersImg = styled.img`
  margin: 0 auto;
`;

export const NoOrdersButton = styled.button`
  border-radius: 30px;
  background-color: #282828;
  color: var(--main-color);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  width: 210px;
  max-width: 100%;
  padding: 13px 0;
  border: none;
  margin: 10px auto 0;
  display: block;

  @media screen and (min-width: 768px) {
    margin: 30px auto 0;
  }
`;
