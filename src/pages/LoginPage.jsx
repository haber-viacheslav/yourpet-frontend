import { LoginForm } from '../components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';
import { BgWrapper } from './Pages.styled';

const LoginPage = () => {
  return (
    <BgWrapper>
      <Section padTopSm={'24px'} padTopMd={'56px'} padTopLg={'60px'}>
        <LoginForm />
      </Section>
    </BgWrapper>
  );
};

export default LoginPage;
