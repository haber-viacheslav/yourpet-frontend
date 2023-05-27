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
  const [petsDetails, setPetsDetails] = useState([]);
  // const {
  //   imgUrl,
  //   sex,
  //   location,
  //   category,
  //   title,
  //   date,
  //   name,
  //   breed,
  //   comments,
  //   user,
  // } = petsDetails;

  const fetchPetsDetail = async () => {
    const response = await axios.get(
      `https://your-pet-api.onrender.com/api/v1/notices/${id}`
    );

    setPetsDetails(response.data);
  };

  console.log(petsDetails);
  return (
    <>
      <FlexContainer flexDirection={'column'}>
        <FlexBlock>
          <BtnCloseModal onClick={onClick} />
          <ImgContainer>
            <ImgModal src={'imgUrl' || 'unknown'} alt="Pet image" />
            <PetCategory text={`${'category'}` || 'unknown'} />
          </ImgContainer>
          <div>
            <Text>{'title' || 'unknown'}</Text>
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
                <InfoValue>{'name' || 'unknown'}</InfoValue>
                <InfoValue>{'date' || 'unknown'}</InfoValue>
                <InfoValue>{'breed' || 'unknown'}</InfoValue>
                <InfoValue>{'location' || 'unknown'} </InfoValue>
                <InfoValue>{'sex' || 'unknown'}</InfoValue>
                <MailInfo href="mailto:">{'user.email' || 'unknown'}</MailInfo>
                <TelInfo href="tel:+">{'user.phone' || 'unknown'}</TelInfo>
              </PetInfoItem>
            </PetInfoList>
          </div>
        </FlexBlock>

        <CommentInfo>Comments: {'comments' || 'unknown'}</CommentInfo>
        <BtnContainer>
          <BtnCall />
          <BtnAddTo />
        </BtnContainer>
      </FlexContainer>
    </>
  );
};
