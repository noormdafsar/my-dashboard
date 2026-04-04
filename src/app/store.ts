const loadState = () => {
  try {
    const data = localStorage.getItem('appState');
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    localStorage.setItem('appState', JSON.stringify(state));
  } catch {}
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    dashboard: dashboardReducer,
    insights: insightsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    transactions: store.getState().transactions,
    auth: store.getState().auth,
  });
});