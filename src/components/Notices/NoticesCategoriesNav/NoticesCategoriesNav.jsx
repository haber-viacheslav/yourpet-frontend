import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  BtnAddPet,
  BtnFiltersCircle,
} from 'components/buttons/buttons';
import {
  FiltersBtnContainer,
  FiltersContainer,
  StyledNavLink,
  NavList,
} from './NoticesCategoriesNav.styled';
import { FilterCards } from '../FilterCards/FilterCards';
import styled from 'styled-components';

const Link = [
  { to: 'sell', text: 'sell' },
  { to: 'lost-found', text: 'lost/found' },
  { to: 'for-free', text: 'in good hands' },
];

const getLink = ({ isActive }) => {
  const className = isActive ? `${StyledNavLink} ${styled.active}` : StyledNavLink;
  return className;
};
export const NoticesCategoriesNav = ({ onOwnClick, onFavoriteClick }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

   const handleClick = () => {
    if (!isLoggedIn) {
      //  ('You must be logged in');
      return;
    } else {
      navigate('/add-pet');
    }
  };
  

  return (
      <FiltersContainer>
          <NavList>
        {Link.map(element => (
            <StyledNavLink
              to={element.to}
              className={getLink}
            >
              {element.text}
            </StyledNavLink>
          
        ))}
        {isLoggedIn && (
          <>
              <StyledNavLink
                to="own"
                className={getLink}
                onClick={() => {
                  onOwnClick();
                }}
              >
                my ads
              </StyledNavLink>
              <StyledNavLink
                to="favorite"
                className={getLink}
                onClick={() => {
                  onFavoriteClick();
                }}
              >
                favorite ads
              </StyledNavLink>
          </>
        )}
      </NavList>
        <FiltersBtnContainer>
          <FilterCards />
          <BtnAddPet onClick={handleClick} />
        </FiltersBtnContainer>
        <BtnFiltersCircle />
      </FiltersContainer>
  );
};