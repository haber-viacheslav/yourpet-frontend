import React from 'react';
import { Wrapper, Form } from './RegisterForm.styled';
import {Input, Title, Box} from './RegisterForm.styled'




export const RegisterForm = () => {


  return (
    <Wrapper>
      <Form>
        <Title>Registation</Title>
        <Box>
        <Input type="text" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Input type="password" name="confirm" placeholder="Confirm password"/>
        </Box>
      </Form>
    </Wrapper>
  );
};










