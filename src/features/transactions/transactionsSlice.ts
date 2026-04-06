import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { transactions as mockData } from '../../services/mockData';

export type Transaction = {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
};

interface TransactionsState {
  list: Transaction[];
  search: string;
  filter: string;
  sortBy: 'latest' | 'oldest' | 'amountHigh' | 'amountLow';
}

const initialState: TransactionsState = {
  list: mockData,
  search: '',
  filter: 'all',
  sortBy: 'latest',
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.list.unshift(action.payload); // newest on top
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setSortBy: (
      state,
      action: PayloadAction<TransactionsState['sortBy']>
    ) => {
      state.sortBy = action.payload;
    },
  },
});

export const { addTransaction, setSearch, setFilter, setSortBy } =
  transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
export default transactionsSlice.reducer;