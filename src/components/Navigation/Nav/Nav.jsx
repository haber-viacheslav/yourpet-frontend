import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from './Nav.styled';

export const Navig = ({ handleLinkClick }) => {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <Nav>
      <NavItem>
        <NavLink to="/news" onClick={handleClick}>
          News
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/notices" onClick={handleClick}>
          Notices
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/friends" onClick={handleClick}>
          Our Friends
        </NavLink>
      </NavItem>
    </Nav>
  );
};
