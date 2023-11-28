import { createSlice } from '@reduxjs/toolkit';
import { getHotMenu, getMenuPopular } from './operation';

const initialState = {
  popularDishes: [],
  hotDishes: [],
  isLoading: false,
  error: null,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMenuPopular.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMenuPopular.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.popularDishes = payload;
        state.error = null;
      })
      .addCase(getMenuPopular.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getHotMenu.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.hotDishes = payload;
        state.error = null;
      });
  },
});
