import styled from 'styled-components';

export const Box = styled.div`

  @media screen and (${props => props.theme.media.mdToLg}) {
    /* margin-left: 24px; */
  }
  @media screen and (${props => props.theme.media.lg}) {
    display: none;
  }
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  position: fixed;
  overflow: hidden;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: #fdf7f2;
  border: 1px solid #000;
  padding: 24px 32px;
`;

export const BackdropUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  span:last-of-type {
    display: flex;
  }
`;

export const BackdropAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const BackdropNav = styled.div`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
