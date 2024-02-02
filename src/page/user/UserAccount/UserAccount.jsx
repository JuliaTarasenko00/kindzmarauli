import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FaRegSmile, FaRegSmileBeam } from 'react-icons/fa';
import { MdTipsAndUpdates, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { Container } from '../../../globalStyle';
import { userLogOut } from '../../../redux/auth/operation';
import { dataUser } from '../../../redux/selector';
import { useNavigate } from 'react-router-dom';
import { clearBasket } from '../../../redux/basket/operationNotAuth';
import {
  ButtonLogOut,
  ButtonSubmit,
  ErrorTitle,
  Form,
  Input,
  Section,
  Title,
  WrapperInput,
  WrapperInputVisible,
} from './UserAccount.styled';
import { Formik } from 'formik';
import { emailRegexp } from '../../../helpers/emailRegexp';
import { useState } from 'react';

const SigninSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Min length 3 symbol')
    .max(30, 'Max length 3 symbol'),
  email: Yup.string().matches(emailRegexp, `This is an ERROR email`),
  password: Yup.string().min(8, 'Password must contain at least 8 characters'),
  phoneNumber: Yup.number().min(10),
});

const UserAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(dataUser);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState({});

  const initialValues = {
    fullName: user?.fullName,
    phoneNumber: user?.phoneNumber,
    email: user?.email,
    password: '',
  };

  const handelSubmitForm = () => {
    console.log('done');
  };

  const handelClick = (name) => {
    setDisabled({ ...disabled, [name]: !disabled[name] });
  };

  return (
    <Section>
      <Container>
        <Title>Your Profile</Title>
        <p
          style={{
            fontSize: '0.7rem',
            fontWeight: 400,
            lineHeight: 1.5,
            marginTop: '1rem',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          Sorry, the data change functionality is not available at the moment.
          We will Fix everything soon 😉👩‍💻
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handelSubmitForm}
          validationSchema={SigninSchema}
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
                <WrapperInputVisible>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    disabled={!disabled['fullName']}
                    $data_disabled={(!!disabled['fullName']).toString()}
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <button type="button" onClick={() => handelClick('fullName')}>
                    {!disabled['fullName'] ? (
                      <MdTipsAndUpdates />
                    ) : (
                      <MdOutlineTipsAndUpdates />
                    )}
                  </button>
                </WrapperInputVisible>
                {errors.fullName && touched.fullName && (
                  <ErrorTitle>{errors.fullName}</ErrorTitle>
                )}
              </WrapperInput>
              <WrapperInput>
                <WrapperInputVisible>
                  <Input
                    placeholder="Phone Number"
                    type="phoneNumber"
                    name="phoneNumber"
                    disabled={!disabled['phoneNumber']}
                    $data_disabled={(!!disabled['phoneNumber']).toString()}
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <button
                    type="button"
                    onClick={() => handelClick('phoneNumber')}
                  >
                    {!disabled['phoneNumber'] ? (
                      <MdTipsAndUpdates />
                    ) : (
                      <MdOutlineTipsAndUpdates />
                    )}
                  </button>
                </WrapperInputVisible>
                {errors.phoneNumber && touched.phoneNumber && (
                  <ErrorTitle>{errors.phoneNumber}</ErrorTitle>
                )}
              </WrapperInput>
              <WrapperInput>
                <WrapperInputVisible>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    disabled={!disabled['email']}
                    $data_disabled={(!!disabled['email']).toString()}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete=""
                  />
                  <button type="button" onClick={() => handelClick('email')}>
                    {!disabled['email'] ? (
                      <MdTipsAndUpdates />
                    ) : (
                      <MdOutlineTipsAndUpdates />
                    )}
                  </button>
                </WrapperInputVisible>
                {errors.email && touched.email && (
                  <ErrorTitle>{errors.email}</ErrorTitle>
                )}
              </WrapperInput>
              <WrapperInput>
                <WrapperInputVisible>
                  <Input
                    type={!visible ? 'password' : 'text'}
                    name="password"
                    disabled
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete=""
                  />
                  <button
                    className="password"
                    type="button"
                    onClick={() => setVisible(!visible)}
                  >
                    {!visible ? <FaRegSmileBeam /> : <FaRegSmile />}
                  </button>
                </WrapperInputVisible>
                {errors.password && touched.password && (
                  <ErrorTitle>{errors.password}</ErrorTitle>
                )}
              </WrapperInput>
              <ButtonSubmit type="submit" onClick={() => setDisabled({})}>
                Change the Data
              </ButtonSubmit>
            </Form>
          )}
        </Formik>
        <ButtonLogOut
          type="button"
          onClick={() => {
            dispatch(userLogOut());
            dispatch(clearBasket());
            navigate('/');
          }}
        >
          Log out
        </ButtonLogOut>
      </Container>
    </Section>
  );
};

export default UserAccount;
