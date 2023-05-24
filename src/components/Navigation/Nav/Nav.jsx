import { NavLink } from 'react-router-dom';
import { NavList, NavItem } from './Nav.styled';

export const Nav = () => {

  return (
    <NavList>
      <NavItem>
        <NavLink to="/news">
          News
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/notices">
          Notices
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/friends">
          Our Friends
        </NavLink>
      </NavItem>
    </NavList>
  );
};
