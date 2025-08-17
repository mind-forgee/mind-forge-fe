import { useNavigate, useParams } from "react-router-dom";
import SecondaryButton from "../../components/ui/SecondaryButton";
import CourseChapters from "../../components/courses/CourseChapter";
import ProgressCard from "../../components/courses/ProgressCard";
import { useGetUserChapters } from "../../hooks/useGetUserChapters";
import ReactMarkdown from "react-markdown";

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const currentId = String(chapterId);
  const { data: userChapters } = useGetUserChapters();
  const chapter = userChapters.find((c) => String(c.id) === currentId);
  const currentIndex = userChapters.findIndex((c) => String(c.id) === currentId);
  const nextChapter = userChapters[currentIndex + 1];



  const handleNextChapter = () => {
    if (nextChapter) {
      navigate(`/chapter/${nextChapter.id}`);
    }
  };

  return (
    <main className=" py-12 mt-12 md:px-12 px-8 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">{chapter.chapter_name}</h1>
        <p className="text-gray-600 mb-4 text-justify">{chapter.description}</p>
        {chapter.content_json?.markdown && (
          <p className="text-gray-700 text-justify">
            <ReactMarkdown>{chapter.content_json.markdown}</ReactMarkdown>
          </p>
        )}


        <div className="mt-4">
          {nextChapter && (
            <SecondaryButton
              children={"Next Chapter"}
              onclick={handleNextChapter}
            />
          )}
        </div>
      </div>

      <div className="md:col-span-1">
        {/* <ProgressCard title={"Course Content"} percentage={progressPercentage} /> */}
        <CourseChapters chapters={userChapters} />
      </div>
    </main>
  );
}
