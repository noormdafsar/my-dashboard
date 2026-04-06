import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice';
import { transactionsReducer } from '../features/transactions/transactionsSlice';
import { dashboardReducer } from '../features/dashboard/dashboardSlice';
import { insightsReducer } from '../features/insights/insightsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    dashboard: dashboardReducer,
    insights: insightsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;