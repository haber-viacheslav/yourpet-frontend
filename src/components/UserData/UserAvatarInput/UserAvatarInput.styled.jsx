import styled from 'styled-components';
import { Field } from 'formik';

export const AvatarInputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-space: 4%;
`;

export const AvatarInput = styled(Field)`
  width: 182px;
  height: 182px;
  border: 1px solid #54adff;
  border-radius: 40px;
  outline: transparent;
`;

export const LabelContainer = styled.div`
  margin-top: 12px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

`;

export const AvatarInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  align-self: flex-start;
  gap: 12px;
  outline: 1px solid blue;
`;

