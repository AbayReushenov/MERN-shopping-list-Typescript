import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthintificated } from '../../api/auth';
import { DataRegistered } from '../../api/users';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: UserAuthintificated | null;
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
    fillUserAuthintificated: (
      state,
      action: PayloadAction<UserAuthintificated>
    ) => {
      if (action.payload) {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
      }
    },
    reset: (state) => {
      state = resetState;
    },
    fillRegisteredUser: (state, action: PayloadAction<DataRegistered>) => {
      if (action.payload) {
        localStorage.setItem('token', action.payload.token);
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user;
      }
    },
  },
});

export const { actions, reducer } = auth;
