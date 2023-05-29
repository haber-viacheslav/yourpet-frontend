import styled from 'styled-components';
export const LoaderContainer = styled.div`
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
export const LoaderImg = styled.img`
  /* position: absolute; */
`;
