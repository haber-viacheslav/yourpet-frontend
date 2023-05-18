import { MainNav, StyledLink } from './UserNav.styled.jsx';
import { useAuth } from 'hooks/useAuth.js';

export const UserNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <MainNav>{isLoggedIn && <StyledLink to="/user">User</StyledLink>}</MainNav>
  );
};
