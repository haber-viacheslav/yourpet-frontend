import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { getAllNotices, getPrivateNotices, deleteNotice } from 'api/notices';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Search } from 'components/Search/Search';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { Loader } from 'components/Loader/Loader';
import PawLoader from '../images/Loader.png';
import { theme } from '../theme/theme';
import { Pagination } from 'components/Pagination/Pagination';
import { getNoticeByFilters } from 'api/notices';
import { notify } from 'helpers/notification';
import { NotResults } from '../components/NotResults/NotResults';

const NoticesPage = () => {
  const limit = 10;
  const [category, setCategory] = useState('sell');
  const [notices, setNotices] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [queryString, setQueryString] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const isTablet = window.matchMedia(theme.media.mdToLg).matches;

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    console.log(+params.page);

    setIsLoading(true);
    try {
      (async () => {
        if (category === 'favorite' || category === 'own') {
          const response = await getPrivateNotices(category, params);
          setSearchParams({ page: 1, ...params, category });
          setNotices(response.data);
          setTotalPages(response.totalPages);
        } else if (queryString !== '') {
          const response = await getNoticeByFilters(queryString);
          setNotices(response.data.data);
        } else {
          setSearchParams({ page: 1, ...params, category });
          const response = await getAllNotices(params);
          setNotices(response.data);
          setTotalPages(response.totalPages);
        }
      })();
    } catch (error) {
      notify('error', 'Sorry, server just have a "fiesta" at this moment...');
    } finally {
      setIsLoading(false);
    }
  }, [setSearchParams, params, category, queryString]);

  const handleSearchSubmit = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams({ ...nextParams, page: 1, limit });
  };

  const handleRemoveNotice = async id => {
    if (category === 'favorite') {
      try {
        const index = notices.findIndex(el => el['_id'] === id);
        const updateData = [...notices];
        updateData.splice(index, 1);
        setNotices(updateData);
      } catch (error) {
        notify('error', 'Sorry, server just have a "fiesta" at this moment...');
      }
    }
  };

  const handleDeleteBtn = async id => {
    try {
      const index = notices.findIndex(el => el['_id'] === id);
      const updateData = [...notices];
      updateData.splice(index, 1);
      setNotices(updateData);
      const result = await deleteNotice(id);
      if (result.code === 200) {
        notify('success', 'Notice deleted successfully');
      }
    } catch (error) {
      notify('error', 'Sorry, server just have a "fiesta" at this moment...');
    }
  };

  const handleChoose = option => {
    setCategory(option);
    setTotalPages(0);
    setSearchParams({ ...params, category: option, page: 1, limit });
  };

  const handlePageChange = page => {
    setSearchParams({ ...params, page, limit });
  };

  const handleQueryStringChange = newQueryString => {
    setQueryString(newQueryString);
  };

  return (
    <>
      <Section padTopSm={'20px'} padTopMd={'56px'} padTopLg={'60px'}>
        <Container>
          <Wrapper>
            <Title>Find your favorite pet</Title>
          </Wrapper>
          <Search onSubmit={handleSearchSubmit} />
          <NoticesCategoriesNav
            onCategoryClick={handleChoose}
            active={category}
            onQueryStringChange={handleQueryStringChange}
          />
          <Suspense fallback={<Loader loaderSrc={PawLoader} size={250} />}>
            {notices.length > 0 && (
              <NoticesCategoriesList
                notices={notices}
                delNotice={handleDeleteBtn}
                removeNoticeFromFavorite={handleRemoveNotice}
              >
                <Outlet />
              </NoticesCategoriesList>
            )}
          </Suspense>
          {!isLoading && notices.length === 0 && (
            <NotResults title={'Ooops:( Such notices not found'} />
          )}
          {totalPages > 1 && !queryString && (
            <Pagination
              currentPage={+params.page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              paginationLength={isTablet ? 5 : 4}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
