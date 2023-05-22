import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100vh;
  padding-top: ${props => props.padTopSm || '40px'};
  padding-bottom: ${props => props.padBottomSM || '100px'};
  @media screen and (${props => props.theme.media.mdToLg}) {
    padding-top: ${props => props.padTopMd || '80px'};
    padding-bottom: ${props => props.padBottomMd || '192px'};
  }
  @media screen and (${props => props.theme.media.lg}) {
    padding-top: ${props => props.padTopLg || '80px'};
    padding-bottom: ${props => props.padBottomLg || '103px'};
  }
`;
