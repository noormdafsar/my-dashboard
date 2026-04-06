import { useAppSelector } from '../../app/hooks';
import TransactionTable from './components/TransactionTable';
import TransactionFilter from './components/TransactionFilter';
import TransactionForm from './components/TransactionForm';
import { selectFilteredTransactions } from './transactionsSelectors';

const TransactionsPage = () => {
  const transactions = useAppSelector(selectFilteredTransactions);
  const role = useAppSelector((state) => state.auth.role);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[color:var(--surface)] p-6 shadow-xl ring-1 ring-[color:var(--ring)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Transaction center
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--text)]">Recent activity</h2>
          </div>
          <p className="rounded-2xl bg-[color:var(--surface-alt)] px-4 py-3 text-sm text-[color:var(--muted)] ring-1 ring-[color:var(--ring)]">
            {role === 'admin'
              ? 'Admin can add and manage transactions.'
              : 'Viewer mode: browsing only.'}
          </p>
        </div>
      </div>

      <TransactionFilter />

      {role === 'admin' ? (
        <TransactionForm />
      ) : (
        <div className="rounded-3xl bg-[color:var(--surface)] p-5 text-[color:var(--muted)] shadow-xl ring-1 ring-[color:var(--ring)]">
          <p className="text-sm text-[color:var(--muted)]">
            Switch to <span className="font-semibold text-[color:var(--text)]">Admin</span> to add or update transactions.
          </p>
        </div>
      )}

      <TransactionTable data={transactions} />
    </div>
  );
};

export default TransactionsPage;