import { DeletePetBtn } from 'components/buttons/buttons';
import { deletePet } from 'redux/pets/petsService';
import {
  Wrapper,
  ImageWrapper,
  Image,
  TextWrapper,
  TextContent,
  Title,
  Text,
} from './PetsItem.styled';
import PropTypes from 'prop-types';

export const PetsItem = ({ id, url, name, date, breed, comments }) => {
  const handleDeleteBtn = async id => {
    try {
      deletePet(id);
    } catch (error) {}
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={url} alt={name} loading="lazy" />
      </ImageWrapper>
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
      <DeletePetBtn onClick={() => handleDeleteBtn(id)} />
    </Wrapper>
  );
};

PetsItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string,
};
