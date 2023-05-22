import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioBtn } from './RadioBtn/RadioBtn';
import { InputField } from './InputField/InputField';
import { CommentField } from './CommentField/CommentField';
import { UploadInput } from './UploadInput/UploadInput';
import { BtnNext, BtnCancel, BtnBack, BtnDone } from '../buttons/buttons';
import { Title } from './Title/Title';
import { StageIndicator } from './StageIndicator/StageIndicator';
import { SexIcon } from './Icon/Icon';

import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormWrapper,
  Wrapper,
  InputWrapper,
  GroupWrapper,
  BtnWrappper,
  ExtraWrapper,
  SexWrapper,
  GroupTitle,
  GroupSexWrapper,
  SexUploadWrapper,
  FlexWrapper,
  ErrWrapper,
} from './AddPetForm.styled';

const addPetFormSchema = yup.object().shape({
  title: yup.string().when('category', {
    is: value => value !== 'your pet',
    then: yup
      .string()
      .min(2, 'Minimum 2 characters')
      .max(16, 'Maximum 16 characters')
      .required('Enter a title (min 2, max 16 characters)'),
    otherwise: yup.string(),
  }),
  date: yup.string().required('Choose a date of birth'),
  breed: yup
    .string('Must be a string')
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Enter a pet`s breed (min 2, max 16 characters)'),
  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Enter a pet`s name (min 2, max 16 characters)'),
  location: yup.string().when('category', {
    is: value => value !== 'your pet',
    then: yup
      .string()
      .matches(/^[A-Z][a-zA-Z]*$/, 'Location begins with capitalize character')
      .required('Enter your location'),
    otherwise: yup.string(),
  }),
  price: yup.number().when('category', {
    is: value => value === 'sell',
    then: yup
      .number()
      .moreThan(0, 'Price must be greater than 0')
      .required('Enter a price'),
    otherwise: yup.number(),
  }),
  comments: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .max(120, 'Maximum 120 characters'),
  sex: yup.string().when('category', {
    is: value =>
      value === 'sell' || value === 'lost/found' || value === 'in good hands',
    then: yup.string().oneOf(['Female', 'Male']).required('Choose a pet`s sex'),
    otherwise: yup.string(),
  }),
  category: yup
    .string()
    .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
    .required(),
  file: yup
    .mixed()
    .required('Upload pet`s photo')

    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .test(
      'fileSize',
      'File size is too large',
      value => value?.size <= 3145728
    ),
});

const formTempValues = localStorage.getItem('formValues');
const formTempStage = localStorage.getItem('stage');
const initialsValues = {
  title: '',
  date: '',
  breed: '',
  name: '',
  location: '',
  price: '',
  comments: '',
  sex: '',
  category: 'your pet',
  file: '',
};

const statuses = ['your pet', 'sell', 'lost/found', 'in good hands'];
const sexes = ['Female', 'Male'];

const initialsFormState = formTempValues
  ? JSON.parse(formTempValues)
  : initialsValues;

const initialsStage = formTempStage ? Number(JSON.parse(formTempStage)) : 1;

export const AddPetForm = () => {
  const [stage, SetStage] = useState(() => initialsStage);
  const [emulTouch, SetEmulTouch] = useState([]);
  const navigate = useNavigate();

  const handleOnNextClick = async (values, errors, validateForm) => {
    let formIsValid;
    validateForm(values);
    const { category } = values;

    if (stage === 1) {
      formIsValid = true;
    }

    if (stage === 2 && category === 'your pet') {
      SetEmulTouch(['breed', 'name', 'date']);
      if (errors.breed || errors.name || errors.date) {
        formIsValid = false;
      } else {
        formIsValid = true;
      }
    }

    if (stage === 2 && category !== 'your pet') {
      SetEmulTouch(['breed', 'name', 'date', 'title']);
      if (errors.breed || errors.name || errors.date || errors.title) {
        formIsValid = false;
      } else {
        formIsValid = true;
      }
    }

    if (!formIsValid) {
      return;
    } else {
      SetStage(prevStage => prevStage + 1);
      localStorage.setItem('formValues', JSON.stringify(values));
      localStorage.setItem('stage', JSON.stringify(stage + 1));
    }
  };

  const handleOnBackClick = () => {
    SetStage(prevStage => prevStage - 1);
    localStorage.setItem('stage', JSON.stringify(stage - 1));
    SetEmulTouch([]);
  };

  const handleOnCancelClick = () => {
    navigate(-1);
  };

  const handleOnSubmit = async (values, { resetForm }) => {
    const formKeys = Object.keys(values);
    const formData = new FormData();

    formKeys.forEach(el => {
      if (el !== 'file') {
        formData.append(el, values[el]);
      } else {
        formData.append(el, values[el], 'Pet`s photo');
      }
    });
    alert('SUBMIT!');
    // localStorage.removeItem('formValues');
    // localStorage.removeItem('stage');
    // resetForm({});
    // SetStage(1);
    SetEmulTouch([]);
    // navigate('/add-pet');
  };

  return (
    <ExtraWrapper>
      <Formik
        initialValues={initialsFormState}
        onSubmit={handleOnSubmit}
        validationSchema={addPetFormSchema}
      >
        {({ values, errors, touched, validateForm }) => {
          const { category, sex } = values;
          const isFieldInvalid = errors.sex && touched.sex;
          return (
            <Wrapper data-category={category}>
              <Title picked={category} stage={stage} />
              <StageIndicator stage={stage} category={category} />
              <FormWrapper>
                {stage === 1 && (
                  <GroupWrapper role="group">
                    {statuses.map(status => {
                      const selected = status === category;
                      return (
                        <RadioBtn
                          key={status}
                          value={status}
                          name="category"
                          selected={selected}
                        />
                      );
                    })}
                  </GroupWrapper>
                )}

                <FlexWrapper data-category={category}>
                  {stage === 3 && (
                    <SexUploadWrapper>
                      {category !== 'your pet' && (
                        <GroupSexWrapper role="group" aria-labelledby="sex">
                          <GroupTitle id="sex">The sex</GroupTitle>
                          <SexWrapper>
                            {sexes.map((option, i) => {
                              const iconLabel =
                                i === 0 ? '#icon-female' : '#icon-male';
                              const selected = option === sex;

                              return (
                                <RadioBtn
                                  key={option}
                                  value={option}
                                  name="sex"
                                  selected={selected}
                                  errors={errors}
                                  touched={touched}
                                >
                                  <SexIcon
                                    iconName={iconLabel}
                                    index={i}
                                    selected={selected}
                                    sex={sex}
                                  />
                                </RadioBtn>
                              );
                            })}
                            {isFieldInvalid && (
                              <ErrWrapper>{errors.sex}</ErrWrapper>
                            )}
                          </SexWrapper>
                        </GroupSexWrapper>
                      )}
                      <UploadInput
                        errors={errors}
                        category={category}
                        touched={touched}
                      />
                    </SexUploadWrapper>
                  )}
                  <InputWrapper>
                    {stage === 2 && category !== 'your pet' && (
                      <InputField
                        type="text"
                        name="title"
                        label={'Title of add'}
                        placeholder={'Title of add'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="text"
                        name="name"
                        label={"Pet's name"}
                        placeholder={"Type your pet's name "}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="date"
                        name="date"
                        label={'Date of birth'}
                        placeholder={'Choose a date of birth'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="text"
                        name="breed"
                        label={'Breed'}
                        placeholder={'Type breed'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 3 && category !== 'your pet' && (
                      <InputField
                        type="text"
                        name="location"
                        label={'Location'}
                        placeholder={'Type your location'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 3 && category === 'sell' && (
                      <InputField
                        type="number"
                        name="price"
                        label={'Price'}
                        placeholder={'Type price'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}
                    {stage === 3 && (
                      <CommentField
                        errors={errors}
                        touched={touched}
                        category={category}
                        emulTouch={emulTouch}
                      />
                    )}
                  </InputWrapper>
                </FlexWrapper>
                {stage !== 3 && (
                  <BtnWrappper>
                    <BtnNext
                      onClick={() =>
                        handleOnNextClick(values, errors, validateForm)
                      }
                    />
                    {stage === 1 && <BtnCancel onClick={handleOnCancelClick} />}
                    {stage === 2 && <BtnBack onClick={handleOnBackClick} />}
                  </BtnWrappper>
                )}
                {stage === 3 && (
                  <BtnWrappper>
                    <BtnDone />
                    <BtnBack onClick={handleOnBackClick} />
                  </BtnWrappper>
                )}
              </FormWrapper>
            </Wrapper>
          );
        }}
      </Formik>
    </ExtraWrapper>
  );
};
