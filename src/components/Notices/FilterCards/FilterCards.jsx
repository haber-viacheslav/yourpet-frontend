import { useState, useRef } from 'react';
import { BtnFilters } from 'components/buttons/buttons';
import {
  DropdownWrapper,
  DropdownMenu,
  FilterGroup,
  Menu,
  MenuItem,
  MenuButton,
    SVG,
    Title,
  Text
} from './FilterCards.styled';
// import { useEffect } from 'react';
import icons from 'images/icons.svg';

export const IconClose = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-chevron-down'}></use>
    </SVG>
  );
};

export const IconOpen = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-chevron-up'}></use>
    </SVG>
  );
};

export const FilterCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAge, setIsOpenAge] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);

  const dropdownRef = useRef(null);

    // useEffect(() => {
    //   const handleEscapeKey = event => {
    //     if (event.key === 'Escape') {
    //       setIsOpen(false);
    //     }
    //   };

    //   const handleClickOutside = event => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //       setIsOpen(false);
    //     }
    //   };

    //   document.addEventListener('keydown', handleEscapeKey);
    //   document.addEventListener('mousedown', handleClickOutside);

    //   return () => {
    //     document.removeEventListener('keydown', handleEscapeKey);
    //     document.removeEventListener('mousedown', handleClickOutside);
    //   };
    // }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownAge = () => {
    setIsOpenAge(!isOpenAge);
  };

  const toggleDropdownGender = () => {
    setIsOpenGender(!isOpenGender);
  };

  return (
    <>
      {isOpen && (
        <DropdownWrapper ref={dropdownRef}>
          <DropdownMenu>
            <Title>Filters</Title>
            <FilterGroup>
              <MenuButton onClick={toggleDropdownAge}>
                {isOpenAge ? <IconClose /> : <IconOpen />}
                <Text>By age</Text>
              </MenuButton>
              {isOpenAge && (
                <Menu>
                  <label>
                    <input type="checkbox" />
                    3-12m
                  </label>
                  <label>
                    <input type="checkbox" />1 year
                  </label>

                  <label>
                    <input type="checkbox" />2 year
                  </label>
                </Menu>
              )}
            </FilterGroup>
            <FilterGroup>
              <MenuButton onClick={toggleDropdownGender}>
                {isOpenGender ? <IconClose /> : <IconOpen />}
                <Text>By gender</Text>
              </MenuButton>
              {isOpenGender && (
                <Menu>
                  <MenuItem>3-12m</MenuItem>
                  <MenuItem>1 year</MenuItem>
                  <MenuItem>2 year</MenuItem>
                </Menu>
              )}
            </FilterGroup>
          </DropdownMenu>
        </DropdownWrapper>
      )}
      <BtnFilters onClick={toggleMenu} />
    </>
  );
};
