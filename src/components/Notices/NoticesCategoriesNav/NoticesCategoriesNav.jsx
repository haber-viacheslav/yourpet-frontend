import { useNavigate } from 'react-router-dom';
import { BtnAddPet } from 'components/buttons/buttons';
import { useAuth } from 'hooks/useAuth';
import { notify } from 'helpers/notification';

import {
  FiltersBtnContainer,
  FiltersContainer,
  CategoryBntWrapper,
  StyledNavLink,
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
          return (
            <StyledNavLink
              key={route}
              to={`/notices/${route}`}
              end
              onClick={() => onCategoryClick(route)}
            >
              {text}
            </StyledNavLink>
          );
        })}
        {isLoggedIn &&
          navPrivateCategories.map(category => {
            const route = category[1];
            const text = category[0];

            return (
              <StyledNavLink
                key={route}
                to={`/notices/${route}`}
                end
                onClick={() => onCategoryClick(route)}
              >
                {text}
              </StyledNavLink>
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
