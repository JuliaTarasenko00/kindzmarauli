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

  &.email {
    font-size: 12px;
    text-decoration-line: underline;
  }

  &:not(:last-child) {
    margin-right: 29px;
  }

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;

export const WrapperOfficial = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 69px;

  &::before {
    content: '';
    background-color: #fff;
    width: 95%;
    height: 0.2px;
    position: absolute;
    bottom: 40%;
    opacity: 0.3;
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
