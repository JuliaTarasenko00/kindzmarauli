import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const Title = styled.h2`
  color: #fbd13e;
  font-weight: 500;
  line-height: 1.12;
  font-size: 30px;
  text-align: center;
`;
export const Form = styled.form`
  display: block;
  display: block;
  max-width: 500px;
  margin: 30px auto 0;
`;

export const WrapperInput = styled.div`
  position: relative;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${({ ['$data_disabled']: disabled }) =>
    disabled === 'true' && disabled !== undefined
      ? 'transparent'
      : '#52525252'};
  border-radius: 10px;
  border: 2px solid
    ${({ ['$data_disabled']: disabled }) =>
      disabled === 'true' && disabled !== undefined
        ? '#ffffff63'
        : '#0000007d'};
  height: 44px;
  color: var(--main-color);
  outline-color: transparent;
`;

export const ErrorTitle = styled.p`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5;
  color: red;
`;

export const WrapperInputVisible = styled.div`
  position: relative;

  & button {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    color: var(--main-color);
    transform: translateY(-50%);
    right: 8px;
    border: none;
    background-color: transparent;
    transition: color var(--transition);

    &:hover,
    :focus {
      color: var(--active-color);
    }

    &.password {
      cursor: not-allowed;
      color: grey;
    }
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #fbd13e;
  box-shadow: 0px 10px 31px 0px rgba(15, 15, 17, 0.2);
  color: #000;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.69;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  padding: 10px;
  width: 187px;
  max-width: 100%;
  border: none;
  margin-top: 40px;
  border-radius: 16px;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: #917206;
  }
`;

export const ButtonToMenu = styled.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  color: #fbd13e;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`;

export const ButtonLogOut = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  text-align: center;
  margin: 0 0 0 auto;
  display: block;
  color: #fbd13e;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: #917206;
  }
`;
