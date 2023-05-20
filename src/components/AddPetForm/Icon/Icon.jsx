import icons from '../../../images/icons.svg';
import { SvgSexIcon, SvgPlusIcon } from '../AddPetForm.styled';

export const SexIcon = ({ iconName, index, selected, sex }) => {
  return (
    <SvgSexIcon
      width={20}
      height={20}
      index={index}
      selected={selected}
      sex={sex}
    >
      <use href={icons + `${iconName}`}></use>
    </SvgSexIcon>
  );
};

export const PlusIcon = ({ iconName }) => {
  return (
    <SvgPlusIcon width={30} height={30}>
      <use href={icons + `${iconName}`}></use>
    </SvgPlusIcon>
  );
};
