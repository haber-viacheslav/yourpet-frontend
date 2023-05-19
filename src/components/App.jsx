import { useEffect } from 'react';
import { userCurrent } from 'redux/auth/authService';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
// import { RestrictedRoute } from './routes/RestrictedRoute';
// import { PrivateRoute } from './routes/PrivateRoute';

import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';


const MainPage = lazy(() => import('../pages/MainPage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const NotFound = lazy(() => import('../pages/NotFound'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  return (
    !isRefreshing &&
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" component={<Register />} />
        <Route path="user" element={<UserPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="add-pet" element={<AddPetPage />} />
        <Route
          path="*"
          element={<Navigate to="404" component={<NotFound />} />}
        />
      </Route>
    </Routes>
  );
};
