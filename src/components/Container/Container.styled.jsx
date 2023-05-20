import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};

  margin: 0 auto;

  @media ${props => props.theme.media.mobile} {
    width: 320px;
    padding: 20px 20px 100px;
    padding-bottom: ${props => props.bottom || '100px'};
  }

  @media ${props => props.theme.media.tablet} {
    width: 768px;
    padding: 24px 32px 192px;
    padding-bottom: ${props => props.bottom || '192px'};
  }

  @media ${props => props.theme.media.desktop} {
    width: 1200px;
    padding: 20px 16px 103px;
    padding-bottom: ${props => props.bottom || '103px'};
  }
`;
