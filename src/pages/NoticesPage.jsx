import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, Outlet, useParams } from 'react-router-dom';
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
import { notify } from 'helpers/notification';
import { NotResults } from '../components/NotResults/NotResults';
import { AllFilterQueries } from 'helpers/filtersQueries';

const initialFiltersValue = {
  lessOne: false,
  one: false,
  two: false,
  female: false,
  male: false,
};

const NoticesPage = () => {
  // const limit = 10;
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(categoryName);
  const [checkboxValue, setCheckboxValue] = useState(initialFiltersValue);
  const [searchValue, setSearchValue] = useState({});
  const [notices, setNotices] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const isTablet = window.matchMedia(theme.media.mdToLg).matches;

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  console.log(
    AllFilterQueries(
      checkboxValue.lessOne,
      checkboxValue.one,
      checkboxValue.two,
      checkboxValue.female,
      checkboxValue.male
    )
  );

  // console.log('===params===', params);

  useEffect(() => {
    setSearchParams({
      page: 1,
      ...searchValue,
      ...AllFilterQueries(
        checkboxValue.lessOne,
        checkboxValue.one,
        checkboxValue.two,
        checkboxValue.female,
        checkboxValue.male
      ),
      category,
    });
  }, [
    checkboxValue,
    params,
    category,
    setSearchParams,
    searchValue,
    searchParams,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 2000);

    if (Object.keys(params).length > 0) {
      try {
        (async () => {
          if (category === 'favorite' || category === 'own') {
            const response = await getPrivateNotices(category, params);
            setNotices(response.data);
            setTotalPages(response.totalPages);
          } else if (
            category === 'sell' ||
            category === 'lost-found' ||
            category === 'for-free'
          ) {
            const response = await getAllNotices(params);
            setNotices(response.data);
            setTotalPages(response.totalPages);
          }
        })();
      } catch (error) {
        notify('error', 'Sorry, server just have a "fiesta" at this moment...');
      }
    }
    return () => clearTimeout(timer);
  }, [setSearchParams, params, category, searchParams]);

  const handleSearchSubmit = search => {
    if (search) {
      setSearchValue({ search });
    } else {
      setSearchValue({});
    }
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

  const handleChoose = route => {
    setCategory(route);
    setTotalPages(0);
    setSearchParams({ ...params, category: route, page: 1 });
  };

  const handlePageChange = page => {
    setSearchParams({ ...params, page });
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
            setCheckboxValue={setCheckboxValue}
            checkboxValue={checkboxValue}
          />
          <Suspense fallback={<Loader loaderSrc={PawLoader} size={250} />}>
            <NoticesCategoriesList
              notices={notices}
              delNotice={handleDeleteBtn}
              removeNoticeFromFavorite={handleRemoveNotice}
            >
              <Outlet />
            </NoticesCategoriesList>
          </Suspense>
          {showLoader && notices.length === 0 && (
            <NotResults title={'Ooops:( Such notices not found'} />
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
      </Section>
    </>
  );
};

export default NoticesPage;
