import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.orange};
  @media screen and (${props => props.theme.media.md}) {
    width: 113px;
    height: 44px;
    justify-content: space-around;
    margin-right: 20px;
  }
`;

export const UserName = styled.span`
  display: inherit;
  margin-left: 12px;

  display: ${({ isOpen }) =>
      isOpen ? "display" : "none"};
  @media screen and (${props => props.theme.media.md}) {
    display: inherit;
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: 16px;
    line-height: 1.36;
    color: ${props => props.theme.colors.orange};
  }
`;
