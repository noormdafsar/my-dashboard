import { useAppSelector } from '../../app/hooks';
import { selectInsights } from './insightsSelectors';
import InsightsCard from './components/InsightsCard';
import { formatCurrency } from '../../utils/formatCurrency';

const InsightsPage = () => {
  const insights = useAppSelector(selectInsights);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[color:var(--surface)] p-6 shadow-xl ring-1 ring-[color:var(--ring)]">
        <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Insights snapshot
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text)]">
          What your data is telling you
        </h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <InsightsCard
          title="Highest spending category"
          value={insights.highestSpendingCategory || 'No data'}
        />
        <InsightsCard
          title="Spending amount"
          value={formatCurrency(insights.highestSpendingAmount)}
        />
        <InsightsCard
          title="Transactions"
          value={insights.transactionCount}
        />
        <InsightsCard
          title="Total income"
          value={formatCurrency(insights.totalIncome)}
        />
        <InsightsCard
          title="Total expense"
          value={formatCurrency(insights.totalExpense)}
        />
        <InsightsCard
          title="Monthly change"
          value={`${insights.monthlyComparison}%`}
        />
      </div>
    </div>
  );
};

export default InsightsPage;