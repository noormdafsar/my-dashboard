import { useAppSelector } from '../../app/hooks';
import TransactionTable from './components/TransactionTable';
import TransactionFilter from './components/TransactionFilter';
import TransactionForm from './components/TransactionForm';
import { selectFilteredTransactions } from './transactionsSelectors';
import { useAppSelector as useSelector } from '../../app/hooks';

const TransactionsPage = () => {
  const transactions = useAppSelector(selectFilteredTransactions);
  const role = useSelector((state) => state.auth.role);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      <TransactionFilter />

      {role === 'admin' && <TransactionForm />}

      <TransactionTable data={transactions} />
    </div>
  );
};

export default TransactionsPage;