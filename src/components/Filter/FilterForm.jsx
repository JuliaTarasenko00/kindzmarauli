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
import { useDispatch } from 'react-redux';
import { filterDishes } from '../../redux/filter/slice';
import { getAllMenu } from '../../redux/dishes/operation';

export const FilterForm = () => {
  const dispatch = useDispatch();
  return (
    <FormWrapper>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(value, { setSubmitting }) => {
          if (value.search !== '') {
            dispatch(filterDishes(value.search));
            dispatch(getAllMenu());

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
                  onClick={() => {
                    dispatch(filterDishes(''));
                    resetForm();
                  }}
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
