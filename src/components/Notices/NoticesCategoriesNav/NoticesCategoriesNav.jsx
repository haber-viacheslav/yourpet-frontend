import { useNavigate } from 'react-router-dom';
import { BtnAddPet } from 'components/buttons/buttons';
import { useAuth } from 'hooks/useAuth';
import { notify } from 'helpers/notification';

import {
  FiltersBtnContainer,
  FiltersContainer,
  CategoryBntWrapper,
  CategoryBtn,
} from './NoticesCategoriesNav.styled';
import { FilterCards } from '../FilterCards/FilterCards';

const navCategories = [
  ['sell', 'sell'],
  ['lost/found', 'lost-found'],
  ['in good hands', 'for-free'],
];
const navPrivateCategories = [
  ['favorite ads', 'favorite'],
  ['my ads', 'own'],
];
export const NoticesCategoriesNav = ({
  onCategoryClick,
  active,
  onQueryStringChange,
}) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (!isLoggedIn) {
      notify('warning', 'To add a pet, you must be a registered user');
      return;
    } else {
      navigate('/add-pet');
    }
  };

  return (
    <FiltersContainer>
      <CategoryBntWrapper>
        {navCategories.map(category => {
          const route = category[1];
          const text = category[0];
          const isActive = active === route ? 'active' : '';
          return (
            <CategoryBtn
              key={route}
              className={isActive}
              onClick={() => onCategoryClick(route)}
            >
              {text}
            </CategoryBtn>
          );
        })}
        {isLoggedIn &&
          navPrivateCategories.map(category => {
            const route = category[1];
            const text = category[0];
            const isActive = active === route ? 'active' : '';
            return (
              <CategoryBtn
                key={route}
                className={isActive}
                onClick={() => onCategoryClick(route)}
              >
                {text}
              </CategoryBtn>
            );
          })}
      </CategoryBntWrapper>
      <FiltersBtnContainer>
        <FilterCards onQueryStringChange={onQueryStringChange} />
        <BtnAddPet onClick={handleClick} />
      </FiltersBtnContainer>
    </FiltersContainer>
  );
};
