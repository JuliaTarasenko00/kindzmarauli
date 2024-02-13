import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';
import { $instants } from '../requests';

export const getAllMenu = createAsyncThunk('all/menu', async (_, thunkAPI) => {
  try {
    const { data } = await $instants.get('dishes');
    return data;
  } catch (error) {
    const { status } = error.response;
    if (status === 500) {
      toast.error('Server error.', styleToastify);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

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

export const getSpecificsDishes = createAsyncThunk(
  'menu/specifics',
  async (name, thunkAPI) => {
    try {
      const { data } = await $instants.get(
        `dishes/specifics?specificsDish=${name}`,
      );
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
