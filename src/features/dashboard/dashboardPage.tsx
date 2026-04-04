import { useAppSelector } from '../../app/hooks';
import SummaryCard from './components/SummaryCard';
import BalanceChart from './components/BalanceChart';
import CategoryChart from './components/CategoryChart';
import {
  selectSummary,
  selectCategoryData,
  selectTransactions,
  selectChartData,
} from './dashboardSelectors';

const DashboardPage = () => {
  const summary = useAppSelector(selectSummary);
  const categoryData = useAppSelector(selectCategoryData);
  const transactions = useAppSelector(selectTransactions);
  const chartData = useAppSelector(selectChartData);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={summary.balance} />
        <SummaryCard title="Income" value={summary.income} />
        <SummaryCard title="Expenses" value={summary.expense} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BalanceChart data={chartData} />
        <CategoryChart data={categoryData} />
      </div>
    </div>
  );
};

export default DashboardPage;