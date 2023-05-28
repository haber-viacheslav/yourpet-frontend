import axios from 'axios';

// const baseServerURL = `https://your-pet-api.onrender.com`;
// const baseAPIEndpoint = '/api/v1';
// axios.defaults.baseURL = baseServerURL + baseAPIEndpoint;
// getFriends
// export const getFriends = async () => {
//   const response = await axios.get('/friends');
//   return response;
// };
// // getPets
// export const getPets = async () => {
//   const response = await axios.get('/pets');
//   return response;
// };

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
