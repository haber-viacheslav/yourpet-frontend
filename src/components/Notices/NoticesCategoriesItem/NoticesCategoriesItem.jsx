import { DeletePetBtn } from './icons';
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
  ContainerCard,
  ContainerInfo,
  Img,
  Text,
} from './NoticesCategoriesItem.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ModalItem } from '../ModalNotice/ModalNotice';

export const NoticesCategoryItem = ({ petItem }) => {
  const { imgUrl, sex, location, category, _id, title, date } = petItem;

  const [isOpen, setIsOpen] = useState('false');

  const onClick = () => {
    return setIsOpen(!isOpen);
  };

  const Svg = () => {
    return sex === 'female' ? SvgFemale : SvgMale;
  };

  let ege = Math.round((Date.now() - Date.parse(date)) / 31557600000);
  const years = ege >= 2 ? 'years' : 'year';

  return (
    <>
      {!isOpen && (
        <Modal onClick={onClick}>
          <ModalItem onClick={onClick} id={petItem._id} />
        </Modal>
      )}
      <ContainerCard>
        <Img src={imgUrl} alt="Pet image" />
        <BtnAddFavorite />
        <DeletePetBtn />
        <BtnAddPetCurcle />
        <PetCategory text={`${category}`} />
        <ContainerInfo>
          <PetInfo Svg={SvgLocation} text={`${location}`} />
          <PetInfo Svg={SvgClock} text={`${ege} ${years}`} />
          <PetInfo Svg={Svg()} text={`${sex}`} />
        </ContainerInfo>
        <Text>{title}</Text>
        <BtnLearnMoreFavorite id={_id} onClick={onClick} />
      </ContainerCard>
    </>
  );
};
