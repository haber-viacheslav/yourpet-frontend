// import { Nav } from 'components/Navigation/Nav/Nav';
// import { UserNav } from 'components/Navigation/UserNav/UserNav';
// import { AuthNav } from 'components/Navigation/AuthNav/AuthNav';
import Logo from 'components/Logo/Logo';

// import { useAuth } from '../../hooks/useAuth';
export const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [user] = useState('');
  // const [screenWidth] = useWindowSize();
  return (
          <header>
     <Logo />
       <p>HEADER</p>
    {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
   </header>
 
  );
};
export default Header;

