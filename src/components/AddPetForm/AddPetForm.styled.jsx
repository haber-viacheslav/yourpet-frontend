import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ExtraWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  font-family: 'Manrope';
  font-style: normal;
`;

export const SexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
`;

export const GroupTitle = styled.p`
  font-size: 14px;
  line-height: 19px;
`;

export const Wrapper = styled.div`
  display: inline-block;
  padding: 20px 8px 16px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  gap: 12px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  gap: 24px;
`;

export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CommentsLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`;

export const CommentText = styled(Field)`
  width: 264px;
  height: 92px;
  padding: 8px 16px;
  margin-top: 4px;
  outline: transparent;
  border: 1px solid #54adff;
  border-radius: 20px;
  resize: none;

  &::placeholder {
    font-size: 14px;
    color: #7a7a7a;
  }
`;

export const ErrWrapper = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 100px;
  height: 40px;

  border-radius: 5px;

  color: #ff7b3e;
  background-color: #4e4039;
  border: 2px solid #ff7b3e;
  box-shadow: 1px 1px 3px #c9c1c1;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ff7b3e;
    color: #ffffff;
  }

  &:disabled {
    color: #bdbdbd;
    background-color: #4e4039;
    border: 2px solid #bdbdbd;

    cursor: auto;
  }
`;
