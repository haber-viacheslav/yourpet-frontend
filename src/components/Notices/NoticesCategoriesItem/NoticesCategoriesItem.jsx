import { useState } from 'react';
import { setNoticeToFavorite } from 'api/notices';
import { Modal } from 'components/Modal/Modal';
import { ModalItem } from '../ModalNotice/ModalNotice';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { DeletePetBtn } from 'components/buttons/buttons';
import { notify } from 'helpers/notification';
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

  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToFavorite = async () => {
    try {
      const { _id: id } = notice;
      const response = await setNoticeToFavorite(id);
      console.log(response);
    } catch (error) {
      notify('error', 'Only available to authorized users');
    }
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
  console.log(notice);
  const { imgUrl, sex, location, category, _id: id, title, date } = notice;

  const Svg = () => {
    return sex === 'female' ? SvgFemale : SvgMale;
  };

  let ege = Math.round((Date.now() - Date.parse(date)) / 31557600000);
  const years = ege >= 2 ? 'years' : 'year';

  return (
    <>
      {isOpen && (
        <Modal onClick={handleModalClick}>
          <ModalItem onClick={handleModalClick} id={id} />
        </Modal>
      )}
      <ContainerCard>
        <Img src={imgUrl} alt="Pet image" />
        <BtnAddFavorite onClick={handleAddToFavorite} />
        <DeleteBtnWrapper>
          <DeletePetBtn onClick={handleDeleteNotice} />
        </DeleteBtnWrapper>
        <BtnAddPetCircle />
        <PetCategory text={`${category}`} />
        <ContainerInfo>
          <PetInfo Svg={SvgLocation} text={`${location}`} />
          <PetInfo Svg={SvgClock} text={`${ege} ${years}`} />
          <PetInfo Svg={Svg()} text={`${sex}`} />
        </ContainerInfo>
        <Text>{title}</Text>
        <BtnLearnMoreFavorite id={id} onClick={handleModalClick} />
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
