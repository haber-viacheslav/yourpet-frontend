import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 24px;

  @media screen and (${props => props.theme.media.md}) {
    gap: 20px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    gap: 24px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${props => props.theme.media.md}) {
  }
`;

export const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.37;
  letter-spacing: 4%;
  color: ${props => props.theme.colors.dark};

  @media screen and (${props => props.theme.media.md}) {
    font-style: 500;
    font-size: 28px;
  }
`;

export const PetsList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  gap: 20px;
`;
