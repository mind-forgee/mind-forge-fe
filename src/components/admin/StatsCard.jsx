import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatsCard = ({ title, value, change, isUp }) => {
  return (
    <div className="bg-gradient-to-b from-[#013528] to-[#039B75] rounded-2xl shadow p-4 flex justify-between gap-2">
      <div className="flex flex-col gap-1">
      <span className="text-light text-sm">{title}</span>
      <span className="text-2xl font-bold text-light">{value.toLocaleString()}</span>
      </div>
      <div className={`flex flex-col text-sm font-medium ${isUp ? "text-green-600" : "text-red-600"}`}>
        {isUp ? <ArrowUpRight className="w-8 h-8" /> : <ArrowDownRight className="w-8 h-8" />}
        {change}
      </div>
    </div>
  );
};

export default StatsCard;
