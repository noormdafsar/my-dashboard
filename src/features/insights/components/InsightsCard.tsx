type Props = {
  title: string;
  value: string | number;
};

const InsightsCard = ({ title, value }: Props) => {
  return (
    <div className="rounded-3xl bg-[color:var(--surface)] p-6 shadow-xl ring-1 ring-[color:var(--ring)]">
      <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">{title}</p>
      <p className="mt-4 text-3xl font-semibold text-[color:var(--text)]">{value}</p>
    </div>
  );
};

export default InsightsCard;