import { useAuth } from 'hooks/useAuth';
import { SvgUser } from '../../buttons/buttons';
import { Box, UserName, UserLink } from './UserMenu.styled';

import PropTypes from 'prop-types';

export const UserMenu = ({ isOpen }) => {
  const { user } = useAuth();
  const nickname = user.name || user.email;

  return (
    <Box>
      <UserLink to="./user">
        <SvgUser />
      </UserLink>
      <UserName isOpen={isOpen}>{nickname}</UserName>
    </Box>
  );
};

UserMenu.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  isOpen: PropTypes.bool,
}.isRequired;
