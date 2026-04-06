import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Role = 'viewer' | 'admin';

export interface AuthState {
  role: Role;
}

const initialState: AuthState = {
  role: 'viewer',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = authSlice.actions;
export const authReducer = authSlice.reducer;
