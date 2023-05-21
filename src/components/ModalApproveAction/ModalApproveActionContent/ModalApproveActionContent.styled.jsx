import styled from 'styled-components';
export const StyledModalTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.clearBlack};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 24px;
  @media screen and (${props => props.theme.media.md}) {
    font-size: ${props => props.theme.fontSizes[6]}px;
    margin-bottom: 40px;
  }
`;

export const AnotherStyledModalTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes[5]}px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 24px;
  @media screen and (${props => props.theme.media.md}) {
    font-size: ${props => props.theme.fontSizes[14]}px;
    margin-bottom: 52px;
  }
`;
export const StyledModalDescr = styled.p`
  margin-bottom: 40px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 1.375;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.clearBlack};
  @media screen and (${props => props.theme.media.md}) {
    font-size: ${props => props.theme.fontSizes[2]}px;
    margin-bottom: 48px;
  }
`;
export const StyledModalDescrBold = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;
export const AnotherStyledModalDescr = styled.p`
  margin-bottom: 40px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1.375;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
  @media screen and (${props => props.theme.media.md}) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    margin-bottom: 60px;
  }
`;
