import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategorieList';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/Notices/NoticesSerch/NoticesSerch';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';

const NoticesPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Find your favorite pet</Title>
          </Wrapper>
          <ModalNotice />
          <NoticesSearch />
          <NoticesCategoriesNav />
          <NoticesCategoriesList />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
