import { useEffect, useState } from 'react';
import { textCutter } from 'helpers/textCutter';
import { setNoticeToFavorite, getNoticeById } from 'api/notices';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import PawLoader from '../../../images/Loader.png';
import { useAuth } from 'hooks/useAuth';
import { ModalItem } from '../ModalNotice/ModalNotice';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { DeletePetBtn, PetInfo } from 'components/buttons/buttons';
import { notify } from 'helpers/notification';
import {
  BtnAddFavorite,
  BtnLearnMoreFavorite,
  PetCategory,
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

export const NoticesCategoryItem = ({
  notice,
  delNotice,
  removeNoticeFromFavorite,
}) => {
  const [petsDetails, setPetsDetails] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNoticeFavorite, setIsNoticeFavorite] = useState(notice.isFavourite);
  const { isLoggedIn } = useAuth();

  const handleModalClick = () => {
    try {
      (async () => {
        const response = await getNoticeById(id);
        setPetsDetails(response.data);
      })();
    } catch (error) {
      notify('error', 'Sorry, something wrong. Please try again');
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [isOpen]);

  const handleAddToFavorite = async () => {
    if (!isLoggedIn) {
      notify('warning', 'You need to be logged in for this action');
      return;
    }
    try {
      const response = await setNoticeToFavorite(notice._id);
      if (response.data.code === 200) {
        if (isNoticeFavorite) {
          removeNoticeFromFavorite(notice._id);
        }
        setIsNoticeFavorite(prevState => !prevState);
      }
    } catch (error) {
      notify('error', 'Sorry, server just have a "fiesta" at this moment...');
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
      notify('info', 'Your notice has been deleted');
    } catch (error) {
      notify('error', 'Delete available only to owner');
    }
  };

  const {
    isOwner,
    imgUrl,
    sex,
    location,
    category,
    _id: id,
    title,
    date,
  } = notice;

  const label = () => {
    switch (category) {
      case 'sell':
        return 'sell';
      case 'lost-found':
        return 'lost/found';
      case 'for-free':
        return 'in good hands';
      default:
    }
  };

  const Svg = () => {
    return sex === 'female' ? SvgFemale : SvgMale;
  };

  const birthDate = new Date(date);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInMonths = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44)
  );
  const ageInYears = Math.floor(ageInMonths / 12);

  const ageElement =
    ageInYears > 0 ? (
      <>
        <PetInfo Svg={SvgClock} text={`${ageInYears} year`} />
      </>
    ) : (
      <PetInfo Svg={SvgClock} text={`${ageInMonths} mth`} />
    );

  const newTitle = textCutter(title, 27);

  return (
    <>
      {isOpen && (
        <Modal onClick={handleModalClick}>
          {Object.keys(petsDetails).length === 0 ? (
            <Loader loaderSrc={PawLoader} size={150} />
          ) : (
            <ModalItem
              onClick={handleModalClick}
              id={id}
              onFavoriteClick={handleAddToFavorite}
              isFavorite={isNoticeFavorite}
              petsDetails={petsDetails}
            />
          )}
        </Modal>
      )}

      <ContainerCard>
        <>
          <Img src={imgUrl} alt="Pet image" />
          <BtnAddFavorite
            onClick={handleAddToFavorite}
            isFavorite={isNoticeFavorite}
          />
          {isOwner && (
            <DeleteBtnWrapper>
              <DeletePetBtn onClick={handleDeleteNotice} />
            </DeleteBtnWrapper>
          )}
          <PetCategory text={`${label()}`} />
          <ContainerInfo>
            <PetInfo Svg={SvgLocation} text={`${textCutter(location, 4)}`} />
            {ageElement}
            <PetInfo Svg={Svg()} text={`${sex}`} />
          </ContainerInfo>
          <Text>{newTitle}</Text>
        </>

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
