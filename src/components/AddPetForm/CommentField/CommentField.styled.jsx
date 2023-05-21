import styled from 'styled-components';
import { Field } from 'formik';

export const CommentInput = styled(Field)`
  width: 264px;
  height: 92px;
  padding: 8px 16px;
  margin-top: 4px;

  font-size: 14px;
  line-height: 1.5;

  outline: transparent;
  border: 1px solid;
  border-radius: 20px;
  resize: none;

  border-color: ${props =>
    props['data-invalid'] ? props.theme.colors.red : props.theme.colors.blue};

  @media screen and (${props => props.theme.media.md}) {
    width: 393px;
    height: 79px;
    padding: 12px 16px;
    margin-top: 8px;
    font-size: 16px;
  }

  &::placeholder {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: 14px;
    line-height: 1.5;
    color: ${props => props.theme.colors.grey};
  }
`;

export const InputLabel = styled.label``;

export const CommentsLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 1.35;
  margin-top: 24px;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const ErrWrapper = styled.span`
  position: absolute;
  bottom: -20px;
  padding-left: 16px;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 1.35;
  color: ${props => props.theme.colors.red};
`;