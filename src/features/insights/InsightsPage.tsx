import { useAppSelector } from '../../app/hooks';
import { selectInsights } from './insightsSelectors';
import InsightsCard from './components/InsightsCard';

const InsightsPage = () => {
  const insights = useAppSelector(selectInsights);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InsightsCard
        title="Highest Spending Category"
        value={insights.highestSpendingCategory}
      />

      <InsightsCard
        title="Amount"
        value={`₹ ${insights.highestSpendingAmount}`}
      />
    </div>
  );
};

export default InsightsPage;