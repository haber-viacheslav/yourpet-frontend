import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from './utility/authUtility';

axios.defaults.baseURL = 'https://your-pet-api.onrender.com/api/v1/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/register', credentials);
      setAuthHeader(data.body.accessToken);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 409') {
        alert(
          `User "${credentials.email}" is already registered, please login `
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ values }, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', values);
      setAuthHeader(data.body.accessToken);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        alert(
          `User "${values.email}" is not found please register and try again`
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userCurrent = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshTokens = createAsyncThunk(
  'auth/refreshTokens',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const oldRefreshToken = state.auth.refreshToken;
    console.log(oldRefreshToken);
    try {
      const { data } = await axios.post('auth/refresh', {
        refreshToken: oldRefreshToken,
      });
      setAuthHeader(data.body.accessToken);
      return data;
    } catch (error) {
      console.log(error.response);
      if (error.response.data.code === 401) {
        clearAuthHeader();
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

axios.interceptors.response.use(
  resp => console.log('INTERCEPTOR', resp),
  async error => {
    const code = error.response.data.code;
    const oldRefreshToken = localStorage.getItem('persist:auth');
    console.log(oldRefreshToken);

    if (code === 403) {
      // const { data } = await axios.post('auth/refresh');
    }

    console.log('INTERCEPTOR ERROR', error.response.data.code);
    return Promise.reject(error);
  }
);
