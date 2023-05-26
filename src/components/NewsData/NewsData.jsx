import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsLoading,
  selectError,
  selectTotalPages,
  selectNews,
} from 'redux/news/selectors';

import { Loader } from 'components/Loader/Loader';
import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';
import { ReusableTitle } from 'components/ReusableTitle/ReusableTitle';
import { NewsList } from '../../components/News/NewsList/NewsList';
import { Pagination } from '../Pagination/Pagination';
import { NotFound } from '../News/NewsNotFound/NewsNotFound';
import { theme } from '../../theme/theme';
import { fetchNews } from 'redux/news/newsService';
import { Container } from 'components/Container/Container';

export const NewsData = () => {
  const limit = 6;
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isTablet = window.matchMedia(theme.media.md).matches;
  useEffect(() => {
    dispatch(fetchNews({ search, currentPage, limit }));
  }, [dispatch, search, currentPage]);

  const handleNewsSearchSubmit = value => {
    setSearch(prevState => {
      if (prevState.search !== value) {
        setSearch(value);
        setCurrentPage(1);
      }

      return setSearch(value);
    });
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <ReusableTitle>News</ReusableTitle>

      {isLoading && <Loader />}
      {isError && !news.length && <NotFound />}

      <SearchNewsForm onSubmit={handleNewsSearchSubmit} />
      {news && news.length > 0 && <NewsList news={news} />}
      {news && news.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          paginationLength={isTablet ? 5 : 4}
        />
      )}
    </Container>
  );
};
