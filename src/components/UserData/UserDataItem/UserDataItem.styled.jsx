import styled from 'styled-components';
import { Field } from 'formik';

export const ProfileInputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.2px;
  letter-space: 4%;
`;

export const ProfileInput = styled(Field)`
  padding: 4px 12px;
  width: 190px;
  height: 28px;
  margin-top: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.39px;

  border: 1px solid #54adff;
  border-radius: 20px;

  outline: transparent;

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 16.39px;
  }
`;

export const ProfileInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  align-self: flex-start;
  gap: 12px;
  outline: 1px solid blue;
`;