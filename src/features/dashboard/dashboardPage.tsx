import { useAppSelector } from '../../app/hooks';
import BalanceChart from './components/BalanceChart';
import CategoryChart from './components/CategoryChart';
import { formatCurrency } from '../../utils/formatCurrency';
import {
  selectSummary,
  selectCategoryData,
  selectChartData,
} from './dashboardSelectors';

const DashboardPage = () => {
  const summary = useAppSelector(selectSummary);
  const categoryData = useAppSelector(selectCategoryData);
  const chartData = useAppSelector(selectChartData);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[color:var(--surface)] p-6 shadow-xl ring-1 ring-[color:var(--ring)]">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Dashboard overview
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--text)]">
              Your financial pulse
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-3xl bg-[color:var(--surface-alt)] p-4 text-[color:var(--text)] ring-1 ring-[color:var(--ring)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Net balance</p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--text)]">{formatCurrency(summary.balance)}</p>
            </div>
            <div className="rounded-3xl bg-[color:var(--surface-alt)] p-4 text-[color:var(--text)] ring-1 ring-[color:var(--ring)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Income</p>
              <p className="mt-2 text-xl font-semibold text-emerald-500">{formatCurrency(summary.income)}</p>
            </div>
            <div className="rounded-3xl bg-[color:var(--surface-alt)] p-4 text-[color:var(--text)] ring-1 ring-[color:var(--ring)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Expenses</p>
              <p className="mt-2 text-xl font-semibold text-rose-500">{formatCurrency(summary.expense)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <BalanceChart data={chartData} />
        <CategoryChart data={categoryData} />
      </div>
    </div>
  );
};

export default DashboardPage;