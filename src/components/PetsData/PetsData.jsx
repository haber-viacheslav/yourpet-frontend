import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks/useAuth';
import { BtnAddPet } from 'components/buttons/buttons';
import { PetsItem } from './PetsItem/PetsItem';
import { Title, Wrapper, PetsList, TitleWrapper } from './PetsData.styled';
import { getPets } from 'redux/pets/petsService';
import { refreshingTokensExecutor } from 'helpers/refreshingTokensExecutor';
import { refreshTokens } from '../../redux/auth/authService';
// import petsData from './pets.json';

export const PetsData = () => {
  const [data, SetData] = useState([]);
  // const { token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const result = await getPets();
        SetData([...result.data.body.data]);
      } catch (error) {
        refreshingTokensExecutor({
          error: {
            response: { data: { code: 403, message: 'expired' } },
          },
          dispatch,
          action: refreshTokens,
        });
      }
    };

    fetchPets();
  }, [dispatch]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>My pets:</Title>
        <BtnAddPet />
      </TitleWrapper>
      <PetsList>
        {data.map(pet => {
          const { _id: id, name, date, breed, comments, avatarURL } = pet;
          return (
            <PetsItem
              key={id}
              name={name}
              date={date}
              breed={breed}
              comments={comments}
              url={avatarURL}
              id={id}
            />
          );
        })}
      </PetsList>
    </Wrapper>
  );
};
