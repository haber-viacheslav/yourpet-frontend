import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormNoticeSearch } from './NoticeSearch.styled';
import { InputNoticeSearch } from './NoticeSearch.styled';
import { ButtonIconNoticeForm } from './ButtonNoticeIconForm';

export const NoticesSearch = onSubmit => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log('searchQuery', searchQuery);

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

  const handleReset = async () => {
    setSearchQuery('');
    await onSubmit(searchQuery);
  };

  return (
    <FormNoticeSearch onSubmit={handleSubmit}>
      <InputNoticeSearch
        placeholder="Search"
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={e => handleChange(e)}
      />
      <ButtonIconNoticeForm onClick={handleReset} searchQuery={searchQuery} />
    </FormNoticeSearch>
  );
};
