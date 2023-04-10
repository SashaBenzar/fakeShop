import { productsApi } from './Slice/productsSlice';
import sortReducer from './Slice/sortSlice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
