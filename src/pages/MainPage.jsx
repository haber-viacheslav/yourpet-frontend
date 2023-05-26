import { Hero } from '../components/Hero/Hero';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { BgWrapper } from './Pages.styled';

const MainPage = () => {
  return (
    <BgWrapper>
      <Section padTopSm={'65px'} padTopMd={'80px'} padTopLg={'118px'} padBottomLg={'81px'}>
        <Container>
          <Hero />
        </Container>
      </Section>
    </BgWrapper>
  );
};

export default MainPage;
