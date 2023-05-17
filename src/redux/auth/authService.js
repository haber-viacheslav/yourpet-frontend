import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from './utility/authUtility';
// default Axios URL
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Register
export const userSignup = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//Login
export const userLogin = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//Logout
export const userLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//Current User
export const userCurrent = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue("Token is'nt true");
    }
    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
