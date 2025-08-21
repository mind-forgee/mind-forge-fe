import { ArrowLeft, Search, Settings } from "lucide-react";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";
import { difficultyIcons } from "../../config/difficultyIcon.jsx";

const ChapterNavbar = () => {
  const { data: course } = useGetUserCourse();
  console.log(course);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-secondary text-white px-4 py-6 shadow-md">
      <div className="flex items-center gap-2">
        <a href="/dashboard/course">
          <ArrowLeft className="w-5 h-5 cursor-pointer" />
        </a>
        <span className="text-sm font-medium truncate max-w-[220px]">
          {course?.course.title || "Loading..."}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-gray-100/20">
          {difficultyIcons[course?.course.difficulty]}
          <span className="capitalize">{course?.course.difficulty}</span>
        </span>
      </div>
    </nav>
  );
};

export default ChapterNavbar;
