import { NoticesCategoryItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
// import petsList from '../../../mockData/petsList';
// import { nanoid } from '@reduxjs/toolkit';
import { List } from './NoticesCategoriesList.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { deleteNotice } from 'api/notices';

export const NoticesCategoriesList = () => {
  const [notices, setNotices] = useState([]);

  const fetchPets = async () => {
    try {
      const response = await axios.get(
        'https://your-pet-api.onrender.com/api/v1/notices'
      );
      setNotices(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDeleteBtn = async id => {
    try {
      const index = notices.findIndex(el => el['_id'] === id);
      const updateData = [...notices];
      updateData.splice(index, 1);
      setNotices(updateData);
      await deleteNotice(id);
    } catch (error) {}
  };

  return (
    <>
      <List>
        {notices.map(notice => {
          const { _id: id } = notice;
          return (
            <NoticesCategoryItem
              key={id}
              notice={notice}
              delNotice={handleDeleteBtn}
            />
          );
        })}
      </List>
    </>
  );
};
