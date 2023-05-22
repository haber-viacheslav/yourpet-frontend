import { Navig } from '../Navigation/Nav/Nav';
import { AuthNav } from '../Navigation/AuthNav/AuthNav';
import { Logo } from '../Logo/Logo';
import { HeaderWrapper } from './Header.styled';
export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navig />
      <AuthNav />
    </HeaderWrapper>
  );
};
export default Header;
