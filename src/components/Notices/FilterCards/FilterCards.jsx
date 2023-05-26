import { useState } from 'react';
import { BtnFilters } from 'components/buttons/buttons';
import { DropdownWrapper, DropdownMenu, DropdownMenuItem } from './FilterCards.styled';

export const FilterCards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BtnFilters onClick={toggleMenu} />
      {isOpen && (
        <DropdownWrapper>
          <DropdownMenu>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
          </DropdownMenu>
        </DropdownWrapper>
      )}
    </>
  );
};
