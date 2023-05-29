import { useState } from 'react';
import { DeletePetBtn } from 'components/buttons/buttons';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';

import {
  Wrapper,
  ImageWrapper,
  Image,
  TextWrapper,
  TextContent,
  Title,
  Text,
  DeleteBtnWrapper,
} from './PetsItem.styled';
import PropTypes from 'prop-types';

export const PetsItem = ({ id, url, name, date, breed, comments, delPet }) => {
  const [isDelete, setIsDelete] = useState(false);

  const handleDeletePet = () => {
    setIsDelete(true);
  };

  const handleDeleteCancel = () => {
    setIsDelete(false);
  };

  const handleDeleteYes = async () => {
    try {
      delPet(id);
      setIsDelete(false);
    } catch (error) {}
  };

  return (
    <>
      <Wrapper>
        <div>
          <ImageWrapper>
            <Image src={url} alt={name} loading="lazy" />
          </ImageWrapper>
        </div>

        <TextWrapper>
          <TextContent>
            <Title>
              Name: <Text>{name}</Text>
            </Title>
          </TextContent>
          <TextContent>
            <Title>
              Date of birth: <Text>{date}</Text>
            </Title>
          </TextContent>
          <TextContent>
            <Title>
              Breed: <Text> {breed}</Text>
            </Title>
          </TextContent>
          <TextContent>
            <Title>
              Comments: <Text>{comments}</Text>
            </Title>
          </TextContent>
        </TextWrapper>
        <DeleteBtnWrapper>
          <DeletePetBtn onClick={handleDeletePet} />
        </DeleteBtnWrapper>
      </Wrapper>
      {isDelete && (
        <ModalApproveAction
          onActivate={handleDeleteYes}
          onClick={handleDeleteCancel}
          variant={'deletePet'}
          text={name}
        />
      )}
    </>
  );
};

PetsItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string,
  id: PropTypes.string.isRequired,
  delPet: PropTypes.func.isRequired,
};
