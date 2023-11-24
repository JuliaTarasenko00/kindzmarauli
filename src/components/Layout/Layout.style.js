import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  color: var(--main-color);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`;

export const List = styled.ul`
  display: flex;
  gap: 50px;
`;

export const Item = styled.li``;

export const Select = styled.select`
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: var(--main-color);
  border: none;
  transition: color var(--transition);

  &:focus {
    color: var(--active-color);
  }
`;

export const Option = styled.option`
  padding: 21px 81px 23px 20px;

  margin-bottom: 20px;
  background-color: #000;
  color: var(--main-color);
`;

export const Link = styled(NavLink)`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 33px;
`;

export const Button = styled.button`
  cursor: pointer;

  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 24px;
  transition: color var(--transition);

  &:hover {
    color: var(--active-color);
  }
`;
