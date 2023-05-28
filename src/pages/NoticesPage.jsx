import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { NoticesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsLoading,
  selectError,
  selectTotalPages,
  selectNotices,
  selectCategory,
  selectMale,
  selectFemale,
  selectUpToOneYearAge,
  selectOneYearAge,
  selectFromTwoYearsAge,
} from 'redux/notices/selectors';

import { Loader } from 'components/Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { NotFound } from '../News/NewsNotFound/NewsNotFound';
import { theme } from '../../theme/theme';
import { fetchNotices } from 'redux/notices/noticesService';

const NoticesPage = () => {

  const limit = 6;
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const notices = useSelector(selectNotices);
  const category = useSelector(selectCategory);
  const genderMale = useSelector(selectMale);
  const genderFemale = useSelector(selectFemale);
  const upToOneYearAge = useSelector(selectUpToOneYearAge);
  const oneYearAge = useSelector(selectOneYearAge);
  const fromTwoYearsAge = useSelector(selectFromTwoYearsAge);
  const isTablet = window.matchMedia(theme.media.md).matches;

  useEffect(() => {
    console.log('search', search);
    dispatch(fetchNotices({ search, page, limit }));
  }, [dispatch, 
      search, 
      category,
      genderMale, 
      genderFemale, 
      upToOneYearAge, 
      oneYearAge, 
      fromTwoYearsAge,
      page]);

  const handleNoticesSearchSubmit = value => {
    setSearch(prevState => {
      if (prevState.search !== value) {
        setSearch(value);
        setPage(1);
      }

      return setSearch(value);
    });
  };

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };


  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Find your favorite pet</Title>
          </Wrapper>

          <NoticesCategoriesNav />

          {isLoading && <Loader loaderSrc={Cat} size={160} />}
          {isError && !notices.length && <NotFound />}

          <NoticesSearch onSubmit={handleNoticesSearchSubmit}/>

          {notices && notices.length > 0 && <NoticesList petList={notices} />}
          {notices && notices.length > 0 && totalPages > 1 && (
            <Pagination
              currentPage={page}
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
