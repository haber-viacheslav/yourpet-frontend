import { NoticesCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { Container } from '../components/Container/Container';
import { FlexContainer } from '../components/FlexContainer/FlexContainer';
import { Section } from '../components/Section/Section';

import petsLists from '../mockData/petsList';
import { nanoid } from '@reduxjs/toolkit';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

const NoticesPage = () => {
  return (
    <>
      <Section>
        <Container>
          <FlexContainer flexDirection={'column'}>
            <h2>Find your favorite pet</h2>
            <input placeholder="Serch"></input>
            <NoticesCategoriesNav />
            <ul>
              {petsLists.map(petItem => (
                <NoticesCategoryList petList={petItem} key={nanoid()} />
              ))}
            </ul>
          </FlexContainer>
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
