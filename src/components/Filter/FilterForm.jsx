import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { filterDishes } from '../../redux/filter/slice';
import { getAllMenu } from '../../redux/dishes/operation';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchDish = searchParams.get('q');
  const [value, setValue] = useState(searchDish || '');

  function handleSubmit(values, { setSubmitting }) {
    const searchValue = values.search.trim();
    setValue(searchValue);

    if (searchValue === '') {
      toast.error('Enter the name of the dish', styleToastify);
    }

    navigate('search');
    setSubmitting(false);
  }

  useEffect(() => {
    if (pathname !== '/search') return;
    dispatch(getAllMenu());

    setSearchParams({ q: value });
    dispatch(filterDishes(searchDish));
  }, [dispatch, pathname, searchDish, setSearchParams, value]);

  return (
    <FormWrapper>
      <Formik initialValues={{ search: value }} onSubmit={handleSubmit}>
        {({
          values,
          handleChange,
          handleSubmit,
          resetForm,
          errors,
          isSubmitting,
        }) => (
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
                    resetForm({ values: { search: '' } });
                  }}
                  className="delete"
                >
                  <AiOutlineClose />
                </DeleteButton>
              )}
              <Button className="search" type="submit" disabled={isSubmitting}>
                <LuSearch />
              </Button>
            </WrapperButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
