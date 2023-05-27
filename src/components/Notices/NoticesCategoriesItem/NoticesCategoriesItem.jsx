import { DeletePetBtn } from './icons'
import {
  BtnAddFavorite,
  BtnAddPetCurcle,
  BtnLearnMoreFavorite,
  PetCategory,
  PetInfo,
  SvgClock,
  SvgFemale,
  SvgLocation,
  SvgMale,
} from 'components/buttons/buttons';
import {
  ContainerCard,
  ContainerInfo,
  Img,
  Text,
} from './NoticesCategoriesItem.styled';

export const NoticesCategoryItem = ({ petList }) => {
  const { smImgUrl1x, sex, place, category } = petList;

  const Svg = () => {
    return sex === 'female' ? SvgFemale : SvgMale;
  };

  return (
    <>
      <ContainerCard>
        <Img src={smImgUrl1x} alt="Pet image" />
        <BtnAddFavorite />
        <DeletePetBtn />
        <BtnAddPetCurcle />
        <PetCategory text={`${category}`} />
        <ContainerInfo>
          <PetInfo Svg={SvgLocation} text={`${place}`} />
          <PetInfo Svg={SvgClock} text={'1 year'} />
          <PetInfo Svg={Svg()} text={`${sex}`} />
        </ContainerInfo>
        <Text>Сute dog looking for a home</Text>
        <BtnLearnMoreFavorite />
      </ContainerCard>
    </>
  );
};
