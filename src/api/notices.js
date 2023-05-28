import axios from 'axios';

const baseServerURL = `https://your-pet-api.onrender.com`;
const baseAPIEndpoint = '/api/v1';
axios.defaults.baseURL = baseServerURL + baseAPIEndpoint;

// getNotices
export const getAllNotices = async category => {
  const response = await axios.get(`/notices/${category}`);
  return response;
};

// createNotice
export const createNotice = async body => {
  const response = await axios.post(`/notices`, body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response;
};

// deleteNotice
export const deleteNotice = async id => {
  const response = await axios.delete(`/notices/${id}`);
  return response;
};

// getNoticeById
export const getNoticeById = async id => {
  const response = await axios.get(`/notices/${id}`);
  return response;
};
