import { useState, useRef } from 'react';
import { BtnFilters, BtnFiltersCircle } from 'components/buttons/buttons';
import { IconClose, IconOpen, IconCheck, IconCheckRound } from './icons/icons';

import {
  DropdownWrapper,
  DropdownMenu,
  FilterGroup,
  Menu,
  MenuButton,
  Title,
  Text,
  Item,
  Label,
  CheckBox,
} from './FilterCards.styled';
import { useEffect } from 'react';

export const FilterCards = ({ checkboxValue, setCheckboxValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAge, setIsOpenAge] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);

  // Close menu by Esc key and clicking on the backdrop
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
  // =====================

  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownAge = () => {
    setIsOpenAge(!isOpenAge);
  };

  const toggleDropdownGender = () => {
    setIsOpenGender(!isOpenGender);
  };

  const handleCheckboxChange = event => {
    const { name } = event.target;
    setCheckboxValue(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
      {isOpen && (
        <DropdownWrapper ref={dropdownRef}>
          <DropdownMenu>
            <Title>Filters</Title>
            <FilterGroup>
              <MenuButton onClick={toggleDropdownAge}>
                {isOpenAge ? <IconOpen /> : <IconClose />}
                <Text>By age</Text>
              </MenuButton>
              {isOpenAge && (
                <Menu>
                  <Item>
                    <Label>
                      {checkboxValue.lessOne ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="checkbox"
                        checked={checkboxValue.lessOne}
                        onChange={handleCheckboxChange}
                        name="lessOne"
                      />
                      3-12m
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkboxValue.one ? <IconCheckRound /> : <IconCheck />}
                      <CheckBox
                        type="checkbox"
                        checked={checkboxValue.one}
                        onChange={handleCheckboxChange}
                        name="one"
                      />
                      1 year
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkboxValue.two ? <IconCheckRound /> : <IconCheck />}
                      <CheckBox
                        type="checkbox"
                        checked={checkboxValue.two}
                        onChange={handleCheckboxChange}
                        name="two"
                      />
                      2 year
                    </Label>
                  </Item>
                </Menu>
              )}
            </FilterGroup>
            <FilterGroup>
              <MenuButton onClick={toggleDropdownGender}>
                {isOpenGender ? <IconOpen /> : <IconClose />}
                <Text>By gender</Text>
              </MenuButton>
              {isOpenGender && (
                <Menu>
                  <Item>
                    <Label>
                      {checkboxValue.female ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="checkbox"
                        checked={checkboxValue.female}
                        onChange={handleCheckboxChange}
                        name="female"
                      />
                      female
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkboxValue.male ? <IconCheckRound /> : <IconCheck />}
                      <CheckBox
                        type="checkbox"
                        checked={checkboxValue.male}
                        onChange={handleCheckboxChange}
                        name="male"
                      />
                      male
                    </Label>
                  </Item>
                </Menu>
              )}
            </FilterGroup>
          </DropdownMenu>
        </DropdownWrapper>
      )}
      <BtnFilters onClick={toggleMenu} />
      <BtnFiltersCircle onClick={toggleMenu} />
    </>
  );
};
