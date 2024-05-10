import { Field } from 'formik';
import styled from 'styled-components';

export const Section = styled.div`
  background-color: #0f0f11b8;
  padding: 45px;
`;

export const WrapperOrder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  & p:not(:last-child) {
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #9ea2aa;
    margin-bottom: 5px;

    & span {
      color: #fbd13e;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LabelTitle = styled.p`
  display: block;
  flex-grow: 1;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #9ea2aa;

  &.pay {
    display: inline;
  }

  &.city {
    flex-grow: 0.32;
  }

  & span {
    color: #fbd13e;
  }
`;

export const Option = styled.option``;

export const Input = styled(Field)`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const PhoneInput = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const ErrorMessage = styled.p`
  color: #ff0000a3;
  font-size: 13px;
  letter-spacing: 0.05em;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 30px;
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
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: #bc8d1b;
  }
`;

export const TitleIsOrder = styled.h3`
  max-width: 300px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  line-height: 1.69;
  letter-spacing: 1.3px;
`;
