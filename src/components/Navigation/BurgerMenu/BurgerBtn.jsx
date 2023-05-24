import React from 'react';
import { useState } from 'react';
// import { Spin as Hamburger } from 'hamburger-react';
// import { BackdropMenu } from '../Backdrop/Backdrop';
import { HamburgerBtn } from './BurgerBtn.styled';

export const BurgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <HamburgerBtn
        onClick={handleOpen}
        toggled={isOpen}
        toggle={setIsOpen}
        rounded="true"
        label="Show menu"
        size={20}
        color="#FFC107"
        distance="md"
        duration={0.6}
      />
      {/* {isOpen ? (
        <BackdropMenu isOpen={isOpen} handleClose={handleClose} />
      ) : null} */}
    </>
  );
};
