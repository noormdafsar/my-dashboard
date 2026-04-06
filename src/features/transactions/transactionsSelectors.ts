import type { RootState } from '../../app/store';
import type { Transaction } from './transactionsSlice';

export const selectFilteredTransactions = (state: RootState) => {
  const { list, search, filter, sortBy } = state.transactions;

  const filtered = list.filter((tx: Transaction) => {
    const matchesSearch =
      tx.category.toLowerCase().includes(search.toLowerCase()) ||
      tx.type.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === 'all' || tx.type === filter;
    return matchesSearch && matchesFilter;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'latest') {
      return b.date.localeCompare(a.date);
    }
    if (sortBy === 'oldest') {
      return a.date.localeCompare(b.date);
    }
    if (sortBy === 'amountHigh') {
      return b.amount - a.amount;
    }
    return a.amount - b.amount;
  });

  return sorted;
};