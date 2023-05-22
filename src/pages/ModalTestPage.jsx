import { Container } from 'components/Container/Container';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { BtnNext } from 'components/buttons/buttons';
import { useState } from 'react';
import Pagination from 'components/Pagination/Pagination';
const ModalTestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const onClose = () => {
    return setIsOpen(!isOpen);
  };
  const onClose1 = () => {
    return setIsOpen1(!isOpen1);
  };
  const onClose2 = () => {
    return setIsOpen2(!isOpen2);
  };
  const onClose3 = () => {
    return setIsOpen3(!isOpen3);
  };
  return (
    <>
      <Container>
        <h2>Test modals</h2>
        <BtnNext onClick={onClose} />
        <BtnNext onClick={onClose1} />
        <BtnNext onClick={onClose2} />
        <BtnNext onClick={onClose3} />
        {isOpen && (
          <ModalApproveAction
            onClick={onClose}
            variant={'deleteAds'}
            text={'Text from Ads title'}
          />
        )}
        {isOpen1 && (
          <ModalApproveAction
            onClick={onClose1}
            variant={'deletePet'}
            text={'Barsik'}
          />
        )}
        {isOpen2 && (
          <ModalApproveAction onClick={onClose2} variant={'congrats'} />
        )}
        {isOpen3 && (
          <ModalApproveAction onClick={onClose3} variant={'logOut'} />
        )}
        <Pagination />
      </Container>
    </>
  );
};

export default ModalTestPage;
