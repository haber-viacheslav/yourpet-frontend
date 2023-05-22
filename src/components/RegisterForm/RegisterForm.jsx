import React from 'react';
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { string, object, ref } from 'yup';
import {
  Wrapper,
  RegisterFormStyled,
  IconSpan,
  IconSpan1,
  SVG,
  EmailMessage,
  PasswordMessage,
  ConfirmMessage
} from './RegisterForm.styled';
import {
  Input,
  Title,
  Box,
  Button,
  Text,
  Span,
  Link,
} from './RegisterForm.styled';
import icons from 'images/icons.svg';

const iconClose = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-eye-closed'}></use>
    </SVG>
  );
};

const iconOpen = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-eye-open'}></use>
    </SVG>
  );
};

export const RegisterForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(iconClose);
  const [typePass, setTypePass] = useState('password');
  const [toggleIconConfirm, setToggleIconConfirm] = useState(iconClose);
  const [typeCofirm, setTypeCofirm] = useState('password');

  const yupRegisterValidation = object().shape({
    email: string().email('Enter a Valid Email').required('Email is Required'),
    password: string()
      .required('Enter Your Password')
      .min(8, 'Password Should be minimum 8 character')
      .max(50, 'Too long'),
    confirm: string()
      .oneOf([ref('password')], 'Password does not matched')
      .required('Confirm Password is Required'),
  });

  const initialValues = {
    email: '',
    password: '',
    confirm: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };

  const togglePassInput = e => {
    if (typePass === 'password') {
      setTypePass('text');
      setToggleIconPass(iconOpen);
    } else {
      setTypePass('password');
      setToggleIconPass(iconClose);
    }
  };

  const toggleConfirmInput = e => {
    if (typeCofirm === 'password') {
      setTypeCofirm('text');
      setToggleIconConfirm(iconOpen);
    } else {
      setTypeCofirm('password');
      setToggleIconConfirm(iconClose);
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={yupRegisterValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <RegisterFormStyled autoComplete="off">
            <Title>Registation</Title>
            <Box>
              <Input type="text" name="email" placeholder="Email" />
              <ErrorMessage name="email" type="email" render={msg => <EmailMessage>{msg}</EmailMessage>} />
              <Input type={typePass} name="password" placeholder="Password" />
              <ErrorMessage name="password" type="password" render={password => <PasswordMessage>{password}</PasswordMessage>} />
              <IconSpan onClick={togglePassInput}>{toggleIconPass}</IconSpan>
              <ErrorMessage name="confirm" type="confirm" render={msg => <ConfirmMessage>{msg}</ConfirmMessage>} />
              <Input
                type={typeCofirm}
                name="confirm"
                placeholder="Confirm password"
              />
              <IconSpan1 onClick={toggleConfirmInput}>
                {toggleIconConfirm}
              </IconSpan1>
            </Box>
            <Button type="submit">Registation</Button>
            <Text>
              Already have an account?
              <Span>
                <Link to="/login">Login</Link>
              </Span>
            </Text>
          </RegisterFormStyled>
        )}
      </Formik>
    </Wrapper>
  );
};
