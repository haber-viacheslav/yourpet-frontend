import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategorieList';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/Notices/NoticesSerch/NoticesSerch';

const NoticesPage = () => {
  return (
    <>
      <Section>
        <Container>
          <h2>Find your favorite pet</h2>
          <NoticesSearch />
          <NoticesCategoriesNav />
          <NoticesCategoriesList />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
