import { Container } from '@mui/material';
import { FormChangeAddDish } from '../../../components/admin/FormChangeAddDish/FormChangeAddDish';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewDish } from '../../../redux/dishes/operation';
import { toast } from 'react-toastify';
import { styleToastify } from '../../../components/toastify';

const initialValues = {
  image: '',
  name: '',
  description: '',
  price: '',
  discounted: 0,
  gram: '',
  specificsName: '',
  specifics: '',
};

const AddNewDish = () => {
  const [patchImg, setPatchImg] = useState(null);
  const dispatch = useDispatch();

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
        />
      </Container>
    </section>
  );
};

export default AddNewDish;
