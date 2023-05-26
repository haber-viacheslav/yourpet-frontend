import { useState, useEffect } from 'react';
// import { useAuth } from 'hooks/useAuth';
import { BtnAddPet } from 'components/buttons/buttons';
import { PetsItem } from './PetsItem/PetsItem';
import { Title, Wrapper, PetsList, TitleWrapper } from './PetsData.styled';
import { getPets } from 'redux/pets/petsService';
import { deletePet } from 'redux/pets/petsService';

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
      <PetsList>
        {data.map(pet => {
          const { _id: id, name, date, breed, comments, avatarURL } = pet;
          return (
            <PetsItem
              key={id}
              name={name}
              date={date}
              breed={breed}
              comments={comments}
              url={avatarURL}
              id={id}
              delPet={handleDeleteBtn}
            />
          );
        })}
      </PetsList>
    </Wrapper>
  );
};
