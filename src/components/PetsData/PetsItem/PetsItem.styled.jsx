import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 16px 20px 40px;

  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.clearWhite};
  box-shadow: ${props => props.theme.shadows.mainShadow};

  border-radius: 40px;

  @media screen and (${props => props.theme.media.md}) {
    flex-direction: row;
    align-items: flex-start;
    min-height: 256px;
    padding: 20px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    padding: 20px 28px 20px 20px;
    gap: 32px;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 240px;

  border-radius: 20px;

  @media screen and (${props => props.theme.media.md}) {
    min-width: 128px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    min-width: 161px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 12px;
  font-size: 14px;
  line-height: 1.357;

  @media screen and (${props => props.theme.media.md}) {
    line-height: 1.3;
  }

  @media screen and (${props => props.theme.media.lg}) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.black};
  letter-spacing: 0.04em;
`;
export const Text = styled.span`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.colors.black};
  letter-spacing: 0.04em;
`;
