import axios from 'axios';

const baseServerURL = `https://your-pet-api.onrender.com`;
const baseAPIEndpoint = '/api/v1';
axios.defaults.baseURL = baseServerURL + baseAPIEndpoint;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const getOurFriends = async () => {
  const responce = await axios.get('/friends');
  return responce;
};

export const createPet = async body => {
  return await axios.post(`/pets`);
};

export const createNotice = async body => {
  return await axios.post(`/notices`);
};

// export const registerUser = async function (body) {
//   return await axios.post('/users/register', body);
// };

// export const verify = async function (body) {
//   return await axios.post('/users/verify', body);
// };

// export const reVerify = async function (body) {
//   return await axios.post('/users/reverify', body);
// };

// export const loginUser = async function (body) {
//   const result = await axios.post('/users/login', body);
//   setAuthHeader(result.data.token);
//   return result;
// };

// export const loginOut = async function () {
//   const result = await axios.post('/users/logout');
//   clearAuthHeader();
//   return result;
// };

// export const getCurrentUser = async function (token) {
//   setAuthHeader(token);
//   const result = await axios.get('/users/currentUser');
//   return result;
// };
