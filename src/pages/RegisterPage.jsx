import { Section } from 'components/Section/Section';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { BgWrapper } from './Pages.styled';

const RegisterPage = () => {
  return (
    <BgWrapper>
      <Section padTopSm={'24px'} padTopMd={'56px'} padTopLg={'24px'}>
        <RegisterForm />
      </Section>
    </BgWrapper>
  );
};
export default RegisterPage;
