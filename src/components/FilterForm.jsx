import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';
import { LuSearch } from 'react-icons/lu';
import {
  Button,
  DeleteButton,
  ErrorTitle,
  FormWrapper,
  Input,
  WrapperButton,
  WrapperForm,
} from '../page/user/Search/Search.styled';
import { searchDishes } from '../redux/dishes/operation';

const FilterFormSchema = Yup.object().shape({
  search: Yup.string()
    .min(3, 'Enter more than 3 characters')
    .max(50, 'Too Long!')
    .required('Enter the name of the dish'),
});

export const FilterForm = ({ onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchDish = searchParams.get('q');
  const [value, setValue] = useState(searchDish ?? '');

  function handleSubmit(values, { setSubmitting }) {
    const searchValue = values.search.trim();
    setValue(searchValue);

    navigate('search');
    setSubmitting(false);

    if (onClick !== undefined) onClick();
  }

  useEffect(() => {
    if (pathname.includes('search')) {
      setSearchParams({ q: value });

      if (searchDish) dispatch(searchDishes(searchDish));
    }
  }, [dispatch, pathname, searchDish, setSearchParams, value]);

  return (
    <FormWrapper>
      <Formik
        initialValues={{ search: value }}
        onSubmit={handleSubmit}
        validationSchema={FilterFormSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          resetForm,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <WrapperForm>
              <Input
                type="text"
                name="search"
                placeholder="Search..."
                onChange={handleChange}
                value={values.search}
              />
              {errors.search && touched.search && (
                <ErrorTitle>{errors.search}</ErrorTitle>
              )}
              <WrapperButton>
                {values.search !== '' && (
                  <DeleteButton
                    type="button"
                    onClick={() => {
                      resetForm({ values: { search: '' } });
                    }}
                    className="delete"
                  >
                    <AiOutlineClose />
                  </DeleteButton>
                )}
                <Button
                  className="search"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <LuSearch />
                </Button>
              </WrapperButton>
            </WrapperForm>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

FilterForm.propTypes = {
  onClick: PropTypes.func,
};
