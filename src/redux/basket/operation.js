import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants } from '../requests';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

export const getDishesBasket = createAsyncThunk(
  'basket/DishesInBasket',
  async (_, thunkAPI) => {
    try {
      const { data } = $instants.get('baskets');
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error(error.message, styleToastify);
      }
      if (status === 404) {
        toast.error(error.message, styleToastify);
      }
      if (status === 409) {
        toast.error(error.message, styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
