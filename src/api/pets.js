import axios from 'axios';
// getFriends
export const getFriends = async () => {
  const response = await axios.get('/friends');
  return response;
};
// getPets
export const getPets = async () => {
  const response = await axios.get('/pets');
  return response;
};
// createPet
export const createPet = async body => {
  return await axios.post(`/pets`, body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
// deletePet
export const deletePet = async id => {
  return await axios.delete(`/pets/${id}`);
};
