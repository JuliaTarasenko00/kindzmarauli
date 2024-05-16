import { Field } from 'formik';
import styled from 'styled-components';

export const Section = styled.div`
  background-color: #0f0f11b8;
  padding: 25px;

  @media screen and (min-width: 768px) {
    padding: 45px;
  }
`;

export const WrapperOrder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  &.payment {
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 5px;

    @media screen and (min-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  & p:not(:last-child) {
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #9ea2aa;

    & span {
      color: #fbd13e;
    }
  }
`;

export const Label = styled.label`
  display: grid;
  gap: 5px;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-auto-columns: auto;
    justify-items: start;
    justify-content: space-between;
  }
`;

export const LabelTitle = styled.p`
  display: block;
  flex-grow: 1;
  font-weight: 500;
  font-size: 10px;
  display: flex;
  gap: 2px;
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

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

export const Option = styled.option``;

export const Input = styled(Field)`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
`;

export const PhoneInput = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: #ff0000a3;
  font-size: 13px;
  letter-spacing: 0.05em;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  margin-top: 30px;
  margin-left: auto;
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
