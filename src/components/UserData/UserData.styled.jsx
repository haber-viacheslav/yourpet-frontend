import styled from 'styled-components';

export const ProfileInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 20px 8px 68px 8px;
  gap: 21px;

  background: ${props => props.theme.colors.clearWhite};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 20px;

  @media screen and (${props => props.theme.media.md}) {
    flex-direction: row-reverse;
    gap: 71px;
    padding: 20px 76px 28px 20px;
    border-radius: 40px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    flex-direction: column;
    gap: 25px;
    padding: 20px 24px 63px 16px;
    max-width: 395px;
  }
`;

export const ProfileInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  align-self: flex-start;
  gap: 12px;
`;

export const ProfileTitle = styled.h2`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.37;
  letter-spacing: 4%;
  color: ${props => props.theme.colors.dark};

  text-align: left;
  margin-bottom: 18px;

  @media screen and (${props => props.theme.media.md}) {
    margin-bottom: 24px;
    font-style: 500;
    font-size: 28px;
  }
`;
