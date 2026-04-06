import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../features/dashboard/dashboardPage';
import TransactionsPage from '../features/transactions/TransactionsPage';
import InsightsPage from '../features/insights/InsightsPage';
import DashboardLayout from '../components/layout/DashboardLayout';

type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const AppRoutes = ({ theme, toggleTheme }: Props) => {
  return (
    <Routes>
      <Route element={<DashboardLayout theme={theme} toggleTheme={toggleTheme} />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;