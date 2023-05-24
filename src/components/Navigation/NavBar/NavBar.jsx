import React from 'react';
import { Logo } from '../../Logo/Logo';
import { BurgerBtn } from '../BurgerMenu/BurgerBtn';
import { Navigate } from './NavBar.styled';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// function isMobileDevice() {
//   return (
//     window.innerWidth < 1024 ||
//     typeof window.orientation !== 'undefined' ||
//     navigator.userAgent.indexOf('IEMobile') !== -1
//   );
// }

// function isTabletDevice() {
//   return window.innerWidth > 767;
// }

export const NavBar = () => {
  // const [isMobile, setIsMobile] = useState(isMobileDevice());
  // const [isTablet, setTabletDevice] = useState(isTabletDevice());
  // const isLogIn = useSelector(state => state.auth.token);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(isMobileDevice());
  //     setTabletDevice(isTabletDevice());
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <Navigate>
      <Logo />
      <BurgerBtn />
    </Navigate>
  );
};
