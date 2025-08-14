import React from "react";
import { Grid, Search, PlusCircle } from "lucide-react";

export default function ProgressBar({ currentStep }) {
  const steps = [
    { id: 1, icon: <Grid size={20} /> },
    { id: 2, icon: <Search size={20} /> },
    { id: 3, icon: <PlusCircle size={20} /> },
  ];

  return (
    <div className="flex items-center  gap-4 mb-6">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full border-1 transition-colors duration-300 ${
              currentStep >= step.id
                ? "bg-green-500 border-green-500 text-white"
                : "bg-white border-gray-400 text-green-500"
            }`}
          >
            {step.icon}
          </div>
          {index < steps.length - 1 && (
            <hr
              className={`border w-32 transition-colors duration-300 ${
                currentStep > step.id ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
