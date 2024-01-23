import styled from 'styled-components';

export const WrapperContent = styled.div`
  padding: 40px;
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
`;

export const WrapperRenderForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 20px;
`;

export const TitleRenderForm = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;

  & p {
    color: var(--main-color);
  }

  & button {
    cursor: pointer;
    display: block;
    background-color: transparent;
    border: none;
    color: #fbd13e;
  }
`;

export const Img = styled.img`
  box-shadow: 0px 2px 10px 2px rgb(255 255 255 / 35%);
`;

export const Form = styled.form`
  display: block;
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
  background: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff63;
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

export const WrapperInputPassword = styled.div`
  position: relative;

  & button {
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
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: #917206;
  }
`;
