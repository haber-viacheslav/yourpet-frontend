import { Nav } from 'components/Navigation/Nav/Nav';
// import { UserNav } from 'components/Navigation/UserNav/UserNav';
import { AuthNav } from 'components/Navigation/AuthNav/AuthNav';

// import { useAuth } from '../../hooks/useAuth';
export const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <header>
      <Nav />
      <p>HEADER</p>
      {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
      <AuthNav />
    </header>
  );
};
