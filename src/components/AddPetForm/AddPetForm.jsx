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
import { addPetFormSchema } from 'helpers/yupValidation';
import { createPet, createNotice } from 'redux/pets/petsService';

import { Formik } from 'formik';

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

const formTempValues = localStorage.getItem('formValues');
const initialsFormState = formTempValues
  ? JSON.parse(formTempValues)
  : initialsValues;

const formTempStage = localStorage.getItem('stage');
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
    const formData = new FormData();

    switch (values.category) {
      case 'your pet':
        formData.append('name', values.name);
        formData.append('date', values.date);
        formData.append('breed', values.breed);
        formData.append('comments', values.comments);
        formData.append('file', values.file, 'Pet`s photo');
        try {
          await createPet(formData);
        } catch (error) {
          console.log(error);
        }

        break;
      default:
        formData.append('title', values.title);
        formData.append('category', values.category);
        formData.append('name', values.name);
        formData.append('date', values.date);
        formData.append('breed', values.breed);
        formData.append('sex', values.sex.toLowerCase());
        formData.append('location', values.location);
        formData.append('price', values.price);
        formData.append('comments', values.comments);
        formData.append('file', values.file, 'Pet`s photo');

        try {
          await createNotice(formData);
        } catch (error) {
          console.log(error);
        }
    }

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

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
                            {sexes.map((option, index) => {
                              const iconLabel =
                                index === 0 ? '#icon-female' : '#icon-male';
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
                                    index={index}
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
