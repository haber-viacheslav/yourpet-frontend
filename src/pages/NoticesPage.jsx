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


const NoticesPage = () => {
  const limit = 10;
  const [category, setCategory] = useState('sell');
  const [notices, setNotices] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryString, setQueryString] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const isTablet = window.matchMedia(theme.media.mdToLg).matches;

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    try {
      (async () => {
        if (category === 'favorite' || category === 'own') {
          const response = await getPrivateNotices(category, params);
          setSearchParams({ ...params, category });  
          setNotices(response.data);
          setTotalPages(response.totalPages);
        } else if (queryString !== '') {
          const response = await getNoticeByFilters(queryString);
          setNotices(response.data.data);
        }
        else {
          setSearchParams({ ...params, category });
          const response = await getAllNotices(params);
          setNotices(response.data);
          setTotalPages(response.totalPages);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [setSearchParams, params, category, queryString]);

  const handleSearchSubmit = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams({ ...nextParams, page: 1, limit });
  };
  const handleDeleteBtn = async id => {
    try {
      const index = notices.findIndex(el => el['_id'] === id);
      const updateData = [...notices];
      updateData.splice(index, 1);
      setNotices(updateData);
      await deleteNotice(id);
    } catch (error) {}
  };

  const handleChoose = option => {
    setCategory(option);
    localStorage.setItem('category', option);
  };

  const handlePageChange = page => {
    setSearchParams({ ...params, page, limit });
  };

  const handleQueryStringChange = (newQueryString) => {
    setQueryString(newQueryString);
  };

  return (
    <>
      <Section>
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
            <NoticesCategoriesList
              notices={notices}
              delNotice={handleDeleteBtn}
            >
              <Outlet />
            </NoticesCategoriesList>
          </Suspense>

          {totalPages > 1 && (
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
