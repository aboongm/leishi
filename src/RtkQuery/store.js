import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import api from './slices/apiSlice';
import authReducer from './slices/auth/authSlice';
import { authApi } from './slices/auth/authApi';
import { categorySlice } from './slices/product_catalog/categorySlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const rootReducers = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [categorySlice.reducerPath]: categorySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
