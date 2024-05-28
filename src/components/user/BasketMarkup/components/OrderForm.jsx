import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import MaskedInput from '../../../../helpers/MaskPhoneNumber';
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  Label,
  Option,
  PhoneInput,
  Section,
  LabelTitle,
  WrapperInput,
  TitleIsOrder,
  WrapperOrder,
  WrapperForm,
} from './OrderForm.styled';
import img from '../../../../assets/img/order.png';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasket } from '../../../../redux/basket/operationNotAuth';
import { authorized } from '../../../../redux/selector';
import { clearAllDishAuth } from '../../../../redux/basket/operation';

const cityArray = [
  { id: 1, city: 'Odessa' },
  { id: 2, city: 'Kyiv' },
  { id: 3, city: 'Mykolaiv' },
];

const OrderFormSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Enter more than 5 characters')
    .max(30, 'Too Long!')
    .required('Enter your name'),
  phone: Yup.string()
    .min(5, 'Enter more than 5 characters')
    .max(30, 'Too Long!')
    .required('Enter your phone'),
  city: Yup.string()
    .oneOf(
      cityArray.map(({ city }) => city),
      'Invalid city',
    )
    .required('City is required'),
  street: Yup.string().required('Street is required'),
  pay: Yup.string()
    .oneOf(['cash', 'card'], 'Invalid payment method')
    .required('Payment method is required'),
});

export const OrderForm = ({ id }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [isOrder, setIsOrder] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector(authorized);

  const initialValues = {
    userName: '' ?? user?.fullName,
    phone: '' ?? user?.phoneNumber,
    city: cityArray[0].city,
    street: '',
    pay: '',
  };

  const handelSubmitForm = (values) => {
    console.log('values: ', values);
    setIsOrder(true);

    const action = auth ? clearAllDishAuth(id) : clearBasket();
    dispatch(action);
  };

  return (
    <Section>
      {!isOrder && (
        <Formik
          initialValues={initialValues}
          onSubmit={handelSubmitForm}
          validationSchema={OrderFormSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            isSubmitting,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <WrapperForm>
                  <WrapperInput>
                    <Label htmlFor="userName">
                      <LabelTitle>
                        Name <span>*</span>
                      </LabelTitle>
                      <Input type="text" id="userName" name="userName" />
                    </Label>
                    {errors.userName && touched.userName && (
                      <ErrorMessage>{errors.userName}</ErrorMessage>
                    )}
                  </WrapperInput>
                  <WrapperInput>
                    <Label htmlFor="phone">
                      <LabelTitle>
                        Phone <span>*</span>
                      </LabelTitle>
                      <MaskedInput
                        ref={ref}
                        type="tel"
                        id="phone"
                        name="phone"
                        CustomComponent={PhoneInput}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Label>
                    {errors.phone && touched.phone && (
                      <ErrorMessage>{errors.phone}</ErrorMessage>
                    )}
                  </WrapperInput>
                  <WrapperInput>
                    <Label htmlFor="city">
                      <LabelTitle className="city">
                        City <span>*</span>
                      </LabelTitle>
                      <Input as="select" name="city" id="city">
                        {cityArray.map(({ city, id }) => (
                          <Option value={city} key={id}>
                            {city}
                          </Option>
                        ))}
                      </Input>
                    </Label>
                    {errors.city && touched.city && (
                      <ErrorMessage>{errors.city}</ErrorMessage>
                    )}
                  </WrapperInput>
                  <WrapperInput>
                    <Label htmlFor="street">
                      <LabelTitle>
                        Street <span>*</span>
                      </LabelTitle>
                      <Input type="text" name="street" id="street" />
                    </Label>
                    {errors.street && touched.street && (
                      <ErrorMessage>{errors.street}</ErrorMessage>
                    )}
                  </WrapperInput>
                </WrapperForm>
                <WrapperInput className="payment">
                  <p>
                    Payment method <span>*</span>
                  </p>
                  <Label htmlFor="cash" className="pay">
                    <Input type="radio" name="pay" id="cash" value="cash" />
                    <LabelTitle className="pay">Cash</LabelTitle>
                  </Label>
                  <Label htmlFor="card" className="pay">
                    <Input type="radio" name="pay" id="card" value="card" />
                    <LabelTitle className="pay">Card</LabelTitle>
                  </Label>
                  {errors.pay && touched.pay && (
                    <ErrorMessage>{errors.pay}</ErrorMessage>
                  )}
                </WrapperInput>
                <Button type="submit" disabled={isSubmitting}>
                  Order
                </Button>
              </Form>
            );
          }}
        </Formik>
      )}
      {isOrder && (
        <WrapperOrder>
          <img src={img} alt=" " width="200" height="200" />
          <TitleIsOrder>
            Thank you for your order, as soon as possible our manager will
            contact you to confirm the order
          </TitleIsOrder>
        </WrapperOrder>
      )}
    </Section>
  );
};

OrderForm.propTypes = {
  id: PropTypes.string,
};
