import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userCurrent, userLogOut, userSignin, userSignup } from './operation';

const initialState = {
  token: '',
  role: '',
  user: null,
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
        state.isLoading = false;
        state.authentication = true;
        state.user = payload;
        state.token = payload.token;
        state.role = payload.subscription;
        state.error = null;
      })
      .addCase(userSignin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authentication = true;
        state.user = payload;
        state.token = payload.token;
        state.role = payload.subscription;
        state.error = null;
      })
      .addCase(userCurrent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authentication = true;
        state.user = payload;
        state.role = payload.subscription;
        state.error = null;
      })
      .addCase(userLogOut.fulfilled, (state) => {
        state.isLoading = false;
        state.authentication = false;
        state.user = null;
        state.token = '';
        state.role = '';
        state.error = null;
      })
      .addCase(userCurrent.rejected, (state) => {
        if (state.error?.includes('401')) {
          state.token = '';
          state.role = '';
        }
      })
      .addMatcher(
        isAnyOf(
          userSignup.pending,
          userLogOut.pending,
          userSignin.pending,
          userCurrent.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.authentication = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          userSignup.rejected,
          userSignin.rejected,
          userLogOut.rejected,
          userCurrent.rejected,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.authentication = false;
          state.error = payload;
        },
      ),
});
