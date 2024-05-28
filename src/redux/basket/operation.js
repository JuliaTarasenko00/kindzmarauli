import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants } from '../requests';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

export const getDishesBasketAuth = createAsyncThunk(
  'basket/allDishesInBasket',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instants.get('/baskets');
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error('Unauthorized', styleToastify);
      }
      if (status === 404) {
        toast.error('You do not have rights to make changes', styleToastify);
      }
      if (status === 409) {
        toast.error('Password or Email invalid', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addDishBasketAuth = createAsyncThunk(
  'addDishBasket',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instants.post(`/baskets/addToBasket/${id}`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error('Unauthorized', styleToastify);
      }
      if (status === 404) {
        toast.error('You do not have rights to make changes', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const magnificationCountDishBasket = createAsyncThunk(
  'basket/magnificationCount',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instants.put(`/baskets/magnification/${id}`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error('Bad request', styleToastify);
      }
      if (status === 401) {
        toast.error('Unauthorized', styleToastify);
      }
      if (status === 404) {
        toast.error('Not Found', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const reductionCountDishBasket = createAsyncThunk(
  'basket/reductionCount',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instants.put(`/baskets/reduction/${id}`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error('Bad request', styleToastify);
      }
      if (status === 401) {
        toast.error('Unauthorized', styleToastify);
      }
      if (status === 404) {
        toast.error('Not Found', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteDishAuth = createAsyncThunk(
  'basket/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instants.delete(`/baskets/delete/dish/${id}`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error('Bad request', styleToastify);
      }
      if (status === 401) {
        toast.error('Unauthorized', styleToastify);
      }
      if (status === 404) {
        toast.error('Not Found', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const clearAllDishAuth = createAsyncThunk(
  'basket/clear',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instants.delete(`/baskets/clear/${id}`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error('Bad request', styleToastify);
      }
      if (status === 401) {
        toast.error('Unauthorized', styleToastify);
      }
      if (status === 404) {
        toast.error('Not Found', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
