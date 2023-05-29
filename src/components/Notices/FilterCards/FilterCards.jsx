import { useState, useRef } from 'react';
import { BtnFilters, BtnFiltersCircle } from 'components/buttons/buttons';
import {IconClose, IconOpen, IconCheck, IconCheckRound} from './icons/icons'
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
import axios from 'axios';


export const FilterCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAge, setIsOpenAge] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);
// const [searchParams, setSearchParams] = useSearchParams();
  const [checkedItems, setCheckedItems] = useState({
    'age-3-12m': false,
    'age-1-year': false,
    'age-2-year': false,
    female: false,
    male: false,
  });


 useEffect(() => {
   const searchParams = new URLSearchParams();

    Object.entries(checkedItems).forEach(([key, value]) => {
    if (value) {
      searchParams.append('gender', key);
    }
  });
   
  //  console.log(`https://your-pet-api.onrender.com/api/v1/notices?${searchParams.toString()}`)

    const fetchPets = async () => {
    try {
      const response = await axios.get(
        `https://your-pet-api.onrender.com/api/v1/notices?${searchParams.toString()}`
      );
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
fetchPets();
 }, [checkedItems]);
  
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
                {isOpenAge ?  <IconOpen /> : <IconClose />}
                <Text>By age</Text>
              </MenuButton>
              {isOpenAge && (
                <Menu>
                  <Item>
                    <Label>
                      {checkedItems['age-3-12m'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="checkbox"
                        checked={checkedItems['age-3-12m']}
                        onChange={handleCheckboxChange}
                        name={'age-3-12m'}
                      />
                      3-12m
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkedItems['age-1-year'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="checkbox"
                        checked={checkedItems['age-1-year']}
                        onChange={handleCheckboxChange}
                        name={'age-1-year'}
                      />
                      1 year
                    </Label>
                  </Item>
                  <Item>
                    <Label>
                      {checkedItems['age-2-year'] ? (
                        <IconCheckRound />
                      ) : (
                        <IconCheck />
                      )}
                      <CheckBox
                        type="checkbox"
                        checked={checkedItems['age-2-year']}
                        onChange={handleCheckboxChange}
                        name={'age-2-year'}
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


