import { 
  StyledLogout, 
  StyledLogoutSvg, 
  StyledLogoutWrapper } from "./Logout.styled";
import icons from 'images/icons.svg';

export const Logout = () => {
  return (
    <StyledLogoutWrapper>
      <StyledLogoutSvg width={24} height={24}>
        <use href={icons + '#icon-logout'}></use>
      </StyledLogoutSvg>

      <StyledLogout>Log out</StyledLogout>
    </StyledLogoutWrapper>
  );
};
