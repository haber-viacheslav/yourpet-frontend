import React from 'react';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import {BackdropMenu} from '../BackdropMenu/BackdropMenu';


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
      <Hamburger onClick={handleOpen}/>
      {isOpen ? <BackdropMenu isOpen={isOpen} handleClose={handleClose} /> : null}
    </>
  );
}

const Wrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        rounded
        label="Show menu"
        size={24}
        color="#FFC107"
        distance="lg"
        duration={0.7}
        />
    </>
  );
};

export { BurgerMenu, Wrapper };
