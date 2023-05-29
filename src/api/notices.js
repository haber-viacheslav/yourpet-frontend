import axios from 'axios';

// getNotices
export const getAllNotices = async urlParams => {
  const response = await axios.get(`/notices?category=${urlParams}`);
  return response;
};

// getPrivateNotices
export const getPrivateNotices = async urlParams => {
  console.log(urlParams);
  const response = await axios.get(`/notices/${urlParams}`);
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
