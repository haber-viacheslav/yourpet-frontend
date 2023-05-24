import { UserData } from '../components/UserData/UserData';

import { PetsData } from '../components/PetsData/PetsData';
// import { AddPetBtn } from 'components/PetsData/MyPetTitleGroup/AddPetBtn';
import { Container } from 'components/Container/Container';

// import { Logout } from 'components/UserData/Logout/Logout';

const UserPage = () => {
  return (
    <Container>

      <UserData />
      <PetsData />
      
    </Container>
  );
};

export default UserPage;
