// import { notify } from 'helpers/notification';
import { NoticesCategoryItem } from '../NoticesCategoriesItem/NoticesCategoriesItem';
import { List } from './NoticesCategoriesList.styled';



export const NoticesCategoriesList = ({ notices, delNotice }) => {
  // if (notices.length === 0){
  //   notify('info', "You haven't created your listings yet")
  // }
  // console.log(notices)
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
