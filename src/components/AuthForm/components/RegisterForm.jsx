import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
import { getToken, loading } from '../../../redux/selector';
import { toast } from 'react-toastify';
import { styleToastify } from '../../toastify';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Min length 3 symbol')
    .max(30, 'Max length 3 symbol')
    .required('Your name and surname are required!'),
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required(`Email required`),
  password: Yup.string()
    .min(8, 'Password must contain at least 8 characters')
    .required(`Password required`),
  tel: Yup.number().min(10).required(`Phone number required`),
});

export const RegisterForm = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const isLoading = useSelector(loading);

  const handelSubmitForm = (values) => {
    const data = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      phoneNumber: values.tel,
    };

    dispatch(userSignup(data));

    navigate('user_account');
  };

  useEffect(() => {
    if (token !== '' && !isLoading) {
      dispatch(clearBasket());
      onClose();
      toast.success('You have successfully registered', styleToastify);
    }
  }, [dispatch, isLoading, onClose, token]);

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
          <ButtonSubmit type="submit">Register Now</ButtonSubmit>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
