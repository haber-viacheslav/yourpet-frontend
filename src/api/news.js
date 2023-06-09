import axios from 'axios';

export const fetchNews = async params => {
  console.log(params);
  try {
    const response = await axios.get('/news', {
      params,
    });

    return response.data.body;
  } catch (e) {
    return console.log(e.massage);
  }
};
