import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3 transition-colors ${
      isActive
        ? 'bg-slate-900 text-white shadow-lg'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
    }`;

  return (
    <aside className="hidden w-72 flex-col gap-6 bg-slate-100 px-6 py-8 text-slate-900 shadow-xl dark:bg-slate-900 dark:text-slate-200 md:flex">
      <div className="space-y-2">
        <div className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
          Zoryvn Finance
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Smart insights, clearer spending.
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClass} end>
          Dashboard
        </NavLink>
        <NavLink to="/transactions" className={linkClass}>
          Transactions
        </NavLink>
        <NavLink to="/insights" className={linkClass}>
          Insights
        </NavLink>
      </nav>

      <div className="mt-auto rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
        <p className="font-semibold text-slate-950 dark:text-white">Zorvyn Dashboard</p>
        <p className="mt-2 text-xs">
          Zorvyn dashboard to manage finances with responsive panels and clean typography.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;