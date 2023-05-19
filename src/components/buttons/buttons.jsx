import icons from 'images/icons.svg';

import {
  BtnLM,
  BigBtnFavor,
  BtnCancelArrow,
  BtnBackArrow,
  BtnAddCurcle,
  BtnAdd,
  BtnHeart,
  BtnRegLog,
  BtnFilter,

  ArrowLeft,
  Pawprint,
  Add,
  AddCurcle,
  Heart, Filter
} from '../buttons/buttons.styled';

// componemnts svg

const SvgBtnPawprint = () => {
  return (
    <Pawprint width={24} height={24}>
      <use href={icons + '#icon-pawprint'}></use>
    </Pawprint>
  );
};
const SvgBtnAdd = () => {
  return (
    <Add width={24} height={24}>
      <use href={icons + '#icon-plus-small'}></use>
    </Add>
  );
};
const SvgBtnAddCurcle = () => {
  return (
    <AddCurcle width={24} height={24}>
      <use href={icons + '#icon-plus-small'}></use>
    </AddCurcle>
  );
};
const SvgBtnCancel = () => {
  return (
    <ArrowLeft width={24} height={24}>
      <use href={icons + '#icon-arrow-left'}></use>
    </ArrowLeft>
  );
};
const SvgBtnHeart = () => {
  return (
    <Heart width={24} height={24}>
      <use href={icons + '#icon-heart'}></use>
    </Heart>
  );
};
const SvgBtnFilter = () => {
  return (
    <Filter width={24} height={24}>
      <use href={icons + '#icon-filters-2'}></use>
    </Filter>
  );
};





// components btn
export const BtnLearnMore = () => {
  return (
    <>
      <BtnLM type="button">Learn More</BtnLM>
    </>
  );
};
// button for Registration and Login, need write "Registretion or Login" instead "TEXT"
export const BtnAuth = () => {
  return (
    <>
      <BtnRegLog type="button">TEXT</BtnRegLog>
    </>
  );
};

export const BtnFilters = () => {
  return (
    <BtnFilter type="button">Filter <SvgBtnFilter/></BtnFilter> 
  )
};

// components btn + svg
export const BtnLearnMoreFavorite = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Learn more
        <SvgBtnPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnDone = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Done
        <SvgBtnPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnNext = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Next
        <SvgBtnPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnCancel = () => {
  return (
    <>
      <BtnCancelArrow type="button">
        <SvgBtnCancel />
        Cancel
      </BtnCancelArrow>
    </>
  );
};
export const BtnBack = () => {
  return (
    <>
      <BtnBackArrow type="button">
        <SvgBtnCancel />
        Back
      </BtnBackArrow>
    </>
  );
};
export const BtnAddPet = () => {
  return (
    <>
      <BtnAdd type="button">
        Add Pet
        <SvgBtnAdd />
      </BtnAdd>
    </>
  );
};
export const BtnAddPetCurcle = () => {
  return (
    <>
      <BtnAddCurcle type="button">
        <SvgBtnAddCurcle />
        Add Pet
      </BtnAddCurcle>
    </>
  );
};
export const BtnAddFavorite = () => {
  return (
    <BtnHeart type="button">
      <SvgBtnHeart />
    </BtnHeart>
  );
};
export const BtnCongrats = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Go to profile
        <SvgBtnPawprint />
      </BigBtnFavor>
    </>
  );
};
