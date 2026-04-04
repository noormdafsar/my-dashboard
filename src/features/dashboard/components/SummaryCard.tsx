type Props = {
    title: string;
    value: number;
};

const SummaryCard = ({ title, value }: Props) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm">{title}</h3>
            <p className="text-xl font-bold mt-2">₹ {value}</p>
        </div>
    );
};

export default SummaryCard;