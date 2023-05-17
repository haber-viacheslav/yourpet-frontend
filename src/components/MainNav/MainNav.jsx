import { MainNavMenu, StyledLink } from './MainNav.styled.jsx';
import { useAuth } from 'hooks/useAuth.js';
import { Typography } from '@mui/material';
export const MainNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <MainNavMenu>
      <StyledLink to="/" end>
        <Typography variant="button">Home</Typography>
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <Typography variant="button">Contacts</Typography>
        </StyledLink>
      )}
    </MainNavMenu>
  );
};
