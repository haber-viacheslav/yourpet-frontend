import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (params, thunkAPI) => {
    console.log(params);
    try {
      const response = await axios.get('notices', {
        params,
      });

      console.log('response.data.body in fetchNotices: ', response.data.body);

      return response.data.body;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);