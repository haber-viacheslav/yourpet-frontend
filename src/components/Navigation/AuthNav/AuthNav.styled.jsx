import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const AuthNavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  &:hover,
  &:focus {
  }
  &.active {
  }
`;
