import { configureStore } from '@reduxjs/toolkit';
import { dishesSlice } from './dishes/slice';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    dishes: dishesSlice.reducer,
    filter: filterSlice.reducer,
  },
});
