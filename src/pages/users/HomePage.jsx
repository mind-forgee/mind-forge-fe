import React from 'react'
import CourseChapters from '../../components/courses/CourseChapter'
import Hero from '../../components/courses/Hero'

const HomePage = () => {
  return (
    <>
    <section className='py-12 min-h-screen flex items-center px-12 mt-16'>
       <Hero />
    </section>
    <section className='py-12 min-h-screen px-12'>
        <h1 className='text-4xl font-semibold mb-4'>Chapters</h1>
        <CourseChapters />
    </section>
    </>
  )
}

export default HomePage