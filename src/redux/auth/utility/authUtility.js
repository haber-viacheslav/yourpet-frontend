import axios from 'axios';
// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // console.log('сетер хедера:', axios.defaults.headers.common.Authorization);
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
