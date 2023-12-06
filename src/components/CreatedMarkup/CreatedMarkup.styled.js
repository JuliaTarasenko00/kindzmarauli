import styled from 'styled-components';

export const Title = styled.h3`
  color: var(--main-color);
  font-size: 30px;
  font-weight: 500;
  line-height: 1.12;
  margin: 20px auto 0;

  @media screen and (min-width: 768px) {
    width: 643px;
    font-size: 80px;
  }

  &.hot_dishes {
    margin: 0;
  }
`;

export const PopularList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  margin: 28px auto 0;
  justify-content: center;

  @media screen and (min-width: 768px) {
    column-gap: 15px;
    max-width: 960px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
  }
`;

export const PopularItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  position: relative;
`;

export const Discount = styled.p`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #ff00008c;
  border-radius: 2.5px;
  padding: 5px;
  color: white;
`;

export const PopularWrapper = styled.div`
  flex-grow: 1;
`;

export const Image = styled.img`
  border-radius: 5px;
  height: 245px;
  object-fit: cover;
`;

export const NameDish = styled.h4`
  color: var(--main-color);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 15px;
`;

export const GramDish = styled.p`
  width: 47px;
  padding: 2px 5px;
  text-align: center;
  border-radius: 2px;
  background-color: var(--gram-background);
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DishDescription = styled.p`
  color: var(--main-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.38;
  opacity: 0.8;
  margin-bottom: 14px;
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

export const DiscountedPrice = styled.p`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  opacity: 0.8;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  color: #000;
  font-size: 25px;
  padding: 5px;
  padding-bottom: 0;
  text-align: center;
  background-color: var(--button-basket-background);
  transition: color var(--transition), background-color var(--transition);

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
