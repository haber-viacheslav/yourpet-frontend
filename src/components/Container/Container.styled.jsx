import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media ${props => props.theme.media.smToMd} {
    width: 320px;
  }

  @media ${props => props.theme.media.mdToLg} {
    width: 768px;
    padding: 0 32px;
  }

  @media ${props => props.theme.media.lg} {
    width: 1200px;
    padding: 0 16px;
  }
`;
