import {SvgUser} from '../../buttons/buttons';
import { Box, UserName } from './UserMenu.styled'


export const UserMenu = ( {name}) => {

  return (
    <Box>
      <button><SvgUser /></button>
      <UserName>{name}Anna</UserName>
    </Box>
  );
};
