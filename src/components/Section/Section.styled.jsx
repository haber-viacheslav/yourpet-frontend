import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: ${props => props.padTopSm || '40px'};
  padding-bottom: ${props => props.padBottomSM || '100px'};
  @media ${props => props.theme.media.mdToLg} {
    padding-top: ${props => props.padTopMd || '80px'};
    padding-bottom: ${props => props.padBottomMd || '192px'};
  }
  @media ${props => props.theme.media.lg} {
    padding-top: ${props => props.padTopLg || '80px'};
    padding-bottom: ${props => props.padBottomLg || '103px'};
  }
`;
