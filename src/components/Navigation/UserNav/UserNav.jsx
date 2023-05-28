import { useAuth } from 'hooks/useAuth';
import { SvgUser } from '../../buttons/buttons';
import { Box, UserName, UserLink } from './UserNav.styled';

import PropTypes from 'prop-types';

export const UserNav = ({ isOpen }) => {
  const { user } = useAuth();
  const nickName = user.name || user.email;

  return (
    <Box>
      <UserLink to="./user">
        <SvgUser />
      </UserLink>
      <UserName isOpen={isOpen}>{nickName}</UserName>
    </Box>
  );
};

UserNav.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      nickName: PropTypes.string.isRequired,
    })
  ),
  isOpen: PropTypes.bool,
}.isRequired;
