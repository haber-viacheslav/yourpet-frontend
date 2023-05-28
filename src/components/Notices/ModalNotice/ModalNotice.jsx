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
import axios from 'axios';
import { useEffect, useState } from 'react';

export const ModalItem = ({ onClick, id }) => {
  const [petsDetails, setPetsDetails] = useState({});

  const fetchPetsDetail = async id => {
    await axios
      .get(`https://your-pet-api.onrender.com/api/v1/notices/${id}`)
      .then(data => setPetsDetails(data.data));
  };

  useEffect(() => {
    try {
      fetchPetsDetail(id);
    } catch (error) {
      console.error(error);
    }
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
              <li>
                <InfoFlag>Name:</InfoFlag>
                <InfoFlag>Birthday:</InfoFlag>
                <InfoFlag>Breed:</InfoFlag>
                <InfoFlag>Place:</InfoFlag>
                <InfoFlag>The sex:</InfoFlag>
                <InfoFlag>Email:</InfoFlag>
                <InfoFlag>Phone:</InfoFlag>
              </li>
              <PetInfoItem>
                <InfoValue>{name}</InfoValue>
                <InfoValue>{date}</InfoValue>
                <InfoValue>{breed}</InfoValue>
                <InfoValue>{location} </InfoValue>
                <InfoValue>{sex}</InfoValue>
                <MailInfo href="mailto:">{user.email}</MailInfo>
                <TelInfo href="tel:+">{'user.phone'}</TelInfo>
              </PetInfoItem>
            </PetInfoList>
          </div>
        </FlexBlock>

        <CommentInfo>Comments: {comments}</CommentInfo>
        <BtnContainer>
          <BtnCall />
          <BtnAddTo />
        </BtnContainer>
      </FlexContainer>
    </>
  );
};
