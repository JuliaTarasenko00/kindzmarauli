import PropTypes from 'prop-types';
import { useState } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { Formik } from 'formik';
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
  RemoveButton,
  Textarea,
  Wrapper,
  WrapperAddedImageInput,
  WrapperImage,
  WrapperPrice,
} from './FormChangeAddDish.styled';

export const FormChangeAddDish = ({
  handelSubmitForm,
  initialValues,
  dataSchema,
}) => {
  const [selectImg, setSelectImg] = useState(null);

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
                  Add a new photo
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
                  <Label htmlFor="name">Name: </Label>
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
                  <Label htmlFor="description">Description: </Label>
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
                    <Label htmlFor="price">Price: </Label>
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
                    <Label htmlFor="discounted">Discount: </Label>
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
                    <Label htmlFor="gram">Gram: </Label>
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
                <Label htmlFor="specifics">Specifics: </Label>
                <Input type="text" name="specifics" id="specifics" />
              </Wrapper>
            </FormWrapper>
            <RemoveButton type="button">Remove this dish</RemoveButton>
            <ChangeButton
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              Change
            </ChangeButton>
          </Form>
        );
      }}
    </Formik>
  );
};

FormChangeAddDish.propType = {
  handelSubmitForm: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    discounted: PropTypes.number,
    description: PropTypes.string,
    gram: PropTypes.number,
  }).isRequired,
  dataSchema: PropTypes.object.isRequired,
};
