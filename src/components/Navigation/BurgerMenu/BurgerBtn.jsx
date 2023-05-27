import React from 'react';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Spin as Hamburger } from 'hamburger-react';
import { Burger, BoxNav, BoxUser, Box } from './BurgerBtn.styled';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
// import { UserNav } from '../../Navigation/UserNav/UserNav';
import { UserMenu } from 'components/Navigation/UserMenu/UserMenu';

export const BurgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box isOpen={isOpen}>
        <BoxNav>
          <Nav />
        </BoxNav>
        <BoxUser>
          {!isLoggedIn && <AuthNav />}
          {isLoggedIn && <UserMenu />}
        </BoxUser>
      </Box>
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
    </>
  );
};
