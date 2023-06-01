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

export const FilterCards = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAge, setIsOpenAge] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);

  const [checkedItems, setCheckedItems] = useState({
    upToYear: null,
    upToTwoYears: null,
    upToThreeYears: null,
    female: false,
    male: false,
  });

  useEffect(() => {
    const searchParams = new URLSearchParams();

    const currentDate = new Date();

    if (checkedItems['upToYear']) {
      const fromTheDate1 = new Date(
        currentDate.getFullYear() - 1,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      const toTheDate1 = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );
      searchParams.append(
        'fromTheDate',
        fromTheDate1.toISOString().split('T')[0]
      );
      searchParams.append('toTheDate', toTheDate1.toISOString().split('T')[0]);
    }

    if (checkedItems['upToTwoYears']) {
      const fromTheDate2 = new Date(
        currentDate.getFullYear() - 2,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      const toTheDate2 = new Date(
        currentDate.getFullYear() - 1,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      searchParams.append(
        'fromTheDate',
        fromTheDate2.toISOString().split('T')[0]
      );
      searchParams.append('toTheDate', toTheDate2.toISOString().split('T')[0]);
    }

    if (checkedItems['upToThreeYears']) {
      const fromTheDate3 = new Date(
        currentDate.getFullYear() - 3,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      const toTheDate3 = new Date(
        currentDate.getFullYear() - 2,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      searchParams.append(
        'fromTheDate',
        fromTheDate3.toISOString().split('T')[0]
      );
      searchParams.append('toTheDate', toTheDate3.toISOString().split('T')[0]);
    }

    const ageFilters = [];
    Object.entries(checkedItems).forEach(([key, value]) => {
      if (value) {
        if (key.startsWith('upTo')) {
          ageFilters.push(key);
        } else if (key === 'female' || key === 'male') {
          searchParams.append('gender', key);
        }
      }
    });
    // console.log(searchParams.getAll());

    const filter = searchParams.toString();
    onFilterChange(filter);
  }, [checkedItems, onFilterChange]);

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
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      upToYear: name === 'upToYear' ? true : false,
      upToTwoYears: name === 'upToTwoYears' ? true : false,
      upToThreeYears: name === 'upToThreeYears' ? true : false,
      [name]: !prevCheckedItems[name],
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
                      {checkedItems['upToYear'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="radio"
                        value="upToYear"
                        checked={checkedItems['upToYear'] === 'upToYear'}
                        onChange={handleCheckboxChange}
                        name="upToYear"
                      />
                      3-12m
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkedItems['upToTwoYears'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="radio"
                        value="upToTwoYears"
                        checked={
                          checkedItems['upToTwoYears'] === 'upToTwoYears'
                        }
                        onChange={handleCheckboxChange}
                        name="upToTwoYears"
                      />
                      1 year
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkedItems['upToThreeYears'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="radio"
                        value="upToThreeYears"
                        checked={
                          checkedItems['upToThreeYears'] === 'upToThreeYears'
                        }
                        onChange={handleCheckboxChange}
                        name="upToThreeYears"
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
                      {checkedItems['female'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="checkbox"
                        checked={checkedItems['female']}
                        onChange={handleCheckboxChange}
                        name={'female'}
                      />
                      female
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkedItems['male'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="checkbox"
                        checked={checkedItems['male']}
                        onChange={handleCheckboxChange}
                        name={'male'}
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
