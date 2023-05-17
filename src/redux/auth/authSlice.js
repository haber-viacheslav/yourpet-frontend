import { createSlice, isAllOf } from '@reduxjs/toolkit';
import { userSignup, userLogin, userLogout, userCurrent } from './authService';
import { getActions } from 'components/helpers/getActions';
import { authExtraActions } from 'components/helpers/constants/actionConstants';
import { toast } from 'react-hot-toast';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`Hi 👋${state.user.name}`, {
          duration: 2000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .addCase(userLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.success('Bye 😥', {
          duration: 1000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('Welcome 🎉', {
          duration: 1000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .addMatcher(
        isAllOf(...getActions(authExtraActions, 'rejected')),
        state => {
          toast.error('Error! 😲 Try again later..', {
            duration: 2000,
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
          return state;
        }
      )
      .addMatcher(
        isAllOf(...getActions(authExtraActions, 'pending')),
        state => {
          toast.loading('Loading... ☕', {
            duration: 2000,
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
          return state;
        }
      ),
});

export const authReducer = authSlice.reducer;
