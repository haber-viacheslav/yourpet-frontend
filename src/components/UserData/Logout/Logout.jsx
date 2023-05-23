
import { 
  LogoutTitle, 
  LogoutWrapper } from './Logout.styled';
import { LogoutIcon } from '../Icons/Icons';

export const Logout = () => {
  return (
    <LogoutWrapper>
      <LogoutIcon/>
      <LogoutTitle>Log out</LogoutTitle>
    </LogoutWrapper>
  );
};
