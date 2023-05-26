import React from 'react';
// import { BoxUser} from './NavBar.styled';
import { BoxAuth } from './NavBar.styled';
import { Logo } from '../../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
// import { UserMenu } from '../UserMenu/UserMenu';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigate, BoxNavigate } from './NavBar.styled';
import { Nav } from '../Nav/Nav';

export const NavBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Navigate>
      <Logo />
      <BoxNavigate>
        <Nav />
      </BoxNavigate>
      <nav>
        <BoxAuth>
          <AuthNav />
        </BoxAuth>
        {/* {isLoggedIn ?
      <BoxAuth>
          <AuthNav />
      </BoxAuth> :
       <BoxUser>
          <UserMenu />
      </BoxUser>} */}
      </nav>
      <BurgerMenu />
    </Navigate>
  );
};
