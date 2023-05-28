import { createSlice } from '@reduxjs/toolkit';

import { fetchNotices } from './noticesService';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    searchParams:{
      category: 'sell',
      genderMale: true,
      genderFemale: true,
      upToOneYearAge: true,
      oneYearAge: true,
      fromTwoYearsAge: true,
    },   
    isLoading: false,
    error: null,
    totalPages: 0,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNotices.rejected, state => {
        state.error = true;
        state.isLoading = false;
      }),
});

export const noticesReducer = noticesSlice.reducer;