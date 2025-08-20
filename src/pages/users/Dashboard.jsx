import CourseChapters from "../../components/courses/CourseChapter";
import CourseProgress from "../../components/courses/CourseProgress";
import Hero from "../../components/courses/Hero";
import CourseTabs from '../../components/courses/CourseTabs'
import { useGetUserCourse } from "../../hooks/useGetUserCourse";
import SecondaryButton from "../../components/ui/SecondaryButton";
import LoadingSpinner from "../../components/ui/LoadingSpinner";


const Dashboard = () => {
    const { data, isLoading } = useGetUserCourse();
console.log(data)
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const { course } = data;
  const chapters = course.chapters || [];


  return (
    <>
      <section className='py-12 min-h-screen flex items-center md:px-12 mt-12'>
        <Hero course={course} />
      </section>
      <section className='py-12 min-h-screen flex items-center md:px-12 mt-16'>
       <CourseTabs course={course}/>
    </section>
      <section className='py-12 min-h-screen md:px-12 px-4'>
        <h1 className='text-4xl font-semibold mb-4'>Chapters</h1>
        <CourseChapters chapters={chapters} />

        <div className="mt-4">
          <SecondaryButton children={"Start Learning"}/>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
