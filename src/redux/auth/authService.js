// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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
      // console.log('data');

      const data = await registerFetch(credentials);
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
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const data = await loginFetch(credentials);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        alert(
          `User "${credentials.email}" is not found please register and try again`
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
    if (persistedToken === null) {
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
  async (_, thunkAPI) => {
    try {
      const data = await updateFetch(); // need provide data to update
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const refreshTokens = createAsyncThunk(
//   'auth/refreshTokens',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const oldRefreshToken = state.auth.refreshToken;
//     console.log(oldRefreshToken);
//     try {
//       const data = await axios.post('auth/refresh', {
//         refreshToken: oldRefreshToken,
//       });
//       return data;
//     } catch (error) {
//       console.log(error.response);
//       if (error.response.data.code === 401) {
//       }
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );
