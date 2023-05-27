import { useState, useRef } from 'react';
import { BtnFilters } from 'components/buttons/buttons';
import {
  DropdownWrapper,
  DropdownMenu,
  FilterGroup,
  Button,
  Menu,
  MenuItem,
} from './FilterCards.styled';
import { useEffect } from 'react';

export const FilterCards = onClick => {
  const [isOpen, setIsOpen] = useState(false);
    const [isOpenAge, setIsOpenAge] = useState(false);

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

  return (
    <>
      {isOpen && (
        <DropdownWrapper ref={dropdownRef}>
          <DropdownMenu>
            <p>Filters</p>
            <FilterGroup>
              <Button onClick={toggleDropdownAge}>Open Dropdown</Button>
              <Menu isOpen={isOpen}>
                <MenuItem>3-12m</MenuItem>
                <MenuItem>1 year</MenuItem>
                <MenuItem>2 year</MenuItem>
              </Menu>
            </FilterGroup>
            {/* <FilterGroup>
              <Button onClick={toggleDropdown}>Open Dropdown</Button>
              <Menu isOpen={isOpen}>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
              </Menu>
            </FilterGroup> */}
          </DropdownMenu>
        </DropdownWrapper>
      )}
      <BtnFilters onClick={toggleMenu} />
    </>
  );
};
