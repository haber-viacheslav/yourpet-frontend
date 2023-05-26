import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
console.log(axios.defaults.baseURL);

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (params, thunkAPI) => {
    console.log(params);
    try {
      const response = await axios.get('news', {
        params,
      });
      console.log('fetch news data--->', response);
      console.log('fetch news data body--->', response.data.body);
      return response.data.body;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
