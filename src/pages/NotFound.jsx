import { BgWrapper } from './Pages.styled';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { NotFoundHero } from 'components/NotFoundHero/NotFoundHero';

const NotFound = () => {
  return (
    <BgWrapper>
      <Section
        padTopSm={'20px'}
        padTopMd={'56px'}
        padTopLg={'60px'}
        padBottomLg={'15px'}
      >
        <Container>
          <NotFoundHero />
        </Container>
      </Section>
    </BgWrapper>
  );
};

export default NotFound;
