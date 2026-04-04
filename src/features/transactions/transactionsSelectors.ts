import { RootState } from '../../app/store';

export const selectFilteredTransactions = (state: RootState) => {
  const { list, search, filter } = state.transactions;

  return list.filter((tx) => {
    const matchesSearch =
      tx.category.toLowerCase().includes(search.toLowerCase()) ||
      tx.type.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === 'all' || tx.type === filter;

    return matchesSearch && matchesFilter;
  });
};