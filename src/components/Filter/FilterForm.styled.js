import styled from 'styled-components';

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
`;

export const FormWrapper = styled.div`
  position: relative;
`;

export const Form = styled.form``;

export const Input = styled.input`
  padding: 10px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff63;
  height: 44px;
  color: var(--main-color);
`;

export const WrapperButton = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: grey;

  & svg {
    width: 15px;
    height: 15px;
  }

  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;
