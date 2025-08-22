import React, { useState } from "react";
import CategoryDropdown from "../courses/CategoryDropdown";
import CourseCard from "../courses/CourseCard";
import { coursesData } from "../../data/courseData";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "frontend",
    "backend",
    "mobile",
    "system-design",
    "project-management",
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <section id="courses" className="py-12 md:px-16 px-8">
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h2 className="text-3xl font-bold">
          Popular Topics <br /> Just For You!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CategoryDropdown
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={(cat) => setSelectedCategory(cat)}
          />
          <button className="bg-accent text-primary px-12 py-3 rounded-md">
            View All
          </button>
        </div>
      </div>

      <hr className="my-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        {filteredCourses.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-8">
            No courses found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
