import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addBasketDish,
  deleteBasketDish,
  clearBasket,
  minusBasketDish,
} from './operationNotAuth';
import {
  addDishBasketAuth,
  clearAllDishAuth,
  deleteDishAuth,
  getDishesBasketAuth,
  magnificationCountDishBasket,
  reductionCountDishBasket,
} from './operation';

const initialState = {
  basketDishes: [],
  totalPrice: 0,
  idBasket: '',
  isLoading: false,
  error: null,
};

const totalSum = (state) => {
  return state.reduce((sum, obj) => {
    return obj.total + sum;
  }, 0);
};

const basketState = (state, { payload }) => {
  state.basketDishes = payload.goods.dishes;
  state.totalPrice = payload.goods.totalPriceDishes;
  state.idBasket = payload._id;
  state.isLoading = false;
  state.error = null;
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
        state.basketDishes = payload.goods?.dishes ?? [];
        state.totalPrice = payload.goods?.totalPriceDishes ?? 0;
        state.idBasket = payload._id;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDishBasketAuth.fulfilled, basketState)
      .addCase(magnificationCountDishBasket.fulfilled, basketState)
      .addCase(reductionCountDishBasket.fulfilled, basketState)
      .addCase(deleteDishAuth.fulfilled, basketState)
      .addCase(clearAllDishAuth.fulfilled, (state) => {
        state.basketDishes = [];
        state.totalPrice = 0;
        state.idBasket = '';
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
