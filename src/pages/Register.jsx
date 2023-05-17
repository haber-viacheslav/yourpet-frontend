import { RegForm } from 'components/RegForm/RegForm';
import { Container, Paper } from '@mui/material';
const Register = () => {
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
        <RegForm />
      </Container>
    </Paper>
  );
};
export default Register;
