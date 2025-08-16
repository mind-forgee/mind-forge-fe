import { useNavigate, useParams } from "react-router-dom";
import courseData from "../../data/courseApiMock";
import SecondaryButton from "../../components/ui/SecondaryButton";
import CourseChapters from "../../components/courses/CourseChapter";
import ProgressCard from "../../components/courses/ProgressCard";

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const currentId = Number(chapterId);

  const chapters = courseData.chapters;
  const chapter = chapters.find((c) => Number(c.id) === currentId);


  const currentIndex = courseData.chapters.findIndex((c) => c.id === currentId);
  const nextChapter = courseData.chapters[currentIndex + 1] || null;
    const progressPercentage = Math.round(
    (chapters.filter((ch) => ch.isCompleted).length / chapters.length) * 100
  );

  const handleNextChapter = () => {
    if (nextChapter) {
      navigate(`/chapter/${nextChapter.id}`);
    }
  };

  return (
    <main className="py-12 mt-12 md:px-12 px-8 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">{chapter.chapterName}</h1>
        <p className="text-gray-600 mb-4 text-justify">{chapter.description}</p>
        <ul className="list-disc list-inside mb-6 text-justify">
          {chapter.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="mt-4">
          <SecondaryButton
            children={"Next Chapter"}
            onclick={handleNextChapter}
          />
        </div>
      </div>

      <div className="md:col-span-1">
        <ProgressCard title={"Course Content"} percentage={progressPercentage}/>
        <CourseChapters chapters={courseData.chapters} />
      </div>
    </main>
  );
}
