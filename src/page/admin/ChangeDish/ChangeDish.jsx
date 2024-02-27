import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { changeDataDish, getDishId } from '../../../redux/dishes/operation';
import { isEqual } from 'lodash';
import { toast } from 'react-toastify';
import { dishToChange, loading } from '../../../redux/selector';
import { Container } from '../../../globalStyle';
import { FormChangeAddDish } from '../../../components/admin/FormChangeAddDish/FormChangeAddDish';
import { styleToastify } from '../../../components/toastify';
import { LoaderForPage } from '../../../components/LoaderForPage';
import { GoBackButton } from './ChangeDish.styled';

const ChangeDishPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const backTo = useRef(location.state?.from ?? '/admin');
  const dish = useSelector(dishToChange);
  const isLoading = useSelector(loading);
  const [patchImg, setPatchImg] = useState(null);

  const initialValues = {
    image: dish?.image,
    name: dish?.name,
    description: dish?.description,
    price: dish?.price,
    discounted: dish?.discounted,
    gram: dish?.gram,
    specificsName: dish?.specificsDish
      ? Object.keys(dish.specificsDish).join(' ')
      : '',
    specifics: dish?.specificsDish
      ? Object.values(dish.specificsDish).join(' ')
      : '',
  };

  const handelSubmitForm = (values) => {
    const notChangedData = isEqual(values, initialValues);
    if (notChangedData) {
      return toast.error('You have not made any changes', styleToastify);
    } else {
      const data = new FormData();
      data.append('description', values.description);
      data.append('discounted', values.discounted);
      data.append('image', patchImg ? patchImg : values.image);
      data.append('name', values.name);
      data.append('price', values.price);
      data.append('gram', values.gram);
      data.append(
        'specificsDish',
        JSON.stringify({
          [values.specificsName]: values.specifics,
        }),
      );
      dispatch(
        changeDataDish({
          id,
          newData: data,
        }),
      );
      return toast.success('Data has been changed', styleToastify);
    }
  };

  useEffect(() => {
    dispatch(getDishId(id));
  }, [dispatch, id]);

  return (
    <section style={{ padding: '20px 0' }}>
      <Container>
        {isLoading && <LoaderForPage />}
        {!isLoading && (
          <>
            <FormChangeAddDish
              handelSubmitForm={handelSubmitForm}
              initialValues={initialValues}
              setPatchImg={setPatchImg}
              patchImg={patchImg}
              id={id}
              patch={backTo.current.pathname}
            />
          </>
        )}
      </Container>
    </section>
  );
};

export default ChangeDishPage;
