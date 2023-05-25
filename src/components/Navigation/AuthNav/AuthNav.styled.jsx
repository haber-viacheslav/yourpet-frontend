import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../theme/theme';

export const AuthNavMenu = styled.div`
  display: block;     
    :not(:last-child) {
      margin-right: 20px;
    }
  @media screen and (${props => props.theme.media.md}) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const RegisterLink = styled(NavLink)`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 165px;
  height: 36px;
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights.semibold};
  line-height: 1.36;
  color: ${theme.colors.orange};
  background-color: transparent;
  border: 2px solid ${theme.colors.orange};
  border-radius: 40px;
`;

export const LoginLink = styled(NavLink)`
  position: relative;
  z-index: 1000;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 165px;
  height: 40px;
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.36;
  color: ${theme.colors.white};
  background-color: ${theme.colors.orange};
  border-radius: 40px;

  @media screen and (min-width: 767px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const SVG = styled.svg`
  margin-left: 8px;
  fill: currentColor;
  stroke: currentColor;
`;
