import { Outlet, useNavigate, useParams } from "react-router-dom";
import ChapterNavbar from "../components/courses/ChapterNavbar";
import { useChapterProgress } from "../hooks/useChapterProgress";
import useCompleteChapter from "../hooks/useCompleteChapter";
import { useMemo, useRef, useState } from "react";
import { useGetUserCourse } from "../hooks/useGetUserCourse";
import ProgressCard from "../components/courses/ProgressCard";
import CourseChapters from "../components/courses/CourseChapter";
import ChapterNavigation from "../components/chapter/ChapterNavigation";
import { Menu, X } from "lucide-react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function ChapterLayout() {
  const { data, isLoading } = useGetUserCourse();
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const contentRef = useRef(null);

  const chapters = data?.course?.chapters || [];
  const { percentage } = useChapterProgress(chapters);
  const { handleCompleteChapter, isPending } = useCompleteChapter();

  const { chapter, currentIndex, prevChapter, nextChapter } = useMemo(() => {
    const idx = chapters.findIndex((c) => String(c.id) === String(chapterId));
    return {
      chapter: idx >= 0 ? chapters[idx] : null,
      currentIndex: idx,
      prevChapter: idx > 0 ? chapters[idx - 1] : null,
      nextChapter: idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : null,
    };
  }, [chapters, chapterId]);

  const scrollTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onPrev = () => {
    if (prevChapter) {
      navigate(`/chapter/${prevChapter.id}`);
      scrollTop();
    }
  };

  const onNext = () => {
    if (!chapter || !nextChapter) return;
    handleCompleteChapter(chapter.id, {
      onSuccess: () => {
        navigate(`/chapter/${nextChapter.id}`);
        scrollTop();
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!chapters.length) {
    return (
      <main className="px-4 md:px-12 pt-20">
        <ChapterNavbar />
        <div className="py-10 text-center text-gray-600">
          Tidak ada chapter pada course ini.
        </div>
      </main>
    );
  }

  if (!chapter || currentIndex < 0) {
    return (
      <main className="px-4 md:px-12 pt-20">
        <ChapterNavbar />
        <div className="py-10 text-center text-gray-600">
          Chapter tidak ditemukan.
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 md:px-12 pt-20 h-screen flex flex-col relative">
      <ChapterNavbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 overflow-hidden">
        <div ref={contentRef} className="col-span-2 overflow-y-auto">
          <Outlet
            context={{
              chapters,
              chapter,
              percentage,
              prevChapter,
              nextChapter,
              onPrev,
              onNext,
              isPending,
              contentRef,
            }}
          />
        </div>

        <aside className="hidden md:block col-span-1 border-l pl-4 overflow-y-auto">
          <ProgressCard title="Course Progress" percentage={percentage} />
          <CourseChapters chapters={chapters} />
          <ChapterNavigation
            prevChapter={prevChapter}
            nextChapter={nextChapter}
            onPrev={onPrev}
            onNext={onNext}
            isPending={isPending}
          />
        </aside>
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
          <button onClick={() => setIsSidebarOpen(false)} className="text-gray-600">
            <X size={20} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          <ProgressCard title="Course Progress" percentage={percentage} />
          <CourseChapters chapters={chapters} />
          <ChapterNavigation
            prevChapter={prevChapter}
            nextChapter={nextChapter}
            onPrev={() => {
              setIsSidebarOpen(false);
              onPrev();
            }}
            onNext={() => {
              setIsSidebarOpen(false);
              onNext();
            }}
            isPending={isPending}
          />
        </div>
      </aside>
    </main>
  );
}