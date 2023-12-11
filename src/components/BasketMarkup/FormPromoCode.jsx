import { Formik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ButtonPromo,
  DeleteButton,
  ErrorTitle,
  Form,
  Input,
  Label,
  Wrapper,
  WrapperPromo,
} from './BasketMarkup.styled';

const SignupSchema = Yup.object().shape({
  code: Yup.string()
    .min(5, 'Enter more than 5 characters')
    .max(50, 'Too Long!')
    .required('Enter the promo code'),
});

export const FormPromoCode = () => {
  return (
    <Formik
      initialValues={{ code: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values.code.trim());

        setSubmitting(false);
      }}
      validationSchema={SignupSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        isSubmitting,
        resetForm,
        handleBlur,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Label>Apply promo code:</Label>
          <WrapperPromo>
            <Wrapper>
              <Input
                type="text"
                name="code"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.code}
              />
              {errors.code && touched.code ? (
                <ErrorTitle>{errors.code}</ErrorTitle>
              ) : (
                ''
              )}
              {values.code !== '' && (
                <DeleteButton
                  type="button"
                  onClick={() => {
                    resetForm({ values: { code: '' } });
                  }}
                  className="delete"
                >
                  <AiOutlineClose />
                </DeleteButton>
              )}
            </Wrapper>
            <ButtonPromo type="submit" disabled={isSubmitting}>
              Apply
            </ButtonPromo>
          </WrapperPromo>
        </Form>
      )}
    </Formik>
  );
};
