import React from 'react';
// import { BoxUser} from './NavBar.styled';
import {BoxAuth } from './NavBar.styled';
import { Logo } from '../../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigate, BoxNavigate } from './NavBar.styled';
import { Nav } from '../Nav/Nav'
export const NavBar = () => {
  return (
    <Navigate>
      <Logo />
      <BoxNavigate>
        <Nav />
      </BoxNavigate>      
      <BoxAuth>
          <AuthNav />
      </BoxAuth>
      {/* <BoxUser> */}
          {/* <UserMenu /> */}
      {/* </BoxUser> */}
      <BurgerMenu />
    </Navigate>
  );
};
