import { RootState } from '../../app/store';

export const selectInsights = (state: RootState) => {
  const transactions = state.transactions.list;

  let maxCategory = '';
  let maxAmount = 0;

  const categoryMap: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (tx.type === 'expense') {
      categoryMap[tx.category] =
        (categoryMap[tx.category] || 0) + tx.amount;
    }
  });

  Object.entries(categoryMap).forEach(([category, amount]) => {
    if (amount > maxAmount) {
      maxAmount = amount;
      maxCategory = category;
    }
  });

  return {
    highestSpendingCategory: maxCategory,
    highestSpendingAmount: maxAmount,
  };
};