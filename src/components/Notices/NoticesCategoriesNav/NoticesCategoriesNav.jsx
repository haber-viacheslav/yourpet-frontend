import {
  BtnAddOption,
  BtnAddPet,
  BtnFilters,
  BtnFiltersCircle,
} from 'components/buttons/buttons';
import {
  FilterAdsConteiner,
  FiltersBtnConteiner,
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
        <FiltersBtnConteiner>
          <BtnFilters />
          <BtnAddPet />
        </FiltersBtnConteiner>
        <BtnFiltersCircle />
      </FiltersConteiner>
    </>
  );
};
