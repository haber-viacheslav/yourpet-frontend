import { Hero } from '../components/Hero/Hero';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';

export const MainPage = () => {
  return (
    <Section
      padTopSm={'10px'}
      padBottomLg={'150px'}
      padTopLg={'300px'}
      padTopMd={'200px'}
    >
      <Container>
        <Hero />
      </Container>
    </Section>
  );
};

export default MainPage;
