import { OurFriends } from 'components/Friends/Friends';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';

const OurFriendsPage = () => {
  return (
    <Section
      padTopSm={'88px'}
      padTopMd={'148px'}
      padTopLg={'148px'}
      padBottomLg={'81px'}
    >
      <Container>
        <OurFriends />
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
