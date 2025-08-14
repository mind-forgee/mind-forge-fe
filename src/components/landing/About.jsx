import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center text-dark px-8 md:px-16 py-12 gap-8"
    >
      <div className="flex-1 flex  flex-col items-start justify-center space-y-6 text-center md:text-left">
        <div className="flex items-center w-full">
          <img src="/logo/logo.png" alt="Logo" className="w-24 h-24" />
          <h1 className="text-3xl md:text-4xl font-semibold ">
            MindForge is Innovation!
          </h1>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-justify ">
          MindForge is a learning platform built for developers who want to grow
          their skills and shape their careers in tech. Whether you’re a
          beginner taking your first steps into coding, an intermediate
          developer aiming to expand your expertise, or an advanced professional
          mastering specialized fields, MindForge offers structured learning
          paths, hands-on projects, and real-world challenges. With courses
          spanning Front-End, Back-End, AI Development, Product Management, and
          more, we combine flexibility, practicality, and career-focused
          guidance to help you learn, build, and thrive in today’s fast-paced
          digital world.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="/images/about.png"
          alt="Hero"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default About;
