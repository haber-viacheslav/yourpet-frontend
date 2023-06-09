import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme/theme';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 40px;
  background-color: ${props => props.theme.colors.clearWhite};
  padding: 40px 12px;

  @media screen and (${props => props.theme.media.md}) {
    width: 608px;
    padding: 60px 75px;
  }
`;

export const RegisterFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (${props => props.theme.media.md}) {
    gap: 32px;
    margin-bottom: 52px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: 1.37;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.dark};

  @media screen and (${props => props.theme.media.md}) {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes[14]};
    line-height: 1.37;
  }
`;

export const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  height: 48px;
  font-size: ${props => props.theme.fontSizes[2]};
  padding: 12px 16px;
  width: 100%;
  border: 1px solid;
  border-color: ${props =>
    props.error
      ? props.theme.colors.red
      : props.valid
      ? props.theme.colors.green
      : props.theme.colors.blue};
  border-radius: 40px;
  cursor: pointer;
  outline: none;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[2]};
  width: 100%;
  border: none;
  border-radius: 40px;
  height: 48px;
  cursor: pointer;
  background: ${props => props.theme.colors.blue};
  margin-bottom: 24px;
  color: ${props => props.theme.colors.clearWhite};

   &:hover{
    background: ${props => props.theme.colors.blueDark};
     transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (${props => props.theme.media.md}) {
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.colors.grey};
`;

export const Span = styled.span`
  margin-left: 3px;
`;

export const Link = styled(NavLink)`
  color: ${props => props.theme.colors.blue};
  line-height: 1.33;
`;

export const IconMail = styled.span`
  position: absolute;
  cursor: pointer;
  color: ${props =>
    props.error ? props.theme.colors.red : props.theme.colors.green};
  top: 13px;
  right: 40px;
  @media screen and (${props => props.theme.media.md}) {
    top: 86px;
    top: 12px;
  }
`;

export const IconPass = styled.span`
  color: ${props => props.theme.colors.blue};
  position: absolute;
  cursor: pointer;
  top: 86px;
  right: ${props => props.position || '15px'};
  @media screen and (${props => props.theme.media.md}) {
    top: 92px;
  }
`;
export const IconConfirm = styled.span`
  color: ${props => props.theme.colors.blue};
  position: absolute;
  cursor: pointer;
  top: 156px;
  right: ${props => props.position || '15px'};
  @media screen and (${props => props.theme.media.md}) {
    top: 172px;
  }
`;



export const EmailMessage = styled.div`
  position: absolute;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.colors.red};
  top: 50px;
  left: 16px;
`;

export const PasswordMessage = styled.div`
  position: absolute;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.red};
  top: 123px;
  left: 16px;
  @media screen and (${props => props.theme.media.md}) {
    top: 130px;
    left: 16px;
  }
`;

export const ConfirmMessage = styled.div`
  position: absolute;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.red};
  top: 195px;
  left: 16px;
  @media screen and (${props => props.theme.media.md}) {
    top: 210px;
  }
`;

export const SuccessMessagePass = styled.div`
  position: absolute;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.green};
  top: 123px;
  left: 16px;
  @media screen and (${props => props.theme.media.md}) {
    top: 130px;
    left: 16px;
  }
`;

export const SuccessMessageConfirm = styled.div`
  position: absolute;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.green};
  top: 195px;
  left: 16px;
  @media screen and (${props => props.theme.media.md}) {
    top: 210px;
  }
`;