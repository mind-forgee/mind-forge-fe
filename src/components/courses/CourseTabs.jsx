// components/courses/CourseTabs.jsx
import { useState } from "react";

export default function CourseTabs({ course }) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "studycase", label: "Study Case" },
    { id: "chapters", label: "Chapters" },
  ];

  return (
    <div className="rounded-lg shadow w-full">
      {/* Tab buttons */}
      <div className="grid grid-cols-3 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-center rounded-t-lg border ${
              activeTab === tab.id
                ? "border-b-2 border-primary bg-secondary text-light"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4 text-gray-800 bg-white text-sm">
        {activeTab === "overview" && (
          <div>
            <h3 className="font-semibold text-lg mb-2">About this course</h3>
            <p className="leading-relaxed">{course.description}</p>
          </div>
        )}

        {activeTab === "studycase" && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Study Case</h3>
            <p className="leading-relaxed">{course.description}</p>
          </div>
        )}

        {activeTab === "chapters" && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Chapters</h3>
            <ul className="list-disc list-inside space-y-1">
              {course.chapters?.map((chapter, i) => (
                <li key={i}>{chapter.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
