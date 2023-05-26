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
instance.interceptors.request.use(config => {
  const accessToken = localStorageService.getItem('accessToken');
  config.headers.common.authorization = `Bearer ${accessToken}`;
  return config;
});
instance.interceptors.response.use(
  resp => resp,
  error => {
    if (error.response.data.code === 403) {
      const refreshToken = localStorageService.getItem('refreshToken');
    }
  }
);
// --REGISTER OPERATION--
export const register = async credentials => {
  const { data } = await instance.post('/auth/register', credentials);
  const { accessToken, refreshToken } = data.body;
  setToken(accessToken);
  localStorageService.setItem('refreshToken', refreshToken);
  return data;
};
// --LOGIN OPERATION--
export const login = async credentials => {
  const { data } = await instance.post('/auth/login', credentials);
  const { accessToken, refreshToken } = data.body;
  setToken(accessToken);
  localStorageService.setItem('refreshToken', refreshToken);
  return data;
};
// --CURRENT OPERATION--
export const current = async () => {
  const { data } = await instance.get('/auth/current');

  return data;
};
// --LOGOUT OPERATION--
export const logout = async () => {
  const { data } = await instance.post('/auth/logout');
  return data;
};
// --UPDATE OPERATION--
export const update = async userData => {
  const { data } = await instance.put('/auth/update');
  return data;
};
// --REFRESH TOKENS OPERATION--
export const refreshTokens = async credentials => {
  const { data } = await instance.post('/auth/refresh');
  return data;
};
