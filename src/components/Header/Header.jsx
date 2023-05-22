import Nav  from 'components/Navigation/Nav/Nav';
import { AuthNav } from 'components/Navigation/AuthNav/AuthNav';
import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper } from './Header.styled';
export const Header = () => {
 
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
      <AuthNav />
    </HeaderWrapper>

  )
};
export default Header;

