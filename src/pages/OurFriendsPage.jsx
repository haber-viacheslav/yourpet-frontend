import { OurFriends } from 'components/Friends/Friends';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';

const OurFriendsPage = () => {
  return (
    <Section padTopSm={'40px'} padTopMd={'80px'} padTopLg={'80px'}>
      <Container>
        <OurFriends />
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
