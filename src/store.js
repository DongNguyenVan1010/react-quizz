import { configureStore } from '@reduxjs/toolkit';

// reducers
import settingsSlice from './states/setting.slice';

export const store = configureStore({
  reducer: {
    setting: settingsSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
})