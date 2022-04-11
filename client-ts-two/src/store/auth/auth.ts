import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, DataFromServer } from '../../api/auth';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

const resetState: AuthState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fillAuthUser: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    reset: (state) => {
      localStorage.removeItem('token');
      state = resetState;
    },
    fillUser: (state, action: PayloadAction<DataFromServer>) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload.user;
    },
  },
});

export const { actions, reducer } = auth;
