import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {theme} from '../../../theme/theme';

export const AuthNavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 165px;
  height: 40px;
  cursor: pointer;
  font-size: ${theme.fontSizes[2]}px;
  color: ${theme.colors.orange};
  background-color: transparent;
  border: 2px solid ${theme.colors.orange};
  border-radius: 40px;
  outline: none;
  /* transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
  &:hover,
  &:focus {
  }
  &.active {
  }
`;
