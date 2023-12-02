import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllMenu, getMenuPopular } from './operation';

const initialState = {
  popularDishes: [],
  allDishes: [],
  isLoading: false,
  error: null,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMenuPopular.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.popularDishes = payload;
        state.error = null;
      })
      .addCase(getAllMenu.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allDishes = payload;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(getMenuPopular.pending, getAllMenu.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(getMenuPopular.rejected, getAllMenu.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
