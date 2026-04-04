import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '../features/dashboard/dashboardPage';
import TransactionsPage from '../features/transactions/TransactionsPage';
import InsightsPage from '../features/insights/InsightsPage';
import DashboardLayout from '../components/layout/DashboardLayout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;