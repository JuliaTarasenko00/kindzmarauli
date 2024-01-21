import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';
import { $instants } from '../requests';

export const getMenuPopular = createAsyncThunk(
  'menu/PopularDishes',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instants.get('dishes?page=1&limit=12');
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const searchDishes = createAsyncThunk(
  'search/dishes',
  async (text, thunkAPI) => {
    try {
      const { data } = await $instants.get(`dishes?name=${text}`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getAllMenu = createAsyncThunk(
  'menu/AllDishes',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instants.get('/dishes');
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
