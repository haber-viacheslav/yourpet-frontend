import { NoticesCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { Container } from '../components/Container/Container';
import { FlexContainer } from '../components/FlexContainer/FlexContainer';
import { Section } from '../components/Section/Section';
import { BtnAddOption, BtnFiltersCircle } from '../components/buttons/buttons';

import petsList from '../mockData/petsList';

// console.log('petsList :', petsList);

const NoticesPage = () => {
  return (
    <>
      <Section>
        <Container>
          <FlexContainer flexDirection={'column'}>
            <h2>Find your favorite pet</h2>
            <input placeholder="Serch"></input>
          </FlexContainer>
          <div>
            <div>
              <BtnAddOption text={'sell'} />
              <BtnAddOption text={'lost/found'} />
              <BtnAddOption text={'in good hands'} />
              <div>
                <BtnAddOption text={'favorite ads'} />
                <BtnAddOption text={'my ads'} />
              </div>
            </div>
            <div>
              <BtnFiltersCircle />
            </div>
          </div>
          <NoticesCategoryList petList={petsList[0]} />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
