import { useNavigate } from "react-router-dom";
import { Check, Clock } from "lucide-react";

export default function CourseChapters({ chapters }) {
  const navigate = useNavigate();

  const goToChapterDetail = (chapterId) => {
    navigate(`/chapter/${chapterId}`);
  };

  const progressPercentage = Math.round(
    (chapters.filter(ch => ch.isCompleted).length / chapters.length) * 100
  );

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="text-center mb-3 text-md text-green-500 font-medium">
          <span>{progressPercentage}% Completed</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {chapters.map((chapter, idx) => (
        <div
          key={idx}
          className="border border-gray-200 overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50"
            onClick={() => goToChapterDetail(chapter.id)} 
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`w-5 h-5 flex items-center justify-center border rounded ${
                  chapter.isCompleted  ? "bg-primary text-white" : ""
                }`}
              >
                {chapter.isCompleted && <Check size={14} />}
              </div>
              <span className="font-normal text-sm text-gray-800">
                {chapter.chapterName}
              </span>
            </div>
            <div className="flex items-center gap-2 ">
              <Clock size={16} className="text-accent"/>
              <span className="text-gray-500 text-sm">{chapter.time}</span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
