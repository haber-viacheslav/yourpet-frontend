import { useEffect, useState } from 'react';
// import { useSearchParams, useParams, useLocation } from 'react-router-dom';

import { getNoticeById } from 'api/notices';
import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import { Text } from '../NoticesCategoriesItem (new)/NoticesCategoriesItem.styled';
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
} from './ModalNotice.styled';

export const ModalNotice = ({ onClick, id }) => {
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
    breed,
    category,
    comments,
    // date,
    imgUrl,
    // isFavourite,
    // isOwner,
    location,
    name,
    price,
    sex,
    title,
    user,
    // user: { email, phone },
    // _id,
  } = petsDetails;

  console.log(petsDetails);
  // const birthday = date.slice(0, 10);

  return (
    <>
      <FlexContainer flexDirection={'column'}>
        <FlexBlock>
          <BtnCloseModal onClick={onClick} />
          <ImgContainer>
            <ImgModal src={imgUrl} alt="Pet image" />
            <PetCategory text={category} />
          </ImgContainer>
          <div>
            <Text>{title}</Text>
            <PetInfoList>
              <PetInfoItem>
                <InfoFlag>Name:</InfoFlag>
                <InfoFlag>Birthday:</InfoFlag>
                <InfoFlag>Breed: </InfoFlag>
                <InfoFlag>Price:</InfoFlag>
                <InfoFlag>Place:</InfoFlag>
                <InfoFlag>The sex:</InfoFlag>
                <InfoFlag>Email:</InfoFlag>
                <InfoFlag>Phone:</InfoFlag>
              </PetInfoItem>
              <PetInfoItem>
                <InfoValue>{name} </InfoValue>
                <InfoValue>{'birthday'} </InfoValue>
                <InfoValue>{breed} </InfoValue>
                <InfoValue>{price} </InfoValue>
                <InfoValue>{location} </InfoValue>
                <InfoValue>{sex}</InfoValue>
                <MailInfo href="mailto:">{user.email} </MailInfo>
                <TelInfo href="tel:+">{user.phone} </TelInfo>
              </PetInfoItem>
            </PetInfoList>
          </div>
        </FlexBlock>

        <CommentInfo>Comments: {comments}</CommentInfo>
        <BtnContainer>
          <BtnCall phone={user.phone} />
          <BtnAddTo />
        </BtnContainer>
      </FlexContainer>
    </>
  );
};
