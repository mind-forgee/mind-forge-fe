import { useNavigate } from "react-router-dom";
import { Check, Clock } from "lucide-react";

export default function CourseChapters({ chapters }) {
  const navigate = useNavigate();

  const goToChapterDetail = (chapterId) => {
    navigate(`/chapter/${chapterId}`);
  };

  return (
    <div className="w-full">
      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          className="border border-gray-200 overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50"
            onClick={() => goToChapterDetail(chapter.id)}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div
                className={`w-5 h-5 flex items-center justify-center border rounded ${
                  chapter.progress.at(0).is_done ? "bg-primary text-white" : ""
                }`}
              >
                {chapter.progress.at(0).is_done && <Check size={14} />}
              </div>

 
              <span className="font-normal text-xs text-gray-800 truncate block min-w-0">
                {chapter.title}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Clock size={16} className="text-accent" />
              <span className="text-gray-500 text-sm">{chapter.time}</span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
