import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, DataFromServer } from '../../api/auth';

export interface AuthState {
  token?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') ?? undefined,
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
};

const resetState: AuthState = {
  token: undefined,
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<User>) => {
      if (action.payload) {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
      }
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

export const { actions, reducer } = authSlice;
