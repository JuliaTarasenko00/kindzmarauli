import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { getDishId } from '../../../redux/dishes/operation';
import { dishToChange, loading } from '../../../redux/selector';
import { Container } from '../../../globalStyle';
import { isEqual } from 'lodash';
import { FormChangeAddDish } from '../../../components/admin/FormChangeAddDish/FormChangeAddDish';
import { toast } from 'react-toastify';
import { styleToastify } from '../../../components/toastify';

const dataSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, 'Min length 10 symbol')
    .max(50, 'Max length 50 symbol')
    .required('Required'),
  description: Yup.string()
    .min(10, 'Min length 10 symbol')
    .max(500, 'Max length 500 symbol')
    .required('Required'),
  price: Yup.string().max(10, 'Max length 10 symbol').required('Required'),
  discounted: Yup.string().max(3, 'Max length 3 symbol').required('Required'),
  gram: Yup.string().max(5, 'Max length 5 symbol').required('Required'),
});

const ChangeDishPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dish = useSelector(dishToChange);
  const isLoading = useSelector(loading);

  const initialValues = {
    image: dish?.image,
    name: dish?.name,
    description: dish?.description,
    price: dish?.price,
    discounted: dish?.discounted,
    gram: dish?.gram,
  };

  useEffect(() => {
    dispatch(getDishId(id));
  }, [dispatch, id]);

  const handelSubmitForm = (values) => {
    const notChangedData = isEqual(values, initialValues);
    if (notChangedData) {
      return toast.error('You have not made any changes', styleToastify);
    } else {
      console.log(values);
      return toast.success('Data has been changed', styleToastify);
    }
  };

  return (
    <section style={{ padding: '20px 0' }}>
      <Container>
        {!isLoading && (
          <FormChangeAddDish
            dataSchema={dataSchema}
            handelSubmitForm={handelSubmitForm}
            initialValues={initialValues}
          />
        )}
      </Container>
    </section>
  );
};

export default ChangeDishPage;
