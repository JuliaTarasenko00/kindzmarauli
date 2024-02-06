import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMenuPopular, getSpecificsDishes, searchDishes } from './operation';

const initialState = {
  popularDishes: [],
  specifics: [],
  filteredDishes: [],
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
      .addCase(getSpecificsDishes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.specifics = payload;
        state.error = null;
      })
      .addCase(searchDishes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.filteredDishes = payload;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(getMenuPopular.pending, getSpecificsDishes.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(getMenuPopular.rejected, getSpecificsDishes.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
