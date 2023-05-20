import React from 'react';
import { Wrapper, Form } from './RegisterForm.styled';
import { Input, Title, Box, Button, Text, Span, Link } from './RegisterForm.styled';

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
