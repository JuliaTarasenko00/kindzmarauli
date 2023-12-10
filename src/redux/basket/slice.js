import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketDishes: [],
  totalPrise: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasketDish: (state, { payload }) => {
      const findItem = state.basketDishes.find(
        (dish) => dish.id === payload.id,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.basketDishes.push({ ...payload, count: 1 });
      }

      state.totalPrise = state.basketDishes.reduce((sum, obj) => {
        return Number(obj.price) * Number(obj.count) + sum;
      }, 0);
    },
    deleteBasketDish: (state, { payload }) => {
      state.basketDishes = state.basketDishes.filter(
        (dish) => dish.id !== payload,
      );
      state.totalPrise = state.basketDishes.reduce((sum, obj) => {
        return Number(obj.price) - sum;
      }, 0);
    },
    clearBasket: (state) => {
      state.basketDishes = [];
      state.totalPrise = 0;
    },
  },
});

export const { addBasketDish, deleteBasketDish, clearBasket } =
  basketSlice.actions;
