import { NavLink } from 'react-router-dom';
import { NavList, NavItem } from './Nav.styled';
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
        <NavLink to="/news">News</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/notices">{nameLink}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/friends">Our Friends</NavLink>
      </NavItem>
    </NavList>
  );
};
