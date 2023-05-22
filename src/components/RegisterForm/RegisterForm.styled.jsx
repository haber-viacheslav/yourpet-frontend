import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme/theme';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 280px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background-color: #ffffff;
  padding: 40px 12px;

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 52px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.regular};
  height: 48px;
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  border: 1px solid #54adff;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  border: none;
  border-radius: 40px;
  height: 48px;
  cursor: pointer;
  background: #54adff;
  margin-bottom: 24px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.regular};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #888888;
`;

export const Span = styled.span`
  margin-left: 3px;
`;

export const Link = styled(NavLink)`
  color: #54adff;
  line-height: 16px;
`;

export const IconSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 86px;
  right: 15px;
  @media screen and (min-width: 768px) {
    top: 92px;
  }
`;
export const IconSpan1 = styled.span`
  position: absolute;
  cursor: pointer;
  top: 156px;
  right: 15px;
  @media screen and (min-width: 768px) {
    top: 172px;
  }
`;

export const SVG = styled.svg`
  display: block;
  fill: transparent;
  stroke: #54adff;
`;

export const EmailMessage = styled.div`
  position: absolute;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #f43f5e;
  top: 50px;
  left: 16px;
`;

export const PasswordMessage = styled.div`
  position: absolute;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #f43f5e;
  top: 123px;
  left: 16px;
  @media screen and (min-width: 768px) {
    top: 130px;
    left: 16px;
  }
`;

export const ConfirmMessage = styled.div`
  position: absolute;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #f43f5e;
  top: 195px;
  left: 16px;
  @media screen and (min-width: 768px) {
    top: 210px;
  }
`;
