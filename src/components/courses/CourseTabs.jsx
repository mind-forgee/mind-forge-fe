import { useState } from "react";
import courseApiMock from "../../data/courseApiMock";

export default function CourseTabs() {
  const { tabs, longDescription } = courseApiMock.data;
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className=" rounded-lg shadow w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 text-sm font-medium">
        {tabs.slice(0, 5).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-9 text-center rounded-t-lg border  ${
              activeTab === tab.id
                ? "border-b-2 bg-secondary text-light"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>


      <div className="p-4 text-gray-800 bg-white text-sm">
        {activeTab === "overview" && (
          <>
            <p className="leading-relaxed">{longDescription}</p>
          </>
        )}

        {activeTab !== "overview" && (
          <p className="text-gray-500">Content for "{activeTab}" tab here...</p>
        )}
      </div>
    </div>
  );
}
