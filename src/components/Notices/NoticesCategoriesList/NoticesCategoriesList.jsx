import { NoticesCategoryItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
// import petsList from '../../../mockData/petsList';
// import { nanoid } from '@reduxjs/toolkit';
import { List } from './NoticesCategoriesList.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const fetchPets = async () => {
    try {
      const response = await axios.get(
        'https://your-pet-api.onrender.com/api/v1/notices'
      );
      setPets(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <List>
        {pets.map(petItem => (
          <NoticesCategoryItem petItem={petItem} key={petItem._id} />
        ))}
      </List>
    </>
  );
};
