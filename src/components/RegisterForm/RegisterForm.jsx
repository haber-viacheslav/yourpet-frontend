import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authService';
import { Formik, ErrorMessage } from 'formik';
import { yupRegisterValidation } from 'helpers/yupValidation';
import { notify } from '../../helpers/notification';
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
  SuccessMessagePass,
  SuccessMessageConfirm,
  Input,
  Title,
  Box,
  Button,
  Text,
  Span,
  Link,
} from './RegisterForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirm: '',
};

export const RegisterForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(iconClose);
  const [typePass, setTypePass] = useState('password');
  const [toggleIconConfirm, setToggleIconConfirm] = useState(iconClose);
  const [typeConfirm, setTypeConfirm] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const registerResult = await dispatch(register({ email, password }));
      console.log(registerResult);
      const status = registerResult.payload.response.status;
      if (status === 'Success') {
        resetForm();
      }
      notify('success', 'You have successfully registered');
    } catch (error) {
      console.log(error);
    }
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
    if (typeConfirm === 'password') {
      setTypeConfirm('text');
      setToggleIconConfirm(iconOpen);
    } else {
      setTypeConfirm('password');
      setToggleIconConfirm(iconClose);
    }
  };

  return (
    <>
      <Wrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={yupRegisterValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => {
            return (
              <RegisterFormStyled autoComplete="off">
                <Title>Registration</Title>
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
                  )}
                  {touched.password && !errors.password && (
                    <SuccessMessagePass>Password is secure</SuccessMessagePass>
                  )}
                  {touched.password && !errors.password && (
                    <IconPass
                      position={'40px'}
                      error={errors.password && touched.password && 'false'}
                    >
                      <IconCheck />
                    </IconPass>
                  )}
                  <IconPass onClick={togglePassInput}>
                    {toggleIconPass}
                  </IconPass>

                  <Input
                    type={typeConfirm}
                    name="confirm"
                    id="confirm"
                    placeholder="Confirm password"
                    valid={
                      touched.confirm && !errors.confirm ? 'true' : undefined
                    }
                    error={touched.confirm && errors.confirm}
                  />
                  {touched.confirm && !errors.confirm && (
                    <IconConfirm
                      position={'40px'}
                      error={errors.confirm && touched.confirm && 'false'}
                    >
                      <IconCheck />
                    </IconConfirm>
                  )}
                  <IconConfirm onClick={toggleConfirmInput}>
                    {toggleIconConfirm}
                  </IconConfirm>

                  {touched.confirm && errors.confirm && (
                    <ErrorMessage
                      name="confirm"
                      type="confirm"
                      render={msg => <ConfirmMessage>{msg}</ConfirmMessage>}
                    />
                  )}
                  {touched.confirm && !errors.confirm && (
                    <SuccessMessageConfirm>
                      Passwords is matched
                    </SuccessMessageConfirm>
                  )}
                </Box>
                <Button type="submit">Registration</Button>
                <Text>
                  Already have an account?
                  <Span>
                    <Link to="/login">Login</Link>
                  </Span>
                </Text>
              </RegisterFormStyled>
            );
          }}
        </Formik>
      </Wrapper>
    </>
  );
};
