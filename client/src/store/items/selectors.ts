import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getItems = (state: RootState) => state.items;

export const selectItems = createSelector(getItems, items => {
  return items.items;
});
