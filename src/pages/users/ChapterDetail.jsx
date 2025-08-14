import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TriggerChapterButton from "../../components/courses/TriggerChapterButton";
import courseData from "../../data/courseApiMock";
import SecondaryButton from "../../components/ui/SecondaryButton";

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const currentId = Number(chapterId);

  const chapter = courseData.chapters.find((c) => Number(c.id) === currentId);
  const [completed, setCompleted] = useState(false);

  if (!chapter) {
    return <p className="p-6">Chapter tidak ditemukan</p>;
  }

  const currentIndex = courseData.chapters.findIndex((c) => c.id === currentId);
  const nextChapter = courseData.chapters[currentIndex + 1] || null;

  const handleNextChapter = () => {
    setCompleted(true);
    if (nextChapter) {
      navigate(`/chapter/${nextChapter.id}`);
    }
  };

  return (
    <div className="py-12 mt-12 md:px-12 min-h-screen">
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
          onClick={handleNextChapter}
        />
      </div>
    </div>
  );
}
