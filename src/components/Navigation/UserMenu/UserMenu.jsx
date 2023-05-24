import { SvgUser } from '../../buttons/buttons';
import { Box, UserName } from './UserMenu.styled';
import { Link } from 'react-router-dom';

export const UserMenu = ({ name }) => {
  
  return (
    <Box>
      <Link to="./user">
        <SvgUser />
      </Link>
      <UserName>{name}Anna</UserName>
    </Box>
  );
};
