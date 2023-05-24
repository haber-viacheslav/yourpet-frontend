import { PetsList } from "./PetsList/PetsList";
import { MyPetsTitleGroup } from "./MyPetTitleGroup/MyPetTitleGroup";
import { PetListExtraWrapper } from "./PetsData.styled";

export const PetsData = () => {
  return (
    <PetListExtraWrapper>

      <MyPetsTitleGroup/>

      <PetsList/>
      
    </PetListExtraWrapper>
  );
};
