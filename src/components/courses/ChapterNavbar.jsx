import { ArrowLeft, Search, Settings } from "lucide-react";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";

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
        <div className="flex items-center bg-gray-800 rounded-md px-2 py-1">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari Chapter"
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 ml-2 w-40"
          />
        </div>      
        <Settings className="w-5 h-5 cursor-pointer" />
      </div>
    </nav>
  );
};

export default ChapterNavbar;
