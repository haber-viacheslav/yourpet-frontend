import { AuthNavMenu, RegisterLink, LoginLink, SVG } from './AuthNav.styled';
import icons from 'images/icons.svg';

export const AuthNav = () => {
  return (
    <AuthNavMenu>
      <LoginLink to="/login">Log IN
        <SVG width={24} height={24}>
          <use href={icons + '#icon-pawprint'}></use>
        </SVG></LoginLink>
      <RegisterLink to="/register" end>
        Registration
      </RegisterLink>
    </AuthNavMenu>
  );
};
