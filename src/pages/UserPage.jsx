import { UserData } from '../components/UserData/UserData';
import { PetsData } from '../components/PetsData/PetsData';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { UserWrapper } from './Pages.styled';

const UserPage = () => {
  return (
    <Section
      padTopSm={'88px'}
      padTopMd={'128px'}
      padTopLg={'130px'}
      padBottomLg={'50px'}
    >
      <Container>
        <UserWrapper>
          <UserData />
          <PetsData />
        </UserWrapper>
      </Container>
    </Section>
  );
};

export default UserPage;
