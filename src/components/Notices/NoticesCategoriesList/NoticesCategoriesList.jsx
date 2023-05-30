import { NoticesCategoryItem } from '../NoticesCategoriesItem/NoticesCategoriesItem';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({
  notices,
  delNotice,
  removeNoticeFromFavorite,
}) => {
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
              removeNoticeFromFavorite={removeNoticeFromFavorite}
            />
          );
        })}
      </List>
    </>
  );
};
