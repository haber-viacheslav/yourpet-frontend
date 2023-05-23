import styled from 'styled-components';

export const NavList = styled.ul`
  display: none;

  @media screen and (${props => props.theme.media.lg}) {
    display: flex;
    margin-right: auto;
    margin-left: 159px;

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.black};
      :hover,
      :focus,
      :active {
        color: ${props => props.theme.colors.orange};
      }
    }
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  :not(:last-child) {
    margin-right: 20px;
  }
`;
