import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  @media screen and (${props => props.theme.media.md}) {
    height: auto;
  }
`;

export const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 24px;
  line-height: 1.35;
  color: ${props => props.theme.colors.clearBlack};
  @media screen and (${props => props.theme.media.md}) {
    font-weight: ${props => props.theme.fontWeights.semibold};
    min-width: 280px;
    font-size: 32px;
  }
`;

export const Img = styled.img`
  width: 80%;
  @media screen and (${props => props.theme.media.md}) {
    width: 50%;
  }
`;
