import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSearch, setFilter } from '../transactionsSlice';

const TransactionFilter = () => {
  const dispatch = useAppDispatch();
  const { search, filter } = useAppSelector((state) => state.transactions);

  return (
    <div className="flex gap-4 mb-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="border p-2 rounded w-full"
      />

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className="border p-2 rounded"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default TransactionFilter;