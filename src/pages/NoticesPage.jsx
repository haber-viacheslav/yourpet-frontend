import { useState, useEffect, useMemo } from 'react';
import {
  useNavigate,
  // useParams,
  // useSearchParams
} from 'react-router-dom';
import { getAllNotices, getPrivateNotices, deleteNotice } from 'api/notices';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Search } from 'components/Search/Search';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { useSearchParams } from 'react-router-dom';
import { theme } from '../theme/theme';
import { Pagination } from 'components/Pagination/Pagination';
const isTablet = window.matchMedia(theme.media.mdToLg).matches;
const isDesktop = window.matchMedia(theme.media.lg).matches;
const NoticesPage = () => {
  const [limit, setLimit] = useState(11);
  const [category, setCategory] = useState('sell');
  const [isFirstRedirect, setIsFirstRedirect] = useState(true);
  const [notices, setNotices] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  console.log('params', params);

  // console.log('searchQuery', searchQuery);

  useEffect(() => {
    if (isTablet) {
      return setLimit(4);
    }
    if (isDesktop) {
      return setLimit(4);
    }
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRedirect) {
      navigate('/notices/sell');
    }
    setIsFirstRedirect(false);
  }, [navigate, isFirstRedirect]);

  useEffect(() => {
    try {
      (async () => {
        if (category === 'favorite' || category === 'own') {
          const response = await getPrivateNotices(category, params);

          setNotices(response.data);
          setTotalPages(response.totalPages);
        } else {
          setSearchParams({ ...params, category });
          const response = await getAllNotices(params);
          console.log('response', response);
          setNotices(response.data);
          setTotalPages(response.totalPages);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [setSearchParams, params, category]);

  const handleSearchSubmit = search => {
    console.log('search-handleSearchSubmit', search);

    const nextParams = search !== '' ? { search } : {};
    console.log('nextParams', nextParams);
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
    setSearchParams({ ...params, page });
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
          />
          <NoticesCategoriesList
            notices={notices}
            delNotice={handleDeleteBtn}
          />
          {
            <Pagination
              currentPage={params.page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              paginationLength={isTablet ? 5 : 4}
            />
          }
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
