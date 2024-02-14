import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: var(--active-color);
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  transition: color var(--transition);
  margin-bottom: 15px;

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
  }
`;
