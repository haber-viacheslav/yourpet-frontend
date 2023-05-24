import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { ButtonIconForm } from 'components/ButtonIconForm/ButtonIconForm';
import { FormSearch, InputSearch } from './SearchNewsForm.styled';

export const SearchNewsForm = ({ onSubmit, onClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter your request, please', {
        style: {
          position: 'top-center',
          duration: 1000,
          autoclose: 500,
          background: '#9ae7a3',
          color: '#fff',
        },
      });
    }
    onSubmit(searchQuery);
  };

  const handleChange = e => {
    console.log('e.target.value--->', e.target.value);
    setSearchQuery(e.target.value.toLowerCase().trim());
  };

  const handleReset = () => {
    setSearchQuery('');
    onClick(searchQuery);
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
      <ButtonIconForm searchQuery={searchQuery} onClick={handleReset} />
    </FormSearch>
  );
};
