import { AddPetForm } from '../components/AddPetForm/AddPetForm';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { BgWrapper } from './Pages.styled';

const AddPetPage = () => {
  return (
    <BgWrapper>
      <Section padTopSm={'20px'} padTopMd={'36px'} padTopLg={'20px'}>
        <Container>
          <AddPetForm />
        </Container>
      </Section>
    </BgWrapper>
  );
};

export default AddPetPage;
