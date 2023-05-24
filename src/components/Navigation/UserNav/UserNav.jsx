// import { MainNav, StyledLink } from './UserNav.styled.jsx';
// import { useAuth } from 'hooks/useAuth.js';

// export const UserNav = () => {
//   // const { isLoggedIn } = useAuth();
//   return (
//     <MainNav>
//       {/* {isLoggedIn &&  */}
//       <StyledLink to="/user">User</StyledLink>
//       </MainNav>
//   );
// };
import { SvgUser } from '../../buttons/buttons';
import { Box, UserName } from './UserNav.styled';
import { Link } from 'react-router-dom';

export const UserNav = ({ name }) => {
 
  return (
    <Box>
      <Link to="./user">
        <SvgUser />
      </Link>
      <UserName>{name}Anna</UserName>
    </Box>
  );
};