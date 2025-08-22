import CourseChapters from "../../components/courses/CourseChapter";
import CourseProgress from "../../components/courses/CourseProgress";
import Hero from "../../components/courses/Hero";
import CourseTabs from "../../components/courses/CourseTabs";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";
import SecondaryButton from "../../components/ui/SecondaryButton";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import {  Play } from "lucide-react";
import { difficultyIcons } from "../../config/difficultyIcon.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { data, isLoading } = useGetUserCourse();
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const { course } = data;
  const chapters = course.chapters || [];
  const total = chapters.length;
  const completed = chapters.filter((c) => c.progress.at(0)?.is_done).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const videoChaptersCount = data.course.chapters.filter(
    (chapter) => chapter.video_url && chapter.video_url.trim() !== ""
  ).length;

   const handleStartLearning = () => {
    if (chapters.length > 0) {
      const firstChapterId = chapters[0].id;
      navigate(`/chapter/${firstChapterId}`);
    }
  };

  return (
    <>
      <section className="py-12 min-h-screen flex flex-col gap-y-12 mb-12 items-center md:px-12 mt-12">
        <Hero course={course} />
        <CourseTabs course={course} />
      </section>
      <section className="py-12 min-h-screen md:px-12 px-4">
        <h1 className="text-4xl font-semibold mb-4">Chapters</h1>
        <CourseProgress percentage={percentage} />
        <div className="mb-4 grid grid-cols-2 gap-2">
          <p className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 border">
            <Play size={16} className="text-accent"/> {videoChaptersCount} video chapters
          </p>
          <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 border">
            {difficultyIcons[course.difficulty]}
            <span className="capitalize">{course.difficulty}</span>
          </span>
        </div>
        <CourseChapters chapters={chapters} />

        <div className="mt-4">
          <SecondaryButton children={"Start Learning"} onclick={handleStartLearning} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
