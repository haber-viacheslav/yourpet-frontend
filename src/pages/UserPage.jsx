import { UserData } from '../components/UserData/UserData';
import { PetsData } from '../components/PetsData/PetsData';
import { Logout } from '../components/Logout/Logout';
import { AddPetBtn } from '../components/AddPetBtn/AddPetBtn';
import { Container } from 'components/Container/Container';

const UserPage = () => {
  return (
    <Container>
      <div>
        <UserData />
        <Logout />
      </div>

      <div>
        <h2>My Pets:</h2>
        <AddPetBtn />
      </div>

      <PetsData />
    </Container>
  );
};

export default UserPage;
