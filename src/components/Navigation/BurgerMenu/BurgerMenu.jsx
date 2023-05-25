import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Burger, BoxNav, BoxUser, Box } from './BurgerMenu.styled';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
// import { UserNav } from '../../Navigation/UserNav/UserNav';
// import { UserMenu } from 'components/Navigation/UserMenu/UserMenu';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  console.log(isOpen);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handler = e => {
      if (menuRef.current.contains(e.target)) {
        setIsOpen(true);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <>
    {/* <BoxUserHeader>
          <AuthNav />
          {/* <UserMenu /> */}
      {/* </BoxUserHeader> */} 
      <Burger>
        <Hamburger
          isOpen={isOpen}
          onClick={handleOpen}
          toggled={isOpen}
          toggle={setIsOpen}
          easing="ease-in"
          rounded="true"
          label="Show menu"
          size={20}
          color="#FFC107"
          distance="md"
          duration={0.6}
        />        
      </Burger>

      {/* // backdrop */}
      <Box isOpen={isOpen} onClick={handleClose} ref={menuRef}>
      <BoxUser>
          <AuthNav />
          {/* <UserMenu /> */}
        </BoxUser>
      <BoxNav>
          <Nav />
      </BoxNav>
        
      </Box>
    </>
  );
};


