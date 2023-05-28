import axios from 'axios';

// createNotice
export const createNotice = async body => {
  return await axios.post(`/notices`, body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// deleteNotice
export const deleteNotice = async id => {
  console.log(id);

  const response = await axios.delete(`/notices/${id}`);
  console.log(response);
  return response;
};
