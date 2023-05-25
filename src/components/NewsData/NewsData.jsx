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
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [media, setMedia] = useState('');
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews({ search, currentPage, limit }));
    if (search === '') {
      setCurrentPage(1);
    }
  }, [dispatch, search, currentPage, limit]);

  const handleNewsSearchSubmit = value => {
    setSearch(prevState => {
      if (prevState.search !== value) {
        setSearch(value);
        setCurrentPage(1);
      }

      return setSearch(value);
    });
  };

  const isTablet = window.matchMedia(theme.media.md).matches;

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <ReusableTitle>News</ReusableTitle>

      {isLoading && <Loader />}
      {isError && <NotFound />}

      <SearchNewsForm onSubmit={handleNewsSearchSubmit} />
      <NewsList news={news} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        paginationLength={isTablet ? 5 : 4}
      />
    </Container>
  );
};
