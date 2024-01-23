import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addBasketDish,
  deleteBasketDish,
  clearBasket,
  minusBasketDish,
} from './operationNotAuth';
import {
  addDishBasketAuth,
  deleteDishAuth,
  getDishesBasketAuth,
  magnificationCountDishBasket,
  reductionCountDishBasket,
} from './operation';

const initialState = {
  basketDishes: [],
  totalPrice: 0,
  isLoading: false,
  error: null,
};

const totalSum = (state) => {
  return state.reduce((sum, obj) => {
    return obj.total + sum;
  }, 0);
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

        state.totalPrice = totalSum(state.basketDishes);
      })
      .addCase(deleteBasketDish.fulfilled, (state, { payload }) => {
        state.basketDishes = state.basketDishes.filter(
          (dish) => dish._id !== payload,
        );

        state.totalPrice = totalSum(state.basketDishes);
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
        state.totalPrice = totalSum(state.basketDishes);
      })
      .addCase(getDishesBasketAuth.fulfilled, (state, { payload }) => {
        state.basketDishes = payload;
        state.totalPrice = totalSum(state.basketDishes);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDishBasketAuth.fulfilled, (state, { payload }) => {
        state.basketDishes.push(payload);
        state.totalPrice = totalSum(state.basketDishes);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(magnificationCountDishBasket.fulfilled, (state, { payload }) => {
        state.basketDishes = state.basketDishes.map((dish) => {
          if (dish._id === payload._id) {
            return {
              ...dish,
              count: payload.count,
              total: payload.total,
            };
          }
          return dish;
        });
        state.totalPrice = totalSum(state.basketDishes);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(reductionCountDishBasket.fulfilled, (state, { payload }) => {
        state.basketDishes = state.basketDishes.map((dish) => {
          if (dish._id === payload._id) {
            return {
              ...dish,
              count: payload.count,
              total: payload.total,
            };
          }
          return dish;
        });
        state.totalPrice = totalSum(state.basketDishes);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteDishAuth.fulfilled, (state, { payload }) => {
        state.basketDishes = state.basketDishes.filter(
          (dish) => dish._id !== payload._id,
        );
        state.totalPrice = totalSum(state.basketDishes);
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          addDishBasketAuth.pending,
          magnificationCountDishBasket.pending,
          reductionCountDishBasket.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          addDishBasketAuth.rejected,
          magnificationCountDishBasket.rejected,
          reductionCountDishBasket.rejected,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
