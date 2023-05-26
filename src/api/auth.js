import axios from 'axios';
import { localStorageService } from 'helpers/localStorageService';
const baseURL = 'https://your-pet-api.onrender.com/api/v1';
export const instance = axios.create({ baseURL });
export const setToken = async token => {
  if (!token) {
    return (instance.defaults.headers.authorization = ``);
  }
  return (instance.defaults.headers.authorization = `Bearer ${token}`);
};
// INTERCEPTORS
// instance.interceptors.request.use(config => {
//   const accessToken = localStorageService.getItem('accessToken');
//   config.headers.common.authorization = `Bearer ${accessToken}`;
//   return config;
// });
instance.interceptors.response.use(
  resp => resp,
  async error => {
    if (error.response.data.code === 403) {
      const oldRefreshToken = localStorageService.getItem('refreshToken');
      try {
        const { data } = await instance.post('/auth/refresh', oldRefreshToken);
        const { accessToken, refreshToken } = data.body;
        setToken(accessToken);
        localStorageService.setItem('refreshToken', refreshToken);
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
// --REGISTER OPERATION--
export const registerFetch = async credentials => {
  const { data } = await instance.post('/auth/register', credentials);
  const { accessToken, refreshToken } = data.body;
  setToken(accessToken);
  localStorageService.setItem('refreshToken', refreshToken);
  return data;
};
// --LOGIN OPERATION--
export const loginFetch = async credentials => {
  const { data } = await instance.post('/auth/login', credentials);
  const { accessToken, refreshToken } = data.body;
  setToken(accessToken);
  localStorageService.setItem('refreshToken', refreshToken);
  return data;
};
// --CURRENT OPERATION--
export const currentFetch = async () => {
  const { data } = await instance.get('/auth/current');

  return data;
};
// --LOGOUT OPERATION--
export const logoutFetch = async () => {
  const { data } = await instance.post('/auth/logout');
  setToken();
  localStorageService.setItem('refreshToken', null);
  return data;
};
// --UPDATE OPERATION--
export const updateFetch = async userData => {
  const { data } = await instance.put('/auth/update', userData);
  return data;
};
