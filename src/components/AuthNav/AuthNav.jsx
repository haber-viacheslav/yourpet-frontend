import { Typography } from '@mui/material';
import { AuthNavMenu, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavMenu>
      <StyledLink to="/register" end>
        <Typography variant="button">Register</Typography>
      </StyledLink>
      <StyledLink to="/login">
        <Typography variant="button">Login</Typography>
      </StyledLink>
    </AuthNavMenu>
  );
};
