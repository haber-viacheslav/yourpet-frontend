import { useState } from 'react';
import { notify } from 'helpers/notification';
import { FormNoticeSearch } from './NoticeSearch.styled';
import { InputNoticeSearch } from './NoticeSearch.styled';
import { ButtonIconNoticeForm } from './ButtonNoticeIconForm';

export const NoticesSearch = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log('searchQuery', searchQuery);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      notify('warning', 'Enter your request, please');
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
