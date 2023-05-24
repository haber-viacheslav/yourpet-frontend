import React from 'react';
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { string, object, ref } from 'yup';
import { iconClose, iconOpen, IconCrossSmall, IconCheck } from './Icons/Icons';
import {
  Wrapper,
  RegisterFormStyled,
  IconMail,
  IconPass,
  IconConfirm,
  EmailMessage,
  PasswordMessage,
  ConfirmMessage,
  SuccessMessage,
  Input,
  Title,
  Box,
  Button,
  Text,
  Span,
  Link,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(iconClose);
  const [typePass, setTypePass] = useState('password');
  const [toggleIconConfirm, setToggleIconConfirm] = useState(iconClose);
  const [typeCofirm, setTypeCofirm] = useState('password');

  const yupRegisterValidation = object().shape({
    email: string().email('Enter a Valid Email').required('Email is Required'),
    password: string()
      .required('Enter Your Password')
      .min(8, 'Password should be minimum 8 character')
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
        {({ errors, touched }) => (
          <RegisterFormStyled autoComplete="off">
            <Title>Registation</Title>
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
                id="email"
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
                id="password"
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
              {touched.password && !errors.password ? (
                <IconPass
                  error={errors.password && touched.password && 'false'}
                >
                  <IconCheck />
                </IconPass>
              ) : (
                <IconPass onClick={togglePassInput}>{toggleIconPass}</IconPass>
              )}
              <ErrorMessage
                name="confirm"
                type="confirm"
                render={msg => <ConfirmMessage>{msg}</ConfirmMessage>}
              />
              <Input
                type={typeCofirm}
                name="confirm"
                id="confirm"
                placeholder="Confirm password"
                valid={touched.confirm && !errors.confirm ? 'true' : undefined}
                error={touched.confirm && errors.confirm}
              />
              {touched.confirm && !errors.confirm ? (
                <IconConfirm
                  error={errors.confirm && touched.confirm && 'false'}
                >
                  <IconCheck />
                </IconConfirm>
              ) : (
                <IconConfirm onClick={toggleConfirmInput}>
                  {toggleIconConfirm}
                </IconConfirm>
              )}
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

// passwords is matched