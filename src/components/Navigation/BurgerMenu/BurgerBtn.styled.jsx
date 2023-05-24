import styled from 'styled-components';

export const Burger = styled.div`
  z-index: 20;
  @media (min-width: 1279px) {
    display: none;
  }
`;

// backdrop
export const Box = styled.div`
  display: flex;
  /* flex-flow: row nowrap; */
  justify-content: space-between;
  justify-content: space-evenly;
  /*  */
  @media (max-width: 1279px) {
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform cubic-bezier(0.39, 0.575, 0.565, 1);
    flex-direction: column-reverse;
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.white};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: 82px 70px 219px 70px;
  }
`;
export const BoxNav = styled.div``;
export const BoxUser = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  
`;
