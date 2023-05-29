import { useEffect, useState } from 'react';
import { NoticesCategoryItem } from '../NoticesCategoriesItem/NoticesCategoriesItem';
import { getAllNotices, getPrivateNotices, deleteNotice } from 'api/notices';
import { List } from './NoticesCategoriesList.styled';
import { notify } from 'helpers/notification';

export const NoticesCategoriesList = ({ url, category }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        if (category === 'favorite' || category === 'own') {
          const response = await getPrivateNotices(url);
          setNotices(response.data.data);
        } else {
          const response = await getAllNotices(url);
          setNotices(response.data.data);
        }
      })();
    } catch (error) {
      notify('error', error.message);
    }
  }, [url, category]);
  const handleDeleteBtn = async id => {
    try {
      const index = notices.findIndex(el => el['_id'] === id);
      const updateData = [...notices];
      updateData.splice(index, 1);
      setNotices(updateData);
      await deleteNotice(id);
    } catch (error) {
      notify('error', error.message);
    }
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
