import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { BtnAddPetUser } from 'components/buttons/buttons';
import { PetsList } from './PetsList/PetsList';
import { Title, Wrapper, TitleWrapper } from './PetsData.styled';
import { getPets } from 'api/pets';
import { deletePet } from 'api/pets';
import { notify } from 'helpers/notification';

export const PetsData = () => {
  const [data, SetData] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const result = await getPets();
        SetData([...result.data.body.data]);
      } catch (error) {
        notify('error', "Sorry, something wrong. Please try again");
      }
    })();
  }, []);

  const handleAddPet = () => {
    if (!isLoggedIn) {
      notify('warning', 'To add a pet, you must be a registered user');
      return;
    }
    navigate('/add-pet');
  };

  const handleDeleteBtn = async id => {
    try {
      const index = data.findIndex(el => el['_id'] === id);
      const updateData = [...data];
      updateData.splice(index, 1);
      SetData(updateData);
      const response = await deletePet(id);
      if (response.status === 200) {
        notify('success', 'Your pet has been successfully removed');
      }
    } catch (error) {
      notify(
        'error',
        'The server could not process your request. Please try again.'
      );
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>My pets:</Title>
        <BtnAddPetUser onClick={handleAddPet} />
      </TitleWrapper>
      <PetsList data={data} delPet={handleDeleteBtn} />
    </Wrapper>
  );
};
