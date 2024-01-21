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

export const RenderForm = () => {
  const [render, setRender] = useState(true);

  return (
    <Section>
      <WrapperRenderForm>
        {render ? <LoginForm /> : <RegisterForm />}
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
