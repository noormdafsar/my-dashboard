import { PieChart, Pie, Tooltip, Cell } from 'recharts';

type Props = {
  data: any[];
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CategoryChart = ({ data }: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow h-80">
      <h3 className="mb-4 font-semibold">Spending Breakdown</h3>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CategoryChart;