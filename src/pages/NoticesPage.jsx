import { Container } from '../components/Container/Container';
import { FlexContainer } from '../components/FlexContainer/FlexContainer';

const NoticesPage = () => {
  return (
    <>
      <Container>
        <FlexContainer flexDirection={'column'}>
          <h2>Find your favorite pet</h2>
          <input placeholder="Serch"></input>
        </FlexContainer>
      </Container>
    </>
  );
};

export default NoticesPage;
