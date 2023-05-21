import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backdropColor};
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);
  width: 95vw;
  height: 287px;
  padding: 68px 16px 60px;
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 20px;
  background-color: ${props => props.theme.colors.clearWhite};

  @media screen and (${props => props.theme.media.sm}) {
    width: 280px;
  }

  @media screen and (${props => props.theme.media.md}) {
    top: 148px;
    padding: 60px 129px;
    width: 608px;
    height: 354px;
    border-radius: 40px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    top: 112px;
  }
`;
