import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants, clearToken, setToken } from '../requests';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

export const userSignup = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await $instants.post('/auth/signup', user);
      setToken(data.token);
      return data;
    } catch (error) {
      const { status, data } = error.response;
      if (status === 400) {
        toast.error('Bad request', styleToastify);
      }
      if (status === 401) {
        toast.error('Unauthorized', styleToastify);
      }
      if (status === 404) {
        toast.error('Not Found', styleToastify);
      }
      if (status === 409) {
        toast.error(data.message, styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const userSignin = createAsyncThunk(
  'user/signin',
  async (user, thunkAPI) => {
    try {
      const { data } = await $instants.post('/auth/signin', user);
      setToken(data.token);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error('Password or Email invalid', styleToastify);
      }
      if (status === 404) {
        toast.error('Not Found', styleToastify);
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

export const userCurrent = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const { data } = await $instants.get('/auth/current');
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

export const userLogOut = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instants.post('/auth/signout');
      clearToken();
      return data;
    } catch (error) {
      const { status } = error.response;
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
