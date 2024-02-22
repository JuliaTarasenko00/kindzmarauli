import { Container } from '@mui/material';
import { FormChangeAddDish } from '../../../components/admin/FormChangeAddDish/FormChangeAddDish';

const AddNewDish = () => {
  const initialValues = {
    image: '',
    name: '',
    description: '',
    price: '',
    discounted: '',
    gram: '',
    specificsName: '',
    specifics: '',
  };

  const handelSubmitForm = (values) => {
    console.log('values: ', {
      description: values.description,
      discounted: values.discounted,
      gram: values.gram,
      image: values.image,
      name: values.name,
      price: values.price,
      specificsDish: {
        [values.specificsName]: values.specifics,
      },
    });
  };

  return (
    <section>
      <Container>
        <FormChangeAddDish
          handelSubmitForm={handelSubmitForm}
          initialValues={initialValues}
          newDish={true}
        />
      </Container>
    </section>
  );
};

export default AddNewDish;
