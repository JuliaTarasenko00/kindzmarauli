import { createAsyncThunk } from '@reduxjs/toolkit';
import { dishPricing } from '../../helpers/hooks/dishPricing';

export const addBasketDish = createAsyncThunk(
  'basket/addBasketDishNotAuth',
  (payload) => {
    const { finalPrice } = dishPricing(payload);
    return { ...payload, finalPrice };
  },
);

export const deleteBasketDish = createAsyncThunk(
  'basket/deleteBasketDish',
  (payload) => {
    return payload;
  },
);

export const clearBasket = createAsyncThunk('/clearBasket', (payload) => {
  return payload;
});

export const minusBasketDish = createAsyncThunk(
  'basket/minusBasketDish',
  (payload) => {
    return payload;
  },
);
