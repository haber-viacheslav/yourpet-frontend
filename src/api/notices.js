import axios from 'axios';
// import { localStorageService } from 'helpers/localStorageService';
const baseURL = 'https://your-pet-api.onrender.com/api/v1';
axios.defaults.baseURL = baseURL;



// categories : ['my pet', 'sell', 'lost-found', 'for-free']


//  --GET NOTICES CATEGORY = 'SELL'--
export const getNotices = async () => {

  const { data } = await axios.get('/notices', {category: 'sell'});
  return data;
};

