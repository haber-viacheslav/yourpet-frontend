import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBody } from './ModalApproveAction.styled';
import { useEffect } from 'react';
import { BtnCloseModal } from '../buttons/buttons';
import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import {
  ModalTitle,
  ModalDescr,
  ModalDescrBold,
  AnotherModalTitle,
  AnotherModalDescr,
} from './ModalApproveActionContent/ModalApproveActionContent';
import { BtnClearCancel, BtnYesLogout, BtnYesDelete } from '../buttons/buttons';
import { textCutter } from 'components/helpers/textCutter';
const modalRoot = document.querySelector('#modal-root');
export const ModalApproveAction = ({
  onActivate,
  onClick,
  variant,
  text = '',
}) => {
  const newText = textCutter(text, 25);
  const variants = {
    deleteAds: (
      <>
        <ModalTitle>Delete advertisement?</ModalTitle>
        <ModalDescr>
          Are you sure you want to delete{' '}
          <ModalDescrBold>“{newText}”?</ModalDescrBold> You can`t undo this
          action.
        </ModalDescr>
        <FlexContainer flexDirection={'row'} flexGap={'17px'}>
          <BtnClearCancel onClick={onClick} />
          <BtnYesDelete onClick={onClick}></BtnYesDelete>
        </FlexContainer>
      </>
    ),
    deletePet: (
      <>
        <ModalTitle>Delete your pet?</ModalTitle>
        <ModalDescr>
          Are you sure you want to delete{' '}
          <ModalDescrBold>“{newText}”?</ModalDescrBold> You can`t undo this
          action.
        </ModalDescr>
        <FlexContainer flexDirection={'row'} flexGap={'17px'}>
          <BtnClearCancel onClick={onClick} />
          <BtnYesDelete onClick={onClick}></BtnYesDelete>
        </FlexContainer>
      </>
    ),
    congrats: (
      <>
        <AnotherModalTitle>Congrats!</AnotherModalTitle>
        <AnotherModalDescr>Youre registration is success</AnotherModalDescr>
        <FlexContainer flexDirection={'row'} flexGap={'17px'}>
          <BtnClearCancel onClick={onClick} />
          <BtnYesDelete onClick={onClick}></BtnYesDelete>
        </FlexContainer>
      </>
    ),
    logOut: '',
  };
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
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBody>
        <BtnCloseModal onClick={onClick} />
        <FlexContainer flexDirection={'column'}>
          {variants[variant]}
        </FlexContainer>
      </ModalBody>
    </Overlay>,
    modalRoot
  );
};

ModalApproveAction.propTypes = {
  onClick: PropTypes.func.isRequired,
};
