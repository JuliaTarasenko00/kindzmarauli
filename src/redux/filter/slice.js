import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterDishes: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterDishes } = filterSlice.actions;
