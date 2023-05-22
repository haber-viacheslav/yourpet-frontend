import {
  BtnAddFavorite,
  BtnAddPetCurcle,
  BtnLearnMore,
  PetCategory,
  PetInfo,
  SvgClock,
  SvgFemale,
  SvgLocation,
} from 'components/buttons/buttons';
import {
  ConteinerCard,
  ConteinerInfo,
  Img,
  Text,
} from './NoticesCategoriesList.styled';

export const NoticesCategoryList = ({ petList }) => {
  const { smImgUrl1x, sex, place, category } = petList;

  return (
    <>
      <ConteinerCard>
        <Img src={smImgUrl1x} alt="" />
        <BtnAddFavorite />
        <BtnAddPetCurcle />
        <PetCategory text={`${category}`} />
        <ConteinerInfo>
          <PetInfo Svg={SvgLocation} text={`${place}`} />
          <PetInfo Svg={SvgClock} text={'1 year'} />
          <PetInfo Svg={SvgFemale} text={`${sex}`} />
        </ConteinerInfo>
        <Text>Сute dog looking for a home</Text>
        <BtnLearnMore />
      </ConteinerCard>
    </>
  );
};
