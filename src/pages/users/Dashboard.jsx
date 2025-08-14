import React from 'react'
import CourseChapters from '../../components/courses/CourseChapter'
import Hero from '../../components/courses/Hero'
import CourseTabs from '../../components/courses/CourseTabs'

const Dashboard = () => {
  return (
    <>
    <section className='py-12 min-h-screen flex items-center md:px-12 mt-16'>
       <Hero />
    </section>
    <section className='py-12 min-h-screen flex items-center md:px-12 mt-16'>
       <CourseTabs />
    </section>
    <section className='py-12 min-h-screen md:px-12 px-4'>
        <h1 className='text-4xl font-semibold mb-4'>Chapters</h1>
        <CourseChapters />
    </section>
    </>
  )
}

export default Dashboard