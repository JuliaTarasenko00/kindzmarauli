import { useState } from 'react';
import { FaRegSmile, FaRegSmileBeam } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { emailRegexp } from './LoginForm';
import {
  ButtonSubmit,
  ErrorTitle,
  Form,
  Input,
  WrapperInput,
  WrapperInputPassword,
} from '../RenderForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../../../redux/auth/operation';
import { clearBasket } from '../../../redux/basket/operationNotAuth';

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Min length 3 symbol')
    .max(30, 'Max length 3 symbol')
    .required('Your name and surname are required!'),
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required(`Email required`),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .required(`Password required`),
  tel: Yup.number().min(10).required(`Phone number required`),
});

export const RegisterForm = () => {
  const [visible, setVisible] = useState(false);
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.isLoading);

  console.log('error: ', error);
  const dispatch = useDispatch();

  const handelSubmitForm = (values) => {
    const data = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      phoneNumber: values.tel,
    };

    if (error === null && !loading) {
      dispatch(clearBasket());
    }

    dispatch(userSignup(data));
  };

  return (
    <Formik
      initialValues={{ fullName: '', email: '', password: '', tel: '' }}
      onSubmit={handelSubmitForm}
      validationSchema={RegisterSchema}
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
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fullName && touched.fullName && (
              <ErrorTitle>{errors.fullName}</ErrorTitle>
            )}
          </WrapperInput>
          <WrapperInput>
            <Input
              placeholder="Phone Number"
              type="tel"
              name="tel"
              value={values.tel}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.tel && touched.tel && <ErrorTitle>{errors.tel}</ErrorTitle>}
          </WrapperInput>
          <WrapperInput>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete=""
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
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete=""
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
            Register Now
          </ButtonSubmit>
        </Form>
      )}
    </Formik>
  );
};
