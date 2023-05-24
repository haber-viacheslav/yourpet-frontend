import React from 'react';
import { useState } from 'react';
import { BurgerBtn } from './BurgerBtn';
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
      <BurgerBtn onClick={isOpen} />
      {isOpen ? (
        <BackdropMenu isOpen={handleOpen} handleClose={handleClose} />
      ) : null}
    </>
  );
};

