import { useState } from 'react';
import { RadioBtn } from './RadioBtn/RadioBtn';
import { InputField } from './InputField/InputField';
import { UploadInput } from './UploadInput/UploadInput';
import { Title } from './Title/Title';
import { StageIndicator } from './StageIndicator/StageIndicator';
import { SexIcon } from './Icon/Icon';

import { Formik } from 'formik';
import * as yup from 'yup';
import {
  LoginFormStyled,
  Button,
  Wrapper,
  InputWrapper,
  GroupWrapper,
  ExtraWrapper,
  CommentText,
  CommentsLabel,
  SexWrapper,
  GroupTitle,
} from './AddPetForm.styled';

const FormSchema = yup.object().shape({
  title: yup.string().min(2).max(16).required(),
  birth: yup.string().matches(/^\d{2}\.\d{2}\.\d{4}$/),
  breed: yup.string().min(2).max(16).required(),
  name: yup.string().min(2).max(16).required(),
  location: yup.string().when('category', {
    is: value =>
      value === 'sell' || value === 'lost/found' || value === 'in good hands',
    then: yup
      .string()
      .matches(/^[A-Z][a-zA-Z]*$/)
      .required(),
    otherwise: yup.string(),
  }),
  price: yup.number().when('category', {
    is: value => value === 'sell',
    then: yup.number().moreThan(0).required(),
    otherwise: yup.number(),
  }),
  comments: yup.string().min(8).max(120),
  sex: yup.string().when('category', {
    is: value =>
      value === 'sell' || value === 'lost/found' || value === 'in good hands',
    then: yup.string().oneOf(['Female', 'Male']).required(),
    otherwise: yup.string(),
  }),
  category: yup
    .string()
    .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
    .required(),
  file: yup
    .mixed()
    .test(
      'fileSize',
      'File size is too large',
      value => !value || value.size <= 3145728
    )
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .required(),
});

const formTempValues = localStorage.getItem('formValues');
const formTempStage = localStorage.getItem('stage');
const initialsValues = {
  title: '',
  birth: '',
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

  const handleOnNextClick = (values, validateField) => {
    const { category } = values;
    if (stage === 2 && category === 'your pet') {
      validateField('name');
    }
    SetStage(prevStage => prevStage + 1);
    localStorage.setItem('formValues', JSON.stringify(values));
    localStorage.setItem('stage', JSON.stringify(stage + 1));
  };

  const handleSubmitForm = async (values, { resetForm }) => {
    localStorage.removeItem('formValues');
    localStorage.removeItem('stage');
    resetForm();
  };

  return (
    <ExtraWrapper>
      <Formik
        initialValues={initialsFormState}
        onSubmit={handleSubmitForm}
        validationSchema={FormSchema}
      >
        {({ values, validateField }) => {
          const { category, sex } = values;
          return (
            <Wrapper>
              <Title picked={category} stage={stage} />
              <StageIndicator stage={stage} />
              <LoginFormStyled>
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
                {stage === 3 && (
                  <GroupWrapper role="group" aria-labelledby="sex">
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
                  </GroupWrapper>
                )}
                {stage === 3 && <UploadInput />}
                <InputWrapper>
                  {stage === 2 && category !== 'your pet' && (
                    <InputField
                      type="text"
                      name="title"
                      label={'Title of add'}
                      placeholder={'Title of add'}
                      // onBlur={() => validateField('title')}
                    />
                  )}

                  {stage === 2 && (
                    <InputField
                      type="text"
                      name="name"
                      label={"Pet's name"}
                      placeholder={"Type your pet's name "}
                    />
                  )}

                  {stage === 2 && (
                    <InputField
                      type="text"
                      name="birth"
                      label={'Date of birth'}
                      placeholder={'Type date of birth'}
                    />
                  )}

                  {stage === 2 && (
                    <InputField
                      type="text"
                      name="breed"
                      label={'Breed'}
                      placeholder={'Type breed'}
                    />
                  )}

                  {stage === 3 && (
                    <InputField
                      type="text"
                      name="location"
                      label={'Location'}
                      placeholder={'Type your location'}
                    />
                  )}

                  {stage === 3 && category === 'sell' && (
                    <InputField
                      type="number"
                      name="price"
                      label={'Price'}
                      placeholder={'Type price'}
                    />
                  )}
                </InputWrapper>
                {stage === 3 && (
                  <CommentsLabel>
                    Comments
                    <CommentText
                      as="textarea"
                      name="comments"
                      placeholder="Type your comments here..."
                    />
                  </CommentsLabel>
                )}
                {stage !== 3 && (
                  <Button
                    type="button"
                    onClick={() => handleOnNextClick(values, validateField)}
                  >
                    Next
                  </Button>
                )}
                {stage === 3 && (
                  <Button
                    type="submit"
                    // disabled={
                    //   (props.values.email !== '') & (props.values.password !== '')
                    //     ? false
                    //     : true
                    // }
                  >
                    Done
                  </Button>
                )}
              </LoginFormStyled>
            </Wrapper>
          );
        }}
      </Formik>
    </ExtraWrapper>
  );
};
