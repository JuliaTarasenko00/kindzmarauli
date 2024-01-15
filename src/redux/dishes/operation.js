import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

const $instants = axios.create({
  baseURL: 'https://kindzmarauli-backend.onrender.com',
});

export const getMenuPopular = createAsyncThunk(
  'menu/getPopular',
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

export const getAllMenu = createAsyncThunk(
  'menu/AllMenu',
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
