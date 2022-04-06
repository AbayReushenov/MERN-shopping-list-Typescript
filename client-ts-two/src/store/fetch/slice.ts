import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ConnectionError } from "./model";

export interface FetchState {
    isLoading: boolean
    connectionError: ConnectionError | null
}

const initialState: FetchState = {
    isLoading: false,
    connectionError: null
};

const fetchSlice = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        fetchDataStart: state => {
            state.isLoading = true;
        },
        fetchDataFinish: state => {
            state.isLoading = false;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.connectionError = {
                title: "",
                text: action.payload
            }
        },
        setError: (state, action: PayloadAction<Error>) => {
            state.connectionError = {
                title: "Ошибка",
                text: action.payload.message || "Ошибка сервера"
            }
        },
        resetConnectionError: state => {
            state.connectionError = null;
        }
    }
});

export const { actions, reducer } = fetchSlice
