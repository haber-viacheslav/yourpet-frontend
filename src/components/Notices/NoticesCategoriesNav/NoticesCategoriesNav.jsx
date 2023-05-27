import { NavLink } from 'react-router-dom';
import {
  BtnAddOption,
  BtnAddPet,
  BtnFiltersCircle,
} from 'components/buttons/buttons';
import {
  // FilterAdsContainer,
  FiltersBtnContainer,
  FiltersContainer,
} from './NoticesCategoriesNav.styled';
import { FilterCards } from '../FilterCards/FilterCards';

export const NoticesCategoriesNav = () => {
  return (
    <>
      <FiltersContainer>
        <NavLink  to={'/notices/sell'}>
          <BtnAddOption text={'sell'} />
        </NavLink>
        <NavLink to={'/notices/lost-found'}>
          <BtnAddOption text={'lost/found'} />
        </NavLink>
        <NavLink to={'/notices/for-free'}>
          <BtnAddOption text={'in good hands'} />
          </NavLink>

          <NavLink to={'/notices/favorite'}>
            <BtnAddOption text={'favorite ads'} />
          </NavLink>
          <NavLink to={'/notices/own'}>
            <BtnAddOption text={'my ads'} />
            </NavLink>
        <FiltersBtnContainer>
          <FilterCards/>
          <BtnAddPet />
        </FiltersBtnContainer>
        <BtnFiltersCircle />
      </FiltersContainer>
    </>
  );
};
