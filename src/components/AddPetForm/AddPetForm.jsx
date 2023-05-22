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
  date: yup
    .string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'DD.MM.YYYY format needed')
    .required('Enter a date of birth (DD.MM.YYYY format)'),
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
    then: yup.string().oneOf(['Female', 'Male']).required('Enter a pet`s sex'),
    otherwise: yup.string(),
  }),
  category: yup
    .string()
    .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
    .required(),
  file: yup
    .mixed()
    .test('fileSize', 'File size is too large', value => value?.size <= 3145728)
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .required('Upload pet`s photo'),
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
};

const statuses = ['your pet', 'sell', 'lost/found', 'in good hands'];
const sexes = ['Female', 'Male'];

const initialsFormState = formTempValues
  ? JSON.parse(formTempValues)
  : initialsValues;

const initialsStage = formTempStage ? Number(JSON.parse(formTempStage)) : 1;

export const AddPetForm = () => {
  const [stage, SetStage] = useState(() => initialsStage);
  const navigate = useNavigate();

  const handleOnNextClick = (
    values,
    errors,
    touched,
    validateForm,
    setTouched
  ) => {
    validateForm(values)
      .then(res => {
        let formIsValid = true;
        const { category } = values;
        const fields = Object.keys(res);
        // console.log(touched);
        // console.log(errors);

        if (stage === 2 && category === 'your pet') {
          setTouched({ name: false, date: true, breed: true });
          console.log(touched);

          formIsValid =
            !fields.includes('name') &&
            !fields.includes('date') &&
            !fields.includes('breed');
        } else if (stage === 2 && category !== 'your pet') {
          setTouched({ name: false, date: true, breed: true });
          console.log(touched);
          formIsValid =
            !fields.includes('name') &&
            !fields.includes('date') &&
            !fields.includes('breed') &&
            !fields.includes('title');
        }
        // console.log(formInvalid);
        if (!formIsValid) {
        } else {
          SetStage(prevStage => prevStage + 1);
          localStorage.setItem('formValues', JSON.stringify(values));
          localStorage.setItem('stage', JSON.stringify(stage + 1));
        }
      })
      .catch(err => {});

    // if (stage === 2 && category === 'your pet') {
    //   formIsValid =
    //     isFieldValid(errors, touched, 'name') &&
    //     isFieldValid(errors, touched, 'date') &&
    //     isFieldValid(errors, touched, 'breed');
    // } else if (stage === 2 && category !== 'your pet') {
    //   formIsValid =
    //     isFieldValid(errors, touched, 'name') &&
    //     isFieldValid(errors, touched, 'date') &&
    //     isFieldValid(errors, touched, 'breed') &&
    //     isFieldValid(errors, touched, 'title');
    // }

    // if (!formIsValid) {
    //   return;
    // } else {
    //   SetStage(prevStage => prevStage + 1);
    //   localStorage.setItem('formValues', JSON.stringify(values));
    //   localStorage.setItem('stage', JSON.stringify(stage + 1));
    // }
  };

  const handleOnBackClick = () => {
    SetStage(prevStage => prevStage - 1);
    localStorage.setItem('stage', JSON.stringify(stage - 1));
  };

  const handleOnCancelClick = () => {
    navigate(-1);
  };

  const handleOnSubmit = (values, { resetForm }) => {
    const formKeys = Object.keys(values);
    const formData = new FormData();

    formKeys.forEach(el => {
      if (el !== 'file') {
        formData.append(el, values[el]);
      } else {
        formData.append(el, values[el], 'Pet`s photo');
      }
    });

    // localStorage.removeItem('formValues');
    // localStorage.removeItem('stage');
    // resetForm({});
    // SetStage(1);
    // navigate('/add-pet');
  };

  return (
    <ExtraWrapper>
      <Formik
        initialValues={initialsFormState}
        onSubmit={handleOnSubmit}
        validationSchema={addPetFormSchema}
      >
        {({ values, errors, touched, setTouched, validateForm }) => {
          // console.log(validateForm);
          const { category, sex } = values;
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
                          </SexWrapper>
                        </GroupSexWrapper>
                      )}
                      <UploadInput category={category} />
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
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="text"
                        name="date"
                        label={'Date of birth'}
                        placeholder={'Type date of birth'}
                        errors={errors}
                        touched={touched}
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
                      />
                    )}
                    {stage === 3 && (
                      <CommentField
                        errors={errors}
                        touched={touched}
                        category={category}
                      />
                    )}
                  </InputWrapper>
                </FlexWrapper>
                {stage !== 3 && (
                  <BtnWrappper>
                    <BtnNext
                      onClick={() =>
                        handleOnNextClick(
                          values,
                          errors,
                          touched,
                          setTouched,
                          validateForm
                        )
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
