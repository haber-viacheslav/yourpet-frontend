import { LogoIcon, LogoIconsm } from './Logo.styled';
import { Link } from 'react-router-dom';
import logo from 'images/logo.svg';
import logosm from 'images/logo-small.svg';
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
        <LogoIconsm src={logosm} alt="logo" />
      </Link>

    );
  };