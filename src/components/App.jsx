import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
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
// import { useEffect } from 'react';
// import { userCurrent } from 'redux/auth/authService';
// import { useAuth } from 'hooks/useAuth';
// import { useDispatch } from 'react-redux';
// import { RestrictedRoute } from './routes/RestrictedRoute';
// import { PrivateRoute } from './routes/PrivateRoute';

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(userCurrent());
  // }, [dispatch]);

  return (
    // !isRefreshing &&
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<Register />} />
            <Route path="user" element={<UserPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="add-pet" element={<AddPetPage />} />
            <Route path="modals" element={<ModalTestPage />} />
            {/* <Route
              path="*"
              element={<Navigate to="404" component={<NotFound />} />}
            />  */}
             <Route
              path="*"
              element={<NotFound />} />
            
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
