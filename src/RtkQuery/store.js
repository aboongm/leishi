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
import basketReducer from './slices/cart/basketSlice';
import searchReducer from './slices/sorting/searchSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'basket', 'search'],
};

export const rootReducers = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [categorySlice.reducerPath]: categorySlice.reducer,
  basket: basketReducer,
  search: searchReducer,
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
