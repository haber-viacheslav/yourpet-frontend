import { UserData } from '../components/UserData/UserData';
import { PetsData } from '../components/PetsData/PetsData';
import { Logout } from 'components/Logout/Logout';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { UserWrapper, Wrapper } from './Pages.styled';

const UserPage = () => {
  return (
    <Section padTopSm={'40px'} padTopMd={'60px'} padTopLg={'62px'}>
      <Container>
        <UserWrapper>
          <Wrapper>
            <UserData />
            <Logout />
          </Wrapper>
          <PetsData />
        </UserWrapper>
      </Container>
    </Section>
  );
};

export default UserPage;
