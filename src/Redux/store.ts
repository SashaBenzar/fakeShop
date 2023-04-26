import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './Slice/sortSlice';
import basketReducer from './Slice/basketSlice';
import { productsApi } from './Slice/productsSlice';

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    basket: basketReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
