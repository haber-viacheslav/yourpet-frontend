import styled from 'styled-components';
import { Form } from 'formik';

export const SvgPlusIcon = styled.svg`
  fill: ${props => props.theme.colors.blue};
  stroke: ${props => props.theme.colors.blue};
`;

export const SvgSexIcon = styled.svg`
  fill: ${props => props.theme.colors.clearWhite};
  stroke: ${props => {
    if (props.sex === '') {
      return props.index === 0
        ? props.theme.colors.red
        : props.theme.colors.blue;
    } else if (props.index === 0) {
      return props.selected ? props.theme.colors.red : props.theme.colors.grey;
    } else if (props.index === 1) {
      return props.selected ? props.theme.colors.blue : props.theme.colors.grey;
    }
  }};
`;

export const ExtraWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  padding: 20px 8px 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  background: ${props => props.theme.colors.clearWhite};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 40px;
  font-style: normal;

  @media screen and (${props => props.theme.media.md}) {
    padding: 20px 32px;
  }
`;

export const SexWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
`;

export const GroupTitle = styled.p`
  font-size: 14px;
  line-height: 1.35;
  color: ${props => props.theme.colors.dark};

  @media screen and (${props => props.theme.media.md}) {
    font-size: 20px;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  gap: 12px;
  margin-top: 8px;
  margin-bottom: 67px;

  @media screen and (${props => props.theme.media.md}) {
    margin-top: 24px;
  }
`;

export const GroupSexWrapper = styled.div`
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

export const SexUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  gap: 20px;

  @media screen and (${props => props.theme.media.md}) {
    margin-right: 63px;
    gap: ${props => (props['data-category'] !== 'your pet' ? '40px' : '20px')};

    flex-direction: ${props =>
      props['data-category'] !== 'your pet' ? 'column' : 'row'};
  }

  @media screen and (${props => props.theme.media.lg}) {
    margin-right: 96px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  gap: 16px;

  @media screen and (${props => props.theme.media.md}) {
    gap: ${props => {
      if (props['data-category'] !== 'your pet') {
        return '0';
      }
    }};
    flex-direction: ${props =>
      props['data-category'] !== 'your pet' ? 'row' : 'column'};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 24px;

  @media screen and (${props => props.theme.media.md}) {
    flex-direction: row-reverse;
    gap: 32px;
    margin-top: 36px;
  }
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrWrapper = styled.span`
  position: absolute;
  display: inline-block;
  width: 180px;
  bottom: -18px;
  text-align: center;

  font-size: 12px;

  line-height: 1.35;
  color: ${props => props.theme.colors.red};
`;
