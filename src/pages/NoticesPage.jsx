import { useState } from 'react';

import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  const [category, setCategory] = useState('');

  const handleChoose = option => {
    setCategory(option);
  };

  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Find your favorite pet{category}</Title>
          </Wrapper>
          <NoticesSearch />
          <NoticesCategoriesNav onChoosingCategory={handleChoose} />
          <NoticesCategoriesList category={category} />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
