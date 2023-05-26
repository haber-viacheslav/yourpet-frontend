import { NavList, NavItem, NavLinkItem } from './Nav.styled';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Nav = () => {
  const [nameLink, setNameLink] = useState('Find pet');
  const [screenSize, setScreenSize] = useState({ width: 1279 });

  useEffect(() => {
    function handleResize() {
      const currentWidth = window.innerWidth;
      setScreenSize(currentWidth);
      if (currentWidth > screenSize.width) {
        setNameLink('Notices');
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nameLink, screenSize.width]);

  return (
    <NavList>
      <NavItem>
        <NavLinkItem to="/news">News</NavLinkItem>
      </NavItem>
      <NavItem>
        <NavLinkItem to="/notices">{nameLink}</NavLinkItem>
      </NavItem>
      <NavItem>
        <NavLinkItem to="/friends">Our Friends</NavLinkItem>
      </NavItem>
    </NavList>
  );
};

Nav.propTypes = {
  nameLink: PropTypes.string.isRequired,
}.isRequired;
