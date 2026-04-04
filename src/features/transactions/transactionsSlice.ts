import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
}

const initialState: TransactionsState = {
  list: mockData,
  search: '',
  filter: 'all',
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
  },
});

export const { addTransaction, setSearch, setFilter } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;