import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  
  align-items: center;

  @media screen and (${props => props.theme.media.lg}) {
    margin-right: 270px;
    flex-direction: row;
    
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 32px;
  line-height: 1.35;
  a {
      text-decoration: none;
      color: ${props => props.theme.colors.black};
      :hover,
      :focus,
      :active {
        color: ${props => props.theme.colors.orange};
      }
    }
  

  @media screen and (${props => props.theme.media.lg}) {
    font-size: 20px;
    letter-spacing: 0.04em;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
