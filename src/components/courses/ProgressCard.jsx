export default function ProgressCard({ title, percentage }) {
  return (
    <div className="bg-secondary text-white rounded-lg p-4 shadow mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{title}</span>
        <span className="text-sm">{percentage}% Completed</span>
      </div>
      <div className="w-full bg-white/30 rounded-full h-1.5">
        <div
          className="bg-green-400 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
