import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (${props => props.theme.media.md}) {
  gap: 60px;
  };
  @media screen and (${props => props.theme.media.lg}) {
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  flex-direction: row;
  };

`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 32px;
  line-height: 1.35;
  
  @media screen and (${props => props.theme.media.md}) {
  font-size: 48px;
  line-height: 1.36;
  };
  @media screen and (${props => props.theme.media.lg}) {
    font-size: 20px;
    letter-spacing: 0.04em;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const NavLinkItem = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  :hover,
  :focus,
  &.active {
    color: ${props => props.theme.colors.orange};
  }
`;
