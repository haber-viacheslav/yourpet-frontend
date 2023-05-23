import { NavLink } from 'react-router-dom';
import { NavList, NavItem } from './Nav.styled';

export const Nav = ({ handleLinkClick }) => {
  // const handleClick = () => {
  //   if (handleLinkClick) {
  //     handleLinkClick();
  //   }
  // };

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
