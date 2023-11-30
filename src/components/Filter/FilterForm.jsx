import { Form, Formik } from 'formik';
import { AiOutlineClose } from 'react-icons/ai';
import { LuSearch } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { styleToastify } from '../toastify';
import {
  Button,
  DeleteButton,
  FormWrapper,
  Input,
  WrapperButton,
} from './FilterForm.styled';

export const FilterForm = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(value, { setSubmitting }) => {
          if (value.search !== '') {
            console.log(value);
            setSubmitting(false);
          } else {
            return toast.error('Enter the name of the dish', styleToastify);
          }
        }}
      >
        {({ values, handleChange, handleSubmit, resetForm, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              error={errors.search}
              type="text"
              name="search"
              placeholder="Search..."
              onChange={handleChange}
              value={values.search}
            />
            <WrapperButton>
              {values.search !== '' && (
                <DeleteButton
                  type="button"
                  onClick={() => resetForm()}
                  className="delete"
                >
                  <AiOutlineClose />
                </DeleteButton>
              )}
              <Button className="search" type="submit">
                <LuSearch />
              </Button>
            </WrapperButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
