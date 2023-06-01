import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import {
  BtnAddTo,
  BtnCall,
  BtnCloseModal,
  PetCategory,
} from 'components/buttons/buttons';
import {
  BtnContainer,
  CommentInfo,
  FlexBlock,
  ImgContainer,
  ImgModal,
  InfoFlag,
  InfoValue,
  MailInfo,
  PetInfoList,
  PetInfoItem,
  TelInfo,
  Text,
} from './ModalNotice.styled';

export const ModalItem = ({
  onClick,
  onFavoriteClick,
  petsDetails,
  isFavorite,
}) => {
  const {
    user,
    imgUrl,
    sex,
    location,
    category,
    title,
    date,
    name,
    breed,
    comments,
  } = petsDetails;
  const email = user?.email;
  const phone = user?.phone;
  const birthday = date?.toString().slice(0, 10).split('-').reverse().join('-');
  return (
    <>
      <FlexContainer flexDirection={'column'} justifyContent={'space-between'}>
        <FlexBlock>
          <BtnCloseModal onClick={onClick} />

          <ImgContainer>
            <ImgModal src={imgUrl} alt="Pet image" />
            <PetCategory text={`${category}`} />
          </ImgContainer>

          <div>
            <Text>{title}</Text>
            <PetInfoList>
              <div>
                <InfoFlag>Name:</InfoFlag>
                <InfoFlag>Birthday:</InfoFlag>
                <InfoFlag>Breed:</InfoFlag>
                <InfoFlag>Place:</InfoFlag>
                <InfoFlag>The sex:</InfoFlag>
                <InfoFlag>Email:</InfoFlag>
                {phone && <InfoFlag>Phone:</InfoFlag>}
              </div>
              <PetInfoItem>
                <InfoValue>{name || ''}</InfoValue>
                <InfoValue>{birthday || ''}</InfoValue>
                <InfoValue>{breed || ''}</InfoValue>
                <InfoValue>{location || ''} </InfoValue>
                <InfoValue>{sex || ''}</InfoValue>
                <MailInfo href={`${'mailto:' + email}`} aria-label="email">
                  {email || ''}
                </MailInfo>
                <TelInfo href={`${'tel:' + phone}`} aria-label="phone number">
                  {phone}
                </TelInfo>
              </PetInfoItem>
            </PetInfoList>
          </div>
        </FlexBlock>
        {comments && <CommentInfo>Comments: {comments || ''}</CommentInfo>}
        <BtnContainer>
          <BtnCall tel={phone ? `${'tel:' + phone}` : `${'mailto:' + email}`} />
          <BtnAddTo onClick={onFavoriteClick} isFavorite={isFavorite} />
        </BtnContainer>
      </FlexContainer>
    </>
  );
};
