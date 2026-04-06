import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const insightsSlice = createSlice({
  name: 'insights',
  initialState,
  reducers: {},
});

export const insightsReducer = insightsSlice.reducer;
