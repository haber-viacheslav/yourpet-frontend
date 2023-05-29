import { NoticesCategoryItem } from 'components/Notices (new)/NoticesCategoriesItem (new)/NoticesCategoriesItem';
import { getAllNotices } from 'api/notices';
import { List } from './NoticesCategoriesList.styled';
import { useEffect, useState } from 'react';
import { deleteNotice } from 'api/notices';

export const NoticesCategoriesList = ({ category }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const response = await getAllNotices(category);
        // console.log(response);
        setNotices(response.data.data);
      })();
    } catch (error) {}
  }, [category]);

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
