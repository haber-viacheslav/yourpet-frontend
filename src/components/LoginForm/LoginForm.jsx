import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { string, object } from 'yup';
import {
  Wrapper,
  Input,
  IconMail,
  IconPass,
  LoginFormStyled,
  Title,
  Box,
  Button,
  Text,
  Span,
  Link,
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
        {({ errors, touched }) => (
          <LoginFormStyled>
            <Title>Login</Title>
            <Box>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                valid={touched.email && !errors.email ? 'true' : undefined}
                error={touched.email && errors.email}
              />
              <ErrorMessage
                name="email"
                type="email"
                render={msg => <EmailMessage>{msg}</EmailMessage>}
              />
              {errors.email && touched.email && (
                <IconMail error={errors.email && touched.email && 'false'}>
                  <SVG width={24} height={24}>
                    <use href={icons + '#icon-cross-small'}></use>
                  </SVG>
                </IconMail>
              )}
              {touched.email && !errors.email && (
                <IconMail error={errors.email && touched.email && 'false'}>
                  <SVG width={24} height={24}>
                    <use href={icons + '#icon-check'} color="#00C3AD"></use>
                  </SVG>
                </IconMail>
              )}
              {touched.password && !errors.password ? (
                <IconPass
                  error={errors.password && touched.password && 'false'}
                >
                  <SVG width={24} height={24}>
                    <use href={icons + '#icon-check'} color="#00C3AD"></use>
                  </SVG>
                </IconPass>
              ) : (
                <IconPass onClick={togglePassInput}>{toggleIconPass}</IconPass>
              )}
              <Input
                type={typePass}
                name="password"
                placeholder="Password"
                valid={
                  touched.password && !errors.password ? 'true' : undefined
                }
                error={touched.password && errors.password}
              />
              <ErrorMessage
                name="password"
                type="password"
                render={password => (
                  <PasswordMessage>{password}</PasswordMessage>
                )}
              />
             
            </Box>
            <Button type="submit">Login</Button>
            <Text>
              Don't have an account?
              <Span>
                <Link to="/register">Register</Link>
              </Span>
            </Text>
          </LoginFormStyled>
        )}
      </Formik>
    </Wrapper>
  );
};
