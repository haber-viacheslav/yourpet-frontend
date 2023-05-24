import { 
  StyledEditPhotoBtn, 
  StyledConfirmPhotoBtn,
  InputButton } from "./buttons.styled";

import { 
  EditPhotoIcon, 
  ConfirmPhotoIcon,
  CheckIcon,
  EditIcon  } from "../Icons/Icons";


export const EditPhotoBtn = () => {
  const onClick = () => {
    console.log('EditPhotoBtn clicked')
  };

  return (
    <>
      <StyledEditPhotoBtn type='button' onClick={onClick}>
        <EditPhotoIcon/> 
        Edit Photo
      </StyledEditPhotoBtn>
    </>
  );
};


export const ConfirmPhotoBtn = () => {
  const onClick = () => {
    console.log('ConfirmPhotoBtn clicked')
  };

  return (
    <>
      <StyledConfirmPhotoBtn type='submit' onClick={onClick}>
        <ConfirmPhotoIcon/> 
        Confirm
      </StyledConfirmPhotoBtn>
    </>
  );
};


export const InputCheckBtn = () => {
  const onClick = () => {
    console.log('InputCheckBtn clicked')
  }
  return (
    <>
      <InputButton type='submit' onClick={onClick}>
        <CheckIcon/>
      </InputButton>
    </>
  );
};


export const InputEditBtn = () => {
  const onClick = () => {
    console.log('InputEditBtn clicked')
  }
  return (
    <>
      <InputButton type='button' onClick={onClick}>
        <EditIcon/>
      </InputButton>
    </>
  );
};