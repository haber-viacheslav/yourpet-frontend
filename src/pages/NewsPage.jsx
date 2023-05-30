import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import { Section } from 'components/Section/Section';
import { NewsData } from '../components/NewsData/NewsData';

const NewsPage = () => {
  return (
    <Section
      padTopSm={'20px'}
      padTopMd={'56px'}
      padTopLg={'60px'}
      padBottomLg={'150px'}
    >
      <FlexContainer>
        <NewsData />
      </FlexContainer>
    </Section>
  );
};

export default NewsPage;
