import { Section } from 'components/Section/Section';
import {RegisterForm} from '../components/RegisterForm/RegisterForm'
import { BgWrapper } from './Pages.styled';

const RegisterPage = () => {
  return (
    <BgWrapper>
      <Section
        padTopSm={'44px'}
      >
        <RegisterForm />
        </Section>
    </BgWrapper>
  );
};
export default RegisterPage;
