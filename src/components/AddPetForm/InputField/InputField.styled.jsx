import styled from 'styled-components';
import { Field } from 'formik';

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`;

export const Input = styled(Field)`
  padding: 8px 16px;
  width: 264px;
  height: 40px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  border: 1px solid #54adff;
  border-radius: 40px;

  outline: transparent;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
`;

export const ErrWrapper = styled.span`
  position: absolute;
  bottom: -20px;
  padding-left: 16px;
  font-size: 12px;
  line-height: 16px;
  color: red;
`;
