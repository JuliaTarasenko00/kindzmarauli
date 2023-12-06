import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SectionMobil = styled.section`
  padding-bottom: 60px;
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: none;
  @media screen and (min-width: 768px) {
    padding-bottom: 169px;
    display: block;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled.h3`
  color: var(--main-color);
  font-size: 30px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 60px;
  }

  @media screen and (min-width: 1400px) {
    margin-bottom: 64px;
    font-size: 80px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const Item = styled.li`
  background: #000;
  padding: 0 8px;
  width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.03) translateZ(10px);
  }

  @media screen and (min-width: 1400px) {
    padding: 0 18px;
    height: 314px;
  }
`;

export const MobileItem = styled.div`
  background: #000;
  padding: 0 8px;
  width: 200px;
  height: 220px;
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
  font-weight: 500;
  font-size: 12px;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1400px) {
    font-size: 20px;
  }
`;

export const ImgLast = styled.img``;

export const DiscountTitle = styled.p`
  color: #0f0f11;
  padding-top: 13px;
  font-size: 25px;
  line-height: 1.2;

  &.discount_last {
    margin-top: 0;
    padding-bottom: 23px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 18px;
    font-size: 35px;
  }

  @media screen and (min-width: 1400px) {
    padding-top: 23px;

    font-size: 45px;
  }
`;
