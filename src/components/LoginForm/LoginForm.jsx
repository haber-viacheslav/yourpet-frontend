import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/authService';
import { string, object } from 'yup';
import { iconClose, iconOpen, IconCrossSmall, IconCheck } from './Icons/Icons';
// import { setAuthHeader } from 'redux/auth/utility/authUtility';
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
  SuccessMessage,
} from './LoginForm.styled';
import { dispatch } from 'redux/store';
import { logIn } from 'redux/auth/authService';
// import { fetchDecorator } from 'helpers/fetchDecorator';
// import axios from 'axios';

export const LoginForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(iconClose);
  const [typePass, setTypePass] = useState('password');
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  // EXAMPLE
  // useEffect(() => {
  //   // use async IIEF or named  async func
  //   (async () => {
  //     const resp = await fetchDecorator(
  //       () => {},
  //       () => {},
  //       () => axios.get('auth/current')
  //     );
  //     console.log(resp);
  //     console.log(axios.defaults.headers.common.Authorization);
  //   })();
  // }, [dispatch]);
  // -----------------------------------

  const yupLoginValidation = object().shape({
    email: string().email('Enter a Valid Email').required('Email is Required'),
    password: string()
      .required('Enter Your Password')
      .min(6, 'Password should be minimum 6 character')
      .max(16, 'Too long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    dispatch(logIn(values));
    // setTimeout(() => {
    //   navigate('/user');
    // }, 1000);
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
              )}{' '}
              {touched.password && !errors.password && (
                <SuccessMessage>Password is secure</SuccessMessage>
              )}
              {touched.password && !errors.password && (
                <IconPass
                  position={'40px'}
                  error={errors.password && touched.password && 'false'}
                >
                  <IconCheck />
                </IconPass>
              )}
              <IconPass onClick={togglePassInput}>{toggleIconPass}</IconPass>
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
