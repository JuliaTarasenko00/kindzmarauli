import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  cursor: pointer;

  color: ${({ ['data-active']: active }) =>
    active === 'false' ? '#fff' : 'var(--active-color)'};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 40px;
  width: 237px;
  padding: 15px;
  background: #000;
  z-index: 100;
`;

export const SelectItem = styled.li`
  padding: 5px;
  border-radius: 5px;
  transition: background-color var(--transition);

  &:not(:last-child) {
    margin-bottom: 17px;
  }

  &:hover,
  :focus {
    background-color: #80808075;
  }
`;

export const SelectLink = styled(NavLink)`
  display: block;
  color: #fff;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;
