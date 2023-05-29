import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import {
  BtnAddTo,
  BtnCall,
  BtnCloseModal,
  PetCategory,
} from 'components/buttons/buttons';
import { Text } from '../NoticesCategoriesItem/NoticesCategoriesItem.styled';
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
} from './ModalNotice.styled';
import { useEffect, useState } from 'react';
import { getNoticeById } from 'api/notices';

export const ModalItem = ({ onClick, id }) => {
  const [petsDetails, setPetsDetails] = useState({});

  useEffect(() => {
    try {
      (async () => {
        const response = await getNoticeById(id);
        setPetsDetails(response.data);
      })();
    } catch (error) {}
  }, [id]);

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
      <FlexContainer flexDirection={'column'}>
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
                <InfoFlag>Phone:</InfoFlag>
              </div>
              <PetInfoItem>
                <InfoValue>{name || ''}</InfoValue>
                <InfoValue>{birthday || ''}</InfoValue>
                <InfoValue>{breed || ''}</InfoValue>
                <InfoValue>{location || ''} </InfoValue>
                <InfoValue>{sex || ''}</InfoValue>
                <MailInfo href={`${'mailto:' + email}`}>{email || ''}</MailInfo>
                <TelInfo href={`${'tel:' + phone || ''}`}>
                  {phone || ''}
                </TelInfo>
              </PetInfoItem>
            </PetInfoList>
          </div>
        </FlexBlock>
        <CommentInfo>Comments: {comments || ''}</CommentInfo>
        <BtnContainer>
          {!phone || <BtnCall tel={`${'tel:' + phone || ''}`} />}
          <BtnAddTo />
        </BtnContainer>
      </FlexContainer>
    </>
  );
};
