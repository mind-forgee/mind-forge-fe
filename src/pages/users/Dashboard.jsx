import CourseChapters from "../../components/courses/CourseChapter";
import CourseProgress from "../../components/courses/CourseProgress";
import Hero from "../../components/courses/Hero";
// import CourseTabs from '../../components/courses/CourseTabs'
import { useGetUserChapters } from "../../hooks/useGetUserChapters";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";


const Dashboard = () => {
  const { data: course } = useGetUserCourse();
  const { data: chapters } = useGetUserChapters();
  console.log(chapters)

  return (
    <>
      <section className='py-12 min-h-screen flex items-center md:px-12 mt-16'>
        <Hero course={course} />
      </section>
      <section className='py-12 min-h-screen flex items-center md:px-12 mt-16'>
       {/* <CourseTabs /> */}
    </section>
      <section className='py-12 min-h-screen md:px-12 px-4'>
        <h1 className='text-4xl font-semibold mb-4'>Chapters</h1>
        <CourseChapters chapters={chapters} />
      </section>
    </>
  );
};

export default Dashboard;
