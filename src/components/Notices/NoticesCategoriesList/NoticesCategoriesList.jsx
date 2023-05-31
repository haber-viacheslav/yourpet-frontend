import { NoticesCategoryItem } from '../NoticesCategoriesItem/NoticesCategoriesItem';
import { List } from './NoticesCategoriesList.styled';
// import { useAuth } from 'hooks/useAuth';
// import { NotResults } from '../../../components/NotResults/NotResults';

export const NoticesCategoriesList = ({
  notices,
  delNotice,
  removeNoticeFromFavorite,
}) => {
  // const { isRefreshing, isLoading } = useAuth();
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
