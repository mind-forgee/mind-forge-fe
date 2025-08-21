import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";
import MarkdownRenderer from "../../utils/MarkdownRenderer";
import CourseChapters from "../../components/courses/CourseChapter";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import StudyCase from "./StudyCase";
import useCompleteChapter from "../../hooks/useCompleteChapter";
import ProgressCard from "../../components/courses/ProgressCard";
import { useChapterProgress } from "../../hooks/useChapterProgress";
import ChapterContent from "../../components/chapter/ChapterContent";
import ChapterNavigation from "../../components/chapter/ChapterNavigation";

export default function ChapterDetail() {
  const contentRef = useRef(null);
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { handleCompleteChapter, isPending } = useCompleteChapter();

  const currentId = String(chapterId);
  const { data, isLoading } = useGetUserCourse();

  // selalu punya default [] supaya hook tetap jalan
  const chapters = data?.course?.chapters || [];
  const { percentage } = useChapterProgress(chapters);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const chapter = chapters.find((c) => String(c.id) === currentId);
  const currentIndex = chapters.findIndex((c) => String(c.id) === currentId);
  const nextChapter = chapters[currentIndex + 1];
  const prevChapter = chapters[currentIndex - 1];

  const content = chapter.content || "";
  if (chapter.is_study_case) {
    return (
      <StudyCase
        title={chapter.title}
        description={chapter.description}
        content={<MarkdownRenderer content={content} />}
      />
    );
  }

  const handleNextChapter = () => {
    if (nextChapter) {
      handleCompleteChapter(chapter.id, {
        onSuccess: () => {
          navigate(`/chapter/${nextChapter.id}`);
        },
      });
    }
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrevChapter = () => {
    if (prevChapter) {
      navigate(`/chapter/${prevChapter.id}`);
    }
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 h-screen px-4 md:px-12 pt-24 relative">
      <ChapterContent chapter={chapter} contentRef={contentRef} />
      <div className="hidden md:block md:col-span-1 border-l pl-4">
        <ProgressCard title="Course Progress" percentage={percentage} />
        <CourseChapters chapters={chapters} />
        <ChapterNavigation
          prevChapter={prevChapter}
          nextChapter={nextChapter}
          isPending={isPending}
          onPrev={handlePrevChapter}
          onNext={handleNextChapter}
        />
      </div>

      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed top-20 right-4 z-50 bg-secondary text-white px-3 py-2 rounded-lg shadow-lg"
      >
        <Menu size={20} />
      </button>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Chapters</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          <ProgressCard title="Course Progress" percentage={percentage} />
          <CourseChapters chapters={chapters} />
          <ChapterNavigation
            prevChapter={prevChapter}
            nextChapter={nextChapter}
            isPending={isPending}
            onPrev={handlePrevChapter}
            onNext={handleNextChapter}
          />
        </div>
      </aside>
    </main>
  );
}
