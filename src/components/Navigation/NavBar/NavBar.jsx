import React from 'react';

import { Logo } from '../../Logo/Logo';
import { BurgerBtn } from '../BurgerMenu/BurgerBtn';
import { Navigate } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Navigate>
      <Logo />
      <BurgerBtn />
    </Navigate>
  );
};
