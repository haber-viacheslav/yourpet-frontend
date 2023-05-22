import { NoticesCategoryItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import petsLists from '../../../mockData/petsList';
import { nanoid } from '@reduxjs/toolkit';

export const NoticesCategoriesList = () => {
  return (
    <ul>
      {petsLists.map(petItem => (
        <NoticesCategoryItem petList={petItem} key={nanoid()} />
      ))}
    </ul>
  );
};
