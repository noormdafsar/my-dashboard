import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

type Props = {
  data: any[];
};

const COLORS = ['#38bdf8', '#22c55e', '#f59e0b', '#fb7185', '#8b5cf6'];

const CategoryChart = ({ data }: Props) => {
  return (
    <div className="rounded-3xl bg-[color:var(--surface)] p-6 shadow-xl ring-1 ring-[color:var(--ring)] h-80">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[color:var(--text)]">Spending Breakdown</h3>
        <span className="rounded-full bg-[color:var(--surface-alt)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Category share
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} innerRadius={60} paddingAngle={4}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg)',
              border: '1px solid var(--tooltip-border)',
              color: 'var(--tooltip-text)',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;