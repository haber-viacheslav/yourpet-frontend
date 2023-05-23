import { NoticesCategoryItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import petsLists from '../../../mockData/petsList';
import { nanoid } from '@reduxjs/toolkit';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  return (
    <List>
      {petsLists.map(petItem => (
        <NoticesCategoryItem petList={petItem} key={nanoid()} />
      ))}
    </List>
  );
};
