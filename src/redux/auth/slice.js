import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userSignup } from './operation';

const initialState = {
  token: '',
  user: {},
  isLoading: false,
  error: null,
  authentication: false,
};

export const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(userSignup.fulfilled, (state, { payload }) => {
        console.log('payload: ', payload);
        state.isLoading = false;
        state.authentication = true;
        state.user = payload;
        state.token = payload.token;
        state.error = null;
      })
      .addMatcher(isAnyOf(userSignup.pending), (state) => {
        state.isLoading = true;
        state.authentication = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(userSignup.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.authentication = false;
        state.error = payload;
      }),
});
