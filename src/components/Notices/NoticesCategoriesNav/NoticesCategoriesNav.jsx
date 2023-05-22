import { BtnAddOption, BtnFiltersCircle } from 'components/buttons/buttons';
import {
  FilterAdsConteiner,
  FiltersConteiner,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  return (
    <>
      <FiltersConteiner>
        <BtnAddOption text={'sell'} />
        <BtnAddOption text={'lost/found'} />
        <BtnAddOption text={'in good hands'} />
        <FilterAdsConteiner>
          <BtnAddOption text={'favorite ads'} />
          <BtnAddOption text={'my ads'} />
        </FilterAdsConteiner>

        <BtnFiltersCircle />
      </FiltersConteiner>
    </>
  );
};
