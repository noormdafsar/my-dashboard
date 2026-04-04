import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addTransaction } from '../transactionsSlice';

const TransactionForm = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    amount: '',
    category: '',
    type: 'expense',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      addTransaction({
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        amount: Number(form.amount),
        category: form.category,
        type: form.type as 'income' | 'expense',
      })
    );

    setForm({ amount: '', category: '', type: 'expense' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4 flex gap-4"
    >
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
        className="border p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
        className="border p-2 rounded"
        required
      />

      <select
        value={form.type}
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
        className="border p-2 rounded"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
};

export default TransactionForm;