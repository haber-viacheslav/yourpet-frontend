import axios from 'axios';

export const fetchNews = async params => {
  console.log(params);
  try {
    const response = await axios.get('/news', {
      params,
    });
    console.log('fetch news data body--->', response.data.body);
    return response.data.body;
  } catch (e) {
    return console.log(e.massage);
  }
};
