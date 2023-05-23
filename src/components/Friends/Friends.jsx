import { useState, useEffect } from 'react';
// import { getOurFriends } from 'redux/pets/petsService';
import dataFriends from './sponsors.json';

import { CardItem } from './CardItem/CardItem';
import { Title, Wrapper, CardList } from './Friends.styled';

export const OurFriends = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    // const fetchFriends = async () => {
    //   try {
    //     const friendsData = await getOurFriends();
    //     console.log(friendsData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchFriends();
    SetData(dataFriends);
  }, []);

  return (
    <Wrapper>
      <Title>Our friends</Title>
      <CardList>
        {data.map(friend => {
          const {
            email,
            address,
            url,
            addressUrl,
            imageUrl,
            phone,
            title,
            workDays,
          } = friend;
          return (
            <CardItem
              key={title}
              email={email}
              address={address}
              url={url}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              phone={phone}
              title={title}
              workDays={workDays}
            />
          );
        })}
      </CardList>
    </Wrapper>
  );
};
