import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 44px;
`;

export const WrapperSection = styled.div`
  display: flex;
  gap: 68px;
`;

export const WrapperInfo = styled.div``;

export const Title = styled.p`
  color: var(--main-color);
  width: 312px;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 26px;
`;

export const ImgDesignSmall = styled.img`
  position: relative;
  left: -40px;
`;

export const Link = styled.a`
  display: block;
  color: var(--main-color);
  font-size: 25px;
  font-weight: 500;
  margin-top: 37px;
  transition: color var(--transition);

  &.email {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    text-decoration-line: underline;
    margin-top: 7px;
  }

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;

export const WrapperDish = styled.div`
  position: relative;
`;

export const ImgDish = styled.img`
  height: 550px;
  border-radius: 10px;
`;

export const DishDetails = styled.div`
  padding: 20px;
  width: 337px;
  position: absolute;
  bottom: -60px;
  left: 73px;
  background-color: red;
`;

export const NameDish = styled.h3`
  color: var(--main-color);
  font-size: 25px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 7px;
`;

export const Gram = styled.p`
  width: 47px;
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  padding: 2px 5px;
  background: #ea7171b3;
  border-radius: 5px;
  text-align: center;
`;

export const Description = styled.p`
  margin-top: 7px;
  margin-bottom: 21px;
  color: var(--main-color);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  opacity: 0.8;
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Prise = styled.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  font-size: 25px;
  padding: 5px;
  padding-bottom: 0;
  text-align: center;
  background-color: var(--button-basket-background);
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  :focus {
    background-color: var(--button-basket-background-active);
    color: var(--button-basket-color-active);
  }
`;

export const DishGram = styled.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  width: 47px;
  background-color: var(----gram-background);
  text-align: center;
  border-radius: 2px;
  padding: 2px 0;
  margin-bottom: 23px;
`;

export const ImgDesignBig = styled.img`
  position: absolute;
  right: 0;
  bottom: -330px;
  height: 400px;
`;

export const WrapperDessert = styled.div`
  width: 264px;
  margin-top: 80px;
`;

export const DessertImg = styled.img``;

export const DessertTitle = styled.h4`
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;

  margin-bottom: 5px;
`;
