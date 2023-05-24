import { useState, useEffect } from 'react';
import { BtnAddPet } from 'components/buttons/buttons';

import { Title, Wrapper, PetsList, TitleWrapper } from './PetsData.styled';

import { PetsItem } from './PetsItem/PetsItem';
import petsData from './pets.json';

export const PetsData = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    // const fetchPets = async () => {
    //   try {
    //     const petsData = await getPets();
    //     console.log(petsData);
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
          const { name, date, breed, comments, photo } = pet;
          return (
            <PetsItem
              key={name}
              name={name}
              date={date}
              breed={breed}
              comments={comments}
              url={photo}
            />
          );
        })}
      </PetsList>
    </Wrapper>
  );
};
