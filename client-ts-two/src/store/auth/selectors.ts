import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getAuth = (state: RootState) => state.auth;

export const selectAuth = createSelector(getAuth, auth => {
  return auth;
});
export const selectToken = createSelector(getAuth, auth => {
    return auth.token;
});
