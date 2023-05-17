import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useEffect, lazy } from 'react';
import { userCurrent } from 'redux/auth/authService';
import { useAuth } from 'hooks/useAuth';
// import { Home } from 'pages/Home';
// import { Register } from 'pages/Register';
// import { Login } from 'pages/Login';
// import { Contacts } from 'pages/Contacts';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />} end>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    )
  );
};

// import Button from '@mui/material/Button';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
//   <Backdrop
//     sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
//     open={open}
//     onClick={handleClose}
//   >
//     <CircularProgress color="inherit" />
//   </Backdrop>
