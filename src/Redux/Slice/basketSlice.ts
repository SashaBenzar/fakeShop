import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Basket, Item } from '../types';

const initialState: Basket = {
  totalPrice: 0,
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const repeatItem = state.items.find((item) => item.id === action.payload.id);
      if (repeatItem) {
        repeatItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    deleteAll: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    plusItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.count < 99) item.count++;
      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    minusItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.count > 1) item.count--;
      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
  },
});

export const { addItem, deleteItem, deleteAll, plusItem, minusItem } = basketSlice.actions;
export default basketSlice.reducer;
