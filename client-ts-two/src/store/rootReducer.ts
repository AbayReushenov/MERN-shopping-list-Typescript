import { combineReducers } from "@reduxjs/toolkit";

import { reducer as fetch } from "./fetch/slice";
import { reducer as auth } from "./auth/auth";

export const rootReducer = combineReducers({
    fetch,
    auth
});
