import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';
import { $instants } from '../requests';

export const getMenu = createAsyncThunk(
  'popular/dishes',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await $instants.get(
        `dishes?page=${page}&limit=${limit}`,
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

export const getSpecificsDishes = createAsyncThunk(
  'specifics/dishes',
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

export const getDishId = createAsyncThunk('id/dishes', async (id, thunkAPI) => {
  try {
    const { data } = await $instants.get(`/dishes/${id}`);
    return data;
  } catch (error) {
    const { status } = error.response;
    if (status === 500) {
      toast.error('Server error.', styleToastify);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changeDataDish = createAsyncThunk(
  'change/dish',
  async (data, thunkAPI) => {
    const { id, newData } = data;
    try {
      const { data } = await $instants.put(`/dishes/${id}`, newData);
      return data;
    } catch (error) {
      const { status, data } = error.response;
      if (status === 404) {
        toast.error(data.message, styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteDish = createAsyncThunk(
  'delete/dish',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instants.delete(`/dishes/${id}`);
      return data._id;
    } catch (error) {
      const { status, data } = error.response;
      if (status === 404) {
        toast.error(data.message, styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
