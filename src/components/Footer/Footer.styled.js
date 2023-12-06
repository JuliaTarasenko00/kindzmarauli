import styled from 'styled-components';

export const SectionFooter = styled.footer`
  background-color: #000;
  padding-top: 62px;
  padding-bottom: 34px;
  position: relative;
`;

export const WrapperContact = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const NameRestaurant = styled.p`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`;

export const Link = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
  display: block;

  &.email {
    font-size: 12px;
    text-decoration-line: underline;
  }

  &:not(:last-child) {
    margin-bottom: 19px;
  }

  &:hover,
  :focus {
    color: var(--active-color);
  }

  @media screen and (min-width: 768px) {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 29px;
      margin-bottom: 0;
    }
  }
`;

export const WrapperOfficial = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 0.5px solid grey;
  padding-top: 28px;

  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const TitleOfficial = styled.p`
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

export const WrapperPolicy = styled.div``;

export const Policy = styled.a`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:not(:last-child) {
    margin-right: 35px;
  }
`;
