import styled from 'styled-components';
import { Field } from 'formik';

export const Form = styled.form`
  margin-left: auto;
  padding-top: 70px;
  padding-left: 80px;
  padding-right: 80px;
`;

export const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 93%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;