import { AddPetForm } from '../components/AddPetForm/AddPetForm';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { BgWrapper } from './Pages.styled';

const AddPetPage = () => {
  return (
    <BgWrapper>
      <Section
        padTopSm={'68px'}
        padTopMd={'128px'}
        padTopLg={'108px'}
        padBottomLg={'81px'}
      >
        <Container>
          <AddPetForm />
        </Container>
      </Section>
    </BgWrapper>
  );
};

export default AddPetPage;
