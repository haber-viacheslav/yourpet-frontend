import { OurFriends } from 'components/Friends/Friends';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';

const OurFriendsPage = () => {
  return (
    <Section
      padTopSm={'20px'}
      padTopMd={'56px'}
      padTopLg={'60px'}
      padBottomLg={'81px'}
    >
      <Container>
        <OurFriends />
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
