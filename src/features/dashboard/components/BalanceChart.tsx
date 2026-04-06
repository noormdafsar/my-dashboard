import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { formatDateLabel } from '../../../utils/dateUtils';

type Props = {
  data: any[];
};

const BalanceChart = ({ data }: Props) => {
  return (
    <div className="rounded-3xl bg-[color:var(--surface)] p-6 shadow-xl ring-1 ring-[color:var(--ring)] h-80">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[color:var(--text)]">Balance Trend</h3>
        <span className="rounded-full bg-[color:var(--surface-alt)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Weekly outlook
        </span>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tickFormatter={formatDateLabel}
            stroke="var(--muted)"
            tick={{ fill: 'var(--muted)', fontSize: 12 }}
          />
          <YAxis stroke="var(--muted)" tick={{ fill: 'var(--muted)', fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg)',
              border: '1px solid var(--tooltip-border)',
              color: 'var(--tooltip-text)',
            }}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#38bdf8"
            strokeWidth={3}
            dot={{ fill: '#38bdf8' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;