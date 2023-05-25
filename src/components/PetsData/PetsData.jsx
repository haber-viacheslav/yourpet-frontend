import { useState, useEffect } from 'react';
import { BtnAddPet } from 'components/buttons/buttons';
import { PetsItem } from './PetsItem/PetsItem';
import { Title, Wrapper, PetsList, TitleWrapper } from './PetsData.styled';
import { getYourPets } from 'redux/pets/petsService';
import petsData from './pets.json';

export const PetsData = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    // const fetchPets = async () => {
    //   try {
    //     const petsData = await getYourPets();
    //     SetData(petsData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchPets();
    SetData(petsData);
  }, []);

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
            />
          );
        })}
      </PetsList>
    </Wrapper>
  );
};
