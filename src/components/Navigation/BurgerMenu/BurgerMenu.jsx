import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Burger, BoxNav, BoxUser, Box } from './BurgerMenu.styled';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';

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

  useEffect(() => {
    const scroleStop = e => {
      const backdrop = document.querySelector('body');

      if (isOpen) {
        backdrop.style.overflow = "hidden";
      }else{
        backdrop.style.overflow = "visible";
      }
    };
    window.addEventListener('mousemove', scroleStop);
    return () => {
    window.removeEventListener('mousemove', scroleStop);
    };
  }, [isOpen]);

  return (
    <>
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

      <Box isOpen={isOpen} onClick={handleClose} ref={menuRef}>
        <BoxUser>
          <AuthNav />
          {/* <UserMenu isOpen={isOpen}/> */}
        </BoxUser>
        <BoxNav>
          <Nav />
        </BoxNav>
      </Box>
      
    </>
  );
};
