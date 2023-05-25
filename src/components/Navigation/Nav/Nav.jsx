// import { NavLink } from 'react-router-dom';
import { NavList, NavItem, NavLinkItem } from './Nav.styled';
import { useEffect, useState } from 'react';

export const Nav = () => {
  const [nameLink, setNameLink] = useState('Find pet');
  const [screenSize, setScreenSize] = useState({ width: 1279 });

  useEffect(() => {  
    
    function handleResize() {
      const currentWidth = window.innerWidth;
      // console.log(currentWidth);
      setScreenSize(currentWidth);
      // console.log(screenSize.width);
      if(currentWidth > screenSize.width){
        setNameLink('Notices');
        console.log(nameLink);
      }
      
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nameLink, screenSize.width]); 
  
  return (
    <NavList >
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
