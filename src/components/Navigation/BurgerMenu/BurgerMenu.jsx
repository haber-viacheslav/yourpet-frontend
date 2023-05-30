import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Spin as Hamburger } from 'hamburger-react';
import { Burger, BoxNav, BoxUser, Box } from './BurgerMenu.styled';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import PropTypes from 'prop-types';
import { UserNav } from 'components/Navigation/UserNav/UserNav';

export const BurgerMenu = () => {
  const { isLoggedIn } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
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
        {isLoggedIn ? <UserNav isOpen={isOpen}/> : <AuthNav />}
        </BoxUser>
        <BoxNav>
          <Nav />
        </BoxNav>
      </Box>
    </>
  );
};

BurgerMenu.protoTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  toggled: PropTypes.bool,
  toggle: PropTypes.bool,
  menuRef: PropTypes.element,
}.isRequired;
