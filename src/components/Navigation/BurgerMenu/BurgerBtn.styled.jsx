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
  justify-content: space-between;
  justify-content: space-evenly;
  
  @media (max-width: 769px) {
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform cubic-bezier(0.39, 0.575, 0.565, 1);
    flex-direction: column-reverse;
    flex-flow: column-reserv nowrap;
    background-color: ${props => props.theme.colors.white};
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 22px 20px 22px 20px;
    
  }
`;
export const BoxNav = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const BoxUser = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 82px;
  margin-bottom: 40px;

  @media (min-width: 1279px){
    margin-top: 0;
    margin-bottom: 0;
  }
`;
