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
  ConteinerCard,
  ConteinerInfo,
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
      <ConteinerCard>
        <Img src={smImgUrl1x} alt="" />
        <BtnAddFavorite />
        <BtnAddPetCurcle />
        <PetCategory text={`${category}`} />
        <ConteinerInfo>
          <PetInfo Svg={SvgLocation} text={`${place}`} />
          <PetInfo Svg={SvgClock} text={'1 year'} />
          <PetInfo Svg={Svg()} text={`${sex}`} />
        </ConteinerInfo>
        <Text>Сute dog looking for a home</Text>
        <BtnLearnMoreFavorite />
      </ConteinerCard>
    </>
  );
};
