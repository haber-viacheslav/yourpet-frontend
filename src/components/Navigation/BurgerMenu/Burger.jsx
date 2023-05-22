import React from 'react';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import BackdropMenu from '../Backdrop/Backdrop';
// import { Wrapper } from './Burger.styled';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Hamburger
        onClick={handleOpen}
        toggled={isOpen}
        toggle={setIsOpen}
        rounded
        label="Show menu"
        size={24}
        color="#FFC107"
        distance="lg"
        duration={0.6}
      />
      {isOpen ? (
        <BackdropMenu isOpen={isOpen} handleClose={handleClose} />
      ) : null}
    </>
  );
}

export default BurgerMenu;
