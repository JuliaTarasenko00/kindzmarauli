import { createSlice } from '@reduxjs/toolkit';
import {
  addBasketDish,
  deleteBasketDish,
  clearBasket,
  minusBasketDish,
} from './operationNotAuth';

const initialState = {
  basketDishes: [],
  totalPrice: 0,
  isLoading: false,
  error: null,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addBasketDish.fulfilled, (state, { payload }) => {
        const findItem = state.basketDishes.find(
          (dish) => dish._id === payload._id,
        );

        if (findItem) {
          findItem.count++;
          findItem.total = payload.finalPrice * findItem.count;
        } else {
          state.basketDishes.push({
            ...payload,
            count: 1,
            total: payload.finalPrice,
          });
        }

        state.totalPrice = state.basketDishes.reduce((sum, obj) => {
          return obj.total + sum;
        }, 0);
      })
      .addCase(deleteBasketDish.fulfilled, (state, { payload }) => {
        state.basketDishes = state.basketDishes.filter(
          (dish) => dish._id !== payload,
        );

        state.totalPrice = state.basketDishes.reduce((sum, obj) => {
          return sum + obj.total;
        }, 0);
      })
      .addCase(clearBasket.fulfilled, (state) => {
        state.basketDishes = [];
        state.totalPrice = 0;
      })
      .addCase(minusBasketDish.fulfilled, (state, { payload }) => {
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
      });
  },
});
