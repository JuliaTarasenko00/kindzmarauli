import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  width: 300px;
  background-color: rgb(240, 255, 255);
  padding: 50px;
  border-radius: 20px;
  box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`;

export const Link = styled(NavLink)`
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }

  &.logo {
    color: #0e1b95;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
