import { Hero } from '../components/Hero/Hero';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { BgWrapper } from './Pages.styled';

const MainPage = () => {
  return (
    <BgWrapper>
      <Section
        // padTopSm={'0'}
        // padTopMd={'0'}
        // padTopLg={'0'}
        padBottomSM={'0'}
        padBottomMd={'0'}
        padBottomLg={'0'}
        padTopSm={'65px'}
        padTopMd={'80px'}
        padTopLg={'118px'}
      >
        <Container>
          <Hero />
        </Container>
      </Section>
    </BgWrapper>
  );
};

export default MainPage;
