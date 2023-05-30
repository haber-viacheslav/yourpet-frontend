import { PetsItem } from '../PetsItem/PetsItem';
import { Wrapper } from './PetsList.styled';
import PropTypes from 'prop-types';

export const PetsList = ({ data, delPet }) => {
  return (
    <Wrapper>
      {data.map(pet => {
        const { _id: id, name, date, breed, comments, avatarURL } = pet;
        const cutedDate = date
          ? date.slice(0, 10).split('-').reverse().join('-')
          : '';
        return (
          <PetsItem
            key={id}
            name={name}
            date={cutedDate}
            breed={breed}
            comments={comments}
            url={avatarURL}
            id={id}
            delPet={delPet}
          />
        );
      })}
    </Wrapper>
  );
};

PetsItem.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
  delPet: PropTypes.func.isRequired,
};
