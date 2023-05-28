import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  userCurrent,
  updateUser,
} from './authService';

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    city: null,
    avatarURL: null,
    newUser: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.body.email;
        state.user.newUser = action.payload.body.newUser;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.body.name,
          email: action.payload.body.email,
          birthday: action.payload.body.birthday,
          phone: action.payload.body.phone,
          city: action.payload.body.city,
          avatarURL: action.payload.body.avatarURL,
          newUser: action.payload.body.newUser,
        };
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
          birthday: null,
          phone: null,
          city: null,
          avatarURL: null,
          newUser: null,
        };
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })
      .addCase(userCurrent.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.body.name,
          email: action.payload.body.email,
          birthday: action.payload.body.birthday,
          phone: action.payload.body.phone,
          city: action.payload.body.city,
          avatarURL: action.payload.body.avatarURL,
          newUser: false,
        };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userCurrent.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action);
        state.user = {
          name: action.payload.body.name,
          email: action.payload.body.email,
          birthday: action.payload.body.birthday,
          phone: action.payload.body.phone,
          city: action.payload.body.city,
          avatarURL: action.payload.body.avatarURL,
          newUser: action.payload.body.newUser,
        };
      })
      .addCase(updateUser.rejected, state => {
        state.isLoading = false;
      }),
});

export const authReducer = authSlice.reducer;
