import { combineReducers } from "@reduxjs/toolkit";

import { reducer as error } from "./error/error";
import { reducer as auth } from "./auth/auth";

export const rootReducer = combineReducers({
    error,
    auth
});
