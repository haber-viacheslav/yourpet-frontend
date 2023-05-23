import { 
  StyledEditPhotoBtn, 
  StyledConfirmPhotoBtn } from "./buttons.styled";

import { EditPhotoIcon, ConfirmPhotoIcon  } from "../Icons/Icons";


export const EditPhotoBtn = () => {
  const onClick = () => {
    console.log('EditPhotoBtn clicked')
  };

  return (
    <>
      <StyledEditPhotoBtn type="button" onClick={onClick}>
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
      <StyledConfirmPhotoBtn type="submit" onClick={onClick}>
        <ConfirmPhotoIcon/> 
        Confirm
      </StyledConfirmPhotoBtn>
    </>
  );
};