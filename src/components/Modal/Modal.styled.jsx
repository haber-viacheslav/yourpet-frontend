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

  @media screen and (min-width: ($mobile - 0.02px)) {
    width: 280px;
  }

  @media screen and (min-width: $tablet) {
    top: 148px;
    padding: 60px 129px;
    width: 608px;
    height: 345px;
  }

  @media screen and (min-width: $desktop) {
    top: 112px;
  }
`;

// .modal__close-btn {
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   display: flex;
//   width: 30px;
//   height: 30px;
//   justify-content: center;
//   align-items: center;
//   color: $pure-black;
//   background-color: $prime-white;
//   border: 1px solid $close-btn-border-color;
//   border-radius: 50%;
//   transition: color $time-cubic, outline-color $time-cubic;
//   cursor: pointer;
//   outline-color: transparent;

//   &:hover,
//   &:focus {
//     color: $active-color;
//     outline-color: $active-color;
//   }
// }

// .modal__close-icon {
//   width: 18px;
//   height: 18px;
//   fill: currentColor;
// }
