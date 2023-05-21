import { UserData } from '../components/UserData/UserData';
import { PetsData } from '../components/PetsData/PetsData';
import { AddPetBtn } from '../components/AddPetBtn/AddPetBtn';
import { Container } from 'components/Container/Container';
import { FlexContainer } from 'components/FlexContainer/FlexContainer';

const UserPage = () => {
  return (
    <Container>
<<<<<<< Updated upstream
      <UserData />

      <FlexContainer 
        outline={'1px solid red'} 
        direction={'row'} 
        justify={'space-between'}
      >
=======
      <FlexContainer border-radius={'20px'}>
        <UserData />
        <Logout />
      </FlexContainer>

      <FlexContainer outline={'1px solid red'}  direction={'row'} justify={'space-between'}>
>>>>>>> Stashed changes
        <h2>My Pets:</h2>
        <AddPetBtn />
      </FlexContainer>

      <PetsData />
      
    </Container>
  );
};

export default UserPage;
