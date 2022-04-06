import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthintificated } from '../../api/user';

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
        state.user = action.payload;
      }
    },
    reset: (state) => {
      state = resetState;
    },
  },
});

export const { actions, reducer } = auth;
