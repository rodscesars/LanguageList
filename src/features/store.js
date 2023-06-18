import { configureStore } from '@reduxjs/toolkit';
import resourcesReducer from './resources/resourcesSlice';

export const store = configureStore({
  reducer: {
    resources: resourcesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
