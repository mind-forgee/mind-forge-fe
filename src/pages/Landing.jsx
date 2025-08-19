import React from 'react'
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Courses from '../components/landing/Courses';
import Faq from '../components/landing/Faq';
import Blog from '../components/landing/Blog';
import Service from '../components/landing/Service';
import Review from '../components/landing/Review';
import Signup from '../components/landing/Signup';

const Landing = () => {
  return (
    <main>
      <Hero />
      <Service />
      <About />
      <Courses />
      <Review />
      <Faq />
      <Signup />
      <Blog />
    </main>
  )
}

export default Landing