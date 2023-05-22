import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { NewsData } from 'components/NewsData/NewsData';
const NewsPage = () => {
  return (
    <Section
      padTopSm={'10px'}
      padBottomLg={'150px'}
      padTopLg={'300px'}
      padTopMd={'200px'}
    >
      <Container>
        <FlexContainer
          alignItems={'flex-start'}
          flexDirection={'column'}
          justifyContent={'flex-end'}
          flexWrap={'wrap'}
        >
          <NewsData />
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default NewsPage;
