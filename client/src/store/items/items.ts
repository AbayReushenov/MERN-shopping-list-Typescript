import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, ItemId } from '../../api/items';


export interface ItemsState {
  items: Item[];
  isLoading: boolean;
}

const initialState: ItemsState = {
  items: [],
  isLoading: false,
};

const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fillItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },
    deleteItem: (state, action: PayloadAction<ItemId>) => {
      state.items = [...state.items].filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { actions, reducer } = items;
