import { UserData } from 'components/UserData';

import PetsData  from 'components/PetsData'

import Logout    from 'components/Logout/Logout';
import AddPetBtn from 'components/AddPetBtn/AddPetBtn';


const UserPage = () => {
    
  return (
  <>
    <div>
      <UserData/>
      <Logout/>
    </div>

    <div>
      <h2>My Pets:</h2>
      <AddPetBtn/>
    </div>

    <PetsData/>
  
  </>
  )
};

export default UserPage;
