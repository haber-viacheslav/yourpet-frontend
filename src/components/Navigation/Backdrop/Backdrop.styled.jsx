import styled from 'styled-components';

const Backdrop = styled.div`
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
` ;
 


const Menu = styled.div`
position: fixed;
  overflow: hidden;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: #FDF7F2;
  border: 1px solid #000;
  padding: 24px 32px;
` ;
  



const BackdropUser = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  span:last-of-type {
  display: flex;
}
` ;
  


const BackdropAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const BackdropNav = styled.div`
   margin-top: 40px;
   justify-content: center;
  align-items: center;
  flex-direction: column;
  ` ;
 



// .backdrop_auth img {
//   width: 116px;
//   height: 20px;
// }

// .backdrop_auth a:first-child {
//   margin-bottom: 12px;
// }

// .backdrop_auth a:last-child {
//   margin-left: 0px;
// }

// .backdrop_nav ul {
//   margin-top: 40px;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }

// .backdrop_nav li {
//   font-weight: 500;
//   font-size: 32px;
//   line-height: 44px;
//   display: flex;
//   align-items: center;
//   letter-spacing: 0.04em;
// }

// .backdrop_nav li:not(:last-child) {
//   margin-bottom: 20px;
//   margin-right: 0px;
// }
export {Backdrop,Menu,BackdropUser,BackdropAuth,BackdropNav };