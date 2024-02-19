import styled from 'styled-components';

export const RemoveButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #ff0000;
  border: none;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: #de5050;
  }
`;

export const Form = styled.form``;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const WrapperAddedImageInput = styled.div``;

export const WrapperImage = styled.div``;

export const Image = styled.img`
  width: 500px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DeleteImage = styled.button``;

export const LabelAddedImage = styled.label`
  display: block;
  cursor: pointer;
  margin-top: 15px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--main-color);
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: block;
  color: #f1c40f;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 7px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  outline: none;

  &.price {
    width: 50%;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 20px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  border-radius: 7px;
  outline: none;
`;

export const WrapperPrice = styled.div`
  display: flex;
  gap: 10px;
`;

export const ChangeButton = styled.button`
  cursor: ${({ ['disabled']: disabled }) => (disabled ? 'no-drop' : 'pointer')};
  border: none;
  display: block;
  background-color: ${({ ['disabled']: disabled }) =>
    disabled ? 'grey' : 'var(--active-color)'};
  color: #000;
  padding: 10px 8px;
  border-radius: 15px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  transition: background-color var(--transition);
  margin-left: auto;
  margin-top: 30px;
  &:hover,
  :focus {
    background-color: ${({ ['disabled']: disabled }) =>
      disabled ? '' : 'var(--button-basket-background-active)'};
  }
`;

export const ErrorTitle = styled.p`
  position: relative;
  top: 5px;
  font-size: 10px;
  line-height: 1;
  color: red;
`;

export const WrapperSelect = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;
