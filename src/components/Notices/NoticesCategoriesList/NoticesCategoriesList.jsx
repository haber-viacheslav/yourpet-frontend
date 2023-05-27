import { NoticesCategoryItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import petsList from '../../../mockData/petsList';
import { nanoid } from '@reduxjs/toolkit';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  return (
    <>
      <List>
        {petsList.map(petItem => (
          <NoticesCategoryItem petItem={petItem} key={nanoid()} />
        ))}
      </List>
    </>
  );
};
