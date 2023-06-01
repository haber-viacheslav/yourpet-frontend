import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonIconForm } from 'components/ButtonIconForm/ButtonIconForm';
import { FormSearch, InputSearch } from './Search.styled';

export const Search = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    Object.fromEntries(searchParams).search || ''
  );

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
