import { useState } from 'react';

import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';

const initialCategory = localStorage.getItem('category')
  ? localStorage.getItem('category')
  : 'sell';

const NoticesPage = () => {
  const [category, setCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const urlParams = `${category}` + searchQuery;

  const handleChoose = option => {
    setCategory(option);
    localStorage.setItem('category', option);
  };

  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Find your favorite pet</Title>
          </Wrapper>
          <NoticesSearch />
          <NoticesCategoriesNav
            onCategoryClick={handleChoose}
            active={category}
          />
          <NoticesCategoriesList urlParams={urlParams} category={category} />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
