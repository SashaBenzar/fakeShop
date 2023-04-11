import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Sort } from '../types';

const initialState: Sort = {
  category: '',
  sort: 'asc',
  search: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearch } = sortSlice.actions;
export default sortSlice.reducer;
