import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 144px;
  padding-bottom: 169px;
`;

export const Title = styled.h3`
  color: var(--main-color);
  font-size: 80px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  margin-bottom: 64px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
  background: #000;
  padding: 0 18px;
  width: 233px;
  height: 314px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.03) translateZ(10px);
  }
`;

export const ImgFirst = styled.img``;

export const Navigate = styled(Link)`
  color: var(--main-color);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`;

export const ImgLast = styled.img``;

export const DiscountTitle = styled.p`
  color: #0f0f11;
  padding-top: 23px;
  font-size: 45px;
  line-height: 1.2;

  &.discount_last {
    margin-top: 0;
    padding-bottom: 23px;
  }
`;
