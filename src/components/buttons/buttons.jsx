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
  BtnOption,
  BtnToHeart,
  BtnContact,
  BtnCity, YesBtn,

  ArrowLeft,
  Pawprint,
  Add,
  AddCurcle,
  Heart, Filter, ToHeart, City, Logout, Delete
} from '../buttons/buttons.styled';

// componemnts svg

const SvgPawprint = () => {
  return (
    <Pawprint width={24} height={24}>
      <use href={icons + '#icon-pawprint'}></use>
    </Pawprint>
  );
};
const SvgAdd = () => {
  return (
    <Add width={24} height={24}>
      <use href={icons + '#icon-plus-small'}></use>
    </Add>
  );
};
const SvgAddCurcle = () => {
  return (
    <AddCurcle width={24} height={24}>
      <use href={icons + '#icon-plus-small'}></use>
    </AddCurcle>
  );
};
const SvgCancel = () => {
  return (
    <ArrowLeft width={24} height={24}>
      <use href={icons + '#icon-arrow-left'}></use>
    </ArrowLeft>
  );
};
const SvgHeart = () => {
  return (
    <Heart width={24} height={24}>
      <use href={icons + '#icon-heart'}></use>
    </Heart>
  );
};
const SvgToHeart = () => {
  return (
    <ToHeart width={24} height={24}>
      <use href={icons + '#icon-heart'}></use>
    </ToHeart>
  );
};
const SvgFilter = () => {
  return (
    <Filter width={24} height={24}>
      <use href={icons + '#icon-filters-2'}></use>
    </Filter>
  );
};
const SvgLocation = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-location'}></use>
    </City>
  );
};

const SvgDelete = () => {
  return (
    <Delete width={24} height={24}>
      <use href={icons + '#icon-trash'}></use>
    </Delete>
  );
};
const SvgLogout = () => {
  return (
    <Logout width={24} height={24}>
      <use href={icons + '#icon-logout'}></use>
    </Logout>
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
// button for Registration and Login, need write 
// "lost/foun, sell, in good hand, favorite ads, my ads" instead "text"
export const BtnAddOption = () => {
  return (
    <>
      <BtnOption type="button">text</BtnOption>
    </>
  );
};


export const BtnFilters = () => {
  return (
    <BtnFilter type="button">Filter <SvgFilter/></BtnFilter> 
  )
};
export const BtnCall = () => {
  return (
    <>
      <BtnContact type="button">Contact</BtnContact>
    </>
  );
};


// components btn + svg
export const BtnLearnMoreFavorite = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Learn more
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnDone = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Done
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnNext = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Next
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnCancel = () => {
  return (
    <>
      <BtnCancelArrow type="button">
        <SvgCancel />
        Cancel
      </BtnCancelArrow>
    </>
  );
};
export const BtnBack = () => {
  return (
    <>
      <BtnBackArrow type="button">
        <SvgCancel />
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
        <SvgAdd />
      </BtnAdd>
    </>
  );
};
export const BtnAddPetCurcle = () => {
  return (
    <>
      <BtnAddCurcle type="button">
        <SvgAddCurcle />
        Add Pet
      </BtnAddCurcle>
    </>
  );
};
export const BtnAddFavorite = () => {
  return (
    <BtnHeart type="button">
      <SvgHeart />
    </BtnHeart>
  );
};
export const BtnAddTo = () => {
  return (
    <BtnToHeart type="button">
      Add to
      <SvgToHeart />
    </BtnToHeart>
  );
};
export const BtnCongrats = () => {
  return (
    <>
      <BigBtnFavor type="button">
        Go to profile
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnLocation = () => {
  return (
    <>
      <BtnCity type="button">
        <SvgLocation/>Lviv</BtnCity>
    </>
  );
};
export const BtnYesLogout = () => {
  return (
    <>
      <YesBtn type="button">
        Yes<SvgLogout/></YesBtn>
    </>
  );
};
export const BtnYesDelete = () => {
  return (
    <>
      <YesBtn type="button">
        Yes<SvgDelete/></YesBtn>
    </>
  );
};


