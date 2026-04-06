import type { RootState } from '../../app/store';

const getMonthKey = (dateString: string) =>
  new Date(dateString).toISOString().slice(0, 7);

export const selectInsights = (state: RootState) => {
  const transactions = state.transactions.list;

  const categoryMap: Record<string, number> = {};
  let totalIncome = 0;
  let totalExpense = 0;
  let highestSpendingCategory = '';
  let highestSpendingAmount = 0;

  const monthTotals: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (tx.type === 'income') {
      totalIncome += tx.amount;
    } else {
      totalExpense += tx.amount;
      categoryMap[tx.category] =
        (categoryMap[tx.category] || 0) + tx.amount;
    }

    const monthKey = getMonthKey(tx.date);
    monthTotals[monthKey] = (monthTotals[monthKey] || 0) +
      (tx.type === 'income' ? tx.amount : -tx.amount);
  });

  Object.entries(categoryMap).forEach(([category, amount]) => {
    if (amount > highestSpendingAmount) {
      highestSpendingAmount = amount;
      highestSpendingCategory = category;
    }
  });

  const months = Object.keys(monthTotals).sort();
  const latest = months[months.length - 1] || '';
  const previous = months[months.length - 2] || '';

  const latestTotal = latest ? monthTotals[latest] : 0;
  const previousTotal = previous ? monthTotals[previous] : 0;
  const monthlyComparison = previousTotal
    ? Math.round(((latestTotal - previousTotal) / Math.abs(previousTotal)) * 100)
    : 0;

  return {
    highestSpendingCategory,
    highestSpendingAmount,
    totalIncome,
    totalExpense,
    transactionCount: transactions.length,
    monthlyComparison,
    latestMonth: latest,
  };
};