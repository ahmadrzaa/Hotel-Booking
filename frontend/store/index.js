/**
 * @name Hotel Booking System
 * @author Ahmad Raza (Raza)
 * @description Hotel Booking and Management System Software ~ Developed By A Raza
 * @copyright ©2024 ― Ahmad Raza . All rights reserved.
 * @version v0.0.1
 *
 */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import thunk from 'redux-thunk';
import appSlices from './slices/appSlice';

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  }
});

const storage = typeof window !== 'undefined'
  ? createWebStorage('local')
  : createNoopStorage();

const rootReducer = combineReducers({
  app: appSlices
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [] // only that's reducer will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
