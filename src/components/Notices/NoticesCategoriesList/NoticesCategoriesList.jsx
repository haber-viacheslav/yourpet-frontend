import { NoticesCategoryItem } from '../NoticesCategoriesItem/NoticesCategoriesItem';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ notices, delNotice }) => {
  return (
    <>
      <List>
        {notices.map(notice => {
          const { _id: id } = notice;
          return (
            <NoticesCategoryItem
              key={id}
              notice={notice}
              delNotice={delNotice}
            />
          );
        })}
      </List>
    </>
  );
};
