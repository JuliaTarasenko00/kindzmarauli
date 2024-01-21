import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants, clearToken, setToken } from '../requests';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

export const userSignup = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await $instants.post('auth/signup', user);
      setToken(data.token);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error(error.message, styleToastify);
      }
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

export const userSignin = createAsyncThunk(
  'user/signin',
  async (user, thunkAPI) => {
    try {
      const { data } = await $instants.post('auth/signin', user);
      setToken(data.token);
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

export const userCurrent = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    console.log('thunkAPI: ', thunkAPI);
    const state = thunkAPI.getState();
    console.log('state2: ', state);
    const token = state.auth.token;
    console.log('token: ', token);
    try {
      setToken(token);
      const { data } = await $instants.get('auth/current');
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error(error.message, styleToastify);
      }
      if (status === 404) {
        toast.error(error.message, styleToastify);
      }
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
      const { data } = await $instants.post('auth/signout');
      clearToken();
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error(error.message, styleToastify);
      }
      if (status === 404) {
        toast.error(error.message, styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
