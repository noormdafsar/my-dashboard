import type { RootState } from '../../app/store';

export const selectTransactions = (state: RootState) =>
  state.transactions.list;

export const selectSummary = (state: RootState) => {
  const transactions = state.transactions.list;

  let income = 0;
  let expense = 0;

  transactions.forEach((tx) => {
    if (tx.type === 'income') income += tx.amount;
    else expense += tx.amount;
  });

  return {
    income,
    expense,
    balance: income - expense,
  };
};

export const selectChartData = (state: RootState) => {
  const transactions = state.transactions.list;

  const map: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (!map[tx.date]) map[tx.date] = 0;

    map[tx.date] += tx.type === 'income' ? tx.amount : -tx.amount;
  });

  return Object.keys(map).map((date) => ({
    date,
    amount: map[date],
  }));
};

export const selectCategoryData = (state: RootState) => {
  const transactions = state.transactions.list;

  const map: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (tx.type === 'expense') {
      if (!map[tx.category]) map[tx.category] = 0;
      map[tx.category] += tx.amount;
    }
  });

  return Object.keys(map).map((category) => ({
    name: category,
    value: map[category],
  }));
};