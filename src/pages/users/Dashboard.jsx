import CourseChapters from "../../components/courses/CourseChapter";
import CourseProgress from "../../components/courses/CourseProgress";
import Hero from "../../components/courses/Hero";
// import CourseTabs from '../../components/courses/CourseTabs'
import courseData from "../../data/courseApiMock";

const Dashboard = () => {
  const chapters = courseData.chapters;

  const progressPercentage = Math.round(
    (chapters.filter((ch) => ch.isCompleted).length / chapters.length) * 100
  );

  return (
    <>
      <section className="py-12 min-h-screen flex items-center md:px-12 mt-16">
        <Hero />
      </section>
      {/* <section className='py-12 min-h-screen flex items-center md:px-12 mt-16'>
       <CourseTabs />
    </section> */}
      <section className="py-12 min-h-screen md:px-12 px-4">
        <h1 className="text-4xl font-semibold mb-4">Chapters</h1>
        <CourseProgress percentage={progressPercentage} />
        <CourseChapters chapters={chapters} />
      </section>
    </>
  );
};

export default Dashboard;
