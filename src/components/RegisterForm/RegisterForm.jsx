import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, Form } from './RegisterForm.styled';
import { Input, Title, Box, Button, Text, Span } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Registation</Title>
        <Box>
          <Input type="text" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Input
            type="password"
            name="confirm"
            placeholder="Confirm password"
          />
        </Box>
        <Button>Login</Button>
        <Text>
          Already have an account?
          <Span>
            <NavLink to="/login">Login</NavLink>
          </Span>
        </Text>
      </Form>
    </Wrapper>
  );
};
