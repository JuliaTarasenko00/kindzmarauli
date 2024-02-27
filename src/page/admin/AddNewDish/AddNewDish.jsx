import { Container } from '@mui/material';
import { FormChangeAddDish } from '../../../components/admin/FormChangeAddDish/FormChangeAddDish';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewDish } from '../../../redux/dishes/operation';
import { toast } from 'react-toastify';
import { styleToastify } from '../../../components/toastify';
import { useLocation } from 'react-router-dom';

const AddNewDish = () => {
  const [patchImg, setPatchImg] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const patchSpecificsName = useRef(location.state?.from.pathname ?? '');
  const patchSpecifics = useRef(location.state?.value ?? '');
  const specificsName =
    patchSpecificsName.current === ''
      ? ''
      : patchSpecificsName.current.split('/')[2];

  const specifics = patchSpecifics.current === '' ? '' : patchSpecifics.current;

  const initialValues = {
    image: '',
    name: '',
    description: '',
    price: '',
    discounted: 0,
    gram: '',
    specificsName,
    specifics,
  };
  const handelSubmitForm = (values) => {
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
    dispatch(addNewDish(data));

    return toast.success('Dish added', styleToastify);
  };

  return (
    <section>
      <Container>
        <FormChangeAddDish
          handelSubmitForm={handelSubmitForm}
          initialValues={initialValues}
          setPatchImg={setPatchImg}
          newDish={true}
          patch={patchSpecificsName.current}
        />
      </Container>
    </section>
  );
};

export default AddNewDish;
