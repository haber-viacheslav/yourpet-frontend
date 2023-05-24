// import { React, useState, useEffect } from 'react';
import { Backdrop, Menu, BackdropUser, BackdropAuth, 
  // BackdropNav 
} from './BackdropMenu.styled';


// import { useSelector } from 'react-redux';
import {AuthNav} from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
// import { Logo } from 'components/Logo/Logo';
import {UserNav} from '../UserNav/UserNav';
// import { Backdrop } from '../Backdrop/Backdrop.styled';
// import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Box } from './BackdropMenu.styled';
// import { BurgerBtn } from '../BurgerMenu/BurgerBtn';
// function isTabletDevice() {
//   return window.innerWidth > 767;
// }

export const BackdropMenu = ({ isOpen, handleClose }) => {
  const handleLinkClick = () => {
    handleClose();
  };
  // const [isTablet, setTabletDevice] = useState(isTabletDevice());
  // const isLogIn = useSelector(state => state.auth.token);

  // useEffect(() => {
  // const handleResize = () => {
  //   setTabletDevice(isTabletDevice());
  // };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <Box>
    <Backdrop>     
        <Menu>
                
                   
              <BackdropUser>
                <UserNav handleLinkClick={handleLinkClick} />
              </BackdropUser>
            
               <BackdropAuth> 
                 <AuthNav handleLinkClick={handleLinkClick} />
              </BackdropAuth>
          
</Menu>
           <Nav />
          
         
      </Backdrop>
    </Box>
  )
};
