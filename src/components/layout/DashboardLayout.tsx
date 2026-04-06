import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const DashboardLayout = ({ theme, toggleTheme }: Props) => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="p-6 bg-slate-50 flex-1 overflow-auto transition-colors duration-300 dark:bg-slate-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;