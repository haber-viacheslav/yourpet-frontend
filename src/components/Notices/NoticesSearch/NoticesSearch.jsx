import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { notify } from 'helpers/notification';
import { FormNoticeSearch, InputNoticeSearch } from './NoticeSearch.styled';
import { ButtonIconNoticeForm } from './ButtonNoticeIconForm';

export const NoticesSearch = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  console.log('searchQuery', searchQuery);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      notify('warning', 'Enter your request, please');
    }
    setSearchParams({ query: e.target[0].value });
    // onSubmit(searchQuery);
  };

  const handleChange = e => {
    // console.log('e.target.value--->', e.target.value);
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
