import { BtnAddOption, BtnFiltersCircle } from 'components/buttons/buttons';

export const NoticesCategoriesNav = () => {
  return (
    <>
      <div>
        <BtnAddOption text={'sell'} />
        <BtnAddOption text={'lost/found'} />
        <BtnAddOption text={'in good hands'} />
        <BtnAddOption text={'favorite ads'} />
        <BtnAddOption text={'my ads'} />
        <BtnFiltersCircle />
      </div>
    </>
  );
};
