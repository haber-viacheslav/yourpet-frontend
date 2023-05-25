import { SvgUser } from '../../buttons/buttons';
import { Box, UserName } from './UserMenu.styled';
import { Link } from 'react-router-dom';

export const UserMenu = ({ name, isOpen }) => {
  
  return (
    <Box>
      <Link to="./user">
        <SvgUser />
      </Link>
      <UserName isOpen={isOpen}>{name}Anna</UserName>
    </Box>
  );
};
