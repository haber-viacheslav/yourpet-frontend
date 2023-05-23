import { Nav } from '../Navigation/Nav/Nav';
import { AuthNav } from '../Navigation/AuthNav/AuthNav';
import { Logo } from '../Logo/Logo';
import { HeaderWrapper } from './Header.styled';
import { BackdropMenu } from 'components/Navigation/BackdropMenu/BackdropMenu';

export const Header = () => {
  return (
    
      <HeaderWrapper>
        <Logo />
        <Nav />
        <AuthNav />
        <BackdropMenu/>
      </HeaderWrapper>
    
  );
};

