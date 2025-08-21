import { useState } from "react";
import CourseForm from "../../components/form/CourseForm";

const SelectCourse = () => {
  const [step, setStep] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(null);
  return (
    <main className="min-h-screen flex ">
      <div className="bg-secondary text-light flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <CourseForm
            step={step}
            setStep={setStep}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
          />
        </div>
      </div>

      <div className="hidden md:flex  flex-[0.9] bg-secondary items-end justify-end">
          <img
            src="/images/select-course.png"
            alt="Course illustration"
            className="max-w-full shadow-lg h-[100vh]"
          />
      </div>
    </main>
  );
};

export default SelectCourse;
