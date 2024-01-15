import { createSlice } from '@reduxjs/toolkit';
import { dishPricing } from '../../helpers/hooks/dishPricing';

const initialState = {
  basketDishes: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasketDish: (state, { payload }) => {
      const { finalPrice } = dishPricing(payload);

      const findItem = state.basketDishes.find(
        (dish) => dish._id === payload._id,
      );

      if (findItem) {
        findItem.count++;
        findItem.total = finalPrice * findItem.count;
      } else {
        state.basketDishes.push({ ...payload, count: 1, total: finalPrice });
      }

      state.totalPrice = state.basketDishes.reduce((sum, obj) => {
        return obj.total + sum;
      }, 0);
    },

    deleteBasketDish: (state, { payload }) => {
      state.basketDishes = state.basketDishes.filter(
        (dish) => dish._id !== payload,
      );

      state.totalPrice = state.basketDishes.reduce((sum, obj) => {
        return sum + obj.total;
      }, 0);
    },

    clearBasket: (state) => {
      state.basketDishes = [];
      state.totalPrice = 0;
    },

    minusBasketDish: (state, { payload }) => {
      const findItem = state.basketDishes.find(
        (dish) => dish._id === payload._id,
      );

      if (findItem && findItem.count > 1) {
        findItem.count--;
        findItem.total -= findItem.total / (findItem.count + 1);
      } else {
        return;
      }

      state.totalPrice = state.basketDishes.reduce((sum, obj) => {
        return sum + obj.total;
      }, 0);
    },
  },
});

export const { addBasketDish, deleteBasketDish, clearBasket, minusBasketDish } =
  basketSlice.actions;
