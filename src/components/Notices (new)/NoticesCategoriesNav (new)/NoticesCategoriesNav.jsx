import { NavLink } from 'react-router-dom';
import {
  BtnAddOption,
  BtnAddPet,
  BtnFiltersCircle,
} from 'components/buttons/buttons';
import {
  FilterAdsContainer,
  FiltersBtnContainer,
  FiltersContainer,
} from './NoticesCategoriesNav.styled';
import { FilterCards } from '../FilterCards (new)/FilterCards';

export const NoticesCategoriesNav = ({ onChoosingCategory }) => {
  const handleOption = option => {
    onChoosingCategory(option);
  };
  return (
    <>
      <FiltersContainer>
        <NavLink to={'/notices/sell'}>
          <BtnAddOption text={'sell'} onClick={handleOption} />
        </NavLink>
        <NavLink to={'/notices/lost-found'}>
          <BtnAddOption text={'lost/found'} onClick={handleOption} />
        </NavLink>
        <NavLink to={'/notices/for-free'}>
          <BtnAddOption text={'in good hands'} onClick={handleOption} />
        </NavLink>
        <FilterAdsContainer>
          <NavLink to={'/notices/favorite'}>
            <BtnAddOption text={'favorite ads'} onClick={handleOption} />
          </NavLink>
        </FilterAdsContainer>
        <NavLink to={'/notices/own'}>
          <BtnAddOption text={'my ads'} onClick={handleOption} />
        </NavLink>
        <FiltersBtnContainer>
          <FilterCards />
          <BtnAddPet />
        </FiltersBtnContainer>
        <BtnFiltersCircle />
      </FiltersContainer>
    </>
  );
};

// {
//   /* <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
//   {({ props, values }) => {
//     const { category } = values;
//     return (
//       <GroupWrapper role="group">
//         {navBtnCategories.map(variant => {
//           const selected = variant[1] === category;
//           return (
//             <RadioBtn
//               key={variant[0]}
//               value={variant}
//               name="category"
//               selected={selected}
//             />
//           );
//         })}
//       </GroupWrapper>
//     );
//   }}
// </Formik>; */
// }
