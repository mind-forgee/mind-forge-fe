/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "../courses/ProgressBar";
import StepChooseTopic from "../courses/StepChooseTopic";
import StepPreviewTopic from "../courses/StepPreviewTopic";
import StepSelectDifficulty from "../courses/StepSelectDifficulty";
import useCreateCourse from "../../hooks/useCreateCourse";
import { useGetAllTopics } from "../../hooks/useGetAllTopics";

export default function CourseForm({
  step,
  setStep,
  selectedTopic,
  setSelectedTopic,
}) {
  const { handleGetCourse, isPending } = useCreateCourse();
  const [difficulty, setDifficulty] = useState("");
  const { data: topics } = useGetAllTopics();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const canNext =
    (step === 1 && selectedTopic) ||
    (step === 2 && selectedTopic) ||
    (step === 3 && difficulty);

  const title =
    step === 1
      ? "Choose Your Course"
      : selectedTopic?.name || "Choose Your Course";

  const handleSubmit = () => {
    const payload = {
      topic_id: selectedTopic?.id,
      difficulty: difficulty,
    };

    handleGetCourse(payload);
  };

  return (
    <div className="max-w-8xl flex flex-col gap-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-green-500">{title}</h1>
        <ProgressBar currentStep={step} />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <StepChooseTopic
              topics={topics}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <StepPreviewTopic topic={selectedTopic} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <StepSelectDifficulty
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-x-7 mt-16">
        <button
          onClick={prevStep}
          disabled={step === 1 || isPending} // 🔥 disable jika di step 1 atau AI generate
          className="bg-accent px-12 py-2 rounded disabled:opacity-50 text-dark"
        >
          Previous
        </button>
        {step < 3 ? (
          <button
            onClick={nextStep}
            disabled={!canNext || isPending} // 🔥 juga lebih aman disable next saat pending
            className="bg-accent text-dark px-12 py-2 rounded disabled:opacity-50"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canNext || isPending}
            className="bg-accent text-dark px-12 py-2 rounded disabled:opacity-50"
          >
            {isPending ? "AI Generating Course..." : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}
