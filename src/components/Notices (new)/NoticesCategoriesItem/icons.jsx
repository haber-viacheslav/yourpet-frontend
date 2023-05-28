import { DeletePet,SvgDelete } from './icons.styled';
import icons from 'images/icons.svg';
 import { theme } from 'theme/theme';


export const DeletePetBtn = ({ onClick }) => {
  
  return (
    <>
      <DeletePet type="button" onClick={onClick}>
        <SvgDelete width={24} height={24} stroke={theme.colors.blue}>
      <use href={icons + '#icon-trash'}></use>
     </SvgDelete>
      </DeletePet>
    </>
  );
};