import { NoticesCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { Container } from '../components/Container/Container';
import { FlexContainer } from '../components/FlexContainer/FlexContainer';
import { Section } from '../components/Section/Section';
import { BtnAddOption, BtnFiltersCircle } from '../components/buttons/buttons';

import petsLists from '../mockData/petsList';
import { nanoid } from '@reduxjs/toolkit';

// console.log('petsList :', petsList);

const NoticesPage = () => {
  return (
    <>
      <Section>
        <Container>
          <FlexContainer flexDirection={'column'}>
            <h2>Find your favorite pet</h2>
            <input placeholder="Serch"></input>

            <div>
              <div>
                <BtnAddOption text={'sell'} />
                <BtnAddOption text={'lost/found'} />
                <BtnAddOption text={'in good hands'} />
                <BtnAddOption text={'favorite ads'} />
                <BtnAddOption text={'my ads'} />
                <BtnFiltersCircle />
              </div>
            </div>
            {petsLists.map(petItem => (
              <NoticesCategoryList petList={petItem} key={nanoid()} />
            ))}
          </FlexContainer>
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
