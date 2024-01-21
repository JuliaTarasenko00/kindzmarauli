import PropTypes from 'prop-types';
import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import img from '../../assets/img/auth_form_img.jpg';
import {
  Img,
  Section,
  TitleRenderForm,
  WrapperRenderForm,
} from './RenderForm.styled';

export const RenderForm = ({ onClose }) => {
  const [render, setRender] = useState(true);

  return (
    <Section>
      <WrapperRenderForm>
        {render ? (
          <LoginForm onClose={onClose} />
        ) : (
          <RegisterForm onClose={onClose} />
        )}
        {render ? (
          <TitleRenderForm>
            <p>Don`t have an account?</p>
            <button type="button" onClick={() => setRender(!render)}>
              Signup now
            </button>
          </TitleRenderForm>
        ) : (
          <TitleRenderForm>
            <p>Already have an account?</p>
            <button type="button" onClick={() => setRender(!render)}>
              Login now
            </button>
          </TitleRenderForm>
        )}
      </WrapperRenderForm>
      <Img src={img} alt="" height="500" width="300" />
    </Section>
  );
};

RenderForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
