import { useState } from 'react';
import { FaRegSmileBeam, FaRegSmile } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonSubmit,
  ErrorTitle,
  Form,
  Input,
  WrapperInput,
  WrapperInputPassword,
} from '../RenderForm.styled';

export const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required(`Email required`),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .required(`Password required`),
});

export const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
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
              <button type="button" onClick={() => setVisible(!visible)}>
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
  );
};
