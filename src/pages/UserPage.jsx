import { UserData } from '../components/UserData/UserData';

import { PetsData } from '../components/PetsData/PetsData';
import { AddPetBtn } from '../components/AddPetBtn/AddPetBtn';
import { Container } from 'components/Container/Container';
import { FlexContainer } from 'components/FlexContainer/FlexContainer';
// import { Logout } from 'components/UserData/Logout/Logout';

const UserPage = () => {
  return (
    <Container>

      <UserData />

      <FlexContainer outline={'1px solid red'}  direction={'row'} justify={'space-between'}>
        <h2>My Pets:</h2>
        <AddPetBtn />
      </FlexContainer>

      <PetsData />
      
    </Container>
  );
};

export default UserPage;
