import { Box, Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/authService';
import { StyledBadge } from './UserMenu.styled';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { getRandomColor } from 'components/helpers/getRandomColor';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(userLogout());

  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            sx={{
              bgcolor: getRandomColor(),
              width: '36px',
              height: '36px',
              boxShadow: '2px 2px 3px #adadad',
            }}
          >
            {user.name.slice(0, 2).toUpperCase()}
          </Avatar>
        </StyledBadge>
      </Stack>
      <Typography
        sx={{ fontWeight: 500, display: { xs: 'none', sm: 'block' } }}
        variant="h3"
      >
        {user.name}
      </Typography>
      <Button variant="contained" type="button" onClick={handleLogOut}>
        <Typography variant="button">Logout</Typography>
      </Button>
    </Box>
  );
};
