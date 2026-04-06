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
      className="grid gap-4 rounded-3xl bg-[color:var(--surface)] p-6 shadow-xl ring-1 ring-[color:var(--ring)]"
    >
      <div className="grid gap-4 md:grid-cols-4">
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--surface-alt)] p-3 text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--surface-alt)] p-3 text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
          required
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--surface-alt)] p-3 text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          type="submit"
          className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Add transaction
        </button>
      </div>
      <p className="text-sm text-[color:var(--muted)]">
        New transactions are immediately added to the list above.
      </p>
    </form>
  );
};

export default TransactionForm;