import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getAuth = (state: RootState) => state.auth;

export const selectAuth = createSelector(getAuth, auth => {
  return auth;
});

export const selectToken = createSelector(selectAuth, auth => {
    return auth.token;
});

export const selectIsAuthenticated = createSelector(selectAuth, auth=>{
  return auth.isAuthenticated
})
