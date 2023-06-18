import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { languageApi } from './api/languageApi'

export const store = configureStore({
  reducer: {
    [languageApi.reducerPath]: languageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(languageApi.middleware),
})

setupListeners(store.dispatch)