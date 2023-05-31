import { createAsyncThunk } from '@reduxjs/toolkit';
import { notify } from 'helpers/notification';
import {
  registerFetch,
  loginFetch,
  currentFetch,
  logoutFetch,
  updateFetch,
} from 'api/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await registerFetch(credentials);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 409') {
        notify(
          'warning',
          `User "${credentials.email}" is already registered, please login `
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await loginFetch(credentials);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        notify(
          'warning',
          `User "${credentials.email}" is not found, please register and try again`
        );
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutFetch();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userCurrent = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    const isLoggedIn = state.auth.isLoggedIn;

    if (!persistedToken && !isLoggedIn) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const data = await currentFetch();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (body, thunkAPI) => {
    try {
      const data = await updateFetch(body);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
