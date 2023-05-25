import {LoginForm} from '../components/LoginForm/LoginForm'
import { Section } from 'components/Section/Section';
import { BgWrapper } from './Pages.styled';

const LoginPage = () => {
  return (
    <BgWrapper>
      <Section
      padTopSm={'44px'}>
      <LoginForm/>
    </Section>
    </BgWrapper>
  );
};

export default LoginPage;
