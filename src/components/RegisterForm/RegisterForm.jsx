import React from 'react';
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { string, object, ref } from 'yup';
import {
  Wrapper,
  RegisterFormStyled,
  IconMail,
  IconPass,
  IconConfirm,
  SVG,
  EmailMessage,
  PasswordMessage,
  ConfirmMessage,
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
        {({ errors, touched, isValid }) => (
          <RegisterFormStyled autoComplete="off">
            <Title>Registation</Title>
            <Box>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                error={errors.email && touched.email && 'false'}
              />
              <ErrorMessage
                name="email"
                type="email"
                id="email"
                render={msg => <EmailMessage>{msg}</EmailMessage>}
              />
              {errors.email && touched.email ? (
                <IconMail error={errors.email && touched.email && 'false'}>
                  <SVG width={24} height={24}>
                    <use href={icons + '#icon-cross-small'}></use>
                  </SVG>
                </IconMail>
              ) : <IconMail error={errors.email && touched.email && 'false'}>
                  <SVG width={24} height={24}>
                    <use href={icons + '#icon-check'}></use>
                  </SVG>
                </IconMail> }
              <Input
                type={typePass}
                id="password"
                name="password"
                placeholder="Password"
                error={errors.password && touched.password && 'false'}
              />
              <ErrorMessage
                name="password"
                type="password"
                render={password => (
                  <PasswordMessage>{password}</PasswordMessage>
                )}
              />
              <IconPass onClick={togglePassInput}>{toggleIconPass}</IconPass>
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
                error={errors.confirm && touched.confirm && 'false'}
              />
              <IconConfirm onClick={toggleConfirmInput}>
                {toggleIconConfirm}
              </IconConfirm>
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
