import { AuthForm } from 'components/AuthForm/AuthForm';
import { Container, Paper } from '@mui/material';
const Login = () => {
  return (
    <Paper
      sx={{
        height: { xs: '72vh', sm: '80vh', lg: '84vh', xl: '85vh' },
      }}
    >
      <Container
        sx={{
          py: { xs: '20px', md: '40px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AuthForm />
      </Container>
    </Paper>
  );
};

export default Login;
