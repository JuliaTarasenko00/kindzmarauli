import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaRegSmileBeam, FaRegSmile } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonSubmit,
  ErrorTitle,
  Form,
  Img,
  Input,
  TitleRenderForm,
  WrapperContent,
  WrapperInput,
  WrapperInputPassword,
  WrapperRenderForm,
} from './RenderForm.styled';
import { userSignin } from '../../../redux/auth/operation';
import img from '../../../assets/img/auth_form_img.jpg';
import { Container } from '../../../globalStyle';

export const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required(`Email required`),
  password: Yup.string()
    .min(8, 'Password must contain at least 8 characters')
    .required(`Password required`),
});

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmitAuth = useCallback(
    async (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };

      dispatch(userSignin(user));
    },
    [dispatch],
  );

  return (
    <section>
      <Container>
        <WrapperContent>
          <WrapperRenderForm>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={handelSubmitAuth}
              validationSchema={SigninSchema}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                touched,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <WrapperInput>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete=""
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <ErrorTitle>{errors.email}</ErrorTitle>
                    )}
                  </WrapperInput>
                  <WrapperInput>
                    <WrapperInputPassword>
                      <Input
                        type={!visible ? 'password' : 'text'}
                        name="password"
                        placeholder="Password"
                        autoComplete=""
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <button
                        type="button"
                        onClick={() => setVisible(!visible)}
                      >
                        {!visible ? <FaRegSmileBeam /> : <FaRegSmile />}
                      </button>
                    </WrapperInputPassword>
                    {errors.password && touched.password && (
                      <ErrorTitle>{errors.password}</ErrorTitle>
                    )}
                  </WrapperInput>
                  <ButtonSubmit type="submit" disabled={isSubmitting}>
                    Login Now
                  </ButtonSubmit>
                </Form>
              )}
            </Formik>
            <TitleRenderForm>
              <p>Don`t have an account?</p>
              <button type="button" onClick={() => navigate('/register')}>
                Signup now
              </button>
            </TitleRenderForm>
          </WrapperRenderForm>
          <Img src={img} alt="" height="500" width="300" />
        </WrapperContent>
      </Container>
    </section>
  );
};

export default LoginForm;
