import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ModalItem } from '../ModalNotice/ModalNotice';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { DeletePetBtn } from 'components/buttons/buttons';
import {
  BtnAddFavorite,
  BtnAddPetCircle,
  BtnLearnMoreFavorite,
  PetCategory,
  PetInfo,
  SvgClock,
  SvgFemale,
  SvgLocation,
  SvgMale,
} from 'components/buttons/buttons';
import {
  DeleteBtnWrapper,
  ContainerCard,
  ContainerInfo,
  Img,
  Text,
} from './NoticesCategoriesItem.styled';

export const NoticesCategoryItem = ({ notice, delNotice }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [age, setAge] = useState(0);
  // const [time, setTime] = useState('');

  const onClick = () => {
    return setIsOpen(!isOpen);
  };

  const { imgUrl, sex, location, category, _id: id, title, date } = notice;

  const Svg = () => {
    return sex === 'female' ? SvgFemale : SvgMale;
  };

  const handleDeleteNotice = () => {
    setIsDelete(true);
  };

  const handleDeleteCancel = () => {
    setIsDelete(false);
  };

  const handleDeleteYes = async () => {
    try {
      delNotice(id);
      setIsDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const timeHandler = date => {
  //   const monthValue = Math.round((Date.now() - Date.parse(date)) / 2629800000);
  //   const yearValue = Math.round((Date.now() - Date.parse(date)) / 31557600000);
  //   const monthAge = monthValue > 1 ? 'months' : 'month';
  //   const yearsAge = yearValue > 1 ? 'years' : 'year';

  //   if (monthValue <= 12) {
  //     setAge(monthValue);
  //     setTime(monthAge);
  //     return;
  //   } else {
  //     setAge(yearValue);
  //     setTime(yearsAge);
  //   }
  //   return;
  // };

  let age = Math.round((Date.now() - Date.parse(date)) / 31557600000);

  const years = age >= 2 ? 'years' : 'year';

  return (
    <>
      {isOpen && (
        <Modal onClick={onClick}>
          <ModalItem onClick={onClick} id={id} />
        </Modal>
      )}
      <ContainerCard>
        <Img src={imgUrl} alt="Pet image" />
        <BtnAddFavorite />
        <DeleteBtnWrapper>
          <DeletePetBtn onClick={handleDeleteNotice} />
        </DeleteBtnWrapper>
        <BtnAddPetCircle />
        <PetCategory text={`${category}`} />
        <ContainerInfo>
          <PetInfo Svg={SvgLocation} text={`${location}`} />
          <PetInfo Svg={SvgClock} text={`${age} ${years}`} />
          <PetInfo Svg={Svg()} text={`${sex}`} />
        </ContainerInfo>
        <Text>{title}</Text>
        <BtnLearnMoreFavorite id={id} onClick={onClick} />
      </ContainerCard>
      {isDelete && (
        <ModalApproveAction
          onActivate={handleDeleteYes}
          onClick={handleDeleteCancel}
          variant={'deleteAds'}
          text={title}
        />
      )}
    </>
  );
};
