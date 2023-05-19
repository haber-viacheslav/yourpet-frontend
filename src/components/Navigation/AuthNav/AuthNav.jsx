import { AuthNavMenu, RegisterLink, LoginLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavMenu>
      <LoginLink to="/login">Log IN</LoginLink>
      <RegisterLink to="/register" end>
        Registration
      </RegisterLink>
    </AuthNavMenu>
  );
};
