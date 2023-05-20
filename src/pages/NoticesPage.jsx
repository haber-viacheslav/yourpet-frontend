import { Container } from '../components/Container/Container';
import { FlexContainer } from '../components/FlexContainer/FlexContainer';
import { Section } from '../components/Section/Section';
import {
  BtnAddFavorite,
  BtnAddOption,
  BtnAddPetCurcle,
  BtnFiltersCircle,
  BtnLearnMore,
  PetInfo,
  SvgClock,
  SvgFemale,
  SvgLocation,
} from '../components/buttons/buttons';

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
                <BtnAddOption text={'favorite ads'} className={`po`} />
                <BtnAddOption text={'my ads'} />
              </div>
            </div>
            <div>
              <BtnFiltersCircle />
            </div>
          </div>

          <div>
            <BtnAddFavorite />
            <img
              src="https://res.cloudinary.com/dj6mkr2e6/image/upload/v1684434714/cat-sm_1x_uzkgpq.jpg"
              alt=""
            />
            <BtnAddPetCurcle />
            <PetInfo Svg={SvgLocation} text={'Lviv'} />
            <PetInfo Svg={SvgClock} text={'1 year'} />
            <PetInfo Svg={SvgFemale} text={'female'} />
          </div>
          <h3>Сute dog looking for a home</h3>
          <BtnLearnMore />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
