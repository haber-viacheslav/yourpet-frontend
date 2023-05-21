import { AddPetForm } from '../components/AddPetForm/AddPetForm';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { Wrapper } from './Pages.styled';

const AddPetPage = () => {
  const flex = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <Wrapper>
      <Section flex={flex}>
        <Container>
          <AddPetForm />
        </Container>
      </Section>
    </Wrapper>
  );
};

export default AddPetPage;
