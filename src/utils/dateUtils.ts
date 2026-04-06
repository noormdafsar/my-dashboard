export const formatDateLabel = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
  });

export const getMonthKey = (dateString: string) =>
  new Date(dateString).toISOString().slice(0, 7);
