import { Hero } from '../components/Hero/Hero';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { BgWrapper } from './Pages.styled';

const MainPage = () => {
  return (
    <BgWrapper>
      <Section
        padTopSm={'10px'}
        padTopMd={'20px'}
        padTopLg={'30px'}
        padBottomLg={'15px'}
      >
        <Container>
          <Hero />
        </Container>
      </Section>
    </BgWrapper>
  );
};

export default MainPage;
