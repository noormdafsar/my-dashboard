type Props = {
  data: any[];
};

const TransactionTable = ({ data }: Props) => {
  // ✅ EMPTY STATE CHECK (place here)
  if (!data.length) {
    return (
      <div className="bg-white p-6 text-center rounded shadow">
        <p className="text-gray-500">No transactions found</p>
      </div>
    );
  }

  // ✅ Normal table render
  return (
    <table className="w-full bg-white dark:bg-gray-800 shadow rounded">
      <thead>
        <tr className="text-left dark:text-gray-400 text-gray-500 border-b">
          <th className="p-3">Date</th>
          <th className="p-3">Amount</th>
          <th className="p-3">Category</th>
          <th className="p-3">Type</th>
        </tr>
      </thead>

      <tbody>
        {data.map((tx) => (
          <tr key={tx.id} className="border-b dark:border-gray-700">
            <td className="p-3">{tx.date}</td>
            <td className="p-3">{tx.amount}</td>
            <td className="p-3">{tx.category}</td>
            <td className="p-3">{tx.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;