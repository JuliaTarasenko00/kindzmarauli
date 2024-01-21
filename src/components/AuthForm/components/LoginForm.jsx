import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { authentication, getToken, loading } from '../../../redux/selector';
import { clearBasket } from '../../../redux/basket/operationNotAuth';
import { userSignin } from '../../../redux/auth/operation';
import { useNavigate } from 'react-router-dom';

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

export const LoginForm = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const isLoading = useSelector(loading);
  const auth = useSelector(authentication);

  const handelSubmitAuth = useCallback(
    async (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      try {
        dispatch(userSignin(user));

        if (auth) {
          navigate('/user_account');
        }
      } catch (error) {
        console.log('error: ', error);
      }
    },
    [auth, dispatch, navigate],
  );

  useEffect(() => {
    if (token !== '' && !isLoading) {
      dispatch(clearBasket());
      onClose();
    }
  }, [dispatch, isLoading, onClose, token]);

  return (
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

LoginForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
