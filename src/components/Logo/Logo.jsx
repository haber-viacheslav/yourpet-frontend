import { LogoIcon, LogoWrapper } from './Logo.styled';
import logo from 'images/logo.svg';
import React from 'react';

export const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoIcon src={logo} alt="logo" width="168" height="28px"></LogoIcon>
    </LogoWrapper>
  );
};
