import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ModalItem } from './Modal.item';

export const ModalNotice = () => {
  const [isOpen, setIsOpen] = useState('false');
  //   const onClick = () => setIsOpen(!isOpen);
  const onClose = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>{isOpen && <Modal onClick={onClose}>{isOpen && <ModalItem />}</Modal>}</>
  );
};
