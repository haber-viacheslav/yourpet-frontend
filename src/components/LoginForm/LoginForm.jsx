import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { string, object } from 'yup';
import {
  Wrapper,
  Input,
  LoginFormStyled,
  Title,
  Box,
  Button,
  Text,
  Span,
  Link,
  IconSpan,
  SVG,
  EmailMessage,
  PasswordMessage,
} from './LoginForm.styled';
import icons from 'images/icons.svg';

export const LoginForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(
    <SVG width={24} height={24}>
      <use href={icons + '#icon-eye-closed'}></use>
    </SVG>
  );
  const [typePass, setTypePass] = useState('password');

  const yupLoginValidation = object().shape({
    email: string().email('Enter a Valid Email').required('Email is Required'),
    password: string()
      .required('Enter Your Password')
      .min(8, 'Password Should be minimum 8 character')
      .max(50, 'Too long'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };

  const togglePassInput = e => {
    if (typePass === 'password') {
      setTypePass('text');
      setToggleIconPass(
        <SVG width={24} height={24}>
          <use href={icons + '#icon-eye-open'}></use>
        </SVG>
      );
    } else {
      setTypePass('password');
      setToggleIconPass(
        <SVG width={24} height={24}>
          <use href={icons + '#icon-eye-closed'}></use>
        </SVG>
      );
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={yupLoginValidation}
        onSubmit={handleSubmit}
      >
        <LoginFormStyled>
          <Title>Login</Title>
          <Box>
            <Input type="text" name="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              type="email"
              render={msg => <EmailMessage>{msg}</EmailMessage>}
            />
            <Input type={typePass} name="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              type="password"
              render={password => <PasswordMessage>{password}</PasswordMessage>}
            />
            <IconSpan onClick={togglePassInput}>{toggleIconPass}</IconSpan>
          </Box>
          <Button type="submit">Login</Button>
          <Text>
            Don't have an account?
            <Span>
              <Link to="/register">Register</Link>
            </Span>
          </Text>
        </LoginFormStyled>
      </Formik>
    </Wrapper>
  );
};
