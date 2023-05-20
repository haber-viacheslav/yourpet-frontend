import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SvgPlusIcon = styled.svg`
  fill: #54adff;
  stroke: #54adff;
`;

export const SvgSexIcon = styled.svg`
  fill: #ffffff;
  stroke: ${props => {
    if (props.sex === '') {
      return props.index === 0 ? '#F43F5E' : '#54ADFF';
    } else if (props.index === 0) {
      return props.selected ? '#F43F5E' : '#888888';
    } else if (props.index === 1) {
      return props.selected ? '#54ADFF' : '#888888';
    }
  }};
`;

export const ExtraWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  font-family: ${props => props.theme.fonts.main};
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

export const BtnWrappper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 10px; */
`;

export const CommentsLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-top: 24px;
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
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  padding: 8px 28px;
  width: 248px;
  height: 40px;

  color: #fef9f9;
  background: #54adff;
  border: none;
  border-radius: 40px;
  outline: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    /* background-color: #fef9f9;
    color: #54adff; */
  }

  &:disabled {
  }
`;
