import { useState, useEffect, useMemo } from 'react';
import Cat from '../../images/walking-cat.gif';
import { Loader } from 'components/Loader/Loader';
import { Search } from 'components/Search/Search';
import { ReusableTitle } from 'components/ReusableTitle/ReusableTitle';
import { NewsList } from '../../components/News/NewsList/NewsList';
import { Pagination } from '../Pagination/Pagination';
import { NotResults } from '../NotResults/NotResults';
import { theme } from '../../theme/theme';
import { Container } from 'components/Container/Container';
import { useSearchParams } from 'react-router-dom';
import { fetchNews } from '../../api/news.js';
import { sortNewsByDate } from 'helpers/sortNewsByDate';
import { notify } from '../../helpers/notification';

export const NewsData = () => {
  const limit = 6;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const isTablet = window.matchMedia(theme.media.md).matches;

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    setSearchParams({
      ...params,

      limit,
    });
    setIsLoading(true);
    const getNews = async params => {
      try {
        const newNews = await fetchNews(params);
        if (!newNews.totalPages) {
          setTotalPages(0);
          setNews([]);
          return;
        }
        setNews(sortNewsByDate(newNews.data));
        setTotalPages(newNews.totalPages);
      } catch (error) {
        console.log(error);
        notify('error', "Sorry, something wrong. Please try again");
      } finally {
        setIsLoading(false);
      }
    };
    getNews(params);
  }, [setSearchParams, params]);

  const handleSearchSubmit = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams({ ...nextParams, page: 1, limit });
  };

  const handlePageChange = page => {
    setSearchParams({ ...params, page });
  };

  return (
    <Container>
      <ReusableTitle>News</ReusableTitle>

      {isLoading && <Loader loaderSrc={Cat} size={300} />}

      <Search onSubmit={handleSearchSubmit} />
      {news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <NotResults title={'Ooops:( Such news not found'} />
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={+params.page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          paginationLength={isTablet ? 5 : 4}
        />
      )}
    </Container>
  );
};
