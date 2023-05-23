import React from 'react';
import { useState } from 'react';
import { BurgerBtn } from './Burger';
import { BackdropMenu } from '../BackdropMenu/BackdropMenu';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerBtn onClick={handleOpen} />
      {isOpen ? (
        <BackdropMenu isOpen={isOpen} handleClose={handleClose} />
      ) : null}
    </>
  );
};

