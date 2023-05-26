import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, userCurrent } from './authService';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        // console.log(action.payload);
        const user = {
          name: action.payload.body.name,
          email: action.payload.body.email,
        };
        state.user = user;

        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const user = {
          name: action.payload.body.name,
          email: action.payload.body.email,
        };
        state.user = user;
        console.log(action.payload.body);
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(userCurrent.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.user = action.payload.body;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userCurrent.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
