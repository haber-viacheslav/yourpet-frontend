import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchNews } from 'redux/news/newsoperations';
import {
  selectNews,
  selectIsLoading,
  selectError,
  selectTotalPage,
} from 'redux/news/newsSelector';

import { Loader } from 'components/Loader/Loader';
import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import { NewsList } from 'components/News/NewsList/NewsList';
import Pagination from 'components/Pagination/Pagination';
import { NotFound } from 'components/News/NewsNotFound/NewsNotFound';

const initialState = { search: '', page: 1 };

export const NewsData = () => {
  const [state, setState] = useState({ ...initialState });
  const { search, page } = state;

  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pageQty = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(fetchNews({ page: page, search: search }));
  }, [dispatch, page, search]);

  const handleNewsSearchSubmit = value => {
    setState(prevState => {
      if (prevState.search !== value) {
        setState({ search: value, page: 1 });
      }

      return setState({ search: value });
    });
  };

  const showWarning = () => {
    dispatch(fetchNews());
    setState({ search: '' });
  };
  return (
    <>
      <ReusableTitle>News</ReusableTitle>
      <SearchNewsForm onSubmit={handleNewsSearchSubmit} onClick={showWarning} />
      {isLoading && !error && <Loader />}
      {error && <p>Somthing wrong</p>}
      {!isLoading && newsItems.length === 0 && <NotFound />}

      {!isLoading && newsItems.length !== 0 && (
        <>
          <NewsList news={newsItems} />
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => {
              setState({ search: search, page: num });
            }}
          />
        </>
      )}
    </>
  );
};

