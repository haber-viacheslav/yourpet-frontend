import axios from 'axios';
// import { dispatch } from '../redux/store';
// console.log(store);

const baseURL = 'https://your-pet-api.onrender.com/api/v1';
axios.defaults.baseURL = baseURL;
// export const axios = axios.create({ baseURL });
export const setToken = async token => {
  if (!token) {
    return (axios.defaults.headers.authorization = ``);
  }
  return (axios.defaults.headers.authorization = `Bearer ${token}`);
};
// INTERCEPTORS
// axios.interceptors.request.use(config => {
//   const accessToken = ('accessToken');
//   config.headers.common.authorization = `Bearer ${accessToken}`;
//   return config;
// });
axios.interceptors.response.use(
  resp => resp,
  async error => {
    if (
      error.response.data.code === 403 ||
      error.response.data.message.includes('authorization')
    ) {
      try {
        // setToken(accessToken);

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

  return data;
};
// --LOGIN OPERATION--
export const loginFetch = async credentials => {
  const { data } = await axios.post('/auth/login', credentials);
  const { accessToken, refreshToken } = data.body;
  setToken(accessToken);

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

  return data;
};
// --UPDATE OPERATION--
export const updateFetch = async userData => {
  const { data } = await axios.put('/auth/update', userData);
  return data;
};
