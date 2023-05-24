import React from 'react';
import {
  DeletePetBtn,
  PetImage,
  PetsItemWrapper,
  InfoTitle,
  InfoTitleComments,
  InfoValue,
  PetsInfo,
  SubContainer,
  InfoContent,
  InfoContentComments,
} from './PetsItem.styled';

export const PetsItem = pet => {
  return (
    <PetsItemWrapper>
      <PetImage src="pet.file" alt="photo" />

      <PetsInfo>
        <SubContainer>
          <InfoTitle>
            Name
            <InfoContent>{pet.name}</InfoContent>
          </InfoTitle>
          <DeletePetBtn />
        </SubContainer>

        <InfoTitle>
          Date of birth:
          <InfoValue>{pet.birth}</InfoValue>
        </InfoTitle>

        <InfoTitle>
          Breed:
          <InfoContent>{pet.breed}</InfoContent>
        </InfoTitle>

        <InfoTitleComments>
          Comments:
          <InfoContentComments>{pet.comments}</InfoContentComments>
        </InfoTitleComments>
      </PetsInfo>
    </PetsItemWrapper>
  );
};
