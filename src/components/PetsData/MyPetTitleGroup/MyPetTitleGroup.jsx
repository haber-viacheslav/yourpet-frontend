import { BtnAddPet } from "components/buttons/buttons";
import { PetsTitleGroupWrapper, MyPetsTitle } from "./MyPetTitleGroup.styled";



export const MyPetsTitleGroup = () => {
  return (
    <PetsTitleGroupWrapper>
      <MyPetsTitle>My pets:</MyPetsTitle>
      <BtnAddPet/>
    </PetsTitleGroupWrapper>
  );
}