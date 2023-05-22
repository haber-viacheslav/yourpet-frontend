import styled from 'styled-components';
import { theme } from 'theme/theme';

export const NavList = styled.ul`
  display: none;

  @media screen and (${props => props.theme.media.md}) {
    display: flex;
    margin-right: auto;
    margin-left: 159px;

    a {
      text-decoration: none;
      color: black;
      :hover,
      :focus,
      :active {
        color: ${theme.colors.orange};
      }
    }
  
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;  
  :not(:last-child) {
    margin-right: 20px;
  }
`;
