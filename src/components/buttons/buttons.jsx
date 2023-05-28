import { useNavigate } from 'react-router-dom';
import icons from 'images/icons.svg';
import { theme } from '../../theme/theme';

import {
  BtnLM,
  BigBtnFavor,
  PetFormBtn,
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
  DeletePet,
  YesBtn,
  ArrowLeft,
  Pawprint,
  Add,
  AddCurcle,
  Heart,
  ToHeart,
  City,
  Logout,
  BtnClose,
  Close,
  LogOutWrapper,
  LogOutTitle,
  BtnCloseStyled,
  PetInfoStyle,
  TexStyletInfo,
  FilterCurcle,
  PetCategoryStyle,
  TexCategoyInfo,
  Arrow,
  Avatar,
  InputButton,
  StyledEditPhotoBtn,
  StyledConfirmPhotoBtn,
  SVG,
} from '../buttons/buttons.styled';

// components svg

export const ArrRight = () => {
  return (
    <Arrow width={17} height={17}>
      <use href={icons + '#icon-arr-right'}></use>
    </Arrow>
  );
};

export const ArrLeft = () => {
  return (
    <Arrow width={17} height={17}>
      <use href={icons + '#icon-arr-left'}></use>
    </Arrow>
  );
};

export const SvgLogo = () => {
  return (
    <Pawprint width={24} height={24}>
      <use href={icons + '#icon-pawprint'}></use>
    </Pawprint>
  );
};
export const SvgUser = () => {
  return (
    <Avatar width={28} height={28}>
      <use href={icons + '#icon-user'}></use>
    </Avatar>
  );
};
export const SvgPawprint = () => {
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
    <svg width={24} height={24}>
      <use href={icons + '#icon-filters-2'}></use>
    </svg>
  );
};

const LogOutIcon = props => {
  return (
    <SVG width={24} height={24} stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-logout'}></use>
    </SVG>
  );
};

// Svg and hendle for pet info

export const SvgLocation = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-location'}></use>
    </City>
  );
};
export const SvgClock = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-clock'}></use>
    </City>
  );
};
export const SvgMale = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-male'}></use>
    </City>
  );
};
export const SvgFemale = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-female'}></use>
    </City>
  );
};
export const SvgAge = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-location'}></use>
    </City>
  );
};

export const PetInfo = ({ Svg, text, onClick }) => {
  return (
    <>
      <PetInfoStyle onClick={onClick}>
        <Svg />
        <TexStyletInfo> {text}</TexStyletInfo>
      </PetInfoStyle>
    </>
  );
};
export const PetCategory = ({ text, onClick }) => {
  return (
    <>
      <PetCategoryStyle onClick={onClick}>
        <TexCategoyInfo> {text}</TexCategoyInfo>
      </PetCategoryStyle>
    </>
  );
};

//

const SvgDelete = () => {
  return (
    <SVG width={24} height={24} stroke={theme.colors.blue}>
      <use href={icons + '#icon-trash'}></use>
    </SVG>
  );
};

const SvgDeleteYes = () => {
  return (
    <SVG width={24} height={24} stroke={theme.colors.clearWhite}>
      <use href={icons + '#icon-trash'}></use>
    </SVG>
  );
};

const SvgLogout = () => {
  return (
    <Logout width={24} height={24}>
      <use href={icons + '#icon-logout'}></use>
    </Logout>
  );
};
const SvgCloseSmall = () => {
  return (
    <Close width={24} height={24}>
      <use href={icons + '#icon-cross-small'}></use>
    </Close>
  );
};

const CheckIcon = props => {
  return (
    <SVG width={20} height={20} stroke={theme.colors.green} {...props}>
      <use href={icons + '#icon-check'}></use>
    </SVG>
  );
};

const EditIcon = props => {
  return (
    <SVG
      width={20}
      height={20}
      fill={theme.colors.blue}
      stroke={theme.colors.blue}
      {...props}
    >
      <use href={icons + '#icon-edit'}></use>
    </SVG>
  );
};

const EditPhotoIcon = props => {
  return (
    <SVG width={24} height={24} stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-camera'}></use>
    </SVG>
  );
};

const ConfirmPhotoIcon = props => {
  return (
    <SVG width={26} height={24} stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-check'}></use>
    </SVG>
  );
};

// components btn

export const BtnCloseModal = ({ onClick }) => {
  return (
    <>
      <BtnClose type="button" onClick={onClick}>
        <SvgCloseSmall />
      </BtnClose>
    </>
  );
};
export const BtnLearnMore = ({ onClick }) => {
  return (
    <>
      <BtnLM type="button" onClick={onClick}>
        Learn More
      </BtnLM>
    </>
  );
};
// button for Registration and Login, need write "Registretion or Login" instead "TEXT"
export const BtnAuth = ({ onClick }) => {
  return (
    <>
      <BtnRegLog type="button" onClick={onClick}>
        TEXT
      </BtnRegLog>
    </>
  );
};
// button for Registration and Login, need write
// "lost/foun, sell, in good hand, favorite ads, my ads" instead "text"
export const BtnAddOption = ({ text, onClick }) => {
  return (
    <>
      <BtnOption type="button" onClick={onClick}>
        {text}
      </BtnOption>
    </>
  );
};

export const BtnFilters = ({ onClick }) => {
  return (
    <BtnFilter type="button" onClick={onClick}>
      Filter <SvgFilter />
    </BtnFilter>
  );
};
export const BtnFiltersCircle = ({ onClick }) => {
  return (
    <FilterCurcle type="button" onClick={onClick}>
      <SvgFilter />
    </FilterCurcle>
  );
};
export const BtnCall = ({ onClick }) => {
  return (
    <>
      <BtnContact type="button" onClick={onClick}>
        Contact
      </BtnContact>
    </>
  );
};

// components btn + svg
// to favorite and to main page
export const BtnLearnMoreFavorite = ({ onClick, id }) => {
  return (
    <>
      <BigBtnFavor type="button" onClick={onClick}>
        Learn more
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnToGo = ({ onClick }) => {
  return (
    <>
      <BigBtnFavor type="button" onClick={onClick}>
        To main page
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnDone = () => {
  return (
    <>
      <PetFormBtn type="submit">
        Done
        <SvgPawprint />
      </PetFormBtn>
    </>
  );
};
export const BtnNext = ({ onClick }) => {
  return (
    <>
      <PetFormBtn type="button" onClick={onClick}>
        Next
        <SvgPawprint />
      </PetFormBtn>
    </>
  );
};
export const BtnCancel = ({ onClick }) => {
  return (
    <>
      <BtnCancelArrow type="button" onClick={onClick}>
        <SvgCancel />
        Cancel
      </BtnCancelArrow>
    </>
  );
};
export const BtnBack = ({ onClick }) => {
  return (
    <>
      <BtnBackArrow type="button" onClick={onClick}>
        <SvgCancel />
        Back
      </BtnBackArrow>
    </>
  );
};
export const BtnAddPet = () => {
  const navigate = useNavigate();
  return (
    <>
      <BtnAdd type="button" onClick={() => navigate('/add-pet')}>
        Add Pet
        <SvgAdd />
      </BtnAdd>
    </>
  );
};
export const BtnAddPetCircle = () => {
  const navigate = useNavigate();
  return (
    <>
      <BtnAddCurcle type="button" onClick={() => navigate('/add-pet')}>
        <SvgAddCurcle />
        Add Pet
      </BtnAddCurcle>
    </>
  );
};

export const BtnAddFavorite = ({ onClick }) => {
  return (
    <BtnHeart type="button" onClick={onClick}>
      <SvgHeart />
    </BtnHeart>
  );
};
export const BtnAddTo = ({ onClick }) => {
  return (
    <BtnToHeart type="button" onClick={onClick}>
      Add to
      <SvgToHeart />
    </BtnToHeart>
  );
};
export const BtnCongrats = ({ onClick }) => {
  return (
    <>
      <PetFormBtn type="button" onClick={onClick}>
        Go to profile
        <SvgPawprint />
      </PetFormBtn>
    </>
  );
};

export const BtnYesLogout = ({ onClick }) => {
  return (
    <>
      <YesBtn type="button" onClick={onClick}>
        Yes
        <SvgLogout />
      </YesBtn>
    </>
  );
};
export const BtnYesDelete = ({ onClick }) => {
  return (
    <>
      <YesBtn type="button" onClick={onClick}>
        Yes
        <SvgDeleteYes />
      </YesBtn>
    </>
  );
};
export const BtnClearCancel = ({ onClick }) => {
  return (
    <BtnCloseStyled type="button" onClick={onClick}>
      Cancel
    </BtnCloseStyled>
  );
};

export const InputCheckBtn = ({ onClick, error }) => {
  return (
    <>
      <InputButton
        type="button"
        onClick={onClick}
        disabled={error ? true : false}
      >
        <CheckIcon />
      </InputButton>
    </>
  );
};

export const InputEditBtn = ({ onClick }) => {
  return (
    <>
      <InputButton type="button" onClick={onClick}>
        <EditIcon />
      </InputButton>
    </>
  );
};

export const EditPhotoBtn = ({ onClick, isEditingBlocked }) => {
  return (
    <>
      <StyledEditPhotoBtn
        type="button"
        onClick={onClick}
        disabled={isEditingBlocked}
      >
        <EditPhotoIcon />
        Edit Photo
      </StyledEditPhotoBtn>
    </>
  );
};

export const ConfirmPhotoBtn = ({ onClick }) => {
  return (
    <>
      <StyledConfirmPhotoBtn type="button" onClick={onClick}>
        <ConfirmPhotoIcon />
        Confirm
      </StyledConfirmPhotoBtn>
    </>
  );
};

export const LogOut = ({ onClick }) => {
  return (
    <LogOutWrapper type="button" onClick={onClick}>
      <LogOutIcon />
      <LogOutTitle>Log Out</LogOutTitle>
    </LogOutWrapper>
  );
};

export const DeletePetBtn = ({ onClick }) => {
  return (
    <>
      <DeletePet type="button" onClick={onClick}>
        <SvgDelete />
      </DeletePet>
    </>
  );
};
