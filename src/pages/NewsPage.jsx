import { FlexContainer } from 'components/FlexContainer/FlexContainer';
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
      <FlexContainer>
        <NewsData />
      </FlexContainer>
    </Section>
  );
};

export default NewsPage;
