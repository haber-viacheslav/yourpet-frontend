import { React, useState, useEffect } from 'react';
import {Backdrop, Menu, BackdropUser, BackdropAuth, BackdropNav} from './Backdrop.styled';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Nav from '../Nav/Nav';
import Logo from 'components/Logo/Logo';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/Burger';

function isTabletDevice() {
  return window.innerWidth > 767;
}

const BackdropMenu = ({ isOpen, handleClose }) => {
  const handleLinkClick = () => {
    handleClose();
  };
  const [isTablet, setTabletDevice] = useState(isTabletDevice());
  const isLogIn = useSelector(state => state.auth.token);

  useEffect(() => {
    const handleResize = () => {
      setTabletDevice(isTabletDevice());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <BurgerMenu/>
      {isOpen && (
        <Backdrop>
          <Menu>
            <Logo handleLinkClick={handleLinkClick} />
            {isLogIn && !isTablet ? (
              <BackdropUser>
                <UserNav handleLinkClick={handleLinkClick} />
              </BackdropUser>
            ) : null}
            {!isLogIn ? (
              <BackdropAuth>
                <AuthNav handleLinkClick={handleLinkClick} />
              </BackdropAuth>
            ) : null}
            <BackdropNav>
              <Nav handleLinkClick={handleLinkClick} />
            </BackdropNav>
          </Menu>
        </Backdrop>
        
      )}
    </>
  );
};

export default BackdropMenu;