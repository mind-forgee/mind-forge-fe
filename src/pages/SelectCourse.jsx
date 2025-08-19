/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CourseForm from "../components/form/CourseForm";
import { AnimatePresence, motion } from "framer-motion";

const SelectCourse = () => {
  const [step, setStep] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <main className="min-h-screen flex">

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

  
      <div className="hidden md:flex flex-[0.9] bg-secondary items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {step !== 1 && selectedTopic?.image && (
            <motion.img
              key={selectedTopic.image}
              src={selectedTopic.image}
              alt={selectedTopic.title}
              className="max-w-full max-h-full object-contain"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default SelectCourse;
