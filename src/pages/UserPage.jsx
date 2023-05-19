import { UserData } from '../components/UserData/UserData';

import { PetsData } from '../components/PetsData/PetsData';
import { Logout } from '../components/Logout/Logout';
import { AddPetBtn } from '../components/AddPetBtn/AddPetBtn';

const UserPage = () => {
  return (
    <>
      <div>
        <UserData />
        <Logout />
      </div>

      <div>
        <h2>My Pets:</h2>
        <AddPetBtn />
      </div>

      <PetsData />
    </>
  );
};

export default UserPage;
