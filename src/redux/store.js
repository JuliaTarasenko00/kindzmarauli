import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';
import { dishesSlice } from './dishes/slice';
import { filterSlice } from './filter/slice';
import { basketSlice } from './basket/slice';

const persistConfig = {
  key: 'basket',
  storage,
};

export const store = configureStore({
  reducer: {
    dishes: dishesSlice.reducer,
    filter: filterSlice.reducer,
    basket: persistReducer(persistConfig, basketSlice.reducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
