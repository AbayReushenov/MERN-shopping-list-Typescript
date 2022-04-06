import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";

const createdSagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ serializableCheck: false }).concat(createdSagaMiddleware);
    },
    devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;

createdSagaMiddleware.run(rootSaga);
