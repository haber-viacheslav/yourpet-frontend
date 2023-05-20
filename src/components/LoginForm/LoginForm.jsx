import React from 'react';
import { Wrapper, Form } from './LoginForm.styled';
import { Input, Title, Box, Button, Text, Span, Link } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Login</Title>
        <Box>
          <Input type="text" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
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
