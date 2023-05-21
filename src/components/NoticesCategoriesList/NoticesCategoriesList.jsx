import {
  BtnAddFavorite,
  BtnAddPetCurcle,
  BtnLearnMore,
  PetInfo,
  SvgClock,
  SvgFemale,
  SvgLocation,
} from 'components/buttons/buttons';

export const NoticesCategoryList = ({ petList }) => {
  const { smImgUrl1x, name, sex, place } = petList;

  return (
    <>
      <div>
        <img src={smImgUrl1x} alt="" />
        <BtnAddFavorite />
        <BtnAddPetCurcle />
        <PetInfo Svg={SvgLocation} text={`${place}`} />
        <PetInfo Svg={SvgClock} text={'1 year'} />
        <PetInfo Svg={SvgFemale} text={`${sex}`} />
      </div>
      <h3>{`${name}`}</h3>
      <BtnLearnMore />
    </>
  );
};
