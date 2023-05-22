import { LogoIcon, LogoIconSm } from './Logo.styled';
import { Link } from 'react-router-dom';
import logo from 'images/logo.svg';
import logoSm from 'images/logo-small.svg';
import React from 'react';

export const Logo = ({ handleLinkClick }) => {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <Link to="/" onClick={handleClick}>
      <LogoIcon src={logo} alt="logo" />
      <LogoIconSm src={logoSm} alt="logo" />
    </Link>
  );
};
