
import { Modal } from 'components/Modal/Modal';
import { BtnCongrats } from 'components/buttons/buttons';
import {LoginForm} from '../components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <>
      <LoginForm/>
      <Modal>
        <h2>Congrats!</h2>
        <BtnCongrats />
      </Modal>

    </>
  );
};

export default LoginPage;
