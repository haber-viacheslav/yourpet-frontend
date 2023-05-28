import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Find your favorite pet</Title>
          </Wrapper>
          <NoticesSearch />
          <NoticesCategoriesNav />
          <NoticesCategoriesList />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
