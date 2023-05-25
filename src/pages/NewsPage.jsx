import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { NewsData } from '../components/NewsData/NewsData';

const NewsPage = () => {
  return (
    <Section
      padTopSm={'40px'}
      padBottomLg={'150px'}
      padTopLg={'30px'}
      padTopMd={'0px'}
    >
      <Container>
        <FlexContainer>
          <NewsData />
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default NewsPage;
