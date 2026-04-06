import { formatCurrency } from '../../../utils/formatCurrency';

type Props = {
  title: string;
  value: number;
};

const SummaryCard = ({ title, value }: Props) => {
  return (
    <div className="rounded-3xl bg-slate-900 p-6 shadow-xl ring-1 ring-slate-800">
      <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">{title}</h3>
      <p className="mt-4 text-3xl font-semibold text-white">{formatCurrency(value)}</p>
    </div>
  );
};

export default SummaryCard;