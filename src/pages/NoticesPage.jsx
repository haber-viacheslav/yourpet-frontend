import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategorieList';
import { Container } from '../components/Container/Container';
import { FlexContainer } from '../components/FlexContainer/FlexContainer';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/NoticesSerch/NoticesSerch';

const NoticesPage = () => {
  return (
    <>
      <Section>
        <Container>
          <FlexContainer flexDirection={'column'}>
            <h2>Find your favorite pet</h2>
            <NoticesSearch />
            <NoticesCategoriesNav />
            <NoticesCategoriesList />
          </FlexContainer>
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
