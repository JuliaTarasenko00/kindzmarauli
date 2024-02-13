import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1;
`;

export const WrapperMainLayout = styled.div`
  height: max-content;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperAdmin = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  color: var(--main-color);
  margin-right: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--active-color);
  color: #000;
  padding: 10px 8px;
  border-radius: 15px;
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
    background-color: transparent;
  }
`;
