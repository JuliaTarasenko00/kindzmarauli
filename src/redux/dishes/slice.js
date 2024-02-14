import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllMenu,
  getDishId,
  getMenuPopular,
  getSpecificsDishes,
  searchDishes,
} from './operation';

const initialState = {
  popularDishes: [],
  specifics: [],
  dishes: [],
  changeDish: null,
  filteredDishes: [],
  isLoading: false,
  error: null,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMenu.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dishes = payload;
        state.error = null;
      })
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
      .addCase(getDishId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.changeDish = payload;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getMenuPopular.pending,
          getSpecificsDishes.pending,
          getAllMenu.pending,
          getDishId.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          getMenuPopular.rejected,
          getSpecificsDishes.rejected,
          getAllMenu.rejected,
          getDishId.rejected,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
