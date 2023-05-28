import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
// import { Loader } from './Loader/Loader';
// import PawLoader from '../images/Loader.png';

import { NoticesCategoriesList } from './Notices/NoticesCategoriesList/NoticesCategoriesList';

import { useEffect } from 'react';
import { userCurrent } from 'redux/auth/authService';
// import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

import { RestrictedRoute } from '../routes/RestrictedRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import axios from 'axios';

const MainPage = lazy(() => import('../pages/MainPage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ModalTestPage = lazy(() => import('../pages/ModalTestPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
  // setInterval(() => {
  //   dispatch(userCurrent());
  // }, 8000);
  useEffect(() => {
    dispatch(userCurrent());
    console.log(axios.defaults.headers.common.Authorization);
  }, [dispatch]);

  // const isRefreshing = true;

  // return isRefreshing ? (
  //   <Loader loaderSrc={PawLoader} size={600} />
  // ) : (
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/user" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/user" />
            }
          />
          <Route
            path="user"
            element={<PrivateRoute component={UserPage} redirectTo="/login" />}
          />
          <Route path="/notices" element={<NoticesPage />}>
            <Route index element={<NoticesCategoriesList />} />
            <Route path="sell" element={<NoticesCategoriesList />} />
            <Route path="lost-found" element={<NoticesCategoriesList />} />
            <Route path="for-free" element={<NoticesCategoriesList />} />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  component={NoticesCategoriesList}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="own"
              element={
                <PrivateRoute
                  component={NoticesCategoriesList}
                  redirectTo="/login"
                />
              }
            />
          </Route>
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route
            path="add-pet"
            element={
              <PrivateRoute component={AddPetPage} redirectTo="/login" />
            }
          />
          <Route path="modals" element={<ModalTestPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* <Routes>             
            <Route path="notices" element={<NoticesPage />} />            
            <Route path="news" element={<NewsPage />} />            
        </Routes> */}
    </ThemeProvider>
  );
};
