import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SecondaryButton from "../../components/ui/SecondaryButton";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";
import MarkdownRenderer from "../../utils/MarkdownRenderer";
import CourseChapters from "../../components/courses/CourseChapter";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import StudyCase from "./StudyCase";

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentId = String(chapterId);
  const { data, isLoading } = useGetUserCourse();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const chapters = data.course.chapters || [];
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
      navigate(`/chapter/${nextChapter.id}`);
    }
  };

  const handlePrevChapter = () => {
    if (prevChapter) {
      navigate(`/chapter/${prevChapter.id}`);
    }
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-screen px-4 md:px-12 pt-24 relative">
      <div className="md:col-span-2 overflow-y-auto pr-0 md:pr-4">
        <h1 className="text-2xl font-bold mb-4">{chapter.title}</h1>
        <p className="text-gray-600 mb-4 text-justify">{chapter.description}</p>
        {chapter.content && (
          <div className="text-gray-700 text-justify leading-relaxed">
            <MarkdownRenderer content={content} />
          </div>
        )}
      </div>

      <div className="fixed right-0 px-4 py-12 mt-12 hidden md:block md:col-span-1 overflow-y-auto border-l">
        <CourseChapters chapters={chapters} />
        <div className="mt-4 md:col-span-3 flex justify-between md:static fixed bottom-0 left-0 w-full md:bg-transparent p-4 md:p-0 shadow md:shadow-none">
          {prevChapter && (
            <SecondaryButton
              children="Previous Chapter"
              onclick={handlePrevChapter}
            />
          )}
          {nextChapter && (
            <SecondaryButton
              children="Next Chapter"
              onclick={handleNextChapter}
            />
          )}
        </div>
      </div>

      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed top-20 right-4 z-50 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg"
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
          <CourseChapters chapters={chapters} />
          <div className="mt-4 md:col-span-3 flex justify-between md:static fixed bottom-0 left-0 w-full md:bg-transparent p-4 md:p-0 shadow md:shadow-none">
            {prevChapter && (
              <SecondaryButton
                children="Previous Chapter"
                onclick={handlePrevChapter}
              />
            )}
            {nextChapter && (
              <SecondaryButton
                children="Next Chapter"
                onclick={handleNextChapter}
              />
            )}
          </div>
        </div>
      </aside>
    </main>
  );
}
