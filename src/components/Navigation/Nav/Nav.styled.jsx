import styled from 'styled-components';
import { theme } from 'theme/theme';

const Nav = styled.ul`
  list-style: none;
  display: flex;
  margin: 0px;
  padding: 0px;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover,
  a:focus {
    color: #ffc107;
  }

  a:active {
    color: #ffc107;
  }

  @media screen and (${props => props.theme.media.lg}) {
    margin-right: auto;
    margin-left: 159px;
  }
`;

const NavItem = styled.li`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  & :not(last-child) {
    margin-right: 20px;
  }
`;

export { Nav, NavItem };
