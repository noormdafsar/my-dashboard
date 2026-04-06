import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import useTheme from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <BrowserRouter>
        <AppRoutes theme={theme} toggleTheme={toggleTheme} />
      </BrowserRouter>
    </div>
  )
}

export default App
