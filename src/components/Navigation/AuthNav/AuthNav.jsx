import { AuthNavMenu, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavMenu>
      <StyledLink to="/register" end>
        Registration
      </StyledLink>
      <StyledLink to="/login">Log IN</StyledLink>
    </AuthNavMenu>
  );
};
