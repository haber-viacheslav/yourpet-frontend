import { Hero } from 'components/Hero/Hero';
import { Paper } from '@mui/material';

const Home = () => {
  return (
    <Paper
      sx={{ minHeight: { xs: '72vh', sm: '80vh', lg: '84vh', xl: '85vh' } }}
    >
      <Hero />
    </Paper>
  );
};

export default Home;
