import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';

export const NoticesSearch = (onSubmit) => {
  return (
    <>
      <SearchNewsForm onSubmit={onSubmit}/>
    </>
  );
};
