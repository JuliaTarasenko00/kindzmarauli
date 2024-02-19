import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  changeDataDish,
  deleteDish,
  getDishId,
  getMenu,
  getSpecificsDishes,
  searchDishes,
} from './operation';

const initialState = {
  dishes: [],
  specifics: [],
  changeDish: null,
  filteredDishes: [],
  totalPage: 0,
  isLoading: false,
  error: null,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMenu.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dishes = payload.result;
        state.totalPage = payload.totalPages;
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
      .addCase(changeDataDish.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.changeDish = payload;
        state.error = null;
      })
      .addCase(deleteDish.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dishes = state.dishes.filter((dish) => dish._id !== payload);
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getMenu.pending,
          getSpecificsDishes.pending,
          getDishId.pending,
          changeDataDish.pending,
          deleteDish.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          getMenu.rejected,
          getSpecificsDishes.rejected,
          changeDataDish.rejected,
          deleteDish.rejected,
          getDishId.rejected,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
