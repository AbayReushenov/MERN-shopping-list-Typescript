import { combineReducers } from "@reduxjs/toolkit";

import { reducer as error } from "./error/error";
import { reducer as auth} from "./auth/authSlice";
import { reducer as items } from "./items/items";

export const rootReducer = combineReducers({
    error,
    auth,
    items
});
