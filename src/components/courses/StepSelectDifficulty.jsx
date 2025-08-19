/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function StepSelectDifficulty({ difficulty, setDifficulty }) {
  const options = ["beginner", "intermediate", "advanced"];
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-xl">
      <label className="block mb-2 font-medium text-white text-center">
        Select Difficulties
      </label>


      <div
        onClick={() => setOpen((prev) => !prev)}
        className="bg-transparent border border-white/20 rounded-lg p-3 text-white cursor-pointer flex items-center justify-between"
      >
        <span>{difficulty || "Difficulties"}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
          size={18}
        />
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
          
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-1 bg-white text-primary rounded-lg shadow-lg overflow-hidden z-10"
          >
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  setDifficulty(opt);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
