import { useNavigate, useParams } from "react-router-dom";
import SecondaryButton from "../../components/ui/SecondaryButton";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";
import MarkdownRenderer from "../../utils/MarkdownRenderer";
import CourseChapters from "../../components/courses/CourseChapter";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import StudyCase from "./StudyCase";

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const currentId = String(chapterId);
  const { data, isLoading } = useGetUserCourse();

    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      )
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
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-4rem)] px-8 md:px-12 pt-24 mb-24 ">
      <div className="md:col-span-2 overflow-y-auto pr-4">
        <h1 className="text-2xl font-bold mb-4">{chapter.title}</h1>
        <p className="text-gray-600 mb-4 text-justify">{chapter.description}</p>
        {chapter.content && (
          <div className="text-gray-700 text-justify">
            <MarkdownRenderer content={content} />
          </div>
        )}
      </div>

      {/* RIGHT COLUMN (SIDEBAR) */}
      <div className="md:col-span-1 overflow-y-auto pl-2 border-l">
        <CourseChapters chapters={chapters} />
      </div>
      <div className="mt-4">
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
    </main>
  );
}
