import { useState, useRef } from 'react';
import { BtnFilters } from 'components/buttons/buttons';
import {
  DropdownWrapper,
  DropdownMenu,
  FilterGroup,
  Button,
  Menu,
  MenuItem,
  SVG,
} from './FilterCards.styled';
import { useEffect } from 'react';
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

export const FilterCards = onClick => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAge, setIsOpenAge] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <p>Filters</p>
            <FilterGroup>
              <span onClick={toggleDropdownAge}>
                {isOpenAge ? <IconClose /> : <IconOpen />}
                <p>By age</p>
              </span>
              {isOpenAge && (
                <Menu>
                  <li>
                    <input type="checkbox" />
                    3-12m
                  </li>
                  <li>
                    <input type="checkbox" />1 year
                  </li>

                  <li>
                    <input type="checkbox" />2 year
                  </li>
                </Menu>
              )}
            </FilterGroup>
            <FilterGroup>
              <Button onClick={toggleDropdownGender}>By gender</Button>
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
