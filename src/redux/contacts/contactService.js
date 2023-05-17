import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// default Axios URL
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// Fetch contacts from mockapi

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Add contact to mockapi
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', formData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// Remove contact from mockapi
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
