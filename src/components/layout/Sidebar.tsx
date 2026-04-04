import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Finance Dashboard</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/">Dashboard</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/insights">Insights</Link>
      </nav>
    </div>
  );
};

export default Sidebar;