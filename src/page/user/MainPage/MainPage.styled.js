import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-bottom: 144px;
  }
`;

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
`;
