import { useState } from 'react';
import { ButtonIconForm } from 'components/ButtonIconForm/ButtonIconForm';
import { FormSearch, InputSearch } from './SearchNewsForm.styled';

export const SearchNewsForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log('searchQuery', searchQuery);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleReset = () => {
    setSearchQuery('');
    onSubmit('');
  };

  return (
    <FormSearch onSubmit={handleSubmit}>
      <InputSearch
        placeholder="Search"
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={e => handleChange(e)}
      />
      <ButtonIconForm onClick={handleReset} searchQuery={searchQuery} />
    </FormSearch>
  );
};
