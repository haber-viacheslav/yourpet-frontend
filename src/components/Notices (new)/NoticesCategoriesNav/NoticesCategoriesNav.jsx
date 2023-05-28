import { NavLink } from 'react-router-dom';
import {
  BtnAddOption,
  BtnAddPet,
  BtnFiltersCircle,
} from 'components/buttons/buttons';
import {
  FilterAdsContainer,
  FiltersBtnContainer,
  FiltersContainer,
} from './NoticesCategoriesNav.styled';
import { FilterCards } from '../FilterCards/FilterCards';

export const NoticesCategoriesNav = ({ onChoosingCategory }) => {
  const handleOption = option => {
    onChoosingCategory(option);
  };
  return (
    <>
      <FiltersContainer>
        <NavLink to={'/notices/sell'}>
          <BtnAddOption text={'sell'} onClick={handleOption} />
        </NavLink>
        <NavLink to={'/notices/lost-found'}>
          <BtnAddOption text={'lost/found'} onClick={handleOption} />
        </NavLink>
        <NavLink to={'/notices/for-free'}>
          <BtnAddOption text={'in good hands'} onClick={handleOption} />
        </NavLink>
        <FilterAdsContainer>
          <NavLink to={'/notices/favorite'}>
            <BtnAddOption text={'favorite ads'} onClick={handleOption} />
          </NavLink>
        </FilterAdsContainer>
        <NavLink to={'/notices/own'}>
          <BtnAddOption text={'my ads'} onClick={handleOption} />
        </NavLink>
        <FiltersBtnContainer>
          <FilterCards />
          <BtnAddPet />
        </FiltersBtnContainer>
        <BtnFiltersCircle />
      </FiltersContainer>
    </>
  );
};
