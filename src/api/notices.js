import axios from 'axios';

// getNotices
export const getAllNotices = async params => {
  const response = await axios.get(`/notices`, { params });
  return response.data;
};

// getPrivateNotices
export const getPrivateNotices = async (category, params) => {
  const response = await axios.get(`/notices/${category}`, { params });
  return response.data;
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

// setNoticeToFavorite
export const setNoticeToFavorite = async id => {
  const response = await axios.patch(`/notices/${id}/favorite`);
  return response;
};

// GetNoticeByFilters

export const getNoticeByFilters = async queryString => {
  const response = await axios.get(`/notices?${queryString}`);
  return response;
};
