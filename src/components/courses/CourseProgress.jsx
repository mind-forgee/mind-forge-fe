export default function CourseProgress({ percentage }) {
  return (
    <div className="mb-6">
      <div className="text-center mb-3 text-md text-green-500 font-medium">
        <span>{percentage}% Completed</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
