import { SvgUser } from '../../buttons/buttons';
import { Box, UserName } from './UserMenu.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const UserMenu = ({ isOpen }) => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <Box>
      <Link to="./user">
        <SvgUser />
      </Link>
      <UserName isOpen={isOpen}>Anna</UserName>
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
