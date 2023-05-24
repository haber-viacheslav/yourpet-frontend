import React, { useState, useEffect } from 'react';
//  import { useSelector, useDispatch } from 'react-redux';
 import { Container } from 'components/Container/Container';
// import { fetchNews } from 'redux/news/newsoperations';
// import {
//   selectNews,
//   selectIsLoading,
//   selectError,
//  selectTotalPage,
// } from 'redux/news/newsSelector';

import { Loader } from 'components/Loader/Loader';
import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';
import {ReusableTitle} from 'components/ReusableTitle/ReusableTitle';
import { NewsList } from 'components/News/NewsList/NewsList';
import  { Pagination }  from '../Pagination/Pagination';
import { NotFound } from 'components/News/NewsNotFound/NewsNotFound';
import { theme } from '../../theme/theme';
// import { List } from 'components/News/NewsList/NewsList';
import  dataNews  from '../News/news.json';

const initialState = { search: '', page: 1 };

export const NewsData = () => {
  const [state, setState] = useState({ ...initialState });
  // const { search, page } = state;
  //  const dispatch = useDispatch();
    // const newsItems = useSelector(selectNews);
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
    // const pageQty = useSelector(selectTotalPage);
  
    useEffect(() => {
    //   dispatch(fetchNews({ page: page, search: search }));
    // }, [dispatch, page, search]);
  
    // const handleNewsSearchSubmit = value => {
    //   setState(prevState => {
    //     if (prevState.search !== value) {
    //       setState({ search: value, page: 1 });
    //     }
  
    //     return setState({ search: value });
    //   });
    // };
  
    // const showWarning = () => {
    //   dispatch(fetchNews());
    //   setState({ search: '' });
    // };
  
    setState(dataNews);
  }, []);

    const ModalTestPage = () => {
      const [currentPage, setCurrentPage] = useState(1);
      console.log('Current Page:', currentPage);
      const isTablet = window.matchMedia(theme.media.md).matches;
    
      const totalPages = 10; //from server data pages
      const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);
        // fetch
      };
  
    return (
      <Container>
        <ReusableTitle>News</ReusableTitle>
        <SearchNewsForm      /> 
        <Loader />
        <p>Something wrong</p>
        <NotFound />

          <>
            <NewsList  />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              paginationLength={isTablet ? 5 : 4}
        
            />
          </>
      </Container>
    );
   };
};

      




// const NewsData = () => {
//   const [state, setState] = useState({ ...initialState });
//   const { search, page } = state;

//   const dispatch = useDispatch();
//   const newsItems = useSelector(selectNews);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const pageQty = useSelector(selectTotalPage);

//   useEffect(() => {
//     dispatch(fetchNews({ page: page, search: search }));
//   }, [dispatch, page, search]);

//   const handleNewsSearchSubmit = value => {
//     setState(prevState => {
//       if (prevState.search !== value) {
//         setState({ search: value, page: 1 });
//       }

//       return setState({ search: value });
//     });
//   };

//   const showWarning = () => {
//     dispatch(fetchNews());
//     setState({ search: '' });
//   };

//   const ModalTestPage = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     console.log('Current Page:', currentPage);
//     const isTablet = window.matchMedia(theme.media.md).matches;
  
//     const totalPages = 10; //from server data pages
//     const handlePageChange = pageNumber => {
//       setCurrentPage(pageNumber);
//       // fetch
//     };

//   return (
//     <>
 //  <Container>
//       <ReusableTitle>News</ReusableTitle>
//       <SearchNewsForm 
//       onSubmit={handleNewsSearchSubmit}  />
//       {isLoading && !error && <Loader />}
//       {error && <p>Something wrong</p>}
//       {!isLoading && newsItems.length === 0 && 
//       <NotFound />}

//       {!isLoading && newsItems.length !== 0 && (
//         <>
//           <NewsList news={newsItems} />
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//             paginationLength={isTablet ? 5 : 4}
// //          }}
//           />
//           </>
//         )}
//       </Container>
//     );
//   };