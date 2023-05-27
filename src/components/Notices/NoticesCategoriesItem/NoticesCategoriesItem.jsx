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
  const { smImgUrl1x, sex, place, category, id } = petItem;

  const [isOpen, setIsOpen] = useState('false');

  const onClick = () => {
    return setIsOpen(!isOpen);
  };

  const Svg = () => {
    return sex === 'female' ? SvgFemale : SvgMale;
  };
  return (
    <>
      {!isOpen && (
        <Modal onClick={onClick}>
          <ModalItem onClick={onClick} petItem={petItem} />
        </Modal>
      )}
      <ContainerCard>
        <Img src={smImgUrl1x} alt="Pet image" />
        <BtnAddFavorite />
        <BtnAddPetCurcle />
        <PetCategory text={`${category}`} />
        <ContainerInfo>
          <PetInfo Svg={SvgLocation} text={`${place}`} />
          <PetInfo Svg={SvgClock} text={'1 year'} />
          <PetInfo Svg={Svg()} text={`${sex}`} />
        </ContainerInfo>
        <Text>Сute dog looking for a home</Text>
        <BtnLearnMoreFavorite id={id} onClick={onClick} />
      </ContainerCard>
    </>
  );
};
