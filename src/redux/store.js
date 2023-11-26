import { configureStore } from '@reduxjs/toolkit';
import { dishesSlice } from './slice';

export const store = configureStore({
  reducer: {
    dishes: dishesSlice.reducer,
  },
});
