import React from "react";
import { benefits } from "../../data/benefits";

const Service = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col py-16 bg-dark text-light px-6 md:px-16">
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight text-center mb-12">
          Benefits of Using <br /> MindForge
        </h1>

        <div className="grid gap-9 md:grid-cols-3 mt-16 md:gap-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-light text-dark  shadow-lg px-6 md:px-10 py-11 flex flex-col space-y-4"
            >
              <img
                src={benefit.logo}
                alt={benefit.title}
                className="w-12 h-12"
              />

              <h3 className="text-lg md:text-2xl font-semibold">
                {benefit.title}
              </h3>

              <p className="text-sm md:text-base text-primary text-justify">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-accent h-[42vh] py-12 grid grid-cols-1 md:grid-cols-2 justify-center px-6 md:px-16 gap-6">
        <div className="md:w-1/2">
          <h1 className="text-6xl md:text-8xl font-normal">21.000+</h1>
          <p>Registered</p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-6xl md:text-8xl font-normal">150+</h1>
          <p>Courses</p>
        </div>
      </div>
    </>
  );
};

export default Service;
