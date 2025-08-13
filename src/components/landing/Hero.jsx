import React from "react";
import AccentButton from "../ui/AccentButton";

const Hero = () => {
  return (
    <section className="flex bg-secondary text-light min-h-screen flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 md:py-20">
      <div className="flex flex-col gap-6 text-center md:text-left w-full md:w-1/2">
        <h1 className="text-2xl md:text-5xl font-bold">
          #ForgeYourMindandSkills
        </h1>
        <p className=" max-w-lg mx-auto md:mx-0 text-justify">
          Master the skills that power today’s tech industry. From Front-End to Back-End, AI to Product Management, MindForge gives you hands-on lessons, interactive projects, and guided career paths for beginners, pros, and everyone in between. Forge your path. Build something extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
         <AccentButton children={"Our Course"}/>
          <button className=" px-6 py-3 rounded-lg w-full sm:w-auto">
            Register Now!
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0 md:mb-0">
        <img
          src="images/hero.png"
          alt="Hero"
          className="w-3/4 max-w-xs md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
