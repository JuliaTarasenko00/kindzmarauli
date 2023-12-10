import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import img from '../../assets/img/bg.png';

export const Header = styled.header`
  position: static;
  top: 0;
  padding-bottom: 44px;
  padding-top: 50px;
  z-index: 20;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.6195728291316527) 48%
  );
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
`;

export const Logo = styled(Link)`
  color: var(--main-color);
  font-size: 26px;
  line-height: 1;
  font-weight: 900;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Span = styled.span``;

export const WrapperNav = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 420px;

  @media screen and (max-width: 767px) {
    position: fixed;
    visibility: ${({ ['data-visibility']: visibility }) =>
      visibility === 'true' ? 'visible' : 'hidden'};
    opacity: ${({ ['data-visibility']: opacity }) =>
      opacity === 'true' ? '1' : '0'};
    background-color: #000;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    padding: 50px;
    transition: visibility 350ms ease-in-out, opacity 350ms ease-in-out;
    background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.6195728291316527) 48%
      ),
      url(${img});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
  }

  @media screen and (min-width: 1400px) {
    max-width: 100%;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 767px) {
    width: max-content;
  }
`;

export const Button = styled.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  &.user_button {
    margin-right: 20px;
  }
  &.close_mobil_menu {
    position: absolute;
    top: 40px;
    right: 50px;
  }

  @media screen and (min-width: 768px) {
    &.open_mobil_menu,
    &.close_mobil_menu {
      display: none;
    }

    &.user_button {
      margin-right: 0;
    }
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`;

export const MainNavigate = styled(NavLink)`
  color: var(--main-color);
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }
`;

export const WrapperAction = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const WrapperBasket = styled.div`
  position: relative;
`;

export const NumberOrders = styled.p`
  position: absolute;
  top: -13px;
  right: -10px;
  color: #000;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  background-color: #9d4805;
  padding: 2px 7px;
  border-radius: 4px;
  border: 1px solid;
`;
