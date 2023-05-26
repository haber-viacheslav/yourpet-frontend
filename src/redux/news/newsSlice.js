import { createSlice } from '@reduxjs/toolkit';

import { fetchNews } from './newsService';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    totalPages: 0,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.items = action.payload.data;
        console.log('PayloadData', action.payload.data);

        state.totalPages = action.payload.totalPages;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchNews.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNews.rejected, state => {
        state.error = true;
        state.isLoading = false;
      }),
});

export const newsReducer = newsSlice.reducer;
