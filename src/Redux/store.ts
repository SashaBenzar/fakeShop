import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sortReducer from './Slice/sortSlice';
import basketReducer from './Slice/basketSlice';
import { productsApi } from './Slice/productsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket'],
};

const rootReducer = combineReducers({
  sort: sortReducer,
  basket: basketReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [productsApi.middleware, thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
