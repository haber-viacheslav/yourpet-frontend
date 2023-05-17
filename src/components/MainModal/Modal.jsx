import PropTypes from 'prop-types';
import { Overlay, ModalBody } from './ModalMain.styled';
import { useEffect } from 'react';
import Portal from '@mui/base/Portal';

export const Modal = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  return (
    <Portal>
      <Overlay onClick={handleBackdropClick}>
        <ModalBody>{children}</ModalBody>
      </Overlay>
    </Portal>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
