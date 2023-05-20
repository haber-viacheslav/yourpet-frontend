import React from 'react';
import { useState } from 'react';
import { Wrapper, Form, IconSpan, IconSpan1, SVG } from './RegisterForm.styled';
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
      <Form>
        <Title>Registation</Title>
        <Box>
          <Input type="text" name="email" placeholder="Email" />
          <Input type={typePass} name="password" placeholder="Password" />
          <IconSpan onClick={togglePassInput}>{toggleIconPass}</IconSpan>
          <Input
            type={typeCofirm}
            name="confirm"
            placeholder="Confirm password"
          />
          <IconSpan1 onClick={toggleConfirmInput}>
            {toggleIconConfirm}
          </IconSpan1>
        </Box>
        <Button>Registation</Button>
        <Text>
          Already have an account?
          <Span>
            <Link to="/login">Login</Link>
          </Span>
        </Text>
      </Form>
    </Wrapper>
  );
};
