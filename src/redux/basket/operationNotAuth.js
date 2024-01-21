import { createAsyncThunk } from '@reduxjs/toolkit';
import { dishPricing } from '../../helpers/hooks/dishPricing';

export const addBasketDish = createAsyncThunk(
  'bas/addBasketDishNotAuth',
  (payload) => {
    const { finalPrice } = dishPricing(payload);
    return { ...payload, finalPrice };
  },
);

export const deleteBasketDish = createAsyncThunk(
  '/deleteBasketDish',
  (payload) => {
    return payload;
  },
);

export const clearBasket = createAsyncThunk('/clearBasket', (payload) => {
  return payload;
});

export const minusBasketDish = createAsyncThunk(
  '/minusBasketDish',
  (payload) => {
    return payload;
  },
);
