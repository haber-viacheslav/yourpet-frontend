import { useState, useEffect } from 'react';
import { BtnAddPet } from 'components/buttons/buttons';
import { PetsList } from './PetsList/PetsList';
import { Title, Wrapper, TitleWrapper } from './PetsData.styled';
import { getPets } from 'api/pets';
import { deletePet } from 'api/pets';

export const PetsData = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getPets();
        SetData([...result.data.body.data]);
      } catch (error) {}
    })();
  }, []);

  const handleDeleteBtn = async id => {
    try {
      const index = data.findIndex(el => el['_id'] === id);
      const updateData = [...data];
      updateData.splice(index, 1);
      SetData(updateData);
      deletePet(id);
    } catch (error) {}
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>My pets:</Title>
        <BtnAddPet />
      </TitleWrapper>
      <PetsList data={data} delPet={handleDeleteBtn} />
    </Wrapper>
  );
};
