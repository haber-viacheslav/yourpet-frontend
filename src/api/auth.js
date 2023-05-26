import axios from 'axios';
import { localStorageService } from 'helpers/localStorageService';
const baseURL = 'https://your-pet-api.onrender.com/api/v1';
axios.defaults.baseURL = baseURL;
// export const instance = axios.create({ baseURL });
export const setToken = async token => {
  if (!token) {
    return (axios.defaults.headers.common.authorization = ``);
  }
  return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
};
// INTERCEPTORS
// axios.interceptors.request.use(config => {
//   const accessToken = localStorageService.getItem('accessToken');
//   config.headers.common.authorization = `Bearer ${accessToken}`;
//   return config;
// });
axios.interceptors.response.use(
  resp => resp,
  async error => {
    console.log(error.response.data.code);
    if (
      error.response.data.code === 403
      // || error.response.data.message.includes('authorization')
    ) {
      const oldRefreshToken = localStorageService.getItem('refreshToken');
      // console.log('OLD REFRESH', oldRefreshToken);
      try {
        const { data } = await axios.post('/auth/refresh', {
          refreshToken: oldRefreshToken,
        });
        const { accessToken, refreshToken } = data.body;
        console.log(
          'NEW ACCESS TOKEN ==== OLD ACCESS TOKEN',
          accessToken === axios.defaults.headers.common.authorization
        );

        console.log('NEW ACCESS TOKEN!!!!!!!', accessToken);
        console.log('NEW refresh TOKEN!!!!!!!', refreshToken);
        // console.log('NEW === OLD REFRESH', oldRefreshToken === refreshToken);
        setToken(accessToken);
        localStorageService.setItem('refreshToken', refreshToken);
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
// --REGISTER OPERATION--
export const registerFetch = async credentials => {
  const { data } = await axios.post('/auth/register', credentials);
  const { accessToken, refreshToken } = data.body;
  console.log(data);
  setToken(accessToken);
  localStorageService.setItem('refreshToken', refreshToken);
  return data;
};
// --LOGIN OPERATION--
export const loginFetch = async credentials => {
  const { data } = await axios.post('/auth/login', credentials);
  const { accessToken, refreshToken } = data.body;
  setToken(accessToken);
  localStorageService.setItem('refreshToken', refreshToken);
  return data;
};
// --CURRENT OPERATION--
export const currentFetch = async () => {
  const { data } = await axios.get('/auth/current');

  return data;
};
// --LOGOUT OPERATION--
export const logoutFetch = async () => {
  const { data } = await axios.post('/auth/logout');
  setToken();
  localStorageService.setItem('refreshToken', null);
  return data;
};
// --UPDATE OPERATION--
export const updateFetch = async userData => {
  const { data } = await axios.put('/auth/update', userData);
  return data;
};
