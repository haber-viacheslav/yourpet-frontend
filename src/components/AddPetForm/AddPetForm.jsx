import { useState } from 'react';
import { RadioBtn } from './RadioBtn/RadioBtn';
import { InputField } from './InputField/InputField';
import { Title } from './Title/Title';
import { StageIndicator } from './StageIndicator/StageIndicator';

import { SexIcon } from './AddPetForm.styled';

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

const formTempValues = localStorage.getItem('formValues');
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
  file: '',
};

const initialsFormState = formTempValues
  ? JSON.parse(formTempValues)
  : initialsValues;

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
  file: '',
});

const statuses = ['your pet', 'sell', 'lost/found', 'in good hands'];
const sexes = ['Female', 'Male'];

export const AddPetForm = () => {
  const [stage, SetStage] = useState(1);

  const handleSubmitForm = async () => {
    SetStage(2);
  };

  return (
    <ExtraWrapper>
      <Formik
        initialValues={initialsFormState}
        onSubmit={handleSubmitForm}
        validationSchema={FormSchema}
      >
        {({ values }) => {
          const { category, sex } = values;
          return (
            <Wrapper>
              <Title picked={category} stage={stage} />
              <StageIndicator stage={stage} />
              <LoginFormStyled>
                {stage === 1 && (
                  <GroupWrapper role="group">
                    {statuses.map(status => {
                      return (
                        <RadioBtn
                          key={status}
                          value={status}
                          name="category"
                          picked={category}
                        />
                      );
                    })}
                  </GroupWrapper>
                )}
                <GroupWrapper role="group" aria-labelledby="sex">
                  <GroupTitle id="sex">The sex</GroupTitle>
                  <SexWrapper>
                    {sexes.map((option, i) => {
                      const iconLabel = i === 0 ? '#icon-female' : '#icon-male';
                      return (
                        <RadioBtn
                          key={option}
                          value={option}
                          name="sex"
                          picked={sex}
                        >
                          <SexIcon iconName={iconLabel} />
                        </RadioBtn>
                      );
                    })}
                  </SexWrapper>
                </GroupWrapper>
                <InputWrapper>
                  <InputField
                    type="text"
                    name="title"
                    label={'Title of add'}
                    placeholder={'Title of add'}
                  />
                  <InputField
                    type="text"
                    name="name"
                    label={"Pet's name"}
                    placeholder={"Type your pet's name "}
                  />
                  <InputField
                    type="text"
                    name="birth"
                    label={'Date of birth'}
                    placeholder={'Type date of birth'}
                  />
                  <InputField
                    type="text"
                    name="breed"
                    label={'Breed'}
                    placeholder={'Type breed'}
                  />
                  <InputField
                    type="text"
                    name="location"
                    label={'Location'}
                    placeholder={'Type your location'}
                  />
                  <InputField
                    type="number"
                    name="price"
                    label={'Price'}
                    placeholder={'Type price'}
                  />
                </InputWrapper>
                <CommentsLabel>
                  Comments
                  <CommentText
                    as="textarea"
                    name="comments"
                    placeholder="Type your comments here..."
                  />
                </CommentsLabel>
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
              </LoginFormStyled>
            </Wrapper>
          );
        }}
      </Formik>
    </ExtraWrapper>
  );
};

// const formTempValues = localStorage.getItem('formValues');
// const initialsValues = {
//   title: '',
//   birth: '',
//   breed: '',
//   name: '',
//   location: '',
//   price: '',
//   comments: '',
// };

// const initialsFormState = formTempValues
//   ? JSON.parse(formTempValues)
//   : initialsValues;

// const FormSchema = yup.object().shape({
//   title: '',
//   birth: '',
//   breed: yup.string().min(2).max(16).required(),
//   name: yup.string().min(2).max(16).required(),
//   location: '',
//   price: yup.string().when('field1', {
//     is: value => value && value.length > 0,
//     then: yup.string().required('Field 2 is required'),
//     otherwise: yup.string(),
//   }),
//   comments: '',
// });

// const statuses = ['your pet', 'sell', 'lost/found', 'in good hands'];

// export const AddPetForm = () => {
//   const [reason, SetReason] = useState('your pet');
//   const [selectedSex, SetSelectedSex] = useState(null);
//   const [stage, SetStage] = useState(1);
//   const [formValues, SetFormValues] = useState(() => initialsFormState);

//   const handleRadioBtn = e => {
//     if (e.target.name === 'reason') {
//       SetReason(e.target.value);
//     } else if (e.target.name === 'selectedSex') {
//       SetSelectedSex(e.target.value);
//     }
//   };

//   const handleInputOnChange = e => {
//     const { name, value } = e.target;
//     SetFormValues({ ...formValues, [name]: value });

//     localStorage.setItem('formValues', JSON.stringify(formValues));
//   };

//   const handleSubmitForm = async () => {
//     console.log(formValues);
//   };

//   return (
//     <ExtraWrapper>
//       <Wrapper>
//         <Title reason={reason} stage={stage} />
//         <StageIndicator stage={stage} />
//         <Formik
//           onSubmit={handleSubmitForm}
//           // validationSchema={FormSchema}
//         >
//           {props => {
//             return (
//               <LoginFormStyled>
//                 {stage === 1 && (
//                   <GroupWrapper role="group">
//                     {statuses.map(status => (
//                       <RadioBtn
//                         key={status}
//                         label={status}
//                         onChange={handleRadioBtn}
//                         choice={reason}
//                         appointment="reason"
//                       />
//                     ))}
//                   </GroupWrapper>
//                 )}
//                 <GroupWrapper role="group" aria-labelledby="sex">
//                   <GroupTitle id="sex">The sex</GroupTitle>
//                   <SexWrapper>
//                     <RadioBtn
//                       label="Female"
//                       onChange={handleRadioBtn}
//                       choice={selectedSex}
//                       appointment="selectedSex"
//                     >
//                       <SexIcon iconName="#icon-pawprint" />
//                     </RadioBtn>
//                     <RadioBtn
//                       label="Male"
//                       onChange={handleRadioBtn}
//                       choice={selectedSex}
//                       appointment="selectedSex"
//                     >
//                       <SexIcon iconName="#icon-pawprint" />
//                     </RadioBtn>
//                   </SexWrapper>
//                 </GroupWrapper>
//                 <InputField
//                   type="text"
//                   name="title"
//                   label={'Title of add'}
//                   placeholder={'Title of add'}
//                   value={formValues.title}
//                   onChange={handleInputOnChange}
//                 />
//                 <InputField
//                   type="text"
//                   name="name"
//                   label={"Pet's name"}
//                   placeholder={"Type your pet's name "}
//                   value={formValues.name}
//                   onChange={handleInputOnChange}
//                 />
//                 <InputField
//                   type="text"
//                   name="birth"
//                   label={'Date of birth'}
//                   placeholder={'Type date of birth'}
//                   value={formValues.birth}
//                   onChange={handleInputOnChange}
//                 />
//                 <InputField
//                   type="text"
//                   name="breed"
//                   label={'Breed'}
//                   placeholder={'Type breed'}
//                   value={formValues.breed}
//                   onChange={handleInputOnChange}
//                 />
//                 <InputField
//                   type="text"
//                   name="location"
//                   label={'Location'}
//                   placeholder={'Type your location'}
//                   value={formValues.location}
//                   onChange={handleInputOnChange}
//                 />
//                 <InputField
//                   type="number"
//                   name="price"
//                   label={'Price'}
//                   placeholder={'Type price'}
//                   value={formValues.price}
//                   onChange={handleInputOnChange}
//                 />
//                 <CommentsLabel>
//                   Comments
//                   <CommentText
//                     as="textarea"
//                     name="comments"
//                     placeholder="Type your comments here..."
//                     value={formValues.comments}
//                     onChange={e => handleInputOnChange(e)}
//                   />
//                 </CommentsLabel>
//                 <Button
//                   type="submit"
//                   // disabled={
//                   //   (props.values.email !== '') & (props.values.password !== '')
//                   //     ? false
//                   //     : true
//                   // }
//                 >
//                   Done
//                 </Button>
//               </LoginFormStyled>
//             );
//           }}
//         </Formik>
//       </Wrapper>
//     </ExtraWrapper>
//   );
// };
