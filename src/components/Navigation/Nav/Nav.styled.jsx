import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 219px;
  @media (min-width: 769px) {
    display: none;
    
  }
  @media screen and (${props => props.theme.media.lg}) {
    display: inherit;
    margin-right: 270px;
    flex-direction: row;
    padding-bottom: 0;
    
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 32px;
  line-height: 1.35;

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
  :active {
    color: ${props => props.theme.colors.orange};
  }
`;


  