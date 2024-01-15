import styled from 'styled-components';

export const Section = styled.section``;

export const WrapperSection = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    gap: 68px;
  }
`;

export const WrapperInfo = styled.div`
  position: relative;
`;

export const Title = styled.p`
  color: var(--main-color);
  max-width: 312px;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 26px;
`;

export const ImgDesignSmall = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    position: relative;
    left: -40px;
    display: block;
  }
`;

export const Link = styled.a`
  display: none;
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

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const WrapperDish = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: relative;
  }
`;

export const ImgDish = styled.img`
  height: 300px;
  border-radius: 10px;
  object-fit: fill;

  @media screen and (min-width: 1400px) {
    width: 900px;
    height: 500px;
  }
`;

export const DishDetails = styled.div`
  padding: 10px;
  max-width: 220px;
  position: absolute;
  bottom: 0;
  left: 25px;
  background-color: red;

  @media screen and (min-width: 1400px) {
    padding: 20px;
    max-width: 337px;
    bottom: -60px;
    left: 73px;
  }
`;

export const NameDish = styled.h3`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 7px;

  @media screen and (min-width: 1400px) {
    font-size: 25px;
  }
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
  font-size: 11px;
  font-weight: 500;
  line-height: 1.4;
  opacity: 0.8;

  @media screen and (min-width: 1400px) {
    font-size: 15px;
  }
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const DiscountedPrice = styled.p`
  color: var(--main-color);
  font-size: 2vh;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Prise = styled.p`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 800;

  @media screen and (min-width: 1400px) {
    font-size: 23px;
  }
`;

export const Discount = styled.p`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 3vh;
  font-weight: 500;
  line-height: 1.2;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: var(--main-color);

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
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
  display: none;

  @media screen and (min-width: 1400px) {
    position: absolute;
    right: 0;
    bottom: -330px;
    height: 400px;
    display: block;
  }
`;

export const WrapperDessert = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 264px;
    margin-top: 80px;
  }
`;

export const DessertImg = styled.img``;

export const DessertTitle = styled.h4`
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;

  margin-bottom: 5px;
`;
