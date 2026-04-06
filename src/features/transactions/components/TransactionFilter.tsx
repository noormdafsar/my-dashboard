import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSearch, setFilter, setSortBy } from '../transactionsSlice';

const TransactionFilter = () => {
  const dispatch = useAppDispatch();
  const { search, filter, sortBy } = useAppSelector((state) => state.transactions);

  return (
    <div className="grid gap-4 rounded-3xl bg-[color:var(--surface)] p-4 shadow-xl ring-1 ring-[color:var(--ring)] md:grid-cols-3">
      <input
        type="text"
        placeholder="Search category or type"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--surface-alt)] p-3 text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
      />

      <select
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className="rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--surface-alt)] p-3 text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
      >
        <option value="all">All transactions</option>
        <option value="income">Income only</option>
        <option value="expense">Expenses only</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value as any))}
        className="rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--surface-alt)] p-3 text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
      >
        <option value="latest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="amountHigh">Amount high → low</option>
        <option value="amountLow">Amount low → high</option>
      </select>
    </div>
  );
};

export default TransactionFilter;