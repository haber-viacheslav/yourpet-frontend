import { Modal } from 'components/Modal/Modal';
import { BtnCongrats } from 'components/buttons/buttons';
const LoginPage = () => {
  return (
    <>
      <h2>Login</h2>
      <Modal>
        <h2>Congrats!</h2>
        <BtnCongrats />
      </Modal>
    </>
  );
};

export default LoginPage;
