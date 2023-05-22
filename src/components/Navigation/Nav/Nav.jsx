
import { NavLink } from 'react-router-dom';
import { Nav, NavItem} from './Nav.styled';



function Navig ({ handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <Nav>
      <NavItem>
        <NavLink
          to="/news"
          onClick={handleClick}
        >
          News
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="/notices/sell"
          onClick={handleClick}
        >
          Notices
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="/friends"
          onClick={handleClick}
        >
          Our Friends
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navig;