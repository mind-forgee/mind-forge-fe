import React, { useState } from "react";
import courseApiMock from "../../data/courseApiMock";
import { Check, Clock, SquarePlay } from "lucide-react";

export default function CourseChapters() {
  const { chapters, meta } = courseApiMock.data;
  const [openChapter, setOpenChapter] = useState(chapters[0]?.id || null);

  const toggleChapter = (id) => {
    setOpenChapter(openChapter === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="text-center mb-5 text-md text-green-500 font-medium">
          <span>{meta.progressPercentage}% Completed</span>
        </div>
       
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${meta.progressPercentage}%` }}
          ></div>
        </div>

      </div>

         <div className="flex items-center px-4 mb-4 gap-3">
            <div className="flex items-center gap-x-2">
                <SquarePlay size={14}/>
                <p className="text-sm">{meta.totalLectures} Lectures</p>
            </div>
            <div className="flex items-center gap-x-2">
                <Clock className="text-accent" size={14} />
                <p className="text-sm">{meta.totalDuration}</p>
            </div>
        </div>


      {chapters.map((chapter) => (
        <div key={chapter.id} className="border border-gray-200 rounded-md">
          <button
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100"
            onClick={() => toggleChapter(chapter.id)}
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`w-5 h-5 flex items-center justify-center ${
                  chapter.progress.percentage === 100
                    ? "bg-secondary"
                    : "border border-gray-300"
                }`}
              >
                {chapter.progress.percentage === 100 && (
                  <Check />
                )}
              </div>

              <span className="font-normal text-gray-800">
                {chapter.title}
              </span>
            </div>

            {/* Kanan: Duration */}
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="text-accent" size={14} />
              {chapter.totalDuration}
            </div>
          </button>
        </div>
      ))}

 
      <div className="mt-6">
        <button className="w-full bg-secondary hover:bg-primary text-white font-medium py-3 px-4 rounded-md transition">
          Start Learning
        </button>
      </div>
    </div>
  );
}
