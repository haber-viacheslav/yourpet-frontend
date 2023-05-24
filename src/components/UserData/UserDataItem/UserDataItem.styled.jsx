import styled from 'styled-components';
import { Field } from 'formik';
import { theme } from 'theme/theme';

export const ProfileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.2px;
  letter-spacing: 4%;

  @media screen and (${theme.media.md}) {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const ProfileInput = styled(Field)`
  margin-top: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.39px;
  color: ${props => props.theme.colors.black};

  border: none;
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 16.39px;
    color: ${props => props.theme.colors.grey};
  }

  @media screen and (${props => props.theme.media.md}) {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const SingleInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3px 6px;
  width: 190px;
  height: 28px;
  border: 1px solid #54adff;
  border-radius: 20px;

  @media screen and (${props => props.theme.media.md}) {
    width: 255px;
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
`;

export const ErrWrapper = styled.span`
  position: absolute;
  text-align: right;
  right: 30px;
  width: 250px;
  top: -18px;
  padding-left: 16px;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 1.35;
  color: ${props => props.theme.colors.red};
`;
