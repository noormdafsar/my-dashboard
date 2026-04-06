import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import RoleSwitcher from '../../features/auth/RoleSwitcher';

type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const Navbar = ({ theme, toggleTheme }: Props) => {
  const role = useAppSelector((state) => state.auth.role);

  return (
    <header className="border-b border-slate-200 bg-slate-50 px-6 py-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Finance platform
          </p>
          <h1 className="text-2xl font-semibold text-slate-950 dark:text-white">Welcome back</h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700">
            Role: {role === 'admin' ? 'Administrator' : 'Viewer'}
          </span>

          <button
            onClick={toggleTheme}
            className="rounded-2xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>

          <RoleSwitcher />
        </div>
      </div>

      <nav className="mt-4 flex flex-wrap gap-3 lg:hidden">
        <Link
          to="/"
          className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Dashboard
        </Link>
        <Link
          to="/transactions"
          className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Transactions
        </Link>
        <Link
          to="/insights"
          className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Insights
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;