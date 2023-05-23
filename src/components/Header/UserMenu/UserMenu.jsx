import { SvgUser } from '../../buttons/buttons';
import { Box, UserName, AccountLink } from './UserMenu.styled';

export const UserMenu = ({ name }) => {
  console.log(SvgUser);
  return (
    <Box>
      <AccountLink to="./user">
        <SvgUser />
      </AccountLink>
      <UserName>{name}Anna</UserName>
    </Box>
  );
};
