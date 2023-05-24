import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import {
  BtnAddTo,
  BtnCall,
  BtnCloseModal,
  PetCategory,
} from 'components/buttons/buttons';
import { Text } from '../NoticesCategoriesItem/NoticesCategoriesItem.styled';
import {
  ComentInfo,
  ImagConteiner,
  ImgModal,
  InfoFlag,
  InfoValue,
  MailInfo,
  PetInfoList,
  PetInfoitem,
  TelInfo,
} from './ModalNotice.styled';

export const ModalItem = ({ onClick, petsList }) => {
  const {
    smImgUrl1x,
    sex,
    place,
    category,
    name,
    birthday,
    breed,
    email,
    phone,
    comments,
  } = petsList[0];

  return (
    <>
      <FlexContainer flexDirection={'column'}>
        <BtnCloseModal onClick={onClick} />
        <ImagConteiner>
          <ImgModal src={smImgUrl1x} alt="Pet image" />
          <PetCategory text={`${category}`} />
        </ImagConteiner>
        <Text>Сute dog looking for a home</Text>
        <PetInfoList>
          <li>
            <InfoFlag>Name:</InfoFlag>
            <InfoFlag>Birthday:</InfoFlag>
            <InfoFlag>Breed:</InfoFlag>
            <InfoFlag>Place:</InfoFlag>
            <InfoFlag>The sex:</InfoFlag>
            <InfoFlag>Email:</InfoFlag>
            <InfoFlag>Phone:</InfoFlag>
          </li>
          <PetInfoitem>
            <InfoValue>{name}</InfoValue>
            <InfoValue>{birthday}</InfoValue>
            <InfoValue>{breed}</InfoValue>
            <InfoValue>{place}</InfoValue>
            <InfoValue>{sex}</InfoValue>
            <MailInfo href="mailto:">{email}</MailInfo>
            <TelInfo href="tel:+">{phone}</TelInfo>
          </PetInfoitem>
        </PetInfoList>

        <ComentInfo>Comments: {comments}</ComentInfo>
        <BtnCall />
        <BtnAddTo />
      </FlexContainer>
    </>
  );
};
