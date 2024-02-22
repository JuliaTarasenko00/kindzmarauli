import PropTypes from 'prop-types';
import { useState } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { CiCirclePlus } from 'react-icons/ci';
import { Formik } from 'formik';
import * as Yup from 'yup';
import img from '../../../assets/img/no_image.jpg';
import {
  ChangeButton,
  DeleteImage,
  ErrorTitle,
  Form,
  FormWrapper,
  Image,
  Input,
  InputFile,
  Label,
  LabelAddedImage,
  Textarea,
  Wrapper,
  WrapperAddedImageInput,
  WrapperImage,
  WrapperPrice,
  WrapperSelect,
} from './FormChangeAddDish.styled';
import { MenuItem } from '@mui/material';
import { specificsDish } from '../../../helpers/specifics_dish';
import { CustomFormControl, CustomSelect } from './styledMuiComponent';

const dataSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, 'Min length 10 symbol')
    .max(50, 'Max length 50 symbol')
    .required('Required'),
  description: Yup.string()
    .min(10, 'Min length 10 symbol')
    .max(500, 'Max length 500 symbol')
    .required('Required'),
  price: Yup.number().max(10, 'Max length 10 symbol').required('Required'),
  discounted: Yup.number().max(3, 'Max length 3 symbol').required('Required'),
  gram: Yup.number().max(5, 'Max length 5 symbol').required('Required'),
  specificsName: Yup.string().required('Required'),
  specifics: Yup.string().required('Required'),
});

export const FormChangeAddDish = ({
  handelSubmitForm,
  initialValues,
  newDish,
}) => {
  const [selectImg, setSelectImg] = useState(null);
  const [specificsNameValue, setSpecificsNameValue] = useState(
    initialValues.specificsName,
  );

  const specifics = Object.values(specificsDish);
  const dish = Object.values(specificsDish).find(
    (d) => d.name === specificsNameValue,
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handelSubmitForm}
      validationSchema={dataSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <FormWrapper>
              <WrapperAddedImageInput>
                <WrapperImage>
                  <Image
                    src={
                      selectImg !== null
                        ? URL.createObjectURL(selectImg)
                        : values.image === ''
                        ? img
                        : values.image
                    }
                    alt={values.name}
                    width="500"
                  />
                  {selectImg !== null && (
                    <DeleteImage
                      type="button"
                      onClick={() => setSelectImg(null)}
                    >
                      <CgCloseO />
                    </DeleteImage>
                  )}
                </WrapperImage>
                <LabelAddedImage htmlFor="image">
                  {newDish ? 'Add Photo' : 'Add a new photo'}
                  <span>
                    <CiCirclePlus />
                  </span>
                </LabelAddedImage>
                <InputFile
                  type="file"
                  id="image"
                  name="image"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={(ev) => {
                    setSelectImg(ev.target.files[0]);
                  }}
                />
                {errors.image && touched.image && (
                  <ErrorTitle>{errors.image}</ErrorTitle>
                )}
              </WrapperAddedImageInput>
              <Wrapper>
                <div>
                  <Label htmlFor="name">
                    Name: <span>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="name"
                  />
                  {errors.name && touched.name && (
                    <ErrorTitle>{errors.name}</ErrorTitle>
                  )}
                </div>
                <div>
                  <Label htmlFor="description">
                    Description: <span>*</span>
                  </Label>
                  <Textarea
                    value={values.description}
                    name="description"
                    id="description"
                    rows="6"
                    cols="50"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.description && touched.description && (
                    <ErrorTitle>{errors.description}</ErrorTitle>
                  )}
                </div>
                <WrapperPrice>
                  <div>
                    <Label htmlFor="price">
                      Price: <span>*</span>
                    </Label>
                    <Input
                      type="text"
                      name="price"
                      className="price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.price}
                      id="price"
                    />
                    {errors.price && touched.price && (
                      <ErrorTitle>{errors.price}</ErrorTitle>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="discounted">
                      Discount: <span>*</span>
                    </Label>
                    <Input
                      type="text"
                      name="discounted"
                      className="price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.discounted}
                      id="discounted"
                    />
                    {errors.discounted && touched.discounted && (
                      <ErrorTitle>{errors.discounted}</ErrorTitle>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="gram">
                      Gram: <span>*</span>
                    </Label>
                    <Input
                      type="text"
                      className="price"
                      name="gram"
                      value={values.gram}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="gram"
                    />
                    {errors.gram && touched.gram && (
                      <ErrorTitle>{errors.gram}</ErrorTitle>
                    )}
                  </div>
                </WrapperPrice>
                <WrapperSelect>
                  <Label>
                    Specifics: <span>*</span>{' '}
                  </Label>
                  <CustomFormControl size="small">
                    <CustomSelect
                      value={values.specificsName}
                      name="specificsName"
                      onChange={(ev) => {
                        setSpecificsNameValue(ev.target.value);
                        handleChange(ev);
                      }}
                    >
                      {specifics.map((value, index) => {
                        const newStr = value.name.replace(/_/g, ' ');

                        return (
                          <MenuItem key={index} value={value.name}>
                            <p style={{ textTransform: 'capitalize' }}>
                              {newStr}
                            </p>
                          </MenuItem>
                        );
                      })}
                    </CustomSelect>
                    {errors.specificsName && touched.specificsName && (
                      <ErrorTitle>{errors.specificsName}</ErrorTitle>
                    )}
                  </CustomFormControl>
                  <CustomFormControl size="small">
                    <CustomSelect
                      value={values.specifics}
                      name="specifics"
                      onChange={handleChange}
                    >
                      {!!dish &&
                        Object.entries(dish.value).map((value, index) => {
                          const newStr = value[1].replace(/_/g, ' ');
                          return (
                            <MenuItem key={index} value={value[1]}>
                              <p style={{ textTransform: 'capitalize' }}>
                                {newStr}
                              </p>
                            </MenuItem>
                          );
                        })}
                    </CustomSelect>{' '}
                    {errors.specifics && touched.specifics && (
                      <ErrorTitle>{errors.specifics}</ErrorTitle>
                    )}
                  </CustomFormControl>
                </WrapperSelect>
              </Wrapper>
            </FormWrapper>
            <ChangeButton
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              {newDish ? 'Add' : 'Change'}
            </ChangeButton>
          </Form>
        );
      }}
    </Formik>
  );
};

FormChangeAddDish.propTypes = {
  handelSubmitForm: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discounted: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    specificsName: PropTypes.string,
    specifics: PropTypes.string,
    gram: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  newDish: PropTypes.bool,
};
