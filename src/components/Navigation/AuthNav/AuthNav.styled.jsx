import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../theme/theme';

export const AuthNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const RegisterLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 165px;
  height: 36px;
  font-size: ${theme.fontSizes[2]}px;
  color: ${theme.colors.orange};
  background-color: transparent;
  border: 2px solid ${theme.colors.orange};
  border-radius: 40px;
`;

export const LoginLink = styled(NavLink)`
  margin-top: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 165px;
  height: 40px;
  font-size: ${theme.fontSizes[2]}px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.orange};
  border-radius: 40px;

  @media screen and (min-width: 767px) {
    margin-top: 0;
  }
`;
export const SVG = styled.svg`
  margin-left: 8px;
  fill: currentColor;
  stroke: currentColor;
`;
