import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegSmile, FaRegSmileBeam } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonSubmit,
  ButtonToMenu,
  ErrorTitle,
  Form,
  Img,
  Input,
  Section,
  TitleRenderForm,
  WrapperContent,
  WrapperInput,
  WrapperInputPassword,
  WrapperRenderForm,
} from './RenderForm.styled';
import { useDispatch } from 'react-redux';
import { userSignup } from '../../redux/auth/operation';
import img from '../../assets/img/auth_form_img.jpg';
import { Container } from '../../globalStyle';
import { emailRegexp } from '../../helpers/emailRegexp';
import { Loader } from '../../components/Loader/Loader';
import { phoneNumberForBack } from '../../helpers/phoneNumberForBack';
import MaskedInput from '../../helpers/MaskPhoneNumber';

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
  tel: Yup.string().min(10).required(`Phone number required`),
});

const RegisterForm = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmitForm = useCallback(
    (values) => {
      const { numberClean } = phoneNumberForBack(values.tel);

      const data = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        phoneNumber: numberClean,
      };

      dispatch(userSignup(data));
    },
    [dispatch],
  );

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Section>
          <Container>
            <WrapperContent>
              <WrapperRenderForm>
                <Formik
                  initialValues={{
                    fullName: '',
                    email: '',
                    password: '',
                    tel: '',
                  }}
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
                        <MaskedInput
                          ref={ref}
                          placeholder="Phone Number"
                          type="tel"
                          name="tel"
                          value={values.tel}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.tel && touched.tel && (
                          <ErrorTitle>{errors.tel}</ErrorTitle>
                        )}
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
                        Register Now
                      </ButtonSubmit>
                    </Form>
                  )}
                </Formik>
                <TitleRenderForm>
                  <p>Don`t have an account?</p>
                  <button type="button" onClick={() => navigate('/login')}>
                    Signup now
                  </button>
                </TitleRenderForm>
              </WrapperRenderForm>
              <Img src={img} alt="" height="500" width="300" />
            </WrapperContent>
            <ButtonToMenu type="button" onClick={() => navigate('/')}>
              Return to the Menu
            </ButtonToMenu>
          </Container>
        </Section>
      )}
    </>
  );
};

export default RegisterForm;
