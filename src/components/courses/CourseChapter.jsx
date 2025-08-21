import { useNavigate } from "react-router-dom";
import { Check, CheckCheck, Clock, PlayCircle } from "lucide-react";

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
            disabled={!chapter.is_active} 
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div
                className={`w-5 h-5 flex items-center justify-center border rounded ${
                  chapter.progress?.[0]?.is_done ? "bg-primary text-white" : ""
                }`}
              >
                {chapter.progress?.[0]?.is_done && <Check size={14} />}
              </div>


              {chapter.is_active ? (
                <span className="font-normal text-xs text-gray-800 truncate block min-w-0">
                  {chapter.title}
                </span>
              ) : (
                <div className="h-4 w-40 bg-gray-200 animate-pulse rounded" />
              )}
            </div>

            {/* Right side: clock kalau belum aktif, play kalau aktif */}
            <div className="flex items-center gap-2 shrink-0">
              {chapter.is_active ? (
                <>
                  <span className="text-green-500 text-sm">
                    <CheckCheck />
                  </span>
                </>
              ) : (
                <>
                  <Clock size={16} className="text-accent" />
                  <span className="text-gray-400 text-sm">Generating...</span>
                </>
              )}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
