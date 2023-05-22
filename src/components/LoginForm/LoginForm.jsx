import React from 'react';
import { Wrapper, Form } from './LoginForm.styled';
import { useState } from 'react';
import { Input, Title, Box, Button, Text, Span, Link, IconSpan, SVG } from './LoginForm.styled';
import icons from 'images/icons.svg';

export const LoginForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(
    <SVG width={24} height={24}>
      <use href={icons + '#icon-eye-closed'}></use>
    </SVG>
  );
  const [typePass, setTypePass] = useState('password');

    const togglePassInput = e => {
    if (typePass === 'password') {
      setTypePass('text');
      setToggleIconPass(<SVG width={24} height={24}>
      <use href={icons + '#icon-eye-open'}></use>
    </SVG>);
    } else {
      setTypePass('password');
      setToggleIconPass(<SVG width={24} height={24}>
      <use href={icons + '#icon-eye-closed'}></use>
    </SVG>);
    }
  };

  return (
    <Wrapper>
      <Form>
        <Title>Login</Title>
        <Box>
          <Input type="text" name="email" placeholder="Email" />
          <Input type={typePass} name="password" placeholder="Password" />
          <IconSpan onClick={togglePassInput}>{toggleIconPass}</IconSpan>
        </Box>
        <Button>Login</Button>
        <Text>
          Don't have an account?
          <Span>
            <Link to="/register">Register</Link>
          </Span>
        </Text>
      </Form>
    </Wrapper>
  );
};
