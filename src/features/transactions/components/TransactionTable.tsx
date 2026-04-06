type Props = {
  data: any[];
};

const TransactionTable = ({ data }: Props) => {
  if (!data.length) {
    return (
      <div className="rounded-3xl bg-[color:var(--surface)] p-8 text-center shadow-xl ring-1 ring-[color:var(--ring)]">
        <p className="text-[color:var(--muted)]">No transactions found. Try updating the search or filter.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-[color:var(--surface)] shadow-xl ring-1 ring-[color:var(--ring)]">
      <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
        <thead className="bg-[color:var(--surface-alt)] text-[color:var(--muted)]">
          <tr>
            <th className="p-4">Date</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Category</th>
            <th className="p-4">Type</th>
          </tr>
        </thead>

        <tbody>
          {data.map((tx) => (
            <tr key={tx.id} className="border-b border-[color:var(--card-border)] last:border-none hover:bg-[color:var(--surface-alt)]">
              <td className="p-4 text-[color:var(--text)]">{tx.date}</td>
              <td className="p-4 text-[color:var(--text)]">₹ {tx.amount.toLocaleString('en-IN')}</td>
              <td className="p-4 text-[color:var(--text)]">{tx.category}</td>
              <td className="p-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    tx.type === 'income'
                      ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-200'
                      : 'bg-rose-500/20 text-rose-700 dark:text-rose-200'
                  }`}
                >
                  {tx.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;