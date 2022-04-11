import { combineReducers } from "@reduxjs/toolkit";

import { reducer as error } from "./error/error";
import { reducer as auth } from "./auth/auth";
import { reducer as items } from "./items/items";

export const rootReducer = combineReducers({
    error,
    auth,
    items
});
