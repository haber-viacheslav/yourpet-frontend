import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authService';
import { string, object } from 'yup';
import { iconClose, iconOpen, IconCrossSmall, IconCheck } from './Icons/Icons';
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
  EmailMessage,
  PasswordMessage,
  SuccessMessage
} from './LoginForm.styled';

export const LoginForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(iconClose);
  const [typePass, setTypePass] = useState('password');

  const dispatch = useDispatch();

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
    dispatch(logIn({ values }));
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
                  <IconCrossSmall />
                </IconMail>
              )}
              {touched.email && !errors.email && (
                <IconMail error={errors.email && touched.email && 'false'}>
                  <IconCheck />
                </IconMail>
              )}
              {touched.password && !errors.password ? (
                <IconPass
                  error={errors.password && touched.password && 'false'}
                >
                  <IconCheck />
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
              {touched.password && errors.password && (
                <ErrorMessage
                  name="password"
                  type="password"
                  render={password => (
                    <PasswordMessage>{password}</PasswordMessage>
                  )}
                />
              )}  {touched.password && !errors.password && (
                <SuccessMessage>Password is secure</SuccessMessage>
              )}
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
