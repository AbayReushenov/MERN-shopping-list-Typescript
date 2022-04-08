import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMsg {
  msg: string | any;
}

export interface ErrorState {
  msg: IMsg;
  status: string | null;
  id: string | null;
}

const initialState: ErrorState = {
  msg: {msg: null},
  status: null,
  id: null,
};

const error = createSlice({
  name: 'error',
  initialState,
  reducers: {
    returnErrors: (state, action: PayloadAction<ErrorState>) => {
      state = {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    },

    /*     fetchDataStart: (state) => {
      state.isLoading = true;
    },
    fetchDataFinish: (state) => {
      state.isLoading = false;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.connectionError = {
        title: '',
        text: action.payload,
      };
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.connectionError = {
        title: 'Ошибка',
        text: action.payload.message || 'Ошибка сервера',
      };
    },
    resetConnectionError: (state) => {
      state.connectionError = null;
    }, */
  },
});

export const { actions, reducer } = error;
