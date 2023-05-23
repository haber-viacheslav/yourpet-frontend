import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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
          <BtnAddPet onClick={() => navigate('/add-pet')} />
        </FiltersBtnConteiner>
        <BtnFiltersCircle />
      </FiltersConteiner>
    </>
  );
};
